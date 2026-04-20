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
claim-count: 23
---

## Abstract

Functional hyperemia is a well-established hallmark of healthy brain function, whereby local brain blood flow adjusts in response to a change in the activity of the surrounding neurons. Although functional hyperemia has been extensively studied at the level of both tissue and individual vessels, vascular network-level coordination remains largely unknown. To bridge this gap, we developed a deep learning-based pipeline that uses two-photon fluorescence microscopy images of cerebral microcirculation to enable automated reconstruction and quantification of the geometric changes across the microvascular network, comprising hundreds of interconnected blood vessels, pre and post-activation of the neighboring neurons. The pipeline's utility was demonstrated in the Thy1-ChR2 optogenetic mouse model, where we observed network-wide vessel radius changes to depend on the photostimulation intensity, with both dilations and constrictions occurring across the cortical depth, at an average of 16.1±14.3 μm (mean ± SD) away from the most proximal neuron for dilations; and at 21.9±14.6 μm away for constrictions. We observed a significant heterogeneity of the vascular radius changes within vessels, with radius adjustment varying by an average of 24 ± 28% of the resting diameter, likely reflecting the heterogeneity of the distribution of contractile cells on the vessel walls. A graph theory-based network analysis revealed that the assortativity of adjacent blood vessel responses rose by 152 ± 65% at 4.3 mW/mm² of blue photostimulation vs. the control, with a 4% median increase in the efficiency of the capillary networks during this level of blue photostimulation in relation to the baseline. Interrogating individual vessels is thus not sufficient to predict how the blood flow is modulated in the network. Our pipeline, enables tracking of the microvascular network geometry over time, relating caliber adjustments to vessel wall-associated cells' state, and mapping network-level flow distribution impairments in experimental models of disease.

## Hypotheses (top-level engineering and biological bets)

| Slug | Role | Epistemic | Summary |
|:-----|:-----|:----------|:--------|
| [hypothesis-dl-pipeline-enables-network-nvc](hypothesis-dl-pipeline-enables-network-nvc.md) | hypothesis | hypothesis | DL segmentation + registration + radius estimation + graph analysis can yield network-level NVC measurements that conventional baselines cannot |
| [hypothesis-network-level-nvc-coordination](hypothesis-network-level-nvc-coordination.md) | hypothesis | hypothesis | Optogenetic neuronal activation drives coordinated, graph-level vascular responses invisible to point-caliber measurement |

## Predictions (derived from hypotheses)

| Slug | Derived from | Epistemic | Summary |
|:-----|:-------------|:----------|:--------|
| [prediction-pipeline-outperforms-baselines](prediction-pipeline-outperforms-baselines.md) | dl-pipeline | prediction | DL ensemble should beat ilastik on segmentation; registration should ~double vessel counts; radius estimator should match simulated ground truth |
| [prediction-pipeline-reveals-network-coordination](prediction-pipeline-reveals-network-coordination.md) | dl-pipeline; network-coordination | prediction | Under ChR2 stimulation: spatial dilation/constriction gradient, assortativity rise, efficiency change; absent under green or WT controls |

## Synthesis

| Slug | Role | Epistemic | Summary |
|:-----|:-----|:----------|:--------|
| [synthesis-individual-vessel-measurements-insufficient](synthesis-individual-vessel-measurements-insufficient.md) | synthesis | moderate | Point-caliber and single-vessel measurements systematically miss the coordinated, graph-level structure of functional hyperemia |

## Pipeline benchmark claims (segmentation performance)

| Slug | Panel | Role | Epistemic | Summary |
|:-----|:------|:-----|:----------|:--------|
| [unetr-outperforms-ilastik-hd95](unetr-outperforms-ilastik-hd95.md) | fig3 | control | moderate | UNETR beats ilastik on HD95 (p<0.05); ilastik high recall (0.89) but low precision (0.37) |
| [novas3d-outperforms-ilastik](novas3d-outperforms-ilastik.md) | fig3, fig4 | control | moderate | NOVAS3D (UNet/UNETR) beats ilastik on Dice/precision/recall (summary claim) |
| [registration-doubles-vessel-count](registration-doubles-vessel-count.md) | — | methodological | moderate | Registration + mask union increases vessel count 241→412 per FOV; MSE 1306→0.008 SU |
| [radius-estimation-r2-0p68](radius-estimation-r2-0p68.md) | fig5 | methodological | moderate | R²=0.68 for simulated radius recovery; stable to noise up to SD=200 SU |

## Neurovascular biology claims (applying the pipeline)

