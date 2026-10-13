import assert from 'node:assert/strict'
import { existsSync, mkdirSync, mkdtempSync, readFileSync, rmSync, writeFileSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join, relative, resolve, sep } from 'node:path'
import { it } from 'vitest'
import { buildContentProjections } from './build-content-projections.mjs'
import { pageRef, writeNodeContent, writeReferences } from './node-content.mjs'

it('rebuilds only a changed export descriptor and retains global generator invalidation', () => {
  const root = mkdtempSync(join(tmpdir(), 'evo-projections-'))
  try {
    mkdirSync(join(root, '.git'))
    writeReferences([], root)
    for (const key of ['first', 'second']) {
      writeNodeContent(key, {
        node: { schemaVersion: 1, identity: { kind: 'topic', displayName: key }, relationships: [], structure: { sections: { en: [], zh: [] } } },
        evidence: { schemaVersion: 1, records: { readerLimitations: { en: pageRef('en', 'scope', 'body'), zh: pageRef('zh', 'scope', 'body') } } },
        pages: {
          en: [{ key: 'scope', title: 'Recorded scope', body: `${key} fixture account.` }],
          zh: [{ key: 'scope', title: '资料范围', body: `${key} 测试条目。` }],
        },
      }, root)
    }
    const map = {
      schemaVersion: 3, canonicalLinks: 'flat-nodes', canonicalReferenceTable: 'content/references.yaml',
      generatedInputs: Object.fromEntries(['first', 'second'].map(key => [`data/${key}.json`, {
        encoding: 'json', template: { contentRecord: { path: `content/nodes/${key}`, key: 'readerLimitations' } },
      }])),
      dossierShardIndex: { path: 'data/shards.json', metadata: { shards: [] } },
    }
    map.generatedInputs['data/reader.jsonl.br'] = {
      encoding: 'brotli-jsonl',
      template: [{ contentRecord: { path: 'content/nodes/first', key: 'readerLimitations' } }],
    }
    mkdirSync(join(root, 'data'))
    const plainPath = join(root, 'data/reader.jsonl')
    const manifestPath = plainPath + '.manifest.json'
    writeFileSync(plainPath, '')
    writeFileSync(manifestPath, JSON.stringify({ recordCount: 0, decodedSha256: '', compressedSha256: '' }))
    const mapPath = join(root, 'content/projection-map.yaml')
    writeFileSync(mapPath, JSON.stringify(map))
    assert.equal(buildContentProjections({ root, quiet: true }).rebuiltProjections, 3)
    assert.equal(buildContentProjections({ root, quiet: true }), null)
    const cachePath = join(root, '.git/evo-content/projection-cache.json')
    const completeCache = JSON.parse(readFileSync(cachePath, 'utf8'))
    assert.equal(completeCache.schemaVersion, 4)
    assert.deepEqual(completeCache.outputPaths, [...new Set(completeCache.outputPaths)].sort())
    for (const companion of [plainPath, manifestPath]) {
      assert.ok(completeCache.outputPaths.includes(relative(root, companion).split(sep).join('/')))
      const original = readFileSync(companion)
      writeFileSync(companion, companion === plainPath ? 'corrupted companion\n' : JSON.stringify({ ...JSON.parse(original), recordCount: -1 }))
      assert.throws(() => buildContentProjections({ root, quiet: true, check: true }), /Content projection drift: data\/reader\.jsonl/)
      assert.equal(buildContentProjections({ root, quiet: true }).rebuiltProjections, 1)
      assert.ok(readFileSync(companion).equals(original))
      assert.equal(buildContentProjections({ root, quiet: true, check: true }), null)
    }
    // Old aggregate caches omitted companions and must not certify output reuse.
    const legacyCache = JSON.parse(readFileSync(cachePath, 'utf8'))
    legacyCache.schemaVersion = 3
    writeFileSync(cachePath, JSON.stringify(legacyCache))
    assert.equal(buildContentProjections({ root, quiet: true, check: true }).rebuiltProjections, 3)
    assert.equal(buildContentProjections({ root, quiet: true, check: true }), null)
    const unchanged = readFileSync(join(root, 'data/second.json'))

    map.generatedInputs['data/first.json'].template.contentRecord.inject = { version: 'changed export' }
    writeFileSync(mapPath, JSON.stringify(map))
    assert.equal(buildContentProjections({ root, quiet: true }).rebuiltProjections, 1)
    assert.equal(JSON.parse(readFileSync(join(root, 'data/first.json'), 'utf8')).version, 'changed export')
    assert.ok(readFileSync(join(root, 'data/second.json')).equals(unchanged))
    assert.equal(buildContentProjections({ root, quiet: true, check: true }), null)

    // A changed shared generator still invalidates every dependent export.
    mkdirSync(join(root, 'scripts'))
    writeFileSync(join(root, 'scripts/node-content.mjs'), '// changed shared generator fixture\n')
    assert.equal(buildContentProjections({ root, quiet: true }).rebuiltProjections, 3)

    rmSync(cachePath)
    assert.equal(buildContentProjections({ root, quiet: true, check: true }).rebuiltProjections, 3)
    assert.ok(existsSync(cachePath))
    assert.equal(buildContentProjections({ root, quiet: true }), null)
  } finally {
    const child = relative(resolve(tmpdir()), resolve(root))
    if (!child.startsWith('evo-projections-') || child.includes(sep)) throw new Error('Unsafe projection fixture cleanup target')
    rmSync(root, { recursive: true, force: true })
  }
}, 30000)
