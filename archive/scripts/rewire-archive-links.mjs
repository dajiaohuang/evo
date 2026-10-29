import { createHash } from 'node:crypto'
import { existsSync, readFileSync, readdirSync, writeFileSync } from 'node:fs'
import { dirname, extname, posix } from 'node:path'

const manifest = JSON.parse(readFileSync('archive/manifest.json', 'utf8'))
if (manifest.linksRewired) throw new Error('Archive links already migrated')
const moved = new Map(manifest.files.map(file => [file.from, file.to]))
function files(directory) {
  return readdirSync(directory, { withFileTypes: true }).flatMap(entry => {
    const path = `${directory}/${entry.name}`
    return entry.isDirectory() ? files(path) : [path]
  })
}
const live = [...readdirSync('.').filter(path => path.endsWith('.md')), ...files('docs'), ...files('database'), ...files('scripts'), ...files('.github')]
let changed = 0
for (const file of [...live, ...manifest.files.map(file => file.to).filter(path => path.endsWith('.md'))]) {
  if (!['.md', '.mjs', '.yml', '.yaml', '.ts'].includes(extname(file))) continue
  const original = readFileSync(file, 'utf8')
  let value = original
  const entry = manifest.files.find(entry => entry.to === file)
  const base = entry?.from ?? file
  if (file.endsWith('.md')) {
    value = value.replace(/(!?\[[^\]\n]*\]\()([^\s)]+)(\))/g, (match, start, href, end) => {
      if (/^(?:[a-z]+:|#|\/)/i.test(href)) return match
      const hash = href.indexOf('#')
      const target = hash < 0 ? href : href.slice(0, hash)
      const anchor = hash < 0 ? '' : href.slice(hash)
      const oldTarget = posix.normalize(posix.join(dirname(base), target))
      const resolved = moved.get(oldTarget) ?? oldTarget
      return `${start}${posix.relative(dirname(file), resolved)}${anchor}${end}`
    })
  }
  if (!entry) for (const [from, to] of moved) {
    if (!existsSync(from)) value = value.replaceAll(`'${from}'`, `'${to}'`).replaceAll(`"${from}"`, `"${to}"`)
  }
  if (value !== original) { writeFileSync(file, value); changed++ }
}
for (const file of manifest.files) {
  file.originalSha256 = file.sha256
  file.sha256 = createHash('sha256').update(readFileSync(file.to)).digest('hex')
}
manifest.linksRewired = true
writeFileSync('archive/manifest.json', JSON.stringify(manifest, null, 2) + '\n')
console.log(`Updated links and retained tool inputs in ${changed} files; archive hashes refreshed.`)
