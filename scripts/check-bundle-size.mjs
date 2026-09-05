import { readFileSync, readdirSync, statSync } from 'node:fs'
import { join, relative } from 'node:path'
import { pagesDeploymentBudgetFailure } from './artifact-budget.mjs'

const root = process.cwd()
const dist = join(root, 'dist')

function filesBelow(directory) {
  return readdirSync(directory).flatMap((name) => {
    const path = join(directory, name)
    return statSync(path).isDirectory() ? filesBelow(path) : [path]
  })
}

const files = filesBelow(dist)
const totalBytes = files.reduce((sum, path) => sum + statSync(path).size, 0)
const runtimeDataBytes = files
  .filter((path) => relative(dist, path).replaceAll('\\', '/').startsWith('data/'))
  .reduce((sum, path) => sum + statSync(path).size, 0)
const publicationBytes = totalBytes - runtimeDataBytes
const staticPageRoots = ['taxa', 'events', 'stories', 'intervals', 'formations', 'localities', 'traits', 'references', 'media', 'datasets', 'methods', 'zh']
const staticPageFiles = files.filter((path) => {
  const pathFromDist = relative(dist, path).replaceAll('\\', '/')
  return pathFromDist.endsWith('.html') && staticPageRoots.some((rootName) => pathFromDist.startsWith(`${rootName}/`))
})
const staticPageBytes = staticPageFiles.reduce((sum, path) => sum + statSync(path).size, 0)
const initialChunks = files.filter((path) => /[/\\]assets[/\\]index-[^/\\]+\.js$/.test(path))
const oversizedInitial = initialChunks.filter((path) => statSync(path).size > 500 * 1024)
const serviceWorker = readFileSync(join(dist, 'sw.js'), 'utf8')
const fossilChunksPrecached = ['cambrian', 'ordovician', 'silurian', 'devonian', 'carboniferous', 'permian', 'triassic', 'jurassic', 'cretaceous', 'paleogene', 'neogene', 'quaternary']
  .filter((name) => new RegExp(`assets/${name}-[^"']+\\.js`).test(serviceWorker))

const failures = []
const { edition } = JSON.parse(readFileSync(join(dist, 'data/current.json'), 'utf8'))
const deploymentFailure = pagesDeploymentBudgetFailure(edition, totalBytes)
if (deploymentFailure) failures.push(deploymentFailure)
console.log(`Checking ${edition ?? 'unspecified'} artifact; Pages total deployment limit ${edition === 'full-web' ? 'not applicable' : '650 MiB'}.`)
if (publicationBytes > 100 * 1024 * 1024) failures.push(`application and static publication are ${(publicationBytes / 1024 / 1024).toFixed(2)} MiB excluding runtime data; budget is 100 MiB`)
if (staticPageBytes > 80 * 1024 * 1024) failures.push(`static knowledge pages are ${(staticPageBytes / 1024 / 1024).toFixed(2)} MiB; publication budget is 80 MiB`)
for (const path of oversizedInitial) failures.push(`${relative(root, path)} is ${(statSync(path).size / 1024).toFixed(1)} KiB; initial JS budget is 500 KiB`)
if (fossilChunksPrecached.length) failures.push(`service worker precaches lazy fossil chunks: ${fossilChunksPrecached.join(', ')}`)

if (failures.length) {
  console.error('Bundle budget failed:')
  for (const failure of failures) console.error(`- ${failure}`)
  process.exitCode = 1
} else {
  console.log(`Bundle budget passed: ${(totalBytes / 1024 / 1024).toFixed(2)} MiB total, ${(runtimeDataBytes / 1024 / 1024).toFixed(2)} MiB lazy runtime data, ${(staticPageBytes / 1024 / 1024).toFixed(2)} MiB static HTML, ${initialChunks.length} initial JS chunk(s).`)
}
