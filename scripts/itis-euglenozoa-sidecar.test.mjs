import { createHash } from 'node:crypto'
import { readFileSync } from 'node:fs'
import { dirname, join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { gunzipSync } from 'node:zlib'
import { describe, expect, it } from 'vitest'
import { deterministicGzip } from './archive-determinism.mjs'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const descriptorPath = join(root, 'data/catalogue-of-life/releases/2026-08-20/resource-packs/protists-chromists/itis-euglenozoa-sidecar.json')
const ledgerPath = join(root, 'data/sources/itis-euglenozoa-sidecar-import-ledger.json')
const sha256 = (bytes) => createHash('sha256').update(bytes).digest('hex')

describe('ITIS Euglenozoa request-boundary sidecar', () => {
  const descriptorBytes = readFileSync(descriptorPath)
  const descriptor = JSON.parse(descriptorBytes)
  const ledger = JSON.parse(readFileSync(ledgerPath, 'utf8'))
  const file = descriptor.upstreamOnly.files[0]
  const bytes = readFileSync(join(root, file.path)); const source = gunzipSync(bytes)
  const rows = source.toString('utf8').trimEnd().split('\n').filter(Boolean).map((line) => JSON.parse(line))

  it('does not invent a COL Euglenozoa root or broaden the request to the whole pack', () => {
    expect(descriptor.scope.colPackageId).toBe('protists-chromists')
    expect(descriptor.scope.colPackageStrictAcceptedSpecies).toBe(61518)
    expect(descriptor.scope.colCandidateRoots).toEqual([])
    expect(descriptor.scope.colStrictAcceptedSpecies).toBe(0)
    expect(descriptor.scope.boundary).toContain('no exact Euglenozoa or Euglenophycota hierarchy root')
    expect(descriptor.colUsageIdLocator.files).toEqual([])
    expect(descriptor.exactMatching.prohibited).toContain('package-wide')
  })

  it('preserves the complete verified ITIS Euglenophycota partition for native builds', () => {
    expect(descriptor.sources.itis.rootTsn).toBe('9601')
    expect(descriptor.scope.itisRootScientificName).toBe('Euglenophycota')
    expect(descriptor.counts).toMatchObject({ total: 0, accepted: 0, synonymCurrentNameRedirect: 0, ambiguous: 0, unmatched: 0, itisCurrentSpecies: 276, itisSpeciesSynonymLinks: 1, itisUpstreamOnly: 276 })
    expect(rows).toHaveLength(276)
    expect(new Set(rows.map((row) => row.currentName.tsn)).size).toBe(276)
    expect(rows.every((row) => row.colUsageId === null)).toBe(true)
    expect(file.bytes).toBe(bytes.length); expect(file.sha256).toBe(sha256(bytes)); expect(file.sourceBytes).toBe(source.length); expect(file.sourceSha256).toBe(sha256(source))
    expect(Buffer.from(deterministicGzip(source, { level: 9 }))).toEqual(bytes)
    expect(descriptor.deliveryProfiles['web-light'].files).toEqual([])
    expect(descriptor.deliveryProfiles['native-full'].files).toEqual([file.path])
    expect(ledger.output.descriptor.sha256).toBe(sha256(descriptorBytes))
  })
})
