import React, { useCallback, useEffect, useMemo, useState } from 'react';
import ReactFlow, {
  Background,
  Controls,
  MiniMap,
  type Node,
  type Edge,
  type NodeTypes,
  useNodesState,
  useEdgesState,
  useReactFlow,
  ReactFlowProvider,
  Panel,
} from 'reactflow';
import 'reactflow/dist/style.css';
import dagre from '@dagrejs/dagre';
import { nodeColor } from '../lib/status';

interface Claim {
  slug: string;
  paper: string;
  claim: string;
  panel: string;
  epistemic: string;
  status: string;
  isAssessment: boolean;
  requires: string[];
  supports: string[];
  notes: string;
}

interface Props {
  claims: Claim[];
  paperSlug: string;
}

// Custom node renderer
function ClaimNode({ data, selected }: { data: any; selected: boolean }) {
  const color = nodeColor(data.status);
  const isAssessment = data.isAssessment;
  const size = Math.max(80, Math.min(160, 80 + data.dependentCount * 8));

  return (
    <div
      title={data.claim}
      style={{
        width: size,
        height: 36,
        border: `2px ${isAssessment ? 'dashed' : 'solid'} ${color}`,
        borderRadius: 6,
        background: selected ? `${color}22` : data.highlighted ? `${color}18` : `${color}10`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '0 8px',
        cursor: 'pointer',
        transition: 'all 0.15s',
        outline: selected ? `2px solid ${color}` : 'none',
        outlineOffset: 2,
      }}
    >
      <span
        style={{
          fontSize: 10,
          fontWeight: 500,
          color: '#111',
          textOverflow: 'ellipsis',
          overflow: 'hidden',
          whiteSpace: 'nowrap',
          width: '100%',
          textAlign: 'center',
        }}
      >
        {data.slug}
      </span>
    </div>
  );
}

const nodeTypes: NodeTypes = { claimNode: ClaimNode as any };

function layoutGraph(claims: Claim[]): { nodes: Node[]; edges: Edge[] } {
  const g = new dagre.graphlib.Graph();
  g.setDefaultEdgeLabel(() => ({}));
  g.setGraph({ rankdir: 'LR', nodesep: 20, ranksep: 60, marginx: 20, marginy: 20 });

  // Count dependents for sizing
  const dependentCount: Record<string, number> = {};
  for (const c of claims) {
    if (!dependentCount[c.slug]) dependentCount[c.slug] = 0;
    for (const req of c.requires) {
      dependentCount[req] = (dependentCount[req] || 0) + 1;
    }
  }

  for (const c of claims) {
    const size = Math.max(80, Math.min(160, 80 + (dependentCount[c.slug] || 0) * 8));
    g.setNode(c.slug, { width: size, height: 36 });
  }

  const edges: Edge[] = [];

  for (const c of claims) {
    for (const req of c.requires) {
      if (claims.find(x => x.slug === req)) {
        g.setEdge(req, c.slug);
        edges.push({
          id: `req-${req}-${c.slug}`,
          source: req,
          target: c.slug,
          type: 'smoothstep',
          style: { stroke: '#d1d5db', strokeWidth: 1.5 },
          markerEnd: { type: 'arrowclosed' as any, width: 12, height: 12, color: '#d1d5db' },
        });
      }
    }
    for (const sup of c.supports) {
      if (claims.find(x => x.slug === sup)) {
        edges.push({
          id: `sup-${c.slug}-${sup}`,
          source: c.slug,
          target: sup,
          type: 'smoothstep',
          style: { stroke: '#86efac', strokeWidth: 1.5, strokeDasharray: '5 3' },
          markerEnd: { type: 'arrowclosed' as any, width: 12, height: 12, color: '#86efac' },
        });
      }
    }
  }

  dagre.layout(g);

  const nodes: Node[] = claims.map(c => {
    const pos = g.node(c.slug);
    const size = Math.max(80, Math.min(160, 80 + (dependentCount[c.slug] || 0) * 8));
    return {
      id: c.slug,
      type: 'claimNode',
      position: { x: pos.x - size / 2, y: pos.y - 18 },
      data: {
        ...c,
        dependentCount: dependentCount[c.slug] || 0,
        highlighted: false,
      },
    };
  });

  return { nodes, edges };
}

