import { existsSync, mkdirSync, readdirSync, renameSync, readFileSync } from 'node:fs'
import { dirname } from 'node:path'
import { CONTENT_PROJECTION_MAP, readYaml, writeUtf8, jsonText, scientificNameSegment, safeContentPath } from './tree-path-content.mjs'

// Repair import placements using the recorded phylum and rank, never a bare homonym.
const map = readYaml(CONTENT_PROJECTION_MAP)
const resolutions = new Map(JSON.parse(readFileSync('data/sources/pbdb-taxon-resolution.json', 'utf8')).resolutions.map(row => [row.entityId, row]))
const anchors = new Map(), files = []
function walk(path) {
  for (const entry of readdirSync(path, { withFileTypes: true })) {
    const child = `${path}/${entry.name}`
    if (entry.isDirectory()) walk(child)
    else if (/\.(md|yaml)$/.test(entry.name)) {
      files.push(child)
      if (entry.name === 'index.yaml') {
        const node = readYaml(child)
        if (node.classification?.authority === 'Catalogue of Life') {
          const name = node.displayName
          const rows = anchors.get(name) ?? []
          rows.push({ path, rank: node.rank })
          anchors.set(name, rows)
        }
      }
    }
  }
}
walk('content')
function anchor(name, resolution, rank = null) {
  const phylum = resolution.resolvedClassification?.phylum
  if (!phylum) return null
  const rows = (anchors.get(name) ?? []).filter(row => (!rank || row.rank === rank) && row.path.split('/').includes(scientificNameSegment(phylum)))
  // PBDB ancestor chains omit ranks; a COL genus cannot anchor an unranked fossil clade.
  const eligible = rank ? rows : rows.filter(row => !['genus', 'species', 'subgenus', 'subspecies'].includes(row.rank))
  return eligible.length === 1 ? eligible[0] : null
}
const replacements = []
for (const item of map.navigationAliases) {
  if (!item.placement?.startsWith('PBDB-recorded-ancestor-chain')) continue
  const resolution = resolutions.get(item.runtimeKey)
  const phylum = resolution?.resolvedClassification?.phylum
  if (!phylum || item.path.split('/').includes(scientificNameSegment(phylum))) continue
  const chain = resolution.resolvedAncestorChain ?? []
  const position = chain.findIndex(row => anchor(row.name, resolution))
  if (position < 0) throw new Error(`No lineage-compatible anchor for ${item.runtimeKey}`)
  const target = `${anchor(chain[position].name, resolution).path}/${[...chain.slice(0, position).reverse().map(row => row.name), resolution.resolvedName].map(scientificNameSegment).join('/')}`
  replacements.push({ from: item.path, to: target, runtimeKey: item.runtimeKey })
}
// Parent moves include their descendant content; mappings still record every alias.
const roots = replacements.filter(row => !replacements.some(parent => parent !== row && row.from.startsWith(`${parent.from}/`)))
function replace(text) {
  for (const row of [...replacements].sort((a, b) => b.from.length - a.from.length)) text = text.replaceAll(row.from, row.to)
  return text
}
for (const row of roots) {
  const from = safeContentPath(row.from), to = safeContentPath(row.to)
  if (existsSync(to)) throw new Error(`Refusing to overwrite content at ${row.to}`)
  mkdirSync(dirname(to), { recursive: true })
  renameSync(from, to)
}
let changedFiles = 0
for (const original of files) {
  const path = replace(original)
  const text = readFileSync(path, 'utf8')
  const next = replace(text)
  if (next !== text) changedFiles += Number(writeUtf8(path, next))
}
const receiptPath = 'docs/content-migration-receipt.json'
const receiptText = readFileSync(receiptPath, 'utf8')
const receipt = JSON.parse(replace(receiptText))
receipt.classificationAnchorRepairs = { reason: 'PBDB ancestor homonyms must match recorded phylum; genus homonyms cannot anchor fossil clades', replacements, changedFiles }
writeUtf8(receiptPath, jsonText(receipt))
console.log(`Repaired ${replacements.length} placements through ${roots.length} directory moves and ${changedFiles} linked files.`)
