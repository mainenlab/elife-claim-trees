#!/usr/bin/env python3
"""Verify literature-context claims by resolving DOIs via CrossRef.

For each literature-context claim, extracts the cited author/year from the
slug or claim text, queries CrossRef, and confirms the DOI points to the
claimed paper. Writes verified DOIs back to claim files.

Also checks all paper-level DOIs in index.md files.

Usage:
    python scripts/verify-references.py [--dry-run] [--paper SLUG]
"""
import os, sys, re, glob, time, json, argparse
import urllib.request
import urllib.parse

CLAIMS_DIR = os.path.join(os.path.dirname(os.path.abspath(__file__)), "..", "claims")

def crossref_lookup(query, rows=3):
    """Query CrossRef API for works matching a search string."""
    url = f"https://api.crossref.org/works?query={urllib.parse.quote(query)}&rows={rows}&mailto=zmainen@gmail.com"
    try:
        req = urllib.request.Request(url, headers={"User-Agent": "elife-claim-trees/1.0 (mailto:zmainen@gmail.com)"})
        with urllib.request.urlopen(req, timeout=15) as resp:
            data = json.loads(resp.read())
        return data.get("message", {}).get("items", [])
    except Exception as e:
        print(f"  CrossRef error: {e}")
        return []


def crossref_resolve_doi(doi):
    """Resolve a DOI via CrossRef and return metadata."""
    url = f"https://api.crossref.org/works/{urllib.parse.quote(doi, safe='')}"
    try:
        req = urllib.request.Request(url, headers={"User-Agent": "elife-claim-trees/1.0 (mailto:zmainen@gmail.com)"})
        with urllib.request.urlopen(req, timeout=15) as resp:
            data = json.loads(resp.read())
        return data.get("message", {})
    except Exception as e:
        print(f"  DOI resolve error: {e}")
        return None


def extract_reference_hint(slug, claim_text, body_text):
    """Extract author/year hints from slug, claim, or body text for CrossRef search."""
    hints = []
    combined = claim_text + " " + body_text

    # Best: "Author, Author & Author (YYYY, *Journal* vol:page)" or "Author et al. (YYYY)"
    # Look for full citation patterns with journal
    journal_refs = re.findall(
        r"([\w'-]+(?:\s+(?:et\s+al\.?|[\w'-]+))*?)\s*\((\d{4}),?\s*\*?([^)]+?)\*?\s*(\d+)?[:/]?(\d+)?\)",
        combined
    )
    for author_block, year, journal, vol, page in journal_refs:
        # Clean author: "Servan-Schreiber, Printz & Cohen" → use first author
        first_author = re.split(r'[,;&]', author_block)[0].strip()
        if first_author.lower() in ("the", "this", "that", "from", "with", "and", "for"):
            continue
        query = f"{first_author} {year} {journal.strip('* ')}"
        hints.append(query)

    # Next: "Author et al. (YYYY)" or "Author (YYYY)"
    simple_refs = re.findall(
        r"([\w'-]+)\s+(?:et\s+al\.?,?\s*)?\((\d{4})\)",
        combined
    )
    for author, year in simple_refs:
        if author.lower() not in ("the", "this", "that", "from", "with", "and", "for", "fig", "figure", "section"):
            hints.append(f"{author} {year}")

    # From slug: interprets-lottem-2016-additive-piriform → "Lottem 2016"
    m = re.match(r"interprets-(\w+)-(\d{4})", slug)
    if m:
        hints.append(f"{m.group(1).title()} {m.group(2)}")

    # Deduplicate while preserving order
    seen = set()
    unique = []
    for h in hints:
        key = h.lower()
        if key not in seen:
            seen.add(key)
            unique.append(h)
    return unique


def read_claim_file(path):
    """Read a claim markdown file, return (frontmatter_text, body, full_content)."""
    with open(path) as f:
        content = f.read()
    if not content.startswith("---"):
        return None, content, content
    parts = content.split("---", 2)
    if len(parts) < 3:
        return None, content, content
    return parts[1], parts[2].strip(), content


