---
uuid: 7c9a1f6b-2b8c-4e1a-9d31-3f0b6c1e8a52
slug: hypothesis-dl-pipeline-enables-network-nvc
doi: ~
claim: >
  A deep-learning segmentation pipeline (UNet/UNETR ensemble) coupled with cross-time-point
  registration, vertex-wise radius estimation, and graph-theoretic network analysis can produce
  reliable, automated, network-level measurements of neurovascular coupling in volumetric
  two-photon fluorescence microscopy of cerebral microcirculation — measurements that prior
  point-measurement and manual-segmentation approaches could not yield at the scale of hundreds
  of interconnected vessels per FOV. The performance ceiling of conventional baselines (ilastik,
  single-time-point segmentation, point-caliber tracking) is set by their inability to handle
  volumetric SNR, transient RBC plugs, and within-vessel radius heterogeneity — not by an
  intrinsic limit of the imaging modality.
displayClaim: >
  A DL segmentation + registration + graph-analysis pipeline can deliver automated network-level
  neurovascular-coupling measurements across hundreds of vessels per FOV, where prior baselines
  (ilastik, point-caliber, single-time-point) fall short.
claim-type: hypothesis
role: hypothesis
concepts:
  - deep learning segmentation
  - neurovascular coupling
  - vascular network
  - two-photon fluorescence microscopy
  - methodological hypothesis
priority: 2026-04-20
epistemic: hypothesis

entails:
  - prediction-pipeline-outperforms-baselines
  - prediction-pipeline-reveals-network-coordination

belongings: []

assertions:
  - paper-slug: rozak-2026-neurovascular-dl
    doi: 10.7554/eLife.95525
    panel: hypothesis
    analysis: ~
    dataset: ~
    dataset-doi: ~
    method: hypothesis stated in introduction; operationalised by the NOVAS3D pipeline (Fig 1)
    confidence: N/A

reproductions: []
---

This is the methodological hypothesis that motivates the pipeline. The choice to combine UNet/UNETR
segmentation with rigid cross-time-point registration, vertex-wise centerline radius estimation, and
graph-theoretic analysis is itself a structural commitment: the paper bets that all four components
are necessary to recover network-level NVC, and that no single component alone suffices. The
hypothesis is dissociable from a "pipeline ceiling" alternative — under the alternative, the
ensemble would yield only marginal improvements over ilastik and would not recover meaningfully
more vessel segments through registration. Resolved in favour of the engineering hypothesis by the
combination of (1) significant HD95 improvement of UNETR vs ilastik (`unetr-outperforms-ilastik-hd95`),
(2) the 241→412 vessel-count increase from registration + mask union (`registration-doubles-vessel-count`),
and (3) the R²=0.68 simulated-radius validation (`radius-estimation-r2-0p68`).
