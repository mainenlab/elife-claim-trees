---
uuid: 121d0b37-99b6-459e-8093-bce99c94b708
slug: scope-toj-tva-paradigm
doi: ~
claim: >
  All claims about self-prioritisation processing rates derive from a specific
  paradigm envelope: a temporal order judgement task with arbitrarily assigned
  shape-self/other associations (taught via a preceding shape-label matching task),
  analysed under a hierarchical Bayesian Theory of Visual Attention model. The
  empirical sample is N=69 in Experiment 1 (perceptual vs social decision dimension)
  and N=71 in Experiment 2 (social × perceptual salience factorial), both
  preregistered (https://osf.io/ehu75) and recruited online with standard attention
  and exclusion checks. The framework treats processing rate as the sum of capacity
  C and relative weights w; the per-claim verification path uses pre-computed Stan
  posterior summaries deposited at https://osf.io/a62df. Generalisation beyond
  arbitrary self-associations (e.g. to faces, names, or pre-existing identities),
  beyond TOJ (e.g. to RT-only paradigms), or beyond TVA-based estimation is not
  established by this paper.
displayClaim: >
  All processing-rate claims derive from a TOJ + shape-label matching + hierarchical
  Bayesian TVA paradigm; preregistered N=69 (Exp 1) and N=71 (Exp 2); arbitrary
  shape-self associations only; OSF-deposited posteriors.
claim-type: scope
role: scope
concepts:
  - paradigm scope
  - temporal order judgement
  - hierarchical Bayesian TVA
  - sample
  - preregistration
priority: 2026-04-20
epistemic: strong
status: N/A
panel: scope

scopes:
  - tva-capacity-model-wins
  - self-prioritization-perceptual-decision-automatic
  - self-prioritization-absent-social-decision
  - processing-capacity-rises-perceptual-self
  - decisional-dimension-tradeoff
  - spe-matching-correlates-social-decision
  - other-association-advantage-social-condition
  - perceptual-salience-6hz-advantage
  - self-social-additive-perceptual
  - self-salience-reduces-perceptual-benefit
  - self-salience-dominates-other-associated
  - spe-robust-matching-both-experiments
  - self-prioritization-automatic-early
  - social-perceptual-salience-independent-streams

belongings: []

assertions:
  - paper-slug: scheller-2026-self-prioritization
    doi: 10.7554/eLife.100932
    panel: scope
    analysis: paper Methods (paradigm, sample, preregistration); OSF deposit https://osf.io/a62df
    dataset: https://osf.io/a62df
    dataset-doi: ~
    method: scope statement
    confidence: strong

reproductions: []
---

The scope claim makes explicit what the paper's findings can and cannot say. The arbitrary
self-association manipulation (geometric shape ↔ self/other label, learned across a
single matching session) is the standard self-prioritisation paradigm in the cognitive
literature (Sui et al. 2012 lineage), but it is not the same construct as identity-based
self-relevance (own face, own name) or as long-standing autobiographical self-relevance.
The TOJ + TVA combination is novel for this question and is what allows the
capacity-vs-weights mechanistic decomposition; an RT-only design could not separate the
two. Sample exclusions and preregistration document at https://osf.io/ehu75 (Exp 1) and
the parallel preregistration for Exp 2; verification path via the OSF-deposited
hierarchical Bayesian posterior summaries (estimates_indiv_C.csv,
estimates_single_C.csv) avoids re-running the ~12-hour Stan fits.
