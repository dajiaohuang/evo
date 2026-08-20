import { describe, expect, it } from 'vitest'
import { compareReleaseFileIndexes, type ReleaseFileIndex } from './releaseHistory'

const file = (version: string, path: string, bytes: number, sha256: string) => ({ url: `releases/${version}/${path}`, bytes, sha256 })

describe('release file comparison', () => {
  it('compares stable artifact paths across versioned release roots', () => {
    const older: ReleaseFileIndex = { schemaVersion: 1, datasetVersion: 'v1', files: [file('v1', 'core/a.json.gz', 10, 'a'), file('v1', 'core/removed.json.gz', 5, 'r'), file('v1', 'core/same.json.gz', 4, 's')] }
    const newer: ReleaseFileIndex = { schemaVersion: 1, datasetVersion: 'v2', files: [file('v2', 'core/a.json.gz', 12, 'b'), file('v2', 'core/added.json.gz', 7, 'n'), file('v2', 'core/same.json.gz', 4, 's')] }
    expect(compareReleaseFileIndexes(older, newer)).toEqual({ olderVersion: 'v1', newerVersion: 'v2', added: ['core/added.json.gz'], removed: ['core/removed.json.gz'], changed: ['core/a.json.gz'], unchanged: 1, olderBytes: 19, newerBytes: 23, byteDelta: 4 })
  })
})
