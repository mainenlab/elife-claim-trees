---
uuid: ffda88f6-50da-4d01-8e5e-739350f96526
slug: hypothesis-capacity-mechanism-not-weights
doi: ~
claim: >
  The mechanism by which self-association enhances perceptual processing is a change in
  the absolute Theory-of-Visual-Attention processing capacity (the C parameter, which
  governs total resources available for encoding into aware short-term memory) rather
  than a pure redistribution of fixed attentional weights (the w parameter) between the
  two competing stimuli. Under a fixed-capacity, weights-only account, the brain would
  trade off self-related processing against other-related processing within a constant
  total budget, so a single-C TVA model with condition-specific w should fit the data
  as well as a model that allows C itself to vary by condition. The capacity-change
  hypothesis predicts the opposite — that a model in which C changes between baseline,
  perceptual-decision, and social-decision contexts should fit substantially better.
displayClaim: >
  Self-association acts via absolute processing capacity (TVA C parameter), not merely
  through redistribution of fixed attentional weights — predicting that condition-specific
  C should fit better than a single-C model.
shortClaim: "Self-association raises absolute processing capacity, not merely attentional weights."
claim-type: hypothesis
role: hypothesis
concepts:
  - TVA processing capacity
  - attentional weights
  - mechanism
  - resource mobilisation
  - model-based inference
priority: 2026-04-20
epistemic: hypothesis
status: N/A
panel: hypothesis

entails:
  - prediction-capacity-model-outperforms-weights-only

interprets:
  - interprets-bundesen-tva-framework

belongings: []

assertions:
  - paper-slug: scheller-2026-self-prioritization
    doi: 10.7554/eLife.100932
    panel: hypothesis
    analysis: paper Methods (TVA model variants) and Discussion
    dataset: ~
    dataset-doi: ~
    method: hypothesis statement
    confidence: N/A

reproductions: []
---

This is the mechanistic hypothesis underneath the headline self-prioritisation finding.
The distinction matters theoretically: a capacity change implies that self-relevance
mobilises additional encoding resources (consistent with arousal or motivational
accounts), whereas a pure weights account implies a zero-sum reallocation among existing
resources. The paper operationalises the test as a hierarchical Bayesian LOO model
comparison between a single-C model (capacity fixed across conditions, weights vary) and
an indiv-C model (capacity allowed to vary by condition). Confirmed by
`tva-capacity-model-wins` (Δloo=14.2, weight=0.86) and consistent with the
`processing-capacity-rises-perceptual-self` finding that ΔC=2.6 Hz in the perceptual
decision condition.
