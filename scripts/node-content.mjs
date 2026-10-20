import {
  lstatSync,
  mkdirSync,
  opendirSync,
  readFileSync,
  realpathSync,
  renameSync,
  unlinkSync,
  writeFileSync,
} from 'node:fs'
import { randomUUID } from 'node:crypto'
import { dirname, isAbsolute, join, relative, resolve, sep } from 'node:path'
import { parse, stringify } from 'yaml'
import {
  assertPbdbOccurrenceReference, attachContentReferences, ContentReferenceCatalogue,
  isPbdbOccurrencePath, restoreSourceUsage,
} from './content-references.mjs'

export const NODE_CONTENT_SCHEMA_VERSION = 1
export const CONTENT_NODES_ROOT = 'content/nodes'
export const CONTENT_REFERENCES_PATH = 'content/references.yaml'
export const NODE_FILE = 'node.yaml'
export const EVIDENCE_FILE = 'evidence.yaml'

const LOCALES = ['en', 'zh']
const NODE_FILES = new Set([NODE_FILE, EVIDENCE_FILE, 'page.en.md', 'page.zh.md'])
const SECTION_KEY = /^[a-z][a-z0-9._-]*$/
const SOURCE_ARRAY_KEYS = new Set(['sources', 'readerSources'])
const BINDING_KEYS = new Set(['id', 'referenceId', 'metadataVariant', 'fields', 'usage'])
const REFERENCE_USAGE_RESERVED = new Set(['id', 'referenceId', 'metadataVariant', 'fields', 'metadataVariants', 'usage'])
const referenceDocumentCache = new Map()
const referenceMapCache = new WeakMap()

// These are the record keys referenced by the current content export registry.
// Record values remain schema-owned data so their fields are not narrowed here.
const SUPPORTED_RECORD_TYPES = new Set([
  'Phylogeny_hypotheses', 'Research_examples',
  'amphibian-morphology-reader', 'amphibio-source-reader', 'amphitherm-source-reader',
  'atlas-node', 'atlas-profile', 'caecilian-traits-reader', 'calibrations',
  'catalogue-dossier', 'catalogue-profile', 'claim-rationales.zh', 'claim-statements.zh',
  'claims', 'classification-support', 'event',
  'field-claim-overrides', 'pbdb-fossil-reader', 'ranges',
  'readerLimitations', 'readerSections', 'readerSources', 'reading-guide', 'story', 'tadpole-traits-reader',
])

function isObject(value) {
  return value !== null && typeof value === 'object' && !Array.isArray(value)
    && (Object.getPrototypeOf(value) === Object.prototype || Object.getPrototypeOf(value) === null)
}

function assertObject(value, label) {
  if (!isObject(value)) throw new Error(`${label} must be a YAML mapping`)
}

function assertKeys(value, allowed, required, label) {
  assertObject(value, label)
  const allowedSet = new Set(allowed)
  for (const key of Object.keys(value)) if (!allowedSet.has(key)) throw new Error(`Unknown ${label} key: ${key}`)
  for (const key of required) if (!Object.hasOwn(value, key)) throw new Error(`Missing ${label} key: ${key}`)
}

function pathExists(path) {
  try { lstatSync(path); return true } catch (error) {
    if (error.code === 'ENOENT') return false
    throw error
  }
}

function isContained(base, candidate) {
  const fromBase = relative(base, candidate)
  return fromBase === '' || (fromBase !== '..' && !fromBase.startsWith(`..${sep}`) && !isAbsolute(fromBase))
}

function assertRealPathInside(root, path, label) {
  if (!pathExists(path)) return
  const realRoot = realpathSync(root)
  const realPath = realpathSync(path)
  if (!isContained(realRoot, realPath)) throw new Error(`${label} escapes workspace root`)
}

function assertDirectoryNotSymlink(path, label) {
  let stat
  try { stat = lstatSync(path) } catch (error) {
    if (error.code === 'ENOENT') return
    throw error
  }
  if (stat.isSymbolicLink() || !stat.isDirectory()) throw new Error(`${label} must be a real directory`)
}

function assertRegularFile(path, label) {
  let stat
  try { stat = lstatSync(path) } catch (error) {
    if (error.code === 'ENOENT') return false
    throw error
  }
  if (stat.isSymbolicLink() || !stat.isFile()) throw new Error(`${label} must be a regular file`)
  return true
}

function assertNodeRoot(root) {
  const absoluteRoot = resolve(root)
  const contentDirectory = join(absoluteRoot, 'content')
  const nodesDirectory = join(absoluteRoot, CONTENT_NODES_ROOT)
  assertDirectoryNotSymlink(contentDirectory, 'content/')
  assertDirectoryNotSymlink(nodesDirectory, 'content/nodes/')
  assertRealPathInside(absoluteRoot, contentDirectory, 'content/')
  assertRealPathInside(absoluteRoot, nodesDirectory, 'content/nodes/')
  return { absoluteRoot, nodesDirectory }
}

