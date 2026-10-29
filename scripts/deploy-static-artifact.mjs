import { createHash } from 'node:crypto'
import { createWriteStream, existsSync, mkdirSync, readdirSync, readFileSync, rmSync, unlinkSync, writeFileSync } from 'node:fs'
import { dirname, join, resolve, relative } from 'node:path'
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
if (runtime.edition !== 'full-web' || runtime.datasetVersion !== artifact.datasetVersion || release.deploymentCommitSha !== (artifact.baseSourceCommit ?? artifact.sourceCommit)) {
  throw new Error('The artifact edition, dataset or source commit does not match its descriptor')
}
if (artifact.overlay) {
  const overlay = artifact.overlay
  const url = new URL(overlay.url)
  if (url.protocol !== 'https:' || url.hostname !== 'github.com' || !url.pathname.startsWith('/dajiaohuang/evo/releases/download/')
    || !/^[a-f0-9]{64}$/.test(overlay.sha256) || !Number.isSafeInteger(overlay.bytes) || overlay.bytes <= 0 || overlay.bytes > 1024 * 1024 * 1024) throw new Error('Invalid Wikipedia overlay descriptor')
  const response = await fetch(url, { signal: AbortSignal.timeout(180000) })
  if (!response.ok || !response.body) throw new Error('Wikipedia overlay download failed')
  const digest = createHash('sha256')
  let size = 0
  const stream = Readable.fromWeb(response.body)
  stream.on('data', chunk => { size += chunk.length; digest.update(chunk); if (size > overlay.bytes) stream.destroy(new Error('Overlay too large')) })
  const path = '.vercel-wikipedia-overlay.tar.gz'
  await pipeline(stream, createWriteStream(path))
  if (size !== overlay.bytes || digest.digest('hex') !== overlay.sha256) throw new Error('Wikipedia overlay integrity mismatch')
  const overlayEntries = execFileSync('tar', ['-tf', path], { encoding: 'utf8' }).trim().split('\n')
  for (const entry of overlayEntries) if (!entry.startsWith('evo/') || entry.includes('\\') || entry.split('/').some(part => part === '..' || part.includes(':'))) throw new Error('Invalid Wikipedia overlay path')
  const nodes = resolve(output, 'evo/nodes')
  if (relative(resolve(output), nodes) !== join('evo', 'nodes')) throw new Error('Invalid node output path')
  rmSync(nodes, { recursive: true, force: true })
  execFileSync('tar', ['-xf', path, '-C', output, '--no-same-owner'], { stdio: 'inherit' })
  unlinkSync(path)
  entries.push(...overlayEntries)
  const updated = JSON.parse(readFileSync(join(output, 'evo/release.json'), 'utf8'))
  if (updated.deploymentCommitSha !== artifact.sourceCommit || updated.datasetVersion !== artifact.datasetVersion) throw new Error('Wikipedia overlay release mismatch')
  const mappingBytes = readFileSync(join(output, 'evo/wikipedia/mapping.json'))
  if (createHash('sha256').update(mappingBytes).digest('hex') !== overlay.mappingSha256) throw new Error('Wikipedia link table mismatch')
  if (overlay.catalogueManifestSha256) {
    const localManifest = join(output, 'evo/wikipedia/col/manifest.json')
    const manifestBytes = existsSync(localManifest) ? readFileSync(localManifest) : Buffer.from(await (async () => {
      const source = new URL(overlay.catalogueOrigin + 'manifest.json')
      if (!/^https:\/\/raw\.githubusercontent\.com\/dajiaohuang\/evo\/(?:evo-wikipedia-data|[a-f0-9]{40})\/manifest\.json$/.test(source.href)) throw new Error('Invalid catalogue data origin')
      const response = await fetch(source, { signal: AbortSignal.timeout(30000) })
      if (!response.ok) throw new Error(`Catalogue data origin HTTP ${response.status}`)
      return response.arrayBuffer()
    })())
    if (createHash('sha256').update(manifestBytes).digest('hex') !== overlay.catalogueManifestSha256) throw new Error('Catalogue Wikipedia manifest mismatch')
  }
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
if (artifact.nodePages) {
  const bytes = readFileSync(join(output, 'evo/nodes/manifest.json'))
  if (createHash('sha256').update(bytes).digest('hex') !== artifact.nodePages.manifestSha256
    || JSON.parse(bytes).status !== 'paused') throw new Error('Node-page retirement receipt mismatch')
}

// Retired topic URLs must not expose the original article even if a host
// normalizes a trailing slash before applying the redirect rules.
const topicNotice = '<!doctype html><html lang="zh"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="robots" content="noindex,follow"><title>专题暂时下线 — Evo Atlas</title></head><body><main><h1>专题暂时下线 / Topics are temporarily offline</h1><a href="/evo/">返回古地图 / Return to the map</a></main></body></html>'
function withdrawTopicDocuments(directory) {
  if (!existsSync(directory)) return
  for (const entry of readdirSync(directory, { withFileTypes: true })) {
    const file = join(directory, entry.name)
    if (entry.isDirectory()) withdrawTopicDocuments(file)
    else if (entry.isFile() && entry.name.endsWith('.html')) writeFileSync(file, topicNotice)
  }
}
for (const path of ['stories', 'read', 'zh/stories', 'zh/read']) withdrawTopicDocuments(join(output, 'evo', path))

// Static document metadata should identify the host that serves this artifact.
// Scientific runtime payloads retain their original bytes and checksums.
const hostname = process.env.VERCEL_PROJECT_PRODUCTION_URL || process.env.VERCEL_URL
if (hostname) {
  const oldOrigin = 'https://dajiaohuang.github.io/evo'
  const newOrigin = `https://${hostname}/evo`
  const documents = [...new Set(entries)].filter(entry => /\.(?:html|xml|txt)$/.test(entry) && !entry.startsWith('evo/data/') && existsSync(join(output, entry)))
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
