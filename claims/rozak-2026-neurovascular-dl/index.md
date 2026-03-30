---
paper-slug: rozak-2026-neurovascular-dl
title: "A deep learning pipeline for mapping in situ network-level neurovascular coupling in multi-photon fluorescence microscopy"
authors:
  - Rozak et al.
journal: eLife
doi: 10.7554/eLife.95525
url: https://elifesciences.org/articles/95525
github: https://github.com/AICONSlab/novas3d
frdr: https://doi.org/10.20383/103.01588
added: 2026-03-30
badge: none-compute
claim-count: 17
---

## Abstract

This paper presents NOVAS3D, a deep learning pipeline for volumetric vessel segmentation and network-level neurovascular coupling analysis in two-photon fluorescence microscopy (2PFM). The pipeline uses UNet/UNETR architectures for vessel segmentation, followed by graph-theoretic analysis of vascular topology. Applied to optogenetically stimulated Thy1-ChR2-YFP mice (n=17, 6–12 months, cranial window over S1FL, alpha-chloralose anesthesia post-structural scan), the study shows network-wide vascular responses: assortativity increases 152 ± 65%, efficiency increases 4% (median; IQR: –8% to 38%) at peak stimulation (458 nm, 4.3 mW/mm²; p=0.03 vs green control), with capillary dilations occurring 16.1 µm from labeled neurons versus constrictions at 21.9 µm (p<1e-4). Stimulation conditions: 458 nm at 1.1 and 4.3 mW/mm² (ChR2-activating), 552 nm at 4.3 mW/mm² (control). Negative control: C57BL/6J WT mice (n=4) show no blue-vs-green difference.

## Claims

### Pipeline benchmark claims (segmentation performance)

| Slug | Panel | Epistemic | Summary |
|:-----|:------|:----------|:--------|
| [unetr-outperforms-ilastik-hd95](unetr-outperforms-ilastik-hd95.md) | fig3 | moderate | UNETR beats ilastik on HD95 (p<0.05); ilastik high recall (0.89) but low precision (0.37) |
| [novas3d-outperforms-ilastik](novas3d-outperforms-ilastik.md) | fig3, fig4 | moderate | NOVAS3D (UNet/UNETR) beats ilastik on Dice/precision/recall (summary claim) |
| [registration-doubles-vessel-count](registration-doubles-vessel-count.md) | — | moderate | Registration + mask union increases vessel count 241→412 per FOV; MSE 1306→0.008 SU |
| [radius-estimation-r2-0p68](radius-estimation-r2-0p68.md) | fig5 | moderate | R²=0.68 for simulated radius recovery; stable to noise up to SD=200 SU |

### Neurovascular biology claims (applying the pipeline)

| Slug | Panel | Epistemic | Summary |
|:-----|:------|:----------|:--------|
| [vessel-radius-heterogeneity-stimulation](vessel-radius-heterogeneity-stimulation.md) | fig6 | moderate | 24 ± 28% baseline within-vessel radius variation; dilations 16.1 µm, constrictions 21.9 µm from neurons |
| [baseline-intra-vessel-radius-varies-24pct](baseline-intra-vessel-radius-varies-24pct.md) | fig7 | moderate | Capillary radius varies 24±28% along vessel length at baseline; point measurements insufficient |
| [dilations-nearer-neurons-than-constrictions](dilations-nearer-neurons-than-constrictions.md) | fig8D | moderate | Dilations 16.1±14.3 µm vs constrictions 21.9±14.6 µm from labeled neurons at 4.3 mW/mm² (p<1e-4) |
| [constrictions-deeper-than-dilations](constrictions-deeper-than-dilations.md) | fig8E | moderate | Constrictions 37±179 µm deeper than dilations at 4.3 mW/mm² (p<1e-4); dilators tend toward surface |
| [blue-light-dilations-exceed-green-control](blue-light-dilations-exceed-green-control.md) | fig8A | moderate | 458 nm dilations (0.90 µm) larger than 552 nm control (0.58 µm; p<1e-4); responses are ChR2-mediated |
| [artery-dilates-venule-unchanged-at-low-power](artery-dilates-venule-unchanged-at-low-power.md) | fig7A | weak | Sample artery dilates 1.33±0.86 µm, capillary 0.42±0.39 µm, venule unchanged at 1.1 mW/mm² |
| [network-assortativity-increases-stimulation](network-assortativity-increases-stimulation.md) | fig9B | moderate | Assortativity increases 152 ± 65% at 4.3 mW/mm²; capillaries mirror neighbors' responses |
| [capillary-efficiency-increases-4pct](capillary-efficiency-increases-4pct.md) | fig9C | moderate | Median 4% efficiency increase (IQR: –8–38%) at 4.3 mW/mm² (p=0.03 vs control) |
| [wt-controls-no-blue-green-difference](wt-controls-no-blue-green-difference.md) | app1fig9 | moderate | WT C57BL/6J (n=4) show no blue-vs-green radius difference; confirms ChR2 specificity |

