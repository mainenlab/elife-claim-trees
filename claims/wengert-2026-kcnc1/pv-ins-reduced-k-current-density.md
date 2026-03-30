---
uuid: b29d38ec-0fb8-4a7b-863e-470dd3eb378b
slug: pv-ins-reduced-k-current-density
doi: ~
claim: >
  Parvalbumin-positive interneurons (PV-INs) in Kcnc1-A421V/+ mice show significantly reduced potassium current density in whole-cell patch-clamp recordings, consistent with loss-of-function of Kv3.1 channel.
claim-type: empirical
concepts:
  - Kv3.1
  - potassium current
  - PV interneurons
  - patch-clamp
  - loss-of-function
priority: 2026-03-30
epistemic: strong

belongings: []

assertions:
  - paper-slug: wengert-2026-kcnc1
    doi: ~
    panel: fig2
    analysis: G-Node analysis code
    dataset: https://doi.org/10.12751/g-node.bqni9h
    dataset-doi: 10.12751/g-node.bqni9h
    method: patch-clamp electrophysiology
    confidence: strong

reproductions:
  - agent: mainen-z
    date: 2026-03-30
    status: verified
    script: verification/wengert-2026-kcnc1/verify.py
    original_figure: verification/originals/wengert-2026-kcnc1/fig2.jpg
    figure: verification/wengert-2026-kcnc1/fig-k-current-density.png
    notes: >
      Data extracted from G-Node Excel summary (PV-IN K+ currents sheet). n=13 WT,
      n=17 KI confirmed exactly (matches paper). Peak current density at +40mV:
      WT 1883±720 pA/pF vs KI 757±533 pA/pF; unpaired t-test p=0.000033 (highly
      significant). 60% reduction in KI. Note: paper reports ±SD not ±SEM in tables.
      Excitatory neuron control: WT 343 vs KI 307 pA/pF, p=0.66 (not significant,
      consistent with cell-type specificity).
---
