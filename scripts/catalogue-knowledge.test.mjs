import { expect, test } from 'vitest'
import { buildCatalogueKnowledge, catalogueDossierContentDigest } from './catalogue-knowledge.mjs'

const node = (id, rank, parentId = null) => ({ id, rank, parentId, scientificName: id, sourceDatasetId: '1', status: 'accepted' })
const empty = { releaseAlias: 'test', records: [] }
const build = (nodes, collections = {}, profiles = empty, dossiers = empty) => buildCatalogueKnowledge({ releaseAlias: 'test', nodes, collections, profiles, dossiers })
const dossierTree = [node('root', 'kingdom'), node('a', 'species', 'root')]
const completeDossier = () => {
  const claim = { text: 'Scoped evidence statement.', textZh: '有范围限定的证据陈述。', originalLanguage: 'en', sourceIds: ['paper'], locator: 'Results, paragraph 2', placeTimeScope: 'Study population, 2024.', lifeStatus: 'wild population' }
  return {
    colId: 'a', scientificName: 'a', rank: 'species', sourceDatasetId: '1', checkedAt: '2026-09-23',
    identity: { method: 'Exact accepted-name and identifier review.', scope: 'The COL26.8 accepted species concept.', sourceIds: ['paper'] },
    lifeStatusScope: { wild: 'wild population', domesticated: 'not assessed', fossil: 'not assessed' },
    sources: [{ id: 'paper', title: 'Example study', url: 'https://example.org/paper', stableId: 'doi:10.1000/example', version: 'Version of record', publishedAt: '2024-04-03', accessedAt: '2026-09-23', locator: 'Results, paragraph 2', license: 'CC BY', licenseVersion: '4.0', licenseUrl: 'https://creativecommons.org/licenses/by/4.0/', rightsHolder: 'Example authors', licenseAppliesTo: 'Article text', attribution: 'Credit the authors and DOI.', licenseAssessment: 'item-level-verified', scope: 'One scoped biological claim.' }],
    facets: Object.fromEntries(['morphology', 'lifeHistory', 'ecology', 'evolution', 'distribution', 'fossil', 'conservation'].map(facet => [facet, { status: 'supported', claims: [{ ...claim }] }])),
    completeness: { status: 'complete' },
    systematicSearch: { date: '2026-09-23', scope: 'Named literature databases and species accounts.', method: 'Manual and structured database search.', queryOrPath: 'Exact binomial plus facet terms; saved search URL.', inclusionCriteria: 'Primary sources with direct evidence for the accepted species concept.', exclusionCriteria: 'Unresolved names, unsupported secondary repetition, and out-of-scope life states.', searcher: 'Curator identifier 1.' },
    expertReview: { status: 'not-reviewed' },
  }
}

test('rolls up every branch without inventing absent ranks or double-counting source overlap', () => {
  const result = build([node('root', 'kingdom'), node('order', 'order', 'root'), node('g', 'genus', 'order'), node('a', 'species', 'g'), node('b', 'species', 'root')], {
    oneDescriptions: [{ colId: 'a', descriptions: [{ text: 'first' }] }],
    twoDescriptions: [{ colId: 'a', descriptions: [{ text: 'second' }] }, { colId: 'b', descriptions: [{ text: '' }] }],
  })
  expect(result.records.find(row => row.colId === 'root').subtree).toEqual({
    acceptedSpecies: 2,
    describedSpecies: 1,
    profiledSpecies: 0,
    dossierSpecies: 0,
    completeDossierSpecies: 0,
    expertReviewedSpecies: 0,
    sourceFacetEvidenceSpecies: Object.fromEntries(['morphology', 'lifeHistory', 'ecology', 'evolution', 'distribution', 'fossil', 'conservation'].map(facet => [facet, 0])),
    dossierFacets: Object.fromEntries(['morphology', 'lifeHistory', 'ecology', 'evolution', 'distribution', 'fossil', 'conservation'].map(facet => [facet, { 'not-assessed': 2 }])),
  })
  expect(result.records.find(row => row.colId === 'order').subtree.acceptedSpecies).toBe(1)
  expect(result.records.find(row => row.colId === 'a').descriptionCollections).toEqual(['oneDescriptions', 'twoDescriptions'])
  expect(result.records.some(row => row.colId === 'b')).toBe(false)
  expect(result.counts.describedSpecies).toBe(1)
})

test('counts only explicit narrow source labels once per taxon and facet', () => {
  const result = build([node('root', 'kingdom'), node('a', 'species', 'root')], {
    firstDescriptions: [{ colId: 'a', descriptions: [{ type: 'Morphology', text: 'form' }, { type: 'general', text: 'general account' }, { type: 'habitat', text: 'forest' }] }],
    secondDescriptions: [{ colId: 'a', descriptions: [{ type: 'morphology', text: 'form again' }, { type: 'Ecology', text: 'forest again' }] }],
  })
  expect(result.counts.sourceFacetEvidenceSpecies).toMatchObject({ morphology: 1, ecology: 1, distribution: 0 })
  expect(result.records.find(row => row.colId === 'root').subtree.sourceFacetEvidenceSpecies).toMatchObject({ morphology: 1, ecology: 1 })
  expect(result.records.find(row => row.colId === 'a').sourceFacetEvidence).toEqual(['morphology', 'ecology'])
})

