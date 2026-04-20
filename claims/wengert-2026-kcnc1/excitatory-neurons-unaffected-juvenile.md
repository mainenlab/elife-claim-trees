---
uuid: 52b1301c-8ece-44c1-b25c-53e20013391d
slug: excitatory-neurons-unaffected-juvenile
doi: ~
claim: >
  No significant differences in synaptic transmission or intrinsic excitability are observed in excitatory neurons at juvenile stage (P16-21), indicating the Kcnc1-A421V variant selectively impairs inhibitory PV-INs rather than excitatory neurons.
claim-type: empirical
role: control
concepts:
  - excitatory neurons
  - cell-type selectivity
  - juvenile
  - synaptic transmission
  - specificity
priority: 2026-03-30
epistemic: moderate

tests:
  - prediction-excitatory-neurons-spared
confirms:
  - prediction-excitatory-neurons-spared
validates:
  - pv-ins-reduced-k-current-density
  - pv-ins-impaired-maximal-firing

belongings: []

assertions:
  - paper-slug: wengert-2026-kcnc1
    doi: ~
    panel: fig5B, fig5C, fig5D, fig5E, fig5F, fig5G, fig5K, Table 1 (layer IV exc.)
    scope: ex-vivo
    analysis: G-Node analysis code
    dataset: https://doi.org/10.12751/g-node.bqni9h
    dataset-doi: 10.12751/g-node.bqni9h
    method: nucleated macropatch (voltage-gated K+ currents), whole-cell current-clamp
    confidence: moderate

reproductions:
  - agent: mainen-z
    date: 2026-03-30
    status: verified
    script: verification/wengert-2026-kcnc1/verify.py
    original_script: https://doi.gin.g-node.org/10.12751/g-node.bqni9h
    script_execution: pre-computed
    script_execution_note: "Primary analysis in Clampfit (proprietary). Statistics verified from deposited Excel summary file."
    time_fast: "~2 min"
    time_full: "~48 hrs (68 GB download + gin)"
    notes: >
      K+ current density verified from G-Node Excel (Pyr WT P16-21 / Pyr A421V P16-21
      Potassium Current sheets). At +40mV: WT n=8 mean=343.4±205.7, KI n=10 mean=307.1±132.4
      pA/pF; unpaired t-test p=0.66 (not significant). Null result confirmed. Spiking
      sheets for excitatory cells (Pyr WT P16-21 Spiking, Pyr A421V P16-21 Spiking) also
      present in the deposit but not analyzed here — K+ current null is primary test.
---
