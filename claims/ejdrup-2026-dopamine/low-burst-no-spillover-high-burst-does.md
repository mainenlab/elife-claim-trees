---
uuid: 961ce4c4-5809-4b6b-aaa4-c5f52373612c
slug: low-burst-no-spillover-high-burst-does
doi: ~
claim: >
  3 APs at 10 Hz generates no significant DA spillover outside the burst zone; 6 APs at 20 Hz
  and 12 APs at 40 Hz cause frequency-dependent spillover exposing 10× and 30× the burst volume
  to concentrations above 100 nM respectively.
claim-type: empirical
concepts:
  - burst firing
  - dopamine spillover
  - frequency dependence
  - dorsal striatum
priority: 2026-03-29
epistemic: moderate

belongings:
  - relation: requires
    target: ds-lacks-pervasive-tonic-da

assertions:
  - paper-slug: ejdrup-2026-dopamine
    doi: 10.7554/eLife.105214
    panel: fig1G
    analysis: Figure 1-Fig 1g-Source code.py
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

The frequency-dependent spillover result establishes a threshold logic for DA signaling in DS: short, low-frequency bursts produce spatially confined signals while longer or faster bursts break through the uptake barrier. The 10× and 30× volume figures are specific enough to be reproduction targets. The result requires the DS uptake environment as context — in VS, even low-frequency activity produces pervasive coverage (see `vs-maintains-pervasive-tonic-da`). Epistemic note: the simulated burst volumes and the threshold are sensitive to both the Vmax assumption and the fraction of co-active terminals, which is set at 100% for these panels.
