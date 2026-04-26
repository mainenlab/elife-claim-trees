---
uuid: 80b25507-bcbd-4169-ac96-7b31b653983a
slug: within-session-habituation
doi: ~
claim: >
  Within-session habituation is significant: early-trial responses are substantially
  stronger than late-trial responses, equivalently across groups.
claim-type: empirical
role: empirical
concepts:
  - serotonin habituation
  - novelty response
priority: 2026-04-26
epistemic: strong

requires:
  - habituation-exponential-decay

assertions:
  - paper-slug: sautory-2026-serotonin-novelty
    panel: fig3D
    analysis: fig3/novelty_lme_habituation/analyze.R
    dataset: ~
    method: "serotonin ~ trial_period * day * group + image_loc + (1 | mice_ID)"
    confidence: strong
---

The within-session habituation result demonstrates that serotonin responses decline within a single session as stimuli are repeated. The trial_period effect is highly significant (F(1, 4.9) = 24.0, p = 0.005), while group differences are absent (F(1, 10.9) = 0.05, p = 0.833). This establishes the basic timescale of habituation and, together with cross-day consolidation, provides the mechanistic substrate that recovery must overcome. The lack of group difference at this stage confirms that habituation is a pre-associative process.
