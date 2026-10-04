import fs from 'node:fs'
import { prepareAmphibianResearchInput } from './prepare-amphibia-research-input.mjs'
const sourceFile = 'data/sources/snapshots/amphibia-primary-corpus-2026-10-02/PMC7892535/crossref.json'
const crossref = JSON.parse(fs.readFileSync(sourceFile)).message
prepareAmphibianResearchInput([
  { colId: '4Q9R3', name: 'Ptychadena neumanni', pmc: 'PMC7892535', year: 2021, authors: crossref.author.map(a => `${a.given} ${a.family}`), authorMetadataEvidence: { provider: 'Crossref DOI registration', sourceFile, originalXmlAuthorStringsRetained: true, scope: 'Citation names; original XML correspondence marker retained separately.' }, readScope: 'Species habitat, distribution and natural-history account', sections: [
    ['distribution', 'Southern and southwestern Ethiopian records', '埃塞俄比亚南部与西南记录', 'The revision reported southern and southwestern Ethiopian highland records on both sides of the Great Rift Valley, at 1409–2449 m. Named areas included localities near Hagere Mariam, Maji, Gore, Gech’a, Bonga, Jimma and Wondo Genet. This is a study-record range rather than a complete contemporary occupancy survey or physiological elevation interval.', '修订报告大裂谷两侧埃塞俄比亚南部与西南高地海拔 1409—2449 米记录，地点涉及 Hagere Mariam、Maji、Gore、Gech’a、Bonga、Jimma 及 Wondo Genet 附近。这是研究记录分布，不是完整当代占据调查或生理海拔区间。'],
    ['reproduction', 'Night calling in shallow water', '浅水中的夜间鸣叫', 'Males were found calling at night in shallow puddles on or beside roads, or in flooded grassy meadows. Several other Ptychadena occurred in the same broader regions. Calling and regional co-occurrence do not establish egg sites, clutch sizes, direct species interactions or a complete annual reproductive calendar.', '雄性夜间在道路上或路旁浅水坑，或积水草甸鸣叫。更广区域还出现其他数种 Ptychadena。鸣叫与区域共同出现不能确立卵位、窝卵数、直接种间相互作用或完整年度繁殖日历。']
  ] }
])
