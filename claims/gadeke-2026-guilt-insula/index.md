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
claim-count: 18
---

## Abstract

This paper investigates neural mechanisms of interpersonal guilt by having participants make risky monetary decisions affecting themselves and a partner across three conditions: Solo (outcomes affect only self), Social (participant chooses for both), and Partner (partner chooses for both). Guilt is operationalized as responsibility-contingent unhappiness after negative partner outcomes — happiness decreases more after partner losses when the participant made the choice. The anterior insula tracks this guilt effect, with connectivity to inferior frontal gyrus varying by condition. The STS tracks partner reward prediction errors specifically when the participant is responsible.

**Key methodological note:** The "partner" was in fact an expected-value-maximizing algorithm; participants were not informed (see `partner-algorithm-deception-assumption.md`).

## Claims

| Slug | Panel | Epistemic | Confidence | Summary |
|:-----|:------|:----------|:-----------|:--------|
| [lottery-choice-increases-with-ev](lottery-choice-increases-with-ev.md) | fig2a,d | strong | high | EV drives lottery choice in both studies (manipulation check) |
| [solo-vs-social-choice-difference](solo-vs-social-choice-difference.md) | fig2a | moderate | high | Social context reduces lottery choice vs Solo in Study 1 only; null in Study 2 |
| [risk-premiums-null-social-solo](risk-premiums-null-social-solo.md) | fig2b,e | strong | high | Risk premiums do not differ between Solo and Social conditions in either study |
| [happiness-correlates-partner-reward](happiness-correlates-partner-reward.md) | fig3a,b,e,f | strong | high | Happiness correlates with both own reward (R²≈0.16–0.20) and partner reward (R²≈0.05–0.06) |
| [responsibility-modulates-guilt-computational](responsibility-modulates-guilt-computational.md) | fig3, table1 | moderate | high | Responsibility model with partner RPE regressors outperforms all other models |
| [social-prpe-weight-positive](social-prpe-weight-positive.md) | fig3c,g | strong | high | social_pRPE weight significantly > 0 in both models and both studies |
| [guilt-reduces-happiness-after-partner-loss](guilt-reduces-happiness-after-partner-loss.md) | fig3d,h | strong | high | Happiness decreases more after negative partner outcomes in Social vs Partner condition |
| [guilt-effect-independent-of-own-outcome](guilt-effect-independent-of-own-outcome.md) | fig3d,h | strong | high | Guilt effect present regardless of whether participant won or lost own outcome |
| [agency-reduces-happiness](agency-reduces-happiness.md) | fig3 (text) | strong | high | Being the decision-maker reduces happiness independently of outcome |
| [ventral-striatum-tracks-risky-choices](ventral-striatum-tracks-risky-choices.md) | fig4a | strong | high | Bilateral ventral striatum active for risky > safe choices (replication) |
| [precuneus-tpj-mpfc-social-decisions](precuneus-tpj-mpfc-social-decisions.md) | fig4b | strong | high | Precuneus, left TPJ, mPFC more active Social > Solo at decision time |
| [insula-tracks-guilt-effect](insula-tracks-guilt-effect.md) | fig4e,f | strong | high | Anterior insula elevated in Social vs Partner after negative partner outcomes |
| [ventral-striatum-tracks-computational-reward](ventral-striatum-tracks-computational-reward.md) | fig4g | strong | high | Ventral striatum tracks model-based reward regressors (manipulation check for GLM2) |
| [sts-tracks-partner-reward-prediction-errors](sts-tracks-partner-reward-prediction-errors.md) | fig4h | moderate | high | Left STS tracks partner RPE specifically when participant is responsible |
| [insula-ifg-connectivity-guilt](insula-ifg-connectivity-guilt.md) | fig5 | moderate | high | Right IFG–left insula gPPI connectivity varies by condition × choice |
| [insula-guilt-replicates-yu-koban-signature](insula-guilt-replicates-yu-koban-signature.md) | fig4 supp | moderate | contested | Insula guilt activation pattern consistent with published neural guilt signature (group level) |
| [guilt-signature-no-individual-difference](guilt-signature-no-individual-difference.md) | fig4 supp | moderate | high | Guilt signature dot products do not correlate with individual behavioral guilt effect |
| [partner-algorithm-deception-assumption](partner-algorithm-deception-assumption.md) | ~ | weak | single-source | Partner decisions made by EV-maximizing algorithm, not real person (structural assessment) |

## Extraction notes

**Method:** Triplicate extraction — Pass A (Results prose), Pass B (figure captions panel-by-panel), Pass C (Methods + code structure). Reconciled by confidence: high = all three agree; contested = two agree; single-source = one source only.

**Key additions over initial extraction (8 → 18 claims):**

1. Null risk-premium result qualifies the Solo > Social choice finding
2. Happiness-partner-reward correlation establishes prerequisite for guilt operationalization
3. social_pRPE weight positive — parameter-level claim distinguishable from model comparison
4. Guilt-effect-independent-of-own-outcome — specificity claim ruling out regret/shared-loss confounds
5. Agency-reduces-happiness — main effect of being decision-maker, no dedicated panel
6. Ventral striatum risky-choice replication — fMRI manipulation check
7. Precuneus/TPJ/mPFC social decision replication
8. Ventral striatum computational reward — GLM2 manipulation check for STS analysis
9. Guilt signature null individual-difference — negative finding qualifying group-level match
10. Partner algorithm deception — structural assessment claim that all social claims require

## Reproduction status

2026-03-30, agent: mainen-z. GitHub repo has behavioral data (.mat), pre-computed fMRI NIfTI results, and all analysis scripts (MATLAB/SPM12). Behavioral claims reproducible directly from repo data. fMRI claims reproducible from pre-computed NIfTI files without re-running GLMs.

| Status | Count | Claims |
|:-------|:------|:-------|
| unverified | 9 | Behavioral claims — data available, MATLAB required |
| unverified:compute-infeasible | 3 | fMRI claims — pre-computed NIfTI in repo; can reproduce figures without full re-analysis |
| verified | 1 | partner-algorithm-deception-assumption — confirmed by code inspection of Methods |
| unverified | 5 | Computational model, connectivity, and signature comparison claims |

**Key risk:** MATLAB + SPM12 dependency throughout. No Python alternative for primary analyses. Pre-computed group-level NIfTI results in `fMRIresults/` enable figure reproduction without rerunning GLMs.
