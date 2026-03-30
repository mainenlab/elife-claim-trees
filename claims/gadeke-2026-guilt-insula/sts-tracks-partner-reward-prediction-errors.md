---
uuid: e0633fdd-645b-4fa1-ae43-8d6b6b170000
slug: sts-tracks-partner-reward-prediction-errors
doi: ~
claim: >
  Superior temporal sulcus (STS) BOLD activity tracks partner reward prediction errors specifically when the participant was responsible for the choice, consistent with mentalizing about the partner's experiential state.
claim-type: empirical
concepts:
  - superior temporal sulcus
  - prediction error
  - mentalizing
  - partner reward
  - fMRI
priority: 2026-03-30
epistemic: moderate

belongings:
[]

assertions:
  - paper-slug: gadeke-2026-guilt-insula
    doi: ~
    panel: fig5
    analysis: master_fMRI_showResults.m
    dataset: https://openneuro.org/datasets/ds005588
    dataset-doi: 10.18112/openneuro.ds005588.v1.0.0
    method: fMRI model-based analysis (computational happiness/responsibility model)
    confidence: moderate

reproductions:
  - agent: mainen-z
    date: 2026-03-30
    status: unverified:compute-infeasible
    notes: >
      Model-based fMRI analysis requires computational model fitted to behavioral data. Model code in GitHub repo. Pre-computed group NIfTI results may be in fMRIresults/. Not yet executed.
---


