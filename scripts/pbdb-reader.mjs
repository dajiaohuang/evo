import { createHash } from 'node:crypto'
import { readFileSync } from 'node:fs'
import { join, resolve, sep } from 'node:path'
import { parse } from 'yaml'
import { readNodeContent, walkContentNodes } from './node-content.mjs'
import { isPbdbTaxonId, pbdbClassificationId } from '../src/utils/pbdbIdentity.mjs'

function identities(identity, readTaxonomy) {
  const found = []
  const primary = pbdbClassificationId(identity?.classification)
  if (primary) found.push({ pbdbTaxonId: primary, identity })
  for (const [context, scoped] of Object.entries(identity?.scopedIdentities ?? {})) {
    const id = pbdbClassificationId(scoped?.classification)
    if (id) found.push({ pbdbTaxonId: id, identity: scoped, context })
  }
  const archivedIdentity = identity?.sourceIdentity
  if (archivedIdentity?.authority === 'PBDB' && isPbdbTaxonId(archivedIdentity.oid)) {
    const row = readTaxonomy?.(archivedIdentity.snapshot, archivedIdentity.oid)
    if (row?.oid === archivedIdentity.oid && typeof row.nam === 'string') {
      found.push({ pbdbTaxonId: row.oid, context: `PBDB:${row.oid}`, identity: {
        kind: 'taxon', scientificName: row.nam, rank: row.rnk,
        classification: { authority: 'Paleobiology Database snapshot',
          sourceUrl: `https://paleobiodb.org/data1.2/taxa/single.json?id=${row.oid.slice(4)}`,
          sourceSnapshot: archivedIdentity.snapshot,
          ...(isPbdbTaxonId(row.par) ? { parentSourceIdentifier: row.par } : {}),
        },
        placementStatus: identity.placementStatus, conceptsMerged: false,
      } })
    }
  }
  for (const source of Array.isArray(identity?.sourceIdentities) ? identity.sourceIdentities : []) {
    const taxonomy = source?.taxonomy
    const id = pbdbClassificationId({ authority: 'Paleobiology Database', sourceUrl: taxonomy?.url })
    if (!id || taxonomy.recordId !== id || source.identity !== `PBDB:${id}`) continue
    // Resolve the exact recorded snapshot row, not the physical node's name.
    const row = readTaxonomy?.(taxonomy.path, id)
    if (!row || row.oid !== id || typeof row.nam !== 'string') continue
    found.push({ pbdbTaxonId: id, context: source.identity, identity: {
      kind: 'taxon', scientificName: row.nam, rank: row.rnk,
      classification: { authority: 'Paleobiology Database', sourceUrl: taxonomy.url,
        sourceSnapshot: taxonomy.path, ...(isPbdbTaxonId(row.par) ? { parentSourceIdentifier: row.par } : {}) },
      placementStatus: identity.placementStatus,
      conceptsMerged: false,
    } })
  }
  return found
}

export function projectPbdbReaderNode(content, { readTaxonomy } = {}) {
  const found = identities(content.identity, readTaxonomy)
  const groups = new Map()
  for (const entry of found) {
    if (!groups.has(entry.pbdbTaxonId)) groups.set(entry.pbdbTaxonId, [])
    groups.get(entry.pbdbTaxonId).push(entry)
  }
  return [...groups].map(([pbdbTaxonId, entries]) => {
    const identity = structuredClone(entries[0].identity)
    delete identity.scopedIdentities
    const record = { pbdbTaxonId, identity }
    const scoped = entries.filter(entry => entry.context)
    if (scoped.length) record.scopedIdentities = scoped.map(({ context, identity }) => ({ context, identity: structuredClone(identity) }))
    // A profile belongs to its recorded identity, not a same-name source concept.
    // Shared physical nodes may contain an independent account for another source.
    const profile = content.records['catalogue-profile']
    if (profile && pbdbClassificationId(content.identity.classification) === pbdbTaxonId) {
      record.profile = structuredClone(profile)
      delete record.profile.colId
    }
    const atlas = content.records['atlas-profile']
    if (atlas && pbdbClassificationId(content.identity.classification) === pbdbTaxonId) {
      record.atlasProfile = Object.fromEntries(['readerSections', 'readerSources', 'readerLimitations', 'treeNodeId']
        .filter(key => atlas[key] !== undefined).map(key => [key, structuredClone(atlas[key])]))
    }
    if (pbdbClassificationId(content.identity.classification) === pbdbTaxonId && content.records.ranges) record.ranges = structuredClone(content.records.ranges)
    return record
  })
}

