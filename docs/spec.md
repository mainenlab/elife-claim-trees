**Zach Mainen** (Mainen Lab, Champalimaud Research, Lisbon)
**Tim Behrens** (Oxford)
**Damian Pattinson, Andy Collings** (eLife)

*Draft — March 2026*

---

Science is currently organized around stories. A paper is a narrative artifact: it has a beginning, an argument that builds, and a conclusion. It is designed to convince a human reader — it foregrounds the results that support the main claim, backgrounds the ones that don't, and embeds everything in rhetoric calibrated to a domain audience. This has been the right format for human science. Humans need to be convinced, and narrative does that.

AI is a different reader. AI doesn't need to be convinced; it needs structure it can reason over, verify, and connect to other structure. The problem is not that AI can't read papers — it can. The problem is that papers are the wrong surface for AI to land on. A science organized around claims rather than stories would be legible to AI at every level: reasoning, verification, connection, gap-finding. That science doesn't exist yet. This project is a step toward it.

The transition from story-based to claim-based science has two phases. In the first phase — which is where we are — existing papers are ingested and their claim structure is made explicit. Claims embedded in narrative are extracted, structured, linked to data and code, and verified. In the second phase, science is born claim-first: researchers write claims, not stories. Papers become derived artifacts — narrative summaries of claim graphs produced for human readers — rather than the primary scientific record. The prototype described here belongs to the first phase. It is designed with the second in mind.

---

## What a claim is

A claim is a single declarative sentence asserting what one analysis showed, grounded in a specific panel. One analysis, one result, one data source. A paper contains approximately 10–20 such claims. Each claim carries: the proposition (one sentence, active voice, quantitative where the result is quantitative), the panel it corresponds to, a pointer to the data, the analysis script that transforms data into the result, and the upstream claims it depends on structurally — not by citation, but by logical dependency. If one claim would be invalid if another were wrong, that dependency is made explicit.

Claims relate to each other through typed directed relations: supports, requires, contradicts, extends. The result is a directed acyclic graph — the paper's argument made structural. Invalidity propagates downstream: a claim on which three others depend that cannot be reproduced affects all three. Independent claims stand alone. Dependent claims are only as strong as the claims they rest on. Making this structure explicit is itself a finding.

The claim sentence deserves particular attention. It should be evaluable without reading the paper: it names the phenomenon, the direction and magnitude of the result, and the key statistics. "Serotonin neuron firing rates increased following novel stimulus presentation" is not a claim in this sense. "DRN serotonin neuron firing rates were elevated for 2–4 s following first exposure to a novel odor but not on subsequent presentations of the same odor (n = 6 mice, p = 0.003, Wilcoxon signed-rank)" is. The difference is specificity and verifiability.

---

## What the prototype does

Apply this method to 10 eLife neuroscience papers (listed in the appendix), provided by eLife editors. For each paper: extract the claim graph, locate the data and code for each claim, run the analyses, record the outcomes. The outcomes fall into three categories: verified (analysis runs, result matches), failed (analysis runs, result does not match), unverified (data or code not available).

The unverified cases are not a failure of the method — they are a finding about the paper. A claim that cannot be independently reproduced because the data was never made available is a fact about the scientific record. Current publishing infrastructure does not surface this fact. The claim graph does.

---

## What this is not

Not NLP-based claim extraction. Claims are identified by human analysts working from figures and analyses, not extracted from prose by a language model. The text of the paper is consulted as context; it is not the source.

Not AI-generated science. The claims are written by humans; the format structures what humans produce. LLM assistance is used as a drafting aid — faster to correct a candidate sentence than to write from scratch — but the final claim is human-authored and human-approved.

Not replication. We are asking whether the same analysis on the same data gives the same result — not whether independent data gives the same result. Replication is a harder question and a later one.

Not a publishing platform. The output is structured data that can inform editorial decisions. Building systems around that data is out of scope for the prototype.

---

## Ontological commitments

A claim is an entity: a proposition with a priority date, an author, and an epistemic status. The act of producing a claim — running an analysis, interpreting a result — is a situation: specific, dated, conducted by specific people under specific conditions. Reproduction is a new situation that attempts to instantiate the same result from the same inputs. This distinction matters because it clarifies what the system is tracking: not just what was claimed, but the conditions under which the claim was produced and whether those conditions can be re-enacted.

The paper is not the claim graph. The paper is a linear argument written for human readers. The claim graph is the logical structure of that argument. The two are not identical: papers contain interpretive moves, rhetorical framing, and contextual discussion that the claim graph does not capture. Both are necessary. The claim graph is not a replacement for the paper — it is what the paper contains, made visible.

---

## The central uncertainty

Data accessibility cannot be predicted in advance. Analysis reproduction, given data and code, is tractable. Getting the data and code is not. Some eLife papers deposit raw data on Zenodo and provide fully runnable code; others provide processed data only; others provide neither. eLife has had a data availability requirement since 2017, but it enforces it at the level of the data availability statement, not the data itself. A paper can satisfy that requirement while providing processed data that cannot reproduce the main figures, code that does not run, or both.

