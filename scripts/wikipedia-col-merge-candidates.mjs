// Merge independently retrieved Wikidata statements without losing prior matches.
export function mergeCandidates(previous, incoming) {
  const merged = new Map()
  for (const candidate of [...previous, ...incoming]) {
    let entry = merged.get(candidate.item)
    if (!entry) {
      entry = { item: candidate.item, ranks: [], colIds: [], parentNames: [], articles: [] }
      merged.set(candidate.item, entry)
    }
    for (const key of ['ranks', 'colIds', 'parentNames', 'articles']) {
      entry[key] = [...new Set([...entry[key], ...(candidate[key] ?? [])])].sort()
    }
  }
  return [...merged.values()].sort((a, b) => a.item.localeCompare(b.item))
}