/** Resolve one physical node directory key under content/nodes/. */
export function safeContentPath(directoryKey, root = process.cwd()) {
  if (typeof directoryKey !== 'string' || !directoryKey || isAbsolute(directoryKey)
    || /^[a-z]:/i.test(directoryKey) || directoryKey.includes('/') || directoryKey.includes('\\')
    || /[<>:"|?*\x00-\x1f]/.test(directoryKey) || directoryKey === '.' || directoryKey === '..'
    || /[. ]$/.test(directoryKey) || directoryKey.length > 180
    || /^(con|prn|aux|nul|com[1-9]|lpt[1-9])(?:\.|$)/i.test(directoryKey)) {
    throw new Error(`Invalid physical node directory key: ${String(directoryKey)}`)
  }
  const { absoluteRoot, nodesDirectory } = assertNodeRoot(root)
  const absoluteNode = resolve(nodesDirectory, directoryKey)
  if (dirname(absoluteNode) !== nodesDirectory) throw new Error(`Node path escapes content/nodes/: ${directoryKey}`)
  assertRealPathInside(absoluteRoot, nodesDirectory, 'content/nodes/')
  if (pathExists(absoluteNode)) {
    assertDirectoryNotSymlink(absoluteNode, `Node directory ${directoryKey}`)
    assertRealPathInside(absoluteRoot, absoluteNode, `Node directory ${directoryKey}`)
    if (dirname(realpathSync(absoluteNode)) !== realpathSync(nodesDirectory)) throw new Error(`Node directory escapes content/nodes/: ${directoryKey}`)
  }
  return absoluteNode
}

function safeReferencesPath(root = process.cwd()) {
  const absoluteRoot = resolve(root)
  const contentDirectory = join(absoluteRoot, 'content')
  const path = join(absoluteRoot, CONTENT_REFERENCES_PATH)
  assertDirectoryNotSymlink(contentDirectory, 'content/')
  assertRealPathInside(absoluteRoot, contentDirectory, 'content/')
  if (pathExists(path)) {
    assertRegularFile(path, CONTENT_REFERENCES_PATH)
    assertRealPathInside(absoluteRoot, path, CONTENT_REFERENCES_PATH)
  }
  return path
}

function parseYamlFile(path, label) {
  if (!assertRegularFile(path, label)) throw new Error(`Missing ${label}`)
  return parse(readFileSync(path, 'utf8'), { uniqueKeys: true, maxAliasCount: 0 })
}

function yamlText(value) {
  return stringify(value, { lineWidth: 0, sortMapEntries: false, aliasDuplicateObjects: false })
}

function orderedJson(value) {
  if (Array.isArray(value)) return `[${value.map(orderedJson).join(',')}]`
  if (!isObject(value)) return JSON.stringify(value)
  return `{${Object.keys(value).sort().map(key => `${JSON.stringify(key)}:${orderedJson(value[key])}`).join(',')}}`
}

function atomicWrite(path, text) {
  mkdirSync(dirname(path), { recursive: true })
  const exists = pathExists(path)
  if (exists) assertRegularFile(path, path)
  if (exists && readFileSync(path, 'utf8') === text) return false
  const temporary = `${path}.node-content-tmp-${randomUUID()}`
  try {
    writeFileSync(temporary, text, { encoding: 'utf8', flag: 'wx' })
    renameSync(temporary, path)
  } finally {
    if (pathExists(temporary)) unlinkSync(temporary)
  }
  return true
}

function rejectAuthoringPaths(value) {
  if (!value || typeof value !== 'object') return
  if (Object.hasOwn(value, 'existingCanonicalPath')) {
    throw new Error('Obsolete authoring path existingCanonicalPath does not belong in node identity')
  }
  for (const child of Object.values(value)) rejectAuthoringPaths(child)
}

function validateIdentity(identity) {
  assertObject(identity, 'node identity')
  if (!Object.keys(identity).length) throw new Error('node identity must contain recorded identity fields')
  if (Object.hasOwn(identity, 'schemaVersion')) throw new Error('Schema version belongs to node.yaml, not identity')
  assertNoUnsupportedValue(identity, 'node identity')
  rejectPageRefs(identity, 'node identity')
  rejectAuthoringPaths(identity)
}

function validateSectionKeys(sections, label) {
  if (!Array.isArray(sections)) throw new Error(`${label} must be an array`)
  const seen = new Set()
  for (const key of sections) {
    if (typeof key !== 'string' || !SECTION_KEY.test(key)) throw new Error(`Invalid section key in ${label}: ${String(key)}`)
    if (seen.has(key)) throw new Error(`Duplicate section key in ${label}: ${key}`)
    seen.add(key)
  }
}

function validateNodeDocument(node) {
  assertKeys(node, ['schemaVersion', 'identity', 'relationships', 'structure'], ['schemaVersion', 'identity', 'relationships', 'structure'], 'node.yaml')
  if (node.schemaVersion !== NODE_CONTENT_SCHEMA_VERSION) throw new Error(`Unsupported node schema version: ${String(node.schemaVersion)}`)
  validateIdentity(node.identity)
  if (!Array.isArray(node.relationships)) throw new Error('node relationships must be an array')
  assertNoUnsupportedValue(node.relationships, 'node relationships')
  rejectPageRefs(node.relationships, 'node relationships')
  assertKeys(node.structure, ['sections'], ['sections'], 'node structure')
  assertKeys(node.structure.sections, LOCALES, LOCALES, 'node section structure')
  for (const locale of LOCALES) validateSectionKeys(node.structure.sections[locale], `node.structure.sections.${locale}`)
  return node
}

export function assertSupportedRecordType(key) {
  if (!SUPPORTED_RECORD_TYPES.has(key)) throw new Error(`Unsupported runtime record type: ${key}`)
}

function validateEvidenceDocument(evidence) {
  assertKeys(evidence, ['schemaVersion', 'records'], ['schemaVersion', 'records'], 'evidence.yaml')
  if (evidence.schemaVersion !== NODE_CONTENT_SCHEMA_VERSION) throw new Error(`Unsupported evidence schema version: ${String(evidence.schemaVersion)}`)
  assertObject(evidence.records, 'evidence.records')
  assertNoUnsupportedValue(evidence.records, 'evidence.records')
  for (const key of Object.keys(evidence.records)) assertSupportedRecordType(key)
  for (const type of ['atlas-profile', 'catalogue-profile']) {
    const profile = evidence.records[type]
    if (!isObject(profile)) continue
    for (const field of ['readerLanguageStatus', 'checkedAt']) {
      if (Object.hasOwn(profile, field)) throw new Error(`Retired reader maintenance field: ${type}.${field}`)
    }
  }
  const dossier = evidence.records['catalogue-dossier']
  if (isObject(dossier)) {
    for (const field of ['checkedAt', 'completeness', 'systematicSearch']) {
      if (Object.hasOwn(dossier, field)) throw new Error(`Retired dossier maintenance field: ${field}`)
    }
    for (const facet of Object.values(dossier.facets ?? {})) {
      if (Object.hasOwn(facet, 'search') || facet.status === 'searched-no-evidence') throw new Error('Retired dossier search workflow')
      for (const claim of facet.claims ?? []) if (Object.hasOwn(claim, 'translationStatus')) throw new Error('Retired claim translation workflow')
    }
  }
  function checkRevision(value) {
    if (Array.isArray(value)) return value.forEach(checkRevision)
    if (!isObject(value)) return
    if (Object.hasOwn(value, 'sourceRevisionReview')) throw new Error('Retired source revision review workflow')
    if (isObject(value.sourceRevision)) {
      for (const field of ['status', 'speciesLevelCorrectionsCaptured', 'correctedValuesSubstituted', 'allOriginalValuesDeclaredWrong']) {
        if (Object.hasOwn(value.sourceRevision, field)) throw new Error(`Retired source revision maintenance field: ${field}`)
      }
    }
    for (const child of Object.values(value)) checkRevision(child)
  }
  checkRevision(evidence.records)
  if (!Object.keys(evidence.records).length) throw new Error('Empty evidence.yaml is not canonical; omit it for identity-only nodes')
  return evidence
}

function validateReferenceDocument(document) {
  assertKeys(document, ['schemaVersion', 'references'], ['schemaVersion', 'references'], 'references.yaml')
  if (document.schemaVersion !== NODE_CONTENT_SCHEMA_VERSION) throw new Error(`Unsupported references schema version: ${String(document.schemaVersion)}`)
  if (!Array.isArray(document.references)) throw new Error('references must be an array')
  assertNoUnsupportedValue(document.references, 'references')
  const ids = new Set()
  for (const reference of document.references) {
    assertObject(reference, 'reference entry')
    if (typeof reference.id !== 'string' || !reference.id) throw new Error('Every global reference needs its recorded id')
    if (ids.has(reference.id)) throw new Error(`Duplicate global reference id: ${reference.id}`)
    ids.add(reference.id)
    if (Object.hasOwn(reference, 'importedSourceMetadata')) throw new Error(`Legacy importedSourceMetadata is unsupported in references.yaml: ${reference.id}`)
    if (Object.hasOwn(reference, 'metadataVariants')) {
      if (!Array.isArray(reference.metadataVariants) || reference.metadataVariants.some(variant => !isObject(variant))) {
        throw new Error(`Invalid metadataVariants for reference ${reference.id}`)
      }
    }
    if (Object.hasOwn(reference, 'importedCitationMetadata')) {
      if (!Array.isArray(reference.importedCitationMetadata) || reference.importedCitationMetadata.some(variant => !isObject(variant))) {
        throw new Error(`Invalid importedCitationMetadata for reference ${reference.id}`)
      }
    }
  }
  return document
}

function validatePageSections(sections, locale) {
  if (!Array.isArray(sections)) throw new Error(`pages.${locale} must be an array`)
  const seen = new Set()
  for (const section of sections) {
    assertKeys(section, ['key', 'title', 'body'], ['key', 'title', 'body'], `pages.${locale} section`)
    if (typeof section.key !== 'string' || !SECTION_KEY.test(section.key)) throw new Error(`Invalid section key in pages.${locale}: ${String(section.key)}`)
    if (seen.has(section.key)) throw new Error(`Duplicate section key in pages.${locale}: ${section.key}`)
    seen.add(section.key)
    if (typeof section.title !== 'string' || !section.title.trim() || /[\r\n]/.test(section.title)) throw new Error(`Section ${section.key} needs a one-line title`)
    if (typeof section.body !== 'string') throw new Error(`Section ${section.key} body must be Markdown text`)
  }
  return sections
}

function validatePages(pages) {
  assertObject(pages, 'pages')
  for (const locale of Object.keys(pages)) if (!LOCALES.includes(locale)) throw new Error(`Unsupported page locale: ${locale}`)
  for (const [locale, sections] of Object.entries(pages)) validatePageSections(sections, locale)
  return pages
}

function pageRefCandidate(value) {
  if (!isObject(value) || !Object.hasOwn(value, 'page')) return false
  const hasSection = Object.hasOwn(value, 'section')
  const hasPart = Object.hasOwn(value, 'part')
  return (LOCALES.includes(value.page) && (hasSection || hasPart))
    || (typeof value.page === 'string' && hasSection && hasPart && ['title', 'body'].includes(value.part))
}

/** Create a structured reference to a Markdown section title or body. */
export function pageRef(page, section, part) {
  if (!LOCALES.includes(page)) throw new Error(`Unsupported page locale: ${String(page)}`)
  if (typeof section !== 'string' || !SECTION_KEY.test(section)) throw new Error(`Invalid page section key: ${String(section)}`)
  if (!['title', 'body'].includes(part)) throw new Error(`Unsupported page section part: ${String(part)}`)
  return { page, section, part }
}

function rejectPageRefs(value, label) {
  if (Array.isArray(value)) {
    for (const item of value) rejectPageRefs(item, label)
    return
  }
  if (!isObject(value)) return
  if (pageRefCandidate(value)) throw new Error(`Page references are not allowed in ${label}`)
  for (const [key, item] of Object.entries(value)) {
    if (key === 'markdown' && Object.hasOwn(value, 'field')) throw new Error(`Legacy Markdown field pointer is unsupported in ${label}`)
    rejectPageRefs(item, label)
  }
}

function validatePageRefObject(value, label) {
  if (!pageRefCandidate(value)) return null
  assertKeys(value, ['page', 'section', 'part'], ['page', 'section', 'part'], label)
  if (!LOCALES.includes(value.page)) throw new Error(`Unsupported page locale in ${label}: ${String(value.page)}`)
  if (typeof value.section !== 'string' || !SECTION_KEY.test(value.section)) throw new Error(`Invalid page section in ${label}`)
  if (!['title', 'body'].includes(value.part)) throw new Error(`Unsupported page part in ${label}`)
  return value
}

function fenceMarker(line) {
  return /^ {0,3}(`{3,}|~{3,})/.exec(line)?.[1] ?? null
}

const HTML_BLOCK_TAGS = new Set([
  'address', 'article', 'aside', 'audio', 'blockquote', 'body', 'canvas', 'caption', 'center', 'colgroup', 'dd', 'details', 'dialog',
  'dir', 'div', 'dl', 'dt', 'fieldset', 'figcaption', 'figure', 'footer', 'form', 'h1', 'h2', 'h3', 'h4', 'h5',
  'h6', 'header', 'hr', 'html', 'iframe', 'legend', 'li', 'main', 'math', 'menu', 'nav', 'object', 'ol', 'optgroup',
  'option', 'p', 'picture', 'pre', 'script', 'section', 'style', 'summary', 'svg', 'table', 'tbody', 'td', 'tfoot',
  'th', 'thead', 'tr', 'ul', 'video',
])
const VOID_HTML_TAGS = new Set(['hr'])

function updateHtmlStack(line, stack) {
  const expression = /<\s*(\/?)\s*([a-z][a-z0-9-]*)\b[^>]*>/gi
  for (const match of line.matchAll(expression)) {
    const closing = Boolean(match[1])
    const name = match[2].toLowerCase()
    if (!HTML_BLOCK_TAGS.has(name)) continue
    if (closing) {
      const index = stack.lastIndexOf(name)
      if (index >= 0) stack.splice(index, 1)
    } else if (!VOID_HTML_TAGS.has(name) && !/\/\s*>$/.test(match[0])) stack.push(name)
  }
}

function withoutRenderedSeparator(body) {
  if (body.endsWith('\r\n\r\n')) return body.slice(0, -4)
  return body.endsWith('\n\n') ? body.slice(0, -2) : body
}

export function parsePageMarkdown(markdown, label) {
  if (typeof markdown !== 'string' || !markdown.length) throw new Error(`${label} must contain at least one keyed section`)
  if (/<!--\s*evo:text\b|<!--\s*\/evo:text\s*-->/.test(markdown)) throw new Error(`Legacy evo:text marker is unsupported in ${label}`)
  const headings = []
  const htmlStack = []
  let inComment = false
  let fence = null
  let offset = 0
  while (offset < markdown.length) {
    const newline = markdown.indexOf('\n', offset)
    const end = newline < 0 ? markdown.length : newline
    const rawLine = markdown.slice(offset, end)
    const line = rawLine.endsWith('\r') ? rawLine.slice(0, -1) : rawLine
    const nextOffset = newline < 0 ? markdown.length : newline + 1

    if (inComment) {
      if (line.includes('-->')) inComment = false
      offset = nextOffset
      continue
    }
    if (htmlStack.length) {
      updateHtmlStack(line, htmlStack)
      offset = nextOffset
      continue
    }
    if (fence) {
      const close = new RegExp(`^ {0,3}${fence.char}{${fence.length},}[ \\t]*$`)
      if (close.test(line)) fence = null
      offset = nextOffset
      continue
    }
    const marker = fenceMarker(line)
    if (marker) {
      fence = { char: marker[0], length: marker.length }
      offset = nextOffset
      continue
    }
    const commentStart = line.indexOf('<!--')
    if (commentStart >= 0) {
      if (!line.slice(commentStart + 4).includes('-->')) inComment = true
      offset = nextOffset
      continue
    }
    if (/^ {0,3}<[a-z][a-z0-9-]*(?:\s|\/?>)/i.test(line)) {
      updateHtmlStack(line, htmlStack)
      offset = nextOffset
      continue
    }

    const heading = /^ {0,3}##[ \t]+(.+?)[ \t]+\{#([a-z][a-z0-9._-]*)\}[ \t]*$/.exec(line)
    if (heading) {
      headings.push({ start: offset, contentStart: nextOffset, title: heading[1], key: heading[2] })
    } else if (/^ {0,3}##(?:[ \t]|$)/.test(line) && (!headings.length || /\{#/.test(line))) {
      throw new Error(`Unkeyed or malformed H2 heading in ${label}: ${line}`)
    }
    offset = nextOffset
  }
  if (fence) throw new Error(`Unclosed Markdown code fence in ${label}`)
  if (inComment) throw new Error(`Unclosed HTML comment in ${label}`)
  if (htmlStack.length) throw new Error(`Unclosed block HTML in ${label}`)
  if (!headings.length) throw new Error(`${label} contains no keyed H2 sections`)

  const seen = new Set()
  return headings.map((heading, index) => {
    if (seen.has(heading.key)) throw new Error(`Duplicate section key in ${label}: ${heading.key}`)
    seen.add(heading.key)
    const end = headings[index + 1]?.start ?? markdown.length
    const body = withoutRenderedSeparator(markdown.slice(heading.contentStart, end))
    return { key: heading.key, title: heading.title, body }
  })
}

function renderPageMarkdown(sections, locale) {
  validatePageSections(sections, locale)
  if (!sections.length) return null
  return `${sections.map(section => `## ${section.title} {#${section.key}}\n${section.body}\n\n`).join('')}`
}

function validatePageRoundTrips(pages) {
  for (const [locale, sections] of Object.entries(pages)) {
    const rendered = renderPageMarkdown(sections, locale)
    if (rendered === null) continue
    const restored = parsePageMarkdown(rendered, `page.${locale}.md`)
    if (orderedJson(restored) !== orderedJson(sections)) throw new Error(`Markdown serialization changes page.${locale}.md sections`)
  }
}

function assertStoredFileSet(directory) {
  const allowed = NODE_FILES
  const handle = opendirSync(directory)
  try {
    let entry
    while ((entry = handle.readSync()) !== null) {
      if (!allowed.has(entry.name)) throw new Error(`Unsupported file in flat node directory: ${entry.name}`)
      if (!entry.isFile()) throw new Error(`Unsupported non-file entry in flat node directory: ${entry.name}`)
      assertRegularFile(join(directory, entry.name), entry.name)
    }
  } finally {
    try { handle.closeSync() } catch (error) { if (error.code !== 'ERR_DIR_CLOSED') throw error }
  }
}

function loadStoredNode(directoryKey, root) {
  const directory = safeContentPath(directoryKey, root)
  if (!pathExists(directory)) throw new Error(`Missing flat node directory: ${directoryKey}`)
  const nodePath = join(directory, NODE_FILE)
  if (!assertRegularFile(nodePath, NODE_FILE)) throw new Error(`Missing ${NODE_FILE} for ${directoryKey}; legacy node layouts are not supported`)
  assertStoredFileSet(directory)
  const node = validateNodeDocument(parseYamlFile(nodePath, NODE_FILE))
  const evidencePath = join(directory, EVIDENCE_FILE)
  const evidence = pathExists(evidencePath) ? validateEvidenceDocument(parseYamlFile(evidencePath, EVIDENCE_FILE)) : null
  const pages = { en: [], zh: [] }
  const markdown = {}
  for (const locale of LOCALES) {
    const pagePath = join(directory, `page.${locale}.md`)
    if (pathExists(pagePath)) {
      markdown[locale] = readFileSync(pagePath, 'utf8')
      pages[locale] = parsePageMarkdown(markdown[locale], `page.${locale}.md`)
    }
    const expected = node.structure.sections[locale]
    const actual = pages[locale].map(section => section.key)
    if (expected.length !== actual.length || expected.some((key, index) => key !== actual[index])) {
      throw new Error(`Unknown or out-of-order page section in ${directoryKey}/page.${locale}.md`)
    }
  }
  return { directory, node, evidence, pages, markdown }
}

/** Migration adapter only: return the complete stored aggregate without hydration. */
export function readNodeDocument(directoryKey, root = process.cwd()) {
  const stored = loadStoredNode(directoryKey, root)
  return { node: stored.node, evidence: stored.evidence, pages: stored.markdown }
}

/** Validate a database aggregate without reading or writing the filesystem. */
export function validateNodeAggregate(document) {
  assertKeys(document, ['node', 'evidence', 'pages'], ['node', 'evidence', 'pages'], 'node aggregate')
  assertNoUnsupportedValue(document, 'node aggregate')
  validateNodeDocument(document.node)
  if (document.evidence !== null) validateEvidenceDocument(document.evidence)
  assertObject(document.pages, 'aggregate pages')
  const pages = { en: [], zh: [] }
  for (const [locale, markdown] of Object.entries(document.pages)) {
    if (!LOCALES.includes(locale)) throw new Error(`Unsupported page locale: ${locale}`)
    if (typeof markdown !== 'string') throw new Error(`pages.${locale} must be Markdown text`)
    pages[locale] = parsePageMarkdown(markdown, `aggregate pages.${locale}`)
  }
  for (const locale of LOCALES) {
    const expected = document.node.structure.sections[locale]
    const actual = pages[locale].map(section => section.key)
    if (expected.length !== actual.length || expected.some((key, index) => key !== actual[index])) {
      throw new Error(`Unknown or out-of-order page section in aggregate pages.${locale}`)
    }
  }
  validateFlatPageReferences({ pages, evidence: document.evidence })
  return pages
}

/** Collect global bibliography bindings, including nested records and relationships.
 * PBDB occurrence-native reference IDs remain in their original source namespace.
 */
export function collectNodeReferenceBindings(document, references) {
  const refs = validateNodeReferenceBindings({ records: document.evidence?.records ?? {}, relationships: document.node.relationships }, references)
  const bindings = new Map()
  const token = value => String(value).replaceAll('~', '~0').replaceAll('/', '~1')
  function add(id, pointer) {
    if (typeof id !== 'string' || !refs.has(id)) throw new Error(`Unknown reference id: ${String(id)}`)
    const list = bindings.get(id) ?? []
    list.push({ pointer }); bindings.set(id, list)
  }
  function visit(value, pointer, parts = []) {
    if (Array.isArray(value)) return value.forEach((item, index) => visit(item, pointer + '/' + index, [...parts, String(index)]))
    if (!isObject(value)) return
    if (Object.hasOwn(value, 'referenceId') && !isPbdbOccurrencePath(parts)) add(value.referenceId, pointer + '/referenceId')
    if (Object.hasOwn(value, 'referenceIds')) {
      if (!Array.isArray(value.referenceIds)) throw new Error('referenceIds must be an array')
      value.referenceIds.forEach((id, index) => add(id, pointer + '/referenceIds/' + index))
    }
    for (const [key, child] of Object.entries(value)) visit(child, pointer + '/' + token(key), [...parts, key])
  }
  // Use the same path shape as validateNodeReferenceBindings for native PBDB IDs.
  visit(document.evidence?.records ?? {}, '/evidence/records', ['records'])
  visit(document.node.relationships, '/node/relationships', ['relationships'])
  return bindings
}

function readReferenceDocument(root) {
  const path = safeReferencesPath(root)
  let stamp = 'missing'
  if (pathExists(path)) {
    const stat = lstatSync(path)
    stamp = `${stat.dev}:${stat.ino}:${stat.size}:${stat.mtimeMs}:${stat.ctimeMs}`
  }
  const cached = referenceDocumentCache.get(path)
  if (cached?.stamp === stamp) return cached.document
  const document = stamp === 'missing'
    ? { schemaVersion: NODE_CONTENT_SCHEMA_VERSION, references: [] }
    : validateReferenceDocument(parseYamlFile(path, CONTENT_REFERENCES_PATH))
  referenceDocumentCache.set(path, { stamp, document })
  return document
}

/** Read and validate the single global reference table. */
export function readReferences(root = process.cwd()) {
  return structuredClone(readReferenceDocument(root))
}

/** Create the current reference binder from the flat global reference table. */
export function createContentReferenceCatalogue(references = []) {
  const inputRows = Array.isArray(references)
    ? structuredClone(references)
    : structuredClone(validateReferenceDocument(references).references)
  const rows = validateReferenceDocument({ schemaVersion: NODE_CONTENT_SCHEMA_VERSION, references: inputRows }).references
  const catalogue = new ContentReferenceCatalogue(rows)
  Object.defineProperty(catalogue, 'flatReferenceRows', {
    value: new Map(rows.map(reference => [reference.id, structuredClone(reference)])),
  })
  return catalogue
}

function referenceMap(document) {
  let refs = referenceMapCache.get(document)
  if (!refs) {
    refs = new Map(document.references.map(reference => [reference.id, reference]))
    referenceMapCache.set(document, refs)
  }
  return refs
}

export function validateNodeReferenceBindings(records, references) {
  const refs = references instanceof Map ? references : referenceMap(references)
  function visit(value, key = '', parts = []) {
    if (SOURCE_ARRAY_KEYS.has(key)) {
      if (!Array.isArray(value)) throw new Error(`${key} must be an array of registered source bindings`)
      const bindingIds = new Set()
      for (const binding of value) {
        assertKeys(binding, [...BINDING_KEYS], ['id', 'referenceId', 'fields', 'usage'], `${key} binding`)
        if (typeof binding.id !== 'string' || !binding.id) throw new Error(`${key} binding id must be a recorded source key`)
        if (bindingIds.has(binding.id)) throw new Error(`Duplicate ${key} source key: ${binding.id}`)
        bindingIds.add(binding.id)
        if (typeof binding.referenceId !== 'string' || !refs.has(binding.referenceId)) throw new Error(`Unknown reference id in ${key}: ${String(binding.referenceId)}`)
        if (Object.hasOwn(binding, 'metadataVariant') && (!Number.isInteger(binding.metadataVariant) || binding.metadataVariant < 0)) {
          throw new Error(`Invalid metadataVariant for source ${binding.id}`)
        }
        if (Object.hasOwn(binding, 'metadataVariant') && !isObject(refs.get(binding.referenceId).metadataVariants?.[binding.metadataVariant])) {
          throw new Error(`Missing metadata variant ${binding.metadataVariant} for ${binding.referenceId}`)
        }
        if (!Array.isArray(binding.fields) || !binding.fields.length || binding.fields.some(field => typeof field !== 'string' || !field)) {
          throw new Error(`Source binding fields must list the recorded source row shape: ${binding.id}`)
        }
        if (new Set(binding.fields).size !== binding.fields.length || !binding.fields.includes('id')) throw new Error(`Invalid source binding field list: ${binding.id}`)
        if (binding.fields.some(field => ['fields', 'metadataVariants', 'usage'].includes(field))) throw new Error(`Source binding field list contains an internal field: ${binding.id}`)
        assertObject(binding.usage, `${key} binding usage`)
        for (const field of REFERENCE_USAGE_RESERVED) if (Object.hasOwn(binding.usage, field)) throw new Error(`Source binding usage cannot replace ${field}`)
        visit(binding.usage, 'usage', [...parts, binding.id, 'usage'])
      }
      return
    }
    if (Array.isArray(value)) {
      value.forEach((item, index) => visit(item, key, [...parts, String(index)]))
      return
    }
    if (!isObject(value)) return
    if (Array.isArray(value.readerSections)) {
      const sources = new Map([
        ...(Array.isArray(value.sources) ? value.sources : []),
        ...(Array.isArray(value.readerSources) ? value.readerSources : []),
      ].map(source => [source.id, source]))
      const declaredReferences = new Set(Array.isArray(value.referenceIds) ? value.referenceIds : [])
      for (const section of value.readerSections) {
        if (!isObject(section) || !Object.hasOwn(section, 'sourceIds')) continue
        if (!Array.isArray(section.sourceIds) || section.sourceIds.some(id => typeof id !== 'string')) throw new Error('readerSections.sourceIds must be an ordered string array')
        for (const id of section.sourceIds) {
          const source = sources.get(id)
          const globalReference = !source && declaredReferences.has(id) ? refs.get(id) : undefined
          const recordedScope = Object.hasOwn(section, 'scope')
            ? (source ? hydrateRecordSources([source], refs, 'readerSources')[0].scope : globalReference?.scope)
            : undefined
          if ((!source && !globalReference) || (Object.hasOwn(section, 'scope')
            && (recordedScope === undefined || orderedJson(recordedScope) !== orderedJson(section.scope)))) {
            throw new Error(`readerSections.sourceIds is not registered by readerSources in the same scope: ${id}`)
          }
        }
      }
    }
    if (Object.hasOwn(value, 'referenceId')) {
      if (isPbdbOccurrencePath(parts)) assertPbdbOccurrenceReference(value)
      else if (typeof value.referenceId !== 'string' || !refs.has(value.referenceId)) throw new Error(`Unknown reference id: ${String(value.referenceId)}`)
      if (Array.isArray(value.originalFields) && Object.hasOwn(value, 'metadataVariant')) {
        const citation = refs.get(value.referenceId).importedCitationMetadata?.[value.metadataVariant]
        if (!Number.isInteger(value.metadataVariant) || value.metadataVariant < 0 || !isObject(citation)) {
          throw new Error(`Missing imported citation metadata: ${value.referenceId}/${String(value.metadataVariant)}`)
        }
        if (!Array.isArray(value.originalFields) || value.originalFields.some(field => typeof field !== 'string') || !isObject(value.usage)) {
          throw new Error(`Invalid imported citation binding: ${value.referenceId}`)
        }
      }
    }
    for (const [childKey, child] of Object.entries(value)) visit(child, childKey, [...parts, childKey])
  }
  visit(records)
  return refs
}

function hydrateRecordSources(value, refs, key = '') {
  if (Array.isArray(value)) {
    if (SOURCE_ARRAY_KEYS.has(key)) {
      return value.map(binding => {
        const reference = refs.get(binding.referenceId)
        if (!reference) throw new Error(`Unknown reference id: ${binding.referenceId}`)
        const { metadataVariants, ...base } = reference
        let variant = {}
        if (binding.metadataVariant !== undefined) {
          variant = metadataVariants?.[binding.metadataVariant]
          if (!variant) throw new Error(`Missing metadata variant ${binding.metadataVariant} for ${binding.referenceId}`)
        }
        const merged = { ...structuredClone(base), ...structuredClone(variant), ...structuredClone(binding.usage) }
        const restored = Object.fromEntries(binding.fields.map(field => {
          if (field === 'id') return [field, binding.id]
          if (field === 'referenceId') return [field, binding.referenceId]
          if (field === 'metadataVariant') {
            if (binding.metadataVariant === undefined) throw new Error(`Missing metadataVariant field for source ${binding.id}`)
            return [field, binding.metadataVariant]
          }
          if (field === 'title' && binding.metadataVariant === undefined && typeof reference.title === 'string') {
            return [field, { en: reference.title, zh: reference.titleTranslations?.zh ?? reference.title }]
          }
          if (field === 'url' && merged.url === undefined && typeof reference.doi === 'string') {
            return [field, `https://doi.org/${reference.doi}`]
          }
          if (!Object.hasOwn(merged, field)) throw new Error(`Missing source field ${binding.referenceId}/${field}`)
          return [field, structuredClone(merged[field])]
        }))
        restoreSourceUsage(restored, binding.usage)
        return attachContentReferences(restored, refs)
      })
    }
    return value.map(item => hydrateRecordSources(item, refs, key))
  }
  if (!isObject(value)) return value
  return Object.fromEntries(Object.entries(value).map(([childKey, child]) => [childKey, hydrateRecordSources(child, refs, childKey)]))
}

