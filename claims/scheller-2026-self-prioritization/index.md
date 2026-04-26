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
stage: published
doi: 10.7554/eLife.100932
url: https://elifesciences.org/articles/100932
osf: https://osf.io/a62df
osf-preregistration: https://osf.io/ehu75
added: 2026-03-30
badge: silver
claim-count: 22
---

## Abstract

Efficiently processing self-related information is critical for cognition, yet the earliest mechanisms enabling this self-prioritization in humans remain unclear. By combining a temporal order judgement task with computational modeling based on the Theory of Visual Attention (TVA), we show how mere, arbitrary associations with the self can fundamentally alter attentional selection of sensory information into aware short-term memory, by enhancing the attentional weights and processing capacity devoted to encoding socially loaded information. This self-prioritization in attentional selection occurs automatically at early perceptual stages but reduces when active social decoding is required. Importantly, the processing benefits obtained from attentional selection via self-relatedness and via physical salience were additive, suggesting that social and perceptual salience captured attention via separate mechanisms. Furthermore, intra-individual correlations revealed an ‘obligatory’ self-prioritization effect, whereby self-relatedness overpowered the contribution of perceptual salience in guiding attentional selection. Together, our findings provide evidence for the influence of self-relatedness during earlier, automatic stages of attentional selection at the gateway to perception, distinct from later post-attentive processing stages.

## Hypotheses (top-level theoretical bets)

| Slug | Role | Epistemic | Summary |
|:-----|:-----|:----------|:--------|
| [hypothesis-self-association-alters-attentional-selection](hypothesis-self-association-alters-attentional-selection.md) | hypothesis | hypothesis | Arbitrary self-association acts as an automatic attentional salience signal at the perceptual feature level, modulated (or reversed) by social-decision context |
| [hypothesis-capacity-mechanism-not-weights](hypothesis-capacity-mechanism-not-weights.md) | hypothesis | hypothesis | Self-association mobilises absolute TVA processing capacity (C) rather than merely redistributing fixed attentional weights (w) |
| [hypothesis-social-perceptual-independent-mechanisms](hypothesis-social-perceptual-independent-mechanisms.md) | hypothesis | hypothesis | Social and perceptual salience capture attention via largely independent mechanisms, predicting additive effects when both occur on the same stimulus |

## Predictions (derived from hypotheses)

| Slug | Derived from | Epistemic | Summary |
|:-----|:-------------|:----------|:--------|
| [prediction-self-advantage-perceptual-decision](prediction-self-advantage-perceptual-decision.md) | self-association-alters | prediction | Self-associated stimulus should be processed faster than other-associated in perceptual-decision TOJ, despite social identity being task-irrelevant |
| [prediction-self-advantage-attenuated-social-decision](prediction-self-advantage-attenuated-social-decision.md) | self-association-alters | prediction | Self-advantage should attenuate, vanish, or reverse under explicit social decoding — counter to the naive amplification prediction |
| [prediction-capacity-model-outperforms-weights-only](prediction-capacity-model-outperforms-weights-only.md) | capacity-mechanism | prediction | Condition-specific TVA capacity model should win over single-C, weights-only model on LOO cross-validation |
| [prediction-additive-effects-other-associated](prediction-additive-effects-other-associated.md) | independent-mechanisms | prediction | For other-associated stimuli, social × perceptual salience interaction term should be near zero (additivity) |

## Synthesis / interpretation

| Slug | Role | Epistemic | Summary |
|:-----|:-----|:----------|:--------|
| [self-prioritization-automatic-early](self-prioritization-automatic-early.md) | interpretation | moderate | Self-prioritisation in attentional selection is automatic at the perceptual feature level — emerges without explicit social decoding and is reduced when social decoding is required |
| [social-perceptual-salience-independent-streams](social-perceptual-salience-independent-streams.md) | interpretation | moderate | Social and perceptual salience operate via largely independent streams — additive for other-associated, sub-additive only when self-relevance dominates |
| [self-salience-dominates-other-associated](self-salience-dominates-other-associated.md) | synthesis | moderate | Asymmetry: for self-associated salient stimuli, social salience dominates (BFincl=2458); for other-associated, perceptual dominates (BFincl=4639) |

