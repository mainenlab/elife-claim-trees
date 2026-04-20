---
uuid: bce0de60-5b50-44e1-aafd-5d94c2f06e9b
slug: prediction-screen-yields-multiple-improved-variants
doi: ~
claim: >
  If the v1 performance ceiling is set by suboptimal residues at identifiable structural
  sites, then near-saturation mutagenesis at those sites should yield (i) multiple
  variants exceeding iGABASnFR1 in ΔF/F sensitivity, (ii) at least one variant
  simultaneously improved on sensitivity and expression / responsive-pixel count, and
  (iii) potentially variants with qualitatively new behaviour (e.g. inverted response).
  The screen should not be dominated by single-site marginal improvements.
displayClaim: >
  Saturation mutagenesis should yield multiple variants exceeding iGABASnFR1, at least
  one improved on both sensitivity and expression, and potentially qualitatively novel
  variants such as inverted-response sensors.
claim-type: prediction
role: prediction
concepts:
  - saturation mutagenesis
  - high-throughput screening
  - variant recovery
  - inverted-response sensor
priority: 2026-04-20
epistemic: prediction
status: N/A
panel: prediction

derived-from:
  - hypothesis-saturation-mutagenesis-yields-improved-sensor

belongings: []

assertions:
  - paper-slug: kolb-2026-igabasnfr2
    doi: 10.7554/eLife.108319
    panel: prediction
    analysis: ~
    dataset: ~
    dataset-doi: ~
    method: derived prediction
    confidence: strong

reproductions: []
---

This prediction is the operational form of the engineering hypothesis. It commits the screen to specific recoveries: 93 variants exceeding v1 ΔF/F (`mutagenesis-3947-variants-screened`), 22 variants improved on both sensitivity and expression (same), and the recovery of an inverted-response variant (`igabasnfr2n-negative-going-variant`). The prediction is falsifiable: had the screen returned only marginal single-site gains with no co-improvement of expression and no qualitatively novel variants, the engineering hypothesis would be undermined. Tested directly by `mutagenesis-3947-variants-screened`, `igabasnfr2-fourfold-sensitivity-gain`, `igabasnfr2-13fold-expression-increase`, and `igabasnfr2n-negative-going-variant`.
