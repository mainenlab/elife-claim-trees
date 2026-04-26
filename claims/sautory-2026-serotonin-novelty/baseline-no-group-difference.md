---
uuid: be339720-fe50-418b-9060-38d727ef45ba
slug: baseline-no-group-difference
doi: ~
claim: >
  Baseline response magnitudes on day 1 do not differ between associative and random
  groups, confirming equivalent starting points.
claim-type: empirical
role: empirical
concepts:
  - serotonin habituation
  - associative learning
priority: 2026-04-26
epistemic: strong

requires:
  - within-session-habituation

assertions:
  - paper-slug: sautory-2026-serotonin-novelty
    panel: fig3F
    analysis: fig3/novelty_lme_habituation/analyze.R
    dataset: ~
    method: "serotonin ~ trial_period * day * group + image_loc + (1 | mice_ID)"
    confidence: strong
---

This null-result claim is structurally important as a control: it confirms that the two experimental groups begin with equivalent serotonin novelty responses before any group-specific manipulation takes effect. Without this equivalence, the later divergence between associative and random groups (figure 4) could be attributed to pre-existing differences in serotonin reactivity rather than to learning-driven recovery.
