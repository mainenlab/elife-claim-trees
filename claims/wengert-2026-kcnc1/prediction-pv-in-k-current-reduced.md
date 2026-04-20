---
uuid: 9205b93d-7a48-40b8-9bbb-290f859eaa61
slug: prediction-pv-in-k-current-reduced
doi: ~
claim: >
  If KCNC1-A421V is a Kv3.1 loss-of-function variant, heterozygous PV-INs in the
  Kcnc1-A421V/+ knock-in mouse should show a quantitatively measurable reduction in
  voltage-gated potassium current density relative to WT littermates, measured by
  whole-cell or nucleated macropatch recording in the voltage range where Kv3 channels
  carry the dominant outward current (positive to ~0 mV). The reduction should be
  larger than the 50% expected from simple haploinsufficiency, because Kv3 channels
  function as obligate tetramers and a dominant-negative mutant subunit incorporated
  into heteromeric tetramers can disable more than half of channel surface delivery.
displayClaim: >
  Heterozygous Kcnc1-A421V/+ PV-INs should show reduced voltage-gated K+ current
  density, by an amount greater than 50% if the variant acts dominant-negatively.
claim-type: prediction
role: prediction
concepts:
  - prediction
  - K+ current density
  - PV interneurons
  - heterozygous expression
  - dominant-negative
priority: 2026-04-20
epistemic: prediction
status: N/A
panel: prediction

derived-from:
  - hypothesis-a421v-causes-kv31-lof

belongings: []

assertions:
  - paper-slug: wengert-2026-kcnc1
    doi: 10.7554/eLife.103784
    panel: prediction
    analysis: derived from the Kv3.1 LOF hypothesis; tested by nucleated macropatch K+ current recording in PV-INs
    dataset: ~
    dataset-doi: ~
    method: derived prediction
    confidence: strong

reproductions: []
---

The dominant-negative quantitative prediction is the paper's diagnostic test for the
Kv3.1 LOF hypothesis: simple haploinsufficiency would yield ~50% current loss; the
observed 60% reduction (`pv-ins-reduced-k-current-density`) is consistent with a
dominant-negative mechanism in which mutant subunits incorporated into heterotetramers
disrupt trafficking of the entire channel complex. The 50:50 WT:A421V mix in HEK cells
yielded ~42% of WT current — also consistent with dominant-negative. Tested by
`pv-ins-reduced-k-current-density`.
