import crypto from 'node:crypto'
import fs from 'node:fs'
import path from 'node:path'

const snapshotDir = path.resolve('data/sources/snapshots')
const date = '2026-10-02'
const manifestPath = path.join(snapshotDir, `pbdb-amniota-denominator-${date}.manifest.json`)
const rootPath = path.join(snapshotDir, `pbdb-amniota-accepted-fossil-species-${date}.json`)
const partitionPath = path.join(snapshotDir, `pbdb-amniota-disjoint-oids-${date}.json`)
const endpoint = 'https://paleobiodb.org/data1.2/taxa/list.json'
const partitionRetrievedAt = new Date().toISOString()

const roots = [
  { id: 'mammalia', pbdbId: '36651', name: 'Mammalia' },
  { id: 'synapsida', pbdbId: '38882', name: 'Synapsida' },
  { id: 'aves', pbdbId: '36616', name: 'Aves' },
  { id: 'dinosauria', pbdbId: '52775', name: 'Dinosauria' },
  { id: 'pterosauria', pbdbId: '38461', name: 'Pterosauria' },
  { id: 'crocodylomorpha', pbdbId: '53401', name: 'Crocodylomorpha' },
  { id: 'archosauria', pbdbId: '38215', name: 'Archosauria' },
  { id: 'pantestudines', pbdbId: '253371', name: 'Pantestudines' },
  { id: 'squamata', pbdbId: '36379', name: 'Squamata' },
  { id: 'rhynchocephalia', pbdbId: '54194', name: 'Rhynchocephalia' },
  { id: 'lepidosauromorpha', pbdbId: '37794', name: 'Lepidosauromorpha' },
  { id: 'ichthyosauriformes', pbdbId: '341193', name: 'Ichthyosauriformes' },
  { id: 'sauropterygia', pbdbId: '38164', name: 'Sauropterygia' },
  { id: 'reptilia', pbdbId: '36322', name: 'Reptilia' },
]

const sha256 = bytes => crypto.createHash('sha256').update(bytes).digest('hex')
const readJson = file => JSON.parse(fs.readFileSync(file, 'utf8'))
const recordsOf = response => {
  if (response.status_code && response.status_code !== 200) throw new Error(`PBDB status ${response.status_code}`)
  if (response.errors?.length || response.warnings?.length) throw new Error(`PBDB response has warnings/errors: ${JSON.stringify({ errors: response.errors, warnings: response.warnings })}`)
  if (!Array.isArray(response.records)) throw new Error('PBDB response is missing records[]')
  return response.records
}
const idsOf = response => new Set(recordsOf(response).map(record => String(record.oid)))
const subtract = (left, ...rightSets) => new Set([...left].filter(id => rightSets.every(set => !set.has(id))))

const rootBytes = fs.readFileSync(rootPath)
const rootResponse = JSON.parse(rootBytes.toString('utf8'))
const rootIds = idsOf(rootResponse)
const queryMetadata = []
const sets = new Map()

for (const root of roots) {
  const parameters = new URLSearchParams({
    base_id: root.pbdbId,
    rank: 'species',
    status: 'accepted',
    extant: 'no',
    pres: 'regular',
    limit: 'all',
  })
  const url = `${endpoint}?${parameters}`
  const response = await fetch(url, { headers: { accept: 'application/json' } })
  if (!response.ok) throw new Error(`${root.name} query failed: HTTP ${response.status}`)
  const bytes = Buffer.from(await response.arrayBuffer())
  const json = JSON.parse(bytes.toString('utf8'))
  const rows = recordsOf(json)
  const ids = idsOf(json)
  if ([...ids].some(id => !rootIds.has(id))) throw new Error(`${root.name} contains OIDs outside the dated Amniota root`)
  if (rows.some(record => record.rnk !== 'species' || record.ext !== '0')) throw new Error(`${root.name} returned an out-of-scope row`)
  const slug = root.id
  const responsePath = path.join(snapshotDir, `pbdb-amniota-subclade-${slug}-${date}.json`)
  fs.writeFileSync(responsePath, bytes)
  sets.set(root.id, ids)
  queryMetadata.push({
    id: root.id,
    scientificName: root.name,
    pbdbTaxonId: `txn:${root.pbdbId}`,
    queryParameters: Object.fromEntries(parameters.entries()),
    queryUrl: url,
    responsePath: path.relative(process.cwd(), responsePath).replaceAll(path.sep, '/'),
    responseSha256: sha256(bytes),
    responseBytes: bytes.length,
    responseRecordCount: rows.length,
    uniquePbdbTaxonIdCount: ids.size,
  })
}

