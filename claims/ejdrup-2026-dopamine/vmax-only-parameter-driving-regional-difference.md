---
uuid: 1e689f9b-1bf5-4abd-98b9-daa3af67c795
slug: vmax-only-parameter-driving-regional-difference
doi: ~
claim: >
  Across parameter sweeps of active terminal fraction, quantal size, release probability, and
  firing rate, only DAT Vmax generates differential responses between DS and VS; all other
  parameters shift both regions proportionally without altering the regional contrast.
claim-type: empirical
concepts:
  - DAT Vmax
  - parameter sensitivity
  - regional contrast
  - dopamine dynamics
priority: 2026-03-29
epistemic: strong

belongings:
  - relation: requires
    target: vs-maintains-pervasive-tonic-da

assertions:
  - paper-slug: ejdrup-2026-dopamine
    doi: 10.7554/eLife.105214
    panel: fig3B, fig3C, fig3E, fig3F, fig3G, fig3K, fig3L
    analysis: Figure 3-Fig 3b, c, e-g-Source code.py, Figure 3-Fig 3i-Source code.py, Figure 3-Fig 3k, l-Source code.py
    dataset: https://zenodo.org/record/17664800
    dataset-doi: 10.5281/zenodo.17664800
    method: mathematical modelling
    confidence: strong

reproductions:
  - agent: mainen-z
    date: 2026-03-29
    status: unverified
    notes: ~
---

This is the strongest claim in the paper. The parameter sweep is comprehensive across the physiologically relevant parameters that could plausibly explain the regional DA difference: active terminal fraction, release probability, quantal size, and firing rate. In each case, varying the parameter shifts both DS and VS in the same direction and by similar magnitudes, leaving the regional contrast unchanged. Only manipulating DAT Vmax selectively alters the regional contrast. This is a clean mechanistic identification result that would stand even under substantially different model parameterizations. The epistemic rating of `strong` is warranted by the breadth of the sweep and the clarity of the selectivity. The formal dependency on `vs-maintains-pervasive-tonic-da` reflects that the sweep is only meaningful in the context of the regional difference already established.
