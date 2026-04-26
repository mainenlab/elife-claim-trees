---
uuid: 5cf2edc8-a5a3-4a88-a8cb-c208c19a6605
slug: groups-diverge-training
doi: ~
claim: >
  Associative and random groups diverge significantly across training, with the
  associative group showing increasing serotonin responses and the random group
  remaining flat.
claim-type: empirical
role: empirical
concepts:
  - serotonin recovery
  - associative learning
priority: 2026-04-26
epistemic: strong

requires:
  - assoc-recovery-training
  - random-flat-training

assertions:
  - paper-slug: sautory-2026-serotonin-novelty
    panel: fig4I
    analysis: fig4/recovery_final_comparison/analyze.R
    dataset: ~
    method: "serotonin ~ group * day_c + trial_block + image_loc + (1 + day_c | mice_ID)"
    confidence: strong
---

The group-by-day interaction directly tests whether learning changes the serotonin response trajectory. The group effect approaches significance (F(1, 10.9) = 4.83, p = 0.051), while the trial_block effect is highly significant (F(2, 12.5) = 10.98, p = 0.002). Together with the within-group analyses (F4C, F4F), this establishes the double dissociation: associative learning restores habituated serotonin responses while random exposure does not.
