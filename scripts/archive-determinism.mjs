import { gzipSync } from 'node:zlib'
import { zipSync } from 'fflate'

const GZIP_OS_UNKNOWN = 255
const ZIP_PLATFORM_FAT = 0

export function normalizeGzipHeader(bytes) {
  const normalized = Buffer.from(bytes)
  if (normalized.length < 10 || normalized[0] !== 0x1f || normalized[1] !== 0x8b) {
    throw new Error('Expected a gzip stream')
  }
  normalized[9] = GZIP_OS_UNKNOWN
  return normalized
}

export function deterministicGzip(bytes, options = {}) {
  const compressed = gzipSync(bytes, { ...options, mtime: 0 })
  return normalizeGzipHeader(compressed)
}

export function deterministicZip(entries, options = {}) {
  return zipSync(entries, {
    ...options,
    mtime: new Date(1980, 0, 1, 0, 0, 0, 0),
    os: ZIP_PLATFORM_FAT,
  })
}
