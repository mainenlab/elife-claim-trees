# Panel-Level Claim Verification: A Method Specification

**Zach Mainen** (Mainen Lab, Champalimaud Research, Lisbon)
**Tim Behrens** (Oxford)
**Damian Pattinson, Andy Collings** (eLife)

*Draft for review — March 2026. No code has been written.*

---

## 1. Motivation

Scientific papers make claims. The problem is not that the claims are hidden — they appear in abstracts, in results sections, in figure captions. The problem is that the claims are not structured. They are embedded in continuous prose, attached to figures that bundle multiple distinct results, and severed from the code and data that produced them. The consequence is that the epistemic status of any given claim — how strongly it is supported, what it depends on structurally, whether it can be independently verified — is opaque even to expert readers, and certainly opaque to editors.

Peer review as currently practiced evaluates papers as wholes and renders verdicts on wholes: accept, reject, minor revision, major revision. This paper-level evaluation flattens exactly the variation that matters. A paper may contain one strong claim, well-supported by reproducible data, and four weaker claims that are interpretive, depend on the first, and cannot be independently verified. The current system treats this paper identically to one in which all five claims are equally grounded. The scientific community knows this is inadequate; it has known for decades. The reproducibility crisis is partly the long-term consequence.

What is proposed here is concrete and bounded: decompose papers into panel-level claims, link each claim to the data and analysis that produced it, and verify that the analysis can be reproduced. The output is not a verdict on the paper as a whole. It is a structured representation of the paper's argument — what was claimed, where each claim came from, what it depends on, and whether it holds up when the analysis is run. This representation is human-readable, machine-parseable, and version-controlled. It is designed to make the internal architecture of a paper's argument visible and auditable in a form that can support new kinds of editorial judgment, without replacing the judgment itself.

The prototype applies this method to approximately 10 eLife neuroscience papers, selected by eLife to span a range of data quality from exemplary to average. The goal is to develop and stress-test the method, to characterize the practical landscape of data accessibility in this literature, and to produce concrete outputs that are sufficient for evaluating the method's editorial utility.

---

## 2. What Is and Is Not Being Built

This project is a method and a format. It is not a platform, a tool, or a service. The prototype produces structured data per paper; it does not produce a database, a web interface, or an automated pipeline. Those are possible downstream applications. They are out of scope here.

Several distinctions matter for positioning this work correctly.

This is not NLP-based claim extraction from prose. Existing approaches in this space typically apply natural language processing to the text of a paper — its abstract, results section, or discussion — to identify claim-like sentences. The approach here does not do that. Claims are identified at the panel level, by a human analyst working from figures and analyses, not from text. The text of the paper is consulted as context, but it is not the source from which claims are extracted.

This is not AI-generated claims. LLM assistance is used in the workflow — as a drafting aid, to generate candidate claim sentences from results text, to catch omissions. But the final claim sentence for each panel is written and approved by a human analyst. The format structures what the human produces; it does not substitute for human judgment, especially at the interpretive level where the most consequential claims live.

This is not replication. Reproduction, in the sense used here, asks whether running the same analysis script on the same data produces the same result as reported in the paper. Replication asks whether an independent experiment, with independent data, gives the same result. These are different questions with different costs. Reproduction is tractable in hours to days given available data and code; replication requires a new experiment and may take months or years. The prototype addresses reproduction only.

This is not a peer review system. The structured claim graph that the method produces is data that could inform editorial decision-making. Building the systems — editorial workflows, author submission interfaces, reviewer tools — that would act on that data is a separate project and not under consideration here.

---

## 3. The Claim Unit

The natural unit of scientific argument in an empirical paper is the panel: one analysis generating one result, displayed as one figure panel or analysis block. This is finer than the figure, which typically bundles multiple results under a single label and caption. It is coarser than the individual statistic, which carries no interpretive context on its own. The panel is the level at which reproducibility actually operates: you can point to a specific analysis, run it on specific data, and ask whether the result matches.

A complete claim consists of five parts. First, the proposition: a single declarative sentence, in active voice, quantitative where the result is quantitative, stating what the panel showed. Second, the panel: the figure panel or analysis block that generated the result, identified precisely enough that an independent reader can locate it. Third, the data: a pointer to the raw or minimally processed data from which the result derives — not the figure source files, but the upstream data on which the analysis operates. Fourth, the analysis: a script or explicit procedure that transforms the data into the result. Fifth, the upstream claims on which this claim structurally depends — those claims whose falsification would invalidate this one.

