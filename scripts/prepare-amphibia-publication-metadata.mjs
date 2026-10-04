import fs from 'node:fs'
import path from 'node:path'
import crypto from 'node:crypto'
const source = process.cwd(), target = path.resolve(process.argv[2] ?? '')
if (!process.argv[2] || target === source || !fs.existsSync(path.join(target, '.git'))) throw Error('Use only the independent publication verification checkout')
const relativeRoots = ['data/sources/snapshots/amphibia-literature-discovery-2026-10-02', 'data/sources/snapshots/amphibia-index-identities-2026-10-03', 'data/sources/snapshots/amphibia-full-roster-literature-2026-10-03']
const records = [], hash = b => crypto.createHash('sha256').update(b).digest('hex')
const archiveRoot = path.join(path.dirname(target), 'excluded-capture-copies')
function files(root) { return fs.readdirSync(root, { withFileTypes: true }).flatMap(e => e.isDirectory() ? files(path.join(root,e.name)) : e.name.endsWith('.json') ? [path.join(root,e.name)] : []) }
for (const relativeRoot of relativeRoots) {
  const directory = path.join(target, relativeRoot)
  if (!fs.existsSync(directory)) continue
  for (const file of files(directory)) {
    const bytes = fs.readFileSync(file), text = bytes.toString('utf8')
    if (!/"(?:abstractText|fullText|fullTextXML)"\s*:/.test(text)) continue
    const relative = path.relative(target, file), original = path.join(source, relative)
    if (!fs.readFileSync(original).equals(bytes)) throw Error(`Publication copy changed since composition: ${relative}`)
    const data = JSON.parse(text), removedFields = []
    function strip(value, pointer = '') {
      if (!value || typeof value !== 'object') return
      for (const key of Object.keys(value)) {
        const field = `${pointer}/${key.replaceAll('~','~0').replaceAll('/','~1')}`
        if (['abstractText','fullText','fullTextXML'].includes(key)) { removedFields.push(field); delete value[key] }
        else strip(value[key], field)
      }
    }
    strip(data)
    const archive = path.join(archiveRoot, relative)
    if (!archive.startsWith(archiveRoot + path.sep)) throw Error('Unsafe archive destination')
    fs.mkdirSync(path.dirname(archive), { recursive: true })
    fs.copyFileSync(file, archive)
    const metadata = Buffer.from(JSON.stringify(data, null, 2) + '\n')
    fs.writeFileSync(file, metadata)
    const receipt = { sourcePath: relative.replaceAll('\\','/'), originalRawSha256: hash(bytes), publicationMetadataSha256: hash(metadata), removedFields, originalSourceCapturePreserved: true, originalHashesDescribePrivateRawCapture: true, publicationCopyIsMetadataDerivative: true }
    fs.writeFileSync(`${file}.publication-provenance.json`, JSON.stringify(receipt, null, 2) + '\n')
    records.push(receipt)
  }
}
const receipt = { source, target, originalCopiesArchive: archiveRoot, transformedFiles: records.length, removedFieldCount: records.reduce((s,r)=>s+r.removedFields.length,0), originalsUnchanged: true, filesDeleted: false, networkRequests: 0, records }
for (const root of [source,target]) fs.writeFileSync(path.join(root,'docs/amphibia-content/publication-metadata-transformations.json'),JSON.stringify(receipt,null,2)+'\n')
console.log(JSON.stringify({transformedFiles:receipt.transformedFiles,removedFields:receipt.removedFieldCount,originalsUnchanged:true}))
