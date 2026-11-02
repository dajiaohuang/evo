import { test } from 'node:test'
import assert from 'node:assert/strict'
import { mkdtempSync, rmSync, writeFileSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join } from 'node:path'
import { spawnSync } from 'node:child_process'

test('rejects export manifests that do not explicitly require links-only content', () => {
  const dir = mkdtempSync(join(tmpdir(), 'evo-links-only-test-'))
  try {
    writeFileSync(join(dir, 'manifest.json'), JSON.stringify({ schemaVersion: 1, releaseAlias: 'COL26.8' }))
    const result = spawnSync('rtk', ['proxy', 'node', 'scripts/verify-wikipedia-col-export.mjs', dir], { encoding: 'utf8' })
    assert.equal(result.status, 1)
    assert.match(result.stderr, /Wikipedia exports must contain links only/)
  } finally {
    rmSync(dir, { recursive: true, force: true })
  }
})
