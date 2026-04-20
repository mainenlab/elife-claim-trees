---
uuid: 96510607-0b3e-42ef-8144-79bc0940eefe
slug: hypothesis-improved-sensor-enables-new-biology
doi: ~
claim: >
  A GABA sensor with sufficiently improved sensitivity, kinetics, and affinity will
  cross qualitative capability thresholds — not merely improve signal-to-noise on
  measurements iGABASnFR1 could already make, but enable measurements that iGABASnFR1
  cannot make at all. Specifically: detection of GABA release from individual
  inhibitory boutons in slice, single-trial detection of direction-selective GABA
  release from starburst amacrine cells in retina, and detection of volume-transmitted
  GABA in vivo following sensory stimulation.
displayClaim: >
  A sufficiently improved GABA sensor will cross qualitative capability thresholds —
  enabling single-bouton, single-trial direction-selective, and in vivo volume-transmitted
  GABA measurements that iGABASnFR1 could not make at all.
claim-type: hypothesis
role: hypothesis
concepts:
  - sensor capability threshold
  - single-bouton imaging
  - direction selectivity
  - in vivo GABA imaging
  - volume transmission
priority: 2026-04-20
epistemic: hypothesis
status: N/A
panel: hypothesis

entails:
  - igabasnfr2-retina-direction-selectivity
  - igabasnfr2-single-bouton-hippocampus
  - igabasnfr2-invivo-barrel-cortex

belongings: []

assertions:
  - paper-slug: kolb-2026-igabasnfr2
    doi: 10.7554/eLife.108319
    panel: hypothesis
    analysis: ~
    dataset: ~
    dataset-doi: ~
    method: hypothesis stated in introduction and abstract ("qualitative enhancement of in vivo performance")
    confidence: N/A

reproductions: []
---

The capability-threshold hypothesis is the paper's biological-impact bet — distinct from the engineering hypothesis (`hypothesis-saturation-mutagenesis-yields-improved-sensor`), which only commits to numerical improvement on screening metrics. The capability-threshold hypothesis commits further: the numerical improvements must be large enough that previously inaccessible measurements become possible. The three qualitative-threshold demonstrations (single-bouton in CA1, single-trial DS in retina, in vivo barrel cortex) are dissociated from the screening metrics as evidence: each is a measurement that iGABASnFR1 had failed to enable in published work, and each is independently confirmed against an iGABASnFR1 control within this paper. The negative iGABASnFR1 results (e.g. 0/15 trials in Fig 6a) are as load-bearing as the positive iGABASnFR2 results — they document the threshold being crossed.
