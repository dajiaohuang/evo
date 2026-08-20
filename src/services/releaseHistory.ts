export interface RetainedRelease {
  datasetVersion: string
  releaseBase: string
  filesIndex: string
  generatedAt: string
  bytes: number
}

export interface ReleaseHistory {
  schemaVersion: number
  retentionLimit: number
  retentionByteLimit: number
  retainedBytes: number
  releases: RetainedRelease[]
}

export interface ReleaseFile {
  url: string
  bytes: number
  sha256: string
}

export interface ReleaseFileIndex {
  schemaVersion: number
  datasetVersion: string
  files: ReleaseFile[]
}

export interface ReleaseComparison {
  olderVersion: string
  newerVersion: string
  added: string[]
  removed: string[]
  changed: string[]
  unchanged: number
  olderBytes: number
  newerBytes: number
  byteDelta: number
}

function releaseArtifactPath(file: ReleaseFile, version: string): string {
  const prefix = `releases/${version}/`
  return file.url.startsWith(prefix) ? file.url.slice(prefix.length) : file.url
}

export function compareReleaseFileIndexes(older: ReleaseFileIndex, newer: ReleaseFileIndex): ReleaseComparison {
  const olderFiles = new Map(older.files.map((file) => [releaseArtifactPath(file, older.datasetVersion), file]))
  const newerFiles = new Map(newer.files.map((file) => [releaseArtifactPath(file, newer.datasetVersion), file]))
  const added = [...newerFiles.keys()].filter((path) => !olderFiles.has(path)).sort()
  const removed = [...olderFiles.keys()].filter((path) => !newerFiles.has(path)).sort()
  const shared = [...newerFiles.keys()].filter((path) => olderFiles.has(path))
  const changed = shared.filter((path) => olderFiles.get(path)!.sha256 !== newerFiles.get(path)!.sha256).sort()
  const olderBytes = older.files.reduce((sum, file) => sum + file.bytes, 0)
  const newerBytes = newer.files.reduce((sum, file) => sum + file.bytes, 0)
  return {
    olderVersion: older.datasetVersion,
    newerVersion: newer.datasetVersion,
    added,
    removed,
    changed,
    unchanged: shared.length - changed.length,
    olderBytes,
    newerBytes,
    byteDelta: newerBytes - olderBytes,
  }
}

function validHistory(value: unknown): value is ReleaseHistory {
  if (!value || typeof value !== 'object') return false
  const candidate = value as Partial<ReleaseHistory>
  return Array.isArray(candidate.releases) && candidate.releases.every((release) => release && typeof release.datasetVersion === 'string' && typeof release.filesIndex === 'string')
}

function validFileIndex(value: unknown): value is ReleaseFileIndex {
  if (!value || typeof value !== 'object') return false
  const candidate = value as Partial<ReleaseFileIndex>
  return typeof candidate.datasetVersion === 'string' && Array.isArray(candidate.files) && candidate.files.every((file) => file && typeof file.url === 'string' && typeof file.bytes === 'number' && typeof file.sha256 === 'string')
}

async function fetchJson<T>(path: string, guard: (value: unknown) => value is T): Promise<T> {
  const response = await fetch(`${import.meta.env.BASE_URL}data/${path}`, { cache: 'no-store' })
  if (!response.ok) throw new Error(`Release artifact request failed (${response.status})`)
  const value: unknown = await response.json()
  if (!guard(value)) throw new Error('Release artifact has an unsupported structure')
  return value
}

export function loadReleaseHistory(): Promise<ReleaseHistory> {
  return fetchJson('releases.json', validHistory)
}

export async function loadReleaseComparison(older: RetainedRelease, newer: RetainedRelease): Promise<ReleaseComparison> {
  const [olderIndex, newerIndex] = await Promise.all([
    fetchJson(older.filesIndex, validFileIndex),
    fetchJson(newer.filesIndex, validFileIndex),
  ])
  return compareReleaseFileIndexes(olderIndex, newerIndex)
}
