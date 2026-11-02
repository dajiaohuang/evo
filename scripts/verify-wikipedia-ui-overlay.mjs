import assert from 'node:assert/strict'
import { createHash } from 'node:crypto'
import { existsSync, readFileSync } from 'node:fs'
import { join } from 'node:path'

const root = '.git/evo-wikipedia-col26-8/ui-overlay-publication-2/'
const original = join(root, 'original/evo'), staged = join(root, 'staged/evo')
const hash = path => createHash('sha256').update(readFileSync(path)).digest('hex')
for (const file of ['node-map/manifest.json', 'node-map/ledger.json', 'nodes/manifest.json', 'wikipedia/mapping.json']) assert.equal(hash(join(original, file)), hash(join(staged, file)), file)
assert.equal(JSON.parse(readFileSync(join(staged, 'nodes/manifest.json'))).status, 'paused')
assert.ok(!existsSync(join(staged, 'wikipedia/abstracts.json')))
const descriptor = JSON.parse(readFileSync(join(root, 'deployment-artifact.json'))), receipt = JSON.parse(readFileSync(join(root, 'receipt.json')))
const release = JSON.parse(readFileSync(join(staged, 'release.json')))
assert.equal(release.deploymentCommitSha, descriptor.sourceCommit)
assert.equal(receipt.sourceCommit, descriptor.sourceCommit)
assert.equal(hash(join(root, 'evo-ui-overlay.tar.gz')), descriptor.overlay.sha256)
assert.equal(receipt.sha256, descriptor.overlay.sha256)
const indexRoot = join(staged, 'higher-search'), index = JSON.parse(readFileSync(join(indexRoot, 'manifest.json')))
assert.equal(index.releaseAlias, 'COL26.8'); assert.equal(index.nodes, 245959)
for (const [prefix, file] of Object.entries(index.files)) {
  assert.equal(file.path, `${prefix}-${file.sha256.slice(0, 16)}.json.gz`)
  assert.equal(hash(join(indexRoot, file.path)), file.sha256)
}
console.log(JSON.stringify({ status: 'passed', sourceCommit: descriptor.sourceCommit, dataCommit: receipt.dataCommit, overlaySha256: receipt.sha256, higherNodes: index.nodes, higherShards: Object.keys(index.files).length, abstracts: 0 }))
