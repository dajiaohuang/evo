import { afterEach, expect, it, vi } from 'vitest'
import { gzipSync, strToU8 } from 'fflate'
import { clearRuntimeMemoryCache, loadPbdbReader, searchStaticData } from './staticDataClient'
import type { PbdbReaderRecord } from './pbdbReaderTypes'

afterEach(() => { clearRuntimeMemoryCache(); vi.unstubAllGlobals() })

async function installFixture({ incomplete = false, mismatch = false } = {}) {
  vi.stubGlobal('Worker', undefined)
  const record: PbdbReaderRecord = { pbdbTaxonId: 'txn:249478', identity: { kind: 'taxon', scientificName: 'Colognathus obscurus', rank: 'species', classification: { authority: 'Paleobiology Database', sourceUrl: 'https://paleobiodb.org/data1.2/taxa/single.json?id=249478', release: '2026-10-02 response' } }, profile: { scientificName: 'Colognathus obscurus', rank: 'species', sourceDatasetId: null, name: { en: 'Colognathus obscurus', zh: 'Colognathus obscurus' }, sections: [{ topic: 'occurrences', title: { en: 'Named fossil records' }, text: { en: 'A source-bounded account.', zh: '有来源范围的资料。' }, sourceIds: ['snapshot'] }], sources: [{ id: 'snapshot', title: 'PBDB dated response', license: 'Recorded rights', locator: 'Exact accepted_no txn:249478' }], limitations: { en: 'Selected records.', zh: '所选记录。' } } }
  const payloads = new Map<string, Uint8Array>()
  const file = async (url: string, value: unknown) => {
    const bytes = gzipSync(strToU8(JSON.stringify(value)))
    payloads.set(url, bytes)
    const digest = await crypto.subtle.digest('SHA-256', Uint8Array.from(bytes).buffer)
    return { url, bytes: bytes.length, encoding: 'gzip', sha256: [...new Uint8Array(digest)].map(byte => byte.toString(16).padStart(2, '0')).join('') }
  }
  const { catalogueRoutePrefix } = await import('./staticDataClient')
  const prefix = await catalogueRoutePrefix(record.pbdbTaxonId)
  const identity = { pbdbTaxonId: record.pbdbTaxonId, identity: record.identity }
  const index = await file('index.json.gz', [identity])
  const shard = await file('one-shard.json.gz', [record])
  const manifest = await file('pbdb-manifest.json.gz', { schemaVersion: 1, datasetVersion: mismatch ? 'other' : 'fixture', records: 1, index, routes: { [prefix]: ['one-shard.json.gz'] }, files: incomplete ? [] : [shard] })
  const search = await file('search.json.gz', [])
  const current = { schemaVersion: 5, datasetVersion: 'fixture', releaseBase: 'releases/fixture/', core: { search }, pbdbReader: { manifest, records: 1 } }
  const fetchMock = vi.fn(async (input: string) => {
    if (String(input).endsWith('current.json')) return new Response(JSON.stringify(current))
    const key = [...payloads.keys()].find(key => String(input).endsWith(key))
    if (!key) throw new Error(`Unexpected fetch ${input}`)
    return new Response(Uint8Array.from(payloads.get(key)!).buffer)
  })
  vi.stubGlobal('fetch', fetchMock)
  return { record, fetchMock }
}

it('loads an exact PBDB ID from a verified gzip shard and reuses the bounded cache', async () => {
  const { record, fetchMock } = await installFixture()
  await expect(loadPbdbReader('txn:249478')).resolves.toEqual(record)
  await loadPbdbReader('txn:249478')
  expect(fetchMock.mock.calls.filter(([url]) => String(url).endsWith('one-shard.json.gz'))).toHaveLength(1)
  await expect(loadPbdbReader('occ:249478')).resolves.toBeNull()
  await expect(loadPbdbReader('Colognathus obscurus')).resolves.toBeNull()
  await expect(loadPbdbReader('txn:1')).resolves.toBeNull()
})

it('fails closed on incomplete routes and mismatched release identities', async () => {
  await installFixture({ incomplete: true })
  await expect(loadPbdbReader('txn:249478')).rejects.toThrow('route is incomplete')
  clearRuntimeMemoryCache()
  await installFixture({ mismatch: true })
  await expect(loadPbdbReader('txn:249478')).rejects.toThrow('release mismatch')
})

it('finds the exact source ID and returns the public PBDB reader route without loading prose shards', async () => {
  const { fetchMock } = await installFixture()
  await expect(searchStaticData('txn:249478')).resolves.toMatchObject([{ id: 'txn:249478', route: '#/pbdb?id=txn%3A249478' }])
  expect(fetchMock.mock.calls.some(([url]) => String(url).endsWith('one-shard.json.gz'))).toBe(false)
})
