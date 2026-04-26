---
uuid: 84b7246b-e4d7-48e4-ac20-b1e85277832f
slug: sustained-prereward-encoding
doi: ~
claim: >
  Sustained serotonin activity selectively encodes reward in the pre-reward zone,
  with no significant encoding at image locations.
claim-type: empirical
role: empirical
concepts:
  - reward prediction
  - serotonin encoding
  - anticipatory ramping
priority: 2026-04-26
epistemic: strong

requires:
  - transient-no-reward-encoding

assertions:
  - paper-slug: sautory-2026-serotonin-novelty
    panel: fig6E
    analysis: fig6/value_zone/analyze.R
    dataset: ~
    method: LME contrasts of rewarded vs unrewarded at each spatial zone
    confidence: strong
---

The pre-reward zone selectively encodes reward (t = 3.64, p = 0.007, d = 0.70) while image zones do not (image1: t = 0.65, p = 0.537; image2: t = 1.90, p = 0.095). This spatial selectivity, combined with the temporal dissociation from transient responses (F6C), identifies a distinct sustained serotonin signal that emerges in the corridor zone immediately before reward delivery. The large effect size (d = 0.70) indicates a robust signal. This is one of the two dissociable signals that the paper's conclusion rests upon.
