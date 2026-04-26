---
uuid: 1e1639c7-8e9d-48e7-8e39-769a906e1475
slug: prereward-assoc-specific
doi: ~
claim: >
  The pre-reward zone learning-predictive effect is specific to the associative
  group and absent in the random group.
claim-type: empirical
role: empirical
concepts:
  - reward prediction
  - associative learning
priority: 2026-04-26
epistemic: strong

requires:
  - dissociable-signals-predict-learning

assertions:
  - paper-slug: sautory-2026-serotonin-novelty
    panel: figXC
    analysis: figX_drives_learning/cross_lagged_comparison/analyze.R
    dataset: ~
    method: "cross-lagged regression by group: associative prereward beta = 0.190, p = 0.023; random prereward not significant"
    confidence: strong
---

The group specificity of the pre-reward learning-predictive signal confirms that this is genuinely an associative-learning signal. In the cross-lagged analysis, the prereward signal predicts next-day accuracy only in the associative group (beta = 0.190, p = 0.023), with no significant path in the random group. This rules out non-specific temporal autocorrelation or session-order effects as explanations for the cross-day prediction.
