import { readFileSync, readdirSync, writeFileSync, mkdirSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { gunzipSync, brotliDecompressSync } from 'node:zlib'

const json = path => JSON.parse(readFileSync(path, 'utf8'))
const walk = directory => readdirSync(directory, { withFileTypes: true }).flatMap(entry => entry.isDirectory() ? walk(join(directory, entry.name)) : [join(directory, entry.name).replaceAll('\\', '/')])
const catalogueRoot = 'data/catalogue-of-life/releases/2026-08-20/registry'
const manifest = json(`${catalogueRoot}/manifest.json`)
const profiles = json('data/knowledge/catalogue-profiles.json')
const dossierIndex = json('data/knowledge/catalogue-dossier-shards.json')
const dossiers = [...json('data/knowledge/catalogue-dossiers.json').records]
for (const shard of dossierIndex.shards) for (const line of brotliDecompressSync(readFileSync(shard.path)).toString('utf8').split(/\r?\n/)) if (line) dossiers.push(JSON.parse(line))
const targets = new Set([...profiles.records, ...dossiers].map(record => record.colId))
const nodes = new Map()
for (const file of manifest.hierarchy.nodes.files) {
  for (const line of gunzipSync(readFileSync(`${catalogueRoot}/${file.path}`)).toString('utf8').split(/\r?\n/)) {
    if (!line) continue
    const node = JSON.parse(line)
    if (node.rank !== 'species' || targets.has(node.id)) nodes.set(node.id, node)
  }
}
const bareName = node => node.authorship && node.scientificName.endsWith(node.authorship) ? node.scientificName.slice(0, -node.authorship.length).trim() : node.scientificName
const segment = name => name.normalize('NFC').replace(/\s+/g, '_').replace(/[<>:"/\\|?*\x00-\x1f]/g, character => `%${character.codePointAt(0).toString(16).toUpperCase()}`).replace(/[. ]+$/g, value => [...value].map(character => `%${character.codePointAt(0).toString(16).toUpperCase()}`).join(''))
const paths = new Map()
const pathFor = (id, chain = new Set()) => {
  if (paths.has(id)) return paths.get(id)
  const node = nodes.get(id)
  if (!node) throw new Error(`Missing classification node: ${id}`)
  if (chain.has(id)) throw new Error(`Classification cycle: ${id}`)
  chain.add(id)
  const path = `${node.parentId ? `${pathFor(node.parentId, chain)}/` : ''}${segment(bareName(node))}`
  paths.set(id, path)
  return path
}
const owners = new Map(), collisions = [], longPaths = []
for (const id of targets) {
  const path = pathFor(id)
  const key = path.toLowerCase()
  if (owners.has(key) && owners.get(key) !== id) collisions.push({ path, ids: [owners.get(key), id], nodes: [nodes.get(owners.get(key)), nodes.get(id)] })
  owners.set(key, id)
  if (path.length > 220) longPaths.push({ path, length: path.length })
}
const packageFiles = walk('data/packages').filter(path => path.endsWith('/profiles.source.json'))
const packageCounts = Object.fromEntries(packageFiles.map(path => [path, json(path).length]))
const report = {
  release: profiles.releaseAlias,
  catalogueProfiles: profiles.records.length,
  dossierRecords: dossiers.length,
  contentTaxa: targets.size,
  ancestorDirectories: paths.size,
  longestPath: Math.max(...[...paths.values()].map(path => path.length)),
  pathsOver220Characters: longPaths.length,
  pathCollisions: collisions,
  longPathExamples: longPaths.sort((a, b) => b.length - a.length).slice(0, 5),
  packageProfiles: packageCounts,
  totalPackageProfiles: Object.values(packageCounts).reduce((sum, count) => sum + count, 0),
  auxiliarySources: walk('data/packages').filter(path => path.endsWith('.source.json') && !path.endsWith('/profiles.source.json')),
  topics: { stories: json('data/stories.json').length, events: json('data/events.json').length, claims: json('data/evidence/claims.json').length },
}
mkdirSync('.git/content-migration', { recursive: true })
writeFileSync('.git/content-migration/inventory.json', JSON.stringify(report, null, 2) + '\n')
writeFileSync('.git/content-migration/catalogue-paths.json', JSON.stringify(Object.fromEntries([...targets].map(id => [id, { path: paths.get(id), node: nodes.get(id) }])), null, 2) + '\n')
console.log(JSON.stringify({ ...report, packageProfiles: undefined, auxiliarySources: report.auxiliarySources.length }, null, 2))
