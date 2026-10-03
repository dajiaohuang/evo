import { prepareAmphibianResearchInput } from './prepare-amphibia-research-input.mjs'
const citation = { pmc: 'PMC6687670', year: 2019, readScope: 'Species distribution and natural-history paragraph' }
prepareAmphibianResearchInput([
  { colId: 'SCC8Y', name: 'Pristimantis teslai', ...citation, sections: [
    ['ecology', 'Páramo shelters and nighttime vegetation', '高山草甸庇护处与夜间植被', 'The revision reported two eastern-Andean páramo localities in Tungurahua, Ecuador. Daytime individuals were beneath rocks, among moss or bunch grasses; at night they were active on low vegetation up to 80 cm high. Additional populations in largely unexplored Llanganates National Park were considered possible, without being confirmed. The records distinguish shelter and active encounters rather than a complete activity budget or range.', '修订报告厄瓜多尔 Tungurahua 东安第斯两个高山草甸地点。日间个体位于岩石下、苔藓或丛生草中；夜间活动于不超过 80 厘米的低矮植被。作者认为大部分尚未探索的 Llanganates 国家公园可能有新增种群，但未确认。这些记录分别保留庇护与活动发现，不是完整活动时间分配或分布。']
  ] },
  { colId: 'SCC92', name: 'Pristimantis torresi', ...citation, sections: [
    ['ecology', 'Bromeliads and low vegetation in Loja records', 'Loja 记录的凤梨科植物与低矮植被', 'The revision reported surroundings of Celica, Guachanamá and La Tolera in western-Andean Loja, at 2101–2833 m. Most nighttime specimens occurred in terrestrial or arboreal bromeliads up to 3 m high within native-vegetation patches, or on low vegetation up to 60 cm high. Daytime encounters were only inside bromeliads. These sample-specific observations do not establish obligatory bromeliad breeding or an exclusive daily activity pattern.', '修订报告安第斯西坡 Loja 的 Celica、Guachanamá 与 La Tolera 周边，海拔 2101—2833 米。多数夜间标本位于原生植被残片内、不超过 3 米的陆生或树生凤梨科植物中，或不超过 60 厘米的低矮植被。日间仅在凤梨科植物内部发现。这些样本特定观察不能确立必须在凤梨科植物繁殖或排他日活动模式。'],
    ['reproduction', 'A February calling record', '二月鸣叫记录', 'Calling males were found in February on low vegetation about 30 cm above ground. This documents recorded calling sites and timing, without locating eggs, specifying development mode or establishing the entire annual reproductive season.', '二月在离地约 30 厘米的低矮植被发现鸣叫雄性。这记录已观察鸣叫地点与时间，未定位卵、指定发育模式或确立完整年度繁殖季。']
  ] }
])