The claim sentence deserves particular attention. It should be possible to evaluate it without reading the paper: it names the phenomenon, the direction of the result, and the magnitude or statistics where relevant. "Serotonin neuron firing rates increased following novel stimulus presentation" is not a claim in this sense; "DRN serotonin neuron firing rates were elevated for 2–4 s following first exposure to a novel odor but not on subsequent presentations of the same odor (n = 6 mice, p = 0.003, Wilcoxon signed-rank)" is. The difference is specificity and verifiability. The sentence should be falsifiable, and it should contain enough information to identify what was actually measured.

A paper typically contains 10–20 such claims. This is an empirical observation from working through papers using this approach, not a design parameter — the number emerges from the paper's argument structure. Papers with complex multi-level arguments generate more claims; papers with a single primary result and several supporting analyses generate fewer.

---

## 4. Ontological Commitments

This section states the conceptual foundations that determine the format and the method. Getting these right matters because the distinctions govern what the system can and cannot represent — and therefore what claims about the system's outputs are valid.

A claim is an entity: a static proposition with a priority date, an author, and an epistemic status that is fixed at the time of publication. The act of making a claim — an analyst applying a method to data at a moment in time, producing a result — is a distinct event. The entity and the event are not the same. The claim as entity is the proposition; the claim as event is the situation of its production. This distinction is not merely philosophical. It governs what reproduction means: reproduction is a new event that attempts to instantiate the same proposition from the same inputs. If the reproduction succeeds, it confirms the claim entity. If it fails, it challenges it. The claim entity itself does not change; what changes is the body of evidence bearing on its status.

Claims relate to each other through typed directed relations: a claim supports another when it provides evidence for it; it requires another when its validity depends on that other being valid; it contradicts another when their truth is mutually exclusive; it extends another when it builds on it without depending on it. The claim graph for a paper is a directed acyclic graph over these relations. Its most important structural property is that invalidity propagates downstream: if a claim on which three others depend is found to be unreproducible, all three are affected, because their logical foundation is compromised. This is the structure of patent claims applied to scientific results. Independent claims — those with no upstream dependencies — stand on their own. Dependent claims are only as strong as the claims they depend on. Making this structure explicit is itself informative: a paper in which all claims are dependent on a single unverified central claim is a different epistemic situation from one in which the claims are mutually independent.

The claim graph is not the paper. The paper is a linear argument constructed for human readers. It contains interpretive moves, rhetorical framing, contextual discussion, and explicit acknowledgment of uncertainty that the claim graph does not and should not attempt to capture. The claim graph captures what is formally asserted and formally grounded — the propositions that carry the paper's burden of proof. The paper communicates what those propositions mean and why they matter. Both are necessary. The error to avoid is treating the claim graph as a replacement for the paper, or treating the paper's argument as coextensive with its claim graph. They are different representations of related but not identical things.

One further commitment: epistemic status is an assessment, not a discovery. The `epistemic` field in the claim format — strong, moderate, weak, contested — is the analyst's judgment about how strongly the claim is supported by the evidence as presented in this paper. It is not a computed score. It cannot be automated. It can be contested by the authors, by reviewers, and by subsequent analysts, and those contests are legitimate and expected. The format records the judgment; it does not adjudicate it.

---

## 5. The Decomposition Method

Moving from a paper to a claim graph involves five steps. The steps are sequential in principle; in practice, dependency mapping and data location interact with claim extraction, and iteration is normal.

**Step 1: Claim extraction.** Read the paper and identify candidate claims at the panel level. For each figure panel, each table, and each analysis block described in the results, write one declarative sentence. The first pass is manual and should be done by a domain expert who can distinguish a result from an interpretation and who knows what quantitative form the claim should take. LLM assistance is useful for drafting candidate sentences, particularly for results sections where the prose is dense — a draft sentence from a language model is faster to correct than to write from scratch. But human judgment is required for the final sentence, especially for interpretive claims that span multiple panels or that make causal assertions beyond what the data directly support.

**Step 2: Dependency mapping.** For each claim, identify which other claims it depends on structurally. The question to ask for each candidate dependency is: if that other claim were wrong, would this claim be invalid? If yes, the dependency is real and should be recorded. Common patterns recur across papers: interpretive claims depend on the empirical claims they synthesize; main experimental results depend on calibration or validation claims (e.g. that a pharmacological manipulation was effective, or that a recording was confined to the target region); existence claims often depend on methodological assessment claims that establish the sensitivity of the measurement. Recording these dependencies produces the DAG structure of the claim graph and makes explicit what is often left implicit in a paper's argument.

