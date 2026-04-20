---
uuid: 26becfa9-773d-48d3-a7ba-b14998a9d145
slug: prediction-pv-in-firing-impaired
doi: ~
claim: >
  If Kv3.1 LOF selectively impairs the cell type that depends on it, then PV-INs in
  Kcnc1-A421V/+ mice should show reduced maximal sustained firing frequency, slower
  AP downstroke (reflecting impaired repolarization), and prolonged AP half-duration
  (APD50) under whole-cell current-clamp recording. Passive membrane properties
  (resting Vm, input resistance) and AP threshold should be preserved, because Kv3
  channels operate at suprathreshold voltages and are not the dominant determinants of
  the resting state. The phenotype should be present at juvenile stages (P16–21),
  before any secondary network adaptations have occurred, as a cell-autonomous
  consequence of reduced Kv3.1 current.
displayClaim: >
  Kcnc1-A421V/+ PV-INs should show reduced maximal firing, slower AP downstroke, and
  prolonged APD50 — with preserved passive membrane properties — at juvenile stages.
claim-type: prediction
role: prediction
concepts:
  - prediction
  - PV interneurons
  - maximal firing
  - AP waveform
  - cell-autonomous
  - juvenile
priority: 2026-04-20
epistemic: prediction
status: N/A
panel: prediction

derived-from:
  - hypothesis-pv-in-selective-vulnerability

belongings: []

assertions:
  - paper-slug: wengert-2026-kcnc1
    doi: 10.7554/eLife.103784
    panel: prediction
    analysis: derived from the cell-type-specificity hypothesis; tested by current-clamp recording in PV-INs at P16-21
    dataset: ~
    dataset-doi: ~
    method: derived prediction
    confidence: strong

reproductions: []
---

The intrinsic-excitability prediction is the proximal phenotypic consequence of Kv3.1
LOF — the cell-physiological readout that closes the gap between K+ current loss and
network failure. The juvenile-stage requirement is critical: a juvenile-stage phenotype
rules out secondary adaptations and supports cell-autonomous causation. Tested by
`pv-ins-impaired-maximal-firing` and `pv-in-ap-waveform-altered-downstroke-apd50`.
