import assert from 'node:assert/strict'
import { createHash } from 'node:crypto'
import { readFileSync } from 'node:fs'
import { DatabaseSync } from 'node:sqlite'

const input = process.argv[2]
assert.ok(input, 'Provide the authority-name probe')
const bytes = readFileSync(input)
const { nodes, results } = JSON.parse(bytes)
const db = new DatabaseSync('.git/evo-wikipedia-col26-8/inventory.sqlite')
db.exec('PRAGMA busy_timeout=15000; CREATE TABLE IF NOT EXISTS authority_wikidata_matches (node_id TEXT NOT NULL,name TEXT NOT NULL,candidates_json TEXT NOT NULL,PRIMARY KEY(node_id,name))')
const sourceHash = createHash('sha256').update(bytes).digest('hex')
const previous = db.prepare("SELECT value FROM meta WHERE key='authority_wikidata_source_sha256'").get()?.value
assert.ok(!previous || previous === sourceHash, 'Authority source changed')
const current = db.prepare('SELECT name,rank FROM nodes WHERE id=?')
const insert = db.prepare('INSERT OR REPLACE INTO authority_wikidata_matches VALUES(?,?,?)')
let matched = 0
db.exec('BEGIN IMMEDIATE')
try {
  for (const node of nodes) {
    const existing = current.get(node.id)
    assert.equal(existing?.name, node.name)
    assert.equal(existing?.rank, node.rank)
    const name = /^([A-Z][a-z]{2,})\s/u.exec(node.name)?.[1]
    assert.ok(name)
    const items = new Map()
    for (const result of results.filter(row => row.name === name)) {
      assert.match(result.item, /^http:\/\/www\.wikidata\.org\/entity\/Q\d+$/)
      const url = new URL(result.article)
      assert.equal(url.protocol, 'https:')
      assert.match(url.hostname, /^[a-z0-9-]+\.wikipedia\.org$/)
      assert.ok(url.pathname.startsWith('/wiki/'))
      if (!items.has(result.item)) items.set(result.item, {item:result.item.replace('http:', 'https:'), colIds:[], ranks:[], parentNames:[], articles:[]})
      const item = items.get(result.item)
      if (result.col && !item.colIds.includes(result.col)) item.colIds.push(result.col)
      if (result.rank && !item.ranks.includes(result.rank)) item.ranks.push(result.rank)
      if (!item.articles.includes(url.href)) item.articles.push(url.href)
    }
    if (items.size) { insert.run(node.id,name,JSON.stringify([...items.values()])); matched++ }
  }
  db.prepare("INSERT OR REPLACE INTO meta(key,value) VALUES('authority_wikidata_source_sha256',?)").run(sourceHash)
  db.exec('COMMIT')
} catch (error) { db.exec('ROLLBACK'); throw error }
console.log(JSON.stringify({sourceHash,nodes:nodes.length,matched}))
db.close()
