---
paper-slug: bouyeure-2026-fear-rsa
title: "Distinct representational properties of cues and contexts shape fear and reversal learning"
authors:
  - Antoine Bouyeure
  - Diana Pacheco-Estefan
  - Gabriel Jacob
  - Manuela Kobelt
  - Marie-Christin Fellner
  - Jonas Rose
  - Nikolai Axmacher
journal: eLife
doi: 10.7554/eLife.105126
url: https://elifesciences.org/articles/105126
github: https://github.com/AntoineBouyeure/Representational-properties-of-cues-and-contexts-shape-fear-learning-and-reversal
neurovault: https://identifiers.org/neurovault.collection:23032
osf: https://doi.org/10.17605/OSF.IO/NGWKA
added: 2026-03-30
badge: silver
claim-count: 19
---

## Abstract

This fMRI study uses representational similarity analysis (RSA) to track neural representations of threatening cues and contexts across fear acquisition, reversal, and test phases. Key findings: fear acquisition produces generalized neural patterns for CS+ (threatening cues) in the fear network but no item-stability differences. Reversal learning produces two simultaneous strategies: (1) generalized patterns for newly dangerous CS-+ cues in fear network regions, and (2) item-specific representations in precuneus and IFG for cues that changed threat value. Context representations become more distinct during reversal in PFC, and PFC context-specificity predicts subsequent reinstatement of fear memory traces. Design: "Nina the Unlucky Backpacker" narrative paradigm with trace conditioning (CS-US gap), 4 cue types × 3 contexts, n=24.

## Claims

| Slug | Panel | Type | Epistemic | Summary |
|:-----|:------|:-----|:----------|:--------|
| [behavioral-learning-confirms-contingencies](behavioral-learning-confirms-contingencies.md) | fig2A | empirical | strong | US expectancy follows CS++ > CS+- > CS-+ > CS-- across all phases (LME F=479.35, p<0.0001) |
| [cs-plus-univariate-fear-network-acquisition](cs-plus-univariate-fear-network-acquisition.md) | fig2Bi | empirical | strong | CS+ > CS- BOLD activation in dACC, SFG, caudate, MTG during acquisition |
| [current-threat-activates-fear-network-reversal](current-threat-activates-fear-network-reversal.md) | fig2Bii | empirical | moderate | Currently threatening cues (CS++, CS-+) activate fear network during reversal |
| [prior-threat-activates-fear-network-weakly](prior-threat-activates-fear-network-weakly.md) | fig2Biii | interpretive | weak | Prior-threat-only contrast activates fear network during reversal, possibly reflecting lingering memory trace |
| [no-bold-differences-test-phases](no-bold-differences-test-phases.md) | fig2B (test) | empirical | moderate | No BOLD differences between CS types during test phases despite behavioral differences |
| [cue-generalization-increases-acquisition](cue-generalization-increases-acquisition.md) | fig3A | empirical | moderate | CS+ > CS- cue generalization in fear network (dACC, SFG, caudate, insula) during acquisition |
| [no-item-stability-difference-acquisition](no-item-stability-difference-acquisition.md) | fig3A | empirical | moderate | No item stability differences between CS+ and CS- during acquisition (null result) |
| [generalized-pattern-cs-minus-plus-reversal](generalized-pattern-cs-minus-plus-reversal.md) | fig3Bii | empirical | moderate | Newly dangerous CS-+ acquires generalized representation like CS++ during reversal in fear network |
| [cue-generalization-limited-dacc-reversal-consistent](cue-generalization-limited-dacc-reversal-consistent.md) | fig3Bi | empirical | moderate | CS++ > CS-- cue generalization limited to dACC only during reversal (narrowing from acquisition) |
| [item-stability-precuneus-pfc-reversal](item-stability-precuneus-pfc-reversal.md) | fig3Biii | empirical | moderate | Item-specific representations in precuneus and IFG for changing-contingency cues during reversal |
| [item-stability-persists-test-phases](item-stability-persists-test-phases.md) | fig3C, fig3D | empirical | moderate | Item stability persists into test phases: CS+- > CS++ in MTG (test_new); CS++ > CS-- in InfTemp (test_old) |
| [ifg-reinstates-reversal-traces-item-specific](ifg-reinstates-reversal-traces-item-specific.md) | fig4Bi | empirical | moderate | IFG item reinstatement higher for reversal traces than acquisition traces during test_old (F=5.50, p<0.01) |
| [dmpfc-reinstates-acquisition-traces-generalized](dmpfc-reinstates-acquisition-traces-generalized.md) | fig4Bii | empirical | moderate | dmPFC generalized reinstatement higher for acquisition traces than test_new traces during test_old (F=4.01, p<0.05) |
| [context-specificity-increases-reversal](context-specificity-increases-reversal.md) | fig5B | empirical | moderate | Context representations become more distinct in dmPFC and lateral PFC during reversal vs acquisition |
| [pfc-context-specificity-predicts-renewal](pfc-context-specificity-predicts-renewal.md) | fig5D | empirical | moderate | PFC context specificity during reversal predicts reinstatement of fear memory traces at test |
| [context-specificity-predicts-acquisition-reinstatement-regional-dissociation](context-specificity-predicts-acquisition-reinstatement-regional-dissociation.md) | fig5Di | empirical | moderate | Context specificity predicts generalized acquisition reinstatement oppositely in ACC/SFG vs precuneus |
| [context-specificity-predicts-reversal-reinstatement-dmpfc](context-specificity-predicts-reversal-reinstatement-dmpfc.md) | fig5Dii | empirical | moderate | Context specificity predicts item reinstatement of CS-+ reversal traces in dmPFC during test_old |
| [context-specificity-predicts-reinstatement-new-context-mtg](context-specificity-predicts-reinstatement-new-context-mtg.md) | fig5Diii | empirical | weak | Context specificity predicts item reinstatement in MTG during test_new (control analysis, t=2.51) |
| [dual-strategy-reversal-generalize-plus-specify](dual-strategy-reversal-generalize-plus-specify.md) | synthesis | interpretive | moderate | Reversal simultaneously uses generalization (for CS-+) and item-specificity (for changing cues) |

