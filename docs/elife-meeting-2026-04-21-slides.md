# Claim graphs for eLife
A 12-paper prototype
Zach Mainen · Champalimaud Centre for the Unknown · 21 April 2026

<!-- notes: Live prototype at https://zmainen.github.io/elife-claim-trees/. Two halves: a schema and procedure for decomposing papers into structured claims, and a verification layer that re-runs deposited analyses where data and code are accessible. The deck mirrors the briefing document section by section. -->

## Corpus

### 12 papers

- artiushin-2026-spider-atlas — atlas neuroanatomy
- bouyeure-2026-fear-rsa — fMRI / RSA
- ejdrup-2026-dopamine — computational modelling
- gadeke-2026-guilt-insula — fMRI
- headley-2026-inhibitory-rhythms — computational modelling
- kammer-2026-foveal-feedback — psychophysics + fMRI
- kolb-2026-igabasnfr2 — sensor engineering / structural biology
- meijer-2025-serotonin-orthogonal — electrophysiology (preprint v1)
- meijer-2025-serotonin-additive-r1 — electrophysiology (revision R1)
- rozak-2026-neurovascular-dl — deep learning
- scheller-2026-self-prioritization — psychophysics
- wengert-2026-kcnc1 — wet-lab / channelopathy

<!-- notes: Ten eLife papers from 2026, selected by Andy Collings and Damian Pattinson to span the journal's domain mix. Two additional papers are the Meijer-Mainen serotonin manuscript at v1 (biorxiv) and R1 (under review at Nature Neuroscience), included for a within-paper comparison across revision. -->

### 303 claims by role

- empirical — 139
- prediction — 46
- hypothesis — 31
- control — 27
- scope — 23
- methodological — 16
- synthesis — 9
- interpretation — 7
- literature-context — 5
- **Total — 303**

<!-- notes: Per-paper counts: artiushin 17, bouyeure 30, ejdrup 23, gadeke 26, headley 25, kammer 22, kolb 20, meijer-orthogonal 23, meijer-additive-r1 41, rozak 23, scheller 22, wengert 31. One claim file per markdown file under claims/<paper-slug>/; index.md per directory excluded from the count. -->

## Schema

### Claim file format

