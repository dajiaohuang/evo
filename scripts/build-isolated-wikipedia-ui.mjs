import assert from 'node:assert/strict'
import { cpSync, existsSync, readFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { build } from '../node_modules/vite/dist/node/index.js'

// Run from the isolated UI checkout. The reviewed index is generated and
// verified separately from the expensive site build.
const root = resolve('D:/repo/evo/.git/evo-wikipedia-col26-8')
const out = resolve(root, 'ui-reviewed-build-2')
const index = resolve(root, 'higher-search-review-2')
assert.ok(!existsSync(out), 'Preserve existing build output')
const manifest = JSON.parse(readFileSync(resolve(index, 'manifest.json'), 'utf8'))
assert.equal(manifest.releaseAlias, 'COL26.8')
assert.equal(manifest.nodes, 245959)
await build({ configFile: 'vite.config.ts', publicDir: false, build: { outDir: out, emptyOutDir: false } })
cpSync(index, resolve(out, 'higher-search'), { recursive: true, errorOnExist: true, force: false })
console.log(JSON.stringify({ status: 'built', out, higherNodes: manifest.nodes, higherShards: Object.keys(manifest.files).length }))
