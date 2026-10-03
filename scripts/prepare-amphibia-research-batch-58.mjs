import { prepareAmphibianResearchInput } from './prepare-amphibia-research-input.mjs'
const citation = { pmc: 'PMC13213382', year: 2026, readScope: 'Species Notes paragraph from Ba Vi National Park checklist; field encounter conditions, not physiology or habitat preference' }
prepareAmphibianResearchInput([
  { colId: '48BSS', name: 'Occidozyga martensii', ...citation, sections: [
    ['ecology', 'Path-side puddles in an ecotourism area', '生态旅游区路旁水洼', 'The Ba Vi survey found specimens at 22:30 beside puddles near a path in the Thang Thien Waterfall ecotourism area. Reported encounter conditions were 26 °C and 89% humidity. These local records do not demonstrate a preference for tourism infrastructure, a breeding site or physiological requirements.', 'Ba Vi 调查于 22:30 在 Thang Thien 瀑布生态旅游区一条小径附近水洼旁发现标本。报告遭遇条件为 26 °C、湿度 89%。这些当地记录不能证明对旅游设施的偏好、繁殖地点或生理要求。']
  ] },
  { colId: '6T2ZZ', name: 'Ophryophryne microstoma', ...citation, sections: [
    ['ecology', 'Separate male and female night encounter substrates', '雌雄不同的夜间遭遇基质', 'The account found male voucher VNUF R.2024.25 on the ground at Ngoc Hoa stream and female VNUF R.2024.31 on a tree leaf at the Old French Church ruins between 21:54 and 23:00. Surroundings included secondary forest, streams and banana vegetation; reported conditions were 24–27 °C and 92–94% humidity. Two specimen records do not establish sex-specific habitat preferences or a complete activity schedule.', '记述于 21:54—23:00 发现雄性凭证 VNUF R.2024.25 在 Ngoc Hoa 溪流处地面、雌性凭证 VNUF R.2024.31 在旧法国教堂遗址树叶上。周围包括次生林、溪流及香蕉植被；报告条件为 24—27 °C、湿度 92%—94%。两份标本记录不能确定性别特异生境偏好或完整活动日程。']
  ] },
  { colId: 'QMTB3', name: 'Nanohyla marmorata', ...citation, sections: [
    ['ecology', 'Two night records at separate ruin sites', '两个遗址地点的夜间记录', 'Male VNUF R.2024.30 was found on a leaf at 21:54 at the Old French Church ruins amid secondary forest, at 24 °C and 92% humidity. Female VNUF R.2024.85 was found on the ground at 23:27 at the French-era prison ruins amid evergreen forest and streams, at 25 °C and 88% humidity. These are individual collection settings, not evidence of sex-specific substrate selection or thermal limits.', '雄性 VNUF R.2024.30 于 21:54 发现于次生林环绕的旧法国教堂遗址叶片上，条件为 24 °C、湿度 92%。雌性 VNUF R.2024.85 于 23:27 发现于常绿林及溪流环绕的法殖时期监狱遗址地面，条件为 25 °C、湿度 88%。这些是个体采集环境，不是性别特异基质选择或温度极限的证据。']
  ] },
  { colId: '6MMSB', name: 'Hylarana maosonensis', ...citation, sections: [
    ['ecology', 'Night leaf encounters at the prison ruins', '监狱遗址的夜间叶片遭遇', 'Specimens were found on tree leaves between 22:30 and 23:40 at the French-era prison ruins, surrounded by evergreen forest and streams. The account reported 23–25 °C and 85–91% humidity. This collection description does not define an obligatory tree-dwelling habit, breeding substrate or physiological range.', '标本于 22:30—23:40 发现于法殖时期监狱遗址的树叶上，周围为常绿林及溪流。记述报告 23—25 °C、湿度 85%—91%。该采集描述不能定义必需树栖习性、繁殖基质或生理范围。']
  ] },
  { colId: '48SFC', name: 'Odorrana chloronota', ...citation, sections: [
    ['ecology', 'A main-road night encounter', '主路上的夜间遭遇', 'The survey found specimens on the main road at 22:00, with evergreen forest around the site, at a reported 25 °C and 90% humidity. A road encounter is retained as a collection observation, without inferring road preference, disturbance tolerance or a general activity pattern.', '调查于 22:00 在主路发现标本，周围为常绿林，报告条件为 25 °C、湿度 90%。路面遭遇保留为采集观察，不推断道路偏好、扰动耐受或一般活动规律。']
  ] },
  { colId: '6NQJL', name: 'Kurixalus bisacculus', ...citation, sections: [
    ['ecology', 'Two frogs on a trail-side tree leaf', '林间小径旁树叶上的两只蛙', 'Both specimens were found at 23:40 on a tree leaf along the Thuong Temple trail in evergreen forest. Reported conditions were 21 °C and 90% humidity. This documents the encounter time and substrate of the sampled individuals, without proving habitat preference or measured physiological requirements.', '两份标本均于 23:40 发现于常绿林中 Thuong 寺小径沿线的一片树叶上。报告条件为 21 °C、湿度 90%。这记录所采个体的遭遇时间及基质，不能证明生境偏好或测量的生理要求。']
  ] },
  { colId: '78T3S', name: 'Raorchestes parvulus', ...citation, sections: [
    ['ecology', 'Night leaves near evergreen forest and streams', '常绿林及溪流附近的夜间叶片', 'Both specimens were found on tree leaves between 22:30 and 23:40, with evergreen forest and streams around the site. Reported conditions were 23–25 °C and 85–91% humidity. The records concern these encounters, without defining an annual breeding season, egg location or physiological limits.', '两份标本于 22:30—23:40 发现于树叶上，周围为常绿林及溪流。报告条件为 23—25 °C、湿度 85%—91%。这些记录限定于此次遭遇，不能定义年度繁殖季、卵的位置或生理极限。']
  ] },
  { colId: '568HJ', name: 'Theloderma corticale', ...citation, sections: [
    ['ecology', 'Night encounters near a ranger-station water tank', '护林站水箱附近的夜间遭遇', 'Both specimens were found near the ranger-station water tank between 22:00 and 23:00, at a reported 23 °C and 97% humidity. The paragraph does not report eggs or larvae in the tank, so this proximity is not assigned as demonstrated breeding or larval habitat.', '两份标本于 22:00—23:00 发现于护林站水箱附近，报告条件为 23 °C、湿度 97%。该段未报告水箱中的卵或幼体，因此这种邻近不作为已证实繁殖或幼体生境。']
  ] }
])
