---
uuid: b066dc9f-dd75-43a8-9692-1005de9d2d30
slug: spontaneous-seizures-and-sudep-kcnc1
doi: ~
claim: >
  8 of 12 Kcnc1-A421V/+ mice exhibit convulsive spontaneous seizures on video-EEG
  (mean 0.62±0.24/day, duration 32.4±15.7 s) with zero seizures in 4/4 WT controls;
  4 seizure-induced sudden death events are captured, each preceded by a generalized
  tonic-clonic seizure with hindlimb extension, recapitulating SUDEP in human KCNC1 DEE.
claim-type: empirical
concepts:
  - spontaneous seizures
  - SUDEP
  - video-EEG
  - generalized tonic-clonic
  - KCNC1
  - epileptic encephalopathy
priority: 2026-03-30
epistemic: strong

belongings:
  - relation: supports
    target: a421v-mice-die-before-122d
  - relation: extends
    target: in-vivo-hypersynchronous-discharges-mutant-only

assertions:
  - paper-slug: wengert-2026-kcnc1
    doi: 10.7554/eLife.103784
    panel: fig9A, fig9B, fig9C
    scope: in-vivo
    analysis: G-Node analysis code
    dataset: https://doi.org/10.12751/g-node.bqni9h
    dataset-doi: 10.12751/g-node.bqni9h
    method: continuous video-EEG, DSI wireless telemetry, P24–48, 2–7 day recordings
    confidence: strong

reproductions:
  - agent: mainen-z
    date: 2026-03-30
    status: unverified:no-data
    notes: >
      Additional phenotypes: 8/12 Kcnc1-A421V/+ mice also showed runs of epileptiform
      spikes without behavioral correlate (duration 14.5±0.7 s). Myoclonic jerks (large
      EEG spikes + diffuse body jerks) also observed. SUDEP events: 4 captured on video-EEG
      + 2 on video only. The paper classifies seizure types by EEG + behavior criteria;
      SUDEP is defined as tonic-clonic with hindlimb extension followed by EEG suppression.
---

The SUDEP finding is the direct mechanistic link to the survival curve in fig1. The tonic
hindlimb extension distinguishes fatal from nonfatal seizures — a behaviorally discriminable
marker that may have translational relevance for SUDEP risk stratification in KCNC1 patients.
