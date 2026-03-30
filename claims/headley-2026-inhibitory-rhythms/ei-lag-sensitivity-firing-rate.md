---
uuid: b88c89df-7f9c-4d11-9dc4-1ec829d6b413
slug: ei-lag-sensitivity-firing-rate
doi: ~
claim: >
  Varying the excitatory-inhibitory coupling lag from 4 to 500 ms has modest effects on
  total somatic firing rate but substantially alters which dendritic compartments contribute
  most to driving action potentials, demonstrating that timing shapes dendritic computation
  even when overall output rate is similar.
claim-type: empirical
concepts:
  - E/I coupling lag
  - dendritic compartment contribution
  - firing rate sensitivity
  - inhibitory timing
priority: 2026-03-30
epistemic: moderate

belongings:
  - relation: requires
    target: l5-model-single-cell-scope
  - relation: requires
    target: naturalistic-drive-parameterization

assertions:
  - paper-slug: headley-2026-inhibitory-rhythms
    doi: 10.7554/eLife.95562
    panel: fig4
    analysis: scripts/Fig4.ipynb
    dataset: https://datadryad.org/dataset/doi:10.5061/dryad.v6wwpzhb8
    dataset-doi: 10.5061/dryad.v6wwpzhb8
    method: compartmental modelling — E/I lag sweep
    confidence: moderate

reproductions:
  - agent: mainen-z
    date: 2026-03-30
    status: unverified:no-data
    notes: >
      Fig4.ipynb requires Dryad simulation files from DendCompOscPublic/Fig4/ directory
      (multiple E/I lag conditions: prox500_dist_4, etc.). These files are not in the
      GitHub repo. Figure4a-f.csv in data/ cover the main doubling experiment but not
      the E/I lag sweep (4–500 ms). Dryad deposit (doi:10.5061/dryad.v6wwpzhb8) contains
      required simulation outputs; download required to execute the lag sweep analysis.
---

This result is a boundary/null finding that constrains the model's parameter sensitivity. The 4 ms E/I lag used in the baseline simulations was chosen to reflect feedforward inhibition timing; the finding that varying it from 4 to 500 ms doesn't strongly affect total firing rate suggests the main results (firing rate suppression by distal vs perisomatic inhibition) are not an artefact of this timing choice. However, the large effect on which compartments drive APs shows that timing is not irrelevant — it shapes the internal dynamics even when the output rate appears stable.
