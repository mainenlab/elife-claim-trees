---
uuid: 447842d7-cb02-40e7-9674-6bc4a3e7f6f1
slug: assoc-higher-final-responses
doi: ~
claim: >
  By final training days, associative mice show significantly higher image
  responses than random mice.
claim-type: empirical
role: empirical
concepts:
  - serotonin recovery
  - associative learning
priority: 2026-04-26
epistemic: strong

requires:
  - groups-diverge-training

assertions:
  - paper-slug: sautory-2026-serotonin-novelty
    panel: fig4K
    analysis: fig4/recovery_final_comparison/analyze.R
    dataset: ~
    method: "serotonin ~ group * day_c + trial_block + image_loc + (1 + day_c | mice_ID)"
    confidence: strong
---

This endpoint comparison crystallizes the recovery dissociation: at the end of training, associative mice have significantly stronger image-locked serotonin responses than random mice. Since both groups began with equivalent responses (F3F), the final-day difference directly indexes the neural consequence of associative learning on the serotonin novelty signal.
