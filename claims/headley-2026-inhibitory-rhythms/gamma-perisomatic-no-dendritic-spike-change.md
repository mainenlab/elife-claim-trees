---
uuid: b7b55f60-7438-47fd-a42a-431bcbaf696b
slug: gamma-perisomatic-no-dendritic-spike-change
doi: ~
claim: >
  Gamma-frequency perisomatic rhythms phase-modulate action potential threshold without
  substantially altering overall dendritic spike rates, demonstrating functional orthogonality
  between the perisomatic-gamma and distal-beta inhibitory streams.
claim-type: empirical
concepts:
  - gamma rhythm
  - perisomatic inhibition
  - dendritic spike rates
  - functional orthogonality
  - AP threshold
priority: 2026-03-30
epistemic: moderate

belongings:
  - relation: requires
    target: perisomatic-inhib-drops-firing-07hz
  - relation: requires
    target: gamma-optimal-perisomatic-ap-modulation
  - relation: requires
    target: l5-model-single-cell-scope
  - relation: supports
    target: pv-gamma-sst-beta-correspondence

assertions:
  - paper-slug: headley-2026-inhibitory-rhythms
    doi: 10.7554/eLife.95562
    panel: fig5
    analysis: scripts/Fig5.ipynb
    dataset: https://datadryad.org/dataset/doi:10.5061/dryad.v6wwpzhb8
    dataset-doi: 10.5061/dryad.v6wwpzhb8
    method: compartmental modelling — dendritic event rate comparison
    confidence: moderate

reproductions:
  - agent: mainen-z
    date: 2026-03-30
    status: unverified
    notes: >
      Script: Fig5.ipynb. Dendritic event rates under gamma perisomatic vs control condition
      compared. Not yet executed.
---

The orthogonality claim — that gamma perisomatic and beta distal streams operate independently — is one of the paper's central theoretical contributions. If true, it implies that cortical circuits can simultaneously modulate somatic output (via PV+/gamma) and distal dendritic integration (via SST+/beta) without interference. The moderate epistemic status reflects that "not substantially altering" is a qualitative claim; the quantitative threshold for "substantial" was not defined, and small effects on dendritic spike rates under gamma perisomatic inhibition are possible but not ruled out.
