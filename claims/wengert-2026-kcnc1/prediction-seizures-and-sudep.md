---
uuid: c09c89af-97d8-41f2-9fb7-2aaa6ed339b6
slug: prediction-seizures-and-sudep
doi: ~
claim: >
  If the inhibitory failure produced by Kv3.1 LOF is sufficient to drive the
  encephalopathy phenotype, then Kcnc1-A421V/+ mice should exhibit (i) spontaneous
  convulsive seizures captured on continuous video-EEG, (ii) seizure-induced sudden
  death (SUDEP) at high penetrance, and (iii) premature mortality with all mutants
  dying before reaching natural lifespan endpoints. The seizure types should match the
  spectrum reported in human KCNC1 DEE (myoclonic events, generalized tonic-clonic),
  and the SUDEP events should be preceded by tonic-clonic seizures with hindlimb
  extension — the canonical mouse SUDEP signature.
displayClaim: >
  Kcnc1-A421V/+ mice should show spontaneous convulsive seizures, SUDEP events, and
  premature mortality recapitulating the human KCNC1 DEE phenotype.
claim-type: prediction
role: prediction
concepts:
  - prediction
  - spontaneous seizures
  - SUDEP
  - premature mortality
  - video-EEG
  - translational fidelity
priority: 2026-04-20
epistemic: prediction
status: N/A
panel: prediction

derived-from:
  - hypothesis-pv-dysfunction-drives-encephalopathy

belongings: []

assertions:
  - paper-slug: wengert-2026-kcnc1
    doi: 10.7554/eLife.103784
    panel: prediction
    analysis: derived from the disease-mechanism hypothesis; tested by continuous video-EEG and survival cohort
    dataset: ~
    dataset-doi: ~
    method: derived prediction
    confidence: strong

reproductions: []
---

This is the translational-fidelity prediction: a disease-relevant model must reproduce
the convulsive-epilepsy and SUDEP phenotypes seen in patients. The penetrance of
seizures (8/12) and SUDEP (4 captured + 2 video-only) and the universality of premature
mortality (33/33 KI dying before 122 d) are quantitatively strong tests of the model's
construct validity. Tested by `spontaneous-seizures-and-sudep-kcnc1` and
`a421v-mice-die-before-122d`.
