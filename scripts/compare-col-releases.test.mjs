import { execFileSync } from 'node:child_process'
import { createHash } from 'node:crypto'
import { readFileSync } from 'node:fs'
import { gunzipSync } from 'node:zlib'
import { expect, it } from 'vitest'

it('compares pinned release records without inventing biological correspondence', () => {
  execFileSync('python', ['-B', '-X', 'utf8', 'scripts/compare-col-releases.test.py'], {
    encoding: 'utf8', stdio: 'pipe', timeout: 30_000,
  })
})

it('reconciles every published change shard with its pinned report', () => {
  const root = 'data/catalogue-of-life/comparisons/2026-08-20--2026-09-11'
  const manifest = JSON.parse(readFileSync(`${root}/manifest.json`, 'utf8'))
  const counts = {}
  const digest = (bytes) => createHash('sha256').update(bytes).digest('hex')
  for (const file of manifest.files) {
    const packed = readFileSync(`${root}/${file.path}`)
    expect([packed.length, digest(packed), packed[9]]).toEqual([file.bytes, file.sha256, 255])
    const raw = gunzipSync(packed)
    expect([raw.length, digest(raw)]).toEqual([file.sourceBytes, file.sourceSha256])
    expect(raw.length).toBeLessThanOrEqual(1024 * 1024)
    const rows = raw.toString('utf8').trim().split('\n').map((line) => JSON.parse(line))
    expect(rows).toHaveLength(file.records)
    for (const row of rows) {
      for (const category of row.changes) counts[category] = (counts[category] ?? 0) + 1
      if (row.before && row.after) {
        if (!row.before.source || row.before.source !== row.after.source) throw new Error('Cross-source correspondence in published report')
        if (row.correspondence === 'unique-exact-source-name-status') {
          for (const key of ['source', 'rank', 'name', 'authorship', 'status']) {
            if (row.before[key] !== row.after[key]) throw new Error(`Non-exact fallback: ${key}`)
          }
        }
      }
    }
  }
  expect(counts).toEqual(manifest.summary)
  expect(counts.addedAccepted - counts.noLongerAccepted).toBe(manifest.counts.acceptedAfter - manifest.counts.acceptedBefore)
  expect(manifest.inputs.map((input) => input.provenance.checklistBankDatasetKey)).toEqual([316115, 316321])
})
