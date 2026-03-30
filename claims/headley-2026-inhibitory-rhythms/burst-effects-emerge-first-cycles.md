---
uuid: 34c1a5fd-714f-4cde-ba8b-1c230af108db
slug: burst-effects-emerge-first-cycles
doi: ~
claim: >
  Phase-dependent modulation of dendritic spike probability and action potential timing by
  oscillatory bursts of beta or gamma emerges within the first few cycles of the burst,
  indicating rapid engagement of the inhibitory control mechanism.
claim-type: empirical
concepts:
  - oscillatory bursts
  - beta rhythm
  - gamma rhythm
  - rapid onset
  - phase-dependent modulation
priority: 2026-03-30
epistemic: moderate

belongings:
  - relation: requires
    target: beta-bidirectional-dendritic-control
  - relation: requires
    target: gamma-optimal-perisomatic-ap-modulation
  - relation: requires
    target: l5-model-single-cell-scope

assertions:
  - paper-slug: headley-2026-inhibitory-rhythms
    doi: 10.7554/eLife.95562
    panel: fig9
    analysis: scripts/Fig9.ipynb
    dataset: https://datadryad.org/dataset/doi:10.5061/dryad.v6wwpzhb8
    dataset-doi: 10.5061/dryad.v6wwpzhb8
    method: compartmental modelling — burst onset analysis
    confidence: moderate

reproductions:
  - agent: mainen-z
    date: 2026-03-30
    status: unverified:no-data
    notes: >
      Script: Fig9.ipynb requires Dryad files (output_burst_16Hz_dist and output_burst_64Hz_prox
      simulation sets) plus modulatory_trace_16Hz.npy and modulatory_trace_64Hz.npy. The .npy
      files are NOT in GitHub repo data/. Blocked pending Dryad download
      (doi:10.5061/dryad.v6wwpzhb8).
---

The rapid onset of inhibitory control has functional implications: oscillatory rhythms in the cortex occur as brief bursts (~3–6 cycles in vivo), not sustained oscillations. If modulation required tens of cycles to establish, burst-mode inhibition would be ineffective. The finding that effects emerge within the first few cycles supports the biological relevance of the single-cycle modulation results in Figures 5, 7, and 8. The epistemic status is moderate because the exact "first few" is imprecise in the available summary — the figure output would quantify this.
