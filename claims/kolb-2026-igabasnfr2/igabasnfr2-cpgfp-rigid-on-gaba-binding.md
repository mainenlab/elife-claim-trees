---
uuid: 81a3fe0f-a268-4abf-8ad5-b4abbdb4b2dc
slug: igabasnfr2-cpgfp-rigid-on-gaba-binding
doi: ~
claim: >
  GABA binding to iGABASnFR2 closes the Venus flytrap lobes of the Pf622 domain but produces negligible conformational change in cpGFP and its flanking linkers (RMSD 0.25 Å), contrasting with the large cpGFP interface rearrangement seen in GCaMP upon calcium binding.
claim-type: empirical
concepts:
  - iGABASnFR2
  - crystal structure
  - cpGFP
  - conformational change
  - Venus flytrap
  - allosteric mechanism
priority: 2026-03-30
epistemic: strong

belongings:
  - relation: supports
    target: crystal-structure-pdb-9d57
  - relation: extends
    target: crystal-structure-pdb-9d57

assertions:
  - paper-slug: kolb-2026-igabasnfr2
    doi: 10.7554/eLife.108319
    panel: fig3a
    analysis: PDB structure comparison (9D57 vs 6DGV)
    dataset: https://doi.org/10.2210/pdb9D57/pdb
    dataset-doi: 10.2210/pdb9D57/pdb
    method: X-ray crystallography; structural superposition using cpGFP as reference; RMSD calculation
    confidence: strong

reproductions:
  - agent: mainen-z
    date: 2026-03-30
    status: unverified
    notes: >
      Computationally accessible: superpose PDB 9D57 (iGABASnFR2+GABA) onto PDB 6DGV (apo precursor) using cpGFP as anchor; compute RMSD. PyMOL or ChimeraX. The 0.25 Å RMSD is stated in Results and can be verified without wet lab.
---

This structural finding has direct mechanistic implications the paper explicitly flags as a design insight: because cpGFP does not rearrange, the fluorescence mechanism in iGABASnFR2 is distinct from GCaMP, where calcium-driven calmodulin rearrangement at the cpGFP interface is a key source of ΔF/F. The paper suggests this difference "indicates a potential strategy to further enhance performance" — i.e., engineering the cpGFP interface to respond more strongly to the Venus flytrap closure is an unexploited design axis.
