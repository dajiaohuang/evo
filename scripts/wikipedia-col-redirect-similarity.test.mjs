import { strict as assert } from 'node:assert'
import { test } from 'node:test'
import { similarTaxonNames, similarSpeciesInflection } from './wikipedia-col-redirect-similarity.mjs'
test('matches close spelling and zoological superfamily suffix variants conservatively', () => {
  assert.equal(similarTaxonNames('Drepatelodes umbrillinea', 'Drepatelodes umbrilinea'), true)
  assert.equal(similarTaxonNames('Danubitaceae', 'Danubitoidea'), true)
  assert.equal(similarTaxonNames('Lycaena arthurus', 'Phengaris arion'), false)
  assert.equal(similarTaxonNames('', 'Example'), false)
})
test('recognizes a species inflection only within the same genus and a substantial stem', () => {
  assert.equal(similarSpeciesInflection('Eurystomina propinquum', 'Eurystomina propinqua'), true)
  assert.equal(similarSpeciesInflection('Eurystomina propinquum', 'Other propinqua'), false)
  assert.equal(similarSpeciesInflection('Eurystomina album', 'Eurystomina alba'), false)
  assert.equal(similarSpeciesInflection('Eurystomina propinquum', 'Eurystomina othera'), false)
})
