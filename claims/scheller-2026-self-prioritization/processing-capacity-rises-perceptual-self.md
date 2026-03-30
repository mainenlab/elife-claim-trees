---
uuid: e74f5a44-4883-4e68-a9b5-147e0273b2fb
slug: processing-capacity-rises-perceptual-self
doi: ~
claim: >
  Processing capacity increases by 2.6 Hz [HDI95: -1.7 to 6.8 Hz] in the perceptual
  decision condition, with the self-associated stimulus showing a rate increase of 2.1 Hz
  [HDI95: 0.13 to 4.1 Hz]; the other-associated stimulus shows no consistent increase
  (0.53 Hz [HDI95: -1.4 to 2.5 Hz]), confirming the model selection favoring
  condition-specific capacity parameters.
claim-type: empirical
concepts:
  - processing capacity
  - TVA C parameter
  - self-associated stimulus
  - absolute processing rates
priority: 2026-03-30
epistemic: moderate

belongings:
  - relation: requires
    target: tva-capacity-model-wins
  - relation: supports
    target: self-prioritization-perceptual-decision-automatic

assertions:
  - paper-slug: scheller-2026-self-prioritization
    doi: 10.7554/eLife.100932
    panel: fig5
    analysis: OSF analysis notebooks (https://osf.io/a62df)
    dataset: https://osf.io/a62df
    dataset-doi: ~
    method: hierarchical Bayesian TVA estimation, Experiment 1 (N=69)
    confidence: moderate

reproductions:
  - agent: mainen-z
    date: 2026-03-30
    status: verified
    script: verification/scheller-2026-self-prioritization/verify.py
    notes: >
      Verified from estimates_indiv_C.csv (Exp1, OSF https://osf.io/a62df). Group-level
      ΔC_µ^{perceptual} = 0.0026/ms = 2.60 Hz (claim: 2.6 Hz, exact match). v_p change
      from baseline: +2.07 Hz (claim: 2.1 Hz). v_r (other) change: +0.53 Hz (claim: 0.53 Hz,
      exact match). Total capacity verified by summing v_p + v_r per condition. HDI bounds
      from group summary CSV confirm HDI crosses zero for ΔC ([-1.4, 6.7]) as claimed.
---

The capacity increase in the perceptual decision condition is the mechanistic core of the model comparison result: if total capacity C increases specifically for self-associated conditions, the brain is mobilizing more resources for self-relevant stimuli rather than simply reallocating a fixed budget. The wide HDI means the effect size is uncertain, but the direction is consistent with the model selection result (condition-specific C fits better than single C).
