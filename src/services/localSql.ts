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
interface SqlRuntime {
  db: DuckDbInstance
  worker: Worker
  alive: boolean
  records?: readonly FossilOccurrence[]
  userJson?: string
}
export interface LocalSqlOptions {
  signal?: AbortSignal
  timeoutMs?: number
}
let runtimePromise: Promise<SqlRuntime> | null = null
const runtimeInstances = new WeakMap<Promise<SqlRuntime>, SqlRuntime>()
const cancelledRuntimes = new WeakSet<Promise<SqlRuntime>>()
let operation = Promise.resolve()
let idleTimer: ReturnType<typeof setTimeout> | undefined
const EMPTY_ROWS: JsonRow[] = []

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
  if (typeof value !== 'number' && typeof value !== 'string') return null
  if (typeof value === 'string' && !value.trim()) return null
  const number = Number(value)
  return Number.isFinite(number) ? number : null
}

export function fossilsForSql(records: readonly FossilOccurrence[]): JsonRow[] {
  return records.map((record) => {
    const early = finiteNumber(record.eag)
    const late = finiteNumber(record.lag)
    return {
    occurrence_id: record.oid,
    accepted_name: record.tna || null,
    identified_name: record.idn || null,
    taxon_id: record.tid || null,
    interval: record.oei || null,
    period: early === null || late === null ? null : resolvePeriodInfo((early + late) / 2)?.name ?? null,
    early_age_ma: early,
    late_age_ma: late,
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
  } })
}

function runtime(): Promise<SqlRuntime> {
  if (runtimePromise) return runtimePromise
  const lease = import('@duckdb/duckdb-wasm').then(async (module) => {
    const bundle = await module.selectBundle(module.getJsDelivrBundles())
    if (cancelledRuntimes.has(lease)) throw new DOMException('SQL cancelled.', 'AbortError')
    if (!bundle.mainWorker) throw new Error('No compatible DuckDB-Wasm worker is available in this browser.')
    const workerUrl = URL.createObjectURL(new Blob([`importScripts(${JSON.stringify(bundle.mainWorker)});`], { type: 'text/javascript' }))
    const worker = new Worker(workerUrl)
    const db = new module.AsyncDuckDB(new module.ConsoleLogger(module.LogLevel.WARNING), worker)
    const engine: SqlRuntime = { db, worker, alive: true }
    runtimeInstances.set(lease, engine)
    try {
      await db.instantiate(bundle.mainModule, bundle.pthreadWorker)
    } catch (error) {
      release(engine)
      throw error
    } finally {
      URL.revokeObjectURL(workerUrl)
    }
    return engine
  }).catch((error) => {
    if (runtimePromise === lease) runtimePromise = null
    throw error
  })
  runtimePromise = lease
  return lease
}

async function prepareTables(engine: SqlRuntime, records: readonly FossilOccurrence[], userRows: JsonRow[]) {
  const { db } = engine
  const connection = await db.connect()
  const importRows = async (name: string, json: string) => {
    const file = `${name}-${crypto.randomUUID()}.json`
    try {
      await db.registerFileText(file, json)
      await connection.insertJSONFromPath(file, { name, schema: 'main' })
    } finally {
      if (engine.alive) await db.dropFile(file)
    }
  }
  try {
    // Lab result arrays are immutable snapshots. Replacing a result invalidates
    // this identity, while repeated SQL and export share the prepared table.
    if (engine.records !== records) {
      engine.records = undefined
      await connection.query('DROP TABLE IF EXISTS occurrences;')
      if (records.length) await importRows('occurrences', JSON.stringify(fossilsForSql(records)))
      else await connection.query(`CREATE TABLE occurrences (
        occurrence_id VARCHAR, accepted_name VARCHAR, identified_name VARCHAR, taxon_id VARCHAR,
        interval VARCHAR, period VARCHAR, early_age_ma DOUBLE, late_age_ma DOUBLE,
        country VARCHAR, state_or_region VARCHAR, collection_id VARCHAR, formation VARCHAR,
        member VARCHAR, environment VARCHAR, package_id VARCHAR, modern_lng DOUBLE,
        modern_lat DOUBLE, paleo_lng DOUBLE, paleo_lat DOUBLE, reference_id VARCHAR);`)
      engine.records = records
    }
    const userJson = JSON.stringify(userRows)
    if (engine.userJson !== userJson) {
      engine.userJson = undefined
      await connection.query('DROP TABLE IF EXISTS user_data;')
      if (userRows.length) await importRows('user_data', userJson)
      else await connection.query('CREATE TABLE user_data (entity_id VARCHAR, note VARCHAR);')
      engine.userJson = userJson
    }
    return connection
  } catch (error) {
    if (engine.alive) await connection.close()
    throw error
  }
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

function release(engine: SqlRuntime) {
  if (!engine.alive) return
  engine.alive = false
  engine.records = undefined
  engine.userJson = undefined
  engine.worker.terminate()
}

function withRuntime<T>(work: (engine: SqlRuntime) => Promise<T>, options: LocalSqlOptions): Promise<T> {
  return serialized(async () => {
    options.signal?.throwIfAborted()
    clearTimeout(idleTimer)
    const lease = runtime()
    let interrupted = false
    let interrupt!: () => void
    const cancelled = new Promise<never>((_resolve, reject) => {
      interrupt = () => {
        interrupted = true
        cancelledRuntimes.add(lease)
        const engine = runtimeInstances.get(lease)
        if (engine) release(engine)
        if (runtimePromise === lease) runtimePromise = null
        void lease.then(release, () => undefined)
        reject(options.signal?.aborted
          ? new DOMException('SQL cancelled.', 'AbortError')
          : new Error('SQL exceeded its time limit. The engine was released; run a smaller query.'))
      }
    })
    const timer = setTimeout(interrupt, options.timeoutMs ?? 30_000)
    options.signal?.addEventListener('abort', interrupt, { once: true })
    try {
      return await Promise.race([lease.then((engine) => {
        if (interrupted) throw new DOMException('SQL cancelled.', 'AbortError')
        return work(engine)
      }), cancelled])
    } finally {
      clearTimeout(timer)
      options.signal?.removeEventListener('abort', interrupt)
      if (runtimePromise === lease) idleTimer = setTimeout(() => {
        if (runtimePromise !== lease) return
        runtimePromise = null
        void lease.then(release, () => undefined)
      }, 120_000)
    }
  })
}

export function runLocalSql(sql: string, records: readonly FossilOccurrence[], userRows: JsonRow[] = EMPTY_ROWS, options: LocalSqlOptions = {}): Promise<LocalSqlResult> {
  const query = validateReadOnlySql(sql)
  return withRuntime(async (engine) => {
    const startedAt = performance.now()
    const connection = await prepareTables(engine, records, userRows)
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
      if (engine.alive) await connection.close()
    }
  }, options)
}

export function exportLocalSqlParquet(sql: string, records: readonly FossilOccurrence[], userRows: JsonRow[] = EMPTY_ROWS, options: LocalSqlOptions = {}): Promise<Uint8Array> {
  const query = validateReadOnlySql(sql)
  return withRuntime(async (engine) => {
    const { db } = engine
    const connection = await prepareTables(engine, records, userRows)
    const output = `evo-sql-${crypto.randomUUID()}.parquet`
    try {
      await connection.query(`COPY (${query}) TO '${output}' (FORMAT parquet, COMPRESSION zstd)`)
      return await db.copyFileToBuffer(output)
    } finally {
      if (engine.alive) {
        await db.dropFile(output).catch(() => null)
        await connection.close()
      }
    }
  }, options)
}
