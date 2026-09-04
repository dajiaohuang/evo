import { test } from 'vitest'
import assert from 'node:assert/strict'
import { createHash } from 'node:crypto'
import { execFileSync } from 'node:child_process'
import { mkdtempSync, readFileSync, rmSync } from 'node:fs'
import { resolve, join } from 'node:path'
import { gunzipSync } from 'node:zlib'

const base = 'data/catalogue-of-life/releases/2026-08-20/resource-packs/protists-chromists/'
const ledgerPath = 'data/sources/trichomycetes-archive-import-ledger.json'
const outputs = [`${base}trichomycetes-sidecar.json`, `${base}trichomycetes-000.json.gz`, ledgerPath]
const sha = (bytes) => createHash('sha256').update(bytes).digest('hex')
const readJson = (path) => JSON.parse(readFileSync(path, 'utf8'))

test('source1033 projection retains the exact 96-row Ichthyosporea boundary and bibliography', () => {
  const descriptor = readJson(outputs[0])
  assert.equal(descriptor.id, 'trichomycetes-archive-crosswalk')
  assert.equal(descriptor.scope.sourceClass, 'Ichthyosporea')
  assert.deepEqual(descriptor.counts, { total: 96, accepted: 96, redirect: 0, ambiguous: 0, unmatched: 0, withheld: 0, upstreamOnly: 0, records: 96 })
  const bytes = readFileSync(outputs[1])
  const rows = JSON.parse(gunzipSync(bytes))
  assert.equal(rows.length, 96)
  assert.equal(new Set(rows.map((row) => row.colId)).size, 96)
  assert.equal(new Set(rows.map((row) => row.sourceAcceptedTaxonId)).size, 96)
  assert.ok(rows.every((row) => row.status === 'accepted' && row.sourceClassification.Class === 'Ichthyosporea'))
  assert.ok(rows.every((row) => row.nameReferences.length === 1))
  assert.equal(rows.filter((row) => row.nameReferences[0].reference.Title === '').length, 66)
  for (const row of rows) {
    assert.deepEqual(row.matchedName, row.acceptedName)
    assert.equal(row.matchedName.status, 'accepted name')
    assert.equal(row.nameReferences[0].referenceType, 'NomRef')
    assert.equal(row.nameReferences[0].referenceId, row.nameReferences[0].reference.ReferenceID)
    assert.deepEqual(row.nameReferences[0].sourceRows.map((locator) => locator.member), ['NameReferences.tsv', 'References.tsv'])
    assert.ok(row.nameReferences[0].sourceRows.every((locator) => locator.row >= 2))
  }
  assert.deepEqual([...descriptor.scope.excludedOtherProtozoaIds].sort(), ['254534', '255335'])
  const ledger = readJson(ledgerPath)
  assert.equal(ledger.scopeAudit.archiveAcceptedSpeciesRows, 385)
  assert.equal(ledger.scopeAudit.archiveProtozoaRows, 98)
  assert.equal(ledger.scopeAudit.excludedFungiRows, 287)
  assert.equal(ledger.scopeAudit.archiveIchthyosporeaRows, 96)
  assert.equal(ledger.output.sha256, sha(bytes))
  assert.equal(ledger.descriptor.sha256, sha(readFileSync(outputs[0])))
  assert.equal(descriptor.files[0].sha256, sha(bytes))
  for (const input of ledger.inputs) assert.equal(sha(readFileSync(input.path)), input.sha256)
})

test('offline importer reproduces every committed output twice from the actual pinned archive', () => {
  // Use a dedicated repository-local temporary directory, never the shared source cache.
  const temporary = mkdtempSync(resolve('.tmp-trichomycetes-replay-'))
  try {
    for (let run = 0; run < 2; run += 1) {
      execFileSync('python', ['scripts/build-trichomycetes-sidecar.py', '--output-root', temporary], { encoding: 'utf8' })
      for (const path of outputs) assert.deepEqual(readFileSync(join(temporary, path)), readFileSync(path), path)
    }
  } finally {
    assert.ok(temporary.startsWith(resolve('.tmp-trichomycetes-replay-')))
    rmSync(temporary, { recursive: true })
  }
}, 30_000)