def format_authors(item):
    """Format CrossRef author list."""
    authors = item.get("author", [])
    if not authors:
        return "?"
    names = []
    for a in authors[:3]:
        family = a.get("family", "")
        given = a.get("given", "")
        names.append(f"{family}, {given[0]}." if given else family)
    result = "; ".join(names)
    if len(authors) > 3:
        result += f" et al. ({len(authors)} authors)"
    return result


def format_title(item):
    """Get title from CrossRef item."""
    titles = item.get("title", [])
    return titles[0] if titles else "?"


def verify_paper_dois(paper_slug=None):
    """Verify all paper-level DOIs in index.md files."""
    import yaml
    results = []

    dirs = [os.path.join(CLAIMS_DIR, paper_slug)] if paper_slug else sorted(glob.glob(f"{CLAIMS_DIR}/*"))

    for paper_dir in dirs:
        idx = os.path.join(paper_dir, "index.md")
        if not os.path.exists(idx):
            continue
        fm_text, body, _ = read_claim_file(idx)
        if not fm_text:
            continue
        fm = yaml.safe_load(fm_text) or {}
        doi = fm.get("doi")
        paper = os.path.basename(paper_dir)

        if not doi or doi == "None":
            results.append({"paper": paper, "doi": None, "status": "no-doi", "detail": ""})
            continue

        print(f"Checking paper DOI: {paper} → {doi}")
        meta = crossref_resolve_doi(doi)
        time.sleep(0.5)

        if not meta:
            results.append({"paper": paper, "doi": doi, "status": "unresolvable", "detail": "DOI did not resolve via CrossRef"})
            continue

        title = format_title(meta)
        authors = format_authors(meta)
        results.append({
            "paper": paper, "doi": doi, "status": "confirmed",
            "detail": f"{authors} — {title}"
        })

    return results


