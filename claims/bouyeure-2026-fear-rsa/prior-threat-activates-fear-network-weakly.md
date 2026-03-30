---
uuid: db8f67a5-9139-44fb-89c1-b30613fbadf5
slug: prior-threat-activates-fear-network-weakly
doi: ~
claim: >
  During reversal, cues that were threatening during acquisition but not currently threatening
  (CS++) vs those that were safe during acquisition and currently threatening (CS-+) still show
  fear network activation — (CS++ > CS+-) > (CS-+ > CS--) — though to a lesser extent than the
  current-threat contrast, suggesting a lingering prior fear memory trace.
claim-type: interpretive
concepts:
  - fear memory trace
  - prior threat value
  - reversal learning
  - lingering fear
  - fear network
priority: 2026-03-30
epistemic: weak

belongings:
  - relation: requires
    target: cs-plus-univariate-fear-network-acquisition
  - relation: supports
    target: dual-strategy-reversal-generalize-plus-specify

assertions:
  - paper-slug: bouyeure-2026-fear-rsa
    doi: 10.7554/eLife.105126
    panel: fig2Biii
    analysis: run_nina_analysis.py
    dataset: https://doi.org/10.17605/OSF.IO/NGWKA
    dataset-doi: 10.17605/OSF.IO/NGWKA
    method: second-level mass-univariate GLM, cluster FWE with 10k permutations (p_uncorr<0.001)
    confidence: weak

reproductions:
  - agent: mainen-z
    date: 2026-03-30
    status: verified:partial
    notes: >
      NeuroVault map downloaded (run2_previousvalencecontrast_TFCE_nlog10p.nii.gz, collection 23032).
      Only 36 significant voxels survive FWE correction (threshold -log10(p)>1.301). Max -log10(p)=1.670
      (p≈0.021, barely significant). Single cluster peak at MNI (-14, -90, -11) — this is
      posterior cortex / occipital region, NOT a canonical fear network region (dACC, amygdala, insula).
      The paper's claim of "fear network activation" for prior-threat cues is NOT confirmed by the
      deposited map: the only surviving cluster is in occipital/posterior cortex, not in any region
      named as a fear-network constituent. The claim was already rated epistemic:weak. This further
      weakens it — the deposited map shows the activation is (a) barely surviving correction at all,
      and (b) not in the claimed anatomical territory. Status: verified:partial — the existence of
      SOME activation is confirmed, but the fear-network location claim is not.
---

The paper explicitly hedges this interpretation: the activation "may reflect the impact of the lingering fear memory trace (remaining from acquisition) and/or the time required to learn contingency changes during reversal." Both accounts predict the same pattern — reduced but present activation for prior-threat cues — so they cannot be distinguished from this contrast alone. Epistemic: weak because the causal interpretation is acknowledged as ambiguous.
