import assert from 'node:assert/strict'
import { createHash } from 'node:crypto'
import { spawnSync } from 'node:child_process'

const cases = [
  ['VPHL5', 'https://fr.wikipedia.org/wiki/Xyelodontophis_uluguruensis', 'identity unverified'],
  ['BZDPQ', 'https://sv.wikipedia.org/wiki/Crepidohamma_rica', 'identity unverified'],
  ['8GPDR', 'https://en.wikipedia.org/wiki/Boaedon_lineatus', 'different tree node'],
  ['CP263', 'https://ceb.wikipedia.org/wiki/Xenolimosina_setaria', 'different tree node'],
  ['V7HB7', 'https://en.wikipedia.org/wiki/Panolopus_costatus', 'different tree node'],
  ['43NVL', 'https://ceb.wikipedia.org/wiki/Agelena_kiboschensis', 'identity unverified'],
  ['32WR9', 'https://ceb.wikipedia.org/wiki/Araneus_anatipes', 'identity unverified'],
  ['95G8C', 'https://ceb.wikipedia.org/wiki/Mago_apophysis', 'No Wikidata item'],
]
for (const [id, expectedUrl, expectedLabel] of cases) {
  const part = parseInt(createHash('sha256').update(id).digest('hex').slice(0, 2), 16)
  const result = spawnSync(process.execPath, ['scripts/wikipedia-col-export.mjs', '--audit-only', '--audit-db', 'C:/Users/dajiaohuang/.codex/evo-link-sources/full-page-audit.sqlite', '--parts', '256', '--part', String(part), '--inspect-id', id], { encoding: 'utf8', maxBuffer: 8 * 1024 * 1024 })
  assert.equal(result.status, 0, result.stderr)
  const lines = result.stdout.trim().split('\n').map(line => JSON.parse(line))
  const entry = lines.find(row => row.inspectedId === id)?.entry
  const option = entry?.options?.find(row => row.url === expectedUrl)
  assert.ok(option, `Missing ${expectedUrl} on ${id}`)
  assert.ok(option.parentNames.some(label => label.includes(expectedLabel)))
  assert.deepEqual(option.abstracts, [])
  const audit = lines.find(row => row.status === 'checked')
  assert.equal(audit?.audit?.missing, 0); assert.equal(audit?.audit?.conflicting, 0)
  console.log(JSON.stringify({ id, status: 'passed', url: expectedUrl }))
}
