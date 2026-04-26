---
uuid: d0caf4f6-21bb-4fae-985d-5c9ebab6504c
slug: naturalistic-drive-parameterization
doi: ~
claim: >
  The model is driven by ~26,000 excitatory and ~4,500 inhibitory synapses with parameters
  (release probability, PSC amplitude, temporal kinetics) taken from published experimental
  measurements, producing a baseline somatic firing rate of approximately 5.3 Hz that matches
  typical in vivo layer 5 firing rates; no sensitivity analysis over these synaptic parameter
  choices is presented.
claim-type: assessment
role: scope
concepts:
  - model parameterization
  - synaptic parameters
  - naturalistic drive
  - baseline firing rate
priority: 2026-03-30
epistemic: moderate

scopes: ["*"]

belongings: []

assertions:
  - paper-slug: headley-2026-inhibitory-rhythms
    doi: 10.7554/eLife.95562
    panel: fig1A (inset)
    figureUri: https://iiif.elifesciences.org/lax/95562%2Felife-95562-fig1-v1.tif/full/1500,/0/default.jpg
    analysis: code inspection + methods
    dataset: ~
    dataset-doi: ~
    method: code inspection + literature
    confidence: moderate

reproductions:
  - agent: mainen-z
    date: 2026-03-30
    status: verified
    original_script: https://github.com/dbheadley/InhibOnDendComp/blob/main/scripts/Fig4.ipynb
    script_execution: unmodified
    script_execution_note: "Baseline firing rate verified from Figure1FR.csv; methods text inspected for synapse counts"
    time_fast: "~2 min"
    time_full: "~6 hrs (NEURON + 1.88 GB Dryad)"
    notes: >
      Figure 1A inset shows distribution of simulated firing rates across independent runs
      clustering around 5.3 Hz. Figure1FR.csv in data/ directory contains firing rate data:
      10 trials, mean 4.81 Hz, median 5.30 Hz (range 3.04–6.27 Hz). spikes.h5 (Poisson
      excitation simulation): 825 spikes over 150 s → 5.50 Hz for single trial. Methods
      state synapse counts (~26,000 excitatory, ~4,500 inhibitory) and parameter sources
      from literature. Assessment confirmed by code/data inspection.
---

The ~5.3 Hz baseline is the foundation for all firing rate suppression results (0.2 Hz with distal inhibition doubling, 0.7 Hz with perisomatic doubling). The absolute magnitude of suppression depends on this baseline, which in turn depends on the synaptic parameterization. The parameterization is well-justified by literature, but the absence of a sensitivity analysis means we cannot assess how robust the 0.2/0.7 Hz values are to variation in synaptic parameters. This is a standard limitation of biophysically detailed single-cell models.
