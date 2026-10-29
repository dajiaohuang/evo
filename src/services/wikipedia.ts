import { gunzipSync } from 'fflate'

export interface WikipediaEntry {
  status: 'matched' | 'missing' | 'ambiguous' | 'not-applicable'
  title?: string
  url?: string
  zhTitle?: string
  scope?: string
}
export interface WikipediaAbstract {
  status: 'available' | 'unavailable'
  locale: string
  requestedTitle: string
  title?: string
  extract?: string
  url?: string
  revisionId?: number
  revisionTimestamp?: string
  attributionUrl?: string
  licenseUrl?: string
  licenseLabel?: string
}
interface WikipediaMapping { entries: Record<string, WikipediaEntry> }
interface SnapshotCollection { schemaVersion: 1; snapshots: Record<string, WikipediaAbstract> }
interface CatalogueOption { item: string; parentNames?: string[]; url: string; abstracts: WikipediaAbstract[] }
interface CatalogueEntry { status: string; abstracts?: WikipediaAbstract[]; url?: string; scope?: string; options?: CatalogueOption[] }
interface CatalogueManifest { schemaVersion: 1; releaseAlias: string; status: string; stats: { totalNodes: number; queriedNodes: number; pendingNodes: number; matchedWithAbstract: number; candidatesWithAbstract: number }; shards: Record<string, { path: string; sha256: string; bytes: number; sourceSha256: string; sourceBytes: number }> }
interface CatalogueShard { schemaVersion: 1; releaseAlias: string; entries: Record<string, CatalogueEntry> }
let mappingPromise: Promise<WikipediaMapping> | undefined
let snapshotPromise: Promise<SnapshotCollection> | undefined
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

function loadAbstracts() {
  if (!snapshotPromise) snapshotPromise = jsonFile<SnapshotCollection>('abstracts.json').then(result => {
    if (result.schemaVersion !== 1 || !result.snapshots) throw new Error('Invalid local Wikipedia abstracts')
    return result
  }).catch(error => { snapshotPromise = undefined; throw error })
  return snapshotPromise
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
  if (!file || file.path !== `id-${prefix}.json.gz`) return null
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

function chooseAbstract(snapshots: WikipediaAbstract[], language: string) {
  const available = snapshots.filter(snapshot => snapshot.status === 'available' && snapshot.extract && snapshot.title && snapshot.url)
  return available.find(snapshot => snapshot.locale === language) ?? available.find(snapshot => snapshot.locale === 'en') ?? available[0]
}

export async function wikipediaSummary(name: string, language: string, signal: AbortSignal, catalogueId?: string) {
  let snapshots: WikipediaAbstract[]
  let scope: string | undefined
  if (catalogueId) {
    let entry: CatalogueEntry | null
    try { entry = await loadCatalogueWikipedia(catalogueId) } catch { return { status: 'not-assessed' } as const }
    if (!entry || entry.status === 'pending' || entry.status === 'abstract-pending' || entry.status === 'unresolved') return { status: 'not-assessed' } as const
    if (entry.status === 'ambiguous') return { status: 'ambiguous' } as const
    if (entry.status === 'missing') return { status: 'missing' } as const
    if (entry.status === 'candidate') {
      const options = (entry.options ?? []).map(option => ({ item: option.item, parentNames: option.parentNames ?? [],
        url: option.url, snapshot: chooseAbstract(option.abstracts ?? [], language) }))
      return options.length ? { status: 'candidates', options } as const : { status: 'not-assessed' } as const
    }
    if (entry.status !== 'matched') return { status: 'not-assessed' } as const
    snapshots = entry.abstracts ?? []
    scope = entry.scope
  } else {
    const mapping = await loadWikipediaMapping()
    const entry = mapping.entries[name]
    if (!entry) return { status: 'not-assessed' } as const
    if (entry.status !== 'matched') return { status: entry.status } as const
    const collection = await loadAbstracts()
    snapshots = [entry.title ? collection.snapshots[`en:${entry.title}`] : undefined,
      entry.zhTitle ? collection.snapshots[`zh:${entry.zhTitle}`] : undefined].filter((value): value is WikipediaAbstract => Boolean(value))
    scope = entry.scope
  }
  if (signal.aborted) throw signal.reason
  const snapshot = chooseAbstract(snapshots, language)
  if (!snapshot) return { status: 'not-assessed' } as const
  const url = new URL(snapshot.url!)
  if (url.protocol !== 'https:' || !/^[a-z0-9-]+\.wikipedia\.org$/.test(url.hostname) || !url.pathname.startsWith('/wiki/')) throw new Error('Invalid Wikipedia URL')
  return { status: 'ready', title: snapshot.title!, extract: snapshot.extract!, url: url.href, locale: snapshot.locale,
    scope, revisionId: snapshot.revisionId, revisionTimestamp: snapshot.revisionTimestamp, attributionUrl: snapshot.attributionUrl, licenseUrl: snapshot.licenseUrl, licenseLabel: snapshot.licenseLabel } as const
}
