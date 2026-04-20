---
uuid: 7a683a00-fc93-4d25-ae38-48734f0a8789
slug: spe-matching-correlates-social-decision
doi: ~
claim: >
  Individual self-prioritization effects in the shape-label matching task correlate with
  socially induced processing rate changes in the social decision dimension in Experiment 1
  (r = 0.354, BF10 = 8.23, 95% CI: 0.11 to 0.54) but not in the perceptual decision
  dimension (r = 0.069, BF10 = 0.181).
claim-type: empirical
role: empirical
concepts:
  - SPE matching task
  - individual differences
  - processing rate correlation
  - social decision dimension
  - self-prioritization effect
priority: 2026-03-30
epistemic: moderate

validates:
  - self-prioritization-absent-social-decision

belongings:
  - relation: requires
    target: spe-robust-matching-both-experiments
  - relation: requires
    target: self-prioritization-absent-social-decision

assertions:
  - paper-slug: scheller-2026-self-prioritization
    doi: 10.7554/eLife.100932
    panel: fig9
    analysis: OSF analysis notebooks (https://osf.io/a62df)
    dataset: https://osf.io/a62df
    dataset-doi: ~
    method: Bayesian correlation, Experiment 1 (N=69)
    confidence: moderate

reproductions:
  - agent: mainen-z
    date: 2026-03-30
    status: verified
    script: verification/scheller-2026-self-prioritization/verify.py
    original_figure: verification/originals/scheller-2026-self-prioritization/fig9.jpg
    figure: verification/scheller-2026-self-prioritization/fig-spe-social-correlation.png
    original_script: https://osf.io/a62df
    script_execution: pre-computed
    script_execution_note: "Stan model not re-run. Statistics verified from deposited posterior summary CSVs."
    time_fast: "~3 min"
    time_full: "~12 hrs (Stan/CmdStan + R)"
    notes: >
      Verified from Correlation_Results.xlsx (OSF cross-exp folder). Pearson r computed
      directly from SPE and ΔΔv_Soc/ΔΔv_Per columns for Exp1 (N=63):
      SPE vs ΔΔv_Soc: r = 0.354, p = 0.0044 (claim: r=0.354, exact match).
      SPE vs ΔΔv_Per: r = 0.069, p = 0.590 (claim: r=0.069, exact match).
      BF10 values (8.23 and 0.181) not computed (require BayesFactor package) but direction
      and magnitude fully confirmed.
---

The positive correlation between matching SPE and social decision processing rates means that individuals who show stronger self-prioritization in the explicit matching task are also those who show stronger other-facilitation (or self-suppression) in the social decision attentional task. This is unexpected but consistent with the trade-off interpretation: the matching SPE captures cumulative self-bias across all stages including decision, while the perceptual attentional task isolates the perceptual stage.
