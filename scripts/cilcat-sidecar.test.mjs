import { createHash } from 'node:crypto'
import { mkdtempSync, readFileSync, rmSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join, resolve } from 'node:path'
import { spawnSync } from 'node:child_process'
import { gunzipSync } from 'node:zlib'
import { describe, expect, test } from 'vitest'

const root = resolve(import.meta.dirname, '..')
const archivePath = join(root, 'data/sources/archives/checklistbank-1113-cilcat-2012-01-16.tar.gz')
const relative = 'data/catalogue-of-life/releases/2026-08-20/resource-packs/protists-chromists'
const sha256 = (bytes) => createHash('sha256').update(bytes).digest('hex')

describe('CilCat 1113 source projection', () => {
  test('reads the pinned archive and rebuilds deterministic outcomes', () => {
    const archive = readFileSync(archivePath)
    expect(archive.length).toBe(296399)
    expect(sha256(archive)).toBe('cd0e0bad24a8b790cb404575f05b80eb26a6f913e5b770c011bcb6316fff15ed')
    expect(archive.subarray(0, 2).toString('hex')).toBe('1f8b')

    const temporaryRoot = mkdtempSync(join(tmpdir(), 'evo-cilcat-'))
    try {
      const run = () => spawnSync('python', ['-B', 'scripts/build-cilcat-sidecar.py', '--output-root', temporaryRoot], { cwd: root, encoding: 'utf8' })
      expect(run().status).toBe(0)
      const files = [
        `${relative}/cilcat-000.json.gz`,
        `${relative}/cilcat-upstream-only-000.json.gz`,
        `${relative}/cilcat-sidecar.json`,
        'data/sources/cilcat-1113-archive-import-ledger.json',
      ]
      const first = files.map((file) => sha256(readFileSync(join(temporaryRoot, file))))
      expect(run().status).toBe(0)
      const second = files.map((file) => sha256(readFileSync(join(temporaryRoot, file))))
      expect(second).toEqual(first)

      const descriptor = JSON.parse(readFileSync(join(temporaryRoot, `${relative}/cilcat-sidecar.json`), 'utf8'))
      const rows = JSON.parse(gunzipSync(readFileSync(join(temporaryRoot, `${relative}/cilcat-000.json.gz`))))
      const upstream = JSON.parse(gunzipSync(readFileSync(join(temporaryRoot, `${relative}/cilcat-upstream-only-000.json.gz`))))
      expect(descriptor.counts).toMatchObject({ total: 8505, accepted: 8477, unmatched: 28, ambiguous: 0, upstreamOnly: 55, records: 8560 })
      expect(rows).toHaveLength(8505)
      expect(rows.filter((row) => row.status === 'accepted')).toHaveLength(8477)
      expect(rows.filter((row) => row.status === 'unmatched')).toHaveLength(28)
      expect(upstream).toHaveLength(55)
      const unresolvedCandidateIds = new Set(rows.filter((row) => row.status === 'unmatched').flatMap((row) => row.candidates.map((candidate) => candidate.id)))
      expect(upstream.filter((row) => unresolvedCandidateIds.has(row.sourceAcceptedTaxonId))).toHaveLength(28)
      expect(rows.filter((row) => row.status === 'accepted').every((row) => row.matchedName?.status === 'accepted name')).toBe(true)
      expect(rows.filter((row) => row.status === 'unmatched').every((row) => row.matchedName === null && row.candidates.length === 1)).toBe(true)
      expect(upstream.every((row) => row.colId === null && row.status === 'upstream-only')).toBe(true)
      expect(descriptor.scope.sourceProvisionalSpecies).toBe(81)
      expect(descriptor.scope.excludedSourceProvisional).toBe(81)
      expect(descriptor.source.members['NameReferences.tsv']).toMatchObject({ bytes: 167078 })
      expect(rows.concat(upstream).filter((row) => row.nameReferences.some((ref) => ref.referenceMissing))).toHaveLength(34)
    } finally {
      rmSync(temporaryRoot, { recursive: true, force: true })
    }
  }, 120000)
})
