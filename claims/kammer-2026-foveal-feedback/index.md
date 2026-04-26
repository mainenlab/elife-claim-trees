---
paper-slug: kammer-2026-foveal-feedback
title: "Feedback of peripheral saccade targets to early foveal cortex"
authors:
  - Lucca Kämmer
  - Klemens Kroell
  - Tomas Knapen
  - Martin Rolfs
  - Martin Hebart
journal: eLife
stage: published
doi: 10.7554/eLife.107053
url: https://elifesciences.org/articles/107053
github: https://github.com/Lucakaemmer/FovealFeedback
openneuro: https://doi.org/10.18112/openneuro.ds005933.v1.0.0
osf-preregistration: https://osf.io/rxacd/
added: 2026-03-30
badge: none-gap
claim-count: 22
---

## Abstract

Human vision is characterized by frequent eye movements and constant shifts in visual input, yet our perception of the world remains remarkably stable. Here, we directly demonstrate image-specific foveal feedback to primary visual cortex in the context of saccadic eye movements. To this end, we used a gaze-contingent fMRI paradigm, in which peripheral saccade targets disappeared before they could be fixated. Despite no direct foveal stimulation, we were able to decode peripheral saccade targets from foveal retinotopic areas, demonstrating that image-specific feedback during saccade preparation may underlie this effect. Decoding was sensitive to shape but not semantic category of natural images, indicating feedback of only low-to-mid-level information. Cross-decoding to a control condition with foveal stimulus presentation indicates a shared representational format between foveal feedback and direct stimulation. Moreover, eccentricity-dependent analyses showed a U-shaped decoding curve, confirming that these results are not explained by spillover of peripheral activity or large receptive fields. Finally, fluctuations in foveal decodability covaried with activity in the intraparietal sulcus, thus providing a candidate region for driving foveal feedback. These findings suggest that foveal cortex predicts the features of incoming stimuli through feedback from higher cortical areas, which offers a candidate mechanism underlying stable perception.

## Claims

| Slug | Panel | Role | Epistemic | Status |
|:-----|:------|:-----|:----------|:-------|
| [hypothesis-feedback-not-spillover](hypothesis-feedback-not-spillover.md) | hypothesis | hypothesis | hypothesis | N/A |
| [prediction-u-shape-eccentricity](prediction-u-shape-eccentricity.md) | hypothesis | prediction | prediction | N/A |
| [hypothesis-shared-representational-format](hypothesis-shared-representational-format.md) | hypothesis | hypothesis | hypothesis | N/A |
| [prediction-cross-decoding-generalizes](prediction-cross-decoding-generalizes.md) | hypothesis | prediction | prediction | N/A |
| [hypothesis-feedback-carries-shape-not-category](hypothesis-feedback-carries-shape-not-category.md) | hypothesis | hypothesis | hypothesis | N/A |
| [prediction-v1-category-drops-shape-preserved](prediction-v1-category-drops-shape-preserved.md) | hypothesis | prediction | prediction | N/A |
| [prediction-lo-inverse-pattern](prediction-lo-inverse-pattern.md) | hypothesis | prediction | prediction | N/A |
| [preregistered-design-validates-mvpa](preregistered-design-validates-mvpa.md) | methods | methodological | moderate | verified (preregistration inspection; epistemic downgraded — timing anomaly) |
| [preregistration-submitted-after-manuscript](preregistration-submitted-after-manuscript.md) | methods | scope | strong | verified (methods text) |
| [target-excluded-fovea-in-99pct-saccades](target-excluded-fovea-in-99pct-saccades.md) | fig1C | methodological | strong | unverified:compute-infeasible |
| [foveal-v1-decodes-peripheral-saccade-target](foveal-v1-decodes-peripheral-saccade-target.md) | fig2A | empirical | strong | unverified:compute-infeasible |
| [foveal-feedback-below-direct-stimulation](foveal-feedback-below-direct-stimulation.md) | fig2A | empirical | strong | unverified:compute-infeasible |
| [cross-decoding-experimental-to-control](cross-decoding-experimental-to-control.md) | fig2B | empirical | strong | unverified:compute-infeasible |
| [u-shaped-eccentricity-rejects-spillover](u-shaped-eccentricity-rejects-spillover.md) | fig2B | control | strong | unverified:compute-infeasible |
| [decoding-shape-sensitive-not-semantic](decoding-shape-sensitive-not-semantic.md) | fig3 | synthesis | moderate | unverified:compute-infeasible |
| [v1-category-decoding-drops-in-feedback](v1-category-decoding-drops-in-feedback.md) | fig3B | empirical | moderate | unverified:compute-infeasible |
| [lo-shows-reversed-specificity](lo-shows-reversed-specificity.md) | fig3B | empirical | strong | unverified:compute-infeasible |
| [v2-v3-generalize-shape-not-category](v2-v3-generalize-shape-not-category.md) | fig3-suppl1 | empirical | moderate | unverified:compute-infeasible |
| [ips-candidate-driver-foveal-feedback](ips-candidate-driver-foveal-feedback.md) | fig4B | synthesis | moderate | unverified:compute-infeasible (resolved from no-code) |
| [parametric-modulation-exploratory-not-preregistered](parametric-modulation-exploratory-not-preregistered.md) | methods | scope | strong | verified (methods text) |
| [fef-lo-nonsignificant-after-correction](fef-lo-nonsignificant-after-correction.md) | fig4B | control | moderate | unverified:compute-infeasible |
| [ips-foveal-effect-reverses-in-control](ips-foveal-effect-reverses-in-control.md) | fig4-suppl1 | control | strong | unverified:compute-infeasible |

