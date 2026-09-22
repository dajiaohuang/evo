import { backendUrl, isBackendConfigured } from './backendClient'
import { frontendContract } from '../platform/frontendContract'

export interface NativeSyncManifestHeader {
  kind: 'manifest'
  schemaVersion: 1
  apiVersion: 'v1'
  protocolVersion: 'v1'
  datasetVersion: string
  releaseVersion: string
  profile: 'full'
  complete: true
  totalFiles: number
  totalBytes: number
  resourceBase: '/v1/resources/'
}

export interface NativeSyncFileDescriptor {
  kind: 'file'
  path: string
  profile: 'full'
  bytes: number
  sha256: string
  mediaType: string
  encoding: string
  releaseVersion: string
  url: string
}

export interface NativeSyncProgress {
  status: 'disabled' | 'streaming' | 'ready' | 'error'
  datasetVersion: string | null
  filesSeen: number
  bytesSeen: number
  totalFiles: number | null
  totalBytes: number | null
  error: string | null
}

export interface StreamNativeSyncOptions {
  prefix?: string
  signal?: AbortSignal
  onFile?: (file: NativeSyncFileDescriptor) => void | Promise<void>
  onProgress?: (progress: NativeSyncProgress) => void
}

export interface NativeSyncResourceOptions {
  descriptor: NativeSyncFileDescriptor
  startByte?: number
  signal?: AbortSignal
}

