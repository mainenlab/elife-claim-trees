export const STATUS_COLOR: Record<string, string> = {
  // Verified statuses (green family)
  'verified': '#22c55e',
  'verified:partial': '#86efac',
  'verified:with-nuance': '#fbbf24',
  'verified:direction-and-trend': '#86efac',
  'verified:interpretive': '#22c55e',
  // Failed (red)
  'failed': '#ef4444',
  'failed:mismatch': '#ef4444',
  // Unverified with reason (gray/orange)
  'unverified:no-data': '#9ca3af',
  'unverified:no-code': '#9ca3af',
  'unverified': '#9ca3af',
  'unverified:code-error': '#f97316',
  'unverified:compute-infeasible': '#f97316',
  'unverified:partial': '#f97316',
  // Unknown (lightest gray — role will override)
  'unknown': '#d1d5db',
  'N/A': '#d1d5db',
};

// Role-based colors for claims that don't get code verification
export const ROLE_COLOR: Record<string, string> = {
  'hypothesis': '#60a5fa',
  'prediction': '#60a5fa',
  'literature-context': '#a78bfa',
  'synthesis': '#60a5fa',
  'interpretation': '#60a5fa',
  'scope': '#94a3b8',
  'methodological': '#94a3b8',
};

export const STATUS_LABEL: Record<string, string> = {
  'verified': 'Verified',
  'verified:partial': 'Partially verified',
  'verified:with-nuance': 'Verified with nuance',
  'verified:direction-and-trend': 'Direction confirmed',
  'verified:interpretive': 'Verified by reasoning',
  'failed': 'Failed',
  'failed:mismatch': 'Result mismatch',
  'unverified:no-data': 'No data',
  'unverified:no-code': 'No code',
  'unverified': 'Unverified',
  'unverified:code-error': 'Code error',
  'unverified:compute-infeasible': 'Compute-infeasible',
  'unverified:partial': 'Partially assessed',
  'unknown': 'Unknown',
  'N/A': 'N/A',
};

export const STATUS_TAILWIND: Record<string, string> = {
  'verified': 'bg-green-100 text-green-800',
  'verified:partial': 'bg-green-50 text-green-700',
  'verified:with-nuance': 'bg-amber-50 text-amber-800',
  'verified:direction-and-trend': 'bg-green-50 text-green-700',
  'verified:interpretive': 'bg-green-100 text-green-800',
  'failed': 'bg-red-100 text-red-800',
  'failed:mismatch': 'bg-red-100 text-red-800',
  'unverified:no-data': 'bg-gray-100 text-gray-700',
  'unverified:no-code': 'bg-gray-100 text-gray-700',
  'unverified': 'bg-gray-100 text-gray-700',
  'unverified:code-error': 'bg-orange-100 text-orange-800',
  'unverified:compute-infeasible': 'bg-orange-100 text-orange-800',
  'unknown': 'bg-gray-50 text-gray-500',
};

export const EPISTEMIC_TAILWIND: Record<string, string> = {
  'strong': 'bg-blue-100 text-blue-800',
  'moderate': 'bg-yellow-100 text-yellow-800',
  'weak': 'bg-red-100 text-red-800',
  'contested': 'bg-red-100 text-red-800',
  'hypothesis': 'bg-blue-50 text-blue-700',
  'unknown': 'bg-gray-100 text-gray-600',
};

export function nodeColor(status: string, role?: string | null): string {
  // If status is known and specific, use it
  if (status && status !== 'unknown' && STATUS_COLOR[status]) {
    return STATUS_COLOR[status];
  }
  // For unknown/unset status, use role-based color
  if (role && ROLE_COLOR[role]) {
    return ROLE_COLOR[role];
  }
  return STATUS_COLOR[status] ?? '#d1d5db';
}
