---
uuid: 568bd16c-91dc-4bf0-8841-1836968cf68e
slug: gamma-optimal-perisomatic-ap-modulation
doi: ~
claim: >
  In a sweep across 11 frequencies from 0.5 to 80 Hz, gamma frequencies (40–80 Hz) produce
  the strongest phase-dependent modulation of somatic action potential voltage threshold by
  perisomatic rhythmic inhibition.
claim-type: empirical
concepts:
  - gamma rhythm
  - AP voltage threshold
  - perisomatic inhibition
  - frequency sweep
  - phase modulation
priority: 2026-03-30
epistemic: strong

belongings:
  - relation: requires
    target: l5-model-single-cell-scope
  - relation: supports
    target: gamma-perisomatic-no-dendritic-spike-change
  - relation: supports
    target: gamma-gates-proximal-basal-inputs
  - relation: supports
    target: pv-gamma-sst-beta-correspondence

assertions:
  - paper-slug: headley-2026-inhibitory-rhythms
    doi: 10.7554/eLife.95562
    panel: fig8
    analysis: scripts/Fig8.ipynb
    dataset: https://datadryad.org/dataset/doi:10.5061/dryad.v6wwpzhb8
    dataset-doi: 10.5061/dryad.v6wwpzhb8
    method: compartmental modelling — perisomatic frequency sweep
    confidence: strong

reproductions:
  - agent: mainen-z
    date: 2026-03-30
    status: unverified:no-data
    notes: >
      Script: Fig8.ipynb requires Dryad simulation files from DendCompOscPublic/
      (11-frequency perisomatic sweep, 0.5–80 Hz). Not in GitHub repo.
      Blocked pending Dryad download (doi:10.5061/dryad.v6wwpzhb8).
---

The gamma optimum for perisomatic AP threshold modulation has a different mechanistic basis than the beta/distal optimum. At gamma frequencies (~40–80 Hz), the inhibitory cycle is brief (~12–25 ms), which efficiently gates the fast Na+ spike process that underlies axonal AP initiation. The perisomatic location means the inhibitory conductance directly modulates the axon initial segment depolarization window. Slower frequencies allow recovery between cycles; faster frequencies would produce sustained suppression rather than phase-specific modulation.
