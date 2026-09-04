import { test } from 'vitest'
import assert from 'node:assert/strict'
import { createHash } from 'node:crypto'
import { execFileSync } from 'node:child_process'
import { mkdtempSync, readFileSync, rmSync } from 'node:fs'
import { resolve, join } from 'node:path'
import { gunzipSync } from 'node:zlib'

const base = 'data/catalogue-of-life/releases/2026-08-20/resource-packs/protists-chromists/'
const archivePath = 'data/sources/archives/checklistbank-1053-eumycetozoa-2024-05.zip'
const ledgerPath = 'data/sources/eumycetozoa-archive-import-ledger.json'
const outputs = [`${base}eumycetozoa-sidecar.json`, `${base}eumycetozoa-000.json.gz`, ledgerPath]
const sha = (bytes) => createHash('sha256').update(bytes).digest('hex')
const readJson = (path) => JSON.parse(readFileSync(path, 'utf8'))

test('source1053 retains 1330 exact matches and seven unresolved COL names without inventing source IDs', () => {
  const descriptor = readJson(outputs[0])
  const bytes = readFileSync(outputs[1])
  const rows = JSON.parse(gunzipSync(bytes))
  const matched = rows.filter((row) => row.status === 'accepted')
  const unmatched = rows.filter((row) => row.status === 'unmatched')
  assert.deepEqual(descriptor.counts, { total: 1337, accepted: 1330, redirect: 0, ambiguous: 0, unmatched: 7, withheld: 0, upstreamOnly: 0, records: 1337 })
  assert.equal(rows.length, 1337)
  assert.equal(new Set(rows.map((row) => row.colId)).size, 1337)
  assert.equal(matched.length, 1330)
  assert.equal(new Set(matched.map((row) => row.sourceAcceptedTaxonId)).size, 1330)
  assert.ok(matched.every((row) => row.sourceAcceptedTaxonId && row.nameReferences.length === 1))
  assert.deepEqual(unmatched.map((row) => row.colId), ['39SDP', '4ZT26', '6PVT4', '992NH', 'CDHD7', 'CDHRG', 'CQ9TK'])
  for (const row of unmatched) {
    assert.equal(row.sourceAcceptedTaxonId, null)
    assert.equal(row.matchedName, null)
    assert.equal(row.acceptedName, null)
    assert.deepEqual(row.candidates, [])
    assert.deepEqual(row.nameReferences, [])
  }
  assert.equal(rows.find((row) => row.colId === 'CQ9TK').colAuthorship, null)
  const ledger = readJson(ledgerPath)
  assert.equal(ledger.scopeAudit.archiveAcceptedSpeciesRows, 1345)
  assert.equal(ledger.scopeAudit.matchedUniqueSourceAcceptedTaxonIds, 1330)
  assert.equal(ledger.scopeAudit.sourceReferenceLinks, 3926)
  assert.equal(ledger.scopeAudit.sourceReferences, 2932)
  assert.equal(ledger.scopeAudit.excludedUnlinkedAcceptedSourceIds.length, 15)
  assert.equal(descriptor.source.archiveEncoding, 'zip')
  assert.equal(descriptor.source.license, 'CC-BY-4.0')
  assert.equal(sha(readFileSync(archivePath)), descriptor.source.archiveSha256)
  assert.equal(ledger.output.sha256, sha(bytes))
  assert.equal(ledger.descriptor.sha256, sha(readFileSync(outputs[0])))
  assert.equal(descriptor.files[0].sha256, sha(bytes))
  assert.equal(descriptor.files[0].sourceSha256, sha(gunzipSync(bytes)))
  for (const input of ledger.inputs) assert.equal(sha(readFileSync(input.path)), input.sha256)
})

test('every matched name, status and reference locator reproduces the original ZIP tables', () => {
  // Independent raw-table read: do not import the projection builder being tested.
  const source = JSON.parse(execFileSync('python', ['-c', [
    'import csv, io, json, sys, zipfile',
    'with zipfile.ZipFile(sys.argv[1]) as archive:',
    ' print(json.dumps({name:list(csv.DictReader(io.StringIO(archive.read(name).decode("utf-8-sig")), delimiter="\\t")) for name in ["AcceptedSpecies.tsv", "NameReferencesLinks.tsv", "References.tsv"]}))',
  ].join('\n'), archivePath], { encoding: 'utf8', maxBuffer: 16 * 1024 * 1024 }))
  const linksById = new Map()
  source['NameReferencesLinks.tsv'].forEach((link, index) => {
    const links = linksById.get(link.ID) ?? []
    links.push({ ...link, row: index + 2 })
    linksById.set(link.ID, links)
  })
  const rows = JSON.parse(gunzipSync(readFileSync(outputs[1])))
  for (const row of rows.filter((item) => item.status === 'accepted')) {
    const locator = row.sourceRows[0]
    assert.equal(locator.member, 'AcceptedSpecies.tsv')
    const original = source[locator.member][locator.row - 2]
    assert.equal(row.sourceAcceptedTaxonId, original.AcceptedTaxonID)
    assert.deepEqual(row.matchedName, row.acceptedName)
    assert.equal(row.matchedName.scientificName, `${original.Genus} ${original.SpeciesEpithet}`.trim().replace(/\s+/g, ' '))
    assert.equal(row.matchedName.authorship, original.AuthorString)
    assert.equal(row.matchedName.status, original.Sp2000NameStatus)
    assert.equal(row.matchedName.status, 'Accepted name')
    assert.equal(row.matchedName.url, original.SpeciesURL)
    for (const [key, value] of Object.entries(row.sourceClassification)) assert.equal(value, original[key])
    const originalLinks = linksById.get(original.AcceptedTaxonID) ?? []
    assert.equal(row.nameReferences.length, originalLinks.length)
    row.nameReferences.forEach((reference, index) => {
      const originalLink = originalLinks[index]
      assert.equal(reference.referenceId, originalLink.ReferenceID)
      assert.equal(reference.referenceType, originalLink.ReferenceType)
      assert.deepEqual(reference.sourceRows[0], { member: 'NameReferencesLinks.tsv', row: originalLink.row })
      const referenceLocator = reference.sourceRows[1]
      assert.equal(referenceLocator.member, 'References.tsv')
      assert.deepEqual(reference.reference, source[referenceLocator.member][referenceLocator.row - 2])
      assert.equal(reference.reference.ReferenceID, reference.referenceId)
    })
  }
})

test('offline importer reproduces every committed output twice from the actual pinned ZIP', () => {
  const temporary = mkdtempSync(resolve('.tmp-eumycetozoa-replay-'))
  try {
    for (let run = 0; run < 2; run += 1) {
      execFileSync('python', ['scripts/build-eumycetozoa-sidecar.py', '--output-root', temporary], { encoding: 'utf8' })
      for (const path of outputs) assert.deepEqual(readFileSync(join(temporary, path)), readFileSync(path), path)
    }
  } finally {
    assert.ok(temporary.startsWith(resolve('.tmp-eumycetozoa-replay-')))
    rmSync(temporary, { recursive: true })
  }
}, 30_000)
