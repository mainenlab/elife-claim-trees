---
uuid: 33883d00-c963-41b8-a13d-ca9e2cb8b1b2
slug: scope-a421v-knockin-mouse
doi: ~
claim: >
  All claims about the cellular, circuit, and behavioral phenotype derive from a
  specific experimental envelope: a novel transgenic mouse with conditional expression
  of the Kcnc1-A421V missense variant, used in the global heterozygous configuration
  (Kcnc1-A421V/+) achieved by crossing to Actb-Cre, and further crossed to
  Pvalb-tdTomato for PV-IN identification (triple transgenic for ex vivo electrophysiology).
  Patch-clamp electrophysiology is performed in two age windows (juvenile P16–21,
  young adult P32–42) on neocortex (predominantly somatosensory), with additional
  recordings in deep cortical layer V and reticular thalamic nucleus. In vivo two-photon
  calcium imaging uses AAV9-syn-jGCaMP8m or soma-tagged jGCaMP8m with S5E2-driven
  tdTomato for PV-ID, in awake head-fixed somatosensory cortex of mice >P50.
  Continuous video-EEG uses DSI wireless telemetry over 2–7 days at P24–48.
  Behavioral testing (Barnes maze, Y-maze) is performed at P35–65. Generalisation
  beyond the heterozygous knock-in configuration (e.g. to homozygous, conditional cell-
  type-restricted, or human-equivalent allelic series), beyond the C57BL/6J background,
  or beyond the specific age windows tested is not established by this paper.
  Verification path: G-Node deposit (https://doi.org/10.12751/g-node.bqni9h) contains
  the analyzed Excel summary for figs 3-7 electrophysiology; raw data plus other
  modalities require the 68 GiB ZIP.
displayClaim: >
  All findings derive from the Kcnc1-A421V/+ heterozygous knock-in mouse on C57BL/6J,
  measured at P16-21 and P32-42 (ex vivo) and >P50 (in vivo); G-Node-deposited.
claim-type: scope
role: scope
concepts:
  - paradigm scope
  - knock-in mouse
  - heterozygous
  - age windows
  - somatosensory cortex
  - reticular thalamic nucleus
priority: 2026-04-20
epistemic: strong
status: N/A
panel: scope

scopes:
  - kcnc1-wet-lab-primary-claims
  - a421v-mice-die-before-122d
  - a421v-weight-reduced-milestones-normal
  - a421v-spatial-learning-working-memory-impaired
  - pv-ins-reduced-k-current-density
  - a421v-kv31-membrane-trafficking-impaired
  - pv-ins-impaired-maximal-firing
  - pv-in-ap-waveform-altered-downstroke-apd50
  - layer-v-pv-ins-subtle-impairment
  - rtn-neurons-impaired-excitability
  - excitatory-neurons-unaffected-juvenile
  - excitatory-neurons-unaffected-adult
  - pv-in-inhibitory-synapse-intact-juvenile
  - pv-in-inhibitory-synapse-altered-adult
  - inhibitory-dysfunction-progresses-to-adulthood
  - in-vivo-hypersynchronous-discharges-mutant-only
  - in-vivo-pv-minus-transient-frequency-increased
  - spontaneous-seizures-and-sudep-kcnc1

belongings: []

assertions:
  - paper-slug: wengert-2026-kcnc1
    doi: 10.7554/eLife.103784
    panel: scope
    analysis: paper Methods (mouse line generation, cohort definitions, preparation and recording details); G-Node deposit https://doi.org/10.12751/g-node.bqni9h
    dataset: https://doi.org/10.12751/g-node.bqni9h
    dataset-doi: 10.12751/g-node.bqni9h
    method: scope statement
    confidence: strong

reproductions: []
---

The scope claim makes explicit the experimental envelope within which the paper's
findings hold. The Kcnc1-A421V/+ heterozygous configuration matches the genetic state
of human patients (who carry the variant on one allele); a homozygous configuration was
not reported and would likely be embryonically lethal given the mortality of the
heterozygotes. The two-window age design (juvenile P16-21 vs young adult P32-42) is
what enables the paper to discriminate cell-autonomous early defects from
developmentally emergent ones — a single-window design could not. The neocortex
(predominantly somatosensory) plus RTN sampling is broad enough to test the
laminar/regional gradient prediction but does not establish the phenotype in
hippocampus, cerebellum, brainstem, or other regions where Kv3.1 is expressed.
Reproduction relies on the G-Node Excel summary for fig3-7 electrophysiology; the
behavioral, immunohistochemistry, in vivo imaging, and EEG data are in the larger
deposit but not in the summary file.
