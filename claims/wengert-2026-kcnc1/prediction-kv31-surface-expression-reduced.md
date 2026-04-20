---
uuid: f80417c3-ece7-4792-9e83-0b3f92d26ac2
slug: prediction-kv31-surface-expression-reduced
doi: ~
claim: >
  If the A421V variant impairs Kv3.1 surface trafficking — rather than channel gating
  per se — then heterozygous Kcnc1-A421V/+ PV-INs should show a measurable reduction
  in the membrane-localized fraction of Kv3.1 protein, accompanied by relative
  enrichment of cytosolic Kv3.1 (likely in the endoplasmic reticulum). Quantitatively,
  the membrane:cytosol fluorescence intensity ratio measured by immunohistochemistry
  should be significantly lower in mutant PV-INs. As a corollary, the voltage-dependence
  of activation and the activation kinetics of the residual K+ current should not
  differ between WT and mutant, because the channels that do reach the surface are
  predominantly WT homotetramers (or contain functional channels with normal gating).
displayClaim: >
  If A421V is a trafficking lesion, mutant PV-INs should show reduced membrane:cytosol
  Kv3.1 ratio with preserved voltage-dependence and gating kinetics of the residual
  current.
claim-type: prediction
role: prediction
concepts:
  - prediction
  - membrane trafficking
  - immunohistochemistry
  - voltage-dependence
  - activation kinetics
  - Kv3.1
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
    analysis: derived from the trafficking-lesion hypothesis; tested by quantitative immunohistochemistry and biophysical analysis of residual current
    dataset: ~
    dataset-doi: ~
    method: derived prediction
    confidence: strong

reproductions: []
---

This prediction operationalises the trafficking-versus-gating distinction. If A421V
were a gating lesion (e.g. shifted activation, slowed kinetics), the residual current
should look biophysically different from WT. The paper's negative result for activation
voltage-dependence and kinetics (fig3F, fig3G) plus the positive result for
membrane:cytosol ratio reduction (fig3H-I) together rule out the gating-lesion
alternative and confirm the trafficking-lesion account. Tested by
`a421v-kv31-membrane-trafficking-impaired`.
