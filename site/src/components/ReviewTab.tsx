import React, { useState, useRef, useEffect } from 'react';

const API_URL = typeof window !== 'undefined' && window.location.hostname === 'localhost'
  ? 'http://localhost:8081'
  : 'https://console.haak.world/elife-extract';

// ── Types ────────────────────────────────────────────────────────────

interface Persona {
  slug: string;
  name: string;
  type: 'personified' | 'generic';
  field?: string;
  seniority?: string;
  institution?: string;
  focus?: string;
}

interface Review {
  slug: string;
  name: string;
  type: string;
  review: string;
}

interface Concern {
  id: number;
  title: string;
  severity: string;
  reviewers: string[];
  claims_affected: string[];
  description: string;
}

interface Synthesis {
  assessment?: string;
  concerns?: Concern[];
  strengths?: string[];
  editorial_assessment?: string;
  raw?: string;
}

interface ReviewResult {
  reviews: Review[];
  synthesis: Synthesis;
  paper_title: string;
  n_claims: number;
}

interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}

interface Props {
  claims: any[];
  paperTitle: string;
  abstract: string;
}

// ── Severity badge ───────────────────────────────────────────────────

const sevColor: Record<string, string> = {
  critical: 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300',
  major: 'bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300',
  minor: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300',
};

const roleBadge: Record<string, string> = {
  personified: 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300',
  generic: 'bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-400',
};

// ── Main component ──────────────────────────────────────────────────

