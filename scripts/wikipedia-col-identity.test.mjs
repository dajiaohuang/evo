import { describe, it } from 'node:test'
import assert from 'node:assert/strict'
import { canonicalName, classify } from './wikipedia-col-identity.mjs'

describe('COL Wikipedia identity', () => {
  it('removes only the recorded authorship suffix', () => {
    assert.equal(canonicalName({ scientificName: 'Homo sapiens Linnaeus, 1758', authorship: 'Linnaeus, 1758' }), 'Homo sapiens')
    assert.equal(canonicalName({ scientificName: 'Pan', authorship: 'Elsewhere' }), 'Pan')
  })
  it('never turns a homonym into an asserted match', () => {
    const one = { item: 'Q1', colIds: [], articles: ['https://en.wikipedia.org/wiki/Pan'] }
    const two = { item: 'Q2', colIds: [], articles: [] }
    assert.equal(classify({ id: 'COL1' }, [one, two]).status, 'ambiguous-name')
    assert.equal(classify({ id: 'COL1' }, [one]).status, 'candidate-name')
    assert.equal(classify({ id: 'COL1' }, [{ ...one, colIds: ['COL1'] }]).status, 'matched-col-id')
    assert.equal(classify({ id: 'COL1' }, []).status, 'unresolved')
  })
  it('uses the rank and parent to distinguish exact scientific names', () => {
    const chimp = { item: 'Q1', colIds: [], ranks: ['http://www.wikidata.org/entity/Q34740'], parentNames: ['Hominidae'], articles: ['https://en.wikipedia.org/wiki/Pan_(genus)'] }
    const other = { item: 'Q2', colIds: [], ranks: ['http://www.wikidata.org/entity/Q34740'], parentNames: ['Other'], articles: [] }
    assert.equal(classify({ id: 'COL1', rank: 'genus', parentName: 'Hominidae' }, [chimp, other]).status, 'matched-name-parent-rank')
    assert.equal(classify({ id: 'COL1', rank: 'genus', parentName: 'Unknown' }, [chimp, other]).status, 'ambiguous-name')
  })
})