function DAGInner({ claims, paperSlug }: Props) {
  const { nodes: initialNodes, edges: initialEdges } = useMemo(() => layoutGraph(claims), [claims]);
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const [selected, setSelected] = useState<Claim | null>(null);
  const { fitView } = useReactFlow();

  useEffect(() => { setTimeout(() => fitView({ padding: 0.15 }), 50); }, []);

  // Build adjacency for highlighting
  const claimBySlug = useMemo(() => {
    const m: Record<string, Claim> = {};
    for (const c of claims) m[c.slug] = c;
    return m;
  }, [claims]);

  const onNodeClick = useCallback((_: any, node: Node) => {
    const claim = claimBySlug[node.id];
    if (!claim) return;
    setSelected(claim);

    // Compute ancestors and descendants
    const ancestors = new Set<string>();
    const descendants = new Set<string>();

    function walkUp(slug: string) {
      const c = claimBySlug[slug];
      if (!c) return;
      for (const r of c.requires) {
        if (!ancestors.has(r)) { ancestors.add(r); walkUp(r); }
      }
    }
    function walkDown(slug: string) {
      for (const c of claims) {
        if (c.requires.includes(slug) && !descendants.has(c.slug)) {
          descendants.add(c.slug);
          walkDown(c.slug);
        }
      }
    }
    walkUp(node.id);
    walkDown(node.id);

    setNodes(nds => nds.map(n => ({
      ...n,
      data: {
        ...n.data,
        highlighted: ancestors.has(n.id) ? 'ancestor' : descendants.has(n.id) ? 'descendant' : false,
      },
      style: {
        opacity: (n.id === node.id || ancestors.has(n.id) || descendants.has(n.id)) ? 1 : 0.35,
      },
    })));

    setEdges(eds => eds.map(e => ({
      ...e,
      style: {
        ...e.style,
        opacity: (e.source === node.id || e.target === node.id ||
          ancestors.has(e.source) || ancestors.has(e.target) ||
          descendants.has(e.source) || descendants.has(e.target)) ? 1 : 0.15,
      },
    })));
  }, [claimBySlug, claims]);

  const onPaneClick = useCallback(() => {
    setSelected(null);
    setNodes(nds => nds.map(n => ({ ...n, style: { opacity: 1 }, data: { ...n.data, highlighted: false } })));
    setEdges(eds => eds.map(e => ({ ...e, style: { ...e.style, opacity: 1 } })));
  }, []);

  return (
    <div className="flex h-full">
      {/* DAG canvas */}
      <div className="flex-1 h-full">
        <ReactFlow
          nodes={nodes}
          edges={edges}
          nodeTypes={nodeTypes}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onNodeClick={onNodeClick}
          onPaneClick={onPaneClick}
          fitView
          minZoom={0.2}
          maxZoom={3}
          proOptions={{ hideAttribution: true }}
        >
          <Background color="#f3f4f6" gap={20} />
          <Controls />
          <MiniMap
            nodeColor={(n) => nodeColor((n.data as any)?.status ?? 'unknown')}
            style={{ background: '#f9fafb' }}
          />
          <Panel position="top-left">
            <div className="bg-white border border-gray-200 rounded-lg p-3 text-xs shadow-sm space-y-1.5">
              <div className="font-semibold text-gray-700 mb-1">Status</div>
              {[
                ['#22c55e', 'Verified'],
                ['#eab308', 'Unverified (clear path)'],
                ['#ef4444', 'Failed'],
                ['#9ca3af', 'Unverified: no data/code'],
                ['#f97316', 'Code error / compute'],
              ].map(([color, label]) => (
                <div key={label} className="flex items-center gap-1.5">
                  <span style={{ width: 10, height: 10, borderRadius: 2, background: color, display: 'inline-block' }} />
                  <span className="text-gray-600">{label}</span>
                </div>
              ))}
              <div className="border-t border-gray-100 pt-1.5 mt-1 space-y-1">
                <div className="flex items-center gap-1.5">
                  <span style={{ width: 22, height: 8, border: '1.5px solid #6b7280', display: 'inline-block', borderRadius: 1 }} />
                  <span className="text-gray-600">Result claim</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span style={{ width: 22, height: 8, border: '1.5px dashed #6b7280', display: 'inline-block', borderRadius: 1 }} />
                  <span className="text-gray-600">Assessment claim</span>
                </div>
              </div>
            </div>
          </Panel>
        </ReactFlow>
      </div>

      {/* Sidebar */}
      {selected && (
        <div className="w-80 border-l border-gray-200 bg-white overflow-y-auto flex-shrink-0">
          <div className="p-4 space-y-4">
            <div className="flex items-start justify-between gap-2">
              <h3 className="font-semibold text-sm text-gray-900 leading-snug">{selected.slug}</h3>
              <button
                onClick={onPaneClick}
                className="text-gray-400 hover:text-gray-600 text-xs flex-shrink-0"
              >✕</button>
            </div>

            <p className="text-sm text-gray-700 leading-relaxed">{selected.claim}</p>

            <div className="flex flex-wrap gap-1.5">
              <span
                className="inline-block px-2 py-0.5 rounded text-xs font-medium"
                style={{ background: nodeColor(selected.status) + '22', color: '#111', border: `1px solid ${nodeColor(selected.status)}` }}
              >{selected.status}</span>
              <span className="inline-block px-2 py-0.5 rounded text-xs font-medium bg-gray-100 text-gray-700">
                {selected.epistemic}
              </span>
              {selected.isAssessment && (
                <span className="inline-block px-2 py-0.5 rounded text-xs font-medium bg-purple-50 text-purple-700 border border-purple-200">
                  assessment
                </span>
              )}
            </div>

            {selected.panel && (
              <div className="text-xs text-gray-500">Panel: {selected.panel}</div>
            )}

            {selected.requires.length > 0 && (
              <div>
                <div className="text-xs font-semibold text-gray-500 mb-1">Requires</div>
                <div className="flex flex-col gap-1">
                  {selected.requires.map(r => (
                    <a
                      key={r}
                      href={`/papers/${paperSlug}/${r}`}
                      className="text-xs text-blue-600 hover:underline truncate"
                    >{r}</a>
                  ))}
                </div>
              </div>
            )}

            {selected.supports.length > 0 && (
              <div>
                <div className="text-xs font-semibold text-gray-500 mb-1">Supports</div>
                <div className="flex flex-col gap-1">
                  {selected.supports.map(s => (
                    <a
                      key={s}
                      href={`/papers/${paperSlug}/${s}`}
                      className="text-xs text-green-700 hover:underline truncate"
                    >{s}</a>
                  ))}
                </div>
              </div>
            )}

            {selected.notes && (
              <div>
                <div className="text-xs font-semibold text-gray-500 mb-1">Notes</div>
                <p className="text-xs text-gray-600 leading-relaxed whitespace-pre-wrap">{selected.notes}</p>
              </div>
            )}

            <a
              href={`/papers/${paperSlug}/${selected.slug}`}
              className="block text-xs text-center py-1.5 px-3 border border-gray-200 rounded hover:bg-gray-50 text-gray-600 no-underline"
            >
              View full claim →
            </a>
          </div>
        </div>
      )}
    </div>
  );
}

export default function ClaimDAG(props: Props) {
  return (
    <ReactFlowProvider>
      <DAGInner {...props} />
    </ReactFlowProvider>
  );
}
