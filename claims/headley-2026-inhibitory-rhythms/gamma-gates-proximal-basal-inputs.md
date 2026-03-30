---
uuid: e1ce7be2-5fe7-4cda-80cb-775473b52e21
slug: gamma-gates-proximal-basal-inputs
doi: ~
claim: >
  Gamma-frequency rhythmic inhibition at perisomatic locations gates the transmission of
  clustered synaptic inputs from proximal and basal dendrites to somatic output in a
  phase-dependent manner, while leaving distal apical inputs relatively unaffected.
claim-type: empirical
concepts:
  - gamma rhythm
  - perisomatic inhibition
  - synaptic input gating
  - basal dendrites
  - proximal inputs
priority: 2026-03-30
epistemic: strong

belongings:
  - relation: requires
    target: gamma-optimal-perisomatic-ap-modulation
  - relation: requires
    target: gamma-perisomatic-no-dendritic-spike-change
  - relation: requires
    target: l5-model-single-cell-scope
  - relation: supports
    target: pv-gamma-sst-beta-correspondence

assertions:
  - paper-slug: headley-2026-inhibitory-rhythms
    doi: 10.7554/eLife.95562
    panel: fig10
    analysis: scripts/Fig10.ipynb
    dataset: https://datadryad.org/dataset/doi:10.5061/dryad.v6wwpzhb8
    dataset-doi: 10.5061/dryad.v6wwpzhb8
    method: compartmental modelling — clustered input gating experiment
    confidence: strong

reproductions:
  - agent: mainen-z
    date: 2026-03-30
    status: unverified
    notes: >
      Script: Fig10.ipynb. Not yet executed. Same script as beta-gates-distal-apical-inputs —
      Figure 10 tests both input streams.
---

The gamma/proximal gating result is the counterpart to the beta/distal gating: together they establish that the two inhibitory streams independently gate two different input pathways. Gamma perisomatic inhibition modulates AP threshold timing without suppressing dendritic spikes, so it controls which proximal/basal depolarizations cross threshold at the axon initial segment. The distal dendritic inputs (top-down) are relatively spared by perisomatic gamma because the Ca²⁺/NMDA spikes initiated in distal compartments are not directly controlled by perisomatic conductances.
