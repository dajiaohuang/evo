import { expect, it } from 'vitest'
import { gunzipSync } from 'fflate'
import { readFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { fixture } from './staticDataClient.release.fixture'

const existingBuildRoot = process.env.EVO_EXISTING_DIST_ROOT

it.skipIf(!existingBuildRoot)('loads records from each of the 256 existing production gzip shards', async () => {
  const root = resolve(existingBuildRoot!, 'catalogue/knowledge')
  let loaded = 0
  let records = 0
  for (let byte = 0; byte < 256; byte++) {
    const prefix = byte.toString(16).padStart(2, '0')
    const bytes = new Uint8Array(readFileSync(resolve(root, `${prefix}.json.gz`)))
    const rows = JSON.parse(new TextDecoder().decode(gunzipSync(bytes))) as Array<{ colId?: string }>
    records += rows.length
    const sample = rows.find(row => typeof row.colId === 'string')
    if (!sample?.colId) { expect(rows).toHaveLength(0); continue }
    const f = await fixture(bytes, {}, sample.colId)
    await expect(f.loadCatalogueKnowledge(sample.colId)).resolves.toMatchObject({ colId: sample.colId })
    loaded++
  }
  expect(loaded).toBeGreaterThan(0)
  expect(records).toBe(359478)
}, 180_000)
