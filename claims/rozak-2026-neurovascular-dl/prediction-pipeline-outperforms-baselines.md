---
uuid: 4e5d8b2c-7a91-4c3f-b1e0-2d3f4a5b6c7e
slug: prediction-pipeline-outperforms-baselines
doi: ~
claim: >
  If the DL segmentation + registration + radius-estimation stack genuinely improves on
  conventional baselines, then (a) the UNet/UNETR ensemble should significantly outperform
  ilastik on volumetric segmentation metrics (HD95, Dice, precision), (b) cross-time-point
  registration combined with mask union should recover substantially more vessel segments per
  FOV than any single time-point segmentation, and (c) the boundary-detection radius estimator
  should recover known simulated radii with high R² and remain stable to physiologically realistic
  noise levels.
displayClaim: >
  The DL pipeline should beat ilastik on segmentation metrics, registration + mask union should
  roughly double recovered vessel counts per FOV, and radius estimation should match simulated
  ground truth at high R² and tolerate realistic noise.
claim-type: prediction
role: prediction
concepts:
  - benchmark prediction
  - pipeline validation
  - segmentation metrics
  - registration
  - radius estimation
priority: 2026-04-20
epistemic: prediction
status: N/A
panel: prediction

derived-from:
  - hypothesis-dl-pipeline-enables-network-nvc

belongings: []

assertions:
  - paper-slug: rozak-2026-neurovascular-dl
    doi: 10.7554/eLife.95525
    panel: prediction
    analysis: ~
    dataset: ~
    dataset-doi: ~
    method: derived prediction
    confidence: strong

reproductions: []
---

This prediction operationalises the engineering hypothesis into three measurable benchmarks. It
fails if any of the three components fails: ilastik-comparable DL segmentation, registration that
does not recover gap-vessels, or radius estimates that collapse under noise. Tested by
`unetr-outperforms-ilastik-hd95` and `novas3d-outperforms-ilastik` (segmentation), by
`registration-doubles-vessel-count` (registration), and by `radius-estimation-r2-0p68` (radius
recovery). The prediction is moderate-confidence as derived because the paper does not stake a
specific quantitative threshold ahead of time — it argues post-hoc that ilastik over-segments and
that registration recovers gap-vessels.
