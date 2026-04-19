---
uuid: 4e5f6a7b-8c9d-4e01-9f02-5a6b7c8d9e0f
slug: hypothesis-feedback-carries-shape-not-category
doi: ~
claim: >
  Foveal feedback to early visual cortex carries low-to-mid-level visual feature information (shape) rather than high-level semantic category information about the saccade target, reflecting the representational level appropriate to early visual cortex rather than to ventral object-selective cortex.
displayClaim: >
  Foveal feedback to early visual cortex carries shape information but not semantic category — the level of representation appropriate to V1, not LO.
claim-type: hypothesis
role: hypothesis
concepts:
  - feedback content
  - shape
  - semantic category
  - representational hierarchy
  - foveal V1
  - LO
priority: 2026-03-30
epistemic: hypothesis
status: N/A
panel: hypothesis

entails:
  - prediction-v1-category-drops-shape-preserved
  - prediction-lo-inverse-pattern

belongings: []

assertions:
  - paper-slug: kammer-2026-foveal-feedback
    doi: ~
    panel: hypothesis
    analysis: paper Results framing for fig3
    dataset: ~
    dataset-doi: ~
    method: hypothesis statement
    confidence: strong

reproductions: []
---

The level-of-representation hypothesis is grounded in the standard ventral-stream hierarchy: V1 codes for low-level features (edges, orientation, simple shape primitives), LO codes for object identity / semantic category. A feedback signal targeting V1 should, by hypothesis, lie at V1's representational level. Two predictions follow: V1 should show preserved shape decoding but degraded category decoding under feedback; LO should show the inverse — preserved category decoding but degraded shape decoding. The combination (a double dissociation) discriminates this hypothesis from a generic "any feedback works" account and from a generic "MVPA detects nothing in V1" power-failure account.
