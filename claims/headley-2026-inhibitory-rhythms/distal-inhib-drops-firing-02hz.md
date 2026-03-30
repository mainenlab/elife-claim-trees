---
uuid: 26819b09-5b20-4c90-b9f3-8bdd29a2a57c
slug: distal-inhib-drops-firing-02hz
doi: ~
claim: >
  Doubling the strength of distal dendritic inhibition reduces somatic firing rate from a
  baseline of approximately 5.5 Hz to approximately 0.2 Hz, primarily by suppressing the
  occurrence of dendritic Ca²⁺ and NMDA spikes rather than by directly raising AP threshold.
claim-type: empirical
concepts:
  - distal dendritic inhibition
  - somatic firing rate
  - dendritic spike suppression
  - Ca2+ spikes
  - NMDA spikes
priority: 2026-03-30
epistemic: strong

belongings:
  - relation: requires
    target: l5-model-single-cell-scope
  - relation: requires
    target: naturalistic-drive-parameterization
  - relation: supports
    target: beta-bidirectional-dendritic-control
  - relation: supports
    target: beta-gates-distal-apical-inputs

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
      Data: Figure4a.csv through Figure4f.csv in data/. Scripts: Fig4.ipynb, Fig5.ipynb.
      Not yet executed.
---

The near-complete suppression of firing (5.5 → 0.2 Hz) under doubled distal inhibition demonstrates that dendritic spikes are not merely modulatory — they are required for most somatic APs under these conditions. The mechanism is dendritic spike suppression: distal inhibitory conductance prevents membrane voltage from reaching spike threshold in the apical tuft, eliminating the regenerative events that would otherwise drive somatic output. This contrasts sharply with perisomatic inhibition (same magnitude: 5.5 → 0.7 Hz), where the mechanism is AP threshold elevation and the effect is smaller.
