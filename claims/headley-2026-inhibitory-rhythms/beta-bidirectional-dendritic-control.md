---
uuid: bf7efeee-2819-485d-a06d-1fc3782ce66f
slug: beta-bidirectional-dendritic-control
doi: ~
claim: >
  Beta-frequency rhythms at distal dendritic locations produce bidirectional control of
  dendritic spike probability: enhanced dendritic spike occurrence during inhibitory troughs
  and suppressed occurrence during inhibitory peaks within the same oscillatory cycle.
claim-type: empirical
concepts:
  - beta rhythm
  - bidirectional control
  - dendritic spike probability
  - phase-dependent modulation
  - inhibitory trough
priority: 2026-03-30
epistemic: moderate

belongings:
  - relation: requires
    target: beta-optimal-distal-dendritic-entrainment
  - relation: requires
    target: ca-spikes-couple-20ms-before-ap
  - relation: requires
    target: l5-model-single-cell-scope
  - relation: supports
    target: beta-gates-distal-apical-inputs

assertions:
  - paper-slug: headley-2026-inhibitory-rhythms
    doi: 10.7554/eLife.95562
    panel: fig5, fig7
    analysis: scripts/Fig5.ipynb, scripts/Fig7.ipynb
    dataset: https://datadryad.org/dataset/doi:10.5061/dryad.v6wwpzhb8
    dataset-doi: 10.5061/dryad.v6wwpzhb8
    method: compartmental modelling — phase-binned dendritic spike analysis
    confidence: moderate

reproductions:
  - agent: mainen-z
    date: 2026-03-30
    status: unverified
    notes: >
      Scripts: Fig5.ipynb, Fig7.ipynb. Phase-binned analysis uses src/phase_analysis module.
      Not yet executed.
---

Bidirectional control within a single beta cycle is a stronger claim than mere phase-dependent modulation — it asserts that the same inhibitory rhythm actively promotes spiking in one phase while suppressing it in another, rather than simply gating a uniform suppression. This bidirectional property emerges because the inhibitory trough provides a window of reduced conductance into which the slow Ca²⁺/NMDA spike dynamics can unfold. The epistemic status is moderate rather than strong because the quantitative asymmetry between trough-enhancement and peak-suppression is not extracted here; the claim is directionally clear but the relative magnitudes were not verified.
