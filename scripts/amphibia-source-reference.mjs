import fs from 'node:fs'
const schema = JSON.parse(fs.readFileSync('data/schemas/reference.schema.json'))
const allowed = new Set(Object.keys(schema.properties))
const roleAliases = { 'primary-research': 'primary-study', 'taxonomic-research': 'primary-study', 'distribution-database': 'taxonomic-database' }
const purposeAliases = { lifeHistory: 'ecology', distribution: 'biogeography', fossil: 'occurrence', phylogeny: 'evolution' }

export function amphibianReferenceForSchema(reference) {
  const result = Object.fromEntries(Object.entries(reference).filter(([key]) => allowed.has(key)))
  result.metadataAssignment ??= 'automated'
  const role = roleAliases[reference.sourceRole] ?? reference.sourceRole
  result.sourceRole = schema.properties.sourceRole.enum.includes(role) ? role : 'unclassified'
  result.fitnessFor = [...new Set((reference.fitnessFor ?? []).map(x => purposeAliases[x] ?? x).filter(x => schema.properties.fitnessFor.items.enum.includes(x)))]
  result.authorsStatus = schema.properties.authorsStatus.enum.includes(reference.authorsStatus) ? reference.authorsStatus : reference.authorsComplete ? 'recorded' : 'unresolved'
  const metadata = structuredClone(reference.importedSourceMetadata ?? [])
  if (!metadata.length) throw new Error(`Missing original source metadata ${reference.id}`)
  // Rights and original publication fields belong in the source-usage ledger.
  // Retain unsupported envelope fields there without changing original keys.
  const extras = Object.fromEntries(Object.entries(reference).filter(([key]) => !allowed.has(key) && !(key in metadata[0])))
  if (Object.keys(extras).length) metadata[0].referenceEnvelopeFields = { ...(metadata[0].referenceEnvelopeFields ?? {}), ...extras }
  result.importedSourceMetadata = metadata
  const year = reference.publishedYear ?? reference.year ?? metadata[0].year ?? (/^\d{4}/.exec(reference.publishedAt ?? '')?.[0] ? Number(reference.publishedAt.slice(0, 4)) : undefined)
  if (Number.isInteger(year) && year > 0 && year <= 2100) result.publishedYear = year
  if (reference.sourceRole === 'trait-database') result.note ??= 'Published trait compilation; original concepts and underlying study scopes remain distinct. Dataset roles and rights are retained in imported source metadata.'
  if (!reference.authorsComplete) result.metadataStatus ??= 'Deposited uploader metadata retained; full creator identity remains unresolved.'
  return result
}

export function appendAmphibianReference(reference) {
  const file = 'data/references.json'
  const bytes = fs.readFileSync(file, 'utf8')
  if (JSON.parse(bytes).some(x => x.id === reference.id)) return
  const staged = `data/references.amphibia-append-${process.pid}-${Date.now()}.tmp`
  fs.writeFileSync(staged, bytes.replace(/\]\s*$/, `,\n${JSON.stringify(amphibianReferenceForSchema(reference), null, 2)}\n]\n`), { flag: 'wx' })
  if (fs.readFileSync(file, 'utf8') !== bytes) {
    throw new Error(`Reference file changed concurrently; staged reference retained at ${staged}`)
  }
  replaceAmphibianReferenceFile(staged, file, bytes)
}

export function replaceAmphibianReferenceFile(staged, file, expectedBytes) {
  for (let attempt = 0; attempt < 3; attempt++) {
    if (fs.readFileSync(file, 'utf8') !== expectedBytes) throw new Error(`Reference file changed concurrently; staged content retained at ${staged}`)
    try { fs.renameSync(staged, file); return }
    catch (error) {
      if (!['EPERM', 'EACCES', 'EBUSY'].includes(error.code) || attempt === 2) throw error
      // Short bounded retry for Windows readers holding the destination open.
      // Keep the atomic replacement and recheck concurrent edits before retrying.
      Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, 500)
    }
  }
}

export function topLevelReferenceSpans(text) {
  const spans = []
  let depth = 0, start = -1, quoted = false, escaped = false
  for (let i = 0; i < text.length; i++) {
    const char = text[i]
    if (quoted) {
      if (escaped) escaped = false
      else if (char === '\\') escaped = true
      else if (char === '"') quoted = false
      continue
    }
    if (char === '"') { quoted = true; continue }
    if (char === '[' || char === '{') {
      if (char === '{' && depth === 1) start = i
      depth++
    } else if (char === ']' || char === '}') {
      depth--
      if (char === '}' && depth === 1 && start >= 0) {
        spans.push({ start, end: i + 1, reference: JSON.parse(text.slice(start, i + 1)) })
        start = -1
      }
    }
  }
  if (depth !== 0 || quoted) throw new Error('Incomplete reference JSON envelope')
  return spans
}
