import assert from 'node:assert/strict'
import { DatabaseSync } from 'node:sqlite'
import { dipteraSynonymOptions } from './wikipedia-col-worms-sidecar-options.mjs'
const db = new DatabaseSync('.git/evo-wikipedia-col26-8/inventory.sqlite', { readOnly: true })
try {
  for (const [node, item, url] of [
    ['BZFS5', 'Q14688340', 'https://sv.wikipedia.org/wiki/Lutzomyia_incasica'],
    ['BZFS4', 'Q14688359', 'https://sv.wikipedia.org/wiki/Lutzomyia_acostai'],
  ]) {
    const rows = db.prepare('SELECT * FROM diptera_synonym_candidates WHERE node_id=? AND item=?').all(node, `https://www.wikidata.org/entity/${item}`)
    assert.equal(rows.length, 1)
    const options = dipteraSynonymOptions(rows, () => true, id => Boolean(db.prepare('SELECT 1 FROM nodes WHERE id=?').get(id)))
    assert.equal(options.length, 1); assert.equal(options[0].url, url)
    assert.ok(options[0].parentNames.some(label => label.includes('identity unverified')))
    assert.deepEqual(options[0].abstracts, [])
  }
  console.log(JSON.stringify({ status: 'passed', nodes: ['BZFS5', 'BZFS4'] }))
} finally { db.close() }
