import { existsSync, readFileSync, readdirSync, statSync } from 'node:fs'
import { gunzipSync } from 'node:zlib'
import { join, relative } from 'node:path'
import { rootDir } from './data-lib.mjs'

const distRoot = join(rootDir, 'dist')
const dataRoot = join(distRoot, 'data')
const failures = []
const previewDefinition = JSON.parse(readFileSync(join(rootDir, 'data', 'pages-preview.json'), 'utf8'))
const expectedPackages = new Set(previewDefinition.packageIds)
const expectedTaxa = new Set(previewDefinition.taxonIds)
const expectedStories = new Set(previewDefinition.storyIds)
const expectedEvents = new Set(previewDefinition.eventIds)

function readJson(relativePath) {
  const bytes = readFileSync(join(dataRoot, ...relativePath.split('/')))
  return relativePath.endsWith('.gz') ? JSON.parse(gunzipSync(bytes).toString('utf8')) : JSON.parse(bytes.toString('utf8'))
}

function check(condition, message) {
  if (!condition) failures.push(message)
}

function filesBelow(directory) {
  if (!existsSync(directory)) return []
  return readdirSync(directory).flatMap((name) => {
    const path = join(directory, name)
    return statSync(path).isDirectory() ? filesBelow(path) : [path]
  })
}

check(existsSync(join(dataRoot, 'current.json')), 'Pages preview current manifest is missing')
if (existsSync(join(dataRoot, 'current.json'))) {
  const current = JSON.parse(readFileSync(join(dataRoot, 'current.json'), 'utf8'))
  check(current.edition === 'github-pages-preview', `current.edition is ${current.edition}, expected github-pages-preview`)
  check(current.deliveryProfile === 'web-light', `Pages preview delivery profile is ${current.deliveryProfile}`)
  check(current.previewScope?.catalogue === 'omitted', 'Pages preview does not declare the Catalogue of Life registry omission')
  check(current.previewScope?.paleotopography === 'web-preview-0.3-degree-source-grids', 'Pages preview does not declare the 0.3-degree paleotopography boundary')
  check(current.packages?.count === expectedPackages.size, `Pages preview contains ${current.packages?.count ?? 'no'} package manifests; expected ${expectedPackages.size}`)
  check(new Set(Object.keys(current.packages?.manifests ?? {})).size === expectedPackages.size
    && [...expectedPackages].every((id) => current.packages.manifests[id]), 'Pages preview package manifest set is not the selected set')

  const entities = readJson(current.core.entities.url)
  check(entities.every((entity) => expectedTaxa.has(entity.id)), 'Pages preview core entity index contains an out-of-scope taxon')
  check(entities.length > 0, 'Pages preview core entity index is empty')
  const stories = readJson(current.core.search.url).filter((entry) => entry.kind === 'story')
  check(stories.every((story) => expectedStories.has(story.id)), 'Pages preview search index contains an out-of-scope story')
  const events = readJson(current.core.search.url).filter((entry) => entry.kind === 'event')
  check(events.every((event) => expectedEvents.has(event.id)), 'Pages preview search index contains an out-of-scope event')

  const occurrenceManifest = readJson(current.occurrences.manifest.url)
  check(Object.keys(occurrenceManifest.packages ?? {}).every((id) => expectedPackages.has(id)), 'Pages preview occurrence manifest contains an out-of-scope package')
  check(current.occurrences.totalRecords > 0, 'Pages preview occurrence snapshot is empty')

  const maps = readJson(current.maps.manifest.url)
  check(maps.paleotopography?.frames?.length === 109, `Pages preview paleotopography frame count is ${maps.paleotopography?.frames?.length ?? 'missing'}, expected 109`)
  check(maps.paleotopography?.delivery?.profile === 'web-preview', 'Pages preview paleotopography delivery profile is not web-preview')

  const releaseRoot = join(dataRoot, ...current.releaseBase.split('/').filter(Boolean))
  const releaseFiles = filesBelow(releaseRoot).map((path) => relative(releaseRoot, path).replaceAll('\\', '/'))
  check(releaseFiles.every((path) => !/^catalogue\/(?!manifest\.json$)/.test(path)), 'Pages preview contains Catalogue of Life shards or resource packs')
  check(!releaseFiles.some((path) => path.startsWith('downloads/')), 'Pages preview contains native download archives')
}

const forbiddenStaticRoots = ['intervals', 'formations', 'localities', 'traits', 'references', 'media', 'datasets']
for (const root of forbiddenStaticRoots) {
  check(!existsSync(join(distRoot, root)), `Pages preview generated forbidden static route root: ${root}/`)
  check(!existsSync(join(distRoot, 'zh', root)), `Pages preview generated forbidden static route root: zh/${root}/`)
}
check(existsSync(join(distRoot, 'methods', 'index.html')), 'Pages preview methods page is missing')
check(existsSync(join(distRoot, 'taxa', 'perissodactyla', 'index.html')), 'Pages preview flagship taxon page is missing')
check(existsSync(join(distRoot, 'events', 'dinosaur-radiation', 'index.html')), 'Pages preview selected event page is missing')
check(existsSync(join(distRoot, 'stories', 'rise-and-fall-perissodactyls', 'index.html')), 'Pages preview selected story page is missing')

if (failures.length) {
  console.error(`Pages preview smoke failed with ${failures.length} issue(s):`)
  for (const failure of failures) console.error(`- ${failure}`)
  process.exitCode = 1
} else {
  console.log('Pages preview smoke passed: selected package/entity/story/event scope, omitted nomenclatural shards, retained 109 paleotopography frames, and static route boundary verified.')
}