function resolvePageReferences(value, pages, label) {
  if (Array.isArray(value)) return value.map(item => resolvePageReferences(item, pages, label))
  if (!isObject(value)) return value
  if (pageRefCandidate(value)) {
    const ref = validatePageRefObject(value, label)
    const section = pages[ref.page].find(item => item.key === ref.section)
    if (!section) throw new Error(`Unknown page section pointer: ${ref.page}/${ref.section}`)
    return section[ref.part]
  }
  if (Object.hasOwn(value, 'markdown') && Object.hasOwn(value, 'field')) throw new Error(`Legacy Markdown field pointer is unsupported in ${label}`)
  return Object.fromEntries(Object.entries(value).map(([key, child]) => [key, resolvePageReferences(child, pages, label)]))
}

function deriveReadingTitles(records, rawRecords, pages) {
  const sections = records['catalogue-profile']?.sections
  const facets = records['catalogue-dossier']?.facets
  if (!Array.isArray(sections) && !isObject(facets)) return
  const rawSections = rawRecords['catalogue-profile']?.sections ?? []
  const headings = Object.fromEntries(LOCALES.map(locale => [locale, new Map(pages[locale].map(section => [section.key, section.title]))]))
  const derive = (record, pointers, label) => {
    const explicitTitle = record.title
    if (explicitTitle !== undefined && !isObject(explicitTitle)) return
    const titles = isObject(explicitTitle) ? { ...explicitTitle } : {}
    for (const locale of LOCALES) {
      if (Object.hasOwn(titles, locale)) continue
      const bodyPointer = pointers?.[locale]
      if (!pageRefCandidate(bodyPointer)) continue
      const reference = validatePageRefObject(bodyPointer, `${label} ${locale} body`)
      if (reference.part !== 'body') continue
      titles[locale] = headings[reference.page].get(reference.section)
    }
    if (Object.keys(titles).length) record.title = titles
  }
  for (const [index, section] of (Array.isArray(sections) ? sections : []).entries()) {
    if (isObject(section) && isObject(section.text)) derive(section, rawSections[index]?.text, 'catalogue-profile section')
  }
  for (const [topic, facet] of Object.entries(facets ?? {})) {
    if (!isObject(facet) || !Array.isArray(facet.claims)) continue
    const rawClaims = rawRecords['catalogue-dossier']?.facets?.[topic]?.claims ?? []
    for (const [index, claim] of facet.claims.entries()) {
      if (!isObject(claim)) continue
      derive(claim, { en: rawClaims[index]?.text, zh: rawClaims[index]?.textZh }, `catalogue-dossier ${topic} claim`)
    }
  }
}

