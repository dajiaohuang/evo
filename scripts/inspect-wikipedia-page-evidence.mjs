import { DatabaseSync } from 'node:sqlite'

const [url, item] = process.argv.slice(2)
if (!url || !/^https:\/\/www\.wikidata\.org\/entity\/Q\d+$/.test(item ?? '')) throw new Error('Provide an article URL and Wikidata entity URL')
const db = new DatabaseSync('C:/Users/dajiaohuang/.codex/evo-link-sources/full-page-audit.sqlite', { readOnly: true })
const keyed = db.prepare('SELECT * FROM jobs WHERE url=? AND item=?').get(url, item) ?? null
const unkeyed = db.prepare('SELECT * FROM unkeyed_pages WHERE url=?').get(url) ?? null
console.log(JSON.stringify({ url, item, keyed, unkeyed }))
db.close()
