import { createHash } from 'node:crypto'
import { readFileSync } from 'node:fs'
import { dirname, join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { gunzipSync } from 'node:zlib'
import { describe, expect, it } from 'vitest'
import { deterministicGzip } from './archive-determinism.mjs'
import { colExactMatchName, normalizeScientificName } from './itis-mammal-sidecar-lib.mjs'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const descriptorPath = join(root, 'data/catalogue-of-life/releases/2026-08-20/resource-packs/protists-chromists/itis-apicomplexa-sidecar.json')
const ledgerPath = join(root, 'data/sources/itis-apicomplexa-sidecar-import-ledger.json')
const sha256 = (bytes) => createHash('sha256').update(bytes).digest('hex')
function rows(file) { const bytes = readFileSync(join(root, file.path)); expect(bytes.length).toBe(file.bytes); expect(sha256(bytes)).toBe(file.sha256); const source = gunzipSync(bytes); expect(source.length).toBe(file.sourceBytes); expect(sha256(source)).toBe(file.sourceSha256); expect(Buffer.from(deterministicGzip(source, { level: 9 }))).toEqual(bytes); const text = source.toString('utf8').trimEnd(); return text ? text.split('\n').map(JSON.parse) : [] }

describe('ITIS Apicomplexa exact sidecar', () => {
  const descriptorBytes = readFileSync(descriptorPath); const descriptor = JSON.parse(descriptorBytes); const ledger = JSON.parse(readFileSync(ledgerPath, 'utf8')); const crosswalk = descriptor.colUsageIdLocator.files.flatMap(rows); const upstream = descriptor.upstreamOnly.files.flatMap(rows)
  it('covers the exact COL Cryptosporidium representation once', () => { expect(descriptor.packageId).toBe('protists-chromists'); expect(descriptor.scope).toMatchObject({ colRootUsageId: '87FBN', colStrictAcceptedSpecies: 21 }); expect(crosswalk).toHaveLength(21); expect(new Set(crosswalk.map((row) => row.colUsageId)).size).toBe(21); expect(descriptor.colUsageIdLocator.files.every((file) => file.sourceBytes <= descriptor.colUsageIdLocator.sourceShardLimitBytes)).toBe(true) })
  it('records the valid ITIS root without claiming Miozoa or Protozoa coverage', () => { expect(descriptor.rootBoundaryAudit.selectedItisRoot).toMatchObject({ tsn: '553099', scientificName: 'Apicomplexa', rank: 'Phylum', usage: 'valid' }); expect(descriptor.rootBoundaryAudit.broaderItisRoot).toMatchObject({ tsn: '630577', scientificName: 'Protozoa', rank: 'Kingdom' }); expect(descriptor.rootBoundaryAudit.colRepresentation).toMatchObject({ rootUsageId: '87FBN', parentUsageId: '57', parentScientificName: 'Miozoa' }) })
  it('retains only exact evidence and deterministic native rows', () => { expect(descriptor.counts).toMatchObject({ total: 21, accepted: 21, synonymCurrentNameRedirect: 0, ambiguous: 0, unmatched: 0, itisCurrentSpecies: 21, itisUpstreamOnly: 0 }); expect(crosswalk.every((row) => row.exactMatchName === colExactMatchName({ scientificName: row.colScientificName, authorship: row.colAuthorship }) && normalizeScientificName(row.currentName.scientificName) === row.exactMatchName)).toBe(true); expect(upstream).toEqual([]); expect(ledger.output.descriptor.sha256).toBe(sha256(descriptorBytes)); expect(ledger.deliveryContract.androidIosFull).toContain('every listed row-level shard') })
})
