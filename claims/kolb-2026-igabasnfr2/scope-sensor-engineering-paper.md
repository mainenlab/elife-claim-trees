---
uuid: a0fb081f-c245-4323-b15a-60d9496f6359
slug: scope-sensor-engineering-paper
doi: ~
claim: >
  All findings are scoped to a sensor-engineering paper: the screen is wet-lab only
  (cultured rat primary neurons in 96-well format, evoked synaptic release as the
  ΔF/F readout); biophysical characterisation uses purified protein expressed in
  E. coli (stopped-flow, titration, 2P spectra); on-cell measurements use cultured
  neurons under perfusion; biological demonstrations use ex vivo retina (ChAT-Cre
  mice + AAV), acute and organotypic hippocampal slice (biolistic and AAV delivery),
  and in vivo cranial window in mouse barrel cortex (AAV9-hSyn-iGABASnFR2). The
  paper does not test iGABASnFR2 in non-mammalian preparations, in awake behaving
  animals at fine temporal resolution, or in genetic backgrounds beyond standard
  laboratory mouse and rat.
displayClaim: >
  Sensor-engineering scope: in vitro screen (rat primary neurons, 96-well), purified
  protein (E. coli) for biophysics, ex vivo retina + slice, and a single in vivo
  demonstration in mouse barrel cortex. No awake behaviour; no non-mammalian
  preparations.
claim-type: assessment
role: scope
concepts:
  - sensor engineering scope
  - in vitro screen
  - ex vivo demonstration
  - in vivo demonstration
  - preparation envelope
priority: 2026-04-20
epistemic: weak
status: N/A
panel: scope

scopes:
  - mutagenesis-3947-variants-screened
  - igabasnfr2-fourfold-sensitivity-gain
  - igabasnfr2-13fold-expression-increase
  - igabasnfr2n-negative-going-variant
  - igabasnfr2-kinetics-rise-decay
  - crystal-structure-pdb-9d57
  - igabasnfr2-cpgfp-rigid-on-gaba-binding
  - igabasnfr2-oncell-affinity-sevenfold
  - igabasnfr2-single-exponential-kinetics
  - igabasnfr2-2p-compatible
  - igabasnfr2-gaba-selective-specificity
  - igabasnfr2-retina-direction-selectivity
  - igabasnfr2-single-bouton-hippocampus
  - igabasnfr2-invivo-barrel-cortex

belongings: []

assertions:
  - paper-slug: kolb-2026-igabasnfr2
    doi: 10.7554/eLife.108319
    panel: scope
    analysis: ~
    dataset: ~
    dataset-doi: ~
    method: design summary from Methods
    confidence: weak

reproductions:
  - agent: mainen-z
    date: 2026-04-20
    status: verified
    notes: >
      Confirmed by Methods inspection: screening in primary rat neuron cultures (96-well plates,
      QC re-screening of 54 plates per Pass C); purified-protein biophysics in E. coli
      (Applied Photophysics SX20 stopped-flow, Tecan plate reader, Ti-Sapphire 710-1080 nm);
      retina from ChAT-IRES-Cre mice with Cre-Lox AAV; CA3 slice with biolistic transfection,
      CA1 slice with AAV; in vivo barrel cortex AAV9-hSyn injection with cranial window. No
      awake behaviour; the in vivo prep is anaesthetised whisker stimulation. The "qualitative
      enhancement of in vivo performance" claim of the abstract rests on a single in vivo
      preparation (mouse barrel cortex, layers 2-3).
---

This scope claim makes explicit what every quantitative and biological-demonstration claim in the paper inherits about its preparation envelope. The screen is the most heavily replicated component (3,947 variants, n=24 wells per top variant for kinetics); the in vivo demonstration is the least replicated (a single preparation, no group statistics in Fig 6c, with the GABA concentration estimate borrowed from a separate calibration study). The paper does not claim iGABASnFR2 will work in non-mammalian model systems (Drosophila, zebrafish), in awake behaving animals at the fine temporal resolution required to resolve interneuron firing, or in disease/genetic backgrounds. These are appropriate downstream tests for the wider community to perform; the paper deliberately scopes its claims to "tool delivered, demonstrated to enable previously impossible measurements" rather than "tool validated for the full range of likely applications."
