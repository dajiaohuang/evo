import { mkdtempSync, readFileSync, rmSync, writeFileSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join } from 'node:path'
import { describe, expect, it } from 'vitest'
import { buildContentProjections } from './build-content-projections.mjs'
import { writeNodeContent, writeUtf8, writeYaml } from './tree-path-content.mjs'

describe('content drift check', () => {
  it('rejects a changed canonical record without overwriting its projection', () => {
    const root = mkdtempSync(join(tmpdir(), 'evo-projection-check-'))
    try {
      const path = 'content/taxa/example'
      writeNodeContent(path, { scientificName: 'Example' }, { claims: [{ statement: 'Recorded statement.' }] }, root)
      writeUtf8(join(root, 'data/references.json'), '[]\n')
      writeUtf8(join(root, 'data/registry/content-build-summary.json'), '{}\n')
      writeYaml(join(root, 'content/projection-map.yaml'), {
        schemaVersion: 1,
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
    } finally {
      rmSync(root, { recursive: true, force: true })
    }
  })
})
