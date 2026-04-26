---
uuid: b14744f6-0f53-49a6-8dd3-be755c9ad801
slug: assoc-recovery-training
doi: ~
claim: >
  In the associative group, within-session adaptation and training-phase recovery
  are both significant, with responses dropping after day 1 then recovering to
  day-1 levels by final training.
claim-type: empirical
role: empirical
concepts:
  - serotonin recovery
  - associative learning
  - reward prediction
priority: 2026-04-26
epistemic: strong

requires:
  - within-session-habituation
  - cross-day-habituation

assertions:
  - paper-slug: sautory-2026-serotonin-novelty
    panel: fig4C
    analysis: fig4/recovery_assoc_phases/analyze.R
    dataset: ~
    method: "serotonin ~ day_block * trial_block + image_loc + (1 | mice_ID)"
    confidence: strong
---

This is a central result of the paper. After the initial habituation documented in figure 3, serotonin responses in the associative group recover across training to reach day-1 levels by the final training phase. Both the day_block effect (F(3, 6.0) = 7.96, p = 0.016) and the trial_block effect (F(2, 6.3) = 7.88, p = 0.019) are significant. The recovery is interpreted as the serotonin signal transitioning from encoding pure novelty to encoding the predictive value that stimuli acquire through associative learning.
