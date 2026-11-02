import { strict as assert } from 'node:assert'
import { test } from 'node:test'
import { primaryRelatedOptions, prioritizePrimaryRelated, synonymTitleRelatedOptions, qualifiedUnkeyedSpeciesOptions } from './wikipedia-col-primary-related-options.mjs'

test('changed item remains a clearly labelled candidate and honors page exclusion', () => {
  const row = { target_url: 'https://en.wikipedia.org/wiki/Whiptail_wallaby', target_item: 'https://www.wikidata.org/entity/Q109262312', target_name: 'Notamacropus parryi', relations: JSON.stringify(['changed-item-exact-name']) }
  const [option] = primaryRelatedOptions([row], () => true)
  assert.equal(option.url, row.target_url)
  assert.equal(option.primaryRelatedCandidate, true)
  assert.match(option.parentNames[0], /identity unverified/)
  assert.deepEqual(primaryRelatedOptions([row], () => false), [])
})

test('GBIF peer redirect states the other node and leaves identity unverified', () => {
  const row = { target_url: 'https://sv.wikipedia.org/wiki/Example', target_item: 'https://www.wikidata.org/entity/Q1', target_name: 'Target species', relations: JSON.stringify(['gbif-exact-peer']) }
  const [option] = primaryRelatedOptions([row], () => true)
  assert.match(option.parentNames[0], /another tree node.*identity unverified: Target species/)
  assert.deepEqual(option.abstracts, [])
})

test('name and parent evidence remains a candidate, rather than a confirmed identity', () => {
  const row = { target_url: 'https://en.wikipedia.org/wiki/Example', target_item: 'https://www.wikidata.org/entity/Q1', target_name: 'Example', relations: JSON.stringify(['name-parent-unverified']) }
  const [option] = primaryRelatedOptions([row], () => true)
  assert.match(option.parentNames[0], /name, parent and rank match; taxonomic identity unverified/)
  assert.deepEqual(option.abstracts, [])
  assert.deepEqual(primaryRelatedOptions([row], () => false), [])
})

test('same-parent alternate is presented as uncertain, without inventing synonymy', () => {
  const row = { target_url: 'https://en.wikipedia.org/wiki/Danubitoidea', target_item: 'https://www.wikidata.org/entity/Q139499030', target_name: 'Danubitoidea', relations: JSON.stringify(['same-parent-rank-alternate']) }
  const [option] = primaryRelatedOptions([row], () => true)
  assert.match(option.parentNames[0], /same parent and rank; taxonomic identity unverified/)
  assert.doesNotMatch(option.parentNames[0], /synonym/)
  assert.deepEqual(option.abstracts, [])
  assert.deepEqual(primaryRelatedOptions([row], () => false), [])
})

test('a redirect to a differently named taxon is clearly labeled and requires an audited page', () => {
  const row = { target_url: 'https://nl.wikipedia.org/wiki/Orthetrum_clelia', target_item: 'https://www.wikidata.org/entity/Q141128527', target_name: 'Orthetrum clelia', relations: JSON.stringify(['same-parent-rank-redirect']) }
  const [option] = primaryRelatedOptions([row], () => true)
  assert.match(option.parentNames[0], /redirects to a different name.*identity unverified/)
  assert.doesNotMatch(option.parentNames[0], /synonym/)
  assert.deepEqual(option.abstracts, [])
  assert.deepEqual(primaryRelatedOptions([row], () => false), [])
})

test('a formation redirect is labeled as a geological page, not a taxon article', () => {
  const row = { target_url: 'https://en.wikipedia.org/wiki/Douglas_Lake_Member', target_item: 'https://www.wikidata.org/entity/Q104855062', target_name: 'Douglas Lake Member', relations: JSON.stringify(['geological-formation-redirect']) }
  const [option] = primaryRelatedOptions([row], () => true)
  assert.match(option.parentNames[0], /geological formation page, not a separate taxon article/)
  assert.deepEqual(option.abstracts, [])
  assert.deepEqual(primaryRelatedOptions([row], () => false), [])
})

