import { createHash } from 'node:crypto'
import { existsSync, mkdirSync, readFileSync, readdirSync, renameSync, writeFileSync } from 'node:fs'
import { dirname, isAbsolute, join, relative, resolve, sep } from 'node:path'
import { parse, stringify } from 'yaml'

export const CONTENT_SCHEMA_VERSION = 1
export const CONTENT_ROOT = 'content'
export const CONTENT_PROJECTION_MAP = 'content/projection-map.yaml'

export function safeContentPath(path, root = process.cwd()) {
  if (typeof path !== 'string' || isAbsolute(path) || path.includes('\\') || /^[a-z]:/i.test(path)) throw new Error(`Invalid relative content path: ${path}`)
  const absolute = resolve(root, path)
  if (!absolute.startsWith(`${resolve(root, CONTENT_ROOT)}${sep}`)) throw new Error(`Content path escapes content/: ${path}`)
  return absolute
}

export function scientificNameSegment(name) {
  if (typeof name !== 'string' || !name.trim()) throw new Error('A tree directory requires a recorded scientific name')
  let segment = name.normalize('NFC').trim().replace(/\s+/g, '_')
    .replace(/[<>:"/\\|?*\x00-\x1f%]/g, character => `%${character.codePointAt(0).toString(16).toUpperCase()}`)
    .replace(/[. ]+$/g, value => [...value].map(character => `%${character.codePointAt(0).toString(16).toUpperCase()}`).join(''))
  if (/^(con|prn|aux|nul|com[1-9]|lpt[1-9])(?:\.|$)/i.test(segment)) segment = `%${segment.codePointAt(0).toString(16).toUpperCase()}${segment.slice(1)}`
  if (segment === '.' || segment === '..') throw new Error(`Invalid tree directory name: ${name}`)
  return segment
}

export function writeUtf8(path, text) {
  mkdirSync(dirname(path), { recursive: true })
  if (existsSync(path) && readFileSync(path, 'utf8') === text) return false
  const temporary = `${path}.content-tmp`
  writeFileSync(temporary, text, 'utf8')
  renameSync(temporary, path)
  return true
}

export const writeYaml = (path, value) => writeUtf8(path, stringify(value, { lineWidth: 0, sortMapEntries: false, aliasDuplicateObjects: false }))
export const readYaml = path => parse(readFileSync(path, 'utf8'), { uniqueKeys: true, maxAliasCount: 0 })
export const jsonText = value => `${JSON.stringify(value, null, 2)}\n`
export const digest = bytes => createHash('sha256').update(bytes).digest('hex')
export function semanticJson(value) {
  function ordered(item) {
    if (Array.isArray(item)) return item.map(ordered)
    if (!item || typeof item !== 'object') return item
    return Object.fromEntries(Object.keys(item).sort().map(key => [key, ordered(item[key])]))
  }
  return JSON.stringify(ordered(value))
}

const escapePointer = value => String(value).replaceAll('~', '~0').replaceAll('/', '~1')
const proseKeys = new Set([
  'text', 'textZh', 'statement', 'summary', 'summaryZh', 'overview', 'overviewZh', 'evidenceSummary', 'evidenceSummaryZh',
  'description', 'definition', 'limitations', 'limitation', 'rationale', 'confidenceRationale', 'note', 'notes', 'scope',
  'groupingBasis', 'rangeBasis', 'conflicts', 'reasons', 'gaps', 'placeTimeScope', 'lifeStatus', 'evidenceBasis',
  'diet', 'habitat', 'locomotion', 'bodySize', 'guild', 'traits', 'caption', 'captionZh', 'altText', 'altTextZh',
  'dek', 'annotation', 'uncertainty', 'uncertaintyItems', 'evidenceItems', 'interpretiveNotice', 'interpretiveNoticeZh',
])
const readerRoots = new Set(['sections', 'readerSections', 'overview', 'overviewZh', 'summary', 'summaryZh', 'text', 'textZh', 'description', 'dek', 'title', 'titleZh'])

function proseLocation(parts, key, text) {
  const names = parts.filter(part => !/^\d+$/.test(part))
  const structural = /(?:Id|Ids|Path|Paths)$/.test(key) || ['field', 'route', 'url', 'scientificName'].includes(key) || text.startsWith('content/') || text.startsWith('data/')
  if (structural) return null
  const profileCopy = ['catalogue-profile', 'atlas-profile'].includes(parts[1]) && names.some(part => ['sections', 'readerSections', 'overview', 'overviewZh', 'ecology', 'traits', 'evidenceSummary', 'limitations', 'readerLimitations'].includes(part))
  const sourceUsage = names.some(part => ['sources', 'readerSources', 'referenceBindings', 'citationBindings', 'usage'].includes(part))
  const isProse = proseKeys.has(key) || readerRoots.has(key) || profileCopy || names.some(part => proseKeys.has(part) || part.startsWith('claim-rationales.') || part.startsWith('claim-statements.')) || (text.length > 120 && !/^https?:\/\//.test(text))
  if (!isProse) return null
  const reader = !sourceUsage && (profileCopy || names.some(part => readerRoots.has(part))) && !names.includes('claims') && !names.includes('facets')
  const locale = key === 'zh' || /Zh$/.test(key) || names.some(part => part === 'zh' || part.endsWith('.zh')) ? 'zh' : 'en'
  return reader ? `page.${locale}.md` : 'evidence.md'
}

function headingFor(parts, original) {
  const sectionIndex = parts.findIndex(part => part === 'sections' || part === 'readerSections')
  if (sectionIndex >= 0 && /^\d+$/.test(parts[sectionIndex + 1] ?? '')) {
    let section = original
    for (const part of parts.slice(0, sectionIndex + 2)) section = section?.[part]
    const locale = parts.at(-1) === 'zh' ? 'zh' : 'en'
    return section?.title?.[locale] ?? section?.topic ?? section?.id ?? parts.at(-2)
  }
  return parts.filter(part => !/^\d+$/.test(part) && !['records', 'en', 'zh'].includes(part)).slice(-3).join(' / ')
}

export function writeNodeContent(path, index, records, root = process.cwd()) {
  const absolute = safeContentPath(path, root)
  const blocks = { 'evidence.md': [], 'page.zh.md': [], 'page.en.md': [] }
  const original = { records }
  function visit(value, parts) {
    if (Array.isArray(value)) return value.map((item, position) => visit(item, [...parts, String(position)]))
    if (value && typeof value === 'object') return Object.fromEntries(Object.entries(value).map(([key, item]) => [key, visit(item, [...parts, key])]))
    if (typeof value !== 'string') return value
    const file = proseLocation(parts, parts.at(-1), value)
    if (!file) return value
    if (value.includes('<!-- evo:text ') || value.includes('<!-- /evo:text -->')) throw new Error(`Reserved Markdown delimiter in ${path}`)
    const field = `/${parts.map(escapePointer).join('/')}`
    const heading = file !== 'evidence.md' && (parts.at(-1) === 'title' || parts.at(-1) === 'titleZh' || parts.at(-2) === 'title') && !value.includes('\n')
    blocks[file].push({ field, text: value, heading: headingFor(parts, original), format: heading ? 'heading' : 'text' })
    return { markdown: file, field, ...(heading ? { format: 'heading' } : {}) }
  }
  const payload = visit(original, [])
  const title = index.displayName ?? index.scientificName ?? index.name ?? path.split('/').at(-1)
  let changed = Number(writeYaml(join(absolute, 'index.yaml'), { schemaVersion: CONTENT_SCHEMA_VERSION, ...index }))
  for (const [file, entries] of Object.entries(blocks)) {
    const metadata = file === 'evidence.md'
      ? { schemaVersion: CONTENT_SCHEMA_VERSION, kind: 'evidence', ...payload }
      : { schemaVersion: CONTENT_SCHEMA_VERSION, kind: 'reader-page', locale: file.includes('.zh.') ? 'zh' : 'en', status: entries.length ? 'migrated-verbatim' : 'not-authored' }
    const renderedHeadings = new Set(entries.filter(entry => entry.format === 'heading').map(entry => entry.text))
    const body = entries.map(entry => entry.format === 'heading'
      ? `<!-- evo:text ${entry.field} -->\n## ${entry.text}\n<!-- /evo:text -->`
      : `${file !== 'evidence.md' && renderedHeadings.has(entry.heading) ? '' : `## ${entry.heading.replace(/\r?\n/g, ' ')}\n\n`}<!-- evo:text ${entry.field} -->\n${entry.text}\n<!-- /evo:text -->`).join('\n\n')
    const text = `---\n${stringify(metadata, { lineWidth: 0, aliasDuplicateObjects: false })}---\n\n# ${title}\n${body ? `\n${body}\n` : ''}`
    changed += Number(writeUtf8(join(absolute, file), text))
  }
  return changed
}

function readMarkdownFile(path) {
  const text = readFileSync(path, 'utf8').replaceAll('\r\n', '\n')
  const match = /^---\n([\s\S]*?)\n---(?:\n|$)/.exec(text)
  if (!match) throw new Error(`Missing YAML front matter: ${path}`)
  const metadata = parse(match[1], { uniqueKeys: true, maxAliasCount: 0 })
  const fields = new Map()
  const expression = /<!-- evo:text ([^\n]+) -->\n([\s\S]*?)\n<!-- \/evo:text -->/g
  for (const entry of text.matchAll(expression)) {
    if (fields.has(entry[1])) throw new Error(`Duplicate Markdown field ${entry[1]} in ${path}`)
    fields.set(entry[1], entry[2])
  }
  return { metadata, fields }
}

export function readNodeContent(path, root = process.cwd()) {
  const absolute = safeContentPath(path, root)
  const index = readYaml(join(absolute, 'index.yaml'))
  if (index.schemaVersion !== CONTENT_SCHEMA_VERSION) throw new Error(`Unsupported content schema at ${path}`)
  const evidence = readMarkdownFile(join(absolute, 'evidence.md'))
  const files = new Map([['evidence.md', evidence]])
  function restore(value) {
    if (Array.isArray(value)) return value.map(restore)
    if (!value || typeof value !== 'object') return value
    if (typeof value.markdown === 'string' && typeof value.field === 'string' && Object.keys(value).every(key => ['markdown', 'field', 'format'].includes(key))) {
      if (!['evidence.md', 'page.en.md', 'page.zh.md'].includes(value.markdown)) throw new Error(`Unsupported Markdown file at ${path}`)
      if (!files.has(value.markdown)) files.set(value.markdown, readMarkdownFile(join(absolute, value.markdown)))
      const file = files.get(value.markdown)
      if (!file.fields.has(value.field)) throw new Error(`Missing Markdown field ${value.field} at ${path}/${value.markdown}`)
      return value.format === 'heading' ? file.fields.get(value.field).replace(/^## /, '') : file.fields.get(value.field)
    }
    return Object.fromEntries(Object.entries(value).map(([key, item]) => [key, restore(item)]))
  }
  return { index, records: restore(evidence.metadata.records ?? {}) }
}

export function walkContentNodes(root = process.cwd()) {
  const directories = []
  function visit(path) {
    for (const entry of readdirSync(path, { withFileTypes: true })) {
      if (entry.isDirectory()) visit(join(path, entry.name))
      else if (entry.name === 'index.yaml' && existsSync(join(path, 'evidence.md'))) directories.push(relative(root, path).replaceAll('\\', '/'))
    }
  }
  if (existsSync(join(root, CONTENT_ROOT))) visit(join(root, CONTENT_ROOT))
  return directories.sort()
}
