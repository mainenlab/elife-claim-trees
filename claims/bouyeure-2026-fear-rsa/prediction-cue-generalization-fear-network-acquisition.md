---
uuid: 060f6390-e191-4522-a7ac-28bc91151f75
slug: prediction-cue-generalization-fear-network-acquisition
doi: ~
claim: >
  If fear learning recruits a generalization mechanism that encodes threatening cues with
  shared representations, then during initial acquisition CS+ items should show greater
  between-item neural pattern similarity than CS- items in canonical fear-network regions
  (dACC, SFG, caudate, insula), with the generalization signal detectable as a positive
  CS+ > CS- contrast on the cue-generalization RSA measure.
displayClaim: >
  The generalization hypothesis predicts that during acquisition, CS+ items should show
  greater between-item pattern similarity than CS- items in fear-network regions (dACC,
  SFG, caudate, insula).
claim-type: prediction
role: prediction
concepts:
  - cue generalization
  - fear acquisition
  - fear network
  - RSA prediction
  - between-item similarity
priority: 2026-04-20
epistemic: prediction
status: N/A
panel: prediction

derived-from:
  - hypothesis-fear-network-generalizes-threat-cues

belongings: []

assertions:
  - paper-slug: bouyeure-2026-fear-rsa
    doi: 10.7554/eLife.105126
    panel: prediction
    analysis: ~
    dataset: ~
    dataset-doi: ~
    method: derived prediction
    confidence: strong

reproductions: []
---

This prediction operationalizes the acquisition half of the generalization hypothesis as a falsifiable RSA contrast. It is asymmetric in regional specification: the prediction names "fear-network" without committing to which subregions must show the effect, so the dACC/SFG/caudate/insula list in the empirical claim is a successful satisfaction rather than a strict specification. The prediction is tested directly by `cue-generalization-increases-acquisition`, and is jointly supported by the null result on item stability during acquisition (`no-item-stability-difference-acquisition`), which establishes that the generalization signal is dissociable from any item-specificity baseline.
