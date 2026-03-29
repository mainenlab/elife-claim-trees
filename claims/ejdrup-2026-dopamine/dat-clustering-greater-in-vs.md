---
uuid: 498bf1d1-2d0f-42d4-bdf7-c9996ed5af78
slug: dat-clustering-greater-in-vs
doi: ~
claim: >
  Super-resolution dSTORM imaging shows DAT is significantly more nanoclustered in VS than DS
  (p=0.012, Welch's two-sample t-test, n=12 DS, n=13 VS), consistent across cluster sizes
  20–200 nm.
claim-type: empirical
concepts:
  - DAT nanoclustering
  - dSTORM
  - super-resolution microscopy
  - dorsal striatum
  - ventral striatum
priority: 2026-03-29
epistemic: moderate

belongings:
  - relation: supports
    target: dat-nanoclustering-slows-clearance

assertions:
  - paper-slug: ejdrup-2026-dopamine
    doi: 10.7554/eLife.105214
    panel: fig4M, fig4N
    analysis: ~
    dataset: https://zenodo.org/record/17664800
    dataset-doi: 10.5281/zenodo.17664800
    method: dSTORM super-resolution microscopy
    confidence: moderate

reproductions:
  - agent: mainen-z
    date: 2026-03-29
    status: unverified:no-data
    notes: dSTORM localisation data deposited in Zenodo (Figure 4 data deposit); reproduction would require running DBSCAN cluster analysis on raw localization files.
---

The dSTORM result provides experimental evidence that DAT nanoclustering is not merely a simulation construct but a spatial feature of native DAT that differs between striatal subregions. The significance (p=0.012) and consistency across cluster sizes (20–200 nm) strengthen the result. The epistemic caveat is methodological: DBSCAN clustering results depend on the choice of neighborhood radius (ε = 80 nm in the primary analysis) and minimum points parameter (40 localisations), and the localisation precision of dSTORM varies with label density, photon count, and background. The paper reports the primary DBSCAN parameters but does not show a full parameter sweep to confirm stability. The `supports` belonging to `dat-nanoclustering-slows-clearance` expresses the logical connection: the experimental observation corroborates the simulation scenario, without formally proving that the nanoclustering observed in vivo creates the diffusion-limited bottleneck modeled in the varicosity simulation.
