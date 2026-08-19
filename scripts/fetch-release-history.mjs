import { createHash } from 'node:crypto'
import { mkdirSync, writeFileSync } from 'node:fs'
import { dirname, resolve, sep } from 'node:path'
import { rootDir } from './data-lib.mjs'

const args = process.argv.slice(2)
const valueAfter = (flag, fallback) => {
  const index = args.indexOf(flag)
  return index >= 0 ? args[index + 1] : fallback
}
const baseUrl = valueAfter('--base', '')
const outputRoot = resolve(rootDir, valueAfter('--out', 'public/data'))
const keep = Number(valueAfter('--keep', '2'))
if (!baseUrl || !Number.isInteger(keep) || keep < 1 || keep > 3) throw new Error('Usage: --base <data URL> [--out public/data] [--keep 1..3]')

async function fetchJson(url) {
  const response = await fetch(url, { headers: { accept: 'application/json' } })
  if (!response.ok) throw new Error(`${url} returned ${response.status}`)
  return response.json()
}

function safeOutputPath(relativePath) {
  const normalized = relativePath.replaceAll('\\', '/').replace(/^\/+/, '')
  if (normalized.split('/').includes('..')) throw new Error(`Unsafe retained release path: ${relativePath}`)
  const path = resolve(outputRoot, normalized)
  if (path !== outputRoot && !path.startsWith(`${outputRoot}${sep}`)) throw new Error(`Unsafe retained release target: ${path}`)
  return path
}

try {
  const historyUrl = new URL('releases.json', baseUrl).href
  const history = await fetchJson(historyUrl)
  const retained = (history.releases ?? []).slice(0, keep)
  for (const release of retained) {
    const index = await fetchJson(new URL(release.filesIndex, baseUrl).href)
    const indexBytes = Buffer.from(`${JSON.stringify(index, null, 2)}\n`)
    const indexPath = safeOutputPath(release.filesIndex)
    mkdirSync(dirname(indexPath), { recursive: true })
    writeFileSync(indexPath, indexBytes)
    for (const file of index.files ?? []) {
      const response = await fetch(new URL(file.url, baseUrl))
      if (!response.ok) throw new Error(`${file.url} returned ${response.status}`)
      const bytes = Buffer.from(await response.arrayBuffer())
      if (file.sha256 && createHash('sha256').update(bytes).digest('hex') !== file.sha256) throw new Error(`${file.url}: checksum mismatch`)
      const path = safeOutputPath(file.url)
      mkdirSync(dirname(path), { recursive: true })
      writeFileSync(path, bytes)
    }
  }
  mkdirSync(outputRoot, { recursive: true })
  writeFileSync(safeOutputPath('releases.json'), `${JSON.stringify({ ...history, releases: retained }, null, 2)}\n`)
  console.log(`Retained ${retained.length} published release(s) from ${baseUrl}.`)
} catch (error) {
  console.warn(`Release history was not retained: ${error instanceof Error ? error.message : String(error)}`)
}
