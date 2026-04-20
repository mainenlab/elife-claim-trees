---
uuid: 291d51bd-0ff0-493a-94e1-6814e0deba68
slug: hypothesis-fear-network-generalizes-threat-cues
doi: ~
claim: >
  Fear learning produces generalized (cross-item) neural representations of threatening cues
  in the canonical fear network: when an animal learns that a stimulus class is dangerous,
  the brain represents members of the class with overlapping multivoxel patterns rather than
  preserving item-specific patterns, so that any new exemplar of the class inherits the threat
  representation. The same mechanism operates whenever threat is acquired, including during
  reversal when previously safe cues become dangerous.
displayClaim: >
  Fear learning encodes threatening cues with shared, generalized representations in the fear
  network — the same generalization mechanism is recruited whenever a cue acquires threat
  value, in both initial acquisition and reversal.
shortClaim: "The fear network generalizes across threat-paired cues whenever value is acquired."
claim-type: hypothesis
role: hypothesis
concepts:
  - cue generalization
  - fear network
  - representational similarity
  - acquired threat
  - threat category
priority: 2026-04-20
epistemic: hypothesis
status: N/A
panel: hypothesis

entails:
  - prediction-cue-generalization-fear-network-acquisition
  - prediction-cs-minus-plus-generalizes-reversal

belongings: []

assertions:
  - paper-slug: bouyeure-2026-fear-rsa
    doi: 10.7554/eLife.105126
    panel: hypothesis
    analysis: ~
    dataset: ~
    dataset-doi: ~
    method: hypothesis stated in introduction and abstract
    confidence: N/A

reproductions: []
---

The generalization hypothesis is implicit in the abstract — "initial fear learning creates generalized neural representations for all threatening cues in the brain's fear network" — and in the framing that motivates the RSA approach. It predates the paper: a substantial fear-conditioning literature (Onat & Büchel 2015; Visser et al.) reports CS-driven activity in dACC, anterior insula, and dmPFC that does not differentiate exemplars within a CS class. The paper's contribution is to formalize generalization as a representational-similarity measure (between-item pattern correlation within CS+ exceeds within CS-) and apply it across both acquisition and reversal phases. The hypothesis is dissociable from item-specificity: the predicted generalization effect should not be accompanied by an item-stability effect (within-item pattern correlation), and the absence of an item-stability difference during acquisition is itself evidence the two measures are functionally distinct.
