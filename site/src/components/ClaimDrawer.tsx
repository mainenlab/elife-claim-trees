import React, { useCallback, useEffect, useMemo, useState } from 'react';

type Claim = {
  slug: string;
  claim: string;
  displayClaim?: string | null;
  panel?: string;
  status: string;
  epistemic: string;
  role?: string | null;
  'claim-type'?: string | null;
  isAssessment?: boolean;
  figureUrl?: string | null;
  number?: string | null;
  requires?: string[];
  supports?: string[];
  tests?: string[];
  entails?: string[];
  'derived-from'?: string[];
  refutes?: string[];
  'rules-out'?: string[];
  'dissociates-with'?: string[];
  validates?: string[];
  predicts?: string[];
  confirms?: string[];
  interprets?: string[];
  'enables-method'?: string[];
  scopes?: string[];
  script?: string | null;
  original_script?: string | null;
  script_execution?: string | null;
  script_execution_note?: string | null;
  notes?: string | null;
  time_fast?: string | null;
  time_full?: string | null;
  dataset?: string | null;
  method?: string | null;
  analysis?: string | null;
};

type Props = {
  allClaims: Claim[];
  paperSlug: string;
  baseUrl: string;
};

const GITHUB_BLOB = 'https://github.com/zmainen/elife-claim-trees/blob/main';

const STATUS_LABEL: Record<string, string> = {
  verified: 'Verified',
  failed: 'Failed',
  'unverified:no-data': 'No data',
  'unverified:no-code': 'No code',
  unverified: 'Unverified',
  'unverified:code-error': 'Code error',
  'unverified:compute-infeasible': 'Compute-infeasible',
  unknown: 'Unknown',
};

function statusDotColor(status: string): string {
  if (status === 'verified') return '#22c55e';
  if (
    status === 'failed' ||
    status === 'unverified:code-error' ||
    status === 'unverified:compute-infeasible'
  )
    return '#f59e0b';
  return '#9ca3af';
}

const roleChipStyle: Record<string, string> = {
  hypothesis: 'bg-violet-50 text-violet-700 border-violet-200',
  prediction: 'bg-indigo-50 text-indigo-700 border-indigo-200',
  empirical: 'bg-sky-50 text-sky-700 border-sky-200',
  control: 'bg-emerald-50 text-emerald-700 border-emerald-200',
  interpretation: 'bg-amber-50 text-amber-700 border-amber-200',
  synthesis: 'bg-rose-50 text-rose-700 border-rose-200',
  methodological: 'bg-teal-50 text-teal-700 border-teal-200',
  scope: 'bg-slate-50 text-slate-600 border-slate-200',
};

// Edges + their descriptions
const EDGES: { key: keyof Claim; label: string; desc: string }[] = [
  { key: 'requires', label: 'Requires', desc: 'this claim depends on:' },
  { key: 'supports', label: 'Supports', desc: 'this claim supports:' },
  { key: 'tests', label: 'Tests', desc: 'tests the prediction:' },
  { key: 'entails', label: 'Entails', desc: 'this claim entails:' },
  { key: 'derived-from', label: 'Derived from', desc: 'derived from:' },
  { key: 'refutes', label: 'Refutes', desc: 'refutes:' },
  { key: 'rules-out', label: 'Rules out', desc: 'rules out:' },
  { key: 'dissociates-with', label: 'Dissociates with', desc: 'forms a dissociation pair with:' },
  { key: 'validates', label: 'Validates', desc: 'validates:' },
  { key: 'predicts', label: 'Predicts', desc: 'predicts:' },
  { key: 'confirms', label: 'Confirms', desc: 'confirms:' },
  { key: 'interprets', label: 'Interprets', desc: 'reframes:' },
  { key: 'enables-method', label: 'Enables method', desc: 'enables:' },
  { key: 'scopes', label: 'Scopes', desc: 'qualifies:' },
];

function codeStatus(status: string): { label: string; color: string } {
  if (status === 'verified') return { label: 'verified', color: '#22c55e' };
  if (status === 'failed' || status === 'unverified:code-error')
    return { label: 'mismatch', color: '#f59e0b' };
  if (status === 'unverified:compute-infeasible')
    return { label: 'infeasible', color: '#9ca3af' };
  if (status === 'unverified:no-data') return { label: 'no data', color: '#9ca3af' };
  if (status === 'unverified:no-code') return { label: 'no code', color: '#9ca3af' };
  return { label: 'from notes', color: '#9ca3af' };
}

