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
claim-count: 5
---

## Abstract

This paper presents NOVAS3D, a deep learning pipeline for volumetric vessel segmentation and network-level neurovascular coupling analysis in two-photon fluorescence microscopy (2PFM). The pipeline uses UNet/UNETR architectures for vessel segmentation, followed by graph-theoretic analysis of vascular topology. Applied to optogenetically stimulated Thy1-ChR2-YFP mice (n=17, 6-12 months), the study shows network-wide vascular responses: assortativity increases 152 ± 65%, efficiency increases 4% at peak stimulation, with vessel radius heterogeneity of 24 ± 28% during stimulation.

## Claims

| Slug | Panel | Epistemic | Summary |
|:-----|:------|:----------|:--------|
| [dl-model-scope-single-pipeline](dl-model-scope-single-pipeline.md) | fig1 | moderate | Assessment: pipeline trained on one mouse model, GPU required |
| [novas3d-outperforms-ilastik](novas3d-outperforms-ilastik.md) | figs 2-4 | moderate | NOVAS3D beats ilastik on Dice/precision/recall |
| [vessel-radius-heterogeneity-stimulation](vessel-radius-heterogeneity-stimulation.md) | fig6 | moderate | 24 ± 28% vessel radius variation; dilations 16.1 µm, constrictions 21.9 µm |
| [capillary-efficiency-increases-4pct](capillary-efficiency-increases-4pct.md) | fig8, fig9 | moderate | 4% median efficiency increase during peak stimulation |
| [network-assortativity-increases-stimulation](network-assortativity-increases-stimulation.md) | fig7, fig8 | moderate | 152 ± 65% assortativity increase at 4.3 mW/mm² |

## Reproduction status

| Status | Count | Claims |
|:-------|:------|:-------|
| verified | 1 | dl-model-scope-single-pipeline (assessment, code inspection) |
| unverified | 4 | All result claims — FRDR data accessible, GPU required, not yet executed |

**Key risk:** GPU required for inference; large volumetric FRDR data; Tutorial.ipynb provides end-to-end reproduction path. Segmentation model pre-trained — no retraining needed for reproduction.
