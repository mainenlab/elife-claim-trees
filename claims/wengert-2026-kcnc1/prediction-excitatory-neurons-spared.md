---
uuid: e216fbcf-8d86-4470-9206-c27a0b4a04f7
slug: prediction-excitatory-neurons-spared
doi: ~
claim: >
  If the A421V variant exerts its cellular effect specifically through Kv3.1 — which
  is not expressed at functionally relevant levels in cortical excitatory neurons —
  then excitatory neurons in Kcnc1-A421V/+ mice should be functionally spared:
  voltage-gated K+ current density, intrinsic excitability (firing-frequency vs
  current-injection relationship), AP waveform parameters, and synaptic transmission
  should not differ significantly from WT. The null result must hold at both juvenile
  and adult stages to exclude both cell-autonomous and secondary network effects on
  excitatory cells. This is the negative-control half of the cell-type specificity
  test.
displayClaim: >
  Excitatory neurons should show no significant impairment of K+ current, firing, AP
  waveform, or synaptic transmission at either juvenile or adult stages.
claim-type: prediction
role: prediction
concepts:
  - prediction
  - excitatory neurons
  - cell-type specificity
  - null result
  - negative control
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
    analysis: derived from the cell-type-specificity hypothesis; tested by parallel patch-clamp recording in excitatory neurons at both age windows
    dataset: ~
    dataset-doi: ~
    method: derived prediction
    confidence: strong

reproductions: []
---

The excitatory-spared prediction is the diagnostic negative control for cell-type
specificity. If excitatory neurons were also impaired, the PV-IN phenotype could not be
attributed to Kv3.1 (excitatory neurons would have to be impaired by something else, or
the variant would have a non-Kv3.1 effect). The juvenile + adult requirement excludes
both cell-autonomous and developmental-secondary alternatives. Tested by
`excitatory-neurons-unaffected-juvenile` (P16-21 K+ current, p=0.66) and
`excitatory-neurons-unaffected-adult` (P32-42, all comparisons NS except an unexplained
isolated rheobase reduction).
