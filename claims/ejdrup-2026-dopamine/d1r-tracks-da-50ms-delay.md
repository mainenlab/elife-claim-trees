---
uuid: 2ec8fd67-7f5e-432f-b400-4e608348a74e
slug: d1r-tracks-da-50ms-delay
doi: ~
claim: >
  D1R occupancy closely tracks extracellular DA with approximately 50 ms delay during burst
  firing; D1R occupancy is negligible during pacemaker activity because the EC50 of 1000 nM
  far exceeds tonic [DA] of ~10 nM in DS, making burst events the effective threshold for D1R
  engagement.
claim-type: empirical
concepts:
  - D1 receptor
  - receptor occupancy
  - burst firing
  - dopamine threshold
priority: 2026-03-29
epistemic: moderate

belongings:
  - relation: requires
    target: ds-lacks-pervasive-tonic-da

assertions:
  - paper-slug: ejdrup-2026-dopamine
    doi: 10.7554/eLife.105214
    panel: fig1H, fig1I
    analysis: Figure 1-Fig 1h-Source code.py
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

D1R kinetics (fast on-rate, high EC50) make it a detector of transient high-DA events. The ~50 ms delay is a consequence of the association rate constant and the time required for DA to diffuse to receptor-bearing membranes following release. The low-occupancy baseline during pacemaker activity is robust: with tonic [DA] ≈ 10 nM and EC50 = 1000 nM, the Hill equation gives occupancy < 0.02 regardless of the initialization question that affects D2R. This makes D1R claims less sensitive to the d2r-initialization-unjustified assessment node than D2R claims. The 50 ms delay figure is quantitatively specific and is a clean reproduction target.