test('a publication redirect is labeled as a scientific publication, not a taxon article', () => {
  const row = { target_url: 'https://nl.wikipedia.org/wiki/Opinion_2430', target_item: 'https://www.wikidata.org/entity/Q64006730', target_name: 'Opinion 2430', relations: JSON.stringify(['scientific-publication-redirect']) }
  const [option] = primaryRelatedOptions([row], () => true)
  assert.match(option.parentNames[0], /scientific publication page, not a separate taxon article/)
  assert.deepEqual(option.abstracts, [])
  assert.deepEqual(primaryRelatedOptions([row], () => false), [])
})

test('cross-genus redirect remains an unverified related candidate', () => {
  const row = { target_url: 'https://en.wikipedia.org/wiki/Toxotoma_tetartea', target_item: 'https://www.wikidata.org/entity/Q135748999', target_name: 'Toxotoma tetartea', relations: JSON.stringify(['same-epithet-other-genus']) }
  const [option] = primaryRelatedOptions([row], () => true)
  assert.match(option.parentNames[0], /same epithet in another genus; taxonomic identity unverified/)
  assert.deepEqual(option.abstracts, [])
  assert.deepEqual(primaryRelatedOptions([row], () => false), [])
})

test('genus synonym redirect does not claim a species identification', () => {
  const row = { target_url: 'https://en.wikipedia.org/wiki/Physiphora', target_item: 'https://www.wikidata.org/entity/Q14419252', target_name: 'Physiphora', relations: JSON.stringify(['wikidata-genus-synonym-peer']) }
  const [option] = primaryRelatedOptions([row], () => true)
  assert.match(option.parentNames[0], /genus synonym relationship and the species identity is unverified/)
  assert.deepEqual(option.abstracts, [])
  assert.deepEqual(primaryRelatedOptions([row], () => false), [])
})

test('an ancestor page states its scope and requires page audit', () => {
  const row = { target_url: 'https://en.wikipedia.org/wiki/Gymnetina', target_item: 'https://www.wikidata.org/entity/Q14873650', target_name: 'Gymnetina', relations: JSON.stringify(['tree-ancestor-page']) }
  const [option] = primaryRelatedOptions([row], () => true)
  assert.match(option.parentNames[0], /ancestor taxon in the tree, not a separate article/)
  assert.deepEqual(option.abstracts, [])
  assert.deepEqual(primaryRelatedOptions([row], () => false), [])
})

test('a descendant page states its scope and requires page audit', () => {
  const row = { target_url: 'https://en.wikipedia.org/wiki/Example', target_item: 'https://www.wikidata.org/entity/Q1', target_name: 'Example', relations: JSON.stringify(['tree-descendant-page']) }
  const [option] = primaryRelatedOptions([row], () => true)
  assert.match(option.parentNames[0], /descendant taxon in the tree, not a separate article/)
  assert.deepEqual(option.abstracts, [])
  assert.deepEqual(primaryRelatedOptions([row], () => false), [])
})

test('a Wikidata child page identifies its scope and requires page audit', () => {
  const row = { target_url: 'https://en.wikipedia.org/wiki/Orthotelia', target_item: 'https://www.wikidata.org/entity/Q17644423', target_name: 'Orthotelia', relations: JSON.stringify(['wikidata-direct-child-page']) }
  const [option] = primaryRelatedOptions([row], () => true)
  assert.match(option.parentNames[0], /Wikidata lists the linked target as a child/)
  assert.deepEqual(option.abstracts, [])
  assert.deepEqual(primaryRelatedOptions([row], () => false), [])
})

test('a Wikidata parent page identifies its scope and requires page audit', () => {
  const row = { target_url: 'https://en.wikipedia.org/wiki/Koebeliini', target_item: 'https://www.wikidata.org/entity/Q21218880', target_name: 'Koebeliini', relations: JSON.stringify(['wikidata-direct-parent-page']) }
  const [option] = primaryRelatedOptions([row], () => true)
  assert.match(option.parentNames[0], /Wikidata lists the linked target as a parent/)
  assert.deepEqual(option.abstracts, [])
  assert.deepEqual(primaryRelatedOptions([row], () => false), [])
})

test('a related redirect at another rank remains unverified', () => {
  const row = { target_url: 'https://en.wikipedia.org/wiki/Atherigoninae', target_item: 'https://www.wikidata.org/entity/Q4813556', target_name: 'Atherigoninae', relations: JSON.stringify(['same-ancestor-different-rank']) }
  const [option] = primaryRelatedOptions([row], () => true)
  assert.match(option.parentNames[0], /different rank under a shared ancestor; taxonomic identity unverified/)
  assert.deepEqual(option.abstracts, [])
  assert.deepEqual(primaryRelatedOptions([row], () => false), [])
})

