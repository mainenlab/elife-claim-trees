---
uuid: 7a683a00-fc93-4d25-ae38-48734f0a8789
slug: spe-matching-correlates-social-decision
doi: ~
claim: >
  Individual self-prioritization effects in the shape-label matching task correlate with
  socially induced processing rate changes in the social decision dimension in Experiment 1
  (r = 0.354, BF10 = 8.23, 95% CI: 0.11 to 0.54) but not in the perceptual decision
  dimension (r = 0.069, BF10 = 0.181).
claim-type: empirical
concepts:
  - SPE matching task
  - individual differences
  - processing rate correlation
  - social decision dimension
  - self-prioritization effect
priority: 2026-03-30
epistemic: moderate

belongings:
  - relation: requires
    target: spe-robust-matching-both-experiments
  - relation: requires
    target: self-prioritization-absent-social-decision

assertions:
  - paper-slug: scheller-2026-self-prioritization
    doi: 10.7554/eLife.100932
    panel: fig9
    analysis: OSF analysis notebooks (https://osf.io/a62df)
    dataset: https://osf.io/a62df
    dataset-doi: ~
    method: Bayesian correlation, Experiment 1 (N=69)
    confidence: moderate

reproductions:
  - agent: mainen-z
    date: 2026-03-30
    status: unverified
    notes: >
      Correlation between matching SPE and attentional selection rate changes. Note:
      matching SPE involves multiple processing stages (perception, attention, memory,
      decision). The r=0.354 is modest and the CI is wide. Not yet executed.
---

The positive correlation between matching SPE and social decision processing rates means that individuals who show stronger self-prioritization in the explicit matching task are also those who show stronger other-facilitation (or self-suppression) in the social decision attentional task. This is unexpected but consistent with the trade-off interpretation: the matching SPE captures cumulative self-bias across all stages including decision, while the perceptual attentional task isolates the perceptual stage.