| Slug | Panel | Role | Epistemic | Summary |
|:-----|:------|:-----|:----------|:--------|
| [vessel-radius-heterogeneity-stimulation](vessel-radius-heterogeneity-stimulation.md) | fig6 | empirical | moderate | 24 ± 28% baseline within-vessel radius variation; dilations 16.1 µm, constrictions 21.9 µm from neurons |
| [baseline-intra-vessel-radius-varies-24pct](baseline-intra-vessel-radius-varies-24pct.md) | fig7 | empirical | moderate | Capillary radius varies 24±28% along vessel length at baseline; point measurements insufficient |
| [dilations-nearer-neurons-than-constrictions](dilations-nearer-neurons-than-constrictions.md) | fig8D | empirical | moderate | Dilations 16.1±14.3 µm vs constrictions 21.9±14.6 µm from labeled neurons at 4.3 mW/mm² (p<1e-4) |
| [constrictions-deeper-than-dilations](constrictions-deeper-than-dilations.md) | fig8E | empirical | moderate | Constrictions 37±179 µm deeper than dilations at 4.3 mW/mm² (p<1e-4); dilators tend toward surface |
| [blue-light-dilations-exceed-green-control](blue-light-dilations-exceed-green-control.md) | fig8A | control | moderate | 458 nm dilations (0.90 µm) larger than 552 nm control (0.58 µm; p<1e-4); responses are ChR2-mediated |
| [artery-dilates-venule-unchanged-at-low-power](artery-dilates-venule-unchanged-at-low-power.md) | fig7A | empirical | weak | Sample artery dilates 1.33±0.86 µm, capillary 0.42±0.39 µm, venule unchanged at 1.1 mW/mm² |
| [network-assortativity-increases-stimulation](network-assortativity-increases-stimulation.md) | fig9B | empirical | moderate | Assortativity increases 152 ± 65% at 4.3 mW/mm²; capillaries mirror neighbors' responses |
| [capillary-efficiency-increases-4pct](capillary-efficiency-increases-4pct.md) | fig9C | empirical | moderate | Median 4% efficiency increase (IQR: –8–38%) at 4.3 mW/mm² (p=0.03 vs control) |
| [wt-controls-no-blue-green-difference](wt-controls-no-blue-green-difference.md) | app1fig9 | control | moderate | WT C57BL/6J (n=4) show no blue-vs-green radius difference; confirms ChR2 specificity |
| [novas3d-generalizes-qualitatively-ood](novas3d-generalizes-qualitatively-ood.md) | app1fig12, app1fig13 | empirical | weak | Qualitative generalization to C57BL/6, Fischer rat, light-sheet — no quantitative metrics |

## Assessment claims (scope, assumptions, methodology)

| Slug | Panel | Role | Epistemic | Summary |
|:-----|:------|:-----|:----------|:--------|
| [scope-pipeline-and-application-paper](scope-pipeline-and-application-paper.md) | ~ | scope | weak | Pipeline-and-application envelope: DL stack on Thy1-ChR2-EYFP cranial-window 2PFM; n=17 mice for biology, n=4 WT for control; OOD qualitative only |
| [novas3d-single-preparation-scope](novas3d-single-preparation-scope.md) | methods | scope | strong | Training and quantitative evaluation exclusively on Thy1-ChR2-YFP mice; no OOD metrics |
| [dl-model-scope-single-pipeline](dl-model-scope-single-pipeline.md) | fig1 | scope | moderate | Pipeline trained on one mouse model; GPU required; generalization not demonstrated quantitatively |
| [responder-threshold-2sd-untested](responder-threshold-2sd-untested.md) | app1fig14 | scope | weak | Responder threshold (2×SD) not formally sensitivity-tested; 10% alternate threshold shown qualitatively |

## Role distribution

| Role | Count |
|:-----|------:|
| hypothesis | 2 |
| prediction | 2 |
| synthesis | 1 |
| empirical | 8 |
| methodological | 2 |
| control | 4 |
| scope | 4 |
| **total** | **23** |

## Edge inventory (enriched schema)

| Edge type | Count | Notes |
|:----------|------:|:------|
| entails (hypothesis → prediction / synthesis) | 4 | Engineering hypothesis entails the baseline-comparison prediction; biological hypothesis entails the network-coordination prediction; the network-coordination prediction is co-derived from both hypotheses; biological hypothesis also entails the synthesis |
| derived-from (prediction / synthesis → hypothesis) | 4 | Inverse of entails; `prediction-pipeline-reveals-network-coordination` derives from both hypotheses |
| tests (empirical / methodological / control → prediction) | 13 | Benchmark prediction tested by 4 pipeline-claims; network-coordination prediction tested by 6 biology-claims and 3 control-claims |
| confirms (empirical / control → hypothesis / synthesis) | 17 | Engineering hypothesis confirmed by pipeline benchmarks (5); biological hypothesis confirmed by biology claims (8); synthesis confirmed by within-vessel + spatial + network results (4) |
| dissociates-with | 5 | Paired contrasts: UNETR-only vs full ensemble; spatial-gradient vs depth-gradient; vessel-type heterogeneity (single example) vs population-level heterogeneity |
| validates (control → empirical) | 8 | WT-control validates the three biological responses; blue-vs-green control validates five biology claims; radius-estimation validates three radius-derived claims |
| rules-out | 1 | Within-vessel heterogeneity rules out point-caliber sufficiency (originally encoded as `contradicts` to `novas3d-outperforms-ilastik` — the within-vessel finding is independent of segmentation accuracy and undercuts the assumption that better segmentation alone solves the network-level problem) |
| enables-method | 9 | NOVAS3D segmentation enables four downstream biological measurements; registration enables two network-metric claims; radius estimation enables three radius-derived claims |
| scopes (scope → empirical / methodological / control) | 41 | Four scope claims govern the bulk of the empirical and methodological work — `scope-pipeline-and-application-paper` (14), `novas3d-single-preparation-scope` (13), `dl-model-scope-single-pipeline` (9), `responder-threshold-2sd-untested` (6) |

