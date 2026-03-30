---
uuid: 5037933c-103b-4f19-992e-1abb330ea4f1
slug: l5-model-single-cell-scope
doi: ~
claim: >
  All results derive from a single-cell compartmental model of one layer 5 pyramidal neuron;
  no network dynamics, recurrent excitation, or population-level inhibitory effects are
  simulated, and all firing rate effects are for a single isolated neuron receiving
  naturalistic presynaptic drive.
claim-type: assessment
concepts:
  - layer 5 pyramidal neuron
  - computational model scope
  - single-cell model
  - network dynamics
priority: 2026-03-30
epistemic: moderate

belongings: []

assertions:
  - paper-slug: headley-2026-inhibitory-rhythms
    doi: 10.7554/eLife.95562
    panel: fig1A
    analysis: code inspection (sim_functions in InhibOnDendComp/src/)
    dataset: ~
    dataset-doi: ~
    method: code inspection
    confidence: moderate

reproductions:
  - agent: mainen-z
    date: 2026-03-30
    status: verified
    notes: >
      Repository structure and README confirm single-cell NEURON simulation. No network model
      present in scripts/ or src/. All notebooks load spike time data from a single simulated
      neuron. The naturalistic presynaptic drive is generated as an independent Poisson process
      per synapse, not from a simulated network. Scope claim confirmed by repository inspection.
---

The single-cell scope is not a limitation unique to this paper — it is a principled methodological choice that allows mechanistic dissection of how inhibitory location and timing interact with dendritic spike generation in one neuron. Network dynamics would confound the input-output mapping. The scope assessment is important for interpreting firing rate claims: the 5.5 Hz, 0.2 Hz, and 0.7 Hz values are predictions for one model neuron, not population averages or network-state-dependent quantities. Generalisation to behaving animals requires additional assumptions about interneuron synchrony, network input correlations, and cell-to-cell variability in dendritic morphology.
