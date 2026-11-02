import { test } from 'node:test'
import assert from 'node:assert/strict'
import { nominateSubgenusParentOptions, subgenusSameFamilyGenusOptions, subgenusFamilyUnidentifiedGenusOptions, ncbiHigherSynonymPeerOptions, registryAbbrevPeerOptions } from './wikipedia-col-primary-related-options.mjs'

test('labels a verified parent article as genus scope', () => {
  const row = { parent_name: 'Agulla', item: 'https://www.wikidata.org/entity/Q4694571', url: 'https://en.wikipedia.org/wiki/Agulla_(snakefly)' }
  const [option] = nominateSubgenusParentOptions([row], () => true)
  assert.match(option.parentNames[0], /Parent genus article; this link is not a subgenus article/)
  assert.deepEqual(option.abstracts, [])
  assert.deepEqual(nominateSubgenusParentOptions([row], () => false), [])
})

test('identifies a same-family genus as a different node', () => {
  const row = { target_name: 'Archethopolys', family_name: 'Lithobiidae', item: 'https://www.wikidata.org/entity/Q10417189', url: 'https://sv.wikipedia.org/wiki/Archethopolys' }
  const [option] = subgenusSameFamilyGenusOptions([row], () => true)
  assert.match(option.parentNames[0], /different tree node; relationship unverified/)
  assert.deepEqual(option.abstracts, [])
  assert.deepEqual(subgenusSameFamilyGenusOptions([row], () => false), [])
})

test('marks an unidentified same-family genus as an unconfirmed candidate', () => {
  const row = { target_name: 'Dasybasis', family_name: 'Tabanidae', item: 'https://www.wikidata.org/entity/Q14743512', url: 'https://en.wikipedia.org/wiki/Agelanius' }
  const [option] = subgenusFamilyUnidentifiedGenusOptions([row], () => true)
  assert.match(option.parentNames[0], /same family; taxonomic identity unverified/)
  assert.deepEqual(option.abstracts, [])
  assert.deepEqual(subgenusFamilyUnidentifiedGenusOptions([row], () => false), [])
})

test('describes an NCBI synonym pointing to a different tree node', () => {
  const row = { target_name: 'Exoristinae', common_name: 'Tachinidae', item: 'https://www.wikidata.org/entity/Q925275', url: 'https://en.wikipedia.org/wiki/Exoristinae' }
  const [option] = ncbiHigherSynonymPeerOptions([row], () => true)
  assert.match(option.parentNames[0], /target is a different tree node and relationship is unverified/)
  assert.deepEqual(ncbiHigherSynonymPeerOptions([row], () => false), [])
  assert.deepEqual(option.abstracts, [])
})

test('describes an author-matched catalog synonym as an unverified different node', () => {
  const row = { target_name: 'Japonia balabacensis', common_name: 'Japonia', item: 'https://www.wikidata.org/entity/Q107033707', url: 'https://ceb.wikipedia.org/wiki/Japonia_balabacensis' }
  const [option] = registryAbbrevPeerOptions([row], () => true)
  assert.match(option.parentNames[0], /different tree node; authorship matches, relationship unverified/)
  assert.deepEqual(registryAbbrevPeerOptions([row], () => false), [])
  assert.deepEqual(option.abstracts, [])
})
