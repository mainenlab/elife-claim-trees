"""FastAPI backend for the web-based paper ingester.

Receives a DOI + Anthropic API key, runs the full extraction pipeline,
and streams progress via SSE. Returns OXA-native claim graph JSON.

The API key is held in memory for the duration of the request and
discarded immediately after. Never logged, never stored.

Usage:
  uvicorn server:app --host 0.0.0.0 --port 8080
"""

from __future__ import annotations

import json
import logging
import os
import sys
import time
import uuid
from pathlib import Path

from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import StreamingResponse
from pydantic import BaseModel

# Add the extract package to the path — works from HAAK repo or standalone
API_DIR = Path(__file__).resolve().parent
for candidate in [
    API_DIR / "elife_extract",                                          # standalone deploy
    API_DIR.parent / "home/collabs/elife/claim-trees/extract",         # HAAK repo
]:
    if (candidate / "elife_extract").is_dir() or candidate.name == "elife_extract":
        sys.path.insert(0, str(candidate if candidate.name != "elife_extract" else candidate.parent))
        break
else:
    # Last resort: assume elife_extract is importable from current PYTHONPATH
    pass

# Prompts directory — configurable via env var
PROMPTS_DIR = Path(os.environ.get("ELIFE_PROMPTS_DIR", "")).resolve() if os.environ.get("ELIFE_PROMPTS_DIR") else None

# Lazy imports — these pull in anthropic SDK etc.
_pipeline_ready = False


def _ensure_pipeline():
    global _pipeline_ready
    if not _pipeline_ready:
        global prepare, run_all_agents, reconcile_step, run_external_review
        global Config, reset_client, migrate_claims
        from elife_extract.prepare import prepare
        from elife_extract.agents import run_all_agents, reset_client
        from elife_extract.reconcile import reconcile as reconcile_step
        from elife_extract.external_review import run_external_review
        from elife_extract.config import Config
        _pipeline_ready = True


logging.basicConfig(level=logging.INFO, format="%(asctime)s %(levelname)s: %(message)s")
logger = logging.getLogger(__name__)

app = FastAPI(
    title="eLife Claim Trees — Extraction API",
    description="Extract structured claim graphs from eLife papers",
    version="0.1.0",
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Tighten in production
    allow_methods=["POST", "GET"],
    allow_headers=["*"],
)


class ExtractRequest(BaseModel):
    doi: str
    api_key: str = ""  # empty = use Vertex (internal); non-empty = Anthropic direct
    model_extract: str = "claude-sonnet-4-6"
    model_reconcile: str = "claude-opus-4-6"


def _build_oxa_claim(claim: dict) -> dict:
    """Convert a reconciled claim dict to an OXA Claim node."""
    EDGE_MAP = {
        "supports": "cito:supports",
        "extends": "cito:extends",
        "qualifies": "cito:qualifies",
        "derived-from": "cito:citesAsSourceDocument",
        "enables-method": "cito:usesMethodIn",
        "dissociates-with": "cito:disagreesWith",
        "requires": "claimrel:requires",
        "tests": "claimrel:tests",
        "entails": "claimrel:entails",
        "interprets": "claimrel:interprets",
        "scopes": "claimrel:scopes",
        "rules-out": "claimrel:rulesOut",
        "replicates": "claimrel:replicates",
        "contradicts": "claimrel:contradicts",
    }
    slug = claim.get("slug", str(uuid.uuid4())[:8])
    role = claim.get("role", "empirical")
    panel = claim.get("panel")
    if isinstance(panel, str):
        panel = [p.strip() for p in panel.split(",")]

    relations = []
    for edge_key, cito in EDGE_MAP.items():
        targets = claim.get(edge_key, [])
        if isinstance(targets, str):
            targets = [targets]
        for t in (targets or []):
            if t:
                relations.append({"xref": t, "relationType": cito})

    node = {
        "type": "Claim",
        "identifier": slug,
        "role": role,
        "children": [{"type": "Text", "value": claim.get("claim", "")}],
    }
    if panel:
        node["panel"] = panel
    if claim.get("epistemic"):
        node["epistemicStrength"] = claim["epistemic"]
    if relations:
        node["relations"] = relations
    if claim.get("confidence"):
        node["metadata"] = {"confidence": claim["confidence"]}
    return node


