# Verification Provenance

This directory contains reproducible verification scripts and output logs for every paper
in the eLife claim trees project where analyses were actually run against public data deposits.

## Purpose

Every verified claim must be traceable to runnable code. These scripts encode the exact
computations performed during verification — what data was downloaded, what analysis was
run, and how the reproduced values compare to paper-reported values.

## How to Run

Install dependencies once:

```bash
pip install pandas scipy nibabel numpy statsmodels biopython openpyxl lifelines requests
```

Run any script:

```bash
python verification/{paper-slug}/verify.py
```

Each script downloads data from public deposits automatically. Network access required.
Large downloads (neuroimaging data, GitHub repos) may take several minutes.

## Output Format

Each script prints a structured comparison table:

```
CLAIM SLUG                              | PAPER VALUE     | REPRODUCED      | STATUS
lottery-choice-increases-with-ev        | β positive, p<0 | β=0.116, p<0    | PASS
```

- **PASS**: Reproduced value matches paper claim within rounding or at the same qualitative level
- **FAIL**: Reproduced value does not match — see claim file notes for context
- **WARN**: Partial match or methodological difference; claim partially supported

Exit code 0 means all claims verified. Nonzero means at least one mismatch.

## FAIL Interpretation

A FAIL does not necessarily mean the paper is wrong. Common causes:
- Different data file than what the paper used (pre-processed vs raw)
- Model formula difference (mixed-effects vs pooled regression)
- Threshold or ROI definition difference in neuroimaging
- Paper uses a restricted dataset not in the public deposit

See the corresponding claim `.md` file in `claims/{paper}/` for full notes.

## Papers Covered

| Directory | Paper | Claims Verified |
|:----------|:------|:----------------|
| `gadeke-2026-guilt-insula/` | Gadeke et al. 2026 — guilt and anterior insula | 5 |
| `bouyeure-2026-fear-rsa/` | Bouyeure et al. 2026 — fear RSA | 4 |
| `scheller-2026-self-prioritization/` | Scheller et al. 2026 — self-prioritization TVA | 6 |
| `wengert-2026-kcnc1/` | Wengert et al. 2026 — Kcnc1-A421V | 4 |
| `ejdrup-2026-dopamine/` | Ejdrup et al. 2026 — striatal dopamine model | 4 |
| `kolb-2026-igabasnfr2/` | Kolb et al. 2026 — iGABASnFR2 structure | 1 |
| `headley-2026-inhibitory-rhythms/` | Headley et al. 2026 — inhibitory rhythms | 4 |

## Data Sources

All data is downloaded from fully public deposits:
- OpenNeuro (gadeke)
- NeuroVault + OSF (bouyeure)
- OSF (scheller)
- G-Node GIN (wengert)
- GitHub / Zenodo (ejdrup)
- RCSB PDB (kolb)
- GitHub (headley)
