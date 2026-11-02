import assert from 'node:assert/strict'
import { createHash } from 'node:crypto'
import { readFileSync } from 'node:fs'
import { join } from 'node:path'

const snapshot = process.argv[2]
assert.ok(snapshot, 'Provide the verified snapshot directory')
const local = readFileSync(join(snapshot, 'manifest.json'))
const expected = createHash('sha256').update(local).digest('hex')
const base = 'https://evo-lovat.vercel.app/evo/'
const response = await fetch(`${base}wikipedia/col/manifest.json`, { cache: 'no-store', signal: AbortSignal.timeout(30000) })
assert.equal(response.status, 200)
const bytes = Buffer.from(await response.arrayBuffer())
const actual = createHash('sha256').update(bytes).digest('hex')
assert.equal(actual, expected, 'Live manifest does not match published snapshot')
const manifest = JSON.parse(bytes)
assert.equal(manifest.contentMode, 'links-only')
const file = Object.values(manifest.shards)[0]
const shard = await fetch(`${base}wikipedia/col/${file.path}`, { signal: AbortSignal.timeout(30000) })
assert.equal(shard.status, 200)
assert.equal(createHash('sha256').update(Buffer.from(await shard.arrayBuffer())).digest('hex'), file.sha256)
const abstracts = await fetch(`${base}wikipedia/abstracts.json`, { signal: AbortSignal.timeout(30000) })
assert.equal(abstracts.status, 404)
console.log(JSON.stringify({ status: 'passed', manifestSha256: actual, shard: file.path, abstractsStatus: abstracts.status }))
