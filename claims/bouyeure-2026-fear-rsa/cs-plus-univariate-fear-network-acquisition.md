---
uuid: 364302b6-4c41-4591-8df9-7800a8c674ff
slug: cs-plus-univariate-fear-network-acquisition
doi: ~
claim: >
  During fear acquisition, threatening cues (CS+) produce significantly greater BOLD activation
  than safe cues (CS-) in dACC, superior frontal gyrus, caudate nucleus, and middle temporal
  gyrus, replicating the canonical fear network activation pattern.
claim-type: empirical
concepts:
  - univariate activation
  - fear network
  - dACC
  - fear acquisition
  - BOLD
priority: 2026-03-30
epistemic: strong

belongings:
  - relation: supports
    target: cue-generalization-increases-acquisition

assertions:
  - paper-slug: bouyeure-2026-fear-rsa
    doi: 10.7554/eLife.105126
    panel: fig2Bi
    analysis: run_nina_analysis.py
    dataset: https://doi.org/10.17605/OSF.IO/NGWKA
    dataset-doi: 10.17605/OSF.IO/NGWKA
    method: second-level mass-univariate GLM, cluster FWE with 10k permutations (p_uncorr<0.001)
    confidence: strong

reproductions:
  - agent: mainen-z
    date: 2026-03-30
    status: unverified
    notes: ~
---

This is the expected replication of prior fear conditioning work (Fullana et al., 2016). It establishes that the paradigm produces standard fear network responses and validates the experimental manipulation before the RSA analyses. The absence of a significant CS- > CS+ cluster is also reported and expected.
