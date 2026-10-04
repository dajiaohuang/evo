import fs from 'node:fs'
import { prepareAmphibianResearchInput } from './prepare-amphibia-research-input.mjs'
const original=structuredClone(JSON.parse(fs.readFileSync('docs/amphibia-content/primary-reader-authoring-input.json')).find(x=>x.pmc==='PMC10848839'&&x.colId==='TNJJT'))
if(!original)throw new Error('Missing prior ngoclinhensis account')
const heading='ND2 separation does not fully resolve the nearest sampled relationships'
const previous=original.sections.findIndex(s=>s[1]===heading)
if(previous>=0){original.sections.splice(previous,1);original.sectionLocators.splice(previous,1)}
original.sectionLocators[1]='PMC10848839 reading-sections index 11 paragraph 0'
original.sections.push(['taxonomy',heading,'ND2 分离未完全解决最近受采亲缘关系',
  'The 2023 study used mitochondrial ND2 and an alignment of 1,035 positions, comparing the Kon Tum population with thirty-three examined Tylototriton species. Reported uncorrected distances span 6.77% to panhai and 12.36% to ngarsuensis. These are marker-specific sample comparisons, not a universal species threshold or nuclear-genomic isolation test. The population clusters with panhai and vietnamensis in clade B, but the authors explicitly report nonsignificant support, printing 0.83 and 60%; later calling panhai a sister species does not resolve that weak placement. The 2025 corrigendum changes three deposited-sequence accession identifiers, not an independently reanalysed tree or newly measured distance. The reader links the correction separately and retains the original study’s uncertainty.',
  '2023 年研究使用线粒体 ND2、比对 1,035 个位置，将 Kon Tum 种群与三十三个检查 Tylototriton 物种比较。报告未校正距离与 panhai 为 6.77%，至 ngarsuensis 为 12.36%。这是标记特定样本比较，不是普遍划种阈值或核基因组隔离试验。该种群与 panhai、vietnamensis 聚于 B 支，但作者明确称支持不显著，印为 0.83 和 60%；后文称 panhai 姐妹种不能解决较弱位置。2025 年更正修改三个入库序列标识，不是独立重分析树或新测距离。本页分别链接更正，保留原研究不确定性。'])
original.sectionLocators.push('PMC10848839 reading-sections index 1 paragraphs 0–2; XML SECID0EFXBG paragraphs 0, 3, 7–8')
original.readScope='Retained earlier individually read species anatomy, type, colour, ecology, distribution and dated conservation paragraphs; additionally read mitochondrial ND2 methods and selected raw-XML phylogenetic results, with weak placement retained'
prepareAmphibianResearchInput([original,{
  colId:'TNJJT',name:'Tylototriton ngoclinhensis',pmc:'PMC12690372',year:2025,
  license:'CC BY 4.0',licenseUrl:'https://creativecommons.org/licenses/by/4.0/',
  readScope:'Complete single-paragraph correction notice, not a newly performed sequence or phylogenetic analysis; original 2023 study retained under its own DOI',
  sectionLocators:['PMC12690372 XML body direct paragraph 0; reading-sections index 0 paragraph 0'],
  sections:[['taxonomy','The published corrigendum replaces three accession identifiers','发表更正替换三个序列登录标识',
    'The 2 December 2025 corrigendum to the 2023 original description, DOI 10.3897/zookeys.1168.96091, states that its Table 1 listed three new-species GenBank accessions incorrectly. LC575221, LC575222 and LC575223 are replaced respectively by LC757221, LC757222 and LC757223. The corrected notice has its own DOI, 10.3897/zookeys.1261.175115. Old values are retained here only to identify the superseded publication error, not as current sequence bindings for this species. This notice does not add specimens, certify contemporary catalogue identity, independently verify downloaded sequence contents or report re-estimated distances and node supports. It corrects the identifiers; the original morphology, field observations and qualified phylogeny retain their own evidence scope.',
    '2025 年十二月二日对 2023 年原描述、DOI 10.3897/zookeys.1168.96091 的更正指出，原表一三个新种 GenBank 登录号错误。LC575221、LC575222、LC575223 分别替换为 LC757221、LC757222、LC757223。更正具有自己的 DOI 10.3897/zookeys.1261.175115。此处旧值仅用于辨认已被替代的发表错误，不是本种现行序列绑定。通知不增加标本、不认证当代目录身份、不独立核验下载序列内容，也不报告重估距离或节点支持。其修正标识，原形态、野外观察及有条件系统树保留自己的证据范围。']]
}])
