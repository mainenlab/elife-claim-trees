---
uuid: 5476d15d-5249-43b3-a1db-ec0fa4ede39b
slug: decoding-shape-sensitive-not-semantic
doi: ~
claim: >
  Foveal V1 feedback contains low-to-mid-level visual information (shape-sensitive) but not higher-level semantic category information (animal vs instrument not decodable), indicating that feedback signals represent low-level feature properties of the saccade target.
claim-type: empirical
concepts:
  - shape decoding
  - semantic category
  - low-level features
  - foveal V1
  - feedback content
priority: 2026-03-30
epistemic: moderate

belongings: []

assertions:
  - paper-slug: kammer-2026-foveal-feedback
    doi: ~
    panel: fig3
    analysis: Lucakaemmer/FovealFeedback (GitHub)
    dataset: https://doi.org/10.18112/openneuro.ds005933.v1.0.0
    dataset-doi: 10.18112/openneuro.ds005933.v1.0.0
    method: category-specific decoding, MVPA
    confidence: moderate

reproductions:
  - agent: mainen-z
    date: 2026-03-30
    status: unverified:compute-infeasible
    notes: >
      Requires running decoding analysis separately for shape vs category features. Not yet executed.
---