const STORAGE_KEY = 'evo-native-sync-progress-v1'
const MAX_MANIFEST_LINE = 64 * 1024
const manifestLineBytes = (line: string) => new TextEncoder().encode(line).byteLength
const safeResourcePath = (path: unknown): path is string => typeof path === 'string' && path.startsWith('data/')
  && !/[\\?#%]/.test(path) && ![...path].some(character => character.charCodeAt(0) < 32)
  && path.split('/').every(part => part !== '' && part !== '.' && part !== '..')

const emptyProgress = (): NativeSyncProgress => ({
  status: 'disabled', datasetVersion: null, filesSeen: 0, bytesSeen: 0, totalFiles: null, totalBytes: null, error: null,
})

export function parseNativeSyncLine(line: string): NativeSyncManifestHeader | NativeSyncFileDescriptor {
  let value: unknown
  try {
    value = JSON.parse(line)
  } catch {
    throw new Error('Evo sync stream returned invalid JSON')
  }
  if (!value || typeof value !== 'object') throw new Error('Evo sync stream returned a non-object line')
  const record = value as Record<string, unknown>
  if (record.kind === 'manifest') {
    if (record.schemaVersion !== 1 || record.apiVersion !== 'v1' || record.protocolVersion !== 'v1'
      || typeof record.datasetVersion !== 'string' || !record.datasetVersion || record.releaseVersion !== record.datasetVersion
      || record.profile !== 'full' || record.complete !== true || !Number.isSafeInteger(record.totalFiles) || (record.totalFiles as number) < 0
      || !Number.isSafeInteger(record.totalBytes) || (record.totalBytes as number) < 0 || record.resourceBase !== '/v1/resources/') {
      throw new Error('Evo sync stream manifest is not the current full-release contract')
    }
    return record as unknown as NativeSyncManifestHeader
  }
  if (record.kind === 'file') {
    if (record.profile !== 'full' || !safeResourcePath(record.path)
      || !Number.isSafeInteger(record.bytes) || (record.bytes as number) < 0 || typeof record.sha256 !== 'string' || !/^[a-f0-9]{64}$/.test(record.sha256)
      || typeof record.mediaType !== 'string' || typeof record.encoding !== 'string'
      || typeof record.releaseVersion !== 'string' || !record.releaseVersion || record.url !== `/v1/resources/${record.path}`) {
      throw new Error('Evo sync stream file is not a valid current full-release descriptor')
    }
    return record as unknown as NativeSyncFileDescriptor
  }
  throw new Error('Evo sync stream line has an unknown kind')
}

export function readNativeSyncProgress(): NativeSyncProgress {
  try {
    if (typeof localStorage === 'undefined') return emptyProgress()
    const value = JSON.parse(localStorage.getItem(STORAGE_KEY) ?? '') as Partial<NativeSyncProgress>
    if (value.status && typeof value.filesSeen === 'number' && typeof value.bytesSeen === 'number') return { ...emptyProgress(), ...value }
  } catch {
    // A missing or malformed progress marker is not a content-format fallback.
  }
  return emptyProgress()
}

function writeProgress(progress: NativeSyncProgress, onProgress?: (progress: NativeSyncProgress) => void): void {
  try {
    if (typeof localStorage !== 'undefined') localStorage.setItem(STORAGE_KEY, JSON.stringify(progress))
  } catch {
    // Storage quota/privacy failures must not interrupt the verified transfer.
  }
  onProgress?.(progress)
}

export function recordNativeSyncError(error: unknown): NativeSyncProgress {
  const current = readNativeSyncProgress()
  const progress = { ...current, status: 'error' as const, error: error instanceof Error ? error.message : String(error) }
  writeProgress(progress)
  return progress
}

export async function streamNativeSyncManifest(options: StreamNativeSyncOptions = {}): Promise<NativeSyncProgress> {
  if (!frontendContract.native || !isBackendConfigured()) {
    const progress = emptyProgress()
    options.onProgress?.(progress)
    return progress
  }
  const params = new URLSearchParams({ profile: 'full' })
  if (options.prefix) params.set('prefix', options.prefix)
  const response = await fetch(`${backendUrl('/v1/sync/files.ndjson')}?${params}`, { headers: { Accept: 'application/x-ndjson' }, signal: options.signal })
  if (!response.ok || !response.body) throw new Error(`Evo native sync manifest failed (${response.status})`)

  let progress: NativeSyncProgress = { status: 'streaming', datasetVersion: null, filesSeen: 0, bytesSeen: 0, totalFiles: null, totalBytes: null, error: null }
  writeProgress(progress, options.onProgress)
  const reader = response.body.getReader()
  const decoder = new TextDecoder()
  let buffer = ''
  let header: NativeSyncManifestHeader | null = null
  const seenPaths = new Set<string>()
  const consume = async (line: string) => {
    options.signal?.throwIfAborted()
    if (manifestLineBytes(line) > MAX_MANIFEST_LINE) throw new Error('Evo sync stream line exceeds 64 KiB')
    if (!line.trim()) return
    const record = parseNativeSyncLine(line)
    if (record.kind === 'manifest') {
      if (header) throw new Error('Evo sync stream returned more than one manifest header')
      header = record
      progress = { ...progress, datasetVersion: record.datasetVersion, totalFiles: record.totalFiles, totalBytes: record.totalBytes }
    } else {
      if (!header || record.releaseVersion !== header.datasetVersion) throw new Error('Evo sync stream file precedes or mixes the manifest release')
      if (seenPaths.has(record.path)) throw new Error('Evo sync stream contains a duplicate resource path')
      if (progress.filesSeen + 1 > header.totalFiles || progress.bytesSeen + record.bytes > header.totalBytes) throw new Error('Evo sync stream exceeds its advertised inventory')
      seenPaths.add(record.path)
      progress = { ...progress, filesSeen: progress.filesSeen + 1, bytesSeen: progress.bytesSeen + record.bytes }
      await options.onFile?.(record)
    }
    writeProgress(progress, options.onProgress)
  }
  try {
    while (true) {
      const chunk = await reader.read()
      buffer += decoder.decode(chunk.value, { stream: !chunk.done })
      const lines = buffer.split('\n')
      buffer = lines.pop() ?? ''
      if (manifestLineBytes(buffer) > MAX_MANIFEST_LINE) throw new Error('Evo sync stream line exceeds 64 KiB')
      for (const line of lines) await consume(line)
      if (chunk.done) break
    }
    if (buffer.trim()) await consume(buffer)
  } finally {
    await reader.cancel().catch(() => undefined)
    reader.releaseLock()
  }
  const completedHeader = header as NativeSyncManifestHeader | null
  if (!completedHeader) throw new Error('Evo sync stream ended without a manifest header')
  if (progress.filesSeen !== completedHeader.totalFiles || progress.bytesSeen !== completedHeader.totalBytes) {
    throw new Error('Evo sync stream ended before the advertised full-release inventory was received')
  }
  progress = { ...progress, status: 'ready' }
  writeProgress(progress, options.onProgress)
  return progress
}

export function resetNativeSyncProgress(): void {
  try {
    if (typeof localStorage !== 'undefined') localStorage.removeItem(STORAGE_KEY)
  } catch { /* An unavailable progress marker must not prevent a new transfer. */ }
}

export async function openNativeSyncResource(options: NativeSyncResourceOptions): Promise<Response> {
  if (!frontendContract.native || !isBackendConfigured()) throw new Error('Evo native resource sync is not configured')
  parseNativeSyncLine(JSON.stringify(options.descriptor))
  const startByte = options.startByte ?? 0
  if (!Number.isSafeInteger(startByte) || startByte < 0 || (startByte > 0 && startByte >= options.descriptor.bytes)) throw new Error('Evo native sync resume offset is outside the resource')
  const headers: Record<string, string> = { Accept: options.descriptor.mediaType, 'If-Range': options.descriptor.sha256 }
  if (startByte > 0) headers.Range = `bytes=${startByte}-`
  const response = await fetch(backendUrl(`/v1/resources/${options.descriptor.path}`), { headers, signal: options.signal })
  if (!response.ok) throw new Error(`Evo native resource sync failed (${response.status}) for ${options.descriptor.path}`)
  const etag = response.headers.get('ETag')
  const expectedRange = `bytes ${startByte}-${options.descriptor.bytes - 1}/${options.descriptor.bytes}`
  if (etag !== `"${options.descriptor.sha256}"` || (startByte > 0
    ? response.status !== 206 || response.headers.get('Content-Range') !== expectedRange
    : response.status !== 200)) {
    await response.body?.cancel().catch(() => undefined)
    throw new Error('Evo native sync resource changed or returned an invalid byte range; refresh the manifest before resuming')
  }
  return response
}
