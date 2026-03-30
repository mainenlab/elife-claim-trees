---
uuid: bd91acf8-a01d-4713-8382-8a0757cbd86a
slug: pv-in-inhibitory-synapse-altered-adult
doi: ~
claim: >
  In adult (P32–42) Kcnc1-A421V/+ mice, PV-IN-mediated uIPSC magnitude is significantly
  increased relative to WT (**p<0.01 at 20 Hz, *p<0.05 at 40 and 80 Hz), and paired-pulse
  ratio (uIPSC2/uIPSC1) is significantly reduced across frequencies (*p<0.05), indicating
  developmentally emergent synaptic dysfunction in inhibitory neurotransmission.
claim-type: empirical
concepts:
  - inhibitory synaptic transmission
  - uIPSC
  - PV interneurons
  - paired-pulse ratio
  - adult
  - Kv3.1
  - synaptic depression
priority: 2026-03-30
epistemic: strong

belongings:
  - relation: extends
    target: pv-in-inhibitory-synapse-intact-juvenile
  - relation: supports
    target: inhibitory-dysfunction-progresses-to-adulthood

assertions:
  - paper-slug: wengert-2026-kcnc1
    doi: 10.7554/eLife.103784
    panel: fig7F, fig7G, fig7H, fig7I
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
      14/36 WT pairs connected (N=8 mice); 13/36 Kcnc1-A421V/+ pairs connected (N=8 mice).
      Failure rates not different. The increased uIPSC amplitude with reduced paired-pulse
      ratio is consistent with prior work showing Kv3 blockade increases first-IPSC amplitude
      but enhances short-term depression (Ishikawa et al., 2003; Goldberg et al., 2005).
      Latency not significantly different.
---

The adult synaptic finding is the developmental companion to the juvenile null result in
fig6. Together they define the trajectory: presynaptic spike impairment is present at both
ages, but the downstream effect on synaptic terminal function emerges only as Kv3.1 expression
matures in the terminal compartment. The increased amplitude with reduced paired-pulse ratio
is a signature of enhanced initial release probability with faster depression.
