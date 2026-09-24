# 全树内容与科学证据覆盖

RC169 / COL26.8（2026-08-20）。分类、来源原文、来源字段标签、入门概述、完整档案与专家评审分别计量，不能互相替代。

## 已落地的顺序

1. 修复 Cestrum 的八个接受名 ID 与两条异名链。全部 99 段 Plazi 正文及非 ID 证据字段保持一致；原始 40 行候选文件的旧 SHA-256 已精确复现。
2. 在固定版本下补齐奇蹄目纵向入口：1 目、3 科、8 属、19 个接受种条目。每个条目包含中英概述、段落引用、来源适用范围及待补证据。19 是目录条目数，包含家养型，不宣称 19 个野生现生生物学物种。
3. 将内容索引、缺失状态和分支覆盖统计推广到全部 2,429,092 个分类节点，包含全部 1,607 个目、202,543 个属及 2,183,133 个接受种。实际原文覆盖 80,838 个接受种，来自 14 套描述集合。
4. 静态数据页面与 Go 分类页面共用正文组件。后者要求数据版本和 COL 版本同时一致。尼加拉瓜、巴拿马两套已有原文现已接入页面；保留原始语言、版权、引用缺失和区域范围。
5. 增加昆虫 14 条双语介绍：鞘翅、双翅、鳞翅、膜翅、半翅五目，瓢虫、食蚜蝇、蛱蝶、蚁、蚜五科，以及西方蜜蜂、帝王蝶、黑带食蚜蝇、豌豆修尾蚜四种。总计 45 条介绍：6 目、8 科、8 属、23 种。五个新增目在固定树中有 834,740 个后代接受种，这个分支规模不计作新增种级介绍。
6. 增加食肉目到赤狐的纵向入口：食肉目、犬科、狐属和赤狐各一条。叙述围绕分类名称与食谱、犬科形态差异、狐属沙漠—北极栖境对照、赤狐毛色与繁殖策略展开；ADW 来源的旧数量和定量体型不导入。总计 49 条介绍：7 目、9 科、9 属、24 种。
7. 增加蜘蛛目—Atracidae—Atrax—三个悉尼地区漏斗网蛛种的证据链。基于 2025 年形态与 DNA 研究和澳大利亚博物馆在地记录，区分 A. robustus、恢复命名的 A. montanus 与新描述的 A. christenseni；保留采样区域、旧地点未公开和生物学资料有限的边界。总计 55 条介绍：8 目、10 科、10 属、27 种。
8. 新增红狐 `5BSG3` 的结构化逐主题证据档案，覆盖形态、生活史、生态、演化、分布、化石和保育七主题；每个主题均附段落/标本定位、地域年代范围、野生/化石限定和来源权利说明。七项目前都只是部分支持，完整档案状态明确为未完成；外部专家评审未进行。全树索引现在分别滚动统计有主题证据档案、完整科学档案、外部专家评审与逐主题状态，不把该样例或七项局部材料当作全物种完成。
9. 从既有描述集的窄字段标签生成来源标注主题筛查数：仅映射明确的形态、栖地/生态及分布字段，并以物种 ID 与主题去重。该数只用来排定逐段审阅顺序，不代表档案主题已被评估或达到完整标准；未映射的通用描述和诊断字段也不会被猜测归类。标准及标签清单见[物种档案准入标准](species-dossier-standard.md)。
10. 对 SANBI 短页码候选做可复现的元数据筛查；4,960 种 / 6,149 个来源 ID 对仅是 triage，不视为已验证证据。人工核对 Cullumia 八种（`32DNH`、`32DNJ`、`32DNK`、`32DNV`、`32DNW`、`32DNX`、`6BPSJ`、`6BQ4J`）及 Metalasia 二十四种（`6RCXR`、`6RCXS`、`6RCXW`、`6RCY2`、`6RCYV`、`6RCZ7`、`73CXW`、`73CY7`、`73CYW`、`73CYX`、`73CZD`、`73D9R`、`73CZ6`、`6RCYT`、`6RCY8`、`6RD9W`、`73CY8`、`6RCXV`、`6RD9V`、`6RCY6`、`6RCXT`、`6RD9T`、`73CY5`、`73CXS`）逐种核验 WFO 精确映射及 Strelitzia 29（2012）对应物种账户（Cullumia p.367；Metalasia pp.395–397）；每种仅形态、花期、栖地和区域分布部分支持，其余主题未评估。排除引用章节范围过广且页中实际描述另一物种的候选。方法与限制见 [SANBI 来源审计](sanbi-descriptions.md)。

