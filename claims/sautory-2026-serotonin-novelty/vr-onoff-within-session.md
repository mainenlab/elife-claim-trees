---
uuid: 673c683b-bce8-4749-9c23-57f3919291b0
slug: vr-onoff-within-session
doi: ~
claim: >
  Within-session VR on/off responses decline significantly from early to late
  repetitions.
claim-type: empirical
role: empirical
concepts:
  - serotonin habituation
  - dorsal raphe nucleus
  - novelty response
priority: 2026-04-26
epistemic: moderate

validates:
  - vr-onset-habituation

assertions:
  - paper-slug: sautory-2026-serotonin-novelty
    panel: fig1SD
    analysis: fig1/task_onoff_adaptation/analyze.R
    dataset: ~
    method: "serotonin ~ rep_block * day + duration + (1 | mice_ID)"
    confidence: moderate
---

The VR on/off paradigm provides a controlled replication of the habituation phenomenon in a simpler context. By toggling the virtual environment on and off, the analysis isolates the response to environmental novelty per se, independent of any image-specific or reward-related signals. The rep_block effect trends toward significance (F(2, 8.0) = 4.03, p = 0.061), consistent with within-session adaptation of the serotonin novelty response.
