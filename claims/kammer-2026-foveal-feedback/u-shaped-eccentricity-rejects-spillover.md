---
uuid: 5e63c146-b0e8-457b-8fdc-5751afaefb2a
slug: u-shaped-eccentricity-rejects-spillover
doi: ~
claim: >
  Decoding accuracy in the experimental condition follows a U-shaped function of eccentricity — stronger at foveal and peripheral regions, weaker at parafoveal regions — in all early visual areas (V1: t(27)=3.98, p=0.008; V2: t(27)=3.03, p=0.02; V3: t(27)=2.776, p=0.025, one-sided quadratic curvature), ruling out peripheral spillover as an explanation for foveal decoding.
claim-type: empirical
concepts:
  - eccentricity
  - peripheral spillover
  - U-shaped profile
  - early visual cortex
  - foveal feedback
priority: 2026-03-30
epistemic: strong

belongings:
  - relation: supports
    target: foveal-v1-decodes-peripheral-saccade-target

assertions:
  - paper-slug: kammer-2026-foveal-feedback
    doi: ~
    panel: fig2B
    analysis: Lucakaemmer/FovealFeedback (GitHub)
    dataset: https://doi.org/10.18112/openneuro.ds005933.v1.0.0
    dataset-doi: 10.18112/openneuro.ds005933.v1.0.0
    method: weighted quadratic regression on eccentricity-binned decoding accuracy, fMRI
    confidence: strong

reproductions:
  - agent: mainen-z
    date: 2026-03-30
    status: unverified:compute-infeasible
    notes: >
      Requires retinotopic ROI construction and eccentricity-binned decoding. Control condition shows
      monotonic decay from center, confirming the U-shape is specific to the experimental condition.
      Three-source confidence: found by all three extraction passes.
---

The U-shaped eccentricity profile is the key control ruling out the peripheral-spillover alternative. If decoding in foveal V1 were driven by large receptive fields reaching into the periphery (cf Williams et al. 2008), one would expect a monotonic relationship between peripheral and foveal decoding in the experimental condition. Instead, the decoding dip at parafoveal eccentricities dissociates foveal feedback from direct peripheral activation. The control condition shows the expected monotonic decay (strongest at center), providing a clean contrast. All three quadratic curvature tests survive at p<0.05 (one-sided), though the preregistration did not preregister this specific test.
