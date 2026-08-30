import { createHash } from 'node:crypto'
import { gunzipSync } from 'node:zlib'
import { strToU8, unzipSync } from 'fflate'
import { describe, expect, it } from 'vitest'
import { deterministicGzip, deterministicZip, normalizeGzipHeader } from './archive-determinism.mjs'

const sha256 = (bytes) => createHash('sha256').update(bytes).digest('hex')

describe('runtime archive determinism', () => {
  it('normalizes gzip metadata without changing the payload', () => {
    const source = Buffer.from('{"dataset":"fixture"}\n', 'utf8')
    const first = deterministicGzip(source, { level: 9 })
    const second = deterministicGzip(source, { level: 9 })

    expect(first).toEqual(second)
    expect(first[9]).toBe(255)
    expect(gunzipSync(first)).toEqual(source)
    expect(sha256(first)).toBe('1171fcbf51b8bcfc683dcb1f2380a433c6929bf1981e9b50273f305492ecaa7f')
  })

  it('normalizes a generated gzip copy without mutating the input', () => {
    const source = deterministicGzip(Buffer.from('generated source\n'))
    source[9] = 10
    const normalized = normalizeGzipHeader(source)

    expect(normalized[9]).toBe(255)
    expect(source[9]).toBe(10)
    expect(normalized.subarray(0, 9)).toEqual(source.subarray(0, 9))
    expect(normalized.subarray(10)).toEqual(source.subarray(10))
  })

  it('fixes ZIP platform and timestamp metadata', () => {
    const entries = {
      'manifest.json': strToU8('{"version":"fixture"}\n'),
      'payload/data.txt': strToU8('deterministic payload\n'),
    }
    const first = deterministicZip(entries, { level: 0 })
    const second = deterministicZip(entries, { level: 0 })

    expect(first).toEqual(second)
    expect(Buffer.from(unzipSync(first)['payload/data.txt'])).toEqual(Buffer.from(entries['payload/data.txt']))
    expect(sha256(first)).toBe('a4cc63e5b7c9b6417d86a9116f10910d084b9b6690f1a337b6a5ac623dc6198d')
  })
})
