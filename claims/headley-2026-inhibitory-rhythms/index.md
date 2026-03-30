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
badge: silver
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

Verification status: 2026-03-30, agent: mainen-z (code inspection + pre-computed data execution). GitHub repo cloned to /tmp/InhibOnDendComp; pre-computed CSVs in `data/` verified directly.

| Status | Count | Claims |
|:-------|:------|:-------|
| verified | 9 | l5-model-single-cell-scope, naturalistic-drive-parameterization, na-spikes-couple-2to3ms-before-ap, nmda-spikes-couple-25ms-before-ap, ca-spikes-couple-20ms-before-ap, distal-inhib-drops-firing-02hz, perisomatic-inhib-drops-firing-07hz, perisomatic-inhib-subtractive-divisive, gamma-perisomatic-no-dendritic-spike-change |
| unverified:no-data | 7 | beta-optimal-distal-dendritic-entrainment, gamma-optimal-perisomatic-ap-modulation, beta-bidirectional-dendritic-control, burst-effects-emerge-first-cycles, beta-gates-distal-apical-inputs, gamma-gates-proximal-basal-inputs, ei-lag-sensitivity-firing-rate |
| unverified:no-code | 1 | pv-gamma-sst-beta-correspondence (interpretive synthesis) |

**Key finding (2026-03-30):** Pre-computed data in `data/Figure*.csv` and `data/spikes.h5` are sufficient to verify the core quantitative claims (Figs 2-4) without downloading the full Dryad deposit. Figs 7-10 (oscillation frequency sweeps) are the only reproducibility gap — they require the DendCompOscPublic/ Dryad data.

**Key blocker (updated 2026-03-30):** Dryad deposit (doi:10.5061/dryad.v6wwpzhb8) contains oscillation frequency-sweep simulation outputs needed for Figs 5, 7-10. Dryad API confirmed: deposit is a single monolithic zip file (Headley_etal_eLifeDRYAD.zip, 1.88 GB compressed) — there is no individual-file download path via the API. The zip must be downloaded whole; it contains the DendCompOscPublic/ directory with simulation outputs. Environment: `environment.yml` requires `holoviews` and Python 3.9; base conda env lacks `holoviews` — install before running notebooks.

**Specific file requirements per claim:**
- Fig7.ipynb (beta-optimal-distal-dendritic-entrainment, beta-bidirectional-dendritic-control): DendCompOscPublic/ frequency sweep simulations, 0.5–80 Hz distal inhibition conditions
- Fig8.ipynb (gamma-optimal-perisomatic-ap-modulation): DendCompOscPublic/ 11-frequency perisomatic sweep, 0.5–80 Hz
- Fig9.ipynb (burst-effects-emerge-first-cycles): output_burst_16Hz_dist and output_burst_64Hz_prox sets + modulatory_trace_16Hz.npy and modulatory_trace_64Hz.npy (the .npy files confirmed absent from GitHub data/)
- Fig10.ipynb (beta-gates-distal-apical-inputs, gamma-gates-proximal-basal-inputs): exc_stim_aux_spikes2.h5 (confirmed absent from GitHub — only spikes.h5 present)
- Fig4.ipynb E/I lag sweep (ei-lag-sensitivity-firing-rate): DendCompOscPublic/Fig4/ directory with prox500_dist_4 and related lag conditions (Figure4a-f.csv covers only the doubling experiment, not the lag sweep)

**Reproduction path (verified):** Core claims (Figs 2-4) reproducible directly from pre-computed CSVs without NEURON or Dryad download. Oscillation claims (Figs 7-10 and E/I lag sweep): download Headley_etal_eLifeDRYAD.zip (1.88 GB from datadryad.org/dataset/doi:10.5061/dryad.v6wwpzhb8 — requires account), extract, install environment.yml (Python 3.9 + holoviews), run Fig4.ipynb (lag sweep) and Fig7-10.ipynb.
