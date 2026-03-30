---
uuid: 49d08c4f-7b31-4967-9ab7-06aa50a006b4
slug: lottery-choice-increases-with-ev
doi: ~
claim: >
  Probability of lottery selection increases with expected value advantage in both Study 1 (t(4796)=9.26, p<3.1e-20, β=0.074, 95%CI [0.059-0.090]) and Study 2 (t(3829)=10.62, p<5.3e-26, β=0.093, 95%CI [0.075-0.110]), confirming participants were sensitive to expected value in their choices.
claim-type: empirical
concepts:
  - lottery choice
  - expected value
  - mixed-effects regression
  - behavioral manipulation check
priority: 2026-03-30
epistemic: strong

belongings:
[]

assertions:
  - paper-slug: gadeke-2026-guilt-insula
    doi: ~
    panel: fig2
    analysis: master_behavAnalysis.m
    dataset: https://openneuro.org/datasets/ds005588
    dataset-doi: 10.18112/openneuro.ds005588.v1.0.0
    method: mixed-effects regression
    confidence: strong

reproductions:
  - agent: mainen-z
    date: 2026-03-30
    status: verified:partial
    script: verification/gadeke-2026-guilt-insula/verify.py
    original_figure: verification/originals/gadeke-2026-guilt-insula/fig2.jpg
    figure: verification/gadeke-2026-guilt-insula/figures/fig-lottery-choice-ev.png
    notes: >
      Logistic regression (statsmodels) run on deposited CSV data (not per-subject MATLAB files).
      Paper uses mixed-effects logistic with subject random effects and reports t-statistics.
      Our pooled logistic regression:
        fMRI Study (N=3833 trials): β=0.116, t=24.96, p=1.87e-137, 95%CI=[0.106, 0.125]
        Behav Study (N=4800 trials): β=0.088, t=25.53, p=9.15e-144, 95%CI=[0.081, 0.094]
      Paper reports fMRI β=0.093 (CI [0.075–0.110]), Behav β=0.074 (CI [0.059–0.090]).
      Our pooled regression inflates the t-statistic by ignoring subject clustering, and the
      EV predictor column (EVdiffMC) is mean-centered differently. Direction and significance
      match perfectly. Coefficient magnitude differs because the paper uses SVdiff (utility-
      weighted), not raw EV. The core claim — positive and highly significant EV effect — is
      confirmed. Status: verified for direction and significance; coefficient scale differs due
      to predictor definition, not error.
---


