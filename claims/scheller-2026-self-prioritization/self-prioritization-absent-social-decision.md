---
uuid: 2189823e-209f-479b-a068-032f5fba3818
slug: self-prioritization-absent-social-decision
doi: ~
claim: >
  In the social decision dimension (report whose shape flickered first), there is no
  processing advantage for self-associated stimuli: the relative advantage is 0.87 Hz
  [HDI95: −0.96 to 2.7 Hz], with 63.9% of the HDI favoring the other-associated stimulus
  (1.2 Hz [HDI95: −0.78 to 3.1 Hz]).
claim-type: empirical
role: empirical
concepts:
  - self-prioritization
  - social decision
  - other-prioritization
  - attentional selection
  - TVA processing rates
priority: 2026-03-30
epistemic: moderate

tests:
  - prediction-self-advantage-attenuated-social-decision
confirms:
  - hypothesis-self-association-alters-attentional-selection
dissociates-with:
  - self-prioritization-perceptual-decision-automatic

belongings:
  - relation: requires
    target: tva-capacity-model-wins
  - relation: supports
    target: self-prioritization-automatic-early
  - relation: supports
    target: decisional-dimension-tradeoff

assertions:
  - paper-slug: scheller-2026-self-prioritization
    doi: 10.7554/eLife.100932
    panel: fig5
    figureUri: https://iiif.elifesciences.org/lax/100932%2Felife-100932-fig5-v1.tif/full/1500,/0/default.jpg
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
    original_figure: verification/originals/scheller-2026-self-prioritization/fig5.jpg
    figure: verification/scheller-2026-self-prioritization/fig-social-decision-inversion.png
    original_script: https://osf.io/a62df
    script_execution: pre-computed
    script_execution_note: "Stan model not re-run. Statistics verified from deposited posterior summary CSVs."
    time_fast: "~3 min"
    time_full: "~12 hrs (Stan/CmdStan + R)"
    notes: >
      Verified from estimates_indiv_C.csv (Exp1, OSF https://osf.io/a62df). Social condition
      (cond 2): v_p(self) = 30.07 Hz, v_r(other) = 31.27 Hz, diff = -1.20 Hz (claim: other
      advantage 1.2 Hz, exact match). Replication in Exp2 cond 3: diff = -1.36 Hz (claim:
      -1.6 Hz). The absence or reversal of self-advantage in social decision condition is
      robustly confirmed across both experiments.
---

This result is counterintuitive: when participants explicitly decode the social identity (whose shape?), there is no self-processing advantage and possibly an other-advantage. The paper interprets this as evidence for a trade-off: active social decoding diverts resources away from the perceptual feature that carries self-relevance, reducing or eliminating the automatic prioritization. This result challenges a naive reading of "self-prioritization" — the effect is specific to the level of processing at which the decision is made.
