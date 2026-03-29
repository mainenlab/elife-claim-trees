---
uuid: 897a3449-e5bd-4f12-99f2-e701f5989c74
slug: vs-lowest-percentiles-above-10nm
doi: ~
claim: >
  Even the lowest DA concentration percentiles in VS exceed 10 nM during 4 Hz pacemaker
  activity.
claim-type: empirical
concepts:
  - ventral striatum
  - tonic dopamine
  - concentration distribution
  - percentile analysis
priority: 2026-03-29
epistemic: moderate

belongings:
  - relation: requires
    target: vs-maintains-pervasive-tonic-da

assertions:
  - paper-slug: ejdrup-2026-dopamine
    doi: 10.7554/eLife.105214
    panel: fig2D
    analysis: Figure 2-Fig 2a-f-Source code.py
    dataset: https://zenodo.org/record/17664800
    dataset-doi: 10.5281/zenodo.17664800
    method: mathematical modelling
    confidence: moderate

reproductions:
  - agent: mainen-z
    date: 2026-03-29
    status: unverified
    notes: ~
---

Figure 2D presents the cumulative distribution of [DA] across all simulated voxels in VS during pacemaker activity. The 10 nM threshold is meaningful because D2R EC50 is modeled at 7 nM — concentrations above this level engage D2Rs. The claim that even the lowest percentiles exceed 10 nM is the quantitative basis for the higher VS D2R occupancy claim (`d2r-occupancy-higher-in-vs`). The absolute concentration values are simulation outputs dependent on Vmax and model geometry; the shape of the distribution is the more informative quantity. This claim is moderately supported given the Vmax assumption, and would be weak if the Vmax ratio differs substantially from 3:1.
