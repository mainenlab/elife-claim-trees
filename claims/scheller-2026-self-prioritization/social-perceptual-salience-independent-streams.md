---
uuid: 63ea3299-4288-46d1-b563-784d69f364cf
slug: social-perceptual-salience-independent-streams
doi: ~
claim: >
  Social salience and perceptual salience operate via largely independent mechanisms in
  attentional selection: their effects are additive for other-associated stimuli (interaction
  term -0.54 Hz, HDI includes zero), confirming that arbitrary social association and
  physical salience capture attention through separate processing streams rather than a
  single shared resource.
claim-type: interpretive
concepts:
  - social salience
  - perceptual salience
  - independent mechanisms
  - attentional processing streams
  - additivity
priority: 2026-03-30
epistemic: moderate

belongings:
  - relation: requires
    target: self-social-additive-perceptual
  - relation: requires
    target: perceptual-salience-6hz-advantage

assertions:
  - paper-slug: scheller-2026-self-prioritization
    doi: 10.7554/eLife.100932
    panel: fig7 (synthesis)
    analysis: ~
    dataset: ~
    dataset-doi: ~
    method: interpretive synthesis from interaction analysis
    confidence: moderate

reproductions:
  - agent: mainen-z
    date: 2026-03-30
    status: unverified:no-code
    notes: >
      Synthesis claim based on the null interaction for other-associated stimuli. The
      independence claim is qualified by the sub-additive interaction for self-associated
      stimuli, which suggests the two streams are not fully independent when self-relevance
      is involved.
---

The independence claim is supported for other-associated stimuli but violated for self-associated stimuli (sub-additive interaction). This asymmetry is theoretically meaningful: the "separate streams" interpretation holds specifically for information that lacks personal relevance. When the object is self-associated, the self-relevance stream overrides and partially suppresses the salience stream — which is why the perceptual salience benefit is smaller for self-associated than for other-associated stimuli.
