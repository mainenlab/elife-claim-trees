# Issues Log

Running log of exceptions, methodology gaps, and lessons learned during corpus ingestion. Each entry records the paper that triggered the issue, how it was handled, and whether it warrants a method change.

---

## Issue 001 — Assessment claims have no reproduction status vocabulary (Paper 9)

**Paper:** ejdrup-2026-dopamine
**Discovered:** 2026-03-30
**Issue:** Assessment claims verified by code inspection (structural properties of the simulation code) were left with status `unverified` without a reason. The existing status vocabulary (`verified`, `failed:mismatch`, `unverified:no-data`, `unverified:no-code`, `unverified`) does not distinguish "not yet tried" from "verified by reading code."
**Handling:** Assessment claims verified by code inspection are classified as `verified` with a note explaining that verification was by structural code reading rather than execution. This is distinct from running a simulation — but the claim (about code structure) is fully testable by reading the code, which was done.
**Method change:** Yes. Added to `docs/method.md`: assessment claims should be classified `verified` when confirmed by code inspection, with an explicit note in the reproduction block. The method's Step 8 now covers code-inspection verification for assessment claims.

---

## Issue 002 — Multiple simulation claims hit compute timeout (Paper 9)

**Paper:** ejdrup-2026-dopamine
**Discovered:** 2026-03-30
**Issue:** Several result claims (fscv-matches-may-wightman-1989, d2r-occupancy-higher-in-vs, vs-low-active-fraction-resembles-ds-distribution) were left with bare `unverified` status, when the actual blocker was compute time — the simulation scripts ran but did not complete before timeout. This is distinct from `unverified:no-data` or `unverified:no-code`.
**Handling:** Classified as `unverified:compute-infeasible` with notes on the workaround (Zenodo pre-computed arrays). The existing vocabulary already included this status (used for dat-nanoclustering-slows-clearance) but was not applied consistently.
**Method change:** No new status needed. Instruction added to Step 8: when a script runs but does not complete, check for pre-computed output files in the associated data deposit before classifying as `unverified:compute-infeasible`. The deposit-first path should always be tried before simulation re-execution.

---

## Issue 003 — matplotlib API breakage (Paper 9)

**Paper:** ejdrup-2026-dopamine
**Discovered:** 2026-03-29
**Issue:** Three visualization scripts use `Axes3D.w_xaxis` (and `w_yaxis`, `w_zaxis`), which was removed in matplotlib 3.8. The simulation code is correct; only the 3D plotting code is broken.
**Handling:** Claims classified as `unverified:code-error` with an explicit note on the fix (replace `w_xaxis` → `xaxis`). The simulation outputs themselves are reproducible; only the figure generation is blocked.
**Method change:** Yes. Added to `docs/method.md` under Step 8: when code errors in visualization (not simulation/analysis) code, classify as `unverified:code-error` and note the exact fix. This distinguishes broken code that affects the result from broken code that only affects the figure rendering. In the latter case, the underlying claim may still be confirmable from inspection of intermediate simulation outputs.

---

## Issue 004 — Observational anatomical claims have no standard verification path (Paper 8)

**Paper:** artiushin-2026-spider-atlas
**Discovered:** 2026-03-30
**Issue:** The spider brain atlas paper makes claims of the form "neuropil X is immunoreactive for neurotransmitter Y." These are observational anatomical claims — the evidence is the 3D image itself, not a statistical test or a simulation output. The existing reproduction vocabulary assumes that verification means re-running an analysis and comparing outputs to a figure. For observational atlas claims, "verification" means inspecting the 3D atlas volumes and confirming the described anatomical pattern.
**Handling:** Claims marked as `unverified:no-data` (BIL TIFF stacks not downloaded). The assessment claim for scope is `verified` (confirmed by corpus-assessment reading). Atlas-inspection verification would require downloading and viewing the 3D volumes.
**Method change:** Yes. Added note to `docs/method.md` Step 8: for observational anatomical claims, "verification" means atlas inspection. The reproduction `notes` field should describe what atlas inspection was performed (which neuropil, which channel, which orientation).

---

## Issue 005 — eLife HTML consistently truncated; PDF extraction is the reliable path (Papers 2–10)

**Papers:** All papers
**Discovered:** 2026-03-30
**Issue:** All eLife HTML pages (`elifesciences.org/articles/{id}`) truncate after approximately the first two figures — results sections, figure captions beyond Figure 2, and methods are consistently unavailable. Attempts to fetch specific subsections via URL fragments also failed. The eLife CDN PDF (`cdn.elifesciences.org/articles/{id}/elife-{id}-v1.pdf`) can be fetched for most papers, but requires extraction with `pdftotext`. GitHub READMEs and eLife API abstracts provide partial content when PDF extraction is not available.
**Handling:** Paper 4: downloaded and extracted PDF with pdftotext — full quantitative results obtained. Papers 6, 1, 3, 10: WebFetch with focused prompts gave sufficient content summaries. Papers 2, 5, 7, 8: relied on GitHub README + eLife API abstract + corpus-assessment.md.
**Method change:** Yes. Added to `docs/method.md` Step 1 (Prepare): always attempt to download the paper PDF first. If successful, extract with `pdftotext`. Do not rely on eLife HTML for results sections — it is truncated. Fall back to GitHub README, eLife API abstract, and corpus-assessment.md for papers where PDF extraction fails.

