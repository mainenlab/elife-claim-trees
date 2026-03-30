---
paper-slug: headley-2026-inhibitory-rhythms
title: "Spatially targeted inhibitory rhythms differentially affect neuronal integration"
authors:
  - Drew B Headley
  - Benjamin Latimer
  - Adin Aberbach
  - Satish S Nair
journal: eLife
doi: 10.7554/eLife.95562
url: https://elifesciences.org/articles/95562
github: https://github.com/dbheadley/InhibOnDendComp
modeldb: https://modeldb.science/2019883
dryad: https://doi.org/10.5061/dryad.v6wwpzhb8
added: 2026-03-30
claim-count: 17
---

## Abstract

This paper uses a biophysically detailed multicompartmental model of a layer 5 (L5) pyramidal neuron to show that the spatial targeting and oscillatory frequency of inhibitory inputs determines what type of computation a neuron performs. Perisomatic inhibition at gamma frequencies (40–80 Hz) modulates action potential threshold — a subtractive/divisive effect on somatic output — while distal dendritic inhibition at beta frequencies (~20 Hz) gates the occurrence of dendritic Ca²⁺ and NMDA spikes, controlling whether distal inputs are integrated or blocked. The two inhibitory streams are largely independent: each acts on a distinct compartment and supports a distinct computational role. The paper provides a mechanistic interpretation for the empirical association of parvalbumin-positive interneurons with gamma and somatostatin-positive interneurons with beta.

## Claims

### Assessment claims

| Slug | Panel | Epistemic | Summary |
|:-----|:------|:----------|:--------|
| [l5-model-single-cell-scope](l5-model-single-cell-scope.md) | fig1A | moderate | All claims derive from a single-cell compartmental model; no network dynamics, no population-level effects |
| [naturalistic-drive-parameterization](naturalistic-drive-parameterization.md) | fig1A inset | moderate | Baseline ~5.3 Hz firing rate matches in vivo; synapse count and release parameters assumed from literature |

### Result claims

| Slug | Panel | Epistemic | Summary |
|:-----|:------|:----------|:--------|
| [na-spikes-couple-2to3ms-before-ap](na-spikes-couple-2to3ms-before-ap.md) | fig2, fig3 | strong | Na+ dendritic spikes peak 2–3 ms before somatic APs; strongest in proximal compartments |
| [nmda-spikes-couple-25ms-before-ap](nmda-spikes-couple-25ms-before-ap.md) | fig2, fig3 | strong | NMDA spikes show peak STA ~25 ms before somatic APs, reflecting slower kinetics |
| [ca-spikes-couple-20ms-before-ap](ca-spikes-couple-20ms-before-ap.md) | fig2, fig3 | strong | Ca²⁺ spikes in apical dendrites precede somatic APs by ~20 ms in spike-triggered averages |
| [distal-inhib-drops-firing-02hz](distal-inhib-drops-firing-02hz.md) | fig4, fig5 | strong | Doubling distal dendritic inhibition reduces somatic firing from 5.5 Hz to 0.2 Hz by suppressing dendritic spikes |
| [perisomatic-inhib-drops-firing-07hz](perisomatic-inhib-drops-firing-07hz.md) | fig4, fig5 | strong | Doubling perisomatic inhibition reduces firing from 5.5 Hz to 0.7 Hz by raising AP voltage threshold |
| [perisomatic-inhib-subtractive-divisive](perisomatic-inhib-subtractive-divisive.md) | fig5, fig6 | moderate | Perisomatic inhibition reduces the gain of the input-output relationship (divisive effect) in addition to shifting the threshold (subtractive effect) |
| [beta-optimal-distal-dendritic-entrainment](beta-optimal-distal-dendritic-entrainment.md) | fig7 | strong | Beta frequencies (~20 Hz) are optimal for entraining dendritic spike onsets at distal inhibitory sites in a frequency sweep from 0.5 to 80 Hz |
| [gamma-optimal-perisomatic-ap-modulation](gamma-optimal-perisomatic-ap-modulation.md) | fig8 | strong | Gamma frequencies (40–80 Hz) are optimal for perisomatic phase-modulation of AP voltage threshold across an 11-frequency sweep |
| [beta-bidirectional-dendritic-control](beta-bidirectional-dendritic-control.md) | fig5, fig7 | moderate | Beta rhythms at distal dendrites enhance dendritic spike probability during inhibitory troughs and suppress it during peaks — bidirectional phase-dependent control |
| [gamma-perisomatic-no-dendritic-spike-change](gamma-perisomatic-no-dendritic-spike-change.md) | fig5 | moderate | Gamma perisomatic rhythms modulate AP threshold without substantially altering overall dendritic spike rates — functionally orthogonal to the beta/distal effect |
| [burst-effects-emerge-first-cycles](burst-effects-emerge-first-cycles.md) | fig9 | moderate | Phase-dependent modulation of dendritic spikes and APs by oscillatory bursts emerges within the first few cycles, indicating fast engagement of inhibitory control |
| [beta-gates-distal-apical-inputs](beta-gates-distal-apical-inputs.md) | fig10 | strong | Beta rhythms at distal locations gate clustered synaptic input transmission from apical dendrites: enhanced during inhibitory troughs, suppressed during peaks |
| [gamma-gates-proximal-basal-inputs](gamma-gates-proximal-basal-inputs.md) | fig10 | strong | Gamma rhythms at perisomatic locations gate clustered synaptic input transmission from proximal/basal dendrites |
| [pv-gamma-sst-beta-correspondence](pv-gamma-sst-beta-correspondence.md) | fig10 (synthesis) | moderate | The model provides mechanistic grounding for the empirical association of PV+ interneurons with gamma and SST+ interneurons with beta: the two interneuron types target the two compartments whose functional modulation aligns with their respective frequencies |

