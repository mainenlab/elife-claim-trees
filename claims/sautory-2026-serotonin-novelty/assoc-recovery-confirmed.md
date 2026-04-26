---
uuid: a6528616-cb0a-48b6-954f-9613445deb3b
slug: assoc-recovery-confirmed
doi: ~
claim: >
  Training-phase recovery in the associative group is confirmed: responses drop
  from day 1 to initial training then recover significantly by final training,
  returning to day-1 levels.
claim-type: empirical
role: empirical
concepts:
  - serotonin recovery
  - associative learning
priority: 2026-04-26
epistemic: strong

derived-from:
  - assoc-recovery-training

assertions:
  - paper-slug: sautory-2026-serotonin-novelty
    panel: fig4D
    analysis: fig4/recovery_assoc_phases/analyze.R
    dataset: ~
    method: "serotonin ~ day_block * trial_block + image_loc + (1 | mice_ID)"
    confidence: strong
---

This claim provides the specific pairwise contrast that confirms the recovery pattern: the drop from day 1 to initial training and the subsequent return to day-1 levels by final training. It is a refinement of the omnibus test in F4C, isolating the non-monotonic trajectory that distinguishes associative recovery from simple habituation or sensitization.
