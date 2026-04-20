---
uuid: 2f988e78-8a82-41d3-a121-1e90636d3460
slug: interprets-pv-gamma-sst-beta-associations
doi: ~
claim: >
  Empirical work across the cortical-interneuron literature has established two
  correlated associations: parvalbumin-positive (PV+) fast-spiking interneurons target
  perisomatic compartments and are implicated in the generation and entrainment of
  cortical gamma rhythms (40–80 Hz), while somatostatin-positive (SST+) interneurons
  target distal dendritic compartments and are preferentially associated with beta
  rhythms (12–35 Hz). These are literature claims about anatomical targeting patterns
  and their correlation with specific oscillatory bands, not results of the present
  paper.
displayClaim: >
  Prior cortical interneuron literature associates PV+ (perisomatic-targeting)
  interneurons with gamma rhythms and SST+ (dendrite-targeting) interneurons with
  beta rhythms.
shortClaim: "PV+ INs track perisomatic-gamma; SST+ INs track dendritic-beta (prior literature)."
claim-type: interpretive
role: literature-context
concepts:
  - PV interneurons
  - SST interneurons
  - gamma rhythm
  - beta rhythm
  - anatomical targeting
  - interneuron classification
priority: 2026-04-20
epistemic: moderate

belongings: []

assertions:
  - paper-slug: headley-2026-inhibitory-rhythms
    doi: ~
    panel: fig10 synthesis / discussion
    analysis: ~
    dataset: ~
    dataset-doi: ~
    method: literature interpretation; cited as the empirical pattern the paper's simulation results provide mechanistic grounding for
    confidence: moderate

reproductions: []
---

This claim registers the PV/gamma–SST/beta anatomical-rhythm correspondence as a discrete literature node. The paper's central interpretive synthesis (`pv-gamma-sst-beta-correspondence`) explicitly turns on these prior empirical associations: the simulation demonstrates that perisomatic inhibition at gamma frequency optimally modulates AP threshold and that distal-dendritic inhibition at beta frequency optimally entrains dendritic spikes, and the synthesis argues that the interneuron types that naturally target these compartments at these frequencies (PV+ and SST+ respectively) are the circuit substrate that would implement this frequency-compartment matching in vivo.

The literature-context registration matters because the correspondence claim is specifically not a prediction the paper tests — the paper's simulation uses generic inhibitory inputs parameterized by location and frequency, without simulating PV+ or SST+ neurons directly. The biological correspondence is an inherited literature premise that connects the mechanistic result to observed interneuron-type behavior. Without an explicit node for the PV/gamma and SST/beta associations, the synthesis claim's interpretive weight would lean on an unnamed referent.

The epistemic qualification is moderate because the PV/gamma association is well-established (PV+ fast-spiking dynamics and gamma generation are supported by optogenetic, pharmacological, and modeling work) while the SST/beta association is somewhat less universal — SST+ interneurons have also been implicated in theta and in slower rhythms depending on cortical area and state. The correspondence as stated is most robust for cortex in the awake state.
