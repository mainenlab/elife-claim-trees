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
badge: silver
claim-count: 20
---

## Abstract

Monitoring GABAergic inhibition in the nervous system has been enabled by the development of an intensiometric molecular sensor that directly detects GABA. However, the first generation iGABASnFR exhibits low signal-to-noise and suboptimal kinetics, making in vivo experiments challenging. To improve sensor performance, we targeted several sites in the protein for near-saturation mutagenesis and evaluated the resulting sensor variants in a high-throughput screening system using evoked synaptic release in primary cultured neurons. This identified a sensor variant, iGABASnFR2, with 4.1-fold improved sensitivity and 30% faster rise time, and binding affinity that remained in a range sensitive to changes in GABA concentration at synapses. We also identified sensors with an inverted response, decreasing fluorescence intensity upon GABA binding. We termed the best such negative-going sensor iGABASnFR2n, which can be used to corroborate observations with the positive-going sensor. These improvements yielded a qualitative enhancement of in vivo performance when compared directly to the original sensor. iGABASnFR2 enabled the first measurements of direction-selective GABA release in the retina. In vivo imaging in somatosensory cortex revealed that iGABASnFR2 can report volume-transmitted GABA release following whisker stimulation. Overall, the improved sensitivity and kinetics of iGABASnFR2 make it a more effective tool for imaging GABAergic transmission in intact neural circuits.

## Hypotheses (top-level engineering bets)

| Slug | Role | Epistemic | Summary |
|:-----|:-----|:----------|:--------|
| [hypothesis-saturation-mutagenesis-yields-improved-sensor](hypothesis-saturation-mutagenesis-yields-improved-sensor.md) | hypothesis | hypothesis | Near-saturation mutagenesis at Pf622 binding pocket and cpGFP linkers can yield a substantially improved successor to iGABASnFR1 |
| [hypothesis-improved-sensor-enables-new-biology](hypothesis-improved-sensor-enables-new-biology.md) | hypothesis | hypothesis | A sufficiently improved GABA sensor will cross qualitative capability thresholds — single-bouton, single-trial DS, in vivo |

## Predictions (derived from hypotheses)

| Slug | Derived from | Epistemic | Summary |
|:-----|:-------------|:----------|:--------|
| [prediction-screen-yields-multiple-improved-variants](prediction-screen-yields-multiple-improved-variants.md) | saturation-mutagenesis | prediction | Screen should yield multiple variants exceeding v1 ΔF/F, at least one improved on both sensitivity and expression, and potentially novel variants (e.g. inverted) |
| [prediction-improved-sensor-enables-new-measurements](prediction-improved-sensor-enables-new-measurements.md) | new-biology; saturation-mutagenesis | prediction | iGABASnFR2 should enable single-bouton GABA detection, single-trial direction-selective imaging, and in vivo whisker-evoked GABA — with iGABASnFR1 failing the same comparisons |

## Empirical, methodological, and control claims

