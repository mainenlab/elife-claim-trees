---
uuid: dbc34885-27d0-4b6e-afbb-6a34befb9b98
slug: pv-in-inhibitory-synapse-intact-juvenile
doi: ~
claim: >
  PV-IN-mediated inhibitory synaptic transmission is not significantly altered in juvenile
  (P16–21) Kcnc1-A421V/+ mice: failure rates, uIPSC magnitudes at 20/40/80 Hz, paired-pulse
  ratios, and synaptic latency are all not significantly different from WT (32.8% connection
  rate WT vs 34.9% Kcnc1-A421V/+; n=21/64 and 15/43 connected pairs respectively).
claim-type: empirical
concepts:
  - inhibitory synaptic transmission
  - uIPSC
  - PV interneurons
  - paired-pulse ratio
  - juvenile
  - Kv3.1
priority: 2026-03-30
epistemic: strong

belongings:
  - relation: contradicts
    target: inhibitory-dysfunction-progresses-to-adulthood
  - relation: supports
    target: inhibitory-dysfunction-progresses-to-adulthood

assertions:
  - paper-slug: wengert-2026-kcnc1
    doi: 10.7554/eLife.103784
    panel: fig6F, fig6G, fig6H, fig6I, fig6J, fig6K, fig6L
    scope: ex-vivo
    analysis: G-Node analysis code
    dataset: https://doi.org/10.12751/g-node.bqni9h
    dataset-doi: 10.12751/g-node.bqni9h
    method: dual whole-cell patch-clamp, paired recording
    confidence: strong

reproductions:
  - agent: mainen-z
    date: 2026-03-30
    status: unverified:no-data
    notes: >
      All comparisons by repeated-measures two-way ANOVA or unpaired t-test; none reach
      significance. This is a genuine null result — not underpowered, as connection rates
      and cell counts are substantial. The paper notes that inhibitory transmission will
      be *secondarily* impaired via abnormal spike generation, even though direct synaptic
      function per spike is preserved.
---

Note: the `contradicts` relation here is intentionally nuanced — this claim both supports
and contradicts the developmental progression claim depending on the angle. It supports
the temporal framing (juvenile normal, adult altered) but contradicts a naive reading
of "inhibitory dysfunction present at juvenile." The resolution is that firing-frequency
impairment is present juvenile but synaptic-per-spike function is not. The distinction
matters for mechanistic interpretation.