test('a redirect to a different sibling node is explicitly unverified', () => {
  const row = { target_url: 'https://en.wikipedia.org/wiki/Tropitoidea', target_item: 'https://www.wikidata.org/entity/Q23791724', target_name: 'Tropitoidea', relations: JSON.stringify(['tree-peer-redirect']) }
  const [option] = primaryRelatedOptions([row], () => true)
  assert.match(option.parentNames[0], /different sibling node in the tree; taxonomic identity unverified/)
  assert.deepEqual(option.abstracts, [])
  assert.deepEqual(primaryRelatedOptions([row], () => false), [])
})

test('a same-family homonym identifies another node and remains unverified', () => {
  const row = { target_url: 'https://nl.wikipedia.org/wiki/Exilifusus', target_item: 'https://www.wikidata.org/entity/Q27806635', target_name: 'Exilifusus', relations: JSON.stringify(['same-name-family-peer']) }
  const [option] = primaryRelatedOptions([row], () => true)
  assert.match(option.parentNames[0], /another tree node with the same name and rank in the same family; taxonomic identity unverified/)
  assert.deepEqual(option.abstracts, [])
  assert.deepEqual(primaryRelatedOptions([row], () => false), [])
})


test('a hybrid notation variant remains an unverified synonym candidate', () => {
  const row = { target_url: 'https://ceb.wikipedia.org/wiki/Verbascum_pseudophoeniceum', target_item: 'https://www.wikidata.org/entity/Q17748898', target_name: 'Verbascum pseudophoeniceum', relations: JSON.stringify(['source-synonym-hybrid-variant']) }
  const [option] = primaryRelatedOptions([row], () => true)
  assert.match(option.parentNames[0], /synonym differs from the page name in hybrid notation; taxonomic identity unverified/)
  assert.deepEqual(option.abstracts, [])
  assert.deepEqual(primaryRelatedOptions([row], () => false), [])
})

test('a redirect to another genus in the same superfamily remains unverified', () => {
  const row = { target_url: 'https://nl.wikipedia.org/wiki/Jonesia_simplex', target_item: 'https://www.wikidata.org/entity/Q4559257', target_name: 'Jonesia simplex', relations: JSON.stringify(['same-superfamily-other-node']) }
  const [option] = primaryRelatedOptions([row], () => true)
  assert.match(option.parentNames[0], /another genus of the same superfamily; taxonomic identity unverified/)
  assert.deepEqual(option.abstracts, [])
  assert.deepEqual(primaryRelatedOptions([row], () => false), [])
})

test('GBIF fuzzy peer evidence identifies the uncertainty and different local nodes', () => {
  const row = { target_url: 'https://ceb.wikipedia.org/wiki/Conocybe_ochraceodisca', target_item: 'https://www.wikidata.org/entity/Q107588245', target_name: 'Conocybe ochraceodiscus', relations: JSON.stringify(['same-author-gbif-peer']) }
  const [option] = primaryRelatedOptions([row], () => true)
  assert.match(option.parentNames[0], /including a fuzzy match; the local tree lists different nodes and identity is unverified/)
  assert.deepEqual(option.abstracts, [])
  assert.deepEqual(primaryRelatedOptions([row], () => false), [])
})

test('a same-name page with a parent or child catalogue ID reports the conflict', () => {
  const row = { target_url: 'https://en.wikipedia.org/wiki/Tacuaremboia', target_item: 'https://www.wikidata.org/entity/Q137544447', target_name: 'Tacuaremboia caorsii', relations: JSON.stringify(['same-name-rank-col-conflict']) }
  const [option] = primaryRelatedOptions([row], () => true)
  assert.match(option.parentNames[0], /catalogue identifier points to a parent or child node in the tree; taxonomic identity unverified/)
  assert.deepEqual(option.abstracts, [])
  assert.deepEqual(primaryRelatedOptions([row], () => false), [])
})


