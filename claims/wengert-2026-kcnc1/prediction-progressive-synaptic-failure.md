---
uuid: 17e60029-7f39-40d7-b4ea-8b6f83179baa
slug: prediction-progressive-synaptic-failure
doi: ~
claim: >
  If PV-IN spike output is impaired from juvenile stages but the synaptic terminal
  release machinery requires further developmental maturation (or accumulates
  pathological adaptations) to manifest a measurable phenotype, then PV-IN→excitatory
  unitary inhibitory synaptic transmission should be normal at juvenile stages
  (P16–21) and altered at young adult stages (P32–42). The adult alteration should
  carry a presynaptic signature consistent with altered release dynamics — for
  example, increased uIPSC amplitude with reduced paired-pulse ratio (enhanced
  initial release probability with faster depression). The temporal dissociation is a
  refinement of the disease-mechanism hypothesis: it specifies that the inhibitory
  failure is developmentally emergent, not congenital, at the synaptic level.
displayClaim: >
  PV-IN→excitatory unitary inhibitory transmission should be intact at juvenile
  stages but altered at young adult stages — a developmentally emergent synaptic
  failure.
claim-type: prediction
role: prediction
concepts:
  - prediction
  - synaptic transmission
  - paired-pulse ratio
  - developmental progression
  - juvenile vs adult
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
    analysis: derived from the disease-mechanism hypothesis; tested by dual whole-cell paired recording at two age windows
    dataset: ~
    dataset-doi: ~
    method: derived prediction
    confidence: moderate

reproductions: []
---

The progressive-synaptic-failure prediction is a refinement that the paper sets up
deliberately: by recording at both juvenile (P16-21) and young-adult (P32-42) windows,
it tests whether the synaptic-level phenotype is congenital or developmentally
emergent. The juvenile null + adult positive pattern is what was observed. Tested by
`pv-in-inhibitory-synapse-intact-juvenile` (juvenile null), `pv-in-inhibitory-synapse-altered-adult`
(adult positive: increased uIPSC amplitude, reduced PPR), and integrated by
`inhibitory-dysfunction-progresses-to-adulthood`.
