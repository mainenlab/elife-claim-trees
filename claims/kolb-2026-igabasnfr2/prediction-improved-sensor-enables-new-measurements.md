---
uuid: ba1d6ed5-d8ba-40d2-b255-87315d83c216
slug: prediction-improved-sensor-enables-new-measurements
doi: ~
claim: >
  If iGABASnFR2's improvements (4-fold ΔF/F, 7-fold on-cell affinity, faster rise
  kinetics, 2P-compatible spectra) cross qualitative capability thresholds, then
  side-by-side comparison with iGABASnFR1 in three demanding preparations should
  show: (i) iGABASnFR2 detects single-bouton hippocampal GABA release where
  iGABASnFR1 yields no signal; (ii) iGABASnFR2 resolves direction-selective starburst
  GABA release on single trials where iGABASnFR1 cannot resolve direction even after
  trial-averaging; (iii) iGABASnFR2 detects whisker-evoked volume-transmitted GABA
  in vivo at cortical layers reachable by 2P imaging.
displayClaim: >
  iGABASnFR2 should enable single-bouton, single-trial DS, and in vivo whisker-evoked
  GABA detection — three qualitative threshold crossings vs iGABASnFR1.
claim-type: prediction
role: prediction
concepts:
  - capability threshold
  - single-bouton GABA
  - direction selectivity
  - in vivo barrel cortex
  - side-by-side sensor comparison
priority: 2026-04-20
epistemic: prediction
status: N/A
panel: prediction

derived-from:
  - hypothesis-improved-sensor-enables-new-biology
  - hypothesis-saturation-mutagenesis-yields-improved-sensor

belongings: []

assertions:
  - paper-slug: kolb-2026-igabasnfr2
    doi: 10.7554/eLife.108319
    panel: prediction
    analysis: ~
    dataset: ~
    dataset-doi: ~
    method: derived prediction
    confidence: strong

reproductions: []
---

This prediction translates the capability-threshold hypothesis into three concrete falsifiable contrasts, each pairing iGABASnFR1 and iGABASnFR2 in the same preparation. The prediction commits to qualitative — not merely quantitative — thresholds: failed measurements with v1 alongside successful measurements with v2. Directly tested by `igabasnfr2-single-bouton-hippocampus` (0/15 trials with v1, robust signals with v2), `igabasnfr2-retina-direction-selectivity` (v1 cannot resolve DS even after averaging; v2 enables single-trial DS), and `igabasnfr2-invivo-barrel-cortex` (the in vivo whisker-evoked detection — the only in vivo claim, a moderate-epistemic measurement because the GABA concentration estimate is calibration-derived from Magloire et al. 2023). The conjunction of three independent threshold-crossing tests is the strongest available form of corroboration short of cross-laboratory replication.
