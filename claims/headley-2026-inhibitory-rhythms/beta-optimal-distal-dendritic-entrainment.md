---
uuid: 4ee66306-a11b-4333-86cf-47ea92155e76
slug: beta-optimal-distal-dendritic-entrainment
doi: ~
claim: >
  In a frequency sweep from 0.5 to 80 Hz, beta frequencies near 20 Hz produce the strongest
  phase-dependent entrainment of dendritic Ca²⁺ and NMDA spike onsets by distal rhythmic
  inhibition, as measured by Pairwise Phase Consistency.
claim-type: empirical
concepts:
  - beta rhythm
  - dendritic spike entrainment
  - distal inhibition
  - frequency sweep
  - Pairwise Phase Consistency
priority: 2026-03-30
epistemic: strong

belongings:
  - relation: requires
    target: l5-model-single-cell-scope
  - relation: supports
    target: beta-bidirectional-dendritic-control
  - relation: supports
    target: beta-gates-distal-apical-inputs
  - relation: supports
    target: pv-gamma-sst-beta-correspondence

assertions:
  - paper-slug: headley-2026-inhibitory-rhythms
    doi: 10.7554/eLife.95562
    panel: fig7
    analysis: scripts/Fig7.ipynb
    dataset: https://datadryad.org/dataset/doi:10.5061/dryad.v6wwpzhb8
    dataset-doi: 10.5061/dryad.v6wwpzhb8
    method: compartmental modelling — frequency sweep, Pairwise Phase Consistency (PPC)
    confidence: strong

reproductions:
  - agent: mainen-z
    date: 2026-03-30
    status: unverified:no-data
    notes: >
      Script: Fig7.ipynb requires Dryad simulation files from DendCompOscPublic/
      (frequency sweep simulations across 0.5–80 Hz distal inhibition conditions).
      These are not in the GitHub repo. PPC analysis code is implemented in src/ modules.
      Blocked pending Dryad download (doi:10.5061/dryad.v6wwpzhb8).
---

The beta optimum at ~20 Hz is mechanistically interpretable: the beta cycle period (~50 ms) matches the temporal window over which Ca²⁺ and NMDA spikes build to threshold (Ca²⁺ ~20 ms, NMDA ~25 ms lead before APs, from Figures 2–3). Slower rhythms allow multiple spikes per cycle; faster rhythms truncate the integration window. The beta optimum emerges from this temporal matching between the rhythm period and the intrinsic spike dynamics, not from an arbitrary parametric choice. Epistemic status is strong because the frequency sweep result is a systematic parametric scan with an unambiguous peak.
