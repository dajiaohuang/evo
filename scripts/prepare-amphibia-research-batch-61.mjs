import { prepareAmphibianResearchInput } from './prepare-amphibia-research-input.mjs'
// Each row was read from the paired Distribution and Notes entries in the
// captured checklist. These are cited records, not new field observations.
const records = [
  ['6N7MS', 'Ingerophrynus galeatus', 'Vietnam, China, Laos and Cambodia', '越南、中国、老挝及柬埔寨', 'Hecht et al. (2013)'],
  ['6PFRX', 'Leptobrachella nyx', 'Vietnam and China', '越南及中国', 'Hecht et al. (2013) and Chen et al. (2018)'],
  ['3TKBN', 'Leptobrachium chapaense', 'Vietnam, China, Myanmar, Laos and Thailand', '越南、中国、缅甸、老挝及泰国', 'Hecht et al. (2013)'],
  ['6NK4V', 'Kalophrynus interlineatus', 'Vietnam, India, China, Myanmar, Laos, Thailand, Cambodia and Indonesia', '越南、印度、中国、缅甸、老挝、泰国、柬埔寨及印度尼西亚', 'Hecht et al. (2013)'],
  ['72DB8', 'Limnonectes quangninhensis', 'Vietnam', '越南', 'Pham et al. (2019)'],
  ['4R28G', 'Quasipaa acanthophora', 'Vietnam', '越南', 'Hecht et al. (2013)'],
  ['47DFP', 'Nidirana chapaensis', 'Vietnam, Laos and China', '越南、老挝及中国', 'Hecht et al. (2013)'],
  ['48SFH', 'Odorrana fengkaiensis', 'Vietnam and China', '越南及中国', 'Hecht et al. (2013) and Pham et al. (2020)'],
  ['48SFM', 'Odorrana graminea', 'Vietnam and China', '越南及中国', 'Hecht et al. (2013)'],
  ['48SH4', 'Odorrana yentuensis', 'China and Vietnam', '中国及越南', 'Hecht et al. (2013)'],
  ['6HQRJ', 'Feihyla vittata', 'Vietnam, India, China, Myanmar, Laos, Thailand and Cambodia', '越南、印度、中国、缅甸、老挝、泰国及柬埔寨', 'Hecht et al. (2013)'],
  ['3VNX5', 'Liuixalus feii', 'China and Vietnam', '中国及越南', 'Pham et al. (2018)'],
  ['568H7', 'Theloderma albopunctatum', 'Vietnam, China, India, Myanmar, Laos, Thailand and Cambodia', '越南、中国、印度、缅甸、老挝、泰国及柬埔寨', 'Hecht et al. (2013) and Poyarkov et al. (2015)'],
  ['TWL49', 'Zhangixalus pachyproctus', 'Vietnam, China and Laos', '越南、中国及老挝', 'Hecht et al. (2013) and Yu et al. (2019)'],
  ['7DBJW', 'Tylototriton vietnamensis', 'Vietnam and Laos', '越南及老挝', 'Hecht et al. (2013)']
]
prepareAmphibianResearchInput(records.map(([colId, name, countries, countriesZh, cited]) => ({
  colId, name, pmc: 'PMC12238965', year: 2025,
  readScope: 'Species Distribution and Notes entries; historical literature record in Tay Yen Tu, not new survey confirmation or certified current taxonomic equivalence',
  sections: [[
    'distribution', 'The checklist’s cited Tay Yen Tu record', '名录引用的 Tay Yen Tu 记录',
    `The 2025 checklist includes ${name} in Tay Yen Tu Nature Reserve, Bac Giang Province, citing ${cited}. Its geographic entry lists ${countries}. These are the checklist’s named records and literature synthesis; the entry does not itself document a new encounter, verify every historical identification under current taxonomy or establish continuous occupancy throughout the listed regions.`,
    `2025 年名录将 ${name} 收录于北江省 Tay Yen Tu 自然保护区，引用 ${cited}。其地理条目列出${countriesZh}。这些是名录列出的记录及文献综合；该条目本身不记录新增遭遇，不在当前分类下核实每份历史鉴定，也不能确定所列区域内连续占据。`
  ]]
})))
