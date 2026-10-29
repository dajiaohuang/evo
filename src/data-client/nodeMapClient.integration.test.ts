import { existsSync, readFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { webcrypto } from 'node:crypto'
import { expect, it, vi } from 'vitest'
import { queryNodeMap } from '../services/nodeMap'
import type { NodeMapDataset, NodeMapManifest } from '../types/nodeMap'

const base = resolve('.git/platform-v2/local/node-map-expansion')
const staged = resolve(base, 'client-v5')
// Optional private scientific fixture, deliberately absent from CI/source control.
it.skipIf(!existsSync(resolve(staged, 'manifest.json')))('queries the real split candidate identically to the original dataset', async () => {
  vi.resetModules()
  vi.stubGlobal('crypto', webcrypto)
  const downloaded: string[] = []
  vi.stubGlobal('fetch', async (url: string) => {
    const relative = url.split('node-map/')[1]
    downloaded.push(relative)
    return new Response(readFileSync(resolve(staged, relative)))
  })
  try {
    const client = await import('./nodeMapClient')
    const manifest = await client.loadNodeMapManifest()
    const original = JSON.parse(readFileSync(resolve(base, 'candidate-v5/manifest.json'), 'utf8')) as NodeMapManifest
    const allMembers = JSON.parse(readFileSync(resolve(base, 'candidate-v5', original.members!.url), 'utf8')).members
    const node = manifest.nodes.reduce((best, item) => item.recordCount > best.recordCount ? item : best)
    const frame = manifest.frames.reduce((best, item) => (item.recordCount ?? 0) > (best.recordCount ?? 0) ? item : best)
    const data = await client.loadNodeMapFrame(manifest, frame, node.id)
    const legacy = JSON.parse(readFileSync(resolve(base, 'candidate-v5', frame.url), 'utf8')) as NodeMapDataset
    legacy.members = allMembers
    expect(data.records).toEqual(legacy.records)
    expect(data.members[node.id]).toEqual(allMembers[node.id])
    for (const scope of ['direct', 'descendants'] as const) {
      const query = { nodeId: node.id, treeRevision: manifest.treeRevision, scope, gridColumns: 72,
        time: { olderMa: frame.ageMa + 5, youngerMa: Math.max(0, frame.ageMa - 5) },
        frame: { modelRevision: manifest.modelRevision, referenceFrame: manifest.referenceFrame,
          anchorPlateId: manifest.anchorPlateId, ageMa: frame.ageMa } }
      expect(queryNodeMap(data, query)).toEqual(queryNodeMap(legacy, query))
    }
    expect(downloaded).not.toContain(frame.url)
    expect(downloaded.filter(path => path.startsWith('members/')).length).toBeLessThanOrEqual(2)
    console.log(JSON.stringify({ revision: manifest.revision, node: node.id, age: frame.ageMa, records: data.records.length, requests: downloaded.length }))
  } finally {
    vi.unstubAllGlobals()
  }
}, 120000)
