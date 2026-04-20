---
uuid: 9a1c4f3e-5d2b-4f8a-8c71-1e6f2b9d0a77
slug: hypothesis-network-level-nvc-coordination
doi: ~
claim: >
  Optogenetic activation of cortical pyramidal neurons elicits coordinated, network-level
  vascular responses that cannot be predicted from individual-vessel measurements alone:
  dilations and constrictions are spatially organised relative to active neurons, capillary
  responses correlate with their network neighbours' responses, and overall capillary network
  efficiency is modulated by stimulation. Prior point-measurement studies that interrogate
  vessels in isolation systematically miss this coordination because they cannot resolve
  within-vessel radius heterogeneity, between-vessel network topology, or stimulation-evoked
  changes in graph-level metrics across hundreds of interconnected vessels.
displayClaim: >
  Optogenetic neuronal activation drives coordinated, network-level vascular responses
  (spatially organised dilations/constrictions, neighbour-correlated capillary responses,
  stimulation-modulated efficiency) — point measurements of individual vessels cannot resolve
  this coordination.
claim-type: hypothesis
role: hypothesis
concepts:
  - neurovascular coupling
  - network coordination
  - optogenetic stimulation
  - vascular network topology
  - functional hyperemia
priority: 2026-04-20
epistemic: hypothesis

entails:
  - prediction-pipeline-reveals-network-coordination
  - synthesis-individual-vessel-measurements-insufficient

belongings: []

assertions:
  - paper-slug: rozak-2026-neurovascular-dl
    doi: 10.7554/eLife.95525
    panel: hypothesis
    analysis: ~
    dataset: ~
    dataset-doi: ~
    method: hypothesis stated in introduction; operationalised by Thy1-ChR2-YFP optogenetic preparation (Figs 7-9)
    confidence: N/A

reproductions: []
---

This is the biological hypothesis that motivates the optogenetic application of the pipeline. It
posits that functional hyperemia — well-characterised at the level of single vessels and bulk
tissue — has an intermediate, network-level structure that has remained largely invisible because
the right tool did not exist. The hypothesis is dissociable from a "single-vessel-sufficient"
alternative under which point-caliber measurements would adequately predict network behaviour.
Resolved in favour of network-level coordination by the combination of spatial gradient
(`dilations-nearer-neurons-than-constrictions`), depth segregation (`constrictions-deeper-than-dilations`),
network-wide assortativity rise (`network-assortativity-increases-stimulation`), efficiency
modulation (`capillary-efficiency-increases-4pct`), and the within-vessel heterogeneity finding
(`baseline-intra-vessel-radius-varies-24pct`) that argues mechanistically against point measurement.