/** Read one new-format node and restore runtime business records. */
export function readNodeContent(directoryKey, root = process.cwd()) {
  const stored = loadStoredNode(directoryKey, root)
  return resolveValidatedNode(stored, readReferenceDocument(root))
}

/** The same reader projection for files, local Postgres and hosted Postgres. */
export function resolveNodeDocument(document, references) {
  const pages = validateNodeAggregate(document)
  return resolveValidatedNode({ ...document, pages }, references)
}

function resolveValidatedNode(stored, references) {
  const records = stored.evidence?.records ?? {}
  const refs = validateNodeReferenceBindings({ records, relationships: stored.node.relationships }, references)
  const resolved = resolvePageReferences(records, stored.pages, 'node aggregate')
  // Derive presentation fields on the resolved copy, avoiding another full
  // clone of potentially large evidence records while leaving stored data intact.
  deriveReadingTitles(resolved, records, stored.pages)
  const hydrated = hydrateRecordSources(resolved, refs)
  return {
    identity: structuredClone(stored.node.identity),
    relationships: structuredClone(stored.node.relationships),
    structure: structuredClone(stored.node.structure),
    pages: structuredClone(stored.pages),
    records: hydrated,
  }
}

function assertNoUnsupportedValue(value, label) {
  if (value === undefined || typeof value === 'function' || typeof value === 'symbol' || typeof value === 'bigint') throw new Error(`Unsupported value in ${label}`)
  if (Array.isArray(value)) {
    for (const item of value) assertNoUnsupportedValue(item, label)
  } else if (isObject(value)) {
    for (const [key, item] of Object.entries(value)) {
      if (key === '__proto__' || key === 'constructor') throw new Error(`Unsupported key in ${label}: ${key}`)
      assertNoUnsupportedValue(item, label)
    }
  } else if (typeof value === 'number' && !Number.isFinite(value)) {
    throw new Error(`Unsupported non-finite number in ${label}`)
  } else if (value !== null && typeof value !== 'string' && typeof value !== 'number' && typeof value !== 'boolean') {
    throw new Error(`Unsupported scalar in ${label}`)
  }
}

