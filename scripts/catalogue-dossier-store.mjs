import { createHash } from 'node:crypto'
import { readFileSync } from 'node:fs'
import { isAbsolute, resolve, sep } from 'node:path'
import { brotliDecompressSync } from 'node:zlib'
import { readJson, rootDir } from './data-lib.mjs'

const sha256 = bytes => createHash('sha256').update(bytes).digest('hex')

export function readCatalogueDossiers() {
  const base = readJson('data/knowledge/catalogue-dossiers.json')
  const index = readJson('data/knowledge/catalogue-dossier-shards.json')
  if (base.releaseAlias !== 'COL26.8' || index.releaseAlias !== base.releaseAlias) throw new Error('Catalogue dossier release mismatch')
  if (index.schemaVersion !== 1 || index.encoding !== 'brotli-jsonl' || !Array.isArray(index.shards)) throw new Error('Unsupported catalogue dossier shard index')

  const records = [...base.records]
  const seen = new Set(records.map(record => record.colId))
  let shardRecordCount = 0
  for (const shard of index.shards) {
    const path = resolve(rootDir, shard.path)
    const knowledgeRoot = resolve(rootDir, 'data/knowledge') + sep
    if (isAbsolute(shard.path) || !path.startsWith(knowledgeRoot)) throw new Error(`Catalogue dossier shard path escapes data/knowledge: ${shard.path}`)
    const compressed = readFileSync(path)
    if (sha256(compressed) !== shard.compressedSha256) throw new Error(`Catalogue dossier compressed checksum mismatch: ${shard.path}`)
    const decoded = brotliDecompressSync(compressed)
    if (sha256(decoded) !== shard.decodedSha256) throw new Error(`Catalogue dossier decoded checksum mismatch: ${shard.path}`)
    const lines = decoded.toString('utf8').split(/\r?\n/).filter(Boolean)
    if (lines.length !== shard.recordCount) throw new Error(`Catalogue dossier count mismatch in ${shard.path}: ${lines.length} != ${shard.recordCount}`)
    for (const line of lines) {
      const record = JSON.parse(line)
      if (record.rank !== 'species' || typeof record.colId !== 'string') throw new Error(`Invalid catalogue dossier identity in ${shard.path}`)
      if (seen.has(record.colId)) throw new Error(`Duplicate catalogue dossier COL ID: ${record.colId}`)
      seen.add(record.colId)
      records.push(record)
    }
    shardRecordCount += lines.length
  }
  if (shardRecordCount !== index.recordCount) throw new Error(`Catalogue dossier total mismatch: ${shardRecordCount} != ${index.recordCount}`)
  return { ...base, records }
}
