# Method — Ingestion Process

The ingestion process translates a paper from argument format to claim graph format. It is not automated: the translation requires reading comprehension, domain judgment, and decisions about what constitutes a claim. Tools assist; they do not replace the analyst. The process has eight steps with one mandatory review gate — at step 5, before any files are written.

## Step 1: Prepare

Locate and confirm: the paper (DOI, full text), the code repository (GitHub/Zenodo), and the data deposit. Record URLs and confirm accessibility. If code or data are absent, note it — their absence is itself a finding. Map the figure structure: how many main figures, how many supplement figures, roughly how many panels. This takes 15–30 minutes.

**Full text access:** Always attempt to download the paper PDF first via `cdn.elifesciences.org/articles/{article-id}/elife-{article-id}-v1.pdf`. If successful, extract with `pdftotext`. Do not rely on eLife HTML for results sections — the HTML is consistently truncated after approximately the first two figures. If PDF download fails, fall back in this order: (1) GitHub repo README (often contains results summaries and figure-to-script mappings), (2) eLife API abstract (`api.elifesciences.org/articles/{id}`), (3) WebFetch of the eLife article page with a focused prompt for key quantitative values.

**For observational papers (atlases, anatomical surveys):** Note explicitly that primary claims are observational — their evidence is the image data itself, not a statistical test. Verification for these claims means atlas inspection, not analysis re-execution. Note the data volume and access path (BIL, IDR, etc.) and whether an interactive viewer is available without full download.

## Step 2: Abstract scan

Read the abstract and identify 2–4 top-level claims — the paper's main bets. Write a candidate slug for each (3–5 words, lowercase hyphenated verb phrase). These will be the interpretive or synthesis nodes at the top of the dependency graph. They often have no single figure of their own — they are the synthesis of the figures below them.

## Step 3: Three independent extractions

Three agents read the paper independently, each with different instructions, before any claim list is assembled. No agent sees another's output before submitting.

**Agent A — Results reader**: reads the abstract and results prose only. Does not read figure captions or methods. Extracts claims from the argument as written. Captures interpretive and synthesis claims — the paper's conclusions and the reasoning that connects figures into an argument. Gets direction and framing right because it reads what the paper concludes, not what it computes.

**Agent B — Caption reader**: reads figure captions only, panel by panel. Writes one candidate claim per panel, strictly grounded in caption language. Does not interpret beyond what the caption states. Gets quantitative values right and panel assignments exact. Does not infer from mechanism.

**Agent C — Structure reader**: reads methods, supplements, and code. Identifies what is actually computed, what assumptions underlie each result, and which panels are purely methodological. Flags conditional claims, missing controls, and existence claims masquerading as causal ones. Does not report mechanisms as results.

## Step 4: Reconciliation

Compare the three extraction lists. For each claim:
- If all three agree: high confidence. Include.
- If two agree, one differs: flag the discrepancy. Note which agent and why.
- If agents find different claims: add all candidates, flagged as single-source.

The reconciled list carries a confidence column (high / contested / single-source). This is what goes to the review gate in Step 5.

## Common errors in claim extraction

Instruct all extraction agents to avoid these:

1. **Inferring results from mechanism.** Code and methods describe how something was computed. They do not describe what was found. Never report a mechanism as a result. If the paper's text is unavailable, stop and flag it — do not fall back to code analysis and present the output as paper-grounded.

2. **Reversing direction.** Saturation, inhibition, and feedback effects frequently reverse naive intuitions. A higher concentration of X at a site does not always mean faster processing — saturation slows it. Always read the paper's stated direction; never infer it from the mechanism alone.

3. **Quantitative hallucination.** Do not add specific numbers (percentages, milliseconds, effect sizes) that do not appear verbatim in the paper's text or captions. If the paper says "large fraction," write "large fraction." If you cannot find the number in the text, do not invent it.

4. **Wrong panel assignment.** Do not assume a claim belongs to a panel without verifying. Schematics, cartoons, and parameter sweep diagrams (often panels A or D) set up a hypothesis — they do not assert a result. A result is in the panel that shows the data or simulation output.

5. **Overstating strength.** "Necessary and sufficient," "proves," "demonstrates definitively" — these are almost never the paper's language. Use the paper's own epistemic framing. If the paper says "consistent with," do not write "shows."

6. **Discussion contamination.** The discussion introduces speculative interpretations and broader implications that the figures do not directly support. Claims must be grounded in results sections and captions, not discussion.

7. **Simulation vs experiment conflation.** Clearly distinguish model predictions from experimental measurements. A simulation result is a model prediction, conditional on the model's assumptions and parameterisation. An experimental result is a measurement. They have different epistemic statuses.

8. **Missing negative results.** "X does not explain Y" and "varying parameter P produces no regional difference" are real claims. Do not skip panels that show null or negative results.

9. **Methodological panels as claims.** Panels that show model architecture, parameter schematics, or technique illustrations do not assert claims about the world. Flag these explicitly rather than forcing a claim sentence.

10. **Single-source overconfidence.** If only one reading strategy surfaces a claim, it may be real but buried — or it may be an artefact of the reading strategy. Flag it as single-source rather than presenting it with the same confidence as a claim found by all three agents.

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
- `unverified:no-data` — data deposit not accessible; reproduction not attempted
- `unverified:no-code` — code not accessible; reproduction not attempted
- `unverified:code-error` — code runs but errors before producing output; record the exact error and any known fix
- `unverified:compute-infeasible` — code runs but would require compute beyond available resources; record estimated runtime and any workaround using pre-computed deposit files
- `unverified` — not yet attempted (use this only when the reason is genuinely unknown)

A verified claim is one that has been re-enacted, not merely read.

**Assessment claims:** Assessment claims (structural properties of code or parameterization) are verified by code inspection. Mark them `verified` when inspection confirms the structural property, and record in `notes` that verification was by code reading rather than execution. This is a legitimate and sufficient form of verification for claims about model structure.

**Visualization vs analysis errors:** When code errors occur only in the visualization step (figure rendering) and not in the simulation/analysis step, classify as `unverified:code-error` and note whether the underlying simulation output is itself reproducible. Broken figure rendering code does not invalidate the simulation result — but it does block automated figure comparison.

**Pre-computed data first:** Before classifying any claim as `unverified:compute-infeasible`, check the associated data deposit for pre-computed output arrays. Many computational papers deposit simulation outputs (`.npy`, `.mat`, `.h5` files) that allow the plotting-only section of each script to run without re-executing long simulations. Always attempt the deposit-first path.

## A note on naming

Slugs should be meaningful to a domain expert who has not read the paper. `dat-reuptake-dominates` is correct. `fig2a-result` is not. `ejdrup-main-finding` is not. The slug is the claim's identity across the literature — it may eventually appear in other papers' claim graphs as a dependency, where no figure reference makes any sense.
