---
uuid: 99ca4e8a-6fac-41f6-b901-5b63c1802a66
slug: lo-shows-reversed-specificity
doi: ~
claim: >
  In lateral occipital cortex (LO), the information-content pattern reverses relative to foveal V1: cross-shape decoding drops significantly (experimental: t(27)=3.41, p=0.002, difference=5.31%; control: t(27)=7.25, p<0.001, difference=6.7%) while cross-category decoding remains high, indicating that LO captures semantic category rather than low-level shape.
claim-type: empirical
concepts:
  - lateral occipital cortex
  - LO
  - semantic category
  - shape decoding
  - representational hierarchy
priority: 2026-03-30
epistemic: strong

belongings:
  - relation: supports
    target: decoding-shape-sensitive-not-semantic
  - relation: extends
    target: v1-category-decoding-drops-in-feedback

assertions:
  - paper-slug: kammer-2026-foveal-feedback
    doi: ~
    panel: fig3B
    analysis: Lucakaemmer/FovealFeedback (GitHub)
    dataset: https://doi.org/10.18112/openneuro.ds005933.v1.0.0
    dataset-doi: 10.18112/openneuro.ds005933.v1.0.0
    method: pairwise MVPA decoding in LO ROI, paired t-test vs baseline
    confidence: strong

reproductions:
  - agent: mainen-z
    date: 2026-03-30
    status: unverified:compute-infeasible
    notes: >
      LO masks generated from functional object localizer. The double dissociation (V1 drops
      category, LO drops shape) is the strongest support for the shape-specificity interpretation.
      Three-source confidence. LO effect is larger (5.31%) and more significant (p=0.002) than
      the V1 category effect.
---

This double dissociation — V1 drops category, LO drops shape — is the primary evidence that the paper's shape-vs-category claim is not simply a power argument. It demonstrates that the MVPA pipeline can detect category information (it does so in LO) but finds none in foveal V1 feedback, strengthening the interpretation that the V1 null for category reflects a real absence rather than insufficient sensitivity.
