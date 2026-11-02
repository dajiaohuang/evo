import { readFileSync } from 'node:fs'
import { DatabaseSync } from 'node:sqlite'
const root = '.git/evo-wikipedia-col26-8/'
const proof = JSON.parse(readFileSync(root + 'itis-cross-source-synonym-item-checks-20261031.json'))
const db = new DatabaseSync(root + 'inventory.sqlite', { readOnly: true })
const get = db.prepare('SELECT id,name,rank FROM nodes WHERE id=?')
const normalize = value => value.normalize('NFKD').replaceAll(/\p{M}/gu, '').toLocaleLowerCase('en-US').replaceAll(/[^a-z0-9]+/g, ' ').trim()
try {
  const groups = new Map(), nodeBySynonym = new Map()
  for (const row of proof.rows) {
    if (row.status !== 'available' || !row.item || !row.claims || row.claims.missing) continue
    if (row.nodeInfo?.rank !== 'species' || !row.claims.ranks.includes('Q7432')) continue
    if (!row.claims.names.some(name => normalize(name) === normalize(row.name))) continue
    if (row.claims.colIds.some(id => id !== row.node && get.get(id))) continue
    const key = `${row.node}\0${row.item}`
    if (!groups.has(key)) groups.set(key, { node: row.node, name: row.nodeInfo.name, synonym: row.name, item: row.item, colIds: row.claims.colIds, pages: [] })
    groups.get(key).pages.push({ url: row.url, locale: row.locale, title: row.canonicalTitle })
    if (!nodeBySynonym.has(row.name)) nodeBySynonym.set(row.name, new Set())
    nodeBySynonym.get(row.name).add(row.node)
  }
  const eligible = [...groups.values()].filter(group => nodeBySynonym.get(group.synonym).size === 1)
  console.log(JSON.stringify({ groups: groups.size, nodes: new Set([...groups.values()].map(x => x.node)).size, uniqueSynonymGroups: eligible.length, uniqueSynonymNodes: new Set(eligible.map(x => x.node)).size, excludedShared: groups.size - eligible.length, samples: eligible.slice(0, 5) }))
} finally { db.close() }
