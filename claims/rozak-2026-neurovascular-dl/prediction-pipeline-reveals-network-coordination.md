---
uuid: 6f7a8b9c-3e4d-5a6b-7c8d-9e0f1a2b3c4d
slug: prediction-pipeline-reveals-network-coordination
doi: ~
claim: >
  If the pipeline can resolve network-level neurovascular coupling and if optogenetic activation
  drives coordinated vascular responses, then in Thy1-ChR2-YFP mice under 458 nm photostimulation
  we should observe (a) a spatial gradient of dilations vs constrictions relative to labelled
  neurons, (b) a network-wide rise in assortativity (high-degree vessels coupling with
  high-degree vessels), (c) a measurable change in capillary network efficiency, and (d) absence
  of these patterns under 552 nm control illumination and in wild-type mice — none of which would
  be visible from point-caliber measurements alone.
displayClaim: >
  Under ChR2 photostimulation we should see a dilation-vs-constriction spatial gradient relative
  to neurons, network-wide assortativity rise, capillary efficiency change — and none of these in
  green-light or wild-type controls. Point measurements should miss all of them.
claim-type: prediction
role: prediction
concepts:
  - network coordination prediction
  - optogenetic activation
  - assortativity
  - efficiency
  - control conditions
priority: 2026-04-20
epistemic: prediction
status: N/A
panel: prediction

derived-from:
  - hypothesis-dl-pipeline-enables-network-nvc
  - hypothesis-network-level-nvc-coordination

belongings: []

assertions:
  - paper-slug: rozak-2026-neurovascular-dl
    doi: 10.7554/eLife.95525
    panel: prediction
    analysis: ~
    dataset: ~
    dataset-doi: ~
    method: derived prediction
    confidence: strong

reproductions: []
---

This prediction couples the methodological hypothesis (the pipeline works) and the biological
hypothesis (network coordination exists) into a single set of expected observations under
optogenetic stimulation. It is multi-pronged — the prediction can be partially confirmed (some
patterns emerge but not others) — and the specificity is sharpened by the negative-control
clauses. Tested by `dilations-nearer-neurons-than-constrictions` (spatial gradient),
`network-assortativity-increases-stimulation` (assortativity), `capillary-efficiency-increases-4pct`
(efficiency), `blue-light-dilations-exceed-green-control` (within-Thy1 control), and
`wt-controls-no-blue-green-difference` (cross-genotype control).
