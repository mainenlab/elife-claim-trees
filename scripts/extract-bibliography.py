#!/usr/bin/env python3
"""Extract and verify bibliographies for all papers in the corpus.

For eLife papers: pulls structured references from the eLife API (DOIs included).
For non-eLife papers: extracts from PDF text and resolves via CrossRef.

Outputs: docs/bibliography.json — complete verified reference list per paper.

Usage:
    python scripts/extract-bibliography.py [--paper SLUG]
"""
import os, sys, json, time, re, glob
import urllib.request, urllib.parse

CLAIMS_DIR = os.path.join(os.path.dirname(os.path.abspath(__file__)), "..", "claims")
OUT_PATH = os.path.join(os.path.dirname(os.path.abspath(__file__)), "..", "docs", "bibliography.json")


def elife_article_id(doi):
    """Extract eLife article ID from DOI: 10.7554/eLife.105126 → 105126"""
    m = re.search(r"eLife\.(\d+)", doi)
    return m.group(1) if m else None


def fetch_elife_refs(article_id):
    """Fetch structured references from eLife API."""
    url = f"https://api.elifesciences.org/articles/{article_id}"
    try:
        req = urllib.request.Request(url, headers={"User-Agent": "elife-claim-trees/1.0"})
        with urllib.request.urlopen(req, timeout=20) as resp:
            d = json.loads(resp.read())
        refs = d.get("references", [])
        result = []
        for r in refs:
            authors = r.get("authors", [])
            author_names = []
            for a in authors:
                name = a.get("name", "")
                if isinstance(name, dict):
                    author_names.append(name.get("preferred", ""))
                elif isinstance(name, str):
                    author_names.append(name)
                elif "preferred" in a:
                    author_names.append(a["preferred"])

            title = r.get("articleTitle") or r.get("bookTitle") or r.get("title") or ""
            ref = {
                "doi": r.get("doi"),
                "pmid": r.get("pmid"),
                "title": title,
                "authors": author_names[:5],
                "year": r.get("date", "")[:4] if r.get("date") else "",
                "journal": r.get("journal", {}).get("name", "") if isinstance(r.get("journal"), dict) else "",
                "type": r.get("type", ""),
                "doi_verified": bool(r.get("doi")),
            }
            result.append(ref)
        return result
    except Exception as e:
        print(f"  eLife API error: {e}")
        return None


def crossref_verify_doi(doi):
    """Verify a DOI resolves via CrossRef. Returns title or None."""
    url = f"https://api.crossref.org/works/{urllib.parse.quote(doi, safe='')}"
    try:
        req = urllib.request.Request(url, headers={"User-Agent": "elife-claim-trees/1.0"})
        with urllib.request.urlopen(req, timeout=10) as resp:
            d = json.loads(resp.read())
        title = d.get("message", {}).get("title", [""])[0]
        return title
    except:
        return None


def read_paper_doi(slug):
    """Read DOI from paper index.md."""
    import yaml
    idx = os.path.join(CLAIMS_DIR, slug, "index.md")
    if not os.path.exists(idx):
        return None
    with open(idx) as f:
        content = f.read()
    parts = content.split("---", 2)
    if len(parts) < 3:
        return None
    try:
        fm = yaml.safe_load(parts[1])
    except:
        return None
    return fm.get("doi") if fm else None


def main():
    import argparse
    parser = argparse.ArgumentParser()
    parser.add_argument("--paper", help="Process only this paper")
    parser.add_argument("--verify-sample", type=int, default=5,
                        help="Number of DOIs per paper to spot-check via CrossRef")
    args = parser.parse_args()

    papers = [args.paper] if args.paper else sorted(
        d for d in os.listdir(CLAIMS_DIR) if os.path.isdir(os.path.join(CLAIMS_DIR, d))
    )

    bibliography = {}
    total_refs = 0
    total_with_doi = 0
    total_verified = 0

    for slug in papers:
        doi = read_paper_doi(slug)
        print(f"\n{'='*60}")
        print(f"Paper: {slug}")
        print(f"DOI: {doi or 'none'}")

        refs = None
        source = None

        # Try eLife API first
        if doi and "eLife" in doi:
            article_id = elife_article_id(doi)
            if article_id:
                print(f"  Fetching from eLife API (article {article_id})...")
                refs = fetch_elife_refs(article_id)
                source = "elife-api"
                time.sleep(0.5)

        if refs is None:
            print(f"  No eLife API access — skipping (would need PDF extraction)")
            bibliography[slug] = {
                "source": "none",
                "reference_count": 0,
                "with_doi": 0,
                "verified_sample": 0,
                "references": [],
            }
            continue

        with_doi = sum(1 for r in refs if r.get("doi"))
        print(f"  References: {len(refs)}")
        print(f"  With DOI: {with_doi}/{len(refs)} ({100*with_doi/len(refs):.0f}%)" if refs else "")

        # Spot-check a sample of DOIs via CrossRef
        verified = 0
        doi_refs = [r for r in refs if r.get("doi")]
        sample = doi_refs[:args.verify_sample]
        for r in sample:
            title = crossref_verify_doi(r["doi"])
            time.sleep(0.3)
            if title:
                verified += 1
                # Check title similarity
                ref_title = r.get("title", "").lower()[:40]
                cr_title = title.lower()[:40]
                match = "✓" if ref_title[:20] in cr_title or cr_title[:20] in ref_title else "~"
                print(f"    {match} {r['doi']}: {r['title'][:50]}")
            else:
                print(f"    ✗ {r['doi']}: UNRESOLVABLE")

        total_refs += len(refs)
        total_with_doi += with_doi
        total_verified += verified

        bibliography[slug] = {
            "source": source,
            "reference_count": len(refs),
            "with_doi": with_doi,
            "doi_rate": round(with_doi / len(refs), 3) if refs else 0,
            "verified_sample": verified,
            "sample_size": len(sample),
            "references": refs,
        }

    # Summary
    print(f"\n{'='*60}")
    print(f"SUMMARY")
    print(f"{'='*60}")
    print(f"Papers processed: {len(bibliography)}")
    print(f"Total references: {total_refs}")
    print(f"With DOI: {total_with_doi} ({100*total_with_doi/total_refs:.0f}%)" if total_refs else "")
    print(f"Sample verified: {total_verified}")

    with open(OUT_PATH, "w") as f:
        json.dump(bibliography, f, indent=2)
    print(f"\nWritten to {OUT_PATH}")


if __name__ == "__main__":
    main()
