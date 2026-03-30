---
uuid: 49adf84d-f957-4524-a9e4-0caf34bebe13
slug: ips-candidate-driver-foveal-feedback
doi: ~
claim: >
  IPS activity is significantly more strongly associated with foveal decoding than with peripheral decoding in the experimental condition (t(27)=2.53, p=0.026, difference=4.22), making IPS a candidate mediator of foveal feedback during saccade preparation.
claim-type: interpretive
concepts:
  - intraparietal sulcus
  - IPS
  - feedback driver
  - parametric modulation
  - saccade planning
  - foveal decoding
priority: 2026-03-30
epistemic: moderate

belongings:
  - relation: requires
    target: parametric-modulation-exploratory-not-preregistered

assertions:
  - paper-slug: kammer-2026-foveal-feedback
    doi: ~
    panel: fig4B
    analysis: Lucakaemmer/FovealFeedback (GitHub)
    dataset: https://doi.org/10.18112/openneuro.ds005933.v1.0.0
    dataset-doi: 10.18112/openneuro.ds005933.v1.0.0
    method: parametric modulation analysis (FSL FEAT), Neurosynth ROI masks, 100-voxel selection, Bonferroni correction
    confidence: moderate

reproductions:
  - agent: mainen-z
    date: 2026-03-30
    status: unverified:compute-infeasible
    notes: >
      RESOLVED from unverified:no-code. Full text (JATS XML, Results section) confirms this is a
      reported analysis with statistics, not a discussion inference. The parametric modulation
      analysis correlates block-by-block classifier decision values with ROI BOLD signal. IPS:
      t(27)=2.53, p=0.026, difference=4.22. The analysis is exploratory (explicitly not preregistered
      — see parametric-modulation-exploratory-not-preregistered). Analysis code is in
      Lucakaemmer/FovealFeedback GitHub repo. Status updated from unverified:no-code to
      unverified:compute-infeasible (data and code accessible, compute required).
---

The claim has been upgraded from `unverified:no-code` to `unverified:compute-infeasible`. Full text extraction from the JATS XML confirms that Figure 4 reports a parametric modulation analysis in the Results section under "The role of IPS in mediating foveal feedback," with specific statistics: IPS t(27)=2.53, p=0.026. This is a reported analysis, not a discussion inference. The analysis is explicitly labeled exploratory in the Methods: "with the exception of the exploratory parametric modulation analysis." This limits confirmatory weight — the IPS finding is a single Bonferroni-corrected positive result from three ROIs in an exploratory analysis. The `requires` relation to `parametric-modulation-exploratory-not-preregistered` makes this conditionality explicit in the graph.
