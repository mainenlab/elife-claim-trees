---
uuid: daed2cbb-ce65-4207-9a91-b0160ebf8afa
slug: perceptual-salience-6hz-advantage
doi: ~
claim: >
  Perceptual salience (local color contrast) produces a 6 Hz processing rate advantage for
  the salient stimulus [HDI95: 4.6 to 7.3 Hz] in Experiment 2, driven by a 2.5 Hz increase
  in the salient stimulus rate [HDI95: 0.8 to 4.2 Hz] and a 3.4 Hz decrease in the
  non-salient stimulus rate [HDI95: -4.9 to -2.0 Hz].
claim-type: empirical
concepts:
  - perceptual salience
  - processing rate advantage
  - salient stimulus
  - attentional selection
  - TVA
priority: 2026-03-30
epistemic: strong

belongings:
  - relation: supports
    target: self-salience-reduces-perceptual-benefit
  - relation: supports
    target: social-perceptual-salience-independent-streams

assertions:
  - paper-slug: scheller-2026-self-prioritization
    doi: 10.7554/eLife.100932
    panel: fig6
    analysis: OSF analysis notebooks (https://osf.io/a62df)
    dataset: https://osf.io/a62df
    dataset-doi: ~
    method: hierarchical Bayesian TVA estimation, Experiment 2 (N=71)
    confidence: strong

reproductions:
  - agent: mainen-z
    date: 2026-03-30
    status: unverified
    notes: >
      The 6 Hz perceptual salience advantage (HDI: 4.6 to 7.3) is the cleanest quantitative
      result in the paper — HDI entirely above zero, large effect. Strong epistemic status.
      Not yet executed.
---

The 6 Hz perceptual salience advantage is substantially larger than the social salience effects (1.5 Hz perceptual self-advantage, -1.6 Hz social other-advantage). This size difference is important: physical salience captures attention more strongly than arbitrary self-association in this task, despite the robust SPE in the matching task. The bidirectional nature of the perceptual salience effect (salient goes up, non-salient goes down) is consistent with a reallocation of fixed capacity between the two stimuli.
