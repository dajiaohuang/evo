import { expect, test } from 'vitest'
import { readFileSync } from 'node:fs'
import { createHash } from 'node:crypto'
import { gunzipSync } from 'node:zlib'
import { buildCatalogueKnowledge } from './catalogue-knowledge.mjs'

test('the Perissodactyla pilot covers the real pinned order, every family, genus and accepted species', () => {
  const root = 'data/catalogue-of-life/releases/2026-08-20/registry/'
  const manifest = JSON.parse(readFileSync(`${root}manifest.json`, 'utf8'))
  const profiles = JSON.parse(readFileSync('data/knowledge/catalogue-profiles.json', 'utf8'))
  const cache = new Map()
  const rowsFor = (section, id) => {
    const prefix = createHash('sha256').update(id).digest('hex').slice(0, 2)
    return manifest.hierarchy[section].routes[prefix].flatMap(path => {
      if (!cache.has(path)) cache.set(path, gunzipSync(readFileSync(root + path)).toString().trim().split('\n').map(JSON.parse))
      return cache.get(path)
    })
  }
  const order = rowsFor('nodes', '623DW').find(row => row.id === '623DW')
  const nodes = [order]
  const visit = id => {
    for (const child of rowsFor('children', id).filter(row => row.parentId === id)) {
      nodes.push(child)
      if (child.childCount) visit(child.id)
    }
  }
  visit(order.id)
  const expected = nodes.filter(row => ['order', 'family', 'genus', 'species'].includes(row.rank))
  expect(profiles.records.map(row => row.colId).sort()).toEqual(expected.map(row => row.id).sort())
  const result = buildCatalogueKnowledge({ releaseAlias: manifest.releaseAlias, collections: {}, profiles, nodes })
  expect(result.counts.profilesByRank).toEqual({ order: 1, family: 3, genus: 8, species: 19 })
  expect(result.records.find(row => row.colId === order.id).subtree).toEqual({ acceptedSpecies: 19, describedSpecies: 0, profiledSpecies: 19 })
  for (const profile of profiles.records) {
    expect(profile.name.zh).toBeTruthy()
    expect(profile.name.en).toBeTruthy()
    expect(profile.limitations.zh).toContain('未经过外部领域专家评审')
    expect(profile.limitations.en).toContain('not externally expert-reviewed')
  }
}, 20000)
