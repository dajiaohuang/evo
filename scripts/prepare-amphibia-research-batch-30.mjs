import { prepareAmphibianResearchInput } from './prepare-amphibia-research-input.mjs'
const citation = { pmc: 'PMC6687670', year: 2019, readScope: 'Species distribution and natural-history paragraph' }
prepareAmphibianResearchInput([
  { colId: 'SCC8B', name: 'Pristimantis multicolor', ...citation, sections: [
    ['ecology', 'Multiple substrates in Yacuri records', 'Yacuri 记录中的多种基质', 'The revision reported Yacuri National Park sites in Loja and Zamora Chinchipe at 3186–3515 m, in páramo and eastern montane forest. Late-afternoon and nighttime encounters included moss, mat-forming plants, tussock grasses, rocks, shrub branches and bromeliads. Daytime specimens were inside bromeliads. These varied encounters do not establish an obligatory bromeliad life cycle or equivalent use of every substrate.', '修订报告 Loja 与 Zamora Chinchipe 的 Yacuri 国家公园海拔 3186—3515 米高山草甸及东坡山地林地点。傍晚与夜间发现涉及苔藓、垫状植物、丛生草、岩石、灌木枝及凤梨科植物；日间标本位于凤梨科植物内部。这些多样发现不能确立必须依赖凤梨科植物的生活史或对每种基质的等量利用。'],
    ['reproduction', 'Three months of reproductive observations', '三个月份的繁殖观察', 'Calling males and gravid females were found in December, April and May; males called from low shrub branches. These records identify observed reproductive activity in those months, without showing continuous reproduction between them, egg-deposition sites or clutch sizes.', '十二月、四月与五月发现鸣叫雄性及怀卵雌性，雄性从灌木低枝鸣叫。这些记录说明所述月份已观察的繁殖活动，不能说明月份之间持续繁殖、产卵地点或窝卵数。']
  ] },
  { colId: 'SCC8G', name: 'Pristimantis nangaritza', ...citation, sections: [
    ['ecology', 'Night branches at Alto Nangaritza', 'Alto Nangaritza 的夜间枝条', 'The revision reported only the Alto Nangaritza Protected Forest type locality in Ecuador at 1809–1843 m, in low-stature foothill forest with bromeliads, orchids, moss and Podocarpus. Individuals were active at night on branches 1–2 m above ground, and calling males were found in April. These observations retain locality and survey scope; poorly explored adjacent areas are not confirmed records, and calling alone does not identify egg sites.', '修订仅报告厄瓜多尔 Alto Nangaritza 保护林海拔 1809—1843 米模式地点，环境为包含凤梨科植物、兰、苔藓及罗汉松的低矮山麓林。个体夜间活动于离地 1—2 米枝条，四月发现鸣叫雄性。这些观察保留地点与调查范围；探索不足的邻近区域不是已确认记录，仅有鸣叫也不能识别卵位。']
  ] }
])
