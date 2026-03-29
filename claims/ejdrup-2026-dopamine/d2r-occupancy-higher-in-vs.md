---
uuid: db68e131-734a-4471-a7e6-e027f38048ac
slug: d2r-occupancy-higher-in-vs
doi: ~
claim: >
  D2R occupancy during pacemaker activity is approximately 0.8 in VS versus approximately 0.55
  in DS, consistent with higher prevailing tonic DA in VS.
claim-type: empirical
concepts:
  - D2 receptor
  - receptor occupancy
  - ventral striatum
  - dorsal striatum
  - tonic dopamine
priority: 2026-03-29
epistemic: weak

belongings:
  - relation: requires
    target: vs-maintains-pervasive-tonic-da
  - relation: requires
    target: d2r-initialization-unjustified

assertions:
  - paper-slug: ejdrup-2026-dopamine
    doi: 10.7554/eLife.105214
    panel: fig2G
    analysis: Figure 2-Fig 2g, h-Source code.py
    dataset: https://zenodo.org/record/17664800
    dataset-doi: 10.5281/zenodo.17664800
    method: mathematical modelling
    confidence: weak

reproductions:
  - agent: mainen-z
    date: 2026-03-29
    status: unverified
    notes: ~
---

The DS/VS difference in D2R occupancy (0.55 vs 0.8) follows directly from the difference in tonic [DA] between regions. In VS, the pervasive tonic DA (all percentiles > 10 nM, with median likely > 20 nM) produces high D2R occupancy even during pacemaker activity; in DS, tonic DA is near zero outside active varicosities. The directional claim — VS has higher D2R occupancy at rest — is moderate. The specific values (0.55, 0.8) are weak because both depend on the initialization at 0.4, which is inconsistent with the equilibrium prediction from the model's own parameters. With correct initialization the occupancy trajectories would begin at different absolute values.
