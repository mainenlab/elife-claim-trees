# Claim Format — ms_mat

A claim is the atomic unit of a paper. Each claim is stored as a structured text file (`<panel-id>.ms_mat.md`) with YAML frontmatter and an optional prose body.

## Claim types

Five types, ordered by epistemic character:

| Type | Definition |
|:-----|:-----------|
| **empirical** | A directly observed result from data (e.g. "firing rate increased by 40% following 5-HT stimulation") |
| **interpretive** | An inference drawn from one or more empirical claims (e.g. "serotonin suppresses locomotion via dorsal raphe projections") |
| **existence** | An assertion that a phenomenon or entity exists (e.g. "a subpopulation of DRN neurons responds selectively to novel stimuli") |
| **synthesis** | A claim integrating results across multiple papers or datasets |
| **assessment** | A methodological or quality claim (e.g. "recording quality was stable across sessions as verified by waveform shape") |

## Frontmatter fields

```yaml
---
panel: fig2c                        # figure panel identifier (fig, table, or analysis block)
claim-type: empirical               # one of: empirical, interpretive, existence, synthesis, assessment
claim: >                            # single declarative sentence — what was shown
  Optogenetic activation of DRN serotonin neurons suppressed ongoing locomotion
  within 500 ms in 8 of 9 mice.
concepts:                           # key terms for indexing
  - serotonin
  - dorsal raphe nucleus
  - locomotion
  - optogenetics
upstream:                           # claim IDs this claim depends on
  - fig1b                           # e.g. the calibration that validates the opsin expression
  - fig2a
data: data/locomotion-traces/       # path or DOI to input data
analysis: scripts/locomotion_suppression.py   # script that generates the result
figure: figures/fig2c.pdf           # rendered output
stats:                              # key statistics
  n: 9
  responders: 8
  latency_ms: 500
  p: 0.004
  test: Wilcoxon signed-rank
epistemic: strong                   # one of: strong, moderate, weak, contested
status: verified                    # one of: verified, unverified, reproduced, failed
---

## Notes

Optional prose elaborating the claim — caveats, alternative interpretations, links to contradicting claims.
```

## Field notes

- **`claim`**: One sentence, active voice, quantitative where possible. Avoid hedges in the sentence itself — use `epistemic` for that.
- **`upstream`**: These are structural dependencies, not citations. If this claim would be invalid if `fig1b` were wrong, list it.
- **`data`**: Point to the raw or minimally processed data, not the figure source files.
- **`analysis`**: The script must be runnable and reproduce `figure` from `data`. This is the verification commitment.
- **`epistemic`**: Your assessment of how strongly this claim is supported by the evidence in this paper alone.
- **`status`**: `verified` = we ran the script and got the same result; `reproduced` = verified on independent data.

## Three-stage pipeline

```
data/ → [analyze] → stats/ → [panel function] → figures/ → [assemble] → ms_mat/
```

1. **Analyze**: Raw data → summary statistics (CSV, HDF5, or JSON). One script per claim.
2. **Panel function**: Statistics → rendered figure panel. Separating these stages means the figure can be regenerated from cached stats without re-running the full analysis.
3. **Assemble**: All claim files + figures → the paper's claim graph.

## Example claim block

A plausible claim from a serotonin-novelty paper:

```yaml
---
panel: fig3b
claim-type: empirical
claim: >
  DRN serotonin neuron firing rates were elevated for 2–4 s following first exposure
  to a novel odor, but not on subsequent presentations of the same odor (n = 6 mice,
  p = 0.003, Wilcoxon signed-rank).
concepts:
  - serotonin
  - novelty
  - olfaction
  - DRN
upstream:
  - fig2a   # confirms fiber placement in DRN
  - fig2c   # confirms GCaMP expression in TPH2+ neurons
data: data/fiber-photometry/novel-odor-sessions/
analysis: scripts/novelty_response_analysis.py
figure: figures/fig3b.pdf
stats:
  n_mice: 6
  window_s: [2, 4]
  p: 0.003
  test: Wilcoxon signed-rank
epistemic: strong
status: verified
---
```
