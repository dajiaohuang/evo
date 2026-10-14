import { afterEach, expect, it, vi } from 'vitest'
import { gzipSync, strToU8 } from 'fflate'

afterEach(() => { vi.unstubAllGlobals(); vi.resetModules() })

const asArrayBuffer = (bytes: Uint8Array): ArrayBuffer => bytes.buffer.slice(bytes.byteOffset, bytes.byteOffset + bytes.byteLength) as ArrayBuffer
const hex = async (bytes: Uint8Array) => [...new Uint8Array(await crypto.subtle.digest('SHA-256', asArrayBuffer(bytes)))]
  .map(byte => byte.toString(16).padStart(2, '0')).join('')
const response = (bytes: Uint8Array) => new Response(Uint8Array.from(bytes))
const id = '623DW'
const prefixOf = async (value: string) => [...new Uint8Array(await crypto.subtle.digest('SHA-256', strToU8(value))).slice(0, 1)]
  .map(byte => byte.toString(16).padStart(2, '0')).join('')
const routePrefix = () => prefixOf(id)
async function otherIdInSameShard() {
  const prefix = await routePrefix()
  for (let n = 0; n < 10_000; n++) {
    const candidate = `other-${n}`
    if (candidate !== id && await prefixOf(candidate) === prefix) return candidate
  }
  throw new Error('Unable to construct same-prefix fixture ID')
}

