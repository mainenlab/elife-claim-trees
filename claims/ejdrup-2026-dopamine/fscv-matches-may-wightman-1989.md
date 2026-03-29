---
uuid: cc992651-67bd-4d1b-9237-fa13d9f9ec94
slug: fscv-matches-may-wightman-1989
doi: ~
claim: >
  Simulated FSCV responses to 10, 30, and 60 Hz stimulation closely replicate May & Wightman
  (1989): VS reaches considerably higher peak DA than DS at all three stimulation frequencies.
claim-type: empirical
concepts:
  - FSCV
  - dopamine release
  - dorsal striatum
  - ventral striatum
  - stimulation frequency
priority: 2026-03-29
epistemic: moderate

belongings:
  - relation: requires
    target: vs-maintains-pervasive-tonic-da
  - relation: requires
    target: ds-vs-vmax-ratio-assumed

assertions:
  - paper-slug: ejdrup-2026-dopamine
    doi: 10.7554/eLife.105214
    panel: fig2E
    analysis: Figure 2-Fig 2g, h-Source code.py
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

Matching the May & Wightman (1989) FSCV dataset provides an important empirical anchor: this is a direct comparison to real experimental data rather than an internal model consistency check. The match supports the model's parameterization (Vmax ratio, release probability, quantal size) as reproducing observed regional differences. The epistemic caveat is that May & Wightman used rat striatal slices while this model is parameterized for in vivo mouse — slice preparation removes tonic activity, alters extracellular volume fraction, and may affect Km estimates. The qualitative pattern (VS > DS across frequencies) is robust; the quantitative match should be interpreted with these species and preparation differences in mind.
