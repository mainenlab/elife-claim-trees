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
stage: published
doi: 10.7554/eLife.105214
url: https://elifesciences.org/articles/105214
github: https://github.com/Gether-Lab/striatal-dopamine-model
zenodo: https://doi.org/10.5281/zenodo.17664800
added: 2026-03-29
badge: silver
claim-count: 20
---

## Abstract

Striatal dopamine (DA) release regulates reward-related learning and motivation and is believed to consist of a short-lived *phasic* and continuous *tonic* component. Here, we build a large-scale three-dimensional model of extracellular DA dynamics in dorsal (DS) and ventral striatum (VS). The model predicts rapid dynamics in DS with little to no basal DA and slower dynamics in the VS enabling build-up of *tonic* DA levels. These regional differences do not reflect release-related phenomena but rather differential dopamine transporter (DAT) activity. Interestingly, our simulations posit DAT nanoclustering as a possible regulator of this activity. Receptor binding simulations show that D1 receptor occupancy follows extracellular DA concentration with milliseconds delay, while D2 receptors do not respond to brief pauses in firing but rather integrate DA signal over seconds. Summarised, our model distills recent experimental observations into a computational framework that challenges prevailing paradigms of striatal DA signalling.

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

Verification run: 2026-03-29, agent: mainen-z. Updated: 2026-03-30 (matplotlib fix + re-run). Scripts executed from [GitHub repo](https://github.com/Gether-Lab/striatal-dopamine-model); simulation data from [Zenodo](https://doi.org/10.5281/zenodo.17664800).

| Status | Count | Claims |
|:-------|:------|:-------|
| verified | 13 | low-burst-no-spillover-high-burst-does, d1r-tracks-da-50ms-delay, d2r-integrates-over-seconds, d2r-insensitive-to-brief-pauses, vmax-only-parameter-driving-regional-difference, vmax-modulation-larger-impact-in-vs, d2r-initialization-unjustified, nanoclustering-model-varicosity-scale, nanoclustering-constant-vmax-constraint, ds-vs-vmax-ratio-assumed, **ds-lacks-pervasive-tonic-da**, **vs-maintains-pervasive-tonic-da**, **vs-lowest-percentiles-above-10nm** |
| unverified:compute-infeasible | 4 | dat-nanoclustering-slows-clearance (~43 hr varicosity sim), fscv-matches-may-wightman-1989, d2r-occupancy-higher-in-vs, vs-low-active-fraction-resembles-ds-distribution (all: tissue-scale simulation timed out; require Zenodo pre-computed arrays) |
| unverified:no-data | 3 | vmat2-gradient-absent, dat-immunostaining-dorsoventral-gradient, dat-clustering-greater-in-vs (raw dSTORM/immunostaining data not in Zenodo deposit) |
| failed | 0 | — |

**Notes on assessment claims:** The 4 assessment claims (d2r-initialization-unjustified, nanoclustering-model-varicosity-scale, nanoclustering-constant-vmax-constraint, ds-vs-vmax-ratio-assumed) are verified by code inspection; their reproduction status is `verified` because inspection confirmed the structural property each claim asserts.

**Resolved (2026-03-30):** matplotlib `w_xaxis`/`w_yaxis`/`w_zaxis` → `xaxis`/`yaxis`/`zaxis` fix applied to Fig1a and Fig2a–f scripts. Both simulations re-ran to completion; all 3 claims verified numerically. DS: median 5.4 nM with hotspot distribution (max 8788 nM). VS: minimum 8.1 nM, P0.5+=11 nM, median 20.9 nM — pervasive coverage confirmed.

**Blocker for unverified:compute-infeasible claims:** download Zenodo deposit (zenodo.17664800) and check for pre-computed `.npy` arrays per figure (fig2g, fig2h, fig3b). If present, run the plotting-only section of each source script. For dat-nanoclustering-slows-clearance, Figure 4 `.npy` arrays are the required input.

Code available at [GitHub](https://github.com/Gether-Lab/striatal-dopamine-model). Simulation data deposited at [Zenodo](https://doi.org/10.5281/zenodo.17664800). Raw imaging data (Figures 2—supplement 1, 4M–N) not in public deposit — no reproduction path for dSTORM/immunostaining claims.
