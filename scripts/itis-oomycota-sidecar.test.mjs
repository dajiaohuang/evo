import { createHash } from 'node:crypto'
import { readFileSync } from 'node:fs'
import { dirname, join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { gunzipSync } from 'node:zlib'
import { describe, expect, it } from 'vitest'
import { deterministicGzip } from './archive-determinism.mjs'
import { colExactMatchName, normalizeScientificName } from './itis-oomycota-sidecar-lib.mjs'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const packageRoot = join(root, 'data/catalogue-of-life/releases/2026-08-20/resource-packs/protists-chromists')
const descriptorPath = join(packageRoot, 'itis-oomycota-sidecar.json')
const ledgerPath = join(root, 'data/sources/itis-oomycota-sidecar-import-ledger.json')
const sha256 = (bytes) => createHash('sha256').update(bytes).digest('hex')
const compareCodeUnits = (left, right) => (left < right ? -1 : left > right ? 1 : 0)

function readShard(file, deterministic = false) {
  const bytes = readFileSync(join(root, file.path))
  expect(bytes.length).toBe(file.bytes)
  expect(sha256(bytes)).toBe(file.sha256)
  const source = gunzipSync(bytes)
  expect(source.length).toBe(file.sourceBytes)
  expect(sha256(source)).toBe(file.sourceSha256)
  if (deterministic) expect(Buffer.from(deterministicGzip(source, { level: 9 }))).toEqual(bytes)
  return source.toString('utf8').trimEnd().split('\n').filter(Boolean).map((line) => JSON.parse(line))
}

function locate(files, colUsageId) {
  let low = 0
  let high = files.length - 1
  while (low <= high) {
    const middle = Math.floor((low + high) / 2)
    const candidate = files[middle]
    if (compareCodeUnits(colUsageId, candidate.firstColUsageId) < 0) high = middle - 1
    else if (compareCodeUnits(colUsageId, candidate.lastColUsageId) > 0) low = middle + 1
    else return candidate
  }
  return null
}

describe('ITIS Oomycota shared-order authority sidecar', () => {
  const descriptorBytes = readFileSync(descriptorPath)
  const descriptor = JSON.parse(descriptorBytes)
  const ledger = JSON.parse(readFileSync(ledgerPath, 'utf8'))
  const files = descriptor.colUsageIdLocator.files
  const rowsByFile = files.map((file) => readShard(file, true))
  const rows = rowsByFile.flat()
  const upstream = descriptor.upstreamOnly.files.flatMap((file) => readShard(file, true))

  it('records the absent ITIS Oomycota root and limits coverage to exact shared order roots', () => {
    expect(descriptor.packageId).toBe('protists-chromists')
    expect(descriptor.scope.requestedColRoot).toMatchObject({ usageId: '5K', scientificName: 'Oomycota', rank: 'phylum', strictAcceptedSpecies: 1673 })
    expect(descriptor.rootBoundaryAudit.itisExactOomycotaAcceptedPhylumRoots).toEqual([])
    expect(descriptor.scope.selectedSharedOrderRoots).toEqual([
      expect.objectContaining({ col: expect.objectContaining({ usageId: '3SH', scientificName: 'Peronosporales' }), itis: expect.objectContaining({ tsn: '13911', scientificName: 'Peronosporales' }), colStrictAcceptedSpecies: 1179 }),
      expect.objectContaining({ col: expect.objectContaining({ usageId: '3ZZ', scientificName: 'Saprolegniales' }), itis: expect.objectContaining({ tsn: '13837', scientificName: 'Saprolegniales' }), colStrictAcceptedSpecies: 247 }),
    ])
    expect(descriptor.scope.colStrictAcceptedSpecies).toBe(1426)
    expect(descriptor.scope.requestedColRoot.strictAcceptedSpecies - descriptor.scope.colStrictAcceptedSpecies).toBe(247)
    expect(descriptor.scope.boundary).toContain('historical Fungi/Myxomycota/Phycomycota')
    expect(descriptor.rootBoundaryAudit.decision).toContain('Do not infer')
  })

  it('covers the narrowed COL scope once in deterministic, non-overlapping ranges', () => {
    expect(descriptorBytes.length).toBeLessThan(64 * 1024)
    expect(rows).toHaveLength(descriptor.counts.total)
    expect(rows).toHaveLength(1426)
    expect(new Set(rows.map((row) => row.colUsageId)).size).toBe(rows.length)
    expect(files.every((file) => file.sourceBytes <= descriptor.colUsageIdLocator.sourceShardLimitBytes)).toBe(true)
    for (const [index, file] of files.entries()) {
      const shardRows = rowsByFile[index]
      expect(shardRows).toHaveLength(file.records)
      expect(shardRows[0].colUsageId).toBe(file.firstColUsageId)
      expect(shardRows.at(-1).colUsageId).toBe(file.lastColUsageId)
      expect(shardRows.every((row, rowIndex) => rowIndex === 0 || compareCodeUnits(shardRows[rowIndex - 1].colUsageId, row.colUsageId) < 0)).toBe(true)
      if (index) expect(compareCodeUnits(files[index - 1].lastColUsageId, file.firstColUsageId)).toBe(-1)
    }
    for (const row of rows) expect(locate(files, row.colUsageId)).not.toBeNull()
  })

  it('retains only exact ITIS evidence and includes all non-empty rows for native delivery', () => {
    expect(descriptor.exactMatching.prohibited).toContain('No fuzzy')
    expect(rows.every((row) => row.exactMatchName === colExactMatchName({ scientificName: row.colScientificName, authorship: row.colAuthorship }))).toBe(true)
    expect(rows.filter((row) => row.status === 'accepted')).toHaveLength(46)
    expect(rows.filter((row) => row.status === 'synonym-current-name-redirect')).toHaveLength(0)
    expect(rows.filter((row) => row.status === 'ambiguous')).toHaveLength(0)
    expect(rows.filter((row) => row.status === 'unmatched')).toHaveLength(1380)
    expect(rows.filter((row) => row.status === 'accepted').every((row) => normalizeScientificName(row.currentName.scientificName) === row.exactMatchName)).toBe(true)
    expect(rows.filter((row) => row.status === 'unmatched').every((row) => !('currentName' in row))).toBe(true)
    expect(upstream).toHaveLength(38)
    expect(upstream.every((row) => row.colUsageId === null && row.currentName.usage === 'accepted')).toBe(true)
    const referencedTsns = new Set(rows.filter((row) => row.currentName).map((row) => row.currentName.tsn))
    expect(upstream.every((row) => !referencedTsns.has(row.currentName.tsn))).toBe(true)
    expect(upstream.length + referencedTsns.size).toBe(descriptor.counts.itisCurrentSpecies)
    expect(descriptor.deliveryProfiles.web).toContain('no row-level shard')
    expect(descriptor.deliveryProfiles.android).toContain('every non-empty listed')
    expect(descriptor.deliveryProfiles.ios).toContain('every non-empty listed')
    expect(ledger.deliveryContract.pagesLight).toContain('descriptor')
    expect(ledger.deliveryContract.androidIosFull).toContain('every non-empty listed row-level shard')
  })

  it('pins the generated descriptor and all output hashes in the import ledger', () => {
    expect(ledger.output.descriptor).toEqual({ path: 'data/catalogue-of-life/releases/2026-08-20/resource-packs/protists-chromists/itis-oomycota-sidecar.json', bytes: descriptorBytes.length, sha256: sha256(descriptorBytes) })
    expect(ledger.output.colUsageIdShards).toEqual(files)
    expect(ledger.output.upstreamOnly).toEqual(descriptor.upstreamOnly.files[0])
    expect(ledger.totals).toEqual(descriptor.counts)
    expect(ledger.generatedBy.deterministic).toContain('wider-root inference')
  })
})