function canonicalReferenceRows(input, referenceCatalogue) {
  if (input !== undefined) {
    const document = Array.isArray(input)
      ? { schemaVersion: NODE_CONTENT_SCHEMA_VERSION, references: structuredClone(input) }
      : structuredClone(input)
    return validateReferenceDocument(document).references
  }
  if (referenceCatalogue?.flatReferenceRows instanceof Map) {
    const rows = [...referenceCatalogue.flatReferenceRows.values()].map(reference => structuredClone(reference))
    return validateReferenceDocument({ schemaVersion: NODE_CONTENT_SCHEMA_VERSION, references: rows }).references
  }
  if (referenceCatalogue && Array.isArray(referenceCatalogue.records)) {
    const rows = referenceCatalogue.records.map(reference => {
      if (Object.hasOwn(reference, 'importedSourceMetadata')) throw new Error('Legacy importedSourceMetadata is unsupported in the canonical reference catalogue: ' + reference.id)
      return structuredClone(reference)
    })
    return validateReferenceDocument({ schemaVersion: NODE_CONTENT_SCHEMA_VERSION, references: rows }).references
  }
  return []
}

function isRegisteredSourceBinding(value) {
  return isObject(value) && typeof value.id === 'string' && typeof value.referenceId === 'string'
    && Array.isArray(value.fields) && isObject(value.usage)
}

