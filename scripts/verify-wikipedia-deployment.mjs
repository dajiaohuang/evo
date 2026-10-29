import assert from 'node:assert/strict'
import { createHash } from 'node:crypto'
import { readFileSync, writeFileSync } from 'node:fs'
const base = new URL(process.argv[2])
const artifact = JSON.parse(readFileSync('deployment-artifact.json', 'utf8'))
const checks = []
async function read(path, status = 200) {
  const response = await fetch(new URL(path, base), { signal: AbortSignal.timeout(30000) })
  assert.equal(response.status, status, path + ' HTTP status')
  checks.push(path + ' HTTP ' + status)
  return response
}
const release = await (await read('release.json')).json()
assert.equal(release.deploymentCommitSha, artifact.sourceCommit)
const current = await (await read('data/current.json')).json()
assert.equal(current.datasetVersion, artifact.datasetVersion)
assert.equal(current.edition, 'full-web')
const mappingBytes = Buffer.from(await (await read('wikipedia/mapping.json')).arrayBuffer())
assert.equal(createHash('sha256').update(mappingBytes).digest('hex'), artifact.overlay.mappingSha256)
const mapping = JSON.parse(mappingBytes)
assert.equal(mapping.checkedNames, mapping.uniqueNames)
assert.deepEqual(mapping.counts, artifact.overlay.counts)
const paused = await (await read('nodes/manifest.json')).json()
assert.equal(paused.status, 'paused')
await read('nodes/data/0000.json.gz', 404)
for (const path of ['nodes/', 'taxa/perissodactyla/', 'zh/taxa/perissodactyla/']) {
  const html = await (await read(path)).text()
  assert.match(html, /temporarily offline|暂时下线/)
  assert.ok(!html.includes('class="reader-article"'))
}
const entry = await (await read('')).text()
const scripts = [...entry.matchAll(/<script[^>]+src="([^"]+)"/g)].map(match => match[1])
assert.ok(scripts.length)
for (const script of scripts) {
  const response = await fetch(new URL(script, base), { signal: AbortSignal.timeout(30000) })
  assert.equal(response.status, 200)
}
const result = { status: 'passed', checkedAt: new Date().toISOString(), base: base.href, sourceCommit: artifact.sourceCommit, mappingSha256: artifact.overlay.mappingSha256, names: mapping.uniqueNames, counts: mapping.counts, checks }
if (process.argv[3]) writeFileSync(process.argv[3], JSON.stringify(result, null, 2) + '\n')
console.log(JSON.stringify(result))
