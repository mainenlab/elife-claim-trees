export const STATUS_COLOR: Record<string, string> = {
  'verified': '#22c55e',
  'failed': '#ef4444',
  'unverified:no-data': '#9ca3af',
  'unverified:no-code': '#9ca3af',
  'unverified': '#9ca3af',
  'unverified:code-error': '#f97316',
  'unverified:compute-infeasible': '#f97316',
  'unknown': '#d1d5db',
};

export const STATUS_LABEL: Record<string, string> = {
  'verified': 'Verified',
  'failed': 'Failed',
  'unverified:no-data': 'No data',
  'unverified:no-code': 'No code',
  'unverified': 'Unverified',
  'unverified:code-error': 'Code error',
  'unverified:compute-infeasible': 'Compute-infeasible',
  'unknown': 'Unknown',
};

export const STATUS_TAILWIND: Record<string, string> = {
  'verified': 'bg-green-100 text-green-800',
  'failed': 'bg-red-100 text-red-800',
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
  'unknown': 'bg-gray-100 text-gray-600',
};

export function nodeColor(status: string): string {
  return STATUS_COLOR[status] ?? '#d1d5db';
}
