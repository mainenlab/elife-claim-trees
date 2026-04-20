# Claim graphs for eLife: a 12-paper prototype

*Briefing for editorial leadership, 21 April 2026*
*Zach Mainen, Mainen Lab, Champalimaud Centre for the Unknown*

Live prototype: **https://zmainen.github.io/elife-claim-trees/**

---

## 1. Corpus

Twelve papers. Ten are eLife papers from 2026, selected by Andy Collings and Damian Pattinson to span the journal's domain mix. The remaining two are the Meijer–Mainen serotonin manuscript: the v1 biorxiv preprint and the R1 revision currently under review at *Nature Neuroscience*, included for a within-paper comparison across revision.

| Paper slug | Domain |
|---|---|
| artiushin-2026-spider-atlas | atlas neuroanatomy |
| bouyeure-2026-fear-rsa | fMRI / RSA |
| ejdrup-2026-dopamine | computational modelling |
| gadeke-2026-guilt-insula | fMRI |
| headley-2026-inhibitory-rhythms | computational modelling |
| kammer-2026-foveal-feedback | psychophysics + fMRI |
| kolb-2026-igabasnfr2 | sensor engineering / structural biology |
| meijer-2025-serotonin-orthogonal | electrophysiology (preprint v1) |
| meijer-2025-serotonin-additive-r1 | electrophysiology (revision R1) |
| rozak-2026-neurovascular-dl | deep learning |
| scheller-2026-self-prioritization | psychophysics |
| wengert-2026-kcnc1 | wet-lab / channelopathy |

Total claims extracted: **303** files across 12 paper directories (one `index.md` per directory excluded from the count). Distribution by `role` field:

| Role | Count |
|---|---:|
| empirical | 139 |
| prediction | 46 |
| hypothesis | 31 |
| control | 27 |
| scope | 23 |
| methodological | 16 |
| synthesis | 9 |
| interpretation | 7 |
| literature-context | 5 |
| **Total** | **303** |

Per-paper claim counts: artiushin 17, bouyeure 30, ejdrup 23, gadeke 26, headley 25, kammer 22, kolb 20, meijer-orthogonal 23, meijer-additive-r1 41, rozak 23, scheller 22, wengert 31.

## 2. Schema

One markdown file per claim, stored at `claims/<paper-slug>/<claim-slug>.md`. Each file contains YAML frontmatter and an optional markdown body for prose elaboration.

**Required frontmatter:** `uuid` (UUID4, immutable), `slug`, `doi` (placeholder `~`), `claim` (one declarative sentence), `claim-type` (`empirical` / `interpretive` / `existence` / `synthesis` / `assessment`), `role`, `concepts`, `priority`, `epistemic` (`strong` / `moderate` / `weak` / `contested`), `assertions` (blocks: `paper-slug`, `doi`, `panel`, `analysis`, `dataset`, `dataset-doi`, `method`, `confidence`), `reproductions` (blocks: `agent`, `date`, `status`, `script`, `notes`, optional `figure` / `original_figure` / `original_script` / `script_execution` / `time_fast` / `time_full`).

**Edge-type fields** (optional top-level YAML keys, each a list of target slugs): `requires`, `supports`, `entails`, `derived-from`, `tests`, `refutes`, `rules-out`, `dissociates-with`, `validates`, `predicts` (reciprocal `confirms`), `interprets`, `enables-method`, `scopes`. Edges are propositions about logical structure, not citations: `A requires B` means A's validity depends on B's. The legacy `belongings:` block (`relation:` / `target:` pairs) is also accepted.

**Allowed `role` values** (8 markers, plus `literature-context` for cited prior claims): `empirical`, `prediction`, `hypothesis`, `synthesis`, `interpretation`, `methodological`, `control`, `scope`, `literature-context`.

**Allowed values for `status`** (per `reproductions[].status`):

| Status | Meaning |
|---|---|
| `verified` | Ran the analysis; output matches the assertion |
| `verified:partial` | Ran a subset; matched portion documented in notes |
| `failed:mismatch` | Ran; output does not match — discrepancy logged in notes |
| `unverified` | Not yet attempted (path exists) |
| `unverified:no-data` | Data deposit not accessible |
| `unverified:no-code` | Code not accessible |
| `unverified:code-error` | Code runs but errors before producing output |
| `unverified:compute-infeasible` | Code runs but exceeds available compute |

**Build pipeline.** `node site/scripts/build-data.js` reads `claims/*/*.md`, normalizes edge fields and assertion blocks, emits `site/src/data/claims.json`. An Astro static site consumes the JSON to render per-paper pages, per-claim views, and the React-Flow / Dagre dependency graph. Published to GitHub Pages.

