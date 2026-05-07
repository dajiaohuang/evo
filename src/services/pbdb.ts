import { LRUCache } from './cache'
import { RateLimiter } from './rateLimiter'
import { CACHE_TTL, PBDB_BASE_URL, MIN_REQUEST_GAP_MS, MAX_QUEUED_REQUESTS } from '../constants'
import type { GeoInterval, FossilOccurrence, TaxonInfo } from '../types'

const cache = new LRUCache<unknown>(200)
const limiter = new RateLimiter(MIN_REQUEST_GAP_MS, MAX_QUEUED_REQUESTS)

async function fetchJSON<T>(url: string, cacheKey: string, ttl: number): Promise<T> {
  const cached = cache.get(cacheKey)
  if (cached) return cached as T

  const data = await limiter.enqueue(async () => {
    const res = await fetch(url)
    if (!res.ok) throw new Error(`PBDB HTTP ${res.status}: ${url}`)
    return res.json()
  })

  cache.set(cacheKey, data, ttl)
  return data as T
}

function buildUrl(path: string, params: Record<string, string | number>): string {
  const qs = Object.entries(params)
    .map(([k, v]) => `${encodeURIComponent(k)}=${encodeURIComponent(v)}`)
    .join('&')
  return `${PBDB_BASE_URL}${path}?${qs}`
}

export async function fetchIntervals(): Promise<GeoInterval[]> {
  const url = buildUrl('/intervals/list.json', { scale: 1 })
  const data = await fetchJSON<{ records: Record<string, unknown>[] }>(url, 'intervals:scale=1', CACHE_TTL.intervals)
  return data.records.map((r) => ({
    oid: r.oid as string,
    nam: r.nam as string,
    itp: r.itp as GeoInterval['itp'],
    lag: Number(r.lag),
    eag: Number(r.eag),
    col: (r.col as string) || '#888888',
    pid: (r.pid as string | null) ?? null,
  }))
}

export async function fetchOccurrencesByInterval(
  intervalName: string
): Promise<{ records: FossilOccurrence[]; total: number }> {
  const url = buildUrl('/occs/list.json', {
    interval: intervalName,
    show: 'coords,paleoloc,loc,time',
    limit: 500,
  })
  const key = `occs:interval:${intervalName}`
  const data = await fetchJSON<{ records: FossilOccurrence[] }>(url, key, CACHE_TTL.occurrences)
  return { records: data.records, total: data.records.length }
}

export async function fetchOccurrencesByTaxon(
  taxonId: string
): Promise<{ records: FossilOccurrence[]; total: number }> {
  const url = buildUrl('/occs/list.json', {
    taxon_id: taxonId,
    show: 'coords,paleoloc,loc,time',
    limit: 500,
  })
  const key = `occs:taxon:${taxonId}`
  const data = await fetchJSON<{ records: FossilOccurrence[] }>(url, key, CACHE_TTL.occurrences)
  return { records: data.records, total: data.records.length }
}

export async function fetchTaxon(taxonId: string): Promise<TaxonInfo> {
  const url = buildUrl('/taxa/list.json', {
    taxon_id: taxonId,
    show: 'attr,class',
  })
  const key = `taxon:${taxonId}`
  const data = await fetchJSON<{ records: Record<string, unknown>[] }>(url, key, CACHE_TTL.taxonomy)
  const r = data.records[0]
  if (!r) throw new Error(`Taxon not found: ${taxonId}`)
  return {
    tna: r.tna as string,
    tid: r.tid as string,
    rnk: Number(r.rnk),
    fid: r.fid as string,
    fna: r.fna as string,
    eag: Number(r.eag),
    lag: Number(r.lag),
    ext: Boolean(r.ext),
  }
}

export function clearCache(pattern?: RegExp): void {
  cache.invalidate(pattern)
}