**Step 3: Data and code location.** For each claim, find the source data and the analysis script. This step is the most variable in effort. Papers with fully open data and code deposited in a public repository — Zenodo, OSF, GitHub, a journal-linked data archive — can be characterized completely. Papers that provide processed data but not raw data can be partially characterized. Papers that provide neither must be recorded as unverifiable. The failure mode is informative: a claim marked `unverified:data-unavailable` is a genuine finding about the paper's epistemic situation, not a failure of the method. The gap between what a paper asserts and what it provides to support independent verification is precisely what the method is designed to surface. Where code is available but requires reconstruction or adaptation — because it depends on specific software versions, proprietary toolboxes, or institutional computing environments — those dependencies are recorded explicitly as part of the claim's metadata.

**Step 4: Verification.** Run the analysis script on the data and compare the output to the figure as published. The outcome is one of four values. `verified`: the script runs and the output matches the published figure within reasonable numerical tolerance. `failed`: the script runs but the output does not match — the discrepancy is logged with as much specificity as possible (different direction, different magnitude, different significance). `unverified`: data or code is unavailable. `reproduced`: verified on an independent dataset, which requires that such a dataset exists and was run through the same analysis. A claim marked `verified` means someone ran it. That commitment is the point.

**Step 5: Registration.** Write one structured file per claim and assemble the paper's claim graph. The output is a directory of plain-text files, one per claim, each containing YAML frontmatter and an optional prose body. The full format is specified in `docs/claim-format.md`. The directory for each paper constitutes the paper's claim graph; the edges of the graph are the `upstream` fields in the frontmatter. No database is required to read or query the graph; the structure is visible in the files themselves.

---

## 6. Data Accessibility — The Central Uncertainty

The honest statement about data accessibility is that its distribution across eLife neuroscience papers is unknown, and discovering that distribution is one of the things the prototype is designed to do.

Analysis reproduction, given data and code, is a tractable problem. Modern scientific computing environments are documented well enough that a skilled analyst with access to the data and an analysis script can reproduce a result in hours to days for most neuroscience analyses. The hard part is not the computation; it is getting to the computation. Data and code availability in neuroscience varies enormously — not just across journals, but within eLife, which has had a data availability requirement since 2017 but which enforces it at the level of the data availability statement, not the data itself. A paper can satisfy a journal's data availability requirement while providing processed data that cannot reproduce the main figures, code that does not run, or both.

The prototype will encounter this variation directly. Some papers will be fully characterizable; others will be partially characterizable; some may not be characterizable at all. This variation is not a failure of the method — it is a finding. The prototype is designed to handle it gracefully, with explicit status recording, not to paper over it. A prototype paper set that includes only the most open papers would prove a weaker point.

A secondary uncertainty concerns computational environment. Code that nominally exists may depend on software versions that are no longer available, proprietary analysis packages that are not publicly distributed (MATLAB toolboxes are the common case in neuroscience), or computing infrastructure — HPC clusters, specific GPU configurations — that is not practically accessible. These dependencies are recorded explicitly in the claim metadata. Where they prevent reproduction, that is recorded as a specific kind of failure, distinct from cases where code is simply absent.

---

## 7. Evaluation Criteria

The prototype will be evaluated on three dimensions.

**Structural completeness.** Can a claim graph be produced for each paper — a set of claims with explicit dependencies, claim types, and data and code pointers — that a domain expert judges to accurately represent the paper's argument? This is evaluated by author review and by independent expert review. The question is whether the decomposition captures the paper's burden of proof: whether an expert reader who knew only the claim graph would have a correct understanding of what the paper claims and on what evidence. Completeness failures — claims present in the paper but absent from the graph — are likely for interpretive claims in the discussion, which make assertions that exceed the formal evidence. Those failures are expected and informative.

**Reproduction rate.** Across claims where data and code are available, what fraction reproduce? This is the headline number. Variation across papers and across claim types within a paper is expected, and that variation is itself data. An interpretive claim that synthesizes three empirical claims is not independently verifiable; only the underlying empirical claims are. The reproduction rate for empirical claims in papers with fully open data and code is the most informative number; the rate in papers with partial data availability is interpretable with care.

