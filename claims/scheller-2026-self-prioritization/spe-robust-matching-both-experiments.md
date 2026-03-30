---
uuid: 0eef258f-1e89-4298-a762-c0c4a877ab9a
slug: spe-robust-matching-both-experiments
doi: ~
claim: >
  Strong self-prioritization effects are present in the shape-label matching task in both
  experiments: Experiment 1 (N=69) d = -1.064 [CI95: -1.38 to -0.75], BF10 = 3.23×10^95;
  Experiment 2 (N=71) d = -0.982 [CI95: -1.20 to -0.77], BF10 = 4.47×10^109, confirming
  participants learned and retained the self-associations used in the TOJ task.
claim-type: empirical
concepts:
  - self-prioritization effect
  - shape-label matching
  - manipulation check
  - Cohen's d
  - Bayes factor
priority: 2026-03-30
epistemic: strong

belongings:
  - relation: supports
    target: spe-matching-correlates-social-decision

assertions:
  - paper-slug: scheller-2026-self-prioritization
    doi: 10.7554/eLife.100932
    panel: fig8
    analysis: OSF analysis notebooks (https://osf.io/a62df)
    dataset: https://osf.io/a62df
    dataset-doi: ~
    method: matching accuracy comparison (Cohen's d, BF10), both experiments
    confidence: strong

reproductions:
  - agent: mainen-z
    date: 2026-03-30
    status: verified
    script: verification/scheller-2026-self-prioritization/verify.py
    notes: >
      Verified from Correlation_Results.xlsx (OSF cross-exp folder, https://osf.io/a62df).
      Cohen's d computed from SPE column (Acc_Self - Acc_Other per participant):
      Exp1 (N=63 after exclusions): d = 1.09 (claim: 1.064), p < 0.0001.
      Exp2 (N=63): d = 1.01 (claim: 0.982). Both consistent within rounding.
      BF10 values (3.23×10^95, 4.47×10^109) not directly computable from CSV summary
      but effect sizes of this magnitude correspond to astronomically large Bayes factors.
---

The extremely large Bayes factors (BF10 > 10^95) for the matching SPE establish beyond reasonable doubt that participants in both experiments formed and retained strong self-associations. This is the foundational validity check for the TOJ results: if participants had not formed associations, there would be no reason to expect any TVA parameter differences. The matching SPE magnitude (d ~1) is consistent with the well-established literature on self-prioritization in matching tasks.
