---
uuid: ab8143bc-0959-4c82-94b3-17de8967826f
slug: uncertainty-scales-accuracy
doi: ~
claim: >
  Uncertainty encoding at the Image 2 zone scales strongly and robustly with
  behavioral accuracy, absent at low accuracy and robust at high accuracy.
claim-type: empirical
role: empirical
concepts:
  - uncertainty encoding
  - associative learning
  - serotonin encoding
priority: 2026-04-26
epistemic: strong

requires:
  - sustained-uncertainty-crossover
  - accuracy-increases-training
  - prereward-scales-accuracy

assertions:
  - paper-slug: sautory-2026-serotonin-novelty
    panel: fig7G
    analysis: fig7/uncertainty_accuracy/analyze.R
    dataset: ~
    method: mouse-level scatter of uncertainty effect vs accuracy at Image 2 zone
    confidence: strong
---

Like the pre-reward reward encoding (F6G), uncertainty encoding at the Image 2 zone scales with individual behavioral accuracy. This parallel scaling pattern establishes that both dissociable signals are learning-dependent: they emerge only in mice that have successfully learned the task. The convergence of two independently measured signals on the same individual-level predictor (accuracy) strengthens the interpretation that both reflect genuine cognitive computations rather than recording artifacts or non-specific correlates.
