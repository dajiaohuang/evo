import assert from 'node:assert/strict'
import { copyFileSync, existsSync, mkdirSync, readFileSync } from 'node:fs'
import { dirname, join, resolve } from 'node:path'

const root = resolve('.git/evo-wikipedia-col26-8')
const old = join(root, 'ui-overlay-publication-1/vercel-source')
const next = join(root, 'ui-overlay-publication-2/vercel-source')
assert.ok(!existsSync(next), 'Choose a new deployment source path')
const project = JSON.parse(readFileSync(join(old, '.vercel/project.json'), 'utf8'))
assert.equal(project.projectId, 'prj_RU1GF7YN46JN7w9Qg3qzfHZZ5MI1')
const descriptor = JSON.parse(readFileSync(join(root, 'ui-overlay-publication-2/deployment-artifact.json'), 'utf8'))
assert.equal(descriptor.sourceCommit, '738cc6eac03e33a5846306ad810903c78f52db9d')
for (const path of ['.vercel/project.json', '.vercelignore', 'package.json', 'vercel.json', 'scripts/deploy-static-artifact.mjs', 'scripts/publication-scope.mjs']) {
  mkdirSync(dirname(join(next, path)), { recursive: true })
  copyFileSync(join(old, path), join(next, path))
}
copyFileSync(join(root, 'ui-overlay-publication-2/deployment-artifact.json'), join(next, 'deployment-artifact.json'))
console.log(JSON.stringify({ status: 'prepared', source: next, projectId: project.projectId, sourceCommit: descriptor.sourceCommit }))
