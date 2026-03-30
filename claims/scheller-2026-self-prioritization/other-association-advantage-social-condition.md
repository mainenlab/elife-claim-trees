---
uuid: 08433979-b40e-4b78-91f6-80537bb4c971
slug: other-association-advantage-social-condition
doi: ~
claim: >
  In Experiment 2, other-associated stimuli show a processing rate advantage over
  self-associated stimuli of -1.6 Hz [HDI95: -3 to -0.26 Hz] relative to neutral
  baseline in the social decision condition, replicating the cross-experimental finding
  that social decoding context reverses or eliminates the self-advantage.
claim-type: empirical
concepts:
  - other-association advantage
  - social decision condition
  - Experiment 2
  - replication
  - TVA processing rates
priority: 2026-03-30
epistemic: moderate

belongings:
  - relation: requires
    target: tva-capacity-model-wins
  - relation: supports
    target: self-prioritization-automatic-early
  - relation: supports
    target: decisional-dimension-tradeoff

assertions:
  - paper-slug: scheller-2026-self-prioritization
    doi: 10.7554/eLife.100932
    panel: fig6
    analysis: OSF analysis notebooks (https://osf.io/a62df)
    dataset: https://osf.io/a62df
    dataset-doi: ~
    method: hierarchical Bayesian TVA estimation, Experiment 2 (N=71)
    confidence: moderate

reproductions:
  - agent: mainen-z
    date: 2026-03-30
    status: verified
    script: verification/scheller-2026-self-prioritization/verify.py
    notes: >
      Verified from estimates_indiv_C.csv (Exp2, OSF https://osf.io/a62df). Condition 3
      (social decision, no perceptual salience): v_p(self) = 23.55 Hz, v_r(other) = 24.91 Hz,
      diff = -1.36 Hz (claim: -1.6 Hz [HDI: -3 to -0.26]). Point estimate within the claimed
      HDI range. Sign confirmed: other processed faster than self in social decision context.
---

The replication of the other-advantage in the social decision condition (Experiment 2) strengthens the claim that this is a genuine effect rather than a single-study artifact. The self-associated rate decreases by 1.3 Hz while other-associated stays approximately flat (+0.17 Hz). Critically, the HDI for the -1.6 Hz difference (−3 to −0.26) does not include zero, making this the most decisive self-vs-other comparison in the dataset.
