import assert from 'node:assert/strict'
import { DatabaseSync } from 'node:sqlite'
import { reptileSynonymOptions } from './wikipedia-col-worms-sidecar-options.mjs'
const db = new DatabaseSync('.git/evo-wikipedia-col26-8/inventory.sqlite', { readOnly: true })
try {
  const rows = db.prepare('SELECT * FROM reptile_synonym_candidates WHERE node_id=? AND item=?').all('VPHL5', 'https://www.wikidata.org/entity/Q543759')
  assert.equal(rows.length, 1)
  const options = reptileSynonymOptions(rows, () => true, id => Boolean(db.prepare('SELECT 1 FROM nodes WHERE id=?').get(id)))
  assert.equal(options.length, 1)
  assert.equal(options[0].url, 'https://fr.wikipedia.org/wiki/Xyelodontophis_uluguruensis')
  assert.ok(options[0].parentNames.some(label => label.includes('identity unverified')))
  assert.ok(options[0].parentNames.some(label => label.includes('identifier unresolved')))
  assert.deepEqual(options[0].abstracts, [])
  console.log(JSON.stringify({ status: 'passed', node: 'VPHL5', url: options[0].url, identity: 'unverified', externalIdentifier: 'unresolved' }))
} finally { db.close() }