test('related redirects describe scope and retain only audited URL and identity pairs', () => {
  const rows = ['tree-child', 'wikidata-parent', 'wikidata-basionym', 'wikidata-synonym'].map((relation, i) => ({
    target_url: `https://en.wikipedia.org/wiki/Example_${i}`, target_item: `https://www.wikidata.org/entity/Q${i + 1}`,
    target_name: `Example ${i}`, relations: JSON.stringify([relation]),
  }))
  const options = primaryRelatedOptions(rows, (url, item) => !url.endsWith('_3') && item.endsWith('Q' + (Number(url.at(-1)) + 1)))
  assert.equal(options.length, 3)
  assert.match(options[0].parentNames[0], /descendant taxon/)
  assert.match(options[1].parentNames[0], /ancestor taxon/)
  assert.match(options[2].parentNames[0], /synonym or basionym/)
  for (const option of options) {
    assert.match(option.parentNames[1], /identity unverified/)
    assert.deepEqual(option.abstracts, [])
    assert.equal(option.primaryRelatedCandidate, true)
  }
})

test('a species-group candidate is labeled as a group, not a species page', () => {
  const row = { target_url: 'https://sv.wikipedia.org/wiki/Example', target_item: 'https://www.wikidata.org/entity/Q1', target_name: 'Example group', relations: JSON.stringify(['published-species-group']) }
  const [option] = primaryRelatedOptions([row], () => true)
  assert.match(option.parentNames[0], /species-group page, not a species article/)
  assert.match(option.parentNames[1], /identity unverified/)
  assert.deepEqual(option.abstracts, [])
  assert.deepEqual(primaryRelatedOptions([row], () => false), [])
})

test('a subspecies treatment identifies a different tree node and remains uncertain', () => {
  const row = { target_url: 'https://en.wikipedia.org/wiki/Example', target_item: 'https://www.wikidata.org/entity/Q1', target_name: 'Example', relations: JSON.stringify(['published-subspecies-treatment']) }
  const [option] = primaryRelatedOptions([row], () => true)
  assert.match(option.parentNames[0], /subspecies.*different tree node/)
  assert.match(option.parentNames[1], /identity unverified/)
  assert.deepEqual(option.abstracts, [])
})

test('historical synonyms describe the split without inventing a redirect', () => {
  const row = { target_url: 'https://en.wikipedia.org/wiki/Example', target_item: 'https://www.wikidata.org/entity/Q1', target_name: 'Example', relations: JSON.stringify(['published-synonym-split']) }
  const [option] = primaryRelatedOptions([row], () => true)
  assert.match(option.parentNames[0], /Historical synonym.*different tree node/)
  assert.doesNotMatch(option.parentNames[0], /redirect/)
  assert.match(option.parentNames[1], /identity unverified/)
  assert.deepEqual(option.abstracts, [])
})

test('related candidates precede duplicate URLs so their scope warning survives', () => {
  const url = 'https://en.wikipedia.org/wiki/Example'
  const related = { url, primaryRelatedCandidate: true, parentNames: ['identity unverified'] }
  const options = prioritizePrimaryRelated([{ url, parentNames: [] }, related])
  assert.equal(options[0], related)
})

test('labels a synonym title redirecting to a species in another genus', () => {
  const row={synonym_name:'Old genus',target_name:'Other species',item:'Q1',url:'https://en.wikipedia.org/wiki/Other'}
  const [option]=synonymTitleRelatedOptions([row],(url,item)=>url===row.url && item==='Q1')
  assert.match(option.parentNames[0],/species in another genus; relationship unverified/)
  assert.deepEqual(option.abstracts,[])
  assert.deepEqual(synonymTitleRelatedOptions([row],()=>false),[])
})

test('unkeyed qualified species retain their evidence and identity warning', () => {
  const row={locale:'ceb',title:'Example_species_(fly)',url:'https://ceb.wikipedia.org/wiki/Example_species_(fly)',evidence:'Same-name blowfly-family page'}
  const [option]=qualifiedUnkeyedSpeciesOptions([row],url=>url===row.url)
  assert.equal(option.item,'Wikipedia:ceb:Example_species_(fly)')
  assert.match(option.parentNames[1],/No Wikidata item; taxonomic identity unverified/)
  assert.deepEqual(option.abstracts,[])
  assert.deepEqual(qualifiedUnkeyedSpeciesOptions([row],()=>false),[])
})
