---
uuid: e2b21b80-fbbc-43ea-81ee-b6631c951e16
slug: gad-antibody-peripheral-penetration-only
doi: ~
claim: >
  The anti-GAD antibody (Sigma-Aldrich G5163, rabbit polyclonal) used to detect GABAergic
  neurons in this atlas shows limited tissue penetration restricted to the periphery of the
  whole-mount preparation, reducing the utility of the GABAergic immunoreactivity channel for
  mapping interior neuropil structures; this limitation is acknowledged by the authors and
  affects interpretation of GABA patterns in deep neuropils such as the protocerebral bridge
  and arcuate body interior.
claim-type: assessment
role: methodological
concepts:
  - anti-GAD antibody
  - tissue penetration
  - immunofluorescence limitation
  - whole-mount staining
  - GABAergic neurons
priority: 2026-03-30
epistemic: strong

belongings:
  - relation: requires
    target: protocerebral-bridge-layered-transmitter-architecture
  - relation: requires
    target: globuli-cells-cholinergic-gabaergic

assertions:
  - paper-slug: artiushin-2026-spider-atlas
    doi: 10.7554/eLife.107732
    panel: all (assessment — stated in Results introduction)
    analysis: code inspection + text reading
    dataset: ~
    dataset-doi: ~
    method: text reading
    confidence: strong

reproductions:
  - agent: mainen-z
    date: 2026-03-30
    status: verified
    notes: >
      Confirmed by direct quotation in Results: "GABAergic expression pattern (anti-GAD) is
      aligned and reported, but of a more limited utility as the antibody signal penetration
      is limited to the periphery of the tissue." This is an explicit author-acknowledged
      methodological limitation, not an inference. Verified by text reading; no data access
      required.
---

This assessment claim propagates epistemic weakness to any claim that relies on GABAergic data for interior neuropil structures. The PCB GABA-filling claim (protocerebral-bridge-layered-transmitter-architecture) explicitly depends on this assessment: GAD signal in the PCB interior may be underrepresented. The globuli cell GABAergic attribution (globuli-cells-cholinergic-gabaergic) is similarly bounded. The peripheral GAD signal is still valid and the arcuate body exterior GAD patterns (e.g., posterior ABd layer, Fig12i,ii) are within the region where penetration occurs; those observations are less affected.
