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
    status: verified
    script: verification/gadeke-2026-guilt-insula/verify.py
    figure: verification/gadeke-2026-guilt-insula/figures/fig-insula-peak.png
    notes: >
      NIfTI peak extraction from deposited fMRIresults/outcome/guiltEffect_0p05FWE_SVC_aIns.nii
      (FWE-corrected SVC result, 2mm isotropic). After NaN-masking (592873 NaN voxels, 22
      surviving FWE voxels), the peak absolute value is 3.955 at voxel index (53, 68, 33).
      Applying the affine ([-2,0,0,78],[0,2,0,-112],[0,0,2,-70]) gives:
        Peak MNI = [-28, 24, -4]
      The deposited .mat file is named "Group response at -28 24 -4 LeftInsulaGuiltEffect.mat",
      confirming perfect match. The paper reports anterior insula peak coordinates at [-28 24 -4]
      (left hemisphere). Claim verified: peak coordinates match and cluster is restricted to
      anterior insula as described.
---


