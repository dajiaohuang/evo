import assert from 'node:assert/strict'
import { createHash } from 'node:crypto'
import { readFileSync, writeFileSync } from 'node:fs'
import { brotliCompressSync, constants } from 'node:zlib'

const rawPath = 'data/knowledge/catalogue-dossiers-sanbi-cyclopia-batch.json'
const indexPath = 'data/knowledge/catalogue-dossier-shards.json'
const shardPath = 'data/knowledge/catalogue-dossiers-sanbi-cyclopia.jsonl.br'
const sha256 = bytes => createHash('sha256').update(bytes).digest('hex')
const raw = JSON.parse(readFileSync(rawPath, 'utf8'))
const seeds = raw.filter(record => ['9D2C4', '9D2C5'].includes(record.colId))
assert.equal(seeds.length, 2, 'Expected the two reviewed dossier templates')

const species = [
  {
    id: '32VQF', name: 'Cyclopia aurescens Kies', wfo: 'wfo-0000197612', source: '14286.0', morphRow: 5059, habitatRow: 28484,
    morphology: 'The account describes a sturdy, erect resprouting shrub reaching 70 cm, with three-foliolate leaves, linear leaflets and strongly revolute margins; yellow flowers are noted.',
    flowering: 'The species account gives a flowering period of October to December.',
    habitat: 'The account places the species in subalpine mountain fynbos above 1,800 m elevation.',
    range: 'The printed account lists Klein Swartberg as the regional range summary.',
    rangeScope: 'The printed regional range summary, abbreviated KM in the source; not a global distribution or a dated locality dataset.',
  },
  {
    id: '32VQG', name: 'Cyclopia bolusii Hofmeyr & E.Phillips', wfo: 'wfo-0000197623', source: '14286.0', morphRow: 5039, habitatRow: 28485,
    morphology: 'The account describes a lax, sprawling resprouting shrublet reaching 30 cm, with three-foliolate leaves, linear leaflets and strongly revolute margins that are softly hairy when young; yellow flowers are noted.',
    flowering: 'The species account gives a flowering period of November to January.',
    habitat: 'The account records subalpine mountain fynbos at 1,900–2,270 m as habitat.',
    range: 'The printed account lists the Groot Swartberg mountains as the regional range summary.',
    rangeScope: 'The printed regional range summary, abbreviated KM in the source; not a global distribution or a dated locality dataset.',
  },
  {
    id: '32VQH', name: 'Cyclopia bowieana Harv.', wfo: 'wfo-0000197634', source: '14286.0', morphRow: 5040, habitatRow: 28486,
    morphology: 'The account describes an erect, robust resprouting or reseeding shrub reaching 1.8 m. Its three-foliolate leaves have linear-oblanceolate leaflets that may be terete or somewhat flattened, usually strongly revolute margins and soft hairs; yellow flowers and bracts clasping the calyx base are noted.',
    flowering: 'The species account gives a flowering period of October to December.',
    habitat: 'The account records mountain fynbos on upper slopes at 1,220–1,830 m as habitat.',
    range: 'The printed account lists the Langeberg and Outeniqua mountains as the regional range summary.',
    rangeScope: 'The printed regional range summary, abbreviated LB and SE in the source; not a global distribution or a dated locality dataset.',
  },
]

