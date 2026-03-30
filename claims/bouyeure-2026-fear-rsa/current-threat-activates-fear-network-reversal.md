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
    status: verified
    script: verification/bouyeure-2026-fear-rsa/verify.py
    original_figure: verification/originals/bouyeure-2026-fear-rsa/fig2.jpg
    figure: verification/bouyeure-2026-fear-rsa/figures/fig-current-threat-verified.png
    notes: >
      NeuroVault map downloaded (run2_currentvalencecontrast_TFCE_nlog10p.nii.gz, collection 23032).
      7473 significant voxels (threshold -log10(p)>1.301, p<0.05 FWE). Peak at MNI (-9,10,42),
      -log10(p)=4.0. dACC/SFG: 1023 sig voxels, max -log10(p)=4.0 — CONFIRMED.
      Striatum/Caudate: 152 sig voxels, max -log10(p)=3.155 — CONFIRMED.
      Multiple fear-network peaks confirmed: (-9,10,42) dACC, (6,-28,-11) possible brainstem/STN,
      (6,10,49) SFG, (11,35,32) dMPFC. This is the largest activated map (7473 voxels vs 5544 in
      acquisition), consistent with the paper's claim that reversal produces robust fear-network
      activation for currently-threatening cues.
---

Epistemic: moderate rather than strong because the reversal phase learning rate is not uniform across participants — some may not fully reverse by the end of the session (US expectancy data shows reversal phase has the highest overall ratings, mixed with continuing acquisition). The univariate result is expected but conflates extent of reversal learning with mean activation.
