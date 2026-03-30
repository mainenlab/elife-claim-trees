---
uuid: a56b114d-fbe5-422f-91cd-00a7de8b98ee
slug: igabasnfr2-kinetics-rise-decay
doi: ~
claim: >
  At 10 action potentials (83 Hz), iGABASnFR2 has a rise time constant of 43 ± 9 ms (faster than iGABASnFR1's 61 ± 13 ms) and a decay time constant of 73 ± 26 ms (slower than iGABASnFR1's 62 ± 29 ms), while iGABASnFR2n has a substantially slower rise time of 72 ± 8 ms.
claim-type: empirical
concepts:
  - iGABASnFR2
  - kinetics
  - rise time
  - decay time
  - iGABASnFR2n
priority: 2026-03-30
epistemic: strong

belongings:
  - relation: supports
    target: igabasnfr2-fourfold-sensitivity-gain

assertions:
  - paper-slug: kolb-2026-igabasnfr2
    doi: 10.7554/eLife.108319
    panel: fig2c, fig2d
    analysis: Zenodo analysis code
    dataset: https://doi.org/10.5281/zenodo.17971101
    dataset-doi: 10.5281/zenodo.17971101
    method: field stimulation in cultured neurons; exponential fits to ΔF/F₀ time courses; n=24 wells (iGABASnFR1, iGABASnFR2), n=18 wells (iGABASnFR2n)
    confidence: strong

reproductions:
  - agent: mainen-z
    date: 2026-03-30
    status: unverified:no-data
    notes: >
      All three sensors measured in parallel in same primary neuron culture. Rise and decay constants computed from exponential fits; statistics by Tukey's HSD post hoc test following one-way ANOVA. p<0.001 for both comparisons vs iGABASnFR1. Requires cultured neurons and field stimulation apparatus.
---

The kinetic profile of iGABASnFR2 — faster rise but slightly slower decay than iGABASnFR1 — represents a trade-off. Faster rise supports detection of rapid GABA transients; slower decay may limit the ability to resolve closely spaced events. iGABASnFR2n's substantially slower rise (72 ms vs 43 ms) is a meaningful limitation for applications requiring fast kinetics. The paper reports these values for the 1 AP condition in the caption (Fig 2c, d) and the 10 AP condition in Results — both are relevant because the 1 AP condition is the most demanding kinetics test.