def verify_literature_context(paper_slug=None, dry_run=False):
    """Verify literature-context claims by resolving references via CrossRef."""
    import yaml
    results = []

    dirs = [os.path.join(CLAIMS_DIR, paper_slug)] if paper_slug else sorted(glob.glob(f"{CLAIMS_DIR}/*"))

    for paper_dir in dirs:
        paper = os.path.basename(paper_dir)
        for f in sorted(glob.glob(f"{paper_dir}/*.md")):
            if os.path.basename(f) == "index.md":
                continue
            fm_text, body, full = read_claim_file(f)
            if not fm_text:
                continue
            # Fix YAML quirk: bare `[]` on next line after a key
            fm_fixed = re.sub(r'^(\w[\w-]*):\n\[\]', r'\1: []', fm_text, flags=re.MULTILINE)
            try:
                fm = yaml.safe_load(fm_fixed) or {}
            except yaml.YAMLError:
                continue
            if fm.get("role") != "literature-context":
                continue

            slug = fm.get("slug", os.path.basename(f).replace(".md", ""))
            claim = fm.get("claim", "") or ""
            print(f"\n{'='*60}")
            print(f"Claim: {slug}")
            print(f"Paper: {paper}")
            print(f"Claim text: {claim[:100]}...")

            # Check if DOI already present
            assertions = fm.get("assertions", [])
            existing_doi = None
            if assertions and isinstance(assertions, list) and isinstance(assertions[0], dict):
                existing_doi = assertions[0].get("doi")
                if existing_doi and existing_doi != "~":
                    print(f"  Already has DOI: {existing_doi}")
                    meta = crossref_resolve_doi(existing_doi)
                    time.sleep(0.5)
                    if meta:
                        title = format_title(meta)
                        authors = format_authors(meta)
                        print(f"  ✓ Confirmed: {authors} — {title}")
                        results.append({"paper": paper, "slug": slug, "doi": existing_doi,
                                       "status": "confirmed", "title": title, "authors": authors})
                    else:
                        print(f"  ✗ DOI does not resolve!")
                        results.append({"paper": paper, "slug": slug, "doi": existing_doi,
                                       "status": "unresolvable", "title": "", "authors": ""})
                    continue

            # Extract search hints and query CrossRef
            hints = extract_reference_hint(slug, claim, body)
            if not hints:
                print(f"  No reference hints found")
                results.append({"paper": paper, "slug": slug, "doi": None,
                               "status": "no-hint", "title": "", "authors": ""})
                continue

            best_match = None
            for hint in hints[:3]:
                print(f"  Searching CrossRef: '{hint}'")
                items = crossref_lookup(hint)
                time.sleep(0.5)

                if items:
                    item = items[0]
                    doi = item.get("DOI", "")
                    title = format_title(item)
                    authors = format_authors(item)
                    score = item.get("score", 0)
                    print(f"  → {doi} (score={score:.1f})")
                    print(f"    {authors}")
                    print(f"    {title}")

                    if score > 15 and not best_match:
                        best_match = {"doi": doi, "title": title, "authors": authors, "score": score}

                    # Show top 3 for manual review
                    for i, alt in enumerate(items[1:3], 2):
                        alt_title = format_title(alt)
                        alt_doi = alt.get("DOI", "")
                        alt_score = alt.get("score", 0)
                        print(f"  alt {i}: {alt_doi} (score={alt_score:.1f}) — {alt_title[:60]}")

            if best_match:
                print(f"\n  BEST MATCH: {best_match['doi']}")
                print(f"  {best_match['authors']}")
                print(f"  {best_match['title']}")
                results.append({"paper": paper, "slug": slug, "doi": best_match["doi"],
                               "status": "found", "title": best_match["title"],
                               "authors": best_match["authors"], "score": best_match["score"]})
            else:
                print(f"\n  NO CONFIDENT MATCH")
                results.append({"paper": paper, "slug": slug, "doi": None,
                               "status": "not-found", "title": "", "authors": ""})

    return results


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("--paper", help="Verify only this paper slug")
    parser.add_argument("--dry-run", action="store_true", help="Don't modify files")
    parser.add_argument("--papers-only", action="store_true", help="Only check paper-level DOIs")
    args = parser.parse_args()

    print("=" * 60)
    print("PAPER-LEVEL DOI VERIFICATION")
    print("=" * 60)
    paper_results = verify_paper_dois(args.paper)
    for r in paper_results:
        status = "✓" if r["status"] == "confirmed" else "✗" if r["status"] == "unresolvable" else "—"
        print(f"  {status} {r['paper']:<45} {r.get('doi','—')}")
        if r["detail"]:
            print(f"    {r['detail'][:80]}")

    if args.papers_only:
        return

    print("\n" + "=" * 60)
    print("LITERATURE-CONTEXT REFERENCE VERIFICATION")
    print("=" * 60)
    lit_results = verify_literature_context(args.paper, args.dry_run)

    print("\n" + "=" * 60)
    print("SUMMARY")
    print("=" * 60)
    confirmed = [r for r in lit_results if r["status"] in ("confirmed", "found")]
    missing = [r for r in lit_results if r["status"] in ("not-found", "no-hint")]
    broken = [r for r in lit_results if r["status"] == "unresolvable"]
    print(f"  Confirmed/Found: {len(confirmed)}")
    print(f"  Not found:       {len(missing)}")
    print(f"  Broken DOI:      {len(broken)}")

    # Write results
    out_path = os.path.join(os.path.dirname(CLAIMS_DIR), "docs", "reference-verification.json")
    with open(out_path, "w") as f:
        json.dump({"papers": paper_results, "literature_context": lit_results}, f, indent=2)
    print(f"\nResults written to {out_path}")


if __name__ == "__main__":
    main()