- One markdown file per claim at claims/<paper-slug>/<claim-slug>.md
- YAML frontmatter for structured fields
- Markdown body for optional prose elaboration
- Build pipeline: node site/scripts/build-data.js reads claims/*/*.md, normalizes edges, emits site/src/data/claims.json
- Astro static site renders per-paper pages, per-claim views, dependency graph (React-Flow / Dagre); published to GitHub Pages

<!-- notes: One file per claim is the durable unit. The JSON is derived; the markdown is canonical. -->

### Required frontmatter fields

- uuid — UUID4, immutable
- slug, doi, claim (one declarative sentence)
- claim-type — empirical / interpretive / existence / synthesis / assessment
- role, concepts, priority
- epistemic — strong / moderate / weak / contested
- assertions — blocks: paper-slug, doi, panel, analysis, dataset, dataset-doi, method, confidence
- reproductions — blocks: agent, date, status, script, notes (+ optional figure, original_figure, original_script, script_execution, time_fast, time_full)

<!-- notes: The assertion block grounds a claim to a panel and an analysis. The reproduction block records what an agent did with that grounding. Both are lists; multiple assertions and multiple reproduction attempts per claim are normal. -->

### Edge types

- requires — A's validity depends on B
- supports — B raises confidence in A
- entails — A logically implies B
- derived-from — A is computed from B
- tests — A is the test of B
- refutes — A would refute B
- rules-out — A eliminates alternative B
- dissociates-with — A and B doubly dissociate
- validates — A confirms instrument or method B
- predicts / confirms — A predicts B; B confirms A (reciprocal)
- interprets — A is the interpretation of B
- enables-method — A makes B technically possible
- scopes — A bounds the applicability of B

<!-- notes: 11 edge types (predicts/confirms is one reciprocal pair). Edges are propositions about logical structure, not citations. The legacy belongings: block (relation:/target: pairs) is also accepted by the build pipeline. -->

### Status vocabulary

- verified — ran the analysis; output matches the assertion
- verified:partial — ran a subset; matched portion documented in notes
- failed:mismatch — ran; output does not match; discrepancy logged in notes
- unverified — not yet attempted (path exists)
- unverified:no-data — data deposit not accessible
- unverified:no-code — code not accessible
- unverified:code-error — code runs but errors before producing output
- unverified:compute-infeasible — code runs but exceeds available compute

<!-- notes: Each status implies a different remedy. no-data is a deposit policy issue; code-error is a software fix; compute-infeasible calls for pre-computed intermediates; failed:mismatch is the editorially interesting case. -->

## Extraction

### Per paper

- One LLM agent run per paper (Claude Sonnet via Anthropic API, dispatched as a Claude Code subagent)
- Inputs: published PDF + methodology reference at docs/method.md
- Agent walks figure-by-figure and emits one .md file per claim with frontmatter populated and UUID4 generated
- Edge fields populated in the same pass or in a follow-up enrichment pass
- User reviews intermittently, not claim-by-claim

<!-- notes: The unit of LLM work is the paper, not the claim. The agent reads the whole paper and emits the claim files in a batch. Review by the user was opportunistic — sampling claims and edges, correcting where wrong — rather than systematic per-claim approval. -->

### Methodology document

- docs/method.md describes a disciplined procedure
- Three independent extraction agents — Results reader / Caption reader / Structure reader
- 10 documented failure modes (direction reversal, quantitative hallucination, wrong panel assignment, discussion contamination, etc.)
- Mandatory human review gate at step 5 — recommended practice
- This prototype did not strictly enforce the three-extraction discipline; review gate was intermittent

<!-- notes: The methodology document represents what a scaled-out version of this workflow would adopt. The prototype's actual workflow was prompt-guided LLM extraction with intermittent user review. The 303 claim files should be read as a draft annotation layer, not as adjudicated output. -->

### Cost

- 5–30 minutes of agent compute per paper
- Not hours; not days

<!-- notes: This is wall-clock LLM time, not human time. Human review time was a separate, smaller budget. -->

## Verification

### Approach

- One verify.py script per paper where data and code were accessible
- Clone GitHub repo or download deposit (NeuroVault, OpenNeuro, RCSB PDB, G-Node, OSF, Dryad)
- Construct analysis environment (conda or pip; matplotlib version patches where API drift broke deposited code)
- Execute targeted analyses — re-run notebook end-to-end, or load pre-computed intermediates and run figure-generation step only
- Compare output to paper-reported numerics (point estimate, statistic, p-value, panel coordinates)
- Write PASS / WARN / FAIL per claim to verify.log with reproduced and expected values

<!-- notes: One script per paper, not per claim. The script targets the panels with the most-cited or most-load-bearing numerics, not every claim. Where downloads failed mid-session, hard-coded values from prior sessions were carried forward and labeled as such. -->

### Per-paper verification — papers with scripts

- **bouyeure** — Yes / live / NeuroVault 23032 — anatomical mismatch documented (occipital pole, paper claims fear network); 4 of 30 claims with execution backing
- **ejdrup** — Yes / partial / Gether-Lab/striatal-dopamine-model — Vmax sweep timed out at 600 s; Figs 1/2 from notes; matplotlib 3.8 patch auto-applied; 3 of 23
- **gadeke** — Yes / live / OpenNeuro CSV + NIfTI — logistic β = 0.032, p = 9.55e-68; R² 0.184 vs paper 0.185; MNI peak [-28, 24, -4] exact; 5 of 26
- **headley** — Yes / live / dbheadley/InhibOnDendComp — firing-rate (control 5.5 → distal 0.2 Hz / somatic 0.7 Hz) and STA spike-AP timings reproduced from CSVs; 4 of 25
- **kolb** — Yes / live / PDB 9D57 (RCSB) — sensor paper; deposit metadata extracted (X-ray 2.60 Å, 6 chains, ABU + CRO ligands); 1 of 20
- **scheller** — Yes / no / OSF (downloads failed) — all PASS entries are hard-coded values from prior session; figures from synthetic data; 0 of 22 live
- **wengert** — Yes / live / G-Node Excel — K⁺ density WT = 1883 / KI = 757, p = 3.34e-5 reproduced; firing reproduced WT 207.8 / KI 175.8, p = 0.166 vs paper WT ≈ 201, KI ≈ 126, p < 0.001 — flagged WARN; 4 of 31

<!-- notes: Seven of the twelve papers carry a verify.py. Two interesting outcomes here: bouyeure produced an anatomical mismatch (deposit code runs cleanly, output points at occipital cortex rather than the fear network the paper reports), and wengert produced a quantitative WARN (direction correct, magnitude and significance off). Both are the kind of finding that is invisible without verification but actionable once surfaced. -->

### Per-paper verification — no script

- **artiushin** — atlas; verification is image inspection, not execution; 0 of 17
- **kammer** — no script; 0 of 22
- **meijer-2025-serotonin-orthogonal** — no script; 0 of 23
- **meijer-2025-serotonin-additive-r1** — no script; 0 of 41
- **rozak** — no script; 0 of 23

<!-- notes: Five of twelve papers have no verify.py. Artiushin is structurally outside the scope of execution-based verification — it's an atlas paper. The other four are gaps: deposits exist or partially exist, but no verification script was authored within the prototype's time budget. -->

### Summary

- 7 of 12 papers carry a verify.py script
- ~27 specific quantitative claims were targeted across those scripts
- ~14 backed by live execution against deposited data in this prototype
- ~13 affirmed via hard-coded values carried forward when downloads failed or re-runs timed out
- 2 documented mismatches — bouyeure (anatomical), wengert (quantitative)
- The remaining ~150 status labels in the corpus are agentic extraction judgments, not executed reproductions; draft annotations

<!-- notes: The headline ratio is 14 of 27 specific claims are backed by live execution. The ~150 figure is the rest of the corpus where the LLM populated a status field during extraction without ever running the analysis — those should be treated as draft annotations awaiting verification, not as confirmed reproductions. -->

## Author-side reproducibility — concrete specifications

### Spec 1 — Claim table at submission

- Format: one CSV (or YAML) file alongside the manuscript
- One row per figure panel
- Columns: panel reference (e.g., "Fig 3B"); one-sentence claim (max 200 chars); analysis script filename; data file(s) with deposit DOI or path; key statistic (test, value, p, n)
- Author burden: 10–30 minutes per paper; information already exists in the author's head and methods/legends
- Enables: targeted reviewer interrogation; downstream claim-graph construction; per-panel verification

<!-- notes: The lightest of the five asks. A one-page CSV alongside the manuscript names what each panel claims, the analysis that produced it, and the data behind it. -->

### Spec 2 — Per-panel data + code pointers at acceptance

- For each panel in the claim table: relative paths within the deposit
- (a) the data file consumed
- (b) the script that generates the panel
- Format: additional CSV column or a JSON sidecar (e.g., panels.json in the deposit root)
- Closes the gap "available on request" leaves open
- Enables: verification scripts written against a known schema rather than reverse-engineered

<!-- notes: Spec 1 names what; Spec 2 names where. Together they collapse the reverse-engineering step that consumed most of the prototype's effort per paper. -->

### Spec 3 — Standard environment specification

- Required at submission: one of
- (i) Dockerfile or Singularity recipe
- (ii) conda env export lock file
- (iii) requirements.txt with pinned versions
- (iv) Snakemake/Nextflow pipeline with containerized environment
- For non-trivial computation in this corpus (ejdrup, headley, rozak): at minimum (i) or (ii)
- Addresses bulk of unverified:code-error cases (e.g., matplotlib 3.8 API change in ejdrup)

<!-- notes: Environment specification is the single highest-leverage intervention against the code-error class of failure. The matplotlib 3.8 case is the canonical example: the analysis was sound, the figure code was sound at the time of publication, an unrelated upstream API change broke it; pinned versions would have prevented the patch. -->

### Spec 4 — Pre-computed intermediate arrays

- For analyses where raw → final is compute-infeasible (long simulations, large training runs, MRI preprocessing)
- Deposit intermediates at a defined pipeline boundary (post-preprocessing for fMRI; post-simulation pre-statistics for computational papers)
- Format: HDF5 / NetCDF / .npz / NIfTI, with a manifest naming each intermediate, its source, and the consuming script
- Marginal author cost: small — arrays already exist on a laptop or HPC scratch
- Converts most unverified:compute-infeasible cases (e.g., 1.88 GB NEURON simulation in headley, full Vmax sweep in ejdrup) into verifiable cases at the figure-generation step

<!-- notes: This spec collapses the compute barrier. The arrays already exist; depositing them turns a Bronze deposit into a Silver one without changing the underlying pipeline. -->

### Spec 5 — Reproducibility badges at point of reading

- Visible badge on published article page and in the PDF
- **Gold** — full pipeline rerunnable end-to-end from raw data with provided environment
- **Silver** — figure-generation rerunnable from pre-computed intermediates
- **Bronze** — data and code deposited but not verified to run
- **None** — not deposited
- Assignment: at acceptance, an editorial verification step runs the deposit (or a figure sample) under the declared environment; status determines badge

<!-- notes: The badge is what makes the other four specs visible to the reader. Without the surface, the infrastructure is invisible to the audience the paper is written for. -->

## Synthesis layer

### Synthesis layer — note only

- A second pipeline reads the claim graph for a paper (excluding the abstract) and asks an LLM to reconstruct the argument from typed edges alone
- Reconstruction is compared to the published abstract
- Across 12 papers: rules-out and validates are the most consistently scrubbed edge types
- Side direction, not the project's primary contribution
- Visible on each paper's demo page under "Argument from the graph"

<!-- notes: This is the structural-argument finding. Including it here as a one-slide note because the prototype produced it and the artifact carries it; not foregrounding it because the meeting is about reproducibility infrastructure. -->

## Limits

### Limits

- Methodology document describes a discipline this prototype did not strictly enforce; 303 LLM-extracted claims are a draft, not adjudicated annotations
- Of 7 verify scripts, ~14 of the targeted ~27 claims are backed by live execution; the rest are from-notes assertions or download failures
- 5 of 12 papers have no verification script
- Corpus was reverse-engineered from finished papers; forward construction (claim graphs assembled by authors at submission) would look different and likely produce richer graphs
- LLMs may inflate the apparent gap between published abstract and reconstructed argument by recovering connectives the schema does not explicitly encode; the diagnostic finding (which edges are scrubbed) is robust to this, the magnitude is not

<!-- notes: Each limit corresponds to a section in the brief. The prototype's value is what it makes inspectable, not what it adjudicates. -->
