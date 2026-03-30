---
uuid: a4af1338-dbef-4dad-ba5d-699735dc08df
slug: foveal-v1-decodes-peripheral-saccade-target
doi: ~
claim: >
  Saccade target identity (4 stimuli varying in shape and semantic category) can be decoded from foveal V1 BOLD signal above chance in the experimental condition where targets disappear before fixation: 57.43% accuracy (t(27)=8.81, p<0.001), significantly above 50% chance.
claim-type: empirical
concepts:
  - foveal V1
  - decoding accuracy
  - saccade target
  - peripheral target
  - MVPA
priority: 2026-03-30
epistemic: strong

belongings: []

assertions:
  - paper-slug: kammer-2026-foveal-feedback
    doi: ~
    panel: fig2A
    analysis: Lucakaemmer/FovealFeedback (GitHub)
    dataset: https://doi.org/10.18112/openneuro.ds005933.v1.0.0
    dataset-doi: 10.18112/openneuro.ds005933.v1.0.0
    method: multivariate decoding (cross-validated classification), fMRI
    confidence: strong

reproductions:
  - agent: mainen-z
    date: 2026-03-30
    status: unverified:compute-infeasible
    notes: >
      OpenNeuro data accessible. GitHub analysis code (Python, nilearn/sklearn). MVPA across cross-validation folds is compute-intensive. Preregistered analysis plan (osf.io/rxacd). Not yet executed.
---
