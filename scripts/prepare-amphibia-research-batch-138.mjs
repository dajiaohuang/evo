import fs from 'node:fs'
import { prepareAmphibianResearchInput } from './prepare-amphibia-research-input.mjs'

const source = { pmc: 'PMC7936570', year: 2021, license: 'CC BY 4.0', licenseUrl: 'https://creativecommons.org/licenses/by/4.0/' }
// These are individually read species rows, not group ranges. Table row indices
// include the two header rows and count from zero in the archived XML.
const rows = [
  ['anili','6X53Q',6,3,'pulsatile','脉冲型',980.4,2.9,'1.5–5',6.3,'Seven widely spaced pulses are listed in the table.','表格列出七个间距较大的脉冲。'],
  ['sushili','4RJB5',6,6,'pulsatile','脉冲型',51.2,2.6,'1.5–5',242.8,'The table lists eleven closely spaced pulses, delivered in call groups.','表格列出十一个紧密脉冲，鸣声组成鸣声组。'],
  ['kaikatti','78T3P',6,4,'pulsatile Type 1','第一型脉冲',102.7,2.4,'1.5–5',250.8,'The table gives pulse rate 250.8 per second, whereas the comparison paragraph gives 280.8. Type 2 is separately listed at 68.9 ms and 2.4 kHz, following Type 1 in a fixed order.','表格的脉冲速率为每秒 250.8，比较段落却为 280.8。第二型另列为 68.9 毫秒和 2.4 千赫兹，按固定顺序接在第一型之后。'],
  ['beddomii','4RJ9J',15,9,'pulsatile Type 1','第一型脉冲',150,2.6,'0.5–2',29.2,'Four pulses are listed. Type 2 is a separate non-pulsatile call of 13.2 ms at 2.6 kHz; only Type 2 is described as grouped.','表格列出四个脉冲。第二型是独立的非脉冲鸣声，持续 13.2 毫秒、主频 2.6 千赫兹；表格仅将第二型记为成组发出。'],
  ['dubois','4RJ9X',15,11,'non-pulsatile Type 1','第一型非脉冲',10.6,2.7,'0–2',null,'The table describes generally uniform intervals and calls not delivered in groups. A dash for pulse rate is not a measured zero.','表格描述鸣叫间隔通常均匀，鸣声不组成组。脉冲速率栏的横线不是实测为零。'],
  ['munnarensis','6X544',15,12,'pulsatile Type 1','第一型脉冲',498.2,2.2,'1.5–20',6.4,'Type 1 has three widely spaced pulses. Type 2 is separately listed at 22.8 ms, five closer pulses and 2.2 kHz. Call groups lack a fixed type order.','第一型有三个间距较大的脉冲；第二型另列为 22.8 毫秒、五个更紧密的脉冲和 2.2 千赫兹。鸣声组内的类型顺序不固定。'],
  ['resplendens','7953S',15,14,'non-pulsatile Type 1','第一型非脉冲',51.3,2.5,'0–1',null,'The table lists three broad spectral peaks for Type 1. Type 2 is pulsatile at 28.7 ms and 2.7 kHz; Type 3 is non-pulsatile at 64.7 ms and 2.7 kHz. The height cell is printed beside the Type 2 row.','表格列出第一型有三个宽频谱峰。第二型为脉冲型，28.7 毫秒、2.7 千赫兹；第三型为非脉冲型，64.7 毫秒、2.7 千赫兹。高度单元格印在第二型行旁。'],
  ['chalazodes','4RJ9N',25,26,'non-pulsatile','非脉冲型',18.4,2.7,'1.5–7',null,'Calls are described as rapidly delivered in long groups, with a short rise and longer fall.','鸣声描述为快速组成较长的鸣声组，上升阶段短，下降阶段较长。'],
  ['ochlandrae','78SS4',25,27,'non-pulsatile','非脉冲型',25.3,2.7,'1.5–7',null,'Calls are rapidly delivered in long groups. Similar dominant frequency to chalazodes does not imply identical temporal properties.','鸣声快速组成较长的鸣声组。主频与 chalazodes 相似，不表示时间结构相同。'],
  ['manohari','6X4RS',25,28,'non-pulsatile','非脉冲型',12.3,3.6,'1–7',null,'Calls are rapidly delivered in long groups; this was the shortest duration among the four species compared in the paragraph.','鸣声快速组成较长的鸣声组；该时长是比较段落中四种蛙的最短摘要值。'],
  ['uthamani','4RJBC',25,29,'non-pulsatile','非脉冲型',36,3.4,'1–7',null,'Calls are rapidly delivered in long groups; its reported duration was longer than those of the other three species compared.','鸣声快速组成较长的鸣声组；报告时长高于该段落比较的另外三种。'],
  ['charius','4RJ9P',30,32,'pulsatile','脉冲型',92.6,2.4,'0–1.5',226.6,'Seventeen relatively short and closely packed pulses are listed; calls are not grouped.','表格列出十七个相对短且紧密的脉冲，鸣声不组成组。'],
  ['griet','794S2',30,33,'pulsatile','脉冲型',75.6,3.5,'0.5–1.5',151.3,'The table lists ten relatively short, closely packed pulses and a comparatively long 59.4 ms rise time.','表格列出十个相对短且紧密的脉冲，上升时间为相对较长的 59.4 毫秒。'],
  ['honnametti','6WT3P',30,34,'pulsatile','脉冲型',68.6,2.6,'0.5–1.5',89.3,'Six pulses are listed. The comparison reports a slower pulse rate than those of charius and coonoorensis.','表格列出六个脉冲；比较报告的脉冲速率低于 charius 和 coonoorensis。'],
  ['coonoorensis','6X542',30,35,'pulsatile','脉冲型',24.6,2.9,'0.5–1.5',200,'The table lists three pulses and calls not delivered in groups. One occurrence of coonorensis in the comparison is a spelling variant; the table and other occurrences use coonoorensis.','表格列出三个脉冲，鸣声不组成组。比较段落一处写成 coonorensis，而表格及其他位置使用 coonoorensis。'],
  ['marki','6X4S4',30,38,'pulsatile','脉冲型',36.7,4.1,'1.5–3',266.6,'The table lists four closely packed pulses, with a higher reported dominant frequency than the other charius-group species compared.','表格列出四个紧密脉冲，其报告主频高于比较中的其他 charius 组成员。'],
  ['chotta','4RJ9R',35,43,'pulsatile Type 1','第一型脉冲',71.2,3.6,'0–2',283.5,'Type 1 has nineteen pulses. It is followed in a fixed call-group order by a non-pulsatile Type 2 of 17.2 ms, also at 3.6 kHz.','第一型有十九个脉冲；鸣声组按固定顺序接续非脉冲第二型，第二型为 17.2 毫秒，同为 3.6 千赫兹。'],
  ['archeos','4RJ9G',35,40,'pulsatile Type 1','第一型脉冲',19.7,3.1,'0–2',382.1,'The table lists six closely packed pulses, with uniform intervals and grouped delivery.','表格列出六个紧密脉冲，间隔均匀，鸣声成组发出。'],
  ['blandus','4RJ9K',35,41,'pulsatile Type 1','第一型脉冲',17.1,3.5,'0.5–4',370.3,'Type 1 has three pulses. A separate non-pulsatile Type 2 is listed at 20.1 ms and 3.5 kHz; only Type 1 is grouped and the type order is not fixed.','第一型有三个脉冲；独立的非脉冲第二型另列为 20.1 毫秒、3.5 千赫兹。仅第一型成组发出，两类型顺序不固定。'],
  ['flaviventris','78SS2',45,52,'pulsatile','脉冲型',721.7,1.9,'1–6',21.1,'The table gives duration 721.7 ms, whereas the comparison gives 712.7 ms. Fifteen pulses are listed. These discrepant durations are not averaged.','表格给出时长 721.7 毫秒，比较段落却为 712.7 毫秒；表格列出十五个脉冲。这里不将不一致的时长取平均。'],
  ['ponmudi','78T44',45,53,'pulsatile','脉冲型',480,1.7,'1–7',26.4,'The table gives duration 480.0 ms and rise time 458.7 ms; the comparison gives 458.7 ms as duration. Twelve pulses are listed, and both accounts remain distinguished.','表格给出时长 480.0 毫秒、上升时间 458.7 毫秒，比较段落却将 458.7 毫秒写为时长。表格列出十二个脉冲，保留两种表述的区别。'],
  ['jayarami','6X4RP',50,58,'pulsatile','脉冲型',813.3,2.9,'1.5–6',12.5,'Eleven pulses are listed. The table gives dominant frequency 2.9 kHz, whereas the comparison gives 2.7 kHz; the corresponding glandulosus values are reversed.','表格列出十一个脉冲，主频为 2.9 千赫兹，但比较段落给 2.7 千赫兹；相应 glandulosus 数值的顺序也相反。'],
  ['glandulosus','78T42',50,57,'pulsatile','脉冲型',609.6,2.7,'1.5–8',11.7,'Eight pulses are listed. The table gives dominant frequency 2.7 kHz, whereas the comparison gives 2.9 kHz; the corresponding jayarami values are reversed.','表格列出八个脉冲，主频为 2.7 千赫兹，但比较段落给 2.9 千赫兹；相应 jayarami 数值的顺序也相反。'],
  ['akroparallagi','4RJ9D',50,55,'pulsatile','脉冲型',445.6,3.4,'1–4',13.7,'The table lists six pulses, delivered at uniform intervals without call groups.','表格列出六个脉冲，鸣声间隔均匀，不组成鸣声组。'],
  ['bobingeri','4RJ9L',50,56,'pulsatile','脉冲型',565.6,3.6,'1.5–7',10.9,'The table lists six pulses, delivered at uniform intervals without call groups.','表格列出六个脉冲，鸣声间隔均匀，不组成鸣声组。'],
  ['graminirupes','794RQ',55,60,'pulsatile Type 1','第一型脉冲',91.3,2.7,'0–3',222.5,'Type 1 has eighteen pulses. A separate pulsatile Type 2 of 27.8 ms, five pulses and 2.8 kHz follows it in fixed-order call groups.','第一型有十八个脉冲；独立的脉冲第二型为 27.8 毫秒、五个脉冲、2.8 千赫兹，在鸣声组中按固定顺序接续。'],
  ['johnceei','6X53P',55,62,'pulsatile Type 1','第一型脉冲',66.3,2.1,'0.5–7',114.8,'Type 1 has eight pulses. A separate pulsatile Type 2 of 28.8 ms, three pulses and 2.2 kHz follows it in fixed-order call groups.','第一型有八个脉冲；独立的脉冲第二型为 28.8 毫秒、三个脉冲、2.2 千赫兹，在鸣声组中按固定顺序接续。'],
  ['nerostagona','78SRS',60,66,'non-pulsatile','非脉冲型',23.3,2,'5–40',null,'The table describes singly delivered calls with a short rise and longer fall. Its measured properties are not assigned to keirasabinae.','表格描述单次发出、上升短而下降较长的鸣声；这些测量不赋给 keirasabinae。'],
  ['crustai','4RJ9V',60,65,'non-pulsatile','非脉冲型',13.3,2.2,'3–20',null,'The table describes calls not delivered in groups. Its provisional group placement is distinct from a certified phylogenetic assignment.','表格描述鸣声不组成组；暂定的物种组归属不同于已认证的系统发育归属。'],
  ['travancoricus','6X4S3',73,82,'pulsatile Type 1','第一型脉冲',474.5,3.3,'0.5–1.5',33.1,'Type 1 has fifteen pulses. A non-pulsatile Type 2 of 17.2 ms and 3.3 kHz follows it in fixed-order call groups.','第一型有十五个脉冲；非脉冲第二型为 17.2 毫秒、3.3 千赫兹，在鸣声组中按固定顺序接续。'],
  ['luteolus','6WSS4',73,80,'pulsatile Type 1','第一型脉冲',390.5,2.7,'0.5–1.5',31.9,'Type 1 has twelve pulses. Its table frequency is 2.7 kHz, while the comparison gives 2.5 kHz. Non-pulsatile Type 2 is separately listed at 27.2 ms and 2.5 kHz, after Type 1.','第一型有十二个脉冲；表格主频为 2.7 千赫兹，比较段落却给 2.5 千赫兹。接在第一型之后的非脉冲第二型另列为 27.2 毫秒、2.5 千赫兹。'],
  ['chlorosomma','4RJ9Q',73,76,'pulsatile Type 1','第一型脉冲',246.2,2.2,'1.5–4',195.8,'Type 1 has forty-seven pulses. Type 2 is also pulsatile, at 30.2 ms, five pulses and 2.2 kHz; grouped calls lack a fixed type order.','第一型有四十七个脉冲；第二型同为脉冲型，30.2 毫秒、五个脉冲、2.2 千赫兹。鸣声组成组，但类型顺序不固定。'],
  ['kadalarensis','78SRP',73,78,'non-pulsatile Type 1','第一型非脉冲',15.6,3.4,'0–2',null,'Type 1 has one pulse. Pulsatile Type 2 of 52.6 ms, three pulses and 3.4 kHz follows it in fixed-order call groups.','第一型有一个脉冲；脉冲第二型为 52.6 毫秒、三个脉冲、3.4 千赫兹，在鸣声组中按固定顺序接续。']
]
const batch = rows.map(([epithet,colId,paragraph,row,structure,structureZh,duration,frequency,height,rate,note,noteZh]) => ({
  colId, name: `Raorchestes ${epithet}`, ...source,
  readScope: `Individually read species-specific acoustic comparison and table 2 species row ${row}, including adjacent additional call types where stated; source discrepancies retained; height not breeding-substrate evidence`,
  sectionLocators: [
    `PMC7936570 XML sec13 paragraph ${paragraph}; table-2 species row ${row} and adjacent rows for additional call types; sec7 paragraphs 1–2`,
    `PMC7936570 XML table-2 species row ${row}${epithet === 'resplendens' ? '–16; height cell row 15' : ''}; caption and calling-height column`
  ], sections: [
    ['behavior', 'Species-specific call structure in the 2021 comparison', '2021 年比较中的物种专属鸣声结构',
      `The article’s ${epithet} species row describes a ${structure} call with duration ${duration} ms and dominant frequency ${frequency} kHz.${rate === null ? '' : ` Its listed pulse rate is ${rate} pulses per second.`} ${note} These are source summary values, not a complete range or a universal constant. Type numbers label the study’s call ordering or frequency of delivery, rather than independently demonstrated functions such as alarm or aggression. Temperature, social context and within- and among-individual variation were not fully accounted for in these summaries. Call similarity or difference alone does not establish reproductive isolation or population decline.`,
      `论文的 ${epithet} 物种行描述${structureZh}鸣声，持续 ${duration} 毫秒，主频 ${frequency} 千赫兹。${rate === null ? '' : `表列脉冲速率为每秒 ${rate} 个脉冲。`}${noteZh}这些是来源摘要值，不是完整范围或普遍恒定值。类型编号依据研究中的发声顺序或出现频度，不是经过独立验证的警报、攻击等功能分类。摘要没有充分控制温度、社会情境以及个体内和个体间变化。鸣声相似或不同，本身不能确定生殖隔离或种群下降。`],
    ['ecology', 'Reported calling height is an observation range', '报告的鸣叫高度是观察范围',
      `Table 2 lists calling heights of ${height} m for ${epithet}.${epithet === 'resplendens' ? ' The species height is printed alongside its Type 2 entry, rather than repeated for each of its three call types.' : ''} Heights describe observed calling positions; they are not locality elevations above sea level, adult body dimensions or measurements of nest placement. The account does not supply a denominator for estimating how often each height was used, a preference experiment or proof that the endpoints are physiological limits. Where zero is included, it represents a ground-level record. These observations do not identify eggs, quantify vertical population density or establish the full habitat range.`,
      `表 2 将 ${epithet} 的鸣叫高度列为 ${height} 米。${epithet === 'resplendens' ? '该物种的高度印在第二型鸣声条目旁，没有为三种鸣声分别重复列出。' : ''}这些高度描述观察到的鸣叫位置，不是地点的海拔、成体尺寸或巢位测量。条目没有提供可计算各高度使用频率的分母、偏好实验，也没有证明范围端点是生理极限。范围含零时表示地面记录。这些观察不能鉴定卵、量化垂直种群密度或确定完整生境范围。`]
  ]
}))

