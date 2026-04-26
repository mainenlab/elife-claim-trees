---
uuid: 2bb0d65c-797e-408c-bcf3-6ed56b7e5de9
slug: speed-glm-accuracy-correlation
doi: ~
claim: >
  Speed-threshold accuracy correlates strongly with GLM classifier accuracy,
  validating the simpler metric.
claim-type: empirical
role: empirical
concepts:
  - associative learning
  - virtual reality task
priority: 2026-04-26
epistemic: strong

validates:
  - accuracy-increases-training

assertions:
  - paper-slug: sautory-2026-serotonin-novelty
    panel: fig2G
    analysis: fig2/behavior_glm_accuracy/analyze.py
    dataset: ~
    method: Pearson correlation between speed-threshold and GLM classifier accuracy
    confidence: strong
---

This methodological validation demonstrates that the simpler speed-threshold accuracy measure used throughout the paper tracks the more principled GLM classifier approach. The strong correlation justifies the use of the simpler metric for all subsequent analyses that condition on behavioral accuracy, including the critical scaling analyses in figures 6 and 7 where reward and uncertainty encoding are shown to depend on learning level.
