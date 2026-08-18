import { execFileSync } from 'node:child_process'
import { mkdirSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'
import { readJson, rootDir } from './data-lib.mjs'

const packageMetadata = readJson('package.json')
const datasetManifest = readJson('data/manifest.json')

function localCommitSha() {
  return execFileSync('git', ['rev-parse', 'HEAD'], {
    cwd: rootDir,
    encoding: 'utf8',
  }).trim()
}

const deploymentCommitSha = process.env.DEPLOYMENT_COMMIT_SHA
  || process.env.GITHUB_SHA
  || localCommitSha()

if (!/^[0-9a-f]{40}$/i.test(deploymentCommitSha)) {
  throw new Error('Deployment commit SHA must be a full 40-character Git SHA.')
}

const release = {
  appVersion: packageMetadata.version,
  datasetVersion: datasetManifest.datasetVersion,
  deploymentCommitSha: deploymentCommitSha.toLowerCase(),
  builtAt: process.env.BUILD_TIMESTAMP || new Date().toISOString(),
  workflowRunId: process.env.WORKFLOW_RUN_ID || process.env.GITHUB_RUN_ID || null,
}

const outputDirectory = join(rootDir, 'public')
mkdirSync(outputDirectory, { recursive: true })
writeFileSync(join(outputDirectory, 'release.json'), `${JSON.stringify(release, null, 2)}\n`)
console.log(`Bound release metadata to ${release.deploymentCommitSha}.`)