for (const [name,colId,comparisonEn,comparisonZh] of [
  ['Raorchestes echinatus','4RJ9Y','Its spinular dorsum, mid-dorsal lines and mottled belly prompted a suggested affinity to the bombayensis group, but the authors did not adopt that placement.','其背部细刺、背中线和杂斑腹面使作者提出可能与 bombayensis 组接近，但未正式采纳该归属。'],
  ['Raorchestes indigo','6WSRP','Its green dorsal colour and occasional blue groin, axillary or thigh colour resemble beddomii, but superficial similarity did not resolve its placement.','其绿色背面，以及偶见的腹股沟、腋部或大腿蓝色，与 beddomii 相似，但表面相似没有解决组内归属。']
]) batch.push({colId,name,...source,readScope:'Explicitly unresolved species-group placement and unstudied acoustic characters; morphological resemblance retained as tentative',sectionLocators:['PMC7936570 XML sec13 paragraph 76; table-2 ungrouped species rows 89–90'],sections:[
  ['taxonomy','Species-group placement remained unresolved','物种组归属仍未解决',
    `The study explicitly left ${name} outside its defined species groups because phylogenetic relationships were unresolved and clearly shared diagnostic characters were lacking. ${comparisonEn} Acoustic characters were not studied. Missing calls and superficial resemblance cannot be replaced with relatives’ durations, frequencies or a certified group assignment. This is an unresolved grouping within the accepted genus, not evidence that the species itself is invalid. The authors identified further acoustic, ecological, reproductive and behavioural evidence as potential ways to resolve the uncertainty.`,
    `研究因系统发育关系未解决、缺少明确共享鉴别特征，而将 ${name} 留在所定义的物种组之外。${comparisonZh}研究也没有分析其声学特征。缺少鸣声和表面相似，不能用近缘种时长、频率或已认证的组内归属替代。这是接受属内部尚未解决的分组，不是物种本身无效的证据。作者指出后续声学、生态、繁殖和行为资料可能有助于解决不确定性。`]
]} )

