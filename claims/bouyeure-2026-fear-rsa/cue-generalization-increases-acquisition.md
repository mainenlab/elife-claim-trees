---
uuid: e645b7b4-05c4-4b37-b75f-3e47c0d585b2
slug: cue-generalization-increases-acquisition
doi: ~
claim: >
  Neural representations of threatening cues (CS++) generalize across items during fear acquisition: RSA shows that patterns for different CS++ items become more similar to each other in the fear network, indicating a shared threat-cue representation.
claim-type: empirical
concepts:
  - cue generalization
  - CS++
  - fear acquisition
  - RSA
  - threat representation
priority: 2026-03-30
epistemic: moderate

belongings:
  - relation: requires
    target: lss-unreinforced-trials-only

assertions:
  - paper-slug: bouyeure-2026-fear-rsa
    doi: 10.7554/eLife.105126
    panel: fig3A
    analysis: run_nina_analysis.py, fear_rsa_core.py
    dataset: https://doi.org/10.17605/OSF.IO/NGWKA
    dataset-doi: 10.17605/OSF.IO/NGWKA
    method: RSA searchlight + ROI analysis (BrainIAK), permutation testing (10k, cluster FWE)
    confidence: moderate

reproductions:
  - agent: mainen-z
    date: 2026-03-30
    status: unverified
    notes: >
      Python RSA pipeline with NeuroVault pre-computed maps and OSF source data. Not yet executed.
---
