import { afterEach, vi } from 'vitest'
import { strToU8 } from 'fflate'

afterEach(() => { vi.unstubAllGlobals(); vi.resetModules() })

const asArrayBuffer = (bytes: Uint8Array): ArrayBuffer => bytes.buffer.slice(bytes.byteOffset, bytes.byteOffset + bytes.byteLength) as ArrayBuffer
const hex = async (bytes: Uint8Array) => [...new Uint8Array(await crypto.subtle.digest('SHA-256', asArrayBuffer(bytes)))]
  .map(byte => byte.toString(16).padStart(2, '0')).join('')
const response = (bytes: Uint8Array) => new Response(Uint8Array.from(bytes))
const id = '623DW'
const prefixOf = async (value: string) => [...new Uint8Array(await crypto.subtle.digest('SHA-256', strToU8(value))).slice(0, 1)]
  .map(byte => byte.toString(16).padStart(2, '0')).join('')
export async function fixture(payload: Uint8Array, options: { retry?: Uint8Array; expectedPayload?: Uint8Array } = {}, targetId = id) {
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
