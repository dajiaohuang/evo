import { DatabaseSync } from 'node:sqlite'
import { readFileSync } from 'node:fs'

const db = new DatabaseSync('.git/evo-wikipedia-col26-8/inventory.sqlite', { readOnly: true })
const tables = new Set(db.prepare("SELECT name FROM sqlite_master WHERE type='table'").all().map(row => row.name))
const result = {}
for (const name of ['names', 'synonym_wikidata_lookup', 'label_wikidata_lookup', 'alias_wikidata_lookup', 'abbreviated_wikidata_lookup', 'project_title_scans']) {
  if (!tables.has(name)) { result[name] = null; continue }
  const column = name === 'project_title_scans' ? 'state' : 'status'
  result[name] = db.prepare(`SELECT ${column} AS state, COUNT(*) AS count FROM ${name} GROUP BY ${column}`).all()
}
const manifest = JSON.parse(readFileSync('.git/evo-wikipedia-col26-8/published-data-reviewed-20261031/manifest.json', 'utf8'))
result.publishedStats = manifest.stats
const projects = JSON.parse(readFileSync('.git/evo-wikipedia-col26-8/sources/wikipedia-projects.json', 'utf8')).projects
const getMeta = db.prepare('SELECT value FROM meta WHERE key=?')
result.projectCount = projects.length
result.missingTitleIndexes = projects.filter(({ locale }) => locale !== 'en' && !getMeta.get(`alternate_titles_${locale}_sha256`)?.value).map(({ locale }) => locale)
console.log(JSON.stringify(result))
db.close()