function referenceUsageBindings(usages, references) {
  if (!Array.isArray(usages)) throw new Error('referenceUsages must be an array')
  const refs = new Map(references.map(reference => [reference.id, reference]))
  return usages.map(usage => {
    assertKeys(usage, ['referenceId', 'sourceKey', 'scope', 'locator'], ['referenceId', 'sourceKey', 'scope', 'locator'], 'reference usage')
    if (typeof usage.referenceId !== 'string' || !usage.referenceId) throw new Error('reference usage needs a global referenceId')
    if (typeof usage.sourceKey !== 'string' || !usage.sourceKey) throw new Error('reference usage needs a recorded sourceKey')
    const reference = refs.get(usage.referenceId)
    if (!reference) throw new Error(`Unknown primary reference in referenceUsages: ${usage.referenceId}`)
    const title = typeof reference.title === 'string'
      ? { en: reference.title, zh: reference.titleTranslations?.zh ?? reference.title }
      : reference.title
    const url = reference.url ?? (reference.doi ? `https://doi.org/${reference.doi}` : undefined)
    if (!title || !url) throw new Error(`Primary reference lacks recorded title or URL: ${usage.referenceId}`)
    const fields = ['id', 'referenceId', 'title', 'url', ...['doi', 'version', 'license', 'rights', 'attribution'].filter(key => reference[key] !== undefined), 'scope', 'locator']
    const binding = {
      id: usage.sourceKey,
      referenceId: usage.referenceId,
      fields,
      usage: { scope: structuredClone(usage.scope), locator: structuredClone(usage.locator) },
    }
    return binding
  })
}

function canonicalSourceBindings(records, { referenceCatalogue, references }) {
  const catalogueReferenceIds = new Set()
  let boundRawRows = false
  function visit(value, key = '') {
    if (SOURCE_ARRAY_KEYS.has(key) && isObject(value)
      && Object.keys(value).length === 1 && Array.isArray(value.referenceUsages)) {
      return referenceUsageBindings(value.referenceUsages, references())
    }
    if (Array.isArray(value)) {
      if (SOURCE_ARRAY_KEYS.has(key)) {
        return value.map(source => {
          if (isRegisteredSourceBinding(source)) {
            catalogueReferenceIds.add(source.referenceId)
            return source
          }
          if (!referenceCatalogue || typeof referenceCatalogue.bind !== 'function' || !Array.isArray(referenceCatalogue.records)) {
            throw new Error(`Raw ${key} rows need an in-memory ContentReferenceCatalogue`)
          }
          assertObject(source, `${key} source row`)
          if (typeof source.id !== 'string' || !source.id) throw new Error(`${key} source row needs its recorded id`)
          const bound = referenceCatalogue.bind(source)
          assertObject(bound, `bound ${key} source row`)
          if (bound.sourceKey !== source.id || typeof bound.referenceId !== 'string' || !Array.isArray(bound.originalFields) || !isObject(bound.usage)) {
            throw new Error(`Reference catalogue returned an invalid ${key} binding for ${source.id}`)
          }
          if (bound.originalFields.some(field => ['fields', 'metadataVariant', 'metadataVariants', 'usage'].includes(field))) {
            throw new Error(`${key} source row uses a reserved binding field: ${source.id}`)
          }
          if (bound.originalFields.includes('referenceId') && source.referenceId !== bound.referenceId) {
            throw new Error(`${key} source row referenceId conflicts with its global binding: ${source.id}`)
          }
          boundRawRows = true
          catalogueReferenceIds.add(bound.referenceId)
          const binding = {
            id: source.id,
            referenceId: bound.referenceId,
            fields: structuredClone(bound.originalFields),
            ...(bound.metadataVariant === undefined ? {} : { metadataVariant: bound.metadataVariant }),
            usage: structuredClone(bound.usage),
          }
          collectReferenceIds(binding, catalogueReferenceIds)
          return binding
        })
      }
      return value.map(item => visit(item, key))
    }
    if (!isObject(value)) return value
    return Object.fromEntries(Object.entries(value).map(([childKey, child]) => [childKey, visit(child, childKey)]))
  }
  const converted = visit(records)
  const referenceAdditions = []
  if (boundRawRows) {
    const catalogueRows = new Map(referenceCatalogue.records.map(reference => [reference.id, reference]))
    for (const id of catalogueReferenceIds) {
      const reference = catalogueRows.get(id)
      if (!reference) throw new Error(`Reference catalogue did not retain bound reference: ${id}`)
      const original = referenceCatalogue.flatReferenceRows?.get(id)
      const copy = structuredClone(original ?? reference)
      if (Object.hasOwn(reference, 'importedSourceMetadata') || Object.hasOwn(copy, 'importedSourceMetadata')) {
        throw new Error('Legacy importedSourceMetadata is unsupported in the canonical reference catalogue: ' + id)
      }
      if (Object.hasOwn(reference, 'metadataVariants')) copy.metadataVariants = structuredClone(reference.metadataVariants)
      if (Object.hasOwn(reference, 'importedCitationMetadata')) {
        copy.importedCitationMetadata = structuredClone(reference.importedCitationMetadata)
      }
      referenceAdditions.push(copy)
    }
  }
  return { records: converted, referenceAdditions }
}

