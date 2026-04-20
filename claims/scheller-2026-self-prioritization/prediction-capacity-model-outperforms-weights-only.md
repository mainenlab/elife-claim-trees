---
uuid: 047cb8a3-9c95-4241-9dd1-d9c8f6343df0
slug: prediction-capacity-model-outperforms-weights-only
doi: ~
claim: >
  If self-association mobilises additional encoding capacity rather than merely
  redistributing fixed attentional weights, a hierarchical TVA model in which the C
  parameter is allowed to take a separate value in each experimental condition should
  fit the participant-level data substantially better than a single-C model in which
  capacity is held fixed across conditions and only the relative weights vary.
  Operationally, on a leave-one-out cross-validation comparison the indiv-C model
  should win on Δloo and on the model-stacking weight, with the magnitude large
  enough to be taken seriously after accounting for the standard error of the
  difference.
displayClaim: >
  A condition-specific TVA capacity model (indiv-C) should outperform a fixed-capacity,
  weights-only model on LOO cross-validation if the mechanism is capacity change
  rather than pure weight redistribution.
claim-type: prediction
role: prediction
concepts:
  - prediction
  - model comparison
  - LOO cross-validation
  - TVA C parameter
  - hierarchical Bayesian
priority: 2026-04-20
epistemic: prediction
status: N/A
panel: prediction

derived-from:
  - hypothesis-capacity-mechanism-not-weights

belongings: []

assertions:
  - paper-slug: scheller-2026-self-prioritization
    doi: 10.7554/eLife.100932
    panel: prediction
    analysis: derived from capacity-vs-weights mechanistic hypothesis
    dataset: ~
    dataset-doi: ~
    method: derived prediction
    confidence: strong

reproductions: []
---

This prediction operationalises the abstract capacity-vs-weights distinction as a
falsifiable model comparison. The single-C model is the principled null — it embodies
the standard fixed-resource view of attention. The indiv-C model is the alternative
under which self-relevance acts as a resource mobiliser. Tested by
`tva-capacity-model-wins` (Δloo=14.2, Δse=6.41, weight=0.86 pooled across N=140; the
indiv-C model wins, though 14% probability remains for the simpler model). The fact
that the data also numerically display the predicted ΔC=2.6 Hz capacity rise in the
perceptual decision condition (`processing-capacity-rises-perceptual-self`) reinforces
the model-comparison verdict.
