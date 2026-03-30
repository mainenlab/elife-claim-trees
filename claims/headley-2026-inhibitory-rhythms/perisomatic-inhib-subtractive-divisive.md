---
uuid: 702332b6-1ba1-40b9-9319-f9f3053d59dd
slug: perisomatic-inhib-subtractive-divisive
doi: ~
claim: >
  Perisomatic inhibition reduces both the baseline firing rate (subtractive effect) and the
  slope of the input-output relationship (divisive effect), thereby compressing the neuron's
  dynamic range rather than merely shifting its operating point.
claim-type: empirical
concepts:
  - perisomatic inhibition
  - input-output relationship
  - divisive inhibition
  - subtractive inhibition
  - gain modulation
priority: 2026-03-30
epistemic: moderate

belongings:
  - relation: requires
    target: perisomatic-inhib-drops-firing-07hz
  - relation: requires
    target: l5-model-single-cell-scope

assertions:
  - paper-slug: headley-2026-inhibitory-rhythms
    doi: 10.7554/eLife.95562
    panel: fig5, fig6
    analysis: scripts/Fig5.ipynb, scripts/Fig6.ipynb
    dataset: https://datadryad.org/dataset/doi:10.5061/dryad.v6wwpzhb8
    dataset-doi: 10.5061/dryad.v6wwpzhb8
    method: compartmental modelling — I/O curve analysis
    confidence: moderate

reproductions:
  - agent: mainen-z
    date: 2026-03-30
    status: unverified
    notes: >
      Scripts: Fig5.ipynb, Fig6.ipynb. Not yet executed. The divisive vs subtractive
      classification requires inspection of the I/O curves in the output figures.
---

The subtractive/divisive distinction in inhibition is a classic question in computational neuroscience. Pure shunting inhibition (conductance increase) is theoretically divisive; in practice, location, timing, and network context determine the actual effect. This paper's result — that perisomatic inhibition in this model produces a mixed subtractive-divisive effect — is moderate because the classification depends on how the I/O curve is measured and which part of the operating range is examined. The quantitative ratio of subtractive vs divisive components is not extracted here.
