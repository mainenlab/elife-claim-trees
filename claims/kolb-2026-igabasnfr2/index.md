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
claim-count: 15
---

## Abstract

Tools paper describing iGABASnFR2, an improved genetically encoded GABA sensor. Through high-throughput mutagenesis screening (3,947 variants from 39 sites), the paper identifies two top performers: iGABASnFR2 (4.1-fold improved ΔF/F sensitivity, 13.1-fold improved expression vs iGABASnFR1) and iGABASnFR2n (negative-going, -2.2-fold ΔF/F). Crystal structure deposited at PDB (9D57). On-cell EC50 of 6.4 μM (7-fold higher affinity than iGABASnFR1). Single-exponential stopped-flow kinetics. 2P-compatible. Demonstrated in retina (direction selectivity), hippocampal boutons (single-bouton GABA), and barrel cortex in vivo (whisker-evoked GABA, ~2–2.5 μM). Primary evidence from wet-lab measurements.

## Claims

| Slug | Panel | Epistemic | Status |
|:-----|:------|:----------|:-------|
| [screening-scope-wet-lab-only](screening-scope-wet-lab-only.md) | all (assessment) | strong | verified (code inspection) |
| [mutagenesis-3947-variants-screened](mutagenesis-3947-variants-screened.md) | fig1b, fig1c | strong | unverified:no-data |
| [igabasnfr2-fourfold-sensitivity-gain](igabasnfr2-fourfold-sensitivity-gain.md) | fig1, fig2 | strong | unverified:no-data |
| [igabasnfr2-13fold-expression-increase](igabasnfr2-13fold-expression-increase.md) | fig1c | moderate | unverified:no-data |
| [igabasnfr2n-negative-going-variant](igabasnfr2n-negative-going-variant.md) | fig1c, fig1d | moderate | unverified:no-data |
| [igabasnfr2-kinetics-rise-decay](igabasnfr2-kinetics-rise-decay.md) | fig2c, fig2d | strong | unverified:no-data |
| [crystal-structure-pdb-9d57](crystal-structure-pdb-9d57.md) | fig3 | strong | verified |
| [igabasnfr2-cpgfp-rigid-on-gaba-binding](igabasnfr2-cpgfp-rigid-on-gaba-binding.md) | fig3a | strong | unverified:partial |
| [igabasnfr2-oncell-affinity-sevenfold](igabasnfr2-oncell-affinity-sevenfold.md) | fig4b | strong | unverified:no-data |
| [igabasnfr2-single-exponential-kinetics](igabasnfr2-single-exponential-kinetics.md) | fig4c, fig4d | strong | unverified:no-data |
| [igabasnfr2-2p-compatible](igabasnfr2-2p-compatible.md) | fig4e, fig4f | strong | unverified:no-data |
| [igabasnfr2-gaba-selective-specificity](igabasnfr2-gaba-selective-specificity.md) | fig4-supp1, fig4-supp2 | strong | unverified:no-data |
| [igabasnfr2-retina-direction-selectivity](igabasnfr2-retina-direction-selectivity.md) | fig5 | strong | unverified:no-data |
| [igabasnfr2-single-bouton-hippocampus](igabasnfr2-single-bouton-hippocampus.md) | fig6a, fig6b | strong | unverified:no-data |
| [igabasnfr2-invivo-barrel-cortex](igabasnfr2-invivo-barrel-cortex.md) | fig6c | moderate | unverified:no-data |

## Reproduction status

| Status | Count | Claims |
|:-------|:------|:-------|
| verified | 2 | screening-scope-wet-lab-only (assessment); crystal-structure-pdb-9d57 (PDB confirmed) |
| unverified:partial | 1 | igabasnfr2-cpgfp-rigid-on-gaba-binding — GABA-bound structure confirmed; 0.25 Å RMSD requires apo iGABASnFR2 (not deposited) + sequence-independent structural aligner |
| unverified:no-data | 12 | Quantitative performance and biological demonstration claims — require sensor constructs and specialized equipment |

**Note:** Analysis code on Zenodo (zenodo.17971100) covers figure generation from pre-measured source data deposited at zenodo.17971101. This allows reproduction of figures but not the underlying measurements. The primary reproduction blocker is that the sensor constructs and specialized instrumentation (stopped-flow spectrometer, Ti-Sapphire 2P system, retinal and in vivo preparation) are required for the measurements themselves. PDB 9D57 is confirmed: iGABASnFR2+GABA, X-ray 2.60 Å, 6 chains, GABA (ABU) present in all chains. The RMSD 0.25 Å cpGFP rigidity claim requires structural comparison with an apo iGABASnFR2 that is not publicly deposited; the comparison structure 6DGV (iGABASnFR v1 precursor) has 501/534 residue differences from 9D57 and requires sequence-independent alignment to use as an apo proxy.

## Triplicate extraction notes (2026-03-30)

Pass A (Results prose): identified 13 distinct claims, including all major performance metrics and all four biological demonstrations (retina, slice bouton, in vivo, purified protein).

Pass B (Figure captions): confirmed all panel assignments; added kinetics (fig2c/d) as a claim distinct from the top-level sensitivity claim; confirmed in vivo (fig6c) and bouton (fig6a/b) as panel-specific. Caption reports 4.3-fold ΔF/F for screening phase (fig1c) vs 4.1-fold in Results — same measurement, pre/post QC rounding difference.

Pass C (Methods): 54 plates failed QC and were re-screened; combination screen generated 635 double mutants (not 3947 — the 3947 is round 1 single-site only). Methods confirm stopped-flow spectrometer (Applied Photophysics SX20) and Ti-Sapphire laser (710–1080 nm) are required instruments. On-cell vs purified protein EC50 discrepancy (6.4 μM vs 1.1 μM) is flagged as unresolved.

High-confidence claims (all three passes agree): mutagenesis scope, sensitivity gain, expression improvement, kinetics, crystal structure, on-cell affinity, stopped-flow kinetics, GABA selectivity, retina, hippocampal bouton, in vivo.

Single-source or two-source claims: cpGFP rigidity (A+B), 2P compatibility (A+C).
