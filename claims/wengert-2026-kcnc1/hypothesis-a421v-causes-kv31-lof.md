---
uuid: 6b95034b-bded-485f-b080-2e7db1856e34
slug: hypothesis-a421v-causes-kv31-lof
doi: ~
claim: >
  The recurrent missense variant KCNC1-p.Ala421Val (A421V) in the Kv3.1 voltage-gated
  potassium channel causes a loss of channel function via impaired delivery of channel
  protein to the plasma membrane (a trafficking defect), rather than via altered gating
  or conductance of channels that do reach the surface. The hypothesis predicts that in
  heterozygous expression — the genetic configuration of human disease — a measurable
  reduction in surface Kv3.1 should accompany a reduction in voltage-gated K+ current
  density, while voltage-dependence of activation and activation kinetics of the
  remaining current should be preserved. The trafficking-deficit account is favoured
  over a pure gating account because Kv3.1 channels are obligate tetramers: a dominant-
  negative trafficking effect of the mutant subunit on heteromeric tetramers can
  parsimoniously explain the larger-than-50% current loss observed in heterozygous
  cells.
displayClaim: >
  KCNC1-A421V is a Kv3.1 loss-of-function variant whose primary lesion is impaired
  surface trafficking of the channel — not altered gating or conductance.
claim-type: hypothesis
role: hypothesis
concepts:
  - KCNC1
  - A421V
  - Kv3.1
  - loss-of-function
  - membrane trafficking
  - dominant-negative
priority: 2026-04-20
epistemic: hypothesis
status: N/A
panel: hypothesis

entails:
  - prediction-pv-in-k-current-reduced
  - prediction-kv31-surface-expression-reduced

belongings: []

assertions:
  - paper-slug: wengert-2026-kcnc1
    doi: 10.7554/eLife.103784
    panel: hypothesis
    analysis: paper Introduction; operationalised by patch-clamp K+ current measurement, immunohistochemistry, and HEK heterologous expression
    dataset: ~
    dataset-doi: ~
    method: hypothesis statement
    confidence: N/A

reproductions: []
---

This is the molecular-mechanism hypothesis of the paper. Distinguishing trafficking
loss from gating loss matters mechanistically and therapeutically: a trafficking deficit
is in principle rescuable by chaperone-like interventions or by enhancing the surface
delivery of remaining wild-type channels, whereas a gating-only deficit would require a
gain-of-function pharmacological opener. The paper's three-pronged test — HEK cell
heterologous expression of the variant alone and in 50:50 mix with WT (fig3-supp1),
nucleated macropatch K+ currents in PV-INs (fig3B-E), and quantitative immunohistochemistry
of membrane vs cytosolic Kv3.1 in PV-INs (fig3H-I) — is precisely what the hypothesis
calls for. Confirmed by `pv-ins-reduced-k-current-density` (60% K+ current reduction in
PV-INs, p<0.001) and `a421v-kv31-membrane-trafficking-impaired` (reduced membrane:cytosol
Kv3.1 ratio).