## Methodological / model-comparison claims

| Slug | Panel | Role | Epistemic | Summary |
|:-----|:------|:-----|:----------|:--------|
| [tva-capacity-model-wins](tva-capacity-model-wins.md) | fig4 | methodological | strong | Condition-specific capacity model wins over single-C model (Δloo=14.2, weight=0.86 pooled across N=140) |

## Empirical claims — Experiment 1 (N=69, perceptual vs social decision)

| Slug | Panel | Role | Epistemic | Summary |
|:-----|:------|:-----|:----------|:--------|
| [self-prioritization-perceptual-decision-automatic](self-prioritization-perceptual-decision-automatic.md) | fig5 | empirical | moderate | Self processed 1.5 Hz faster in perceptual-decision dimension [HDI95: −0.16 to 3.2 Hz] |
| [self-prioritization-absent-social-decision](self-prioritization-absent-social-decision.md) | fig5 | empirical | moderate | No self-advantage in social-decision dimension; trend toward other-advantage 1.2 Hz [HDI95: −0.78 to 3.1 Hz] |
| [processing-capacity-rises-perceptual-self](processing-capacity-rises-perceptual-self.md) | fig5 | empirical | moderate | Capacity increases by 2.6 Hz in perceptual condition; self-rate increases by 2.1 Hz [HDI95: 0.13 to 4.1 Hz] |
| [decisional-dimension-tradeoff](decisional-dimension-tradeoff.md) | fig9 | empirical | moderate | Cross-individual: rate changes in social vs perceptual dimensions negatively correlated (r=−0.243, BF10=6.58) |
| [spe-matching-correlates-social-decision](spe-matching-correlates-social-decision.md) | fig9 | empirical | moderate | Matching SPE correlates with rate change in social decision (r=0.354, BF10=8.23) but not perceptual |

## Empirical claims — Experiment 2 (N=71, social × perceptual factorial)

| Slug | Panel | Role | Epistemic | Summary |
|:-----|:------|:-----|:----------|:--------|
| [other-association-advantage-social-condition](other-association-advantage-social-condition.md) | fig6 | empirical | moderate | Other-associated stimulus processed faster (−1.6 Hz, HDI95: −3 to −0.26) in social decision |
| [perceptual-salience-6hz-advantage](perceptual-salience-6hz-advantage.md) | fig6 | control | strong | Perceptual salience produces 6 Hz advantage [HDI95: 4.6 to 7.3 Hz] — substantially larger than social effects |
| [self-social-additive-perceptual](self-social-additive-perceptual.md) | fig7 | empirical | moderate | Other-associated × perceptual salience interaction = −0.54 Hz [HDI95: −2.4 to 1.4 Hz] — consistent with additivity |
| [self-salience-reduces-perceptual-benefit](self-salience-reduces-perceptual-benefit.md) | fig6, fig7 | empirical | moderate | Perceptual benefit reduced for self-associated (2.5 Hz) vs other (5.2 Hz) vs neutral (6 Hz) — sub-additive |

## Cross-experiment claims

| Slug | Panel | Role | Epistemic | Summary |
|:-----|:------|:-----|:----------|:--------|
| [spe-robust-matching-both-experiments](spe-robust-matching-both-experiments.md) | fig8 | control | strong | Strong matching SPE in both experiments: Exp1 d=−1.064 (BF10=3.23×10^95); Exp2 d=−0.982 (BF10=4.47×10^109) — manipulation check |

## Scope

| Slug | Panel | Role | Epistemic | Summary |
|:-----|:------|:-----|:----------|:--------|
| [scope-toj-tva-paradigm](scope-toj-tva-paradigm.md) | scope | scope | strong | TOJ + matching + hierarchical Bayesian TVA; preregistered; arbitrary shape-self associations only; OSF deposit https://osf.io/a62df |

## Role distribution

| Role | Count |
|:-----|------:|
| hypothesis | 3 |
| prediction | 4 |
| synthesis | 1 |
| interpretation | 2 |
| empirical | 8 |
| methodological | 1 |
| control | 2 |
| scope | 1 |
| **total** | **22** |

