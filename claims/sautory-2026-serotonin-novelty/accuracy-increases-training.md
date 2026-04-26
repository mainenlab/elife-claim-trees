---
uuid: 8a8c696a-13b6-461e-a625-6f7f5ffcd619
slug: accuracy-increases-training
doi: ~
claim: >
  Behavioral accuracy increases significantly across training, starting at chance and
  exceeding it by final days, equivalently for low and high uncertainty corridors.
claim-type: empirical
role: empirical
concepts:
  - associative learning
  - virtual reality task
  - uncertainty encoding
priority: 2026-04-26
epistemic: strong

assertions:
  - paper-slug: sautory-2026-serotonin-novelty
    panel: fig2F
    analysis: fig2/behavior_group_accuracy/analyze.R
    dataset: ~
    method: LME on behavioral accuracy across training days
    confidence: strong
---

This claim establishes that the VR associative-learning task successfully induces learning. Mice begin at chance accuracy and improve across training days, with equivalent learning curves for low- and high-uncertainty corridor types. The behavioral validation is essential because subsequent claims about serotonin signal recovery and reward-predictive encoding depend on the existence of genuine associative learning. The equivalence across uncertainty levels is also important: it means that any neural differences by uncertainty cannot be attributed to differential task difficulty.
