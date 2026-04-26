---
uuid: 2119a75b-a270-4bb5-8e24-ec24edcb0c8d
slug: random-no-recovery
doi: ~
claim: >
  In the random group, within-session adaptation persists but no training-phase
  recovery emerges.
claim-type: empirical
role: empirical
concepts:
  - serotonin habituation
  - associative learning
priority: 2026-04-26
epistemic: strong

requires:
  - within-session-habituation

assertions:
  - paper-slug: sautory-2026-serotonin-novelty
    panel: fig4F
    analysis: fig4/recovery_random_phases/analyze.R
    dataset: ~
    method: "serotonin ~ day_block * trial_block + image_loc + (1 | mice_ID)"
    confidence: strong
---

The random group serves as the critical control for the recovery claim. These mice receive the same image exposures as the associative group but without consistent image-reward pairings. Within-session adaptation persists (trial_block: F(2, 3.9) = 10.32, p = 0.028), confirming that short-term habituation is intact, but no recovery across training days emerges (day_block: F(3, 3.0) = 1.05, p = 0.484). This dissociation establishes that recovery requires predictive structure, not merely stimulus repetition.
