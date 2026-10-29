// Identity matching is deliberately separate from publication. An exact
// scientific name is a candidate, not proof that two taxon concepts match.
export function canonicalName(row) {
  const name = String(row.scientificName ?? '').trim()
  const author = String(row.authorship ?? '').trim()
  return author && name.endsWith(author) ? name.slice(0, -author.length).trim() : name
}

export function classify(row, candidates) {
  const exactId = candidates.filter(candidate => candidate.colIds.includes(row.id))
  if (exactId.length === 1) return { status: 'matched-col-id', item: exactId[0].item, articles: exactId[0].articles }
  if (exactId.length > 1) return { status: 'ambiguous-col-id', candidates: exactId.map(candidate => candidate.item) }
  if (!candidates.length) return { status: 'unresolved', reason: 'no-exact-wikidata-name' }
  const ranks = { species: 'Q7432', genus: 'Q34740' }
  const rank = ranks[row.rank]
  if (rank && row.parentName) {
    const contextual = candidates.filter(candidate => candidate.ranks?.some(value => value.endsWith('/' + rank))
      && candidate.parentNames?.includes(row.parentName))
    if (contextual.length === 1) return { status: 'matched-name-parent-rank', item: contextual[0].item, articles: contextual[0].articles }
    if (contextual.length > 1) return { status: 'ambiguous-name-parent-rank', candidates: contextual.map(candidate => candidate.item) }
  }
  if (candidates.length > 1) return { status: 'ambiguous-name', candidates: candidates.map(candidate => candidate.item) }
  return { status: 'candidate-name', item: candidates[0].item, articles: candidates[0].articles }
}
