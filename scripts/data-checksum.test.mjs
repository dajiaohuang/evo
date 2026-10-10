import { describe, it, expect } from 'vitest'
import { readFileSync } from 'node:fs'
import { createHash } from 'node:crypto'
import { gunzipSync } from 'node:zlib'
import { sha256 } from './data-lib.mjs'

describe('release checksum contract', () => {
  it('hashes the actual compressed archive bytes used by incremental validation', () => {
    const path = 'data/packages/archosauria/crocodylomorphs-birds/nomenclature/avilist-col-000.json.gz'
    const bytes = readFileSync(path)
    const raw = createHash('sha256').update(bytes).digest('hex')
    const decoded = createHash('sha256').update(gunzipSync(bytes)).digest('hex')
    expect(sha256(path)).toBe(raw)
    expect(sha256(path)).not.toBe(decoded)
  })
})
