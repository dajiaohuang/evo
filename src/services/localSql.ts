import type { FossilOccurrence } from '../types'
import { resolvePeriodInfo } from './geology'

type DuckDbModule = typeof import('@duckdb/duckdb-wasm')
type DuckDbInstance = InstanceType<DuckDbModule['AsyncDuckDB']>
type JsonRow = Record<string, unknown>

export interface LocalSqlResult {
  columns: string[]
  rows: JsonRow[]
  elapsedMs: number
  truncated: boolean
}

const MAX_SQL_LENGTH = 20_000
const MAX_PREVIEW_ROWS = 500
let runtimePromise: Promise<{ module: DuckDbModule; db: DuckDbInstance }> | null = null
let operation = Promise.resolve()

function withoutComments(sql: string): string {
  return sql.replace(/\/\*[\s\S]*?\*\//g, ' ').replace(/--.*$/gm, ' ')
}

export function validateReadOnlySql(sql: string): string {
  if (sql.length > MAX_SQL_LENGTH) throw new Error(`SQL is limited to ${MAX_SQL_LENGTH.toLocaleString()} characters.`)
  const normalized = withoutComments(sql).trim().replace(/;\s*$/, '').trim()
  if (!/^(select|with)\b/i.test(normalized)) throw new Error('Only SELECT or WITH queries are allowed in the local workspace.')
  if (normalized.includes(';')) throw new Error('Run one read-only SQL statement at a time.')
  if (/\b(insert|update|delete|drop|alter|create|copy|export|import|install|load|attach|detach|call|pragma|vacuum)\b/i.test(normalized)) {
    throw new Error('Mutating, file-writing and extension-management SQL is disabled.')
  }
  return normalized
}

function finiteNumber(value: unknown): number | null {
  const number = Number(value)
  return Number.isFinite(number) ? number : null
}

export function fossilsForSql(records: FossilOccurrence[]): JsonRow[] {
  return records.map((record) => ({
    occurrence_id: record.oid,
    accepted_name: record.tna || null,
    identified_name: record.idn || null,
    taxon_id: record.tid || null,
    interval: record.oei || null,
    period: resolvePeriodInfo((record.eag + record.lag) / 2)?.name ?? null,
    early_age_ma: record.eag,
    late_age_ma: record.lag,
    country: record.cc2 || null,
    state_or_region: record.stp || null,
    collection_id: record.cid || null,
    formation: record.formation || null,
    member: record.member || null,
    environment: record.paleoenvironment || null,
    package_id: record.packageId || null,
    modern_lng: finiteNumber(record.lng),
    modern_lat: finiteNumber(record.lat),
    paleo_lng: finiteNumber(record.paleolng),
    paleo_lat: finiteNumber(record.paleolat),
    reference_id: record.referenceId || null,
  }))
}

async function runtime(): Promise<{ module: DuckDbModule; db: DuckDbInstance }> {
  if (runtimePromise) return runtimePromise
  runtimePromise = import('@duckdb/duckdb-wasm').then(async (module) => {
    const bundle = await module.selectBundle(module.getJsDelivrBundles())
    if (!bundle.mainWorker) throw new Error('No compatible DuckDB-Wasm worker is available in this browser.')
    const workerUrl = URL.createObjectURL(new Blob([`importScripts(${JSON.stringify(bundle.mainWorker)});`], { type: 'text/javascript' }))
    const worker = new Worker(workerUrl)
    const db = new module.AsyncDuckDB(new module.ConsoleLogger(module.LogLevel.WARNING), worker)
    try {
      await db.instantiate(bundle.mainModule, bundle.pthreadWorker)
    } finally {
      URL.revokeObjectURL(workerUrl)
    }
    return { module, db }
  }).catch((error) => {
    runtimePromise = null
    throw error
  })
  return runtimePromise
}

async function prepareTables(records: FossilOccurrence[], userRows: JsonRow[]) {
  const { db } = await runtime()
  const connection = await db.connect()
  await connection.query('DROP TABLE IF EXISTS occurrences; DROP TABLE IF EXISTS user_data;')
  const occurrenceFile = `occurrences-${crypto.randomUUID()}.json`
  await db.registerFileText(occurrenceFile, JSON.stringify(fossilsForSql(records)))
  await connection.insertJSONFromPath(occurrenceFile, { name: 'occurrences', schema: 'main' })
  await db.dropFile(occurrenceFile)
  if (userRows.length) {
    const userFile = `user-data-${crypto.randomUUID()}.json`
    await db.registerFileText(userFile, JSON.stringify(userRows))
    await connection.insertJSONFromPath(userFile, { name: 'user_data', schema: 'main' })
    await db.dropFile(userFile)
  } else {
    await connection.query('CREATE TABLE user_data (entity_id VARCHAR, note VARCHAR);')
  }
  return { db, connection }
}

function jsonValue(value: unknown): unknown {
  if (typeof value === 'bigint') return value <= BigInt(Number.MAX_SAFE_INTEGER) && value >= BigInt(Number.MIN_SAFE_INTEGER) ? Number(value) : value.toString()
  if (Array.isArray(value)) return value.map(jsonValue)
  if (value && typeof value === 'object') return Object.fromEntries(Object.entries(value).map(([key, child]) => [key, jsonValue(child)]))
  return value
}

async function serialized<T>(work: () => Promise<T>): Promise<T> {
  const pending = operation.then(work, work)
  operation = pending.then(() => undefined, () => undefined)
  return pending
}

export function runLocalSql(sql: string, records: FossilOccurrence[], userRows: JsonRow[] = []): Promise<LocalSqlResult> {
  const query = validateReadOnlySql(sql)
  return serialized(async () => {
    const startedAt = performance.now()
    const { connection } = await prepareTables(records, userRows)
    try {
      const table = await connection.query(`SELECT * FROM (${query}) AS evo_user_query LIMIT ${MAX_PREVIEW_ROWS + 1}`)
      const rows = table.toArray().map((row) => jsonValue(row.toJSON()) as JsonRow)
      return {
        columns: table.schema.fields.map((field) => field.name),
        rows: rows.slice(0, MAX_PREVIEW_ROWS),
        elapsedMs: performance.now() - startedAt,
        truncated: rows.length > MAX_PREVIEW_ROWS,
      }
    } finally {
      await connection.close()
    }
  })
}

export function exportLocalSqlParquet(sql: string, records: FossilOccurrence[], userRows: JsonRow[] = []): Promise<Uint8Array> {
  const query = validateReadOnlySql(sql)
  return serialized(async () => {
    const { db, connection } = await prepareTables(records, userRows)
    const output = `evo-sql-${crypto.randomUUID()}.parquet`
    try {
      await connection.query(`COPY (${query}) TO '${output}' (FORMAT parquet, COMPRESSION zstd)`)
      return await db.copyFileToBuffer(output)
    } finally {
      await db.dropFile(output).catch(() => null)
      await connection.close()
    }
  })
}
