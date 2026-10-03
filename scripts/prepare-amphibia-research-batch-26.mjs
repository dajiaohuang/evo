import { prepareAmphibianResearchInput } from './prepare-amphibia-research-input.mjs'
const citation = { pmc: 'PMC6687670', year: 2019, readScope: 'Species distribution, natural-history and conservation-status account' }
prepareAmphibianResearchInput([
  { colId: 'SCC76', name: 'Pristimantis atillo', ...citation, sections: [
    ['ecology', 'Night vegetation and daytime rock shelters', '夜间植被与日间岩下庇护处', 'The revision reported Lagunas de Atillo and nearby Sangay National Park localities at 3185–3730 m. Most nighttime captures were active on vegetation up to 1 m high, with one bromeliad record at 2.5 m; daytime specimens were beneath rocks. Most collections were roadside, so the encounter pattern does not establish dependence on roads or a universal perch-height limit. Calling males were recorded in March, without defining the full breeding season.', '修订报告 Lagunas de Atillo 及附近 Sangay 国家公园海拔 3185—3730 米地点。多数夜间采集个体活动于不超过 1 米的植被，另有一只在 2.5 米高凤梨科植物中；日间标本位于岩石下。多数采集在路旁，发现模式不能确立依赖道路或通用栖位高度极限。三月记录鸣叫雄性，但未限定完整繁殖季。']
  ] },
  { colId: 'SCC7C', name: 'Pristimantis chomskyi', ...citation, sections: [
    ['ecology', 'Bromeliad encounters at the type locality', '模式地点的凤梨科植物发现', 'The revision knew the species from Tapichalaca Reserve, Ecuador, at 3366 m. All studied individuals were found at night inside bromeliads, mostly Puya. Nearby national parks were proposed as potential habitat because they remained unexplored. Those possible areas are not confirmed occurrence records, and the bromeliad encounters do not establish egg deposition or obligatory bromeliad use throughout the life cycle.', '修订已知本种来自厄瓜多尔 Tapichalaca 保护区海拔 3366 米。全部研究个体于夜间发现于凤梨科植物内部，主要为 Puya。附近国家公园因尚未探索，被提出为潜在生境。这些可能区域不是已确认出现记录，凤梨科植物内发现也不能确立产卵或整个生活史必须利用该类植物。']
  ] }
])
