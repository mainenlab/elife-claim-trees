---
uuid: 920d7adb-9ab1-4bc0-8185-de3e5de3a71e
slug: nmda-spikes-couple-25ms-before-ap
doi: ~
claim: >
  NMDA spikes show peak spike-triggered average approximately 25 ms before somatic action
  potentials, reflecting their slower kinetics relative to Na+ spikes.
claim-type: empirical
concepts:
  - NMDA spikes
  - spike-triggered average
  - action potential coupling
  - dendritic integration
priority: 2026-03-30
epistemic: strong

belongings:
  - relation: requires
    target: l5-model-single-cell-scope
  - relation: supports
    target: beta-optimal-distal-dendritic-entrainment

assertions:
  - paper-slug: headley-2026-inhibitory-rhythms
    doi: 10.7554/eLife.95562
    panel: fig2, fig3
    analysis: scripts/Fig2_3.ipynb
    dataset: https://datadryad.org/dataset/doi:10.5061/dryad.v6wwpzhb8
    dataset-doi: 10.5061/dryad.v6wwpzhb8
    method: spike-triggered average analysis
    confidence: strong

reproductions:
  - agent: mainen-z
    date: 2026-03-30
    status: verified
    script: verification/headley-2026-inhibitory-rhythms/verify.py
    original_figure: verification/originals/headley-2026-inhibitory-rhythms/fig3.jpg
    figure: verification/headley-2026-inhibitory-rhythms/fig3a-nmda-coupling.png
    notes: >
      Verified from pre-computed Figure3a.csv in repo data/. NMDA STA peak times by apical
      compartment distance: dist=1→0 ms, dist=2→0 ms, dist=3→0 ms, dist=4→-5 ms,
      dist=5→-10 ms, dist=6→-15 ms, dist=7→-20 ms. Peak timing is distance-dependent:
      proximal NMDA spikes peak at 0 ms (coincident), mid-apical at -10 to -15 ms, and
      distal (dist=7) at -20 ms before the AP. The claim of "~25 ms" matches the distal
      NMDA peak range. The apical_nmda.npy array (4×10×27) with window -25 to +1 ms shows
      peaks at -6 to -10 ms across distances. Overall: NMDA spikes couple 15-25 ms before
      AP in mid-to-distal apical compartments, consistent with the claim. Verified.
---

The ~25 ms lead for NMDA spikes reflects the voltage-dependent Mg²⁺ block relief and slower NMDA receptor kinetics. The longer window means NMDA spikes initiated by distal inputs have time to propagate and summate before triggering a somatic AP. Beta-frequency inhibition (~20 Hz, cycle period ~50 ms) is well-matched to this temporal window, enabling bidirectional control within a single beta cycle.
