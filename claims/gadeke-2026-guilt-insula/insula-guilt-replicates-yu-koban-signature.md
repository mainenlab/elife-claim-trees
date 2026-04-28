---
uuid: 7808e12b-12e9-4340-997a-f4eeb2da40d7
slug: insula-guilt-replicates-yu-koban-signature
doi: ~
claim: >
  The anterior insula guilt effect is consistent with a previously published neural guilt signature map (Yu & Koban), providing convergent validity for the insula as a guilt-tracking region.
shortClaim: "The insula guilt effect matches the published Yu & Koban guilt signature."
claim-type: interpretive
role: interpretation
concepts:
  - anterior insula
  - guilt signature
  - neural pattern
  - convergent validity
priority: 2026-03-30
epistemic: moderate

interprets:
  - insula-tracks-guilt-effect
  - interprets-yu-koban-guilt-signature
validates:
  - hypothesis-insula-tracks-interpersonal-guilt

belongings:
  - relation: extends
    target: insula-tracks-guilt-effect


assertions:
  - paper-slug: gadeke-2026-guilt-insula
    doi: 10.7554/eLife.105391
    panel: fig4 (supplement)
    figureUri: https://iiif.elifesciences.org/lax/105391%2Felife-105391-fig4-v1.tif/full/1500,/0/default.jpg
    analysis: f_apply_YuKoban_guilt_signature_map.m
    dataset: https://openneuro.org/datasets/ds005588
    dataset-doi: 10.18112/openneuro.ds005588.v1.0.0
    method: spatial correlation with published neural mask
    confidence: moderate

reproductions:
  - agent: mainen-z
    date: 2026-03-30
    status: verified:partial
    script: verification/gadeke-2026-guilt-insula/verify.py
    original_script: https://github.com/BonnSocialNeuroscienceUnit/ResponsibilityExperiment/blob/main/Code/bin/
    script_execution: not-executed
    script_execution_note: "Requires MATLAB + SPM12. Statistics verified from deposited pre-computed NIfTI and CSV outputs."
    time_fast: "~3 min"
    time_full: "~3 hrs (MATLAB + SPM12)"
    notes: >
      Implemented the dot-product pattern expression approach from f_apply_YuKoban_guilt_signature_map.m
      in Python (nibabel). Loaded guiltEffectEachPartic.nii (4D, 40 participants) and
      Yu_guilt_SVM_sxpo_sxpx_EmotionForwardmask.nii, resampled Yu map to guilt map space, then
      computed per-participant dot products within the Yu mask (589,149 non-zero voxels).
      Results:
        Mean dot product = 5.29 (SD=17.82), range [-41.5, 36.9]
        N positive = 28/40
        One-sample t-test vs 0: t=1.855, p=0.071 (marginal)
        Wilcoxon signed-rank: p=0.042
        Sign test (binomial): p=0.017
      The paper claims the guilt response is significantly above 0. Our Python implementation
      gives marginal t-test but significant nonparametric tests, consistent with the paper's
      use of signtest_nice (which tests median). The claim of consistency with Yu/Koban signature
      is supported at p<0.05 by nonparametric test; t-test marginal. Claim status: verified
      for the nonparametric result; the t-test is borderline, suggesting the pattern expression
      approach (canlab apply_mask) may differ slightly from our resampling implementation.

discrepancy:
  type: data-gap
  explanation: >
    Yu-Koban guilt signature 4D NIfTI map not found in the deposited GitHub repo. The dot-product pattern expression analysis requires this external mask. Repository contains the participant-level guilt effect maps but not the reference signature.
---


