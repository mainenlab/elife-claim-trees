---
uuid: 163fe42f-c4ee-480c-8f49-927d6bc22ef1
slug: hypothesis-frequency-compartment-matching
doi: ~
claim: >
  The optimal frequency of rhythmic inhibition for modulating a given dendritic computation is
  determined by matching the rhythm's cycle period to the intrinsic timescale of the spike
  process at the target compartment: fast (gamma) for perisomatic Na+/AP processes, slow
  (beta) for distal Ca²⁺/NMDA dendritic spike processes.
displayClaim: >
  The best frequency for rhythmic inhibition at a compartment is set by matching the rhythm's
  cycle period to the local spike timescale — gamma for fast perisomatic AP processes, beta
  for slow distal Ca²⁺/NMDA processes.
claim-type: hypothesis
role: hypothesis
concepts:
  - frequency-compartment matching
  - intrinsic timescale
  - beta rhythm
  - gamma rhythm
  - rhythmic inhibition
priority: 2026-04-19
epistemic: hypothesis

belongings: []

entails:
  - prediction-beta-optimal-distal
  - prediction-gamma-optimal-perisomatic

assertions:
  - paper-slug: headley-2026-inhibitory-rhythms
    doi: 10.7554/eLife.95562
    panel: hypothesis
    analysis: ~
    dataset: ~
    dataset-doi: ~
    method: hypothesis stated in introduction and developed in discussion
    confidence: N/A

reproductions: []
---

The paper does not state this hypothesis in a single explicit sentence in the introduction, but it is the implicit logic motivating the systematic frequency sweeps in Figures 7 and 8. The reasoning chain is: (1) Na+ spikes precede APs by 2–3 ms (fast); Ca²⁺/NMDA spikes precede APs by 15–25 ms (slow); (2) phase-dependent inhibitory control requires the rhythm period to be commensurate with the spike's integration window; (3) therefore gamma cycles (~12–25 ms) should optimally gate perisomatic AP processes, and beta cycles (~50 ms) should optimally gate distal Ca²⁺/NMDA processes. The frequency sweeps are constructed to falsify this hypothesis: had the optima been inverted or absent, the matching hypothesis would be refuted. The experiment confirmed both predicted optima.
