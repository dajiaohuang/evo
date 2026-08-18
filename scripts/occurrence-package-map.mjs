const value = (record, canonical, pbdb) => record.classification?.[canonical] ?? record[pbdb] ?? ''
const normalized = (input) => String(input ?? '').trim().toLocaleLowerCase()

const GROUPS = {
  angiospermae: ['angiospermae', 'magnoliophyta', 'magnoliopsida', 'liliopsida', 'monocotyledones', 'eudicotyledones'],
  gymnosperms: ['gymnospermae', 'pinopsida', 'cycadopsida', 'ginkgoopsida', 'gnetopsida', 'voltziopsida', 'peltaspermopsida', 'arberiopsida', 'cycadeoideopsida', 'cycadophyta', 'coniferophyta', 'ginkgophyta', 'peltaspermophyta', 'pteridospermophyta', 'cycadeoideophyta'],
  earlyLandPlants: ['tracheophyta', 'bryophyta', 'marchantiophyta', 'anthocerotophyta', 'lycopodiopsida', 'polypodiopsida', 'equisetopsida', 'pteridophyta', 'psilophytophyta', 'sphenophyta', 'lycophyta', 'lycopodophyta', 'pteropsida', 'pteridopsida', 'psilophytopsida', 'lycopsida', 'sphenopsida'],
  trilobitesChelicerates: ['trilobita', 'artiopoda', 'chelicerata', 'merostomata', 'eurypterida', 'arachnida', 'pycnogonida'],
  crustaceansInsects: ['crustacea', 'insecta', 'malacostraca', 'ostracoda', 'branchiopoda', 'maxillopoda', 'myriapoda', 'chilopoda', 'diplopoda'],
  earlyFishes: ['agnatha', 'conodonta', 'conodontophorida', 'cyclostomi', 'ostracodermi', 'heterostraci', 'osteostraci', 'pteraspidomorpha', 'placodermi', 'acanthodii'],
  chondrichthyes: ['chondrichthyes', 'elasmobranchii', 'holocephali'],
  actinopterygii: ['actinopterygii', 'actinopteri', 'teleostei'],
  tetrapodTransition: ['sarcopterygii', 'tetrapodomorpha'],
  amphibia: ['amphibia', 'temnospondyli', 'lissamphibia'],
  perissodactyla: ['perissodactyla'],
  cetartiodactyla: ['artiodactyla', 'cetartiodactyla', 'cetacea'],
  primates: ['primates'],
  carnivora: ['carnivora'],
  mammalOrigins: ['synapsida', 'pelycosauria', 'therapsida', 'cynodontia', 'mammaliaformes'],
  otherMammals: ['mammalia', 'monotremata', 'marsupialia', 'proboscidea', 'chiroptera', 'rodentia', 'lagomorpha'],
  dinosauria: ['dinosauria', 'saurischia', 'ornithischia'],
  crocodylomorphsBirds: ['crocodylomorpha', 'crocodylia', 'aves'],
  marineReptilesPterosaurs: ['ichthyosauria', 'plesiosauria', 'eosauropterygia', 'mosasauridae', 'pterosauria'],
  turtlesLepidosaurs: ['testudines', 'testudinata', 'lepidosauria', 'squamata', 'rhynchocephalia', 'sphenodontia'],
}

function match(values, terms) {
  return terms.find((term) => values.includes(term)) ?? null
}

function mapped(packageId, basis) {
  return { packageId, packageAssignmentStatus: 'mapped', packageAssignmentBasis: basis }
}

export function occurrenceClassification(record) {
  return Object.fromEntries([
    ['phylum', value(record, 'phylum', 'phl')],
    ['class', value(record, 'class', 'cll')],
    ['order', value(record, 'order', 'odl')],
    ['family', value(record, 'family', 'fml')],
    ['genus', value(record, 'genus', 'gnl')],
  ].filter(([, entry]) => entry))
}

export function assignOccurrencePackage(record, exactPackageByTaxonId = new Map()) {
  const exact = record.tid ? exactPackageByTaxonId.get(record.tid) : null
  if (exact) return mapped(exact, `registry-exact-pbdb-id:${record.tid}`)

  const classification = occurrenceClassification(record)
  const values = Object.values(classification).map(normalized)
  const basis = (term) => `pbdb-higher-classification:${term}`
  let term

  if ((term = match(values, GROUPS.angiospermae))) return mapped('angiospermae', basis(term))
  if ((term = match(values, GROUPS.gymnosperms))) return mapped('gymnosperms', basis(term))
  if ((term = match(values, GROUPS.earlyLandPlants))) return mapped('early-land-plants', basis(term))
  if (values.includes('porifera') || values.includes('cnidaria')) return mapped('sponges-cnidarians', basis(values.includes('porifera') ? 'porifera' : 'cnidaria'))
  if (values.includes('mollusca') || values.includes('brachiopoda') || values.includes('graptolithina') || values.includes('graptoloidea') || values.includes('dendroidea')) return mapped('molluscs-brachiopods', basis(values.find((entry) => ['mollusca', 'brachiopoda', 'graptolithina', 'graptoloidea', 'dendroidea'].includes(entry))))
  if ((term = match(values, GROUPS.trilobitesChelicerates))) return mapped('trilobites-chelicerates', basis(term))
  if ((term = match(values, GROUPS.crustaceansInsects)) || values.includes('arthropoda')) return mapped('crustaceans-insects', basis(term ?? 'arthropoda'))
  if (values.includes('echinodermata')) return mapped('echinoderms', basis('echinodermata'))
  if ((term = match(values, GROUPS.earlyFishes))) return mapped('early-fishes', basis(term))
  if ((term = match(values, GROUPS.chondrichthyes))) return mapped('chondrichthyes', basis(term))
  if ((term = match(values, GROUPS.actinopterygii))) return mapped('actinopterygii', basis(term))
  if ((term = match(values, GROUPS.amphibia))) return mapped('amphibia', basis(term))
  if ((term = match(values, GROUPS.perissodactyla))) return mapped('perissodactyla', basis(term))
  if ((term = match(values, GROUPS.cetartiodactyla))) return mapped('cetartiodactyla', basis(term))
  if ((term = match(values, GROUPS.primates))) return mapped('primates', basis(term))
  if ((term = match(values, GROUPS.carnivora))) return mapped('carnivora', basis(term))
  if ((term = match(values, GROUPS.mammalOrigins))) return mapped('mammal-origins', basis(term))
  if ((term = match(values, GROUPS.otherMammals))) return mapped('other-mammals', basis(term))
  if ((term = match(values, GROUPS.dinosauria))) return mapped('dinosauria', basis(term))
  if ((term = match(values, GROUPS.crocodylomorphsBirds))) return mapped('crocodylomorphs-birds', basis(term))
  if ((term = match(values, GROUPS.marineReptilesPterosaurs))) return mapped('marine-reptiles-pterosaurs', basis(term))
  if ((term = match(values, GROUPS.turtlesLepidosaurs))) return mapped('turtles-lepidosaurs', basis(term))
  if ((term = match(values, GROUPS.tetrapodTransition))) return mapped('tetrapod-transition', basis(term))

  return {
    packageId: 'atlas-core',
    packageAssignmentStatus: 'unresolved',
    packageAssignmentBasis: `unresolved:pbdb-higher-classification:${Object.values(classification).join('>') || 'unavailable'}`,
  }
}
