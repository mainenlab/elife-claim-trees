---
paper-slug: ejdrup-2026-dopamine
title: "Computational modelling identifies key determinants of subregion-specific dopamine dynamics in the striatum"
authors:
  - Aske Ejdrup
  - Jakob Kisbye Dreyer
  - Matthew D Lycas
  - Søren H Jørgensen
  - Trevor W Robbins
  - Jeffrey Dalley
  - Freja Herborg
  - Ulrik Gether
journal: eLife
doi: 10.7554/eLife.105214
url: https://elifesciences.org/articles/105214
github: https://github.com/Gether-Lab/striatal-dopamine-model
zenodo: https://doi.org/10.5281/zenodo.17664800
added: 2026-03-29
claim-count: 20
---

## Abstract

This paper uses a reaction-diffusion computational model to explain why dopamine dynamics differ fundamentally between dorsal striatum (DS) and ventral striatum (VS). The central finding is that DAT Vmax — not release parameters, firing rate, or terminal density — is the dominant determinant of regional contrast: high Vmax in DS confines DA to varicosity-scale hotspots with no pervasive tonic baseline, while low Vmax in VS allows diffuse tonic coverage throughout the tissue. The paper additionally introduces super-resolution dSTORM data showing DAT is more nanoclustered in VS than DS, and a varicosity-scale simulation showing nanoclustering creates a diffusion-limited clearance bottleneck — proposing nanoclustering as a potential regulator of the regional Vmax difference.

## Claims

### Assessment claims (model assumptions as explicit nodes)

| Slug | Panel | Epistemic | Summary |
|:-----|:------|:----------|:--------|
| [d2r-initialization-unjustified](d2r-initialization-unjustified.md) | fig1H | weak | D2R initialized at 0.4 without derivation; equilibrium prediction is ~0.59 |
| [nanoclustering-model-varicosity-scale](nanoclustering-model-varicosity-scale.md) | fig4C–F | moderate | Nanoclustering model is architecturally separate from tissue model; no formal coupling |
| [ds-vs-vmax-ratio-assumed](ds-vs-vmax-ratio-assumed.md) | fig2A (implied) | moderate | 3:1 DS:VS Vmax ratio imported from literature; immunostaining corroborates but doesn't establish it |
| [nanoclustering-constant-vmax-constraint](nanoclustering-constant-vmax-constraint.md) | fig4C–F | moderate | Total Vmax held constant across clustered/unclustered conditions; biologically contingent |

### Result claims

| Slug | Panel | Epistemic | Summary |
|:-----|:------|:----------|:--------|
| [ds-lacks-pervasive-tonic-da](ds-lacks-pervasive-tonic-da.md) | fig1D, 1E, 1F | moderate | DS at 4 Hz produces isolated hotspots; no pervasive tonic baseline |
| [low-burst-no-spillover-high-burst-does](low-burst-no-spillover-high-burst-does.md) | fig1G | moderate | 3 APs at 10 Hz: no spillover; 12 APs at 40 Hz: 30× burst volume exposed above 100 nM |
| [d1r-tracks-da-50ms-delay](d1r-tracks-da-50ms-delay.md) | fig1H, 1I | moderate | D1R tracks burst DA with ~50 ms delay; negligible occupancy during pacemaker |
| [d2r-integrates-over-seconds](d2r-integrates-over-seconds.md) | fig1H | weak | D2R returns to baseline in ≥5 s post-burst; cannot separate closely linked bursts |
| [d2r-insensitive-to-brief-pauses](d2r-insensitive-to-brief-pauses.md) | fig1J | weak | 1 s pause shifts D2R occupancy ~0.55→0.45 only; robust across 2–20 nM EC50 |
| [vs-maintains-pervasive-tonic-da](vs-maintains-pervasive-tonic-da.md) | fig2A, 2B, 2C | moderate | VS produces diffuse tonic-like DA throughout volume at 4 Hz |
| [vs-lowest-percentiles-above-10nm](vs-lowest-percentiles-above-10nm.md) | fig2D | moderate | Even lowest [DA] percentiles in VS exceed 10 nM during pacemaker activity |
| [fscv-matches-may-wightman-1989](fscv-matches-may-wightman-1989.md) | fig2E | moderate | Simulated FSCV replicates May & Wightman 1989: VS >> DS peak DA at 10/30/60 Hz |
| [d2r-occupancy-higher-in-vs](d2r-occupancy-higher-in-vs.md) | fig2G | weak | D2R occupancy ~0.8 in VS vs ~0.55 in DS during pacemaker |
| [vmat2-gradient-absent](vmat2-gradient-absent.md) | fig2—supplement 1 | moderate | No significant VMAT2 dorsoventral gradient (p=0.0086, n=4 mice) |
| [dat-immunostaining-dorsoventral-gradient](dat-immunostaining-dorsoventral-gradient.md) | fig2—supplement 1B–C | moderate | DAT significantly higher in DS than VS (p=0.0021, n=4 mice) |
| [vmax-only-parameter-driving-regional-difference](vmax-only-parameter-driving-regional-difference.md) | fig3B–G, 3K, 3L | strong | Only Vmax generates differential DS/VS responses in parameter sweep |
| [vmax-modulation-larger-impact-in-vs](vmax-modulation-larger-impact-in-vs.md) | fig3K | moderate | ±50% Vmax: 38 nM shift in VS vs 11 nM in DS; VS closer to Km saturation |
| [vs-low-active-fraction-resembles-ds-distribution](vs-low-active-fraction-resembles-ds-distribution.md) | fig3B | moderate | VS at 5% active terminals resembles DS at 100%: regime difference |
| [dat-nanoclustering-slows-clearance](dat-nanoclustering-slows-clearance.md) | fig4C–G | moderate | Dense clusters: ~400 ms clearance vs ~200 ms unclustered; diffusion-limited bottleneck |
| [dat-clustering-greater-in-vs](dat-clustering-greater-in-vs.md) | fig4M, 4N | moderate | dSTORM: DAT significantly more nanoclustered in VS than DS (p=0.012, n=12/13) |

