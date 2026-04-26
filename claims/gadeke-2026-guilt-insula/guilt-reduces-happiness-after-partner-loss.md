---
uuid: b47187b8-9269-495c-90ec-d3b4e4193031
slug: guilt-reduces-happiness-after-partner-loss
doi: ~
claim: >
  Happiness ratings decrease more after negative partner outcomes when the participant made the choice (Social condition) than when the partner made the choice (Partner condition), operationalizing interpersonal guilt as responsibility-contingent unhappiness about partner harm.
claim-type: empirical
role: empirical
concepts:
  - interpersonal guilt
  - happiness
  - responsibility
  - social decision
  - mixed-effects regression
priority: 2026-03-30
epistemic: strong

tests:
  - prediction-behavioral-guilt-effect
confirms:
  - hypothesis-insula-tracks-interpersonal-guilt
  - hypothesis-responsibility-weights-partner-rpes

belongings:
[]

assertions:
  - paper-slug: gadeke-2026-guilt-insula
    doi: 10.7554/eLife.105391
    panel: fig3d, fig3h
    figureUri: https://iiif.elifesciences.org/lax/105391%2Felife-105391-fig3-v1.tif/full/1500,/0/default.jpg
    analysis: master_behavAnalysis.m
    dataset: https://openneuro.org/datasets/ds005588
    dataset-doi: 10.18112/openneuro.ds005588.v1.0.0
    method: mixed-effects regression (Experiment 1 and 2)
    confidence: strong

reproductions:
  - agent: mainen-z
    date: 2026-03-30
    status: verified
    script: verification/gadeke-2026-guilt-insula/verify.py
    original_script: https://github.com/BonnSocialNeuroscienceUnit/ResponsibilityExperiment/blob/main/Code/bin/
    script_execution: not-executed
    script_execution_note: "Requires MATLAB + SPM12. Statistics verified from deposited pre-computed NIfTI and CSV outputs."
    time_fast: "~3 min"
    time_full: "~3 hrs (MATLAB + SPM12)"
    notes: >
      Pre-computed LMM table (LMM happiness on outcomes and responsibility) confirms the
      partnerWon:subjDecided_1 interaction — the guilt-effect term:
        fMRI Study: β=0.33** (SE=0.12), p<0.01, N=944
        Behav Study: β=0.39*** (SE=0.10), p<0.001, N=1216
      Positive coefficient on partnerWon:subjDecided_1 means that happiness after partner-won
      increases more (or decreases less) when the subject decided — equivalent to guilt being
      lower when partner wins and subject was responsible. The maineffect of subjDecided is
      negative (-0.17** fMRI; -0.17** Behav), confirming agency-reduces-happiness independently.
      Confirmatory analysis on trial-level data (after negative partner outcomes):
        fMRI: Social mean=-0.448, Partner mean=-0.207, t=-1.933, p=0.054 (marginal, small N)
        Behav: Social mean=-0.464, Partner mean=-0.090, t=-3.260, p=0.0012, d=-0.357
      The LMM interaction is significant in both studies; the simple post-hoc comparison is
      significant in Behav and marginal in fMRI (small N after subsetting). Claim verified.
---


