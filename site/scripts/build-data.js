#!/usr/bin/env node
// Reads all claim markdown files from ../claims/ and outputs src/data/claims.json
import { readFileSync, readdirSync, writeFileSync, mkdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import matter from 'gray-matter';

const __dirname = dirname(fileURLToPath(import.meta.url));
const claimsRoot = join(__dirname, '../../claims');
const outDir = join(__dirname, '../src/data');
const outFile = join(outDir, 'claims.json');

mkdirSync(outDir, { recursive: true });

const ASSESSMENT_SUFFIXES = ['-scope', '-assumed', '-unjustified', '-constraint', '-only', '-parameterization', '-initialization'];

function isAssessment(slug, fm) {
  if (fm['claim-type'] === 'assessment') return true;
  return ASSESSMENT_SUFFIXES.some(s => slug.endsWith(s));
}

function normalizeStatus(reproductions) {
  if (!reproductions || reproductions.length === 0) return 'unknown';
  // Take the most recent reproduction
  const last = reproductions[reproductions.length - 1];
  return last.status || 'unknown';
}

const papers = [];

for (const paperSlug of readdirSync(claimsRoot).sort()) {
  const paperDir = join(claimsRoot, paperSlug);
  const indexPath = join(paperDir, 'index.md');

  let paperMeta = {};
  try {
    const { data } = matter(readFileSync(indexPath, 'utf8'));
    paperMeta = data;
  } catch {
    continue;
  }

  const claims = [];

  for (const file of readdirSync(paperDir).sort()) {
    if (file === 'index.md' || !file.endsWith('.md')) continue;
    const slug = file.replace('.md', '');
    const raw = readFileSync(join(paperDir, file), 'utf8');
    // Fix a YAML quirk: `belongings:\n[]` must be `belongings: []`
    const fixed = raw.replace(/^(belongings|reproductions|assertions|concepts):\n\[\]/gm, '$1: []');
    let fm, content;
    try {
      ({ data: fm, content } = matter(fixed));
    } catch (e) {
      console.warn(`YAML parse error in ${file}:`, e.message);
      fm = {}; content = '';
    }

    const requires = (fm.belongings || [])
      .filter(b => b.relation === 'requires')
      .map(b => b.target);
    const supports = (fm.belongings || [])
      .filter(b => b.relation === 'supports')
      .map(b => b.target);

    const status = normalizeStatus(fm.reproductions);
    const notes = (fm.reproductions || []).map(r => r.notes).filter(Boolean).join('\n\n');

    claims.push({
      uuid: fm.uuid || null,
      slug,
      paper: paperSlug,
      panel: fm.assertions?.[0]?.panel || '',
      claim: (fm.claim || '').trim(),
      epistemic: fm.epistemic || 'unknown',
      status,
      'claim-type': fm['claim-type'] || 'empirical',
      isAssessment: isAssessment(slug, fm),
      requires,
      supports,
      notes: notes.trim(),
      dataset: fm.assertions?.[0]?.dataset || null,
      analysis: fm.assertions?.[0]?.analysis || null,
      method: fm.assertions?.[0]?.method || null,
      script: fm.assertions?.[0]?.script || null,
    });
  }

  // Count statuses
  const statusCounts = {};
  for (const c of claims) {
    statusCounts[c.status] = (statusCounts[c.status] || 0) + 1;
  }

  papers.push({
    slug: paperSlug,
    title: paperMeta.title || paperSlug,
    authors: paperMeta.authors || [],
    doi: paperMeta.doi || null,
    url: paperMeta.url || null,
    github: paperMeta.github || null,
    journal: paperMeta.journal || 'eLife',
    added: paperMeta.added || null,
    badge: paperMeta.badge || null,
    claimCount: claims.length,
    statusCounts,
    claims,
  });
}

const totalClaims = papers.reduce((sum, p) => sum + p.claims.length, 0);
const allStatuses = {};
for (const p of papers) {
  for (const [k, v] of Object.entries(p.statusCounts)) {
    allStatuses[k] = (allStatuses[k] || 0) + v;
  }
}

const out = { papers, totalClaims, statusCounts: allStatuses };
writeFileSync(outFile, JSON.stringify(out, null, 2));
console.log(`Written ${outFile}: ${papers.length} papers, ${totalClaims} claims`);
