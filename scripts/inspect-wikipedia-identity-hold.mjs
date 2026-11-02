import { DatabaseSync } from 'node:sqlite'
const [node, url, item] = process.argv.slice(2)
if (!node || !url) throw new Error('Provide node and URL')
const db = new DatabaseSync('.git/evo-wikipedia-col26-8/inventory.sqlite', { readOnly: true })
console.log(JSON.stringify({ node, url, held: Boolean(db.prepare('SELECT 1 FROM candidate_identity_held_urls WHERE node_id=? AND url=?').get(node, url)), itemHeld: item ? Boolean(db.prepare('SELECT 1 FROM ncbi_candidate_identity_holds WHERE node_id=? AND item=?').get(node, item)) : null }))
db.close()
