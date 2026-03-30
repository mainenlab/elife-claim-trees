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
    status: verified
    script: verification/headley-2026-inhibitory-rhythms/verify.py
    figure: verification/headley-2026-inhibitory-rhythms/figures/fig4a-firing-rates.png
    notes: >
      Verified directly from Figure4a.csv in repo data/ (30 trials/condition). Somatic
      (perisomatic ×2) firing rate: 0.7±0.31 Hz vs control 5.5±0.86 Hz. Exact match to
      claim. Figure4d.csv (Na spike freq): somatic=2.27 vs control=2.12 (essentially
      unchanged). Figure4e.csv (NMDA freq): somatic=4.19 vs control=4.28 (unchanged).
      Figure4f.csv (Ca freq): somatic=4.84 vs control=4.86 (unchanged). AP threshold
      (Figure4c.csv): control=120.6, somatic=392.0, dendritic=270.8 mV·µm. The
      near-tripling of the threshold cost under perisomatic condition confirms the threshold-
      elevation mechanism while dendritic spike rates are preserved. Claim fully verified:
      perisomatic doubling → 0.7 Hz via threshold elevation, not dendritic spike suppression.
---

The 5.5 → 0.7 Hz reduction under perisomatic doubling is substantially less than the distal effect (5.5 → 0.2 Hz), and the mechanism is different: perisomatic inhibition imposes a shunting conductance near the soma that raises the AP threshold for axonal initiation. Dendritic spikes can still occur; they are less likely to propagate to APs because the threshold is higher, not because the dendritic events are eliminated. This distinction — threshold vs. spike-suppression — is the paper's central mechanistic claim about differential computation.
