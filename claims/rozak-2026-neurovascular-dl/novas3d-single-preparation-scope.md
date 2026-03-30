---
uuid: e52585f7-4764-4444-9919-1c9a4c6cec38
slug: novas3d-single-preparation-scope
doi: ~
claim: >
  The NOVAS3D segmentation model was trained and quantitatively evaluated exclusively on data
  from Thy1-ChR2-YFP mice (line 18, 6–12 months, Texas Red vascular labeling, cranial window,
  isoflurane anesthesia); quantitative performance metrics are not reported for any other
  preparation, strain, species, or imaging modality.
claim-type: assessment
concepts:
  - model scope
  - training distribution
  - preparation specificity
  - generalization
priority: 2026-03-30
epistemic: strong

belongings:
  - relation: extends
    target: dl-model-scope-single-pipeline

assertions:
  - paper-slug: rozak-2026-neurovascular-dl
    doi: 10.7554/eLife.95525
    panel: fig1 (architecture); methods section
    analysis: code inspection
    dataset: https://doi.org/10.20383/103.01588
    dataset-doi: 10.20383/103.01588
    method: code inspection; methods section review
    confidence: strong

reproductions:
  - agent: mainen-z
    date: 2026-03-30
    status: verified
    notes: >
      Confirmed by reading the Methods (Cohort, Animals, Ground truth generation sections):
      42 training volumes from 25 Thy1-ChR2-EYFP mice; test set from 6 mice of same strain.
      All quantitative Dice/HD95/precision/recall metrics are from this single preparation.
      OOD examples in appendix are qualitative only (app1fig12, app1fig13).
---

This is a more precise version of `dl-model-scope-single-pipeline`. The existing claim
bundles scope and GPU requirement; this claim isolates the preparation specificity as the
primary scope limitation. It is marked strong because the training distribution is fully
characterized in the Methods and the test set is confirmed to be from the same strain/preparation.
The claim is verifiable by code/methods inspection and does not require re-execution.
