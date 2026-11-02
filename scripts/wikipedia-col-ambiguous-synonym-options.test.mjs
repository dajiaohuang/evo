import { test } from 'node:test'
import assert from 'node:assert/strict'
import { ambiguousSynonymOptions, ambiguousSynonymPeerOptions } from './wikipedia-col-ambiguous-synonym-options.mjs'

test('keeps ambiguous catalog synonyms explicitly uncertain and respects page and identity checks', () => {
  const row = { node_id: 'A', item: 'https://www.wikidata.org/entity/Q1', source_name: 'Accepted name', synonyms: JSON.stringify([{ name: 'Old name', authorship: 'Author' }]), target_cols: '[]', pages: JSON.stringify([{ url: 'https://en.wikipedia.org/wiki/Old_name' }]) }
  const [option] = ambiguousSynonymOptions([row], () => true, () => false)
  assert.match(option.parentNames[0], /Catalog marks this synonym ambiguous; taxonomic identity unverified/)
  assert.match(option.parentNames[0], /Accepted name ← Old name Author/)
  const [unattributed] = ambiguousSynonymOptions([{ ...row, synonyms: JSON.stringify([{ name: 'Old name', authorship: '' }]) }], () => true, () => false)
  assert.ok(unattributed.parentNames.some(label => label.includes('Catalog synonym lacks authorship')))
  assert.deepEqual(option.abstracts, [])
  assert.deepEqual(ambiguousSynonymOptions([row], () => false, () => false), [])
  assert.deepEqual(ambiguousSynonymOptions([{ ...row, target_cols: '["B"]' }], () => true, id => id === 'B'), [])
})

test('marks ambiguous synonym redirects to another tree node', () => {
  const row = { item: 'https://www.wikidata.org/entity/Q1', target_name: 'Target', common_name: 'Genus', source_synonyms: JSON.stringify([{ name: 'Old name', authorship: 'Author' }]), pages: JSON.stringify(['https://en.wikipedia.org/wiki/Target']) }
  const [option] = ambiguousSynonymPeerOptions([row], () => true)
  assert.match(option.parentNames[0], /Ambiguous catalog synonym points to a different tree node; authorship matches, identity unverified/)
  assert.deepEqual(option.abstracts, [])
  assert.deepEqual(ambiguousSynonymPeerOptions([row], () => false), [])
})