export default function ReviewTab({ claims, paperTitle, abstract }: Props) {
  const [phase, setPhase] = useState<'setup' | 'running' | 'results'>('setup');
  const [personas, setPersonas] = useState<{ personified: Persona[]; generic: Persona[] }>({ personified: [], generic: [] });
  const [selectedReviewers, setSelectedReviewers] = useState<Persona[]>([]);
  const [instructions, setInstructions] = useState('elife');
  const [apiKey, setApiKey] = useState('');
  const [demoToken, setDemoToken] = useState('');
  const [progress, setProgress] = useState<string[]>([]);
  const [result, setResult] = useState<ReviewResult | null>(null);
  const [activeReviewer, setActiveReviewer] = useState<string | null>(null);
  const [chatTarget, setChatTarget] = useState<string | null>(null);
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([]);
  const [chatInput, setChatInput] = useState('');
  const [chatStreaming, setChatStreaming] = useState(false);
  const [searchFilter, setSearchFilter] = useState('');
  const chatEndRef = useRef<HTMLDivElement>(null);

  // Load personas — what you see depends on your token/key
  useEffect(() => {
    const tokenParam = demoToken ? `?demo_token=${encodeURIComponent(demoToken)}` : '';
    fetch(`${API_URL}/review/personas${tokenParam}`)
      .then(r => r.json())
      .then(d => setPersonas({ personified: d.personified || [], generic: d.generic || [] }))
      .catch(() => {});
  }, [demoToken]);

  // Auto-scroll chat
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [chatMessages]);

  // ── Panel setup ──────────────────────────────────────────────────

  const toggleReviewer = (p: Persona) => {
    setSelectedReviewers(prev =>
      prev.some(r => r.slug === p.slug)
        ? prev.filter(r => r.slug !== p.slug)
        : [...prev, p]
    );
  };

  const filteredPersonified = personas.personified.filter(p =>
    !searchFilter || p.name.toLowerCase().includes(searchFilter.toLowerCase())
    || (p.field || '').toLowerCase().includes(searchFilter.toLowerCase())
    || (p.institution || '').toLowerCase().includes(searchFilter.toLowerCase())
  );

  // ── Run review ───────────────────────────────────────────────────

  const runReview = async () => {
    if (selectedReviewers.length === 0) return;
    setPhase('running');
    setProgress([]);
    setResult(null);

    try {
      const resp = await fetch(`${API_URL}/review/run`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          claims,
          abstract,
          paper_title: paperTitle,
          reviewers: selectedReviewers.map(r => ({
            slug: r.slug,
            name: r.name,
            type: r.type,
            field: r.field,
            focus: r.focus,
          })),
          instructions,
          api_key: apiKey,
          demo_token: demoToken,
        }),
      });

      const reader = resp.body!.getReader();
      const decoder = new TextDecoder();
      let buffer = '';

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        buffer += decoder.decode(value, { stream: true });
        const lines = buffer.split('\n');
        buffer = lines.pop() || '';
        for (const line of lines) {
          if (!line.startsWith('data: ')) continue;
          try {
            const event = JSON.parse(line.slice(6));
            if (event.message) setProgress(prev => [...prev, event.message]);
            if (event.step === 'done' && event.result) {
              setResult(event.result);
              setPhase('results');
            }
            if (event.step === 'error') {
              setProgress(prev => [...prev, `Error: ${event.message}`]);
              setPhase('setup');
            }
          } catch {}
        }
      }
    } catch (e: any) {
      setProgress(prev => [...prev, `Error: ${e.message}`]);
      setPhase('setup');
    }
  };

  // ── Chat ──────────────────────────────────────────────────────────

  const sendChat = async () => {
    if (!chatInput.trim() || !chatTarget || !result) return;
    const userMsg: ChatMessage = { role: 'user', content: chatInput.trim() };
    const newMessages = [...chatMessages, userMsg];
    setChatMessages(newMessages);
    setChatInput('');
    setChatStreaming(true);

    const review = result.reviews.find(r => r.slug === chatTarget);
    const context: any = {};
    if (chatTarget === 'editor') {
      context.synthesis = JSON.stringify(result.synthesis);
      context.assessment = result.synthesis.editorial_assessment || '';
      context.instructions = instructions;
    } else if (review) {
      context.name = review.name;
      context.review = review.review;
      context.persona = '';
      context.instructions = instructions;
    }

    try {
      const resp = await fetch(`${API_URL}/review/chat`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          role: chatTarget,
          messages: newMessages,
          context,
          api_key: apiKey,
          demo_token: demoToken,
        }),
      });

      const reader = resp.body!.getReader();
      const decoder = new TextDecoder();
      let buffer = '';
      let assistantText = '';

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        buffer += decoder.decode(value, { stream: true });
        const lines = buffer.split('\n');
        buffer = lines.pop() || '';
        for (const line of lines) {
          if (!line.startsWith('data: ')) continue;
          try {
            const event = JSON.parse(line.slice(6));
            if (event.token) {
              assistantText += event.token;
              setChatMessages([...newMessages, { role: 'assistant', content: assistantText }]);
            }
          } catch {}
        }
      }
      setChatMessages([...newMessages, { role: 'assistant', content: assistantText }]);
    } catch {}
    setChatStreaming(false);
  };

  // ── Render: Setup ─────────────────────────────────────────────────

  if (phase === 'setup') {
    return (
      <div className="space-y-6">
        {/* Auth */}
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-medium text-gray-500 mb-1">Anthropic API key (optional)</label>
            <input type="password" value={apiKey} onChange={e => setApiKey(e.target.value)}
              placeholder="sk-ant-..." className="w-full px-3 py-1.5 border border-gray-200 dark:border-gray-700 rounded-lg text-sm bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100" />
          </div>
          <div>
            <label className="block text-xs font-medium text-gray-500 mb-1">Demo token (if no API key)</label>
            <input type="password" value={demoToken} onChange={e => setDemoToken(e.target.value)}
              placeholder="demo token" className="w-full px-3 py-1.5 border border-gray-200 dark:border-gray-700 rounded-lg text-sm bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100" />
          </div>
        </div>

        {/* Instructions */}
        <div>
          <label className="block text-xs font-medium text-gray-500 mb-1">Review instructions</label>
          <select value={instructions} onChange={e => setInstructions(e.target.value)}
            className="px-3 py-1.5 border border-gray-200 dark:border-gray-700 rounded-lg text-sm bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100">
            <option value="elife">eLife (publish-review-curate)</option>
            <option value="standard">Standard journal</option>
            <option value="methods-focused">Methods focused</option>
          </select>
        </div>

        {/* Selected panel */}
        {selectedReviewers.length > 0 && (
          <div className="p-3 bg-amber-50 dark:bg-amber-900/10 border border-amber-200 dark:border-amber-800 rounded-lg">
            <div className="text-xs font-medium text-amber-800 dark:text-amber-300 mb-2">
              Panel ({selectedReviewers.length} reviewers)
            </div>
            <div className="flex flex-wrap gap-2">
              {selectedReviewers.map(r => (
                <button key={r.slug} onClick={() => toggleReviewer(r)}
                  className="text-xs px-2 py-1 bg-white dark:bg-gray-800 border border-amber-300 dark:border-amber-700 rounded text-gray-700 dark:text-gray-300 hover:bg-red-50 dark:hover:bg-red-900/20">
                  {r.name} ×
                </button>
              ))}
            </div>
            <button onClick={runReview} disabled={!apiKey && !demoToken}
              className="mt-3 px-4 py-2 bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 text-sm font-medium rounded-lg hover:bg-gray-700 dark:hover:bg-gray-300 disabled:opacity-50 cursor-pointer">
              Run review ({selectedReviewers.length} reviewers, ~{selectedReviewers.length * 2 + 3} min)
            </button>
          </div>
        )}

        {/* Personified — only shown when token grants access */}
        {personas.personified.length > 0 && <div>
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300">Personified reviewers</h3>
            <input type="text" placeholder="Filter..." value={searchFilter} onChange={e => setSearchFilter(e.target.value)}
              className="px-2 py-1 border border-gray-200 dark:border-gray-700 rounded text-xs bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 w-48" />
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-xs">
              <thead>
                <tr className="border-b border-gray-200 dark:border-gray-700 text-gray-500 dark:text-gray-400">
                  <th className="text-left py-1.5 pr-3 font-medium"></th>
                  <th className="text-left py-1.5 pr-3 font-medium">Name</th>
                  <th className="text-left py-1.5 pr-3 font-medium">Field</th>
                  <th className="text-left py-1.5 pr-3 font-medium">Seniority</th>
                  <th className="text-left py-1.5 pr-3 font-medium">Institution</th>
                </tr>
              </thead>
              <tbody>
                {filteredPersonified.slice(0, 30).map(p => {
                  const selected = selectedReviewers.some(r => r.slug === p.slug);
                  return (
                    <tr key={p.slug} onClick={() => toggleReviewer(p)}
                      className={`border-b border-gray-100 dark:border-gray-800 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800/50 ${selected ? 'bg-amber-50 dark:bg-amber-900/10' : ''}`}>
                      <td className="py-1.5 pr-2">
                        <input type="checkbox" checked={selected} readOnly className="accent-amber-600" />
                      </td>
                      <td className="py-1.5 pr-3 font-medium text-gray-900 dark:text-gray-100">{p.name}</td>
                      <td className="py-1.5 pr-3 text-gray-600 dark:text-gray-400">{(p.field || '').slice(0, 50)}</td>
                      <td className="py-1.5 pr-3 text-gray-500 dark:text-gray-400">{p.seniority || ''}</td>
                      <td className="py-1.5 pr-3 text-gray-500 dark:text-gray-400">{p.institution || ''}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
            {filteredPersonified.length > 30 && (
              <p className="text-xs text-gray-400 mt-1">{filteredPersonified.length - 30} more — refine your filter</p>
            )}
          </div>
        </div>}

        {/* Generic */}
        <div>
          <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Generic reviewers</h3>
          <div className="grid sm:grid-cols-2 gap-2">
            {personas.generic.map(p => {
              const selected = selectedReviewers.some(r => r.slug === p.slug);
              return (
                <button key={p.slug} onClick={() => toggleReviewer(p)}
                  className={`text-left p-3 border rounded-lg text-xs transition-all ${selected ? 'border-amber-400 dark:border-amber-600 bg-amber-50 dark:bg-amber-900/10' : 'border-gray-200 dark:border-gray-700 hover:border-gray-400 dark:hover:border-gray-500'}`}>
                  <div className="font-medium text-gray-900 dark:text-gray-100">{p.name}</div>
                  <div className="text-gray-500 dark:text-gray-400 mt-0.5">{p.focus || p.field}</div>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    );
  }

  // ── Render: Running ───────────────────────────────────────────────

  if (phase === 'running') {
    return (
      <div className="space-y-2 text-sm">
        <h3 className="font-semibold text-gray-700 dark:text-gray-300">Review in progress...</h3>
        {progress.map((msg, i) => (
          <div key={i} className="text-gray-600 dark:text-gray-400">{msg}</div>
        ))}
        <div className="animate-pulse text-gray-400">Waiting for next step...</div>
      </div>
    );
  }

  // ── Render: Results ───────────────────────────────────────────────

  if (!result) return null;
  const concerns = result.synthesis.concerns || [];
  const activeReview = result.reviews.find(r => r.slug === activeReviewer);

  return (
    <div>
      {/* Reviewer tabs */}
      <div className="flex gap-2 mb-4 flex-wrap">
        <button onClick={() => { setActiveReviewer(null); setChatTarget(null); }}
          className={`text-xs px-3 py-1.5 rounded-lg font-medium transition-all ${!activeReviewer ? 'bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900' : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700'}`}>
          Overview
        </button>
        {result.reviews.map(r => (
          <button key={r.slug} onClick={() => { setActiveReviewer(r.slug); setChatTarget(null); setChatMessages([]); }}
            className={`text-xs px-3 py-1.5 rounded-lg font-medium transition-all ${activeReviewer === r.slug ? 'bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900' : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700'}`}>
            {r.name}
          </button>
        ))}
        <button onClick={() => { setActiveReviewer(null); setChatTarget('editor'); setChatMessages([]); }}
          className={`text-xs px-3 py-1.5 rounded-lg font-medium transition-all ${chatTarget === 'editor' ? 'bg-amber-600 text-white' : 'bg-amber-100 dark:bg-amber-900/20 text-amber-700 dark:text-amber-400 hover:bg-amber-200 dark:hover:bg-amber-900/30'}`}>
          Editor
        </button>
      </div>

      {/* Overview */}
      {!activeReviewer && chatTarget !== 'editor' && (
        <div className="space-y-4">
          {/* Stats */}
          <div className="grid grid-cols-3 gap-3">
            <div className="bg-gray-50 dark:bg-gray-800/50 rounded-lg p-3">
              <div className="text-2xl font-semibold text-gray-900 dark:text-gray-100">{result.reviews.length}</div>
              <div className="text-xs text-gray-500">reviewers</div>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800/50 rounded-lg p-3">
              <div className="text-2xl font-semibold text-gray-900 dark:text-gray-100">{concerns.length}</div>
              <div className="text-xs text-gray-500">concerns</div>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800/50 rounded-lg p-3">
              <div className="text-2xl font-semibold text-gray-900 dark:text-gray-100">{result.n_claims}</div>
              <div className="text-xs text-gray-500">claims reviewed</div>
            </div>
          </div>

          {/* Editorial assessment */}
          {result.synthesis.editorial_assessment && (
            <div className="p-4 bg-amber-50 dark:bg-amber-900/10 border border-amber-200 dark:border-amber-800 rounded-lg">
              <h4 className="text-xs font-semibold text-amber-800 dark:text-amber-300 uppercase tracking-wider mb-2">Editorial assessment</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300 whitespace-pre-wrap">{result.synthesis.editorial_assessment}</p>
            </div>
          )}

          {/* Concerns */}
          {concerns.length > 0 && (
            <div>
              <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">Concerns</h4>
              <div className="space-y-2">
                {concerns.map(c => (
                  <div key={c.id} className="border border-gray-200 dark:border-gray-700 rounded-lg p-3">
                    <div className="flex items-center gap-2 mb-1">
                      <span className={`text-[10px] font-semibold px-1.5 py-0.5 rounded ${sevColor[c.severity?.toLowerCase()] || 'bg-gray-100 text-gray-700'}`}>
                        {c.severity}
                      </span>
                      <span className="text-sm font-medium text-gray-900 dark:text-gray-100">C{c.id}. {c.title}</span>
                    </div>
                    <p className="text-xs text-gray-600 dark:text-gray-400 mb-1">{c.description}</p>
                    <div className="flex gap-3 text-[10px] text-gray-400">
                      <span>Reviewers: {(c.reviewers || []).join(', ')}</span>
                      {c.claims_affected?.length > 0 && (
                        <span>Claims: {c.claims_affected.join(', ')}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Strengths */}
          {result.synthesis.strengths && result.synthesis.strengths.length > 0 && (
            <div>
              <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Strengths</h4>
              <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                {result.synthesis.strengths.map((s, i) => (
                  <li key={i}>• {s}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}

      {/* Individual reviewer */}
      {activeReview && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-semibold text-gray-900 dark:text-gray-100">{activeReview.name}</h3>
            <button onClick={() => { setChatTarget(activeReview.slug); setChatMessages([]); }}
              className="text-xs px-3 py-1.5 bg-blue-100 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 rounded-lg hover:bg-blue-200 dark:hover:bg-blue-900/30">
              Chat with {activeReview.name}
            </button>
          </div>
          <div className="text-sm text-gray-700 dark:text-gray-300 whitespace-pre-wrap leading-relaxed">
            {activeReview.review}
          </div>
        </div>
      )}

      {/* Chat */}
      {chatTarget && (
        <div className="mt-4 border border-gray-200 dark:border-gray-700 rounded-lg">
          <div className="p-3 border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50 rounded-t-lg">
            <span className="text-xs font-semibold text-gray-500">
              Chat with {chatTarget === 'editor' ? 'the editor' : result.reviews.find(r => r.slug === chatTarget)?.name || chatTarget}
            </span>
          </div>
          <div className="p-3 max-h-80 overflow-y-auto space-y-3">
            {chatMessages.map((msg, i) => (
              <div key={i} className={`text-sm ${msg.role === 'user' ? 'text-gray-900 dark:text-gray-100' : 'text-gray-600 dark:text-gray-400'}`}>
                <span className="text-[10px] font-semibold text-gray-400 uppercase">{msg.role === 'user' ? 'You' : chatTarget === 'editor' ? 'Editor' : result.reviews.find(r => r.slug === chatTarget)?.name}</span>
                <p className="mt-0.5 whitespace-pre-wrap">{msg.content}</p>
              </div>
            ))}
            <div ref={chatEndRef} />
          </div>
          <div className="p-3 border-t border-gray-200 dark:border-gray-700 flex gap-2">
            <input type="text" value={chatInput} onChange={e => setChatInput(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && !chatStreaming && sendChat()}
              placeholder={`Ask ${chatTarget === 'editor' ? 'the editor' : result.reviews.find(r => r.slug === chatTarget)?.name}...`}
              disabled={chatStreaming}
              className="flex-1 px-3 py-1.5 border border-gray-200 dark:border-gray-700 rounded-lg text-sm bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100" />
            <button onClick={sendChat} disabled={chatStreaming || !chatInput.trim()}
              className="px-4 py-1.5 bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 text-sm rounded-lg hover:bg-gray-700 dark:hover:bg-gray-300 disabled:opacity-50 cursor-pointer">
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
