import assert from 'node:assert/strict'
import { mkdirSync, rmSync, writeFileSync } from 'node:fs'
import { resolve, relative } from 'node:path'

// Only remove the disposable deployment projection. Authoring and public/nodes
// remain intact, and are deliberately excluded from this published edition.
const root = resolve('dist')
const target = resolve(root, 'nodes')
assert.equal(relative(root, target), 'nodes')
rmSync(target, { recursive: true, force: true })
mkdirSync(target, { recursive: true })
writeFileSync(resolve(target, 'index.html'), `<!doctype html><html lang="zh"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="robots" content="noindex,follow"><title>节点页面暂时下线 · Evo Atlas</title><link rel="stylesheet" href="../static.css"></head><body><main class="page"><h1>节点页面暂时下线</h1><p>稿件保留。请在物种树中点击名称，查看 Wikipedia 浮窗。</p><p>Original node pages are temporarily offline. Use the tree to preview Wikipedia.</p><a class="button" href="../#/home?view=tree">打开物种树 / Open species tree</a></main></body></html>`)
writeFileSync(resolve(target, 'manifest.json'), JSON.stringify({ schemaVersion: 1, status: 'paused', replacement: 'wikipedia', originalContentPublished: false }, null, 2) + '\n')
console.log('Retired published node accounts; local sources preserved.')