function collectReferenceIds(value, ids) {
  if (Array.isArray(value)) {
    for (const item of value) collectReferenceIds(item, ids)
    return
  }
  if (!isObject(value)) return
  if (typeof value.referenceId === 'string') ids.add(value.referenceId)
  for (const child of Object.values(value)) collectReferenceIds(child, ids)
}

/** Convert the canonical in-memory node shape to the flat schema-v1 file model. */
export function canonicalToNodeContent(canonical, options = {}) {
  assertKeys(options, ['referenceCatalogue', 'references'], [], 'canonical conversion options')
  assertKeys(canonical, ['identity', 'relationships', 'records', 'pages'], ['identity'], 'canonical node')
  assertObject(canonical.identity, 'canonical identity')
  const identity = structuredClone(canonical.identity)
  validateIdentity(identity)
  const relationships = structuredClone(canonical.relationships ?? [])
  if (!Array.isArray(relationships)) throw new Error('canonical relationships must be an array')
  assertNoUnsupportedValue(relationships, 'canonical relationships')
  rejectPageRefs(relationships, 'canonical relationships')
  const canonicalRecords = structuredClone(canonical.records ?? {})
  assertObject(canonicalRecords, 'canonical records')
  for (const type of Object.keys(canonicalRecords)) if (!SUPPORTED_RECORD_TYPES.has(type)) throw new Error(`Unsupported runtime record type: ${type}`)
  let referenceRows
  const references = () => referenceRows ??= canonicalReferenceRows(options.references, options.referenceCatalogue)
  const { records, referenceAdditions } = canonicalSourceBindings(canonicalRecords, {
    referenceCatalogue: options.referenceCatalogue,
    references,
  })
  assertNoUnsupportedValue(records, 'canonical records')
  const pages = canonicalPagesToMarkdownSections(structuredClone(canonical.pages ?? {}), records)
  assertNoUnsupportedValue(pages, 'canonical pages')
  const sections = { en: [], zh: [] }
  for (const locale of LOCALES) if (pages[locale]) sections[locale] = pages[locale].map(section => section.key)
  const node = { schemaVersion: NODE_CONTENT_SCHEMA_VERSION, identity, relationships, structure: { sections } }
  validateNodeDocument(node)
  const evidence = Object.keys(records).length ? { schemaVersion: NODE_CONTENT_SCHEMA_VERSION, records } : undefined
  if (evidence) validateEvidenceDocument(evidence)
  const result = {
    node,
    ...(evidence ? { evidence } : {}),
    ...(Object.keys(pages).length ? { pages } : {}),
    ...(referenceAdditions.length ? { references: referenceAdditions } : {}),
  }
  validateFlatPageReferences(result)
  validatePageRoundTrips(pages)
  return result
}

function pageFieldTarget(records, selector, locale) {
  assertKeys(selector, ['record', 'collection', 'itemId', 'field'], ['record', 'field'], 'page field selector')
  if (typeof selector.record !== 'string' || !SUPPORTED_RECORD_TYPES.has(selector.record)) throw new Error(`Unknown page-bound record: ${String(selector.record)}`)
  if (typeof selector.field !== 'string' || !selector.field || selector.field.includes('.')) throw new Error('Page field selector needs one direct field name')
  let collection = records[selector.record]
  if (Object.hasOwn(selector, 'collection')) {
    if (typeof selector.collection !== 'string' || !isObject(collection) || !Array.isArray(collection[selector.collection])) throw new Error(`Unknown record collection: ${String(selector.collection)}`)
    collection = collection[selector.collection]
  }
  let target = collection
  if (Array.isArray(collection)) {
    if (typeof selector.itemId !== 'string' || !selector.itemId) throw new Error('Array page fields need a stable itemId')
    const matches = collection.filter(item => isObject(item) && (item.id === selector.itemId || item.key === selector.itemId))
    if (matches.length !== 1) throw new Error(`Page field item is missing or ambiguous: ${selector.record}/${selector.itemId}`)
    target = matches[0]
  } else if (Object.hasOwn(selector, 'itemId')) {
    throw new Error(`itemId requires an array record or collection: ${selector.record}`)
  }
  assertObject(target, `page field target ${selector.record}`)
  if (!Object.hasOwn(target, selector.field)) throw new Error(`Unknown page-bound field: ${selector.record}.${selector.field}`)
  const value = target[selector.field]
  if (isObject(value)) {
    if (!Object.hasOwn(value, locale)) throw new Error(`Localized page field lacks ${locale}: ${selector.record}.${selector.field}`)
    if (typeof value[locale] !== 'string') throw new Error(`Page-bound field is not text: ${selector.record}.${selector.field}.${locale}`)
    return { read: () => value[locale], write: next => { value[locale] = next }, field: locale }
  }
  if (typeof value !== 'string') throw new Error(`Page-bound field is not text: ${selector.record}.${selector.field}`)
  return { read: () => target[selector.field], write: next => { target[selector.field] = next }, field: selector.field }
}

function canonicalPagesToMarkdownSections(rawPages, records) {
  assertObject(rawPages, 'canonical pages')
  for (const locale of Object.keys(rawPages)) if (!LOCALES.includes(locale)) throw new Error(`Unsupported page locale: ${locale}`)
  const pages = {}
  const selectedFields = new Set()
  for (const [locale, rawSections] of Object.entries(rawPages)) {
    if (!Array.isArray(rawSections)) throw new Error(`canonical.pages.${locale} must be an array`)
    pages[locale] = rawSections.map(section => {
      assertKeys(section, ['key', 'title', 'body'], ['key', 'title', 'body'], `canonical.pages.${locale} section`)
      if (typeof section.key !== 'string' || !SECTION_KEY.test(section.key)) throw new Error(`Invalid section key in canonical.pages.${locale}`)
      const parts = {}
      for (const part of ['title', 'body']) {
        const source = section[part]
        if (typeof source === 'string') {
          parts[part] = source
          continue
        }
        assertObject(source, `canonical.pages.${locale}.${section.key}.${part}`)
        const field = pageFieldTarget(records, source, locale)
        const signature = `${source.record}|${source.collection ?? ''}|${source.itemId ?? ''}|${source.field}|${field.field}`
        if (selectedFields.has(signature)) throw new Error(`Page field is bound more than once: ${signature}`)
        selectedFields.add(signature)
        const text = field.read()
        field.write(pageRef(locale, section.key, part))
        parts[part] = text
      }
      if (typeof parts.title !== 'string' || typeof parts.body !== 'string') throw new Error(`Page section ${section.key} must resolve to title and body text`)
      return { key: section.key, title: parts.title, body: parts.body }
    })
    validatePageSections(pages[locale], locale)
  }
  return pages
}

function validateFlatPageReferences(content) {
  const pages = { en: [], zh: [] }
  for (const locale of LOCALES) pages[locale] = content.pages?.[locale] ?? []
  const records = content.evidence?.records ?? {}
  function visit(value, label) {
    if (Array.isArray(value)) { for (const item of value) visit(item, label); return }
    if (!isObject(value)) return
    const ref = validatePageRefObject(value, label)
    if (ref) {
      if (!pages[ref.page].some(section => section.key === ref.section)) throw new Error(`Unknown page section pointer: ${ref.page}/${ref.section}`)
      return
    }
    if (Object.hasOwn(value, 'markdown') && Object.hasOwn(value, 'field')) throw new Error(`Legacy Markdown field pointer is unsupported in ${label}`)
    for (const [key, child] of Object.entries(value)) visit(child, label)
  }
  visit(records, 'evidence.records')
}

