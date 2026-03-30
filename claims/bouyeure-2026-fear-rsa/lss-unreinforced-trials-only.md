---
uuid: 9c4f7718-812e-45ec-aecd-3218135a1e4b
slug: lss-unreinforced-trials-only
doi: ~
claim: >
  All RSA pattern similarity analyses use only unreinforced trials (no US delivered),
  excluding reinforced trials to avoid US-driven BOLD confounds; this exclusion reduces the
  effective trial count and may selectively remove trials with strongest fear responses.
claim-type: assessment
concepts:
  - LSS beta series
  - unreinforced trials
  - trial selection
  - fear RSA
  - methodology
priority: 2026-03-30
epistemic: moderate

belongings: []

assertions:
  - paper-slug: bouyeure-2026-fear-rsa
    doi: 10.7554/eLife.105126
    panel: methods (RSA section)
    analysis: methods inspection
    dataset: ~
    dataset-doi: ~
    method: code inspection (methods section)
    confidence: moderate

reproductions:
  - agent: mainen-z
    date: 2026-03-30
    status: verified
    notes: >
      Confirmed by methods text: "only unreinforced trials (i.e. not followed by a US) were
      used to conduct statistical analyses of neural pattern similarity at the group level."
      With 50% reinforcement rates, approximately half of CS+ trials (and CS-+ trials during
      reversal) are excluded. Each CS type has 2 items × multiple repetitions; at 50% removal,
      the number of within-cue trial pairs for item stability estimation is approximately halved.
      This is a reasonable design choice to avoid US contamination, but it means item stability
      estimates for threat cues are based on fewer trials than for safe cues (which are never
      reinforced and lose no trials).
---

This trial selection creates an asymmetry: CS-- and CS+- (after full reversal) lose no trials to exclusion, while CS++ and CS-+ (during their threatening phases) lose ~50% of trials. If item stability is sensitive to trial count, this could artificially reduce item stability estimates for threat cues relative to safe cues — which would work against finding the reported effects (higher item stability for changing cues). The paper does not report trial counts per cue type per phase after exclusion.
