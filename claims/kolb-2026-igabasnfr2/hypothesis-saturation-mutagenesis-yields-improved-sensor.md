---
uuid: ac2b204d-13a2-4aec-91b9-4792961bc503
slug: hypothesis-saturation-mutagenesis-yields-improved-sensor
doi: ~
claim: >
  Targeted near-saturation mutagenesis at sites in and around the Pf622 GABA-binding
  pocket and the cpGFP-linker interfaces can yield a successor to iGABASnFR1 with
  substantially improved sensitivity (ΔF/F), increased on-cell affinity within the
  physiologically relevant range, faster binding kinetics, and improved expression /
  membrane trafficking — without sacrificing GABA selectivity. The performance ceiling
  of iGABASnFR1 is set by suboptimal residues at a small number of structurally
  identifiable positions, not by an intrinsic limit of the cpGFP-coupled Venus-flytrap
  scaffold.
displayClaim: >
  Targeted saturation mutagenesis of the Pf622 binding pocket and cpGFP linkers can
  yield a substantially improved successor to iGABASnFR1 — the v1 ceiling is set by
  suboptimal residues, not the scaffold.
claim-type: hypothesis
role: hypothesis
concepts:
  - sensor engineering
  - saturation mutagenesis
  - Pf622 binding pocket
  - cpGFP linker
  - directed evolution
priority: 2026-04-20
epistemic: hypothesis
status: N/A
panel: hypothesis

entails:
  - prediction-screen-yields-multiple-improved-variants
  - prediction-improved-sensor-enables-new-measurements

belongings: []

assertions:
  - paper-slug: kolb-2026-igabasnfr2
    doi: 10.7554/eLife.108319
    panel: hypothesis
    analysis: ~
    dataset: ~
    dataset-doi: ~
    method: hypothesis stated in introduction; operationalised by the screening pipeline (Fig 1)
    confidence: N/A

reproductions: []
---

This is the engineering hypothesis that motivates the screen. The choice of 39 sites is itself a structural commitment: the paper bets that residues at the Venus-flytrap closure interface and at the cpGFP linkers are the rate-limiting determinants of sensor performance, and that mutating them in an unbiased near-saturating way will surface a substantially better variant. The hypothesis is dissociable from a "scaffold ceiling" alternative — under the alternative, the screen would yield only marginal improvements distributed across many sites, with no single variant decisively better than v1. Resolved in favour of the engineering hypothesis by the recovery of two qualitatively distinct top performers (`igabasnfr2-fourfold-sensitivity-gain`, `igabasnfr2n-negative-going-variant`) and 22 variants improved on both sensitivity and expression simultaneously (`mutagenesis-3947-variants-screened`).
