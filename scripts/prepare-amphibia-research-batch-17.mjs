import { prepareAmphibianResearchInput } from './prepare-amphibia-research-input.mjs'
const scope = 'Species ecology treatment; survey encounters and environmental readings'
prepareAmphibianResearchInput([
  { colId: 'TZ6TF', name: 'Hylarana annamitica', pmc: 'PMC12485483', year: 2025, readScope: scope, sections: [
    ['ecology', 'Ground encounters near two streams', '两条溪流附近的地面发现', 'The Ha Nam record study found specimens on the ground near two small streams between 19:00 and 21:00, surrounded by secondary forest with small hardwood trees and shrubs. These encounters describe the sampled setting and times, without establishing exclusive nocturnality, egg sites or the condition of every population.', '河南省记录研究于 19:00—21:00 在两条小溪附近地面发现标本，周围为小型阔叶树与灌木组成的次生林。这些发现描述采样环境及时间，不能确立严格夜行性、卵位或所有种群的状况。']
  ] },
  { colId: '6MN4M', name: 'Hylarana latouchii', pmc: 'PMC10589760', year: 2023, readScope: scope, sections: [
    ['ecology', 'Several collection substrates in the Vietnamese report', '越南报告中的数种采集基质', 'The Vietnamese record study encountered specimens between 19:00 and 23:00 on the ground, in small ponds and in small rocky streams. Surroundings included secondary karst forest and evergreen forest. The account documents different encounter substrates, without demonstrating habitat preference or that the ponds and streams were breeding sites.', '越南记录研究于 19:00—23:00 在地面、小水池及岩石小溪中发现标本，周围包括喀斯特次生林与常绿林。记述记录不同发现基质，不能证明生境偏好或这些池塘与溪流就是繁殖地点。']
  ] },
  { colId: '6PFQH', name: 'Leptobrachella bourreti', pmc: 'PMC12238965', year: 2025, readScope: scope, sections: [
    ['ecology', 'Stream rocks and ground in secondary forest', '次生林溪流岩石与地面', 'The Tay Yen Tu survey found specimens between 19:30 and 20:30 on the ground or rocks in streams, within mixed secondary forest including bamboo and shrubs. Site air temperatures were 20.1–25.7 °C and relative humidity 83–95%. These are survey readings, without establishing thermal tolerance, humidity requirements or larval habitat.', 'Tay Yen Tu 调查于 19:30—20:30 在包含竹与灌木的混合次生林中，于地面或溪流岩石发现标本。地点气温为 20.1—25.7 摄氏度、相对湿度 83%—95%。这些是调查读数，不能确立温度耐受、湿度需求或幼体生境。']
  ] },
  { colId: '6PG46', name: 'Leptobrachella sungi', pmc: 'PMC12238965', year: 2025, readScope: scope, sections: [
    ['ecology', 'Evening rocky-stream banks', '晚间岩石溪流岸边', 'Specimens in the Tay Yen Tu survey occurred on rocky-stream banks between 19:30 and 21:30, surrounded by mixed secondary forest with bamboo and shrubs. Site air temperature ranged from 25.5 to 32.8 °C and humidity from 63 to 82%. The readings describe sampled conditions rather than physiological limits or a recommended captive environment.', 'Tay Yen Tu 调查标本于 19:30—21:30 出现在岩石溪流岸边，周围为包含竹与灌木的混合次生林。地点气温为 25.5—32.8 摄氏度、湿度 63%—82%。读数描述采样条件，不是生理极限或建议圈养环境。']
  ] },
  { colId: '3QZL4', name: 'Kaloula pulchra', pmc: 'PMC12238965', year: 2025, readScope: scope, sections: [
    ['ecology', 'One forest-path encounter', '一次林间小径发现', 'The Tay Yen Tu account found a specimen on a forest path at 21:00 in mixed secondary evergreen forest. Reported site air temperatures were 26.3–33.8 °C and humidity 65–84%. The single specimen encounter does not establish dependence on paths, population abundance or physiological tolerances; the environmental ranges remain survey-site observations.', 'Tay Yen Tu 记述于 21:00 在混合次生常绿林的小径发现一件标本，报告地点气温为 26.3—33.8 摄氏度、湿度 65%—84%。单件标本发现不能确立依赖小径、种群丰度或生理耐受；环境范围仍为调查地点观察。']
  ] },
  { colId: '6MMSF', name: 'Hylarana macrodactyla', pmc: 'PMC12238965', year: 2025, readScope: scope, sections: [
    ['ecology', 'A small-stream collection at night', '夜间小溪采集', 'The Tay Yen Tu account found a specimen in a small stream at 20:30, surrounded by mixed secondary evergreen forest. Site air temperature was reported as 27.5–34.1 °C and humidity as 68–82%. Those observations retain their collection scope, without proving stream breeding, exclusive aquatic activity or physiological limits.', 'Tay Yen Tu 记述于 20:30 在混合次生常绿林围绕的小溪发现一件标本，报告地点气温为 27.5—34.1 摄氏度、湿度 68%—82%。这些观察保留采集范围，不能证明溪流繁殖、排他的水栖活动或生理极限。']
  ] }
])
