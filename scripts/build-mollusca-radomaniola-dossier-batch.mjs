import { createHash } from 'node:crypto'
import { mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import { brotliCompressSync } from 'node:zlib'

const checkedAt = '2026-09-24'
const paper = 'https://doi.org/10.11646/zootaxa.5716.2.2'
const treatmentUrl = id => `https://treatment.plazi.org/id/${id}`
const treatmentDoiUrl = doi => `https://doi.org/${doi}`
const colUrl = id => `https://www.checklistbank.org/dataset/316115/taxon/${id}`
const aphiaUrl = id => `https://www.marinespecies.org/aphia.php?p=taxdetails&id=${id}`

const candidates = [
  { colId: 'V7HBX', name: 'Radomaniola cetinensis Grego & Beran, 2025', aphia: '1844769', authors: 'Grego & Beran, 2025', treatment: 'AB08878A2A34FFBBFF4125D744B898B4', zenodo: '10.5281/zenodo.18233398', pages: '212–217', motu: 'D', accessions: 'PX113150–PX113167', locality: 'Kotluša spring at Cviljane, Croatia (43°56′57″N, 16°23′56″E; 397 m); collected 2017-03-17; holotype NHMW-MO-113902.', distribution: 'Treatment reports 10 localities (its locality numbers 3–12) in the upper Cetina Basin, central Croatia, and southern Livansko Polje in north-west Bosnia and Herzegovina; reported habitats include springs, the Cetina River, and interstitial habitats.', conservation: 'The authors assess the species as Vulnerable (VU D2) in the treatment; this is an author assessment, and an independently verified current IUCN or national Red List record was not identified.' },
  { colId: 'V7KGH', name: 'Radomaniola testavariabilis Grego, Beran & Falniowski, 2025', aphia: '1844773', authors: 'Grego, Beran & Falniowski, 2025', treatment: 'AB08878A2A3BFFBCFF4125BD47489FBF', zenodo: '10.5281/zenodo.18233401', pages: '217–219', motu: 'A', accessions: 'PX113128–PX113141', locality: 'Vrelo Vrioštica spring, Vitina, Ljubuški, Bosnia and Herzegovina (43°14′15″N, 17°29′09″E; 93 m); holotype NHMW-MO-113904, collected 2018-04-02.', distribution: 'Treatment reports six localities (its locality numbers 15–20), three in Croatia and three in Bosnia and Herzegovina; reported habitats include springs, the Neretva River, and interstitial water.', conservation: 'The authors assess the species as Vulnerable (V) in the treatment; the assessment is not represented here as a verified current IUCN or national Red List listing.' },
  { colId: 'V7F82', name: 'Radomaniola mislinensis Grego & Jaszczyńska, 2025', aphia: '1844778', authors: 'Grego & Jaszczyńska, 2025', treatment: 'AB08878A2A3CFFBEFF4126AA41299963', zenodo: '10.5281/zenodo.18233405', pages: '220–222', motu: 'B', accessions: 'PX113142–PX113146', locality: 'Mislina spring, Neretva River Delta near Metković, Croatia (42°58′56″N, 17°36′24″E; 4 m); holotype NHMW-MO-113906, collected 2020-08-04.', distribution: 'Besides the type locality, the treatment reports spring Studena (locality 13); it describes the known area as a very small area around the spring supplying Mislina lake.', conservation: 'The authors assess the species as Endangered (EN) in the treatment; the record here is only the authors’ assessment, not a verified current IUCN or national listing.' },
  { colId: 'V7KCW', name: 'Radomaniola gracilipenia Szarowska & Falniowski, 2025', aphia: '1844780', authors: 'Szarowska & Falniowski, 2025', treatment: 'AB08878A2A21FFA0FF4123F946999A27', zenodo: '10.5281/zenodo.18233409', pages: '223–224', motu: 'F', accessions: 'KC011744', locality: 'Bouboukas spring near the road to Maneli, Achaia/Kalavryta, north-west Peloponnese, Greece (38°00′53″N, 21°58′31″E; 703 m); holotype NHMW-MO-113908, collected 2007-09-12.', distribution: 'The treatment states that the species is known so far only from its type locality; it describes spring-head habitat.', conservation: 'The authors assess the species as Endangered (EN) in the treatment; an independent current Red List record was not verified.' },
  { colId: 'V7J68', name: 'Radomaniola frauenfeldiana Beran & Jaszczyńska, 2025', aphia: '1844785', authors: 'Beran & Jaszczyńska, 2025', treatment: 'AB08878A2A20FFA3FF41273447489C0B', zenodo: '10.5281/zenodo.18233417', pages: '224–225', motu: 'C', accessions: 'MZ539646, MZ539647, PX113147–PX113148', locality: 'Spring Vrutak, Kostanje-Kučiće, lower Cetina Canyon, Croatia; holotype ZMUJ2024/04, collected 2018-08-31.', distribution: 'The treatment reports four springs in the lower Cetina Canyon; this is a local account, not a global range assessment.', conservation: 'The authors assess the species as Vulnerable (V) in the treatment, citing local water, tourism, and construction pressures; this is not independently verified as a current formal listing.' },
]

const colSource = {
  id: 'col', title: 'Catalogue of Life COL26.8 / ChecklistBank dataset 316115',
  version: 'COL26.8; ChecklistBank dataset 316115, pinned 2026-08-20',
  license: 'CC BY 4.0 for the pinned COL release; record used for identity only', licenseVersion: 'CC BY 4.0', licenseUrl: 'https://creativecommons.org/licenses/by/4.0/', rightsHolder: 'Catalogue of Life Foundation',
  licenseAppliesTo: 'COL26.8 release record', attribution: 'Catalogue of Life (2026), COL26.8, ChecklistBank dataset 316115, DOI 10.48580/dgywk', licenseAssessment: 'identity-only', scope: 'Accepted COL26.8 name, authorship, rank, status, source dataset and COL identifier only; no biological claims.'
}
const wormsSource = {
  id: 'worms', title: 'WoRMS / MolluscaBase archive crosswalk for COL Mollusca',
  version: 'Archive 2026-09-01; DOI 10.48580/d4fd.v148; accessed 2026-09-24',
  license: 'CC BY 4.0 for the archive dataset; applied only to archive nomenclatural data',
  licenseVersion: 'CC BY 4.0', licenseUrl: 'https://creativecommons.org/licenses/by/4.0/', rightsHolder: 'WoRMS Editorial Board / MolluscaBase (archive attribution)',
  licenseAppliesTo: 'WoRMS/MolluscaBase nomenclatural archive crosswalk only', attribution: 'WoRMS Editorial Board (2026), MolluscaBase archive; DOI 10.48580/d4fd.v148',
  licenseAssessment: 'identity-only', scope: 'Exact COL taxon ID to archived accepted Aphia taxon ID and accepted-name usage; nomenclatural identity evidence only, not biological evidence or proof of complete species-concept equivalence.'
}
const paperSource = {
  id: 'paper', title: 'Jaszczyńska et al. 2025. Five new species of Radomaniola Szarowska, 2006 (Truncatelloidea: Hydrobiidae). Zootaxa 5716(2):207–233.',
  url: paper, stableId: '10.11646/zootaxa.5716.2.2', version: 'Published 2025-10-30; DOI 10.11646/zootaxa.5716.2.2; accessed 2026-09-24', publishedAt: '2025-10-30', accessedAt: checkedAt,
  locator: 'Species account pages listed per claim; publisher identifies PDF as subscription or fee access',
  license: 'No item-level reuse license verified; publisher PDF is subscription/fee access; no article text or figures redistributed.', rightsHolder: 'Not established from the accessible article record', licenseAssessment: 'unknown',
  scope: 'Original taxonomic paper describing five species; biological claims are paraphrased from the corresponding species account only.'
}

function makeDossier(t) {
  const taxonSource = { ...colSource, url: colUrl(t.colId), stableId: t.colId, locator: `COL26.8 accepted species usage ${t.colId}` }
  const aphiaSource = { ...wormsSource, url: aphiaUrl(t.aphia), stableId: `urn:lsid:marinespecies.org:taxname:${t.aphia}`, locator: `Archived accepted usage AphiaID ${t.aphia}; crosswalk taxon.txt row verified by exact COL ID, accepted status, accepted name and authorship` }
  const treatmentSource = {
    id: 'treatment', title: `Plazi taxonomic treatment for ${t.name}`,
    url: treatmentUrl(t.treatment), stableId: t.treatment,
    version: `Taxon treatment extracted from Zootaxa 5716(2), ${t.pages}; Zenodo taxonomic-treatment record ${t.zenodo}; accessed ${checkedAt}`,
    publishedAt: '2025-10-30', accessedAt: checkedAt, locator: `Treatment ${t.treatment}; original paper pages ${t.pages}; Zenodo DOI ${t.zenodo}`,
    license: 'No item-level license verified for this treatment; Plazi platform or aggregate rights statements are not applied to the article or its figures.',
    rightsHolder: 'Not identified at item level', licenseAssessment: 'unknown', scope: 'Species-level account and underlying type/locality, anatomy, sequence, and author assessment data as cited in its original article pages.'
  }
  const claim = (text, locator, placeTimeScope, lifeStatus, sourceIds = ['treatment']) => ({ text, originalLanguage: 'en', translationStatus: 'untranslated', sourceIds, locator, placeTimeScope, lifeStatus })
  const partial = (claims, gaps) => ({ status: 'partially-supported', claims, gaps })
  return {
    colId: t.colId, scientificName: t.name, rank: 'species', sourceDatasetId: '1130', checkedAt,
    identity: {
      method: 'Exact COL26.8 taxon ID V7... was joined to the WoRMS/MolluscaBase archive by COL ID, then verified against archive Aphia ID, accepted status, full accepted name and authorship; no name-only or fuzzy match used.',
      scope: 'Nominal species usage in COL26.8 and archived MolluscaBase accepted taxon concept. This nomenclatural crosswalk does not by itself establish full biological concept equivalence.',
      sourceIds: ['col', 'worms']
    },
    lifeStatusScope: {
      wild: 'All biological observations and localities in the cited treatment concern wild freshwater snails; claims remain bounded to the paper’s 2001–2022 collection program and each account’s stated localities.',
      domesticated: 'No domesticated or captive observations are included or inferred.',
      fossil: 'This dossier makes no claim about fossil occurrence. Fossil evidence has not been assessed.'
    },
    sources: [taxonSource, aphiaSource, paperSource, treatmentSource],
    systematicSearch: { date: checkedAt, scope: 'Bounded identity/provenance check for the five taxon usages in COL26.8 against the archived MolluscaBase crosswalk; biological claims checked only in each cited taxonomic treatment and its article metadata.', method: 'Opened pinned repository crosswalk and exact COL-ID row; compared Aphia ID, archived accepted status, accepted name and authorship; read the taxon-specific Plazi treatment record and corresponding article account locators. No comprehensive literature, fossil, conservation database, or global distribution search was performed.', queryOrPath: `COL26.8 IDs ${t.colId}; archived WoRMS/MolluscaBase archive crosswalk taxon.txt; DOI 10.11646/zootaxa.5716.2.2; treatment ${t.treatment}`, inclusionCriteria: 'Only exact COL-ID to accepted Aphia-ID identity, and statements expressly in the taxon-specific article account.', exclusionCriteria: 'Name-only joins; generic genus/family statements; claims from other species; figures or text for redistribution; unverified formal assessments; inferred fossils or unsearched facets.', searcher: 'Evo source audit' },
    facets: {
      morphology: partial([claim(`The corresponding taxon account provides a species-level shell and soft-part/anatomical description and diagnostic treatment; the current dossier records the existence and scope of that account without extracting a full character matrix.`, `Species account, pp. ${t.pages}; description/diagnosis and associated figures`, `Account published 2025; taxon-specific specimens examined in the original treatment.`, 'Wild species; treatment specimens only.')], ['Measurements, sex/stage coverage, within-species variation, diagnostic character comparison, and specimen-by-specimen sampling have not been independently abstracted.']),
      lifeHistory: { status: 'not-assessed', claims: [], gaps: ['The paper’s species-description study was not a systematic life-history or reproductive-behavior search; no life-history claim is made.'] },
      ecology: partial([claim(`The account reports the following type locality and the treatment’s stated habitat/locality observations: ${t.locality} ${t.distribution}`, `Species account, pp. ${t.pages}; type material, habitat and distribution paragraphs`, `Only the account’s named collection localities; collection dates are account-specific and no unsampled sites are inferred.`, 'Wild freshwater snails; localities and specimens reported by the authors.')], ['No complete interaction network, host/resource use, population ecology, seasonal ecology, or habitat-wide survey has been assembled.']),
      evolution: partial([claim(`The study assigns this taxon to mitochondrial operational unit mOTU ${t.motu} and reports COI sequence accession(s) ${t.accessions}; the paper cautions that COI data do not resolve deeper phylogenetic relationships. The mOTU label is not treated as a species-tree placement.`, `Species account, pp. ${t.pages}; molecular/mOTU assignment and cited GenBank accession(s); article discussion on limits of COI evidence`, 'Study-specific sequence sample and analysis published 2025; accession identifiers as reported in the taxon account.', 'Wild study specimens; molecular evidence from the reported samples only.', ['treatment', 'paper'])], ['A species-level phylogenetic placement with broader loci, sampling, competing topologies and uncertainty has not been established here.']),
      distribution: partial([claim(t.distribution, `Species account, pp. ${t.pages}; type locality and distribution section`, 'Reported collection sites and dates in the cited study; geographic extent is limited to the named localities and study period.', 'Wild populations; no introduced/native range designation beyond treatment localities.')], ['No current global checklist of localities, georeferenced range boundary, native/introduced assessment, or sampling-completeness study has been completed.']),
      fossil: { status: 'not-assessed', claims: [], gaps: ['No fossil database or paleontological literature search was performed; no absence-of-fossils conclusion is drawn.'] },
      conservation: partial([claim(t.conservation, `Species account, pp. ${t.pages}; authors’ ecological/conservation status paragraph`, 'Author-assigned status in the 2025 taxonomic treatment; its assessment scope is limited to the account’s reported locality data.', 'Wild taxon; author assessment only, not an independently verified current formal assessment.')], ['Assessment criteria, evaluator authority, assessment date/validity, population trend and current IUCN or national registry record have not been independently verified.'])
    },
    completeness: { status: 'incomplete', reasons: ['The identity link is exact at the archived nomenclatural record level, but species-concept equivalence is not independently reviewed.', 'Only a bounded taxonomic treatment was assessed; life history and fossil evidence remain not-assessed.', 'Biological source item-level reuse rights are unverified; all biological statements are untranslated English paraphrases.', 'Several themes have only local or study-specific partial evidence; no complete systematic search or external review was performed.'] },
    expertReview: { status: 'not-reviewed', reviewers: [], reviewDigest: null }
  }
}

const records = candidates.map(makeDossier)
const jsonl = `${records.map(record => JSON.stringify(record)).join('\n')}\n`
const rawPath = 'data/knowledge/catalogue-dossiers-mollusca-radomaniola-batch-1.jsonl'
const compressedPath = `${rawPath}.br`
mkdirSync('data/knowledge', { recursive: true })
writeFileSync(rawPath, jsonl)
const compressed = brotliCompressSync(Buffer.from(jsonl))
writeFileSync(compressedPath, compressed)
const sha = value => createHash('sha256').update(value).digest('hex')
writeFileSync(`${rawPath}.manifest.json`, `${JSON.stringify({ releaseAlias: 'COL26.8', recordCount: records.length, decodedSha256: sha(jsonl), compressedSha256: sha(compressed), colIds: records.map(record => record.colId) }, null, 2)}\n`)
process.stdout.write(JSON.stringify({ rawPath, compressedPath, recordCount: records.length, decodedSha256: sha(jsonl), compressedSha256: sha(compressed) }) + '\n')
