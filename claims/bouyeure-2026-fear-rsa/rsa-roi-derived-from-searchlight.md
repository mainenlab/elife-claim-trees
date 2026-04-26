---
uuid: 7d932232-9c15-45f3-8296-958d3fe84d2a
slug: rsa-roi-derived-from-searchlight
doi: ~
claim: >
  ROI-based RSA analyses (Fig 4B, Fig 5D) use ROIs derived from statistically significant
  clusters in the preceding searchlight analyses on the same dataset, without an independent
  ROI definition, creating a circularity that inflates the expected significance of ROI tests.
claim-type: assessment
role: methodological
concepts:
  - ROI definition
  - circularity
  - searchlight RSA
  - multiple comparisons
  - methodology
priority: 2026-03-30
epistemic: moderate

scopes:
  - ifg-reinstates-reversal-traces-item-specific
  - dmpfc-reinstates-acquisition-traces-generalized
  - context-specificity-predicts-acquisition-reinstatement-regional-dissociation
  - context-specificity-predicts-reversal-reinstatement-dmpfc
  - context-specificity-predicts-reinstatement-new-context-mtg

belongings:
  - relation: requires
    target: ifg-reinstates-reversal-traces-item-specific
  - relation: requires
    target: dmpfc-reinstates-acquisition-traces-generalized
  - relation: requires
    target: context-specificity-predicts-acquisition-reinstatement-regional-dissociation
  - relation: requires
    target: context-specificity-predicts-reversal-reinstatement-dmpfc

assertions:
  - paper-slug: bouyeure-2026-fear-rsa
    doi: 10.7554/eLife.105126
    panel: fig4A (ROI definition procedure)
    figureUri: https://iiif.elifesciences.org/lax/105126%2Felife-105126-fig4-v1.tif/full/1500,/0/default.jpg
    analysis: methods inspection
    dataset: ~
    dataset-doi: ~
    method: code inspection (methods section)
    confidence: moderate

reproductions:
  - agent: mainen-z
    date: 2026-03-30
    status: verified
    notes: >
      Confirmed by methods text: "We thresholded the statistical maps of the searchlight
      analyses to only retain (corrected) significant clusters... These ROI masks in MNI
      space were used to estimate the average neural pattern similarity within each ROI."
      FDR correction is applied within ROI-specific comparisons, but does not eliminate the
      circularity in ROI definition.
---

The paper applies FDR correction for ROI comparisons "given the exploratory character of these analyses," which acknowledges the concern. However, FDR correction across ROI comparisons does not correct for the selection bias introduced by using the same data to define and then test ROIs. This is a widely recognized issue in neuroimaging (sometimes called "double dipping" — Kriegeskorte et al., 2009). The magnitude of inflation depends on effect size and cluster size; for the large searchlight clusters typically reported in this paper, the inflation may be modest. Claims that require this assessment claim carry corresponding epistemic uncertainty.
