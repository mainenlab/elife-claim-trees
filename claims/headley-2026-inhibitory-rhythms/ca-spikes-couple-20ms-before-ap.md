---
uuid: 9c3d1464-1a51-4381-a466-fcb1ca6fca65
slug: ca-spikes-couple-20ms-before-ap
doi: ~
claim: >
  Ca²⁺ spikes in apical tuft dendrites precede somatic action potentials by approximately
  20 ms in spike-triggered averages, with the strongest coupling in apical compartments
  distal from the soma.
claim-type: empirical
concepts:
  - Ca2+ spikes
  - apical dendrites
  - spike-triggered average
  - action potential coupling
priority: 2026-03-30
epistemic: strong

belongings:
  - relation: requires
    target: l5-model-single-cell-scope
  - relation: supports
    target: beta-bidirectional-dendritic-control
  - relation: supports
    target: beta-gates-distal-apical-inputs

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
      Ca2+ spike data expected in DendEventTimes/ directory in data/. Script: Fig2_3.ipynb.
      Not yet executed.
---

Ca²⁺ spikes in apical tufts represent a key mechanism for top-down input integration in L5 pyramidal neurons. The ~20 ms lead before somatic APs means beta-frequency inhibition (cycle ~50 ms) can modulate whether a Ca²⁺ spike propagates to trigger a somatic AP. This mechanistic linkage is the foundation for the claim that SST+ interneurons (targeting apical dendrites at beta frequencies) control top-down integration in cortical circuits.
