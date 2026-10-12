import { mkdirSync, mkdtempSync, readFileSync, rmSync, writeFileSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join } from 'node:path'
import { describe, expect, it } from 'vitest'
import { buildContentProjections } from './build-content-projections.mjs'
import { readNodeContent, writeNodeContent, writeUtf8, writeYaml } from './tree-path-content.mjs'

describe('content drift check', () => {
  it('rejects a changed canonical record without overwriting its projection', () => {
    const root = mkdtempSync(join(tmpdir(), 'evo-projection-check-'))
    try {
      const path = 'content/taxa/example'
      writeNodeContent(path, { scientificName: 'Example' }, { claims: [{ statement: 'Recorded statement.' }] }, root)
      writeUtf8(join(root, 'data/references.json'), '[]\n')
      mkdirSync(join(root, '.git'))
      writeYaml(join(root, 'content/projection-map.yaml'), {
        schemaVersion: 2, canonicalLinks: 'tree-paths',
        generatedInputs: { 'data/claims.json': { encoding: 'json', template: [{ contentRecord: { path, key: 'claims', index: 0 } }] } },
        dossierShardIndex: { path: 'data/shards.json', metadata: { shards: [] } },
        navigationAliases: [], profileAliases: [], topicAliases: [], recordAliases: [],
      })
      buildContentProjections({ root, force: true, quiet: true })
      expect(() => buildContentProjections({ root, quiet: true, check: true })).not.toThrow()
      const projection = join(root, 'data/claims.json')
      const before = readFileSync(projection)
      const page = join(root, path, 'evidence.md')
      writeFileSync(page, readFileSync(page, 'utf8').replace('Recorded statement.', 'Changed statement.'))
      expect(() => buildContentProjections({ root, quiet: true, check: true })).toThrow('Content projection drift: data')
      expect(readFileSync(projection)).toEqual(before)
      buildContentProjections({ root, quiet: true })
      expect(JSON.parse(readFileSync(projection, 'utf8'))[0].statement).toBe('Changed statement.')
      writeFileSync(projection, '[]\n')
      expect(() => buildContentProjections({ root, quiet: true, check: true })).toThrow('Content projection drift')
    } finally {
      rmSync(root, { recursive: true, force: true })
    }
  })

  it('exports new authored fields and does not reread unrelated canonical nodes after a local edit', () => {
    const root = mkdtempSync(join(tmpdir(), 'evo-incremental-export-'))
    try {
      mkdirSync(join(root, '.git'))
      const paths = ['content/taxa/a', 'content/taxa/b']
      for (const path of paths) writeNodeContent(path, {scientificName: path}, {profile: {text: 'Account.', addedField: 'Current authoring'}}, root)
      writeUtf8(join(root, 'data/references.json'), '[]\n')
      writeYaml(join(root, 'content/projection-map.yaml'), {schemaVersion: 2, canonicalLinks: 'tree-paths', generatedInputs: Object.fromEntries(paths.map((path, index) => [`data/${index}.json`, {encoding: 'json', template: {contentRecord: {path, key: 'profile'}}}])), dossierShardIndex: {path: 'data/shards.json', metadata: {shards: []}}, navigationAliases: [], profileAliases: [], topicAliases: [], recordAliases: []})
      buildContentProjections({root, quiet: true})
      expect(JSON.parse(readFileSync(join(root, 'data/0.json'), 'utf8')).addedField).toBe('Current authoring')
      const a = readNodeContent(paths[0], root)
      a.records.profile.text = 'Revised account.'
      writeNodeContent(paths[0], a.index, a.records, root)
      const unchanged = readFileSync(join(root, 'data/1.json'))
      expect(buildContentProjections({root, quiet: true}).rebuiltProjections).toBe(1)
      expect(JSON.parse(readFileSync(join(root, 'data/0.json'), 'utf8')).text).toBe('Revised account.')
      expect(JSON.parse(readFileSync(join(root, 'data/1.json'), 'utf8')).text).toBe('Account.')
      expect(readFileSync(join(root, 'data/1.json'))).toEqual(unchanged)
      writeUtf8(join(root, 'data/references.json'), '[{"id":"source","title":"Updated source"}]\n')
      expect(buildContentProjections({root, quiet: true}).rebuiltProjections).toBe(2)
    } finally { rmSync(root, {recursive: true, force: true}) }
  })
})
