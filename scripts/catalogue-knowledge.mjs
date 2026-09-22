import assert from 'node:assert/strict'

// Build one sparse, release-specific index. No invented species descriptions and
// no need to retain millions of species nodes in memory while rolling up coverage.
export function buildCatalogueKnowledge({ releaseAlias, collections, profiles, nodes }) {
  assert.equal(profiles.releaseAlias, releaseAlias, 'Knowledge profiles must match the catalogue release')
  const records = new Map()
  const recordFor = colId => {
    if (!records.has(colId)) records.set(colId, { colId, descriptionCollections: [] })
    return records.get(colId)
  }
  for (const [key, rows] of Object.entries(collections)) {
    assert.match(key, /^[a-zA-Z]+Descriptions$/)
    for (const row of rows) {
      if (!(row.descriptions ?? [row]).some(part => typeof part.text === 'string' && part.text.trim())) continue
      const record = recordFor(row.colId)
      assert.ok(row.colId, `Missing identity in ${key}`)
      if (!record.descriptionCollections.includes(key)) record.descriptionCollections.push(key)
    }
  }
  for (const profile of profiles.records) {
    const record = recordFor(profile.colId)
    assert.ok(!record.profile, `Duplicate profile ${profile.colId}`)
    assert.equal(profile.reviewStatus, 'source-linked')
    assert.ok(profile.sections.length > 0 && profile.sources.length > 0)
    const sourceIds = new Set(profile.sources.map(source => source.id))
    for (const source of profile.sources) assert.match(source.url, /^https:\/\//)
    for (const section of profile.sections) {
      assert.ok(section.text.zh && section.text.en && section.sourceIds.length)
      assert.ok(section.sourceIds.every(id => sourceIds.has(id)), `Unresolved citation in ${profile.colId}`)
    }
    record.profile = profile
  }
  const expected = new Set(records.keys())
  const higher = new Map()
  const direct = new Map()
  const ranks = {}
  const profilesByRank = {}
  let describedSpecies = 0
  const add = (id, field, value = 1) => {
    if (!id) return
    if (!direct.has(id)) direct.set(id, { acceptedSpecies: 0, describedSpecies: 0, profiledSpecies: 0 })
    direct.get(id)[field] += value
  }
  for (const node of nodes) {
    ranks[node.rank] = (ranks[node.rank] ?? 0) + 1
    const record = records.get(node.id)
    if (record) {
      expected.delete(node.id)
      if (record.descriptionCollections.length) {
        assert.equal(node.rank, 'species', `Description rank ${node.id}`)
        assert.equal(node.status, 'accepted', `Description status ${node.id}`)
        describedSpecies++
      }
      if (record.profile) {
        for (const key of ['scientificName', 'rank', 'sourceDatasetId']) assert.equal(record.profile[key], node[key], `Profile ${key}: ${node.id}`)
        assert.equal(node.status, 'accepted')
        profilesByRank[node.rank] = (profilesByRank[node.rank] ?? 0) + 1
      }
    }
    if (node.rank === 'species') {
      assert.equal(node.status, 'accepted')
      add(node.parentId, 'acceptedSpecies')
      if (record?.descriptionCollections.length) add(node.parentId, 'describedSpecies')
      if (record?.profile) add(node.parentId, 'profiledSpecies')
    } else higher.set(node.id, node)
  }
  assert.equal(expected.size, 0, `Content identities outside the pinned hierarchy: ${[...expected].join(', ')}`)
  const visiting = new Set()
  const completed = new Set()
  const children = new Map()
  for (const node of higher.values()) {
    if (!children.has(node.parentId)) children.set(node.parentId, [])
    children.get(node.parentId).push(node.id)
  }
  function rollup(id) {
    if (completed.has(id)) return records.get(id).subtree
    assert.ok(!visiting.has(id), `Hierarchy cycle at ${id}`)
    visiting.add(id)
    const total = { acceptedSpecies: 0, describedSpecies: 0, profiledSpecies: 0, ...direct.get(id) }
    for (const childId of children.get(id) ?? []) {
      const child = rollup(childId)
      for (const key of Object.keys(total)) total[key] += child[key]
    }
    recordFor(id).subtree = total
    visiting.delete(id)
    completed.add(id)
    return total
  }
  for (const id of higher.keys()) rollup(id)
  return {
    records: [...records.values()].map(record => ({ ...record, descriptionCollections: record.descriptionCollections.sort() })).sort((a, b) => a.colId.localeCompare(b.colId)),
    counts: { hierarchyNodes: Object.values(ranks).reduce((a, b) => a + b, 0), ranks, describedSpecies, profilesByRank },
  }
}
