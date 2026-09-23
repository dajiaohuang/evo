import assert from 'node:assert/strict'

// Build one sparse, release-specific index. No invented species descriptions and
// no need to retain millions of species nodes in memory while rolling up coverage.
const DOSSIER_FACETS = ['morphology', 'lifeHistory', 'ecology', 'evolution', 'distribution', 'fossil', 'conservation']
const FACET_STATUSES = ['supported', 'partially-supported', 'searched-no-evidence', 'conflicted', 'not-assessed']
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
    if (!records.has(colId)) records.set(colId, { colId, descriptionCollections: [], sourceFacetEvidence: [] })
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
  for (const dossier of dossiers.records) {
    assert.ok(dossier.colId, 'Dossier is missing a COL identity')
    const record = recordFor(dossier.colId)
    assert.ok(!record.dossier, `Duplicate dossier ${dossier.colId}`)
    assert.ok(dossier.identity?.method && dossier.identity?.scope, `Dossier identity method and scope required: ${dossier.colId}`)
    assert.ok(dossier.lifeStatusScope?.wild && dossier.lifeStatusScope?.domesticated && dossier.lifeStatusScope?.fossil, `Dossier life-status scope required: ${dossier.colId}`)
    assert.deepEqual(Object.keys(dossier.facets).sort(), [...DOSSIER_FACETS].sort(), `Dossier must assess all seven facets: ${dossier.colId}`)
    const sourceIds = new Set(dossier.sources.map(source => source.id))
    assert.equal(sourceIds.size, dossier.sources.length, `Duplicate dossier source ${dossier.colId}`)
    for (const source of dossier.sources) {
      assert.match(source.url, /^https:\/\//, `Dossier source URL required: ${dossier.colId}`)
      assert.ok(source.version && source.locator && source.license && source.scope, `Dossier source provenance incomplete: ${dossier.colId}/${source.id}`)
      if (source.licenseAssessment !== undefined) assert.ok(['item-level-verified', 'aggregate-declaration-only', 'identity-only', 'unknown'].includes(source.licenseAssessment), `Invalid source license assessment: ${dossier.colId}/${source.id}`)
    }
    for (const [facet, assessment] of Object.entries(dossier.facets)) {
      assert.ok(FACET_STATUSES.includes(assessment.status), `Invalid ${facet} status in ${dossier.colId}`)
      for (const claim of assessment.claims ?? []) {
        const hasChineseTranslation = typeof claim.textZh === 'string' && claim.textZh.trim().length > 0
        assert.ok(claim.text && (hasChineseTranslation || claim.translationStatus === 'untranslated') && claim.locator && claim.placeTimeScope && claim.lifeStatus, `Claim scope/locator/translation incomplete: ${dossier.colId}/${facet}`)
        if (claim.translationStatus === 'untranslated') assert.ok(!hasChineseTranslation, `Untranslated claim must not carry placeholder text: ${dossier.colId}/${facet}`)
        if (claim.translationStatus === 'verified') assert.ok(hasChineseTranslation, `Verified translation is missing: ${dossier.colId}/${facet}`)
        assert.ok(claim.sourceIds.length && claim.sourceIds.every(id => sourceIds.has(id)), `Unresolved dossier source: ${dossier.colId}/${facet}`)
      }
      if (assessment.status === 'supported' || assessment.status === 'conflicted') assert.ok(assessment.claims?.length, `Evidence claims required for ${dossier.colId}/${facet}`)
      if (assessment.status === 'partially-supported') assert.ok(assessment.claims?.length && assessment.gaps?.length, `Partial facet must disclose evidence and gaps: ${dossier.colId}/${facet}`)
      if (assessment.status === 'searched-no-evidence') assert.ok(assessment.search?.date && assessment.search?.scope && assessment.search?.method, `Search log required for ${dossier.colId}/${facet}`)
    }
    assert.ok(['incomplete', 'complete'].includes(dossier.completeness?.status), `Dossier completeness status required: ${dossier.colId}`)
    if (dossier.completeness.status === 'complete') {
      assert.ok(DOSSIER_FACETS.every(facet => ['supported', 'searched-no-evidence', 'conflicted'].includes(dossier.facets[facet].status)), `Incomplete facet cannot count as complete: ${dossier.colId}`)
      assert.ok(!DOSSIER_FACETS.some(facet => (dossier.facets[facet].claims ?? []).some(claim => claim.translationStatus === 'untranslated')), `Untranslated claims cannot count as complete: ${dossier.colId}`)
      const claimSourceIds = new Set(DOSSIER_FACETS.flatMap(facet => (dossier.facets[facet].claims ?? []).flatMap(claim => claim.sourceIds)))
      for (const sourceId of claimSourceIds) {
        const source = dossier.sources.find(item => item.id === sourceId)
        assert.equal(source?.licenseAssessment, 'item-level-verified', `Claim source license is not verified at item level: ${dossier.colId}/${sourceId}`)
      }
      assert.ok(dossier.systematicSearch?.date && dossier.systematicSearch?.scope && dossier.systematicSearch?.method, `Complete dossier requires a systematic search record: ${dossier.colId}`)
    }
    assert.ok(['not-reviewed', 'maintainer-reviewed', 'externally-reviewed'].includes(dossier.expertReview?.status), `Dossier review state required: ${dossier.colId}`)
    if (dossier.expertReview.status === 'externally-reviewed') assert.ok(dossier.expertReview.reviewers?.length && dossier.expertReview.reviewDigest && dossier.expertReview.date, `External review evidence required: ${dossier.colId}`)
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
  let completeDossierSpecies = 0
  let expertReviewedSpecies = 0
  const facetCounts = Object.fromEntries(DOSSIER_FACETS.map(facet => [facet, {}]))
  const add = (id, field, value = 1) => {
    if (!id) return
    if (!direct.has(id)) direct.set(id, { acceptedSpecies: 0, describedSpecies: 0, profiledSpecies: 0, dossierSpecies: 0, completeDossierSpecies: 0, expertReviewedSpecies: 0, dossierFacets: Object.fromEntries(DOSSIER_FACETS.map(facet => [facet, {}])), sourceFacetEvidenceSpecies: Object.fromEntries(DOSSIER_FACETS.map(facet => [facet, 0])) })
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
        for (const key of ['scientificName', 'rank', 'sourceDatasetId']) assert.equal(record.profile[key], node[key], `Profile ${key}: ${node.id}`)
        assert.equal(node.status, 'accepted')
        profilesByRank[node.rank] = (profilesByRank[node.rank] ?? 0) + 1
      }
      if (record.dossier) {
        for (const key of ['scientificName', 'rank', 'sourceDatasetId']) assert.equal(record.dossier[key], node[key], `Dossier ${key}: ${node.id}`)
        assert.equal(node.rank, 'species', `Dossier rank ${node.id}`)
        assert.equal(node.status, 'accepted', `Dossier status ${node.id}`)
        dossierSpecies++
        if (record.dossier.completeness.status === 'complete') completeDossierSpecies++
        if (record.dossier.expertReview.status === 'externally-reviewed') expertReviewedSpecies++
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
        if (record.dossier.completeness.status === 'complete') add(node.parentId, 'completeDossierSpecies')
        if (record.dossier.expertReview.status === 'externally-reviewed') add(node.parentId, 'expertReviewedSpecies')
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
    const total = { acceptedSpecies: 0, describedSpecies: 0, profiledSpecies: 0, dossierSpecies: 0, completeDossierSpecies: 0, expertReviewedSpecies: 0, dossierFacets: Object.fromEntries(DOSSIER_FACETS.map(facet => [facet, {}])), sourceFacetEvidenceSpecies: Object.fromEntries(DOSSIER_FACETS.map(facet => [facet, 0])), ...direct.get(id) }
    for (const childId of children.get(id) ?? []) {
      const child = rollup(childId)
      for (const key of ['acceptedSpecies', 'describedSpecies', 'profiledSpecies', 'dossierSpecies', 'completeDossierSpecies', 'expertReviewedSpecies']) total[key] += child[key]
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
    const assessed = Object.values(facetCounts[facet]).reduce((sum, count) => sum + count, 0)
    assert.ok(assessed <= (ranks.species ?? 0), `Facet count exceeds accepted species for ${facet}`)
    facetCounts[facet]['not-assessed'] = (ranks.species ?? 0) - assessed
  }
  return {
    records: [...records.values()].map(record => ({ ...record, descriptionCollections: record.descriptionCollections.sort() })).sort((a, b) => a.colId.localeCompare(b.colId)),
    counts: { hierarchyNodes: Object.values(ranks).reduce((a, b) => a + b, 0), ranks, describedSpecies, profilesByRank, sourceFacetEvidenceSpecies: sourceFacetCounts, dossierSpecies, completeDossierSpecies, expertReviewedSpecies, dossierFacets: facetCounts },
  }
}
