---
uuid: 59c5e057-e281-4d1f-9e14-c7e7557c453c
slug: parametric-modulation-exploratory-not-preregistered
doi: ~
claim: >
  The parametric modulation analysis linking IPS, FEF, and LO activity to foveal decoding fluctuations (Figure 4) was explicitly conducted as an exploratory analysis and was not included in the preregistered analysis plan, reducing its confirmatory weight relative to the main MVPA decoding results.
displayClaim: >
  The parametric modulation analysis identifying IPS as a feedback driver was explicitly exploratory and outside the preregistered plan, so it carries the weight of a hypothesis-generating result rather than a confirmatory test.
claim-type: assessment
role: scope
concepts:
  - preregistration
  - exploratory analysis
  - parametric modulation
  - analytic validity
  - IPS
priority: 2026-03-30
epistemic: strong

scopes:
  - ips-candidate-driver-foveal-feedback
  - fef-lo-nonsignificant-after-correction
  - ips-foveal-effect-reverses-in-control

belongings:
  - relation: requires
    target: ips-candidate-driver-foveal-feedback

assertions:
  - paper-slug: kammer-2026-foveal-feedback
    doi: ~
    panel: methods
    analysis: osf.io/rxacd (preregistration inspection) + Methods text
    dataset: ~
    dataset-doi: ~
    method: preregistration inspection; methods text reading
    confidence: strong

reproductions:
  - agent: mainen-z
    date: 2026-03-30
    status: verified
    notes: >
      Methods section states explicitly: "This study was pre-registered on OSF (https://osf.io/rxacd/),
      detailing the hypotheses, methodology, and planned analyses prior to data collection, with the
      exception of the exploratory parametric modulation analysis." One-source (C, structure reader),
      but confirmed directly from methods text. The claim is verified by direct text inspection.
---

Additionally, the Methods note a timing anomaly in the preregistration: the preregistration was submitted to OSF after the manuscript was submitted, not before data collection as intended. The authors state that timestamps on the website demonstrate the text was complete before data collection and unaltered. This limits the preregistration's evidentiary weight for the confirmatory claims as well — but more so for the parametric modulation analysis, which was explicitly excluded from the preregistered plan. A skeptical reading would treat Figure 4 results as exploratory throughout.
