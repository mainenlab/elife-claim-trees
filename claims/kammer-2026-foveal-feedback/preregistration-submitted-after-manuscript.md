---
uuid: 1f206f40-a766-4818-ba18-73042a082df9
slug: preregistration-submitted-after-manuscript
doi: ~
claim: >
  Despite the preregistration text (osf.io/rxacd) being written before data collection, it was submitted to OSF only after the manuscript was submitted, with the authors relying on website timestamps to establish that the text predates data collection and was not altered.
displayClaim: >
  The preregistration was uploaded to OSF only after the manuscript was submitted, so its evidentiary weight rests on author-cited website timestamps rather than on a public deposit predating data collection.
claim-type: assessment
role: scope
concepts:
  - preregistration
  - timing
  - analytic validity
  - registered report
priority: 2026-03-30
epistemic: strong

scopes:
  - preregistered-design-validates-mvpa

belongings:
  - relation: requires
    target: preregistered-design-validates-mvpa

assertions:
  - paper-slug: kammer-2026-foveal-feedback
    doi: ~
    panel: methods
    analysis: Methods text; osf.io/rxacd timestamp inspection
    dataset: ~
    dataset-doi: ~
    method: methods text reading; preregistration inspection
    confidence: strong

reproductions:
  - agent: mainen-z
    date: 2026-03-30
    status: verified
    notes: >
      Methods text states: "due to an error on the authors' side, it [the preregistration] was only
      submitted after submission of the manuscript. However, timestamps on the website document
      demonstrate that the preregistration text was complete before data collection and not altered
      afterwards." Verified by direct text inspection. OSF timestamp verification not independently
      checked by this agent.
---

This assessment claim requires the `preregistered-design-validates-mvpa` claim because that claim's epistemic status depends on knowing the submission timing. A preregistration submitted before data collection but after manuscript submission is sometimes called "Registered Report lite" — it provides some protection against post-hoc analysis selection but weaker protection against outcome-contingent framing. The authors' reliance on OSF timestamps is plausible but not independently verifiable from the paper alone. A reproduction agent could inspect the OSF page for timestamp evidence.