function collectSourceRegistrations(value, key = '', output = []) {
  if (Array.isArray(value)) {
    if (SOURCE_ARRAY_KEYS.has(key)) for (const item of value) output.push(`${key}:${orderedJson(item)}`)
    if (key === 'sourceIds') for (const id of value) output.push(`sourceIds:${orderedJson(id)}`)
    if (key === 'referenceLinks') for (const item of value) output.push(`referenceLinks:${orderedJson(item)}`)
    for (const item of value) collectSourceRegistrations(item, key, output)
    return output
  }
  if (!isObject(value)) return output
  for (const [childKey, child] of Object.entries(value)) collectSourceRegistrations(child, childKey, output)
  return output
}

function mergeEvidence(existing, incoming) {
  const next = validateEvidenceDocument(structuredClone(incoming))
  if (!existing) return next
  const previous = validateEvidenceDocument(structuredClone(existing))
  const records = structuredClone(previous.records)
  for (const [key, value] of Object.entries(next.records)) {
    const oldValue = records[key]
    if (oldValue !== undefined) {
      const oldBindings = collectSourceRegistrations(oldValue)
      const newBindings = collectSourceRegistrations(value)
      const counts = new Map()
      for (const item of newBindings) counts.set(item, (counts.get(item) ?? 0) + 1)
      for (const item of oldBindings) {
        const count = counts.get(item) ?? 0
        if (!count) throw new Error(`Evidence update would remove or change a source registration in ${key}`)
        counts.set(item, count - 1)
      }
    }
    records[key] = structuredClone(value)
  }
  return { schemaVersion: NODE_CONTENT_SCHEMA_VERSION, records }
}

function mergePages(existing, incoming) {
  const result = { en: structuredClone(existing?.en ?? []), zh: structuredClone(existing?.zh ?? []) }
  if (!incoming) return result
  validatePages(incoming)
  for (const locale of Object.keys(incoming)) result[locale] = structuredClone(incoming[locale])
  return result
}

function referenceAdditionsDocument(additions) {
  const incoming = Array.isArray(additions)
    ? { schemaVersion: NODE_CONTENT_SCHEMA_VERSION, references: structuredClone(additions) }
    : structuredClone(additions)
  return validateReferenceDocument(incoming)
}

function mergeReferenceDocuments(currentInput, additions) {
  const current = validateReferenceDocument(structuredClone(currentInput))
  if (additions === undefined) return current
  const incoming = referenceAdditionsDocument(additions)
  const references = structuredClone(current.references)
  const byId = new Map(references.map((reference, index) => [reference.id, index]))
  const variantKeys = ['metadataVariants', 'importedCitationMetadata']
  for (const reference of incoming.references) {
    const index = byId.get(reference.id)
    if (index === undefined) {
      const copy = structuredClone(reference)
      references.push(copy)
      byId.set(copy.id, references.length - 1)
      continue
    }
    const previous = references[index]
    const previousBase = Object.fromEntries(Object.entries(previous).filter(([key]) => !variantKeys.includes(key)))
    const incomingBase = Object.fromEntries(Object.entries(reference).filter(([key]) => !variantKeys.includes(key)))
    if (orderedJson(previousBase) !== orderedJson(incomingBase)) throw new Error(`Conflicting duplicate global reference id: ${reference.id}`)
    const merged = { ...previousBase }
    for (const key of variantKeys) {
      const hadVariants = Object.hasOwn(previous, key) || Object.hasOwn(reference, key)
      if (!hadVariants) continue
      const variants = structuredClone(previous[key] ?? [])
      const seen = new Set(variants.map(orderedJson))
      for (const variant of reference[key] ?? []) {
        const variantKey = orderedJson(variant)
        if (!seen.has(variantKey)) { variants.push(structuredClone(variant)); seen.add(variantKey) }
      }
      merged[key] = variants
    }
    references[index] = merged
  }
  return validateReferenceDocument({ schemaVersion: NODE_CONTENT_SCHEMA_VERSION, references })
}

/**
 * Write a complete node or a partial author edit. Omitted evidence and locales
 * remain untouched; evidence updates merge record keys and may only add source
 * registrations, never silently remove or alter an existing one.
 */
export function writeNodeContent(directoryKey, content, root = process.cwd()) {
  assertKeys(content, ['node', 'evidence', 'pages', 'references'], [], 'node content write')
  const directory = safeContentPath(directoryKey, root)
  const exists = pathExists(directory)
  const current = exists ? loadStoredNode(directoryKey, root) : null
  if (!content.node && !current) throw new Error(`A new node write needs node.yaml content: ${directoryKey}`)

  let node = content.node ? validateNodeDocument(structuredClone(content.node)) : structuredClone(current.node)
  let evidence = current?.evidence ?? null
  if (content.evidence) evidence = mergeEvidence(evidence, content.evidence)

  const pages = mergePages(current?.pages, content.pages)
  if (content.pages) {
    for (const locale of Object.keys(content.pages)) node.structure.sections[locale] = pages[locale].map(section => section.key)
  }
  if (current && content.node) {
    for (const locale of LOCALES) if (!content.pages || !Object.hasOwn(content.pages, locale)) {
      node.structure.sections[locale] = current.node.structure.sections[locale]
    }
  }
  validateNodeDocument(node)
  for (const locale of LOCALES) {
    const expected = node.structure.sections[locale]
    const actual = pages[locale].map(section => section.key)
    if (expected.length !== actual.length || expected.some((key, index) => key !== actual[index])) throw new Error(`node structure does not match page.${locale}.md`)
  }
  const staged = { node, ...(evidence ? { evidence } : {}), pages }
  validateFlatPageReferences(staged)
  validatePageRoundTrips(pages)
  const currentReferences = readReferenceDocument(root)
  const mergedReferences = Object.hasOwn(content, 'references')
    ? mergeReferenceDocuments(currentReferences, content.references)
    : currentReferences
  validateNodeReferenceBindings({ records: evidence?.records ?? {}, relationships: node.relationships }, mergedReferences)

  let referencesChanged = false
  if (Object.hasOwn(content, 'references')) {
    referencesChanged = atomicWrite(safeReferencesPath(root), yamlText(mergedReferences))
  }

  mkdirSync(dirname(directory), { recursive: true })
  if (!pathExists(directory)) mkdirSync(directory)
  safeContentPath(directoryKey, root)
  const changedFiles = []
  const nodePath = join(directory, NODE_FILE)
  if (atomicWrite(nodePath, yamlText(node))) changedFiles.push(NODE_FILE)
  if (content.evidence && evidence) {
    if (atomicWrite(join(directory, EVIDENCE_FILE), yamlText(evidence))) changedFiles.push(EVIDENCE_FILE)
  }
  if (content.pages) {
    for (const locale of Object.keys(content.pages)) {
      const name = `page.${locale}.md`
      const path = join(directory, name)
      const rendered = renderPageMarkdown(pages[locale], locale)
      if (rendered === null) {
        if (pathExists(path)) {
          assertRegularFile(path, path)
          unlinkSync(path)
          changedFiles.push(name)
        }
      } else if (atomicWrite(path, rendered)) changedFiles.push(name)
    }
  }
  return { directoryKey, changedFiles, referencesChanged }
}

/** Merge new reference records without replacing or dropping registered IDs. */
export function writeReferences(additions, root = process.cwd()) {
  const path = safeReferencesPath(root)
  const current = readReferenceDocument(root)
  const document = mergeReferenceDocuments(current, additions)
  const changed = atomicWrite(path, yamlText(document))
  return { changed, referenceCount: document.references.length }
}

/** Stream physical keys for schema-v1 nodes below content/nodes/. */
export function* walkContentNodes(root = process.cwd()) {
  const { nodesDirectory } = assertNodeRoot(root)
  if (!pathExists(nodesDirectory)) return
  const handle = opendirSync(nodesDirectory)
  try {
    let entry
    while ((entry = handle.readSync()) !== null) {
      if (!entry.isDirectory()) continue
      const directory = safeContentPath(entry.name, root)
      const nodePath = join(directory, NODE_FILE)
      if (!pathExists(nodePath)) continue
      assertRegularFile(nodePath, `${entry.name}/${NODE_FILE}`)
      yield entry.name
    }
  } finally {
    try { handle.closeSync() } catch (error) { if (error.code !== 'ERR_DIR_CLOSED') throw error }
  }
}
