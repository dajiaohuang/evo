import { amphibianReferenceForSchema } from './amphibia-source-reference.mjs'
import fs from 'node:fs'
import { readNodeContent, writeNodeContent } from './tree-path-content.mjs'
const works = [
  { colId: '3TN3T', id: 'ref-ddf547da-64dd-4958-95d1-89bcf87150f0', sourceKey: 'carrillo-2022', title: 'Distribution extension and parental care in Leptodactylus brevipes Cope, 1887 (Anura: Leptodactylidae)', authors: ['Juan F. C. Carrillo', 'Diego José Santana', 'Cynthia P. A. Prado'], year: 2022, doi: '10.22201/fc.25942158e.2022.3.466', url: 'https://repositorio.unesp.br/handle/11449/245954', locator: 'Author institution repository abstract; Brazilian Cerrado observation; Revista Latinoamericana de Herpetologia 5(3):64–68', license: 'Not assessed; original factual summary only; no source text or figures reproduced', topic: 'lifeHistory', en: 'A 2022 report from the Brazilian Cerrado described a female guarding a tadpole school and performing pumping movements. Larvae repeatedly contacted her legs and back; no aggressive female behaviour was recorded. This documents maternal attendance in the reported observation, without establishing its frequency, a survival benefit or universal behaviour across populations.', zh: '2022 年巴西塞拉多地区的一项报告记载，一只雌蛙守护蝌蚪群并做出抽动行为；幼体多次接触其腿部和背部，研究未记录雌蛙攻击行为。这证明该次观察中的母体照护，不确定行为频率、存活收益或所有种群的普遍行为。' },
  { colId: '4H7QP', id: 'ref-e3c15d28-03f7-45cf-87de-b028f5032267', sourceKey: 'venancio-2010', title: 'Reproductive behavior of the giant leaf frog Phyllomedusa bicolor (Anura: Hylidae) in the western Amazon', authors: ['Nathocley Mendes Venâncio', 'Paulo Roberto Melo-Sampaio'], year: 2010, doi: '10.11606/issn.2316-9079.v9i1p63-67', url: 'https://revistas.usp.br/phyllo/en/article/view/42726', locator: 'pp. 63–64; three amplexus observations in Acre during September 2008 and May 2009', license: 'CC BY-NC-ND; publisher page; no original figures or text reproduced', topic: 'lifeHistory', en: 'In Acre, Brazil, a study observed three mating pairs in 2008–2009. At Catuaba, eggs were enclosed in a three-leaf chamber above a pond; larvae emerged after 14 days, but were not followed to metamorphosis. A separate São Jorge clutch contained 1,202 eggs. These observations concern the sampled sites and nests, not fixed species-wide clutch size or developmental duration.', zh: '巴西阿克里州的一项研究在 2008—2009 年观察了三对抱对个体。Catuaba 的卵被包在池塘上方的三片叶组成的室内，14 天后幼体出现，研究没有追踪至变态；São Jorge 的另一窝含 1,202 枚卵。这些结果针对所观察地点和巢，不是全物种固定的每窝数量或发育时长。' },
  { colId: '4KBDL', id: 'ref-506a9ed9-29b8-4e1b-a0b9-c4f72db13408', sourceKey: 'kolenc-2009', title: 'The tadpoles and advertisement calls of Pleurodema bibroni Tschudi and Pleurodema kriegi (Müller), with notes on their geographic distribution and conservation status (Amphibia, Anura, Leiuperidae)', authors: ['Francisco Kolenc', 'Claudio Borteiro', 'Diego Baldo', 'Daiana P. Ferraro', 'Carlos Prigioni'], year: 2009, doi: '10.11646/zootaxa.1969.1.1', url: 'https://mapress.com/zt/article/view/zootaxa.1969.1.1', locator: 'Publisher abstract; reproductive season comparison and historical Uruguayan population account', license: 'Publisher copyright; original factual summary only; no text or figures reproduced', topic: 'lifeHistory', en: 'A 2009 comparative study reported autumn and winter reproduction in its Uruguayan Pleurodema bibroni populations, contrasting with spring and summer in P. kriegi. The paper also reported a historical decline in Uruguay. These dated observations do not establish a current conservation category or breeding calendar across the entire range.', zh: '2009 年的一项比较研究记载，所研究的乌拉圭 Pleurodema bibroni 种群在秋冬繁殖，与 P. kriegi 的春夏繁殖相对照。论文还报告了乌拉圭的历史衰退。这些有年代限定的观察，不确定当前保护等级或全分布区的繁殖日历。' }
]
const coverageFile = 'docs/amphibia-content/species-coverage.json'
const coverage = JSON.parse(fs.readFileSync(coverageFile))
for (const work of works) {
  const source = { title: work.title, authors: work.authors, year: work.year, doi: work.doi, url: work.url, accessedAt: '2026-10-02', license: work.license, licenseAssessment: 'original-factual-summary; source-publication-not-relicensed', locator: work.locator }
  const bytes = fs.readFileSync('data/references.json', 'utf8')
  if (!JSON.parse(bytes).some(x => x.id === work.id)) fs.writeFileSync('data/references.json', bytes.replace(/\]\s*$/, `,\n${JSON.stringify(amphibianReferenceForSchema({ id: work.id, ...source, type: 'article', sourceRole: 'primary-research', fitnessFor: ['lifeHistory'], authorsComplete: true, authorsStatus: 'recorded', authorMetadataProvenance: work.colId === '3TN3T' ? 'author-institution-repository' : 'publisher', importedSourceMetadata: [source] }), null, 2)}\n]\n`))
  const entry = coverage.find(x => x.colId === work.colId)
  const index = fs.readFileSync(`${entry.path}/index.yaml`)
  const node = readNodeContent(entry.path), profile = node.records['catalogue-profile']
  profile.sections = profile.sections.filter(x => !x.sourceIds?.includes(work.sourceKey))
  profile.sections.push({ topic: work.topic, title: { en: 'Published reproductive observations', zh: '已发表的繁殖观察' }, sourceIds: [work.sourceKey], text: { en: work.en, zh: work.zh } })
  if (!profile.sources.referenceBindings.some(x => x.referenceId === work.id)) profile.sources.referenceBindings.push({ referenceId: work.id, metadataVariant: 0, sourceKey: work.sourceKey, usage: { locator: work.locator }, originalFields: ['id', ...Object.keys(source)] })
  for (const binding of profile.sources.referenceBindings.filter(x => x.referenceId === work.id)) {
    binding.usage.scope = { en: 'Dated, study-scoped reproductive observation; no universal population behaviour, complete species dossier or contemporary conservation assessment is inferred.', zh: '有年代和研究范围限定的繁殖观察；不推断普遍种群行为、完整物种档案或当代保护评估。' }
    if (!binding.originalFields.includes('scope')) binding.originalFields.push('scope')
  }
  profile.primaryStudyScopes ??= []
  profile.limitations = { en: 'Taxonomic orientation with a dated, study-scoped reproductive summary. Historical trait concepts, remaining biological facets and contemporary concept boundaries require further source review; this is not a complete species dossier and is.', zh: '分类阅读入口包含有年代和研究范围限定的繁殖摘要；历史性状概念、其余生物学主题与当代概念范围仍需进一步来源核对。本页不是完整物种档案。' }
  if (!profile.primaryStudyScopes.some(x => x.doi === work.doi)) profile.primaryStudyScopes.push({ doi: work.doi, locator: work.locator, identityStatus: 'study uses the recorded species name; observational scope preserved, contemporary concept boundaries not independently certified', evidenceRead: work.colId === '4H7QP' ? 'publisher-full-paper' : work.colId === '3TN3T' ? 'author-institution-repository-abstract' : 'publisher-abstract-only', rightsBoundary: 'new short factual synthesis; no reproduced source text, translation of source text or figures' })
  writeNodeContent(entry.path, node.index, node.records)
  fs.writeFileSync(`${entry.path}/index.yaml`, index)
  for (const locale of ['en', 'zh']) {
    const file = `${entry.path}/page.${locale}.md`
    fs.writeFileSync(file, fs.readFileSync(file, 'utf8').replace('status: migrated-verbatim', 'status: source-linked'))
  }
  entry.sourceCoverage = 'species-research-partial-with-bilingual-reader'
  entry.biologicalReaderComplete = false
}
fs.writeFileSync(coverageFile, JSON.stringify(coverage, null, 2) + '\n')
console.log(JSON.stringify({ processedSpeciesResearchReaders: works.length, completeBiologicalSpecies: 0 }))
