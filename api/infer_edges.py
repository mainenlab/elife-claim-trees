"""Infer typed edges between claims using an LLM.

Step 6 in the methodology is currently analyst work. This module
automates it: given a list of reconciled claims, ask the LLM to
identify relationships between them using the CiTO/claimrel vocabulary.

Not perfect — but better than no edges at all for the web demo.
"""

import json
import logging
import re

logger = logging.getLogger(__name__)

EDGE_INFERENCE_PROMPT = """You are analyzing the argument structure of a scientific paper.
You have a list of claims extracted from the paper. Your job is to identify the logical
relationships between them.

For each relationship you find, specify:
- source: the identifier of the claim that carries the relationship
- target: the identifier of the claim it relates to
- relationType: one of these typed edges:

RELATIONSHIP TYPES:
- cito:supports — provides factual or intellectual support
- claimrel:tests — submits to empirical test (an empirical claim testing a prediction)
- claimrel:entails — logically entails (a hypothesis entailing its predictions)
- claimrel:requires — logically depends on as a prerequisite
- claimrel:scopes — delimits the domain of applicability
- cito:usesMethodIn — uses a method from this claim
- cito:disagreesWith — dissociates with (results that separate variables)
- claimrel:interprets — offers a theoretical reading
- claimrel:rulesOut — eliminates as a viable hypothesis (control results)

RULES:
- hypothesis claims typically ENTAIL prediction claims
- prediction claims are typically TESTED BY empirical claims
- scope claims typically SCOPE many other claims
- methodological claims are typically REQUIRED BY empirical claims
- control claims typically RULE OUT alternatives
- synthesis/interpretation claims typically aggregate multiple empirical claims

Return a JSON array of edges:
[{"source": "claim-identifier", "target": "claim-identifier", "relationType": "claimrel:tests"}, ...]

Only include relationships you are confident about. It's better to miss an edge than to invent one.
"""


def infer_edges(claims: list[dict], *, call_llm_fn, model: str = "claude-sonnet-4-6") -> list[dict]:
    """Infer edges between claims using an LLM.

    call_llm_fn should accept (system, user_message, model) and return text.
    Returns a list of {source, target, relationType} dicts.
    """
    # Build claim summary for the prompt
    claim_lines = []
    for c in claims:
        role = c.get("role", "?")
        identifier = c.get("identifier", c.get("slug", "?"))
        text = ""
        children = c.get("children", [])
        if children:
            text = children[0].get("value", "") if isinstance(children[0], dict) else str(children[0])
        else:
            text = c.get("claim", "")
        panel = c.get("panel", [])
        panel_str = f" [panel: {', '.join(panel)}]" if panel else ""
        claim_lines.append(f"[{role}] {identifier}{panel_str}\n  {text[:200]}")

    claims_text = "\n\n".join(claim_lines)
    user_msg = f"Here are {len(claims)} claims from the paper:\n\n{claims_text}\n\nIdentify the relationships between these claims. Return JSON array only."

    raw = call_llm_fn(EDGE_INFERENCE_PROMPT, user_msg, model)

    # Parse JSON from response
    m = re.search(r'\[.*\]', raw, re.DOTALL)
    if not m:
        logger.warning("Edge inference returned no JSON array")
        return []

    try:
        edges = json.loads(m.group(0))
    except json.JSONDecodeError:
        logger.warning("Edge inference JSON parse failed")
        return []

    # Validate: only keep edges with valid source/target/relationType
    valid_ids = {c.get("identifier", c.get("slug", "")) for c in claims}
    valid_edges = []
    for e in edges:
        if not isinstance(e, dict):
            continue
        src = e.get("source", "")
        tgt = e.get("target", "")
        rel = e.get("relationType", "")
        if src in valid_ids and tgt in valid_ids and rel and src != tgt:
            valid_edges.append({"source": src, "target": tgt, "relationType": rel})

    logger.info("Edge inference: %d edges found (%d valid)", len(edges), len(valid_edges))
    return valid_edges


def apply_edges(claims: list[dict], edges: list[dict]) -> list[dict]:
    """Apply inferred edges to OXA claim nodes."""
    # Build edge index: source → list of {xref, relationType}
    edge_index = {}
    for e in edges:
        src = e["source"]
        if src not in edge_index:
            edge_index[src] = []
        edge_index[src].append({
            "xref": e["target"],
            "relationType": e["relationType"],
        })

    # Apply to claims
    for c in claims:
        cid = c.get("identifier", "")
        if cid in edge_index:
            existing = c.get("relations", [])
            c["relations"] = existing + edge_index[cid]

    return claims
