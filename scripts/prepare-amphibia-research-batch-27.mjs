import { prepareAmphibianResearchInput } from './prepare-amphibia-research-input.mjs'
const citation = { pmc: 'PMC6658573', year: 2019, readScope: 'Species natural-history account; article prose only, excluding separately licensed datasets' }
prepareAmphibianResearchInput([
  { colId: 'SCD3B', name: 'Pristimantis cajanuma', ...citation, sections: [
    ['ecology', 'Low vegetation near a cloud-forest trail', '云雾林小径附近的低矮植被', 'The description reported the Cajanuma entrance to Podocarpus National Park at 2882–3097 m in mountain cloud forest. Specimens were encountered at night near the Los Miradores trail, usually 10–40 cm above ground on vegetation. No calling male was encountered. These collection observations do not establish dependence on trails, an exclusive perch height or absence of calling at other times.', '原始描述报告 Podocarpus 国家公园 Cajanuma 入口海拔 2882—3097 米的山地云雾林。标本夜间发现于 Los Miradores 小径附近植被，通常离地 10—40 厘米，未遇到鸣叫雄性。这些采集观察不能确立依赖小径、排他栖位高度或其他时间没有鸣叫。']
  ] },
  { colId: '4MJK7', name: 'Pristimantis orestes', ...citation, sections: [
    ['ecology', 'Pasture sampling in subpáramo', '亚高山草甸牧场采样', 'The revision found its specimens in subpáramo pastureland, at night on grassy vegetation usually 10–20 cm above ground near a road. Calling males were encountered between May and August. This study sample documents pasture encounters and a recorded calling window, without establishing pasture preference, a complete reproductive calendar or breeding success in disturbed habitat.', '修订在亚高山草甸牧场发现所研究标本，夜间位于路旁通常离地 10—20 厘米的草本植被。五月至八月遇到鸣叫雄性。这一研究样本记录牧场发现及鸣叫窗口，不能确立牧场偏好、完整繁殖日历或受干扰生境的繁殖成功率。']
  ] }
])
