import fs from 'node:fs'
import crypto from 'node:crypto'
const batch = [
  { colId: 'V2GJS', name: 'Amolops gudao', pmc: 'PMC12981243', year: 2025, sections: [
    ['ecology', 'July observations beside swift streams', '七月急流旁的观察', 'The 2025 description knew the species only from Baihualing, Longyang, Yunnan. During July surveys between 21:00 and midnight, frogs were observed on large stream rocks or banks beside wide, swift mountain streams bordered by broadleaf and bamboo forest. Disturbed individuals jumped into water. These observations describe the sampled sites and nights, without establishing an exclusive habitat requirement.', '2025 年描述当时仅从云南隆阳百花岭了解本种。七月 21:00 至午夜的调查在宽阔急流中的大石或岸边观察到个体，溪流两侧为阔叶林与竹林；受到惊扰的个体跳入水中。这些观察描述所调查地点与夜晚，不能确立排他的生境要求。'],
    ['reproduction', 'An inferred July–August season', '推测的七至八月繁殖期', 'The authors found tadpoles on 8 July and adults on 19 July; collected males had nuptial pads and females carried eggs. They proposed breeding around July–August. The proposal remains an inference from these observations, rather than a demonstrated complete annual breeding season.', '作者于七月八日发现蝌蚪，十九日发现成年个体；采集雄性有婚垫，雌性怀卵。作者据此提出可能在七至八月繁殖。这仍是基于这些观察的推测，并非已证实的完整年度繁殖季节。']
  ] },
  { colId: 'M6296', name: 'Blommersia nataliae', pmc: 'PMC7686220', year: 2020, sections: [
    ['distribution', 'Two surveyed Mayotte mountains', '马约特两座山的调查记录', 'The description recorded frogs in forest and bamboo on Mont M’Sapere at 235–409 m and on Mont Bénara at a 317 m site in Mayotte. These are dated survey records from 2012, 2014 and 2019; unsuccessful searches elsewhere do not prove complete absence from every other locality.', '原始描述记录了马约特 Mont M’Sapere 海拔 235–409 米的森林、竹林个体，以及 Mont Bénara 一个 317 米地点的个体。这是 2012、2014 与 2019 年的调查记录；其他地方未找到个体，不能证明所有其他地点均完全不存在本种。'],
    ['reproduction', 'Eggs above water in cut bamboo', '截断竹筒水面上方的卵', 'Three clutches counted at Mont M’Sapere in November 2012 contained 42, 43 and 22 eggs, placed on inner bamboo walls above water. Only some appeared fertilized. Eggs and tadpoles were observed during wet periods in November–December 2012 and April 2014. Suggested provisioning of unfertilized eggs to tadpoles remained a hypothesis needing further work. Failure to hear calls during the observations does not establish that the species never calls.', '2012 年十一月在 Mont M’Sapere 计数的三窝卵分别含 42、43 与 22 枚，置于竹筒内壁的水面上方；仅部分看似受精。研究在 2012 年十一至十二月及 2014 年四月的湿润时期观察到卵和蝌蚪。未受精卵可能为蝌蚪供食的解释仍是待研究的假说。观察中未听见鸣叫，不能确立本种从不鸣叫。']
  ] },
  { colId: 'V44RT', name: 'Boulenophrys daxuemontis', pmc: 'PMC12246799', year: 2025, sections: [
    ['distribution', 'Daxue Mountain survey records', '大雪山调查记录', 'The description reported specimens at 1400–1500 m on Daxue Mountain near the Sichuan–Yunnan border. Its distribution paragraph once uses the different spelling daxueshanensis; that internal spelling is retained as a source discrepancy rather than a separate biological assignment. The field records do not establish total population size.', '原始描述报告四川、云南交界附近大雪山海拔 1400–1500 米的标本。分布段落有一次使用不同拼写 daxueshanensis；此处将其保留为原文差异，不另作生物学归属。野外记录不能确立种群总量。'],
    ['ecology', 'Rainy-night stream observations', '雨夜溪流观察', 'During an overcast rainy-night survey from 20:00 to 22:00, frogs were frequently found on stream stones surrounded by evergreen broadleaf forest. Survey air temperature was about 16 °C and relative humidity 85–95%; these are observation conditions, not physiological limits. No usable call recordings or tadpoles were obtained, so those facets remain unresolved.', '在阴雨夜晚 20:00—22:00 的调查中，个体经常出现在常绿阔叶林围绕的溪流石上。调查气温约 16 摄氏度、相对湿度 85%—95%；这是观察条件，不是生理极限。研究未取得可用的鸣声记录或蝌蚪，这些主题仍未解决。']
  ] },
  { colId: 'TZ76C', name: 'Boulenophrys lichun', pmc: 'PMC11512100', year: 2024, sections: [
    ['distribution', 'Coastal hills of eastern Fujian', '福建东部沿海丘陵', 'The description knew the species from the coastal hills of Ningde, eastern Fujian, China, at 150–510 m elevation. This recorded range reflects the study’s sites, rather than a complete contemporary distribution or altitude tolerance.', '原始描述当时从中国福建东部宁德沿海丘陵海拔 150–510 米了解本种。这一记录范围反映研究地点，不是完整当代分布或海拔耐受范围。'],
    ['ecology', 'Seeps, litter and calling crevices', '渗流、落叶与鸣叫裂隙', 'Frogs inhabited flowing mountain seeps and nearby forest floor and leaf litter, surrounded by secondary forest mixed with bamboo. Males were heard calling in rock crevices from February to May. Those calling observations do not establish egg-laying dates, larval development or the full annual reproductive cycle.', '个体栖于流动的山地渗流及附近林地表面、落叶层，周围为混有竹林的次生林。二月至五月听到雄性在岩石裂隙中鸣叫。这些鸣叫观察不能确立产卵日期、幼体发育或完整年度繁殖周期。']
  ] },
  { colId: 'V5MWR', name: 'Brachytarsophrys qiannanensis', pmc: 'PMC8881434', year: 2022, sections: [
    ['distribution', 'The Libo type-locality sample', '荔波模式地点的样本', 'The original description recorded the species at its type locality in Libo County, Guizhou, China, at 1100–1200 m elevation. These type-locality records do not establish the full geographic range or an altitude limit.', '原始描述记录中国贵州荔波县模式地点海拔 1100–1200 米的本种。这些模式地点记录不能确立完整地理分布或海拔极限。'],
    ['ecology', 'Calling beneath stream rocks', '溪流岩石下的鸣叫', 'The described habitat was a mountain stream beneath evergreen broadleaf forest, with little surface water. Males were heard calling beneath rocks at night, and females were frequently found near large rocks. These observations document local habitat use and calling sites, without establishing egg deposition or tadpole requirements.', '描述的生境为常绿阔叶林下表面水量较小的山溪。夜间听到雄性在岩石下鸣叫，雌性经常见于大石附近。这些观察记录地方生境使用与鸣叫地点，不能确立产卵方式或蝌蚪所需条件。']
  ] },
  { colId: 'M6456', name: 'Breviceps ombelanonga', pmc: 'PMC7609483', year: 2020, sections: [
    ['distribution', 'Three genetically supported Angolan areas', '安哥拉三个遗传证据支持地区', 'The study confirmed records from Kissama National Park in western Angola, central Bié and river-source areas in Moxico. Reported elevations ranged from near sea level to above 1400 m. Other Angolan Breviceps records were left uncertain pending additional sampling and genetics; they are not automatically assigned to this species.', '研究确认了安哥拉西部基萨马国家公园、中部比耶及莫希科河源地区的记录。报告海拔从接近海平面到超过 1400 米。其他安哥拉 Breviceps 记录因仍需采样与遗传证据而保持不确定，此处不自动归入本种。'],
    ['ecology', 'Rain-associated collections and food records', '雨后采集与食物记录', 'The type series was collected after gentle rain in habitats spanning sandy savanna and wetter miombo woodland. The holotype was observed eating small unidentified ants. Remains were also reported from two snake stomachs. These local records identify observed feeding and predation events, not the complete diet; egg sites and clutch sizes were unknown in the description.', '模式系列在小雨后采集，所描述生境涉及沙质稀树草原及较湿润的米翁博林地。观察到正模摄食无法进一步鉴定的小蚂蚁，并在两种蛇的胃内报告了本种残体。这些地方记录识别所观察的摄食、被捕食事件，不是完整食谱；原始描述尚不知道卵的位置与每窝卵数。']
  ] }
]
const file = 'docs/amphibia-content/primary-reader-authoring-input.json'
const inputs = JSON.parse(fs.readFileSync(file))
const taxa = new Map(JSON.parse(fs.readFileSync('data/sources/snapshots/amphibia-content-scope-2026-10-02/col26.8-accepted-species.json')).map(taxon => [taxon.colId, taxon.scientificName]))
for (const entry of batch) {
  if (taxa.get(entry.colId) !== entry.name) throw new Error(`Pinned species mismatch ${entry.colId}`)
  const reading = JSON.parse(fs.readFileSync(`data/sources/snapshots/amphibia-primary-corpus-2026-10-02/${entry.pmc}/reading-sections.json`))
  const hex = crypto.createHash('sha256').update(reading.articleIds.doi.toLowerCase()).digest('hex')
  const referenceId = `ref-${hex.slice(0, 8)}-${hex.slice(8, 12)}-4${hex.slice(13, 16)}-a${hex.slice(17, 20)}-${hex.slice(20, 32)}`
  const key = `primary-${entry.pmc.toLowerCase()}-${entry.colId.toLowerCase()}`
  const study = { ...entry, key, referenceId, dir: `amphibia-primary-corpus-2026-10-02/${entry.pmc}`, title: reading.title, authors: reading.authorsAsRecorded, doi: reading.articleIds.doi, readScope: `${entry.name} distribution, ecology and natural-history account; no figures or deposited datasets reproduced` }
  const existing = inputs.findIndex(input => input.key === key)
  if (existing >= 0) inputs[existing] = study
  else inputs.push(study)
}
fs.writeFileSync(file, JSON.stringify(inputs, null, 2) + '\n')
console.log(JSON.stringify({ speciesPrepared: batch.length, bilingualSections: batch.reduce((n, entry) => n + entry.sections.length, 0), testsRun: false }))
