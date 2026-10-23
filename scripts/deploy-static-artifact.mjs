import { createHash } from 'node:crypto'
import { createWriteStream, existsSync, mkdirSync, readdirSync, readFileSync, unlinkSync, writeFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { execFileSync } from 'node:child_process'
import { Readable } from 'node:stream'
import { pipeline } from 'node:stream/promises'

const artifact = JSON.parse(readFileSync('deployment-artifact.json', 'utf8'))
if (!/^[a-f0-9]{64}$/.test(artifact.sha256) || !Number.isSafeInteger(artifact.bytes) || artifact.bytes <= 0) {
  throw new Error('The deployment artifact needs its exact byte count and SHA-256')
}
const source = new URL(artifact.url)
if (source.protocol !== 'https:' || source.hostname !== 'github.com' || !source.pathname.startsWith('/dajiaohuang/evo/releases/download/')) {
  throw new Error('The deployment artifact must be a release asset of dajiaohuang/evo')
}
if (!/^[a-f0-9]{40}$/.test(artifact.sourceCommit)) throw new Error('Missing source commit')

const archive = '.vercel-site-artifact.tar'
const output = 'site'
if (existsSync(output) && readdirSync(output).length) throw new Error('Deployment output must start empty')
mkdirSync(output, { recursive: true })
const response = await fetch(source, { signal: AbortSignal.timeout(15 * 60 * 1000) })
if (!response.ok || !response.body) throw new Error(`Artifact download failed: HTTP ${response.status}`)
const hash = createHash('sha256')
let bytes = 0
let reported = 0
const download = Readable.fromWeb(response.body)
download.on('data', chunk => {
  bytes += chunk.length
  hash.update(chunk)
  if (bytes > artifact.bytes) download.destroy(new Error('Artifact exceeds the recorded byte count'))
  if (bytes - reported >= 128 * 1024 * 1024) {
    console.log(`Downloaded ${Math.round(bytes / 1024 / 1024)} MiB`)
    reported = bytes
  }
})
await pipeline(download, createWriteStream(archive))
if (bytes !== artifact.bytes || hash.digest('hex') !== artifact.sha256) throw new Error('Artifact integrity mismatch')
const entries = execFileSync('tar', ['-tf', archive], { encoding: 'utf8', maxBuffer: 16 * 1024 * 1024 }).trim().split('\n')
for (const entry of entries) {
  if (!entry.startsWith('evo/') || entry.includes('\\') || entry.split('/').some(part => part === '..' || part.includes(':'))) {
    throw new Error(`Invalid artifact path: ${entry}`)
  }
}
execFileSync('tar', ['-xf', archive, '-C', output, '--no-same-owner'], { stdio: 'inherit' })
unlinkSync(archive)
if (!existsSync(join(output, 'evo/index.html'))) throw new Error('The artifact has no application entry point')
const runtime = JSON.parse(readFileSync(join(output, 'evo/data/current.json'), 'utf8'))
const release = JSON.parse(readFileSync(join(output, 'evo/release.json'), 'utf8'))
if (runtime.edition !== 'full-web' || runtime.datasetVersion !== artifact.datasetVersion || release.deploymentCommitSha !== artifact.sourceCommit) {
  throw new Error('The artifact edition, dataset or source commit does not match its descriptor')
}
if (artifact.fullReading) {
  const bytes = readFileSync(join(output, 'evo/nodes/manifest.json'))
  const reading = JSON.parse(bytes)
  if (createHash('sha256').update(bytes).digest('hex') !== artifact.fullReading.manifestSha256
    || !reading.complete || reading.nodes !== artifact.fullReading.nodes
    || reading.languagePages !== artifact.fullReading.languagePages
    || reading.snapshotAt !== artifact.fullReading.snapshotAt) {
    throw new Error('The full reading publication differs from its verified snapshot')
  }
}

// Static document metadata should identify the host that serves this artifact.
// Scientific runtime payloads retain their original bytes and checksums.
const hostname = process.env.VERCEL_PROJECT_PRODUCTION_URL || process.env.VERCEL_URL
if (hostname) {
  const oldOrigin = 'https://dajiaohuang.github.io/evo'
  const newOrigin = `https://${hostname}/evo`
  const documents = entries.filter(entry => /\.(?:html|xml|txt)$/.test(entry) && !entry.startsWith('evo/data/'))
  for (const entry of documents) {
    const file = join(output, entry)
    const original = readFileSync(file, 'utf8')
    const updated = original.replaceAll(oldOrigin, newOrigin)
    if (updated !== original) writeFileSync(file, updated)
  }
}
const proofPath = join(output, 'evo/deployment.json')
mkdirSync(dirname(proofPath), { recursive: true })
writeFileSync(proofPath, JSON.stringify({ ...artifact, deployedAt: new Date().toISOString() }, null, 2) + '\n')
console.log(`Verified and unpacked ${entries.length} entries for ${artifact.sourceCommit}; full-web ${artifact.datasetVersion}`)
