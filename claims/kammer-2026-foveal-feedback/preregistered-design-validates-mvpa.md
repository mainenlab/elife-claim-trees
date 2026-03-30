---
uuid: 80b476c0-6aca-4e39-9094-687cbb3a6756
slug: preregistered-design-validates-mvpa
doi: ~
claim: >
  The preregistered analysis plan (osf.io/rxacd) specifies the MVPA decoding pipeline, ROI definitions, and statistical tests in advance, reducing the risk of analytic flexibility inflating the decoding accuracy results.
claim-type: assessment
concepts:
  - preregistration
  - MVPA
  - analytic flexibility
  - validity
priority: 2026-03-30
epistemic: moderate

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