RC155 生成的来源标签筛查计数为：形态 48,482 种、生态 41,445 种、分布 2,511 种；其余四主题为 0。多个主题可重叠，按主题分别去重。它们仍是 80,838 个原文物种中的初筛子集：未验证每段的物种概念、段落定位、许可和范围，不纳入逐档案主题状态，因此完整档案仍为 0。

10. 审核 SANBI e-Flora v1.36 的许可、物种身份和出版物定位；15,211 种有形态字段、14,214 种有生境字段。对 `Ctenium concinnum` `3254C` 核实 WFO 2026-06 精确映射及 Strelitzia 36（2015）账户页码，并建立两个部分支持主题的档案。其他字段定位缺口、许可范围及可用边界见 [SANBI 来源审计](sanbi-descriptions.md)。
11. 将 p.397 的 13 个 Metalasia 账户逐一与 COL26.8 接受名、作者及 WFO 2026-06 交叉核对后，新增 13 份部分支持档案：`6RD9R`、`73CXQ`、`73D9Q`、`6RCZP`、`6RCZM`、`73CZM`、`6RCZK`、`73CZK`、`6RCZJ`、`73CZJ`、`73CZF`、`6RCZD`、`6RCZF`。形态、生境、花期和区域分布均指向 Strelitzia 29 p.397；演化、化石、保育未评估。更正记录和筛选边界保存在 [SANBI 来源审计](sanbi-descriptions.md)。
12. 再核对 11 个 Metalasia 接受种账户，新增部分支持档案：`6RCYY`、`6RCZ5`、`6RCZ6`、`6RCZH`、`73CY6`、`73CYS`、`73CYY`、`73CYZ`、`73CZ5`、`73CZB`、`73CZC`。这些条目位于 Strelitzia 29 pp.395、397–398；精确 COL/WFO 映射、页码及 SANBI archive 段落号见 [SANBI 来源审计](sanbi-descriptions.md)。
13. 补齐 SANBI `13878.0` 中 11 个 Nivenia 接受种账户；逐项与 COL/WFO 映射核验，并按 Strelitzia 29 pp.164–165 加入形态、花期、生境和区域分布部分证据，演化、化石和保育仍未评估。精确 ID 和原文行号见 [SANBI 来源审计](sanbi-descriptions.md)。
14. 补齐 SANBI `13878.0` 中 11 个 Thereianthus 接受种账户，按 Strelitzia 29 p.170 的逐种账户和物种级 archive 形态/生境行建立档案；四主题部分支持，其他三主题未评估。COL/WFO 身份及段落定位见 [SANBI 来源审计](sanbi-descriptions.md)。
15. 补齐 SANBI `13878.0` 中 13 个 Freesia 接受种账户，以 Strelitzia 29 pp.132–133 逐种核对花期和区域分布，并与准确的 COL/WFO 接受名及形态/生境 archive 行关联；四主题部分支持，其余主题未评估。
16. 补齐 SANBI `13878.0` 中 14 个 Bobartia 接受种账户，以 Strelitzia 29 pp.129–130 的逐种账户核对花期和区域分布，并引用对应形态/生境 archive 行；四主题部分支持，其余主题未评估。
17. 新增 7 个 Iridaceae 种级档案：Crocosmia `ZKPK`、Dierama `36282`、Dietes `362RF`、Melasphaerula `3ZCNT`、Pillansia `77KJM`、Witsenia `7G7KQ`、Xenoscapa `5CBK6`；逐个核对 Strelitzia 29 pp.131、154、164、175–176 账户，并绑定 SANBI archive 形态/生境行。
18. 完整补齐 COL26.8 接受分类中 Chasmanthe 全属 3 种（`TPZY`、`TPZZ`、`TQ23`），逐种核对 Strelitzia 29 pp.130–131 账户，并绑定 SANBI archive 形态/生境行。
19. 新增 Klattia 全属 3 种（`3R96F`、`6NKCG`、`3R96G`）的档案，逐种绑定 COL26.8/WFO 身份、Strelitzia 42 (2020) 物种账户和 SANBI 南非 Red List 评估。形态、花期、生态、区域分布及国家保育评估有局部证据；演化与化石仍未评估，三份档案均未达完整标准。
20. 新增 Micranthus 全属 7 种（`42QJN`、`42QHX`、`42QJH`、`42QHS`、`42QJK`、`42QJC`、`42QHV`）的档案，逐种核对 COL26.8/WFO 身份，并链接 Strelitzia 42 物种账户及 SANBI e-Flora 形态、生境行。四个主题有区域材料支持；`M. cruciatus` 另有一项有日期的南非国家评估。所有记录仍不完整，演化与化石未评估，其他物种保育状态也未评估。
21. 补齐 Cyathocoma 全属 3 个接受种（32QTH、32QTJ、32QTK）：逐种核对 COL26.8/WFO 2026-06 精确映射，并绑定 SANBI e-Flora 原始形态/生境行及 Strelitzia 29 (2012) p.86 物种账户。C. bachmannii 另有 2013 年南非国家 VU 评估；C. hexandra 单独记录 Verboom (2006) 仅对该种取样的叶绿体系统发育证据。三个档案均不完整；未采样物种的演化、化石及其余未证实的保育评估保持未评估。
22. 补齐 Trianoptiles 全属 3 个接受种（585HD、7CP59、585HF）：逐种核对 COL26.8/WFO 精确映射及 SANBI e-Flora 形态、生境行，并链接 Strelitzia 29 (2012) p.96 账户。T. capensis 有 2013 年南非 NT 国家评估，T. solitaria 有 2015 年 EN 国家评估并单独记录其一处 trnL–trnF 系统发育证据；T. stipitata 保育评估未确认。三种档案均不完整，化石主题未评估。
23. 补齐 Geochloa 全属 3 个 COL26.8 接受种（3FP45、3FP46、3FP47）：核对对应 WFO 2026-06 精确映射，关联 SANBI e-Flora 物种级形态/生境原文及 Strelitzia 36（2015）pp.356–358、Strelitzia 29（2012）p.212 账户；Linder 等（2010）提供属级系统发育与地生形态论述。形态、生活史、生态、演化、分布仅部分支持；化石和保育未评估，三份档案均不完整。
24. 补充四个 Triraphis 接受种档案（`58ZYY`、`59225`、`59226`、`5922C`）。逐种核对 COL26.8 接受名/作者与 WFO 2026-06 精确映射，并引用 Strelitzia 36（2015）逐种账户及 SANBI e-Flora v1.36 原始行（形态/生境行号依次为 80468/80188、80469/80189、80470/80190、80471/80191）。形态和生态部分支持；其中三种有该区域账户的花期/分布陈述，`T. ramosissima` 另记录 2005 年自动生成的南非历史 LC。固定版 Triraphis 共 6 种，本批仅 4 种达到本次来源定位核验要求，不宣称全属覆盖；演化和化石未评估，四档均不完整且未经外部专家评审。
25. 新增五个 Radomaniola 种级档案：`V7HBX`/Aphia `1844769`、`V7KGH`/`1844773`、`V7F82`/`1844778`、`V7KCW`/`1844780`、`V7J68`/`1844785`。逐项从 COL26.8 接受种 ID 精确核对 WoRMS/MolluscaBase 归档中的 Aphia ID、接受状态、全名和作者；对应 Jaszczyńska 等（2025）Zootaxa 5716(2) taxonomic treatment，页码分别为 212–217、217–219、220–222、223–224、224–225，并记录类型标本、局地记录和 COI/mOTU 信息。形态、生态、演化、分布和作者在论文中的保育评估均仅部分支持；生活史与化石未评估。论文/treatment 项目级再利用许可未核实，主张为未译英文转述；作者保育状态未当作已验证的当前正式 Red List 记录。五份档案均不完整、未经外部评审；该批次不是全科或全物种覆盖。详情与分片摘要见[档案索引](../data/knowledge/catalogue-dossier-shards.json)及 `data/knowledge/catalogue-dossiers-mollusca-radomaniola-batch-1.jsonl.manifest.json`。

