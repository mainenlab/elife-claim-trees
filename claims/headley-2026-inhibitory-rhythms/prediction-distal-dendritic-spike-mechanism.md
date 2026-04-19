---
uuid: f924648f-6829-41cb-9722-0bd97fec6ad3
slug: prediction-distal-dendritic-spike-mechanism
doi: ~
claim: >
  If perisomatic and distal dendritic inhibition serve dissociated computational roles, then
  doubling distal dendritic inhibition should reduce somatic firing primarily by suppressing
  apical Ca²⁺ and NMDA dendritic spikes, with little change in the somatic AP voltage
  threshold.
displayClaim: >
  The compartmental-dissociation hypothesis predicts that doubling distal dendritic inhibition
  will drop somatic firing by suppressing apical Ca²⁺ and NMDA spikes, leaving the AP voltage
  threshold largely unchanged.
claim-type: prediction
role: prediction
concepts:
  - distal dendritic inhibition
  - dendritic spike suppression
  - Ca2+ spikes
  - NMDA spikes
  - mechanistic dissociation
priority: 2026-04-19
epistemic: prediction
status: N/A
panel: prediction

derived-from:
  - hypothesis-distinct-compartmental-roles

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

This is the distal counterpart to the perisomatic-threshold prediction. The dissociation would fail if doubling distal inhibition reduced somatic firing primarily through threshold elevation rather than dendritic spike suppression. Tested by `distal-inhib-drops-firing-02hz`, which reports the firing-rate collapse and the accompanying suppression of Ca²⁺ and NMDA spike rates while AP threshold is comparatively spared.