// Preserve the three previously authored sections: this adds a separate table
// account without turning the qualitative remarks into acoustic measurements.
const previous = JSON.parse(fs.readFileSync('docs/amphibia-content/primary-reader-authoring-input.json')).find(x => x.key === 'primary-pmc7936570-794s4')
if (!previous || !(previous.sections.length === 3 || (previous.sections.length === 4 && previous.sections[3][1] === 'A separate table provides temporal measurements'))) throw new Error('Unexpected ravii input; preserve existing material before adding the table account')
batch.push({...previous,...source,readScope:'Previous taxonomic remarks retained; additional directly read table-2 ravii row distinguishes quantitative summaries from the qualitative historical call analogy',sectionLocators:[...previous.sectionLocators.slice(0,3),'PMC7936570 XML table-2 species row 47; sec7 paragraphs 1–2'],sections:[...previous.sections.slice(0,3),
  ['behavior','A separate table provides temporal measurements','独立表格另提供了时间结构测量',
    'Beyond the qualitative historical call analogy in the taxonomic remarks, Table 2 gives a ravii pulsatile-call summary: duration 499.2 ms, rise time 483.1 ms, fall time 16.1 ms, three widely spaced pulses and pulse rate 4.2 per second, delivered without call groups. Its dominant-frequency cell is blank, so a numerical frequency is not inferred from other group members. Calling height is listed at 0.5–5 m. These table measurements and the original-description analogy are different evidence accounts; neither resolves every uncertain historical specimen label. The table does not establish the full repertoire, environmental variation or an invariant call for all populations.',
    '除了分类讨论中历史性的定性鸣声比喻，表 2 另给出 ravii 的脉冲鸣声摘要：持续 499.2 毫秒、上升 483.1 毫秒、下降 16.1 毫秒、三个间距较大的脉冲，脉冲速率每秒 4.2，鸣声不组成组。主频单元格为空，因此不能从其他组员推填数值。鸣叫高度列为 0.5–5 米。这些表格测量与原描述比喻是不同的证据条目，两者都不能解决所有身份不确定的历史标本标签。表格也不能确定完整鸣声类型、环境变化或所有种群恒定的鸣声。']
]})
prepareAmphibianResearchInput(batch)

