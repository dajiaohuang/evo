import { readFileSync } from 'node:fs'
import { createHash } from 'node:crypto'
import { brotliDecompressSync } from 'node:zlib'
import { expect, it } from 'vitest'

it('preserves the complete pre-compression SANBI source byte stream', () => {
  const bytes = readFileSync('data/sources/sanbi-descriptions.jsonl.br')
  const decoded = brotliDecompressSync(bytes)
  expect(decoded.length).toBe(46438841)
  expect(createHash('sha256').update(decoded).digest('hex')).toBe('8f7146b680b51676fe2cbd899212c0b1feabe99b47580b6f3f3f2daa1238fd7b')
  const rows = decoded.toString('utf8').trim().split('\n').map((line) => JSON.parse(line))
  expect(rows).toHaveLength(15211)
  expect(rows.reduce((sum, row) => sum + row.descriptions.length, 0)).toBe(65139)
})
