---
uuid: 7808e12b-12e9-4340-997a-f4eeb2da40d7
slug: insula-guilt-replicates-yu-koban-signature
doi: ~
claim: >
  The anterior insula guilt effect is consistent with a previously published neural guilt signature map (Yu & Koban), providing convergent validity for the insula as a guilt-tracking region.
claim-type: interpretive
concepts:
  - anterior insula
  - guilt signature
  - neural pattern
  - convergent validity
priority: 2026-03-30
epistemic: moderate

belongings:
  - relation: extends
    target: insula-tracks-guilt-effect


assertions:
  - paper-slug: gadeke-2026-guilt-insula
    doi: ~
    panel: fig4 (supplement)
    analysis: f_apply_YuKoban_guilt_signature_map.m
    dataset: https://openneuro.org/datasets/ds005588
    dataset-doi: 10.18112/openneuro.ds005588.v1.0.0
    method: spatial correlation with published neural mask
    confidence: moderate

reproductions:
  - agent: mainen-z
    date: 2026-03-30
    status: unverified
    notes: >
      MATLAB script applies published guilt neural mask from canlab/Neuroimaging_Pattern_Masks to the study's contrast maps. Not yet executed.
---