## 3. Extraction procedure

1. **Per paper, one LLM agent run.** Claude Sonnet (via the Anthropic API, dispatched as a Claude Code subagent) given the published paper PDF and the methodology reference at `docs/method.md`.
2. **Panel-level extraction.** Agent walked the paper figure-by-figure and emitted one `.md` file per claim with frontmatter populated and a UUID4 generated.
3. **Edge population.** Edge fields (`requires`, `supports`, `tests`, etc.) populated in the same pass or in a follow-up enrichment pass.
4. **Per-paper agent time:** 5–30 minutes of compute. Not hours; not days.

**Status of the methodology document.** `docs/method.md` describes a disciplined process — three independent extraction agents (Results / Caption / Structure reader), 10 documented failure modes, and a mandatory human review gate at step 5. **In this prototype, the three-extraction discipline was not strictly enforced and the human review gate was intermittent rather than systematic.** The methodology document represents what a scaled-out version of this workflow would adopt; the prototype's actual workflow was prompt-guided LLM extraction with intermittent user review. The 303 claim files should be read as a draft annotation layer, not as adjudicated output.

## 4. Verification procedure

For each paper where data and code were accessible, a `verify.py` script was authored at `verification/<paper-slug>/verify.py`. Per-script procedure:

1. Clone the GitHub repo or download the public deposit (NeuroVault, OpenNeuro, RCSB PDB, G-Node, OSF, Dryad).
2. Construct the analysis environment (conda or pip; matplotlib version patches applied where API drift broke deposited code).
3. Execute targeted analyses: re-run the deposited notebook end-to-end, or load pre-computed intermediates and run the figure-generation step only.
4. Compare output to paper-reported numerics (point estimate, statistic, p-value, panel coordinates).
5. Write `PASS` / `FAIL` / `WARN` per claim to `verify.log` with reproduced and expected values.

Scripts present (7 of 12 papers): bouyeure, ejdrup, gadeke, headley, kolb, scheller, wengert. No verification script (5 of 12): artiushin (atlas — verification is image inspection, not execution), kammer, meijer-2025-serotonin-orthogonal, meijer-2025-serotonin-additive-r1, rozak.

## 5. Verification results

One row per paper. "Live execution" means the verify.py script invoked the deposited code (or a re-implementation) against deposited data within this prototype, in this session or a logged prior session. Numerics are extracted from the verify.log and from the in-script `notes:` blocks of the corresponding claim files.

| Paper | Script | Live execution | Deposit source | Outcome summary | Claims with execution backing | Total claims |
|---|---|---|---|---|---:|---:|
| artiushin-2026-spider-atlas | No | — | — | Atlas paper; not applicable | 0 | 17 |
| bouyeure-2026-fear-rsa | Yes | Yes | NeuroVault collection 23032 | Prior-threat anatomical mismatch documented (36 voxels at occipital pole; paper claims fear network) | 4 | 30 |
| ejdrup-2026-dopamine | Yes | Partial | github.com/Gether-Lab/striatal-dopamine-model | Vmax-sweep script timed out at 600 s; Figs 1/2 verified in prior session and labeled "from notes"; matplotlib 3.8 patch auto-applied | 3 | 23 |
| gadeke-2026-guilt-insula | Yes | Yes | OpenNeuro CSV + NIfTI | Logistic regression β = 0.032, p = 9.55e-68; R² = 0.184 vs paper 0.185; MNI peak [-28, 24, -4] exact match | 5 | 26 |
| headley-2026-inhibitory-rhythms | Yes | Yes | github.com/dbheadley/InhibOnDendComp | Firing-rate (control 5.5 → distal 0.2 Hz / somatic 0.7 Hz) and STA spike-AP timings reproduced from CSVs | 4 | 25 |
| kammer-2026-foveal-feedback | No | — | — | — | 0 | 22 |
| kolb-2026-igabasnfr2 | Yes | Yes | PDB 9D57 (RCSB) | Sensor-engineering paper; deposit metadata extracted (X-ray 2.60 Å, 6 chains, ABU + CRO ligands present) | 1 | 20 |
| meijer-2025-serotonin-orthogonal | No | — | — | — | 0 | 23 |
| meijer-2025-serotonin-additive-r1 | No | — | — | — | 0 | 41 |
| rozak-2026-neurovascular-dl | No | — | — | — | 0 | 23 |
| scheller-2026-self-prioritization | Yes | No | OSF (downloads failed) | All "PASS" entries are hard-coded values from prior session; figures generated from synthetic data | 0 | 22 |
| wengert-2026-kcnc1 | Yes | Yes | G-Node Excel | K⁺ current density WT = 1883 / KI = 757, p = 3.34e-5 reproduced cleanly. Maximal firing reproduced as WT = 207.8 / KI = 175.8, p = 0.166 (paper reports WT ≈ 201, KI ≈ 126, p < 0.001); flagged WARN | 4 | 31 |