### Assessment claims (scope, assumptions, methodology)

| Slug | Panel | Epistemic | Summary |
|:-----|:------|:----------|:--------|
| [novas3d-single-preparation-scope](novas3d-single-preparation-scope.md) | methods | strong | Training and quantitative evaluation exclusively on Thy1-ChR2-YFP mice; no OOD metrics |
| [dl-model-scope-single-pipeline](dl-model-scope-single-pipeline.md) | fig1 | moderate | Pipeline trained on one mouse model; GPU required; generalization not demonstrated quantitatively |
| [novas3d-generalizes-qualitatively-ood](novas3d-generalizes-qualitatively-ood.md) | app1fig12, app1fig13 | weak | Qualitative generalization to C57BL/6, Fischer rat, light-sheet — no quantitative metrics |
| [responder-threshold-2sd-untested](responder-threshold-2sd-untested.md) | app1fig14 | weak | Responder threshold (2×SD) not formally sensitivity-tested; 10% alternate threshold shown qualitatively |

## Dependency structure summary

```
novas3d-outperforms-ilastik
  └─ extends → unetr-outperforms-ilastik-hd95
               └─ requires → novas3d-single-preparation-scope

vessel-radius-heterogeneity-stimulation
  └─ requires → radius-estimation-r2-0p68
  └─ requires → responder-threshold-2sd-untested

dilations-nearer-neurons-than-constrictions
  └─ requires → responder-threshold-2sd-untested
  └─ supports → network-assortativity-increases-stimulation

network-assortativity-increases-stimulation
  └─ requires → responder-threshold-2sd-untested
  └─ requires → radius-estimation-r2-0p68

capillary-efficiency-increases-4pct
  └─ requires → responder-threshold-2sd-untested
  └─ requires → radius-estimation-r2-0p68

blue-light-dilations-exceed-green-control
  └─ requires → wt-controls-no-blue-green-difference

novas3d-generalizes-qualitatively-ood
  └─ extends → dl-model-scope-single-pipeline
  └─ extends → novas3d-single-preparation-scope
```

## Reproduction status

| Status | Count | Claims |
|:-------|:------|:-------|
| verified | 2 | dl-model-scope-single-pipeline, novas3d-single-preparation-scope (assessment, code/methods inspection) |
| unverified | 15 | All result and benchmark claims — FRDR data accessible, GPU required, not yet executed |

**Key risk:** GPU required for inference; large volumetric FRDR data; Tutorial.ipynb provides end-to-end reproduction path. Segmentation model pre-trained — no retraining needed for reproduction. Quantitative values for assortativity (152 ± 65%) appear in Results prose but not in a main figure caption — verify against Figure 9 and supplementary tables.

## Extraction notes (triplicate, 2026-03-30)

Pass A (Results), Pass B (Captions), Pass C (Methods) completed. High-confidence claims appear in 2–3 passes. Single-source claims flagged individually.

Two distinct contribution streams isolated as required:
1. **Pipeline benchmark** — segmentation performance vs ilastik, registration improvement, radius validation. Claims `unetr-outperforms-ilastik-hd95`, `registration-doubles-vessel-count`, `radius-estimation-r2-0p68`.
2. **Neurovascular biology** — spatial gradient (dilation/constriction distance to neurons), depth segregation, stimulus specificity, network coordination. Claims `dilations-nearer-neurons-than-constrictions` through `wt-controls-no-blue-green-difference`.

Key finding from structural reading (Pass C): the 2×SD responder threshold is an untested methodological choice that conditions all quantitative biology claims. Registered as `responder-threshold-2sd-untested` — the alternate 10% threshold in app1fig14 provides qualitative but not quantitative confirmation.
