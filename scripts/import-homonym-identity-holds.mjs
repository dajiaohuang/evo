import assert from 'node:assert/strict'
import { createHash } from 'node:crypto'
import { readFileSync, writeFileSync } from 'node:fs'
import { DatabaseSync } from 'node:sqlite'
import { checkPageAudit } from './wikipedia-col-audit-preflight-check.mjs'

const root = '.git/evo-wikipedia-col26-8/'
const db = new DatabaseSync(root + 'inventory.sqlite')
const audit = new DatabaseSync('C:/Users/dajiaohuang/.codex/evo-link-sources/full-page-audit.sqlite', { readOnly: true })
const exclusions = readFileSync('C:/Users/dajiaohuang/.codex/evo-link-sources/page-audit-exclusions.json')
const sha = bytes => createHash('sha256').update(bytes).digest('hex')
const cases = [
  { node: 'T9VN', name: 'Chaenothecopsis tigillaris', item: 'https://www.wikidata.org/entity/Q15120819', urls: ['https://en.wikipedia.org/wiki/Calicium_tigillare', 'https://en.wikipedia.org/wiki/Cyphelium_tigillare'], reason: 'The original taxonomic study distinguishes Chaenothecopsis tigillaris from the basionym of Cyphelium tigillare.', source: 'https://www.cambridge.org/core/journals/lichenologist/article/sphinctrina-tigillaris-an-overlooked-species-of-chaenothecopsis-growing-on-perenniporia-meridionalis-a-polypore-new-to-the-uk/53E019C1EBE5A1E540B4B3C58343818F' },
  { node: '95V7D', name: 'Amyna glaucopera', item: 'https://www.wikidata.org/entity/Q4749563', urls: ['https://en.wikipedia.org/wiki/Amyna_apicalis'], reason: 'Conflicting nomenclatural evidence: Lochia apicalis Walker, 1865 and Ilattia apicalis Moore, 1882 are listed separately; retain the hold until reconciled.', source: 'https://nic.funet.fi/pub/sci/bio/life/insecta/lepidoptera/ditrysia/noctuoidea/noctuidae/bagisarinae/amyna/' },
]
try {
  checkPageAudit(audit, db, exclusions)
  const node = db.prepare('SELECT id,name,rank FROM nodes WHERE id=?')
  const itemHold = db.prepare('SELECT 1 FROM ncbi_candidate_identity_holds WHERE node_id=? AND item=?')
  const urlHold = db.prepare('SELECT 1 FROM candidate_identity_held_urls WHERE node_id=? AND url=?')
  for (const row of cases) {
    const found = node.get(row.node)
    assert.equal(found?.name, row.name); assert.equal(found.rank, 'species')
    assert.equal(itemHold.get(row.node, row.item), undefined)
    for (const url of row.urls) assert.equal(urlHold.get(row.node, url), undefined)
  }
  const getMeta = db.prepare('SELECT value FROM meta WHERE key=?')
  const previousItems = getMeta.get('ncbi_candidate_identity_holds_sha256')?.value
  const previousUrls = getMeta.get('candidate_identity_held_urls_sha256')?.value
  assert.match(previousItems, /^[0-9a-f]{64}$/); assert.match(previousUrls, /^[0-9a-f]{64}$/)
  const proof = Buffer.from(JSON.stringify({ previousItems, previousUrls, cases, checkedAt: new Date().toISOString(), exclusionsSha256: sha(exclusions) }))
  writeFileSync(root + 'homonym-identity-holds-proof.json', proof, { flag: 'wx' })
  db.exec('BEGIN IMMEDIATE')
  try {
    assert.equal(getMeta.get('ncbi_candidate_identity_holds_sha256').value, previousItems)
    assert.equal(getMeta.get('candidate_identity_held_urls_sha256').value, previousUrls)
    const addItem = db.prepare('INSERT INTO ncbi_candidate_identity_holds(node_id,item,reason) VALUES(?,?,?)')
    const addUrl = db.prepare('INSERT INTO candidate_identity_held_urls(node_id,url) VALUES(?,?)')
    for (const row of cases) { addItem.run(row.node, row.item, row.reason); for (const url of row.urls) addUrl.run(row.node, url) }
    const setMeta = db.prepare('UPDATE meta SET value=? WHERE key=?')
    setMeta.run(sha(proof), 'ncbi_candidate_identity_holds_sha256'); setMeta.run(sha(proof), 'candidate_identity_held_urls_sha256')
    db.exec('COMMIT')
  } catch (error) { db.exec('ROLLBACK'); throw error }
  console.log(JSON.stringify({ status: 'held', nodes: cases.map(row => row.node), itemPairs: cases.length, urlPairs: cases.reduce((n, row) => n + row.urls.length, 0), proofSha256: sha(proof) }))
} finally { audit.close(); db.close() }
