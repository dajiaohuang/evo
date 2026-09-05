import { beforeEach, describe, expect, it } from 'vitest'
import { parseNativeSyncLine, readNativeSyncProgress, recordNativeSyncError, resetNativeSyncProgress } from './nativeSyncClient'

describe('native v1 streaming sync contract', () => {
  beforeEach(() => {
    resetNativeSyncProgress()
  })

  it('parses the manifest header and file descriptors without storing a full inventory', () => {
    expect(parseNativeSyncLine(JSON.stringify({
      kind: 'manifest', schemaVersion: 1, apiVersion: 'v1', protocolVersion: 'v1', datasetVersion: 'rc141', releaseVersion: 'rc141',
      profile: 'full', complete: true, totalFiles: 1, totalBytes: 42, resourceBase: '/v1/resources/',
    }))).toMatchObject({ kind: 'manifest', totalFiles: 1 })
    expect(parseNativeSyncLine(JSON.stringify({
      kind: 'file', path: 'data/manifest.json', profile: 'full', bytes: 42, sha256: 'a'.repeat(64), mediaType: 'application/json', encoding: 'identity',
      releaseVersion: 'rc141', url: '/v1/resources/data/manifest.json',
    }))).toMatchObject({ kind: 'file', path: 'data/manifest.json' })
  })

  it('rejects old, mixed, or malformed stream lines', () => {
    expect(() => parseNativeSyncLine(JSON.stringify({ schemaVersion: 0, records: [] }))).toThrow(/unknown kind/)
    expect(() => parseNativeSyncLine(JSON.stringify({ kind: 'manifest', schemaVersion: 1, apiVersion: 'v0', protocolVersion: 'v1' }))).toThrow(/current full-release contract/)
    expect(() => parseNativeSyncLine(JSON.stringify({ kind: 'file', path: 'data/x', profile: 'full', bytes: 1, sha256: 'not-a-sha', mediaType: 'x', encoding: 'identity', releaseVersion: 'rc141', url: '/v1/resources/data/x' }))).toThrow(/valid current full-release descriptor/)
  })

  it('uses an explicit progress marker and does not infer completion', () => {
    expect(readNativeSyncProgress()).toMatchObject({ status: 'disabled', filesSeen: 0, bytesSeen: 0 })
    recordNativeSyncError(new Error('network unavailable'))
    expect(readNativeSyncProgress()).toMatchObject({ status: 'error', error: 'network unavailable' })
  })
})
