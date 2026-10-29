import { gunzipSync } from 'fflate'

export interface WikipediaEntry {
  status: 'matched' | 'missing' | 'ambiguous' | 'not-applicable'
  title?: string
  url?: string
  zhTitle?: string
  scope?: string
}
interface WikipediaMapping { entries: Record<string, WikipediaEntry> }
interface CatalogueOption { item: string; parentNames?: string[]; url: string }
interface CatalogueEntry { status: string; url?: string; scope?: string; options?: CatalogueOption[] }
interface CatalogueManifest { schemaVersion: 1; releaseAlias: string; status: string; stats: { totalNodes: number; queriedNodes: number; pendingNodes: number; matchedWithAbstract: number; candidatesWithAbstract: number }; shards: Record<string, { path: string; sha256: string; bytes: number; sourceSha256: string; sourceBytes: number }> }
interface CatalogueShard { schemaVersion: 1; releaseAlias: string; entries: Record<string, CatalogueEntry> }
let mappingPromise: Promise<WikipediaMapping> | undefined
let catalogueManifestPromise: Promise<CatalogueManifest> | undefined
const catalogueShards = new Map<string, Promise<CatalogueShard>>()
const base = () => `${import.meta.env.BASE_URL}wikipedia/`

async function jsonFile<T>(path: string): Promise<T> {
  const response = await fetch(base() + path)
  if (!response.ok) throw new Error(`Local Wikipedia data unavailable (${response.status})`)
  return response.json() as Promise<T>
}

export function loadWikipediaMapping() {
  if (!mappingPromise) mappingPromise = jsonFile<WikipediaMapping>('mapping.json').catch(error => { mappingPromise = undefined; throw error })
  return mappingPromise
}

export async function loadCatalogueWikipediaManifest(): Promise<CatalogueManifest> {
  if (!catalogueManifestPromise) catalogueManifestPromise = jsonFile<CatalogueManifest>('col/manifest.json').catch(error => { catalogueManifestPromise = undefined; throw error })
  const manifest = await catalogueManifestPromise
  if (manifest.schemaVersion !== 1 || manifest.releaseAlias !== 'COL26.8') throw new Error('Wrong catalogue Wikipedia release')
  return manifest
}

export async function loadCatalogueWikipedia(id: string): Promise<CatalogueEntry | null> {
  const manifest = await loadCatalogueWikipediaManifest()
  const digest = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(id))
  const prefix = new Uint8Array(digest)[0].toString(16).padStart(2, '0')
  const file = manifest.shards[prefix]
  if (!file || file.path !== `id-${prefix}-${file.sha256.slice(0, 16)}.json.gz` || !/^[0-9a-f]{64}$/.test(file.sha256)) return null
  let pending = catalogueShards.get(prefix)
  if (!pending) {
    pending = fetch(base() + 'col/' + file.path).then(async response => {
      if (!response.ok) throw new Error('Catalogue Wikipedia shard unavailable')
      const bytes = new Uint8Array(await response.arrayBuffer())
      const compressed = bytes[0] === 0x1f && bytes[1] === 0x8b
      const expectedHash = compressed ? file.sha256 : file.sourceSha256
      const expectedBytes = compressed ? file.bytes : file.sourceBytes
      if (bytes.length !== expectedBytes) throw new Error('Catalogue Wikipedia shard size mismatch')
      const hash = Array.from(new Uint8Array(await crypto.subtle.digest('SHA-256', bytes)), value => value.toString(16).padStart(2, '0')).join('')
      if (hash !== expectedHash) throw new Error('Catalogue Wikipedia shard hash mismatch')
      const decoded = compressed ? gunzipSync(bytes) : bytes
      const shard = JSON.parse(new TextDecoder().decode(decoded)) as CatalogueShard
      if (shard.schemaVersion !== 1 || shard.releaseAlias !== 'COL26.8') throw new Error('Invalid catalogue Wikipedia shard')
      return shard
    }).catch(error => { catalogueShards.delete(prefix); throw error })
    catalogueShards.set(prefix, pending)
    if (catalogueShards.size > 8) catalogueShards.delete(catalogueShards.keys().next().value!)
  }
  return (await pending).entries[id] ?? null
}
