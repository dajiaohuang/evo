import type { NodeMapDataset, NodeMapManifest } from '../types/nodeMap'

const root = `${import.meta.env.BASE_URL}node-map/`
const pending = new Map<string, Promise<NodeMapDataset>>()
const memberships = new Map<string, Promise<NodeMapDataset['members']>>()
const frameRecords = new Map<string, Promise<Omit<NodeMapDataset, 'members'>>>()
let manifestPromise: Promise<NodeMapManifest> | undefined

function validFile(file: { url: string; sha256: string }): boolean {
  return /^[a-f0-9]{64}$/.test(file.sha256) && /^[a-zA-Z0-9_./-]+\.json$/.test(file.url)
    && !file.url.startsWith('/') && !file.url.includes('..')
}

async function readVerifiedJson(file: { url: string; sha256: string }): Promise<unknown> {
  if (!validFile(file)) throw new Error('Invalid node map file')
  const response = await fetch(`${root}${file.url}`)
  if (!response.ok) throw new Error(`Node map file: HTTP ${response.status}`)
  const bytes = await response.arrayBuffer()
  const hash = [...new Uint8Array(await crypto.subtle.digest('SHA-256', bytes))].map(value => value.toString(16).padStart(2, '0')).join('')
  if (hash !== file.sha256) throw new Error('Node map file checksum mismatch')
  return JSON.parse(new TextDecoder().decode(bytes))
}

async function loadMembers(manifest: NodeMapManifest, nodeId?: string): Promise<NodeMapDataset['members'] | undefined> {
  if (manifest.memberBuckets) {
    if (!nodeId) throw new Error('Node ID required for bucket membership')
    const digest = new Uint8Array(await crypto.subtle.digest('SHA-256', new TextEncoder().encode(nodeId)))
    const bucket = digest[0].toString(16).padStart(2, '0')
    const files = manifest.memberBuckets[bucket]
    if (!files?.length) throw new Error('Missing node map membership bucket')
    const key = `${manifest.revision}:${bucket}:${files.map(file => file.sha256).join(':')}`
    let promise = memberships.get(key)
    if (!promise) {
      promise = (async () => {
        const members: NodeMapDataset['members'] = Object.create(null)
        for (const file of files) {
          const part = await readVerifiedJson(file) as Pick<NodeMapDataset, 'revision' | 'treeRevision' | 'members'>
          if (part.revision !== manifest.revision || part.treeRevision !== manifest.treeRevision
            || !part.members || Array.isArray(part.members)) throw new Error('Node map membership version mismatch')
          for (const [id, values] of Object.entries(part.members)) {
            if (!Array.isArray(values) || values.some(value => typeof value !== 'string')) throw new Error('Invalid node map members')
            members[id] = (members[id] ?? []).concat(values)
          }
        }
        return members
      })().catch(error => { memberships.delete(key); throw error })
      memberships.set(key, promise)
      while (memberships.size > 8) memberships.delete(memberships.keys().next().value!)
    }
    const members = await promise
    if (!members[nodeId]?.includes(nodeId)) throw new Error('Missing node map self membership')
    return { [nodeId]: members[nodeId] }
  }
  if (!manifest.members) return Promise.resolve(undefined)
  const key = `${manifest.revision}:${manifest.members.sha256}`
  const existing = memberships.get(key)
  if (existing) return existing
  const promise = readVerifiedJson(manifest.members).then(data => {
    const value = data as Pick<NodeMapDataset, 'revision' | 'treeRevision' | 'members'>
    if (value.revision !== manifest.revision || value.treeRevision !== manifest.treeRevision || !value.members) {
      throw new Error('Node map membership version mismatch')
    }
    return value.members
  }).catch(error => { memberships.delete(key); throw error })
  memberships.set(key, promise)
  while (memberships.size > 2) memberships.delete(memberships.keys().next().value!)
  return promise
}

