import { createHash } from 'node:crypto'
import { existsSync, mkdirSync, mkdtempSync, renameSync, rmSync, writeFileSync } from 'node:fs'
import { dirname, join, resolve, sep } from 'node:path'
import { rootDir } from './data-lib.mjs'

const args = process.argv.slice(2)
const valueAfter = (flag, fallback) => {
  const index = args.indexOf(flag)
  return index >= 0 ? args[index + 1] : fallback
}
const baseUrl = valueAfter('--base', '')
const outputRoot = resolve(rootDir, valueAfter('--out', 'public/data'))
const keep = Number(valueAfter('--keep', '2'))
const maxBytes = Number(valueAfter('--max-bytes', String(400 * 1024 * 1024)))
const allowEmptyHistory = args.includes('--allow-empty-history')
if (!baseUrl || !Number.isInteger(keep) || keep < 1 || keep > 3 || !Number.isSafeInteger(maxBytes) || maxBytes < 1) throw new Error('Usage: --base <data URL> [--out public/data] [--keep 1..3] [--max-bytes N] [--allow-empty-history]')

const RETRY_DELAYS_MS = [500, 1500, 4000]

function retryDelay(response, attempt) {
  const retryAfter = response?.headers.get('retry-after')
  if (retryAfter) {
    const seconds = Number(retryAfter)
    const dateDelay = Date.parse(retryAfter) - Date.now()
    const requestedDelay = Number.isFinite(seconds) ? seconds * 1000 : dateDelay
    if (Number.isFinite(requestedDelay) && requestedDelay > 0) return Math.min(requestedDelay, 10_000)
  }
  return RETRY_DELAYS_MS[attempt]
}

async function fetchRetried(url, options) {
  let lastError
  for (let attempt = 0; attempt <= RETRY_DELAYS_MS.length; attempt += 1) {
    let failedResponse
    try {
      const response = await fetch(url, options)
      const retryable = response.status === 408 || response.status === 429 || response.status >= 500
      if (response.ok || !retryable || attempt === RETRY_DELAYS_MS.length) return response
      await response.body?.cancel()
      failedResponse = response
      lastError = new Error(`${url} returned ${response.status}`)
    } catch (error) {
      lastError = error
      if (attempt === RETRY_DELAYS_MS.length) throw error
    }
    const delay = retryDelay(failedResponse, attempt)
    console.warn(`Retrying ${url} in ${delay} ms after ${lastError}`)
    await new Promise((resolveDelay) => setTimeout(resolveDelay, delay))
  }
  throw lastError
}

async function fetchJson(url) {
  const response = await fetchRetried(url, { headers: { accept: 'application/json' } })
  if (!response.ok) throw new Error(`${url} returned ${response.status}`)
  return response.json()
}

function safePath(root, relativePath) {
  const normalized = relativePath.replaceAll('\\', '/').replace(/^\/+/, '')
  if (normalized.split('/').includes('..')) throw new Error(`Unsafe retained release path: ${relativePath}`)
  const path = resolve(root, normalized)
  if (path !== root && !path.startsWith(`${root}${sep}`)) throw new Error(`Unsafe retained release target: ${path}`)
  return path
}

mkdirSync(dirname(outputRoot), { recursive: true })
const stagingRoot = mkdtempSync(join(dirname(outputRoot), '.evo-release-history-'))
try {
  let history
  try {
    history = await fetchJson(new URL('releases.json', baseUrl).href)
  } catch (error) {
    if (!allowEmptyHistory || !/returned 404/.test(String(error))) throw error
    history = { schemaVersion: 1, retentionLimit: 3, releases: [] }
  }

  const selected = []
  let retainedBytes = 0
  for (const release of (history.releases ?? []).slice(0, keep)) {
    const index = await fetchJson(new URL(release.filesIndex, baseUrl).href)
    const indexBytes = Buffer.from(`${JSON.stringify(index, null, 2)}\n`)
    const releaseBytes = indexBytes.length + (index.files ?? []).reduce((sum, file) => sum + (file.bytes ?? 0), 0)
    if (retainedBytes + releaseBytes > maxBytes) continue
    for (const file of index.files ?? []) {
      const response = await fetchRetried(new URL(file.url, baseUrl))
      if (!response.ok) throw new Error(`${file.url} returned ${response.status}`)
      const bytes = Buffer.from(await response.arrayBuffer())
      if (file.bytes != null && bytes.length !== file.bytes) throw new Error(`${file.url}: byte length mismatch`)
      if (file.sha256 && createHash('sha256').update(bytes).digest('hex') !== file.sha256) throw new Error(`${file.url}: checksum mismatch`)
      const path = safePath(stagingRoot, file.url)
      mkdirSync(dirname(path), { recursive: true })
      writeFileSync(path, bytes)
    }
    const indexPath = safePath(stagingRoot, release.filesIndex)
    mkdirSync(dirname(indexPath), { recursive: true })
    writeFileSync(indexPath, indexBytes)
    selected.push({ ...release, bytes: releaseBytes })
    retainedBytes += releaseBytes
  }

  // Merge only after every selected release has downloaded and passed checksum validation.
  mkdirSync(outputRoot, { recursive: true })
  for (const release of selected) {
    const stagedReleaseRoot = safePath(stagingRoot, release.releaseBase)
    const targetReleaseRoot = safePath(outputRoot, release.releaseBase)
    if (!existsSync(stagedReleaseRoot)) throw new Error(`${release.datasetVersion}: staged release directory is missing`)
    if (existsSync(targetReleaseRoot)) rmSync(targetReleaseRoot, { recursive: true, force: true })
    mkdirSync(dirname(targetReleaseRoot), { recursive: true })
    renameSync(stagedReleaseRoot, targetReleaseRoot)
  }
  writeFileSync(safePath(outputRoot, 'releases.json'), `${JSON.stringify({ ...history, retentionByteLimit: maxBytes, retainedBytes, releases: selected }, null, 2)}\n`)
  console.log(`Atomically retained ${selected.length} published release(s), ${(retainedBytes / 1024 / 1024).toFixed(2)} MiB, from ${baseUrl}.`)
} finally {
  rmSync(stagingRoot, { recursive: true, force: true })
}
