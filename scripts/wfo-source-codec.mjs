import { brotliCompressSync, brotliDecompressSync, constants } from 'node:zlib'

// Build-time source storage only. Published runtime shards remain gzip.
export function encodeWfoSource(bytes) {
  return brotliCompressSync(bytes, {
    params: { [constants.BROTLI_PARAM_QUALITY]: 5 },
  })
}

export function decodeWfoSource(bytes) {
  return brotliDecompressSync(bytes)
}
