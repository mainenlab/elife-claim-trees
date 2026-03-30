---
uuid: 25ad6b4e-1066-424b-b337-98b5188b5553
slug: decisional-dimension-tradeoff
doi: ~
claim: >
  Across individuals, processing rate changes in the social decision dimension and the
  perceptual decision dimension are negatively correlated (r = -0.243, BF10 = 6.58),
  driven by differential allocation of relative attentional weights (r = -0.268,
  BF10 = 16.93): individuals who show stronger automatic self-prioritization at the
  perceptual level show less facilitation of self-associated information at the social level.
claim-type: empirical
concepts:
  - individual differences
  - decisional dimension
  - attentional trade-off
  - negative correlation
  - self-prioritization
priority: 2026-03-30
epistemic: moderate

belongings:
  - relation: requires
    target: self-prioritization-perceptual-decision-automatic
  - relation: requires
    target: self-prioritization-absent-social-decision

assertions:
  - paper-slug: scheller-2026-self-prioritization
    doi: 10.7554/eLife.100932
    panel: fig9
    analysis: OSF analysis notebooks (https://osf.io/a62df)
    dataset: https://osf.io/a62df
    dataset-doi: ~
    method: Bayesian correlation analysis across N=140
    confidence: moderate

reproductions:
  - agent: mainen-z
    date: 2026-03-30
    status: unverified
    notes: >
      This is a correlation analysis across both experiments. BF10=6.58 is moderate Bayesian
      evidence (>6 is "substantial" by Jeffreys scale). The attentional weight correlation
      (BF10=16.93) is stronger. Not yet executed.
---

The negative correlation is the individual-differences signature of the trade-off: participants who automatically prioritize self-associated shapes at the perceptual level are the same individuals who show the least facilitation when decoding the social identity. The paper interprets this as evidence that the perceptual and social processing stages compete for the same attentional resource, so strong automatic engagement at the perceptual level leaves fewer resources for the deliberate social decoding stage.
