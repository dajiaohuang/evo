import { createHash } from 'node:crypto'
import { copyFileSync, existsSync, mkdirSync, readFileSync, readdirSync, statSync } from 'node:fs'
import { dirname, join, resolve, sep } from 'node:path'
import { loadEnv } from 'vite'
import { rootDir } from './data-lib.mjs'

const outputRoot = resolve(rootDir, 'dist-mobile')
const expectedOutputRoot = join(rootDir, 'dist-mobile')
if (outputRoot !== expectedOutputRoot || !existsSync(join(outputRoot, 'index.html'))) {
  throw new Error(`Mobile build output is missing or unsafe: ${outputRoot}`)
}

const shellResources = ['favicon.svg', 'release.json']
for (const name of shellResources) {
  const source = join(rootDir, 'public', name)
  if (!existsSync(source)) throw new Error(`Required mobile shell resource is missing: public/${name}`)
  const destination = join(outputRoot, name)
  mkdirSync(dirname(destination), { recursive: true })
  copyFileSync(source, destination)
}

const fileEnvironment = loadEnv('mobile', rootDir, 'VITE_')
const processEnvironment = Object.fromEntries(
  Object.entries(process.env).filter(([name, value]) => name.startsWith('VITE_') && value !== undefined),
)
const mobileEnvironment = { ...fileEnvironment, ...processEnvironment }
const dataRoot = mobileEnvironment.VITE_DATA_ROOT
if (mobileEnvironment.VITE_NATIVE_APP !== 'true' || !/^\.\/data\/?$/.test(dataRoot ?? '')) {
  throw new Error('Mobile build must use native mode and the bundled ./data/ VITE_DATA_ROOT')
}

function filesBelow(directory) {
  return readdirSync(directory).flatMap((name) => {
    const path = join(directory, name)
    return statSync(path).isDirectory() ? filesBelow(path) : [path]
  })
}

function sha256(path) {
  return createHash('sha256').update(readFileSync(path)).digest('hex')
}

const sourceDataRoot = resolve(rootDir, 'public/data')
const expectedSourceDataRoot = join(rootDir, 'public', 'data')
if (sourceDataRoot !== expectedSourceDataRoot || !existsSync(join(sourceDataRoot, 'current.json'))) {
  throw new Error(`Generated mobile data is missing or unsafe: ${sourceDataRoot}`)
}

