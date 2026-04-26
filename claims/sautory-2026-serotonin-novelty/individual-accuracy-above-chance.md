---
uuid: 6a708c6a-ca9c-4da6-bd0a-ebd4a1590f4a
slug: individual-accuracy-above-chance
doi: ~
claim: >
  Individual mice show heterogeneous final-day accuracy distributed significantly
  above chance.
claim-type: empirical
role: empirical
concepts:
  - associative learning
priority: 2026-04-26
epistemic: strong

validates:
  - accuracy-increases-training

assertions:
  - paper-slug: sautory-2026-serotonin-novelty
    panel: fig2H
    analysis: fig2/behavior_group_accuracy/analyze.R
    dataset: ~
    method: "serotonin ~ day_block + (1 | mice_ID), individual mouse accuracy distribution"
    confidence: strong
---

By showing that individual mice vary in their final accuracy but are distributed above chance, this claim provides the inter-animal variability that is later exploited in the scaling analyses. The fact that some mice learn well and others poorly creates the natural experiment used in figures 6G and 7G, where serotonin encoding of reward and uncertainty is shown to scale with individual behavioral accuracy.