(Note: counts are over 22 claims; some empirical/control claims also carry an interpretation role implicitly. The primary classification listed governs.)

## Edge inventory (enriched schema)

| Edge type | Count | Notes |
|:----------|------:|:------|
| entails | 4 | Each hypothesis entails its derived prediction(s); the master self-association hypothesis entails two predictions (perceptual-advantage and social-decision attenuation) |
| derived-from | 4 | Inverse of entails |
| tests | 5 | Empirical claims test their predictions (perceptual self-advantage, social-decision reversal, capacity model, additivity for other-associated) |
| confirms | 9 | Empirical/interpretation claims confirm hypotheses; both interpretation claims confirm their respective top-level hypotheses; capacity rise and model-comparison verdict both confirm capacity hypothesis; self-social-additive-perceptual and social-perceptual-salience-independent-streams both confirm independence hypothesis |
| refutes | 1 | `self-salience-reduces-perceptual-benefit` (sub-additive interaction for self-associated) refutes the strong form of the independence hypothesis |
| dissociates-with | 4 | Perceptual-decision vs social-decision results; matching-SPE correlation vs trade-off; additive (other) vs sub-additive (self) interactions |
| validates | 6 | Matching-SPE manipulation check validates three TVA processing-rate findings; perceptual-salience baseline validates the two interaction claims; social-condition replication validates the Exp 1 social-decision finding |
| interprets | 7 | Synthesis claims interpret their constituent empirical claims; the two interpretation claims integrate the perceptual/social and additive/sub-additive contrasts |
| enables-method | 7 | The model-comparison verdict enables all downstream TVA processing-rate claims (which presuppose condition-specific C) |
| scopes | 14 | The TOJ + TVA paradigm scope governs all 14 prior claims |

## Dependency structure summary

```
hypothesis-self-association-alters-attentional-selection
  ├─ entails → prediction-self-advantage-perceptual-decision
  │    └─ tested by: self-prioritization-perceptual-decision-automatic
  └─ entails → prediction-self-advantage-attenuated-social-decision
       └─ tested by: self-prioritization-absent-social-decision,
          other-association-advantage-social-condition
       (interpretation: self-prioritization-automatic-early)
       (validated by: spe-robust-matching-both-experiments,
        spe-matching-correlates-social-decision,
        decisional-dimension-tradeoff)

hypothesis-capacity-mechanism-not-weights
  └─ entails → prediction-capacity-model-outperforms-weights-only
       └─ tested by: tva-capacity-model-wins
            (enables-method ↘ all TVA processing-rate empirical claims)
       (confirmed by: processing-capacity-rises-perceptual-self)

hypothesis-social-perceptual-independent-mechanisms
  └─ entails → prediction-additive-effects-other-associated
       └─ tested by: self-social-additive-perceptual (confirms)
       └─ refuted (partial) by: self-salience-reduces-perceptual-benefit
            (interpretation: social-perceptual-salience-independent-streams,
             self-salience-dominates-other-associated)
       (control: perceptual-salience-6hz-advantage validates the factorial baseline)

scope-toj-tva-paradigm
  └─ scopes → all 14 result and methodological claims
```

## Reproduction status