const current = JSON.parse(readFileSync(join(sourceDataRoot, 'current.json'), 'utf8'))
if (current.deliveryProfile !== 'native-full') {
  throw new Error('Mobile build must use the native-full data delivery profile')
}
const releases = JSON.parse(readFileSync(join(sourceDataRoot, 'releases.json'), 'utf8'))
const release = releases.releases?.find((entry) => entry.datasetVersion === current.datasetVersion)
if (!release || release.releaseBase !== current.releaseBase || !release.filesIndex) {
  throw new Error(`Generated release inventory does not contain current dataset ${current.datasetVersion}`)
}
const releaseFiles = JSON.parse(readFileSync(join(sourceDataRoot, ...release.filesIndex.split('/')), 'utf8'))
if (releaseFiles.datasetVersion !== current.datasetVersion || !Array.isArray(releaseFiles.files)) {
  throw new Error(`Release file inventory does not belong to dataset ${current.datasetVersion}`)
}
const maps = JSON.parse(readFileSync(join(sourceDataRoot, ...current.maps.manifest.url.split('/')), 'utf8'))
if (maps.paleotopography?.delivery?.profile !== 'native-full'
  || maps.paleotopography?.delivery?.resolutionDegrees !== 0.1
  || maps.paleotopography?.delivery?.gridBytes !== 168418483
  || maps.paleotopography?.frames?.length !== 109) {
  throw new Error('Mobile build must stage all 109 full-resolution PaleoDEM grids')
}
const birdsManifestFile = current.packages?.manifests?.['crocodylomorphs-birds']
if (!birdsManifestFile?.url) throw new Error('Mobile build is missing the birds package manifest')
const birdsManifest = JSON.parse(readFileSync(join(sourceDataRoot, ...birdsManifestFile.url.split('/')), 'utf8'))
const avilist = birdsManifest.nomenclatureCollections?.find((collection) => collection.id === 'avilist-v2025b-avibase-concepts')
if (!avilist || avilist.delivery?.profile !== 'native-full' || avilist.delivery?.completeRows !== true
  || avilist.files?.length !== 3 || avilist.upstreamOnlyFiles?.length !== 1
  || avilist.delivery?.publishedFileCount !== 4 || avilist.delivery?.canonicalFileCount !== 4
  || avilist.files.reduce((sum, file) => sum + file.records, 0) !== 11071
  || avilist.upstreamOnlyFiles.reduce((sum, file) => sum + file.records, 0) !== 609) {
  throw new Error('Mobile build must stage the complete AviList birds authority collection')
}
const amphibiaManifestFile = current.packages?.manifests?.amphibia
if (!amphibiaManifestFile?.url) throw new Error('Mobile build is missing the Amphibia package manifest')
const amphibiaManifest = JSON.parse(readFileSync(join(sourceDataRoot, ...amphibiaManifestFile.url.split('/')), 'utf8'))
const itisAmphibia = amphibiaManifest.nomenclatureCollections?.find((collection) => collection.id === 'itis-2026-08-26-tsn-crosswalk')
if (!itisAmphibia || itisAmphibia.provider !== 'Integrated Taxonomic Information System'
  || itisAmphibia.delivery?.profile !== 'native-full' || itisAmphibia.delivery?.completeRows !== true
  || itisAmphibia.files?.length !== 7 || itisAmphibia.upstreamOnlyFiles?.length !== 1
  || itisAmphibia.delivery?.publishedFileCount !== 8 || itisAmphibia.delivery?.canonicalFileCount !== 8
  || itisAmphibia.files.reduce((sum, file) => sum + file.records, 0) !== 8923
  || itisAmphibia.upstreamOnlyFiles.reduce((sum, file) => sum + file.records, 0) !== 8) {
  throw new Error('Mobile build must stage the complete ITIS Amphibia authority collection')
}
const catalogueManifest = JSON.parse(readFileSync(join(sourceDataRoot, ...current.catalogue.manifest.url.split('/')), 'utf8'))
const otherAnimalsDescriptor = catalogueManifest.resourcePacks?.manifests?.['other-animals']
if (!otherAnimalsDescriptor?.url) throw new Error('Mobile build is missing the other-animals resource-pack manifest')
const otherAnimalsManifest = JSON.parse(readFileSync(join(sourceDataRoot, ...otherAnimalsDescriptor.url.split('/')), 'utf8'))
const expectedOtherAnimalAuthorities = {
  'itis-platyhelminthes-tsn-crosswalk': { files: 15, records: 28252 },
  'itis-rotifera-tsn-crosswalk': { files: 3, records: 2662 },
  'itis-bryozoa-tsn-crosswalk': { files: 3, records: 20754 },
  'itis-nemertea-tsn-crosswalk': { files: 2, records: 1416 },
  'itis-tunicata-cephalochordata-tsn-crosswalk': { files: 2, records: 3242 },
  'itis-acanthocephala-tsn-crosswalk': { files: 3, records: 1330 },
  'itis-entoprocta-tsn-crosswalk': { files: 2, records: 171 },
  'itis-tardigrada-tsn-crosswalk': { files: 3, records: 1461 },
  'itis-chaetognatha-tsn-crosswalk': { files: 2, records: 156 },
  'itis-ctenophora-tsn-crosswalk': { files: 2, records: 204 },
  'itis-kinorhyncha-tsn-crosswalk': { files: 2, records: 420 },
  'itis-gastrotricha-tsn-crosswalk': { files: 2, records: 997 },
  'itis-priapulida-tsn-crosswalk': { files: 1, records: 23 },
  'itis-onychophora-tsn-crosswalk': { files: 1, records: 235 },
  'itis-hemichordata-tsn-crosswalk': { files: 2, records: 139 },
  'itis-sipuncula-tsn-crosswalk': { files: 2, records: 205 },
  'itis-nematomorpha-tsn-crosswalk': { files: 2, records: 404 },
  'itis-phoronida-tsn-crosswalk': { files: 1, records: 19 },
  'itis-gnathostomulida-tsn-crosswalk': { files: 2, records: 104 },
  'itis-loricifera-tsn-crosswalk': { files: 1, records: 46 },
  'itis-micrognathozoa-tsn-crosswalk': { files: 1, records: 1 },
  'itis-cycliophora-tsn-crosswalk': { files: 1, records: 2 },
  'itis-placozoa-tsn-crosswalk': { files: 1, records: 4 },
  'itis-xenacoelomorpha-tsn-crosswalk': { files: 2, records: 499 },
  'itis-orthonectida-tsn-crosswalk': { files: 2, records: 27 },
  'itis-dicyemida-tsn-crosswalk': { files: 2, records: 126 },
}
if (otherAnimalsManifest.extensions?.length !== Object.keys(expectedOtherAnimalAuthorities).length) {
  throw new Error('Mobile build must stage every declared other-animals ITIS authority collection')
}
for (const [id, expected] of Object.entries(expectedOtherAnimalAuthorities)) {
  const authority = otherAnimalsManifest.extensions?.find((extension) => extension.id === id)
  if (!authority || authority.provider !== 'Integrated Taxonomic Information System'
    || authority.delivery?.profile !== 'native-full' || authority.delivery?.completeRows !== true
    || authority.files?.length !== expected.files || authority.delivery?.publishedFileCount !== expected.files
    || authority.delivery?.canonicalFileCount !== expected.files
    || authority.files.reduce((sum, file) => sum + file.records, 0) !== expected.records) {
    throw new Error(`Mobile build must stage the complete ${id} authority collection`)
  }
}
const protistsDescriptor = catalogueManifest.resourcePacks?.manifests?.['protists-chromists']
if (!protistsDescriptor?.url) throw new Error('Mobile build is missing the protists-chromists resource-pack manifest')
const protistsManifest = JSON.parse(readFileSync(join(sourceDataRoot, ...protistsDescriptor.url.split('/')), 'utf8'))
const foraminifera = protistsManifest.extensions?.find((extension) => extension.id === 'foraminifera-wfd-identifiers')
if (!foraminifera || foraminifera.provider !== 'World Foraminifera Database (WoRMS) through ChecklistBank'
  || foraminifera.delivery?.profile !== 'native-full' || foraminifera.delivery?.completeRows !== true
  || foraminifera.files?.length !== 5 || foraminifera.delivery?.publishedFileCount !== 5
  || foraminifera.delivery?.canonicalFileCount !== 5
  || foraminifera.files.reduce((sum, file) => sum + file.records, 0) !== 47975) {
  throw new Error('Mobile build must stage the complete Foraminifera WFD authority collection')
}
const expectedProtistAuthorities = {
  'itis-ciliophora-tsn-crosswalk': { files: 4, records: 8665 },
  'itis-apicomplexa-tsn-crosswalk': { files: 1, records: 21 },
  'itis-dinoflagellata-tsn-crosswalk': { files: 2, records: 1110 },
  'itis-euglenozoa-tsn-crosswalk': { files: 1, records: 276 },
  'itis-cercozoa-tsn-crosswalk': { files: 1, records: 52 },
  'itis-haptophyta-tsn-crosswalk': { files: 1, records: 90 },
  'itis-ochrophyta-tsn-crosswalk': { files: 2, records: 3397 },
  'itis-amoebozoa-tsn-crosswalk': { files: 1, records: 1337 },
  'itis-rhodophyta-tsn-crosswalk': { files: 1, records: 1616 },
  'itis-oomycota-tsn-crosswalk': { files: 2, records: 1464 },
  'itis-cryptophyta-tsn-crosswalk': { files: 0, records: 0 },
  'itis-choanoflagellatea-tsn-crosswalk': { files: 0, records: 0 },
  'itis-bigyra-tsn-crosswalk': { files: 1, records: 53 },
  'itis-perkinsozoa-tsn-crosswalk': { files: 0, records: 0 },
  'itis-labyrinthulomycetes-tsn-crosswalk': { files: 0, records: 0 },
  'itis-opalozoa-tsn-crosswalk': { files: 0, records: 0 },
  'itis-radiolaria-tsn-crosswalk': { files: 0, records: 0 },
  'itis-metamonada-tsn-crosswalk': { files: 0, records: 0 },
  'itis-chlorophyta-tsn-crosswalk': { files: 1, records: 1416 },
  'itis-glaucophyta-tsn-crosswalk': { files: 1, records: 4 },
  'itis-picozoa-tsn-crosswalk': { files: 0, records: 0 },
  'itis-telonemia-tsn-crosswalk': { files: 0, records: 0 },
  'itis-centrohelida-tsn-crosswalk': { files: 0, records: 0 },
  'itis-katablepharidota-tsn-crosswalk': { files: 0, records: 0 },
}
if (protistsManifest.extensions?.length !== Object.keys(expectedProtistAuthorities).length + 1) {
  throw new Error('Mobile build must stage every declared protists/chromists authority collection')
}
for (const [id, expected] of Object.entries(expectedProtistAuthorities)) {
  const authority = protistsManifest.extensions?.find((extension) => extension.id === id)
  if (!authority || authority.provider !== 'Integrated Taxonomic Information System'
    || authority.delivery?.profile !== 'native-full' || authority.delivery?.completeRows !== true
    || authority.files?.length !== expected.files || authority.delivery?.publishedFileCount !== expected.files
    || authority.delivery?.canonicalFileCount !== expected.files
    || authority.files.reduce((sum, file) => sum + file.records, 0) !== expected.records) {
    throw new Error(`Mobile build must stage the complete ${id} authority collection`)
  }
}

