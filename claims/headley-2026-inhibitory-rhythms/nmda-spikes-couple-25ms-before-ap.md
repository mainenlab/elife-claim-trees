---
uuid: 920d7adb-9ab1-4bc0-8185-de3e5de3a71e
slug: nmda-spikes-couple-25ms-before-ap
doi: ~
claim: >
  NMDA spikes show peak spike-triggered average approximately 25 ms before somatic action
  potentials, reflecting their slower kinetics relative to Na+ spikes.
claim-type: empirical
concepts:
  - NMDA spikes
  - spike-triggered average
  - action potential coupling
  - dendritic integration
priority: 2026-03-30
epistemic: strong

belongings:
  - relation: requires
    target: l5-model-single-cell-scope
  - relation: supports
    target: beta-optimal-distal-dendritic-entrainment

assertions:
  - paper-slug: headley-2026-inhibitory-rhythms
    doi: 10.7554/eLife.95562
    panel: fig2, fig3
    analysis: scripts/Fig2_3.ipynb
    dataset: https://datadryad.org/dataset/doi:10.5061/dryad.v6wwpzhb8
    dataset-doi: 10.5061/dryad.v6wwpzhb8
    method: spike-triggered average analysis
    confidence: strong

reproductions:
  - agent: mainen-z
    date: 2026-03-30
    status: unverified
    notes: >
      Data files: data/apical_nmda.npy, data/basal_nmda.npy. Script: Fig2_3.ipynb. Not yet
      executed.
---

The ~25 ms lead for NMDA spikes reflects the voltage-dependent Mg²⁺ block relief and slower NMDA receptor kinetics. The longer window means NMDA spikes initiated by distal inputs have time to propagate and summate before triggering a somatic AP. Beta-frequency inhibition (~20 Hz, cycle period ~50 ms) is well-matched to this temporal window, enabling bidirectional control within a single beta cycle.