const template = raw[0]
const generated = []
for (const item of species) {
  const dossier = structuredClone(template)
  dossier.colId = item.id
  dossier.scientificName = item.name
  dossier.identity.method = `COL26.8 ID ${item.id} is accepted species ${item.name} (source dataset 2304). The pinned WFO 2026-06 crosswalk maps this exact accepted COL name and authorship to exactly one accepted WFO species, ${item.wfo}. The SANBI e-Flora source row carries that WFO identifier; its individual Strelitzia 29 account spells the same binomial and authorship.`
  dossier.identity.scope = `COL26.8 nominal accepted species concept. SANBI evidence is the individual account printed under ${item.name.replace(/\s+(Kies|Harv\.|Hofmeyr & E\.Phillips|A\.L\.Schutte)$/, '')} on p. 549 of Strelitzia 29 (2012), scoped to that regional flora account; no equivalence to all populations or later concepts is asserted.`
  dossier.sources[0].url = `https://www.checklistbank.org/dataset/316115/taxon/${item.id}`
  dossier.sources[0].stableId = `COL26.8:${item.id}`
  dossier.sources[0].locator = `Accepted taxon usage ${item.id}; rank species; source dataset 2304`
  dossier.sources[1].url = `https://list.worldfloraonline.org/${item.wfo}-2026-06`
  dossier.sources[1].stableId = `wfo:${item.wfo}-2026-06`
  dossier.sources[1].locator = `Accepted species record ${item.wfo} and exact accepted-name/authorship mapping from COL ${item.id}`
  dossier.sources[2].stableId = `SANBI e-Flora 1.36 source identifier ${item.source}; description row ${item.morphRow}; WFO ${item.wfo}`
  dossier.sources[2].locator = `Description row ${item.morphRow}, type Morphology, source identifier ${item.source}; row ${item.habitatRow}, type Habitat, same source identifier`
  dossier.sources[3].locator = `Printed p. 549, individual ${item.name.replace(/\s+(Kies|Harv\.|Hofmeyr & E\.Phillips|A\.L\.Schutte)$/, '')} account; morphology, flowering period, habitat and regional range lines`
  dossier.sources[3].attribution = `Schutte, A.L. 2012. Fabaceae: Cyclopia Vent. In Manning & Goldblatt (eds), Strelitzia 29, p. 549. SANBI. Item license CC BY-SA 4.0.`
  dossier.facets.morphology.claims[0].text = item.morphology
  dossier.facets.morphology.claims[0].locator = `Printed p. 549, individual ${item.name.replace(/\s+(Kies|Harv\.|Hofmeyr & E\.Phillips|A\.L\.Schutte)$/, '')} account; SANBI e-Flora v1.36 Morphology row ${item.morphRow} (source identifier ${item.source})`
  dossier.facets.lifeHistory.claims[0].text = item.flowering
  dossier.facets.lifeHistory.claims[0].locator = `Printed p. 549, flowering months in the individual ${item.name.replace(/\s+(Kies|Harv\.|Hofmeyr & E\.Phillips|A\.L\.Schutte)$/, '')} account`
  dossier.facets.ecology.claims[0].text = item.habitat
  dossier.facets.ecology.claims[0].locator = `Printed p. 549, habitat line in the individual ${item.name.replace(/\s+(Kies|Harv\.|Hofmeyr & E\.Phillips|A\.L\.Schutte)$/, '')} account; SANBI e-Flora v1.36 Habitat row ${item.habitatRow} (source identifier ${item.source})`
  dossier.facets.distribution.claims[0].text = item.range
  dossier.facets.distribution.claims[0].placeTimeScope = item.rangeScope
  dossier.facets.distribution.claims[0].locator = `Printed p. 549, distribution line in the individual ${item.name.replace(/\s+(Kies|Harv\.|Hofmeyr & E\.Phillips|A\.L\.Schutte)$/, '')} account`
  generated.push(dossier)
}

const records = [...seeds, ...generated]
assert.equal(new Set(records.map(dossier => dossier.colId)).size, 5, 'Batch must contain five unique COL IDs')
writeFileSync(rawPath, `${JSON.stringify(records, null, 2)}\n`)
const decoded = Buffer.from(`${records.map(dossier => JSON.stringify(dossier)).join('\n')}\n`)
const compressed = brotliCompressSync(decoded, { params: { [constants.BROTLI_PARAM_QUALITY]: 11 } })
writeFileSync(shardPath, compressed)
const index = JSON.parse(readFileSync(indexPath, 'utf8'))
assert.equal(index.shards.some(shard => shard.path === shardPath), false, 'Shard already indexed')
index.shards = index.shards.filter(shard => shard.path !== shardPath)
index.shards.push({ path: shardPath, recordCount: records.length, decodedSha256: sha256(decoded), compressedSha256: sha256(compressed) })
index.recordCount = index.shards.reduce((sum, shard) => sum + shard.recordCount, 0)
writeFileSync(indexPath, `${JSON.stringify(index, null, 2)}\n`)
process.stdout.write(`${JSON.stringify({ shardPath, count: records.length, recordCount: index.recordCount, decodedSha256: sha256(decoded), compressedSha256: sha256(compressed) })}\n`)
