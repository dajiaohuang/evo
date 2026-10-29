import assert from 'node:assert/strict'
import { createHash } from 'node:crypto'
import { existsSync, mkdirSync, writeFileSync } from 'node:fs'
import { resolve } from 'node:path'

const out = resolve('.git/evo-wikipedia-col26-8/sources/wikipedia-projects.json')
assert.ok(!existsSync(out), 'Preserve the existing project inventory')
const url = 'https://meta.wikimedia.org/w/api.php?action=sitematrix&format=json&formatversion=2&smtype=language&smlimit=max'
const response = await fetch(url, { signal: AbortSignal.timeout(30000), headers: { 'User-Agent': 'EvoAtlas/0.21 (https://github.com/dajiaohuang/evo; Wikipedia project inventory)' } })
if (!response.ok) throw new Error(`Wikimedia project inventory HTTP ${response.status}`)
const bytes = Buffer.from(await response.arrayBuffer())
const body = JSON.parse(bytes)
assert.ok(body.sitematrix && !body.error && !body.continue)
const projects = []
for (const language of Object.values(body.sitematrix)) {
  if (!language || typeof language !== 'object' || !Array.isArray(language.site)) continue
  for (const site of language.site) {
    if (site.code !== 'wiki' || site.private || site.fishbowl) continue
    const url = new URL(site.url)
    if (url.protocol !== 'https:' || !/^[a-z0-9-]+\.wikipedia\.org$/.test(url.hostname) || !/^[a-z0-9_]+wiki$/.test(site.dbname)) throw new Error('Unexpected Wikimedia project identity')
    projects.push({ locale: url.hostname.slice(0, -'.wikipedia.org'.length), dbname: site.dbname, closed: Boolean(site.closed) })
  }
}
projects.sort((a,b) => a.locale.localeCompare(b.locale))
assert.equal(new Set(projects.map(project => project.locale)).size, projects.length)
assert.ok(projects.length > 100)
mkdirSync(resolve('.git/evo-wikipedia-col26-8/sources'), { recursive: true })
writeFileSync(out, JSON.stringify({ schemaVersion: 1, source: url, fetchedAt: new Date().toISOString(), sourceSha256: createHash('sha256').update(bytes).digest('hex'), projects }, null, 2) + '\n', { flag: 'wx' })
console.log(JSON.stringify({ projects: projects.length, closed: projects.filter(project => project.closed).length, out }))
