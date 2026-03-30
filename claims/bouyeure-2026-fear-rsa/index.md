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
claim-count: 7
---

## Abstract

This fMRI study uses representational similarity analysis (RSA) to track neural representations of threatening cues and contexts across fear acquisition, reversal, and test phases. Key findings: fear acquisition produces generalized neural patterns for CS++ (stable threats) in the fear network. Reversal learning produces two simultaneous strategies: (1) generalized patterns for newly dangerous CS-+ cues in fear network regions, and (2) item-specific representations in precuneus and PFC for cues that changed threat value (CS+-). Context representations become more distinct during reversal, and PFC context-specificity predicts subsequent fear renewal. Design: "Nina the Unlucky Backpacker" narrative paradigm with trace conditioning (CS-US gap), 4 cue types × 3 contexts.

## Claims

| Slug | Panel | Epistemic | Summary |
|:-----|:------|:----------|:--------|
| [trace-conditioning-hippocampus-engaged](trace-conditioning-hippocampus-engaged.md) | fig1 | weak | Design assumption: trace conditioning engages hippocampus (assumed from prior literature) |
| [cue-generalization-increases-acquisition](cue-generalization-increases-acquisition.md) | fig2, fig3 | moderate | CS++ neural patterns generalize across items during acquisition in fear network |
| [generalized-pattern-cs-minus-plus-reversal](generalized-pattern-cs-minus-plus-reversal.md) | fig4 | moderate | Newly dangerous CS-+ acquires generalized representation like CS++ during reversal |
| [item-stability-precuneus-pfc-reversal](item-stability-precuneus-pfc-reversal.md) | fig4 | moderate | Item-specific representations emerge in precuneus and PFC for CS+- during reversal |
| [context-specificity-increases-reversal](context-specificity-increases-reversal.md) | fig5 | moderate | Context representations become more distinct in PFC during reversal |
| [pfc-context-specificity-predicts-renewal](pfc-context-specificity-predicts-renewal.md) | fig5 | moderate | PFC context-specificity during reversal predicts fear renewal at test |
| [dual-strategy-reversal-generalize-plus-specify](dual-strategy-reversal-generalize-plus-specify.md) | synthesis | moderate | Reversal simultaneously uses generalization (for CS-+) and item-specificity (for CS+-) |

## Reproduction status

2026-03-30, agent: mainen-z. Pipeline: Python (BrainIAK searchlight) + R (LME). Pre-computed group maps on NeuroVault; individual data on OSF. Multi-language stack increases setup complexity.

| Status | Count | Claims |
|:-------|:------|:-------|
| verified | 1 | trace-conditioning-hippocampus-engaged (assessment, confirmed by methods reading) |
| unverified | 5 | RSA + behavioral claims — data accessible, not yet executed |
| unverified:no-code | 1 | dual-strategy-reversal (interpretive synthesis) |

**Key risks:** BrainIAK searchlight requires specific Python environment; R/Python/MATLAB multi-language stack; LSS beta series estimation before RSA is computationally intensive. NeuroVault pre-computed maps allow figure reproduction without re-running GLMs or searchlights.
