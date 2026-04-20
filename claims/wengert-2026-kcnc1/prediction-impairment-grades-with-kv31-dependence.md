---
uuid: 757e5bfc-b456-48a1-b49a-e662e2e69a30
slug: prediction-impairment-grades-with-kv31-dependence
doi: ~
claim: >
  If the impairment is specifically Kv3.1-mediated, then within the population of
  fast-spiking PV-INs the magnitude of phenotype should grade with the relative
  expression of Kv3.1 versus the partially redundant Kv3.2 subunit. Specifically,
  superficial neocortical PV-INs (layer II–IV; predominantly Kv3.1) should show the
  largest deficit; deep neocortical PV-INs (layer V; greater Kv3.2 expression) should
  show milder deficits confined to the highest current injections; and reticular
  thalamic nucleus (RTN) PV-INs (predominantly Kv3.1 and Kv3.3, no Kv3.2 compensation)
  should also show impairment but with a phenotype shaped by their distinctive rebound
  firing physiology. This graded prediction is a stronger discriminator of mechanism
  than a single-population test, because alternative mechanisms (generic PV
  vulnerability, generic neocortical defect) cannot easily produce a Kv3.1:Kv3.2-
  ratio-aligned gradient.
displayClaim: >
  Phenotype magnitude across PV-IN populations should grade with Kv3.1 dependence:
  superficial cortical (largest), layer V (mildest), RTN (intermediate, distinctive
  rebound-firing pattern).
claim-type: prediction
role: prediction
concepts:
  - prediction
  - laminar gradient
  - Kv3.1 vs Kv3.2
  - reticular thalamic nucleus
  - mechanistic specificity
priority: 2026-04-20
epistemic: prediction
status: N/A
panel: prediction

derived-from:
  - hypothesis-pv-in-selective-vulnerability

belongings: []

assertions:
  - paper-slug: wengert-2026-kcnc1
    doi: 10.7554/eLife.103784
    panel: prediction
    analysis: derived from the cell-type-specificity hypothesis combined with prior expression literature (Chow et al. 1999; Porcello et al. 2002; Espinosa et al. 2008)
    dataset: ~
    dataset-doi: ~
    method: derived prediction
    confidence: strong

reproductions: []
---

The graded-impairment prediction is the mechanism-discriminator: a single PV-IN
population would not separate Kv3.1-specific LOF from generic PV pathology. The Kv3.2
compensation literature provides a quantitative, prior-grounded ordering of expected
phenotype magnitudes, and the paper's parallel measurements in three populations
(superficial cortex, deep cortex, RTN) test that ordering directly. Tested by
`pv-ins-impaired-maximal-firing` (superficial), `layer-v-pv-ins-subtle-impairment`
(layer V), and `rtn-neurons-impaired-excitability` (RTN).
