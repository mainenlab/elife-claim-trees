# Method — eLife Prototype Workflow

One-page description of how we process each paper.

## Input

A paper URL from eLife. Typically a neuroscience paper with publicly available data and code (or partially available — the gap is informative).

## Step 1: Claim extraction

Read the paper and identify its claims at the panel level. Aim for 10–20 claims per paper. For each claim:

- Write one declarative sentence (the `claim` field).
- Assign a `claim-type` (empirical, interpretive, existence, synthesis, assessment).
- Identify the panel it corresponds to (figure panel, analysis block, or table).

First pass is manual. LLM assistance (Claude, GPT-4) is useful for drafting candidate claims from the Methods and Results text, but the final claim sentences require human judgment — especially for interpretive claims, which conflate results across panels.

## Step 2: Dependency mapping

For each claim, identify which other claims it depends on structurally. This is not citation — it is logical dependency: if claim A would be invalid if claim B were wrong, then A depends on B. Common patterns:

- Interpretive claims depend on the empirical claims they synthesize.
- Main results depend on calibration or validation claims (e.g. "stimulation was confined to the target nucleus").
- Existence claims often depend on methodological assessment claims.

Write these into the `upstream` field of each claim's frontmatter.

## Step 3: Data and script location

For each claim:

- Locate the source data (from the paper's data availability statement, supplementary files, or linked repository).
- Locate or reconstruct the analysis script that generated the result.
- If data or code is not available, record that explicitly (`status: unverified`) and note what would be needed.

Papers with openly available data and code can be fully verified. Papers without them are partially or fully unverifiable — this is itself a finding.

## Step 4: Verification

Run the analysis script on the data and compare the output to the figure in the paper. Record the outcome:

- `verified`: script runs, output matches.
- `failed`: script runs, output does not match (log the discrepancy).
- `unverified`: data or code not available.
- `reproduced`: verified on an independent dataset.

Verification is the commitment. A claim marked `verified` means we ran it.

## Step 5: Register in the claim graph

Write one `ms_mat.md` file per claim (see `docs/claim-format.md`). Place in `claims/<paper-slug>/`. The set of claim files for a paper constitutes its claim graph — the edges are the `upstream` fields.

## Output

For each paper:

```
claims/<paper-slug>/
  index.md           # paper metadata: title, DOI, authors, journal, date
  fig1a.ms_mat.md    # one file per claim
  fig1b.ms_mat.md
  fig2c.ms_mat.md
  ...
```

The full output is machine-readable (YAML frontmatter), human-auditable (prose body), and version-controlled.

## Quality range

eLife will provide papers spanning exemplary to average data quality. This range is deliberate: the goal is not to cherry-pick reproducible papers but to characterize the distribution. A prototype that only works on the best papers is not useful.
