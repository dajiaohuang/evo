import fs from 'node:fs'
import path from 'node:path'
import crypto from 'node:crypto'

const root = fs.realpathSync(process.cwd())
if (!root.endsWith(`${path.sep}amphibia-reference-verification${path.sep}evo`)) throw new Error('Requires the isolated publication checkout')
const archive = path.resolve(root, '..', 'excluded-capture-copies')
const prefix = 'data/sources/snapshots/'
const candidates = []
function walk(relative) {
  for (const entry of fs.readdirSync(relative, { withFileTypes: true })) {
    const next = `${relative}/${entry.name}`
    if (entry.isDirectory()) walk(next)
    else if (/\.(pdf|png|jpe?g|tiff?|zip|fasta|fastq|xlsx?|docx?|html)$/i.test(entry.name)) candidates.push(next)
  }
}
walk(`${prefix}amphibia-primary-corpus-2026-10-02`)
for (const relative of [`${prefix}amphitherm-2025-2026-10-02/article.xml`, `${prefix}caeciliantraits-2025-2026-10-02/article.xml`, `${prefix}caeciliantraits-2025-2026-10-02/article.html`, `${prefix}caeciliantraits-2025-2026-10-02/supplementaryFiles.zip`]) if (fs.existsSync(relative)) candidates.push(relative)
const receiptPath = 'docs/amphibia-content/original-publication-copy-exclusions.json'
const records = fs.existsSync(receiptPath) ? JSON.parse(fs.readFileSync(receiptPath, 'utf8')).records : []
for (const relative of candidates) {
  const source = path.resolve(root, relative)
  const target = path.resolve(archive, relative)
  if (!source.startsWith(`${root}${path.sep}`) || !target.startsWith(`${archive}${path.sep}`)) throw new Error(`Unsafe archive path: ${relative}`)
  const bytes = fs.readFileSync(source)
  if (fs.existsSync(target)) throw new Error(`Archive already exists: ${target}`)
  fs.mkdirSync(path.dirname(target), { recursive: true })
  fs.renameSync(source, target)
  records.push({ path: relative, sha256: crypto.createHash('sha256').update(bytes).digest('hex'), bytes: bytes.length, originalPreserved: true })
}
const exclusionsPath = 'docs/amphibia-content/publication-exclusions.json'
const exclusions = JSON.parse(fs.readFileSync(exclusionsPath, 'utf8'))
for (const record of records) if (!exclusions.excludedPaths.some(entry => entry.path === record.path)) exclusions.excludedPaths.push({ path: record.path, reason: 'Existing original article, figure, supplement or sequence copy retained privately; publish metadata, index and locators only.' })
fs.writeFileSync(exclusionsPath, `${JSON.stringify(exclusions, null, 2)}\n`)
fs.writeFileSync(receiptPath, `${JSON.stringify({ recordedAt: new Date().toISOString(), privateArchive: archive, originalCollectionCheckoutUnchanged: true, networkRequests: 0, filesDeleted: false, records }, null, 2)}\n`)
console.log(JSON.stringify({ originalCopiesArchived: records.length, archivedThisRun: candidates.length, filesDeleted: false, networkRequests: 0 }))
