import fs from 'node:fs'
import crypto from 'node:crypto'
const sources = [
  { id: 21159229, version: 3, slug: 'amphibian-morphology-2023' },
  { id: 26075686, version: 4, slug: 'caeciliantraits-2025' },
  { id: 28069802, version: 4, slug: 'tadpoletraits-2025' },
]
for (const source of sources) {
  const dir = `data/sources/snapshots/${source.slug}-2026-10-02`
  fs.mkdirSync(dir, { recursive: true })
  const url = `https://api.figshare.com/v2/articles/${source.id}/versions/${source.version}`
  const response = await fetch(url, { signal: AbortSignal.timeout(30000) })
  if (!response.ok) throw new Error(`${url}: ${response.status}`)
  const bytes = Buffer.from(await response.arrayBuffer())
  const meta = JSON.parse(bytes)
  if (meta.version !== source.version || meta.license?.name !== 'CC BY 4.0') throw new Error(`Unexpected version or rights: ${source.slug}`)
  fs.writeFileSync(`${dir}/figshare-metadata.json`, bytes)
  const entries = [{ file: 'figshare-metadata.json', url, sha256: crypto.createHash('sha256').update(bytes).digest('hex') }]
  for (const file of meta.files) {
    if (file.name.includes('/') || file.name.includes('\\') || file.name.includes('..')) throw new Error('Unsafe source filename')
    const download = await fetch(file.download_url, { signal: AbortSignal.timeout(30000) })
    if (!download.ok) throw new Error(`File HTTP ${download.status}`)
    const raw = Buffer.from(await download.arrayBuffer())
    if (raw.length !== file.size || crypto.createHash('md5').update(raw).digest('hex') !== file.computed_md5) throw new Error(`Checksum mismatch ${file.name}`)
    fs.writeFileSync(`${dir}/${file.name}`, raw)
    entries.push({ file: file.name, url: file.download_url, sha256: crypto.createHash('sha256').update(raw).digest('hex'), md5: file.computed_md5 })
  }
  fs.writeFileSync(`${dir}/manifest.json`, JSON.stringify({ retrievedAt: new Date().toISOString(), title: meta.title, doi: meta.doi, version: meta.version, license: meta.license, entries }, null, 2) + '\n')
  console.log(JSON.stringify({ slug: source.slug, doi: meta.doi, files: meta.files.map(x => x.name) }))
}
