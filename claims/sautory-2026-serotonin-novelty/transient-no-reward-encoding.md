---
uuid: 40161320-c484-48bf-8a77-f3948871fd0a
slug: transient-no-reward-encoding
doi: ~
claim: >
  Transient image-locked serotonin responses show no significant reward encoding
  at either image location and do not scale with behavioral accuracy.
claim-type: empirical
role: empirical
concepts:
  - reward prediction
  - dorsal raphe nucleus
  - serotonin encoding
priority: 2026-04-26
epistemic: moderate

requires:
  - assoc-recovery-training

assertions:
  - paper-slug: sautory-2026-serotonin-novelty
    panel: fig6C
    analysis: fig6/value_transient/analyze.R
    dataset: ~
    method: LME contrasts of rewarded vs unrewarded at each image location
    confidence: moderate
---

This null result is structurally important: it establishes that the transient, image-locked component of the serotonin response does not carry reward-predictive information. The contrast between rewarded and unrewarded conditions is non-significant at both image locations (location 1: t = 0.84, p = 0.424; location 2: t = 1.74, p = 0.117). This dissociation sets up the key finding in F6E that reward encoding is instead carried by a temporally distinct sustained signal in the pre-reward zone.
