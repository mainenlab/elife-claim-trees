---
uuid: d9f6f44b-4210-48c4-8630-bc83f046be74
slug: reward-trajectories-diverge
doi: ~
claim: >
  Reward response trajectories diverge significantly between groups across
  training: associative responses decrease while random responses remain stable.
claim-type: empirical
role: empirical
concepts:
  - reward prediction
  - prediction error
  - associative learning
priority: 2026-04-26
epistemic: strong

requires:
  - groups-diverge-training

assertions:
  - paper-slug: sautory-2026-serotonin-novelty
    panel: fig5B
    analysis: fig5/rew_response_group_day/analyze.R
    dataset: ~
    method: "rew_sero ~ group * day_c + (1 + day_c | mice_ID)"
    confidence: strong
---

The divergence of reward responses complements the image-response recovery. As the associative group learns to predict rewards, their serotonin reward responses decrease, consistent with a prediction-error interpretation: fully predicted rewards evoke less response. The group-by-day interaction is significant (F(1, 10.9) = 8.91, p = 0.013), and the group main effect is strong (F(1, 10.9) = 11.79, p = 0.006). The random group, lacking predictive structure, maintains stable reward responses throughout training.
