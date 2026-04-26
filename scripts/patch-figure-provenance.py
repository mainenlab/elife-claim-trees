#!/usr/bin/env python3
"""
Patch claim markdown files with figure URIs from eLife JATS XML.

For each eLife paper, downloads the JATS XML, extracts figure IDs and
their IIIF URIs, then patches each claim's frontmatter to add a
`figureUri` field based on the panel reference.

This fixes the provenance problem: figure URIs are captured from the
structured source (JATS XML) rather than guessed from filenames at
build time.

Usage:
  python scripts/patch-figure-provenance.py          # dry run
  python scripts/patch-figure-provenance.py --write  # write changes
"""
import argparse
import os
import re
import sys
import urllib.request
import xml.etree.ElementTree as ET

CLAIMS_DIR = os.path.join(os.path.dirname(__file__), '..', 'claims')

# eLife papers with DOIs
ELIFE_PAPERS = {
    'artiushin-2026-spider-atlas': '107732',
    'bouyeure-2026-fear-rsa': '105126',
    'ejdrup-2026-dopamine': '105214',
    'gadeke-2026-guilt-insula': '105391',
    'headley-2026-inhibitory-rhythms': '95562',
    'kammer-2026-foveal-feedback': '107053',
    'kolb-2026-igabasnfr2': '108319',
    'rozak-2026-neurovascular-dl': '95525',
    'scheller-2026-self-prioritization': '100932',
    'wengert-2026-kcnc1': '103784',
}

IIIF_BASE = 'https://iiif.elifesciences.org/lax'


def fetch_figure_map(article_id):
    """Download JATS XML and return {fig_id: iiif_url} mapping."""
    url = f"https://cdn.elifesciences.org/articles/{article_id}/elife-{article_id}-v1.xml"
    req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
    try:
        with urllib.request.urlopen(req, timeout=30) as resp:
            xml_data = resp.read()
    except Exception as e:
        print(f"  [warn] Failed to fetch JATS XML for {article_id}: {e}")
        return {}

    root = ET.fromstring(xml_data)
    figs = {}
    for fig in root.iter('fig'):
        fig_id = fig.get('id', '')
        graphic = fig.find('.//graphic')
        if graphic is None:
            continue
        href = graphic.get('{http://www.w3.org/1999/xlink}href', '')
        if not href:
            continue
        # Build IIIF URL: full resolution, JPEG
        iiif_url = f"{IIIF_BASE}/{article_id}%2F{href}/full/1500,/0/default.jpg"
        # Normalize fig_id: "fig3" -> 3, "fig3s1" -> "3-figsupp1"
        figs[fig_id] = iiif_url

        # Also map by figure number for panel matching
        m = re.match(r'fig(\d+)$', fig_id)
        if m:
            figs[f'fig{m.group(1)}'] = iiif_url
        # Supplements
        m = re.match(r'fig(\d+)s(\d+)$', fig_id)
        if m:
            figs[f'fig{m.group(1)}-figsupp{m.group(2)}'] = iiif_url

    return figs


def panel_to_fig_key(panel):
    """Extract figure key from panel string. 'fig3A' -> 'fig3', 'fig5—figure supplement 1' -> 'fig5s1'."""
    if not panel:
        return None
    first = panel.split(',')[0].strip().lower()

    # Supplement patterns
    m = re.match(r'fig(\d+)[-—\s]*(?:figure[-\s]*supplement[-\s]*|figsupp)(\d+)', first)
    if m:
        return f'fig{m.group(1)}s{m.group(2)}'

    # Plain figure
    m = re.match(r'fig(\d+)', first)
    if m:
        return f'fig{m.group(1)}'

    return None


def patch_claim_file(filepath, figure_map, write=False):
    """Add figureUri to claim frontmatter if panel matches a figure."""
    with open(filepath, 'r') as f:
        content = f.read()

    # Already has figureUri?
    if 'figureUri:' in content:
        return None

    # Extract panel from assertions
    panel_match = re.search(r'^\s+panel:\s*(.+)$', content, re.MULTILINE)
    if not panel_match:
        return None

    panel = panel_match.group(1).strip()
    fig_key = panel_to_fig_key(panel)
    if not fig_key or fig_key not in figure_map:
        return None

    uri = figure_map[fig_key]

    # Insert figureUri after the panel line in assertions
    new_content = content.replace(
        f'panel: {panel}',
        f'panel: {panel}\n    figureUri: {uri}',
        1
    )

    if new_content == content:
        return None

    if write:
        with open(filepath, 'w') as f:
            f.write(new_content)

    return (panel, fig_key, uri)


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument('--write', action='store_true', help='Write changes to files')
    args = parser.parse_args()

    total_patched = 0

    for paper_slug, article_id in sorted(ELIFE_PAPERS.items()):
        paper_dir = os.path.join(CLAIMS_DIR, paper_slug)
        if not os.path.isdir(paper_dir):
            print(f"[skip] {paper_slug} — no claims directory")
            continue

        print(f"\n{paper_slug} (eLife {article_id}):")
        fig_map = fetch_figure_map(article_id)
        if not fig_map:
            continue
        print(f"  {len(fig_map)} figures in JATS XML")

        patched = 0
        for fname in sorted(os.listdir(paper_dir)):
            if fname == 'index.md' or not fname.endswith('.md'):
                continue
            filepath = os.path.join(paper_dir, fname)
            result = patch_claim_file(filepath, fig_map, write=args.write)
            if result:
                panel, fig_key, uri = result
                slug = fname.replace('.md', '')
                print(f"  {'[write]' if args.write else '[dry]'} {slug}: {panel} -> {fig_key}")
                patched += 1

        total_patched += patched
        if patched == 0:
            print(f"  (no claims to patch)")

    print(f"\n{'Patched' if args.write else 'Would patch'} {total_patched} claims total")


if __name__ == '__main__':
    main()
