# eLife Claim Trees — Review Build

This is a static build of the claim-trees site including private lab papers (Meijer v1 + R1, Sautory). The public version at https://zmainen.github.io/elife-claim-trees/ has only the 10 eLife papers.

## Quick start

```bash
unzip elife-claim-trees-review.zip
cd dist
python3 -m http.server 8000
# Open http://localhost:8000 in your browser
```

No dependencies required — just Python 3 (any version).

## What you're looking at

Each paper has been decomposed into **typed claims** — one proposition per claim, with logical edges (requires, supports, refutes, entails, etc.) connecting them into a dependency graph. The site lets you navigate this structure.

### For each paper:

- **Claims tab** — click any claim card to open the detail drawer. Follow edges to navigate the graph. Claims are color-coded by role (hypothesis, prediction, empirical, control, scope, literature-context).

- **Abstract ↔ claims** — the paper's abstract mapped sentence-by-sentence to the claims it represents. Shows what the abstract compresses or omits (controls, null results, scope qualifications).

- **Argument from graph** — the paper's argument reconstructed from the claim graph alone, without seeing the abstract. Tests whether the graph carries the full argument structure.

### Verification levels

Each paper shows its verification level:

| Level | Meaning |
|:------|:--------|
| **L1** | Metadata check (deposit exists, PDB record parsed) |
| **L2** | CSV comparison (read deposited intermediates, compared to paper) |
| **L3** | Re-executed scripts (ran author code on deposited data) |
| **L4** | Independent re-analysis (new code on deposited data) |
| **unverified** | Not attempted (with documented reason) |

### Meijer papers

- **v1 (orthogonal)**: 24 claims, L2 verified. 9/12 PASS, 2 FAIL (ripple suppression direction wrong in deposited CSV; region count 41 vs paper's 13), 1 WARN (latency correlation r=0.09 vs paper's r=0.61).

- **R1 (additive)**: 41 claims, L2 verified. 14/14 PASS. The additive-vs-multiplicative hypothesis chain is visible in the claim graph. Note: GLM interaction values differ slightly between repo time-window files and paper-reported values — all show non-significant interaction, consistent with the additive claim.

## How it was built

Claims extracted via the 8-step process (3 independent reading agents → reconciliation → review gate → dependency mapping). Verification scripts run deposited code against deposited data. Synthesis generated from claim graph alone (no abstract access). See the Method page on the site for full details.

## Questions to consider

1. Do the claim sentences accurately capture what the paper establishes?
2. Are the typed edges (requires, supports, refutes) correctly assigned?
3. Do the verification results match your expectations?
4. Are there claims the extraction missed or got wrong?
5. Does the synthesis (argument from graph) recover the paper's argument?
