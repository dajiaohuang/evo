import { readFileSync } from 'node:fs'
import { DatabaseSync } from 'node:sqlite'
const root = '.git/evo-wikipedia-col26-8/'
const proof = JSON.parse(readFileSync(root + 'diptera-archive-synonym-item-checks-20261031.json', 'utf8'))
const db = new DatabaseSync(root + 'inventory.sqlite', { readOnly: true }), node = db.prepare('SELECT id,name,rank FROM nodes WHERE id=?')
const normalize = value => value.normalize('NFKD').replaceAll(/\p{M}/gu, '').toLocaleLowerCase('en-US').replaceAll(/[^a-z0-9]+/g, ' ').trim()
try {
  const groups = new Map()
  for (const row of proof.rows) {
    if (row.status !== 'available' || !row.claims || row.claims.missing) continue
    const otherIds = row.claims.colIds.filter(id => id !== row.node && node.get(id))
    if (otherIds.length && !process.argv.includes('--conflicts')) continue
    if (!otherIds.length && process.argv.includes('--conflicts')) continue
    const scientificMatch = row.claims.names.some(name => normalize(name) === normalize(row.name))
    const rankMatch = row.nodeInfo.rank === 'species' && row.claims.ranks.includes('Q7432')
    const key = `${row.node}\0${row.item}`
    if (!groups.has(key)) groups.set(key, { node: row.node, name: row.nodeInfo.name, synonym: row.name, rank: row.nodeInfo.rank, item: row.item, targetNames: row.claims.names, targetRanks: row.claims.ranks, colIds: row.claims.colIds, otherNodes: otherIds.map(id => node.get(id)), parents: row.claims.parents, scientificMatch, rankMatch, urls: [] })
    groups.get(key).urls.push(row.url)
  }
  const values = [...groups.values()]
  const filtered = process.argv.includes('--same-epithet') ? values.filter(row => row.rankMatch && row.targetNames.some(name => normalize(name).split(' ').at(-1) === normalize(row.name).split(' ').at(-1))) : values
  console.log(JSON.stringify({ groups: filtered.length, nodes: new Set(filtered.map(row => row.node)).size, nameAndRank: filtered.filter(row => row.scientificMatch && row.rankMatch).length, values: filtered }))
} finally { db.close() }