### Null / boundary claims

| Slug | Panel | Epistemic | Summary |
|:-----|:------|:----------|:--------|
| [ei-lag-sensitivity-firing-rate](ei-lag-sensitivity-firing-rate.md) | fig4 | moderate | E/I coupling lag (4–500 ms) has modest effects on total firing rate but large effects on which dendritic compartments drive APs |

## Dependency graph

```
l5-model-single-cell-scope (assessment)
  └─ requires ← all result claims (all are single-cell model predictions)

naturalistic-drive-parameterization (assessment)
  └─ requires ← distal-inhib-drops-firing-02hz
  └─ requires ← perisomatic-inhib-drops-firing-07hz

na-spikes-couple-2to3ms-before-ap
nmda-spikes-couple-25ms-before-ap
ca-spikes-couple-20ms-before-ap
  └─ support → beta-optimal-distal-dendritic-entrainment
  └─ support → beta-bidirectional-dendritic-control

distal-inhib-drops-firing-02hz ← requires naturalistic-drive-parameterization
perisomatic-inhib-drops-firing-07hz ← requires naturalistic-drive-parameterization
  └─ supports → perisomatic-inhib-subtractive-divisive

beta-optimal-distal-dendritic-entrainment
  └─ supports → beta-bidirectional-dendritic-control
  └─ supports → beta-gates-distal-apical-inputs

gamma-optimal-perisomatic-ap-modulation
  └─ supports → gamma-perisomatic-no-dendritic-spike-change
  └─ supports → gamma-gates-proximal-basal-inputs

beta-gates-distal-apical-inputs
gamma-gates-proximal-basal-inputs
  └─ supports → pv-gamma-sst-beta-correspondence
```

## Reproduction status

Verification status: 2026-03-30, agent: mainen-z (code inspection). All scripts are in GitHub `scripts/` directory; pre-computed data in `data/` and Dryad deposit.

| Status | Count | Claims |
|:-------|:------|:-------|
| verified (code inspection) | 2 | l5-model-single-cell-scope, naturalistic-drive-parameterization |
| unverified | 16 | All result claims — scripts identified, data available on Dryad, not yet executed |

**Reproduction path:** All claims reproducible from Dryad pre-computed data + GitHub notebooks. No NEURON re-run required for figure reproduction. conda environment: `environment.yml` → `conda activate dend_comp`. Run notebooks in `scripts/` (Fig2_3.ipynb through Fig10.ipynb). Data dir has per-figure CSVs and .npy arrays.

**Key risk:** environment.yml pins Python 3.9 and specific package versions. Any deviation (e.g., newer scipy or holoviews) may break visualization. Test environment setup before running notebooks.
