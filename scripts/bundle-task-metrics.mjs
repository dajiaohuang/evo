import { readFileSync, statSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'
import { gzipSync } from 'node:zlib'

export function taskAssets(manifest, entryKeys) {
  const assets = new Set()
  const seen = new Set()
  const visit = (key) => {
    if (seen.has(key)) return
    seen.add(key)
    const chunk = manifest[key]
    if (!chunk) throw new Error(`Missing build-manifest module: ${key}`)
    assets.add(chunk.file)
    for (const css of chunk.css ?? []) assets.add(css)
    for (const dependency of chunk.imports ?? []) visit(dependency)
  }
  for (const key of entryKeys) visit(key)
  return [...assets].sort()
}

export function reportTaskMetrics(dist) {
  const manifest = JSON.parse(readFileSync(join(dist, '.vite/manifest.json'), 'utf8'))
  const keys = Object.keys(manifest)
  const find = (suffix) => {
    const key = keys.find((key) => key.endsWith(suffix))
    if (!key) throw new Error(`Missing task module in build manifest: ${suffix}`)
    return key
  }
  const entry = keys.filter((key) => manifest[key].isEntry)
  const sqlEngine = keys.find((key) => /vendor~duckdb-browser/.test(key))
  if (!sqlEngine) throw new Error('Missing SQL engine chunk in build manifest')
  const workspace = ['src/components/explorer/ExplorerWorkspace.tsx', 'src/components/search/GlobalSearch.tsx'].map(find)
  const tasks = {
    startup: entry,
    map: [...entry, ...workspace, find('src/components/map/PaleoMap.tsx')],
    evidence: [...entry, ...workspace, find('src/components/catalog/CatalogPages.tsx')],
    sql: [...entry, find('src/components/workbench/WorkbenchPages.tsx'), sqlEngine],
  }
  const metrics = Object.fromEntries(Object.entries(tasks).map(([task, roots]) => {
    const files = taskAssets(manifest, roots)
    const bytes = files.reduce((sum, file) => sum + statSync(join(dist, file)).size, 0)
    const gzipBytes = files.reduce((sum, file) => sum + gzipSync(readFileSync(join(dist, file))).byteLength, 0)
    console.log(`${task}: ${(bytes / 1024).toFixed(1)} KiB raw / ${(gzipBytes / 1024).toFixed(1)} KiB gzip across ${files.length} application assets`)
    return [task, { bytes, gzipBytes, files }]
  }))
  // Baseline measured for this refactor: 696.5 / 1806.8 / 4288.5 / 4411.4 KiB.
  // Leave roughly 25% growth room; this gates the whole application closure,
  // rather than allowing vendor/shared content to escape the entry-file check.
  const limitsKiB = { startup: 875, map: 2275, evidence: 5375, sql: 5525 }
  for (const [task, metric] of Object.entries(metrics)) {
    if (metric.bytes > limitsKiB[task] * 1024) throw new Error(`${task} application assets exceed ${limitsKiB[task]} KiB`)
  }
  writeFileSync(join(dist, 'data/bundle-task-metrics.json'), JSON.stringify({
    schemaVersion: 1,
    scope: 'Application JS/CSS dependency closure. Excludes runtime scientific files, optional languages, and externally fetched SQL WASM; this is not a browser performance measurement.',
    tasks: metrics,
  }, null, 2) + '\n')
  return metrics
}
