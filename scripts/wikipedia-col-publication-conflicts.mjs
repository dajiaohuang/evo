export function publicationConflictAllowed(option, conflicts, auditedPair) {
  if (!option.url || !conflicts.has(option.url)) return true
  const expected = /^https:\/\/www\.wikidata\.org\/entity\/(Q\d+)$/.exec(option.item ?? '')?.[1]
  if (!expected) return false
  const evidence = auditedPair(option.url, option.item)
  return ['matched', 'snapshot-matched'].includes(evidence?.status) && evidence.actual_item === expected
}
