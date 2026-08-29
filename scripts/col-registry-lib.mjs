import { createHash } from 'node:crypto'
import { createReadStream, mkdirSync, readFileSync, readdirSync, renameSync, rmSync, statSync, writeFileSync, appendFileSync } from 'node:fs'
import { basename, dirname, join, resolve, sep } from 'node:path'
import { gzipSync } from 'node:zlib'
import { Unzip, UnzipInflate } from 'fflate'

const EMPTY_BYTES = new Uint8Array(0)
const TARGET_SHARD_BYTES = 2 * 1024 * 1024
const HARD_SHARD_BYTES = 8 * 1024 * 1024
const BUFFER_FLUSH_CHARS = 32 * 1024 * 1024
const CLASSIFICATION_FIELDS = ['kingdom', 'phylum', 'class', 'order', 'superfamily', 'family', 'subfamily', 'tribe', 'subtribe', 'genus', 'subgenus']
const RESOLVING_STATUSES = new Map([
  ['synonym', 'synonym'],
  ['ambiguous synonym', 'ambiguous-synonym'],
  ['misapplied', 'misapplied'],
])

function sha256Bytes(bytes) {
  return createHash('sha256').update(bytes).digest('hex')
}

export async function sha256File(path) {
  const hash = createHash('sha256')
  for await (const chunk of createReadStream(path)) hash.update(chunk)
  return hash.digest('hex')
}

export function normalizeScientificName(value) {
  const normalized = value
    .normalize('NFKD')
    .replaceAll(/\p{M}/gu, '')
    .toLocaleLowerCase('en-US')
    .replaceAll(/[^a-z0-9]+/g, ' ')
    .trim()
  return normalized
}

function prefixForName(normalizedName, length = 2) {
  return normalizedName.replaceAll(' ', '').slice(0, length).padEnd(length, '_') || '_'.repeat(length)
}