## Dependency structure summary

```
hypothesis-dl-pipeline-enables-network-nvc
  ├─ entails → prediction-pipeline-outperforms-baselines
  │    └─ tested by: unetr-outperforms-ilastik-hd95, novas3d-outperforms-ilastik,
  │       registration-doubles-vessel-count, radius-estimation-r2-0p68
  └─ entails → prediction-pipeline-reveals-network-coordination

hypothesis-network-level-nvc-coordination
  ├─ entails → prediction-pipeline-reveals-network-coordination
  │    └─ tested by: dilations-nearer-neurons-than-constrictions,
  │       constrictions-deeper-than-dilations, network-assortativity-increases-stimulation,
  │       capillary-efficiency-increases-4pct, vessel-radius-heterogeneity-stimulation
  │       (validated by: blue-light-dilations-exceed-green-control,
  │        wt-controls-no-blue-green-difference)
  └─ entails → synthesis-individual-vessel-measurements-insufficient
       └─ confirmed by: baseline-intra-vessel-radius-varies-24pct,
          dilations-nearer-neurons-than-constrictions,
          network-assortativity-increases-stimulation,
          capillary-efficiency-increases-4pct

scope-pipeline-and-application-paper (and three narrower scope claims)
  └─ scopes → all 14 result/benchmark claims
```

## Reproduction status

| Status | Count | Claims |
|:-------|:------|:-------|
| verified | 3 | dl-model-scope-single-pipeline, novas3d-single-preparation-scope (assessment, code/methods inspection); scope-pipeline-and-application-paper (assessment) |
| unverified | 15 | All result, benchmark, and OOD claims — FRDR data accessible, GPU required, not yet executed |
| N/A (hypotheses + predictions + synthesis) | 5 | Not the kind of claim that admits direct reproduction |

**Key risk:** GPU required for inference; large volumetric FRDR data; Tutorial.ipynb provides end-to-end reproduction path. Segmentation model pre-trained — no retraining needed for reproduction. Quantitative values for assortativity (152 ± 65%) appear in Results prose but not in a main figure caption — verify against Figure 9 and supplementary tables.

## Extraction notes (triplicate, 2026-03-30)

Pass A (Results), Pass B (Captions), Pass C (Methods) completed. High-confidence claims appear in 2–3 passes. Single-source claims flagged individually.

Two distinct contribution streams isolated as required:
1. **Pipeline benchmark** — segmentation performance vs ilastik, registration improvement, radius validation. Claims `unetr-outperforms-ilastik-hd95`, `registration-doubles-vessel-count`, `radius-estimation-r2-0p68`.
2. **Neurovascular biology** — spatial gradient (dilation/constriction distance to neurons), depth segregation, stimulus specificity, network coordination. Claims `dilations-nearer-neurons-than-constrictions` through `wt-controls-no-blue-green-difference`.

Key finding from structural reading (Pass C): the 2×SD responder threshold is an untested methodological choice that conditions all quantitative biology claims. Registered as `responder-threshold-2sd-untested` — the alternate 10% threshold in app1fig14 provides qualitative but not quantitative confirmation.

## Migration to enriched schema (2026-04-20)

Added two top-level hypotheses (`dl-pipeline-enables-network-nvc`, `network-level-nvc-coordination`), two derived predictions, one synthesis claim (`individual-vessel-measurements-insufficient`), and one paradigm-scope claim (`scope-pipeline-and-application-paper`). Annotated all 17 prior claims with `role:` and at least one new-schema edge. The enrichment makes explicit the central feature of this paper's argument structure as a method-paper-with-application: two distinct hypotheses (engineering — can the DL pipeline yield network-level measurements; biological — does optogenetic activation drive coordinated network responses) generate two distinct prediction chains. The benchmark claims (`unetr-outperforms-ilastik-hd95`, `novas3d-outperforms-ilastik`) are now classified as `control` because their epistemic function is to validate the pipeline against a baseline, not to surface a new measurement; `registration-doubles-vessel-count` and `radius-estimation-r2-0p68` are `methodological` because they characterise the pipeline's components; `blue-light-dilations-exceed-green-control` and `wt-controls-no-blue-green-difference` are `control` because they validate the biological observations against photothermal and genotype confounds. The `validates` and `enables-method` edges make the chain of trust traceable from segmentation accuracy (UNETR vs ilastik) through radius validation (R²=0.68) and registration improvements (241→412 vessels) to the downstream biology claims. The within-vessel heterogeneity finding (`baseline-intra-vessel-radius-varies-24pct`) carries the rare `rules-out` edge because the paper argues it directly undercuts the assumption that better single-vessel segmentation alone could substitute for network-level analysis.
