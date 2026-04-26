---
uuid: ee15f683-6395-4f0b-ad91-a1bf8c30f919
slug: prereward-robust-loo
doi: ~
claim: >
  The pre-reward zone learning-predictive effect is robust to leave-one-out
  exclusion of individual mice.
claim-type: empirical
role: empirical
concepts:
  - reward prediction
  - associative learning
priority: 2026-04-26
epistemic: moderate

validates:
  - dissociable-signals-predict-learning

assertions:
  - paper-slug: sautory-2026-serotonin-novelty
    panel: figXD
    analysis: figX_drives_learning/response_learning_prereward/loo_check.R
    dataset: ~
    method: leave-one-out cross-validation of prereward beta estimates
    confidence: moderate
---

The leave-one-out analysis addresses the concern that the learning-predictive effect could be driven by a single influential mouse. Each mouse is excluded in turn, and the prereward beta is re-estimated. The betas remain positive across all exclusions, though some drop below significance, which is expected given the small sample size (n-1 per iteration). The consistency of the direction, if not always the significance, supports the robustness of the finding to individual-level influence.
