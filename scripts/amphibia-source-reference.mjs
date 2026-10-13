import fs from 'node:fs'
const schema = JSON.parse(fs.readFileSync('data/schemas/reference.schema.json'))
const allowed = new Set(Object.keys(schema.properties))
const roleAliases = { 'primary-research': 'primary-study', 'taxonomic-research': 'primary-study', 'distribution-database': 'taxonomic-database' }
const purposeAliases = { lifeHistory: 'ecology', distribution: 'biogeography', fossil: 'occurrence', phylogeny: 'evolution' }

export function amphibianReferenceForSchema(reference) {
  const result = Object.fromEntries(Object.entries(reference).filter(([key]) => allowed.has(key)))

  const role = roleAliases[reference.sourceRole] ?? reference.sourceRole
  result.sourceRole = schema.properties.sourceRole.enum.includes(role) ? role : 'unclassified'
  result.fitnessFor = [...new Set((reference.fitnessFor ?? []).map(x => purposeAliases[x] ?? x).filter(x => schema.properties.fitnessFor.items.enum.includes(x)))]
  result.authorsStatus = schema.properties.authorsStatus.enum.includes(reference.authorsStatus) ? reference.authorsStatus : reference.authorsComplete ? 'recorded' : 'unresolved'
  const metadata = structuredClone(reference.metadataVariants ?? [])
  if (!metadata.length) throw new Error(`Missing original source metadata ${reference.id}`)
  // Rights and original publication fields belong in the source-usage ledger.
  // Retain unsupported envelope fields there without changing original keys.
  const extras = Object.fromEntries(Object.entries(reference).filter(([key]) => !allowed.has(key) && !(key in metadata[0])))
  if (Object.keys(extras).length) metadata[0].referenceEnvelopeFields = { ...(metadata[0].referenceEnvelopeFields ?? {}), ...extras }
  result.metadataVariants = metadata
  const year = reference.publishedYear ?? reference.year ?? metadata[0].year ?? (/^\d{4}/.exec(reference.publishedAt ?? '')?.[0] ? Number(reference.publishedAt.slice(0, 4)) : undefined)
  if (Number.isInteger(year) && year > 0 && year <= 2100) result.publishedYear = year
  if (reference.sourceRole === 'trait-database') result.note ??= 'Published trait compilation; original concepts and underlying study scopes remain distinct. Dataset roles and rights are retained in imported source metadata.'
  if (!reference.authorsComplete) result.metadataStatus ??= 'Deposited uploader metadata retained; full creator identity remains unresolved.'
  return result
}
