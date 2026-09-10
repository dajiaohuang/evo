import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import type { FossilOccurrence } from '../types'

const mocks = vi.hoisted(() => ({
  query: vi.fn(), insert: vi.fn(), close: vi.fn(), register: vi.fn(), drop: vi.fn(), terminate: vi.fn(), instantiate: vi.fn(),
}))
vi.mock('@duckdb/duckdb-wasm', () => ({
  selectBundle: async () => ({ mainWorker: 'worker.js', mainModule: 'module.wasm' }), getJsDelivrBundles: () => ({}),
  ConsoleLogger: class {}, LogLevel: { WARNING: 1 },
  AsyncDuckDB: class {
    instantiate = mocks.instantiate
    registerFileText = mocks.register
    dropFile = mocks.drop
    connect = async () => ({ query: mocks.query, insertJSONFromPath: mocks.insert, close: mocks.close })
    copyFileToBuffer = async () => new Uint8Array([1])
  },
}))
const records = [{ oid: 'occ:1', eag: 10, lag: 5, lng: '0', lat: '0' }] as FossilOccurrence[]

describe('SQL runtime ownership', () => {
  beforeEach(() => {
    vi.resetModules(); vi.resetAllMocks(); vi.useFakeTimers()
    mocks.query.mockResolvedValue({ toArray: () => [], schema: { fields: [] } })
    mocks.insert.mockResolvedValue(undefined)
    mocks.close.mockResolvedValue(undefined)
    mocks.register.mockResolvedValue(undefined)
    mocks.drop.mockResolvedValue(undefined)
    mocks.instantiate.mockResolvedValue(undefined)
    vi.stubGlobal('Worker', class { terminate = mocks.terminate })
    vi.stubGlobal('URL', class extends URL { static createObjectURL() { return 'blob:test' } static revokeObjectURL() {} })
  })
  afterEach(async () => { await vi.runOnlyPendingTimersAsync(); vi.useRealTimers(); vi.unstubAllGlobals(); vi.unstubAllEnvs() })

  it('loads native SQL only from the document root, then passes a blob module to the worker', async () => {
    vi.stubEnv('VITE_NATIVE_APP', 'true')
    vi.spyOn(document, 'baseURI', 'get').mockReturnValue('capacitor://localhost/')
    const requests: string[] = []
    const fetch = vi.fn(async (url: string) => {
      requests.push(url)
      return { ok: true, text: async () => '/* bundled worker */', arrayBuffer: async () => new ArrayBuffer(8) }
    })
    vi.stubGlobal('fetch', fetch)
    const { runLocalSql } = await import('./localSql')
    await runLocalSql('SELECT 1', records)
    expect(requests).toEqual([
      'capacitor://localhost/sql/duckdb-browser-mvp.worker.js', 'capacitor://localhost/sql/duckdb-mvp.wasm',
    ])
    expect(mocks.instantiate).toHaveBeenCalledWith('blob:test', undefined)
  })

  it('reports a missing bundled engine without falling back to a remote download', async () => {
    vi.stubEnv('VITE_NATIVE_APP', 'true')
    vi.stubGlobal('fetch', vi.fn(async () => ({ ok: false })))
    const { runLocalSql } = await import('./localSql')
    await expect(runLocalSql('SELECT 1', records)).rejects.toThrow('Bundled SQL engine is unavailable')
    expect(mocks.instantiate).not.toHaveBeenCalled()
  })

  it('reuses occurrences across queries and exports, and updates user data independently', async () => {
    const { runLocalSql, exportLocalSqlParquet } = await import('./localSql')
    await runLocalSql('SELECT * FROM occurrences', records)
    await runLocalSql('SELECT count(*) FROM occurrences', records)
    await exportLocalSqlParquet('SELECT * FROM occurrences', records)
    expect(mocks.insert).toHaveBeenCalledTimes(1)
    await runLocalSql('SELECT * FROM occurrences', records, [{ note: 'a' }])
    expect(mocks.insert).toHaveBeenCalledTimes(2)
    expect(mocks.insert.mock.calls[1][1].name).toBe('user_data')
    await runLocalSql('SELECT * FROM occurrences', [...records], [{ note: 'a' }])
    expect(mocks.insert).toHaveBeenCalledTimes(3)
    expect(mocks.insert.mock.calls[2][1].name).toBe('occurrences')
  })

  it('closes and removes temporary files after an import failure, then retries', async () => {
    const { runLocalSql } = await import('./localSql')
    mocks.insert.mockRejectedValueOnce(new Error('import failed'))
    await expect(runLocalSql('SELECT * FROM occurrences', records)).rejects.toThrow('import failed')
    expect(mocks.drop).toHaveBeenCalledTimes(1)
    expect(mocks.close).toHaveBeenCalledTimes(1)
    await runLocalSql('SELECT * FROM occurrences', records)
    expect(mocks.insert).toHaveBeenCalledTimes(2)
  })

  it('provides a typed empty occurrences table', async () => {
    const { runLocalSql } = await import('./localSql')
    await runLocalSql('SELECT count(*) FROM occurrences', [])
    expect(mocks.query.mock.calls.some(([sql]) => sql.includes('CREATE TABLE occurrences') && sql.includes('early_age_ma DOUBLE'))).toBe(true)
    expect(mocks.insert).not.toHaveBeenCalled()
  })

  it('terminates an unresponsive query on deadline and permits a fresh runtime', async () => {
    const { runLocalSql } = await import('./localSql')
    mocks.query.mockImplementation((sql: string) => sql.startsWith('SELECT * FROM (') ? new Promise(() => {}) : Promise.resolve())
    const failed = expect(runLocalSql('SELECT 1', records, [], { timeoutMs: 50 })).rejects.toThrow('time limit')
    await vi.advanceTimersByTimeAsync(50)
    await failed
    expect(mocks.terminate).toHaveBeenCalledTimes(1)
    mocks.query.mockResolvedValue({ toArray: () => [], schema: { fields: [] } })
    await runLocalSql('SELECT 1', records)
    expect(mocks.instantiate).toHaveBeenCalledTimes(2)
  })

  it('cancels a running request and releases an idle engine', async () => {
    const { runLocalSql } = await import('./localSql')
    await runLocalSql('SELECT 1', records)
    await vi.advanceTimersByTimeAsync(120_000)
    expect(mocks.terminate).toHaveBeenCalledTimes(1)
    mocks.query.mockImplementation((sql: string) => sql.startsWith('SELECT * FROM (') ? new Promise(() => {}) : Promise.resolve())
    const controller = new AbortController()
    const failed = expect(runLocalSql('SELECT 1', records, [], { signal: controller.signal })).rejects.toThrow('cancelled')
    await vi.advanceTimersByTimeAsync(1)
    controller.abort()
    await failed
    expect(mocks.terminate).toHaveBeenCalledTimes(2)
  })

  it('terminates a worker even if engine initialisation never completes', async () => {
    const { runLocalSql } = await import('./localSql')
    mocks.instantiate.mockImplementation(() => new Promise(() => {}))
    const failed = expect(runLocalSql('SELECT 1', records, [], { timeoutMs: 50 })).rejects.toThrow('time limit')
    await vi.advanceTimersByTimeAsync(50)
    await failed
    expect(mocks.terminate).toHaveBeenCalledTimes(1)
  })
})
