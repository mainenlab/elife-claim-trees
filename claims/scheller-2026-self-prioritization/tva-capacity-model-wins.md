---
uuid: 24c24fef-2404-41a6-a0ea-edfe81cd3707
slug: tva-capacity-model-wins
doi: ~
claim: >
  Model comparison via leave-one-out cross-validation shows that a model with condition-specific
  processing capacity parameters outperforms a single-capacity model (Δloo=14.2, Δse=6.41,
  weight=0.86 pooled across N=140 participants), indicating that social salience changes absolute
  processing rates rather than merely redistributing attentional weights.
claim-type: assessment
concepts:
  - TVA model comparison
  - processing capacity
  - model selection
  - leave-one-out cross-validation
priority: 2026-03-30
epistemic: strong

belongings: []

assertions:
  - paper-slug: scheller-2026-self-prioritization
    doi: 10.7554/eLife.100932
    panel: fig4
    analysis: OSF analysis notebooks (https://osf.io/a62df)
    dataset: https://osf.io/a62df
    dataset-doi: ~
    method: hierarchical Bayesian model comparison (Stan/R), LOO-CV
    confidence: strong

reproductions:
  - agent: mainen-z
    date: 2026-03-30
    status: unverified
    notes: >
      Data and notebooks on OSF (https://osf.io/a62df). Model comparison requires running
      Stan models on the TOJ data. LOO-CV implemented via loo R package (Vehtari et al. 2017).
      Not yet executed. Preregistered analysis plan at https://osf.io/ehu75.
---

This model comparison is methodologically central: it determines the mechanism underlying the behavioral effect. A relative-weight-only model would imply that the brain redistributes fixed attentional resources toward self-associated stimuli; the capacity model implies that self-association actually mobilizes additional processing resources. The Bayesian model comparison result (weight=0.86 for the capacity model) is strong but not definitive — 14% probability remains for the simpler model. The distinction matters for theory: enhanced capacity (rather than mere weighting) suggests a link to arousal or motivational systems.
