import { gunzipSync, strFromU8 } from 'fflate'
import type {
  CurrentRuntimeManifest,
  CatalogueHierarchyChildRecord,
  CatalogueHierarchyNodeRecord,
  CatalogueRecord,
  CatalogueRuntimeFile,
  CatalogueRuntimeManifest,
  CatalogueSanbiDescriptionRecord,
  CataloguePlaziDescriptionRecord,
  CatalogueSourceChecklist,
  CatalogueSpeciesOwner,
  CatalogueSpeciesOwnership,
  CatalogueTargetRecord,
  CatalogueTaxonRecord,
  OccurrenceRuntimeManifest,
  RuntimeEntity,
  RuntimeEntityLinkageCoverage,
  RuntimeFile,
  RuntimeMapManifest,
  RuntimeMapFrame,
  RuntimeMapFrameSelection,
  RuntimeMapSnapshot,
  RuntimePaleotopographyCollection,
  RuntimePaleotopographyFrame,
  RuntimeMediaAsset,
  RuntimePackageManifest,
  RuntimePackageRegistry,
  RuntimeRangeEvidence,
  RuntimeResearchExamples,
  RuntimeReleaseFilesIndex,
  RuntimeReleasesIndex,
  RuntimeSearchEntry,
} from './types'

const configuredDataRoot = import.meta.env.VITE_DATA_ROOT as string | undefined
const dataRoot = configuredDataRoot
  ? `${configuredDataRoot.replace(/\/+$/, '')}/`
  : `${import.meta.env.BASE_URL}data/`.replace(/\/+/g, '/')
const jsonCache = new Map<string, unknown>()
const inFlight = new Map<string, Promise<unknown>>()
const windowJsonCache = new Map<string, unknown>()
const windowInFlight = new Map<string, Promise<unknown>>()
const loadedPackageSearch = new Map<string, RuntimeSearchEntry[]>()
const mapJsonCache = new Map<string, unknown>()
const mapInFlight = new Map<string, Promise<unknown>>()
const MAP_CACHE_LIMIT = 18
const WINDOW_CACHE_LIMIT = 12
let worker: Worker | null = null
let requestId = 0
const workerRequests = new Map<number, { resolve: (data: unknown) => void; reject: (error: Error) => void }>()

function cacheKey(file: RuntimeFile): string {
  return `${file.url}#${file.sha256 ?? 'unverified'}`
}