test('fails a wrong release, dangling content identity and cyclic tree', () => {
  expect(() => build([], {}, { releaseAlias: 'wrong', records: [] })).toThrow('release')
  expect(() => build([], { oneDescriptions: [{ colId: 'lost', text: 'body' }] })).toThrow('outside the pinned hierarchy')
  expect(() => build([node('a', 'genus', 'b'), node('b', 'family', 'a')])).toThrow('cycle')
})

test('validates exact profile identity and every section citation', () => {
  const profile = { colId: 'a', rank: 'species', scientificName: 'a', sourceDatasetId: '1', reviewStatus: 'source-linked', sections: [{ text: { zh: '介绍', en: 'Account' }, sourceIds: ['source'] }], sources: [{ id: 'source', url: 'https://example.org/account' }] }
  const profiles = { ...empty, records: [profile] }
  const result = build([node('g', 'genus'), node('a', 'species', 'g')], {}, profiles)
  expect(result.records.find(row => row.colId === 'g').subtree.profiledSpecies).toBe(1)
  expect(result.counts.profilesByRank).toEqual({ species: 1 })
  expect(() => build([node('a', 'species')], {}, { ...empty, records: [{ ...profile, scientificName: 'wrong' }] })).toThrow('scientificName')
  expect(() => build([], {}, { ...empty, records: [{ ...profile, sources: [] }] })).toThrow()
})

test('requires reproducible evidence-search protocols before a facet or dossier can count complete', () => {
  const facetSearch = completeDossier()
  facetSearch.completeness.status = 'incomplete'
  facetSearch.facets = Object.fromEntries(['morphology', 'lifeHistory', 'ecology', 'evolution', 'distribution', 'fossil', 'conservation'].map(facet => [facet, { status: 'not-assessed' }]))
  facetSearch.facets.morphology = { status: 'searched-no-evidence', search: { date: '2026-09-23', scope: 'Named sources.', method: 'Structured search.', queryOrPath: 'saved query', inclusionCriteria: 'Direct evidence only', exclusionCriteria: 'Ambiguous records only' } }
  expect(() => build(dossierTree, {}, empty, { ...empty, records: [facetSearch] })).toThrow('Reproducible search protocol')

  const systematicSearch = completeDossier()
  delete systematicSearch.systematicSearch.exclusionCriteria
  expect(() => build(dossierTree, {}, empty, { ...empty, records: [systematicSearch] })).toThrow('reproducible systematic search')
})

test('requires source language, item-level rights metadata, and auditable reviewer records for completion counts', () => {
  const invalidDate = completeDossier()
  invalidDate.checkedAt = '2026-02-30'
  expect(() => build(dossierTree, {}, empty, { ...empty, records: [invalidDate] })).toThrow('real ISO calendar date')

  const unresolvedIdentity = completeDossier()
  unresolvedIdentity.identity.sourceIds = ['missing-source']
  expect(() => build(dossierTree, {}, empty, { ...empty, records: [unresolvedIdentity] })).toThrow('identity must cite resolvable source IDs')

  const missingLanguage = completeDossier()
  delete missingLanguage.facets.morphology.claims[0].originalLanguage
  expect(() => build(dossierTree, {}, empty, { ...empty, records: [missingLanguage] })).toThrow('source language')

  const missingRights = completeDossier()
  delete missingRights.sources[0].rightsHolder
  expect(() => build(dossierTree, {}, empty, { ...empty, records: [missingRights] })).toThrow('item-level rights')

  const fakeReview = completeDossier()
  fakeReview.expertReview = { status: 'externally-reviewed', reviewers: ['Dr Example'], reviewDigest: 'a'.repeat(64), date: '2026-09-23', opinion: 'Approved.', resolutionLog: [] }
  expect(() => build(dossierTree, {}, empty, { ...empty, records: [fakeReview] })).toThrow('Named expert')

  const reviewed = completeDossier()
  reviewed.expertReview = { status: 'externally-reviewed', reviewers: [{ name: 'Dr Example', expertise: 'Species ecology', conflictOfInterest: 'No conflicts declared.' }], reviewDigest: catalogueDossierContentDigest(reviewed), date: '2026-09-23', opinion: 'Approved for the stated scope.', resolutionLog: [] }
  expect(build(dossierTree, {}, empty, { ...empty, records: [reviewed] }).counts.expertReviewedSpecies).toBe(1)
  reviewed.facets.morphology.claims[0].text = 'Changed after review.'
  expect(() => build(dossierTree, {}, empty, { ...empty, records: [reviewed] })).toThrow('content digest is stale')
})
