---
uuid: 27009c70-e2bf-49c1-81c5-2663096ca45b
slug: perisomatic-inhib-drops-firing-07hz
doi: ~
claim: >
  Doubling perisomatic inhibition reduces somatic firing from approximately 5.5 Hz to
  approximately 0.7 Hz by elevating action potential voltage threshold, while dendritic
  spike rates are relatively preserved.
claim-type: empirical
concepts:
  - perisomatic inhibition
  - action potential threshold
  - somatic firing rate
  - subtractive inhibition
priority: 2026-03-30
epistemic: strong

belongings:
  - relation: requires
    target: l5-model-single-cell-scope
  - relation: requires
    target: naturalistic-drive-parameterization
  - relation: supports
    target: perisomatic-inhib-subtractive-divisive
  - relation: supports
    target: gamma-perisomatic-no-dendritic-spike-change

assertions:
  - paper-slug: headley-2026-inhibitory-rhythms
    doi: 10.7554/eLife.95562
    panel: fig4, fig5
    analysis: scripts/Fig4.ipynb, scripts/Fig5.ipynb
    dataset: https://datadryad.org/dataset/doi:10.5061/dryad.v6wwpzhb8
    dataset-doi: 10.5061/dryad.v6wwpzhb8
    method: compartmental modelling — inhibition magnitude sweep
    confidence: strong

reproductions:
  - agent: mainen-z
    date: 2026-03-30
    status: unverified
    notes: >
      Data: Figure4a.csv through Figure4f.csv in data/. Script: Fig4.ipynb, Fig5.ipynb.
      Not yet executed.
---

The 5.5 → 0.7 Hz reduction under perisomatic doubling is substantially less than the distal effect (5.5 → 0.2 Hz), and the mechanism is different: perisomatic inhibition imposes a shunting conductance near the soma that raises the AP threshold for axonal initiation. Dendritic spikes can still occur; they are less likely to propagate to APs because the threshold is higher, not because the dendritic events are eliminated. This distinction — threshold vs. spike-suppression — is the paper's central mechanistic claim about differential computation.
