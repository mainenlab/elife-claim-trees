---
uuid: db8f67a5-9139-44fb-89c1-b30613fbadf5
slug: prior-threat-activates-fear-network-weakly
doi: ~
claim: >
  During reversal, cues that were threatening during acquisition but not currently threatening
  (CS++) vs those that were safe during acquisition and currently threatening (CS-+) still show
  fear network activation — (CS++ > CS+-) > (CS-+ > CS--) — though to a lesser extent than the
  current-threat contrast, suggesting a lingering prior fear memory trace.
claim-type: interpretive
concepts:
  - fear memory trace
  - prior threat value
  - reversal learning
  - lingering fear
  - fear network
priority: 2026-03-30
epistemic: weak

belongings:
  - relation: requires
    target: cs-plus-univariate-fear-network-acquisition
  - relation: supports
    target: dual-strategy-reversal-generalize-plus-specify

assertions:
  - paper-slug: bouyeure-2026-fear-rsa
    doi: 10.7554/eLife.105126
    panel: fig2Biii
    analysis: run_nina_analysis.py
    dataset: https://doi.org/10.17605/OSF.IO/NGWKA
    dataset-doi: 10.17605/OSF.IO/NGWKA
    method: second-level mass-univariate GLM, cluster FWE with 10k permutations (p_uncorr<0.001)
    confidence: weak

reproductions:
  - agent: mainen-z
    date: 2026-03-30
    status: unverified
    notes: ~
---

The paper explicitly hedges this interpretation: the activation "may reflect the impact of the lingering fear memory trace (remaining from acquisition) and/or the time required to learn contingency changes during reversal." Both accounts predict the same pattern — reduced but present activation for prior-threat cues — so they cannot be distinguished from this contrast alone. Epistemic: weak because the causal interpretation is acknowledged as ambiguous.