| Slug | Panel | Role | Epistemic | Status |
|:-----|:------|:-----|:----------|:-------|
| [mutagenesis-3947-variants-screened](mutagenesis-3947-variants-screened.md) | fig1b, fig1c | methodological | strong | unverified:no-data |
| [igabasnfr2-fourfold-sensitivity-gain](igabasnfr2-fourfold-sensitivity-gain.md) | fig1, fig2 | empirical | strong | unverified:no-data |
| [igabasnfr2-13fold-expression-increase](igabasnfr2-13fold-expression-increase.md) | fig1c | empirical | moderate | unverified:no-data |
| [igabasnfr2n-negative-going-variant](igabasnfr2n-negative-going-variant.md) | fig1c, fig1d | empirical | moderate | unverified:no-data |
| [igabasnfr2-kinetics-rise-decay](igabasnfr2-kinetics-rise-decay.md) | fig2c, fig2d | empirical | strong | unverified:no-data |
| [crystal-structure-pdb-9d57](crystal-structure-pdb-9d57.md) | fig3 | methodological | strong | verified |
| [igabasnfr2-cpgfp-rigid-on-gaba-binding](igabasnfr2-cpgfp-rigid-on-gaba-binding.md) | fig3a | interpretation | strong | unverified:partial |
| [igabasnfr2-oncell-affinity-sevenfold](igabasnfr2-oncell-affinity-sevenfold.md) | fig4b | empirical | strong | unverified:no-data |
| [igabasnfr2-single-exponential-kinetics](igabasnfr2-single-exponential-kinetics.md) | fig4c, fig4d | empirical | strong | unverified:no-data |
| [igabasnfr2-2p-compatible](igabasnfr2-2p-compatible.md) | fig4e, fig4f | methodological | strong | unverified:no-data |
| [igabasnfr2-gaba-selective-specificity](igabasnfr2-gaba-selective-specificity.md) | fig4-supp1, fig4-supp2 | control | strong | unverified:no-data |
| [igabasnfr2-retina-direction-selectivity](igabasnfr2-retina-direction-selectivity.md) | fig5 | empirical | strong | unverified:no-data |
| [igabasnfr2-single-bouton-hippocampus](igabasnfr2-single-bouton-hippocampus.md) | fig6a, fig6b | empirical | strong | unverified:no-data |
| [igabasnfr2-invivo-barrel-cortex](igabasnfr2-invivo-barrel-cortex.md) | fig6c | empirical | moderate | unverified:no-data |

## Assessment claims (structural / scope)

| Slug | Panel | Role | Epistemic | Summary |
|:-----|:------|:-----|:----------|:--------|
| [screening-scope-wet-lab-only](screening-scope-wet-lab-only.md) | all (assessment) | scope | strong | Primary claims established by wet-lab measurement; deposited code covers figure generation only |
| [scope-sensor-engineering-paper](scope-sensor-engineering-paper.md) | ~ | scope | weak | Sensor-engineering envelope: in vitro screen → purified protein biophysics → ex vivo retina + slice → single in vivo barrel-cortex demonstration |

## Role distribution

| Role | Count |
|:-----|------:|
| hypothesis | 2 |
| prediction | 2 |
| empirical | 9 |
| methodological | 3 |
| interpretation | 1 |
| control | 1 |
| scope | 2 |
| **total** | **20** |

## Edge inventory (enriched schema)

| Edge type | Count | Notes |
|:----------|------:|:------|
| entails (hypothesis → prediction / empirical) | 5 | Each hypothesis entails 1–2 children; capability hypothesis entails the three threshold demonstrations directly |
| derived-from (prediction → hypothesis) | 3 | Inverse of entails; prediction-improved-sensor-enables-new-measurements derives from both hypotheses |
| tests (empirical/methodological → prediction) | 6 | Screen-yield tests (4) and capability-threshold tests (3 demonstrations test the new-measurements prediction) |
| confirms (empirical → hypothesis) | 9 | Engineering hypothesis confirmed by fold-change measurements; capability hypothesis confirmed by three biological demonstrations |
| dissociates-with | 7 | Paired sensor comparisons (v2 vs v2n on rise time; v2 sensitivity vs v2 affinity vs v2 kinetics; retina vs slice vs in vivo) |
| validates (control → empirical) | 3 | GABA selectivity validates that retina/slice/in vivo signals are GABA |
| rules-out | 1 | Selectivity rules out off-target binding as alternative explanation for sensitivity gain |
| interprets (interpretation → empirical/methodological) | 1 | cpGFP rigidity interprets the crystal structure as a mechanistic insight |
| enables-method | 6 | Screen enables variant identification; 2P-compatibility enables three biological demonstrations; crystal structure enables cpGFP rigidity claim |
| scopes (scope → empirical) | 27 | Two scope claims govern essentially every empirical claim in the paper |

