---
uuid: 50303ec9-0d79-48a5-ac00-e3386900731b
slug: insula-tracks-guilt-effect
doi: ~
claim: >
  Anterior insula BOLD activity is significantly elevated in the Social condition compared to the Partner condition specifically after negative partner outcomes, tracking the guilt effect (responsibility-contingent partner unhappiness).
claim-type: empirical
concepts:
  - anterior insula
  - guilt
  - fMRI
  - responsibility
  - social decision
priority: 2026-03-30
epistemic: strong

belongings:
[]

assertions:
  - paper-slug: gadeke-2026-guilt-insula
    doi: ~
    panel: fig4
    analysis: master_fMRI_showResults.m, fMRIresults/*.nii
    dataset: https://openneuro.org/datasets/ds005588
    dataset-doi: 10.18112/openneuro.ds005588.v1.0.0
    method: fMRI mass-univariate GLM (SPM12), ROI analysis
    confidence: strong

reproductions:
  - agent: mainen-z
    date: 2026-03-30
    status: unverified:compute-infeasible
    notes: >
      Group-level fMRI NIfTI results (.nii) available in repo's fMRIresults/ directory. Can generate figure from pre-computed maps without re-running full GLM. Requires SPM12/MATLAB. Not yet executed.
---


