---
paper-slug: gadeke-2026-guilt-insula
title: "Contributions of insula and superior temporal sulcus to interpersonal guilt and responsibility in social decisions"
authors:
  - Maria Gädeke
  - Tom Willems
  - Omar Salah Ahmed
  - Bernd Weber
  - René Hurlemann
  - Johannes Schultz
journal: eLife
doi: 10.7554/eLife.105391
url: https://elifesciences.org/articles/105391
github: https://github.com/BonnSocialNeuroscienceUnit/ResponsibilityExperiment
openneuro: https://openneuro.org/datasets/ds005588
added: 2026-03-30
claim-count: 8
---

## Abstract

This paper investigates neural mechanisms of interpersonal guilt by having participants make risky monetary decisions affecting themselves and a partner across three conditions: Solo (outcomes affect only self), Social (participant chooses for both), and Partner (partner chooses for both). Guilt is operationalized as responsibility-contingent unhappiness after negative partner outcomes — happiness decreases more after partner losses when the participant made the choice. The anterior insula tracks this guilt effect, with connectivity to inferior frontal gyrus varying by condition. The STS tracks partner reward prediction errors specifically when the participant is responsible.

## Claims

| Slug | Panel | Epistemic | Summary |
|:-----|:------|:----------|:--------|
| [guilt-reduces-happiness-after-partner-loss](guilt-reduces-happiness-after-partner-loss.md) | fig2 | strong | Happiness decreases more after negative partner outcomes in Social vs Partner condition |
| [lottery-choice-increases-with-ev](lottery-choice-increases-with-ev.md) | fig2 | strong | EV drives lottery choice in both studies (manipulation check) |
| [solo-vs-social-choice-difference](solo-vs-social-choice-difference.md) | fig2 | moderate | Social context reduces risk-taking vs Solo condition (β=0.164) |
| [responsibility-modulates-guilt-computational](responsibility-modulates-guilt-computational.md) | fig3 | moderate | Computational model with responsibility parameter better explains behavioral guilt effect |
| [insula-tracks-guilt-effect](insula-tracks-guilt-effect.md) | fig4 | strong | Anterior insula elevated in Social vs Partner after negative partner outcomes |
| [insula-ifg-connectivity-guilt](insula-ifg-connectivity-guilt.md) | fig4, fig5 | moderate | Insula–IFG gPPI connectivity varies by condition |
| [sts-tracks-partner-reward-prediction-errors](sts-tracks-partner-reward-prediction-errors.md) | fig5 | moderate | STS tracks partner RPE specifically when participant is responsible |
| [insula-guilt-replicates-yu-koban-signature](insula-guilt-replicates-yu-koban-signature.md) | fig4 supp | moderate | Insula guilt effect consistent with published guilt neural signature |

## Reproduction status

2026-03-30, agent: mainen-z. GitHub repo has behavioral data (.mat), pre-computed fMRI NIfTI results, and all analysis scripts (MATLAB/SPM12). Behavioral claims reproducible directly from repo data. fMRI claims reproducible from pre-computed NIfTI files without re-running GLMs.

| Status | Count | Claims |
|:-------|:------|:-------|
| unverified | 3 | Behavioral claims — data available, MATLAB required |
| unverified:compute-infeasible | 3 | fMRI claims — pre-computed NIfTI in repo; can reproduce figures without full re-analysis |
| unverified | 2 | Computational model and guilt signature comparison |

**Key risk:** MATLAB + SPM12 dependency throughout. No Python alternative for the primary analyses. Pre-computed group-level NIfTI results in `fMRIresults/` enable figure reproduction without rerunning GLMs.