fs.writeFileSync('docs/amphibia-content/raorchestes-acoustic-source-discrepancies.json', JSON.stringify({
  source:'PMC7936570',doi:'10.7717/peerj.10791',table:'table-2',rowNumbering:'zero-based including two header rows',
  discrepancies:[
    {species:'Raorchestes kaikatti',metric:'Type 1 pulse rate, pulses/s',table:250.8,comparison:280.8,paragraph:6,row:4},
    {species:'Raorchestes flaviventris',metric:'call duration, ms',table:721.7,comparison:712.7,paragraph:45,row:52},
    {species:'Raorchestes ponmudi',metric:'call duration, ms',table:480,comparison:458.7,tableRiseTime:458.7,paragraph:45,row:53},
    {species:'Raorchestes jayarami',metric:'dominant frequency, kHz',table:2.9,comparison:2.7,paragraph:50,row:58},
    {species:'Raorchestes glandulosus',metric:'dominant frequency, kHz',table:2.7,comparison:2.9,paragraph:50,row:57},
    {species:'Raorchestes luteolus',metric:'Type 1 dominant frequency, kHz',table:2.7,comparison:2.5,tableType2:2.5,paragraph:73,row:80}
  ],additionalLimits:['ravii table dominant-frequency cell empty; quantitative temporal row separate from qualitative original-description analogy','sec12 paragraph 6 duration names and numerical ordering ambiguous; precise values not inferred from that sentence','species row heights are calling observations, not sea-level elevations or egg substrates','additional call types remain separate; no numeric averaging or silent correction of conflicting reports'],
  sourceValuesReconciled:false,fullArticleCertifiedRead:false
},null,2)+'\n')
