import { createHash } from 'node:crypto'
import { existsSync, readFileSync, readdirSync, statSync } from 'node:fs'
import { join, relative } from 'node:path'
import { rootDir } from './data-lib.mjs'

const dist = join(rootDir, 'dist')
const failures = []
if (!existsSync(dist)) {
  console.error('Pages budget failed: dist does not exist; run npm run build first.')
  process.exit(1)
}

function filesBelow(directory) {
  return readdirSync(directory).flatMap((name) => {
    const path = join(directory, name)
    return statSync(path).isDirectory() ? filesBelow(path) : [path]
  })
}

const files = filesBelow(dist)
const current = JSON.parse(readFileSync(join(dist, 'data/current.json'), 'utf8'))
const releaseRoot = join(dist, 'data', ...current.releaseBase.split('/').filter(Boolean))
const size = (paths) => paths.reduce((sum, path) => sum + statSync(path).size, 0)
const relativePath = (path) => relative(dist, path).replaceAll('\\', '/')
const totalBytes = size(files)
if (totalBytes > 650 * 1024 * 1024) failures.push(`Pages artifact is ${(totalBytes / 1024 / 1024).toFixed(2)} MiB; hard limit is 650 MiB`)

const shards = files.filter((path) => /[/\\](occurrences|maps|catalogue)[/\\].+\.(json|jsonl|ndjson)\.gz$/.test(path))
for (const path of shards) if (statSync(path).size > 8 * 1024 * 1024) failures.push(`${relativePath(path)} exceeds the 8 MiB shard limit`)

const coreFiles = files.filter((path) => path.startsWith(join(releaseRoot, 'core')))
const coreBytes = size(coreFiles)
if (coreBytes > 5 * 1024 * 1024) failures.push(`Core runtime data is ${(coreBytes / 1024 / 1024).toFixed(2)} MiB; limit is 5 MiB`)

const packagesRoot = join(releaseRoot, 'packages')
const packageIds = existsSync(packagesRoot) ? readdirSync(packagesRoot) : []
for (const packageId of packageIds) {
  const packageFiles = filesBelow(join(packagesRoot, packageId)).filter((path) => path.endsWith('.json.gz'))
  const searchPath = join(releaseRoot, 'package-search-index', `${packageId}.json.gz`)
  if (existsSync(searchPath)) packageFiles.push(searchPath)
  const packageBytes = size(packageFiles)
  if (packageBytes > 5 * 1024 * 1024) failures.push(`${packageId} knowledge data is ${(packageBytes / 1024 / 1024).toFixed(2)} MiB; limit is 5 MiB`)
}

const initialJs = files.filter((path) => /[/\\]assets[/\\]index-[^/\\]+\.js$/.test(path))
for (const path of initialJs) if (statSync(path).size > 500 * 1024) failures.push(`${relativePath(path)} is ${(statSync(path).size / 1024).toFixed(1)} KiB; initial JS limit is 500 KiB`)

const swPath = join(dist, 'sw.js')
if (!existsSync(swPath)) {
  failures.push('service worker is missing')
} else {
  const serviceWorker = readFileSync(swPath, 'utf8')
  if (!serviceWorker.includes('cache-lifecycle.js') || !existsSync(join(dist, 'cache-lifecycle.js'))) failures.push('service worker cache lifecycle hook is missing')
  else {
    const lifecycle = readFileSync(join(dist, 'cache-lifecycle.js'), 'utf8')
    if (!lifecycle.includes('evo-runtime-data-') || !lifecycle.includes("addEventListener('activate'")) failures.push('service worker does not clean stale versioned runtime caches on activate')
  }
  const precachedFiles = files.filter((path) => serviceWorker.includes(relativePath(path)))
  const precacheBytes = size(precachedFiles)
  if (precacheBytes > 10 * 1024 * 1024) failures.push(`precache is ${(precacheBytes / 1024 / 1024).toFixed(2)} MiB; limit is 10 MiB`)
  if (/data\/(?:releases\/[^/]+\/)?(packages|occurrences|maps|catalogue|downloads)\//.test(serviceWorker)) failures.push('service worker precaches package, occurrence, map, catalogue or download data')
}

const runtimeFiles = files.filter((path) => path.startsWith(releaseRoot) && !relativePath(path).endsWith('build-metrics.json'))
const checksumGroups = new Map()
for (const path of runtimeFiles) {
  const checksum = createHash('sha256').update(readFileSync(path)).digest('hex')
  if (!checksumGroups.has(checksum)) checksumGroups.set(checksum, [])
  checksumGroups.get(checksum).push(relativePath(path))
}
for (const group of checksumGroups.values()) if (group.length > 1) failures.push(`duplicate runtime content: ${group.join(', ')}`)

const buildMetricsPath = join(dist, 'data/build-metrics.json')
if (!existsSync(buildMetricsPath)) {
  failures.push('build metrics are missing')
} else {
  const metrics = JSON.parse(readFileSync(buildMetricsPath, 'utf8'))
  if (metrics.buildDurationMs > 7 * 60 * 1000) failures.push(`site build took ${(metrics.buildDurationMs / 60000).toFixed(2)} minutes; limit is 7 minutes`)
}

const staticPageRoots = ['taxa', 'events', 'stories', 'intervals', 'formations', 'localities', 'traits', 'references', 'media', 'datasets', 'methods', 'zh']
const staticPageFiles = files.filter((path) => {
  const pathFromDist = relativePath(path)
  return pathFromDist.endsWith('.html') && staticPageRoots.some((rootName) => pathFromDist.startsWith(`${rootName}/`))
})
const staticPageSet = new Set(staticPageFiles)
const staticPageBytes = size(staticPageFiles)
if (staticPageBytes > 80 * 1024 * 1024) failures.push(`static knowledge publication is ${(staticPageBytes / 1024 / 1024).toFixed(2)} MiB; limit is 80 MiB`)
const appFiles = files.filter((path) => !relativePath(path).startsWith('data/') && !staticPageSet.has(path))
if (size(appFiles) > 20 * 1024 * 1024) failures.push(`application shell is ${(size(appFiles) / 1024 / 1024).toFixed(2)} MiB; target is 20 MiB`)

if (failures.length) {
  console.error(`Pages budget failed with ${failures.length} issue(s):`)
  for (const failure of failures) console.error(`- ${failure}`)
  process.exitCode = 1
} else {
  console.log(`Pages budget passed: ${(totalBytes / 1024 / 1024).toFixed(2)} MiB total, ${(coreBytes / 1024).toFixed(1)} KiB core, ${shards.length} data shards, ${packageIds.length} packages.`)
}
