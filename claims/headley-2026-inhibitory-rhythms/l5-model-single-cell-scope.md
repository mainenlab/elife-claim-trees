---
uuid: 5037933c-103b-4f19-992e-1abb330ea4f1
slug: l5-model-single-cell-scope
doi: ~
claim: >
  All results derive from a single-cell compartmental model of one layer 5 pyramidal neuron;
  no network dynamics, recurrent excitation, or population-level inhibitory effects are
  simulated, and all firing rate effects are for a single isolated neuron receiving
  naturalistic presynaptic drive.
displayClaim: >
  All results come from a single-cell compartmental model of one L5 pyramidal neuron driven by
  naturalistic synaptic input — no network dynamics, no recurrent excitation, no population
  effects.
claim-type: assessment
role: scope
concepts:
  - layer 5 pyramidal neuron
  - computational model scope
  - single-cell model
  - network dynamics
priority: 2026-03-30
epistemic: moderate

scopes: ["*"]

belongings: []

assertions:
  - paper-slug: headley-2026-inhibitory-rhythms
    doi: 10.7554/eLife.95562
    panel: fig1A
    figureUri: https://iiif.elifesciences.org/lax/95562%2Felife-95562-fig1-v1.tif/full/1500,/0/default.jpg
    analysis: code inspection (sim_functions in InhibOnDendComp/src/)
    dataset: ~
    dataset-doi: ~
    method: code inspection
    confidence: moderate

reproductions:
  - agent: mainen-z
    date: 2026-03-30
    status: verified
    original_script: https://github.com/dbheadley/InhibOnDendComp/blob/main/scripts/Fig4.ipynb
    script_execution: unmodified
    script_execution_note: "Scope confirmed by code inspection; Fig4.ipynb run unmodified on pre-computed data"
    time_fast: "~2 min"
    time_full: "~6 hrs (NEURON + 1.88 GB Dryad)"
    notes: >
      Repository structure and README confirm single-cell NEURON simulation. No network model
      present in scripts/ or src/. All notebooks load spike time data from a single simulated
      neuron. The naturalistic presynaptic drive is generated as an independent Poisson process
      per synapse, not from a simulated network. Scope claim confirmed by repository inspection.
---

The single-cell scope is not a limitation unique to this paper — it is a principled methodological choice that allows mechanistic dissection of how inhibitory location and timing interact with dendritic spike generation in one neuron. Network dynamics would confound the input-output mapping. The scope assessment is important for interpreting firing rate claims: the 5.5 Hz, 0.2 Hz, and 0.7 Hz values are predictions for one model neuron, not population averages or network-state-dependent quantities. Generalisation to behaving animals requires additional assumptions about interneuron synchrony, network input correlations, and cell-to-cell variability in dendritic morphology.
