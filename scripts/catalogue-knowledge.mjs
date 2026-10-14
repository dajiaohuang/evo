import assert from 'node:assert/strict'

// Build one sparse, release-specific index. No invented species descriptions and
// no need to retain millions of species nodes in memory while rolling up coverage.
const DOSSIER_FACETS = ['morphology', 'lifeHistory', 'ecology', 'evolution', 'distribution', 'fossil', 'conservation']
const FACET_STATUSES = ['supported', 'partially-supported', 'conflicted', 'not-assessed']
const isNonEmptyText = value => typeof value === 'string' && value.trim().length > 0
const isCalendarDate = value => {
  if (typeof value !== 'string' || value.length !== 10 || value[4] !== '-' || value[7] !== '-') return false
  const parsed = new Date(`${value}T00:00:00Z`)
  return !Number.isNaN(parsed.getTime()) && parsed.toISOString().slice(0, 10) === value
}
const isPublicationDate = value => {
  if (value === 'undated') return true
  if (typeof value !== 'string' || !/^[1-9]\d{3}(?:-(?:0[1-9]|1[0-2])(?:-\d{2})?)?$/.test(value)) return false
  return value.length < 10 || isCalendarDate(value)
}
const isLanguageTag = value => typeof value === 'string' && /^[A-Za-z]{2,3}(?:-[A-Za-z0-9]{2,8})*$/.test(value)
const assertNoRetiredFields = (record, fields, label) => {
  for (const field of fields) assert.ok(!Object.hasOwn(record, field), `Retired ${label} field ${field}`)
}
const RETIRED_PROFILE_FIELDS = ['checkedAt']
const RETIRED_DOSSIER_FIELDS = ['checkedAt', 'completeness', 'systematicSearch']

