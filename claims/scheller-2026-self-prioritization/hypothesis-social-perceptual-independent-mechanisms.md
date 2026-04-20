---
uuid: 72d45d61-25fa-4831-b57e-3a7da5d097e3
slug: hypothesis-social-perceptual-independent-mechanisms
doi: ~
claim: >
  Social salience (driven by self-association or other-association) and perceptual
  salience (driven by physical properties such as local colour contrast) capture
  attention via largely independent mechanisms. If true, the two salience signals
  should combine additively when they co-occur on the same stimulus — the processing
  rate change for a stimulus that is both socially and perceptually salient should
  approximately equal the sum of the two signals' individual contributions, with no
  reliable interaction term. The hypothesis is testable in Experiment 2, where social
  association (self vs other) is crossed with perceptual salience (high-contrast vs
  low-contrast) within the same TOJ paradigm.
displayClaim: >
  Social and perceptual salience capture attention via largely independent mechanisms,
  predicting additive (non-interacting) effects when both occur on the same stimulus.
claim-type: hypothesis
role: hypothesis
concepts:
  - independent mechanisms
  - social salience
  - perceptual salience
  - additivity
  - factorial design
priority: 2026-04-20
epistemic: hypothesis
status: N/A
panel: hypothesis

entails:
  - prediction-additive-effects-other-associated

belongings: []

assertions:
  - paper-slug: scheller-2026-self-prioritization
    doi: 10.7554/eLife.100932
    panel: hypothesis
    analysis: paper Introduction and Experiment 2 design rationale
    dataset: ~
    dataset-doi: ~
    method: hypothesis statement
    confidence: N/A

reproductions: []
---

This hypothesis carries a falsifiable prediction (additivity) that the paper directly
tests via the factorial Experiment 2. Confirmed for other-associated stimuli (where the
interaction term hovers near zero, supporting independence — see
`self-social-additive-perceptual` and `social-perceptual-salience-independent-streams`),
but partially refuted for self-associated stimuli, where the perceptual-salience benefit
is reduced — a sub-additive interaction (see `self-salience-reduces-perceptual-benefit`).
The paper's interpretation is that the independence hypothesis is the default and that
the self-associated sub-additivity reflects an "obligatory" self-prioritisation that
overrides the perceptual stream when the two compete. The hypothesis is therefore
confirmed-with-qualification: independent mechanisms in general, except where
self-relatedness obligatorily dominates.
