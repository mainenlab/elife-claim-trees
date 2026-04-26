---
uuid: 1aa88b39-6beb-4a04-831b-182a726c1e05
slug: dissociable-signals-predict-learning
doi: ~
claim: >
  Two dissociable serotonin signals independently predict next-day accuracy with
  opposite effects: pre-reward zone positively and Image-2-to-background zone
  negatively, and the two signals are nearly orthogonal.
claim-type: empirical
role: empirical
concepts:
  - reward prediction
  - uncertainty encoding
  - associative learning
  - predictive coding
priority: 2026-04-26
epistemic: strong

requires:
  - sustained-prereward-encoding
  - sustained-uncertainty-crossover

assertions:
  - paper-slug: sautory-2026-serotonin-novelty
    panel: figXB
    analysis: figX_drives_learning/full_comparison_speed/analyze.R
    dataset: ~
    method: "cross-lagged regression: next-day accuracy ~ prereward_signal + img2tobck_signal; prereward beta = 0.225, p = 0.008; img2tobck beta = -0.179, p = 0.011"
    confidence: strong
---

This is the capstone finding of the paper. Two temporally and spatially distinct serotonin signals independently predict next-day learning with opposite signs. The pre-reward zone signal (reward-predictive value) positively predicts improvement, while the Image-2-to-background signal (uncertainty-related) negatively predicts improvement. In the combined model, both remain significant (prereward: beta = 0.225, p = 0.008; img2tobck: beta = -0.179, p = 0.011), and they are nearly orthogonal, indicating that they carry independent information. This dual-signal architecture suggests that serotonin neurons multiplex value and uncertainty through parallel coding channels.
