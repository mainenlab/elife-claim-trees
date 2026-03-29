---
uuid: 8300c7dc-9386-4a06-9763-c3b681b5c282
slug: nanoclustering-model-varicosity-scale
doi: ~
claim: >
  The nanoclustering simulations (Figure 4C–F) operate in a standalone varicosity-scale model
  (1.8 × 1.8 µm domain, 0.02 µm voxels) architecturally separate from the tissue-level model
  used in Figures 1–3 (100 µm domain, 1 µm voxels); no formal coupling exists between the two
  models and no effective-Vmax output from the nanoclustering simulation feeds into the tissue
  simulation.
claim-type: assessment
concepts:
  - DAT nanoclustering
  - multiscale modelling
  - model architecture
  - spatial scale
priority: 2026-03-29
epistemic: moderate

belongings: []

assertions:
  - paper-slug: ejdrup-2026-dopamine
    doi: 10.7554/eLife.105214
    panel: fig4C, fig4D, fig4E, fig4F
    analysis: Figure 4-Fig 4 simulations-Source code.py
    dataset: ~
    dataset-doi: ~
    method: code inspection
    confidence: moderate

reproductions:
  - agent: mainen-z
    date: 2026-03-29
    status: unverified
    notes: ~
---

The paper presents nanoclustering as a "possible regulator" of regional DA dynamics, but the two simulations (varicosity-scale and tissue-scale) are not formally coupled. The varicosity model demonstrates that dense DAT clusters produce a diffusion-limited clearance bottleneck, but this result is not fed back as a modified Vmax into the tissue-scale model. The logical argument — that nanoclustering in VS could contribute to lower effective Vmax in VS — is plausible but qualitative. Quantitative claims that depend on nanoclustering effects at the tissue scale inherit this architectural gap. The scale separation is real and properly described in the paper; the assessment concern is the absence of formal integration between the two simulations.
