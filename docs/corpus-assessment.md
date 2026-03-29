# Prototype Corpus Assessment — eLife Papers

**Date:** 2026-03-26
**Purpose:** Data/code availability audit and reproduction difficulty estimate for the 10-paper prototype corpus.

---

## Summary Table

| # | Article | Year | Type | Figs | Analysis | Data | Code | Repro |
|---|---------|------|------|------|----------|------|------|-------|
| 1 | [Deep learning pipeline for neurovascular coupling (95525)](https://elifesciences.org/articles/95525) | 2026 | Research | 9+2app | Deep learning / 2P microscopy | Open (FRDR) | Open (GitHub/Python) | Medium |
| 2 | [Insula & STS in interpersonal guilt (105391)](https://elifesciences.org/articles/105391) | 2026 | Research | 5+2supp | fMRI + computational model | Open (OpenNeuro) | Open (GitHub/MATLAB) | Medium |
| 3 | [iGABASnFR2 GABA sensor (108319)](https://elifesciences.org/articles/108319) | 2026 | Research | 6+supp | Mutagenesis / imaging / structural | Open (Zenodo + PDB) | Open (Zenodo) | Hard |
| 4 | [Self-association and attentional selection (100932)](https://elifesciences.org/articles/100932) | 2026 | Research | 6+supp | Psychophysics / Bayesian modelling | Open (OSF) | Open (OSF notebooks) | Easy |
| 5 | [Cue & context representations in fear learning (105126)](https://elifesciences.org/articles/105126) | 2026 | Research | 5 | fMRI / RSA | Open (NeuroVault + OSF) | Open (GitHub Python/R/MATLAB) | Medium |
| 6 | [Inhibitory rhythms and dendritic integration (95562)](https://elifesciences.org/articles/95562) | 2026 | Research | 10+2supp | Computational modelling | Open (Dryad) | Open (GitHub + ModelDB) | Easy |
| 7 | [KCNC1 epileptic encephalopathy mouse model (103784)](https://elifesciences.org/articles/103784) | 2026 | Research | 4+6supp | Electrophysiology / genetics | Open (G-Node) | Open (G-Node) | Hard |
| 8 | [3D spider brain immunofluorescence atlas (107732)](https://elifesciences.org/articles/107732) | 2026 | Research | 13+videos | Confocal / atlas registration | Open (BIL) | Open (GitHub/Python) | Hard |
| 9 | [Striatal dopamine dynamics model (105214)](https://elifesciences.org/articles/105214) | 2026 | Research | 4+supp | Computational modelling | Open (Zenodo) | Open (GitHub Jupyter/Python) | Easy |
| 10 | [Foveal feedback from peripheral saccade targets (107053)](https://elifesciences.org/articles/107053) | 2026 | Research | 4+2supp | fMRI / MVPA | Open (OpenNeuro) | Open (GitHub/Python) | Medium |

---

## Paper-by-Paper Assessment

### 1. Deep learning pipeline for neurovascular coupling (eLife 95525)

**Title:** A deep learning pipeline for mapping in situ network-level neurovascular coupling in multi-photon fluorescence microscopy
**Authors:** Rozak, Mester, Attarpour, Dorr, Patel, Koletar, Hill, McLaurin, Goubran, Stefanovic
**Year:** 2026 | **Type:** Research Article | **Subjects:** Neuroscience, Physics of Living Systems
**Keywords:** deep learning, two-photon microscopy, neurovascular coupling, microvascular network, optogenetics

**Data availability:** Open. Training/test images deposited at the Federated Research Data Repository: https://doi.org/10.20383/103.01588

**Code availability:** Open. GitHub: https://github.com/AICONSlab/novas3d — Python, includes `pyproject.toml`, `Tutorial.ipynb`, ReadTheDocs config. Updated 2026-03-23. Well-structured installable package.

**Figures:** 9 main + 2 appendix = 11 total. 3 tables, 5 supplementary files.

**Analysis type:** Deep learning (UNet, UNETR) for volumetric vessel segmentation, followed by graph-theoretic network analysis of vascular topology. Optogenetic stimulation experiments. Claims are about model performance (Dice scores, precision/recall) and network-level neurovascular coupling metrics.

**Claim structure:** Mixed explicit/quantitative. Segmentation model benchmarks (Dice, precision, recall vs baseline ilastik) are clean panel-level claims. Network efficiency and coupling metrics require running the full pipeline on deposited data. ~20+ panel claims across 9 figures.

**Reproduction difficulty: Medium.** The pipeline is a full Python package with tutorial notebook. However, training the DL model requires GPU resources, and the input data are volumetric microscopy stacks (potentially large). For *claim extraction* (not full retraining), the pre-trained model can be run on the deposited test set. The graph metrics in Figs 6–9 are the most tractable — they depend only on the output of segmentation, not retraining.

**Key risks:** Large volumetric image files (FRDR may require registration); GPU required for inference at scale; some MATLAB code present alongside Python (`gen_skeletons_warped_single.m`). Quick win: Tutorial.ipynb appears to walk through the full pipeline.

---

### 2. Insula & STS contributions to interpersonal guilt (eLife 105391)

**Title:** Contributions of insula and superior temporal sulcus to interpersonal guilt and responsibility in social decisions
**Authors:** Gädeke, Willems, Ahmed, Weber, Hurlemann, Schultz
**Year:** 2026 | **Type:** Research Article | **Subjects:** Neuroscience
**Keywords:** fMRI, social decision-making, guilt, responsibility, computational modelling

**Data availability:** Open. Full raw anonymised dataset on OpenNeuro: https://doi.org/10.18112/openneuro.ds005588.v1.0.0

**Code availability:** Open. GitHub: https://github.com/BonnSocialNeuroscienceUnit/ResponsibilityExperiment — MATLAB. Contains behavioural data, group fMRI results maps, experiment code, analysis scripts, figure-generation code. Updated 2026-03-12. Repo has BehaviouralData/, Code/, fMRIresults/ directories. No requirements file visible but SPM12/MATLAB dependency noted in article.

**Figures:** 5 main + 2 supplements. 13 tables. One supplementary file.

**Analysis type:** fMRI (ROI + mass univariate), model-based fMRI using a computational happiness/responsibility model, functional connectivity (PPI). Behavioural modelling uses expected utility and mixed-effects regression.

**Claim structure:** Claims embedded in narrative but grounded in quantitative results (beta coefficients, t-statistics, connectivity values). Computational model parameters (responsibility-modulated happiness) are the key novel claim. ~15 panel-level claims across 5 figures.

**Reproduction difficulty: Medium.** Behavioural claims are straightforward to reproduce from OSF data using the provided MATLAB scripts. fMRI claims require SPM12 and ~50–100GB of raw BOLD data from OpenNeuro (anonymised, accessible). Group results maps are pre-computed in the repo, enabling figure reproduction without rerunning full fMRI preprocessing. Key risk: SPM12 dependency (MATLAB-based); fMRI preprocessing pipeline takes compute time.

**Key risks:** MATLAB + SPM12 required; group-level fMRI results available but first-level GLM requires OpenNeuro data download. Quick win: group fMRI results and behavioural data are in the repo — figure reproduction may be possible without full re-analysis.

---

### 3. iGABASnFR2 — improved GABA sensor (eLife 108319)

**Title:** iGABASnFR2 is an improved genetically encoded protein sensor of GABA
**Authors:** Kolb, Hasseman, Matsumoto, Jensen, Kopach, Arthur, Zhang, Tsang, Reep, Tsegaye, Zheng, Patel, Looger, Marvin, Korff, Rusakov, Yonehara, GENIE Project Team, Turner
**Year:** 2026 | **Type:** Research Article | **Subjects:** Neuroscience
**Keywords:** genetically encoded sensor, GABA, synaptic transmission, fluorescent protein, mutagenesis

**Data availability:** Open. Source data and analysis code: https://doi.org/10.5281/zenodo.17971101. Crystal structure deposited at PDB: https://doi.org/10.2210/pdb9D57/pdb (structure 9D57).

**Code availability:** Open. All analysis code on Zenodo: https://doi.org/10.5281/zenodo.17971100. No GitHub repo identified; code lives entirely on Zenodo. Language likely Python/MATLAB (common in GENIE consortium work).

**Figures:** 6 main + several supplements (Figure 4 has 3 supplements; Figure 1 has 1). One source data file (crystallographic statistics, DOCX). One additional file.

**Analysis type:** High-throughput mutagenesis screening, fluorescence imaging in cultured neurons and retinal tissue, stopped-flow kinetics, X-ray crystallography, two-photon excitation spectroscopy. This is primarily a *tools* paper with biophysical characterisation claims.

**Claim structure:** Claims are explicit and quantitative: sensitivity (ΔF/F), rise/decay time constants, Kd values, SNR comparisons vs iGABASnFR1. Structural claims rest on the PDB entry. ~15 panel-level claims, but many require specialised equipment (two-photon microscope, stopped-flow apparatus) to reproduce from scratch.

**Reproduction difficulty: Hard.** The biophysical characterisation (kinetics, spectra) requires wet lab work and specialist equipment. The analysis of existing data — time-course traces, dose-response curves — is reproducible from the Zenodo source data. PDB structure can be re-analysed computationally. The key barrier is that most primary claims (sensitivity improvements) depend on experimental measurements that cannot be re-derived from deposited data alone; they require the sensor constructs.

**Key risks:** Many claims require the physical sensor construct; stopped-flow and 2P measurements are not reproducible from code alone; Zenodo DOIs are newly minted (zenodo.17971100 — very high number, likely just deposited). Quick win: PDB structure analysis and dose-response curve reproduction from Zenodo source data.

---

### 4. Self-association and attentional selection (eLife 100932)

**Title:** Self-association enhances early attentional selection through automatic prioritization of socially salient signals
**Authors:** Scheller, Tünnermann, Fredriksson, Fang, Sui
**Year:** 2026 | **Type:** Research Article | **Subjects:** Computational and Systems Biology, Neuroscience
**Keywords:** attentional selection, self-prioritization, Theory of Visual Attention (TVA), Bayesian modelling, temporal order judgement

**Data availability:** Open. OSF project (analysis notebooks + data): https://osf.io/a62df. Preregistration: https://osf.io/ehu75.

**Code availability:** Open. OSF project (https://osf.io/a62df) hosts analysis notebooks. Study is preregistered (2021). Language likely R or Python (Bayesian hierarchical modelling context). Notebooks appear to be the primary analysis artefact.

**Figures:** 6 main + 5 supplements = 11 total. 2 tables, 1 additional file.

**Analysis type:** Psychophysics (temporal order judgement, perceptual matching). Hierarchical Bayesian estimation of Theory of Visual Attention (TVA) parameters (processing rate `v`, VSTM capacity `K`, threshold `t0`). Two preregistered experiments. Claims are about TVA parameter differences between self-relevant and non-self-relevant stimuli.

**Claim structure:** Highly explicit — TVA parameter estimates with posterior distributions and credible intervals. Panel-level claims map directly to model parameter comparisons. ~15 panel claims including individual participant data in supplements. Behavioural data are the sole input.

**Reproduction difficulty: Easy.** Psychophysics data are lightweight (trial-level response data). Hierarchical Bayesian model in R or Python from OSF notebooks. No neuroimaging, no hardware dependency beyond the notebook environment. Preregistered, so the analysis plan is documented in advance. The main risk is getting the TVA modelling environment to run, but no exotic dependencies expected.

**Key risks:** TVA modelling library may require specific R package versions. OSF can be slow to download. Otherwise the reproduction path is clean. Quick win: OSF notebooks likely self-contained; run directly on the deposited data.

---

### 5. Cue and context representations in fear learning (eLife 105126)

**Title:** Distinct representational properties of cues and contexts shape fear and reversal learning
**Authors:** Bouyeure, Pacheco-Estefan, Jacob, Kobelt, Fellner, Rose, Axmacher
**Year:** 2026 | **Type:** Research Article | **Subjects:** Neuroscience
**Keywords:** fMRI, fear learning, reversal learning, representational similarity analysis, neural representations

**Data availability:** Open. Statistical maps on NeuroVault: https://identifiers.org/neurovault.collection:23032. Individual-level data on OSF: https://doi.org/10.17605/OSF.IO/NGWKA.

**Code availability:** Open. GitHub: https://github.com/AntoineBouyeure/Representational-properties-of-cues-and-contexts-shape-fear-learning-and-reversal — Python, R, MATLAB scripts. Archived at Software Heritage. Contains `requirements.txt` and `run_nina_analysis.py`. Updated 2026-03-13.

**Figures:** 5 main figures. 2 supplementary files. No source code directly attached to figures.

**Analysis type:** fMRI with representational similarity analysis (RSA). Custom searchlight RSA measuring cue generalization, item stability, and context-specificity. Behavioural fear ratings alongside neural measures. 3-phase paradigm: acquisition, reversal, test.

**Claim structure:** Claims are about RSA pattern similarity across phases — values are correlation coefficients in representational space. Narrative-embedded but quantitative (e.g., "cue generalization increases during acquisition but not reversal"). NeuroVault has pre-computed group statistical maps, enabling figure reproduction. ~15 panel claims.

**Reproduction difficulty: Medium.** RSA pipeline requires SPM12 (MATLAB) for fMRI preprocessing plus custom Python scripts. Group-level statistical maps are on NeuroVault — figures can likely be regenerated from these without rerunning GLMs. The `requirements.txt` and `run_nina_analysis.py` suggest a Python entry point. Risk: multi-language pipeline (R/Python/MATLAB) increases environment complexity.

**Key risks:** Multi-language stack; SPM12 for preprocessing; individual data on OSF but first-level GLMs take time. Quick win: NeuroVault statistical maps + Python RSA scripts likely sufficient for figure reproduction.

---

### 6. Inhibitory rhythms and dendritic integration (eLife 95562)

**Title:** Spatially targeted inhibitory rhythms differentially affect neuronal integration
**Authors:** Headley, Latimer, Aberbach, Nair
**Year:** 2026 | **Type:** Research Article | **Subjects:** Neuroscience
**Keywords:** cortical circuits, pyramidal neurons, inhibitory interneurons, dendritic integration, beta and gamma oscillations

**Data availability:** Open. Raw simulation data on Dryad: https://doi.org/10.5061/dryad.v6wwpzhb8

**Code availability:** Open. Two repositories:
- ModelDB (simulation code): https://modeldb.science/2019883
- GitHub (analysis code): https://github.com/dbheadley/InhibOnDendComp — Jupyter Notebook, includes `environment.yml`, `data/`, `figures/`, `scripts/`, `tests/` directories. Updated 2026-03-12. Well-structured.

**Figures:** 10 main + 2 supplements = 12 total. 2 tables, 1 additional file.

**Analysis type:** Computational neuroscience — biophysically detailed compartmental model of a layer 5 pyramidal neuron (NEURON simulator likely). Claims are about how beta and gamma oscillatory inhibition (perisomatic vs distal dendritic) differentially gates dendritic integration (Na+, NMDA, Ca2+ spikes) as a function of phase and frequency.

**Claim structure:** Highly explicit — simulation outputs are deterministic given the model code and parameters. Claims take the form "inhibitory rhythm at frequency X, phase Y, targeting location Z suppresses spike type W by N%". Each figure panel maps to a specific parameter sweep. ~20+ panel-level claims, all reproducible by re-running simulations.

**Reproduction difficulty: Easy.** Computational model with full code on ModelDB + analysis on GitHub. `environment.yml` provided for conda environment. Dryad data deposit covers pre-run simulation outputs (avoids needing to re-run NEURON). All claims are in-silico with no wet lab component. The main unknown is whether ModelDB/NEURON environment is straightforward to configure, but ModelDB is standard infrastructure in computational neuroscience.

**Key risks:** NEURON simulator installation (platform-dependent); Dryad data files may be large. Quick win: Dryad simulation data + GitHub analysis notebooks — reproduce all figures without re-running NEURON.

---

### 7. KCNC1 epileptic encephalopathy mouse model (eLife 103784)

**Title:** Impaired excitability of fast-spiking neurons in a novel mouse model of KCNC1 epileptic encephalopathy
**Authors:** Wengert, Liebergall, Jimenez, Cheng, Markwalter, Clatot, Hong, Arias, Marsh, Zhang, Tsetsenis, Somarowthu, Akizu, Goldberg
**Year:** 2026 | **Type:** Research Article | **Subjects:** Genetics and Genomics, Neuroscience
**Keywords:** KCNC1, Kv3.1, epileptic encephalopathy, parvalbumin interneurons, fast-spiking neurons

**Data availability:** Open. Electrophysiological data and analysis code deposited at G-Node: https://doi.org/10.12751/g-node.bqni9h

**Code availability:** Open. Analysis code co-deposited with data at G-Node (same DOI). No separate GitHub repo identified.

**Figures:** 4 main + 6 supplements = 10 total. 3 tables, 1 additional file. 2 videos.

**Analysis type:** In vivo and in vitro electrophysiology (patch-clamp recordings of PV interneurons), two-photon calcium imaging, immunohistochemistry, behavioural assessment (Morris water maze, open field, seizure monitoring), survival analysis. Knock-in mouse model carrying human KCNC1-A421V variant.

**Claim structure:** Claims are embedded in experimental narrative — e.g., "A421V mice show reduced potassium current density", "PV-INs exhibit impaired maximal firing frequency". Patch-clamp traces are the primary evidence. ~15 panel claims but many depend on raw electrophysiology traces and statistical summaries.

**Reproduction difficulty: Hard.** Primary claims require wet lab work (patch-clamp, 2P calcium imaging, mouse colony). The deposited electrophysiology data and analysis code allow reproduction of statistical summaries and figures from the raw traces, but the data itself is from a proprietary mouse model (knock-in generated for this study). G-Node repositories can be accessed but may require GIN (G-Node Infrastructure) client. Computational claims (Kv3.1 HEK cell model in Fig 3 supp) may be more tractable.

**Key risks:** Proprietary knock-in mouse model (Kcnc1-A421V/+); large raw electrophysiology files; 2P calcium imaging data; G-Node access requires GIN client setup; multi-modal experimental design. No quick win — all primary claims require the specific mouse line or the raw data files from G-Node.

---

### 8. 3D spider brain immunofluorescence atlas (eLife 107732)

**Title:** A three-dimensional immunofluorescence atlas of the brain of the hackled-orb weaver spider, *Uloborus diversus*
**Authors:** Artiushin, Corver, Gordus
**Year:** 2026 | **Type:** Research Article | **Subjects:** Neuroscience
**Keywords:** spider neuroanatomy, brain atlas, immunofluorescence, orb-web building, neurotransmitters, neuropeptides

**Data availability:** Open. 3D volumes deposited at Brain Image Library (BIL): https://doi.org/10.35077/ace-owl-gum. TIFF stacks of all immunostained volumes available.

**Code availability:** Open. GitHub: https://github.com/GordusLab/Artiushin-elastix-eLife — Python, elastix-based image registration pipeline. Updated 2026-01-29. Contains README and registration pipeline.

**Figures:** 13 main + numerous supplementary videos (3 per figure for several figures). Extensive 3D rendering and video content. 1 additional file.

**Analysis type:** Confocal microscopy → 3D volumetric image registration (elastix) → immunofluorescence atlas construction. Comparative neuroanatomy across 9 neurotransmitter/neuropeptide channels. Primary claims are anatomical (presence/distribution of neurotransmitters in identified neuropils).

**Claim structure:** Claims are descriptive anatomical observations: "neuropil X is immunoreactive for neurotransmitter Y". These are observational, not statistical in the usual sense — the evidence is the 3D images themselves. Panel-level claims: ~20+ (13 figures × multiple channels per figure). Reproducing the atlas means downloading large TIFF stacks (~tens of GB) and re-running elastix registration.

**Reproduction difficulty: Hard.** The primary evidence is 3D volumetric microscopy data. Downloading and viewing the atlas via BIL requires handling large TIFF stacks. Registration pipeline (elastix) is non-trivial to configure. Claims are inherently observational/anatomical — a computational "reproduction" means re-registering volumes, not recomputing statistics. The atlas viewer linked via BIL may allow interactive inspection without full download.

**Key risks:** Very large data volumes (BIL TIFF stacks); elastix registration pipeline requires careful parameter tuning; anatomical claims are observational and not statistical; 13 figures × multiple 3D renderings + videos makes scope large. No computational quick win — this is fundamentally an imaging paper.

---

### 9. Striatal dopamine dynamics computational model (eLife 105214)

**Title:** Computational modelling identifies key determinants of subregion-specific dopamine dynamics in the striatum
**Authors:** Ejdrup, Dreyer, Lycas, Jørgensen, Robbins, Dalley, Herborg, Gether
**Year:** 2026 | **Type:** Research Article | **Subjects:** Computational and Systems Biology, Neuroscience
**Keywords:** dopamine, striatum, computational modelling, receptor kinetics, dSTORM

**Data availability:** Open. Zenodo: https://doi.org/10.5281/zenodo.18046987 — simulation data, dSTORM microscopy localization files, drift correction files.

**Code availability:** Open. GitHub: https://github.com/GetherLab/striatal-dopamine-modelling — Python/Jupyter. Notebooks for each figure: `figure_1.ipynb`, `figure_2.ipynb`, `figure_3.ipynb`, `figure_4.ipynb` plus `sim_functions.py`, `sim_functions_pr.py`. Updated 2025-05-09 (repo predates publication, meaning it's been maintained longer). Contains data/ directory in repo.

**Figures:** 4 main (Figure 1 has 10 panels A–J; Figure 1 has 2 supplementary figures) + source code ZIPs per figure. 4 tables, 1 supplementary file. 2 videos.

**Analysis type:** 3D stochastic simulation of dopamine release, diffusion, and receptor binding in a realistic striatal geometry (~40,000 release sites from 150 neurons, 100 µm³). Claims are about how DAT density, receptor kinetics, and burst firing patterns produce subregion-specific dynamics. Supplementary dSTORM data validates model geometry.

**Claim structure:** Highly explicit — all claims are model outputs that can be directly re-generated by running the Jupyter notebooks. Panel-level claims (~20+ across Fig 1 A–J and supplements) each map to a specific simulation condition. No wet lab data required to reproduce the modelling claims (dSTORM data validates geometry but is not the primary result).

**Reproduction difficulty: Easy.** Four Jupyter notebooks corresponding to figures, `sim_functions.py` as a library, simulation data in the repo and on Zenodo. Python-based. Maintained repo (updated 2025). The main risk is compute time for running the 3D stochastic simulations, but Zenodo deposits pre-run data for the key figures.

**Key risks:** 3D simulation may be computationally intensive; Zenodo DOI (18046987) is very high — may be newly deposited. Quick win: notebooks run directly on pre-computed simulation data from the data/ directory.

---

### 10. Foveal feedback from peripheral saccade targets (eLife 107053)

**Title:** Feedback of peripheral saccade targets to early foveal cortex
**Authors:** Kämmer, Kroell, Knapen, Rolfs, Hebart
**Year:** 2026 | **Type:** Research Article | **Subjects:** Neuroscience
**Keywords:** fMRI, visual cortex, saccadic eye movements, foveal feedback, MVPA, decoding

**Data availability:** Open. OpenNeuro: https://doi.org/10.18112/openneuro.ds005933.v1.0.0. Preregistration: https://osf.io/rxacd/

**Code availability:** Open. GitHub: https://github.com/Lucakaemmer/FovealFeedback — Python. Contains `analysis_eye/` and `experimental_code/` directories. Updated 2026-01-22. No requirements file visible but Python-based (standard neuroimaging stack expected: nilearn, sklearn, nibabel).

**Figures:** 4 main + 2 supplements. MDAR checklist included. Preregistered design.

**Analysis type:** gaze-contingent fMRI (block design). Multivariate decoding (cross-validated classification) of saccade target identity from foveal V1 BOLD signal. Cross-decoding between experimental and control conditions. Retinotopic mapping for eccentricity-dependent ROI definition. Neurosynth-based cortical masks.

**Claim structure:** Claims are quantitative decoding accuracies with statistical tests: "saccade target identity can be decoded from foveal V1 above chance" (the key claim). Figures show decoding accuracy as a function of eccentricity and condition. ~10 panel claims. Preregistration documents planned analysis precisely.

**Reproduction difficulty: Medium.** fMRI preprocessing + MVPA pipeline is standard Python (nilearn/sklearn). OpenNeuro dataset is accessible. GitHub code maps to figures. Preregistered design means the analysis plan is unambiguous. Key risk: fMRI data download is substantial (OpenNeuro), and MVPA decoding across many cross-validation folds on whole-brain data takes compute time. Group-level results may be pre-computed.

**Key risks:** fMRI data download from OpenNeuro; MVPA compute time; gaze-contingent paradigm requires understanding the trial structure carefully. Quick win: preregistration + GitHub code provide a clear, documented path — if any pre-computed decoding maps are in the repo, figure reproduction is immediate.

---

## Difficulty Ranking (Easiest → Hardest)

| Rank | Paper | Rationale |
|------|-------|-----------|
| 1 | **#9 — Dopamine dynamics model (105214)** | Pure simulation, Jupyter notebooks per figure, pre-computed data in repo, Python. Most self-contained path to reproduction. |
| 2 | **#6 — Inhibitory rhythms model (95562)** | Deterministic NEURON simulation, `environment.yml`, Dryad data avoids re-running, ModelDB + GitHub. |
| 3 | **#4 — Self-association & attention (100932)** | Psychophysics only, OSF notebooks, lightweight data, preregistered analysis, no neuroimaging. |
| 4 | **#10 — Foveal feedback fMRI (107053)** | Standard Python MVPA pipeline, OpenNeuro data, preregistered, GitHub code well-organised. |
| 5 | **#2 — Guilt & responsibility fMRI (105391)** | OpenNeuro data + GitHub with group results pre-computed; MATLAB/SPM12 dependency is main friction. |
| 6 | **#5 — Fear learning RSA (105126)** | NeuroVault + OSF + GitHub; multi-language stack (Python/R/MATLAB) increases setup complexity. |
| 7 | **#1 — Neurovascular DL pipeline (95525)** | Python package with tutorial; GPU useful; volumetric data from FRDR; DL training expensive. |
| 8 | **#3 — iGABASnFR2 sensor (108319)** | Quantitative biophysics claims require experimental apparatus; Zenodo code/data covers analysis only. |
| 9 | **#8 — Spider brain atlas (107732)** | 3D anatomy with very large TIFF stacks; claims are observational not statistical; 13-figure scope. |
| 10 | **#7 — KCNC1 epilepsy model (103784)** | Wet lab (patch-clamp, 2P Ca imaging, mouse colony); G-Node data accessible but primary claims require the knock-in mouse. |

---

## Recommendation

**Start with papers 9 and 6.**

**Paper 9 (Ejdrup et al., striatal dopamine model, eLife 105214)** is the clearest candidate for a first reproduction. Every primary figure has a corresponding Jupyter notebook, the simulation functions are factored into a reusable library (`sim_functions.py`), and the Zenodo deposit provides pre-computed data so the notebooks can be run without re-executing multi-hour simulations. The claims are explicit computational outputs — dopamine concentration profiles, receptor occupancy curves — where "reproducing a claim" means running a notebook cell and comparing a curve, not reinterpreting a brain image. There is no wet lab component and no proprietary data. The repo has been maintained since before publication.

**Paper 6 (Headley et al., inhibitory rhythms, eLife 95562)** is similarly clean. Deterministic biophysical model, `environment.yml` for reproducible environment, Dryad deposit for simulation data, ModelDB for the NEURON model code, and a well-structured GitHub repo with `scripts/`, `data/`, `figures/`, and `tests/` directories. Claims are phase- and frequency-dependent suppression ratios — each is a number produced by a simulation run. With the Dryad simulation outputs, all analysis and figure-generation code can be run without re-running NEURON. The paper has 10 main figures offering a rich set of claims to trace.

Both papers represent the ideal case for prototype claim tree construction: explicit computational claims, open simulation code, pre-computed data, Python environments, and a clear mapping from figure panels to model parameters. They also cover distinct neuroscientific domains (dopamine dynamics vs cortical inhibition) and different simulation approaches (stochastic 3D vs deterministic compartmental), making them complementary as a paired prototype.

Papers 4 (attention/TVA) and 10 (foveal feedback fMRI) are strong backups if computational neuroscience papers are over-represented in the initial corpus — both have clean open data and code but introduce the challenge of statistical inference from empirical (not simulated) data.
