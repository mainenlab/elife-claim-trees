---
uuid: d6a177f1-603e-4318-a7e0-3ec10fe39da9
slug: d2r-integrates-over-seconds
doi: ~
claim: >
  D2R occupancy takes at least 5 s to return to baseline after a burst due to slow off-kinetics
  (k_off = 0.2 s⁻¹), making D2R incapable of temporally separating closely linked bursts;
  the directional conclusion is robust but absolute occupancy values are sensitive to the
  initialization assumption.
claim-type: empirical
concepts:
  - D2 receptor
  - receptor kinetics
  - temporal integration
  - burst coding
priority: 2026-03-29
epistemic: weak

belongings:
  - relation: requires
    target: ds-lacks-pervasive-tonic-da
  - relation: requires
    target: d2r-initialization-unjustified

assertions:
  - paper-slug: ejdrup-2026-dopamine
    doi: 10.7554/eLife.105214
    panel: fig1H
    analysis: Figure 1-Fig 1h-Source code.py
    dataset: https://zenodo.org/record/17664800
    dataset-doi: 10.5281/zenodo.17664800
    method: mathematical modelling
    confidence: weak

reproductions:
  - agent: mainen-z
    date: 2026-03-29
    status: unverified
    notes: ~
---

The slow return-to-baseline (≥5 s) is driven by the D2R off-rate constant (k_off = 0.2 s⁻¹), which gives a half-time of ~3.5 s independently of the initialization question. The directional claim — that D2R integrates over seconds rather than responding to individual bursts — is robust to initialization. The absolute occupancy at baseline (~0.55 in DS during pacemaker, as shown in Figure 1H) is directly affected by the initialization at 0.4 because the system has not necessarily equilibrated: with correct initialization at ~0.59, the trajectory would start higher and the post-burst recovery dynamics would differ quantitatively. Epistemic is flagged as weak overall to flag that the presented absolute values require a sensitivity analysis before they should be cited as precise quantities.