@app.get("/health")
def health():
    return {"status": "ok"}


@app.post("/extract")
async def extract(req: ExtractRequest):
    """Run the full pipeline and stream progress via SSE."""
    _ensure_pipeline()

    def generate():
        try:
            # Build config — Anthropic direct if key provided, Vertex if not
            cfg = Config()
            if req.api_key:
                cfg.anthropic_api_key = req.api_key
                cfg.backend = "anthropic"
            else:
                cfg.backend = "vertex"  # uses GOOGLE_APPLICATION_CREDENTIALS on the server
            cfg.model_results = req.model_extract
            cfg.model_caption = req.model_extract
            cfg.model_structure = req.model_extract
            cfg.model_reconcile = req.model_reconcile
            cfg.review_mode = "external"
            # Find prompts dir
            if PROMPTS_DIR and PROMPTS_DIR.is_dir():
                cfg.prompts_dir = PROMPTS_DIR
            else:
                # Try relative to this file in HAAK repo layout
                for p in [
                    API_DIR / "prompts",
                    API_DIR.parent / "home/collabs/elife/claim-trees/extract/prompts",
                ]:
                    if p.is_dir():
                        cfg.prompts_dir = p
                        break
            cfg.output_dir = Path("/tmp/elife-extract-api")
            cfg.output_dir.mkdir(parents=True, exist_ok=True)

            # Reset client cache so we use the new API key
            reset_client()

            # Step 1: Prepare
            yield f"data: {json.dumps({'step': 'prepare', 'message': 'Fetching and parsing JATS-XML...'})}\n\n"
            paper = prepare(req.doi, input_format="jats")
            yield f"data: {json.dumps({'step': 'prepare', 'message': f'Parsed: {paper.title}', 'slug': paper.paper_slug, 'figures': len(paper.figure_captions), 'panels': len(paper.panel_ids)})}\n\n"

            # Steps 2-3: Three-agent extraction
            yield f"data: {json.dumps({'step': 'extract', 'message': 'Running Results-reader...', 'agent': 1, 'total': 3})}\n\n"
            agents_output = run_all_agents(paper, cfg)
            n_candidates = sum(len(a.claims) for a in agents_output)
            yield f"data: {json.dumps({'step': 'extract', 'message': f'Extracted {n_candidates} candidate claims from 3 agents', 'agent': 3, 'total': 3})}\n\n"

            # Step 4: Reconciliation
            yield f"data: {json.dumps({'step': 'reconcile', 'message': 'Reconciling claims...'})}\n\n"
            draft = reconcile_step(agents_output, paper, cfg)
            yield f"data: {json.dumps({'step': 'reconcile', 'message': f'Reconciled to {len(draft.claims)} claims'})}\n\n"

            # Step 4.5: External review
            yield f"data: {json.dumps({'step': 'review', 'message': 'Running external reviewer...'})}\n\n"
            reviewed = run_external_review(draft, paper, cfg)
            yield f"data: {json.dumps({'step': 'review', 'message': f'Reviewed: {len(reviewed.claims)} claims after revision'})}\n\n"

            # Build OXA output
            oxa_claims = []
            for c in reviewed.claims:
                oxa_claims.append(_build_oxa_claim(c.model_dump()))

            article = {
                "type": "Article",
                "identifier": paper.paper_slug,
                "metadata": {
                    "doi": paper.doi,
                    "title": paper.title,
                    "authors": paper.authors,
                },
                "children": oxa_claims,
            }

            yield f"data: {json.dumps({'step': 'done', 'message': f'Complete: {len(oxa_claims)} claims', 'article': article})}\n\n"

        except Exception as e:
            logger.exception("Extraction failed")
            yield f"data: {json.dumps({'step': 'error', 'message': str(e)})}\n\n"

        finally:
            # Discard the API key by resetting the client
            reset_client()

    return StreamingResponse(
        generate(),
        media_type="text/event-stream",
        headers={"Cache-Control": "no-cache", "X-Accel-Buffering": "no"},
    )


if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8080)