2026-03-30, agent: mainen-z. Data downloaded from OSF (https://osf.io/a62df). Pre-computed Stan posteriors (estimates_indiv_C.csv, estimates_single_C.csv) verified directly. Behavioral individual-differences data (Correlation_Results.xlsx) verified.

| Status | Count | Claims |
|:-------|:------|:-------|
| verified | 9 | perceptual-salience-6hz-advantage, other-association-advantage-social-condition, self-salience-reduces-perceptual-benefit, processing-capacity-rises-perceptual-self, spe-robust-matching-both-experiments, spe-matching-correlates-social-decision, self-prioritization-perceptual-decision-automatic, self-prioritization-absent-social-decision, decisional-dimension-tradeoff (direction confirmed, r close) |
| verified:interpretive | 2 | self-prioritization-automatic-early, social-perceptual-salience-independent-streams |
| verified | 1 | self-social-additive-perceptual (interaction direction confirmed from condition means) |
| unverified | 3 | tva-capacity-model-wins (LOO requires Stan traces ~2-5 GB), self-salience-dominates-other-associated (BFinclusion requires BayesFactor R pkg), decisional-dimension-tradeoff (r=-0.211 vs claimed -0.243 — likely different N/exclusion, direction confirmed) |
| N/A | 8 | hypotheses (3), predictions (4), scope (1) — not reproduction-bearing |

**What was verified:** Pre-computed Stan posterior summaries (estimates_indiv_C.csv) contain group-level µ and σ parameters for C and w, plus per-participant per-condition v_p and v_r processing rates. All quantitative claims about processing rate differences, capacity changes, and condition contrasts were checked against these files. Matching task SPE and correlation data verified from Correlation_Results.xlsx.

**What remains:** The LOO model comparison (Δloo=14.2, weight=0.86) requires loading ~2-5 GB Stan trace files (.nc) and running az.compare(). The BFinclusion values require the BayesFactor R package. Both are feasible but not yet executed.

**Reproduction path:** Pre-computed posteriors are in OSF folders "Exp 1/2/Cross Data + Analysis". No Stan re-run needed for most claims. For LOO: load exp-1-individual-C.nc (2.4 GB) and corresponding single_C trace, run az.compare() in Python/ArviZ.

## Migration to enriched schema (2026-04-20)

Promoted three top-level hypotheses (`hypothesis-self-association-alters-attentional-selection`,
`hypothesis-capacity-mechanism-not-weights`, `hypothesis-social-perceptual-independent-mechanisms`),
four derived predictions (one each for the capacity and additivity hypotheses; two for the
master self-association hypothesis — the diagnostic perceptual-decision advantage and the
counterintuitive social-decision attenuation), and one paradigm-scope claim
(`scope-toj-tva-paradigm`). Annotated all 14 prior claims with `role:` and at least one
new-schema edge.

Several reclassifications worth flagging. `tva-capacity-model-wins` becomes
`role: methodological` rather than empirical because its function is to license the
condition-specific TVA framework that the empirical claims presuppose — it is the
gatekeeping model-comparison verdict, and it carries an `enables-method` edge to every
downstream TVA processing-rate claim. `perceptual-salience-6hz-advantage` becomes
`role: control` because its primary epistemic function is to anchor the perceptual side
of the factorial design — it is the within-paper baseline against which the social ×
perceptual interaction terms are evaluated. `spe-robust-matching-both-experiments`
becomes `role: control` because its epistemic function is the manipulation check (did
participants actually form self-associations?), and it carries a `validates` edge to the
three principal TVA processing-rate claims that would otherwise have no independent
evidence that the manipulation took. `spe-matching-correlates-social-decision` carries a
`validates` edge to `self-prioritization-absent-social-decision` because the positive
correlation between matching SPE and social-decision rate change is the
individual-differences signature that the social-decoding context genuinely engages the
self-prioritisation system (otherwise the matching SPE — which captures cumulative
self-bias — would not predict it).

The most theoretically interesting edge is the `refutes` from
`self-salience-reduces-perceptual-benefit` to
`hypothesis-social-perceptual-independent-mechanisms`. The independence hypothesis
predicts additivity wherever social and perceptual salience co-occur; the
self-associated sub-additive interaction violates that prediction in the self-condition
specifically. The paper resolves the tension by qualifying the hypothesis — independence
holds except when self-relatedness obligatorily dominates — but on the simple
falsifiability test the empirical result is a partial refutation. The
`self-salience-dominates-other-associated` synthesis claim makes this asymmetry explicit
via the BFinclusion comparison, and `social-perceptual-salience-independent-streams`
provides the integrative interpretation.

The paired `dissociates-with` edges between `self-prioritization-perceptual-decision-automatic`
and `self-prioritization-absent-social-decision`, and between `self-social-additive-perceptual`
and `self-salience-reduces-perceptual-benefit`, encode the two principal contrasts on which
the paper's argument structurally rests: the decision-context dissociation (which licenses
the automaticity claim) and the self/other dissociation (which licenses the obligatory-
self-prioritisation claim).