## Assessment claims (structural/methodological)

| Slug | Panel | Epistemic | Summary |
|:-----|:------|:----------|:--------|
| [trace-conditioning-hippocampus-engaged](trace-conditioning-hippocampus-engaged.md) | fig1 | weak | Design assumption: trace conditioning engages hippocampus (assumed from prior literature) |
| [rsa-roi-derived-from-searchlight](rsa-roi-derived-from-searchlight.md) | fig4A | moderate | ROI analyses use searchlight-derived ROIs on same dataset (circularity concern) |
| [lss-unreinforced-trials-only](lss-unreinforced-trials-only.md) | methods | moderate | RSA uses unreinforced trials only; asymmetric trial counts across CS types |

## Triplicate extraction summary

Extraction performed 2026-03-30, agent: mainen-z. Three passes over JATS XML:

**Pass A (Results)**: 17 candidate claims from results prose. Strong on interpretive direction and result framing. Captured the regional dissociation in fig5Di and the prior-threat ambiguity in fig2Biii.

**Pass B (Captions)**: 14 candidate claims from figure captions panel by panel. Confirmed panel assignments. Added specificity on n counts (fig4: n=255, 261) and the explicit null statement in fig3 caption ("No differences in item stability were found"). Correctly mapped generalized-pattern claim to fig3Bii (not fig4 as originally filed).

**Pass C (Methods)**: 2 assessment claims. Flagged unreinforced-trial-only selection asymmetry and ROI-from-searchlight circularity. Confirmed LSS approach with 5mm searchlight, Bonferroni-corrected alpha per phase. Phase-specific alpha thresholds: p<0.025 (acquisition, 2 comparisons), p<0.0125 (reversal, test_new, test_old, 4 comparisons each).

**Reconciliation**:
- `high` (all 3 agree): behavioral-learning, cs-plus-univariate, cue-generalization-acquisition, generalized-pattern-cs-minus-plus, item-stability-reversal, context-specificity-reversal, pfc-predicts-renewal, dual-strategy
- `contested`: cue-generalization-limited-dacc (Pass A didn't note the narrowing; Pass B/C confirmed from caption/methods); prior-threat-weakly (interpretation contested between "lingering memory" and "slow reversal learning")
- `single-source (Pass A)`: no-bold-test-phases (the rhetorical null result argument), ifg/dmpfc reinstatement dissociation framing
- `single-source (Pass B)`: item-stability-persists panels C/D; context-specificity regional dissociation panels Di/Dii/Diii detail
- `single-source (Pass C)`: both assessment claims

## Reproduction status

| Status | Count | Claims |
|:-------|:------|:-------|
| verified | 1 | current-threat-activates-fear-network-reversal (NeuroVault: 7473 sig voxels, dACC/SFG/caudate confirmed) |
| verified:partial | 4 | behavioral-learning-confirms-contingencies (hierarchy confirmed, F values differ from paper), cs-plus-univariate-fear-network-acquisition (dACC/SFG confirmed, MTG NOT found in corrected map), prior-threat-activates-fear-network-weakly (only 36 voxels, in occipital not fear network), cue-generalization-increases-acquisition (dACC/SFG/insula confirmed, s1r1 only) |
| unverified | 14 | All remaining RSA, reinstatement, and context-specificity claims |

**Key findings from 2026-03-30 verification run:**
- Behavioral hierarchy CS++ > CS+- > CS-+ > CS-- fully reproduced from OSF data. Exact F statistics differ: F(cs_type)=448 vs paper 479, F(phase)=210 vs paper 126 — suggests paper used a "cleaned" CSV not identically deposited.
- Acquisition univariate: dACC/SFG strongly confirmed (948 voxels, peak at MNI 8,15,39). MTG NOT found in the FWE-corrected NeuroVault map. Caudate borderline at y=5.
- Reversal current-valence: 7473 significant voxels, dACC/SFG and caudate confirmed — strongest map.
- Reversal previous-valence: only 36 significant voxels, peak in occipital cortex (-14,-90,-11), NOT in fear network. The "lingering fear network" claim is not supported by the deposited map.
- RSA acquisition (s1r1): dACC/SFG (286 voxels) and insula confirmed; caudate borderline.

**Key risks:** BrainIAK searchlight requires specific Python environment; R/Python multi-language stack; LSS beta series estimation computationally intensive. NeuroVault pre-computed maps allow figure reproduction without re-running GLMs or searchlights. ROI-from-searchlight circularity is a structural limitation that cannot be corrected post-hoc.

**Data provenance:** OSF NGWKA behaviordata_final.csv (12288 rows, n=24), participants.csv. NeuroVault collection 23032 (4 maps). GitHub repo R_scripts/ (master_stats_analysis.R, roi_lme_analysis.R). Note: the "behavioral_expectancy_clean.csv" used in the deposited R script is NOT on OSF — only the raw behaviordata_final.csv is available.
