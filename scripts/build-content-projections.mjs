import { existsSync, mkdirSync, readFileSync, readdirSync, renameSync, statSync, writeFileSync } from 'node:fs'
import { dirname, join, relative, resolve as resolvePath } from 'node:path'
import { fileURLToPath } from 'node:url'
import { brotliCompressSync, brotliDecompressSync, constants, gzipSync, gunzipSync } from 'node:zlib'
import { attachContentReferences } from './content-references.mjs'
import { createContentLinkMaps, restoreRuntimeContentLinks } from './content-path-links.mjs'
import { CONTENT_PROJECTION_MAP, digest, jsonText, readNodeContent, readYaml, semanticJson, writeUtf8 } from './tree-path-content.mjs'

let completedRoot = null

function readJson(path) { return JSON.parse(readFileSync(path, 'utf8')) }

function contentPointers(value, output = new Set()) {
  if (!value || typeof value !== 'object') return output
  if (value.contentRecord?.path) output.add(value.contentRecord.path)
  for (const child of Object.values(value)) contentPointers(child, output)
  return output
}

function filesBelow(directory, root) {
  return readdirSync(directory, { withFileTypes: true }).flatMap(entry => {
    const path = join(directory, entry.name)
    return entry.isDirectory() ? filesBelow(path, root) : entry.name.endsWith('.md') || entry.name.endsWith('.yaml') ? [relative(root, path).replaceAll('\\', '/')] : []
  })
}

function fileFingerprint(paths, root) {
  return digest(paths.map(path => {
    const absolute = join(root, path)
    if (!existsSync(absolute)) return `${path}:missing`
    const stat = statSync(absolute)
    return `${path}:${stat.size}:${stat.mtimeMs}`
  }).join('\n'))
}

function shardManifest(files, root, emit) {
  const buckets = new Map()
  for (const path of files) {
    const prefix = digest(path).slice(0, 2)
    const bucket = buckets.get(prefix) ?? []
    bucket.push({ path, sha256: digest(readFileSync(join(root, path))) })
    buckets.set(prefix, bucket)
  }
  const shards = [...buckets].sort(([left], [right]) => left.localeCompare(right)).map(([prefix, records]) => {
    const path = `data/registry/content-sources/${prefix}.json`
    const text = jsonText({ schemaVersion: 1, files: records.sort((left, right) => left.path.localeCompare(right.path)) })
    emit(join(root, path), text)
    return { path, fileCount: records.length, sha256: digest(text) }
  })
  return { schemaVersion: 1, authoringRoot: 'content', fileCount: files.length, shards }
}

