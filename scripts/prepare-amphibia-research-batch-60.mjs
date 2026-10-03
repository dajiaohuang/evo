import { prepareAmphibianResearchInput } from './prepare-amphibia-research-input.mjs'
const citation = { pmc: 'PMC13213382', year: 2026, readScope: 'Species Distribution and Notes paragraphs; new survey observation distinguished from cited historical geographic synthesis' }
prepareAmphibianResearchInput([
  { colId: '6PFRV', name: 'Leptobrachella petrops', ...citation, sections: [
    ['distribution', 'A Ba Vi observation alongside an earlier park record', '此前公园记录之外的 Ba Vi 观察', 'The 2026 checklist reported observing this species during its Ba Vi National Park surveys and cited Chen and colleagues’ 2018 park record. Its statement that the species was known only from Vietnam relied on a cited checklist. The new observation is distinguished from that broader cited range synthesis; neither establishes absence outside Vietnam or a complete current distribution.', '2026 年名录报告在其 Ba Vi 国家公园调查中观察到本种，并引用 Chen 等人 2018 年的公园记录。文中仅从越南已知的说法依据所引用名录。新增观察与更广泛的引用分布综合分别保留；两者均不能确定越南之外不存在或完整当前分布。']
  ] },
  { colId: '5CB2K', name: 'Xenophrys maosonensis', ...citation, sections: [
    ['distribution', 'Observed again in Ba Vi National Park', 'Ba Vi 国家公园的再次观察', 'The checklist cited a 2009 Ba Vi record and reported observing this frog during its own surveys. It also synthesized records from Vietnam and China using cited sources. The park observation is new evidence within this study, while the wider geographic list was not independently re-surveyed at every locality here.', '名录引用 2009 年 Ba Vi 记录，并报告在其自身调查中再次观察此蛙。文中另依据引用来源综合越南及中国记录。公园观察属于本研究新增证据，而更广泛地理名单未在此对每个地点独立重新调查。']
  ] },
  { colId: '6MN53', name: 'Hylarana guentheri', ...citation, sections: [
    ['distribution', 'A new survey observation and a cited regional list', '新增调查观察及引用的区域名单', 'The Ba Vi checklist reported observing this frog and cited an earlier 2009 park record. Its broader list included Vietnam, China, Taiwan, Myanmar and Laos, drawing on that earlier synthesis. These are different evidence types: a new local encounter and a cited regional account, without proof of continuous occupancy across the listed regions.', 'Ba Vi 名录报告观察到此蛙，并引用此前 2009 年公园记录。其更广泛名单包括越南、中国、台湾、缅甸及老挝，依据更早综合。这是两种不同证据：新增当地遭遇与引用区域记述，不能证明所列区域之间连续占据。']
  ] },
  { colId: '6MN5H', name: 'Hylarana taipehensis', ...citation, sections: [
    ['distribution', 'A historical park record without a new detection', '没有新增检出的历史公园记录', 'The 2026 checklist retained the species using a cited 2009 Ba Vi record, but explicitly said it was not observed during the present surveys. It also cited a wider Asian geographic list. Inclusion in this checklist therefore does not mean a new encounter, and the survey nondetection is not treated as proven local extinction.', '2026 年名录依据引用的 2009 年 Ba Vi 记录保留本种，但明确说明此次调查未观察到。文中另引用更广泛亚洲地理名单。因此名录收录不意味着新增遭遇，调查未检出也不作为已证明地方灭绝。']
  ] },
  { colId: '4LD5C', name: 'Polypedates megacephalus', ...citation, sections: [
    ['distribution', 'A survey observation in a historically recorded park', '历史有记录公园中的调查观察', 'The checklist reported this species during its Ba Vi surveys and cited a previous 2009 park record. Its broader distribution summary was also attributed to earlier literature, including Vietnam and other Asian regions. The account adds local presence evidence, without establishing range-wide occupancy or resolving every historical identification under current taxonomy.', '名录报告在其 Ba Vi 调查中观察到本种，并引用此前 2009 年公园记录。更广泛分布综合同样归于更早文献，包括越南及其他亚洲区域。该记述新增当地存在证据，不能确定整个分布区的占据或在当前分类下解决每份历史鉴定。']
  ] },
  { colId: '785TR', name: 'Polypedates mutus', ...citation, sections: [
    ['distribution', 'Ba Vi presence reported in the new surveys', '新增调查报告的 Ba Vi 存在', 'The checklist reported observing this frog in Ba Vi National Park and cited an earlier 2009 record. The accompanying geographic summary listed Vietnam, China, Myanmar, Laos and Thailand from earlier literature. This preserves a new park observation separately from the cited wider list, without assuming continuous distribution or present occupancy at all historical localities.', '名录报告在 Ba Vi 国家公园观察到此蛙，并引用更早 2009 年记录。相邻地理综合依据更早文献列出越南、中国、缅甸、老挝及泰国。此处将新增公园观察与引用的更广泛名单分别保留，不假定连续分布或所有历史地点当代占据。']
  ] },
  { colId: '72DJD', name: 'Limnonectes bannaensis', ...citation, sections: [
    ['distribution', 'Ba Vi observation within a cited regional synthesis', '引用区域综合中的 Ba Vi 观察', 'The checklist cited a 2009 park record and reported observing this species in its new Ba Vi surveys. Its broader summary referred to Vietnamese localities and records in China, Laos, Myanmar and Thailand using cited sources. This local observation is not a new verification of every country record, a continuous range or the identity of all earlier vouchers.', '名录引用 2009 年公园记录，并报告在新增 Ba Vi 调查中观察到本种。更广泛综合依据引用来源涉及越南地点及中国、老挝、缅甸、泰国记录。这一当地观察并非对每个国家记录、连续分布或全部更早凭证身份的重新核实。']
  ] }
])
