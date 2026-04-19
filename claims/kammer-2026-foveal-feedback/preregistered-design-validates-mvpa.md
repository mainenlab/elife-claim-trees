---
uuid: 80b476c0-6aca-4e39-9094-687cbb3a6756
slug: preregistered-design-validates-mvpa
doi: ~
claim: >
  The preregistered analysis plan (osf.io/rxacd) specifies the MVPA decoding pipeline, ROI definitions, and statistical tests in advance, reducing the risk of analytic flexibility inflating the decoding accuracy results.
displayClaim: >
  The MVPA pipeline, ROI definitions, and statistical tests were preregistered, constraining analytic flexibility for the main decoding results — though the parametric modulation analysis was excluded from the registered plan.
claim-type: assessment
role: methodological
concepts:
  - preregistration
  - MVPA
  - analytic flexibility
  - validity
priority: 2026-03-30
epistemic: moderate

enables-method:
  - foveal-v1-decodes-peripheral-saccade-target
  - foveal-feedback-below-direct-stimulation
  - cross-decoding-experimental-to-control
  - decoding-shape-sensitive-not-semantic
  - v1-category-decoding-drops-in-feedback
  - lo-shows-reversed-specificity
  - v2-v3-generalize-shape-not-category
  - u-shaped-eccentricity-rejects-spillover

belongings:
  - relation: requires
    target: preregistration-submitted-after-manuscript

assertions:
  - paper-slug: kammer-2026-foveal-feedback
    doi: ~
    panel: methods
    analysis: osf.io/rxacd (preregistration)
    dataset: ~
    dataset-doi: ~
    method: preregistration inspection
    confidence: moderate

reproductions:
  - agent: mainen-z
    date: 2026-03-30
    status: verified
    notes: >
      Preregistration exists at osf.io/rxacd and was confirmed prior to data collection. This is
      an assessment of analytic validity. Confirmed by checking preregistration existence. Epistemic
      downgraded from strong to moderate because the preregistration was submitted to OSF after
      manuscript submission (timing anomaly documented in Methods). Authors rely on OSF timestamps
      to establish precedence. The main MVPA claims are covered by the preregistration; the
      parametric modulation analysis (Fig4) was explicitly excluded.
---
