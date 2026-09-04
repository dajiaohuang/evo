import { gunzipSync } from 'node:zlib'
import { readFileSync } from 'node:fs'
import { describe, expect, it } from 'vitest'
import { catalogueItisProtistsScopes } from './catalogueItisProtistsScopes'

const root = 'data/catalogue-of-life/releases/2026-08-20/resource-packs/protists-chromists'

const expected = {
  amoebozoa: { roots: ['622B2'], total: 1337, accepted: 0, file: 'itis-amoebozoa-sidecar-0000.jsonl.gz' },
  apicomplexa: { roots: ['87FBN'], total: 21, accepted: 21, file: 'itis-apicomplexa-sidecar-0000.jsonl.gz' },
  bigyra: { roots: ['622CB'], total: 53, accepted: 0, file: 'itis-bigyra-sidecar-0000.jsonl.gz' },
  cercozoa: { roots: ['35'], total: 52, accepted: 0, file: 'itis-cercozoa-sidecar-0000.jsonl.gz' },
  ciliophora: { roots: ['3H'], total: 8507, accepted: 246, file: 'itis-ciliophora-sidecar-0000.jsonl.gz' },
  dinoflagellata: { roots: ['622D3'], total: 259, accepted: 60, file: 'itis-dinoflagellata-sidecar-0000.jsonl.gz' },
  ochrophyta: { roots: ['5H'], total: 1101, accepted: 1101, file: 'itis-ochrophyta-sidecar-0000.jsonl.gz' },
  oomycota: { roots: ['3SH', '3ZZ', '3FT', '3DC'], total: 1494, accepted: 53, file: 'itis-oomycota-sidecar-0000.jsonl.gz' },
} as const

describe('catalogue ITIS protist scope boundary', () => {
  it('exports only the eight scopes with a COL projection', () => {
    expect(catalogueItisProtistsScopes.map((scope) => scope.scope)).toEqual(Object.keys(expected))
    for (const scope of catalogueItisProtistsScopes) {
      expect(scope.packageId).toBe('protists-chromists')
      expect([...scope.roots]).toEqual(expected[scope.scope as keyof typeof expected].roots)
      expect(scope.excludedRoots.size).toBe(0)
    }
  })

  it('matches descriptor counts and locator ranges, with real runtime rows', () => {
    for (const scope of catalogueItisProtistsScopes) {
      const key = scope.scope as keyof typeof expected
      const descriptor = JSON.parse(readFileSync(`${root}/itis-${scope.scope}-sidecar.json`, 'utf8'))
      const locator = descriptor.colUsageIdLocator
      expect(descriptor.scope.colStrictAcceptedSpecies ?? descriptor.scope.requestedColRoot?.strictAcceptedSpecies ?? descriptor.counts.total).toBe(expected[key].total)
      expect(descriptor.counts.accepted).toBe(expected[key].accepted)
      expect(locator.files.length).toBeGreaterThan(0)
      expect(locator.files[0].path.endsWith(expected[key].file)).toBe(true)
      expect(locator.files[0].firstColUsageId).toBeTruthy()
      expect(locator.files[0].lastColUsageId).toBeTruthy()
      const first = JSON.parse(gunzipSync(readFileSync(locator.files[0].path)).toString('utf8').split(/\r?\n/)[0])
      expect(first.colUsageId).toBeTruthy()
      expect(first.status).toBeTruthy()
    }
  })
})
