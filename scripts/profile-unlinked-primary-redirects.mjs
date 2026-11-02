import { createHash } from 'node:crypto'
import { readFileSync } from 'node:fs'
import { join } from 'node:path'
import { gunzipSync } from 'node:zlib'
import { DatabaseSync } from 'node:sqlite'

const root = '.git/evo-wikipedia-col26-8/published-data-reviewed-20261031'
const manifest = JSON.parse(readFileSync(join(root, 'manifest.json'), 'utf8'))
const db = new DatabaseSync('.git/evo-wikipedia-col26-8/inventory.sqlite', { readOnly: true })
const audit = new DatabaseSync('C:/Users/dajiaohuang/.codex/evo-link-sources/full-page-audit.sqlite', { readOnly: true })
const node = db.prepare('SELECT name,rank FROM nodes WHERE id=?')
const lookup = db.prepare('SELECT candidates_json FROM names WHERE name=?')
const related = db.prepare('SELECT 1 FROM primary_related_candidates WHERE node_id=? AND target_item=?')
const page = audit.prepare('SELECT status,target_title,actual_item FROM jobs WHERE url=? AND item=?')
let nodes = 0, withItem = 0, redirects = 0, alreadyRelated = 0, missingNameEvidence = 0
const unique = new Set(), examples = []
try {
  for (const shard of Object.values(manifest.shards)) {
    const bytes = readFileSync(join(root, shard.path))
    assertHash(bytes, shard.sha256)
    for (const [id, entry] of Object.entries(JSON.parse(gunzipSync(bytes)).entries)) {
      if (!['unresolved', 'ambiguous'].includes(entry.status)) continue
      nodes++
      if (!/^https:\/\/www\.wikidata\.org\/entity\/Q\d+$/.test(entry.item ?? '')) continue
      withItem++
      const taxon = node.get(id), row = taxon && lookup.get(taxon.name)
      if (!row) { missingNameEvidence++; continue }
      const candidate = JSON.parse(row.candidates_json).find(value => value.item === entry.item)
      if (!candidate) { missingNameEvidence++; continue }
      for (const url of candidate.articles ?? []) {
        const evidence = page.get(url, entry.item)
        if (evidence?.status !== 'identity-conflict' || !/^Q\d+$/.test(evidence.actual_item ?? '')) continue
        const target = `https://www.wikidata.org/entity/${evidence.actual_item}`, key = `${id}\0${target}`
        if (unique.has(key)) continue
        unique.add(key); redirects++
        if (related.get(id, target)) { alreadyRelated++; continue }
        if (examples.length < 20) examples.push({ id, name: taxon.name, item: entry.item, url, target, targetTitle: evidence.target_title })
      }
    }
  }
  console.log(JSON.stringify({ nodes, withItem, missingNameEvidence, redirects, alreadyRelated, needsRelationshipReview: redirects - alreadyRelated, examples }))
} finally { audit.close(); db.close() }

function assertHash(bytes, expected) {
  if (createHash('sha256').update(bytes).digest('hex') !== expected) throw new Error('Published link shard checksum mismatch')
}
