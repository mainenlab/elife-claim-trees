---
uuid: 3af0625b-efea-46a1-93d6-60b55f7506e9
slug: ips-foveal-effect-reverses-in-control
doi: ~
claim: >
  In the control condition (direct foveal stimulation), IPS activation is significantly negatively associated with foveal decoding (t(27)=−3.61, p=0.004, difference=11.6), the opposite direction to the experimental condition, confirming that the IPS–foveal decoding relationship is specific to the feedback context.
claim-type: empirical
concepts:
  - IPS
  - control condition
  - parametric modulation
  - specificity
  - direct stimulation
priority: 2026-03-30
epistemic: strong

belongings:
  - relation: supports
    target: ips-candidate-driver-foveal-feedback
  - relation: extends
    target: fef-lo-nonsignificant-after-correction

assertions:
  - paper-slug: kammer-2026-foveal-feedback
    doi: ~
    panel: fig4-figure-supplement-1
    analysis: Lucakaemmer/FovealFeedback (GitHub)
    dataset: https://doi.org/10.18112/openneuro.ds005933.v1.0.0
    dataset-doi: 10.18112/openneuro.ds005933.v1.0.0
    method: parametric modulation analysis (FSL FEAT), control condition
    confidence: strong

reproductions:
  - agent: mainen-z
    date: 2026-03-30
    status: unverified:compute-infeasible
    notes: >
      Control condition parametric modulation. The sign reversal is interpretable: in the control
      condition, IPS activity (related to eye movements) would be anti-correlated with foveal
      stimulus decoding because eye movements reduce foveal stimulation. Two-source confidence
      (B caption, A results text).
---

The reversal in the control condition is an important specificity check. If IPS activity were simply a proxy for brain-state variance or signal-to-noise, it would correlate with foveal decoding in both conditions. The fact that IPS correlates positively with foveal decoding in the experimental condition (eye movements → feedback → IPS active → better foveal decoding) but negatively in the control condition (eye movements → gaze away from foveal stimulus → IPS active → worse foveal decoding) is mechanistically coherent and supports the IPS-as-feedback-driver interpretation.
