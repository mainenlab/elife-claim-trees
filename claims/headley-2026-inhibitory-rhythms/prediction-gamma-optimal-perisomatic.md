---
uuid: 874d0787-6f89-43fa-aa72-d183d242fd91
slug: prediction-gamma-optimal-perisomatic
doi: ~
claim: >
  If the optimal frequency of rhythmic inhibition at a compartment is set by matching the
  rhythm period to the local spike timescale, then perisomatic inhibition — where Na+ spikes
  lead the soma by 2–3 ms — should be maximally effective at gamma frequencies (40–80 Hz),
  whose periods are commensurate with the 2–3 ms timescale.
displayClaim: >
  The frequency-compartment matching hypothesis predicts that perisomatic rhythmic inhibition
  will be most effective in the gamma band (40–80 Hz), matching the 2–3 ms Na+ spike timescale.
claim-type: prediction
role: prediction
concepts:
  - gamma rhythm
  - perisomatic inhibition
  - Na+ spike timescale
  - frequency optimum
  - intrinsic timescale
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

The matching logic: phase-dependent control requires the rhythm period to be commensurate with the spike's integration window. The fast Na+ spike process (lead time 2–3 ms before AP) sets the perisomatic timescale; gamma cycles (~12–25 ms) most efficiently gate this process. Slower frequencies allow recovery between cycles, undermining phase specificity; faster frequencies would produce sustained suppression. Tested by `gamma-optimal-perisomatic-ap-modulation`, which sweeps 11 frequencies from 0.5 to 80 Hz and locates the peak phase-modulation of AP voltage threshold in the gamma band.
