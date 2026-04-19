---
uuid: 26ddf94e-5d21-4218-8b6a-8d53e3f228cf
slug: prediction-orthogonal-input-gating
doi: ~
claim: >
  If perisomatic and distal dendritic inhibition serve dissociated computational roles, then
  beta-frequency distal inhibition should gate clustered apical inputs phase-dependently (via
  dendritic spike control), gamma-frequency perisomatic inhibition should gate clustered
  proximal/basal inputs phase-dependently (via threshold modulation), and the two gating
  regimes should be largely independent of each other.
displayClaim: >
  The compartmental-dissociation hypothesis predicts orthogonal gating: beta/distal selectively
  gates apical inputs while gamma/perisomatic selectively gates proximal/basal inputs, with
  little cross-talk.
claim-type: prediction
role: prediction
concepts:
  - functional orthogonality
  - input gating
  - apical inputs
  - basal inputs
  - phase-dependent transmission
priority: 2026-04-19
epistemic: prediction
status: N/A
panel: prediction

derived-from:
  - hypothesis-distinct-compartmental-roles

belongings: []

assertions:
  - paper-slug: headley-2026-inhibitory-rhythms
    doi: 10.7554/eLife.95562
    panel: prediction
    analysis: ~
    dataset: ~
    dataset-doi: ~
    method: derived prediction
    confidence: strong

reproductions: []
---

This is the functional payoff of the dissociation hypothesis: it predicts not just that the two compartments respond differently to inhibition in isolation, but that the two inhibitory streams gate two distinct excitatory input pathways with little mutual interference. A failure mode would be substantial cross-talk — for instance, beta/distal inhibition meaningfully gating proximal/basal inputs, or gamma/perisomatic inhibition strongly suppressing apical-input transmission. Tested jointly by `beta-gates-distal-apical-inputs` and `gamma-gates-proximal-basal-inputs`, which establish each leg of the orthogonal gating pattern through clustered-input simulations in Figure 10.
