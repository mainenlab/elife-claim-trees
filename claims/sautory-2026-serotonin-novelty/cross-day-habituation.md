---
uuid: b497492e-93c7-411e-83d2-c7e44f886969
slug: cross-day-habituation
doi: ~
claim: >
  Serotonin responses are suppressed on day 2 relative to day 1, demonstrating
  cross-day consolidation of habituation equivalently in both groups.
claim-type: empirical
role: empirical
concepts:
  - serotonin habituation
  - memory consolidation
priority: 2026-04-26
epistemic: strong

requires:
  - within-session-habituation

assertions:
  - paper-slug: sautory-2026-serotonin-novelty
    panel: fig3E
    analysis: fig3/novelty_lme_habituation/analyze.R
    dataset: ~
    method: "serotonin ~ trial_period * day * group + image_loc + (1 | mice_ID)"
    confidence: strong
---

Cross-day habituation extends the within-session finding by showing that the suppression consolidates overnight. Responses on day 2 begin lower than day-1 early trials, indicating that the habituation trace is retained across a sleep period. The equivalence across groups confirms that this consolidation process is independent of whether stimuli carry associative meaning. This cross-day suppression creates the floor from which associative recovery must emerge in figure 4.
