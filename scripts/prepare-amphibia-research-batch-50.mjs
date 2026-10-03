import { prepareAmphibianResearchInput } from './prepare-amphibia-research-input.mjs'
const citation = { pmc: 'PMC5126525', year: 2016, readScope: 'Species distribution and natural-history account' }
prepareAmphibianResearchInput([
  { colId: '7BQCP', name: 'Tepuihyla shushupe', ...citation, sections: [
    ['ecology', 'A calling male in a water-filled tree hole', '蓄水树洞中的鸣叫雄性', 'The description reported the type locality in the Ere–Campuya headwaters of Peru’s Putumayo basin at 145 m. The holotype called from a narrow water-holding tree hole 1.5 m above ground, with most of its body submerged. Playback elicited faster calling and movement to the entrance. These observations document one male’s calling site and response, without proving egg deposition there or a general territorial mechanism.', '原始描述报告秘鲁 Putumayo 流域 Ere—Campuya 源头海拔 145 米模式地点。正模从离地 1.5 米的狭窄蓄水树洞鸣叫，大部分身体浸水。回放引发更快鸣叫及移至洞口。这些观察记录一只雄性的鸣叫地点与反应，不能证明在那里产卵或通用领域机制。'],
    ['reproduction', 'Calling detections with other stages unobserved', '鸣叫检出与未观察到的其他阶段', 'The authors detected at least six individuals by advertisement calls during 18 survey hours near the holotype locality; none of those additional callers was collected. Females, amplectant pairs, clutches and tadpoles were unobserved. These records do not provide a standardized population density or a verified larval habitat.', '作者在正模地点附近 18 小时调查中通过广告鸣声检出至少六只个体，未采集这些新增鸣叫者。未观察到雌性、抱对、卵窝或蝌蚪。这些记录不提供标准化种群密度或已验证幼体生境。']
  ] },
  { colId: '7BQCM', name: 'Tepuihyla tuberculosa', ...citation, sections: [
    ['ecology', 'Night vegetation and one tree-hole caller', '夜间植被与一只树洞鸣叫者', 'Specimens with ecological data were collected at night on vegetation 1.5–3 m above ground. At Juyuintza, one male called from a partly flooded tree hole 1.5 m high in terra firme forest, with two other callers nearby. No amplectant pairs, clutches or tadpoles were observed. Calling from a water-filled cavity is not presented as confirmed egg deposition or larval development.', '有生态资料标本夜间采自离地 1.5—3 米植被。在 Juyuintza，一只雄性从陆地林中离地 1.5 米、部分积水树洞鸣叫，附近另有两只鸣叫者。未观察到抱对、卵窝或蝌蚪。蓄水腔体鸣叫不作为已确认产卵或幼体发育。']
  ] }
])
