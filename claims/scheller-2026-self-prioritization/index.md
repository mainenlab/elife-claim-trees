---
paper-slug: scheller-2026-self-prioritization
title: "Self-association enhances early attentional selection through automatic prioritization of socially salient signals"
authors:
  - Meike Scheller
  - Jan Tünnermann
  - Katja Fredriksson
  - Huilin Fang
  - Jie Sui
journal: eLife
doi: 10.7554/eLife.100932
url: https://elifesciences.org/articles/100932
osf: https://osf.io/a62df
osf-preregistration: https://osf.io/ehu75
added: 2026-03-30
claim-count: 15
---

## Abstract

This paper uses a temporal order judgement (TOJ) task combined with hierarchical Bayesian estimation of Theory of Visual Attention (TVA) parameters to show that arbitrary self-associations alter early attentional selection. Two key findings: (1) self-prioritization occurs automatically at the perceptual feature level but is reduced (or reverses) when social decoding is required — counterintuitively, other-associated stimuli are processed faster in the social decision condition; (2) social and perceptual salience interact sub-additively for self-associated stimuli (perceptual salience benefit is smaller when the stimulus is also self-associated), while showing additive effects for other-associated stimuli. TVA model comparisons show the mechanism is absolute processing rate changes (capacity + weights), not merely weight redistribution.

Experiments: N=69 (Exp 1), N=71 (Exp 2). Preregistered. Data and notebooks on OSF.

## Claims

### Assessment claims

| Slug | Panel | Epistemic | Summary |
|:-----|:------|:----------|:--------|
| [tva-capacity-model-wins](tva-capacity-model-wins.md) | fig4 | strong | Condition-specific capacity model wins over single-C model (Δloo=14.2, weight=0.86 pooled) |

### Result claims — Experiment 1 (N=69)

| Slug | Panel | Epistemic | Summary |
|:-----|:------|:----------|:--------|
| [self-prioritization-perceptual-decision-automatic](self-prioritization-perceptual-decision-automatic.md) | fig5 | moderate | Self-associated stimulus processed 1.5 Hz faster in perceptual decision dimension [HDI95: –0.16 to 3.2 Hz] |
| [self-prioritization-absent-social-decision](self-prioritization-absent-social-decision.md) | fig5 | moderate | No self-advantage in social decision dimension; other-associated stimulus processed 1.2 Hz faster [HDI95: –0.78 to 3.1 Hz] |
| [processing-capacity-rises-perceptual-self](processing-capacity-rises-perceptual-self.md) | fig5 | moderate | Capacity increases by 2.6 Hz in perceptual decision condition; self-associated rate increases by 2.1 Hz [HDI95: 0.13 to 4.1 Hz] |
| [decisional-dimension-tradeoff](decisional-dimension-tradeoff.md) | fig9 | moderate | Processing rate changes in social vs perceptual decision dimensions are negatively correlated across individuals (r=−0.243, BF10=6.58) |
| [spe-matching-correlates-social-decision](spe-matching-correlates-social-decision.md) | fig9 | moderate | Individual SPE in shape-label matching correlates with processing rate change in social decision (r=0.354, BF10=8.23) but not perceptual decision |

### Result claims — Experiment 2 (N=71)

| Slug | Panel | Epistemic | Summary |
|:-----|:------|:----------|:--------|
| [other-association-advantage-social-condition](other-association-advantage-social-condition.md) | fig6 | moderate | Other-associated stimulus shows processing rate advantage (−1.6 Hz relative, HDI95: −3 to −0.26 Hz) in social decision |
| [perceptual-salience-6hz-advantage](perceptual-salience-6hz-advantage.md) | fig6 | strong | Perceptual salience produces 6 Hz processing rate advantage (HDI95: 4.6 to 7.3 Hz) for salient stimulus — larger than social salience effect |
| [self-social-additive-perceptual](self-social-additive-perceptual.md) | fig7 | moderate | Social and perceptual salience effects are additive for other-associated stimuli (interaction term −0.54 Hz, HDI95: −2.4 to 1.4 Hz — not different from zero) |
| [self-salience-reduces-perceptual-benefit](self-salience-reduces-perceptual-benefit.md) | fig6, fig7 | moderate | Perceptual salience benefit is reduced for self-associated vs other-associated stimuli (2.5 Hz vs 6 Hz vs 5.2 Hz advantage) — sub-additive interaction |
| [self-salience-dominates-other-associated](self-salience-dominates-other-associated.md) | fig9 | moderate | For self-associated perceptually salient stimuli, social salience is the stronger predictor (BFinclusion=2458.52); for other-associated, perceptual salience dominates (BFinclusion=4638.74) |

### Cross-experiment result claims

| Slug | Panel | Epistemic | Summary |
|:-----|:------|:----------|:--------|
| [spe-robust-matching-both-experiments](spe-robust-matching-both-experiments.md) | fig8 | strong | Strong SPE in matching task in both experiments: Exp1 δ=−1.064 (BF10=3.23×10^95); Exp2 δ=−0.982 (BF10=4.47×10^109) |
| [self-prioritization-automatic-early](self-prioritization-automatic-early.md) | fig5 (synthesis) | moderate | Self-prioritization in attentional selection is automatic at the perceptual feature level — it emerges without explicit social decoding and is reduced when social decoding is required |
| [social-perceptual-salience-independent-streams](social-perceptual-salience-independent-streams.md) | fig7 (synthesis) | moderate | Social and perceptual salience operate via largely independent mechanisms: effects are additive for other-associated stimuli, confirming no interaction between social and perceptual processing streams |

## Dependency graph

```
tva-capacity-model-wins (assessment)
  └─ requires ← all processing-rate claims

self-prioritization-perceptual-decision-automatic
  └─ requires → tva-capacity-model-wins
  └─ supports → self-prioritization-automatic-early

self-prioritization-absent-social-decision
  └─ requires → tva-capacity-model-wins
  └─ supports → decisional-dimension-tradeoff

processing-capacity-rises-perceptual-self
  └─ requires → tva-capacity-model-wins
  └─ supports → self-prioritization-perceptual-decision-automatic

spe-robust-matching-both-experiments
  └─ supports → spe-matching-correlates-social-decision

perceptual-salience-6hz-advantage
  └─ supports → self-salience-reduces-perceptual-benefit
  └─ supports → social-perceptual-salience-independent-streams

self-social-additive-perceptual
  └─ supports → social-perceptual-salience-independent-streams

self-salience-reduces-perceptual-benefit
  └─ supports → self-salience-dominates-other-associated
```

## Reproduction status

2026-03-30, agent: mainen-z (code inspection). Data and notebooks on OSF (https://osf.io/a62df). Preregistered analysis plan on OSF (https://osf.io/ehu75). Hierarchical Bayesian model in Stan/R.

| Status | Count | Claims |
|:-------|:------|:-------|
| unverified | 15 | All claims — OSF data accessible, notebooks identified, not yet executed |

**Reproduction path:** Download OSF project (https://osf.io/a62df). Analysis notebooks use hierarchical Bayesian estimation of TVA parameters. Primary dependency: Stan + R (or Python with pystan/cmdstanpy). Data are trial-level TOJ response data — lightweight (no neuroimaging). Preregistration specifies the exact analysis plan. No GPU required. The main risk is Stan model compilation and R/Stan version compatibility.
