import { closeSync, existsSync, mkdirSync, mkdtempSync, openSync, readFileSync, renameSync, rmSync, statSync, writeFileSync, writeSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { dirname, join, relative, resolve as resolvePath } from 'node:path'
import { fileURLToPath } from 'node:url'
import { brotliCompressSync, brotliDecompressSync, constants, gzipSync, gunzipSync } from 'node:zlib'
import { assertSupportedRecordType, readNodeContent, readReferences, walkContentNodes } from './node-content.mjs'
import { digest, jsonText, readYaml, writeUtf8 } from './projection-io.mjs'

const CONTENT_PROJECTION_MAP = 'content/projection-map.yaml'
const CONTENT_NODES_ROOT = 'content/nodes'
const CONTENT_REFERENCES_PATH = 'content/references.yaml'
const REFERENCE_PROJECTION_PATH = 'data/references.json'
const ATLAS_SOURCE_PATH = 'content/navigation/atlas.yaml'
const NODE_SOURCE_NAMES = ['node.yaml', 'evidence.yaml', 'page.zh.md', 'page.en.md']
const SHARED_CODE_PATHS = [
  CONTENT_REFERENCES_PATH,
  ATLAS_SOURCE_PATH,
  'scripts/node-content.mjs',
  'scripts/content-references.mjs',
  'scripts/projection-io.mjs',
  'scripts/build-content-projections.mjs',
]
const FINGERPRINT_MODULUS = 1n << 256n

function readJson(path) {
  return JSON.parse(readFileSync(path, 'utf8'))
}

function contentPointers(value, output = new Set()) {
  if (!value || typeof value !== 'object') return output
  if (Array.isArray(value)) {
    for (const child of value) contentPointers(child, output)
    return output
  }
  if (Object.hasOwn(value, 'contentRecord')) {
    assertSupportedRecordType(value.contentRecord?.key)
    const path = value.contentRecord?.path
    if (typeof path !== 'string') throw new Error('Every contentRecord needs a complete content/nodes/<physicalkey> path.')
    output.add(path)
  }
  for (const child of Object.values(value)) contentPointers(child, output)
  return output
}

function nodeKeyFromContentPath(contentPath) {
  const prefix = CONTENT_NODES_ROOT + '/'
  if (typeof contentPath !== 'string' || !contentPath.startsWith(prefix)) {
    throw new Error('contentRecord.path must start with ' + prefix + ': ' + String(contentPath))
  }
  const physicalKey = contentPath.slice(prefix.length)
  if (!physicalKey || physicalKey.includes('/') || physicalKey.includes('\\')) {
    throw new Error('contentRecord.path must name exactly one physical node directory: ' + contentPath)
  }
  return physicalKey
}

function assertFlatProjectionMap(map) {
  if (map?.schemaVersion !== 3
    || map.canonicalLinks !== 'flat-nodes'
    || map.canonicalReferenceTable !== CONTENT_REFERENCES_PATH) {
    throw new Error('Unsupported content export registry. Only schema 3 flat-nodes with content/references.yaml is supported.')
  }
  if (!map.generatedInputs || typeof map.generatedInputs !== 'object' || Array.isArray(map.generatedInputs)) {
    throw new Error('Projection map generatedInputs must be an object.')
  }
  if (!map.dossierShardIndex || typeof map.dossierShardIndex.path !== 'string' || !map.dossierShardIndex.metadata) {
    throw new Error('Projection map needs a dossierShardIndex path and metadata.')
  }
  for (const outputPath of [...Object.keys(map.generatedInputs), map.dossierShardIndex.path]) assertSafeGeneratedPath(outputPath)
  for (const descriptor of Object.values(map.generatedInputs)) {
    for (const contentPath of contentPointers(descriptor.template)) nodeKeyFromContentPath(contentPath)
  }
  if (Object.hasOwn(map.generatedInputs, REFERENCE_PROJECTION_PATH)) {
    throw new Error(REFERENCE_PROJECTION_PATH + ' is generated from ' + CONTENT_REFERENCES_PATH + ' and must not be listed as a map projection.')
  }
}

function assertSafeGeneratedPath(path) {
  if (typeof path !== 'string' || !path.startsWith('data/') || path.split('/').includes('..') || path.includes('\\')) {
    throw new Error('Unsafe generated data path: ' + String(path))
  }
}

function pathFromRoot(root, path) {
  return join(root, ...path.split('/'))
}

function fileFingerprint(paths, root) {
  return digest(paths.map(path => {
    const absolute = pathFromRoot(root, path)
    if (!existsSync(absolute)) return path + ':missing'
    const stat = statSync(absolute)
    return path + ':' + stat.size + ':' + stat.mtimeMs
  }).join('\n'))
}

function sharedFingerprint(root) {
  const referencePath = pathFromRoot(root, CONTENT_REFERENCES_PATH)
  const referenceBytes = existsSync(referencePath) ? digest(readFileSync(referencePath)) : 'missing'
  return digest(fileFingerprint(SHARED_CODE_PATHS, root) + '\nreference-content:' + referenceBytes)
}

function* canonicalSourceFiles(root) {
  for (const physicalKey of walkContentNodes(root)) {
    const directoryPath = CONTENT_NODES_ROOT + '/' + physicalKey
    for (const name of NODE_SOURCE_NAMES) {
      const canonicalPath = directoryPath + '/' + name
      const absolute = pathFromRoot(root, canonicalPath)
      if (!existsSync(absolute)) continue
      yield { path: canonicalPath, absolute, nodeFile: name === 'node.yaml' }
    }
  }
  for (const canonicalPath of [CONTENT_PROJECTION_MAP, CONTENT_REFERENCES_PATH, ATLAS_SOURCE_PATH]) {
    const absolute = pathFromRoot(root, canonicalPath)
    if (existsSync(absolute)) yield { path: canonicalPath, absolute, nodeFile: false }
  }
}

function sourceState(root, shared) {
  let fileCount = 0
  let nodeDirectories = 0
  let sum = 0n
  let xor = 0n
  for (const file of canonicalSourceFiles(root)) {
    const stat = statSync(file.absolute)
    const stamp = stat.size + ':' + stat.mtimeMs
    const itemHash = BigInt('0x' + digest(file.path + '\0' + stamp))
    sum = (sum + itemHash) % FINGERPRINT_MODULUS
    xor ^= itemHash
    fileCount++
    if (file.nodeFile) nodeDirectories++
  }
  const fingerprint = digest([
    shared,
    String(fileCount),
    sum.toString(16).padStart(64, '0'),
    xor.toString(16).padStart(64, '0'),
  ].join('\n'))
  return { fingerprint, fileCount, nodeDirectories }
}

function sourceShardManifest(root, emit) {
  const temporaryRoot = mkdtempSync(join(tmpdir(), 'evo-content-source-shards-'))
  const openFiles = new Map()
  const counts = new Map()
  try {
    for (const file of canonicalSourceFiles(root)) {
      const record = { path: file.path, sha256: digest(readFileSync(file.absolute)) }
      const prefix = digest(file.path).slice(0, 2)
      let descriptor = openFiles.get(prefix)
      if (descriptor === undefined) {
        descriptor = openSync(join(temporaryRoot, prefix + '.jsonl'), 'a')
        openFiles.set(prefix, descriptor)
      }
      writeSync(descriptor, JSON.stringify(record) + '\n', null, 'utf8')
      counts.set(prefix, (counts.get(prefix) ?? 0) + 1)
    }
    for (const descriptor of openFiles.values()) closeSync(descriptor)
    openFiles.clear()

    const shards = []
    for (const prefix of [...counts.keys()].sort()) {
      const spool = readFileSync(join(temporaryRoot, prefix + '.jsonl'), 'utf8')
      const records = spool.trimEnd().split('\n').map(line => JSON.parse(line))
      records.sort((left, right) => left.path.localeCompare(right.path))
      const path = 'data/registry/content-sources/' + prefix + '.json'
      const text = jsonText({ schemaVersion: 1, files: records })
      emit(pathFromRoot(root, path), text)
      shards.push({ path, fileCount: records.length, sha256: digest(text) })
    }
    return { schemaVersion: 1, authoringRoot: 'content', fileCount: [...counts.values()].reduce((sum, count) => sum + count, 0), shards }
  } finally {
    for (const descriptor of openFiles.values()) {
      try { closeSync(descriptor) } catch {}
    }
    const target = resolvePath(temporaryRoot)
    const child = relative(resolvePath(tmpdir()), target)
    if (!child.startsWith('evo-content-source-shards-') || child.includes('/') || child.includes('\\')) throw new Error('Unsafe source-shard temporary directory: ' + target)
    rmSync(target, { recursive: true, force: true })
  }
}

export function buildContentProjections({ root = process.cwd(), quiet = false, force = false, check = false } = {}) {
  const mapPath = pathFromRoot(root, CONTENT_PROJECTION_MAP)
  if (!existsSync(mapPath)) return null

  const started = Date.now()
  const shared = sharedFingerprint(root)
  const sources = sourceState(root, shared)
  const gitEntry = join(root, '.git')
  const gitDirectory = existsSync(gitEntry)
    ? statSync(gitEntry).isDirectory()
      ? gitEntry
      : resolvePath(root, readFileSync(gitEntry, 'utf8').replace(/^gitdir:\s*/, '').trim())
    : null
  const cachePath = join(gitDirectory ?? gitEntry, 'evo-content/projection-cache.json')
  let previousCache = null
  if (existsSync(cachePath)) {
    const candidate = readJson(cachePath)
    if (candidate.schemaVersion === 4) previousCache = candidate
  }

  if (!force && previousCache?.sourceFingerprint === sources.fingerprint
    && previousCache.outputFingerprint === fileFingerprint(previousCache.outputPaths, root)) {
    if (!quiet) console.log('Content projections are current (' + sources.fileCount + ' canonical source files).')
    return null
  }

  const map = readYaml(mapPath)
  assertFlatProjectionMap(map)

  // readReferences returns one cloned reference document; the codec then reuses its
  // validated per-root cache while readNodeContent hydrates each node's bindings.
  const references = readReferences(root).references
  const referenceText = jsonText(references)
  const canonicalSharedInputs = [CONTENT_REFERENCES_PATH, ATLAS_SOURCE_PATH]
    .filter(path => existsSync(pathFromRoot(root, path)))

  function emit(path, text) {
    if (!check) return writeUtf8(path, text)
    if (!existsSync(path) || !readFileSync(path).equals(Buffer.from(text))) {
      throw new Error('Content projection drift: ' + relative(root, path).replaceAll('\\', '/') + '. Run npm run content:build.')
    }
    return false
  }

  function emitBinary(path, bytes) {
    if (check) throw new Error('Content projection drift: ' + relative(root, path).replaceAll('\\', '/') + '. Run npm run content:build.')
    mkdirSync(dirname(path), { recursive: true })
    const temporary = path + '.content-tmp'
    writeFileSync(temporary, bytes)
    renameSync(temporary, path)
  }

  const cache = new Map()
  function node(contentPath) {
    const physicalKey = nodeKeyFromContentPath(contentPath)
    if (!cache.has(physicalKey)) {
      if (cache.size >= 64) cache.delete(cache.keys().next().value)
      cache.set(physicalKey, readNodeContent(physicalKey, root))
    }
    return cache.get(physicalKey)
  }

  function resolve(value) {
    if (Array.isArray(value)) return value.map(resolve)
    if (!value || typeof value !== 'object') return value
    if (Object.hasOwn(value, 'contentRecord')) {
      const descriptor = value.contentRecord
      const entry = node(descriptor.path)
      let record = entry.records[descriptor.key]
      if (descriptor.index !== undefined) record = record?.[descriptor.index]
      if (record === undefined) {
        throw new Error('Missing canonical record ' + descriptor.path + '/' + descriptor.key + '/' + (descriptor.index ?? ''))
      }
      // readNodeContent has already hydrated evidence and source bindings. Clone
      // that record before applying the existing export inject/index semantics.
      record = structuredClone(record)
      if (descriptor.inject) record = { ...descriptor.inject, ...record }
      if (descriptor.indexFields) {
        for (const field of descriptor.indexFields) {
          record[field] = field === 'sourceDatasetId'
            ? entry.identity.classification.sourceDatasetId
            : entry.identity[field]
        }
      }
      for (const [key, child] of Object.entries(value)) {
        if (key !== 'contentRecord') record[key] = resolve(child)
      }
      return record
    }
    return Object.fromEntries(Object.entries(value).map(([key, child]) => [key, resolve(child)]))
  }

  let changedOutputs = 0
  const inputIndex = {}
  const shardResults = new Map()
  const projectionCache = {}
  let rebuiltProjections = 0

  for (const [path, descriptor] of Object.entries(map.generatedInputs)) {
    assertSafeGeneratedPath(path)
    const directories = [...contentPointers(descriptor.template)].sort()
    for (const directory of directories) nodeKeyFromContentPath(directory)
    const dependencyFiles = [
      ...directories.flatMap(directory => NODE_SOURCE_NAMES.map(name => directory + '/' + name)),
      CONTENT_REFERENCES_PATH,
      ATLAS_SOURCE_PATH,
    ]
    const dependencyFingerprint = digest(shared + '\ndescriptor:' + JSON.stringify(descriptor) + '\n' + dependencyFiles.map(file => file + ':' + (() => {
      const absolute = pathFromRoot(root, file)
      if (!existsSync(absolute)) return 'missing'
      const stat = statSync(absolute)
      return stat.size + ':' + stat.mtimeMs
    })()).join('\n'))
    inputIndex[path] = { directories, files: canonicalSharedInputs }

    const previous = previousCache?.projections?.[path]
    if (!force && previous?.dependencyFingerprint === dependencyFingerprint
      && previous.outputFingerprint === fileFingerprint(previous.outputPaths, root)) {
      projectionCache[path] = previous
      if (previous.shard) shardResults.set(path, previous.shard)
      continue
    }

    rebuiltProjections++
    const value = resolve(descriptor.template)
    const absolute = pathFromRoot(root, path)
    if (descriptor.encoding === 'brotli-jsonl') {
      const decoded = Buffer.from(value.map(record => JSON.stringify(record)).join('\n') + '\n', 'utf8')
      let compressed = existsSync(absolute) ? readFileSync(absolute) : null
      if (!compressed || !brotliDecompressSync(compressed).equals(decoded)) {
        compressed = brotliCompressSync(decoded, { params: { [constants.BROTLI_PARAM_QUALITY]: 5, [constants.BROTLI_PARAM_MODE]: constants.BROTLI_MODE_TEXT } })
        emitBinary(absolute, compressed)
        changedOutputs++
      }
      const plainPath = path.slice(0, -3)
      const plainAbsolute = pathFromRoot(root, plainPath)
      if (existsSync(plainAbsolute)) changedOutputs += Number(emit(plainAbsolute, decoded.toString('utf8')))
      const record = { path, recordCount: value.length, decodedSha256: digest(decoded), compressedSha256: digest(compressed) }
      shardResults.set(path, record)
      const localManifestPath = pathFromRoot(root, plainPath + '.manifest.json')
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
    } else if (descriptor.encoding === 'json') {
      changedOutputs += Number(emit(absolute, jsonText(value)))
    } else {
      throw new Error('Unsupported projection encoding: ' + descriptor.encoding)
    }

    const projectionOutputs = [path]
    if (descriptor.encoding === 'brotli-jsonl') {
      const plain = path.slice(0, -3)
      for (const candidate of [plain, plain + '.manifest.json']) {
        if (existsSync(pathFromRoot(root, candidate))) projectionOutputs.push(candidate)
      }
    }
    projectionCache[path] = {
      dependencyFingerprint,
      outputPaths: projectionOutputs,
      outputFingerprint: fileFingerprint(projectionOutputs, root),
      ...(shardResults.has(path) ? { shard: shardResults.get(path) } : {}),
    }
    // Keep the original 64-node bound and release decoded records between
    // projections so a broad source edit does not retain the entire node set.
    cache.clear()
  }

  const shardIndex = structuredClone(map.dossierShardIndex.metadata)
  shardIndex.shards = shardIndex.shards.map(shard => ({ ...shard, ...(shardResults.get(shard.path) ?? {}) }))
  shardIndex.recordCount = shardIndex.shards.reduce((sum, shard) => sum + shard.recordCount, 0)
  changedOutputs += Number(emit(pathFromRoot(root, map.dossierShardIndex.path), jsonText(shardIndex)))
  changedOutputs += Number(emit(pathFromRoot(root, REFERENCE_PROJECTION_PATH), referenceText))

  const projectionIndex = {
    schemaVersion: 1,
    generator: 'scripts/build-content-projections.mjs',
    canonicalReferenceTable: CONTENT_REFERENCES_PATH,
    projectionMap: CONTENT_PROJECTION_MAP,
    inputs: {
      ...inputIndex,
      [REFERENCE_PROJECTION_PATH]: { files: [CONTENT_REFERENCES_PATH].filter(path => existsSync(pathFromRoot(root, path))) },
    },
    generatedFiles: [...new Set([...Object.keys(map.generatedInputs), map.dossierShardIndex.path, REFERENCE_PROJECTION_PATH])].sort(),
    navigationAliases: map.navigationAliases,
    profileAliases: map.profileAliases,
    topicAliases: map.topicAliases,
  }
  emit(pathFromRoot(root, 'data/registry/content-projection-files.json'), jsonText(projectionIndex))

  const sourceManifest = sourceShardManifest(root, emit)
  emit(pathFromRoot(root, 'data/registry/content-source-manifest.json'), jsonText(sourceManifest))
  const summary = {
    contentDirectories: sources.nodeDirectories,
    contentFiles: sources.fileCount,
    projectionFiles: Object.keys(map.generatedInputs).length,
    changedOutputs,
    durationSeconds: Number(((Date.now() - started) / 1000).toFixed(2)),
  }
  emit(pathFromRoot(root, 'data/registry/content-build-summary.json'), jsonText({
    schemaVersion: 1,
    ...summary,
    durationSeconds: undefined,
    changedOutputs: undefined,
  }))
  const outputPaths = [...new Set([
    ...projectionIndex.generatedFiles,
    ...Object.values(projectionCache).flatMap(projection => projection.outputPaths),
    'data/registry/content-projection-files.json',
    'data/registry/content-source-manifest.json',
    'data/registry/content-build-summary.json',
    ...sourceManifest.shards.map(shard => shard.path),
  ])].sort()

  // A successful byte-for-byte check certifies the same outputs as generation.
  // Cache that result only inside Git so later build steps can reuse it.
  if (gitDirectory && existsSync(gitDirectory) && statSync(gitDirectory).isDirectory()) {
    writeUtf8(cachePath, jsonText({
      schemaVersion: 4,
      sourceFingerprint: sources.fingerprint,
      outputPaths,
      outputFingerprint: fileFingerprint(outputPaths, root),
      projections: projectionCache,
    }))
  }
  if (!quiet) {
    console.log('Built ' + rebuiltProjections + '/' + summary.projectionFiles + ' content projections from '
      + summary.contentDirectories + ' flat node directories (' + summary.durationSeconds + 's).')
  }
  return { ...summary, rebuiltProjections }
}

export function canonicalContentInputs(paths, root = process.cwd()) {
  const manifestPath = pathFromRoot(root, 'data/registry/content-projection-files.json')
  const manifest = existsSync(manifestPath) ? readJson(manifestPath) : null
  const canonicalInputs = new Set()

  function addIfPresent(path) {
    const absolute = pathFromRoot(root, path)
    if (existsSync(absolute) && statSync(absolute).isFile()) canonicalInputs.add(path)
  }

  for (const input of paths) {
    if (input === REFERENCE_PROJECTION_PATH) {
      addIfPresent(CONTENT_REFERENCES_PATH)
      continue
    }
    const projectionInput = manifest?.inputs?.[input] ?? manifest?.inputs?.[input + '.gz']
    if (!projectionInput) {
      canonicalInputs.add(input)
      continue
    }
    for (const file of projectionInput.files ?? []) addIfPresent(file)
    for (const directory of projectionInput.directories ?? []) {
      const physicalKey = nodeKeyFromContentPath(directory)
      for (const name of NODE_SOURCE_NAMES) addIfPresent(CONTENT_NODES_ROOT + '/' + physicalKey + '/' + name)
    }
  }
  return [...canonicalInputs].sort()
}

const entryPath = process.argv[1] ? resolvePath(process.argv[1]) : ''
if (entryPath && fileURLToPath(import.meta.url).toLowerCase() === entryPath.toLowerCase()) buildContentProjections()
