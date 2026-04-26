---
uuid: f7b24e15-8a39-4c9d-90e2-3e8c5d9a1b76
slug: photobleaching-control
doi: ~
claim: >
  Repeated VR events produce within-session adaptation regardless of LED
  condition, ruling out photobleaching.
claim-type: empirical
role: empirical
concepts:
  - serotonin habituation
  - fiber photometry
priority: 2026-04-26
epistemic: strong

validates:
  - vr-onoff-within-session

assertions:
  - paper-slug: sautory-2026-serotonin-novelty
    panel: fig1SH
    analysis: fig1/task_onoff_adaptation/analyze.R
    dataset: ~
    method: comparison of adaptation across LED conditions (external analysis)
    confidence: strong
---

Photobleaching of the fluorescent indicator is a common confound in fiber photometry that can masquerade as signal habituation: progressive bleaching of the fluorophore reduces signal amplitude over time, producing an apparent decline that has nothing to do with neural activity. By showing that within-session adaptation occurs regardless of LED stimulation condition, this control demonstrates that the observed signal decline reflects genuine changes in serotonin neuron activity rather than photophysical artifact.
