import fs from 'node:fs'
import path from 'node:path'
import crypto from 'node:crypto'
import { parse, stringify } from 'yaml'
const source = process.cwd(), target = path.resolve(process.argv[2] ?? '')
if (!process.argv[2] || target === source || !fs.existsSync(path.join(target, '.git'))) throw Error('An independently registered clean verification worktree is required')
const base = 'docs/amphibia-content', read = p => JSON.parse(fs.readFileSync(path.join(source, p)))
const root = read(`${base}/collection-placeholder-coverage.json`).rows[0].path
const exclusions = read(`${base}/publication-exclusions.json`).excludedPaths.map(r => r.path)
function glob(pattern) {
  let out = '^'
  for (let i = 0; i < pattern.length; i++) {
    if (pattern[i] === '*' && pattern[i + 1] === '*') { i++; if (pattern[i + 1] === '/') { i++; out += '(?:.*/)?' } else out += '.*' }
    else if (pattern[i] === '*') out += '[^/]*'
    else out += pattern[i].replace(/[.\\+?^${}()|[\]]/g, '\\$&')
  }
  return new RegExp(out + '$')
}
const filters = exclusions.map(glob), copied = [], excluded = [], usedRefs = new Set()
let bytes = 0
function copy(relative) {
  if (filters.some(r => r.test(relative)) || /\.tmp$/.test(relative)) { excluded.push(relative); return }
  const input = path.join(source, relative), output = path.join(target, relative)
  if (!output.startsWith(target + path.sep)) throw Error('Unsafe target')
  fs.mkdirSync(path.dirname(output), { recursive: true }); fs.copyFileSync(input, output)
  bytes += fs.statSync(input).size; copied.push(relative)
  if (relative.startsWith(root + '/') && relative.endsWith('/evidence.md')) {
    for (const match of fs.readFileSync(input, 'utf8').matchAll(/referenceId:\s*['"]?(ref-[\w-]+)/g)) usedRefs.add(match[1])
  }
}
function tree(relative) {
  for (const entry of fs.readdirSync(path.join(source, relative), { withFileTypes: true })) {
    const child = `${relative}/${entry.name}`
    if (filters.some(r => r.test(child)) || /\/work-\d+$/.test(child)) { excluded.push(child); continue }
    if (entry.isDirectory()) tree(child); else copy(child)
  }
}
tree(root); tree(base)
for (const name of fs.readdirSync(path.join(source, 'scripts'))) if (/amphibi[an]/.test(name) && fs.statSync(path.join(source, 'scripts', name)).isFile()) copy(`scripts/${name}`)
for (const name of fs.readdirSync(path.join(source, 'data/sources/snapshots'))) if (/^(amphibi|caecilian|tadpole)/.test(name)) tree(`data/sources/snapshots/${name}`)
const currentMap = parse(fs.readFileSync(path.join(source, 'content/projection-map.yaml'), 'utf8'))
const cleanMap = parse(fs.readFileSync(path.join(target, 'content/projection-map.yaml'), 'utf8'))
for (const [file, descriptor] of Object.entries(currentMap.generatedInputs)) {
  if (file.startsWith('data/research/amphibia/')) cleanMap.generatedInputs[file] = descriptor
  if (file === 'data/knowledge/catalogue-profiles.json' || file === 'data/knowledge/catalogue-profiles.json.gz') {
    const owned = row => row.contentRecord?.path === root || row.contentRecord?.path?.startsWith(root + '/')
    const baselineDescriptor = cleanMap.generatedInputs[file] ?? cleanMap.generatedInputs['data/knowledge/catalogue-profiles.json']
    cleanMap.generatedInputs[file] = { ...descriptor, template: { ...descriptor.template, records: [...baselineDescriptor.template.records.filter(row => !owned(row)), ...descriptor.template.records.filter(owned)] } }
    if (file.endsWith('.gz')) delete cleanMap.generatedInputs['data/knowledge/catalogue-profiles.json']
  }
}
fs.writeFileSync(path.join(target, 'content/projection-map.yaml'), stringify(cleanMap, { lineWidth: 0 }))
const currentRefs = read('data/references.json'), cleanRefPath = path.join(target, 'data/references.json'), cleanRefs = JSON.parse(fs.readFileSync(cleanRefPath)), existing = new Set(cleanRefs.map(r => r.id))
const added = currentRefs.filter(r => usedRefs.has(r.id) && !existing.has(r.id))
fs.writeFileSync(cleanRefPath, JSON.stringify([...cleanRefs, ...added], null, 2) + '\n')
const missing = [...usedRefs].filter(id => !existing.has(id) && !added.some(r => r.id === id))
if (missing.length) throw Error(`Missing owned references: ${missing.join(',')}`)
if (!fs.existsSync(path.join(target, 'node_modules'))) fs.symlinkSync(path.join(source, 'node_modules'), path.join(target, 'node_modules'), 'junction')
const receipt = { source, target, baseline: 'bef5a0dc1762b29fe0fb51ac22970eca4b086358', copiedFiles: copied.length, copiedBytes: bytes, excludedFilesOrDirectories: excluded.length, usedReferenceIds: [...usedRefs], addedReferenceIds: added.map(r => r.id), existingReferenceEntriesPreserved: true, inheritedNonAmphibiaEditsCopied: false, filesRemoved: false, copiedPathsSha256: crypto.createHash('sha256').update(copied.join('\n')).digest('hex') }
for (const directory of [source, target]) fs.writeFileSync(path.join(directory, base, 'verification-scope-composition.json'), JSON.stringify(receipt, null, 2) + '\n')
console.log(JSON.stringify({ target, copiedFiles: copied.length, copiedMiB: (bytes / 1048576).toFixed(2), excluded: excluded.length, addedReferences: added.length }))
