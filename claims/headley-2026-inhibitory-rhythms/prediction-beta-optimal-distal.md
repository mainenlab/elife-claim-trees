---
uuid: d0c2d8d6-82ea-46a0-928f-16e6c33d36a8
slug: prediction-beta-optimal-distal
doi: ~
claim: >
  If the optimal frequency of rhythmic inhibition at a compartment is set by matching the
  rhythm period to the local spike timescale, then distal inhibition — where apical Ca²⁺ and
  NMDA spikes lead the soma by ~20 ms and ~25 ms respectively — should be maximally effective
  at beta frequencies (~20 Hz), whose period (~50 ms) matches the dendritic-spike lead time.
displayClaim: >
  The frequency-compartment matching hypothesis predicts that distal rhythmic inhibition will
  be most effective near beta (~20 Hz), matching the ~20–25 ms lead time of apical Ca²⁺ and
  NMDA spikes.
claim-type: prediction
role: prediction
concepts:
  - beta rhythm
  - distal inhibition
  - dendritic spike timescale
  - Ca2+ spikes
  - NMDA spikes
  - frequency optimum
priority: 2026-04-19
epistemic: prediction
status: N/A
panel: prediction

derived-from:
  - hypothesis-frequency-compartment-matching

belongings: []

assertions:
  - paper-slug: headley-2026-inhibitory-rhythms
    doi: 10.7554/eLife.95562
    panel: prediction
    analysis: ~
    dataset: ~
    dataset-doi: ~
    method: derived prediction
    confidence: strong

reproductions: []
---

The slow distal spike processes (Ca²⁺ ~20 ms, NMDA ~25 ms before AP) set a long integration window. Beta cycles (~50 ms period) are commensurate with this window: they allow one inhibitory phase to bracket each dendritic-spike build-up event without sub-cycle interference. Faster rhythms truncate the integration window before dendritic spikes can build to threshold; slower rhythms permit multiple dendritic spikes per cycle, blurring phase control. Tested by `beta-optimal-distal-dendritic-entrainment`, which finds the peak Pairwise Phase Consistency for dendritic spike onsets at ~20 Hz across a 0.5–80 Hz sweep.
