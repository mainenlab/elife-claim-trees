---
paper-slug: sautory-2026-serotonin-novelty
title: "Serotonin neurons encode stimulus novelty and predictive value through dissociable signals"
authors:
  - Solène Sautory
  - Leandro Petreanu
  - Zachary F. Mainen
journal: Mainen Lab
stage: draft
doi: ~
url: ~
github: ~
data: ~
added: 2026-04-26
claim-count: 27
---

## Abstract

Dorsal raphe serotonin neurons respond to novel stimuli with transient excitation that habituates within and across sessions. Using fiber photometry in mice performing a virtual-reality associative-learning task, this study dissects the serotonin signal into components encoding stimulus novelty, reward predictive value, and outcome uncertainty. Habituation follows exponential decay dynamics on day 1 and consolidates across days. In associative-learning mice, habituated responses recover across training as stimuli acquire predictive meaning, while random-group mice show no such recovery. Reward responses decrease selectively in the associative group, consistent with prediction-error encoding. Two dissociable sustained signals independently predict next-day learning: a pre-reward zone signal positively and an image-2-to-background zone signal negatively. These signals are nearly orthogonal and survive motor-speed controls, suggesting that serotonin neurons multiplex novelty, value, and uncertainty through temporally and spatially distinct coding channels.

## Claims

### Empirical results

| Slug | Panel | Epistemic | Summary |
|:-----|:------|:----------|:--------|
| [vr-onset-habituation](vr-onset-habituation.md) | fig1G | strong | DRN serotonin VR onset responses decline from early to late training |
| [accuracy-increases-training](accuracy-increases-training.md) | fig2F | strong | Behavioral accuracy increases across training equivalently for low and high uncertainty corridors |
| [speed-glm-accuracy-correlation](speed-glm-accuracy-correlation.md) | fig2G | strong | Speed-threshold accuracy correlates strongly with GLM classifier accuracy |
| [individual-accuracy-above-chance](individual-accuracy-above-chance.md) | fig2H | strong | Individual mice show heterogeneous final-day accuracy above chance |
| [habituation-exponential-decay](habituation-exponential-decay.md) | fig3C | strong | Habituation follows exponential decay on day 1 with no group difference |
| [within-session-habituation](within-session-habituation.md) | fig3D | strong | Early-trial responses are stronger than late-trial responses across groups |
| [cross-day-habituation](cross-day-habituation.md) | fig3E | strong | Serotonin responses suppressed on day 2 relative to day 1 |
| [baseline-no-group-difference](baseline-no-group-difference.md) | fig3F | strong | Day-1 baseline responses equal between associative and random groups |
| [assoc-recovery-training](assoc-recovery-training.md) | fig4C | strong | Associative group shows within-session adaptation and training-phase recovery |
| [assoc-recovery-confirmed](assoc-recovery-confirmed.md) | fig4D | strong | Associative recovery confirmed: responses drop then return to day-1 levels |
| [random-no-recovery](random-no-recovery.md) | fig4F | strong | Random group: within-session adaptation persists but no recovery |
| [random-flat-training](random-flat-training.md) | fig4G | strong | Random group shows no recovery across training |
| [groups-diverge-training](groups-diverge-training.md) | fig4I | strong | Associative and random groups diverge across training |
| [adaptation-attenuates-training](adaptation-attenuates-training.md) | fig4J | moderate | Within-session adaptation attenuates: trial slopes flatten by final days |
| [assoc-higher-final-responses](assoc-higher-final-responses.md) | fig4K | strong | Associative mice show higher image responses than random at final training |
| [reward-trajectories-diverge](reward-trajectories-diverge.md) | fig5B | strong | Reward responses decrease in associative but not random group |
| [assoc-lower-reward-final](assoc-lower-reward-final.md) | fig5C | strong | Associative mice show lower reward responses than random at final training |
| [transient-no-reward-encoding](transient-no-reward-encoding.md) | fig6C | moderate | Transient image responses show no reward encoding |
| [sustained-prereward-encoding](sustained-prereward-encoding.md) | fig6E | strong | Sustained activity selectively encodes reward in pre-reward zone |
| [prereward-scales-accuracy](prereward-scales-accuracy.md) | fig6G | strong | Pre-reward zone reward encoding scales with behavioral accuracy |
| [transient-uncertainty-trend](transient-uncertainty-trend.md) | fig7C | moderate | Transient responses show trending uncertainty-by-location crossover |
| [sustained-uncertainty-crossover](sustained-uncertainty-crossover.md) | fig7E | strong | Sustained zone activity shows significant uncertainty crossover |
| [uncertainty-scales-accuracy](uncertainty-scales-accuracy.md) | fig7G | strong | Image-2 zone uncertainty encoding scales with behavioral accuracy |
| [dissociable-signals-predict-learning](dissociable-signals-predict-learning.md) | figXB | strong | Two dissociable signals independently predict next-day accuracy |
| [prereward-assoc-specific](prereward-assoc-specific.md) | figXC | strong | Pre-reward learning-predictive effect is associative-group specific |
| [prereward-robust-loo](prereward-robust-loo.md) | figXD | moderate | Pre-reward effect robust to leave-one-out exclusion |
| [signals-survive-speed-control](signals-survive-speed-control.md) | figXF | strong | Both signals survive simultaneous entry and speed control |

