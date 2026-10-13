/** PBDB taxon identifiers are distinct from occurrence, collection and reference IDs. */
export function isPbdbTaxonId(value) {
  return typeof value === 'string' && /^txn:[1-9]\d*$/.test(value)
}

/** Resolve only a recorded PBDB taxon-source URL, never a name or storage key. */
export function pbdbClassificationId(classification) {
  if (!['Paleobiology Database', 'Paleobiology Database snapshot'].includes(classification?.authority)) return null
  let url
  try { url = new URL(classification.sourceUrl) } catch { return null }
  if (url.protocol !== 'https:' || url.hostname !== 'paleobiodb.org'
    || url.pathname !== '/data1.2/taxa/single.json' || url.searchParams.getAll('id').length !== 1) return null
  const raw = url.searchParams.get('id')
  const id = /^[1-9]\d*$/.test(raw ?? '') ? `txn:${raw}` : raw
  return isPbdbTaxonId(id) ? id : null
}