function updateUrlClaim(slug: string | null) {
  const url = new URL(window.location.href);
  if (slug) url.searchParams.set('claim', slug);
  else url.searchParams.delete('claim');
  window.history.pushState({}, '', url.toString());
}

export default function ClaimDrawer({ allClaims, paperSlug, baseUrl }: Props) {
  const bySlug = useMemo(() => {
    const m: Record<string, Claim> = {};
    for (const c of allClaims) m[c.slug] = c;
    return m;
  }, [allClaims]);

  const [openSlug, setOpenSlug] = useState<string | null>(null);
  const [history, setHistory] = useState<string[]>([]);

  // On mount, read ?claim= from URL.
  useEffect(() => {
    const sp = new URLSearchParams(window.location.search);
    const s = sp.get('claim');
    if (s && bySlug[s]) setOpenSlug(s);
  }, [bySlug]);

  // Listen for open-claim events from cards.
  useEffect(() => {
    const handler = (e: Event) => {
      const ev = e as CustomEvent<{ slug: string }>;
      const s = ev.detail?.slug;
      if (!s || !bySlug[s]) return;
      setOpenSlug(prev => {
        if (prev && prev !== s) {
          setHistory(h => [...h, prev]);
        }
        return s;
      });
    };
    window.addEventListener('open-claim', handler as EventListener);
    return () => window.removeEventListener('open-claim', handler as EventListener);
  }, [bySlug]);

  // Sync URL when openSlug changes (user-driven, not popstate).
  useEffect(() => {
    updateUrlClaim(openSlug);
  }, [openSlug]);

  // Handle browser back/forward: re-read URL on popstate.
  useEffect(() => {
    const onPop = () => {
      const sp = new URLSearchParams(window.location.search);
      const s = sp.get('claim');
      setOpenSlug(s && bySlug[s] ? s : null);
    };
    window.addEventListener('popstate', onPop);
    return () => window.removeEventListener('popstate', onPop);
  }, [bySlug]);

  // Esc closes.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && openSlug) close();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [openSlug]);

  const close = useCallback(() => {
    setOpenSlug(null);
    setHistory([]);
  }, []);

  const goTo = useCallback(
    (slug: string) => {
      if (!bySlug[slug]) return;
      setOpenSlug(prev => {
        if (prev && prev !== slug) setHistory(h => [...h, prev]);
        return slug;
      });
    },
    [bySlug]
  );

  const goBack = useCallback(() => {
    setHistory(h => {
      if (h.length === 0) return h;
      const prev = h[h.length - 1];
      setOpenSlug(prev);
      return h.slice(0, -1);
    });
  }, []);

  if (!openSlug) return null;
  const claim = bySlug[openSlug];
  if (!claim) return null;

  const claimText = (claim.displayClaim?.trim()) || claim.claim;
  const original = claim.displayClaim && claim.displayClaim.trim() !== claim.claim ? claim.claim : null;
  const dotColor = statusDotColor(claim.status);
  const codeInfo = codeStatus(claim.status);

  const hasCode = !!claim.script;
  const verifyPyUrl = claim.script ? `${GITHUB_BLOB}/${claim.script}` : null;
  const verifyLogUrl = claim.script
    ? `${GITHUB_BLOB}/${claim.script.replace(/verify\.py$/, 'verify.log')}`
    : null;
  const scriptFuncName = claim.script
    ? (claim.script.split('/').pop() || '').replace(/\.(py|ipynb)$/, '') || 'verify'
    : null;

  return (
    <>
      <div className="claim-drawer-backdrop" onClick={close} aria-hidden="true" />
      <aside
        className="claim-drawer"
        role="dialog"
        aria-label={`Claim details: ${claim.slug}`}
      >
        {/* Header */}
        <div className="drawer-header">
          <div className="drawer-header-left">
            {history.length > 0 && (
              <button className="drawer-back" onClick={goBack} aria-label="Back">
                ←
              </button>
            )}
            {claim.number && (
              <span className="drawer-number">{claim.number}</span>
            )}
            {claim.role && (
              <span
                className={`drawer-role-chip ${roleChipStyle[claim.role] ?? roleChipStyle.empirical}`}
              >
                {claim.role.toUpperCase()}
              </span>
            )}
            {claim.panel && <span className="drawer-panel">{claim.panel}</span>}
            <span className="drawer-header-title">{claimText}</span>
          </div>
          <button className="drawer-close" onClick={close} aria-label="Close">
            ×
          </button>
        </div>

        <div className="drawer-body">
          {/* Full claim text */}
          <p className="drawer-claim-main">{claimText}</p>
          {original && (
            <div className="drawer-original">
              <div className="drawer-original-label">Original</div>
              <p className="drawer-original-text">{original}</p>
            </div>
          )}

          {/* Figure + Code/Reproducibility paired block */}
          {(claim.figureUrl || hasCode) && (
            <div className="drawer-evidence">
              {claim.figureUrl && (
                <div className="drawer-figure">
                  <a href={claim.figureUrl} target="_blank" rel="noopener">
                    <img src={claim.figureUrl} alt={`Figure ${claim.panel ?? ''}`} />
                  </a>
                  <div className="drawer-figure-caption">
                    {claim.panel ? `Panel ${claim.panel}` : 'Figure'}
                  </div>
                </div>
              )}

              {hasCode && (
                <div className="drawer-repro">
                  <div className="drawer-section-label">Code &amp; reproducibility</div>
                  <div className="drawer-repro-row">
                    <span className="drawer-repro-key">Verify function</span>
                    <span className="drawer-repro-val font-mono">{scriptFuncName}()</span>
                  </div>
                  <div className="drawer-repro-row">
                    <span className="drawer-repro-key">Script path</span>
                    <span className="drawer-repro-val font-mono">{claim.script}</span>
                  </div>
                  {claim.original_script && (
                    <div className="drawer-repro-row">
                      <span className="drawer-repro-key">Original</span>
                      <a
                        href={claim.original_script}
                        target="_blank"
                        rel="noopener"
                        className="drawer-repro-link font-mono"
                      >
                        {claim.original_script} ↗
                      </a>
                    </div>
                  )}
                  {claim.dataset && (
                    <div className="drawer-repro-row">
                      <span className="drawer-repro-key">Dataset</span>
                      <a
                        href={claim.dataset}
                        target="_blank"
                        rel="noopener"
                        className="drawer-repro-link"
                      >
                        {claim.dataset} ↗
                      </a>
                    </div>
                  )}
                  {claim.method && (
                    <div className="drawer-repro-row">
                      <span className="drawer-repro-key">Method</span>
                      <span className="drawer-repro-val">{claim.method}</span>
                    </div>
                  )}
                  <div className="drawer-repro-status">
                    <span className="drawer-dot" style={{ background: codeInfo.color }} />
                    <span>{codeInfo.label}</span>
                    {claim.time_fast && (
                      <span className="drawer-repro-time">· fast {claim.time_fast}</span>
                    )}
                    {claim.time_full && (
                      <span className="drawer-repro-time">· full {claim.time_full}</span>
                    )}
                  </div>
                  {claim.script_execution_note && (
                    <div className="drawer-repro-note">{claim.script_execution_note}</div>
                  )}
                  {claim.notes && (
                    <div className="drawer-repro-prose">{claim.notes}</div>
                  )}
                  <div className="drawer-repro-links">
                    {verifyPyUrl && (
                      <a href={verifyPyUrl} target="_blank" rel="noopener" className="drawer-repro-link">
                        open verify.py ↗
                      </a>
                    )}
                    {verifyLogUrl && (
                      <a href={verifyLogUrl} target="_blank" rel="noopener" className="drawer-repro-link">
                        open verify.log ↗
                      </a>
                    )}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Metadata row */}
          <div className="drawer-meta">
            <span className="drawer-meta-item">
              <span className="drawer-dot" style={{ background: dotColor }} />
              {STATUS_LABEL[claim.status] ?? claim.status}
            </span>
            <span className="drawer-meta-item">{claim.epistemic}</span>
            {claim['claim-type'] && (
              <span className="drawer-meta-item">{claim['claim-type']}</span>
            )}
            {claim.isAssessment && (
              <span className="drawer-meta-item drawer-meta-assessment">assessment</span>
            )}
          </div>

          {/* Relations */}
          {EDGES.map(({ key, label, desc }) => {
            const targets = ((claim[key] as string[] | undefined) ?? []).filter(Boolean);
            if (targets.length === 0) return null;
            return (
              <div key={key as string} className="drawer-edge-block">
                <div className="drawer-edge-label">{label}</div>
                <div className="drawer-edge-desc">{desc}</div>
                <div className="drawer-edge-targets">
                  {targets.map(t => {
                    const tc = bySlug[t];
                    return (
                      <button
                        key={t}
                        className="drawer-target-card"
                        onClick={() => tc && goTo(t)}
                        disabled={!tc}
                      >
                        <span className="drawer-target-meta">
                          {tc?.number && (
                            <span className="drawer-target-number">{tc.number}</span>
                          )}
                          <span className="drawer-target-slug">{t}</span>
                        </span>
                        {tc && (
                          <span className="drawer-target-text">
                            {(tc.displayClaim?.trim()) || tc.claim}
                          </span>
                        )}
                        {!tc && <span className="drawer-target-missing">(not in graph)</span>}
                      </button>
                    );
                  })}
                </div>
              </div>
            );
          })}

          {/* Footer: link to standalone page for full body markdown */}
          <div className="drawer-footer">
            <a
              href={`${baseUrl}/papers/${paperSlug}/${claim.slug}/`}
              className="drawer-full-link"
            >
              Open full claim page ↗
            </a>
          </div>
        </div>
      </aside>

      <style>{`
        .claim-drawer-backdrop {
          position: fixed;
          inset: 0;
          background: rgba(17, 24, 39, 0.35);
          z-index: 80;
          animation: fadeIn 0.15s ease;
        }
        .claim-drawer {
          position: fixed;
          top: 0;
          right: 0;
          bottom: 0;
          width: 40vw;
          min-width: 420px;
          max-width: 640px;
          background: #fff;
          box-shadow: -8px 0 24px rgba(17, 24, 39, 0.08);
          z-index: 90;
          display: flex;
          flex-direction: column;
          animation: slideIn 0.18s ease;
        }
        @media (max-width: 640px) {
          .claim-drawer {
            width: 100vw;
            min-width: 0;
            max-width: none;
          }
        }
        @keyframes fadeIn {
          from { opacity: 0; } to { opacity: 1; }
        }
        @keyframes slideIn {
          from { transform: translateX(30px); opacity: 0.4; }
          to { transform: translateX(0); opacity: 1; }
        }

        .drawer-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0.9rem 1.1rem;
          border-bottom: 1px solid #e5e7eb;
          flex-shrink: 0;
        }
        .drawer-header-left {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          flex-wrap: wrap;
          min-width: 0;
        }
        .drawer-back, .drawer-close {
          background: transparent;
          border: 1px solid #e5e7eb;
          color: #6b7280;
          width: 28px;
          height: 28px;
          border-radius: 4px;
          cursor: pointer;
          font-size: 16px;
          line-height: 1;
          display: inline-flex;
          align-items: center;
          justify-content: center;
        }
        .drawer-back:hover, .drawer-close:hover {
          border-color: #9ca3af;
          color: #111827;
        }
        .drawer-number {
          font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
          font-size: 13px;
          font-weight: 600;
          color: #374151;
          letter-spacing: 0.02em;
        }
        .drawer-role-chip {
          display: inline-block;
          font-size: 9.5px;
          font-weight: 600;
          letter-spacing: 0.05em;
          padding: 1px 6px;
          border-radius: 3px;
          border: 1px solid;
          text-transform: uppercase;
        }
        .drawer-panel {
          color: #94a3b8;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          font-size: 10px;
          font-variant: small-caps;
        }
        .drawer-header-title {
          font-size: 0.85rem;
          color: #374151;
          line-height: 1.35;
          flex: 1 1 auto;
          min-width: 0;
          overflow-wrap: anywhere;
        }

        .drawer-body {
          overflow-y: auto;
          padding: 1.1rem 1.1rem 2rem;
          flex: 1 1 auto;
        }
        .drawer-claim-main {
          font-size: 1.05rem;
          line-height: 1.55;
          color: #111827;
          margin: 0 0 0.9rem;
          font-weight: 500;
        }
        .drawer-original {
          margin: 0 0 1rem;
          padding: 0.55rem 0.7rem;
          background: #f9fafb;
          border-left: 3px solid #d1d5db;
          border-radius: 3px;
        }
        .drawer-original-label {
          font-size: 9.5px;
          font-weight: 600;
          letter-spacing: 0.08em;
          color: #9ca3af;
          text-transform: uppercase;
          font-variant: small-caps;
          margin-bottom: 0.25rem;
        }
        .drawer-original-text {
          font-size: 0.85rem;
          color: #4b5563;
          line-height: 1.5;
          margin: 0;
        }

        .drawer-evidence {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          margin: 0 0 1rem;
        }
        .drawer-figure {
          margin: 0;
        }
        .drawer-figure img {
          max-width: 100%;
          max-height: 500px;
          border: 1px solid #e5e7eb;
          border-radius: 4px;
          display: block;
        }
        .drawer-figure-caption {
          margin-top: 0.3rem;
          font-size: 0.72rem;
          color: #9ca3af;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          font-variant: small-caps;
        }

        .drawer-meta {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-bottom: 1.2rem;
          padding-bottom: 1rem;
          border-bottom: 1px solid #f3f4f6;
        }
        .drawer-meta-item {
          font-size: 11px;
          color: #4b5563;
          background: #f9fafb;
          padding: 2px 8px;
          border-radius: 3px;
          display: inline-flex;
          align-items: center;
          gap: 0.3rem;
        }
        .drawer-meta-assessment {
          background: #fdf4ff;
          color: #86198f;
        }
        .drawer-dot {
          width: 8px;
          height: 8px;
          border-radius: 999px;
          display: inline-block;
        }

        .drawer-edge-block {
          margin-bottom: 1rem;
        }
        .drawer-edge-label {
          font-size: 10.5px;
          font-weight: 600;
          letter-spacing: 0.08em;
          color: #374151;
          text-transform: uppercase;
          font-variant: small-caps;
        }
        .drawer-edge-desc {
          font-size: 0.72rem;
          color: #9ca3af;
          font-style: italic;
          margin: 0.1rem 0 0.4rem;
        }
        .drawer-edge-targets {
          display: flex;
          flex-direction: column;
          gap: 0.35rem;
        }
        .drawer-target-card {
          text-align: left;
          background: #fff;
          border: 1px solid #e5e7eb;
          border-radius: 4px;
          padding: 0.5rem 0.65rem;
          cursor: pointer;
          transition: border-color 0.12s ease, background 0.12s ease;
          display: flex;
          flex-direction: column;
          gap: 0.2rem;
          font: inherit;
          width: 100%;
        }
        .drawer-target-card:hover:not(:disabled) {
          border-color: #9ca3af;
          background: #fafafa;
        }
        .drawer-target-card:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }
        .drawer-target-meta {
          display: inline-flex;
          align-items: baseline;
          gap: 0.4rem;
        }
        .drawer-target-number {
          font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
          font-size: 11.5px;
          color: #4b5563;
          font-weight: 500;
        }
        .drawer-target-slug {
          font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
          font-size: 10.5px;
          color: #9ca3af;
        }
        .drawer-target-text {
          font-size: 0.85rem;
          color: #111827;
          line-height: 1.4;
        }
        .drawer-target-missing {
          font-size: 0.7rem;
          color: #9ca3af;
          font-style: italic;
        }

        .drawer-section-label {
          font-size: 10.5px;
          font-weight: 600;
          letter-spacing: 0.08em;
          color: #374151;
          text-transform: uppercase;
          font-variant: small-caps;
          margin: 0.4rem 0 0.55rem;
        }
        .drawer-repro {
          margin-top: 0;
          padding: 0.75rem 0.9rem;
          border: 1px solid #e5e7eb;
          border-radius: 4px;
          background: #fcfcfd;
        }
        .drawer-repro-row {
          display: flex;
          gap: 0.6rem;
          font-size: 0.78rem;
          padding: 0.15rem 0;
          align-items: baseline;
        }
        .drawer-repro-key {
          min-width: 6rem;
          font-size: 9.5px;
          font-weight: 600;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          color: #9ca3af;
        }
        .drawer-repro-val {
          flex: 1;
          color: #374151;
          font-size: 0.78rem;
          word-break: break-all;
        }
        .drawer-repro-link {
          color: #2563eb;
          font-size: 0.78rem;
          text-decoration: none;
          word-break: break-all;
        }
        .drawer-repro-link:hover { text-decoration: underline; }
        .drawer-repro-status {
          display: flex;
          align-items: center;
          gap: 0.3rem;
          font-size: 0.78rem;
          color: #374151;
          margin-top: 0.4rem;
        }
        .drawer-repro-time {
          color: #9ca3af;
        }
        .drawer-repro-note {
          margin-top: 0.4rem;
          font-size: 0.78rem;
          color: #4b5563;
          font-style: italic;
          line-height: 1.5;
        }
        .drawer-repro-prose {
          margin-top: 0.6rem;
          padding: 0.6rem 0.7rem;
          background: #fff;
          border: 1px solid #eef2f6;
          border-radius: 3px;
          font-size: 0.78rem;
          color: #374151;
          line-height: 1.55;
          white-space: pre-wrap;
        }
        .drawer-repro-links {
          display: flex;
          gap: 0.75rem;
          flex-wrap: wrap;
          margin-top: 0.6rem;
        }

        .drawer-footer {
          margin-top: 1.5rem;
          padding-top: 1rem;
          border-top: 1px solid #f3f4f6;
        }
        .drawer-full-link {
          color: #2563eb;
          font-size: 0.82rem;
          text-decoration: none;
        }
        .drawer-full-link:hover { text-decoration: underline; }

        .font-mono {
          font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
        }
      `}</style>
    </>
  );
}
