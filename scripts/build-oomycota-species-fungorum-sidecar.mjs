import { createHash } from 'node:crypto'
import { mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import { join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { gunzipSync } from 'node:zlib'
import { deterministicGzip } from './archive-determinism.mjs'

const root = resolve(fileURLToPath(new URL('..', import.meta.url)))
const crosswalkPath = join(root, 'data', 'sources', 'oomycota-species-fungorum-crosswalk-col26.8.json.gz')
const outputRoot = join(root, 'data', 'catalogue-of-life', 'releases', '2026-08-20', 'resource-packs', 'protists-chromists')
const sha256 = (bytes) => createHash('sha256').update(bytes).digest('hex')
const snapshotCompressed = readFileSync(crosswalkPath)
const snapshotSource = gunzipSync(snapshotCompressed)
const snapshot = JSON.parse(snapshotSource.toString('utf8'))
if (snapshot.crosswalkType !== 'release-pinned-oomycota-species-fungorum-identifier-crosswalk' || snapshot.records.length !== 1673) throw new Error('Unexpected Oomycota snapshot')
const fields = ['colId', 'sourceDatasetId', 'scientificName', 'authorship', 'rank', 'status', 'indexFungorumId', 'indexFungorumUrl', 'indexFungorumName', 'indexFungorumAuthors', 'currentUse', 'taxonomicReferee', 'updatedDate', 'phylum', 'mappingBasis', 'checklistBankSourceEndpoint', 'checklistBankSourceResponseDate', 'checklistBankSourceResponseBytes', 'checklistBankSourceResponseSha256', 'indexFungorumEndpoint', 'indexFungorumResponseDate', 'indexFungorumResponseBytes', 'indexFungorumResponseSha256']
const records = snapshot.records.map((record) => Object.fromEntries(fields.map((field) => [field, record[field]])))
const source = Buffer.from(`${records.map((record) => JSON.stringify(record)).join('\n')}\n`, 'utf8')
const compressed = Buffer.from(deterministicGzip(source, { level: 9 }))
mkdirSync(outputRoot, { recursive: true })
const fileName = 'species-fungorum-oomycota-000.jsonl.gz'
writeFileSync(join(outputRoot, fileName), compressed)
const descriptor = {
  id: 'species-fungorum-oomycota-identifiers',
  recordType: 'external-name-identifier-crosswalk',
  provider: 'Species Fungorum / Index Fungorum (Royal Botanic Gardens, Kew)',
  source: {
    ...snapshot.source,
    canonicalCrosswalkPath: 'data/sources/oomycota-species-fungorum-crosswalk-col26.8.json.gz',
    canonicalCrosswalkBytes: snapshotCompressed.byteLength,
    canonicalCrosswalkSha256: sha256(snapshotCompressed),
    canonicalCrosswalkSourceBytes: snapshotSource.byteLength,
    canonicalCrosswalkSourceSha256: sha256(snapshotSource),
    requestIntegrity: snapshot.integrity,
  },
  eligibility: 'Every strict accepted COL26.8 species descending from exact Oomycota root 5K with sourceDatasetId=2073 (Species Fungorum Plus).',
  counts: snapshot.counts,
  fields,
  files: [{ path: `protists-chromists/${fileName}`, records: records.length, bytes: compressed.byteLength, sourceBytes: source.byteLength, sha256: sha256(compressed), sourceSha256: sha256(source), encoding: 'gzip', mediaType: 'application/x-ndjson', minColId: records[0].colId, maxColId: records.at(-1).colId }],
  totalCompressedBytes: compressed.byteLength,
  totalSourceBytes: source.byteLength,
  deliveryProfiles: { 'web-light': { payload: 'summary-only', files: [], records: 0 }, 'native-full': { payload: 'complete', files: [`protists-chromists/${fileName}`], records: records.length } },
  limitations: snapshot.limitations,
  integration: { standalone: false, targetManifestPath: 'data/catalogue-of-life/releases/2026-08-20/resource-packs/protists-chromists/manifest.json', clientParityRequirement: 'The complete shard is copied unchanged to native Android/iOS assets; Web-light receives descriptor and aggregate counts only.', lookup: { strategy: 'lexicographic-colId-range-v1', ordering: 'Unicode code-unit ascending', requestPolicy: 'A single-species query loads at most one shard.', forbiddenBehavior: 'Do not download or parse the complete sidecar for a single-species query.' } },
}
writeFileSync(join(outputRoot, 'species-fungorum-oomycota-extension.json'), `${JSON.stringify(descriptor, null, 2)}\n`, 'utf8')
console.log(JSON.stringify({ descriptor: descriptor.id, records: records.length, bytes: compressed.byteLength, sourceBytes: source.byteLength, sha256: sha256(compressed) }, null, 2))
