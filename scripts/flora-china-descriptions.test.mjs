import { test } from 'vitest'
import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import { createHash } from 'node:crypto'
import { brotliDecompressSync } from 'node:zlib'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { execFileSync } from 'node:child_process'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const hash = bytes => createHash('sha256').update(bytes).digest('hex')

test('Flora of China converter preserves markup semantics and fails closed', () => {
  execFileSync('python', ['-B', '-m', 'unittest', 'discover', '-s', 'scripts', '-p', 'test_prepare_flora_china.py'], {
    cwd: root,
    stdio: 'pipe',
    timeout: 30000,
  })
})

test('Flora of China source preserves pinned bytes and every record attribution', () => {
  const ledger = JSON.parse(readFileSync(resolve(root, 'data/sources/flora-china-descriptions-import-ledger.json')))
  const compressed = readFileSync(resolve(root, ledger.output))
  assert.equal(compressed.length, ledger.outputBytes)
  assert.equal(hash(compressed), ledger.outputSha256)
  const decoded = brotliDecompressSync(compressed)
  assert.equal(decoded.length, ledger.decodedBytes)
  assert.equal(hash(decoded), '2ecd4df59916b5b0073724f6b32ac04f5df9297e484d3975bacc34b55eda99a7')
  assert.equal(hash(decoded), ledger.decodedSha256)
  const records = decoded.toString('utf8').trimEnd().split('\n').map(line => JSON.parse(line))
  assert.equal(records.length, 20049)
  assert.equal(records.length, ledger.descriptions)
  assert.equal(new Set(records.map(record => record.colId)).size, ledger.species)
  for (const record of records) {
    for (const key of ['colId', 'wfoId', 'scientificName', 'text', 'sourceId', 'citation', 'rightsHolder', 'rights']) {
      assert.equal(typeof record[key], 'string', `${record.colId}: ${key}`)
      assert.ok(record[key].trim(), `${record.colId}: empty ${key}`)
    }
    assert.equal(record.type, 'general')
    assert.equal(record.language, 'en')
    assert.equal(record.sourceLanguage, 'English')
    assert.equal(record.citationScope, 'description-source')
    assert.match(record.license, /^https?:\/\/creativecommons\.org\/licenses\/by\/4\.0\/?$/)
    assert.ok(Number.isInteger(record.descriptionRecordNumber) && record.descriptionRecordNumber > 0)
    assert.ok(Number.isInteger(record.referenceRecordNumber) && record.referenceRecordNumber > 0)
    assert.doesNotMatch(record.text, /<\/?(?:script|style|div|p|span|sub|sup|i|b)\b[^>]*>/i)
  }
})
