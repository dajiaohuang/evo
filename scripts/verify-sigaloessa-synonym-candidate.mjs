import assert from 'node:assert/strict'
import { DatabaseSync } from 'node:sqlite'
import { dipteraSynonymOptions } from './wikipedia-col-worms-sidecar-options.mjs'
const db = new DatabaseSync('.git/evo-wikipedia-col26-8/inventory.sqlite', { readOnly: true })
try {
  const rows = db.prepare('SELECT * FROM diptera_synonym_candidates WHERE node_id=? AND item=?').all('BZDPQ', 'https://www.wikidata.org/entity/Q14674550')
  assert.equal(rows.length, 1)
  const options = dipteraSynonymOptions(rows, () => true, id => Boolean(db.prepare('SELECT 1 FROM nodes WHERE id=?').get(id)))
  assert.equal(options.length, 1); assert.equal(options[0].url, 'https://sv.wikipedia.org/wiki/Crepidohamma_rica')
  assert.ok(options[0].parentNames.some(label => label.includes('identity unverified')))
  assert.deepEqual(options[0].abstracts, [])
  console.log(JSON.stringify({ status: 'passed', node: 'BZDPQ', url: options[0].url }))
} finally { db.close() }