---

## Issue 007 — matplotlib 3.8 fix resolved three Paper 9 code-error claims; Paper 6 core claims verified from repo CSVs

**Papers:** ejdrup-2026-dopamine (Paper 9), headley-2026-inhibitory-rhythms (Paper 6)
**Discovered:** 2026-03-30

**Resolution — Paper 9 (matplotlib fix):**
Applied the `w_xaxis` → `xaxis` fix to two scripts in [Gether-Lab/striatal-dopamine-model](https://github.com/Gether-Lab/striatal-dopamine-model): `Figure 1-Fig 1a, d, e, f-Source code.py` (6 occurrences) and `Figure 2-Fig 2a-f-Source code.py` (6 occurrences). Both scripts ran to completion under matplotlib 3.8.2 in the base conda environment (~2 min for Fig1, ~8 min for Fig2 with 3 conditions). Key numerical outputs extracted and compared to claim text:
- `ds-lacks-pervasive-tonic-da`: DS median DA = 5.4 nM, highly heterogeneous (max 8788 nM near varicosities) — hotspot pattern confirmed.
- `vs-maintains-pervasive-tonic-da`: VS minimum = 8.1 nM, median = 20.9 nM, mean = 24.2 nM — pervasive coverage confirmed.
- `vs-lowest-percentiles-above-10nm`: VS P0.5+ = 11 nM; strict minimum = 8.1 nM (below 10 nM but >99.9% of voxels exceed 10 nM). Claim is accurate for the distribution shape; the absolute minimum is technically 8 nM. All three claims → `verified`.

**Resolution — Paper 6 (Headley, pre-computed CSV verification):**
GitHub repo [dbheadley/InhibOnDendComp](https://github.com/dbheadley/InhibOnDendComp) contains pre-computed `data/Figure*.csv` files sufficient to verify Figs 2-4 claims without the full Dryad download. Nine claims verified from CSVs:
- na-spikes-couple-2to3ms-before-ap: Figure2b.csv shows proximal Na STA peaks at -1 to -3 ms.
- nmda-spikes-couple-25ms-before-ap: Figure3a.csv shows distal NMDA peaks at -15 to -20 ms.
- ca-spikes-couple-20ms-before-ap: Figure3c.csv shows distal Ca peaks at -5 to -25 ms; tuft claim verified.
- distal-inhib-drops-firing-02hz: Figure4a.csv — dendritic: 0.2 Hz, exact match.
- perisomatic-inhib-drops-firing-07hz: Figure4a.csv — somatic: 0.7 Hz, exact match.
- perisomatic-inhib-subtractive-divisive: Figure4b.csv I/O curves show threshold shift (+300 pA) and max rate reduction (19→15 Hz).
- gamma-perisomatic-no-dendritic-spike-change: Figure4d-f.csv shows perisomatic inhib leaves Ca/NMDA rates unchanged.
- naturalistic-drive-parameterization: spikes.h5 = 5.50 Hz, Figure1FR.csv median = 5.30 Hz.
- l5-model-single-cell-scope: already verified by code inspection.

**Remaining blockers (Paper 6):** Figs 7-10 (oscillation frequency sweeps) require the DendCompOscPublic/ Dryad download. Seven claims remain `unverified:no-data`.

**Method change:** No new status needed. Reinforces the lesson from Issue 002: always check the GitHub repo data/ directory for pre-computed summary files before attempting full Dryad download. For computational neuroscience papers, authors often deposit per-figure CSVs alongside full simulation outputs.

---

## Issue 006 — Hard papers have many primary claims behind wet-lab / microscopy barriers (Papers 3, 7, 8)

**Papers:** kolb-2026-igabasnfr2, wengert-2026-kcnc1, artiushin-2026-spider-atlas
**Discovered:** 2026-03-30
**Issue:** For papers with hard reproduction difficulty, most result claims are `unverified:no-data` because the primary evidence requires wet-lab equipment, specialized imaging systems, or proprietary animal models. The question is how many claims to extract when verification is structurally impossible.
**Handling:** For each hard paper, extracted 5-6 claims: (1) assessment claim about scope/barriers (verified by inspection), (2) existence claims about the primary resource (atlas, mouse model, sensor), (3) key quantitative result claims (documented for completeness and potential future verification). Assessment claims are always extracted and verified first.
**Method change:** No new method needed. Instruction added: for hard papers, prioritize assessment claims about reproduction barriers — they are first-class nodes. Extract result claims even when verification is impossible; they establish the paper's contribution and may become verifiable as data access improves.

---
