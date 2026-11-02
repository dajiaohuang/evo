import { DatabaseSync } from 'node:sqlite'
const db = new DatabaseSync('.git/evo-wikipedia-col26-8/inventory.sqlite', { readOnly: true })
const counts = db.prepare('SELECT status, COUNT(*) AS n FROM label_wikidata_lookup GROUP BY status').all()
let namesWithLinks = 0, articles = 0
for (const row of db.prepare("SELECT name,candidates_json FROM label_wikidata_lookup WHERE status='queried'").iterate()) {
  const candidates = JSON.parse(row.candidates_json)
  const links = candidates.reduce((n, candidate) => n + candidate.articles.length, 0)
  if (links) { namesWithLinks++; console.log(JSON.stringify({ name: row.name, candidates: candidates.filter(candidate => candidate.articles.length) })) }
  articles += links
}
console.log(JSON.stringify({ counts, namesWithLinks, articles }))
db.close()
