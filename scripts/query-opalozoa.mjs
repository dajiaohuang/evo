import { DatabaseSync } from 'node:sqlite'
import { createReadStream, readFileSync } from 'node:fs'
import { createGunzip } from 'node:zlib'
import { createInterface } from 'node:readline'
import { join } from 'node:path'

const database = new DatabaseSync('D:/repo/itisSqlite082626/itisSqlite082626/ITIS.sqlite', { readOnly: true })
const rows = database.prepare("SELECT u.tsn,l.completename AS name,r.rank_name,u.name_usage,u.parent_tsn FROM taxonomic_units u JOIN longnames l ON l.tsn=u.tsn JOIN taxon_unit_types r ON r.kingdom_id=u.kingdom_id AND r.rank_id=u.rank_id WHERE lower(trim(l.completename)) IN ('opalinata','opalina','opalineidae','opalinidae') ORDER BY u.tsn").all()
console.log(JSON.stringify(rows, null, 2))
const registry = 'D:/repo/repostew/evo-itis-small-phyla-native-rc68/data/catalogue-of-life/releases/2026-08-20/registry'
const manifest = JSON.parse(readFileSync(join(registry, 'manifest.json')))
const matches = []
for (const file of manifest.hierarchy.nodes.files) {
  const lines = createInterface({ input: createReadStream(join(registry, ...file.path.split('/'))).pipe(createGunzip()), crlfDelay: Infinity })
  for await (const line of lines) {
    if (!line) continue
    const record = JSON.parse(line)
    if (/^Opalo(?:zoa|nata)$/u.test(record.scientificName)) matches.push({ id: record.id, scientificName: record.scientificName, rank: record.rank, status: record.status, parentId: record.parentId })
  }
}
console.log(JSON.stringify({ col: matches }, null, 2))
database.close()
