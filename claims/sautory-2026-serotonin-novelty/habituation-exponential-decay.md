---
uuid: 1a7110f4-4db8-499c-9c2a-cbe7fac6e95f
slug: habituation-exponential-decay
doi: ~
claim: >
  Habituation follows exponential decay dynamics on day 1 with no significant group
  difference in decay rate.
claim-type: empirical
role: empirical
concepts:
  - serotonin habituation
  - novelty response
  - associative learning
priority: 2026-04-26
epistemic: strong

assertions:
  - paper-slug: sautory-2026-serotonin-novelty
    panel: fig3C
    analysis: fig3/novelty_exponential_fits/analyze.R
    dataset: ~
    method: exponential decay fit with bootstrap CIs on tau parameter
    confidence: strong
---

The exponential decay fit characterizes the temporal dynamics of habituation on the first day of exposure. Both the associative and random groups show comparable decay time constants (tau), establishing that initial novelty-driven habituation is independent of subsequent task contingencies. The bootstrap confidence intervals on tau provide a non-parametric estimate of decay-rate precision. This equivalence at baseline is critical: it means that any later divergence between groups (as shown in figure 4) can be attributed to associative learning rather than pre-existing differences in novelty sensitivity.
