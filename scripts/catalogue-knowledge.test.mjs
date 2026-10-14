import { expect, test } from 'vitest'
import { buildCatalogueKnowledge } from './catalogue-knowledge.mjs'

const node = (id, rank, parentId = null) => ({ id, rank, parentId, scientificName: id, sourceDatasetId: '1', status: 'accepted' })
const empty = { releaseAlias: 'test', records: [] }
const build = (nodes, collections = {}, profiles = empty, dossiers = empty) => buildCatalogueKnowledge({ releaseAlias: 'test', nodes, collections, profiles, dossiers })
const dossierTree = [node('root', 'kingdom'), node('a', 'species', 'root')]
const sampleDossier = () => {
  return {
    colId: 'a', scientificName: 'a', rank: 'species', sourceDatasetId: '1',
    identity: { method: 'Exact accepted-name and identifier review.', scope: 'The COL26.8 accepted species concept.', sourceIds: ['paper'] },
    lifeStatusScope: { wild: 'wild population', domesticated: 'not assessed', fossil: 'not assessed' },
    sources: [{ id: 'paper', title: 'Example study', url: 'https://example.org/paper', version: 'Version of record', locator: 'Results, paragraph 2', license: 'Unknown', licenseAssessment: 'aggregate-declaration-only', scope: 'One scoped biological claim.' }],
    facets: Object.fromEntries(['morphology', 'lifeHistory', 'ecology', 'evolution', 'distribution', 'fossil', 'conservation'].map(facet => [facet, { status: 'not-assessed' }])),
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
  const profile = { colId: 'a', rank: 'species', scientificName: 'a', sourceDatasetId: '1', sections: [{ text: { zh: '介绍', en: 'Account' }, sourceIds: ['source'] }], sources: [{ id: 'source', url: 'https://example.org/account' }] }
  const profiles = { ...empty, records: [profile] }
  const result = build([node('g', 'genus'), node('a', 'species', 'g')], {}, profiles)
  expect(result.records.find(row => row.colId === 'g').subtree.profiledSpecies).toBe(1)
  expect(result.counts.profilesByRank).toEqual({ species: 1 })
  expect(() => build([node('a', 'species')], {}, { ...empty, records: [{ ...profile, scientificName: 'wrong' }] })).toThrow('scientificName')
  expect(() => build([], {}, { ...empty, records: [{ ...profile, sources: [] }] })).toThrow()
  expect(() => build([node('a', 'species')], {}, { ...empty, records: [{ ...profile, checkedAt: '2026-10-12' }] })).toThrow('Retired profile field checkedAt')
})

test('retains scoped source-linked facet evidence without completeness, search, translation, or global rights gates', () => {
  const dossier = sampleDossier()
  const claim = { text: 'Scoped evidence statement.', textZh: '有范围限定的证据陈述。', originalLanguage: 'en', sourceIds: ['paper'], locator: 'Results, paragraph 2', placeTimeScope: 'Study population, 2024.', lifeStatus: 'wild population' }
  dossier.facets.morphology = { status: 'supported', claims: [{ ...claim }] }
  dossier.facets.ecology = { status: 'partially-supported', claims: [{ ...dossier.facets.morphology.claims[0] }], gaps: ['The sample covers one population.'] }
  dossier.facets.evolution = { status: 'conflicted', claims: [{ ...dossier.facets.morphology.claims[0] }] }
  const result = build(dossierTree, {}, empty, { ...empty, records: [dossier] })
  const built = result.records.find(row => row.colId === 'a').dossier
  expect(built.sources[0]).toMatchObject({ id: 'paper', licenseAssessment: 'aggregate-declaration-only', scope: 'One scoped biological claim.' })
  expect(built.facets.morphology.claims[0]).toMatchObject({ sourceIds: ['paper'], textZh: '有范围限定的证据陈述。', originalLanguage: 'en' })
  expect(built.facets.ecology.gaps).toEqual(['The sample covers one population.'])
  expect(result.counts.dossierSpecies).toBe(1)
  expect(result.counts.completeDossierSpecies).toBeUndefined()
  expect(result.counts.dossierFacets.morphology.supported).toBe(1)
  expect(result.counts.dossierFacets.lifeHistory['not-assessed']).toBe(1)
})

