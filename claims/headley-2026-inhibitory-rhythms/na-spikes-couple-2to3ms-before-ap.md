---
uuid: fb9ac5da-3094-4370-b277-fe34853856b1
slug: na-spikes-couple-2to3ms-before-ap
doi: ~
claim: >
  Na+ dendritic spikes in proximal compartments peak in spike-triggered averages 2–3 ms
  before somatic action potentials, with coupling strength declining with electrotonic
  distance from the soma.
claim-type: empirical
concepts:
  - Na+ dendritic spikes
  - spike-triggered average
  - action potential coupling
  - electrotonic distance
priority: 2026-03-30
epistemic: strong

belongings:
  - relation: requires
    target: l5-model-single-cell-scope
  - relation: supports
    target: distal-inhib-drops-firing-02hz

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
      Script identified: scripts/Fig2_3.ipynb. Data files present: data/apical_na.npy,
      data/basal_na.npy, data/Figure2b.csv, data/Figure2c.csv, data/Figure3a.csv etc.
      Reproduction path is clear; not yet executed.
---

The 2–3 ms lead time for Na+ spikes relative to somatic APs reflects the fast kinetics of Na+ channels and the proximity of the relevant compartments. The coupling falls off with electrotonic distance because more distal Na+ spikes are electrotonically filtered before reaching the soma. This result motivates the interpretation that perisomatic inhibition preferentially affects Na+ spike-driven output.
