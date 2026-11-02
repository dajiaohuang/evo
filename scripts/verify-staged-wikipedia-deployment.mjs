import assert from 'node:assert/strict'
import { createHash } from 'node:crypto'
import { execFileSync } from 'node:child_process'
import { readFileSync } from 'node:fs'
import { join } from 'node:path'

const deployment = 'dpl_BnYoyGxmb54o8F7o4BoguyesQ9bC'
const root = 'D:/repo/evo/.git/evo-wikipedia-col26-8/'
const hash = bytes => createHash('sha256').update(bytes).digest('hex')
const get = path => execFileSync('rtk', ['proxy', 'vercel', 'curl', path, '--deployment', deployment, '--scope', 'dajiaohuangdjh', '--silent', '--show-error', '--fail'], { cwd: join(root, 'ui-overlay-publication-2/vercel-source'), maxBuffer: 8 * 1024 * 1024 })
const localIndex = readFileSync(join(root, 'ui-reviewed-build-2/higher-search/manifest.json'))
const localLinks = readFileSync(join(root, 'links-reviewed-20261031-c/manifest.json'))
const remoteIndex = get('/evo/higher-search/manifest.json'), remoteLinks = get('/evo/wikipedia/col/manifest.json')
assert.equal(hash(remoteIndex), hash(localIndex), 'Higher search manifest differs')
assert.equal(hash(remoteLinks), hash(localLinks), 'Wikipedia link manifest differs')
const index = JSON.parse(localIndex), links = JSON.parse(localLinks)
for (const prefix of ['aa', 'za']) {
  const file = index.files[prefix]
  assert.equal(hash(get('/evo/higher-search/' + file.path)), file.sha256, `Higher shard ${prefix} differs`)
}
const prefix = hash(Buffer.from('CRXVS')).slice(0, 2), file = links.shards[prefix]
assert.equal(hash(get('/evo/wikipedia/col/' + file.path)), file.sha256, `Wikipedia shard ${prefix} differs`)
console.log(JSON.stringify({ status: 'passed', deployment, searchNodes: index.nodes, searchManifestSha256: hash(remoteIndex), linkManifestSha256: hash(remoteLinks), checkedSearchPrefixes: ['aa', 'za'], checkedLinkPrefix: prefix }))
