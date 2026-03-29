# Method — Ingestion Process

The ingestion process translates a paper from argument format to claim graph format. It is not automated: the translation requires reading comprehension, domain judgment, and decisions about what constitutes a claim. Tools assist; they do not replace the analyst. The process has eight steps with one mandatory review gate — at step 5, before any files are written.

## Step 1: Prepare

Locate and confirm: the paper (DOI, full text), the code repository (GitHub/Zenodo), and the data deposit. Record URLs and confirm accessibility. If code or data are absent, note it — their absence is itself a finding. Map the figure structure: how many main figures, how many supplement figures, roughly how many panels. This takes 15–30 minutes.

## Step 2: Abstract scan

Read the abstract and identify 2–4 top-level claims — the paper's main bets. Write a candidate slug for each (3–5 words, lowercase hyphenated verb phrase). These will be the interpretive or synthesis nodes at the top of the dependency graph. They often have no single figure of their own — they are the synthesis of the figures below them.

## Step 3: Figure walk

Go through each main figure panel systematically, reading the caption alongside the corresponding results prose. For each panel, ask two questions:

(a) What does this panel *show*? — the result, stated as a declarative sentence. This is the empirical claim.

(b) What does it *mean*? — the inference the paper draws from the result. If the paper draws one explicitly, write it as a separate candidate claim.

Flag panels that are purely methodological (technique demonstration, model validation, no epistemic claim about the world). These panels may appear in a claim's assertion block as supporting evidence but do not generate claims themselves.

For modelling papers: "empirical" claims are model predictions. They are conditional on model assumptions and parameters. Note this conditionality explicitly — it belongs in the epistemic field and in the claim's prose body, not hidden.

## Step 4: Draft claim list

Assemble the candidates into a flat table:

| Field | Description |
|:------|:------------|
| Slug | 3–5 words, verb phrase, descriptive — no figure references, no paper-specific language |
| Claim sentence | One declarative sentence, active voice, quantitative where the result is quantitative |
| Type | empirical / interpretive / existence / synthesis / assessment |
| Panel | Which panel asserts this claim |
| Depends on | Other slugs this claim structurally requires |
| Notes | Anything conditional, uncertain, or unusual |

Aim for 10–20 claims across all main figures. Supplement figures are secondary.

## Step 5: Review (the gate)

Present the draft claim table to the analyst for review before writing any files. The analyst corrects claim sentences, reclassifies types, adds missing claims, removes spurious ones, revises slugs. Nothing is written to disk until the table is approved. This is the intellectual gate: the claim graph must be right before it is made permanent.

## Step 6: Dependency mapping

Once the claim list is approved, map the full dependency graph. For each claim, identify which other claims it structurally requires — not cites, but requires: if X were false, this claim would be undermined. This often reveals implicit claims that have no figure of their own — calibration results, baseline assumptions — that need to be added as stubs.

## Step 7: Write claim files

Generate a UUID4 for each claim. Write one `.md` file per claim following the format in `docs/claim-format.md`. Write the paper's `index.md`. Commit to the repository.

## Step 8: Verify

For each claim where data and code are available, run the analysis and compare the output to the figure. Update the `status` field in the reproduction block:

- `verified` — ran, output matches
- `failed:mismatch` — ran, output does not match; record the discrepancy in notes
- `unverified:no-data`
- `unverified:no-code`

A verified claim is one that has been re-enacted, not merely read.

## A note on naming

Slugs should be meaningful to a domain expert who has not read the paper. `dat-reuptake-dominates` is correct. `fig2a-result` is not. `ejdrup-main-finding` is not. The slug is the claim's identity across the literature — it may eventually appear in other papers' claim graphs as a dependency, where no figure reference makes any sense.
