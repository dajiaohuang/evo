import { strict as assert } from 'node:assert'
import { test } from 'node:test'
import { itisCrossSourceOptions } from './wikipedia-col-itis-cross-source-options.mjs'

test('cross-source synonyms only expose audited pages and retain identity warnings', () => {
  const row = { node_id: 'A', item: 'https://www.wikidata.org/entity/Q1', source_name: 'New species', synonym_name: 'Old species', target_cols: JSON.stringify(['unmapped']), pages: JSON.stringify([{ url: 'https://en.wikipedia.org/wiki/Old_species' }]) }
  assert.deepEqual(itisCrossSourceOptions([row], () => false, () => false), [])
  const [option] = itisCrossSourceOptions([row], () => true, () => false)
  assert.match(option.parentNames[0], /taxonomic identity unverified/)
  assert.match(option.parentNames[1], /external identifier unresolved/)
  assert.deepEqual(option.abstracts, [])
})

test('unkeyed synonym pages explain the missing identity', () => {
  const row = { node_id: 'A', item: 'Wikipedia:ceb:Old_species', source_name: 'New species', synonym_name: 'Old species', target_cols: '[]', pages: JSON.stringify([{ url: 'https://ceb.wikipedia.org/wiki/Old_species' }]) }
  const [option] = itisCrossSourceOptions([row], () => true, () => false)
  assert.match(option.parentNames[1], /No Wikidata item/)
  assert.deepEqual(option.abstracts, [])
})