26. 新增 27 个 COL26.8 种级档案，覆盖 Rutaceae、Amphibia、Amanita、两组鸟类、Aedes、Tatraea 与 Parabembras；这只是可追溯来源的逐种小批次，不代表相应类群完整覆盖。Agathosma（5TQVG、5TQVN、5TQVQ、5TQVR、5TQVS）按 Cape Flora 的逐种账户记录形态、花期、生境和南非区域分布；SANBI archive 仅作字段/身份定位，不把聚合许可套用到出版物。两栖类五种（3SLRG、4ZMCC、736LN、CQ4M、J8YL）分别绑定原始研究，样本地点、实验条件和种群范围不提升为全种或全球结论。东中国 Amanita 四种（C8SM7、C8SP8、C8SP9、C8SPF）依据 Cui 等（2023）的物种账户及该文采样系统发育。Andean condor 5BSLM 仅记录厄瓜多尔研究；emperor penguin FYD9 保留各论文的样本与地点范围及 IUCN 2026(2) 预发表评估状态；两份 condor/emperor 与两份北太平洋信天翁档案（4GK9K、4GK9M）均不把区域资料外推为未采样地域。信天翁来源为 USGS 1923–2005 报告，保留报告和其中个别第三方材料的权利区别。Aedes（89W76、89W72）仅反映六个来源群体的实验室双通道气味选择结果，不推断野外取食模式。云南 Tatraea 四种（CC6RS、CC6RW、CC6RZ、CC6S2）绑定物种处理、采集和该研究系统发育；Parabembras 三种（4CMB4、4CMB5、D57BP）绑定 Kai & Fricke（2018）的诊断和西北太平洋分布。来源分别见 [SANBI Cape Flora](https://opus.sanbi.org/items/be012e11-a0da-4861-822f-65a129f6652f/full)、[Bina Perl et al. 2017](https://repository.naturalis.nl/pub/623831/)、[Grafe et al. 2012](https://doi.org/10.1371/journal.pone.0037965)、[Passos et al. 2017](https://doi.org/10.1371/journal.pone.0181931)、[Nowoshilow et al. 2018](https://doi.org/10.1038/nature25458)、[Boistel et al. 2011](https://doi.org/10.1371/journal.pone.0022080)、[Cui et al. 2023](https://doi.org/10.3390/jof9080862)、[Kohn et al. 2016](https://doi.org/10.1371/journal.pone.0151827)、[Restrepo-Cardona et al. 2024](https://doi.org/10.1177/19400829241238005)、[Gales et al. 1990](https://doi.org/10.1017/S0954102090000037)、[Cristofari et al. 2016](https://doi.org/10.1038/ncomms11842)、[USGS albatross assessment](https://doi.org/10.3133/sir20095131)、[Fikrig et al.](https://doi.org/10.1038/s41598-022-26591-3)、[Li et al. 2024](https://doi.org/10.3897/mycokeys.102.112565) 及 [Kai & Fricke 2018](https://doi.org/10.3897/zookeys.740.21729)。Claim 语言经来源核验；Aves 机翻仍未审定；来源权利未逐项确认者保留 unknown。27 份档案均 incomplete、未外审；各档案中未被来源直接覆盖的主题继续为 not-assessed；本批次没有为化石主题增加证据。生成脚本、来源输入、逐物种定位、分片摘要及显式权利状态随档案分片保存。

27. 新增 11 个 COL26.8 种级档案，涵盖细菌 3 种（`VQ56S`、`V4TXN`、`V4V2H`）、爬行动物 2 种（`4DR4J`、`4DR57`）及蝙蝠 6 种（`43YHH`、`43YHQ`、`8P9GS`、`8QF9S`、`8QFLX`、`3M5GD`）。所有条目均逐个核对 COL26.8 接受身份及固定版本的 LPSN 或 ITIS 交叉映射。细菌主张限制于论文描述的培养型菌株、实验条件和采集地点；爬行动物主张限制于 Miralles 等（2021）抽样的谱系、样本和马达加斯加地点；五种 Molossus 蝙蝠的形态/演化主张限制于 Olímpio 等（2025）所测 10 种中的五种与 299 个样本，Histiotus alienus 则依据 Cláudio 等（2023）的单物种重新描述和两处已知地点。主要论文文本的 CC BY 4.0 权利及范围逐项记录，另行许可的数据附件未复用。11 份档案均 incomplete、未经外部评审；其他主题维持 not-assessed。本批只扩充种级档案索引，不改变 App 与 GitHub Pages 共用的精选核心内容。来源见 [Paenibacillus hubeiensis 物种描述](https://doi.org/10.3390/microorganisms13071559)、[Pseudodesulfovibrio methanolicus 物种描述](https://doi.org/10.3390/biology13100800)、[P. karagichevae 物种描述](https://doi.org/10.3390/microorganisms12122552)、[Miralles 等（2021）](https://doi.org/10.3897/vz.71.e59495)、[Olímpio 等（2025）](https://doi.org/10.1371/journal.pone.0320117) 和 [Cláudio 等（2023）](https://doi.org/10.3897/zookeys.1174.108553)；逐项主张、身份、许可和定位见批次输入与分片摘要。
28. 新增 7 个 COL26.8 种级档案：细菌/古菌 3 种（`VPZKQ`、`VBR92`、`VBNLQ`）、卵菌 `Saprolegnia parasitica`（`79KQC`）、人类（`6MB3T`）及模式植物拟南芥（`G26R`）和水稻（`6SZF3`）。全部档案精确匹配固定目录接受身份；主张分别限定于论文所研究的菌株、ITS 型、匿名苏格兰水产养殖采样点、南部非洲古基因组样本，以及 Kew 页面和具体植物基因组研究。每项来源均保留段落/表格定位、版本和许可边界；全部 7 份档案仍为 incomplete、not-reviewed，其他主题保持 not-assessed。本批只扩充种级档案索引，不改变 App 与 GitHub Pages 共用的精选核心内容。逐项证据见[细菌/古菌批次](../data/sources/col26.8-bacteria-archaea-dossiers-batch-2.json)、[卵菌批次](../data/sources/oomycota-saprolegnia-parasitica-2026-09-24.json)、[人类档案](../data/knowledge/raw-dossiers/primates-homo-sapiens-south-african-genomes-2026-09-24.jsonl)和[植物批次](../data/knowledge/plant-model-dossier-batch-1.json)。
29. 新增 5 个 COL26.8 种级档案：黑猩猩（`4C92G`）、西部大猩猩（`3H3C9`）、苏门答腊猩猩（`4LTSY`）、加州神鹫（`3HSM2`）和斑胸草雀（`54HRJ`）。灵长类主张限定于各论文明确的研究样本、地点和比较；神鹫保育数字标出 2025-12-31 评估日期，斑胸草雀演化主张限定于雄性基因组与鸡的比较。五份档案均 incomplete、not-reviewed，只有来源直接支持的主题标为 partially-supported，其余主题保持 not-assessed。App 与 GitHub Pages 仍共用既有精选核心，未把这些种级批次打进 App 核心包。来源分别见 [Brand 等（2022）](https://doi.org/10.1073/pnas.2200858119)、[Robbins 等（2022）](https://doi.org/10.1371/journal.pone.0271576)、[Hardus 等（2012）](https://doi.org/10.1007/s10764-011-9574-z)、[USFWS 神鹫报告](https://www.fws.gov/media/2025-california-condor-population-status-report)和 [Warren 等（2010）](https://doi.org/10.1038/nature08819)；精确定位、许可与范围记录随批次源数据保存。
30. 新增 6 个 COL26.8 接受种档案：灵长目 3 种（`3WWNQ`、`3WWP6`、`6TM9B`）、酵母 2 种（`4TWCR`、`4VCRL`）及枝角类 `Daphnia magna`（`6CCSV`）。每条均精确匹配固定版接受种 ID、学名、rank 和 sourceDatasetId；主张限定于所引研究中的种群、菌株、样本与方法，未评估主题保持 not-assessed。六份档案均 incomplete、not-reviewed。本批只扩充来源档案索引；App 与 GitHub Pages 继续共用同一精选核心内容。
31. 再新增 5 个 COL26.8 接受种档案：灵长目 `Lemur catta`（`3T528`）与 `Macaca nemestrina`（`3WWNT`）、真菌 `Neurospora crassa`（`47BC7`）与 `Fusarium graminearum`（`6JSTK`），以及端足目 `Gammarus pulex`（`3F8JD`）。灵长目来源记录现以固定注册树完整核对全部父级分类路径，并记录注册清单校验和；主张继续限定于引文的样本、地点与方法，未评估主题保持 not-assessed。五份档案均 incomplete、not-reviewed。本批只扩充来源档案索引，不扩大 App / GitHub Pages 的精选核心包；两端仍共用包含灵长目在内的同一精选内容。
32. 新增两份重点灵长目档案：蜘蛛猴 `Ateles geoffroyi`（`J8P6`）与婆罗洲猩猩 `Pongo pygmaeus`（`4LTT2`）。前者仅记录哥斯达黎加奥萨半岛栖息点研究中的访客、幼苗与粪金龟比较；后者仅记录 Danau Sentarum 周边巢调查的局地模型估计。来源许可、完整 COL26.8 父链及注册清单校验和均已记录；每种仅生态主题部分支持，其余六主题未评估。两份档案均 incomplete、not-reviewed，不新增 App / GitHub Pages 内容。
33. 修订灵长目法郎叶猴 Trachypithecus francoisi（COL26.8 57SDB）分布证据：2013 年研究描述中国西南部和越南北部的名义种范围；2026 年研究的老挝范围句引用的是 T. francoisi sensu lato 综述，而其野外取样只在贵州。固定分类中 T. laotum、T. ebenus、T. hatinhensis 是另列接受种。现将分布主题从 conflicted 调整为 partially-supported；老挝对 57SDB 仍未确认，既不作存在也不作缺席判断。记录数不变，档案仍 incomplete、not-reviewed；App 与 Pages 精选包不变。
34. 补强黑猩猩（`4C92G`）局地生态证据：新增 Bossou 野生西部黑猩猩群体 2012–2013 年栖地选择研究，许可核验为 CC BY 4.0。生态仍为 partially-supported，主张明确限于单一地点、群体和观察期；生活史、形态、分布、化石及保育保持 not-assessed，演化仍是模型研究的部分证据。总档案数不变。App 与 GitHub Pages 继续共用 `data/pages-preview.json` 的精选核心清单，包含灵长目；种级档案分片仍不进入原生 App 核心包。来源、许可和精确范围随 [黑猩猩档案生成输入](../data/sources/primates-dossiers-batch-2.json)记录。

## 覆盖含义与尚未完成的内容

“全树可查询、可查看缺口”已经落地；“全树所有物种都有全面科学档案”没有完成。
逐物种完整档案的固定准入标准见[COL26.8 物种科学档案准入标准](species-dossier-standard.md)。该标准明确七个科学主题、证据与权利记录、未知状态处理以及完整档案和专家评审的独立计量；后续覆盖数字应按该标准生成。
截至 2026-09-25 的当前覆盖计数（固定 COL26.8）：层级索引覆盖 2,183,133 个接受种；来源原文关联 80,838 种；有来源双语入门概述 55 种。档案分片索引列出 52 个分片，共 6,937 条唯一种级档案记录；逐片校验的行数及压缩/解压 SHA-256 均与索引一致。6,937 条均为 incomplete、均为 not-reviewed；完整科学档案为 0，外部领域专家评审为 0。七主题状态计数如下（未列状态为 0）：形态 partial 6,891、not-assessed 46；生活史 partial 176、not-assessed 6,761；生态 partial 6,916、not-assessed 21；演化 partial 52、not-assessed 6,885；分布 partial 202、not-assessed 6,735；化石 partial 1、not-assessed 6,936；保育 partial 30、not-assessed 6,907。另有 2,176,196 个接受种没有档案记录。档案条目数和 partial 主题都不表示完整科学覆盖；权威身份集合见[档案分片索引](../data/knowledge/catalogue-dossier-shards.json)。新增 Cyclopia 档案的物种清单及定位见 [SANBI 来源记录](sanbi-descriptions.md#cyclopia-individual-species-accounts)。
来源字段标签筛查另行报告，不得与“有原文”或“有逐主题证据档案”相加；字段可能缺少段落级定位、范围限定及概念等同性审查。
这些新概述的计数仅指精确关联到 COL ID 的本层内容；原有 133 份导航档案仍保留在资源包体系内，不能用同名自动合并物种概念。

- 2,102,295 个接受种尚无本版导入的来源原文。不能从高阶分类、名称、祖先特征或通用模板推导它们的物种级生态。
- 目前 6 个目有入门概述，尚余 1,601 个目未关联本层独立概述。分支统计和分类介绍不计作生物学正文；已有介绍也不代表该目的完整科学档案。
- 原文以植物志为主，并不代表动物、真菌、细菌、古菌和病毒的科学介绍已具备同等深度。
- 目录中没有目级祖先的种沿真实父链展示，不补造目。现生、化石、家养型和逸生记录不能混为同一统计口径。
- 故事应围绕有引用的问题与证据组织，不能按每个名字机械生成故事。旧来源中的种群数字、保育等级和分歧年代不自动继承为现值。

## 后续内容准入与扩展顺序

1. 从各目的权威分类综述与可再利用原始研究建立目级概述；保留竞争分类和适用年代。确认分类概念后，再连接原有导航档案和故事。
2. 下沉到科、属和种时，每段说明独立引用，记录区域、年代、野生/家养/化石范围。文献只讨论亚种或个体时，不自动升级为全种事实。
3. 先接入有许可、可归因并能精确匹配身份的批量资料。未匹配记录独立保留，不用模糊名称补齐覆盖率。翻译需与原文并存，并对术语和限定词作审读。
4. 增加定量性状、系统发育与分布时，保留单位、采样方式、不确定性和地图适用范围，再进入计算引擎；命名树不能当作带分歧时间的系统发育树。

## RC151 昆虫来源与边界

- 目级形态与生活史采用 [NC State University ENT 425](https://genent.cals.ncsu.edu/insect-identification/) 的相应目、科页面和 [CSIRO 半翅目说明](https://www.ento.csiro.au/education/insects/hemiptera.html)。只写原创简述，不复制整篇文章或图片；每段保留来源链接。旧分类、旧物种数量、排名和分歧年代未导入。
- 半翅目的介绍覆盖蚜虫、蝉及异翅类，不能用异翅亚目的半鞘翅概括全目。膜翅目并非都细腰或群居，食蚜蝇科并非全部幼虫都捕食蚜虫。
- [UF/IFAS 蜜蜂](https://ask.ifas.ufl.edu/publication/IN1005) 与 [帝王蝶](https://ask.ifas.ufl.edu/publication/IN780) 只支持所选生活史、原生/引入和迁徙/定居边界；旧保育结论未采用。[UC IPM 豌豆蚜](https://ipm.ucanr.edu/agriculture/alfalfa/pea-aphid/) 与 [英国食蚜蝇记录计划](https://www.hoverfly.uk/hrs/species/episyrphus/episyrphus_balteatus) 的区域观察不提升为全球趋势、宿主全集或管理建议。
- 三个种的固定接受名含亚属，原样保留；来源使用的二名写法经逐条人工核对，未引入模糊名称自动匹配。膜翅目与半翅目在固定树中的 sourceDatasetId 为 null，保留未分配状态。
- 本轮未找到异色瓢虫 Harmonia axyridis 在固定接受名树中的对应条目，因此未借用植物同名属 Harmonia 或编造新 COL ID。它仍需独立的异名/来源身份核对，不能将候选文献算为已收录介绍。
- 新增食肉目至赤狐资料采用密歇根大学 Animal Diversity Web（ADW）不同层级的账户。犬科页面最后更新于 2000 年、赤狐页面于 2007 年、狐属页面于 2019 年；仅保留限定明确的形态、栖境和行为概述，不导入旧分类数量、保育等级或分歧年代。来源本身说明这是教育性资源，不能保证包含最新信息；相关条目仍是待领域专家审阅的入门材料。
- 新增蜘蛛内容采用澳大利亚博物馆蜘蛛科普页及 Loria 等（2025）原始系统学研究。澳大利亚与新南威尔士州的物种、地点及生活史信息均标注区域范围；不导入旧物种数量、毒性排名、医疗建议或保育评价。纽卡斯尔漏斗网蛛的精确地点仍按来源限制保持未公开。

## 实现与复核

- 正式概述输入：`data/knowledge/catalogue-profiles.json`。每次构建验证固定版本、真实 ID、完整学名、等级、来源 datasetID 与段落引用。
- `scripts/catalogue-knowledge.mjs` 流式读取节点、按真实父链汇总，不在内存中保留数百万份种级节点。来源集合先按 ID 去重，多来源不重复计种。
- 运行时为 256 个 SHA-256 路由分片；RC150 初次构建共约 1.93 MiB，最大分片约 11 KiB。无正文的种只读取一个索引分片，有正文的种再读取命中的来源集合。
- 下载失败、校验失败、版本不符均显示“覆盖未知”，不写成“没有研究”。原文数量与概述数量可以重叠，不求和为覆盖总量。
- 定向回归验证 Cestrum 原始身份、奇蹄目真实后代闭包、索引去重/缺失/环、按需加载和两种页面的版本边界。部署和发行仍搁置。
