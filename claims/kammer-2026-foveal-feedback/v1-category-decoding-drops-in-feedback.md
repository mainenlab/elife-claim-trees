---
uuid: 96991fa1-856f-4b2e-875d-715d254696d0
slug: v1-category-decoding-drops-in-feedback
doi: ~
claim: >
  In foveal V1, decoding across semantic category drops significantly relative to baseline in the experimental condition (t(27)=2.25, p=0.033, difference=3.03%), while decoding across visual shape remains high, indicating that foveal feedback carries shape but not category information.
claim-type: empirical
concepts:
  - semantic category
  - shape decoding
  - foveal V1
  - information content
  - feedback specificity
priority: 2026-03-30
epistemic: moderate

belongings:
  - relation: supports
    target: decoding-shape-sensitive-not-semantic

assertions:
  - paper-slug: kammer-2026-foveal-feedback
    doi: ~
    panel: fig3B
    analysis: Lucakaemmer/FovealFeedback (GitHub)
    dataset: https://doi.org/10.18112/openneuro.ds005933.v1.0.0
    dataset-doi: 10.18112/openneuro.ds005933.v1.0.0
    method: pairwise MVPA decoding, paired t-test vs baseline
    confidence: moderate

reproductions:
  - agent: mainen-z
    date: 2026-03-30
    status: unverified:compute-infeasible
    notes: >
      Requires separate pairwise decoding for cross-category and cross-shape comparisons relative
      to a cross-both baseline. The effect size is modest (3.03% drop) and the p-value is p=0.033,
      near threshold. Three-source confidence.
---

The effect size for the category drop (3.03%) is substantially smaller than in the control condition (16.64%), which is consistent with the interpretation that feedback carries weaker categorical information than direct stimulation. The shape decoding comparison is not reported with a separate t-test in the results text — only the category drop is tested. This asymmetry means the "shape remains high" claim is inferred from the absence of a significant drop, not from a direct test, which limits its epistemic strength.
