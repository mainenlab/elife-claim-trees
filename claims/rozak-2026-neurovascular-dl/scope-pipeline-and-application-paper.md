---
uuid: 1a2b3c4d-5e6f-7a8b-9c0d-1e2f3a4b5c6d
slug: scope-pipeline-and-application-paper
doi: ~
claim: >
  All findings are scoped to a method-paper-with-application envelope: a single deep-learning
  pipeline (UNet/UNETR ensemble + ANTsPy registration + boundary-detection radius + NetworkX
  graph analysis) trained and quantitatively benchmarked on Thy1-ChR2-EYFP mice (line 18, 6–12
  months, Texas Red vascular labelling, cranial window over S1FL, isoflurane for structural
  scan, alpha-chloralose for functional scan); the in vivo demonstration uses the same single
  preparation (n=17 mice for biology, n=4 C57BL/6J wild-type mice for negative control).
  Quantitative segmentation metrics are reported for nine test images from six held-out mice;
  out-of-distribution generalisation (C57BL/6, Fischer rat, light-sheet) is shown only
  qualitatively. The paper does not test the pipeline on awake-behaving preparations,
  non-mammalian species, disease models, or alternative vascular labels; it does not test
  alternative responder thresholds beyond a single appendix supplement.
displayClaim: >
  Pipeline-and-application scope: one DL stack trained on Thy1-ChR2-EYFP cranial-window 2PFM,
  benchmarked on six held-out mice, applied in vivo to n=17 Thy1-ChR2 + n=4 WT mice. OOD shown
  qualitatively only; no awake behaviour, no disease models, no alternative thresholds.
claim-type: assessment
role: scope
concepts:
  - method-paper scope
  - preparation envelope
  - training distribution
  - benchmark distribution
  - OOD evaluation
priority: 2026-04-20
epistemic: weak
status: N/A
panel: scope

scopes:
  - unetr-outperforms-ilastik-hd95
  - novas3d-outperforms-ilastik
  - registration-doubles-vessel-count
  - radius-estimation-r2-0p68
  - vessel-radius-heterogeneity-stimulation
  - baseline-intra-vessel-radius-varies-24pct
  - dilations-nearer-neurons-than-constrictions
  - constrictions-deeper-than-dilations
  - blue-light-dilations-exceed-green-control
  - artery-dilates-venule-unchanged-at-low-power
  - network-assortativity-increases-stimulation
  - capillary-efficiency-increases-4pct
  - wt-controls-no-blue-green-difference
  - novas3d-generalizes-qualitatively-ood

belongings: []

assertions:
  - paper-slug: rozak-2026-neurovascular-dl
    doi: 10.7554/eLife.95525
    panel: scope
    analysis: ~
    dataset: ~
    dataset-doi: ~
    method: design summary from Methods
    confidence: weak

reproductions:
  - agent: mainen-z
    date: 2026-04-20
    status: verified
    notes: >
      Confirmed by Methods inspection: training set 42 volumes from 25 Thy1-ChR2-EYFP mice; test
      set nine images from six held-out same-strain mice; in vivo cohort n=17 Thy1-ChR2 +
      n=4 C57BL/6J WT; cranial window over S1FL with Texas Red vascular labelling; isoflurane
      anaesthesia for structural scan, alpha-chloralose for functional scan; stimulation 458 nm
      at 1.1 and 4.3 mW/mm² (ChR2-activating) and 552 nm at 4.3 mW/mm² (control). OOD generalisation
      (app1fig12, app1fig13) is qualitative only — no Dice/HD95 reported. Responder threshold
      sensitivity test is a single appendix supplement (app1fig14, 10% threshold) with no formal
      comparison.
---

This scope claim makes explicit what every quantitative and biological-demonstration claim in the
paper inherits about its preparation envelope. The training and benchmark distributions are
identical at the strain/preparation level (Thy1-ChR2-EYFP, cranial window, Texas Red); the
biological application uses the same preparation; the negative control (n=4 C57BL/6J WT) is the
only different genotype with quantitative measurement. The paper does not claim NOVAS3D will work
in awake-behaving animals, in disease models (stroke, AD, hypertension), or with alternative
vascular labels (FITC-dextran, lectin); these are appropriate downstream tests for the wider
community to perform. The single-preparation training is the tightest scope constraint and is also
made explicit by `novas3d-single-preparation-scope` and `dl-model-scope-single-pipeline`; this
scope claim subsumes both into a single design-envelope statement.
