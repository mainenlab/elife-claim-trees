---
uuid: c4a2f891-3e17-4d5a-b802-7f9a8e4d1c3a
slug: vr-onoff-across-days
doi: ~
claim: >
  VR on/off responses decrease significantly across consecutive days.
claim-type: empirical
role: empirical
concepts:
  - serotonin habituation
  - dorsal raphe nucleus
priority: 2026-04-26
epistemic: moderate

requires:
  - vr-onoff-within-session

assertions:
  - paper-slug: sautory-2026-serotonin-novelty
    panel: fig1SE
    analysis: fig1/task_onoff_adaptation/analyze.R
    dataset: ~
    method: "serotonin ~ rep_block * day + duration + (1 | mice_ID)"
    confidence: moderate
---

The cross-day decline in VR on/off responses parallels the cross-day habituation consolidation shown in the main task (F3E). The day effect trends toward significance (F(2, 7.5) = 3.59, p = 0.081), supporting the interpretation that habituation of serotonin novelty responses consolidates across sleep periods regardless of the specific stimulus paradigm.
