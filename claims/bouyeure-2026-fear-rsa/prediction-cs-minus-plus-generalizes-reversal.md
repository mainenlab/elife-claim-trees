---
uuid: 753f4a2e-8ab1-4e27-89be-67280c9d9a33
slug: prediction-cs-minus-plus-generalizes-reversal
doi: ~
claim: >
  If the same generalization mechanism that operates during acquisition is recruited whenever
  threat is acquired, then during reversal the newly dangerous cue (CS-+, previously safe)
  should acquire generalized neural representations in fear-network regions, mirroring the
  pattern seen for CS++ during acquisition.
displayClaim: >
  The generalization hypothesis predicts that during reversal, the newly dangerous CS-+ cue
  should acquire generalized fear-network representations like CS++ during acquisition.
claim-type: prediction
role: prediction
concepts:
  - cue generalization
  - reversal learning
  - CS-+
  - fear network
  - acquired threat
priority: 2026-04-20
epistemic: prediction
status: N/A
panel: prediction

derived-from:
  - hypothesis-fear-network-generalizes-threat-cues
  - hypothesis-dual-strategy-reversal

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

This prediction is the reversal-phase analogue of the acquisition-phase generalization prediction, with the cue identity flipped: CS-+ replaces CS++. Two hypotheses converge on it: the basic generalization hypothesis (any newly threatening cue should generalize) and the dual-strategy hypothesis (reversal recruits generalization for currently dangerous cues alongside item-specific updating for changing-valence cues). It is tested by `generalized-pattern-cs-minus-plus-reversal`. The complementary expectation — that CS+- (newly safe) should not show the generalization signal but instead an item-specific representation — is what the dual-strategy prediction (`prediction-item-stability-changing-cues-reversal`) handles.
