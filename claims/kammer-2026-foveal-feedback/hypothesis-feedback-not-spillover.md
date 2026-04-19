---
uuid: 8a1c2d4e-9b3f-4a01-bc02-1d2e3f4a5b6c
slug: hypothesis-feedback-not-spillover
doi: ~
claim: >
  Foveal V1 decoding of peripheral saccade targets reflects genuine top-down feedback from higher cortical areas, not passive spillover from large peripheral receptive fields whose tails extend into the foveal representation.
displayClaim: >
  The foveal V1 decoding signal reflects genuine top-down feedback rather than passive spillover from peripheral receptive fields.
claim-type: hypothesis
role: hypothesis
concepts:
  - foveal feedback
  - peripheral spillover
  - receptive fields
  - early visual cortex
  - hypothesis
priority: 2026-03-30
epistemic: hypothesis
status: N/A
panel: hypothesis

entails:
  - prediction-u-shape-eccentricity

belongings: []

assertions:
  - paper-slug: kammer-2026-foveal-feedback
    doi: ~
    panel: hypothesis
    analysis: paper Introduction and Results framing
    dataset: ~
    dataset-doi: ~
    method: hypothesis statement
    confidence: strong

reproductions: []
---

This is the central interpretive hypothesis the paper sets out to test. The spillover alternative (cf Williams et al. 2008, large peripheral receptive fields encroaching on the foveal representation) would predict a monotonic eccentricity profile of decoding accuracy. The feedback hypothesis predicts a U-shape — a parafoveal dip with a foveal rise, since feedback would target the fovea-specific representation rather than tracking peripheral RF size. The paper tests this hypothesis primarily via the U-shape eccentricity analysis (`u-shaped-eccentricity-rejects-spillover`).
