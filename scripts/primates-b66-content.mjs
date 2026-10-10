import { readFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { resolve } from 'node:path'
import { brotliDecompressSync } from 'node:zlib'
import { ContentReferenceCatalogue } from './content-references.mjs'
import { canonicalizeContentLinks, createContentLinkMaps } from './content-path-links.mjs'
import { CONTENT_PROJECTION_MAP, jsonText, readNodeContent, readYaml, writeNodeContent, writeUtf8, writeYaml } from './tree-path-content.mjs'

// Reconcile the historical b66 projection-only update into its authoring records.
// The scientific statements and source metadata are copied verbatim, not synthesized.
export function reconcilePrimatesB66Content() {
  const read = path => JSON.parse(readFileSync(path, 'utf8'))
  const map = readYaml(CONTENT_PROJECTION_MAP)
  const links = createContentLinkMaps(map)
  const references = read('data/references.json')
  const bibliography = new ContentReferenceCatalogue(references)
  const nodes = new Map()
  function node(path) {
    if (!nodes.has(path)) nodes.set(path, readNodeContent(path))
    return nodes.get(path)
  }
  function replace(descriptor, value) {
    const entry = node(descriptor.path)
    const record = structuredClone(value)
    for (const key of Object.keys(descriptor.inject ?? {})) delete record[key]
    const canonical = canonicalizeContentLinks(record, links)
    if (descriptor.index === undefined) entry.records[descriptor.key] = canonical
    else entry.records[descriptor.key][descriptor.index] = canonical
    if (descriptor.originalFields) descriptor.originalFields = Object.keys(value)
  }

  const claimId = 'claim:taxon:macaca_radiata:evolution-mtdna-population-structure-2018'
  const claim = Object.fromEntries(Object.entries(read('data/evidence/claims.json').find(item => item.id === claimId)).filter(([key]) => key !== 'confidenceRationaleZh'))
  const path = map.profileAliases.find(item => item.runtimeKey === 'macaca_radiata').path
  const account = node(path)
  const claimsTemplate = map.generatedInputs['data/evidence/claims.json'].template
  let claimDescriptor = claimsTemplate.find(item => item.contentRecord.inject?.id === claimId)?.contentRecord
  if (!claimDescriptor) {
    claimDescriptor = { path, key: 'claims', index: account.records.claims.length, inject: { id: claimId }, originalFields: Object.keys(claim) }
    claimsTemplate.push({ contentRecord: claimDescriptor })
    account.records.claims.push(null)
  }
  replace(claimDescriptor, claim)
  if (!map.recordAliases.some(item => item.runtimeKey === claimId)) map.recordAliases.push({ runtimeKey: claimId, path: `${path}/evidence.md#/records/claims/${claimDescriptor.index}` })

  const translations = [
    ['data/evidence/claim-statements.zh.json', 'claim-statements.zh', claim.statement, read('data/sources/primates-macaca-radiata-evolution-b66-2026-09-28.json').claim.textZh],
    ['data/evidence/claim-rationales.zh.json', 'claim-rationales.zh', claimId, read('data/evidence/claim-rationales.zh.json')[claimId]],
  ]
  for (const [input, key, identity, text] of translations) {
    const template = map.generatedInputs[input].template
    let descriptor = template[identity]?.contentRecord
    if (!descriptor) {
      descriptor = { path, key, index: account.records[key].length }
      template[identity] = { contentRecord: descriptor }
      account.records[key].push(null)
    }
    replace(descriptor, text)
  }
  delete map.generatedInputs['data/evidence/claim-statements.zh.json'].template[claimId]

  const profilesInput = 'data/packages/mammalia/primates/profiles.source.json'
  const profile = read(profilesInput).find(item => item.id === 'macaca_radiata')
  const profileDescriptor = map.generatedInputs[profilesInput].template.find(item => item.contentRecord.inject.id === profile.id).contentRecord
  const canonicalProfile = node(profileDescriptor.path).records[profileDescriptor.key]
  for (const key of ['overview', 'evidenceSummary', 'geography', 'referenceIds']) canonicalProfile[key] = profile[key]
  const dossierInput = 'data/knowledge/catalogue-dossiers-primates-macaca-radiata-core-2026-09-26.jsonl.br'
  const dossier = JSON.parse(brotliDecompressSync(readFileSync(dossierInput)).toString('utf8').trim())
  const dossierDescriptor = map.generatedInputs[dossierInput].template[0].contentRecord
  const canonicalDossier = node(dossierDescriptor.path).records[dossierDescriptor.key]
  canonicalDossier.checkedAt = dossier.checkedAt
  canonicalDossier.lifeStatusScope.wild = dossier.lifeStatusScope.wild
  canonicalDossier.facets.evolution = dossier.facets.evolution
  canonicalDossier.completeness = dossier.completeness
  const source = read('data/sources/primates-macaca-radiata-evolution-b66-2026-09-28.json').sourceRef
  if (!canonicalDossier.sources.referenceBindings.some(binding => binding.sourceKey === source.id)) canonicalDossier.sources.referenceBindings.push(bibliography.bind(source))

  for (const [directory, entry] of nodes) writeNodeContent(directory, entry.index, entry.records)
  writeUtf8('data/references.json', jsonText([...references, ...bibliography.records.slice(references.length)]))
  writeYaml(CONTENT_PROJECTION_MAP, map)
  return { claimId, canonicalDirectories: nodes.size }
}

if (process.argv[1] && fileURLToPath(import.meta.url) === resolve(process.argv[1])) console.log(reconcilePrimatesB66Content())
