---
uuid: 9713afa8-c74b-413e-916e-b8ff811ca2ea
slug: interprets-williams-2008-peripheral-spillover
doi: 10.1038/nn.2218
claim: >
  Williams et al. (2008, Nature Neuroscience) reported that foveal primary visual cortex
  carries information about stimuli presented at peripheral locations, a result they
  attributed to top-down feedback. Subsequent work in the foveal-feedback literature has
  raised the alternative that such foveal decoding can reflect passive spillover from
  large peripheral receptive fields whose tails extend into the foveal representation,
  especially in retinotopic areas where receptive-field size scales with eccentricity.
  The spillover alternative makes the empirical prediction that foveal decoding accuracy
  should vary monotonically with eccentricity rather than show a fovea-specific signature.
displayClaim: >
  Williams et al. (2008) reported foveal V1 decoding of peripheral stimuli; a long-standing
  alternative is passive spillover from large peripheral receptive fields, predicting a
  monotonic rather than U-shaped eccentricity profile.
shortClaim: "Foveal-feedback literature is contested by a peripheral-spillover alternative (Williams 2008)."
claim-type: interpretive
role: literature-context
concepts:
  - foveal feedback
  - peripheral spillover
  - early visual cortex
  - receptive field size
  - V1 decoding
priority: 2026-04-20
epistemic: moderate

belongings: []

assertions:
  - paper-slug: kammer-2026-foveal-feedback
    doi: ~
    panel: hypothesis (spillover alternative), fig2B (U-shape test)
    analysis: ~
    dataset: ~
    dataset-doi: ~
    method: literature interpretation; cited as the original foveal-feedback finding and the alternative explanation the U-shape analysis is designed to rule out
    confidence: moderate

reproductions: []
---

This claim registers the foveal-feedback literature and its spillover counter-hypothesis as a discrete node. The present paper's central control — the U-shaped eccentricity profile — is defined by its dissociation from the spillover prediction: if the foveal signal reflected large peripheral receptive fields encroaching on the foveal representation, decoding accuracy should be a monotonic function of eccentricity; the observed parafoveal dip with a foveal rise is the dissociation that distinguishes genuine top-down feedback from passive spillover.

The Williams et al. (2008) reference is load-bearing in two directions at once. It is the foundational empirical finding that the present paper extends (foveal V1 carries information about peripheral stimuli during saccade preparation), and it is the finding whose interpretation the present paper is sharpening (was that signal genuine feedback, or could it have been spillover?). The hypothesis `hypothesis-feedback-not-spillover` and the empirical claim `u-shaped-eccentricity-rejects-spillover` are both structured as explicit moves against the spillover alternative, which is why this literature node exists separately from the paper's own findings.

The epistemic qualification is moderate because the spillover vs feedback debate is a live ongoing dispute in the visual-cortex literature rather than a closed question; different paradigms have reached different conclusions depending on stimulus presentation, gaze-contingency, and the specific retinotopic area tested.
