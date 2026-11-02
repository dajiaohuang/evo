import { test } from 'node:test'
import assert from 'node:assert/strict'
import { ncbiIdOptions } from './wikipedia-col-ncbi-id-options.mjs'

test('keeps NCBI matches as uncertain links without an abstract', () => {
  const row = { node_id: 'A', item: 'https://www.wikidata.org/entity/Q1', source_name: 'Fasciolopsis buskii', target_names: '["Fasciolopsis buski"]', target_cols: '[]', pages: '[{"url":"https://en.wikipedia.org/wiki/Fasciolopsis_buski"}]' }
  const [option] = ncbiIdOptions([row], () => true, () => false)
  assert.match(option.parentNames[0], /NCBI taxon match candidate, identity unverified/)
  assert.deepEqual(option.abstracts, [])
  assert.equal(option.url, 'https://en.wikipedia.org/wiki/Fasciolopsis_buski')
  assert.deepEqual(ncbiIdOptions([row], () => false, () => false), [])
  assert.deepEqual(ncbiIdOptions([{ ...row, identity_hold: true }], () => true, () => false), [])
  assert.deepEqual(ncbiIdOptions([{ ...row, target_cols: '["B"]' }], () => true, id => id === 'B'), [])
  const [renamed] = ncbiIdOptions([{ ...row, target_names: '["Different name"]' }], () => true, () => false)
  assert.match(renamed.parentNames[0], /Fasciolopsis buskii → Different name/)
  const [differentGenus] = ncbiIdOptions([{ ...row, col_genus: 'Lycaena', ncbi_genus: 'Polyommatus' }], () => true, () => false)
  assert.match(differentGenus.parentNames[1], /Genus names differ; verify: Lycaena → Polyommatus/)
  const [differentAuthor] = ncbiIdOptions([{ ...row, col_genus: 'Lycaena', ncbi_genus: 'Polyommatus', author_comparison: 'different' }], () => true, () => false)
  assert.match(differentAuthor.parentNames[2], /Authorship does not match directly; verify/)
  const [matchedOriginal] = ncbiIdOptions([{ ...row, author_comparison: 'matched_original' }], () => true, () => false)
  assert.match(matchedOriginal.parentNames[1], /Original name and authorship match; taxonomic identity unverified/)
  const [missingAuthor] = ncbiIdOptions([{ ...row, author_comparison: 'missing' }], () => true, () => false)
  assert.match(missingAuthor.parentNames[1], /Insufficient authorship information/)
  const [unnamed] = ncbiIdOptions([{ ...row, target_names: '[]' }], () => true, () => false)
  assert.match(unnamed.parentNames[0], /Target name missing/)
  const [synonym] = ncbiIdOptions([{ ...row, source_kind: 'synonym' }], () => true, () => false)
  assert.match(synonym.parentNames[0], /NCBI taxon synonym, identity unverified/)
  const [catalog] = ncbiIdOptions([{ ...row, source_kind: 'catalog_synonym', source_synonym: 'Old taxon' }], () => true, () => false)
  assert.match(catalog.parentNames[0], /Catalog synonym matched to NCBI, identity unverified: Fasciolopsis buskii ← Old taxon/)
})
