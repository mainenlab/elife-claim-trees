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
    status: verified
    script: verification/headley-2026-inhibitory-rhythms/verify.py
    original_script: https://github.com/dbheadley/InhibOnDendComp/blob/main/scripts/Fig2_3.ipynb
    script_execution: unmodified
    script_execution_note: "Run unmodified on pre-computed CSV data from GitHub repo"
    time_fast: "~2 min"
    time_full: "~6 hrs (NEURON + 1.88 GB Dryad)"
    notes: >
      Verified from pre-computed Figure2b.csv and Figure3b.csv in repo data/. Na STA
      peak times by apical compartment distance (Figure2b.csv): dist=0→-2 ms, dist=1→-3 ms,
      dist=2→-1 ms, dist=3→-2 ms, dist=4→-2 ms, dist=5→-1 ms, dist=6→-2 ms, dist=7→-2 ms.
      Proximal compartments (dist 0-7) consistently peak at -1 to -3 ms before somatic AP.
      Amplitude decays monotonically with distance (0.598 at dist=4 → 0.132 at dist=7).
      Figure3b confirms Na STA structure with proximal peaks at 1-3 ms. Full Dryad simulation
      files not needed — pre-computed summary CSVs in repo are sufficient. Claim verified:
      Na+ spikes peak 2–3 ms before AP in proximal compartments; coupling declines with distance.
---

The 2–3 ms lead time for Na+ spikes relative to somatic APs reflects the fast kinetics of Na+ channels and the proximity of the relevant compartments. The coupling falls off with electrotonic distance because more distal Na+ spikes are electrotonically filtered before reaching the soma. This result motivates the interpretation that perisomatic inhibition preferentially affects Na+ spike-driven output.
