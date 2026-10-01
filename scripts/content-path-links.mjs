const taxonFields = {
  entityId: 'entityPath', entityIds: 'entityPaths', taxonId: 'taxonPath', taxonIds: 'taxonPaths',
  treeNodeId: 'treePath', scopeNodeId: 'scopePath', nodeId: 'nodePath', parentId: 'parentPath',
  descendantEntityIds: 'descendantPaths',
}
const recordFields = { claimId: 'claimPath', claimIds: 'claimPaths', eventId: 'eventPath', eventIds: 'eventPaths', canonicalRangeId: 'canonicalRangePath' }

export function createContentLinkMaps(projectionMap) {
  const taxa = new Map(projectionMap.navigationAliases.map(entry => [entry.runtimeKey, entry.path]))
  for (const entry of projectionMap.profileAliases) taxa.set(entry.runtimeKey, entry.path)
  const records = new Map((projectionMap.recordAliases ?? []).map(entry => [entry.runtimeKey, entry.path]))
  const topics = new Map(projectionMap.topicAliases.map(entry => [entry.runtimeKey, entry.path]))
  const inverseTaxa = new Map(projectionMap.navigationAliases.map(entry => [entry.path, entry.runtimeKey]))
  for (const entry of projectionMap.profileAliases) inverseTaxa.set(entry.path, entry.runtimeKey)
  return { taxa, inverseTaxa, records, inverseRecords: new Map([...records].map(([key, path]) => [path, key])), topics, inverseTopics: new Map([...topics].map(([key, path]) => [path, key])) }
}

function mappedValue(value, map) {
  if (typeof value === 'string') return map.get(value)
  if (Array.isArray(value) && value.every(item => typeof item === 'string' && map.has(item))) return value.map(item => map.get(item))
  return undefined
}

function route(value, map) {
  if (typeof value !== 'string' || !value.startsWith('#/') || !value.includes('?')) return value
  const separator = value.indexOf('?')
  const query = new URLSearchParams(value.slice(separator + 1))
  let changed = false
  for (const key of ['taxon', 'profile']) {
    if (map.has(query.get(key))) { query.set(key, map.get(query.get(key))); changed = true }
  }
  return changed ? `${value.slice(0, separator)}?${query}` : value
}

export function canonicalizeContentLinks(value, maps) {
  if (Array.isArray(value)) return value.map(item => canonicalizeContentLinks(item, maps))
  if (!value || typeof value !== 'object') return value
  return Object.fromEntries(Object.entries(value).map(([key, child]) => {
    if (taxonFields[key]) {
      const mapped = mappedValue(child, maps.taxa)
      if (mapped !== undefined) return [taxonFields[key], mapped]
    }
    if (recordFields[key]) {
      const mapped = mappedValue(child, key.startsWith('event') ? maps.topics : maps.records)
      if (mapped !== undefined) return [recordFields[key], mapped]
    }
    if (key === 'subjectId' && typeof child === 'string') {
      const separator = child.indexOf(':')
      const kind = child.slice(0, separator), id = child.slice(separator + 1)
      const path = kind === 'taxon' ? maps.taxa.get(id) : maps.topics.get(id)
      if (path) return ['subject', { kind, path }]
    }
    if (key === 'route') return [key, route(child, maps.taxa)]
    return [key, canonicalizeContentLinks(child, maps)]
  }))
}

export function restoreRuntimeContentLinks(value, maps) {
  if (Array.isArray(value)) return value.map(item => restoreRuntimeContentLinks(item, maps))
  if (!value || typeof value !== 'object') return value
  const inverseTaxonFields = new Map(Object.entries(taxonFields).map(([key, pathKey]) => [pathKey, key]))
  const inverseRecordFields = new Map(Object.entries(recordFields).map(([key, pathKey]) => [pathKey, key]))
  return Object.fromEntries(Object.entries(value).map(([key, child]) => {
    if (inverseTaxonFields.has(key)) {
      const mapped = mappedValue(child, maps.inverseTaxa)
      if (mapped === undefined) throw new Error(`Unknown canonical taxonomy link: ${JSON.stringify(child)}`)
      return [inverseTaxonFields.get(key), mapped]
    }
    if (inverseRecordFields.has(key)) {
      const mapped = mappedValue(child, key.startsWith('event') ? maps.inverseTopics : maps.inverseRecords)
      if (mapped === undefined) throw new Error(`Unknown canonical record link: ${JSON.stringify(child)}`)
      return [inverseRecordFields.get(key), mapped]
    }
    if (key === 'subject' && child?.kind && child?.path) {
      const id = child.kind === 'taxon' ? maps.inverseTaxa.get(child.path) : maps.inverseTopics.get(child.path)
      if (!id) throw new Error(`Unknown canonical subject: ${child.path}`)
      return ['subjectId', `${child.kind}:${id}`]
    }
    if (key === 'route') return [key, route(child, maps.inverseTaxa)]
    return [key, restoreRuntimeContentLinks(child, maps)]
  }))
}