export function loadNodeMapManifest(): Promise<NodeMapManifest> {
  if (!manifestPromise) manifestPromise = fetch(`${root}manifest.json`, { cache: 'no-cache' }).then(async response => {
    if (!response.ok) throw new Error(`Node map manifest: HTTP ${response.status}`)
    const value = await response.json() as NodeMapManifest
    if (value.schemaVersion !== 1 || !value.revision || !value.treeRevision || !value.modelRevision
      || !value.referenceFrame || !Number.isInteger(value.anchorPlateId)
      || !Array.isArray(value.nodes) || !Array.isArray(value.frames)
      || !['bounded-sample', 'complete-snapshot'].includes(value.coverage)) throw new Error('Invalid node map manifest')
    const ids = new Set<string>()
    for (const node of value.nodes) {
      if (!node.id || !node.name || ids.has(node.id) || !Number.isInteger(node.recordCount) || node.recordCount < 0) {
        throw new Error('Invalid node map identity')
      }
      ids.add(node.id)
    }
    const ages = new Set<number>()
    if (value.members && !validFile(value.members)) throw new Error('Invalid node map membership file')
    if (value.memberBuckets) {
      if (Object.keys(value.memberBuckets).length !== 256 || Object.entries(value.memberBuckets).some(([key, files]) =>
        !/^[a-f0-9]{2}$/.test(key) || !Array.isArray(files) || !files.length || files.some(file => !validFile(file)))) {
        throw new Error('Invalid node map membership buckets')
      }
    }
    for (const frame of value.frames) {
      if (!Number.isFinite(frame.ageMa) || frame.ageMa < 0 || ages.has(frame.ageMa)
        || !/^[a-f0-9]{64}$/.test(frame.coastlineSha256) || !validFile(frame)) {
        throw new Error('Invalid node map frame')
      }
      ages.add(frame.ageMa)
      if (frame.parts && (!Array.isArray(frame.parts)
        || typeof frame.truncated !== 'boolean'
        || frame.parts.some(part => !validFile(part) || !Number.isInteger(part.records) || part.records < 0)
        || !Number.isInteger(frame.recordCount) || frame.parts.reduce((sum, part) => sum + part.records, 0) !== frame.recordCount)) {
        throw new Error('Invalid node map frame parts')
      }
    }
    if (value.frameWindowHalfWidthMa !== undefined && (!Number.isFinite(value.frameWindowHalfWidthMa) || value.frameWindowHalfWidthMa < 0)) {
      throw new Error('Invalid node map time window')
    }
    return value
  }).catch(error => { manifestPromise = undefined; throw error })
  return manifestPromise
}

export function loadNodeMapFrame(manifest: NodeMapManifest, frame: NodeMapManifest['frames'][number], nodeId?: string): Promise<NodeMapDataset> {
  const frameKey = `${manifest.revision}:${frame.url}:${frame.sha256}`
  const key = `${frameKey}:${manifest.memberBuckets ? nodeId : ''}`
  const existing = pending.get(key)
  if (existing) return existing
  let raw = frameRecords.get(frameKey)
  if (!raw) {
    raw = (async () => {
      if (!frame.parts) return await readVerifiedJson(frame) as NodeMapDataset
      const records: NodeMapDataset['records'] = []
      const ids = new Set<string>()
      // Sequential parts bound simultaneous download/decode memory.
      for (const file of frame.parts) {
        const part = await readVerifiedJson(file) as NodeMapDataset
        if (part.revision !== manifest.revision || part.treeRevision !== manifest.treeRevision
          || part.coverage !== manifest.coverage || part.truncated !== frame.truncated
          || !Array.isArray(part.records) || part.records.length !== file.records) throw new Error('Node map part mismatch')
        for (const record of part.records) {
          if (ids.has(record.id)) throw new Error('Duplicate node map record')
          ids.add(record.id)
          records.push(record)
        }
      }
      if (records.length !== frame.recordCount) throw new Error('Node map frame count mismatch')
      return { revision: manifest.revision, treeRevision: manifest.treeRevision, coverage: manifest.coverage, truncated: frame.truncated!, records }
    })().catch(error => { frameRecords.delete(frameKey); throw error })
    frameRecords.set(frameKey, raw)
    while (frameRecords.size > 2) frameRecords.delete(frameRecords.keys().next().value!)
  }
  const request = Promise.all([raw, loadMembers(manifest, nodeId)]).then(([data, members]) => {
    const value = { ...data } as NodeMapDataset
    if (members) value.members = members
    if (value.revision !== manifest.revision || value.treeRevision !== manifest.treeRevision
      || value.coverage !== manifest.coverage || typeof value.truncated !== 'boolean'
      || !value.members || Array.isArray(value.members) || typeof value.members !== 'object' || !Array.isArray(value.records)) {
      throw new Error('Node map frame version mismatch')
    }
    for (const members of Object.values(value.members)) {
      if (!Array.isArray(members) || members.some(id => typeof id !== 'string')) throw new Error('Invalid node map members')
    }
    for (const record of value.records) {
      if (!record.id || !record.nodeId || !record.sourceId || record.kind !== 'fossil-occurrence'
        || (record.age !== null && (typeof record.age !== 'object' || !Number.isFinite(record.age?.olderMa) || !Number.isFinite(record.age?.youngerMa)))) {
        throw new Error('Invalid node map record')
      }
      if (record.reconstruction && (record.reconstruction.ageMa !== frame.ageMa
        || record.reconstruction.modelRevision !== manifest.modelRevision
        || record.reconstruction.referenceFrame !== manifest.referenceFrame
        || record.reconstruction.anchorPlateId !== manifest.anchorPlateId)) throw new Error('Node map reconstruction mismatch')
    }
    return value
  }).catch(error => { pending.delete(key); throw error })
  pending.set(key, request)
  // Bounded frame cache; moving the slider must not retain the entire reconstruction series.
  while (pending.size > 4) pending.delete(pending.keys().next().value!)
  return request
}
