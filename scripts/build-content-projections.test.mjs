import { existsSync, mkdirSync, mkdtempSync, readFileSync, rmSync, writeFileSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join, relative, resolve, sep } from 'node:path'
import { stringify } from 'yaml'
import { describe, expect, it } from 'vitest'
import { buildContentProjections, canonicalContentInputs } from './build-content-projections.mjs'
import { pageRef, writeNodeContent, writeReferences } from './node-content.mjs'

function fixture(label) {
  const root = mkdtempSync(join(tmpdir(), label))
  mkdirSync(join(root, '.git'))
  writeReferences([], root)
  return root
}

function cleanup(root) {
  const target = resolve(root)
  const withinTemp = relative(resolve(tmpdir()), target)
  if (!withinTemp.startsWith('evo-flat-projection-') || withinTemp.includes(sep)) throw new Error(`Unsafe fixture cleanup: ${target}`)
  rmSync(target, { recursive: true, force: true })
}

function registry(root, generatedInputs) {
  const map = { schemaVersion: 3, canonicalLinks: 'flat-nodes', canonicalReferenceTable: 'content/references.yaml', generatedInputs, dossierShardIndex: { path: 'data/shards.json', metadata: { shards: [] } } }
  writeFileSync(join(root, 'content/projection-map.yaml'), stringify(map))
  return map
}

function node(scientificName, sections = []) {
  return { schemaVersion: 1, identity: { scientificName }, relationships: [], structure: { sections: { en: sections, zh: [] } } }
}

describe('flat content exports', () => {
  it('checks drift without overwriting exports and rejects an old registry before using a warm cache', () => {
    const root = fixture('evo-flat-projection-check-')
    try {
      writeNodeContent('example', {
        node: node('Example', ['account']),
        evidence: { schemaVersion: 1, records: { claims: [{ statement: pageRef('en', 'account', 'body') }] } },
        pages: { en: [{ key: 'account', title: 'Recorded account', body: 'Recorded statement.' }] },
      }, root)
      const map = registry(root, { 'data/claims.json': { encoding: 'json', template: [{ contentRecord: { path: 'content/nodes/example', key: 'claims', index: 0 } }] } })
      buildContentProjections({ root, quiet: true })
      expect(() => buildContentProjections({ root, quiet: true, check: true })).not.toThrow()
      const projection = join(root, 'data/claims.json')
      const before = readFileSync(projection)
      writeNodeContent('example', { pages: { en: [{ key: 'account', title: 'Recorded account', body: 'Changed statement.' }] } }, root)
      expect(() => buildContentProjections({ root, quiet: true, check: true })).toThrow('Content projection drift')
      expect(readFileSync(projection)).toEqual(before)
      buildContentProjections({ root, quiet: true })
      expect(JSON.parse(readFileSync(projection, 'utf8'))[0].statement).toBe('Changed statement.')
      writeFileSync(projection, '[]\n')
      expect(() => buildContentProjections({ root, quiet: true, check: true })).toThrow('Content projection drift')
      map.generatedInputs['data/early.json'] = { encoding: 'json', template: { contentRecord: { path: 'content/nodes/example', key: 'claims', index: 0 } } }
      map.generatedInputs['data/research-source.json'] = { encoding: 'json', template: { readerSources: { contentRecord: { path: 'content/taxa/Example', key: 'claims', index: 0 } } } }
      writeFileSync(join(root, 'content/projection-map.yaml'), stringify(map))
      expect(() => buildContentProjections({ root, quiet: true })).toThrow('contentRecord.path must start with content/nodes/')
      expect(existsSync(join(root, 'data/early.json'))).toBe(false)
      expect(readFileSync(projection, 'utf8')).toBe('[]\n')
      map.generatedInputs['data/research-source.json'].template = { readerLanguageStatus: { contentRecord: { path: 'content/nodes/example', key: 'readerLanguageStatus' } } }
      writeFileSync(join(root, 'content/projection-map.yaml'), stringify(map))
      expect(() => buildContentProjections({ root, quiet: true })).toThrow('Unsupported runtime record type: readerLanguageStatus')
      expect(existsSync(join(root, 'data/early.json'))).toBe(false)
      expect(readFileSync(projection, 'utf8')).toBe('[]\n')
      delete map.generatedInputs['data/early.json']
      delete map.generatedInputs['data/research-source.json']
      map.schemaVersion = 2
      map.canonicalLinks = 'tree-paths'
      writeFileSync(join(root, 'content/projection-map.yaml'), stringify(map))
      expect(() => buildContentProjections({ root, quiet: true })).toThrow('Only schema 3 flat-nodes')
    } finally { cleanup(root) }
  })

  it('exports authored fields, rebuilds only affected nodes and refreshes all exports when bibliography changes', () => {
    const root = fixture('evo-flat-projection-incremental-')
    try {
      const keys = ['a', 'b']
      for (const key of keys) writeNodeContent(key, {
        node: node(key),
        evidence: { schemaVersion: 1, records: { 'atlas-profile': { text: 'Account.', addedField: 'Current authoring' } } },
      }, root)
      registry(root, Object.fromEntries(keys.map((key, index) => [`data/${index}.json`, { encoding: 'json', template: { contentRecord: { path: `content/nodes/${key}`, key: 'atlas-profile' } } }])))
      buildContentProjections({ root, quiet: true })
      expect(JSON.parse(readFileSync(join(root, 'data/0.json'), 'utf8')).addedField).toBe('Current authoring')
      writeNodeContent('a', { evidence: { schemaVersion: 1, records: { 'atlas-profile': { text: 'Revised account.', addedField: 'Current authoring' } } } }, root)
      const unchanged = readFileSync(join(root, 'data/1.json'))
      expect(buildContentProjections({ root, quiet: true }).rebuiltProjections).toBe(1)
      expect(JSON.parse(readFileSync(join(root, 'data/0.json'), 'utf8')).text).toBe('Revised account.')
      expect(readFileSync(join(root, 'data/1.json'))).toEqual(unchanged)
      writeReferences([{ id: 'source', title: 'Recorded bibliography' }], root)
      expect(buildContentProjections({ root, quiet: true }).rebuiltProjections).toBe(2)
      expect(JSON.parse(readFileSync(join(root, 'data/references.json'), 'utf8'))[0].id).toBe('source')
      const inputs = canonicalContentInputs(['data/0.json'], root)
      expect(inputs).toContain('content/nodes/a/node.yaml')
      expect(inputs).toContain('content/references.yaml')
      expect(inputs).not.toContain('content/nodes/a/page.en.md')
    } finally { cleanup(root) }
  })
})
