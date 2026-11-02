export function pageAuditError(expected, keyed, fallback) {
  if (keyed) return ['matched', 'snapshot-matched'].includes(keyed.status) && keyed.actual_item === expected ? undefined : 'identity or page rejected'
  if (!fallback || !['available', 'snapshot-available', 'matched', 'snapshot-matched', 'identity-conflict', 'no-item'].includes(fallback.status)) return 'page not confirmed'
  if (expected && fallback.actual_item !== expected) return 'identity not confirmed'
  return undefined
}
