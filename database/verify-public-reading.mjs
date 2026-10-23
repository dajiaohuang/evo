import assert from 'node:assert/strict'
import { readFile, writeFile } from 'node:fs/promises'
import { resolve, join } from 'node:path'
import { gunzipSync } from 'node:zlib'
import { openTurso, decodeRow } from './turso-store.mjs'
import { readRevisionRow } from './read-revision.mjs'
import { readLocalArtifact } from './local-artifacts.mjs'
import { sha256, stableJson } from './model.mjs'
import { validateNodeAggregate, resolveNodeDocument } from '../scripts/node-content.mjs'

const arg = name => { const i = process.argv.indexOf(name); return i < 0 ? null : process.argv[i + 1] }
const snapshot = resolve(arg('--snapshot')), output = resolve(arg('--site') ?? 'public/nodes')
const manifest = JSON.parse(await readFile(join(output, 'manifest.json'), 'utf8'))
const snapshotReceipt = JSON.parse(await readFile(join(snapshot, 'snapshot.json'), 'utf8'))
assert.equal(manifest.snapshotAt, snapshotReceipt.capturedAt)
assert.equal(manifest.complete, true)
const db = await openTurso(join(snapshot, 'snapshot.db'))
const actual = new Map(), expected = new Map(), references = new Map(), dependencies = new Map()
let pages = 0, sections = 0
try {
  for (const row of await db.prepare('SELECT node_id,revision_id,physical_key FROM import_node_key WHERE source_commit=?').all(manifest.baselineCommit)) expected.set(row.node_id, { revision: row.revision_id, key: decodeURIComponent(row.physical_key) })
  for (const row of await db.prepare('SELECT node_id,node_revision_id FROM node_draft_head WHERE workspace_id=?').all(snapshotReceipt.workspaceId)) expected.set(row.node_id, { ...expected.get(row.node_id), revision: row.node_revision_id })
  assert.equal(expected.size, Number((await db.prepare('SELECT count(*) n FROM content_node').get()).n))
  for (const row of await db.prepare('SELECT version_id,reference_id,content_sha256,metadata FROM reference_revision').all()) references.set(row.version_id, { id: row.reference_id, sha256: row.content_sha256, metadata: JSON.parse(row.metadata) })
  for (const row of await db.prepare('SELECT revision_id,reference_version_id FROM revision_dependency').all()) {
    const list = dependencies.get(row.revision_id) ?? []; list.push(references.get(row.reference_version_id)); dependencies.set(row.revision_id, list)
  }
  const descriptors = new Map(manifest.files.map(file => [file.path, file]))
  assert.equal(descriptors.size, manifest.files.length)
  const read = async path => {
    const descriptor = descriptors.get(path); assert.ok(descriptor)
    const bytes = await readFile(join(output, path))
    assert.equal(bytes.length, descriptor.bytes); assert.equal(sha256(bytes), descriptor.sha256)
    const decoded = gunzipSync(bytes)
    assert.equal(decoded.length, descriptor.decodedBytes); assert.equal(sha256(decoded), descriptor.decodedSha256)
    return JSON.parse(decoded)
  }
  const revision = db.prepare('SELECT r.*,a.storage_locator,a.bytes AS artifact_bytes,a.access FROM node_revision r LEFT JOIN artifact a ON a.sha256=r.payload_artifact_sha256 WHERE r.id=?')
  for (const descriptor of manifest.files.filter(file => file.path.startsWith('data/'))) {
    for (const record of await read(descriptor.path)) {
      assert.ok(!actual.has(record.id), 'Duplicate deployed node')
      assert.equal(record.revisionId, expected.get(record.id)?.revision, 'Deployed node is not the selected current revision')
      assert.equal(record.key, expected.get(record.id)?.key ?? null)
      const row = await revision.get(record.revisionId)
      assert.equal(row.node_id, record.id); assert.equal(row.content_sha256, record.contentSha256)
      const document = await readRevisionRow(decodeRow('node_revision', row), row.id, { readArtifact: readLocalArtifact })
      assert.deepEqual(record.content.pages, validateNodeAggregate(document), 'Published language prose differs from the database')
      const refs = dependencies.get(record.revisionId) ?? []
      assert.deepEqual([...record.references].sort((a,b) => a.id.localeCompare(b.id)), [...refs].sort((a,b) => a.id.localeCompare(b.id)), 'Published bibliography version differs')
      for (const ref of record.references) assert.equal(sha256(stableJson(ref.metadata)), ref.sha256)
      assert.deepEqual(record.content, resolveNodeDocument(document, new Map(refs.map(r => [r.id, r.metadata]))), 'Published scientific material or source binding differs')
      pages += Object.keys(document.pages).length
      sections += Object.values(record.content.pages).reduce((count, rows) => count + rows.length, 0)
      actual.set(record.id, { key: record.key, shard: descriptor.path, locales: Object.keys(document.pages) })
    }
    if (actual.size % 25600 === 0) console.log(JSON.stringify({ verifiedNodes: actual.size, languagePages: pages }))
  }
  assert.equal(actual.size, expected.size); assert.equal(actual.size, manifest.nodes)
  assert.equal(pages, manifest.languagePages); assert.equal(sections, manifest.sections)
  const index = await read(manifest.directory.path)
  assert.equal(index.length, actual.size); assert.equal(new Set(index.map(row => row.id)).size, actual.size)
  for (const row of index) { const found = actual.get(row.id); assert.equal(row.shard, found?.shard); assert.deepEqual([...row.locales].sort(), [...found.locales].sort()) }
  const aliases = new Set()
  for (const descriptor of manifest.files.filter(file => file.path.startsWith('lookup/'))) for (const [key, target] of Object.entries(await read(descriptor.path))) {
    assert.equal(sha256(key).slice(0, 2), descriptor.path.slice(7, 9))
    const found = actual.get(target.id); assert.ok(found); assert.equal(target.shard, found.shard)
    assert.ok(key === target.id || key === found.key); assert.ok(!aliases.has(key)); aliases.add(key)
  }
  for (const [id, value] of actual) { assert.ok(aliases.has(id)); if (value.key) assert.ok(aliases.has(value.key)) }
  const coverage = await read(manifest.revisionCoverage.path); assert.equal(coverage.length, actual.size)
  for (const record of coverage) assert.equal(record.revisionId, expected.get(record.nodeId)?.revision)
  const result = { status: 'passed', checkedAt: new Date().toISOString(), snapshotAt: manifest.snapshotAt, nodes: actual.size, languagePages: pages, sections,
    allCurrentRevisions: true, allLanguageBodiesExact: true, allBibliographyVersionsExact: true, allScientificProjectionsExact: true, allDirectoryAndLookupEntriesReachable: true,
    manifestSha256: sha256(await readFile(join(output, 'manifest.json'))) }
  await writeFile(join(snapshot, 'public-reading-verification.json'), JSON.stringify(result, null, 2) + '\n', { flag: 'wx' })
  console.log(JSON.stringify(result))
} finally { await db.close() }
