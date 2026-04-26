---
uuid: 2e22abe9-0493-4eb7-a8e4-20cd47e31d6e
slug: adaptation-attenuates-training
doi: ~
claim: >
  Within-session adaptation attenuates across training phases: trial slopes are
  steepest on day 1 and flatten by final days.
claim-type: empirical
role: empirical
concepts:
  - serotonin habituation
  - associative learning
priority: 2026-04-26
epistemic: moderate

requires:
  - within-session-habituation
  - assoc-recovery-training

assertions:
  - paper-slug: sautory-2026-serotonin-novelty
    panel: fig4J
    analysis: fig4/recovery_trial_phase_interaction/analyze.R
    dataset: ~
    method: "serotonin ~ day_block * trial_block + image_loc + (1 | mice_ID)"
    confidence: moderate
---

The attenuation of within-session adaptation slopes provides evidence that the nature of the serotonin response changes qualitatively across training. On day 1, responses start high and decay rapidly within-session (steep negative trial slopes). By final training, responses are more stable across trials (flat slopes), suggesting that the signal has transitioned from encoding novelty (which habituates) to encoding predictive value (which is stable). The interaction analysis is from a dedicated script that examines the trial-by-phase structure.
