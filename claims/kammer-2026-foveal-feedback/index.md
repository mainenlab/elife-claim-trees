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
doi: 10.7554/eLife.107053
url: https://elifesciences.org/articles/107053
github: https://github.com/Lucakaemmer/FovealFeedback
openneuro: https://doi.org/10.18112/openneuro.ds005933.v1.0.0
osf-preregistration: https://osf.io/rxacd/
added: 2026-03-30
claim-count: 7
---

## Abstract

This paper uses a gaze-contingent fMRI paradigm where peripheral saccade targets disappear before fixation (success in 99.27% of saccades) to show that target identity is nonetheless decodable from foveal V1 BOLD signal. Decoding: 57.43% (t(27)=8.81, p<0.001) in feedback condition vs 84.06% (direct stimulation). Cross-decoding (feedback→direct) yields 57.2% (t(27)=5.22, p<0.001), indicating shared representational format. Feedback is shape-sensitive but not semantic-category sensitive. IPS proposed as candidate driver region. Preregistered design.

## Claims

| Slug | Panel | Epistemic | Status |
|:-----|:------|:----------|:-------|
| [preregistered-design-validates-mvpa](preregistered-design-validates-mvpa.md) | methods | strong | verified (preregistration inspection) |
| [target-excluded-fovea-in-99pct-saccades](target-excluded-fovea-in-99pct-saccades.md) | fig1C | strong | unverified:compute-infeasible |
| [foveal-v1-decodes-peripheral-saccade-target](foveal-v1-decodes-peripheral-saccade-target.md) | fig2A | strong | unverified:compute-infeasible |
| [foveal-feedback-below-direct-stimulation](foveal-feedback-below-direct-stimulation.md) | fig2A | strong | unverified:compute-infeasible |
| [cross-decoding-experimental-to-control](cross-decoding-experimental-to-control.md) | fig2B | strong | unverified:compute-infeasible |
| [decoding-shape-sensitive-not-semantic](decoding-shape-sensitive-not-semantic.md) | fig3 | moderate | unverified:compute-infeasible |
| [ips-candidate-driver-foveal-feedback](ips-candidate-driver-foveal-feedback.md) | fig4 | moderate | unverified:no-code |

## Reproduction status

| Status | Count | Claims |
|:-------|:------|:-------|
| verified | 1 | preregistered-design-validates-mvpa (assessment) |
| unverified:compute-infeasible | 5 | fMRI + MVPA claims — OpenNeuro data accessible, standard Python pipeline, compute-intensive |
| unverified:no-code | 1 | ips-candidate-driver (unclear if functional connectivity analysis or just discussion) |

**Reproduction path:** Standard Python neuroimaging stack (nilearn, sklearn, nibabel). OpenNeuro dataset accessible. GitHub code maps to figures. Preregistered analysis plan is unambiguous. Main bottleneck: OpenNeuro data download size and MVPA compute time.
