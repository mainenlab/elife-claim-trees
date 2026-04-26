---
uuid: ee347219-201a-4d60-b429-142c8dbfdb45
slug: signals-survive-speed-control
doi: ~
claim: >
  Both dissociable signals remain significant when entered simultaneously and
  survive zone-matched speed control, ruling out motor confounds.
claim-type: empirical
role: empirical
concepts:
  - reward prediction
  - uncertainty encoding
  - associative learning
priority: 2026-04-26
epistemic: strong

validates:
  - dissociable-signals-predict-learning
  - prereward-assoc-specific

assertions:
  - paper-slug: sautory-2026-serotonin-novelty
    panel: figXF
    analysis: figX_drives_learning/full_comparison_speed/analyze.R
    dataset: ~
    method: "combined model with speed control: prereward beta = 0.180, p = 0.023 after speed covariate"
    confidence: strong
---

Motor speed is a potential confound for any fiber-photometry signal measured in freely-moving animals. This control analysis adds zone-matched running speed as a covariate to the cross-lagged regression. Both the pre-reward signal (beta = 0.180, p = 0.023) and the Image-2-to-background signal survive the speed control, demonstrating that the learning-predictive effects are not driven by motor behavior differences. The preservation of both signals under simultaneous entry further confirms their independence.
