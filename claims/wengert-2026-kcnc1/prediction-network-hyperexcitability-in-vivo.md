---
uuid: 6830e27e-2b1a-4d64-a35f-cb2ce47f0871
slug: prediction-network-hyperexcitability-in-vivo
doi: ~
claim: >
  If PV-IN dysfunction reduces effective perisomatic inhibition in vivo, then awake
  Kcnc1-A421V/+ mice should show measurable signatures of cortical hyperexcitability
  by two-photon calcium imaging: (i) paroxysmal hypersynchronous neuropil discharges
  not present in WT, reflecting brief network-wide bursts of activity, and (ii)
  elevated calcium transient frequency in PV-negative (excitatory) cells during
  low-arousal states, reflecting tonic disinhibition. These signatures should be
  state-dependent — present during quiet rest, when tonic inhibition normally dominates
  — and may be masked or compensated during active arousal states (e.g. running) when
  other modulatory inputs dominate cortical state.
displayClaim: >
  Awake Kcnc1-A421V/+ mice should show two-photon signatures of cortical disinhibition:
  paroxysmal hypersynchronous discharges (mutant-only) and elevated PV-negative cell
  activity during quiet rest.
claim-type: prediction
role: prediction
concepts:
  - prediction
  - in vivo calcium imaging
  - hypersynchronous discharge
  - perisomatic inhibition
  - network hyperexcitability
  - state-dependence
priority: 2026-04-20
epistemic: prediction
status: N/A
panel: prediction

derived-from:
  - hypothesis-pv-dysfunction-drives-encephalopathy

belongings: []

assertions:
  - paper-slug: wengert-2026-kcnc1
    doi: 10.7554/eLife.103784
    panel: prediction
    analysis: derived from the disease-mechanism hypothesis; tested by two-photon GCaMP imaging in awake head-fixed mice
    dataset: ~
    dataset-doi: ~
    method: derived prediction
    confidence: strong

reproductions: []
---

The in vivo prediction tests whether the cell-physiological deficit translates into a
network-level signature in the intact behaving animal. Hypersynchrony and elevated
excitatory activity are the predicted cortical-circuit consequences of reduced PV-IN
control. Tested by `in-vivo-hypersynchronous-discharges-mutant-only` (7/7 KI vs 0/5 WT)
and `in-vivo-pv-minus-transient-frequency-increased` (elevated PV-negative cell activity
during quiet rest, state-dependent as predicted).
