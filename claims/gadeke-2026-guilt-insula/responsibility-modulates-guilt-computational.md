---
uuid: 69cad10c-46f3-4f7e-8cec-3c9de1c629de
slug: responsibility-modulates-guilt-computational
doi: ~
claim: >
  A computational model incorporating responsibility-modulated happiness better accounts for the behavioral guilt effect than models without responsibility weighting, providing formal parameterization of the social decision-making component.
claim-type: empirical
role: empirical
concepts:
  - computational model
  - responsibility
  - happiness
  - model comparison
  - guilt
priority: 2026-03-30
epistemic: moderate

tests:
  - prediction-responsibility-model-wins-comparison
confirms:
  - hypothesis-responsibility-weights-partner-rpes
interprets:
  - social-prpe-weight-positive
enables-method:
  - sts-tracks-partner-reward-prediction-errors
  - ventral-striatum-tracks-computational-reward

belongings:
[]

assertions:
  - paper-slug: gadeke-2026-guilt-insula
    doi: ~
    panel: fig3
    analysis: Code/behavioural analysis scripts
    dataset: https://osf.io/a62df
    dataset-doi: ~
    method: computational model fitting (expected utility + responsibility parameter)
    confidence: moderate

reproductions:
  - agent: mainen-z
    date: 2026-03-30
    status: unverified
    notes: >
      Computational model code in GitHub repo. Behavioral data in BehaviouralData/ directory (.mat files). MATLAB required. Not yet executed.
---


