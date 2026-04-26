---
uuid: 1b988464-a3f7-4a78-9bfb-f57ac48b51ae
slug: vr-onset-habituation
doi: ~
claim: >
  DRN serotonin VR onset responses decline significantly from early to late training.
claim-type: empirical
role: empirical
concepts:
  - serotonin habituation
  - dorsal raphe nucleus
  - novelty response
  - fiber photometry
priority: 2026-04-26
epistemic: moderate

assertions:
  - paper-slug: sautory-2026-serotonin-novelty
    panel: fig1G
    analysis: fig1/task_vr_onset/analyze.R
    dataset: ~
    method: "serotonin ~ day_block + (1 | mice_ID)"
    confidence: moderate
---

The VR onset response provides the foundational observation for the paper: serotonin neurons in the dorsal raphe respond to novel virtual-reality stimuli with transient excitation that declines across training days. This habituation establishes the baseline phenomenon that the rest of the paper dissects into novelty, value, and uncertainty components. The effect is tested with a linear mixed-effects model across day blocks, though the omnibus F-test is not significant (p = 0.137), making this a trend-level observation that motivates the more targeted analyses in subsequent figures.