Sums:
- 7 of 12 papers carry a `verify.py` script.
- ~27 specific quantitative claims were targeted.
- ~14 are backed by live execution against deposited data in this prototype.
- ~13 are affirmed via hard-coded values carried forward from prior sessions when live downloads failed or the re-run timed out.
- 2 documented mismatches: bouyeure (anatomical: occipital pole vs claimed fear-network) and wengert (quantitative: t-test direction correct, magnitude and significance off).

The remaining ~150 status labels in the corpus reflect agentic extraction judgments, not executed reproduction. They are draft annotations.

## 6. Author-side reproducibility — five concrete specifications

**Spec 1 — Claim table required at submission.**
Format: one CSV (or YAML) file alongside the manuscript. One row per figure panel. Columns: panel reference (e.g., "Fig 3B"); one-sentence claim (max 200 chars); analysis script filename; data file(s) with deposit DOI or path; key statistic (test, value, p, n). Author burden: 10–30 min per paper; information already exists in the author's head and methods/legends. Enables: targeted reviewer interrogation; downstream claim-graph construction; per-panel verification.

**Spec 2 — Per-panel data + code pointers required at acceptance.**
For each panel in the claim table: a relative path within the deposit pointing at (a) the data file consumed and (b) the script that generates the panel. Format: an additional CSV column or a JSON sidecar (e.g., `panels.json` in the deposit root). Closes the gap "available on request" leaves open. Enables: verification scripts written against a known schema rather than reverse-engineered.

**Spec 3 — Standard environment specification at submission.**
Required: one of (i) Dockerfile or Singularity recipe, (ii) `conda env export` lock file, (iii) `requirements.txt` with pinned versions, (iv) Snakemake/Nextflow pipeline with a containerized environment. For non-trivial computation (in this corpus: ejdrup, headley, rozak), at minimum (i) or (ii). Addresses the bulk of `unverified:code-error` cases (e.g., the matplotlib 3.8 API change in ejdrup, which was patchable but should not have required patching).

**Spec 4 — Pre-computed intermediate arrays deposited alongside raw data.**
For analyses where raw → final is compute-infeasible (long simulations, large training runs, MRI preprocessing): deposit intermediate arrays at a defined pipeline boundary (post-preprocessing for fMRI; post-simulation pre-statistics for computational papers). Format: HDF5 / NetCDF / `.npz` / NIfTI, with a manifest naming each intermediate, its source, and the consuming script. Marginal author cost: small — the arrays already exist on a laptop or HPC scratch. Converts most `unverified:compute-infeasible` cases (e.g., the 1.88 GB NEURON simulation in headley, the full Vmax sweep in ejdrup) into verifiable ones at the figure-generation step.

**Spec 5 — Reproducibility badges at the point of reading.**
Visible badge on the published article page and in the PDF. Taxonomy: **Gold** = full pipeline rerunnable end-to-end from raw data with provided environment. **Silver** = figure-generation rerunnable from pre-computed intermediates. **Bronze** = data and code deposited but not verified to run. **None** = not deposited. Assignment: at acceptance, an editorial verification step runs the deposit (or a figure sample) under the declared environment; status determines badge.

## 7. Synthesis layer — note only

A second pipeline reads the claim graph for a paper (excluding the abstract) and asks an LLM to reconstruct the paper's argument from the typed edges alone. The reconstruction is compared to the published abstract. Across the 12 papers this surfaced patterns about which edge types abstracts preferentially compress out — `rules-out` and `validates` are the most consistently scrubbed — but this is a side direction, not the project's primary contribution. Reconstructions are visible on each paper's demo page under "Argument from the graph."

## 8. Limits

- The methodology document describes a discipline this prototype did not strictly enforce. The 303 LLM-extracted claims are a draft to be reviewed, not adjudicated annotations.
- Of 7 verify scripts, ~14 of the targeted ~27 claims are backed by live execution. The rest are from-notes assertions or download failures.
- 5 of 12 papers have no verification script.
- The corpus was reverse-engineered from finished papers. Forward construction (claim graphs assembled by authors at submission) would look different and likely produce richer graphs.
- LLMs may inflate the apparent gap between published abstract and reconstructed argument by recovering connectives the schema does not explicitly encode. The diagnostic finding (which edges are scrubbed) is robust to this; the magnitude is not.