### Supplementary claims

| Slug | Panel | Epistemic | Summary |
|:-----|:------|:----------|:--------|
| [vr-onoff-within-session](vr-onoff-within-session.md) | fig1SD | moderate | VR on/off responses decline within session |
| [vr-onoff-across-days](vr-onoff-across-days.md) | fig1SE | moderate | VR on/off responses decrease across days |
| [vr-off-duration-no-effect](vr-off-duration-no-effect.md) | fig1SF | moderate | VR off duration does not modulate response magnitude |
| [photobleaching-control](photobleaching-control.md) | fig1SH | strong | Within-session adaptation persists regardless of LED condition |

## Dependency graph

```
F1G vr-onset-habituation
  |-- validated by <-- S1D vr-onoff-within-session
  |     |-- validated by <-- S1E vr-onoff-across-days
  |     |-- validated by <-- S1H photobleaching-control
  |     '-- scoped by <-- S1F vr-off-duration-no-effect

F2F accuracy-increases-training
  |-- validated by <-- F2G speed-glm-accuracy-correlation
  '-- validated by <-- F2H individual-accuracy-above-chance

F3C habituation-exponential-decay
  |-- requires --> F3D within-session-habituation
  |     |-- requires --> F3E cross-day-habituation
  |     '-- requires --> F3F baseline-no-group-difference

F4C assoc-recovery-training (extends F3D, F3E)
  |-- requires --> F4D assoc-recovery-confirmed
  |-- contrasted by --> F4F random-no-recovery
  |     '-- requires --> F4G random-flat-training
  |-- requires --> F4I groups-diverge-training
  |     '-- requires --> F4K assoc-higher-final-responses
  '-- requires --> F4J adaptation-attenuates-training

F5B reward-trajectories-diverge (extends F4I)
  '-- requires --> F5C assoc-lower-reward-final

F6C transient-no-reward-encoding (extends F4C)
  '-- requires --> F6E sustained-prereward-encoding
        '-- requires --> F6G prereward-scales-accuracy

F7C transient-uncertainty-trend (extends F6C)
  '-- requires --> F7E sustained-uncertainty-crossover
        '-- requires --> F7G uncertainty-scales-accuracy

FXB dissociable-signals-predict-learning (extends F6E, F7E)
  |-- requires --> FXC prereward-assoc-specific
  |-- requires --> FXD prereward-robust-loo
  '-- requires --> FXF signals-survive-speed-control
```

## Reproduction status

Verification status: not yet attempted (added 2026-04-26, agent: mainen-z, ingest-only). Analysis scripts are in R at the private `5HT-novelty` repository. No public code or data deposit yet.

| Status | Count | Claims |
|:-------|:------|:-------|
| unknown | 27 | all (no reproduction attempted at ingest) |
