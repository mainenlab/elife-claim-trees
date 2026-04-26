---
uuid: fba33602-ce4e-4f0c-abcc-25403079bb31
slug: prereward-scales-accuracy
doi: ~
claim: >
  Pre-reward zone reward encoding scales strongly with behavioral accuracy:
  high-accuracy mice show robust encoding while low-accuracy mice show none.
claim-type: empirical
role: empirical
concepts:
  - reward prediction
  - associative learning
  - serotonin encoding
priority: 2026-04-26
epistemic: strong

requires:
  - sustained-prereward-encoding
  - accuracy-increases-training

assertions:
  - paper-slug: sautory-2026-serotonin-novelty
    panel: fig6G
    analysis: fig6/value_zone/analyze.R
    dataset: ~
    method: mouse-level scatter of reward effect vs accuracy in pre-reward zone
    confidence: strong
---

The scaling of pre-reward reward encoding with individual behavioral accuracy provides the strongest evidence that this signal reflects learned predictive value rather than a non-specific motor or arousal correlate. Mice that have learned the task well show robust reward encoding in the pre-reward zone, while poor learners show none. This individual-level relationship bridges the between-group dissociation (associative vs random) with within-group variation in learning, strengthening the causal interpretation.