async function fixture(payload: Uint8Array, options: { retry?: Uint8Array; expectedPayload?: Uint8Array } = {}, targetId = id) {
  vi.stubGlobal('Worker', undefined)
  const prefix = await prefixOf(targetId)
  const shardUrl = `releases/v1/catalogue/hierarchy/knowledge-${prefix}.jsonl.gz`
  const catalogueUrl = 'releases/v1/catalogue/manifest.json'
  const shardDescriptor = { url: shardUrl, sha256: await hex(options.expectedPayload ?? payload), mediaType: 'application/json' as const }
  let catalogueBytes = strToU8(JSON.stringify({
    releaseAlias: 'COL26.8', counts: { acceptedSpecies: 0 },
    knowledge: { schemaVersion: 1, releaseAlias: 'COL26.8', counts: {}, routes: { [prefix]: [shardUrl] }, files: [shardDescriptor] },
  }))
  const currentBytes = () => strToU8(JSON.stringify({ datasetVersion: 'v1', releaseBase: 'releases/v1/', catalogue: { manifest: { url: catalogueUrl, sha256: '' }, releaseAlias: 'COL26.8', acceptedSpecies: 0 } }))
  const current = JSON.parse(new TextDecoder().decode(currentBytes()))
  current.catalogue.manifest.sha256 = await hex(catalogueBytes)
  let currentManifestBytes = strToU8(JSON.stringify(current))
  let shardRequests = 0
  let shardPayload = payload
  const fetchMock = vi.fn(async (input: RequestInfo | URL) => {
    const pathname = new URL(String(input), 'https://fixture.invalid').pathname.replace(/^\//, '').replace(/^data\//, '')
    let bytes = pathname === 'current.json' ? currentManifestBytes : pathname === catalogueUrl ? catalogueBytes : undefined
    if (pathname === shardUrl) bytes = options.retry ? (++shardRequests === 1 ? Uint8Array.from(shardPayload) : Uint8Array.from(options.retry)) : Uint8Array.from(shardPayload)
    return bytes ? response(bytes) : new Response('', { status: 404 })
  })
  vi.stubGlobal('fetch', fetchMock)
  const loader = await import('./staticDataClient')
  loader.clearRuntimeMemoryCache()
  return {
    ...loader, fetchMock,
    async refreshWith(replacement: Uint8Array, releaseAlias = 'COL26.8') {
      shardPayload = replacement
      const catalogue = JSON.parse(new TextDecoder().decode(catalogueBytes))
      catalogue.releaseAlias = releaseAlias
      catalogue.knowledge.releaseAlias = releaseAlias
      catalogue.knowledge.files[0].sha256 = await hex(replacement)
      catalogueBytes = strToU8(JSON.stringify(catalogue))
      const updated = JSON.parse(new TextDecoder().decode(currentManifestBytes))
      updated.catalogue.releaseAlias = releaseAlias
      updated.catalogue.manifest.sha256 = await hex(catalogueBytes)
      currentManifestBytes = strToU8(JSON.stringify(updated))
    },
  }
}
const gz = (rows: unknown[]) => gzipSync(strToU8(JSON.stringify(rows)))
const rec = (recordId = id, releaseAlias: string | null = 'COL26.8') => ({ colId: recordId, ...(releaseAlias === null ? {} : { releaseAlias }), descriptionCollections: [] })

it('loads a correctly bound record through real gzip, digest, JSON parsing and selection', async () => {
  const f = await fixture(gz([rec(), rec(await otherIdInSameShard())]))
  await expect(f.loadCatalogueKnowledge(id)).resolves.toMatchObject({ colId: id, releaseAlias: 'COL26.8' })
})

it('rejects an explicitly mismatched releaseAlias on a same-ID record', async () => {
  const f = await fixture(gz([rec(id, 'COL26.7')]))
  await expect(f.loadCatalogueKnowledge(id)).rejects.toThrow(/release mismatch/i)
})

it('accepts an absent record releaseAlias', async () => {
  const f = await fixture(gz([rec(id, null)]))
  await expect(f.loadCatalogueKnowledge(id)).resolves.toMatchObject({ colId: id })
})

it('accepts an explicitly matching record releaseAlias', async () => {
  const f = await fixture(gz([rec(id, 'COL26.8')]))
  await expect(f.loadCatalogueKnowledge(id)).resolves.toMatchObject({ colId: id, releaseAlias: 'COL26.8' })
})

it('returns null for an empty result or a nonmatching same-prefix row', async () => {
  await expect((await fixture(gz([]))).loadCatalogueKnowledge(id)).resolves.toBeNull()
  const f = await fixture(gz([rec(await otherIdInSameShard())]))
  await expect(f.loadCatalogueKnowledge(id)).resolves.toBeNull()
})

it('does not cache failed JSON and loads a corrected record in a refreshed version', async () => {
  const invalid = gzipSync(strToU8('{broken'))
  const f = await fixture(invalid)
  await expect(f.loadCatalogueKnowledge(id)).rejects.toThrow()
  const corrected = gz([rec(id, 'COL26.9')])
  await f.refreshWith(corrected, 'COL26.9')
  f.clearRuntimeMemoryCache()
  await expect(f.loadCatalogueKnowledge(id)).resolves.toMatchObject({ colId: id, releaseAlias: 'COL26.9' })
})

it('coalesces concurrent same-route loads and reuses the verified parse', async () => {
  const f = await fixture(gz([rec()]))
  const [a, b] = await Promise.all([f.loadCatalogueKnowledge(id), f.loadCatalogueKnowledge(id)])
  expect(a).toMatchObject({ colId: id })
  expect(b).toMatchObject({ colId: id })
  await expect(f.loadCatalogueKnowledge(id)).resolves.toMatchObject({ colId: id })
  expect(f.fetchMock.mock.calls.filter(([url]) => String(url).includes('knowledge-'))).toHaveLength(1)
})

it('retries a failed shard fetch and loads corrected valid gzip bytes', async () => {
  const valid = gz([rec()])
  const f = await fixture(Uint8Array.from(valid.slice(0, -5)), { retry: valid, expectedPayload: valid })
  await expect(f.loadCatalogueKnowledge(id)).resolves.toMatchObject({ colId: id })
  expect(f.fetchMock.mock.calls.filter(([url]) => String(url).includes('knowledge-'))).toHaveLength(2)
})
