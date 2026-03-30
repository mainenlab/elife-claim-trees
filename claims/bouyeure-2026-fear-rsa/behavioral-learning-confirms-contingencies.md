---
uuid: dc36ab32-bbed-480d-b05d-f833b100b1c3
slug: behavioral-learning-confirms-contingencies
doi: ~
claim: >
  US expectancy ratings follow the hierarchy CS++ > CS+- > CS-+ > CS-- across all experimental
  phases (LME: CS type F=479.35, p<0.0001; phase F=125.6, p<0.001; interaction p<0.001),
  confirming participants learned threat contingencies and their reversals.
claim-type: empirical
concepts:
  - US expectancy
  - fear conditioning
  - reversal learning
  - behavioral learning
  - LME
priority: 2026-03-30
epistemic: strong

belongings:
  - relation: supports
    target: dual-strategy-reversal-generalize-plus-specify

assertions:
  - paper-slug: bouyeure-2026-fear-rsa
    doi: 10.7554/eLife.105126
    panel: fig2A
    analysis: master_stats.R
    dataset: https://doi.org/10.17605/OSF.IO/NGWKA
    dataset-doi: 10.17605/OSF.IO/NGWKA
    method: linear mixed effects model (lme4/lmerTest, Satterthwaite df, Bonferroni-corrected post-hoc Wilcoxon)
    confidence: strong

reproductions:
  - agent: mainen-z
    date: 2026-03-30
    status: unverified
    notes: ~
---

During acquisition, CS++ ≈ CS+- and CS-+ ≈ CS-- (post-hoc Wilcoxon, Bonferroni-corrected), consistent with the fact that contingency change has not yet occurred. This equivalence is the expected pattern, not a failure of discrimination — it validates the reversal design by showing participants treated the two CS+ types identically before the reversal phase. The interaction effect (F=29.45, p<0.001) captures the phase-specific differentiation of cue types.