## Reproduction status

| Status | Count | Claims |
|:-------|:------|:-------|
| verified | 3 | preregistered-design-validates-mvpa, preregistration-submitted-after-manuscript, parametric-modulation-exploratory-not-preregistered |
| unverified:compute-infeasible | 12 | fMRI + MVPA + parametric modulation claims — data and code accessible, compute-intensive |

## Key resolutions from full-text extraction

**IPS claim resolved:** `ips-candidate-driver-foveal-feedback` was previously `unverified:no-code`. Full JATS XML extraction confirms Fig4B reports a parametric modulation analysis in the Results section with statistics (t(27)=2.53, p=0.026). Status updated to `unverified:compute-infeasible`. The analysis is explicitly exploratory (not preregistered), modeled via a new `requires` relation to `parametric-modulation-exploratory-not-preregistered`.

**Preregistration timing anomaly:** The OSF preregistration was submitted after manuscript submission. Authors document timestamps to establish the text predates data collection. This limits confirmatory weight for all preregistration-based validity claims. `preregistered-design-validates-mvpa` epistemic downgraded to moderate.

**New claims (8 added):** U-shaped eccentricity spillover control (fig2B); V1 category drop (fig3B); LO reversed specificity (fig3B); V2/V3 generalization (fig3-suppl1); IPS control reversal (fig4-suppl1); FEF/LO non-significance (fig4B); parametric modulation exploratory status (methods); preregistration timing (methods).

**Reproduction path (documented 2026-03-30):** Standard Python neuroimaging stack (nilearn, sklearn, nibabel). OpenNeuro dataset accessible. GitHub code maps to figures. Parametric modulation requires FSL FEAT + MNI-space registration. Main bottleneck: OpenNeuro data download size (~61 GB) and compute time for MVPA + parametric modulation.

**Precise blocker documentation (2026-03-30):** OpenNeuro ds005933 contains only raw BIDS BOLD NIfTIs — no derivatives, no pre-computed betas or zstats. Required pipeline before any decoding can run: (1) fMRIPrep v20.2.0 (Docker) per subject (~4h GPU × 28 subjects); (2) FSL FEAT GLM per run (~1h × 10 runs × 28 subjects); (3) Python decoding scripts (sklearn SVC, nilearn masking). Estimated minimum: ~100 CPU-hours + GPU access. Eye-tracking data (for the 99.27% saccade exclusion check) are explicitly NOT on OpenNeuro — "available upon request" per README. Hard-coded path in foveal_decoding.py (/home/lkaemmer/repos/FovealDecoding/…/control_regressors.pkl) must be patched before parametric modulation can run. No shortcut exists: there are no pre-computed results files anywhere in the repo or OpenNeuro deposit.
