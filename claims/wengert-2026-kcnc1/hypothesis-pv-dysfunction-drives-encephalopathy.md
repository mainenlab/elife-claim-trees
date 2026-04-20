---
uuid: 61e1a6da-52f8-426d-83bd-dd6f4cfa96fb
slug: hypothesis-pv-dysfunction-drives-encephalopathy
doi: ~
claim: >
  Cell-autonomous loss of Kv3.1 function in PV-INs is sufficient to drive the
  network-level developmental and epileptic encephalopathy phenotype of KCNC1 disease.
  Specifically, the impaired fast-spiking capacity of PV-INs reduces effective
  perisomatic inhibition of cortical excitatory neurons, causing increased excitatory
  network activity, hypersynchronous discharges, and clinically apparent seizures with
  premature lethality (SUDEP), as well as cognitive deficits attributable to disrupted
  PV-IN-dependent learning and plasticity. The hypothesis predicts that the inhibitory
  failure should manifest in vivo as elevated excitatory firing during low-arousal
  states, paroxysmal hypersynchronous discharges in mutants only, spontaneous
  convulsive seizures, and SUDEP — recapitulating the human KCNC1 DEE phenotype. It
  further predicts that synaptic-level inhibitory dysfunction may emerge progressively,
  if PV-IN spike output is impaired before terminal release machinery accumulates
  compensatory or pathological adaptations.
displayClaim: >
  Cell-autonomous Kv3.1 LOF in PV-INs is sufficient to drive the KCNC1 DEE phenotype:
  reduced inhibition → network hyperexcitability → seizures, SUDEP, and cognitive
  deficits.
claim-type: hypothesis
role: hypothesis
concepts:
  - epileptic encephalopathy
  - PV interneurons
  - perisomatic inhibition
  - network excitability
  - SUDEP
  - cognitive deficit
priority: 2026-04-20
epistemic: hypothesis
status: N/A
panel: hypothesis

entails:
  - prediction-network-hyperexcitability-in-vivo
  - prediction-seizures-and-sudep
  - prediction-cognitive-deficits
  - prediction-progressive-synaptic-failure

belongings: []

assertions:
  - paper-slug: wengert-2026-kcnc1
    doi: 10.7554/eLife.103784
    panel: hypothesis
    analysis: paper Introduction and Discussion; operationalised across in vivo two-photon imaging, video-EEG, behavioral testing, and survival analysis
    dataset: ~
    dataset-doi: ~
    method: hypothesis statement
    confidence: N/A

reproductions: []
---

This is the disease-mechanism hypothesis — the bridge from cell physiology to clinical
phenotype. It is the paper's strongest theoretical commitment: it asserts that the
Kcnc1-A421V/+ mouse, a single-gene heterozygous knock-in with cell-autonomous PV-IN
impairment, recapitulates the full developmental and epileptic encephalopathy syndrome
seen in human patients. The argument structure is convergent: every level of analysis
(in vivo calcium activity, EEG, behavior, survival) must align with the predicted
direction. Confirmed by `in-vivo-hypersynchronous-discharges-mutant-only` (7/7 KI vs
0/5 WT), `in-vivo-pv-minus-transient-frequency-increased` (elevated excitatory activity
during quiet rest), `spontaneous-seizures-and-sudep-kcnc1` (8/12 KI with convulsive
seizures, 4 SUDEP events captured), `a421v-spatial-learning-working-memory-impaired`
(Barnes maze, Y-maze deficits), `a421v-mice-die-before-122d` (premature lethality), and
`pv-in-inhibitory-synapse-altered-adult` (developmentally emergent synaptic failure).
The juvenile-vs-adult dissociation in synaptic function (`pv-in-inhibitory-synapse-intact-juvenile`
vs `pv-in-inhibitory-synapse-altered-adult`) tests a refinement: the hypothesis
predicted that synaptic failure could be developmentally emergent rather than congenital,
and that pattern is observed.
