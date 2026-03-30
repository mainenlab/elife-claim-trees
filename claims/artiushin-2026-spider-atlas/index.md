---
paper-slug: artiushin-2026-spider-atlas
title: "A three-dimensional immunofluorescence atlas of the brain of the hackled-orb weaver spider, Uloborus diversus"
authors:
  - Artiushin G
  - Corver A
  - Gordus A
journal: eLife
doi: 10.7554/eLife.107732
url: https://elifesciences.org/articles/107732
github: https://github.com/GordusLab/Artiushin-elastix-eLife
bil: https://doi.org/10.35077/ace-owl-gum
added: 2026-03-30
claim-count: 6
---

## Abstract

Three-dimensional immunofluorescence atlas of the Uloborus diversus synganglion (central nervous system), mapping classical neurotransmitters (GABA, ACh, serotonin, octopamine/tyramine) and neuropeptides across identified neuropils. Key anatomical findings: a novel tonsillar neuropil, a candidate protocerebral bridge (potential insect central complex homolog), and arcuate body layer discrimination through co-staining. All claims are observational anatomical descriptions — the evidence is the 3D atlas itself. Large 3D confocal TIFF volumes deposited at Brain Image Library (BIL). Registration pipeline on GitHub (elastix).

## Claims

| Slug | Panel | Epistemic | Status |
|:-----|:------|:----------|:-------|
| [atlas-observational-scope](atlas-observational-scope.md) | all (assessment) | strong | verified (code inspection) |
| [uloborus-synganglion-neurotransmitter-atlas](uloborus-synganglion-neurotransmitter-atlas.md) | figs 1-13 | strong | unverified:no-data |
| [leg-neuropils-consistent-innervation](leg-neuropils-consistent-innervation.md) | fig2 | moderate | unverified:no-data |
| [arcuate-body-layers-neurotransmitter-distinguished](arcuate-body-layers-neurotransmitter-distinguished.md) | fig (arcuate body) | moderate | unverified:no-data |
| [tonsillar-neuropil-novel-structure](tonsillar-neuropil-novel-structure.md) | fig (tonsillar) | moderate | unverified:no-data |
| [protocerebral-bridge-candidate-central-complex](protocerebral-bridge-candidate-central-complex.md) | fig (central complex) | weak | unverified:no-data |

## Reproduction status

| Status | Count | Claims |
|:-------|:------|:-------|
| verified | 1 | atlas-observational-scope (assessment) |
| unverified:no-data | 5 | All anatomical claims — BIL TIFF stacks are large; atlas viewer at BIL allows interactive inspection without full download |

**Key blocker:** BIL TIFF stacks are likely tens of GB. The atlas viewer linked via BIL may allow interactive inspection without full download. elastix registration pipeline requires careful parameter tuning. Claims are observational — "reproduction" means inspecting the atlas, not re-computing statistics.

**Methodology note (Issue 004):** This paper introduces a new claim type challenge — observational anatomical claims for which "verification" means atlas inspection, not analysis re-execution. See docs/issues.md Issue 004.
