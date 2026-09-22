import { test, expect } from 'vitest'
import { readFileSync } from 'node:fs'
import { createHash } from 'node:crypto'
import { gunzipSync } from 'node:zlib'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const read = path => JSON.parse(readFileSync(resolve(root, path), 'utf8'))
const registryRoot = 'data/catalogue-of-life/releases/2026-08-20/registry'
const manifest = read(`${registryRoot}/manifest.json`)
const records = gunzipSync(readFileSync(resolve(root, 'data/sources/plazi-descriptions.jsonl.gz'))).toString().trim().split('\n').map(JSON.parse)

test('every Plazi description is reachable through a real accepted species in the pinned catalogue', () => {
  const cache = new Map()
  for (const record of records) {
    const route = createHash('sha256').update(record.colId).digest('hex').slice(0, 2)
    if (!cache.has(route)) cache.set(route, manifest.hierarchy.nodes.routes[route].flatMap(path => gunzipSync(readFileSync(resolve(root, registryRoot, path))).toString().trim().split('\n').map(JSON.parse)))
    const node = cache.get(route).find(row => row.id === record.colId)
    expect(node, record.scientificName).toBeDefined()
    expect(node.rank).toBe('species')
    expect(node.status).toBe('accepted')
    expect(node.scientificName).toBe(record.scientificName)
  }
})

test('Cestrum descriptions preserve source identities and the two real synonym redirects', () => {
  const names = manifest.search.routes.ce.flatMap(path => gunzipSync(readFileSync(resolve(root, registryRoot, path))).toString().trim().split('\n').map(JSON.parse))
  const cestrum = records.filter(row => row.scientificName.startsWith('Cestrum '))
  expect(cestrum).toHaveLength(8)
  expect(cestrum.flatMap(row => row.descriptions)).toHaveLength(40)
  const synonyms = new Set()
  for (const row of cestrum) for (const description of row.descriptions) {
    const source = names.find(name => name.id === description.sourceColUsageId)
    expect(source, description.sourceScientificName).toBeDefined()
    expect(source.sourceDatasetId).toBe('1141')
    expect(source.status).toBe(description.sourceStatus)
    if (source.status === 'synonym') {
      synonyms.add(source.id)
      expect(source.acceptedId).toBe(row.colId)
      expect(description.acceptedRedirectId).toBe(row.colId)
      expect(description.acceptedRedirectName).toBe(row.scientificName)
    } else expect(source.id).toBe(row.colId)
  }
  expect([...synonyms].sort()).toEqual(['T5NW', 'T5W9'])
})
