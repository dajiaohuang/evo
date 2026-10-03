import fs from 'node:fs'
import crypto from 'node:crypto'
const dir = 'data/sources/snapshots/amphibia-content-scope-2026-10-02'
const url = 'https://paleobiodb.org/data1.2/taxa/list.json?base_id=36319&status=all&show=attr,app,class,ref&limit=all'
const response = await fetch(url, { signal: AbortSignal.timeout(60000) })
if (!response.ok) throw new Error(`HTTP ${response.status}`)
const bytes = Buffer.from(await response.arrayBuffer())
const result = JSON.parse(bytes)
if (!result.records || result.errors?.length || result.warnings?.length) throw new Error(JSON.stringify(result))
fs.writeFileSync(`${dir}/pbdb-classification-details.json`, bytes)
fs.writeFileSync(`${dir}/pbdb-classification-details.manifest.json`, JSON.stringify({ url, retrievedAt: new Date().toISOString(), sha256: crypto.createHash('sha256').update(bytes).digest('hex'), count: result.records.length }, null, 2) + '\n')
console.log(JSON.stringify({ count: result.records.length, examples: result.records.slice(0, 2) }, null, 2))
