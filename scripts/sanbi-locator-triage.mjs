import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import { brotliDecompressSync } from 'node:zlib'
import { rootDir } from './data-lib.mjs'

// Produce a review queue only. This deliberately does not assert that SANBI,
// WFO, and COL concepts are equivalent or that a citation proves the page text.
const sourcePath = `${rootDir}/data/sources/sanbi-descriptions.jsonl.br`
const lines = brotliDecompressSync(readFileSync(sourcePath)).toString('utf8').split(/\r?\n/).filter(Boolean)
const candidates = []

function finalPageSpan(citation) {
  const ranges = [...citation.matchAll(/(\d+)\s*[-–]\s*(\d+)/g)]
  const range = ranges.at(-1)
  if (!range) return null
  const start = Number(range[1])
  const end = Number(range[2])
  if (end < start) return null
  return { start, end, span: end - start }
}

for (const line of lines) {
  const taxon = JSON.parse(line)
  const bySource = new Map()
  for (const description of taxon.descriptions) {
    if (!['Morphology', 'Habitat'].includes(description.type)) continue
    if (!description.text?.trim() || !description.sourceId || !description.citation) continue
    const pair = bySource.get(description.sourceId) ?? { morphology: [], habitat: [] }
    pair[description.type === 'Morphology' ? 'morphology' : 'habitat'].push(description)
    bySource.set(description.sourceId, pair)
  }

  for (const [sourceId, pair] of bySource) {
    for (const morphology of pair.morphology) {
      for (const habitat of pair.habitat) {
        if (morphology.citation !== habitat.citation) continue
        const pages = finalPageSpan(morphology.citation)
        if (!pages || pages.span > 4) continue
        candidates.push({
          colId: taxon.colId,
          wfoId: taxon.wfoId,
          sourceId,
          citation: morphology.citation,
          pageRange: `${pages.start}-${pages.end}`,
          pageSpan: pages.span,
        })
      }
    }
  }
}

const unique = new Map()
for (const candidate of candidates) {
  const key = `${candidate.colId}\u0000${candidate.sourceId}\u0000${candidate.citation}`
  unique.set(key, candidate)
}
const pairs = [...unique.values()].sort((a, b) => a.colId.localeCompare(b.colId) || a.sourceId.localeCompare(b.sourceId))
const summary = {
  source: 'data/sources/sanbi-descriptions.jsonl.br',
  method: 'same COL row; same sourceId; nonempty Morphology and Habitat; exact same citation; last numeric page-range span <= 4',
  candidateTaxa: new Set(pairs.map((candidate) => candidate.colId)).size,
  candidateSourcePairs: pairs.length,
  warning: 'Triage only. Does not verify page content, taxonomic circumscription, rights, or claim adequacy.',
}

assert(summary.candidateTaxa <= pairs.length)
if (process.argv.includes('--list')) {
  process.stdout.write(`${JSON.stringify({ ...summary, candidates: pairs }, null, 2)}\n`)
} else {
  process.stdout.write(`${JSON.stringify(summary, null, 2)}\n`)
}
