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
const expectedRichItisCollections = {
  'molluscs-brachiopods': {
    'itis-mollusca-brachiopoda-tsn-crosswalk': { files: 59, upstreamFiles: 1, records: 159801, upstreamRecords: 4289 },
  },
  'sponges-cnidarians': {
    'itis-porifera-cnidaria-tsn-crosswalk': { files: 5, upstreamFiles: 1, records: 30521, upstreamRecords: 2218 },
  },
  echinoderms: {
    'itis-echinodermata-tsn-crosswalk': { files: 2, upstreamFiles: 1, records: 11891, upstreamRecords: 278 },
  },
  'crustaceans-insects': {
    'itis-insecta-tsn-crosswalk': {
      files: 99, upstreamFiles: 1, records: 941223, upstreamRecords: 27357,
      descriptorSha256: 'c168f706a7067fd6d95548777b6fe5cadf0c6b2b67b9442698d9350c521c2cdf',
      arthropod: true,
    },
    'itis-crustacea-tsn-crosswalk': {
      files: 40, upstreamFiles: 1, records: 80890, upstreamRecords: 5991,
      descriptorSha256: '9fb4271dce81e92f2df706da26c379053e649f21416d81ec1d8db6bb2031490b',
      arthropod: true,
    },
    'itis-myriapoda-tsn-crosswalk': {
      files: 3, upstreamFiles: 1, records: 17351, upstreamRecords: 544,
      descriptorSha256: 'd2f836dc4b21afffb7fe1dbfcc9826556895a1fecff707ef514f69bc2053a296',
      arthropod: true,
    },
    'itis-collembola-protura-tsn-crosswalk': {
      files: 2, upstreamFiles: 1, records: 9668, upstreamRecords: 411,
      descriptorSha256: 'bf90e217fa6871bb1e59807b721ed88403c47e9aa2712a782ef40146b906fdf2',
      arthropod: true,
    },
  },
  'trilobites-chelicerates': {
    'itis-chelicerata-tsn-crosswalk': {
      files: 16, upstreamFiles: 1, records: 99511, upstreamRecords: 5714,
      descriptorSha256: '90383cc2bf44dc092b59c7ed131169317a0a613699aa6485c6f3e9b74decfa3c',
      arthropod: true,
    },
  },
  'turtles-lepidosaurs': {
    'itis-reptilia-tsn-crosswalk': {
      files: 9, upstreamFiles: 1, records: 12622, upstreamRecords: 655,
      descriptorSha256: 'c87810d693fb13c7ead541874025361e4abf36555b6f03532a8131aec4bd673e',
      reptilia: true,
    },
  },
  'crocodylomorphs-birds': {
    'itis-crocodylia-tsn-crosswalk': {
      files: 1, upstreamFiles: 0, records: 27, upstreamRecords: 0,
      descriptorSha256: '3f7bc19fc8422b5202ca8798a22af78c65ed63f45cdf51bcf1a618d03607624d',
      crocodylia: true,
    },
  },
  perissodactyla: {
    'itis-perissodactyla-tsn-crosswalk': {
      files: 1, upstreamFiles: 0, records: 19, upstreamRecords: 0,
      descriptorSha256: '3c7d327c1941e11ff192b3b451d0fa5fb5728fad9236bd4064f99afcd83a73e2',
      mammal: true,
    },
  },
  cetartiodactyla: {
    'itis-cetartiodactyla-tsn-crosswalk': {
      files: 1, upstreamFiles: 0, records: 503, upstreamRecords: 0,
      descriptorSha256: 'f452207ad017e0b128470650dc4f71490cbe2a637279af6fd9f6785a5b99df8d',
      mammal: true,
    },
  },
  primates: {
    'itis-primates-tsn-crosswalk': {
      files: 1, upstreamFiles: 0, records: 530, upstreamRecords: 0,
      descriptorSha256: 'b8f921704919fae007f45bfdecde5fefcfeb0c004fcc6a69b9d35e399405cf36',
      mammal: true,
    },
  },
  carnivora: {
    'itis-carnivora-tsn-crosswalk': {
      files: 1, upstreamFiles: 0, records: 310, upstreamRecords: 0,
      descriptorSha256: '983a47c1a148f9a6f200a06807ae04470a0b6506a47e1fd7c58457a7bc75431f',
      mammal: true,
    },
  },
  'other-mammals': {
    'itis-other-mammals-tsn-crosswalk': {
      files: 4, upstreamFiles: 1, records: 5099, upstreamRecords: 3,
      descriptorSha256: '90e1ae6357c2f08fad63a6329b4a81d0770379738cd8d87acea11c11fc40131f',
      mammal: true,
    },
  },
  actinopterygii: {
    'itis-actinopterygii-tsn-crosswalk': { files: 23, upstreamFiles: 1, records: 35928, upstreamRecords: 3732 },
  },
  chondrichthyes: {
    'itis-chondrichthyes-tsn-crosswalk': { files: 1, upstreamFiles: 1, records: 1359, upstreamRecords: 183 },
  },
  'early-fishes': {
    'itis-agnatha-myxini-tsn-crosswalk': { files: 1, upstreamFiles: 1, records: 141, upstreamRecords: 17 },
  },
  'tetrapod-transition': {
    'itis-sarcopterygii-tsn-crosswalk': { files: 1, upstreamFiles: 0, records: 8, upstreamRecords: 0 },
  },
}
let arthropodItisFiles = 0
let arthropodItisRecords = 0
let reptiliaItisFiles = 0
let reptiliaItisRecords = 0
let crocodyliaItisFiles = 0
let crocodyliaItisRecords = 0
let mammalItisFiles = 0
let mammalItisRecords = 0
for (const [packageId, expectedCollections] of Object.entries(expectedRichItisCollections)) {
  const descriptor = current.packages?.manifests?.[packageId]
  if (!descriptor?.url) throw new Error(`Mobile build is missing the ${packageId} package manifest`)
  const manifest = JSON.parse(readFileSync(join(sourceDataRoot, ...descriptor.url.split('/')), 'utf8'))
  const collections = manifest.nomenclatureCollections
  if (!Array.isArray(collections)) throw new Error(`Mobile build is missing ${packageId} nomenclature collections`)
  const additionalAuthorityCollections = {
    echinoderms: 1, 'crocodylomorphs-birds': 1,
    'molluscs-brachiopods': 1, 'sponges-cnidarians': 2, 'crustaceans-insects': 3,
    'trilobites-chelicerates': 1,
  }[packageId] ?? 0
  if (collections.length !== Object.keys(expectedCollections).length + additionalAuthorityCollections) {
    throw new Error(`Mobile build has an unexpected ${packageId} nomenclature collection count`)
  }
  for (const collection of collections.filter((item) => item.recordType === 'release-pinned-authority-archive-crosswalk')) {
    const files = [...collection.files, ...collection.upstreamOnlyFiles]
    if (collection.delivery?.profile !== 'native-full' || collection.delivery?.completeRows !== true
      || files.length !== collection.delivery?.canonicalFileCount
      || collection.delivery?.publishedFileCount !== files.length
      || collection.files.reduce((sum, file) => sum + file.records, 0) !== collection.counts.total
      || collection.upstreamOnlyFiles.reduce((sum, file) => sum + file.records, 0) !== collection.counts.upstreamOnly
      || files.some((file) => !releaseFiles.files.some((entry) => entry.url === file.url && entry.sha256 === file.sha256 && entry.bytes === file.bytes))) {
      throw new Error(`Mobile build must include every archive authority partition: ${packageId}/${collection.id}`)
    }
  }
  for (const [id, expected] of Object.entries(expectedCollections)) {
    const collection = collections.find((entry) => entry.id === id)
    if (!collection || collection.provider !== 'Integrated Taxonomic Information System'
      || collection.delivery?.profile !== 'native-full' || collection.delivery?.completeRows !== true
      || collection.delivery?.publishedFileCount !== expected.files + expected.upstreamFiles
      || collection.delivery?.canonicalFileCount !== expected.files + expected.upstreamFiles
      || collection.files?.length !== expected.files || collection.upstreamOnlyFiles?.length !== expected.upstreamFiles
      || collection.counts?.total !== expected.records || collection.counts?.itisUpstreamOnly !== expected.upstreamRecords
      || collection.files.reduce((sum, file) => sum + file.records, 0) !== expected.records
      || collection.upstreamOnlyFiles.reduce((sum, file) => sum + file.records, 0) !== expected.upstreamRecords
      || (expected.descriptorSha256 && collection.descriptorSha256 !== expected.descriptorSha256)) {
      throw new Error(`Mobile build must stage the complete ${packageId}/${id} authority collection`)
    }
    const canonicalInventory = collection.canonicalFileInventory
    if (!Array.isArray(canonicalInventory) || canonicalInventory.length !== expected.files + expected.upstreamFiles) {
      throw new Error(`Mobile build has an incomplete canonical inventory for ${packageId}/${id}`)
    }
    for (const file of [...collection.files, ...collection.upstreamOnlyFiles]) {
      const source = resolve(sourceDataRoot, ...file.url.split('/'))
      if (!source.startsWith(`${sourceDataRoot}${sep}`) || !existsSync(source) || !statSync(source).isFile()) {
        throw new Error(`Mobile rich-package authority references a missing or unsafe file: ${file.url}`)
      }
      if (sha256(source) !== file.sha256 || statSync(source).size !== file.bytes) {
        throw new Error(`Mobile rich-package authority shard does not match its manifest: ${file.url}`)
      }
      const inventoryRecord = releaseFiles.files.find((entry) => entry.url === file.url)
      if (!inventoryRecord || inventoryRecord.bytes !== file.bytes || inventoryRecord.sha256 !== file.sha256) {
        throw new Error(`Mobile rich-package authority shard is missing from release inventory: ${file.url}`)
      }
    }
    for (const canonicalFile of canonicalInventory) {
      const name = canonicalFile.path.split('/').at(-1)
      const runtimeFile = [...collection.files, ...collection.upstreamOnlyFiles].find((file) => file.url.split('/').at(-1) === name)
      if (!runtimeFile || runtimeFile.records !== canonicalFile.records
        || runtimeFile.bytes !== canonicalFile.bytes || runtimeFile.sha256 !== canonicalFile.sha256) {
        throw new Error(`Mobile rich-package canonical shard inventory is inconsistent: ${packageId}/${id}/${name}`)
      }
    }
    if (expected.arthropod) {
      arthropodItisFiles += expected.files + expected.upstreamFiles
      arthropodItisRecords += expected.records + expected.upstreamRecords
    }
    if (expected.reptilia) {
      reptiliaItisFiles += expected.files + expected.upstreamFiles
      reptiliaItisRecords += expected.records + expected.upstreamRecords
    }
    if (expected.crocodylia) {
      crocodyliaItisFiles += expected.files + expected.upstreamFiles
      crocodyliaItisRecords += expected.records + expected.upstreamRecords
    }
    if (expected.mammal) {
      mammalItisFiles += expected.files + expected.upstreamFiles
      mammalItisRecords += expected.records + expected.upstreamRecords
    }
  }
  if (packageId === 'echinoderms') {
    const worms = collections.find((entry) => entry.id === 'worms-aphiaid-crosswalk')
    const wormsFile = worms?.file
    const wormsInventoryRecord = wormsFile && releaseFiles.files.find((entry) => entry.url === wormsFile.url)
    if (!worms || worms.provider !== 'WoRMS' || worms.source?.license !== 'CC-BY-4.0'
      || worms.counts?.total !== 11891 || !wormsInventoryRecord
      || wormsFile.bytes !== wormsInventoryRecord.bytes || wormsFile.sha256 !== wormsInventoryRecord.sha256) {
      throw new Error('Mobile build must retain the complete WoRMS Echinodermata authority collection')
    }
  }
  const expectedSpecialistArchive = {
    'crustaceans-insects': { id: 'chilobase-archive-crosswalk', files: 3, upstreamFiles: 1, total: 3141, accepted: 2269, unmatched: 872, upstreamOnly: 872 },
    'trilobites-chelicerates': { id: 'scorpion-files-archive-crosswalk', files: 8, upstreamFiles: 1, total: 2940, accepted: 2872, unmatched: 68, upstreamOnly: 67 },
  }[packageId]
  if (expectedSpecialistArchive) {
    const authority = collections.find((entry) => entry.id === expectedSpecialistArchive.id)
    if (!authority || authority.provider !== 'ChecklistBank' || authority.source?.license !== 'CC-BY-4.0'
      || authority.files?.length !== expectedSpecialistArchive.files
      || authority.upstreamOnlyFiles?.length !== expectedSpecialistArchive.upstreamFiles
      || authority.counts?.total !== expectedSpecialistArchive.total
      || authority.counts?.accepted !== expectedSpecialistArchive.accepted
      || authority.counts?.unmatched !== expectedSpecialistArchive.unmatched
      || authority.counts?.upstreamOnly !== expectedSpecialistArchive.upstreamOnly) {
      throw new Error(`Mobile build must retain the complete ${expectedSpecialistArchive.id} authority collection`)
    }
  }
}
if (arthropodItisFiles !== 165 || arthropodItisRecords !== 1188660) {
  throw new Error(`Mobile build must stage 165 arthropod ITIS files and 1188660 records; found ${arthropodItisFiles} files and ${arthropodItisRecords} records`)
}
if (reptiliaItisFiles !== 10 || reptiliaItisRecords !== 13277) {
  throw new Error(`Mobile build must stage 10 non-Crocodylia Reptilia ITIS files and 13277 records; found ${reptiliaItisFiles} files and ${reptiliaItisRecords} records`)
}
if (crocodyliaItisFiles !== 1 || crocodyliaItisRecords !== 27) {
  throw new Error(`Mobile build must stage one Crocodylia ITIS file with 27 records; found ${crocodyliaItisFiles} files and ${crocodyliaItisRecords} records`)
}
if (mammalItisFiles !== 9 || mammalItisRecords !== 6464) {
  throw new Error(`Mobile build must stage 9 Mammalia ITIS files and 6464 records; found ${mammalItisFiles} files and ${mammalItisRecords} records`)
}
const mammalOriginsDescriptor = current.packages?.manifests?.['mammal-origins']
if (!mammalOriginsDescriptor?.url) throw new Error('Mobile build is missing the mammal-origins package manifest')
const mammalOriginsManifest = JSON.parse(readFileSync(join(sourceDataRoot, ...mammalOriginsDescriptor.url.split('/')), 'utf8'))
if (mammalOriginsManifest.nomenclatureCollections) {
  throw new Error('mammal-origins must not publish an ITIS nomenclature collection')
}
const catalogueManifest = JSON.parse(readFileSync(join(sourceDataRoot, ...current.catalogue.manifest.url.split('/')), 'utf8'))
const fungiDescriptor = catalogueManifest.resourcePacks?.manifests?.fungi
if (!fungiDescriptor?.url) throw new Error('Mobile build is missing the Fungi resource-pack manifest')
const fungiManifest = JSON.parse(readFileSync(join(sourceDataRoot, ...fungiDescriptor.url.split('/')), 'utf8'))
const fungiItis = fungiManifest.extensions?.find((extension) => extension.id === 'itis-fungi-tsn-crosswalk')
if (!fungiItis || fungiItis.provider !== 'Integrated Taxonomic Information System' || fungiItis.source?.rootTsn !== '555705'
  || fungiItis.delivery?.profile !== 'native-full' || fungiItis.delivery?.completeRows !== true
  || fungiItis.files?.length !== 57 || fungiItis.delivery?.publishedFileCount !== 57 || fungiItis.delivery?.canonicalFileCount !== 57
  || fungiItis.files.reduce((sum, file) => sum + file.records, 0) !== 158805) {
  throw new Error('Mobile build must stage the complete independent ITIS Fungi authority collection')
}
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
  'itis-dicyemida-tsn-crosswalk': { files: 2, records: 128 },
  'itis-nematoda-tsn-crosswalk': { files: 4, records: 20849 },
  'itis-annelida-tsn-crosswalk': { files: 4, records: 24074 },
}
if (otherAnimalsManifest.extensions?.length !== Object.keys(expectedOtherAnimalAuthorities).length + 23) {
  throw new Error('Mobile build must stage every declared other-animals ITIS and WoRMS authority collection')
}
const annelidaArchive = otherAnimalsManifest.extensions.find((extension) => extension.id === 'worms-annelida-archive-crosswalk')
const annelidaArchiveFiles = [...(annelidaArchive?.files ?? []), ...(annelidaArchive?.upstreamOnlyFiles ?? [])]
if (!annelidaArchive || annelidaArchive.source?.license !== 'CC-BY-4.0'
  || annelidaArchive.delivery?.profile !== 'native-full' || !annelidaArchive.delivery.completeRows
  || annelidaArchive.files.length !== 8 || annelidaArchive.upstreamOnlyFiles.length !== 1
  || annelidaArchive.delivery.publishedFileCount !== 9 || annelidaArchive.delivery.canonicalFileCount !== 9
  || annelidaArchiveFiles.reduce((sum, file) => sum + file.records, 0) !== 20072
  || annelidaArchiveFiles.some((file) => !releaseFiles.files.some((entry) => entry.url === file.url && entry.bytes === file.bytes && entry.sha256 === file.sha256))) {
  throw new Error('Mobile build must stage every WoRMS Annelida COL and source-only archive shard')
}
const nematodaArchive = otherAnimalsManifest.extensions.find((extension) => extension.id === 'worms-nematoda-archive-crosswalk')
const nematodaArchiveFiles = [...(nematodaArchive?.files ?? []), ...(nematodaArchive?.upstreamOnlyFiles ?? [])]
if (!nematodaArchive || nematodaArchive.source?.license !== 'CC-BY-4.0'
  || nematodaArchive.delivery?.profile !== 'native-full' || !nematodaArchive.delivery.completeRows
  || nematodaArchive.files.length !== 8 || nematodaArchive.upstreamOnlyFiles.length !== 1
  || nematodaArchive.delivery.publishedFileCount !== 9 || nematodaArchive.delivery.canonicalFileCount !== 9
  || nematodaArchiveFiles.reduce((sum, file) => sum + file.records, 0) !== 21708
  || nematodaArchiveFiles.some((file) => !releaseFiles.files.some((entry) => entry.url === file.url && entry.bytes === file.bytes && entry.sha256 === file.sha256))) {
  throw new Error('Mobile build must stage every WoRMS Nematoda COL and source-only archive shard')
}
for (const [id, total, accepted, upstreamOnly, fileCount, upstreamFileCount, license, label] of [
  ['worms-thaliacea-archive-crosswalk', 78, 78, 0, 1, 0, 'CC-BY-4.0', 'Thaliacea'],
  ['worms-appendicularia-archive-crosswalk', 68, 68, 0, 1, 0, 'CC-BY-4.0', 'Appendicularia'],
  ['worms-chaetognatha-archive-crosswalk', 132, 132, 0, 1, 0, 'cc by', 'Chaetognatha'],
  ['worms-rhombozoa-archive-crosswalk', 122, 122, 0, 1, 0, 'cc by', 'Rhombozoa'],
  ['worms-loricifera-archive-crosswalk', 46, 46, 1, 1, 1, 'cc by', 'Loricifera'],
  ['worms-gnathostomulida-archive-crosswalk', 100, 100, 0, 1, 0, 'cc by', 'Gnathostomulida'],
  ['worms-priapulida-archive-crosswalk', 23, 23, 0, 1, 0, 'cc by', 'Priapulida'],
]) {
  const archive = otherAnimalsManifest.extensions.find((extension) => extension.id === id)
  const files = [...(archive?.files ?? []), ...(archive?.upstreamOnlyFiles ?? [])]
  if (!archive || archive.source?.license !== license
    || archive.delivery?.profile !== 'native-full' || archive.delivery?.completeRows !== true
    || archive.files?.length !== fileCount || archive.upstreamOnlyFiles?.length !== upstreamFileCount
    || archive.counts?.total !== total || archive.counts?.accepted !== accepted || archive.counts?.upstreamOnly !== upstreamOnly
    || archive.delivery?.publishedFileCount !== fileCount + upstreamFileCount
    || archive.delivery?.canonicalFileCount !== fileCount + upstreamFileCount
    || files.reduce((sum, file) => sum + file.records, 0) !== total + upstreamOnly
    || files.some((file) => !releaseFiles.files.some((entry) => entry.url === file.url && entry.bytes === file.bytes && entry.sha256 === file.sha256))) {
    throw new Error(`Mobile build must stage the complete ${label} archive projection`)
  }
}
for (const [id, total, accepted, unmatched, upstreamOnly, fileCount, upstreamFileCount, license, label] of [
  ['worms-oligochaeta-archive-crosswalk', 4403, 4350, 53, 214, 6, 1, 'CC-BY-4.0', 'Oligochaeta'],
  ['worms-polychaeta-archive-crosswalk', 14430, 14305, 125, 179, 18, 1, 'cc by', 'Polychaeta'],
]) {
  const archive = otherAnimalsManifest.extensions.find((extension) => extension.id === id)
  const files = [...(archive?.files ?? []), ...(archive?.upstreamOnlyFiles ?? [])]
  if (!archive || archive.source?.license !== license
    || archive.delivery?.profile !== 'native-full' || archive.delivery?.completeRows !== true
    || archive.files?.length !== fileCount || archive.upstreamOnlyFiles?.length !== upstreamFileCount
    || archive.counts?.total !== total || archive.counts?.accepted !== accepted
    || archive.counts?.unmatched !== unmatched || archive.counts?.upstreamOnly !== upstreamOnly
    || archive.delivery?.publishedFileCount !== fileCount + upstreamFileCount
    || archive.delivery?.canonicalFileCount !== fileCount + upstreamFileCount
    || files.reduce((sum, file) => sum + file.records, 0) !== total + upstreamOnly
    || files.some((file) => !releaseFiles.files.some((entry) => entry.url === file.url && entry.bytes === file.bytes && entry.sha256 === file.sha256))) {
    throw new Error(`Mobile build must stage the complete ${label} archive projection`)
  }
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
const radiozoa = protistsManifest.extensions?.find((extension) => extension.id === 'worms-radiozoa-archive-crosswalk')
const radiozoaFiles = [...(radiozoa?.files ?? []), ...(radiozoa?.upstreamOnlyFiles ?? [])]
if (!radiozoa || radiozoa.provider !== 'World Register of Marine Species via ChecklistBank'
  || radiozoa.source?.license !== 'CC-BY-4.0' || radiozoa.delivery?.profile !== 'native-full' || radiozoa.delivery?.completeRows !== true
  || radiozoa.files?.length !== 1 || radiozoa.upstreamOnlyFiles?.length !== 1
  || radiozoa.delivery?.publishedFileCount !== 2 || radiozoa.delivery?.canonicalFileCount !== 2
  || radiozoa.counts?.total !== 444 || radiozoa.counts?.accepted !== 444 || radiozoa.counts?.upstreamOnly !== 54
  || radiozoaFiles.reduce((sum, file) => sum + file.records, 0) !== 498
  || radiozoaFiles.some((file) => !releaseFiles.files.some((entry) => entry.url === file.url && entry.bytes === file.bytes && entry.sha256 === file.sha256))) {
  throw new Error('Mobile build must stage every WoRMS Radiozoa COL and source-only archive shard')
}
const trichomycetes = protistsManifest.extensions?.find((extension) => extension.id === 'trichomycetes-archive-crosswalk')
if (!trichomycetes || trichomycetes.source?.license !== 'CC-BY-4.0'
  || trichomycetes.delivery?.profile !== 'native-full' || !trichomycetes.delivery.completeRows
  || trichomycetes.files?.length !== 1 || trichomycetes.upstreamOnlyFiles?.length !== 0
  || trichomycetes.counts?.total !== 96 || trichomycetes.counts?.accepted !== 96
  || trichomycetes.counts?.upstreamOnly !== 0
  || trichomycetes.files.some((file) => file.records !== 96 || !releaseFiles.files.some((entry) => entry.url === file.url && entry.bytes === file.bytes && entry.sha256 === file.sha256))) {
  throw new Error('Mobile build must stage the complete Trichomycetes source1033 nomenclatural archive projection')
}
for (const [id, total, accepted, upstreamOnly, fileCount, license] of [
  ['cilcat-1113-archive-crosswalk', 8505, 8505, 27, 2, 'CC-BY-4.0'],
  ['eumycetozoa-archive-crosswalk', 1337, 1337, 0, 1, 'CC-BY-4.0'],
  ['gymnodinium-archive-crosswalk', 259, 259, 0, 2, 'CC0-1.0'],
]) {
  const source = protistsManifest.extensions?.find((extension) => extension.id === id)
  const payloads = [...(source?.files ?? []), ...(source?.upstreamOnlyFiles ?? [])]
  if (!source || source.source?.license !== license
    || source.counts?.total !== total || source.counts?.accepted !== accepted || source.counts?.upstreamOnly !== upstreamOnly
    || source.delivery?.profile !== 'native-full' || source.delivery?.completeRows !== true
    || source.delivery?.publishedFileCount !== fileCount || source.delivery?.canonicalFileCount !== fileCount
    || payloads.length !== fileCount || payloads.reduce((sum, file) => sum + file.records, 0) !== total + upstreamOnly
    || payloads.some((file) => !releaseFiles.files.some((entry) => entry.url === file.url && entry.bytes === file.bytes && entry.sha256 === file.sha256))) {
    throw new Error(`Full data inventory must retain every ${id} COL and unlinked-source shard`)
  }
}
const expectedProtistAuthorities = {
  'itis-ciliophora-tsn-crosswalk': { files: 4, records: 8665 },
  'itis-apicomplexa-tsn-crosswalk': { files: 1, records: 21 },
  'itis-dinoflagellata-tsn-crosswalk': { files: 2, records: 1110 },
  'itis-euglenozoa-tsn-crosswalk': { files: 1, records: 276 },
  'itis-cercozoa-tsn-crosswalk': { files: 1, records: 52 },
  'itis-haptophyta-tsn-crosswalk': { files: 1, records: 90 },
  'itis-ochrophyta-tsn-crosswalk': { files: 2, records: 3399 },
  'itis-amoebozoa-tsn-crosswalk': { files: 1, records: 1337 },
  'itis-rhodophyta-tsn-crosswalk': { files: 1, records: 1616 },
  'itis-oomycota-tsn-crosswalk': { files: 2, records: 1536 },
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
  'itis-hemimastigophora-tsn-crosswalk': { files: 0, records: 0 },
}
if (protistsManifest.extensions?.length !== Object.keys(expectedProtistAuthorities).length + 6) {
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
const limitMiB = 825
const limitBytes = limitMiB * 1024 * 1024
if (totalBytes > limitBytes) {
  throw new Error(`Mobile application resources are ${(totalBytes / 1024 / 1024).toFixed(2)} MiB; limit is ${limitMiB} MiB`)
}

const bundledBytes = interactiveFiles.reduce((sum, file) => sum + file.bytes, 0)
console.log(`Mobile full-data contract passed: ${interactiveFiles.length} interactive files, ${(bundledBytes / 1024 / 1024).toFixed(2)} MiB, dataset ${current.datasetVersion}, data root ${dataRoot}`)