**Editorial utility.** Do the claim graphs, and the reproduction outcomes, provide information that is useful for editorial decision-making, beyond what is available from reading the paper? This is evaluated qualitatively, through structured conversations with eLife editors and reviewers who have access to both the papers and the corresponding claim graphs. The editorial utility question is genuinely open: it is possible that claim graphs confirm what good editors already know, and it is possible that they surface structure that is non-obvious even to expert readers. Both outcomes are informative.

Ten papers is not powered to make statistical claims about reproduction rates across neuroscience. It is enough to develop the method to a point where it is stable across papers of varying structure, to characterize the data accessibility landscape in this sample, and to produce examples sufficiently concrete that editors can evaluate the third criterion directly.

---

## 8. Relation to Existing Work

Two lines of prior work are directly relevant and should be distinguished from this project.

The eLife QED pilot extracts claims from prose using natural language processing. The ontological commitment of that approach is that the claim is a sentence — an assertion that appears in the text of the paper and can be identified by its linguistic form. The approach here has a different commitment: the claim is an analysis, and its natural representation is the computation that produced it, not the sentence that describes it. These two approaches will produce different outputs for the same paper. Running both on the same set of papers makes the comparison concrete: what does a sentence-level claim look like versus a panel-level claim? Where do they agree, where do they disagree, and what does that disagreement reveal about the paper's structure? This comparison is a planned output of the prototype phase.

Leo Pucter's group is working on claim extraction at finer granularity than the panel level — at the level of individual statements and their evidential relationships within a results section. The relationship between that approach and this one is analogous to the relationship between sentence-level NLP and panel-level analysis: different levels of granularity, different ontological commitments, different verification affordances. Panel-level claims are verifiable because the panel corresponds directly to an analysis; finer-grained claims may not have a clear computational anchor. Coarser claims lose the structure that makes verification possible. The panel level is the level at which reproducibility operates because it is the level at which a computation can be pointed to.

The formal grounding for the claim graph structure — the argument that panel-level claims with typed dependencies have specific properties that make scientific inference tractable — is developed in the Library Theorem ([arXiv:2603.21272](https://arxiv.org/abs/2603.21272)). That paper establishes the conditions under which a claim graph can support valid inference about a paper's epistemic status. The present project is an empirical application of those commitments, not an extension of the theory.

---

## 9. Format Specification

The format is documented in full in `docs/claim-format.md`. A brief description follows for completeness.

Each claim is stored as a single Markdown file with YAML frontmatter. The filename is the panel identifier (`fig2c.ms_mat.md`). The frontmatter contains the structured fields:

- `panel`: the figure panel or analysis block identifier
- `claim-type`: one of `empirical`, `interpretive`, `existence`, `synthesis`, `assessment`
- `claim`: the proposition, as a single declarative sentence
- `concepts`: key terms for indexing
- `upstream`: panel IDs of claims this claim depends on structurally
- `data`: path or DOI to input data
- `analysis`: path to the script that generates the result
- `figure`: path to the rendered output
- `stats`: key statistics (n, test, p-value, effect size, etc.)
- `epistemic`: the analyst's assessment of evidential strength (`strong`, `moderate`, `weak`, `contested`)
- `status`: verification outcome (`verified`, `failed`, `unverified`, `reproduced`)

The optional prose body of the file can contain caveats, alternative interpretations, or links to contradicting claims. It is human-readable without tooling and does not affect the machine-parseable structure.

The format is designed to be human-readable without any tooling — a text editor is sufficient to read and write claim files. It is machine-parseable for constructing and querying the claim graph. It is version-controllable in git, which provides authorship tracking, change history, and the ability to mark when a claim's status changed and why. It is extensible: new fields can be added without breaking parsers that do not know about them.

---

## 10. Next Steps

eLife will provide a list of approximately 10 neuroscience papers from the eLife corpus, selected to span a range of data quality. The claim graph construction and verification workflow will be applied to each paper in this repository. Results — claim graphs, reproduction outcomes, and notes on data accessibility — will be reviewed with eLife editors and reviewers before any broader development or rollout.

The prototype phase answers the empirical questions that cannot be answered in advance: what the distribution of data accessibility looks like in this sample; whether the claim unit defined here is stable across papers of varying structure; what the practical effort is per claim and per paper; where the method's failure modes occur. Those answers determine what, if anything, to build next.