function decodeXml(value) {
  return value
    .replaceAll('&amp;', '&')
    .replaceAll('&lt;', '<')
    .replaceAll('&gt;', '>')
    .replaceAll('&quot;', '"')
    .replaceAll('&apos;', "'")
    .replaceAll(/&#(\d+);/g, (_, digits) => String.fromCodePoint(Number(digits)))
    .replaceAll(/&#x([\da-f]+);/gi, (_, digits) => String.fromCodePoint(Number.parseInt(digits, 16)))
}

function xmlText(xml, tag) {
  const match = xml.match(new RegExp(`<${tag}(?:\\s[^>]*)?>([\\s\\S]*?)</${tag}>`, 'i'))
  if (!match) return null
  return decodeXml(match[1].replaceAll(/<[^>]+>/g, ' ').replaceAll(/\s+/g, ' ').trim()) || null
}

function xmlAttribute(xml, tag, attribute) {
  const match = xml.match(new RegExp(`<${tag}[^>]*\\s${attribute}="([^"]+)"`, 'i'))
  return match ? decodeXml(match[1]) : null
}

export function parseSourceMetadata(datasetId, xml) {
  const alternateIdentifier = xmlText(xml, 'alternateIdentifier')
  const licenseUrl = xmlAttribute(xml, 'ulink', 'url')
  return {
    datasetId,
    title: xmlText(xml, 'title'),
    shortName: xmlText(xml, 'shortName'),
    version: xmlText(xml, 'version'),
    publicationDate: xmlText(xml, 'pubDate'),
    doi: alternateIdentifier?.startsWith('10.') ? alternateIdentifier : null,
    citation: xmlText(xml, 'citation'),
    licenseLabel: xmlText(xml, 'citetitle'),
    licenseUrl,
    informationUrl: xmlAttribute(xml, 'url', 'function') === 'information' ? xmlText(xml, 'url') : null,
  }
}

class BufferedBuckets {
  constructor(root) {
    this.root = root
    this.buffers = new Map()
    this.totalChars = 0
    this.counts = new Map()
  }

  append(prefix, line) {
    this.buffers.set(prefix, `${this.buffers.get(prefix) ?? ''}${line}\n`)
    this.totalChars += line.length + 1
    this.counts.set(prefix, (this.counts.get(prefix) ?? 0) + 1)
    if (this.totalChars >= BUFFER_FLUSH_CHARS) this.flush()
  }

  flush() {
    mkdirSync(this.root, { recursive: true })
    for (const [prefix, text] of this.buffers) appendFileSync(join(this.root, `${prefix}.jsonl`), text, 'utf8')
    this.buffers.clear()
    this.totalChars = 0
  }
}

function parseTaxonLine(line, indexes, counters, buckets, targetIds) {
  if (!line) return
  counters.nameUsages += 1
  const values = line.endsWith('\r') ? line.slice(0, -1).split('\t') : line.split('\t')
  const rank = values[indexes.taxonRank]?.toLocaleLowerCase('en-US')
  const status = values[indexes.taxonomicStatus]?.toLocaleLowerCase('en-US')
  if (rank !== 'species') return
  counters.speciesNameUsages += 1
  if (status === 'provisionally accepted') counters.provisionallyAcceptedSpecies += 1
  const accepted = status === 'accepted'
  const resolvingStatus = RESOLVING_STATUSES.get(status)
  if (!accepted && !resolvingStatus) {
    counters.excludedSpeciesStatuses[status || '(empty)'] = (counters.excludedSpeciesStatuses[status || '(empty)'] ?? 0) + 1
    return
  }

  const id = values[indexes.taxonID] ?? ''
  const scientificName = values[indexes.scientificName] ?? ''
  const acceptedId = values[indexes.acceptedNameUsageID] || null
  const sourceDatasetId = values[indexes.datasetID] || null
  if (!id) counters.missingTaxonId += 1
  if (!scientificName) counters.missingScientificName += 1
  if (!sourceDatasetId) counters.missingSourceDatasetId += 1
  if (!accepted && !acceptedId) counters.missingAcceptedNameUsageId += 1
  if (accepted && acceptedId) counters.acceptedWithTarget += 1
  if (!accepted && acceptedId) targetIds.add(acceptedId)

  const normalizedName = normalizeScientificName(scientificName)
  const classification = CLASSIFICATION_FIELDS.map((field) => values[indexes[field]] || null)
  while (classification.at(-1) === null) classification.pop()
  const record = {
    normalizedName,
    id,
    scientificName,
    authorship: values[indexes.scientificNameAuthorship] || null,
    rank: 'species',
    status: accepted ? 'accepted' : resolvingStatus,
    acceptedId: accepted ? null : acceptedId,
    parentId: accepted ? values[indexes.parentNameUsageID] || null : null,
    sourceDatasetId,
    classification,
  }
  buckets.append(prefixForName(normalizedName), JSON.stringify(record))
  counters.includedNameUsages += 1
  if (accepted) counters.acceptedSpecies += 1
  else counters.resolvingNameUsages[resolvingStatus] += 1
}

function headerIndexes(line, required) {
  const headerLine = (line.endsWith('\r') ? line.slice(0, -1) : line).replace(/^\uFEFF/, '')
  const header = headerLine.split('\t').map((name) => name.replace(/^.*:/, ''))
  const indexes = Object.fromEntries(header.map((name, index) => [name, index]))
  const missing = required.filter((name) => indexes[name] === undefined)
  if (missing.length) throw new Error(`Taxon.tsv is missing required columns: ${missing.join(', ')}`)
  return indexes
}

function createLineConsumer(onLine, required) {
  const decoder = new TextDecoder('utf-8')
  let pending = ''
  let indexes = null
  return (chunk, final) => {
    pending += decoder.decode(chunk, { stream: !final })
    const lines = pending.split('\n')
    const trailing = lines.pop() ?? ''
    pending = final ? '' : trailing
    if (final && trailing) lines.push(trailing)
    for (const line of lines) {
      if (!indexes) {
        if (!line) continue
        indexes = headerIndexes(line, required)
        continue
      }
      onLine(line, indexes)
    }
  }
}

function createTaxonConsumer(counters, buckets, targetIds) {
  const required = ['taxonID', 'parentNameUsageID', 'acceptedNameUsageID', 'datasetID', 'taxonomicStatus', 'taxonRank', 'scientificName', 'scientificNameAuthorship', ...CLASSIFICATION_FIELDS]
  return createLineConsumer((line, indexes) => parseTaxonLine(line, indexes, counters, buckets, targetIds), required)
}

function createTargetConsumer(targetIds, counters, buckets) {
  const required = ['taxonID', 'parentNameUsageID', 'datasetID', 'taxonomicStatus', 'taxonRank', 'scientificName', 'scientificNameAuthorship', ...CLASSIFICATION_FIELDS]
  return createLineConsumer((line, indexes) => {
    if (!line) return
    const values = line.endsWith('\r') ? line.slice(0, -1).split('\t') : line.split('\t')
    const id = values[indexes.taxonID] ?? ''
    if (!targetIds.has(id)) return
    const classification = CLASSIFICATION_FIELDS.map((field) => values[indexes[field]] || null)
    while (classification.at(-1) === null) classification.pop()
    const status = values[indexes.taxonomicStatus]?.toLocaleLowerCase('en-US') || '(empty)'
    const rank = values[indexes.taxonRank]?.toLocaleLowerCase('en-US') || '(empty)'
    const record = {
      id,
      scientificName: values[indexes.scientificName] ?? '',
      authorship: values[indexes.scientificNameAuthorship] || null,
      rank,
      status,
      parentId: values[indexes.parentNameUsageID] || null,
      sourceDatasetId: values[indexes.datasetID] || null,
      classification,
    }
    buckets.append(sha256Bytes(Buffer.from(id, 'utf8')).slice(0, 2), JSON.stringify(record))
    counters.records += 1
    counters.statuses[status] = (counters.statuses[status] ?? 0) + 1
    counters.ranks[rank] = (counters.ranks[rank] ?? 0) + 1
  }, required)
}

async function consumeArchive(archivePath, consumeTaxon, includeSourceMetadata) {
  const sourceXml = new Map()
  return new Promise((resolvePromise, rejectPromise) => {
    let archiveEnded = false
    let activeFiles = 0
    let settled = false
    const finish = () => {
      if (!settled && archiveEnded && activeFiles === 0) {
        settled = true
        resolvePromise(sourceXml)
      }
    }
    const fail = (error) => {
      if (!settled) {
        settled = true
        rejectPromise(error)
      }
    }
    const unzip = new Unzip((file) => {
      const datasetMatch = file.name.match(/^dataset\/(\d+)\.xml$/)
      if (file.name !== 'Taxon.tsv' && !(includeSourceMetadata && datasetMatch)) return
      activeFiles += 1
      const xmlChunks = []
      const selectedTaxonConsumer = file.name === 'Taxon.tsv' ? consumeTaxon : null
      file.ondata = (error, chunk, final) => {
        if (error) return fail(error)
        try {
          if (selectedTaxonConsumer) selectedTaxonConsumer(chunk, final)
          else if (chunk.length) xmlChunks.push(Buffer.from(chunk))
          if (final) {
            if (datasetMatch) sourceXml.set(datasetMatch[1], Buffer.concat(xmlChunks).toString('utf8'))
            activeFiles -= 1
            finish()
          }
        } catch (caught) {
          fail(caught)
        }
      }
      file.start()
    })
    unzip.register(UnzipInflate)
    const stream = createReadStream(archivePath)
    stream.on('data', (chunk) => {
      try { unzip.push(new Uint8Array(chunk.buffer, chunk.byteOffset, chunk.byteLength), false) } catch (error) { fail(error) }
    })
    stream.on('error', fail)
    stream.on('end', () => {
      try {
        archiveEnded = true
        unzip.push(EMPTY_BYTES, true)
        finish()
      } catch (error) {
        fail(error)
      }
    })
  })
}

function shardRecord(prefix, bytes, sourceBytes, records, directory) {
  const filename = directory === 'search' ? `name-${prefix}.jsonl.gz` : `${prefix}.jsonl.gz`
  return {
    prefix,
    path: `${directory}/${filename}`,
    records,
    bytes: bytes.byteLength,
    sourceBytes: sourceBytes.byteLength,
    sha256: sha256Bytes(bytes),
    sourceSha256: sha256Bytes(sourceBytes),
    encoding: 'gzip',
    mediaType: 'application/x-ndjson',
  }
}

function writeShardRecursive(outputRoot, basePrefix, prefix, lines, routes, files, directory) {
  lines.sort()
  const sourceBytes = Buffer.from(`${lines.join('\n')}\n`, 'utf8')
  const compressed = gzipSync(sourceBytes, { level: 9, mtime: 0 })
  if (compressed.byteLength > TARGET_SHARD_BYTES && prefix.length < 5) {
    const children = new Map()
    for (const line of lines) {
      const record = JSON.parse(line)
      const childPrefix = prefixForName(record.normalizedName, prefix.length + 1)
      if (!children.has(childPrefix)) children.set(childPrefix, [])
      children.get(childPrefix).push(line)
    }
    if (children.size > 1) {
      for (const [childPrefix, childLines] of [...children].sort(([left], [right]) => left.localeCompare(right))) {
        writeShardRecursive(outputRoot, basePrefix, childPrefix, childLines, routes, files, directory)
      }
      return
    }
  }
  if (compressed.byteLength > HARD_SHARD_BYTES) throw new Error(`${prefix} shard is ${compressed.byteLength} bytes; hard limit is ${HARD_SHARD_BYTES}`)
  const record = shardRecord(prefix, compressed, sourceBytes, lines.length, directory)
  const path = join(outputRoot, ...record.path.split('/'))
  mkdirSync(dirname(path), { recursive: true })
  writeFileSync(path, compressed)
  routes[basePrefix] ??= []
  routes[basePrefix].push(record.path)
  files.push(record)
}

function finalizeShards(spoolRoot, outputRoot, directory) {
  const routes = {}
  const files = []
  for (const name of readdirSync(spoolRoot).filter((candidate) => candidate.endsWith('.jsonl')).sort()) {
    const basePrefix = basename(name, '.jsonl')
    const lines = readFileSync(join(spoolRoot, name), 'utf8').split('\n').filter(Boolean)
    writeShardRecursive(outputRoot, basePrefix, basePrefix, lines, routes, files, directory)
  }
  return { routes, files: files.sort((left, right) => left.path.localeCompare(right.path)) }
}

function safeReplaceDirectory(stagingRoot, outputRoot) {
  const resolvedOutput = resolve(outputRoot)
  const root = resolve(resolvedOutput, sep)
  if (resolvedOutput === root || resolvedOutput === dirname(resolvedOutput)) throw new Error(`Refusing to replace unsafe output path: ${resolvedOutput}`)
  rmSync(resolvedOutput, { recursive: true, force: true })
  renameSync(stagingRoot, resolvedOutput)
}

export async function buildColRegistry({ archivePath, outputRoot, provenance }) {
  const startedAt = Date.now()
  const resolvedArchive = resolve(archivePath)
  const resolvedOutput = resolve(outputRoot)
  if (!statSync(resolvedArchive).isFile()) throw new Error(`Archive is not a file: ${resolvedArchive}`)
  const archiveSha256 = await sha256File(resolvedArchive)
  if (archiveSha256 !== provenance.archive.computedSha256) {
    throw new Error(`Archive SHA-256 ${archiveSha256} does not match pinned ${provenance.archive.computedSha256}`)
  }
  const stagingRoot = `${resolvedOutput}.building-${process.pid}`
  rmSync(stagingRoot, { recursive: true, force: true })
  mkdirSync(stagingRoot, { recursive: true })
  const spoolRoot = join(stagingRoot, '.spool')
  const buckets = new BufferedBuckets(spoolRoot)
  const targetIds = new Set()
  const counters = {
    nameUsages: 0,
    speciesNameUsages: 0,
    includedNameUsages: 0,
    acceptedSpecies: 0,
    provisionallyAcceptedSpecies: 0,
    resolvingNameUsages: { synonym: 0, 'ambiguous-synonym': 0, misapplied: 0 },
    excludedSpeciesStatuses: {},
    missingTaxonId: 0,
    missingScientificName: 0,
    missingSourceDatasetId: 0,
    missingAcceptedNameUsageId: 0,
    acceptedWithTarget: 0,
  }

  try {
    const sourceXml = await consumeArchive(resolvedArchive, createTaxonConsumer(counters, buckets, targetIds), true)
    buckets.flush()
    const { routes, files } = finalizeShards(spoolRoot, stagingRoot, 'search')
    rmSync(spoolRoot, { recursive: true, force: true })
    const targetSpoolRoot = join(stagingRoot, '.target-spool')
    const targetBuckets = new BufferedBuckets(targetSpoolRoot)
    const targetCounters = { records: 0, statuses: {}, ranks: {} }
    await consumeArchive(resolvedArchive, createTargetConsumer(targetIds, targetCounters, targetBuckets), false)
    targetBuckets.flush()
    const targetProjection = finalizeShards(targetSpoolRoot, stagingRoot, 'targets')
    rmSync(targetSpoolRoot, { recursive: true, force: true })
    const unresolvedTargetIds = targetIds.size - targetCounters.records
    if (unresolvedTargetIds !== 0) throw new Error(`${unresolvedTargetIds} accepted-name targets are absent from the pinned archive`)
    const sources = [...sourceXml]
      .map(([datasetId, xml]) => parseSourceMetadata(datasetId, xml))
      .sort((left, right) => left.datasetId.localeCompare(right.datasetId, 'en', { numeric: true }))
    if (counters.nameUsages !== provenance.nameUsageCount) throw new Error(`Projected ${counters.nameUsages} name usages; pinned release reports ${provenance.nameUsageCount}`)
    if (counters.acceptedSpecies !== provenance.acceptedSpeciesCount) throw new Error(`Projected ${counters.acceptedSpecies} accepted species; pinned release reports ${provenance.acceptedSpeciesCount}`)
    if (counters.provisionallyAcceptedSpecies !== provenance.provisionallyAcceptedSpeciesCount) throw new Error(`Projected ${counters.provisionallyAcceptedSpecies} provisionally accepted species; pinned release reports ${provenance.provisionallyAcceptedSpeciesCount}`)
    if (sources.length !== provenance.sourceChecklistCount) throw new Error(`Projected ${sources.length} source checklists; pinned release reports ${provenance.sourceChecklistCount}`)
    if (counters.missingTaxonId || counters.missingScientificName || counters.missingAcceptedNameUsageId || counters.acceptedWithTarget) {
      throw new Error(`Projection invariants failed: ${JSON.stringify(counters)}`)
    }
    const sourcesBytes = Buffer.from(`${JSON.stringify(sources, null, 2)}\n`, 'utf8')
    writeFileSync(join(stagingRoot, 'sources.json'), sourcesBytes)
    const manifest = {
      schemaVersion: 1,
      registryType: provenance.registryType,
      releaseAlias: provenance.releaseAlias,
      releaseDate: provenance.releaseDate,
      checklistBankDatasetKey: provenance.checklistBankDatasetKey,
      doi: provenance.doi,
      citation: provenance.citation,
      license: {
        raw: provenance.licenseRaw,
        label: provenance.licenseLabel,
        spdx: provenance.licenseSpdx,
        url: provenance.licenseUrl,
      },
      scope: provenance.snapshotBoundary,
      limitations: provenance.scientificLimitations,
      counts: counters,
      classificationFields: CLASSIFICATION_FIELDS,
      sourceChecklists: {
        count: sources.length,
        path: 'sources.json',
        bytes: sourcesBytes.byteLength,
        sha256: sha256Bytes(sourcesBytes),
      },
      search: {
        minimumQueryLength: 3,
        normalization: 'Unicode NFKD; remove combining marks; lowercase en-US; replace non a-z0-9 runs with spaces; trim',
        routes,
        files,
        totalCompressedBytes: files.reduce((sum, file) => sum + file.bytes, 0),
        totalSourceBytes: files.reduce((sum, file) => sum + file.sourceBytes, 0),
        largestShardBytes: Math.max(0, ...files.map((file) => file.bytes)),
      },
      acceptedTargets: {
        uniqueReferencedIds: targetIds.size,
        records: targetCounters.records,
        unresolvedIds: unresolvedTargetIds,
        statuses: targetCounters.statuses,
        ranks: targetCounters.ranks,
        routing: 'SHA-256 of the exact release-scoped usage ID; first two lowercase hexadecimal characters',
        routes: targetProjection.routes,
        files: targetProjection.files,
        totalCompressedBytes: targetProjection.files.reduce((sum, file) => sum + file.bytes, 0),
        totalSourceBytes: targetProjection.files.reduce((sum, file) => sum + file.sourceBytes, 0),
        largestShardBytes: Math.max(0, ...targetProjection.files.map((file) => file.bytes)),
        relationshipToAcceptedSpeciesCount: 'These minimal target records make every resolving name locally dereferenceable. They include non-species ranks when referenced and never increase counts.acceptedSpecies.',
      },
      relationshipToAtlas: 'This registry covers names and taxonomic placement only. It does not imply an Evo Atlas dossier, evidence maturity, media, fossil, ecology, translation, or expert review.',
      taxonIdScope: 'Catalogue of Life usage IDs identify records in COL26.8. They are not treated as sufficient cross-release concept identity because source-sector resynchronizations can replace IDs.',
      curieTemplate: 'col:{id}',
      recordSchema: {
        normalizedName: 'Deterministic search key; not a scientific name',
        id: 'Catalogue of Life usage ID in this snapshot',
        scientificName: 'Verbatim scientific name from DwCA',
        authorship: 'Verbatim scientific-name authorship or null',
        rank: 'species for every record in this registry',
        status: 'accepted, synonym, ambiguous-synonym, or misapplied',
        acceptedId: 'Target accepted usage ID for resolving names; null for accepted species',
        parentId: 'Parent usage ID for accepted species; null for resolving names',
        sourceDatasetId: 'ChecklistBank source-sector dataset ID or null when absent upstream',
        classification: 'Ordered values named by classificationFields; trailing nulls omitted',
      },
      upstreamTaxonUrlTemplate: `https://www.checklistbank.org/dataset/${provenance.checklistBankDatasetKey}/taxon/{id}`,
      generatedBy: 'scripts/build-col-registry.mjs',
    }
    writeFileSync(join(stagingRoot, 'manifest.json'), `${JSON.stringify(manifest, null, 2)}\n`, 'utf8')
    safeReplaceDirectory(stagingRoot, resolvedOutput)
    return { manifest, elapsedMs: Date.now() - startedAt }
  } catch (error) {
    rmSync(stagingRoot, { recursive: true, force: true })
    throw error
  }
}
