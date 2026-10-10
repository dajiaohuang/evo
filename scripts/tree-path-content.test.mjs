import { mkdtempSync, readFileSync, rmSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join } from 'node:path'
import { describe, expect, it } from 'vitest'
import { readNodeContent, writeNodeContent } from './tree-path-content.mjs'

describe('reader content round trip', () => {
  it('keeps section topics and source identifiers in structural metadata', () => {
    const root = mkdtempSync(join(tmpdir(), 'evo-content-test-'))
    try {
      const records = { 'catalogue-profile': { sections: [{ topic: 'morphology', sourceIds: ['recorded-source'], text: { en: 'Recorded description.', zh: '已记录的描述。' } }] } }
      writeNodeContent('content/taxa/example', { scientificName: 'Example' }, records, root)
      expect(readNodeContent('content/taxa/example', root).records).toEqual(records)
      const metadata = readFileSync(join(root, 'content/taxa/example/evidence.md'), 'utf8')
      expect(metadata).toContain('topic: morphology')
      expect(metadata).toContain('- recorded-source')
      const page = readFileSync(join(root, 'content/taxa/example/page.en.md'), 'utf8')
      expect(page).not.toContain('/topic -->')
      expect(page).not.toContain('/sourceIds/0 -->')
    } finally {
      rmSync(root, { recursive: true, force: true })
    }
  })
})
