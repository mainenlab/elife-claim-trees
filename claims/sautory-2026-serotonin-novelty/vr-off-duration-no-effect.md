---
uuid: d8e31547-29c4-4a12-8f55-a1c7e6b3f204
slug: vr-off-duration-no-effect
doi: ~
claim: >
  VR off duration does not significantly modulate response magnitude.
claim-type: empirical
role: empirical
concepts:
  - dorsal raphe nucleus
  - fiber photometry
priority: 2026-04-26
epistemic: moderate

requires:
  - vr-onoff-within-session

assertions:
  - paper-slug: sautory-2026-serotonin-novelty
    panel: fig1SF
    analysis: fig1/task_onoff_adaptation/analyze.R
    dataset: ~
    method: "serotonin ~ rep_block * day + duration + (1 | mice_ID), duration effect F(1, 7.1) = 3.45, p = 0.105"
    confidence: moderate
---

This null result rules out a simple temporal-spacing account of the novelty response. If the serotonin signal merely reflected time since last stimulation (a refractory or recovery-time mechanism), longer VR-off durations should produce larger responses. The absence of a duration effect (F(1, 7.1) = 3.45, p = 0.105) supports the interpretation that the response tracks stimulus novelty per se rather than a low-level temporal recovery process.
