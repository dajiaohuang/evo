import type { NodeMapDataset, NodeMapManifest } from '../types/nodeMap'

const root = `${import.meta.env.BASE_URL}node-map/`
const pending = new Map<string, Promise<NodeMapDataset>>()
const memberships = new Map<string, Promise<NodeMapDataset['members']>>()
let manifestPromise: Promise<NodeMapManifest> | undefined

function validFile(file: { url: string; sha256: string }): boolean {
  return /^[a-f0-9]{64}$/.test(file.sha256) && /^[a-zA-Z0-9_./-]+\.json$/.test(file.url)
    && !file.url.startsWith('/') && !file.url.includes('..')
}

async function readVerifiedJson(file: { url: string; sha256: string }): Promise<unknown> {
  const response = await fetch(`${root}${file.url}`)
  if (!response.ok) throw new Error(`Node map file: HTTP ${response.status}`)
  const bytes = await response.arrayBuffer()
  const hash = [...new Uint8Array(await crypto.subtle.digest('SHA-256', bytes))].map(value => value.toString(16).padStart(2, '0')).join('')
  if (hash !== file.sha256) throw new Error('Node map file checksum mismatch')
  return JSON.parse(new TextDecoder().decode(bytes))
}

function loadMembers(manifest: NodeMapManifest): Promise<NodeMapDataset['members'] | undefined> {
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
    for (const frame of value.frames) {
      if (!Number.isFinite(frame.ageMa) || frame.ageMa < 0 || ages.has(frame.ageMa)
        || !/^[a-f0-9]{64}$/.test(frame.coastlineSha256) || !validFile(frame)) {
        throw new Error('Invalid node map frame')
      }
      ages.add(frame.ageMa)
    }
    if (value.frameWindowHalfWidthMa !== undefined && (!Number.isFinite(value.frameWindowHalfWidthMa) || value.frameWindowHalfWidthMa < 0)) {
      throw new Error('Invalid node map time window')
    }
    return value
  }).catch(error => { manifestPromise = undefined; throw error })
  return manifestPromise
}

export function loadNodeMapFrame(manifest: NodeMapManifest, frame: NodeMapManifest['frames'][number]): Promise<NodeMapDataset> {
  const key = `${manifest.revision}:${frame.url}:${frame.sha256}`
  const existing = pending.get(key)
  if (existing) return existing
  const request = Promise.all([readVerifiedJson(frame), loadMembers(manifest)]).then(([data, members]) => {
    const value = data as NodeMapDataset
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
