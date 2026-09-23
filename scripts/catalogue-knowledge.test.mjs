import { expect, test } from 'vitest'
import { buildCatalogueKnowledge } from './catalogue-knowledge.mjs'

const node = (id, rank, parentId = null) => ({ id, rank, parentId, scientificName: id, sourceDatasetId: '1', status: 'accepted' })
const empty = { releaseAlias: 'test', records: [] }
const build = (nodes, collections = {}, profiles = empty) => buildCatalogueKnowledge({ releaseAlias: 'test', nodes, collections, profiles })

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
    dossierFacets: Object.fromEntries(['morphology', 'lifeHistory', 'ecology', 'evolution', 'distribution', 'fossil', 'conservation'].map(facet => [facet, { 'not-assessed': 2 }])),
  })
  expect(result.records.find(row => row.colId === 'order').subtree.acceptedSpecies).toBe(1)
  expect(result.records.find(row => row.colId === 'a').descriptionCollections).toEqual(['oneDescriptions', 'twoDescriptions'])
  expect(result.records.some(row => row.colId === 'b')).toBe(false)
  expect(result.counts.describedSpecies).toBe(1)
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
