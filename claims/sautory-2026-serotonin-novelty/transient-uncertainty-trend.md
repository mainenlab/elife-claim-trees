---
uuid: 34c0ffa1-1899-40e9-8694-da74d200a9b0
slug: transient-uncertainty-trend
doi: ~
claim: >
  Transient image-locked responses show a trending uncertainty-by-location
  crossover: lower uncertainty responses at Image 1, with no significant effect
  at Image 2.
claim-type: empirical
role: empirical
concepts:
  - uncertainty encoding
  - dorsal raphe nucleus
  - serotonin encoding
priority: 2026-04-26
epistemic: moderate

requires:
  - transient-no-reward-encoding

assertions:
  - paper-slug: sautory-2026-serotonin-novelty
    panel: fig7C
    analysis: fig7/uncertainty_transient/analyze.R
    dataset: ~
    method: "serotonin ~ uncertainty * location * reward + (1 | mice_ID), uncertainty effect beta = -0.120, p = 0.109"
    confidence: moderate
---

The transient uncertainty analysis parallels the transient reward analysis (F6C): the image-locked component shows only a trending effect that does not reach significance (uncertainty beta = -0.120, p = 0.109). As with reward encoding, this motivates the shift to sustained zone-level analysis in F7E where the uncertainty signal is found to be significant. The trending location crossover hints at the spatial structure that becomes significant in the sustained analysis.
