import assert from 'node:assert/strict'
import { createHash } from 'node:crypto'
import { createWriteStream, existsSync, mkdirSync, readFileSync, renameSync, writeFileSync } from 'node:fs'
import { join, resolve } from 'node:path'
import { Readable } from 'node:stream'
import { pipeline } from 'node:stream/promises'

const locale = process.argv[2] ?? 'en'
assert.match(locale, /^[a-z0-9-]+$/)
const folder = resolve('.git/evo-wikipedia-col26-8/sources')
mkdirSync(folder, { recursive: true })
const projectsFile = join(folder, 'wikipedia-projects.json')
const project = existsSync(projectsFile) ? JSON.parse(readFileSync(projectsFile, 'utf8')).projects.find(row => row.locale === locale) : null
assert.ok(project && /^[a-z0-9_]+wiki$/.test(project.dbname), 'Locale must be in the captured Wikimedia project inventory')
const target = join(folder, `${locale}wiki-titles-ns0.gz`)
const partial = target + '.partial'
assert.ok(!existsSync(target) && !existsSync(partial), 'Preserve existing source files; choose a fresh workspace to download again')
const url = `https://dumps.wikimedia.org/${project.dbname}/latest/${project.dbname}-latest-all-titles-in-ns0.gz`
const response = await fetch(url, { signal: AbortSignal.timeout(15 * 60 * 1000), headers: { 'User-Agent': 'EvoAtlas/0.21 (https://github.com/dajiaohuang/evo; Wikipedia title index)' } })
if (!response.ok || !response.body) throw new Error(`Title dump HTTP ${response.status}`)
const expected = Number(response.headers.get('content-length'))
assert.ok(Number.isSafeInteger(expected) && expected > 0)
const sha = createHash('sha256')
let bytes = 0
const stream = Readable.fromWeb(response.body)
stream.on('data', chunk => { bytes += chunk.length; sha.update(chunk); if (bytes > expected) stream.destroy(new Error('Dump exceeded declared size')) })
await pipeline(stream, createWriteStream(partial, { flags: 'wx' }))
assert.equal(bytes, expected)
renameSync(partial, target)
const receipt = { locale, url, finalUrl: response.url, lastModified: response.headers.get('last-modified'), etag: response.headers.get('etag'),
  bytes, sha256: sha.digest('hex'), retrievedAt: new Date().toISOString() }
writeFileSync(target + '.receipt.json', JSON.stringify(receipt, null, 2) + '\n', { flag: 'wx' })
console.log(JSON.stringify(receipt))
