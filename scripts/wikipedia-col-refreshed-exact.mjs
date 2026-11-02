export function selectRefreshedExact(rows, identityItem, isHeld, usableForNode, pageMatchesItem) {
  return rows.find(row => row.item === identityItem && !isHeld(row.item, row.url) && usableForNode(row.url) && pageMatchesItem(row.url, row.item))
}

export function canUseSupplementalExact(status) {
  return ['unresolved', 'candidate-name', 'ambiguous-name', 'matched-name-parent-rank'].includes(status)
}
