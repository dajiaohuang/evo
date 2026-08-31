import { createHash } from 'node:crypto'
import { createWriteStream, existsSync, readFileSync, statSync, truncateSync } from 'node:fs'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const sourcePath = resolve(root, 'data/sources/itis-2026-08-26.json')
const source = JSON.parse(readFileSync(sourcePath, 'utf8'))
const destination = process.argv.at(2)
  ? resolve(process.argv.at(2))
  : null

if (!destination) throw new Error('Usage: node scripts/fetch-itis-sqlite.mjs <destination.zip>')

const request = source.acquisition.requests.find((entry) => entry.url.endsWith('/itisSqlite.zip'))
if (!request) throw new Error('The pinned ITIS source ledger does not describe itisSqlite.zip')

const expectedBytes = request.response.bytes
const expectedSha256 = request.response.sha256
let offset = existsSync(destination) ? statSync(destination).size : 0
if (offset > expectedBytes) {
  truncateSync(destination, 0)
  offset = 0
}

while (offset < expectedBytes) {
  const response = await fetch(request.url, {
    headers: { Range: `bytes=${offset}-${Math.min(offset + 16 * 1024 * 1024 - 1, expectedBytes - 1)}` },
  })
  if (response.status !== 206) throw new Error(`Expected HTTP 206 range response, received ${response.status}`)
  const expectedRange = `bytes ${offset}-${Math.min(offset + 16 * 1024 * 1024 - 1, expectedBytes - 1)}/${expectedBytes}`
  if (response.headers.get('content-range') !== expectedRange) throw new Error(`Unexpected Content-Range: ${response.headers.get('content-range')}`)
  const bytes = Buffer.from(await response.arrayBuffer())
  if (bytes.length !== Number(response.headers.get('content-length'))) throw new Error('ITIS range body length does not match Content-Length')
  await new Promise((resolveWrite, rejectWrite) => {
    const output = createWriteStream(destination, { flags: 'a' })
    output.on('error', rejectWrite)
    output.on('finish', resolveWrite)
    output.end(bytes)
  })
  offset += bytes.length
  console.log(`Fetched ${offset}/${expectedBytes} bytes`)
}

const archive = readFileSync(destination)
if (archive.length !== expectedBytes) throw new Error(`Archive length mismatch: ${archive.length}`)
const sha256 = createHash('sha256').update(archive).digest('hex')
if (sha256 !== expectedSha256) throw new Error(`Archive SHA-256 mismatch: ${sha256}`)
console.log(JSON.stringify({ source: sourcePath, destination, bytes: archive.length, sha256 }, null, 2))
