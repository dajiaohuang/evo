import { describe, expect, it } from 'vitest'
import { occurrenceSearchScenes } from './search-occurrence-scenes.mjs'
// Check the production search projection against the original occurrence fields.

const profile = { id: 'tiktaalik', treeNodeId: 'tiktaalik', scientificName: 'Tiktaalik', commonName: 'Tiktaalik', commonNameZh: '提塔利克鱼', rank: 'genus', extinct: true }
const record = { oid: 'occ:568160', tna: 'Tiktaalik roseae', cid: 'col:59674', referenceId: 'ref:17081', packageId: 'tetrapod-transition', paleoModelId: 'pbdb:gplates', eag: 382.31, lag: 372.15, paleolat: -0.25, paleolng: -31.8, formation: 'Fram', matchedEntityIds: ['tiktaalik'] }

describe('source-backed fossil search scenes', () => {
  it('keeps the record, its reconstructed coordinates and collection age interval together', () => {
    const [entry] = occurrenceSearchScenes([profile], [{ records: [record] }])
    const route = new URL(entry.route, 'https://example.test').hash
    const params = new URLSearchParams(route.split('?')[1])
    expect(entry.title).toContain('Fram · occ:568160')
    expect(params.get('age')).toBe('377.23')
    expect(params.get('older')).toBe('382.31')
    expect(params.get('younger')).toBe('372.15')
    expect(params.get('lat')).toBe('-0.25')
    expect(params.get('lng')).toBe('-31.8')
    expect(params.get('occurrence')).toBe('occ:568160')
    expect(params.get('coords')).toBe('paleo')
  })

  it('does not substitute modern positions, incomplete ages, broad groups or unlinked records', () => {
    for (const patch of [{ paleolat: null, lat: '77.9' }, { paleolng: 181 }, { lag: -1 }, { eag: 1, lag: 2 }, { eag: null }, { paleoModelId: null }, { referenceId: null }, { matchedEntityIds: ['other'] }]) {
      expect(occurrenceSearchScenes([profile], [{ records: [{ ...record, ...patch }] }])).toEqual([])
    }
    expect(occurrenceSearchScenes([{ ...profile, rank: 'class' }], [{ records: [record] }])).toEqual([])
    expect(occurrenceSearchScenes([{ ...profile, extinct: false }], [{ records: [record] }])).toEqual([])
    expect(occurrenceSearchScenes([profile], [null])).toEqual([])
  })
})
