---
uuid: 7b7dd3fd-3946-4947-9799-a4f8a8821aba
slug: beta-gates-distal-apical-inputs
doi: ~
claim: >
  Beta-frequency rhythmic inhibition at distal dendritic locations gates the transmission of
  clustered synaptic inputs from apical dendrites to somatic output: inputs arriving during
  inhibitory troughs are transmitted, while inputs arriving during peaks are blocked.
claim-type: empirical
concepts:
  - beta rhythm
  - distal inhibition
  - synaptic input gating
  - apical dendrites
  - phase-dependent transmission
priority: 2026-03-30
epistemic: strong

belongings:
  - relation: requires
    target: beta-bidirectional-dendritic-control
  - relation: requires
    target: beta-optimal-distal-dendritic-entrainment
  - relation: requires
    target: l5-model-single-cell-scope
  - relation: supports
    target: pv-gamma-sst-beta-correspondence

assertions:
  - paper-slug: headley-2026-inhibitory-rhythms
    doi: 10.7554/eLife.95562
    panel: fig10
    analysis: scripts/Fig10.ipynb
    dataset: https://datadryad.org/dataset/doi:10.5061/dryad.v6wwpzhb8
    dataset-doi: 10.5061/dryad.v6wwpzhb8
    method: compartmental modelling — clustered input gating experiment
    confidence: strong

reproductions:
  - agent: mainen-z
    date: 2026-03-30
    status: unverified
    notes: >
      Script: Fig10.ipynb. Not yet executed. This is the direct input-gating experiment that
      operationalises the theoretical claim about beta controlling top-down information flow.
---

Figure 10 is the paper's functional payoff: it demonstrates that the phase-modulation results from Figures 5–9 translate directly into selective gating of specific input streams. Beta rhythms at distal locations gate apical (top-down) inputs in a phase-dependent way. This is the direct mechanistic link between the SST+/beta association and the functional role proposed for these interneurons in controlling top-down processing. The strong epistemic status reflects that this is a direct simulation of the gating function rather than an inference from firing rate changes.
