import { gunzipSync } from 'fflate'
import type { BackendNameSearchRecord } from './backendClient'
import { loadCatalogueManifest, normalizeCatalogueQuery } from './staticDataClient'

interface HigherRecord {
  id: string
  scientificName: string
  authorship: string | null
  rank: string | null
  status: string
  parentId: string | null
  sourceDatasetId: string | null
  normalizedName: string
  normalizedBare: string
}
interface HigherFile { path: string; sha256: string; bytes: number; sourceSha256: string; sourceBytes: number; records: number }
interface HigherManifest { schemaVersion: 1; releaseAlias: string; nodes: number; hierarchyNodeHashes: Record<string, string>; files: Record<string, HigherFile> }
interface HigherShard { schemaVersion: 1; releaseAlias: string; prefix: string; records: HigherRecord[] }

const base = () => `${import.meta.env.BASE_URL}higher-search/`
let manifestPromise: Promise<HigherManifest | null> | undefined
const shards = new Map<string, Promise<HigherShard>>()

async function manifest(): Promise<HigherManifest | null> {
  if (!manifestPromise) manifestPromise = fetch(`${base()}manifest.json`).then(async response => {
    if (response.status === 404) return null
    if (!response.ok) throw new Error(`Higher taxon search index unavailable (${response.status})`)
    const value = await response.json() as HigherManifest
    if (value.schemaVersion !== 1 || value.releaseAlias !== 'COL26.8' || !value.files) throw new Error('Wrong higher taxon search release')
    return value
  }).catch(error => { manifestPromise = undefined; throw error })
  return manifestPromise
}

async function shard(prefix: string, file: HigherFile): Promise<HigherShard> {
  if (!/^[a-z0-9_]{2}$/.test(prefix) || !/^[0-9a-f]{64}$/.test(file.sha256) || file.path !== `${prefix}-${file.sha256.slice(0, 16)}.json.gz`) throw new Error('Invalid higher taxon search shard')
  let pending = shards.get(file.path)
  if (!pending) {
    pending = fetch(base() + file.path).then(async response => {
      if (!response.ok) throw new Error('Higher taxon search shard unavailable')
      const bytes = new Uint8Array(await response.arrayBuffer()), compressed = bytes[0] === 0x1f && bytes[1] === 0x8b
      const expectedHash = compressed ? file.sha256 : file.sourceSha256, expectedBytes = compressed ? file.bytes : file.sourceBytes
      if (bytes.length !== expectedBytes || !/^[0-9a-f]{64}$/.test(expectedHash)) throw new Error('Higher taxon search shard size mismatch')
      const digest = Array.from(new Uint8Array(await crypto.subtle.digest('SHA-256', bytes)), value => value.toString(16).padStart(2, '0')).join('')
      if (digest !== expectedHash) throw new Error('Higher taxon search shard hash mismatch')
      const value = JSON.parse(new TextDecoder().decode(compressed ? gunzipSync(bytes) : bytes)) as HigherShard
      if (value.schemaVersion !== 1 || value.releaseAlias !== 'COL26.8' || value.prefix !== prefix || !Array.isArray(value.records) || value.records.length !== file.records) throw new Error('Invalid higher taxon search data')
      return value
    }).catch(error => { shards.delete(file.path); throw error })
    shards.set(file.path, pending)
    if (shards.size > 8) shards.delete(shards.keys().next().value!)
  }
  return pending
}

export async function searchHigherCatalogue(query: string, limit: number, signal: AbortSignal): Promise<BackendNameSearchRecord[]> {
  const normalized = normalizeCatalogueQuery(query), compact = normalized.replaceAll(' ', '')
  if (!compact) return []
  const prefix = compact.slice(0, 2).padEnd(2, '_'), [index, catalogue] = await Promise.all([manifest(), loadCatalogueManifest()])
  if (signal.aborted) throw new DOMException('Search cancelled', 'AbortError')
  if (!index) return []
  const hierarchyFiles = catalogue.hierarchy.nodes.files
  if (index.nodes !== catalogue.hierarchy.counts.higherTaxonNodes || !index.hierarchyNodeHashes || Object.keys(index.hierarchyNodeHashes).length !== hierarchyFiles.length || hierarchyFiles.some(file => !file.sha256 || index.hierarchyNodeHashes[file.prefix] !== file.sha256)) throw new Error('Higher taxon search does not match the current tree')
  const file = index.files[prefix]
  if (!file) return []
  const value = await shard(prefix, file)
  if (signal.aborted) throw new DOMException('Search cancelled', 'AbortError')
  const matches = value.records.filter(row => compact.length < 3
    ? row.normalizedBare === normalized || row.normalizedName === normalized
    : row.normalizedBare.startsWith(normalized) || row.normalizedName.startsWith(normalized))
  const exact = matches.filter(row => row.normalizedBare === normalized || row.normalizedName === normalized)
  const selected = [...new Map([...exact, ...matches.slice(0, limit)].map(row => [row.id, row])).values()]
  return selected.map(row => ({ id: row.id, kind: 'catalogue-name', title: row.scientificName, authorship: row.authorship, status: row.status, acceptedId: null, parentId: row.parentId, sourceDatasetId: row.sourceDatasetId, source: index.releaseAlias }))
}