export function validateCatalogueDossier(dossier) {
  assertNoRetiredFields(dossier, RETIRED_DOSSIER_FIELDS, 'dossier')
  assert.ok(dossier.colId, 'Dossier is missing a COL identity')
  assert.ok(dossier.identity?.method && dossier.identity?.scope, `Dossier identity method and scope required: ${dossier.colId}`)
  assert.ok(dossier.lifeStatusScope?.wild && dossier.lifeStatusScope?.domesticated && dossier.lifeStatusScope?.fossil, `Dossier life-status scope required: ${dossier.colId}`)
  assert.deepEqual(Object.keys(dossier.facets).sort(), [...DOSSIER_FACETS].sort(), `Dossier must assess all seven facets: ${dossier.colId}`)

  const sourceIds = new Set(dossier.sources.map(source => source.id))
  assert.equal(sourceIds.size, dossier.sources.length, `Duplicate dossier source ${dossier.colId}`)
  for (const source of dossier.sources) {
    assert.ok(isNonEmptyText(source.id), `Dossier source ID required: ${dossier.colId}`)
    assert.match(source.url, /^https:\/\//, `Dossier source URL required: ${dossier.colId}`)
    assert.ok(source.version && source.locator && source.license && source.scope, `Dossier source provenance incomplete: ${dossier.colId}/${source.id}`)
    if (source.publishedAt !== undefined) assert.ok(isPublicationDate(source.publishedAt), `Invalid recorded publication date: ${dossier.colId}/${source.id}`)
    if (source.accessedAt !== undefined) assert.ok(isCalendarDate(source.accessedAt), `Invalid recorded access date: ${dossier.colId}/${source.id}`)
    if (source.licenseAssessment !== undefined) {
      assert.ok(['item-level-verified', 'aggregate-declaration-only', 'identity-only', 'unknown'].includes(source.licenseAssessment), `Invalid source license assessment: ${dossier.colId}/${source.id}`)
    }
    if (source.licenseAssessment === 'item-level-verified') {
      const recordedLicense = isNonEmptyText(source.license) && !/^(?:unknown|not[- ](?:assessed|recorded))\b/i.test(source.license.trim())
      assert.ok(recordedLicense && isNonEmptyText(source.title), `Item-level rights metadata incomplete: ${dossier.colId}/${source.id}`)
      for (const field of ['rightsHolder', 'licenseVersion', 'licenseAppliesTo', 'attribution']) {
        if (source[field] !== undefined) assert.ok(isNonEmptyText(source[field]), `Invalid recorded rights field ${field}: ${dossier.colId}/${source.id}`)
      }
      if (source.licenseUrl !== undefined) assert.match(source.licenseUrl, /^https:\/\//, `Invalid recorded license URL: ${dossier.colId}/${source.id}`)
    }
  }
  if (dossier.identity.sourceIds !== undefined) {
    assert.ok(Array.isArray(dossier.identity.sourceIds) && dossier.identity.sourceIds.every(id => sourceIds.has(id)), `Unresolved dossier identity source: ${dossier.colId}`)
  }
  for (const [facet, assessment] of Object.entries(dossier.facets)) {
    assertNoRetiredFields(assessment, ['search'], `facet ${facet}`)
    assert.ok(FACET_STATUSES.includes(assessment.status), `Invalid ${facet} status in ${dossier.colId}`)
    for (const claim of assessment.claims ?? []) {
      assertNoRetiredFields(claim, ['translationStatus'], `claim in ${facet}`)
      const hasEnglishText = isNonEmptyText(claim.text)
      const hasChineseText = isNonEmptyText(claim.textZh)
      assert.ok((hasEnglishText || hasChineseText) && claim.locator && claim.placeTimeScope && claim.lifeStatus, `Claim scope/locator/text incomplete: ${dossier.colId}/${facet}`)
      if (claim.originalLanguage !== undefined) assert.ok(isLanguageTag(claim.originalLanguage), `Invalid original source language: ${dossier.colId}/${facet}`)
      assert.ok(Array.isArray(claim.sourceIds) && claim.sourceIds.length > 0 && claim.sourceIds.every(id => sourceIds.has(id)), `Unresolved dossier source: ${dossier.colId}/${facet}`)
    }
    if (assessment.status === 'supported' || assessment.status === 'conflicted') assert.ok(assessment.claims?.length, `Evidence claims required for ${dossier.colId}/${facet}`)
    if (assessment.status === 'partially-supported') assert.ok(assessment.claims?.length && assessment.gaps?.length, `Partial facet must disclose evidence and gaps: ${dossier.colId}/${facet}`)
  }
  return sourceIds
}
// Only source-declared field labels with a stable, narrow meaning are projected.
// Generic "general", "description", "biology", and diagnostic fields stay unmapped.
const SOURCE_TYPE_FACETS = new Map([
  ['morphology', 'morphology'], ['Morphology', 'morphology'], ['habit', 'morphology'],
  ['habitat', 'ecology'], ['Habitat', 'ecology'], ['Ecology', 'ecology'], ['biology_ecology', 'ecology'],
  ['distribution', 'distribution'],
])

export function buildCatalogueKnowledge({ releaseAlias, collections, profiles, dossiers = { releaseAlias, records: [] }, nodes }) {
  assert.equal(profiles.releaseAlias, releaseAlias, 'Knowledge profiles must match the catalogue release')
  assert.equal(dossiers.releaseAlias, releaseAlias, 'Species dossiers must match the catalogue release')
  const records = new Map()
  const recordFor = colId => {
    if (!records.has(colId)) records.set(colId, { colId, releaseAlias, descriptionCollections: [], sourceFacetEvidence: [] })
    return records.get(colId)
  }
  for (const [key, rows] of Object.entries(collections)) {
    assert.match(key, /^[a-zA-Z]+Descriptions$/)
    for (const row of rows) {
      if (!(row.descriptions ?? [row]).some(part => typeof part.text === 'string' && part.text.trim())) continue
      const record = recordFor(row.colId)
      assert.ok(row.colId, `Missing identity in ${key}`)
      if (!record.descriptionCollections.includes(key)) record.descriptionCollections.push(key)
      for (const part of row.descriptions ?? [row]) {
        if (!(typeof part.text === 'string' && part.text.trim())) continue
        const facet = SOURCE_TYPE_FACETS.get(part.type)
        if (facet && !record.sourceFacetEvidence.includes(facet)) record.sourceFacetEvidence.push(facet)
      }
    }
  }
  for (const profile of profiles.records) {
    assertNoRetiredFields(profile, RETIRED_PROFILE_FIELDS, 'profile')
    const record = recordFor(profile.colId)
    assert.ok(!record.profile, `Duplicate profile ${profile.colId}`)
    assert.ok(profile.sections.length > 0 && profile.sources.length > 0)
    const sourceIds = new Set(profile.sources.map(source => source.id))
    if (profile.summary !== undefined || profile.summarySourceIds !== undefined) {
      assert.ok(isNonEmptyText(profile.summary?.en) && isNonEmptyText(profile.summary?.zh), 'Authored preview requires bilingual summary')
      assert.ok(Array.isArray(profile.summarySourceIds) && profile.summarySourceIds.length > 0 && profile.summarySourceIds.every(id => isNonEmptyText(id) && sourceIds.has(id) && profile.sources.filter(source => source.id === id).length === 1), 'Unresolved authored preview citation')
      assert.equal(new Set(profile.summarySourceIds).size, profile.summarySourceIds.length, 'Duplicate authored preview citation')
    }
    for (const source of profile.sources) assert.match(source.url, /^https:\/\//)
    for (const section of profile.sections) {
      assert.ok(section.text.zh && section.text.en && section.sourceIds.length)
      assert.ok(section.sourceIds.every(id => sourceIds.has(id)), `Unresolved citation in ${profile.colId}`)
    }
    record.profile = profile
  }
  for (const dossier of dossiers.records) {
    validateCatalogueDossier(dossier)
    const record = recordFor(dossier.colId)
    assert.ok(!record.dossier, `Duplicate dossier ${dossier.colId}`)
    record.dossier = dossier
  }
  const expected = new Set(records.keys())
  const higher = new Map()
  const direct = new Map()
  const ranks = {}
  const profilesByRank = {}
  const sourceFacetCounts = Object.fromEntries(DOSSIER_FACETS.map(facet => [facet, 0]))
  let describedSpecies = 0
  let dossierSpecies = 0
  const facetCounts = Object.fromEntries(DOSSIER_FACETS.map(facet => [facet, {}]))
  const add = (id, field, value = 1) => {
    if (!id) return
    if (!direct.has(id)) direct.set(id, { acceptedSpecies: 0, describedSpecies: 0, profiledSpecies: 0, dossierSpecies: 0, dossierFacets: Object.fromEntries(DOSSIER_FACETS.map(facet => [facet, {}])), sourceFacetEvidenceSpecies: Object.fromEntries(DOSSIER_FACETS.map(facet => [facet, 0])) })
    direct.get(id)[field] += value
  }
  const addFacet = (id, facet, status) => {
    if (!direct.has(id)) add(id, 'acceptedSpecies', 0)
    const counts = direct.get(id).dossierFacets[facet]
    counts[status] = (counts[status] ?? 0) + 1
  }
  const addSourceFacet = (id, facet) => {
    if (!direct.has(id)) add(id, 'acceptedSpecies', 0)
    direct.get(id).sourceFacetEvidenceSpecies[facet]++
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
        const bareName = node.authorship && node.scientificName.endsWith(node.authorship) ? node.scientificName.slice(0, -node.authorship.length).trim() : node.scientificName
        const author = node.authorship?.replace(/^\((.*)\)$/, '$1')
        const names = new Set([node.scientificName, node.verbatimLabel, bareName, author && `${bareName} ${author}`, author && `${bareName} (${author})`].filter(Boolean))
        assert.ok(names.has(record.profile.scientificName), `Profile scientificName: ${node.id}`)
        assert.equal(record.profile.rank, node.rank, `Profile rank: ${node.id}`)
        if (record.profile.sourceDatasetId != null && node.sourceDatasetId != null) assert.equal(String(record.profile.sourceDatasetId), String(node.sourceDatasetId), `Profile sourceDatasetId: ${node.id}`)
        assert.ok(node.status === 'accepted' || (node.rank !== 'species' && node.status === 'provisionally accepted'), `Profile status: ${node.id}`)
        profilesByRank[node.rank] = (profilesByRank[node.rank] ?? 0) + 1
      }
      if (record.dossier) {
        for (const key of ['scientificName', 'rank', 'sourceDatasetId']) assert.equal(record.dossier[key], node[key], `Dossier ${key}: ${node.id}`)
        assert.equal(node.rank, 'species', `Dossier rank ${node.id}`)
        assert.equal(node.status, 'accepted', `Dossier status ${node.id}`)
        dossierSpecies++
        for (const facet of DOSSIER_FACETS) {
          const status = record.dossier.facets[facet].status
          facetCounts[facet][status] = (facetCounts[facet][status] ?? 0) + 1
        }
      }
    }
    if (node.rank === 'species') {
      assert.equal(node.status, 'accepted')
      add(node.parentId, 'acceptedSpecies')
      if (record?.descriptionCollections.length) add(node.parentId, 'describedSpecies')
      if (record?.profile) add(node.parentId, 'profiledSpecies')
      if (record?.sourceFacetEvidence.length) for (const facet of record.sourceFacetEvidence) {
        sourceFacetCounts[facet]++
        addSourceFacet(node.parentId, facet)
      }
      if (record?.dossier) {
        add(node.parentId, 'dossierSpecies')
        for (const facet of DOSSIER_FACETS) addFacet(node.parentId, facet, record.dossier.facets[facet].status)
      }
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
    const total = { acceptedSpecies: 0, describedSpecies: 0, profiledSpecies: 0, dossierSpecies: 0, dossierFacets: Object.fromEntries(DOSSIER_FACETS.map(facet => [facet, {}])), sourceFacetEvidenceSpecies: Object.fromEntries(DOSSIER_FACETS.map(facet => [facet, 0])), ...direct.get(id) }
    for (const childId of children.get(id) ?? []) {
      const child = rollup(childId)
      for (const key of ['acceptedSpecies', 'describedSpecies', 'profiledSpecies', 'dossierSpecies']) total[key] += child[key]
      for (const facet of DOSSIER_FACETS) total.sourceFacetEvidenceSpecies[facet] += child.sourceFacetEvidenceSpecies[facet]
      // "not-assessed" is derived at this node from its accepted-species total.
      // Summing children's derived gaps here would count them as assessed twice.
      for (const facet of DOSSIER_FACETS) for (const [status, count] of Object.entries(child.dossierFacets[facet])) {
        if (status !== 'not-assessed') total.dossierFacets[facet][status] = (total.dossierFacets[facet][status] ?? 0) + count
      }
    }
    for (const facet of DOSSIER_FACETS) {
      const assessed = Object.values(total.dossierFacets[facet]).reduce((sum, count) => sum + count, 0)
      assert.ok(assessed <= total.acceptedSpecies, `Facet count exceeds accepted species in ${id}/${facet}`)
      total.dossierFacets[facet]['not-assessed'] = total.acceptedSpecies - assessed
    }
    recordFor(id).subtree = total
    visiting.delete(id)
    completed.add(id)
    return total
  }
  for (const id of higher.keys()) rollup(id)
  for (const facet of DOSSIER_FACETS) {
    const assessed = Object.entries(facetCounts[facet]).reduce((sum, [status, count]) => sum + (status === 'not-assessed' ? 0 : count), 0)
    assert.ok(assessed <= (ranks.species ?? 0), `Facet count exceeds accepted species for ${facet}`)
    facetCounts[facet]['not-assessed'] = (ranks.species ?? 0) - assessed
  }
  return {
    records: [...records.values()].map(record => ({ ...record, descriptionCollections: record.descriptionCollections.sort() })).sort((a, b) => a.colId.localeCompare(b.colId)),
    counts: { hierarchyNodes: Object.values(ranks).reduce((a, b) => a + b, 0), ranks, describedSpecies, profilesByRank, sourceFacetEvidenceSpecies: sourceFacetCounts, dossierSpecies, dossierFacets: facetCounts },
  }
}
