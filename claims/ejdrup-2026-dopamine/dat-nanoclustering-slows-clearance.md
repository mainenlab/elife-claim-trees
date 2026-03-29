---
uuid: dba3c7b4-0a96-48cb-97d4-9aca0edbe90f
slug: dat-nanoclustering-slows-clearance
doi: ~
claim: >
  Dense DAT nanoclusters (20 nm diameter) take approximately 400 ms to clear a 100 nM DA bolus
  compared to approximately 200 ms for unclustered DAT, because local [DA] at the cluster
  surface drops near zero creating a diffusion-limited bottleneck.
claim-type: empirical
concepts:
  - DAT nanoclustering
  - dopamine clearance
  - diffusion limitation
  - varicosity-scale dynamics
priority: 2026-03-29
epistemic: moderate

belongings:
  - relation: requires
    target: nanoclustering-model-varicosity-scale
  - relation: requires
    target: nanoclustering-constant-vmax-constraint

assertions:
  - paper-slug: ejdrup-2026-dopamine
    doi: 10.7554/eLife.105214
    panel: fig4C, fig4D, fig4E, fig4F, fig4G
    analysis: Figure 4-Fig 4 simulations-Source code.py
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

The mechanism is physically intuitive: when DAT molecules are concentrated into nanoclusters rather than distributed uniformly across the membrane, DA arriving at the membrane surface rapidly depletes local [DA] at the cluster to near zero, reducing the concentration gradient that drives further uptake. This is analogous to enzyme saturation at a local level — even though total Vmax is held constant, the effective clearance rate is lower because substrates must diffuse to the cluster location. The ~2× slower clearance (400 vs 200 ms) is the quantitative result. This claim is scoped to the varicosity-scale model and cannot be directly translated to tissue-scale predictions without the formal coupling that the assessment node (`nanoclustering-model-varicosity-scale`) identifies as absent.
