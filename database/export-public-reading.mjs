import assert from 'node:assert/strict'
import { readFile, writeFile, mkdir, readdir, copyFile } from 'node:fs/promises'
import { resolve, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { gzipSync, gunzipSync } from 'node:zlib'
import { openTurso, decodeRow } from './turso-store.mjs'
import { readRevisionRow } from './read-revision.mjs'
import { readLocalArtifact } from './local-artifacts.mjs'
import { sha256, stableJson } from './model.mjs'
import { resolveNodeDocument, collectNodeReferenceBindings } from '../scripts/node-content.mjs'

const arg = name => { const i = process.argv.indexOf(name); return i < 0 ? null : process.argv[i + 1] }
const snapshot = resolve(arg('--snapshot'))
const receipt = JSON.parse(await readFile(join(snapshot, 'snapshot.json'), 'utf8'))
assert.equal(receipt.status, 'captured')
assert.ok(receipt.serviceRestoredAt)
const root = fileURLToPath(new URL('../', import.meta.url))
const output = resolve(arg('--out') ?? join(root, 'public/nodes'))
assert.equal(output, join(root, 'public/nodes'), 'Publication output is the public reading directory')
await mkdir(output, { recursive: true })
assert.ok((await readdir(output)).every(name => ['data', 'lookup'].includes(name)), 'Refuse to mix a previous publication with this snapshot')
await mkdir(join(output, 'data'), { recursive: true })
await mkdir(join(output, 'lookup'), { recursive: true })
assert.equal((await readdir(join(output, 'data'))).length, 0, 'Prior publication payloads exist')
assert.equal((await readdir(join(output, 'lookup'))).length, 0, 'Prior publication lookups exist')
const db = await openTurso(join(snapshot, 'snapshot.db'))
const files = [], index = [], coverage = [], lookups = new Map()
const summary = { schemaVersion: 1, snapshotAt: receipt.capturedAt, nodes: 0, languagePages: 0, sections: 0, updatedNodes: 0, locales: { en: 0, zh: 0 }, bodyBytes: 0, compressedBytes: 0 }
const writeGzip = async (path, value) => {
  const decoded = Buffer.from(JSON.stringify(value))
  const bytes = gzipSync(decoded, { level: 9, mtime: 0 })
  // Validate the bytes that will actually be delivered, before recording them.
  assert.deepEqual(gunzipSync(bytes), decoded)
  await writeFile(join(output, path), bytes, { flag: 'wx' })
  const info = { path, bytes: bytes.length, sha256: sha256(bytes), decodedBytes: decoded.length, decodedSha256: sha256(decoded) }
  files.push(info); summary.compressedBytes += bytes.length
  return info
}
try {
  console.log('Selecting current node revisions from the closed snapshot.')
  const baselines = await db.prepare('SELECT source_commit,count(*) n FROM import_node_key GROUP BY source_commit').all()
  assert.equal(baselines.length, 1, 'Choose an explicit baseline when more than one has been imported')
  const baseline = baselines[0].source_commit
  // Read bounded tables once. Turso 0.8's nested LEFT JOIN plan for this full
  // corpus can scan the baseline for every node; map exact immutable IDs here.
  const baselineRows = await db.prepare('SELECT node_id,physical_key,revision_id FROM import_node_key WHERE source_commit=?').all(baseline)
  const baselineByNode = new Map(baselineRows.map(row => [row.node_id, row]))
  assert.equal(baselineByNode.size, baselineRows.length)
  const heads = await db.prepare('SELECT node_id,node_revision_id,generation FROM node_draft_head WHERE workspace_id=?').all(receipt.workspaceId)
  const headByNode = new Map(heads.map(row => [row.node_id, row]))
  const selection = (await db.prepare('SELECT id FROM content_node ORDER BY id').all()).map(node => {
    const base = baselineByNode.get(node.id), head = headByNode.get(node.id)
    return { node_id: node.id, physical_key: base?.physical_key, revision_id: head?.node_revision_id ?? base?.revision_id, generation: head?.generation ?? 0 }
  })
  assert.ok(selection.every(r => r.revision_id), 'Every node must resolve to a baseline or current draft')
  const byRevision = new Map(selection.map(row => [row.revision_id, row]))
  assert.equal(byRevision.size, selection.length)
  console.log(JSON.stringify({ selectedNodes: selection.length }))
  const references = new Map()
  for (const row of await db.prepare('SELECT version_id,reference_id,content_sha256,metadata FROM reference_revision').all()) {
    const metadata = JSON.parse(row.metadata)
    assert.equal(sha256(stableJson(metadata)), row.content_sha256)
    references.set(row.version_id, { id: row.reference_id, sha256: row.content_sha256, metadata })
  }
  const deps = new Map()
  for (const row of await db.prepare('SELECT revision_id,reference_version_id FROM revision_dependency').all()) {
    if (!byRevision.has(row.revision_id)) continue
    const list = deps.get(row.revision_id) ?? []
    assert.ok(references.has(row.reference_version_id))
    list.push(references.get(row.reference_version_id)); deps.set(row.revision_id, list)
  }
  console.log(JSON.stringify({ referenceVersions: references.size, revisionDependencySets: deps.size }))
  // Group by immutable object so the bounded payload reader does not repeatedly
  // decompress the same batch. All chosen revisions belong to the closed snapshot.
  const ids = await db.prepare('SELECT id,payload_artifact_sha256 FROM node_revision ORDER BY payload_artifact_sha256,id').all()
  let batch = [], batchNumber = 0
  const flush = async () => {
    if (!batch.length) return
    const path = `data/${String(batchNumber++).padStart(4, '0')}.json.gz`
    await writeGzip(path, batch)
    for (const record of batch) {
      const identity = record.content.identity
      const name = identity.displayName ?? identity.scientificName ?? record.key ?? record.id
      const entry = { id: record.id, key: record.key, name, scientificName: identity.scientificName ?? '', kind: identity.kind ?? '', locales: Object.keys(record.content.pages).filter(l => record.content.pages[l].length), shard: path }
      index.push(entry)
      for (const key of new Set([record.id, record.key].filter(Boolean))) {
        const prefix = sha256(key).slice(0, 2)
        const lookup = lookups.get(prefix) ?? {}
        assert.ok(!Object.hasOwn(lookup, key), 'Ambiguous public lookup key')
        lookup[key] = { id: record.id, shard: path }; lookups.set(prefix, lookup)
      }
    }
    batch = []
  }
  const read = db.prepare('SELECT r.*,a.storage_locator,a.bytes AS artifact_bytes,a.access FROM node_revision r LEFT JOIN artifact a ON a.sha256=r.payload_artifact_sha256 WHERE r.id=?')
  for (const id of ids) {
    const selected = byRevision.get(id.id)
    if (!selected) continue
    const row = await read.get(id.id)
    const document = await readRevisionRow(decodeRow('node_revision', row), row.id, { readArtifact: readLocalArtifact })
    const bound = deps.get(row.id) ?? []
    const catalogue = new Map(bound.map(r => [r.id, r.metadata]))
    assert.equal(catalogue.size, bound.length, 'One node cannot use two versions of one bibliography ID')
    const bindings = collectNodeReferenceBindings(document, catalogue)
    assert.deepEqual([...bindings.keys()].sort(), [...catalogue.keys()].sort(), 'Exact bibliography dependency set differs')
    const content = resolveNodeDocument(document, catalogue)
    const locales = Object.keys(document.pages)
    const pageHashes = {}
    for (const locale of locales) {
      summary.locales[locale]++; summary.languagePages++
      summary.sections += content.pages[locale].length
      summary.bodyBytes += Buffer.byteLength(document.pages[locale])
      pageHashes[locale] = sha256(document.pages[locale])
    }
    const key = selected.physical_key ? decodeURIComponent(selected.physical_key) : null
    batch.push({ id: row.node_id, key, revisionId: row.id, contentSha256: row.content_sha256, content,
      references: bound.map(r => ({ id: r.id, sha256: r.sha256, metadata: r.metadata })) })
    coverage.push({ nodeId: row.node_id, revisionId: row.id, contentSha256: row.content_sha256, pageHashes, references: bound.map(r => ({ id: r.id, sha256: r.sha256 })) })
    summary.nodes++; if (selected.generation) summary.updatedNodes++
    if (batch.length === 256) await flush()
    if (summary.nodes % 10000 === 0) console.log(JSON.stringify({ exportedNodes: summary.nodes, languagePages: summary.languagePages }))
  }
  await flush()
  assert.equal(summary.nodes, selection.length)
  assert.equal(summary.nodes, Number((await db.prepare('SELECT count(*) n FROM content_node').get()).n))
  index.sort((a, b) => String(a.name).localeCompare(String(b.name), 'en') || a.id.localeCompare(b.id))
  const directory = await writeGzip('index.json.gz', index)
  for (const [prefix, lookup] of lookups) await writeGzip(`lookup/${prefix}.json.gz`, lookup)
  const revisionCoverage = await writeGzip('coverage.json.gz', coverage)
  for (const name of ['index.html', 'reader.mjs', 'reader.css']) await copyFile(join(root, 'scripts/full-node-reader', name), join(output, name))
  await copyFile(join(root, 'node_modules/fflate/esm/browser.js'), join(output, 'inflate.mjs'))
  await copyFile(join(root, 'src/utils/nodeReading.mjs'), join(output, 'node-reading.mjs'))
  const manifest = { ...summary, baselineCommit: baseline, directory, revisionCoverage, files,
    selection: 'One current workspace draft per node, otherwise its imported baseline revision; historical superseded revisions are not duplicated.',
    complete: true }
  await writeFile(join(output, 'manifest.json'), JSON.stringify(manifest, null, 2) + '\n', { flag: 'wx' })
  await writeFile(join(snapshot, 'public-reading-result.json'), JSON.stringify({ ...summary, manifestSha256: sha256(await readFile(join(output, 'manifest.json'))), complete: true }, null, 2) + '\n', { flag: 'wx' })
  console.log(JSON.stringify(summary))
} finally { await db.close() }
