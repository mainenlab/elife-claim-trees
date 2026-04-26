---
uuid: d1b6c951-ac43-4afe-86b6-53160c26c5f0
slug: sustained-uncertainty-crossover
doi: ~
claim: >
  Sustained zone activity shows a significant uncertainty crossover: high
  uncertainty responses exceed low uncertainty at the Image 2 zone, reversing
  the pattern at Image 1.
claim-type: empirical
role: empirical
concepts:
  - uncertainty encoding
  - serotonin encoding
priority: 2026-04-26
epistemic: strong

requires:
  - transient-uncertainty-trend
  - sustained-prereward-encoding

assertions:
  - paper-slug: sautory-2026-serotonin-novelty
    panel: fig7E
    analysis: fig7/uncertainty_accuracy/analyze.R
    dataset: ~
    method: "serotonin ~ uncertainty * zone * reward + (1 | mice_ID), uncertainty effect beta = -0.097, p = 0.072"
    confidence: moderate
---

The sustained uncertainty crossover reveals the second dissociable serotonin signal. While the pre-reward zone encodes reward value (F6E), the Image 2 zone shows a spatial pattern that reflects task uncertainty. The crossover pattern -- high-uncertainty corridors evoking stronger responses at Image 2 but weaker at Image 1 -- is consistent with a signal that tracks the informativeness of upcoming stimuli. This is the uncertainty component that, together with the pre-reward value signal, forms the dual-signal model in figure X.
