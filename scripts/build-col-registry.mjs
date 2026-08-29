import { readFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { buildColRegistry } from './col-registry-lib.mjs'

function valueFor(flag) {
  const index = process.argv.indexOf(flag)
  const value = index >= 0 ? process.argv[index + 1] : null
  if (!value) throw new Error(`${flag} requires a value`)
  return value
}

const archivePath = resolve(valueFor('--archive'))
const outputRoot = resolve(valueFor('--out'))
const provenancePath = resolve(process.argv.includes('--provenance')
  ? valueFor('--provenance')
  : 'data/catalogue-of-life/releases/2026-08-20/provenance.json')
const provenance = JSON.parse(readFileSync(provenancePath, 'utf8'))
const result = await buildColRegistry({ archivePath, outputRoot, provenance })
console.log(`Built Catalogue of Life ${result.manifest.releaseAlias}: ${result.manifest.counts.acceptedSpecies.toLocaleString()} accepted species, ${Object.values(result.manifest.counts.resolvingNameUsages).reduce((sum, count) => sum + count, 0).toLocaleString()} resolving names, ${result.manifest.search.files.length.toLocaleString()} shards, ${(result.manifest.search.totalCompressedBytes / 1024 / 1024).toFixed(2)} MiB in ${(result.elapsedMs / 1000).toFixed(2)}s.`)
