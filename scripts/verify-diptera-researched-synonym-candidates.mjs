import assert from 'node:assert/strict'
import { DatabaseSync } from 'node:sqlite'
import { dipteraSynonymOptions } from './wikipedia-col-worms-sidecar-options.mjs'
const db = new DatabaseSync('.git/evo-wikipedia-col26-8/inventory.sqlite', { readOnly: true })
try {
  for (const [node, item, url] of [
    ['9HV5S', 'Q10809689', 'https://sv.wikipedia.org/wiki/Pycnopogon_pallidipennis'],
    ['8D8ZB', 'Q14734889', 'https://sv.wikipedia.org/wiki/Calozenillia_perlucida'],
  ]) {
    const rows = db.prepare('SELECT * FROM diptera_synonym_candidates WHERE node_id=? AND item=?').all(node, `https://www.wikidata.org/entity/${item}`)
    assert.equal(rows.length, 1)
    const options = dipteraSynonymOptions(rows, () => true, id => Boolean(db.prepare('SELECT 1 FROM nodes WHERE id=?').get(id)))
    assert.equal(options.length, 1); assert.equal(options[0].url, url)
    assert.ok(options[0].parentNames.some(label => label.includes('identity unverified')))
    assert.deepEqual(options[0].abstracts, [])
  }
  console.log(JSON.stringify({ status: 'passed', nodes: ['9HV5S', '8D8ZB'] }))
} finally { db.close() }