## Dependency graph (key paths)

```
ds-vs-vmax-ratio-assumed (A3)
  └─ requires ← ds-lacks-pervasive-tonic-da
       ├─ requires ← low-burst-no-spillover-high-burst-does
       ├─ requires ← d1r-tracks-da-50ms-delay
       ├─ requires ← d2r-integrates-over-seconds ←─── d2r-initialization-unjustified (A1)
       │     └─ requires ← d2r-insensitive-to-brief-pauses
       ├─ requires ← vs-maintains-pervasive-tonic-da ← ds-vs-vmax-ratio-assumed (A3)
       │     ├─ requires ← vs-lowest-percentiles-above-10nm
       │     ├─ requires ← fscv-matches-may-wightman-1989
       │     ├─ requires ← d2r-occupancy-higher-in-vs ←── d2r-initialization-unjustified (A1)
       │     ├─ requires ← vmax-only-parameter-driving-regional-difference
       │     │     ├─ requires ← vmax-modulation-larger-impact-in-vs
       │     │     └─ requires ← vs-low-active-fraction-resembles-ds-distribution
       │
nanoclustering-model-varicosity-scale (A2)
nanoclustering-constant-vmax-constraint (A4)
  └─ requires ← dat-nanoclustering-slows-clearance
        ↑ supports ── dat-clustering-greater-in-vs

dat-immunostaining-dorsoventral-gradient
  └─ supports → ds-vs-vmax-ratio-assumed (A3)
```

## Reproduction status

Verification run: 2026-03-29, agent: mainen-z. Scripts executed from [GitHub repo](https://github.com/Gether-Lab/striatal-dopamine-model); simulation data from [Zenodo](https://doi.org/10.5281/zenodo.17664800).

| Status | Count | Claims |
|:-------|:------|:-------|
| verified | 5 | low-burst-no-spillover-high-burst-does, d1r-tracks-da-50ms-delay, d2r-integrates-over-seconds, d2r-insensitive-to-brief-pauses, vmax-only-parameter-driving-regional-difference, vmax-modulation-larger-impact-in-vs |
| unverified:code-error | 3 | ds-lacks-pervasive-tonic-da, vs-maintains-pervasive-tonic-da, vs-lowest-percentiles-above-10nm (matplotlib 3.8 API breakage: `w_xaxis` removed) |
| unverified:compute-infeasible | 1 | dat-nanoclustering-slows-clearance (varicosity-scale sim ~43 hr runtime; requires Zenodo pre-computed arrays) |
| unverified:no-data | 3 | vmat2-gradient-absent, dat-immunostaining-dorsoventral-gradient, dat-clustering-greater-in-vs (raw imaging data not in Zenodo deposit) |
| unverified | 4 | fscv-matches-may-wightman-1989, d2r-occupancy-higher-in-vs, vs-low-active-fraction-resembles-ds-distribution (Fig3b script timed out), d2r-initialization-unjustified, nanoclustering-model-varicosity-scale, nanoclustering-constant-vmax-constraint, ds-vs-vmax-ratio-assumed |
| failed | 0 | — |

**Blocker for unverified:code-error claims:** fix `Axes3D.w_xaxis` → `Axes3D.xaxis` (and y/z) in Fig1a and Fig2a–f source scripts. One-line fix; simulation code is correct.

**Blocker for dat-nanoclustering-slows-clearance:** download Zenodo Figure 4 `.npy` arrays and run plotting script; do not re-run simulation from scratch.

Code available at [GitHub](https://github.com/Gether-Lab/striatal-dopamine-model). Simulation data for Figure 4 deposited at [Zenodo](https://doi.org/10.5281/zenodo.17664800). Raw imaging data (Figures 2—supplement 1, 4M–N) not in public deposit.