## Reproduction status

| Status | Count | Claims |
|:-------|:------|:-------|
| verified | 3 | screening-scope-wet-lab-only (assessment); scope-sensor-engineering-paper (assessment); crystal-structure-pdb-9d57 (PDB confirmed) |
| unverified:partial | 1 | igabasnfr2-cpgfp-rigid-on-gaba-binding — GABA-bound structure confirmed; 0.25 Å RMSD requires apo iGABASnFR2 (not deposited) + sequence-independent structural aligner |
| unverified:no-data | 12 | Quantitative performance and biological demonstration claims — require sensor constructs and specialized equipment |
| N/A (hypotheses + predictions) | 4 | Not the kind of claim that admits direct reproduction |

**Note:** Analysis code on Zenodo (zenodo.17971100) covers figure generation from pre-measured source data deposited at zenodo.17971101. This allows reproduction of figures but not the underlying measurements. The primary reproduction blocker is that the sensor constructs and specialized instrumentation (stopped-flow spectrometer, Ti-Sapphire 2P system, retinal and in vivo preparation) are required for the measurements themselves. PDB 9D57 is confirmed: iGABASnFR2+GABA, X-ray 2.60 Å, 6 chains, GABA (ABU) present in all chains. The RMSD 0.25 Å cpGFP rigidity claim requires structural comparison with an apo iGABASnFR2 that is not publicly deposited; the comparison structure 6DGV (iGABASnFR v1 precursor) has 501/534 residue differences from 9D57 and requires sequence-independent alignment to use as an apo proxy.

## Triplicate extraction notes (2026-03-30)

Pass A (Results prose): identified 13 distinct claims, including all major performance metrics and all four biological demonstrations (retina, slice bouton, in vivo, purified protein).

Pass B (Figure captions): confirmed all panel assignments; added kinetics (fig2c/d) as a claim distinct from the top-level sensitivity claim; confirmed in vivo (fig6c) and bouton (fig6a/b) as panel-specific. Caption reports 4.3-fold ΔF/F for screening phase (fig1c) vs 4.1-fold in Results — same measurement, pre/post QC rounding difference.

Pass C (Methods): 54 plates failed QC and were re-screened; combination screen generated 635 double mutants (not 3947 — the 3947 is round 1 single-site only). Methods confirm stopped-flow spectrometer (Applied Photophysics SX20) and Ti-Sapphire laser (710–1080 nm) are required instruments. On-cell vs purified protein EC50 discrepancy (6.4 μM vs 1.1 μM) is flagged as unresolved.

High-confidence claims (all three passes agree): mutagenesis scope, sensitivity gain, expression improvement, kinetics, crystal structure, on-cell affinity, stopped-flow kinetics, GABA selectivity, retina, hippocampal bouton, in vivo.

Single-source or two-source claims: cpGFP rigidity (A+B), 2P compatibility (A+C).

## Migration to enriched schema (2026-04-20)

Added two top-level engineering hypotheses (`saturation-mutagenesis-yields-improved-sensor`, `improved-sensor-enables-new-biology`), two derived predictions, and one paradigm-scope claim covering the in vitro → ex vivo → in vivo design envelope. Annotated all 15 prior claims with `role:` and at least one new-schema edge. The enrichment makes explicit the central feature of this paper's argument structure as a sensor-engineering paper: two distinct hypotheses (engineering — can the screen yield improvement; biological — can the improvement cross capability thresholds) generate two distinct prediction chains, with the screening metrics testing the engineering hypothesis and the three side-by-side v1-vs-v2 demonstrations (retina DS, single-bouton hippocampus, in vivo barrel cortex) testing the capability-threshold hypothesis. Methodological claims (the screen itself, the 2P spectra, the crystal structure) are now distinguished from empirical findings via `enables-method:` edges, and the paired comparisons across sensor variants and across preparations are made explicit via `dissociates-with:`.
