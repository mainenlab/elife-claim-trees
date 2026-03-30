---
uuid: 04db8b33-39ce-43b1-8df4-63a156fbc874
slug: pv-in-ap-waveform-altered-downstroke-apd50
doi: ~
claim: >
  PV-INs from Kcnc1-A421V/+ mice show significantly reduced AP downstroke velocity
  and prolonged AP half-duration (APD50) relative to WT at both juvenile (P16–21,
  **p=0.0012 downstroke; **p=0.0053 APD50) and adult (P32–42, **p=0.0051 downstroke;
  ***p<0.001 APD50) stages, while passive membrane properties are largely preserved.
claim-type: empirical
concepts:
  - action potential waveform
  - downstroke velocity
  - APD50
  - Kv3.1
  - PV interneurons
  - repolarization
priority: 2026-03-30
epistemic: strong

belongings:
  - relation: supports
    target: pv-ins-impaired-maximal-firing
  - relation: requires
    target: pv-ins-reduced-k-current-density

assertions:
  - paper-slug: wengert-2026-kcnc1
    doi: 10.7554/eLife.103784
    panel: fig4E, fig4J, Table 1, Table 2
    scope: ex-vivo
    analysis: G-Node analysis code
    dataset: https://doi.org/10.12751/g-node.bqni9h
    dataset-doi: 10.12751/g-node.bqni9h
    method: whole-cell current-clamp, AP waveform analysis
    confidence: strong

reproductions:
  - agent: mainen-z
    date: 2026-03-30
    status: unverified:no-data
    notes: >
      Tables 1 and 2 in the paper provide full statistics for all AP and passive membrane
      properties at both age points. Downstroke velocity: WT –183±9, KI –138±8 mV/ms
      (juvenile); WT –248±21, KI –164±18 mV/ms (adult). AP amplitude is elevated but
      only significantly so at adult stage (***p<0.001). Input resistance, resting Vm,
      AP threshold, and AHP are not significantly different.
---

The AP waveform changes are the mechanistic bridge between K+ current loss and firing
frequency impairment: slower repolarization lengthens the AP, which reduces the rate at
which PV-INs can return to threshold and fire again. The preservation of passive membrane
properties confirms cell-autonomous Kv3.1-specific impairment rather than general
membrane disruption.
