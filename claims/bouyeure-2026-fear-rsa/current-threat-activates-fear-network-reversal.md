---
uuid: 0fce9813-0814-4bb8-86fd-12cd0c33bd98
slug: current-threat-activates-fear-network-reversal
doi: ~
claim: >
  During reversal, currently threatening cues (CS++ and CS-+) produce greater BOLD activation
  than non-threatening cues (CS+- and CS--) across the same fear network regions as acquisition
  (dACC, SFG, MTG, IFG), reflecting rapid updating of neural threat responses.
claim-type: empirical
concepts:
  - univariate activation
  - fear network
  - reversal learning
  - current threat value
  - BOLD
priority: 2026-03-30
epistemic: moderate

belongings:
  - relation: supports
    target: generalized-pattern-cs-minus-plus-reversal
  - relation: extends
    target: cs-plus-univariate-fear-network-acquisition

assertions:
  - paper-slug: bouyeure-2026-fear-rsa
    doi: 10.7554/eLife.105126
    panel: fig2Bii
    analysis: run_nina_analysis.py
    dataset: https://doi.org/10.17605/OSF.IO/NGWKA
    dataset-doi: 10.17605/OSF.IO/NGWKA
    method: second-level mass-univariate GLM, cluster FWE with 10k permutations (p_uncorr<0.001)
    confidence: moderate

reproductions:
  - agent: mainen-z
    date: 2026-03-30
    status: unverified
    notes: ~
---

Epistemic: moderate rather than strong because the reversal phase learning rate is not uniform across participants — some may not fully reverse by the end of the session (US expectancy data shows reversal phase has the highest overall ratings, mixed with continuing acquisition). The univariate result is expected but conflates extent of reversal learning with mean activation.