const selected = new Map()
const assign = (id, set) => {
  selected.set(id, set)
}
const mammalia = sets.get('mammalia')
const synapsida = sets.get('synapsida')
const aves = sets.get('aves')
const dinosauria = sets.get('dinosauria')
const pterosauria = sets.get('pterosauria')
const crocodylomorpha = sets.get('crocodylomorpha')
const archosauria = sets.get('archosauria')
const pantestudines = sets.get('pantestudines')
const squamata = sets.get('squamata')
const rhynchocephalia = sets.get('rhynchocephalia')
const lepidosauromorpha = sets.get('lepidosauromorpha')
const ichthyosauriformes = sets.get('ichthyosauriformes')
const sauropterygia = sets.get('sauropterygia')
const reptilia = sets.get('reptilia')

assign('mammalia', mammalia)
assign('other-synapsida', subtract(synapsida, mammalia))
assign('fossil-aves', aves)
assign('non-avian-dinosauria', subtract(dinosauria, aves))
assign('pterosauria', pterosauria)
assign('crocodylomorpha', crocodylomorpha)
assign('other-archosauria', subtract(archosauria, aves, dinosauria, pterosauria, crocodylomorpha))
assign('pantestudines', pantestudines)
assign('squamata', squamata)
assign('rhynchocephalia', rhynchocephalia)
const otherLepidosauromorpha = subtract(lepidosauromorpha, squamata, rhynchocephalia)
assign('other-lepidosauromorpha', otherLepidosauromorpha)
assign('ichthyosauriformes', ichthyosauriformes)
assign('sauropterygia', sauropterygia)
const assignedReptiles = new Set([
  ...archosauria,
  ...pantestudines,
  ...squamata,
  ...rhynchocephalia,
  ...otherLepidosauromorpha,
  ...ichthyosauriformes,
  ...sauropterygia,
])
assign('other-reptilia', subtract(reptilia, assignedReptiles))
const priorIds = new Set([...selected.values()].flatMap(set => [...set]))
assign('amniota-residual', subtract(rootIds, priorIds))

const memberships = new Map()
for (const [partitionId, ids] of selected) {
  for (const id of ids) {
    if (memberships.has(id)) throw new Error(`OID ${id} assigned to both ${memberships.get(id)} and ${partitionId}`)
    memberships.set(id, partitionId)
  }
}
if (memberships.size !== rootIds.size) throw new Error(`Partition covers ${memberships.size}/${rootIds.size} root OIDs`)

const partition = {
  schemaVersion: 1,
  source: 'Paleobiology Database Data Service 1.2',
  retrievedAt: partitionRetrievedAt,
  rootResponsePath: path.relative(process.cwd(), rootPath).replaceAll(path.sep, '/'),
  rootResponseSha256: sha256(rootBytes),
  rootRecordCount: rootIds.size,
  membershipBasis: 'Set operations over the dated Amniota root and pinned PBDB base_id descendant responses; each OID is assigned once.',
  partitions: [...selected].map(([id, ids]) => ({ id, recordCount: ids.size, pbdbTaxonIds: [...ids].sort((a, b) => Number(a) - Number(b)).map(oid => `txn:${oid}`) })),
}
const partitionBytes = Buffer.from(`${JSON.stringify(partition, null, 2)}\n`)
fs.writeFileSync(partitionPath, partitionBytes)

const manifest = readJson(manifestPath)
manifest.childSubcladeQueries = queryMetadata
manifest.pbdbDisjointPartitionAsOf = partitionRetrievedAt
manifest.disjointPartitionResponsePath = path.relative(process.cwd(), partitionPath).replaceAll(path.sep, '/')
manifest.disjointPartitionResponseSha256 = sha256(partitionBytes)
manifest.disjointPartitionRecordCount = memberships.size
manifest.partitionRecordCount = memberships.size
manifest.partitionNote = 'The OID partitions are saved in the linked derived file. Each root response and child base_id response is retained with its exact query parameters and SHA-256. The partition builder rejects out-of-root IDs, duplicate membership, and incomplete coverage.'
manifest.disjointFossilPartition = partition.partitions.map(({ id, recordCount }) => ({ id, recordCount }))
fs.writeFileSync(manifestPath, `${JSON.stringify(manifest, null, 2)}\n`)

console.log(JSON.stringify({
  rootRecordCount: rootIds.size,
  childQueries: queryMetadata.length,
  partitions: partition.partitions.map(({ id, recordCount }) => ({ id, recordCount })),
  partitionRecordCount: memberships.size,
  partitionSha256: sha256(partitionBytes),
}))
