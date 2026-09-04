import { createHash } from 'node:crypto'
import { execFileSync } from 'node:child_process'
import { mkdtempSync, readFileSync, rmSync } from 'node:fs'
import { join, resolve } from 'node:path'
import { gunzipSync } from 'node:zlib'
import { describe, expect, it } from 'vitest'

const root = resolve('.')
const descriptorPath = 'data/catalogue-of-life/releases/2026-08-20/resource-packs/protists-chromists/gymnodinium-sidecar.json'
const crosswalkPath = 'data/catalogue-of-life/releases/2026-08-20/resource-packs/protists-chromists/gymnodinium-sidecar-000.json.gz'
const upstreamPath = 'data/catalogue-of-life/releases/2026-08-20/resource-packs/protists-chromists/gymnodinium-sidecar-upstream-only-000.json.gz'
const ledgerPath = 'data/sources/gymnodinium-archive-import-ledger.json'
const sha256 = (bytes) => createHash('sha256').update(bytes).digest('hex')
const readJsonl = (path) => gunzipSync(readFileSync(join(root, path))).toString('utf8').trimEnd().split('\n').map((line) => JSON.parse(line))

describe('ChecklistBank 1177 Gymnodinium sidecar', () => {
  it('preserves the exact source boundary and leaves the spelling difference unmatched', () => {
    const descriptor = JSON.parse(readFileSync(join(root, descriptorPath), 'utf8'))
    const rows = readJsonl(crosswalkPath)
    const upstream = readJsonl(upstreamPath)
    expect(descriptor.id).toBe('gymnodinium-archive-crosswalk')
    expect(descriptor.scope).toMatchObject({ colRootUsageId: '4RTJ', colStrictAcceptedSpecies: 259, sourceGenus: 'Gymnodinium' })
    expect(descriptor.counts).toEqual({ total: 259, accepted: 258, redirect: 0, ambiguous: 0, unmatched: 1, withheld: 0, upstreamOnly: 1, records: 260 })
    expect(descriptor.rowEncoding).toBe('jsonl')
    expect(descriptor.files[0].path).toBe('protists-chromists/gymnodinium-sidecar-000.json.gz')
    expect(descriptor.upstreamOnlyFiles[0].path).toBe('protists-chromists/gymnodinium-sidecar-upstream-only-000.json.gz')
    expect(descriptor.totalCompressedBytes).toBe(descriptor.files[0].bytes + descriptor.upstreamOnlyFiles[0].bytes)
    expect(descriptor.totalSourceBytes).toBe(descriptor.files[0].sourceBytes + descriptor.upstreamOnlyFiles[0].sourceBytes)
    const ledger = JSON.parse(readFileSync(join(root, ledgerPath), 'utf8'))
    expect(ledger.inputs).toHaveLength(4)
    expect(ledger.inputs.slice(1, 3).map((input) => input.path)).toEqual([
      'data/catalogue-of-life/releases/2026-08-20/resource-packs/protists-chromists/species-000.jsonl.gz',
      'data/catalogue-of-life/releases/2026-08-20/resource-packs/protists-chromists/species-001.jsonl.gz',
    ])
    expect(ledger.inputs[3].path).toMatch(/^data\/catalogue-of-life\/releases\/2026-08-20\/registry\/hierarchy\/nodes\/.+\.jsonl\.gz$/)
    expect(rows).toHaveLength(259)
    expect(rows.filter((row) => row.status === 'accepted')).toHaveLength(258)
    expect(rows.filter((row) => row.status === 'unmatched')).toMatchObject([{ colId: 'CN83B', colScientificName: 'Gymnodinium p-dorhnii' }])
    expect(upstream).toMatchObject([{ sourceAcceptedTaxonId: 'T284', status: 'upstream-only', matchedName: { id: 'T284', scientificName: 'Gymnodinium p.dorhni' }, acceptedName: null, candidates: [], sourceAcceptedRecord: { SpeciesEpithet: 'p.dorhni' } }])
    expect(descriptor.upstreamOnlyFiles[0].role).toBe('upstream-only')
    for (const file of [...descriptor.files, ...descriptor.upstreamOnlyFiles]) expect(file.mediaType).toBe('application/x-ndjson')
    expect(new Set(rows.flatMap((row) => row.nameReferences ?? []).filter((reference) => reference.referenceMissing).map((reference) => reference.referenceId))).toHaveLength(18)
    expect(descriptor.source).toMatchObject({ archiveBytes: 19661, archiveSha256: '7bfcccdfd515b7e5024718bb8c407e5521f727b166fe5a191006658715dbd8d7', version: '0.1' })
    expect(descriptor.source.members['NameReferences.tsv']).toBeDefined()
    expect(descriptor.source.members['References.tsv']).toBeDefined()
    expect(rows.filter((row) => row.status === 'accepted').every((row) => row.sourceAcceptedRecord && row.sourceRows[0].member === 'AcceptedSpecies.tsv')).toBe(true)
  })

  it('rebuilds every output byte-for-byte twice from the pinned archive', () => {
    const descriptor = JSON.parse(readFileSync(join(root, descriptorPath), 'utf8'))
    const temporary = mkdtempSync(resolve('.tmp-gymnodinium-replay-'))
    const outputs = [descriptorPath, crosswalkPath, upstreamPath, ledgerPath]
    try {
      for (let run = 0; run < 2; run += 1) {
        execFileSync('python', ['scripts/build-gymnodinium-sidecar.py', '--output-root', temporary], { cwd: root, encoding: 'utf8' })
        for (const path of outputs) expect(readFileSync(join(temporary, path))).toEqual(readFileSync(join(root, path)))
      }
      expect(sha256(readFileSync(join(temporary, crosswalkPath)))).toBe(descriptor.files[0].sha256)
    } finally {
      expect(temporary.startsWith(resolve('.tmp-gymnodinium-replay-'))).toBe(true)
      rmSync(temporary, { recursive: true, force: true })
    }
  }, 60_000)
})