const interactiveFiles = releaseFiles.files.filter((file) => !file.url.includes('/downloads/'))
const bootstrapFiles = ['current.json', 'releases.json', release.filesIndex]
const bundledFiles = [...new Set([...bootstrapFiles, ...interactiveFiles.map((file) => file.url)])]
for (const relativePath of bundledFiles) {
  const source = resolve(sourceDataRoot, ...relativePath.split('/'))
  if (!source.startsWith(`${sourceDataRoot}${sep}`) || !existsSync(source) || !statSync(source).isFile()) {
    throw new Error(`Mobile data inventory references a missing or unsafe file: ${relativePath}`)
  }
  const destination = resolve(outputRoot, 'data', ...relativePath.split('/'))
  if (!destination.startsWith(`${join(outputRoot, 'data')}${sep}`)) {
    throw new Error(`Mobile data destination is unsafe: ${relativePath}`)
  }
  mkdirSync(dirname(destination), { recursive: true })
  copyFileSync(source, destination)
}

for (const file of interactiveFiles) {
  const bundled = join(outputRoot, 'data', ...file.url.split('/'))
  const actualBytes = statSync(bundled).size
  const actualSha256 = sha256(bundled)
  if (actualBytes !== file.bytes || actualSha256 !== file.sha256) {
    throw new Error(`Bundled mobile data does not match release inventory: ${file.url}`)
  }
}

const files = filesBelow(outputRoot)
const totalBytes = files.reduce((sum, file) => sum + statSync(file).size, 0)
const limitMiB = 750
const limitBytes = limitMiB * 1024 * 1024
if (totalBytes > limitBytes) {
  throw new Error(`Mobile application resources are ${(totalBytes / 1024 / 1024).toFixed(2)} MiB; limit is ${limitMiB} MiB`)
}

const bundledBytes = interactiveFiles.reduce((sum, file) => sum + file.bytes, 0)
console.log(`Mobile full-data contract passed: ${interactiveFiles.length} interactive files, ${(bundledBytes / 1024 / 1024).toFixed(2)} MiB, dataset ${current.datasetVersion}, data root ${dataRoot}`)
