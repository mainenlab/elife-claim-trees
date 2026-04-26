---
uuid: 72a2e636-9451-4394-8d95-359deff0c199
slug: random-flat-training
doi: ~
claim: >
  The random group shows no recovery across training, confirming that image
  exposure without predictive structure does not restore habituated serotonin
  responses.
claim-type: empirical
role: empirical
concepts:
  - serotonin habituation
  - associative learning
  - novelty response
priority: 2026-04-26
epistemic: strong

requires:
  - random-no-recovery
  - assoc-recovery-training

assertions:
  - paper-slug: sautory-2026-serotonin-novelty
    panel: fig4G
    analysis: fig4/recovery_random_phases/analyze.R
    dataset: ~
    method: "serotonin ~ day_block * trial_block + image_loc + (1 | mice_ID)"
    confidence: strong
---

This strengthens the random-group null result by explicitly contrasting it with the associative-group recovery. The flat trajectory across training in the random group rules out non-specific effects of repeated exposure, handling, or familiarity with the recording setup as explanations for the recovery observed in the associative group.
