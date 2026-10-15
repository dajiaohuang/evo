// @vitest-environment node
import assert from 'node:assert/strict'
import { createHash } from 'node:crypto'
import { mkdirSync, mkdtempSync, readFileSync, readdirSync, rmSync, writeFileSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join, relative } from 'node:path'
import { brotliDecompressSync, gunzipSync } from 'node:zlib'
import { it } from 'vitest'
import { buildContentProjections } from './build-content-projections.mjs'
import { pageRef, writeNodeContent, writeReferences } from './node-content.mjs'

const sha256 = bytes => createHash('sha256').update(bytes).digest('hex')
const fixtureKey = 'producer-determinism-fixture'
const canonical = {
  node: { schemaVersion: 1, identity: { kind: 'topic', displayName: 'Producer determinism fixture' }, relationships: [], structure: { sections: { en: [], zh: [] } } },
  evidence: { schemaVersion: 1, records: { readerLimitations: { en: pageRef('en', 'scope', 'body'), zh: pageRef('zh', 'scope', 'body') } } },
  pages: { en: [{ key: 'scope', title: 'Scope', body: 'Stable canonical fixture.' }], zh: [{ key: 'scope', title: '范围', body: '稳定的规范夹具。' }] },
}

function createFixture(root) {
  mkdirSync(join(root, '.git'), { recursive: true })
  writeReferences([], root)
  writeNodeContent(fixtureKey, canonical, root)
  const map = {
    schemaVersion: 3,
    canonicalLinks: 'flat-nodes',
    canonicalReferenceTable: 'content/references.yaml',
    generatedInputs: {
      'data/fixture.json.gz': { encoding: 'gzip-json', template: { contentRecord: { path: `content/nodes/${fixtureKey}`, key: 'readerLimitations' } } },
      'data/fixture.jsonl.br': { encoding: 'brotli-jsonl', template: [{ contentRecord: { path: `content/nodes/${fixtureKey}`, key: 'readerLimitations' } }] },
    },
    dossierShardIndex: { path: 'data/fixture-shards.json', metadata: { schemaVersion: 1, encoding: 'brotli-jsonl', shards: [] } },
  }
  mkdirSync(join(root, 'data'), { recursive: true })
  writeFileSync(join(root, 'data/fixture.jsonl'), '')
  writeFileSync(join(root, 'data/fixture.jsonl.manifest.json'), JSON.stringify({ recordCount: 0, decodedSha256: '', compressedSha256: '' }) + '\n')
  mkdirSync(join(root, 'content'), { recursive: true })
  writeFileSync(join(root, 'content/projection-map.yaml'), JSON.stringify(map, null, 2) + '\n')
}

function generatedArtifacts(root) {
  const outputs = new Map()
  function walk(directory) {
    for (const entry of readdirSync(directory, { withFileTypes: true })) {
      const absolute = join(directory, entry.name)
      if (entry.isDirectory()) walk(absolute)
      else outputs.set(relative(join(root, 'data'), absolute).replaceAll('\\', '/'), readFileSync(absolute))
    }
  }
  walk(join(root, 'data'))
  return outputs
}

it('emits byte-identical gzip and Brotli projections from independent roots', () => {
  const roots = [mkdtempSync(join(tmpdir(), 'evo-producer-root-a-')), mkdtempSync(join(tmpdir(), 'evo-producer-root-b-'))]
  try {
    assert.notEqual(roots[0], roots[1])
    roots.forEach(createFixture)
    const [rootA, rootB] = roots

    assert.equal(buildContentProjections({ root: rootA, force: true, quiet: true }).rebuiltProjections, 2)
    const first = generatedArtifacts(rootA)
    assert.equal(buildContentProjections({ root: rootA, quiet: true }), null, 'warm cache is not a generated artifact')
    assert.equal(buildContentProjections({ root: rootB, force: true, quiet: true }).rebuiltProjections, 2)
    const second = generatedArtifacts(rootB)

    assert.deepEqual([...first.keys()].sort(), [...second.keys()].sort())
    for (const [path, bytes] of first) {
      assert.ok(bytes.equals(second.get(path)), `output bytes differ: ${path}`)
      assert.equal(sha256(bytes), sha256(second.get(path)), `output hash differs: ${path}`)
      assert.ok(!bytes.includes(Buffer.from(rootA)) && !bytes.includes(Buffer.from(rootB)), `private root leaked in ${path}`)
    }

    const gzipDecoded = gunzipSync(first.get('fixture.json.gz'))
    const brotliDecoded = brotliDecompressSync(first.get('fixture.jsonl.br'))
    for (const decoded of [gzipDecoded, brotliDecoded]) {
      assert.ok(!decoded.includes(Buffer.from(rootA)) && !decoded.includes(Buffer.from(rootB)), 'private root leaked in decoded payload')
    }
    assert.match(gzipDecoded.toString('utf8'), /Stable canonical fixture\./)
    assert.match(brotliDecoded.toString('utf8'), /Stable canonical fixture\./)
    const manifestBytes = first.get('fixture.jsonl.manifest.json')
    const manifest = JSON.parse(manifestBytes.toString('utf8'))
    assert.equal(manifest.decodedSha256, sha256(first.get('fixture.jsonl')))
    assert.equal(manifest.compressedSha256, sha256(first.get('fixture.jsonl.br')))
    assert.equal(sha256(manifestBytes), sha256(second.get('fixture.jsonl.manifest.json')))
    assert.equal(buildContentProjections({ root: rootA, check: true, quiet: true }), null)
    assert.equal(buildContentProjections({ root: rootB, check: true, quiet: true }), null)
  } finally {
    for (const root of roots) rmSync(root, { recursive: true, force: true })
  }
})
