---
paper-slug: kolb-2026-igabasnfr2
title: "iGABASnFR2 is an improved genetically encoded protein sensor of GABA"
authors:
  - Kolb et al. (GENIE Project Team + Turner lab)
journal: eLife
doi: 10.7554/eLife.108319
url: https://elifesciences.org/articles/108319
zenodo-data: https://doi.org/10.5281/zenodo.17971101
zenodo-code: https://doi.org/10.5281/zenodo.17971100
pdb: https://doi.org/10.2210/pdb9D57/pdb
added: 2026-03-30
claim-count: 6
---

## Abstract

Tools paper describing iGABASnFR2, an improved genetically encoded GABA sensor. Through high-throughput mutagenesis screening (3,947 variants from 39 sites), the paper identifies two top performers: iGABASnFR2 (4.1-fold improved ΔF/F sensitivity, 13.1-fold improved expression vs iGABASnFR1) and iGABASnFR2n (negative-going, -2.2-fold ΔF/F). Crystal structure deposited at PDB (9D57). Primary evidence is from wet-lab measurements (fluorescence imaging, stopped-flow kinetics, 2P spectroscopy).

## Claims

| Slug | Panel | Epistemic | Status |
|:-----|:------|:----------|:-------|
| [screening-scope-wet-lab-only](screening-scope-wet-lab-only.md) | all (assessment) | strong | verified (code inspection) |
| [mutagenesis-3947-variants-screened](mutagenesis-3947-variants-screened.md) | fig1B, 1C | strong | unverified:no-data |
| [igabasnfr2-fourfold-sensitivity-gain](igabasnfr2-fourfold-sensitivity-gain.md) | fig1, fig2 | strong | unverified:no-data |
| [igabasnfr2-13fold-expression-increase](igabasnfr2-13fold-expression-increase.md) | fig1C | moderate | unverified:no-data |
| [igabasnfr2n-negative-going-variant](igabasnfr2n-negative-going-variant.md) | fig1C, 1D | moderate | unverified:no-data |
| [crystal-structure-pdb-9d57](crystal-structure-pdb-9d57.md) | fig3 | strong | unverified |

## Reproduction status

| Status | Count | Claims |
|:-------|:------|:-------|
| verified | 1 | screening-scope-wet-lab-only (assessment) |
| unverified:no-data | 4 | Quantitative performance claims — require sensor constructs and specialized equipment |
| unverified | 1 | crystal-structure-pdb-9d57 — computationally accessible via PDB 9D57 |

**Note:** Analysis code on Zenodo (zenodo.17971100) covers figure generation from pre-measured source data deposited at zenodo.17971101. This allows reproduction of figures but not the underlying measurements. The primary reproduction blocker is that the sensor constructs and specialized instrumentation (stopped-flow, 2P spectroscopy) are required for the measurements themselves.
