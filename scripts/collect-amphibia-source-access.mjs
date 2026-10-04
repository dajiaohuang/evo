import fs from 'node:fs'
import crypto from 'node:crypto'
const dir = 'data/sources/snapshots/amphibia-source-access-2026-10-02'
fs.mkdirSync(dir, { recursive: true })
const urls = {
  'amphibiaweb-datause': 'https://amphibiaweb.org/data/datause.html',
  'amphibiaweb-access': 'https://amphibiaweb.org/data/access.html',
  'amphibiaweb-traits': 'https://amphibiaweb.org/amphibian/trait_dbs.html',
  'pbdb-taxa-doc': 'https://paleobiodb.org/data1.2/taxa/list_doc.html',
}
const results = []
for (const [id, url] of Object.entries(urls)) {
  const response = await fetch(url, { signal: AbortSignal.timeout(30000) })
  if (!response.ok) throw new Error(`${url}: ${response.status}`)
  const raw = Buffer.from(await response.arrayBuffer())
  fs.writeFileSync(`${dir}/${id}.html`, raw)
  results.push({ id, url, fetchedAt: new Date().toISOString(), sha256: crypto.createHash('sha256').update(raw).digest('hex') })
  const text = raw.toString().replace(/<script[\s\S]*?<\/script>/g, '').replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ')
  console.log(id, text.slice(id.startsWith('pbdb') ? text.indexOf('Additional information') : text.indexOf('About our Data') + 15, id.startsWith('pbdb') ? undefined : text.indexOf('About our Data') + 15000))
}
fs.writeFileSync(`${dir}/manifest.json`, JSON.stringify(results, null, 2) + '\n')
