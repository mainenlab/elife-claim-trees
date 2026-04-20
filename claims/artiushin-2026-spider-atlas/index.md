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
badge: none-structural
claim-count: 17
---

## Abstract

Spider orb-web building is a captivating, rare example of animal construction, whose neural underpinnings remain undiscovered. We created a three-dimensional atlas for the hackled-orb weaver, Uloborus diversus, based on immunostaining for the presynaptic component, synapsin, in whole-mounted spider synganglia. Whereas spider neuroanatomy has thus far been most comprehensively studied in cursorial species, this optically sectioned atlas contributes a continuous, finely resolved model of the central nervous system of an orb-web building spider. Aligned to this volume, we examined the expression patterns of neuronal populations representing many of the classical neurotransmitters and neuromodulators (GABA, acetylcholine, serotonin, and octopamine/tyramine), as well as a subset of neuropeptides (allatostatin A, crustacean cardioactive peptide (CCAP), FMRFamide, proctolin) -- detailing immunoreactivity in an unbiased fashion throughout the synganglion to reveal co-expression in known structures (such as the arcuate body), as well as novel neuropils not readily apparent in prior spider research, including the tonsillar neuropil as well as a potential protocerebral bridge. These structures provide targets for future functional studies, and taken together, could represent a spider equivalent of the central complex, contributing to behaviors such as web-building.

## Claims

### Assessment and scope

| Slug | Panel | Epistemic | Status |
|:-----|:------|:----------|:-------|
| [atlas-observational-scope](atlas-observational-scope.md) | all (assessment) | strong | verified (text reading) |
| [gad-antibody-peripheral-penetration-only](gad-antibody-peripheral-penetration-only.md) | all (assessment) | strong | verified (text reading) |

### Atlas overview

| Slug | Panel | Epistemic | Status |
|:-----|:------|:----------|:-------|
| [uloborus-synganglion-neurotransmitter-atlas](uloborus-synganglion-neurotransmitter-atlas.md) | figs 1-13 | strong | unverified:no-data |

### Subesophageal neuropils

| Slug | Panel | Epistemic | Status |
|:-----|:------|:----------|:-------|
| [leg-neuropils-consistent-innervation](leg-neuropils-consistent-innervation.md) | fig2 | moderate | unverified:no-data |
| [leg-neuropil-serotonin-bilateral-innervation](leg-neuropil-serotonin-bilateral-innervation.md) | fig2Bi | strong | unverified:no-data |
| [opisthosomal-neuropil-tdc2-perimeter-ladder](opisthosomal-neuropil-tdc2-perimeter-ladder.md) | fig3Bii, 3Cii | strong | unverified:no-data |
| [pedipalpal-neuropil-chat-tdc2-dominant](pedipalpal-neuropil-chat-tdc2-dominant.md) | fig4Bii, 4Biii | strong | unverified:no-data |
| [cheliceral-neuropil-serotonin-tdc2-dominant](cheliceral-neuropil-serotonin-tdc2-dominant.md) | fig4Eiv, 4Ev | strong | unverified:no-data |

### Supraesophageal neuropils

| Slug | Panel | Epistemic | Status |
|:-----|:------|:----------|:-------|
| [hagstone-neuropil-serotonin-defined](hagstone-neuropil-serotonin-defined.md) | fig6Bi, 6Ci, 6Di | strong | unverified:no-data |
| [mushroom-bodies-present-asta-exclusive](mushroom-bodies-present-asta-exclusive.md) | fig7A, 7B, 7E | strong | unverified:no-data |
| [globuli-cells-cholinergic-gabaergic](globuli-cells-cholinergic-gabaergic.md) | fig7H, 7I | moderate | unverified:no-data |
| [tonsillar-neuropil-novel-structure](tonsillar-neuropil-novel-structure.md) | fig9 | moderate | unverified:no-data |
| [tonsillar-neuropil-serotonin-core-tdc2-shell](tonsillar-neuropil-serotonin-core-tdc2-shell.md) | fig9Ci-x | strong | unverified:no-data |
| [protocerebral-bridge-candidate-central-complex](protocerebral-bridge-candidate-central-complex.md) | fig10 | weak | unverified:no-data |
| [protocerebral-bridge-layered-transmitter-architecture](protocerebral-bridge-layered-transmitter-architecture.md) | fig10Bi-x | strong | unverified:no-data |

### Arcuate body

| Slug | Panel | Epistemic | Status |
|:-----|:------|:----------|:-------|
| [arcuate-body-layers-neurotransmitter-distinguished](arcuate-body-layers-neurotransmitter-distinguished.md) | fig11, 12 | moderate | unverified:no-data |
| [arcuate-body-four-sublayer-differential](arcuate-body-four-sublayer-differential.md) | fig11C, 11D, 12 | strong | unverified:no-data |

## Reproduction status

| Status | Count | Claims |
|:-------|:------|:-------|
| verified | 2 | atlas-observational-scope, gad-antibody-peripheral-penetration-only (both by text reading) |
| unverified:no-data | 15 | All anatomical claims — BIL TIFF stacks are large; atlas viewer at BIL allows interactive inspection without full download |

**Key blocker:** BIL TIFF stacks are likely tens of GB. The atlas viewer linked via BIL may allow interactive inspection without full download. elastix registration pipeline requires careful parameter tuning. Claims are observational — "reproduction" means inspecting the atlas, not re-computing statistics.

**Methodology note (Issue 004):** This paper introduces a new claim type challenge — observational anatomical claims for which "verification" means atlas inspection, not analysis re-execution. See docs/issues.md Issue 004.

## Claim graph summary

The claims form a dependency hierarchy:
- `atlas-observational-scope` and `gad-antibody-peripheral-penetration-only` are the two assessment claims; the latter bounds epistemic strength of `protocerebral-bridge-layered-transmitter-architecture` and `globuli-cells-cholinergic-gabaergic`
- Regional transmitter claims (leg/opisthosomal/cheliceral/pedipalpal/hagstone) support the atlas-scope claim
- `tonsillar-neuropil-serotonin-core-tdc2-shell` extends `tonsillar-neuropil-novel-structure`
- `protocerebral-bridge-layered-transmitter-architecture` supports `protocerebral-bridge-candidate-central-complex`
- `arcuate-body-four-sublayer-differential` extends `arcuate-body-layers-neurotransmitter-distinguished`
- `globuli-cells-cholinergic-gabaergic` supports `mushroom-bodies-present-asta-exclusive`