function dataUrl(relativeUrl: string): string {
  if (/^https?:\/\//.test(relativeUrl)) return relativeUrl
  return `${dataRoot}${relativeUrl.replace(/^\/+/, '')}`
}

async function digestHex(bytes: ArrayBuffer): Promise<string> {
  const digest = await crypto.subtle.digest('SHA-256', bytes)
  return [...new Uint8Array(digest)].map((value) => value.toString(16).padStart(2, '0')).join('')
}

async function evictUrlFromCaches(url: string): Promise<void> {
  if (!('caches' in globalThis)) return
  const cacheNames = await caches.keys()
  await Promise.all(cacheNames.map(async (cacheName) => {
    const cache = await caches.open(cacheName)
    await cache.delete(url)
  }))
}

async function cachedResponse(url: string): Promise<Response | undefined> {
  if (!('caches' in globalThis) || typeof caches.match !== 'function') return undefined
  return (await caches.match(url)) ?? undefined
}

async function fetchVerifiedBytes(file: RuntimeFile, retry = true): Promise<ArrayBuffer> {
  const url = dataUrl(file.url)
  const response = retry
    ? (await cachedResponse(url)) ?? await fetch(url)
    : await fetch(url, { cache: 'reload' })
  if (!response.ok) throw new Error(`Static data request failed (${response.status}) for ${file.url}`)
  const bytes = await response.arrayBuffer()
  const byteView = new Uint8Array(bytes)
  const isGzip = byteView[0] === 0x1f && byteView[1] === 0x8b
  const expectedChecksum = isGzip ? file.sha256 : file.sourceSha256 ?? file.sha256
  if (expectedChecksum && await digestHex(bytes) !== expectedChecksum) {
    if (retry) {
      await evictUrlFromCaches(url)
      return fetchVerifiedBytes(file, false)
    }
    throw new Error(`Checksum mismatch for ${file.url} after network refetch`)
  }
  return bytes
}

async function fetchBootstrapResponse(relativeUrl: string): Promise<Response> {
  const url = dataUrl(relativeUrl)
  try {
    const response = await fetch(url, { cache: 'no-store' })
    if (response.ok) return response
  } catch {
    // A complete-atlas download keeps bootstrap files in Cache Storage for native/offline startup.
  }
  const cached = await cachedResponse(url)
  if (cached) return cached
  throw new Error(`Static data request failed for ${relativeUrl}`)
}

async function loadWithoutWorker<T>(file: RuntimeFile): Promise<T> {
  const bytes = await fetchVerifiedBytes(file)
  const byteView = new Uint8Array(bytes)
  const isGzip = byteView[0] === 0x1f && byteView[1] === 0x8b
  const text = strFromU8(isGzip ? gunzipSync(byteView) : byteView)
  return (file.mediaType === 'application/x-ndjson'
    ? text.split('\n').filter(Boolean).map((line) => JSON.parse(line) as unknown)
    : JSON.parse(text)) as T
}

function runtimeWorker(): Worker | null {
  if (typeof Worker === 'undefined') return null
  if (worker) return worker
  worker = new Worker(new URL('../workers/runtimeData.worker.ts', import.meta.url), { type: 'module' })
  worker.onmessage = (event: MessageEvent<{ id: number; data?: unknown; error?: string }>) => {
    const request = workerRequests.get(event.data.id)
    if (!request) return
    workerRequests.delete(event.data.id)
    if (event.data.error) request.reject(new Error(event.data.error))
    else request.resolve(event.data.data)
  }
  worker.onerror = (event) => {
    const error = new Error(event.message || 'Runtime data worker failed')
    for (const request of workerRequests.values()) request.reject(error)
    workerRequests.clear()
    worker?.terminate()
    worker = null
  }
  return worker
}

async function loadWithWorker<T>(file: RuntimeFile): Promise<T> {
  const activeWorker = runtimeWorker()
  if (!activeWorker) return loadWithoutWorker<T>(file)
  const id = ++requestId
  return new Promise<T>((resolve, reject) => {
    workerRequests.set(id, { resolve: (data) => resolve(data as T), reject })
    // Resolve native ./data against the document, not the worker's assets/ URL.
    const url = new URL(dataUrl(file.url), document.baseURI).href
    activeWorker.postMessage({ id, url, sha256: file.sha256, sourceSha256: file.sourceSha256, mediaType: file.mediaType })
  })
}

export async function loadRuntimeFile<T>(file: RuntimeFile): Promise<T> {
  const key = cacheKey(file)
  const cached = jsonCache.get(key)
  if (cached !== undefined) return cached as T
  const pending = inFlight.get(key)
  if (pending) return pending as Promise<T>
  const request = loadWithWorker<T>(file).then((data) => {
    jsonCache.set(key, data)
    inFlight.delete(key)
    return data
  }, (error) => {
    inFlight.delete(key)
    throw error
  })
  inFlight.set(key, request)
  return request
}

async function loadWindowedRuntimeFile<T>(file: RuntimeFile): Promise<T> {
  const key = cacheKey(file)
  const cached = windowJsonCache.get(key)
  if (cached !== undefined) {
    windowJsonCache.delete(key)
    windowJsonCache.set(key, cached)
    return cached as T
  }
  const pending = windowInFlight.get(key)
  if (pending) return pending as Promise<T>
  const request = loadWithWorker<T>(file).then((data) => {
    windowInFlight.delete(key)
    windowJsonCache.delete(key)
    windowJsonCache.set(key, data)
    while (windowJsonCache.size > WINDOW_CACHE_LIMIT) {
      const oldest = windowJsonCache.keys().next().value
      if (oldest === undefined) break
      windowJsonCache.delete(oldest)
    }
    return data
  }, (error) => {
    windowInFlight.delete(key)
    throw error
  })
  windowInFlight.set(key, request)
  return request
}

async function loadMapRuntimeFile<T>(file: RuntimeFile): Promise<T> {
  const key = cacheKey(file)
  const cached = mapJsonCache.get(key)
  if (cached !== undefined) {
    mapJsonCache.delete(key)
    mapJsonCache.set(key, cached)
    return cached as T
  }
  const pending = mapInFlight.get(key)
  if (pending) return pending as Promise<T>
  const request = loadWithWorker<T>(file).then((data) => {
    mapInFlight.delete(key)
    mapJsonCache.set(key, data)
    while (mapJsonCache.size > MAP_CACHE_LIMIT) {
      const oldest = mapJsonCache.keys().next().value
      if (oldest === undefined) break
      mapJsonCache.delete(oldest)
    }
    return data
  }, (error) => {
    mapInFlight.delete(key)
    throw error
  })
  mapInFlight.set(key, request)
  return request
}

async function loadBootstrapManifest(): Promise<CurrentRuntimeManifest> {
  const key = 'current.json#bootstrap'
  const cached = jsonCache.get(key)
  if (cached !== undefined) return cached as CurrentRuntimeManifest
  const response = await fetchBootstrapResponse('current.json')
  const data = await response.json() as CurrentRuntimeManifest
  const expectedReleaseBase = `releases/${data.datasetVersion}/`
  if (data.releaseBase !== expectedReleaseBase) {
    throw new Error(`Runtime bootstrap release mismatch: expected ${expectedReleaseBase}, received ${data.releaseBase}`)
  }
  jsonCache.set(key, data)
  return data
}

export function loadCurrentManifest(): Promise<CurrentRuntimeManifest> {
  return loadBootstrapManifest()
}

async function loadBootstrapJson<T>(relativeUrl: string): Promise<T> {
  const key = `${relativeUrl}#bootstrap`
  const cached = jsonCache.get(key)
  if (cached !== undefined) return cached as T
  const response = await fetchBootstrapResponse(relativeUrl)
  const data = await response.json() as T
  jsonCache.set(key, data)
  return data
}

export async function loadCurrentReleaseFiles(): Promise<RuntimeReleaseFilesIndex> {
  const current = await loadCurrentManifest()
  const releases = await loadBootstrapJson<RuntimeReleasesIndex>('releases.json')
  const release = releases.releases.find((entry) => entry.datasetVersion === current.datasetVersion)
  if (!release || release.releaseBase !== current.releaseBase) {
    throw new Error(`Release inventory does not contain current dataset ${current.datasetVersion}`)
  }
  const index = await loadBootstrapJson<RuntimeReleaseFilesIndex>(release.filesIndex)
  if (index.datasetVersion !== current.datasetVersion) {
    throw new Error(`Release file inventory does not belong to dataset ${current.datasetVersion}`)
  }
  return index
}

export async function loadPackageRegistry(): Promise<RuntimePackageRegistry> {
  const current = await loadCurrentManifest()
  return loadRuntimeFile<RuntimePackageRegistry>(current.packages.registry)
}

export async function loadEntityIndex(): Promise<RuntimeEntity[]> {
  const current = await loadCurrentManifest()
  return loadRuntimeFile<RuntimeEntity[]>(current.core.entities)
}

export async function loadEntityLinkageCoverage(): Promise<RuntimeEntityLinkageCoverage> {
  const current = await loadCurrentManifest()
  const file = current.core.linkageCoverage
  if (!file) throw new Error('Current release does not publish entity linkage coverage')
  return loadRuntimeFile<RuntimeEntityLinkageCoverage>(file)
}

export async function loadPackageManifest(packageId: string): Promise<RuntimePackageManifest> {
  const current = await loadCurrentManifest()
  const file = current.packages.manifests[packageId]
  if (!file) throw new Error(`Unknown runtime package: ${packageId}`)
  const manifest = await loadRuntimeFile<RuntimePackageManifest>(file)
  if (manifest.packageId !== packageId || manifest.version !== current.datasetVersion) {
    throw new Error(`Runtime package ${packageId} does not belong to dataset ${current.datasetVersion}`)
  }
  return manifest
}

export async function loadPackageResearchExamples(packageId: string): Promise<RuntimeResearchExamples> {
  const manifest = await loadPackageManifest(packageId)
  const payload = await loadRuntimeFile<RuntimeResearchExamples>(manifest.files.researchExamples)
  const claimLinkCount = payload.examples.reduce((sum, example) => sum + example.claimIds.length, 0)
  if (payload.packageId !== packageId
    || payload.examples.length !== manifest.researchExampleCount
    || claimLinkCount !== manifest.researchClaimLinkCount) {
    throw new Error(`Runtime research examples for ${packageId} do not match the package manifest`)
  }
  return payload
}

export async function loadPackageRanges(packageId: string): Promise<RuntimeRangeEvidence[]> {
  const manifest = await loadPackageManifest(packageId)
  const ranges = await loadRuntimeFile<RuntimeRangeEvidence[]>(manifest.files.ranges)
  if (ranges.some((range) => !Number.isFinite(range.olderMa)
    || !Number.isFinite(range.youngerMa)
    || range.olderMa < range.youngerMa
    || !range.entityId
    || (range.status === 'available' && !range.claimIds.length))) {
    throw new Error(`Runtime range evidence for ${packageId} is invalid`)
  }
  return ranges
}

export async function loadPackageNomenclatureCollection(
  packageId: string,
  collectionId: import('./types').RuntimePackageNomenclatureCollection['id'],
): Promise<{
  collection: import('./types').RuntimePackageNomenclatureCollection
  sidecar: import('./types').RuntimeNomenclaturalSidecar
}> {
  const manifest = await loadPackageManifest(packageId)
  const collection = manifest.nomenclatureCollections?.find((candidate) => candidate.id === collectionId)
  if (!collection) throw new Error(`Runtime package ${packageId} does not publish nomenclature collection ${collectionId}`)
  if (collection.id !== 'worms-aphiaid-crosswalk') throw new Error(`${collectionId} is not a JSON sidecar collection`)
  if (!collection.file || (collection.delivery && (!collection.delivery.completeRows || collection.delivery.profile !== 'native-full'))) {
    throw new Error('WoRMS row-level records are available in the full Android/iOS data profile; Web publishes the verified coverage summary only')
  }
  const sidecar = await loadRuntimeFile<import('./types').RuntimeNomenclaturalSidecar>(collection.file)
  const categories = ['accepted', 'acceptedNameRedirect', 'ambiguous', 'unmatched', 'withheld'] as const
  const categorizedTotal = categories.reduce((sum, key) => sum + (sidecar.records[key]?.length ?? 0), 0)
  if (sidecar.packageId !== packageId || sidecar.sidecarType !== 'date-pinned-exact-nomenclatural-crosswalk'
    || categorizedTotal !== collection.counts.total
    || categories.some((key) => sidecar.records[key]?.length !== collection.counts[key])) {
    throw new Error(`Runtime nomenclature collection ${packageId}/${collectionId} does not match its package manifest`)
  }
  return { collection, sidecar }
}

export async function loadPackageWfoPlantRecords(packageId: 'angiospermae' | 'gymnosperms' | 'early-land-plants'): Promise<{
  collection: import('./types').RuntimeWfoPlantNomenclatureCollection
  records: import('./types').WfoPlantRecord[]
}> {
  const manifest = await loadPackageManifest(packageId)
  const collection = manifest.nomenclatureCollections?.find((candidate): candidate is import('./types').RuntimeWfoPlantNomenclatureCollection => candidate.id === 'wfo-plant-list-crosswalk')
  if (!collection || collection.packageId !== packageId || collection.provider !== 'World Flora Online Plant List') {
    throw new Error(`Runtime package ${packageId} does not publish its WFO Plant List collection`)
  }
  const shards = await Promise.all(collection.files.map((file) => loadRuntimeFile<import('./types').WfoPlantRecord[]>(file)))
  const records = shards.flat()
  const statuses = ['accepted', 'redirect', 'ambiguous', 'unmatched', 'withheld'] as const
  if (records.length !== collection.counts.total
    || statuses.some((status) => records.filter((record) => record.status === status).length !== collection.counts[status])
    || records.some((record) => record.packageId !== packageId || !record.colId)) {
    throw new Error(`Runtime WFO collection ${packageId} does not match its descriptor`)
  }
  return { collection, records }
}

function selectWfoColShard(files: import('./types').CatalogueResourcePackPayloadFile[], colId: string): import('./types').CatalogueResourcePackPayloadFile {
  let previousMax: string | null = null
  for (const file of files) {
    if (!file.minColId || !file.maxColId || file.minColId.localeCompare(file.maxColId) > 0
      || (previousMax !== null && previousMax.localeCompare(file.minColId) >= 0)) {
      throw new Error('WFO COL shard ranges are absent, invalid or overlapping')
    }
    previousMax = file.maxColId
    if (file.minColId.localeCompare(colId) <= 0 && file.maxColId.localeCompare(colId) >= 0) return file
  }
  throw new Error(`WFO COL shard range does not cover ${colId}`)
}

async function loadWfoColRecordFromFiles(files: import('./types').CatalogueResourcePackPayloadFile[], colId: string): Promise<import('./types').WfoPlantRecord | null> {
  const file = selectWfoColShard(files, colId)
  const records = await loadRuntimeFile<import('./types').WfoPlantRecord[]>(file)
  if (records.length !== file.records || records[0]?.colId !== file.minColId || records.at(-1)?.colId !== file.maxColId
    || records.some((record, index) => !record.colId || (index > 0 && records[index - 1].colId!.localeCompare(record.colId) >= 0))) {
    throw new Error('WFO COL shard contents do not match its range descriptor')
  }
  return records.find((record) => record.colId === colId) ?? null
}

export async function loadPackageWfoPlantRecord(packageId: 'angiospermae' | 'gymnosperms' | 'early-land-plants', colId: string): Promise<{
  collection: import('./types').RuntimeWfoPlantNomenclatureCollection
  record: import('./types').WfoPlantRecord | null
}> {
  const manifest = await loadPackageManifest(packageId)
  const collection = manifest.nomenclatureCollections?.find((candidate): candidate is import('./types').RuntimeWfoPlantNomenclatureCollection => candidate.id === 'wfo-plant-list-crosswalk')
  if (!collection || collection.packageId !== packageId) throw new Error(`Runtime package ${packageId} does not publish its WFO Plant List collection`)
  return { collection, record: await loadWfoColRecordFromFiles(collection.files, colId) }
}

export async function loadPackageAviListBirdRecord(colId: string): Promise<{
  collection: import('./types').RuntimeAviListNomenclatureCollection
  record: import('./types').AviListBirdRecord | null
}> {
  const packageId = 'crocodylomorphs-birds'
  const manifest = await loadPackageManifest(packageId)
  const collection = manifest.nomenclatureCollections?.find((candidate): candidate is import('./types').RuntimeAviListNomenclatureCollection => candidate.id === 'avilist-v2025b-avibase-concepts')
  if (!collection || collection.packageId !== packageId || collection.provider !== 'AviList Core Team') {
    throw new Error('Runtime birds package does not publish its AviList collection')
  }
  if (!collection.delivery.completeRows || collection.delivery.profile !== 'native-full') {
    throw new Error('AviList row-level records are available in the full Android/iOS data profile; Web publishes the verified coverage summary only')
  }
  const file = selectWfoColShard(collection.files, colId)
  const records = await loadRuntimeFile<import('./types').AviListBirdRecord[]>(file)
  if (records.length !== file.records || records[0]?.colId !== file.minColId || records.at(-1)?.colId !== file.maxColId
    || records.some((record, index) => !record.colId || (index > 0 && records[index - 1].colId.localeCompare(record.colId) >= 0))) {
    throw new Error('AviList COL shard contents do not match its range descriptor')
  }
  return { collection, record: records.find((record) => record.colId === colId) ?? null }
}

async function loadIndexedPackageItisRecord(
  packageId: string,
  collectionId: import('./types').RuntimeItisNomenclatureCollectionId,
  colUsageId: string,
): Promise<{
  collection: import('./types').RuntimeItisNomenclatureCollection
  record: import('./types').ItisNomenclatureRecord | null
}> {
  const manifest = await loadPackageManifest(packageId)
  const collection = manifest.nomenclatureCollections?.find((candidate): candidate is import('./types').RuntimeItisNomenclatureCollection => (
    candidate.id === collectionId
    && candidate.provider === 'Integrated Taxonomic Information System'
  ))
  if (!collection || collection.packageId !== packageId) {
    throw new Error(`Runtime package ${packageId} does not publish its ITIS collection`)
  }
  if (!collection.delivery.completeRows || collection.delivery.profile !== 'native-full') {
    throw new Error('ITIS row-level records are available in the full Android/iOS data profile; Web publishes the verified coverage summary only')
  }
  const file = selectWfoColShard(collection.files, colUsageId)
  const records = await loadRuntimeFile<import('./types').ItisNomenclatureRecord[]>(file)
  if (records.length !== file.records || records[0]?.colUsageId !== file.minColId || records.at(-1)?.colUsageId !== file.maxColId
    || records.some((record, index) => !record.colUsageId || (index > 0 && records[index - 1].colUsageId.localeCompare(record.colUsageId) >= 0))) {
    throw new Error('ITIS COL shard contents do not match its range descriptor')
  }
  return { collection, record: records.find((record) => record.colUsageId === colUsageId) ?? null }
}

export async function loadPackageItisRecord(
  packageId: string,
  colUsageId: string,
  collectionId: import('./types').RuntimeItisNomenclatureCollectionId = 'itis-2026-08-26-tsn-crosswalk',
): Promise<{
  collection: import('./types').RuntimeItisNomenclatureCollection
  record: import('./types').ItisNomenclatureRecord | null
}> {
  return loadIndexedPackageItisRecord(packageId, collectionId, colUsageId)
}

const packageItisContracts: Record<import('./types').RuntimeItisPackageScope, {
  packageId: 'other-animals' | 'molluscs-brachiopods' | 'sponges-cnidarians' | 'echinoderms' | 'crustaceans-insects' | 'trilobites-chelicerates' | 'turtles-lepidosaurs' | 'crocodylomorphs-birds' | 'perissodactyla' | 'cetartiodactyla' | 'primates' | 'carnivora' | 'other-mammals' | 'actinopterygii' | 'chondrichthyes' | 'early-fishes' | 'tetrapod-transition' | 'amphibia'
  collectionId: import('./types').RuntimeItisNomenclatureCollectionId
  total: number
  accepted: number
  redirects: number
  ambiguous: number
  unmatched: number
  upstreamOnly: number
  canonicalFileCount: number
}> = {
  'mollusca-brachiopoda': { packageId: 'molluscs-brachiopods', collectionId: 'itis-mollusca-brachiopoda-tsn-crosswalk', total: 159801, accepted: 7219, redirects: 256, ambiguous: 16, unmatched: 152310, upstreamOnly: 4289, canonicalFileCount: 60 },
  'porifera-cnidaria': { packageId: 'sponges-cnidarians', collectionId: 'itis-porifera-cnidaria-tsn-crosswalk', total: 30521, accepted: 4242, redirects: 50, ambiguous: 3, unmatched: 26226, upstreamOnly: 2218, canonicalFileCount: 6 },
  echinodermata: { packageId: 'echinoderms', collectionId: 'itis-echinodermata-tsn-crosswalk', total: 11891, accepted: 3692, redirects: 51, ambiguous: 9, unmatched: 8139, upstreamOnly: 278, canonicalFileCount: 3 },
  crustacea: { packageId: 'crustaceans-insects', collectionId: 'itis-crustacea-tsn-crosswalk', total: 80890, accepted: 26395, redirects: 115, ambiguous: 38, unmatched: 54342, upstreamOnly: 5991, canonicalFileCount: 41 },
  insecta: { packageId: 'crustaceans-insects', collectionId: 'itis-insecta-tsn-crosswalk', total: 941223, accepted: 176406, redirects: 2887, ambiguous: 692, unmatched: 761238, upstreamOnly: 27357, canonicalFileCount: 100 },
  myriapoda: { packageId: 'crustaceans-insects', collectionId: 'itis-myriapoda-tsn-crosswalk', total: 17351, accepted: 5904, redirects: 58, ambiguous: 17, unmatched: 11372, upstreamOnly: 544, canonicalFileCount: 4 },
  chelicerata: { packageId: 'trilobites-chelicerates', collectionId: 'itis-chelicerata-tsn-crosswalk', total: 99511, accepted: 74948, redirects: 146, ambiguous: 141, unmatched: 24276, upstreamOnly: 5714, canonicalFileCount: 17 },
  'reptilia-non-crocodylia': { packageId: 'turtles-lepidosaurs', collectionId: 'itis-reptilia-tsn-crosswalk', total: 12622, accepted: 9805, redirects: 70, ambiguous: 3, unmatched: 2744, upstreamOnly: 655, canonicalFileCount: 10 },
  crocodylia: { packageId: 'crocodylomorphs-birds', collectionId: 'itis-crocodylia-tsn-crosswalk', total: 27, accepted: 26, redirects: 1, ambiguous: 0, unmatched: 0, upstreamOnly: 0, canonicalFileCount: 1 },
  perissodactyla: { packageId: 'perissodactyla', collectionId: 'itis-perissodactyla-tsn-crosswalk', total: 19, accepted: 19, redirects: 0, ambiguous: 0, unmatched: 0, upstreamOnly: 0, canonicalFileCount: 1 },
  cetartiodactyla: { packageId: 'cetartiodactyla', collectionId: 'itis-cetartiodactyla-tsn-crosswalk', total: 503, accepted: 502, redirects: 0, ambiguous: 1, unmatched: 0, upstreamOnly: 0, canonicalFileCount: 1 },
  primates: { packageId: 'primates', collectionId: 'itis-primates-tsn-crosswalk', total: 530, accepted: 530, redirects: 0, ambiguous: 0, unmatched: 0, upstreamOnly: 0, canonicalFileCount: 1 },
  carnivora: { packageId: 'carnivora', collectionId: 'itis-carnivora-tsn-crosswalk', total: 310, accepted: 310, redirects: 0, ambiguous: 0, unmatched: 0, upstreamOnly: 0, canonicalFileCount: 1 },
  'other-mammals': { packageId: 'other-mammals', collectionId: 'itis-other-mammals-tsn-crosswalk', total: 5099, accepted: 5099, redirects: 0, ambiguous: 0, unmatched: 0, upstreamOnly: 3, canonicalFileCount: 5 },
  actinopterygii: { packageId: 'actinopterygii', collectionId: 'itis-actinopterygii-tsn-crosswalk', total: 35928, accepted: 24266, redirects: 356, ambiguous: 14, unmatched: 11292, upstreamOnly: 3732, canonicalFileCount: 24 },
  chondrichthyes: { packageId: 'chondrichthyes', collectionId: 'itis-chondrichthyes-tsn-crosswalk', total: 1359, accepted: 769, redirects: 18, ambiguous: 1, unmatched: 571, upstreamOnly: 183, canonicalFileCount: 2 },
  'agnatha-myxini': { packageId: 'early-fishes', collectionId: 'itis-agnatha-myxini-tsn-crosswalk', total: 141, accepted: 92, redirects: 3, ambiguous: 0, unmatched: 46, upstreamOnly: 17, canonicalFileCount: 2 },
  sarcopterygii: { packageId: 'tetrapod-transition', collectionId: 'itis-sarcopterygii-tsn-crosswalk', total: 8, accepted: 8, redirects: 0, ambiguous: 0, unmatched: 0, upstreamOnly: 0, canonicalFileCount: 1 },
  amphibia: { packageId: 'amphibia', collectionId: 'itis-2026-08-26-tsn-crosswalk', total: 8923, accepted: 8909, redirects: 0, ambiguous: 14, unmatched: 0, upstreamOnly: 8, canonicalFileCount: 8 },
  'collembola-protura': { packageId: 'crustaceans-insects', collectionId: 'itis-collembola-protura-tsn-crosswalk', total: 9668, accepted: 2075, redirects: 25, ambiguous: 4, unmatched: 7564, upstreamOnly: 411, canonicalFileCount: 3 },
}

export async function loadPackageItisAuthorityRecord(
  scope: import('./types').RuntimeItisPackageScope,
  colUsageId: string,
): Promise<{
  collection: import('./types').RuntimeItisNomenclatureCollection
  record: import('./types').ItisNomenclatureRecord | null
}> {
  const expected = packageItisContracts[scope]
  const result = await loadIndexedPackageItisRecord(expected.packageId, expected.collectionId, colUsageId)
  const { collection } = result
  if (collection.packageId !== expected.packageId
    || collection.counts.total !== expected.total
    || collection.counts.accepted !== expected.accepted
    || collection.counts.synonymCurrentNameRedirect !== expected.redirects
    || collection.counts.ambiguous !== expected.ambiguous
    || collection.counts.unmatched !== expected.unmatched
    || collection.counts.itisUpstreamOnly !== expected.upstreamOnly
    || collection.delivery.canonicalFileCount !== expected.canonicalFileCount
    || collection.canonicalFileInventory.length !== expected.canonicalFileCount) {
    throw new Error(`ITIS ${scope} authority collection does not match its pinned runtime contract`)
  }
  return result
}

async function packageAuthorityArchiveCollection(
  packageId: string,
  collectionId: import('./types').AuthorityArchiveCollectionId,
) {
  if (packageId === 'other-animals' || packageId === 'protists-chromists') {
    const catalogueManifest = await loadCatalogueResourcePackManifest(packageId)
    const collection = catalogueManifest.extensions?.find((candidate): candidate is import('./types').CatalogueAuthorityArchiveResourcePackExtension => (
      candidate.id === collectionId && candidate.recordType === 'release-pinned-authority-archive-crosswalk'
    ))
    if (!collection || collection.packageId !== packageId) throw new Error(`Catalogue resource pack ${packageId} does not publish authority archive ${collectionId}`)
    return collection
  }
  const manifest = await loadPackageManifest(packageId)
  const collection = manifest.nomenclatureCollections?.find((candidate): candidate is import('./types').RuntimeAuthorityArchiveCollection => (
    candidate.id === collectionId && candidate.recordType === 'release-pinned-authority-archive-crosswalk'
  ))
  if (!collection || collection.packageId !== packageId) throw new Error(`Runtime package ${packageId} does not publish authority archive ${collectionId}`)
  return collection
}

export async function loadPackageAuthorityArchiveRecord(
  packageId: string,
  collectionId: import('./types').AuthorityArchiveCollectionId,
  colId: string,
): Promise<{ collection: import('./types').RuntimeAuthorityArchiveCollection; record: import('./types').AuthorityArchiveRecord | null }> {
  const collection = await packageAuthorityArchiveCollection(packageId, collectionId)
  // Web deliberately publishes metadata without row shards. This is not an unmatched taxon.
  if (!collection.delivery.completeRows || collection.delivery.profile !== 'native-full') return { collection, record: null }
  const file = collection.files.find((candidate) => candidate.minColId !== undefined && candidate.maxColId !== undefined
    && candidate.minColId <= colId && candidate.maxColId >= colId)
  if (!file) return { collection, record: null }
  const records = await loadRuntimeFile<import('./types').AuthorityArchiveRecord[]>(file)
  if (records.length !== file.records || records[0]?.colId !== file.minColId || records.at(-1)?.colId !== file.maxColId) {
    throw new Error(`Authority archive shard does not match its COL range: ${collectionId}`)
  }
  return { collection, record: records.find((record) => record.colId === colId) ?? null }
}

export async function loadPackageAuthorityArchiveSourceOnly(
  packageId: string,
  collectionId: import('./types').AuthorityArchiveCollectionId,
  fileIndex: number,
): Promise<import('./types').AuthorityArchiveRecord[]> {
  const collection = await packageAuthorityArchiveCollection(packageId, collectionId)
  if (!collection.delivery.completeRows || collection.delivery.profile !== 'native-full') {
    throw new Error('Source-only records require the full Android/iOS data profile')
  }
  const file = collection.upstreamOnlyFiles[fileIndex]
  if (!file) throw new Error('Source-only file is not present in this collection')
  const records = await loadRuntimeFile<import('./types').AuthorityArchiveRecord[]>(file)
  if (records.length !== file.records || records.some((record) => record.colId !== null || !['upstream-only', 'source-only'].includes(record.status))) {
    throw new Error('Source-only records do not match their independent partition')
  }
  return records
}

export async function loadPackageForEntity(entityId: string): Promise<RuntimePackageManifest | null> {
  const registry = await loadPackageRegistry()
  const packageId = registry.entityToPackage[entityId]
  if (!packageId) return null
  const manifest = await loadPackageManifest(packageId)
  const searchFile = manifest.files.search
  if (searchFile && !loadedPackageSearch.has(packageId)) {
    const entries = await loadRuntimeFile<RuntimeSearchEntry[]>(searchFile)
    loadedPackageSearch.set(packageId, entries)
  }
  return manifest
}

export async function loadMediaForEntity(entityId: string): Promise<RuntimeMediaAsset[]> {
  const manifest = await loadPackageForEntity(entityId)
  const mediaFile = manifest?.files.media
  if (!mediaFile) return []
  const media = await loadRuntimeFile<RuntimeMediaAsset[]>(mediaFile)
  return media.filter((asset) => asset.taxonId === entityId)
}

export async function loadOccurrenceManifest(): Promise<OccurrenceRuntimeManifest> {
  const current = await loadCurrentManifest()
  const manifest = await loadRuntimeFile<OccurrenceRuntimeManifest>(current.occurrences.manifest)
  if (manifest.version !== current.datasetVersion) {
    throw new Error(`Occurrence manifest does not belong to dataset ${current.datasetVersion}`)
  }
  return manifest
}

export async function loadMapManifest(): Promise<RuntimeMapManifest> {
  const current = await loadCurrentManifest()
  const manifest = await loadRuntimeFile<RuntimeMapManifest>(current.maps.manifest)
  if (manifest.version !== current.datasetVersion) {
    throw new Error(`Map manifest does not belong to dataset ${current.datasetVersion}`)
  }
  return manifest
}

export async function loadCaoObservationDataset(
  datasetId: import('../types').CaoObservationDatasetId,
): Promise<{
  manifest: RuntimeMapManifest
  descriptor: import('./types').RuntimeMapObservationDataset
  collection: import('../types').CaoObservationCollection
}> {
  const manifest = await loadMapManifest()
  const descriptor = manifest.observations?.datasets[datasetId]
  if (!descriptor) throw new Error(`CAO2024 observation dataset ${datasetId} is not published`)
  if (!descriptor.files.length) throw new Error(`CAO2024 observation dataset ${datasetId} has no published shards`)
  const shards = await Promise.all(descriptor.files.map((file) => loadMapRuntimeFile<import('../types').CaoObservationCollection>(file)))
  for (const [index, shard] of shards.entries()) {
    if (shard.schemaVersion !== 1 || shard.datasetId !== datasetId || shard.model !== 'CAO2024' || shard.modelVersion !== shards[0].modelVersion) {
      throw new Error(`CAO2024 observation dataset ${datasetId} shard ${index + 1} has an invalid identity or schema`)
    }
    if (!Array.isArray(shard.records) || shard.records.length !== descriptor.files[index].records) {
      throw new Error(`CAO2024 observation dataset ${datasetId} shard ${index + 1} does not match its published record count`)
    }
  }
  const collection: import('../types').CaoObservationCollection = {
    schemaVersion: 1,
    model: shards[0].model,
    modelVersion: shards[0].modelVersion,
    datasetId,
    bucket: shards.length === 1 ? shards[0].bucket : 'merged',
    records: shards.flatMap((shard) => shard.records),
  }
  if (collection.records.length !== descriptor.records) {
    throw new Error(`CAO2024 observation dataset ${datasetId} does not match its published record count`)
  }
  return { manifest, descriptor, collection }
}

export async function loadCatalogueManifest(): Promise<CatalogueRuntimeManifest> {
  const current = await loadCurrentManifest()
  const manifest = await loadRuntimeFile<CatalogueRuntimeManifest>(current.catalogue.manifest)
  if (manifest.releaseAlias !== current.catalogue.releaseAlias || manifest.counts.acceptedSpecies !== current.catalogue.acceptedSpecies) {
    throw new Error('Catalogue of Life manifest does not match the current runtime release')
  }
  return manifest
}

export async function loadCatalogueSourceChecklists(): Promise<CatalogueSourceChecklist[]> {
  const manifest = await loadCatalogueManifest()
  return loadRuntimeFile<CatalogueSourceChecklist[]>(manifest.sourceChecklists)
}

export async function loadCatalogueSpeciesOwnership(): Promise<CatalogueSpeciesOwnership> {
  const manifest = await loadCatalogueManifest()
  const ownership = await loadRuntimeFile<CatalogueSpeciesOwnership>(manifest.ownership)
  if (ownership.source.releaseAlias !== manifest.releaseAlias
    || ownership.source.acceptedSpecies !== manifest.counts.acceptedSpecies
    || ownership.proof.assignedSpecies !== manifest.ownership.assignedSpecies) {
    throw new Error('Catalogue package ownership does not match the pinned registry release')
  }
  return ownership
}

export async function loadCatalogueResourcePackManifest(packageId: string): Promise<import('./types').CatalogueResourcePackManifest> {
  const catalogue = await loadCatalogueManifest()
  const file = catalogue.resourcePacks?.manifests[packageId]
  if (!file) throw new Error(`Unknown catalogue nomenclatural resource pack: ${packageId}`)
  const manifest = await loadRuntimeFile<import('./types').CatalogueResourcePackManifest>(file)
  if (manifest.packageId !== packageId
    || manifest.packageType !== 'static-nomenclatural-resource-pack'
    || manifest.version !== (await loadCurrentManifest()).datasetVersion
    || manifest.source.releaseAlias !== catalogue.releaseAlias
    || manifest.acceptedSpeciesCount !== file.acceptedSpeciesCount) {
    throw new Error(`Catalogue resource pack ${packageId} does not match the current release`)
  }
  return manifest
}

export async function loadCatalogueResourcePack(packageId: string): Promise<{
  manifest: import('./types').CatalogueResourcePackManifest
  records: import('./types').CatalogueNomenclaturalRecord[]
}> {
  const manifest = await loadCatalogueResourcePackManifest(packageId)
  const shards = await Promise.all(manifest.files.map((file) => loadRuntimeFile<import('./types').CatalogueNomenclaturalRecord[]>(file)))
  for (const [index, records] of shards.entries()) {
    if (records.length !== manifest.files[index].records) {
      throw new Error(`Catalogue resource pack ${packageId} shard ${index + 1} does not match its published record count`)
    }
  }
  const records = shards.flat()
  if (records.length !== manifest.acceptedSpeciesCount) {
    throw new Error(`Catalogue resource pack ${packageId} does not match its published species count`)
  }
  return { manifest, records }
}

export async function loadCatalogueLpsnIdentifiers(): Promise<{
  extension: import('./types').CatalogueLpsnResourcePackExtension
  records: import('./types').CatalogueLpsnIdentifierRecord[]
}> {
  const manifest = await loadCatalogueResourcePackManifest('archaea')
  const extension = manifest.extensions?.find((candidate): candidate is import('./types').CatalogueLpsnResourcePackExtension => candidate.id === 'lpsn-identifiers')
  if (!extension
    || extension.provider !== 'LPSN'
    || extension.recordType !== 'external-name-identifier-crosswalk'
    || extension.counts.eligible !== manifest.acceptedSpeciesCount
    || extension.counts.withheld !== 0) {
    throw new Error('Archaea LPSN identifier extension does not match the current nomenclatural pack')
  }
  const shards = await Promise.all(extension.files.map((file) => loadRuntimeFile<import('./types').CatalogueLpsnIdentifierRecord[]>(file)))
  for (const [index, records] of shards.entries()) {
    if (records.length !== extension.files[index].records) {
      throw new Error(`Archaea LPSN identifier shard ${index + 1} does not match its published record count`)
    }
  }
  const records = shards.flat()
  if (records.length !== extension.counts.resolved) {
    throw new Error('Archaea LPSN identifiers do not match the published resolved count')
  }
  return { extension, records }
}

export async function loadCatalogueLpsnIdentifier(colId: string): Promise<import('./types').CatalogueLpsnIdentifierRecord | null> {
  const { records } = await loadCatalogueLpsnIdentifiers()
  return records.find((record) => record.colId === colId) ?? null
}

export async function loadCatalogueIctvVirusMetadata(): Promise<{
  extension: import('./types').CatalogueIctvResourcePackExtension
  records: import('./types').CatalogueIctvVirusRecord[]
}> {
  const manifest = await loadCatalogueResourcePackManifest('viruses')
  const extension = manifest.extensions?.find((candidate): candidate is import('./types').CatalogueIctvResourcePackExtension => candidate.id === 'ictv-virus-metadata')
  if (!extension
    || extension.provider !== 'ICTV'
    || extension.recordType !== 'official-taxonomy-and-virus-metadata-crosswalk'
    || extension.counts.acceptedSpecies !== manifest.acceptedSpeciesCount
    || extension.counts.accepted !== manifest.acceptedSpeciesCount
    || extension.counts.redirect !== 0
    || extension.counts.ambiguous !== 0
    || extension.counts.unmatched !== 0
    || extension.counts.withheld !== 0
    || extension.counts.officialSpecies !== manifest.acceptedSpeciesCount + extension.counts.upstreamOnly) {
    throw new Error('Viruses ICTV MSL/VMR extension does not match the current nomenclatural pack')
  }
  const shards = await Promise.all(extension.files.map((file) => loadRuntimeFile<import('./types').CatalogueIctvVirusRecord[]>(file)))
  for (const [index, records] of shards.entries()) {
    if (records.length !== extension.files[index].records) {
      throw new Error(`Viruses ICTV MSL/VMR shard ${index + 1} does not match its published record count`)
    }
  }
  const records = shards.flat()
  if (records.length !== extension.counts.officialSpecies
    || records.filter((record) => record.mappingStatus === 'accepted').length !== extension.counts.accepted
    || records.filter((record) => record.mappingStatus === 'upstream-only').length !== extension.counts.upstreamOnly) {
    throw new Error('Viruses ICTV MSL/VMR records do not match the published mapping counts')
  }
  return { extension, records }
}

export async function loadCatalogueIctvVirusRecord(colId: string): Promise<import('./types').CatalogueIctvVirusRecord | null> {
  const { records } = await loadCatalogueIctvVirusMetadata()
  return records.find((record) => record.colId === colId) ?? null
}

function compareCodeUnits(left: string, right: string): number {
  return left < right ? -1 : left > right ? 1 : 0
}

function selectAuthorityShard(files: import('./types').CatalogueResourcePackPayloadFile[], colId: string, authorityLabel: string): import('./types').CatalogueResourcePackPayloadFile {
  let previousMax: string | null = null
  let selected: import('./types').CatalogueResourcePackPayloadFile | null = null
  for (const file of files) {
    if (!file.minColId || !file.maxColId || compareCodeUnits(file.minColId, file.maxColId) > 0
      || (previousMax !== null && compareCodeUnits(previousMax, file.minColId) >= 0)) {
      throw new Error(`${authorityLabel} authority shard ranges are incomplete, unordered, or overlapping`)
    }
    if (compareCodeUnits(file.minColId, colId) <= 0 && compareCodeUnits(colId, file.maxColId) <= 0) {
      if (selected) throw new Error(`Multiple ${authorityLabel} authority shard ranges cover ${colId}`)
      selected = file
    }
    previousMax = file.maxColId
  }
  if (!selected) throw new Error(`${authorityLabel} authority shard range does not cover ${colId}`)
  return selected
}

export async function loadCatalogueIndexFungorumIdentifier(colId: string): Promise<{
  extension: import('./types').CatalogueIndexFungorumResourcePackExtension
  record: import('./types').CatalogueIndexFungorumIdentifierRecord
} | null> {
  const manifest = await loadCatalogueResourcePackManifest('fungi')
  const extension = manifest.extensions?.find((candidate): candidate is import('./types').CatalogueIndexFungorumResourcePackExtension => candidate.id === 'index-fungorum-identifiers')
  if (!extension || extension.provider !== 'Species Fungorum / Index Fungorum'
    || extension.recordType !== 'external-name-identifier-crosswalk'
    || extension.integration.lookup.strategy !== 'lexicographic-colId-range-v1'
    || extension.counts.acceptedSpecies !== manifest.acceptedSpeciesCount
    || extension.counts.accepted !== manifest.acceptedSpeciesCount
    || extension.counts.eligible !== manifest.acceptedSpeciesCount
    || extension.counts.redirect !== 0 || extension.counts.ambiguous !== 0
    || extension.counts.unmatched !== 0 || extension.counts.withheld !== 0
    || extension.counts.upstreamOnly !== 201
    || extension.sourceComposition['2073'] !== 155841 || extension.sourceComposition['1148'] !== 1203
    || extension.files.reduce((sum, file) => sum + file.records, 0) !== manifest.acceptedSpeciesCount) {
    throw new Error('Fungi authority extension does not match the current nomenclatural pack')
  }
  const file = selectAuthorityShard(extension.files, colId, 'Fungi')
  const records = await loadRuntimeFile<import('./types').CatalogueIndexFungorumIdentifierRecord[]>(file)
  if (records.length !== file.records || records[0]?.colId !== file.minColId || records.at(-1)?.colId !== file.maxColId
    || records.some((record, index) => record.status !== 'accepted'
      || !/^(2073|1148)$/.test(record.sourceDatasetId)
      || !/^\d+$/.test(record.indexFungorumId)
      || record.indexFungorumUrl !== `https://www.indexfungorum.org/Names/NamesRecord.asp?RecordID=${record.indexFungorumId}`
      || (index > 0 && compareCodeUnits(records[index - 1].colId, record.colId) >= 0))) {
    throw new Error('Fungi authority shard contents do not match its range descriptor')
  }
  const record = records.find((candidate) => candidate.colId === colId)
  return record ? { extension, record } : null
}

export async function loadCatalogueForaminiferaAuthorityRecord(colId: string): Promise<{
  extension: import('./types').CatalogueForaminiferaResourcePackExtension
  record: import('./types').CatalogueForaminiferaAuthorityRecord
} | null> {
  const manifest = await loadCatalogueResourcePackManifest('protists-chromists')
  const extension = manifest.extensions?.find((candidate): candidate is import('./types').CatalogueForaminiferaResourcePackExtension => candidate.id === 'foraminifera-wfd-identifiers')
  if (!extension || extension.provider !== 'World Foraminifera Database (WoRMS) through ChecklistBank'
    || extension.recordType !== 'external-name-identifier-crosswalk'
    || extension.source.license !== 'CC-BY-4.0'
    || extension.integration.lookup.strategy !== 'lexicographic-colId-range-v1'
    || extension.counts.eligible !== 47975 || extension.counts.resolved !== 47975
    || extension.counts.accepted !== 47975 || extension.counts.withheld !== 0
    || extension.delivery.canonicalFileCount !== 5) {
    throw new Error('Foraminifera WFD authority extension does not match the pinned COL26.8 resource pack')
  }
  if (!extension.delivery.completeRows || extension.delivery.profile !== 'native-full') {
    throw new Error('Foraminifera row-level records are available in the full Android/iOS data profile; Web publishes the verified coverage summary only')
  }
  const file = selectAuthorityShard(extension.files, colId, 'Foraminifera')
  const records = await loadRuntimeFile<import('./types').CatalogueForaminiferaAuthorityRecord[]>(file)
  if (records.length !== file.records || records[0]?.colId !== file.minColId || records.at(-1)?.colId !== file.maxColId
    || records.some((record, index) => record.status !== 'accepted'
      || record.sourceDatasetId !== '1157'
      || !/^\d+$/.test(record.sourceAphiaId)
      || record.sourceUrl !== `https://www.marinespecies.org/foraminifera/aphia.php?p=taxdetails&id=${record.sourceAphiaId}`
      || (index > 0 && compareCodeUnits(records[index - 1].colId, record.colId) >= 0))) {
    throw new Error('Foraminifera WFD authority shard contents do not match its range descriptor')
  }
  const record = records.find((candidate) => candidate.colId === colId)
  return record ? { extension, record } : null
}

const itisOtherAnimalsContracts: Record<import('./types').CatalogueItisOtherAnimalsScope, {
  eligible: number
  accepted: number
  redirects: number
  ambiguous: number
  unmatched: number
  upstreamOnly: number
  nonApplicable: number
  canonicalFileCount: number
}> = {
  nematoda: { eligible: 19604, accepted: 1899, redirects: 36, ambiguous: 1, unmatched: 17668, upstreamOnly: 1245, nonApplicable: 79557, canonicalFileCount: 4 },
  annelida: { eligible: 18982, accepted: 4301, redirects: 122, ambiguous: 1, unmatched: 14558, upstreamOnly: 5092, nonApplicable: 80179, canonicalFileCount: 4 },
  platyhelminthes: { eligible: 27007, accepted: 7393, redirects: 239, ambiguous: 23, unmatched: 19352, upstreamOnly: 1245, nonApplicable: 72154, canonicalFileCount: 15 },
  rotifera: { eligible: 2467, accepted: 701, redirects: 4, ambiguous: 0, unmatched: 1762, upstreamOnly: 195, nonApplicable: 96694, canonicalFileCount: 3 },
  bryozoa: { eligible: 20367, accepted: 655, redirects: 15, ambiguous: 0, unmatched: 19697, upstreamOnly: 387, nonApplicable: 78794, canonicalFileCount: 3 },
  nemertea: { eligible: 1364, accepted: 142, redirects: 1, ambiguous: 0, unmatched: 1221, upstreamOnly: 52, nonApplicable: 97797, canonicalFileCount: 2 },
  'tunicata-cephalochordata': { eligible: 3176, accepted: 366, redirects: 8, ambiguous: 0, unmatched: 2802, upstreamOnly: 66, nonApplicable: 95985, canonicalFileCount: 2 },
  acanthocephala: { eligible: 1325, accepted: 1320, redirects: 0, ambiguous: 5, unmatched: 0, upstreamOnly: 5, nonApplicable: 97836, canonicalFileCount: 3 },
  entoprocta: { eligible: 170, accepted: 170, redirects: 0, ambiguous: 0, unmatched: 0, upstreamOnly: 1, nonApplicable: 98991, canonicalFileCount: 2 },
  tardigrada: { eligible: 1454, accepted: 1454, redirects: 0, ambiguous: 0, unmatched: 0, upstreamOnly: 7, nonApplicable: 97707, canonicalFileCount: 3 },
  chaetognatha: { eligible: 132, accepted: 92, redirects: 0, ambiguous: 0, unmatched: 40, upstreamOnly: 24, nonApplicable: 99029, canonicalFileCount: 2 },
  ctenophora: { eligible: 197, accepted: 58, redirects: 0, ambiguous: 0, unmatched: 139, upstreamOnly: 7, nonApplicable: 98964, canonicalFileCount: 2 },
  kinorhyncha: { eligible: 362, accepted: 91, redirects: 1, ambiguous: 0, unmatched: 270, upstreamOnly: 58, nonApplicable: 98799, canonicalFileCount: 2 },
  gastrotricha: { eligible: 903, accepted: 574, redirects: 8, ambiguous: 1, unmatched: 320, upstreamOnly: 94, nonApplicable: 98258, canonicalFileCount: 2 },
  priapulida: { eligible: 23, accepted: 19, redirects: 0, ambiguous: 0, unmatched: 4, upstreamOnly: 0, nonApplicable: 99138, canonicalFileCount: 1 },
  onychophora: { eligible: 235, accepted: 235, redirects: 0, ambiguous: 0, unmatched: 0, upstreamOnly: 0, nonApplicable: 98926, canonicalFileCount: 1 },
  hemichordata: { eligible: 132, accepted: 132, redirects: 0, ambiguous: 0, unmatched: 0, upstreamOnly: 7, nonApplicable: 99029, canonicalFileCount: 2 },
  sipuncula: { eligible: 146, accepted: 146, redirects: 0, ambiguous: 0, unmatched: 0, upstreamOnly: 59, nonApplicable: 99015, canonicalFileCount: 2 },
  nematomorpha: { eligible: 356, accepted: 187, redirects: 6, ambiguous: 0, unmatched: 163, upstreamOnly: 48, nonApplicable: 98805, canonicalFileCount: 2 },
  phoronida: { eligible: 19, accepted: 11, redirects: 8, ambiguous: 0, unmatched: 0, upstreamOnly: 0, nonApplicable: 99142, canonicalFileCount: 1 },
  gnathostomulida: { eligible: 100, accepted: 90, redirects: 0, ambiguous: 0, unmatched: 10, upstreamOnly: 4, nonApplicable: 99061, canonicalFileCount: 2 },
  loricifera: { eligible: 46, accepted: 22, redirects: 0, ambiguous: 0, unmatched: 24, upstreamOnly: 0, nonApplicable: 99115, canonicalFileCount: 1 },
  micrognathozoa: { eligible: 1, accepted: 1, redirects: 0, ambiguous: 0, unmatched: 0, upstreamOnly: 0, nonApplicable: 99160, canonicalFileCount: 1 },
  cycliophora: { eligible: 2, accepted: 2, redirects: 0, ambiguous: 0, unmatched: 0, upstreamOnly: 0, nonApplicable: 99159, canonicalFileCount: 1 },
  placozoa: { eligible: 4, accepted: 4, redirects: 0, ambiguous: 0, unmatched: 0, upstreamOnly: 0, nonApplicable: 99157, canonicalFileCount: 1 },
  xenacoelomorpha: { eligible: 441, accepted: 370, redirects: 6, ambiguous: 1, unmatched: 64, upstreamOnly: 58, nonApplicable: 98720, canonicalFileCount: 2 },
  orthonectida: { eligible: 24, accepted: 22, redirects: 0, ambiguous: 0, unmatched: 2, upstreamOnly: 3, nonApplicable: 99137, canonicalFileCount: 2 },
  dicyemida: { eligible: 119, accepted: 85, redirects: 0, ambiguous: 0, unmatched: 34, upstreamOnly: 7, nonApplicable: 99042, canonicalFileCount: 2 },
}

export async function loadCatalogueItisOtherAnimalsRecord(
  scope: import('./types').CatalogueItisOtherAnimalsScope,
  colUsageId: string,
): Promise<{
  extension: import('./types').CatalogueItisOtherAnimalsResourcePackExtension
  record: import('./types').ItisNomenclatureRecord
} | null> {
  const expected = itisOtherAnimalsContracts[scope]
  const manifest = await loadCatalogueResourcePackManifest('other-animals')
  const expectedId = `itis-${scope}-tsn-crosswalk`
  const extension = manifest.extensions?.find((candidate): candidate is import('./types').CatalogueItisOtherAnimalsResourcePackExtension => candidate.id === expectedId)
  if (!extension || extension.provider !== 'Integrated Taxonomic Information System'
    || extension.recordType !== 'release-pinned-exact-nomenclatural-crosswalk'
    || extension.source.license !== 'CC0-1.0'
    || extension.integration.lookup.strategy !== 'lexicographic-colId-range-v1'
    || extension.counts.eligible !== expected.eligible
    || extension.counts.accepted !== expected.accepted
    || extension.counts.redirects !== expected.redirects
    || extension.counts.ambiguous !== expected.ambiguous
    || extension.counts.unmatched !== expected.unmatched
    || extension.counts.upstreamOnly !== expected.upstreamOnly
    || extension.counts.nonApplicable !== expected.nonApplicable
    || extension.counts.withheld !== 0
    || extension.counts.records !== expected.eligible + expected.upstreamOnly
    || extension.delivery.canonicalFileCount !== expected.canonicalFileCount
    || extension.canonicalFileInventory.length !== expected.canonicalFileCount) {
    throw new Error(`ITIS ${scope} authority extension does not match the pinned COL26.8 resource pack`)
  }
  if (!extension.delivery.completeRows || extension.delivery.profile !== 'native-full') {
    throw new Error(`ITIS ${scope} row-level records are available in the full Android/iOS data profile; Web publishes the verified coverage summary only`)
  }
  const rangeFiles = extension.files.filter((file) => file.minColId && file.maxColId)
  const expectedUpstreamFiles = expected.upstreamOnly > 0 ? 1 : 0
  if (rangeFiles.length !== expected.canonicalFileCount - expectedUpstreamFiles
    || rangeFiles.reduce((sum, file) => sum + file.records, 0) !== expected.eligible) {
    throw new Error(`ITIS ${scope} authority extension does not publish its complete COL partition`)
  }
  const file = selectAuthorityShard(rangeFiles, colUsageId, `ITIS ${scope}`)
  const records = await loadRuntimeFile<import('./types').ItisNomenclatureRecord[]>(file)
  const allowedStatuses = new Set<import('./types').ItisMappingStatus>(['accepted', 'synonym-current-name-redirect', 'ambiguous', 'unmatched'])
  if (records.length !== file.records || records[0]?.colUsageId !== file.minColId || records.at(-1)?.colUsageId !== file.maxColId
    || records.some((record, index) => !allowedStatuses.has(record.status)
      || (index > 0 && compareCodeUnits(records[index - 1].colUsageId, record.colUsageId) >= 0))) {
    throw new Error(`ITIS ${scope} authority shard contents do not match its range descriptor`)
  }
  const record = records.find((candidate) => candidate.colUsageId === colUsageId)
  return record ? { extension, record } : null
}

const itisProtistsContracts: Record<import('./types').CatalogueItisProtistsScope, {
  eligible: number
  accepted: number
  redirects: number
  ambiguous: number
  unmatched: number
  upstreamOnly: number
  nonApplicable: number
  canonicalFileCount: number
}> = {
  ciliophora: { eligible: 8507, accepted: 246, redirects: 6, ambiguous: 0, unmatched: 8255, upstreamOnly: 158, nonApplicable: 53011, canonicalFileCount: 4 },
  apicomplexa: { eligible: 21, accepted: 21, redirects: 0, ambiguous: 0, unmatched: 0, upstreamOnly: 0, nonApplicable: 61497, canonicalFileCount: 1 },
  dinoflagellata: { eligible: 259, accepted: 60, redirects: 2, ambiguous: 0, unmatched: 197, upstreamOnly: 851, nonApplicable: 61259, canonicalFileCount: 2 },
  euglenozoa: { eligible: 0, accepted: 0, redirects: 0, ambiguous: 0, unmatched: 0, upstreamOnly: 276, nonApplicable: 61518, canonicalFileCount: 1 },
  cercozoa: { eligible: 52, accepted: 0, redirects: 0, ambiguous: 0, unmatched: 52, upstreamOnly: 0, nonApplicable: 61466, canonicalFileCount: 1 },
  haptophyta: { eligible: 0, accepted: 0, redirects: 0, ambiguous: 0, unmatched: 0, upstreamOnly: 90, nonApplicable: 61518, canonicalFileCount: 1 },
  ochrophyta: { eligible: 1101, accepted: 1101, redirects: 0, ambiguous: 0, unmatched: 0, upstreamOnly: 2298, nonApplicable: 60417, canonicalFileCount: 2 },
  amoebozoa: { eligible: 1337, accepted: 0, redirects: 0, ambiguous: 0, unmatched: 1337, upstreamOnly: 0, nonApplicable: 60181, canonicalFileCount: 1 },
  rhodophyta: { eligible: 0, accepted: 0, redirects: 0, ambiguous: 0, unmatched: 0, upstreamOnly: 1616, nonApplicable: 61518, canonicalFileCount: 1 },
  oomycota: { eligible: 1494, accepted: 53, redirects: 1, ambiguous: 0, unmatched: 1440, upstreamOnly: 42, nonApplicable: 60024, canonicalFileCount: 2 },
  cryptophyta: { eligible: 0, accepted: 0, redirects: 0, ambiguous: 0, unmatched: 0, upstreamOnly: 0, nonApplicable: 61518, canonicalFileCount: 0 },
  choanoflagellatea: { eligible: 0, accepted: 0, redirects: 0, ambiguous: 0, unmatched: 0, upstreamOnly: 0, nonApplicable: 61518, canonicalFileCount: 0 },
  bigyra: { eligible: 53, accepted: 0, redirects: 0, ambiguous: 0, unmatched: 53, upstreamOnly: 0, nonApplicable: 61465, canonicalFileCount: 1 },
  perkinsozoa: { eligible: 0, accepted: 0, redirects: 0, ambiguous: 0, unmatched: 0, upstreamOnly: 0, nonApplicable: 61518, canonicalFileCount: 0 },
  labyrinthulomycetes: { eligible: 0, accepted: 0, redirects: 0, ambiguous: 0, unmatched: 0, upstreamOnly: 0, nonApplicable: 61518, canonicalFileCount: 0 },
  opalozoa: { eligible: 0, accepted: 0, redirects: 0, ambiguous: 0, unmatched: 0, upstreamOnly: 0, nonApplicable: 61518, canonicalFileCount: 0 },
  radiolaria: { eligible: 0, accepted: 0, redirects: 0, ambiguous: 0, unmatched: 0, upstreamOnly: 0, nonApplicable: 61518, canonicalFileCount: 0 },
  metamonada: { eligible: 0, accepted: 0, redirects: 0, ambiguous: 0, unmatched: 0, upstreamOnly: 0, nonApplicable: 61518, canonicalFileCount: 0 },
  chlorophyta: { eligible: 0, accepted: 0, redirects: 0, ambiguous: 0, unmatched: 0, upstreamOnly: 1416, nonApplicable: 61518, canonicalFileCount: 1 },
  glaucophyta: { eligible: 0, accepted: 0, redirects: 0, ambiguous: 0, unmatched: 0, upstreamOnly: 4, nonApplicable: 61518, canonicalFileCount: 1 },
  picozoa: { eligible: 0, accepted: 0, redirects: 0, ambiguous: 0, unmatched: 0, upstreamOnly: 0, nonApplicable: 61518, canonicalFileCount: 0 },
  telonemia: { eligible: 0, accepted: 0, redirects: 0, ambiguous: 0, unmatched: 0, upstreamOnly: 0, nonApplicable: 61518, canonicalFileCount: 0 },
  centrohelida: { eligible: 0, accepted: 0, redirects: 0, ambiguous: 0, unmatched: 0, upstreamOnly: 0, nonApplicable: 61518, canonicalFileCount: 0 },
  katablepharidota: { eligible: 0, accepted: 0, redirects: 0, ambiguous: 0, unmatched: 0, upstreamOnly: 0, nonApplicable: 61518, canonicalFileCount: 0 },
  hemimastigophora: { eligible: 0, accepted: 0, redirects: 0, ambiguous: 0, unmatched: 0, upstreamOnly: 0, nonApplicable: 61518, canonicalFileCount: 0 },
}

export async function loadCatalogueItisProtistsRecord(
  scope: import('./types').CatalogueItisProtistsScope,
  colUsageId: string,
): Promise<{
  extension: import('./types').CatalogueItisProtistsResourcePackExtension
  record: import('./types').ItisNomenclatureRecord
} | null> {
  const expected = itisProtistsContracts[scope]
  const manifest = await loadCatalogueResourcePackManifest('protists-chromists')
  const expectedId = `itis-${scope}-tsn-crosswalk`
  const extension = manifest.extensions?.find((candidate): candidate is import('./types').CatalogueItisProtistsResourcePackExtension => candidate.id === expectedId)
  if (!extension || extension.provider !== 'Integrated Taxonomic Information System'
    || extension.recordType !== 'release-pinned-exact-nomenclatural-crosswalk'
    || extension.source.license !== 'CC0-1.0'
    || extension.integration.lookup.strategy !== 'lexicographic-colId-range-v1'
    || extension.counts.eligible !== expected.eligible
    || extension.counts.accepted !== expected.accepted
    || extension.counts.redirects !== expected.redirects
    || extension.counts.ambiguous !== expected.ambiguous
    || extension.counts.unmatched !== expected.unmatched
    || extension.counts.upstreamOnly !== expected.upstreamOnly
    || extension.counts.nonApplicable !== expected.nonApplicable
    || extension.counts.withheld !== 0
    || extension.counts.records !== expected.eligible + expected.upstreamOnly
    || extension.delivery.canonicalFileCount !== expected.canonicalFileCount
    || extension.canonicalFileInventory.length !== expected.canonicalFileCount) {
    throw new Error(`ITIS ${scope} authority extension does not match the pinned COL26.8 protists/chromists resource pack`)
  }
  if (!extension.delivery.completeRows || extension.delivery.profile !== 'native-full') {
    throw new Error(`ITIS ${scope} row-level records are available in the full Android/iOS data profile; Web publishes the verified coverage summary only`)
  }
  if (expected.eligible === 0) return null
  const rangeFiles = extension.files.filter((file) => file.minColId && file.maxColId)
  const expectedUpstreamFiles = expected.upstreamOnly > 0 ? 1 : 0
  if (rangeFiles.length !== expected.canonicalFileCount - expectedUpstreamFiles
    || rangeFiles.reduce((sum, file) => sum + file.records, 0) !== expected.eligible) {
    throw new Error(`ITIS ${scope} authority extension does not publish its complete COL partition`)
  }
  const file = selectAuthorityShard(rangeFiles, colUsageId, `ITIS ${scope}`)
  const records = await loadRuntimeFile<import('./types').ItisNomenclatureRecord[]>(file)
  const allowedStatuses = new Set<import('./types').ItisMappingStatus>(['accepted', 'synonym-current-name-redirect', 'ambiguous', 'unmatched'])
  if (records.length !== file.records || records[0]?.colUsageId !== file.minColId || records.at(-1)?.colUsageId !== file.maxColId
    || records.some((record, index) => !allowedStatuses.has(record.status)
      || (index > 0 && compareCodeUnits(records[index - 1].colUsageId, record.colUsageId) >= 0))) {
    throw new Error(`ITIS ${scope} authority shard contents do not match its range descriptor`)
  }
  const record = records.find((candidate) => candidate.colUsageId === colUsageId)
  return record ? { extension, record } : null
}

export async function loadCatalogueWfoPlantSupplement(): Promise<{
  extension: import('./types').CatalogueWfoPlantResourcePackExtension
  records: import('./types').WfoPlantRecord[]
}> {
  const manifest = await loadCatalogueResourcePackManifest('other-plants')
  const extension = manifest.extensions?.find((candidate): candidate is import('./types').CatalogueWfoPlantResourcePackExtension => candidate.id === 'wfo-plant-list-crosswalk')
  if (!extension || extension.provider !== 'World Flora Online Plant List'
    || extension.counts.packageColRecords !== manifest.acceptedSpeciesCount
    || extension.counts.records !== extension.counts.packageColRecords + extension.counts.upstreamOnly) {
    throw new Error('Other-plants WFO extension does not preserve its COL and upstream-only partitions')
  }
  const shards = await Promise.all(extension.files.map((file) => loadRuntimeFile<import('./types').WfoPlantRecord[]>(file)))
  const records = shards.flat()
  if (records.length !== extension.counts.records
    || records.filter((record) => record.status === 'upstream-only').length !== extension.counts.upstreamOnly
    || records.filter((record) => record.packageId === 'other-plants').length !== extension.counts.packageColRecords
    || records.some((record) => record.status === 'upstream-only' && record.colId !== undefined)) {
    throw new Error('Other-plants WFO records do not match the published partition counts')
  }
  return { extension, records }
}

export async function loadWfoPlantRecord(colId: string, packageId: string): Promise<{
  record: import('./types').WfoPlantRecord
  source: import('./types').WfoPlantSource
  counts: { wfoAcceptedSpecies: number; upstreamOnly: number }
} | null> {
  if (packageId === 'angiospermae' || packageId === 'gymnosperms' || packageId === 'early-land-plants') {
    const { collection, record } = await loadPackageWfoPlantRecord(packageId, colId)
    return record ? { record, source: collection.source, counts: { wfoAcceptedSpecies: collection.source.wfoAcceptedSpecies, upstreamOnly: collection.source.upstreamOnly } } : null
  }
  if (packageId === 'other-plants') {
    const manifest = await loadCatalogueResourcePackManifest('other-plants')
    const extension = manifest.extensions?.find((candidate): candidate is import('./types').CatalogueWfoPlantResourcePackExtension => candidate.id === 'wfo-plant-list-crosswalk')
    const partition = extension?.partitions.find((candidate) => candidate.id === 'other-plants-col' && candidate.colOwnership === 'other-plants')
    if (!extension || !partition || partition.records !== manifest.acceptedSpeciesCount) throw new Error('Other-plants WFO COL partition descriptor is invalid')
    const record = await loadWfoColRecordFromFiles(partition.files, colId)
    return record ? { record, source: extension.source, counts: { wfoAcceptedSpecies: extension.counts.wfoAcceptedSpecies, upstreamOnly: extension.counts.upstreamOnly } } : null
  }
  return null
}

export function resolveCatalogueSpeciesOwner(
  lineage: Pick<CatalogueHierarchyNodeRecord, 'id'>[],
  ownership: CatalogueSpeciesOwnership,
): CatalogueSpeciesOwner | null {
  const lineageIds = new Set(lineage.map((node) => node.id))
  const route = ownership.routes
    .filter((candidate) => candidate.ancestorIds.some((id) => lineageIds.has(id)))
    .sort((left, right) => left.priority - right.priority || left.packageId.localeCompare(right.packageId))[0]
  if (!route) return null
  const entry = ownership.entries.find((candidate) => candidate.id === route.packageId)
  return entry ? { entry, route } : null
}

export function normalizeCatalogueQuery(value: string): string {
  return value
    .normalize('NFKD')
    .replaceAll(/\p{M}/gu, '')
    .toLocaleLowerCase('en-US')
    .replaceAll(/[^a-z0-9]+/g, ' ')
    .trim()
}

export async function catalogueRoutePrefix(id: string): Promise<string> {
  const bytes = new TextEncoder().encode(id)
  const digest = await crypto.subtle.digest('SHA-256', bytes)
  return Array.from(new Uint8Array(digest).slice(0, 1), (byte) => byte.toString(16).padStart(2, '0')).join('')
}

async function loadCatalogueRoute<T>(
  routes: Record<string, string[]>,
  files: CatalogueRuntimeFile[],
  id: string,
): Promise<T[]> {
  const prefix = await catalogueRoutePrefix(id)
  const filesByUrl = new Map(files.map((file) => [file.url, file]))
  const routedFiles = (routes[prefix] ?? [])
    .map((url) => filesByUrl.get(url))
    .filter((file): file is NonNullable<typeof file> => Boolean(file))
  if (!routedFiles.length) return []
  return (await Promise.all(routedFiles.map((file) => loadWindowedRuntimeFile<T[]>(file)))).flat()
}

async function loadCatalogueHierarchyNodeFromManifest(
  manifest: CatalogueRuntimeManifest,
  id: string,
): Promise<CatalogueHierarchyNodeRecord | null> {
  const records = await loadCatalogueRoute<CatalogueHierarchyNodeRecord>(manifest.hierarchy.nodes.routes, manifest.hierarchy.nodes.files, id)
  return records.find((record) => record.id === id) ?? null
}

async function loadCatalogueTargetFromManifest(
  manifest: CatalogueRuntimeManifest,
  id: string,
): Promise<CatalogueTargetRecord | null> {
  const records = await loadCatalogueRoute<CatalogueTargetRecord>(manifest.acceptedTargets.routes, manifest.acceptedTargets.files, id)
  return records.find((record) => record.id === id) ?? null
}

export async function loadCatalogueHierarchyNode(id: string): Promise<CatalogueTaxonRecord | null> {
  const manifest = await loadCatalogueManifest()
  const hierarchyNode = await loadCatalogueHierarchyNodeFromManifest(manifest, id)
  if (hierarchyNode) return { ...hierarchyNode, projection: 'accepted-species-hierarchy' }
  const target = await loadCatalogueTargetFromManifest(manifest, id)
  return target ? { ...target, projection: 'resolution-target' } : null
}

export async function loadCatalogueSanbiDescriptions(id: string): Promise<CatalogueSanbiDescriptionRecord | null> {
  const manifest = await loadCatalogueManifest()
  const collection = manifest.sanbiDescriptions
  if (!collection) return null
  const records = await loadCatalogueRoute<CatalogueSanbiDescriptionRecord>(collection.routes, collection.files, id)
  return records.find((record) => record.colId === id) ?? null
}

export async function loadCatalogueMesoDescriptions(id: string): Promise<import('./types').CatalogueMesoDescriptionRecord | null> {
  const manifest = await loadCatalogueManifest()
  const collection = manifest.mesoDescriptions
  if (!collection) return null
  const records = await loadCatalogueRoute<import('./types').CatalogueMesoDescriptionRecord>(collection.routes, collection.files, id)
  return records.find((record) => record.colId === id) ?? null
}

export async function loadCatalogueFdacDescriptions(id: string): Promise<import('./types').CatalogueFdacDescriptionRecord | null> {
  const manifest = await loadCatalogueManifest()
  const collection = manifest.fdacDescriptions
  if (!collection) return null
  const records = await loadCatalogueRoute<import('./types').CatalogueFdacDescriptionRecord>(collection.routes, collection.files, id)
  return records.find((record) => record.colId === id) ?? null
}

export async function loadCatalogueMossDescriptions(id: string): Promise<import('./types').CatalogueMossDescriptionRecord | null> {
  const manifest = await loadCatalogueManifest()
  const collection = manifest.mossDescriptions
  if (!collection) return null
  const records = await loadCatalogueRoute<import('./types').CatalogueMossDescriptionRecord>(collection.routes, collection.files, id)
  return records.find((record) => record.colId === id) ?? null
}

export async function loadCataloguePakistanDescriptions(id: string): Promise<import('./types').CataloguePakistanDescriptionRecord | null> {
  const manifest = await loadCatalogueManifest()
  const collection = manifest.pakistanDescriptions
  if (!collection) return null
  const records = await loadCatalogueRoute<import('./types').CataloguePakistanDescriptionRecord>(collection.routes, collection.files, id)
  return records.find((record) => record.colId === id) ?? null
}

export async function loadCatalogueMossChinaDescriptions(id: string): Promise<import('./types').CatalogueMossChinaDescriptionRecord | null> {
  const manifest = await loadCatalogueManifest()
  const collection = manifest.mossChinaDescriptions
  if (!collection) return null
  const records = await loadCatalogueRoute<import('./types').CatalogueMossChinaDescriptionRecord>(collection.routes, collection.files, id)
  return records.find((record) => record.colId === id) ?? null
}

export async function loadCatalogueFnaDescriptions(id: string): Promise<import('./types').CatalogueFnaDescriptionRecord | null> {
  const manifest = await loadCatalogueManifest()
  const collection = manifest.fnaDescriptions
  if (!collection) return null
  const records = await loadCatalogueRoute<import('./types').CatalogueFnaDescriptionRecord>(collection.routes, collection.files, id)
  return records.find((record) => record.colId === id) ?? null
}

export async function loadCatalogueBrazilFloraDescriptions(id: string): Promise<import('./types').CatalogueBrazilFloraDescriptionRecord | null> {
  const manifest = await loadCatalogueManifest()
  const collection = manifest.brazilFloraDescriptions
  if (!collection) return null
  const records = await loadCatalogueRoute<import('./types').CatalogueBrazilFloraDescriptionRecord>(collection.routes, collection.files, id)
  return records.find((record) => record.colId === id) ?? null
}

export async function loadCatalogueTurkeyDescriptions(id: string): Promise<import('./types').CatalogueTurkeyDescriptionRecord | null> {
  const manifest = await loadCatalogueManifest()
  const collection = manifest.turkeyDescriptions
  if (!collection) return null
  const records = await loadCatalogueRoute<import('./types').CatalogueTurkeyDescriptionRecord>(collection.routes, collection.files, id)
  return records.find((record) => record.colId === id) ?? null
}

export async function loadCatalogueFoaDescriptions(id: string): Promise<import('./types').CatalogueFoaDescriptionRecord | null> {
  const manifest = await loadCatalogueManifest()
  const collection = manifest.foaDescriptions
  if (!collection) return null
  const records = await loadCatalogueRoute<import('./types').CatalogueFoaDescriptionRecord>(collection.routes, collection.files, id)
  return records.find((record) => record.colId === id) ?? null
}

export async function loadCataloguePlaziDescriptions(id: string): Promise<CataloguePlaziDescriptionRecord | null> {
  const manifest = await loadCatalogueManifest()
  const collection = manifest.plaziDescriptions
  if (!collection) return null
  const records = await loadCatalogueRoute<CataloguePlaziDescriptionRecord>(collection.routes, collection.files, id)
  return records.find((record) => record.colId === id) ?? null
}

export async function loadCatalogueChildren(parentId: string): Promise<CatalogueHierarchyChildRecord[]> {
  const manifest = await loadCatalogueManifest()
  const records = await loadCatalogueRoute<CatalogueHierarchyChildRecord>(manifest.hierarchy.children.routes, manifest.hierarchy.children.files, parentId)
  return records.filter((record) => record.parentId === parentId)
}

export async function loadCatalogueLineage(id: string, maxDepth = 64): Promise<CatalogueHierarchyNodeRecord[]> {
  if (!Number.isInteger(maxDepth) || maxDepth < 1) {
    throw new Error(`Catalogue hierarchy maxDepth must be a positive integer; received ${maxDepth}`)
  }
  const manifest = await loadCatalogueManifest()
  const lineage: CatalogueHierarchyNodeRecord[] = []
  const visited = new Set<string>()
  let currentId: string | null = id

  while (currentId !== null) {
    if (visited.has(currentId)) {
      throw new Error(`Catalogue hierarchy cycle detected at ${currentId} while loading lineage for ${id}`)
    }
    if (lineage.length >= maxDepth) {
      throw new Error(`Catalogue hierarchy lineage for ${id} exceeds maximum depth ${maxDepth} before reaching a root`)
    }
    visited.add(currentId)
    const node = await loadCatalogueHierarchyNodeFromManifest(manifest, currentId)
    if (!node) {
      const childId = lineage.at(-1)?.id
      throw new Error(childId
        ? `Catalogue hierarchy parent ${currentId} referenced by ${childId} is missing while loading lineage for ${id}`
        : `Catalogue hierarchy node ${id} is missing from the pinned release`)
    }
    lineage.push(node)
    currentId = node.parentId
  }

  return lineage.reverse()
}

export async function searchCatalogue(query: string, limit = 12): Promise<{
  manifest: CatalogueRuntimeManifest
  records: CatalogueRecord[]
  totalMatches: number
  resolutionTargets: Record<string, import('./types').CatalogueTargetRecord>
}> {
  const manifest = await loadCatalogueManifest()
  const normalized = normalizeCatalogueQuery(query)
  const compact = normalized.replaceAll(' ', '')
  if (compact.length < manifest.search.minimumQueryLength) return { manifest, records: [], totalMatches: 0, resolutionTargets: {} }
  const basePrefix = compact.slice(0, 2).padEnd(2, '_')
  const routedUrls = manifest.search.routes[basePrefix] ?? []
  const filesByUrl = new Map(manifest.search.files.map((file) => [file.url, file]))
  const routedFiles = routedUrls
    .map((url) => filesByUrl.get(url))
    .filter((file): file is NonNullable<typeof file> => Boolean(file))
    .filter((file) => compact.startsWith(file.prefix) || file.prefix.startsWith(compact))
  const shards = await Promise.all(routedFiles.map((file) => loadWindowedRuntimeFile<CatalogueRecord[]>(file)))
  const statusOrder: Record<CatalogueRecord['status'], number> = { accepted: 0, synonym: 1, 'ambiguous-synonym': 2, misapplied: 3 }
  const matches = shards.flat()
    .filter((record) => record.normalizedName.startsWith(normalized))
    .sort((left, right) => statusOrder[left.status] - statusOrder[right.status]
      || left.normalizedName.length - right.normalizedName.length
      || left.scientificName.localeCompare(right.scientificName)
      || (left.authorship ?? '').localeCompare(right.authorship ?? '')
      || left.id.localeCompare(right.id))
  const exactMatches = matches.filter((record) => record.normalizedName === normalized)
  const records = exactMatches.length > limit ? exactMatches : matches.slice(0, limit)
  const targetIds = [...new Set(records.flatMap((record) => record.status === 'accepted' || !record.acceptedId ? [] : [record.acceptedId]))]
  const targetRoutes = await Promise.all(targetIds.map(async (id) => [id, await catalogueRoutePrefix(id)] as const))
  const targetFilesByUrl = new Map(manifest.acceptedTargets.files.map((file) => [file.url, file]))
  const routeFiles = [...new Set(targetRoutes.flatMap(([, prefix]) => manifest.acceptedTargets.routes[prefix] ?? []))]
    .map((url) => targetFilesByUrl.get(url))
    .filter((file): file is NonNullable<typeof file> => Boolean(file))
  const targetShards = await Promise.all(routeFiles.map((file) => loadWindowedRuntimeFile<CatalogueTargetRecord[]>(file)))
  const wantedTargets = new Set(targetIds)
  const resolutionTargets = Object.fromEntries(targetShards.flat()
    .filter((record) => wantedTargets.has(record.id))
    .map((record) => [record.id, record]))
  if (Object.keys(resolutionTargets).length !== targetIds.length) throw new Error('Catalogue resolving-name target is missing from the pinned release')
  return { manifest, records, totalMatches: matches.length, resolutionTargets }
}

export async function loadPaleogeographySnapshot(period: string): Promise<{
  manifest: RuntimeMapManifest
  snapshot: RuntimeMapSnapshot
} | null> {
  const manifest = await loadMapManifest()
  const snapshot = manifest.snapshots.find((entry) => entry.period === period)
  if (!snapshot || snapshot.status !== 'available' || !snapshot.layers) return null
  return { manifest, snapshot }
}

export async function loadPaleogeographyLayer(
  snapshot: RuntimeMapSnapshot,
  layerId: import('../types').PaleogeographyLayerId,
): Promise<import('../types').PaleogeographyFeatureCollection> {
  const file = snapshot.layers?.[layerId]
  if (!file) throw new Error(`${snapshot.period}: paleogeography layer ${layerId} is not published`)
  return loadRuntimeFile<import('../types').PaleogeographyFeatureCollection>(file)
}

export function resolvePaleotopographyFrame(
  collection: RuntimePaleotopographyCollection,
  requestedAgeMa: number,
): RuntimePaleotopographyFrame | null {
  const { youngest, oldest } = collection.selection.ageRangeMa
  if (!Number.isFinite(requestedAgeMa) || requestedAgeMa < youngest || requestedAgeMa > oldest) return null
  const frames = collection.frames
  let low = 0
  let high = frames.length
  while (low < high) {
    const middle = (low + high) >>> 1
    if (frames[middle].archiveNominalAgeMa < requestedAgeMa) low = middle + 1
    else high = middle
  }
  const older = frames[low]
  const younger = low > 0 ? frames[low - 1] : undefined
  if (!younger) return older ?? null
  if (!older) return younger
  return requestedAgeMa - younger.archiveNominalAgeMa <= older.archiveNominalAgeMa - requestedAgeMa ? younger : older
}

export function resolvePaleogeographyFrame(
  manifest: RuntimeMapManifest,
  requestedAgeMa: number,
  layerId: import('../types').PaleogeographyLayerId,
): RuntimeMapFrameSelection | null {
  const range = manifest.ageRangeMa
  const frames = manifest.layers?.[layerId]?.frames
  if (!range || !frames?.length || !Number.isFinite(requestedAgeMa)) return null
  if (requestedAgeMa < range.youngest || requestedAgeMa > range.oldest) return null

  let low = 0
  let high = frames.length
  while (low < high) {
    const middle = (low + high) >>> 1
    if (frames[middle].ageMa < requestedAgeMa) low = middle + 1
    else high = middle
  }
  const older = frames[low]
  const younger = low > 0 ? frames[low - 1] : undefined
  let frame: RuntimeMapFrame
  if (!younger) frame = older
  else if (!older) frame = younger
  else frame = requestedAgeMa - younger.ageMa <= older.ageMa - requestedAgeMa ? younger : older
  if (!frame) return null
  return {
    layerId,
    requestedAgeMa,
    selectedAgeMa: frame.ageMa,
    deltaMa: Math.abs(frame.ageMa - requestedAgeMa),
    frame,
  }
}

export async function loadPaleogeographyLayerAtAge(
  requestedAgeMa: number,
  layerId: import('../types').PaleogeographyLayerId,
): Promise<{
  manifest: RuntimeMapManifest
  selection: RuntimeMapFrameSelection
  collection: import('../types').PaleogeographyFeatureCollection
} | null> {
  const manifest = await loadMapManifest()
  const selection = resolvePaleogeographyFrame(manifest, requestedAgeMa, layerId)
  if (!selection) return null
  const collection = await loadMapRuntimeFile<import('../types').PaleogeographyFeatureCollection>(selection.frame)
  return { manifest, selection, collection }
}

/** Compatibility loader for callers that require the three default map layers. */
export async function loadPaleogeography(period: string): Promise<{
  manifest: RuntimeMapManifest
  snapshot: RuntimeMapSnapshot
  layers: import('../types').PaleogeographyLayers
} | null> {
  const result = await loadPaleogeographySnapshot(period)
  if (!result) return null
  const layerIds = ['coastlines', 'platePolygons', 'plateBoundaries'] as const
  const loaded = await Promise.all(layerIds.map((layerId) => loadPaleogeographyLayer(result.snapshot, layerId)))
  return { ...result, layers: Object.fromEntries(layerIds.map((layerId, index) => [layerId, loaded[index]])) }
}

function matchesSearch(entry: RuntimeSearchEntry, normalized: string): boolean {
  return [entry.title, entry.titleEn, entry.titleZh, ...entry.terms]
    .filter((value): value is string | number => value !== null && value !== undefined)
    .some((value) => String(value).toLocaleLowerCase().includes(normalized))
}

export async function searchStaticData(query: string, limit = 16): Promise<RuntimeSearchEntry[]> {
  const normalized = query.trim().toLocaleLowerCase()
  if (!normalized) return []
  const current = await loadCurrentManifest()
  const core = await loadRuntimeFile<RuntimeSearchEntry[]>(current.core.search)
  const entries = [...core, ...loadedPackageSearch.values()].flat()
  const seen = new Set<string>()
  return entries.filter((entry) => {
    const key = `${entry.kind}:${entry.id}`
    if (seen.has(key) || !matchesSearch(entry, normalized)) return false
    seen.add(key)
    return true
  }).slice(0, limit)
}

export function runtimeDataUrl(relativeUrl: string): string {
  return dataUrl(relativeUrl)
}

export function clearRuntimeMemoryCache(): void {
  jsonCache.clear()
  inFlight.clear()
  windowJsonCache.clear()
  windowInFlight.clear()
  mapJsonCache.clear()
  mapInFlight.clear()
  loadedPackageSearch.clear()
}
