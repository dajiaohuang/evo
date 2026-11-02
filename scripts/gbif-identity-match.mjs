export function gbifExactRelationship(a, b) {
  const ak = a?.acceptedUsageKey ?? a?.usageKey
  const bk = b?.acceptedUsageKey ?? b?.usageKey
  if (a?.matchType !== 'EXACT' || b?.matchType !== 'EXACT' || !ak || !bk) return 'unknown'
  return ak === bk ? 'same' : 'distinct'
}
