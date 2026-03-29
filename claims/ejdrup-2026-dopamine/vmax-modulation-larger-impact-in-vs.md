---
uuid: 59c0aba5-a0e0-41d8-8961-fa5e927d83e7
slug: vmax-modulation-larger-impact-in-vs
doi: ~
claim: >
  A ±50% change in DAT Vmax shifts tonic DA by 38 nM in VS but only 11 nM in DS, indicating
  VS operates closer to the Km saturation regime and is more sensitive to DAT modulation.
claim-type: empirical
concepts:
  - DAT Vmax
  - Michaelis-Menten kinetics
  - Km saturation
  - dopamine regulation
  - ventral striatum
priority: 2026-03-29
epistemic: moderate

belongings:
  - relation: requires
    target: vmax-only-parameter-driving-regional-difference
  - relation: requires
    target: ds-vs-vmax-ratio-assumed

assertions:
  - paper-slug: ejdrup-2026-dopamine
    doi: 10.7554/eLife.105214
    panel: fig3K
    analysis: Figure 3-Fig 3k, l-Source code.py
    dataset: https://zenodo.org/record/17664800
    dataset-doi: 10.5281/zenodo.17664800
    method: mathematical modelling
    confidence: moderate

reproductions:
  - agent: mainen-z
    date: 2026-03-29
    status: unverified
    notes: ~
---

The asymmetric sensitivity to Vmax modulation (38 nM in VS vs 11 nM in DS for a ±50% Vmax change) has a mechanistic explanation: VS operates with [DA] closer to Km (0.16 µM), meaning the uptake system is not operating at maximum velocity and is thus sensitive to changes in capacity. DS operates at very low [DA] relative to Km (uptake is first-order), so changes in Vmax have proportionally smaller effects on steady-state [DA]. This is a pharmacologically important conclusion: drugs that modulate DAT (e.g., cocaine, amphetamine) would be predicted to have larger effects on extracellular DA in VS than DS — consistent with mesolimbic sensitivity to stimulants. The specific values (38 nM, 11 nM) depend on the Vmax ratio assumption and are moderate; the mechanistic interpretation (saturation regime difference) is strong.
