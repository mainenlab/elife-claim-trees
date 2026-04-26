---
uuid: 94668c93-c481-49e8-b671-cf7e5342c44a
slug: assoc-lower-reward-final
doi: ~
claim: >
  At final training days, associative mice show significantly lower reward
  responses than random mice.
claim-type: empirical
role: empirical
concepts:
  - reward prediction
  - prediction error
priority: 2026-04-26
epistemic: strong

requires:
  - reward-trajectories-diverge

assertions:
  - paper-slug: sautory-2026-serotonin-novelty
    panel: fig5C
    analysis: fig5/rew_response_group_day/analyze.R
    dataset: ~
    method: "rew_sero ~ group * day_c + (1 + day_c | mice_ID)"
    confidence: strong
---

The final-day group comparison provides the endpoint contrast for the reward prediction-error interpretation. Associative mice, who have learned to predict rewards from image cues, show significantly lower serotonin responses to reward delivery than random mice who cannot predict rewards. This is the classic signature of a prediction-error signal: the response to a predictable outcome is attenuated relative to an unpredictable one.