export function buildContentProjections({ root = process.cwd(), quiet = false, force = false, check = false } = {}) {
  if (!existsSync(join(root, CONTENT_PROJECTION_MAP))) return null
  if (completedRoot === root && !force && !check) return null
  const started = Date.now()
  function emit(path, text) {
    if (!check) return writeUtf8(path, text)
    if (!existsSync(path) || !readFileSync(path).equals(Buffer.from(text))) throw new Error(`Content projection drift: ${relative(root, path)}. Run npm run content:build.`)
    return false
  }
  function emitBinary(path, bytes) {
    if (check) throw new Error(`Content projection drift: ${relative(root, path)}. Run npm run content:build.`)
    mkdirSync(dirname(path), { recursive: true })
    const temporary = `${path}.content-tmp`
    writeFileSync(temporary, bytes)
    renameSync(temporary, path)
  }
  const contentFiles = filesBelow(join(root, 'content'), root).sort()
  const sourceFingerprint = fileFingerprint([...contentFiles, 'data/references.json', 'scripts/tree-path-content.mjs', 'scripts/content-references.mjs', 'scripts/content-path-links.mjs', 'scripts/build-content-projections.mjs'], root)
  const gitEntry = join(root, '.git')
  const gitDirectory = existsSync(gitEntry) ? statSync(gitEntry).isDirectory() ? gitEntry : resolvePath(root, readFileSync(gitEntry, 'utf8').replace(/^gitdir:\s*/, '').trim()) : null
  const cachePath = join(gitDirectory ?? gitEntry, 'content-migration/projection-cache.json')
  let previousCache = null
  if (existsSync(cachePath)) previousCache = readJson(cachePath)
  if (!force && previousCache?.sourceFingerprint === sourceFingerprint && previousCache.outputFingerprint === fileFingerprint(previousCache.outputPaths, root)) {
    completedRoot = root
    if (!quiet) console.log(`Content projections are current (${contentFiles.length} source files).`)
    return null
  }
  const map = readYaml(join(root, CONTENT_PROJECTION_MAP))
  if (map.schemaVersion !== 1) throw new Error('Unsupported content projection map')
  const linkMaps = createContentLinkMaps(map)
  const references = readJson(join(root, 'data/references.json'))
  const referencesById = new Map(references.map(reference => [reference.id, reference]))
  const cache = new Map()
  const visitedDirectories = new Set()
  const initialImport = !existsSync(join(root, 'data/registry/content-build-summary.json'))
  function node(path) {
    visitedDirectories.add(path)
    if (!cache.has(path)) cache.set(path, readNodeContent(path, root))
    return cache.get(path)
  }
  function resolve(value) {
    if (Array.isArray(value)) return value.map(resolve)
    if (!value || typeof value !== 'object') return value
    if (value.contentRecord) {
      const descriptor = value.contentRecord
      const entry = node(descriptor.path)
      let record = entry.records[descriptor.key]
      if (descriptor.index !== undefined) record = record?.[descriptor.index]
      if (record === undefined) throw new Error(`Missing canonical record ${descriptor.path}/${descriptor.key}/${descriptor.index ?? ''}`)
      record = attachContentReferences(map.canonicalLinks === 'tree-paths' ? restoreRuntimeContentLinks(structuredClone(record), linkMaps) : structuredClone(record), referencesById)
      if (descriptor.inject) record = { ...descriptor.inject, ...record }
      if (descriptor.indexFields) {
        for (const field of descriptor.indexFields) record[field] = field === 'sourceDatasetId' ? entry.index.classification.sourceDatasetId : entry.index[field]
      }
      if (descriptor.originalFields) record = Object.fromEntries(descriptor.originalFields.map(key => [key, record[key]]))
      for (const [key, child] of Object.entries(value)) if (key !== 'contentRecord') record[key] = resolve(child)
      return record
    }
    return Object.fromEntries(Object.entries(value).map(([key, child]) => [key, resolve(child)]))
  }
  let changedOutputs = 0
  const inputIndex = {}, shardResults = new Map()
  for (const [path, descriptor] of Object.entries(map.generatedInputs)) {
    if (!path.startsWith('data/') || path.split('/').includes('..') || path.includes('\\')) throw new Error(`Unsafe generated data path: ${path}`)
    const value = resolve(descriptor.template)
    if (initialImport && digest(semanticJson(value)) !== descriptor.importSemanticSha256) throw new Error(`Migration changed an original record in ${path}; the original input is preserved under .git/content-migration/original-inputs/`)
    const absolute = join(root, path)
    if (descriptor.encoding === 'brotli-jsonl') {
      const decoded = Buffer.from(value.map(record => JSON.stringify(record)).join('\n') + '\n', 'utf8')
      let compressed = existsSync(absolute) ? readFileSync(absolute) : null
      if (!compressed || !brotliDecompressSync(compressed).equals(decoded)) {
        compressed = brotliCompressSync(decoded, { params: { [constants.BROTLI_PARAM_QUALITY]: 5, [constants.BROTLI_PARAM_MODE]: constants.BROTLI_MODE_TEXT } })
        // The source shard is a generated binary projection, atomically replaced.
        emitBinary(absolute, compressed)
        changedOutputs++
      }
      const plainPath = absolute.slice(0, -3)
      if (existsSync(plainPath)) changedOutputs += Number(emit(plainPath, decoded.toString('utf8')))
      const record = { path, recordCount: value.length, decodedSha256: digest(decoded), compressedSha256: digest(compressed) }
      shardResults.set(path, record)
      const localManifestPath = `${plainPath}.manifest.json`
      if (existsSync(localManifestPath)) {
        const manifest = readJson(localManifestPath)
        for (const key of ['decodedSha256', 'compressedSha256']) if (key in manifest) manifest[key] = record[key]
        if ('recordCount' in manifest) manifest.recordCount = record.recordCount
        changedOutputs += Number(emit(localManifestPath, jsonText(manifest)))
      }
    } else if (descriptor.encoding === 'gzip-json') {
      const decoded = Buffer.from(JSON.stringify(value) + '\n', 'utf8')
      if (!existsSync(absolute) || !gunzipSync(readFileSync(absolute)).equals(decoded)) {
        emitBinary(absolute, gzipSync(decoded, { level: 9 }))
        changedOutputs++
      }
    } else if (descriptor.encoding === 'json') changedOutputs += Number(emit(absolute, jsonText(value)))
    else throw new Error(`Unsupported projection encoding: ${descriptor.encoding}`)
    const directories = [...contentPointers(descriptor.template)].sort()
    inputIndex[path] = { directories }
    // Inputs share paths, but retaining every restored node across all projections
    // exceeds the default Node heap on the full authoring tree.
    cache.clear()
  }
  const shardIndex = structuredClone(map.dossierShardIndex.metadata)
  shardIndex.shards = shardIndex.shards.map(shard => ({ ...shard, ...shardResults.get(shard.path) }))
  shardIndex.recordCount = shardIndex.shards.reduce((sum, shard) => sum + shard.recordCount, 0)
  changedOutputs += Number(emit(join(root, map.dossierShardIndex.path), jsonText(shardIndex)))
  const projectionIndex = {
    schemaVersion: 1,
    generator: 'scripts/build-content-projections.mjs',
    canonicalReferenceTable: 'data/references.json',
    projectionMap: CONTENT_PROJECTION_MAP,
    inputs: inputIndex,
    generatedFiles: [...Object.keys(map.generatedInputs), map.dossierShardIndex.path].sort(),
    navigationAliases: map.navigationAliases,
    profileAliases: map.profileAliases,
    topicAliases: map.topicAliases,
  }
  emit(join(root, 'data/registry/content-projection-files.json'), jsonText(projectionIndex))
  const sourceManifest = shardManifest(contentFiles, root, emit)
  emit(join(root, 'data/registry/content-source-manifest.json'), jsonText(sourceManifest))
  const summary = { contentDirectories: visitedDirectories.size, contentFiles: contentFiles.length, projectionFiles: Object.keys(map.generatedInputs).length, changedOutputs, durationSeconds: Number(((Date.now() - started) / 1000).toFixed(2)) }
  emit(join(root, 'data/registry/content-build-summary.json'), jsonText({ schemaVersion: 1, ...summary, durationSeconds: undefined, changedOutputs: undefined }))
  const outputPaths = [...projectionIndex.generatedFiles, 'data/registry/content-projection-files.json', 'data/registry/content-source-manifest.json', 'data/registry/content-build-summary.json', ...sourceManifest.shards.map(shard => shard.path)].sort()
  if (!check && gitDirectory && existsSync(gitDirectory) && statSync(gitDirectory).isDirectory()) writeUtf8(cachePath, jsonText({ schemaVersion: 1, sourceFingerprint, outputPaths, outputFingerprint: fileFingerprint(outputPaths, root) }))
  completedRoot = root
  if (!quiet) console.log(`Built ${summary.projectionFiles} content projections from ${summary.contentDirectories} Markdown directories (${summary.durationSeconds}s).`)
  return summary
}

export function canonicalContentInputs(paths, root = process.cwd()) {
  const path = join(root, 'data/registry/content-projection-files.json')
  if (!existsSync(path)) return paths
  const manifest = readJson(path)
  return [...new Set(paths.flatMap(input => (manifest.inputs[input] ?? manifest.inputs[`${input}.gz`])?.directories.flatMap(directory => ['index.yaml', 'evidence.md', 'page.zh.md', 'page.en.md'].map(name => `${directory}/${name}`)) ?? [input]))].sort()
}

const entryPath = process.argv[1] ? resolvePath(process.argv[1]) : ''
if (entryPath && fileURLToPath(import.meta.url).toLowerCase() === entryPath.toLowerCase()) buildContentProjections()