/** Canonical pages are read only here; the browser receives compressed projections. */
export function* readPbdbReaderRecords(root = process.cwd()) {
  const snapshotCache = new Map()
  const readTaxonomy = (path, id) => {
    if (typeof path !== 'string') return null
    const source = resolve(root, path)
    const allowed = resolve(root, 'data/sources')
    if (!source.startsWith(`${allowed}${sep}`)) throw new Error(`Invalid PBDB source snapshot path: ${path}`)
    if (!snapshotCache.has(path)) {
      const snapshot = JSON.parse(readFileSync(source, 'utf8'))
      snapshotCache.set(path, new Map((snapshot.records ?? []).map(row => [row.oid, row])))
    }
    return snapshotCache.get(path).get(id)
  }
  for (const key of walkContentNodes(root)) {
    const node = parse(readFileSync(join(root, 'content/nodes', key, 'node.yaml'), 'utf8'))
    if (!identities(node.identity, readTaxonomy).length) continue
    for (const record of projectPbdbReaderNode(readNodeContent(key, root), { readTaxonomy })) {
      yield record
    }
  }
}

export function buildPbdbReaderDelivery(records, { datasetVersion, writeGzipJson }) {
  const partitions = new Map()
  const index = []
  const byId = new Map()
  for (const record of records) {
    if (!isPbdbTaxonId(record.pbdbTaxonId) || pbdbClassificationId(record.identity.classification) !== record.pbdbTaxonId) throw new Error('Invalid PBDB reader taxon identity')
    if (!byId.has(record.pbdbTaxonId)) byId.set(record.pbdbTaxonId, [])
    byId.get(record.pbdbTaxonId).push(record)
  }
  const commonFields = objects => Object.fromEntries(Object.entries(objects[0]).flatMap(([key, value]) => {
    if (objects.every(object => JSON.stringify(object[key]) === JSON.stringify(value))) return [[key, structuredClone(value)]]
    if (value && typeof value === 'object' && !Array.isArray(value) && objects.every(object => object[key] && typeof object[key] === 'object')) return [[key, commonFields(objects.map(object => object[key]))]]
    return []
  }))
  for (const [pbdbTaxonId, contexts] of byId) {
    // Multiple material scopes retain separate accounts. Only identical identity
    // fields enter the envelope; no parent placement or prose is chosen for them.
    contexts.sort((a, b) => JSON.stringify(a.identity).localeCompare(JSON.stringify(b.identity)))
    const record = contexts.length === 1 ? contexts[0] : { pbdbTaxonId,
      identity: commonFields(contexts.map(context => context.identity)),
      sourceContexts: contexts.map(context => context.identity), contexts }
    // Keep a recorded provider locator when snapshots use different qualifiers
    // or URL output options. Every context was validated against the same txn ID.
    record.identity.classification.authority ??= contexts[0].identity.classification.authority
    record.identity.classification.sourceUrl ??= contexts[0].identity.classification.sourceUrl
    const prefix = createHash('sha256').update(record.pbdbTaxonId).digest('hex').slice(0, 2)
    if (!partitions.has(prefix)) partitions.set(prefix, [])
    partitions.get(prefix).push(record)
    const { profile: _profile, dossier: _dossier, atlasProfile: _atlas, ranges: _ranges, contexts: _contexts, ...identity } = record
    index.push(identity)
  }
  index.sort((a, b) => a.pbdbTaxonId.localeCompare(b.pbdbTaxonId))
  const routes = {}
  const files = [...partitions].sort(([a], [b]) => a.localeCompare(b)).map(([prefix, rows]) => {
    rows.sort((a, b) => a.pbdbTaxonId.localeCompare(b.pbdbTaxonId))
    const path = `pbdb/reading/${prefix}.json.gz`
    const file = { ...writeGzipJson(path, rows), prefix, path, records: rows.length }
    if (file.bytes > 8 * 1024 * 1024) throw new Error(`PBDB reader shard exceeds the 8 MiB runtime contract: ${path}`)
    routes[prefix] = [file.url]
    return file
  })
  return { schemaVersion: 1, datasetVersion, records: index.length, index: writeGzipJson('pbdb/reading/index.json.gz', index), routes, files }
}