test('rejects named retired maintenance fields and the retired search-negative facet status', () => {
  const retired = [
    dossier => { dossier.checkedAt = '2026-09-23' },
    dossier => { dossier.completeness = { status: 'incomplete' } },
    dossier => { dossier.systematicSearch = {} },
    dossier => { dossier.facets.morphology.search = {} },
    dossier => { dossier.facets.morphology = { status: 'supported', claims: [{ text: 'Evidence', textZh: '证据', translationStatus: 'verified', sourceIds: ['paper'], locator: 'Table 1', placeTimeScope: 'One site.', lifeStatus: 'wild' }] } },
  ]
  for (const addRetiredField of retired) {
    const dossier = sampleDossier()
    addRetiredField(dossier)
    expect(() => build(dossierTree, {}, empty, { ...empty, records: [dossier] })).toThrow('Retired')
  }
  const dossier = sampleDossier()
  dossier.facets.morphology = { status: 'searched-no-evidence' }
  expect(() => build(dossierTree, {}, empty, { ...empty, records: [dossier] })).toThrow('Invalid morphology status')
})

test('validates recorded dates, explicit item-level rights claims, and source bindings', () => {
  const invalidDate = sampleDossier()
  invalidDate.sources[0].publishedAt = '2026-02-30'
  expect(() => build(dossierTree, {}, empty, { ...empty, records: [invalidDate] })).toThrow('publication date')
  for (const date of ['2019', '2019-10', '2019-10-01']) {
    const partialDate = sampleDossier()
    partialDate.sources[0].publishedAt = date
    expect(() => build(dossierTree, {}, empty, { ...empty, records: [partialDate] })).not.toThrow()
    expect(partialDate.sources[0].publishedAt).toBe(date)
  }
  invalidDate.sources[0].publishedAt = '2019-13'
  expect(() => build(dossierTree, {}, empty, { ...empty, records: [invalidDate] })).toThrow('publication date')

  const incompleteItemRights = sampleDossier()
  incompleteItemRights.sources[0].licenseAssessment = 'item-level-verified'
  expect(() => build(dossierTree, {}, empty, { ...empty, records: [incompleteItemRights] })).toThrow('Item-level rights metadata')
  incompleteItemRights.sources[0].license = 'Creative Commons Attribution License as stated on the article page; no numbered version is recorded. No figures are reproduced.'
  expect(() => build(dossierTree, {}, empty, { ...empty, records: [incompleteItemRights] })).not.toThrow()
  expect(incompleteItemRights.sources[0]).not.toHaveProperty('licenseUrl')
  expect(incompleteItemRights.sources[0]).not.toHaveProperty('rightsHolder')
  incompleteItemRights.sources[0].licenseUrl = 'not-a-url'
  expect(() => build(dossierTree, {}, empty, { ...empty, records: [incompleteItemRights] })).toThrow('license URL')

  const unresolvedIdentity = sampleDossier()
  unresolvedIdentity.identity.sourceIds = ['missing-source']
  expect(() => build(dossierTree, {}, empty, { ...empty, records: [unresolvedIdentity] })).toThrow('Unresolved dossier identity source')

  const unresolvedClaim = sampleDossier()
  unresolvedClaim.facets.morphology = { status: 'supported', claims: [{ text: 'Evidence.', sourceIds: [], locator: 'Table 1', placeTimeScope: 'One site.', lifeStatus: 'wild' }] }
  expect(() => build(dossierTree, {}, empty, { ...empty, records: [unresolvedClaim] })).toThrow('Unresolved dossier source')
})


const previewProfile = () => ({ colId: 'a', scientificName: 'a', rank: 'species', summary: { en: 'Scoped preview', zh: '限定介绍' }, summarySourceIds: ['preview'], sources: [{ id: 'preview', url: 'https://example.org/preview' }], sections: [{ text: { en: 'Account', zh: '介绍' }, sourceIds: ['preview'] }] })
const buildPreview = (value, releaseAlias = 'test') => buildCatalogueKnowledge({ releaseAlias: 'test', collections: {}, profiles: { releaseAlias, records: [value] }, nodes: [{ id: 'root', rank: 'genus', scientificName: 'root', status: 'accepted', parentId: null }, { id: 'a', rank: 'species', scientificName: 'a', status: 'accepted', parentId: 'root' }] })
test('preserves authored bindings and pins both profile and rollup records to the release', () => {
  const value = previewProfile()
  const result = buildPreview(value)
  expect(result.records.map(record => [record.colId, record.releaseAlias]).sort()).toEqual([['a', 'test'], ['root', 'test']])
  expect(result.records.find(record => record.colId === 'a').profile).toEqual(value)
  expect(() => buildPreview(value, 'other')).toThrow('release')
})
test.each(['missing-language', 'unresolved-source', 'duplicate-binding', 'ambiguous-source'])('rejects authored preview boundary: %s', boundary => {
  const value = previewProfile()
  if (boundary === 'missing-language') value.summary.zh = ''
  if (boundary === 'unresolved-source') value.summarySourceIds = ['absent']
  if (boundary === 'duplicate-binding') value.summarySourceIds.push('preview')
  if (boundary === 'ambiguous-source') value.sources.push({ ...value.sources[0] })
  expect(() => buildPreview(value)).toThrow(/preview/)
})
