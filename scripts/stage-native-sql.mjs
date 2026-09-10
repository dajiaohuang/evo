import { createHash } from 'node:crypto'
import { copyFileSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'
import { rootDir } from './data-lib.mjs'

export async function stageNativeSql(outputRoot) {
  const packageRoot = join(rootDir, 'node_modules/@duckdb/duckdb-wasm')
  const metadata = JSON.parse(readFileSync(join(packageRoot, 'package.json'), 'utf8'))
  const lock = JSON.parse(readFileSync(join(rootDir, 'package-lock.json'), 'utf8'))
  if (metadata.version !== lock.packages['node_modules/@duckdb/duckdb-wasm'].version) throw new Error('DuckDB package differs from lockfile')
  mkdirSync(join(outputRoot, 'sql'), { recursive: true })
  const files = ['dist/duckdb-mvp.wasm', 'dist/duckdb-browser-mvp.worker.js', 'LICENSE'].map((path) => {
    const name = path.split('/').at(-1)
    const source = path === 'LICENSE' ? join(rootDir, 'docs/licenses/duckdb-wasm-LICENSE.txt') : join(packageRoot, path)
    const bytes = readFileSync(source)
    copyFileSync(source, join(outputRoot, 'sql', name))
    return { path: `sql/${name}`, bytes: bytes.length, sha256: createHash('sha256').update(bytes).digest('hex') }
  })
  // This extension is part of the same DuckDB engine used by the pinned npm
  // bundle. Pin the decoded upstream Wasm bytes; never accept a mutable update.
  const parquet = {
    path: 'sql/parquet.duckdb_extension.wasm',
    url: 'https://extensions.duckdb.org/v1.4.3/wasm_mvp/parquet.duckdb_extension.wasm',
    bytes: 2867304,
    sha256: '0785c6c95d003eff4faa7b3b4b660f02c9c92f6d68d135ddf330d42e3a650600',
  }
  if (metadata.version !== '1.32.0') throw new Error('Reverify the offline Parquet extension before updating DuckDB')
  const response = await fetch(parquet.url, { signal: AbortSignal.timeout(60_000) })
  if (!response.ok) throw new Error(`Parquet extension download failed: HTTP ${response.status}`)
  const bytes = Buffer.from(await response.arrayBuffer())
  if (bytes.length !== parquet.bytes || createHash('sha256').update(bytes).digest('hex') !== parquet.sha256) throw new Error('Offline Parquet extension checksum differs from the pin')
  writeFileSync(join(outputRoot, parquet.path), bytes)
  files.push(parquet)
  writeFileSync(join(outputRoot, 'native-runtime-manifest.json'), `${JSON.stringify({ schemaVersion: 1, sql: { package: metadata.name, version: metadata.version, variant: 'mvp', files } }, null, 2)}\n`)
  console.log(`Bundled offline DuckDB ${metadata.version}: ${(files.reduce((sum, file) => sum + file.bytes, 0) / 1024 / 1024).toFixed(2)} MiB`)
}
