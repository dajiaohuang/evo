import { readFile } from 'node:fs/promises'

const base = 'https://evo-lovat.vercel.app/evo/'
const get = async (url) => {
  const response = await fetch(url)
  if (!response.ok) throw new Error(`${url}: HTTP ${response.status}`)
  return response.json()
}
const current = await get(new URL('data/current.json', base))
const catalogue = await get(new URL(`data/${current.catalogue.manifest.url}`, base))
const index = JSON.parse(await readFile('.git/evo-wikipedia-col26-8/higher-search-review-2/manifest.json', 'utf8'))
const files = catalogue.hierarchy.nodes.files
const mismatches = files.filter(file => !file.sha256 || index.hierarchyNodeHashes[file.prefix] !== file.sha256)
console.log(JSON.stringify({ releaseAlias: catalogue.releaseAlias, treeNodes: catalogue.hierarchy.counts.higherTaxonNodes, indexNodes: index.nodes, treeShards: files.length, indexShards: Object.keys(index.hierarchyNodeHashes).length, mismatches: mismatches.length, firstMismatch: mismatches[0] ?? null }))
if (mismatches.length || files.length !== Object.keys(index.hierarchyNodeHashes).length || catalogue.hierarchy.counts.higherTaxonNodes !== index.nodes) process.exitCode = 1