The method handles this variation: failure modes are recorded explicitly, not hidden. But the distribution of outcomes across the 10 prototype papers is unknown. Discovering that distribution is one of the things the prototype is for.

---

## Evaluation

Three questions:

Can we produce a complete claim graph for each paper that a domain expert judges accurate? Evaluated by author and independent review. The question is whether an expert who knew only the claim graph would have a correct understanding of what the paper claims and on what evidence.

Across claims where data and code are available, what fraction reproduce? This is the headline number, expected to vary across papers and claim types. Empirical claims in papers with fully open data and code give the most interpretable figure.

Do the claim graphs provide editorially useful information beyond what reading the paper provides? Evaluated qualitatively through structured conversations with eLife editors and reviewers who have access to both the papers and the corresponding claim graphs.

Ten papers is not enough to make statistical claims about reproduction rates across neuroscience. It is enough to develop and stress-test the method, characterize the data accessibility landscape in this sample, and produce examples concrete enough to evaluate the editorial utility question.

---

## Next steps

eLife has provided the 10-paper corpus (see appendix). The prototype will be built in this repository: https://github.com/zmainen/elife-claim-trees. Results will be reviewed with eLife before any broader rollout. The claim format specification is in `docs/claim-format.md`; the workflow is in `docs/method.md`.

---

## Appendix: Prototype corpus

Ten eLife articles selected by eLife editors (Andy Collings, Damian Pattinson), spanning a range of data types and quality levels in neuroscience. These are the papers on which the claim extraction and reproduction method will be first applied.

| # | Article | Authors | Subject areas | DOI |
|:--|:--------|:--------|:--------------|:----|
| 1 | [A deep learning pipeline for mapping in situ network-level neurovascular coupling in multi-photon fluorescence microscopy](https://elifesciences.org/articles/95525) | Rozak et al. | Neuroscience; Physics of Living Systems | [10.7554/eLife.95525](https://doi.org/10.7554/eLife.95525) |
| 2 | [Contributions of insula and superior temporal sulcus to interpersonal guilt and responsibility in social decisions](https://elifesciences.org/articles/105391) | Gädeke et al. | Neuroscience; social decision-making; fMRI | [10.7554/eLife.105391](https://doi.org/10.7554/eLife.105391) |
| 3 | [iGABASnFR2 is an improved genetically encoded protein sensor of GABA](https://elifesciences.org/articles/108319) | Kolb et al. | Neuroscience; protein engineering; genetically encoded sensors | [10.7554/eLife.108319](https://doi.org/10.7554/eLife.108319) |
| 4 | [Self-association enhances early attentional selection through automatic prioritization of socially salient signals](https://elifesciences.org/articles/100932) | Scheller et al. | Neuroscience; Computational and Systems Biology; visual attention | [10.7554/eLife.100932](https://doi.org/10.7554/eLife.100932) |
| 5 | [Distinct representational properties of cues and contexts shape fear and reversal learning](https://elifesciences.org/articles/105126) | Bouyeure et al. | Neuroscience; fear learning; fMRI multivariate pattern analysis | [10.7554/eLife.105126](https://doi.org/10.7554/eLife.105126) |
| 6 | [Spatially targeted inhibitory rhythms differentially affect neuronal integration](https://elifesciences.org/articles/95562) | Headley et al. | Neuroscience; cortical circuits; dendritic integration; oscillations | [10.7554/eLife.95562](https://doi.org/10.7554/eLife.95562) |
| 7 | [Impaired excitability of fast-spiking neurons in a novel mouse model of KCNC1 epileptic encephalopathy](https://elifesciences.org/articles/103784) | Wengert et al. | Neuroscience; Genetics and Genomics; epilepsy; interneurons | [10.7554/eLife.103784](https://doi.org/10.7554/eLife.103784) |
| 8 | [A three-dimensional immunofluorescence atlas of the brain of the hackled-orb weaver spider, *Uloborus diversus*](https://elifesciences.org/articles/107732) | Artiushin, Corver, Gordus | Neuroscience; neuroanatomy; brain atlas; invertebrate | [10.7554/eLife.107732](https://doi.org/10.7554/eLife.107732) |
| 9 | [Computational modelling identifies key determinants of subregion-specific dopamine dynamics in the striatum](https://elifesciences.org/articles/105214) | Ejdrup et al. | Neuroscience; Computational and Systems Biology; dopamine; mathematical modelling | [10.7554/eLife.105214](https://doi.org/10.7554/eLife.105214) |
| 10 | [Feedback of peripheral saccade targets to early foveal cortex](https://elifesciences.org/articles/107053) | Kämmer et al. | Neuroscience; visual perception; fMRI; saccades; V1 | [10.7554/eLife.107053](https://doi.org/10.7554/eLife.107053) |
