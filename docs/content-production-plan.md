# Evo 内容扩充与资料转化流程

制定日期：2026-09-29。执行重点：将已有资料转成读者能理解、查找和连续阅读的内容。灵长类优先，随后主龙类；其他已有丰富原文的类群并行生产。

## 1. 现状与目标

本次读取工作树 `app-full-data/evo` 的现有清单与内容结构，没有执行全量数据校验。清单记录原文关联物种 80,838、部分档案物种 36,354、分类正文入口种级概述 27、精选展示档案 140。这些是不同口径，不能相除得到转化率。它们提示主要机会在于把材料组织成正文，并接到读者入口。

灵长目固定分母为 COL26.8 的 530 个接受种。专门灵长类分片含 46 个不同种级 dossier；按 530 个接受种的 COL ID 扫描全部 dossier 分片后，另找到 8 个跨类群档案，共 54 个不同种级 dossier。核心包的 14 条 profiles 则包括 7 个现生种和 7 个化石类群，不能写成 14 个接受种。

每批交付单位改为“可读的物种页、类群介绍或专题”。新增来源数、claim 数、哈希数量仅作为附带记录。既有完整科学档案与外审状态继续如实保留，不作为内容初稿完成率的分母，也不为提高进度而改写为 complete/reviewed。

## 2. 已有材料怎样成为内容

| 材料 | 转化方式 | 读者得到什么 |
| --- | --- | --- |
| 原始植物志与区域描述：`data/sources/*descriptions*.jsonl.gz`，相应 `docs/*descriptions.md` | 先选同一来源、同一属或科的小批；把描述改写为形态辨识、栖地、花果期、地区记录，保留原文供展开阅读 | 中文导读、术语解释、近缘种对照、区域植物志专题 |
| 已有种级 dossier：`data/knowledge/catalogue-dossier-shards.json` 及其分片 | 汇集一个物种已有全部材料，合并重复事实，按读者问题重写段落；已有 claim/reference 直接复用 | 一篇连续介绍，以及可展开的研究案例和来源 |
| 精选包：`data/packages/**/profiles.source.json`、`research-examples.source.json`、`stories.json`、`events.json` | 将简短字段扩成有层次的说明，以多个物种或标本组织比较 | 重点物种详解、类群导读、主题阅读路径 |
| COL、命名侧车、分类关系 | 用于身份、名称、层级导航和近缘条目链接；已有名称变更资料可写命名史 | 分类导航、同物异名解释、属科导读入口；生物学正文仍取自描述材料 |
| 化石记录、具名标本、地层与演化事件：`data/fossils/`、各包事件与参考文献 | 组织“发现了什么—怎样解释—改变了什么认识”的短章 | 化石类群页、发现故事、时间线、形态比较 |
| 古地理与地图：`data/paleogeography/` | 为故事选择已有时间切片，配年代和地理背景说明；观测点与模型层分别标注 | 深时地图导览、故事地图；未经处理的不同古坐标体系不强行叠加 |
| 现有媒体：`data/media.json`、素材及来源记录 | 配说明、图注和正文关联；可用现有数据制作比较图，缺图时先交付正文 | 有解释作用的图片和图表；标本照片、模型重建、诠释图清楚区分 |

资料进入一个选题后，先使用已收集的全文、段落、来源信息和已写档案。只有写作需要的重要信息确实缺失或互相矛盾，才做针对性补充检索。短小的原文只能支持短小的导读，不按字数硬扩写。

## 3. 三种成品规格

### 普通物种页

- 目标约 300–700 个中文字，按材料提供 3–5 个有实质内容的小节；篇幅是编辑目标，不是硬门槛。
- 优先回答：它是什么、怎样识别、在哪里生活、吃什么或怎样繁殖、有什么特点。每页至少有能区别于其他物种的具体内容。
- 材料只覆盖区域或单次研究时，做“区域介绍”或“研究导读”，明确范围，不把它计为综合物种介绍。
- 少量相关条目链接与来源，原文和研究细节按需展开。来源不足的章节留待补写，不用分类名称、模板或近缘种事实填充。

### 核心重点页

- 材料充足时约 800–1,500 个中文字，形成 5–8 个小节、1 个比较/研究框，并链接相关类群或专题。
- 正文讲清生物本身；采样数量、统计细节、争议和引用放到最适合解释它们的位置。地方性结论在相关句子直接注明地点与时间。
- 对现有双语内容保持中英文一致；分别记录中文正文和英文正文的完成情况，待翻译内容不算双语完成。
- 配图有助理解时加入；图像缺失不阻止已有正文形成可读初稿。

### 类群与主题文章

- 类群文章讲共同特征、主要分支、成员差异与代表条目；属科共同特点保持在对应层级。
- 专题围绕一个读者问题串联现成资料，例如“灵长类如何移动”“幼体怎样学习取食”“冠猕猴与人类景观”“从牙齿和踝骨认识早期灵长类”。
- 对比表、地图或时间线必须解释一个具体问题；不为增加页面长度堆放数据。

## 4. 每批五步，写作占主要工作量

1. **选题打包。** 每批 8–12 个普通种，或 2–4 个重点页；同一批尽量共用来源集合、类群或主题。只列目标 ID、已有材料路径、写作提纲和交付位置。
2. **组织初稿。** 合并已有材料，先产出完整可读文本。既有来源和 claim ID 随正文沿用；不再为一篇论文的一条结论单独开整套更新工程。
3. **编辑成页。** 去重、解释术语、补承接句、增加同类比较和相关内容入口。每一条科学判断应能回到已有材料；不能从模型记忆补写来源未提供的事实。
4. **局部检查与接入。** 只看本批涉及的身份对应、关键事实、数字、来源链接、转载/图片使用条件和页面显示。发现问题时退回受影响的段落或条目，其他条目继续。只校验修改文件及必要关联项，不重跑全量数据校验。
5. **批次交付。** 同一主题的一组页面合为一个可审阅 PR，满足所需增量检查后按现有授权自动合并。汇报新增/改写的可读页面及入口、未解决内容缺口。

工作量分配目标：约 70% 写作与改写、20% 编排与展示接入、10% 局部检查；这是初始安排，不是需要计时证明的指标。首个试制窗口设为 90 分钟，完成 2 页样板并记录实际耗时，再估算批量速度，不预报 530 种或全物种的完成日期。

已接入来源不在每批重新核查许可、下载全文、重复确认整套分类链。许可不明只影响相应原文/图片的复制与展示；可用的其他材料继续写作。资料截断不补猜结尾；当前保育状态、精确数量、分类修订等需要时效的表述，仅在本篇确实使用时定向确认。

## 5. 接入现有产品，控制工程量

- 广泛目录的介绍优先写入现有 `data/knowledge/catalogue-profiles.json` 的 `records/sections/sources`，沿用 `CatalogueKnowledge` 展示能力。它支持原创概述，不必等待全部 dossier 主题完备。
- 核心页沿用各包 `profiles.source.json`，专题沿用研究案例、stories 和 events。每份内容指定一个人工维护源，其余版本通过既有生成路径投影，避免手工维护互不一致的正文副本。
- 已有 dossiers 作为写作材料和深入阅读层，分批提炼为概述；有真实展示需求时再补 dossier 到正文的按 ID 投影。不要先做新的内容管理系统、通用审计平台或全库迁移。
- 若现有生成器只能重建全库，先给相关生成路径增加“指定 ID/本批文件”的能力。复用一个批次转换工具与数据输入，减少每篇论文独立维护一个专用脚本。
- 页面默认优先展示原创介绍、特点和相关主题；技术状态、原文和详细引用放入清晰的详情区。影响理解的限制留在对应正文附近。
- App 与 GitHub Pages 共用 `data/pages-preview.json` 定义的精选核心及其小型内容投影。完整原文、大型 dossier 分片、全物种队列保留在线端；App 通过既有配置接口按需获取。`VITE_EVO_API_BASE_URL` 保持可配置，当前没有生产地址，不把完整内容在线接入称为已部署。
- 已有 `source-linked`、`curated-draft`、`published` 等成熟度及维护者/专家评审状态分别记录。内容初稿可以持续交付；不冒填 reviewed，不绕过实际发行时需要的状态条件。

## 6. 接下来具体做什么

| 顺序 | 素材与范围 | 本批交付 |
| --- | --- | --- |
| P0 样板 | 普通狨、黑猩猩已有多主题档案与核心 profiles | 2 篇重点正文，统一阅读结构、引用展开方式和相关条目链接；建立能直接打开的展示入口 |
| P1 核心现生种 | 普通狨、黑猩猩、恒河猴、狮尾猕猴、冠猕猴、阿努比斯狒狒、人类 | 共 7 篇核心重点页；先补完整介绍所需的关键空缺，再按材料增加深度 |
| P2 早期灵长类 | 核心包已有的 Purgatorius、Darwinius、Saadanius、Teilhardina、Morotopithecus、Notharctus、Eosimias | 7 篇化石类群/标本导读，加一条早期灵长类主题阅读路径；不计入 530 个接受种的种级覆盖率 |
| P3 灵长类扩面 | 已确认的 54 个种级 dossier（46 个专门分片、8 个跨类群分片） | 每批 8–12 个有足够资料的物种页；按科属组织导航，随后排查其余 476 个未命中 dossier 的接受种在其他来源中的材料 |
| 并行库存转化 | 先选一个已有原文较齐全的植物属/科，读取对应小分片 | 先 10–20 篇中文区域导读；模板确实适用后扩大到每批 30–50 篇，仍逐条保留自身特点 |
| 下一重点 | 主龙类已有恐龙、鸟类、鳄类材料；翼龙单独列主龙类支系 | 灵长类首轮内容扩面后优先安排主龙类，先做类群导读与已有高材料密度条目，再扩大物种正文 |

主龙类素材整理可以提前进行，主要写作优先级仍遵循灵长类之后。灵长类某个物种缺资料时单列待补，并继续其他物种；缺资料条目不计完成。一个族群的缺口不阻塞植物等其他资料批次。

当前并发容量为主任务加 3 个子代理。子代理全部使用 `gpt-6-luna`：两个负责互不重叠的灵长类内容批次，一个负责已有原文转化；主任务负责编排、合并、展示接入和进度汇报。写作者只修改分配的源文件，共享索引和 manifest 由整合步骤统一更新。

## 7. 新的进度口径

每批只用一个小表记录：`taxonId / 内容类型 / 材料路径 / 中文正文 / 英文正文 / 页面入口 / 待补项 / 批次`。先用文件维护，不建设新的进度系统。

- **资料可用：** 目标物种有可供写作的具体材料。
- **正文已写：** 有该物种独有的连续介绍，超出名称、通用模板和空字段。
- **读者可见：** 本批选定交付版本的页面能显示正文，导航可到达；缺 API 地址的完整 App 内容不计为已在线可用。
- **内容充分度：** 用所写章节及实际空缺说明深度，局部研究导读与综合介绍分别计数。
- **专家评审/研究完备度：** 保留独立状态，既不冒充内容数量，也不把所有写作进展压成零。

灵长类报告以 530 个接受种为固定种级分母，分开报告“已有材料、已有正文、可打开页面”的不同百分比。化石属页、类群介绍和专题另列数量。只有 530 个种的约定首轮正文均达到标准，才报告灵长类首轮内容覆盖完成；源材料确实不足的种清楚列出，不以空壳页完成计数。旧的全科学档案目标仍需全部主题与相应评审条件，不能用内容初稿完成率代替。

下一执行动作：P3-27 后，灵长类已有 137/530 个接受种具读者页（58 个 dossier-backed、79 个 profile-only）；393 个仍无读者页，476 个未命中 dossier 索引的接受种仍需排查。主龙现生种级导读为鳄目 27/27、Aves 9/11,044，共 36/11,071；继续补齐 11,035 个鸟类接受种，并扩展恐龙、翼龙及鳄形类的类群介绍与化石素材。未命中 dossier 不等于已确认无资料；缺页条目不计完成，现生与化石分母分开统计。

## 8. 执行记录（2026-09-29）

P0 两篇样板已通过 PR #474 合并；P1 七个核心现生种已通过 PR #475 合并。这是首轮核心页，不代表 530 种灵长类全覆盖。P2 的早期灵长类导读已加入下列档案，并在 Pages 预览版提供中英文页面；已有的“灵长类证据而非祖先阶梯”阅读路径继续作为串读入口。正文成熟度为双语初稿，尚不表示专家评审或完整科学档案完成。

| taxonId | 内容类型 / 材料 | 中文 / 英文 | 页面入口 | 待补项 | 批次 |
| --- | --- | --- | --- | --- | --- |
| purgatorius | 化石标本导读；灵长类包 profiles、事件及 Chester et al. 2015 | 已写 / 已写 | `/zh/taxa/purgatorius/`、`/taxa/purgatorius/` | 仅覆盖孤立跗骨样本；分类归属和运动解释为比较推断 | P2 |
| darwinius | 化石标本导读；灵长类包 profiles、事件及 Franzen et al. 2009 | 已写 / 已写 | `/zh/taxa/darwinius/`、`/taxa/darwinius/` | 单一幼年正模；制备史和系统发育位置需随标本解读 | P2 |
| saadanius | 化石标本导读；灵长类包 profiles、事件及 Zalmout et al. 2010 | 已写 / 已写 | `/zh/taxa/saadanius/`、`/taxa/saadanius/` | 单一部分头骨；年龄为生物年代学，位置依赖特征矩阵 | P2 |
| teilhardina | 化石样本导读；灵长类包 profiles、事件及 Smith et al. 2006 | 已写 / 已写 | `/zh/taxa/teilhardina/`、`/taxa/teilhardina/` | 三地牙齿样本与地层对比，不是连续迁徙或全球首次出现记录 | P2 |
| morotopithecus | 化石标本导读；灵长类包 profiles、事件及 MacLatchy et al. 2000 | 已写 / 已写 | `/zh/taxa/morotopithecus/`、`/taxa/morotopithecus/` | 两件分离附肢骨；功能重建不等于观察到的行为 | P2 |
| notharctus | 化石标本导读；灵长类包 profiles、事件及 Maiolino et al. 2012 | 已写 / 已写 | `/zh/taxa/notharctus/`、`/taxa/notharctus/` | 单只足部；梳理爪解释不证明行为频率或种群状态 | P2 |
| eosimias | 化石标本导读；灵长类包 profiles、事件及 Gebo et al. 2000 | 已写 / 已写 | `/zh/taxa/eosimias/`、`/taxa/eosimias/` | 孤立跗骨未与牙齿直接关联；亲缘位置依赖比较分析 | P2 |
| 57SDB Trachypithecus francoisi | 种级概述；原有灵长类 batch 20 档案及 4 篇研究，转入 `data/knowledge/catalogue-profiles.json` | 已写 / 已写 | COL26.8 目录详情 `#/registry?release=COL26.8&id=57SDB` | 喀斯特食性、家域和线粒体结论均有地点/样本边界；不生成核心版静态 `/taxa/` 页 | P3 |
| 3H3C9 Gorilla gorilla | 种级概述；primates batch 2 档案，Loango、Mbeli Bai 与长期生活史研究 | 已写 / 已写 | COL26.8 目录详情 `#/registry?release=COL26.8&id=3H3C9` | 饮食、工具观察及繁殖参数来自不同西部低地大猩猩地点与样本 | P3 |
| 3H3C3 Gorilla beringei | 种级概述；Gorilla beringei batch 12 档案，生活史和 Grauer 大猩猩线粒体研究 | 已写 / 已写 | COL26.8 目录详情 `#/registry?release=COL26.8&id=3H3C3` | 山地与 Grauer 样本分开；线粒体变化不是核基因组或完整现今分布调查 | P3 |
| C5QJ Alouatta palliata | 种级概述；Alouatta palliata batch 18 档案，墨西哥人口记录、尼加拉瓜睡眠观察及嗅闻比较 | 已写 / 已写 | COL26.8 目录详情 `#/registry?release=COL26.8&id=C5QJ` | 季节繁殖、姿势与食物探索来自不同地点、亚种和研究样本 | P3 |
| 4LTT2 Pongo pygmaeus | 种级概述；primates core batch 5 档案及 Gunung Palung、Danau Sentarum、Camp Leakey 研究 | 已写 / 已写 | COL26.8 目录详情 `#/registry?release=COL26.8&id=4LTT2` | 亲子鉴定、巢穴模型和人为重引入研究不合并成全范围趋势 | P3 |
| 3WWND Macaca fascicularis | 种级概述；cercopithecoidea batch 8 档案，毛里求斯觅食、臼齿形态与比较基因组研究 | 已写 / 已写 | COL26.8 目录详情 `#/registry?release=COL26.8&id=3WWND` | 生态记录限于一个引入群体；牙齿与基因组结论限于各自样本 | P3 |
| J8P6 Ateles geoffroyi | 种级概述；primates core batch 5 档案，睡眠地点、单只移动追踪及感官比较 | 已写 / 已写 | COL26.8 目录详情 `#/registry?release=COL26.8&id=J8P6` | 不同地点、个体和测量指标不能合成物种普遍值 | P3 |
| 77XPX Propithecus verreauxi | 种级概述；Propithecus verreauxi batch 21 档案，幼体发育与视觉基因型研究 | 已写 / 已写 | COL26.8 目录详情 `#/registry?release=COL26.8&id=77XPX` | 两个马达加斯加地点的局部样本；观察性关联与基因型代理不证明因果 | P3 |
| 3WWNT Macaca nemestrina | 局部研究导读；马来西亚半岛两处森林的相机陷阱占域模型 | 已写 / 已写 | COL26.8 目录详情 `#/registry?release=COL26.8&id=3WWNT` | 皆伐与选择性采伐结果来自不同地点和模型，不能合并为普遍响应 | P3-2 |
| 3PNXK Indri indri | 局部研究导读；Maromizaha 森林 8 只野生幼体的发育与取食观察 | 已写 / 已写 | COL26.8 目录详情 `#/registry?release=COL26.8&id=3PNXK` | 单一地点与有限年龄组；不能据此推断全物种规律 | P3-2 |
| 732V5 Macaca nigra | 局部研究导读；Tangkoko 家域模型及北马鲁古 2023 年调查 | 已写 / 已写 | COL26.8 目录详情 `#/registry?release=COL26.8&id=732V5` | 家域追踪日总数在论文中有未解差异；北马鲁古记录非完整分布调查 | P3-2 |
| 4C92F Pan paniscus | 局部研究导读；LuiKotale 毛发同位素及 4 个野生群体的叫声分类 | 已写 / 已写 | COL26.8 目录详情 `#/registry?release=COL26.8&id=4C92F` | 两项研究地点、方法和样本不同；不据此推断确切食物或叫声含义 | P3-2 |
| X6S9 Colobus vellerosus | 局部研究导读；加纳 Boabeng-Fiema 2019 年清点与 2007–2019 比较 | 已写 / 已写 | COL26.8 目录详情 `#/registry?release=COL26.8&id=X6S9` | 两次密度调查人员和方法不同；只代表一处保护区 | P3-2 |
| 3WWNS Macaca munzala | 局部研究导读；Upper Subansiri 线粒体 DNA 人口史模型 | 已写 / 已写 | COL26.8 目录详情 `#/registry?release=COL26.8&id=3WWNS` | 10 份旧战利品皮样本成功测序；模型不是普查，迁入因素未排除 | P3-2 |
| 47NQQ Nomascus nasutus | 局部研究导读；中越边境残存林区 2021 年声纹调查 | 已写 / 已写 | COL26.8 目录详情 `#/registry?release=COL26.8&id=47NQQ` | 74 只、11 个家庭群的估计未计独居扩散者，且限于一片林区 | P3-2 |
| 485JL Nycticebus coucang | 局部研究导读；22 只救助大懒猴的人工猎物呈现试验 | 已写 / 已写 | COL26.8 目录详情 `#/registry?release=COL26.8&id=485JL` | 救助中心笼内试验不是野外捕食行为观察 | P3-2 |
| 42MHS Mico acariensis | 局部研究导读；亚马逊南中部出现点与分布界定 | 已写 / 已写 | COL26.8 目录详情 `#/registry?release=COL26.8&id=42MHS` | 范围来自少量地点；可能接触区与杂交仍是待验证假说 | P3-2 |
| 42SBF Microcebus berthae | 局部研究导读；Menabe Central 旱季样线中的空间关联 | 已写 / 已写 | COL26.8 目录详情 `#/registry?release=COL26.8&id=42SBF` | 负空间关联不是竞争的直接证据，仅限未退化森林旱季 | P3-2 |
| 3NFRH Hylobates agilis | 局部研究导读；Y 染色体树与视蛋白基因研究 | 已写 / 已写 | COL26.8 目录详情 `#/registry?release=COL26.8&id=3NFRH` | 有限标记和样本不构成完整物种树或行为性色觉研究 | P3-3 |
| 3NFRS Hylobates lar | 局部研究导读；考艾国家公园叫声变体与播放实验 | 已写 / 已写 | COL26.8 目录详情 `#/registry?release=COL26.8&id=3NFRS` | 单一泰国研究点、有限录音情境与 12 次播放试验 | P3-3 |
| 3WWP2 Macaca radiata | 局部研究导读；南印度道路计数、占域模型与颅齿比较 | 已写 / 已写 | COL26.8 目录详情 `#/registry?release=COL26.8&id=3WWP2` | 局地调查、历史计数和跨种标本比较不是当前全域普查 | P3-3 |
| 47NQP Nomascus leucogenys | 局部研究导读；圈养叫声与肠道微生物研究 | 已写 / 已写 | COL26.8 目录详情 `#/registry?release=COL26.8&id=47NQP` | 两项研究均来自有限圈养样本，不代表野外行为或微生物群 | P3-3 |
| 5XBRB Carlito syrichta | 局部研究导读；莱特岛 Mt. Bontoc 林地记录与植被样方 | 已写 / 已写 | COL26.8 目录详情 `#/registry?release=COL26.8&id=5XBRB` | 记录未确认个体身份，种群存续能力未知，限于一处林地碎片 | P3-3 |
| RYZ5 Cebus capucinus | 局部研究导读；Pacuare 保护区果实获取难度与年龄组 | 已写 / 已写 | COL26.8 目录详情 `#/registry?release=COL26.8&id=RYZ5` | 49 只、三个群体和一个哥斯达黎加地点，不是全域食谱 | P3-3 |
| 3WWNF Macaca fuscata | 局部研究导读；Koshima 新奇物体与食物测试 | 已写 / 已写 | COL26.8 目录详情 `#/registry?release=COL26.8&id=3WWNF` | 单一投食、习惯化群体和特定实验流程 | P3-3 |
| 3WWP8 Macaca sylvanus | 局部研究导读；Gouraya 公园两群猕猴年度饮食多样性 | 已写 / 已写 | COL26.8 目录详情 `#/registry?release=COL26.8&id=3WWP8` | 单地点、两群与一年观察不能证明城市化因果 | P3-3 |
| 4S9ML Rhinopithecus bieti | 局部研究导读；白马雪山保护区八岁组体重性二型 | 已写 / 已写 | COL26.8 目录详情 `#/registry?release=COL26.8&id=4S9ML` | 重复年度记录非独立个体数，结果限于监测群体 | P3-3 |
| 4S9MN Rhinopithecus roxellana | 局部研究导读；四川省 2001–2023 年区域分布 | 已写 / 已写 | COL26.8 目录详情 `#/registry?release=COL26.8&id=4S9MN` | 四川省评估不代表中国全域分布或局地种群现状 | P3-3 |
| 45QBH Nasalis larvatus | 局部研究导读；Lower Kinabatangan 取食观察与 DNA 条形码 | 已写 / 已写 | COL26.8 目录详情 `#/registry?release=COL26.8&id=45QBH` | 155 份粪便样本来自沙巴一处保护区的有限时段 | P3-3 |
| 4LTT4 Pongo tapanuliensis | 局部研究导读；苏门答腊猩猩历史分布面积估算 | 已写 / 已写 | COL26.8 目录详情 `#/registry?release=COL26.8&id=4LTT4` | 旧记录的种级归属未充分确认，面积比例是条件性估算 | P3-3 |
| 4TZJS Saimiri boliviensis | 局部研究导读；圈养装置任务中的社会学习 | 已写 / 已写 | COL26.8 目录详情 `#/registry?release=COL26.8&id=4TZJS` | 一项圈养实验，不代表野外学习或全物种认知能力 | P3-4 |
| 4LTSY Pongo abelii | 局部研究导读；苏门答腊猩猩食肉与母女分享观察 | 已写 / 已写 | COL26.8 目录详情 `#/registry?release=COL26.8&id=4LTSY` | 三次事件来自一对个体，不代表全种行为模式 | P3-4 |
| 5XKC5 Cercopithecus diana | 局部研究导读；熟悉度与警报声播放实验 | 已写 / 已写 | COL26.8 目录详情 `#/registry?release=COL26.8&id=5XKC5` | 两处研究点的实验反应，不等于实际捕食风险 | P3-4 |
| 5XW96 Chlorocebus sabaeus | 局部研究导读；几内亚比绍群体记录与线粒体样本 | 已写 / 已写 | COL26.8 目录详情 `#/registry?release=COL26.8&id=5XW96` | 地点和样本记录不是完整分布或栖地调查 | P3-4 |
| 5ZN3P Colobus guereza | 局部研究导读；Kalinzu 森林疣猴取食观察 | 已写 / 已写 | COL26.8 目录详情 `#/registry?release=COL26.8&id=5ZN3P` | 单一习惯化群体和观察时期 | P3-4 |
| 3T528 Lemur catta | 局部研究导读；九个地点的环尾狐猴遗传结构 | 已写 / 已写 | COL26.8 目录详情 `#/registry?release=COL26.8&id=3T528` | 标记和地点样本推断，不是完整物种树 | P3-4 |
| 3XTLF Mandrillus leucophaeus | 局部研究导读；圈养钻猴个体的尸后照料记录 | 已写 / 已写 | COL26.8 目录详情 `#/registry?release=COL26.8&id=3XTLF` | 单次动物园观察，不推断行为动机或野外频率 | P3-4 |
| 42SBS Microcebus mamiratra | 局部研究导读；Nosy Be 鼠狐猴密度抽样 | 已写 / 已写 | COL26.8 目录详情 `#/registry?release=COL26.8&id=42SBS` | 岛内模型外推不是全分布区普查 | P3-4 |
| 42SBX Microcebus murinus | 局部研究导读；灰鼠狐猴低温蛰伏与睡眠实验 | 已写 / 已写 | COL26.8 目录详情 `#/registry?release=COL26.8&id=42SBX` | 低温组 n=2，只代表特定圈养流程 | P3-4 |
| 42SBZ Microcebus ravelobensis | 局部研究导读；Mariarano 森林林缘样线调查 | 已写 / 已写 | COL26.8 目录详情 `#/registry?release=COL26.8&id=42SBZ` | 总体林缘—林内丰度差异未达显著 | P3-4 |
| 4JBHF Pithecia pithecia | 局部研究导读；圈养白面僧面猴食物偏好实验 | 已写 / 已写 | COL26.8 目录详情 `#/registry?release=COL26.8&id=4JBHF` | 五只圈养个体及管理饲料，不代表野外食谱 | P3-4 |
| 3T6ZV Leontopithecus rosalia | 局部研究导读；金狮狨 2014 年分布区数量估计 | 已写 / 已写 | COL26.8 目录详情 `#/registry?release=COL26.8&id=3T6ZV` | 历史调查估计，不代表当前数量 | P3-4 |
| 4TZBJ Saguinus bicolor | 局部研究导读；圈养双色狨粪便微生物与健康关联 | 已写 / 已写 | COL26.8 目录详情 `#/registry?release=COL26.8&id=4TZBJ` | 观察性圈养样本，不能推断疾病因果或野外状况 | P3-5 |
| 4TZK2 Saimiri sciureus | 局部研究导读；松鼠猴 Alu 插入标记分析 | 已写 / 已写 | COL26.8 目录详情 `#/registry?release=COL26.8&id=4TZK2` | 标记面板及两份分类可疑样本限制物种界线解释 | P3-5 |
| 7B78J Symphalangus syndactylus | 局部研究导读；合趾猿线粒体 D-loop 区域支系 | 已写 / 已写 | COL26.8 目录详情 `#/registry?release=COL26.8&id=7B78J` | 单一线粒体片段不代表全基因组分化 | P3-5 |
| 3MJBG Hoolock tianxing | 局部研究导读；缅甸可达地点的声学和遗传记录 | 已写 / 已写 | COL26.8 目录详情 `#/registry?release=COL26.8&id=3MJBG` | 调查地点受通行限制，不是全域估计 | P3-5 |
| 4CKZ5 Papio hamadryas | 局部研究导读；沙特西南部雄性狒狒 GPS 移动 | 已写 / 已写 | COL26.8 目录详情 `#/registry?release=COL26.8&id=4CKZ5` | 九只成年雄性和选定地点，不能推断因果或全域常态 | P3-5 |
| 3MJBF Hoolock leuconedys | 局部研究导读；Mehao 保护区长臂猿放归后取食观察 | 已写 / 已写 | COL26.8 目录详情 `#/registry?release=COL26.8&id=3MJBF` | 三个放归群体和短期观察，不代表通常食谱 | P3-5 |
| C5Q8 Alouatta caraya | 局部研究导读；阿根廷、巴拉圭和巴西 22 个地点的遗传多样性与水库淹没比较 | 已写 / 已写 | COL26.8 目录详情 `#/registry?release=COL26.8&id=C5Q8` | 一个遗传学研究、有限地点与标记；尚无 dossier，不推断全域现状 | P3-6 |
| X6R3 Colobus angolensis | 局部研究导读；乌干达纳布加博湖附近罗文佐里安哥拉疣猴群体的多层级社会组织 | 已写 / 已写 | COL26.8 目录详情 `#/registry?release=COL26.8&id=X6R3` | 单一地点、亚种和一年观察，不推广为全种群社会结构 | P3-7 |
| 3T6ZR Leontopithecus chrysomelas | 局部研究导读；南巴伊亚金头狮面狨群体的 Pourouma 种子传播观察与模型 | 已写 / 已写 | COL26.8 目录详情 `#/registry?release=COL26.8&id=3T6ZR` | 焦点群体、树属和模型阈值有限，不外推为全域生态效应 | P3-8 |
| PMLQ Callicebus nigrifrons | 局部研究导读；米纳斯吉拉斯阿尔费纳斯周边森林残片中的出现记录与片区面积 | 已写 / 已写 | COL26.8 目录详情 `#/registry?release=COL26.8&id=PMLQ` | 限于 45 个残片及邻近 20 个验证样点；摘要与图注对验证模型的次级变量不一致 | P3-9 |
| 68VNQ Callithrix aurita | 局部研究导读；阿尔费纳斯森林残片中的出现记录与候选模型验证 | 已写 / 已写 | COL26.8 目录详情 `#/registry?release=COL26.8&id=68VNQ` | 45 个残片中记录到 15 片；第二地区没有验证出该种模型不等于缺席 | P3-9 |
| 6XJW7 Sapajus nigritus | 局部研究导读；阿尔费纳斯森林残片中的出现记录与片区面积 | 已写 / 已写 | COL26.8 目录详情 `#/registry?release=COL26.8&id=6XJW7` | 45 个残片中记录到 9 片；摘要与图 6 对验证模型的次级变量说法不一 | P3-9 |

主龙分母按现生与化石两条来源线记录。现生部分：COL26.8（2026-08-20）严格接受种快照中，Aves（COL ID `V2`）有 11,044 种，Crocodylia（COL ID `329`）有 27 种，合计 11,071 种；计数按发布版分类树后代统计 `rank=species AND status=accepted`。来源：`data/sources/snapshots/package-species-coverage-col26.8-rc72.json` 与 `data/catalogue-of-life/releases/2026-08-20/registry/hierarchy/`。

化石部分采用 Paleobiology Database（PBDB）作可复现的工作分母：2026-09-30 按 `base_name=Archosauria&rank=species&status=accepted&extant=no&pres=regular` 查询，返回 4,664 个已接受、非现生、常规化石记录种级分类单元（[查询](https://paleobiodb.org/data1.2/taxa/list.json?base_name=Archosauria&rank=species&status=accepted&extant=no&pres=regular&limit=10000)，[参数说明](https://paleobiodb.org/data1.2/taxa/list_doc.html)）。本次接口返回 HTTP 200、无警告，结果数低于 10,000 上限。这是该数据库与条件下的记录数，不等于完整或稳定的全球化石物种清单。同一条件将 `pres` 改为 `ichno` 和 `form`，分别返回 534 个遗迹分类单元和 628 个形态分类单元，单独登记，不并入生物种工作分母。
按同一检索条件分支统计：Dinosauria 3,537（包含 1,743 个 PBDB 非现生 Aves 条目），据此相减的非鸟恐龙为 1,794；Pterosauria 276；Crocodylomorpha 672。子类群包含与交叠，不相加为新总数。鸟类属于现生恐龙谱系，因此 PBDB 的已灭绝 Aves 会出现在 Dinosauria 查询中；现生鸟类仍按 COL26.8 的 Aves 分母单列。PBDB 与 COL 现生鸟类、鳄目接受种有 70 个精确双名匹配；名称相同不证明分类概念相同，完成概念级对照前不从两边总数中相减。
PBDB 数字为 2026-09-30 检索快照；更新覆盖率前按相同参数重取。

P3-1 至 P3-5 五批共 48 个目录档案写入双语导读；P3-6 为 Alouatta caraya（COL ID `C5Q8`）新增一条由 CC BY 4.0 原始研究支持的局部导读，P3-7 为 Colobus angolensis（COL ID `X6R3`）新增一条根据罗文佐里安哥拉疣猴单一野外研究撰写的局部导读，P3-8 为 Leontopithecus chrysomelas（COL ID `3T6ZR`）新增一条依据南巴伊亚一支焦点群体的原始观察与模型撰写的局部导读；P3-9 为 Callicebus nigrifrons（`PMLQ`）、Callithrix aurita（`68VNQ`）和 Sapajus nigritus（`6XJW7`）新增三条基于同一篇 CC BY 研究的局地破碎化导读，并保留来源对验证模型次级变量的内部不一致；这六条新增档案均未建立 dossier。P3-10 为北豚尾猴 Macaca leonina（`3WWNK`）新增一条关于泰国单一野生群体习惯化的双语研究导读；文章结果部分称近 10 个月达到完全阶段，而摘要与结论称接近 13 个月，页面保留这一时间口径差异。该页没有新增 dossier。P3-11 为狮尾猴 Macaca silenus（COL ID 3WWP6）新增一条双语读者导读，整合既有西高止山脉线粒体 DNA 研究、一群猴的旱季行为研究和四群猴的 bioRxiv v1 预印本；不将局地取样外推为全种规律。未新建 dossier。P3-12 为橄榄狒狒 Papio anubis（COL ID 6TM9B）新增基于 2018 年 Alu 插入研究的双语导读；4,645 个指示位点仅是每种两只个体的 12 只样本面板计数。该页复用既有 dossier 和来源审计，没有扩大其样本推断。与 P1 七个现生核心页对照后，发现 P3-3 的 Macaca radiata（COL ID 3WWP2）重复。P3-13 为普通狨 Callithrix jacchus（COL ID 697NS）补充目录详情研究导读，依据六只圈养成年个体、八组研究者配对 dyad；P3-14 为恒河猴 Macaca mulatta（COL ID 3WWNQ）补充目录详情数量遗传导读，依据圣地亚哥岛管理种群的形态与谱系分析。两种均已有 P1 静态核心页与 dossier，本批目录详情复用已审计来源，不增加按 COL ID 去重的种级覆盖。P3-15 为白面卷尾猴 Cebus imitator（COL ID RYZL）新增基于 Melin et al.（2022）的双语研究导读：三种同域灵长类在 2,107 个取食行为段落中留下 26,094 次果实探索记录；白面卷尾猴在比较样本中最常用手触果实，果实比例介于另两种之间，但嗅闻少于两者。结论限于共享食物与局地群体，不外推为全种食谱或感觉机制；原文 CC BY 4.0，复用既有 Ateles 与 Alouatta 来源审计。P3-20 后唯一有读者导读的接受种为 72/530（静态核心页与目录详情按 COL ID 去重）；其中 57 个 dossier-backed 种、15 个 profile-only 种，458 个接受种仍无读者页，476 个种未命中 dossier 索引。早期灵长类化石 7 篇已由本地静态页构建确认可打开；以上均不表示完成专家评审或完整科学档案。

P4 现生主龙扩充批次开始前，已有 `CatalogueKnowledge` 物种级导读 2 条：`Alligator mississippiensis`（COL `BTRB`，Crocodylia）和 `Parus major`（COL `75SVV`，Aves）。当时覆盖鳄目 1/27、鸟类 1/11,044，共 2/11,071；两页均为局部研究导读，不是完整种志或 dossier。已有 15 条恐龙、鳄形类/鸟类、海生爬行动物/翼龙包级 profiles 及三条类群阅读路径是精选入口，不是全种覆盖。

在上述两页基线上，本批再加入 7 个 COL26.8 鳄目接受种：扬子鳄、宽吻凯门鳄、澳洲淡水鳄、恒河鳄、湾鳄、美洲鳄和奥里诺科鳄。合并统计为鳄目 8/27、鸟类 1/11,044，共 9/11,071 个现生主龙物种页；这七页分别是比较咬力/牙压、迁放移动、群体遗传或区域栖地模型导读，不是完整种志或 dossier。咬力论文的实验样本覆盖当时认可的 23 种鳄类，与本计划采用的 COL26.8 现生分母 27 种口径不同，不能据此宣称完成了其余物种覆盖。


P3-16 为锡兰猕猴 Macaca sinica（COL ID 3WWP7）和紫脸叶猴 Semnopithecus vetulus（4WHJB）新增两条双语局地寄生虫研究导读：前者依据 2019 年斯里兰卡三个地理亚种的粪便调查，并把生境数字限定于 M. s. sinica 样组；后者依据 2017—2019 年 78 份斯里兰卡粪样研究。两页均说明粪样阳性不是临床诊断、横断面关联不是因果，也不证明人兽传播；后者仅转述摘要层结果，期刊页面未确认开放许可。两页为 profile-only，均未新建 dossier。
P3-17 为红色细懒猴 Loris tardigradus（COL ID 3W7FX）和灰色细懒猴 L. lydekkerianus（3W7FW）新增两条来源链接双语导读，依据 Nekaris 与 Jayewardene 的斯里兰卡调查（期刊卷期标 2004，2006 年首次在线发表，DOI 10.1017/S0952836903004710）。调查覆盖五个生态区的 31 个地点；约 766 km 样线经过未见懒猴的区域，另 192 km 记录到 185 次目击。两页按研究时使用的四种分类标签分别报告目击数和路线密度估算，不把目击数当作不同个体或现今丰度，也不把历史亚种标签推广为当前界线；未确认开放许可，仅转述摘要层结果，均未新建 dossier。

P3-18 为南方小婴猴 Galago moholi（COL ID 3F2DD）与北方小婴猴 G. senegalensis（3F2DM）新增两条来源链接双语导读。前者依据 Nowack 等（2010）在南非 Nylsvley 单一保护区的季节研究：野外 torpor 记录来自一只雄性，另有两例出现在食水限制后的代谢实验；论文支持其具有进入 torpor 的生理能力，作者关于繁殖与领地取舍的解释仍是假说。后者依据 Ellison 等（2024；2023 年在线发表）在坦桑尼亚、塞内加尔和肯尼亚三处点位的活动与群体大小研究；各点位调查方法不同，不能据此概括全种固定社群模式。两篇来源的开放许可分别为 CC Attribution（未注明版本）和 CC BY 4.0；两页均为局地单项研究导读，尚未经过外部领域专家评审，也未新建 dossier。

P3-19 为智人 Homo sapiens（COL ID 6MB3T）新增一条来源链接双语研究导读，复用既有 dossier。页面并置老挝北部 Tam Pà Ling 两件化石的形态与地点年代模型，以及德国 Ranis 10 份人类遗骸、52 份动物遗骸的稳定同位素结果；明确年代来自洞穴沉积序列模型而非人类化石直接测年，并将饮食结论限定在单一考古地点。研究不代表现代人群、完整物种历史或现今分布；两项来源均有逐项确认的 CC BY 4.0 许可，但页面尚未经过外部领域专家评审。

P3-20 为倭蜂猴 Xanthonycticebus pygmaeus（COL ID BTCRT）新增一条局地圈养福利双语导读，依据 Alejandro 等（2021）对雌性个体从单独饲养转入群体笼舍前后的行为与粪便皮质醇观察。群体饲养后记录到较低的粪便皮质醇；一只单独饲养时出现刻板行为的雌性，入群后不再表现该行为。原文使用旧属名 Nycticebus；页面限定在圈养个体，不据此推断野外社会系统或全种激素规律。来源为 CC BY 4.0；页面为 profile-only，尚未经过外部领域专家评审，也未新建 dossier。

### P3-21 巴西亚马逊森林砍伐前沿的灵长类范围记录导读（PR #494，待 CI）

新增 7 个没有既有 dossier 导读的 COL26.8 灵长类接受种页面，复用 Costa-Araújo 等（2024）对 2015–2018 年巴西南部亚马逊野外记录的讨论。每页只写该研究能支持的局部出现、范围界定或待检验分类假说，不外推为全种分布、数量、种群趋势或保育评估。原文按 CC BY 4.0 发布；本批转述正文，不复用图件。作者旧用名 Alouatta puruensis 未在 COL26.8 找到对应接受灵长类种，故保留为来源名称，不强行映射。

| COL ID / 当前接受种 | 读者页内容 | 范围与限制 | 双语 / 来源审计 | 批次 |
| --- | --- | --- | --- | --- |
| 65WK8 Alouatta discolor | Paranaíta 历史同域记录与中游 Juruena 附近的潜在接触区 | 与未映射的来源名 A. puruensis 有关；杂交和基因交流未证实 | 已写 / 已写；尚未经过外部领域专家评审 | P3-21 |
| J8NW Ateles chamek | 中游 Teles Pires 河右岸两处记录及被毛鉴定 | 局地记录；跨河扩散与基因交流仍待检验 | 已写 / 已写；尚未经过外部领域专家评审 | P3-21 |
| J8P9 Ateles marginatus | 与 A. chamek 一处重叠的局部记录 | 不能据地点重叠推断全域同域或杂交 | 已写 / 已写；尚未经过外部领域专家评审 | P3-21 |
| 4K5YB Plecturocebus moloch | 区域分布重划及尚待解决的模式产地、异名问题 | 不是完整分布普查；分类问题仍开放 | 已写 / 已写；尚未经过外部领域专家评审 | P3-21 |
| 4K5Y8 Plecturocebus hoffmannsi | P. baptista 区域记录与毛色连续变化假说 | 未有共同分子系统发育检验，假说不构成分类修订 | 已写 / 已写；尚未经过外部领域专家评审 | P3-21 |
| 4K5XW Plecturocebus baptista | 在传统 P. hoffmannsi 范围内的记录及待检验分类边界 | 单一地区记录，不能界定全种范围 | 已写 / 已写；尚未经过外部领域专家评审 | P3-21 |
| 4TZJW Saimiri collinsi | Jamanxim、Tapajós 和 Teles Pires 河流区域记录及约 600 公里向西扩展估算 | 区域范围推断，不是完整调查或数量估计 | 已写 / 已写；尚未经过外部领域专家评审 | P3-21 |

本批来源审计记录 7 个接受种的 COL26.8 名称、作者、等级与 Primates 父链，并标记来源分类概念与当前名录不匹配的部分。与 PR #494 已有两条新增灵长类页合并计算，合并后预计为 79/530（57 个 dossier-backed、22 个 profile-only），仍有 451 个接受种无种级读者页；本批没有新建 dossier。

### P3-22 巴西亚马逊砍伐前沿补充记录导读（PR #494）

沿用 P3-21 的原始研究，并新增核对出版方八页补充材料，增加 14 个 COL26.8 灵长类接受种的双语地方记录导读。补充表涵盖 192 条记录、22 个来源种或亚种和 56 个地点；页面只转述市镇与州级地点及记录类型，不复制坐标、表格或图件。补充材料封面标示 CC BY 4.0，同时提示个别组成部分许可可能不同，因此正文仅作来源归属明确的事实摘要，并保留组件级权利限制。四个旧用亚种／异名名称按 COL26.8 的当前父种映射说明；未把地方出现记录写成全域范围、数量或保育结论。

| COL ID / 当前接受种 | 补充表来源名称 | 读者页地方记录 | 范围与分类限制 | 状态 / 批次 |
| --- | --- | --- | --- | --- |
| C5Q6 Alouatta belzebul | A. belzebul | Pará 的 Altamira、Anapu 两次观察 | 调查地点记录，不是范围图或数量估计 | 双语已写；尚未经过外部领域专家评审 / P3-22 |
| F6F4 Aotus azarae | A. a. infulatus | Pará 的 Altamira 一次观察 | 依 COL26.8 归入接受种 A. azarae，保留来源亚种层级 | 双语已写；尚未经过外部领域专家评审 / P3-22 |
| RZ22 Cebus unicolor | C. unicolor | Amazonas 的 Apuí 两次观察 | 地方出现，不界定全种分布或种群量 | 双语已写；尚未经过外部领域专家评审 / P3-22 |
| 5Y6KP Chiropotes albinasus | C. albinasus | Pará、Amazonas、Mato Grosso、Rondônia；多市镇观察和鸣声记录 | 若干调查点，不作全域普查 | 双语已写；尚未经过外部领域专家评审 / P3-22 |
| 6NTWV Lagothrix lagothricha | L. cana cana | Amazonas 与 Rondônia 多地记录 | COL26.8 将来源异名映射至接受种，并接受 L. l. cana | 双语已写；尚未经过外部领域专家评审 / P3-22 |
| 3T6RQ Leontocebus weddelli | L. w. weddelli | Rondônia 两市镇各有观察 | 按当前接受种及亚种父链映射；不是全域调查 | 双语已写；尚未经过外部领域专家评审 / P3-22 |
| 4JBH9 Pithecia mittermeieri | P. mittermeieri | Amazonas 两地及 Mato Grosso 一地记录 | 仅报告表列地点 | 双语已写；尚未经过外部领域专家评审 / P3-22 |
| 4K5XX Plecturocebus bernhardi | P. bernhardi | Amazonas 的 Humaitá、Rondônia 的 Ji-Paraná | 地方出现，不界定完整范围 | 双语已写；尚未经过外部领域专家评审 / P3-22 |
| 4K5XY Plecturocebus brunneus | P. brunneus | Rondônia 两市镇三次观察 | 调查记录，不是完整范围或数量普查 | 双语已写；尚未经过外部领域专家评审 / P3-22 |
| 4K5Y3 Plecturocebus cinerascens | P. cinerascens | Amazonas 与 Mato Grosso 的记录，含鸣声 | 地方记录不代表全种分布或数量 | 双语已写；尚未经过外部领域专家评审 / P3-22 |
| 84GMP Plecturocebus grovesi | P. grovesi | Mato Grosso 一次观察与一次鸣声记录 | 调查地点记录，不提供种群估计 | 双语已写；尚未经过外部领域专家评审 / P3-22 |
| 4K5Y9 Plecturocebus miltoni | P. miltoni | Amazonas 的 Apuí、Novo Aripuanã | 地方记录，不作全种评估 | 双语已写；尚未经过外部领域专家评审 / P3-22 |
| 4TZK4 Saimiri ustus | S. ustus | Amazonas、Rondônia、Mato Grosso 多地观察及鸣声记录 | 多地点仍不等于完整范围或丰度普查 | 双语已写；尚未经过外部领域专家评审 / P3-22 |
| 6XJVY Sapajus apella | S. a. apella | Pará、Amazonas、Rondônia、Mato Grosso 多市镇记录 | 按 COL26.8 亚种父链归入接受种；不外推为全域普查 | 双语已写；尚未经过外部领域专家评审 / P3-22 |

与 P3-21 的 7 页及 PR #494 已有两条新增灵长类页合计，合并后预计为 93/530（57 个 dossier-backed、36 个 profile-only），437 个接受种仍无种级读者页。本批没有新建 dossier；来源审计分别记录原文与补充材料的来源范围、许可陈述和组成部分权利提示。

### P3-23 黑猩猩研究导读（PR #494）

从既有 COL26.8 黑猩猩 dossier（`4C92G`）中抽取三项已审计研究，新增一条多来源双语 profile：几内亚 Bossou 的栖地与距农田取食观察、坦桑尼亚贡贝雌性成熟与首次生育估计、科特迪瓦 Taï 西部黑猩猩棍棒技能视频分析。保留每项研究的地点、样本、年份、任务和估计偏差，不把局地结果概括为全物种规律。未新建 dossier；尚未经过外部领域专家评审。

| COL ID / 接受种 | 页面取用的局部证据 | 来源与限制 | 状态 / 批次 |
| --- | --- | --- | --- |
| 4C92G Pan troglodytes | Bossou 栖地及取食地点；Gombe 雌性成熟年龄；Taï 三群体 1,460 次棍棒使用事件中的握法发育模型 | Bryson-Morrison et al. 2017（CC BY 4.0）；Walker et al. 2018（CC BY-NC-ND 4.0）；Malherbe et al. 2024（CC BY 4.0）。分开报告三个地点和任务，不外推全域 | 双语已写；复用既有 dossier；尚未经过外部领域专家评审 / P3-23 |

PR #494 灵长类合并后预计为 94/530（58 个 dossier-backed、36 个 profile-only），436 个接受种仍无种级读者页；476 个未命中 dossier 索引的接受种仍待排查。

### P4-1 现生鳄类咬合力导读（PR #485，2026-09-29 合并）

新增 Crocodylia（COL `329`）类群导读和 11 个种级研究导读，依据 Erickson et al.（2012）对当时认可的 23 种现生鳄类、83 只性成熟个体所做的测量。各页只介绍研究表中的磨牙区咬合力及样本量；跨种结果指出体质量是主要解释变量，吻部比例作用较小。该研究的 2012 年分类口径与 COL26.8 的 27 个接受种不同。

| COL ID / 物种 | 局部研究导读与样本数据 | 中英文 | 页面入口 | 限制 | 批次 |
| --- | --- | --- | --- | --- | --- |
| ZKNG Crocodylus mindorensis | 磨牙区类群代表咬合力：n=1；2,736 N | 已写 / 已写 | COL26.8 目录详情 `#/registry?release=COL26.8&id=ZKNG` | 成年机构样本，不是全种统计或野外表现；不把后续拆分分类群的旧样本重新归类 | P4-1 |
| ZKNH Crocodylus moreletii | 磨牙区类群代表咬合力：n=1；4,399 N | 已写 / 已写 | COL26.8 目录详情 `#/registry?release=COL26.8&id=ZKNH` | 成年机构样本，不是全种统计或野外表现；不把后续拆分分类群的旧样本重新归类 | P4-1 |
| ZKNN Crocodylus palustris | 磨牙区类群代表咬合力：n=1；7,295 N | 已写 / 已写 | COL26.8 目录详情 `#/registry?release=COL26.8&id=ZKNN` | 成年机构样本，不是全种统计或野外表现；不把后续拆分分类群的旧样本重新归类 | P4-1 |
| ZKNR Crocodylus rhombifer | 磨牙区类群代表咬合力：n=3；2,107 N（样本范围 1,392–3,127 N） | 已写 / 已写 | COL26.8 目录详情 `#/registry?release=COL26.8&id=ZKNR` | 成年机构样本，不是全种统计或野外表现；不把后续拆分分类群的旧样本重新归类 | P4-1 |
| ZKNS Crocodylus siamensis | 磨牙区类群代表咬合力：n=3；3,415 N（样本范围 2,073–4,577 N） | 已写 / 已写 | COL26.8 目录详情 `#/registry?release=COL26.8&id=ZKNS` | 成年机构样本，不是全种统计或野外表现；不把后续拆分分类群的旧样本重新归类 | P4-1 |
| 57D4X Tomistoma schlegelii | 磨牙区类群代表咬合力：n=3；3,397 N（样本范围 1,704–6,450 N） | 已写 / 已写 | COL26.8 目录详情 `#/registry?release=COL26.8&id=57D4X` | 成年机构样本，不是全种统计或野外表现；不把后续拆分分类群的旧样本重新归类 | P4-1 |
| PBBP Caiman crocodilus | 磨牙区类群代表咬合力：n=4；1,215 N（样本范围 1,148–1,303 N） | 已写 / 已写 | COL26.8 目录详情 `#/registry?release=COL26.8&id=PBBP` | 成年机构样本，不是全种统计或野外表现；不把后续拆分分类群的旧样本重新归类 | P4-1 |
| PBBW Caiman yacare | 磨牙区类群代表咬合力：n=5；971 N（样本范围 712–1,192 N） | 已写 / 已写 | COL26.8 目录详情 `#/registry?release=COL26.8&id=PBBW` | 成年机构样本，不是全种统计或野外表现；不把后续拆分分类群的旧样本重新归类 | P4-1 |
| 3ZBL4 Melanosuchus niger | 磨牙区类群代表咬合力：n=3；2,696 N（样本范围 1,779–4,310 N） | 已写 / 已写 | COL26.8 目录详情 `#/registry?release=COL26.8&id=3ZBL4` | 成年机构样本，不是全种统计或野外表现；不把后续拆分分类群的旧样本重新归类 | P4-1 |
| 4C47J Paleosuchus palpebrosus | 磨牙区类群代表咬合力：n=3；900 N（样本范围 667–1,125 N） | 已写 / 已写 | COL26.8 目录详情 `#/registry?release=COL26.8&id=4C47J` | 成年机构样本，不是全种统计或野外表现；不把后续拆分分类群的旧样本重新归类 | P4-1 |
| 4C47K Paleosuchus trigonatus | 磨牙区类群代表咬合力：n=3；1,082 N（样本范围 1,058–1,125 N） | 已写 / 已写 | COL26.8 目录详情 `#/registry?release=COL26.8&id=4C47K` | 成年机构样本，不是全种统计或野外表现；不把后续拆分分类群的旧样本重新归类 | P4-1 |

P4-2 合并后的阶段统计为鳄目 23/27、Aves 1/11,044，共 24/11,071 个现生主龙种级导读。当时剩余四个鳄目接受种为 Crocodylus niloticus、C. novaeguineae、Mecistops cataphractus、Osteolaemus tetraspis；P4-3 对它们新增局地生态、形态或谱系研究导读。P4-2 页面不是完整种志或 dossier。

### P4-2 现生鳄类分类形态与历史谱系导读

新增 4 个 COL26.8 Crocodylia 接受种页面，依据一篇谱系研究、两篇头骨形态研究和一篇局地基因组研究。正文将证据边界限定于历史标本、取样头骨或单一共域地点，不据此推断完整分布、当前数量或全域生态。

| COL ID / 物种 | 局部研究导读 | 中英文 | 页面入口 | 限制 | 批次 |
| --- | --- | --- | --- | --- | --- |
| ZKNT Crocodylus suchus | 现生与埃及木乃伊 DNA 对比所支持的隐存谱系；DOI 10.1111/j.1365-294X.2011.05245.x | 已写 / 已写 | COL26.8 目录详情 #/registry?release=COL26.8&id=ZKNT | 历史谱系证据，不是现代分布或数量估计 | P4-2 |
| 8GRXJ Crocodylus halli | 新几内亚南北种群头骨形态对比与新种诊断；DOI 10.1643/CG-19-240 | 已写 / 已写 | COL26.8 目录详情 #/registry?release=COL26.8&id=8GRXJ | 诊断限于比较标本和地点，不代表全岛生态调查 | P4-2 |
| 8GPZP Mecistops leptorhynchus | 两种现生细吻鳄成年头骨的连续形态比较；DOI 10.1002/jmor.21365 | 已写 / 已写 | COL26.8 目录详情 #/registry?release=COL26.8&id=8GPZP | 头骨诊断不等于覆盖各年龄段的野外鉴定键 | P4-2 |
| 8SBC9 Osteolaemus osborni | 刚果西北部一处同域记录及小样本核基因组比较；DOI 10.1098/rsbl.2023.0448 | 已写 / 已写 | COL26.8 目录详情 #/registry?release=COL26.8&id=8SBC9 | 单地点与少数个体不能估计全域共存或基因流 | P4-2 |

P4-2 阶段统计：每页均有独立来源审计；对未确认开放许可的来源仅作摘要层转述，未复制图像。该批合并后覆盖为鳄目 23/27、鸟类 1/11,044，共 24/11,071。

### P4-3 现生鳄类栖息地、监测与矮鳄分类边界导读

新增四个 COL26.8 Crocodylia 接受种的来源链接导读：乌干达阿尔伯特湖三角洲尼罗鳄生境观察、科特迪瓦西非细吻鳄重复调查、新几内亚鳄南北样本头骨比较，以及加蓬洞穴矮鳄食性与非洲矮鳄地理谱系研究。每页限定于论文所研究的地点、标本、时间和模型；Abanda 洞穴种群的旧用名与后续谱系框架之间仍缺少同批标本的直接对应，故不把其提升为独立种，也不把局地资料推广为全种种志。

| COL ID / 接受种 | 页面内容与证据范围 | 双语 / 来源审计 | 身份链接 | 限制 | 批次 |
| --- | --- | --- | --- | --- | --- |
| ZKNK Crocodylus niloticus | 阿尔伯特湖三角洲五条样线、一年 186 次观察；体型阶段生境宽度与季节记录；DOI 10.1016/j.jglr.2020.09.010 | 已写 / 已写 | COL26.8 目录详情 #/registry?release=COL26.8&id=ZKNK | 单地点、单年观察；频次不是丰度估计 | P4-3 |
| ZKNM Crocodylus novaeguineae | Sepik 与 Hunstein 北部标本和南部样本的头骨比较；DOI 10.1643/CG-19-240 | 已写 / 已写 | COL26.8 目录详情 #/registry?release=COL26.8&id=ZKNM | 比较标本支持分类诊断，不是全岛鉴定键或种群普查 | P4-3 |
| 3YKJB Mecistops cataphractus | 科特迪瓦 38 个地点、195 次重复调查的探测概率与渔网遭遇关联；DOI 10.1002/ece3.8188 | 已写 / 已写 | COL26.8 目录详情 #/registry?release=COL26.8&id=3YKJB | 监测模型限定于研究地点和调查设计；探测率不是种群数量 | P4-3 |
| 6TBCB Osteolaemus tetraspis | 加蓬 Abanda 洞穴与邻近森林的食性、体况局地比较；兼述非洲矮鳄三地理谱系研究；DOI 10.1111/aje.12365、10.1016/j.ympev.2008.11.009 | 已写 / 已写 | COL26.8 目录详情 #/registry?release=COL26.8&id=6TBCB | 洞穴群体分类位置未由同批标本在后续分类框架中直接验证；不外推为全种生态 | P4-3 |

P4-3 后的现生主龙导读为鳄目 27/27、鸟类 1/11,044，共 28/11,071。其余鸟类页面仍须按 Aves 的固定接受种分母逐批补齐；包级精选页、单一研究导读和 fossil PBDB 条目均不替代各自种级覆盖。主龙化石工作分母仍为 2026-09-29 PBDB 查询的 4,664 个 accepted、非现生、常规种级分类单元，需按分类概念去重后另行批次推进。

### P4-4 鸟类单种导读：家麻雀岛屿扩散研究

新增家麻雀 Passer domesticus（COL26.8 Aves 接受种，COL ID 4DXXM）摘要层双语导读，依据 Pärn 等关于长期岛屿种群幼鸟扩散的研究摘要。无农场的低质量岛屿上，春季温度和种群大小与扩散率正相关；有农场的高质量岛屿未见该关系。全文页未能打开，开放许可未确认，故仅转述摘要；将结果限定为所研究的岛屿关联，不外推为全物种因果机制、种群趋势或正式保育评估。该页未新建 dossier，尚未经过外部领域专家评审。

P4-4 后的现生主龙种级导读为鳄目 27/27、Aves 2/11,044，共 29/11,071；其余 11,042 个鸟类接受种仍需逐批补齐。主龙化石工作分母仍为 2026-09-29 PBDB 查询的 4,664 个 accepted、非现生、常规种级分类单元，需按分类概念去重后另行推进。

### P4-5 鸟类繁殖生理、比较基因组与恢复监测导读

新增三种 COL26.8 Aves 接受种的来源链接双语读者页。蓝山雀页转述苏格兰 Loch Lomond 附近巢箱种群三个繁殖季的皮质酮与育雏研究；斑胸草雀页组织一只雄鸟的 2010 年草图基因组和鸡基因组比较；加州神鹫页解释恢复计划截至 2025-12-31 的全球计数、野外放归与死亡记录。各页把结论限定在单篇研究或年度管理统计，不将相关性写作因果，也不将管理计数写成正式保育评估。

| COL ID / 接受种 | 读者页内容与范围 | 来源许可 / 证据边界 | 双语与来源审计 | 批次 |
| --- | --- | --- | --- | --- |
| 32NH2 Cyanistes caeruleus | 三年繁殖研究中，亲鸟基线皮质酮与气温、降雨、领地橡树密度及雏鸟结果的关联；DOI 10.1098/rsos.170875 | 观察性关联；单一苏格兰巢箱种群，不外推全种 | 已写 / 已写；尚未经过外部领域专家评审 | P4-5 |
| 54HRJ Taeniopygia guttata | 雄性草图基因组、50 天与 850 天前脑表达样本，以及与鸡的比较；DOI 10.1038/nature08819 | 2010 年单个体组装与两物种比较；来源为 CC BY-NC-SA，版本号未注明 | 已写 / 已写；尚未经过外部领域专家评审 | P4-5 |
| 3HSM2 Gymnogyps californianus | 全球 607 只计数、区域野外种群、2025 年繁殖／放归／死亡与累计铅中毒死亡 | FWS 2025 年度恢复计划报告，页面只作有日期的管理记录导读，不等于正式风险评估 | 已写 / 已写；尚未经过外部领域专家评审 | P4-5 |

P4-5 后的现生主龙种级导读为鳄目 27/27、Aves 5/11,044，共 32/11,071；尚有 11,039 个鸟类接受种无种级导读。现生鳄目覆盖已达分母，仍需继续扩充鸟类并开展恐龙、翼龙、鳄形类和化石 PBDB 工作分母的概念级整理。

### P4-6 四种现生鸟类的档案转读者页导读（PR #494）

把四条既有 COL26.8 鸟类 dossier 的已审计事实转为独立中英文读者页：安第斯神鹫采用厄瓜多尔范围建模与两日普查；皇帝企鹅采用东南极六个繁殖群的 RAD-SNP 与共祖迁移模型；莱桑信天翁和黑脚信天翁采用美国地质调查局北太平洋历史评估。两只信天翁的全球繁殖比例与兼捕描述明确标为截至 2005 年的历史摘要；不写成当前分布或死亡率。各页复用原 dossier 来源与许可记录，不复制报告图表。

| COL ID / 接受种 | 页面证据 | 来源边界 | 状态 / 批次 |
| --- | --- | --- | --- |
| 5BSLM Vultur gryphus | 厄瓜多尔 60 个栖息点的 2016 年范围模型；2015 年两日同步计数及种群生存力情景 | PLOS ONE DOI `10.1371/journal.pone.0151827`，CC BY 4.0；不当作当前全球评估 | 双语已写；复用既有 dossier；尚未经过外部领域专家评审 / P4-6 |
| FYD9 Aptenodytes forsteri | 2004–2012 年六个东南极繁殖群、110 只个体的遗传连通性模型 | Cristofari et al. 2016，Nature Communications DOI `10.1038/ncomms11842`，CC BY 4.0；模型跨世代平均，不等于即时迁移率 | 双语已写；复用既有 dossier；尚未经过外部领域专家评审 / P4-6 |
| 4GK9K Phoebastria immutabilis | 西北夏威夷群岛的报告期繁殖比例及北太平洋活动范围 | USGS 2009 报告 DOI `10.3133/sir20095131`，公有领域但排除第三方材料；数据截至 2005 年 | 双语已写；复用既有 dossier；尚未经过外部领域专家评审 / P4-6 |
| 4GK9M Phoebastria nigripes | 西北夏威夷群岛的报告期繁殖比例及历史兼捕威胁 | 同一 USGS 2009 报告；历史评估，不代表当前死亡率或保育等级 | 双语已写；复用既有 dossier；尚未经过外部领域专家评审 / P4-6 |

PR #494 于 2026-09-29 合并后，P4-6 现生主龙种级导读确认为鳄目 27/27、Aves 9/11,044，共 36/11,071；鸟类仍有 11,035 个接受种无读者页。非鸟类恐龙、翼龙与非现生鳄形类仍按化石 PBDB 工作分母另行推进。

### P3-24 巴西亚马逊间河区灵长类范围图导读

依据 Mourthé 等（2022）及其补充表 S1，为 11 个 COL26.8 灵长类接受种新增双语目录详情导读，并为吼猴属（COL ID `6295H`）增加一条区域比较研究导读。每个种页仅介绍 IUCN 范围图与十个主要间河区的相交结果；不把区域地图相交说成现场逐点发现、种群数量或完整分布区。主文表 2 的分组总数与比例有内部不一致（80/81 种；46 种对应 57%/58%），各页在来源限制中保留说明。补充表 S1 将 Alouatta nigerrima 的属名误拼为 “Aloautta”，该条按 COL26.8 接受名对应并标明原拼写。

| COL ID / 接受种 | 补充表 S1 的间河区范围图相交 | 页面入口 | 状态 | 批次 |
| --- | --- | --- | --- | --- |
| C5QM Alouatta seniculus | 5：Rondônia、Inambari、Jaú、Napo、Imeri | COL26.8 目录详情 `#/registry?release=COL26.8&id=C5QM` | 双语区域研究导读；非完整种志 | P3-24 |
| C5QF Alouatta macconnelli | 2：Pantepui-Duida、Guiana | COL26.8 目录详情 `#/registry?release=COL26.8&id=C5QF` | 双语区域研究导读；非完整种志 | P3-24 |
| C5QG Alouatta nigerrima | 2：Rondônia、Inambari | COL26.8 目录详情 `#/registry?release=COL26.8&id=C5QG` | 双语区域研究导读；保留补充表拼写问题 | P3-24 |
| F6FT Aotus nigriceps | 2：Rondônia、Inambari | COL26.8 目录详情 `#/registry?release=COL26.8&id=F6FT` | 双语区域研究导读；非完整种志 | P3-24 |
| F6G5 Aotus trivirgatus | 2：Pantepui-Duida、Guiana | COL26.8 目录详情 `#/registry?release=COL26.8&id=F6G5` | 双语区域研究导读；非完整种志 | P3-24 |
| F6G7 Aotus vociferans | 3：Jaú、Napo、Imeri | COL26.8 目录详情 `#/registry?release=COL26.8&id=F6G7` | 双语区域研究导读；非完整种志 | P3-24 |
| 67VL6 Ateles belzebuth | 2：Imeri、Pantepui-Duida | COL26.8 目录详情 `#/registry?release=COL26.8&id=67VL6` | 双语区域研究导读；非完整种志 | P3-24 |
| J8PD Ateles paniscus | 1：Guiana | COL26.8 目录详情 `#/registry?release=COL26.8&id=J8PD` | 双语区域研究导读；非完整种志 | P3-24 |
| P4C8 Cacajao hosomi | 1：Pantepui-Duida | COL26.8 目录详情 `#/registry?release=COL26.8&id=P4C8` | 双语区域研究导读；非完整种志 | P3-24 |
| P4C7 Cacajao calvus | 3：Inambari、Jaú、Napo | COL26.8 目录详情 `#/registry?release=COL26.8&id=P4C7` | 双语区域研究导读；非完整种志 | P3-24 |
| P4C9 Cacajao melanocephalus | 3：Jaú、Napo、Imeri | COL26.8 目录详情 `#/registry?release=COL26.8&id=P4C9` | 双语区域研究导读；非完整种志 | P3-24 |

吼猴属导读比较了研究表中五种成员的区域范围图相交数（A. belzebul 3、A. discolor 2、A. macconnelli 2、A. nigerrima 2、A. seniculus 5）；它是区域研究导读，不是完整属级自然史介绍。该批未新建 dossier，也未经过外部领域专家评审。

P3-24 后灵长类接受种读者页合计为 105/530（58 个 dossier-backed、47 个 profile-only），425 个接受种仍无种级读者页；476 个未命中 dossier 索引的接受种仍待继续排查。



### P3-25 亚马逊 Mico 狨属范围图导读

依据 [Mourthé 等（2022）](https://doi.org/10.3389/fevo.2022.857920) 的补充表 S1，为八个 COL26.8 接受种增加双语区域研究导读，并为 Mico 属增加一条矩阵比较导读。论文将 IUCN 范围图叠置到巴西亚马逊十个主要间河区；本批只报告表格中的区域相交，不把地图相交写成逐点现场发现、种群数量或完整分布区。英文普通名取自 Mammal Diversity Database，中文名为编辑翻译；主文表 2 的种数与比例差异继续保留在限制说明中。

| COL ID / 接受种 | 补充表 S1 的间河区范围图相交 | 页面入口 | 状态 | 批次 |
| --- | --- | --- | --- | --- |
| 42MHT Mico argentatus | 2：Xingu, Tapajós | COL26.8 目录详情 `#/registry?release=COL26.8&id=42MHT` | 双语区域研究导读；非完整种志 | P3-25 |
| 42MHV Mico emiliae | 1：Tapajós | COL26.8 目录详情 `#/registry?release=COL26.8&id=42MHV` | 双语区域研究导读；非完整种志 | P3-25 |
| 42MHW Mico humeralifer | 1：Rondônia | COL26.8 目录详情 `#/registry?release=COL26.8&id=42MHW` | 双语区域研究导读；非完整种志 | P3-25 |
| 42MHZ Mico leucippe | 1：Tapajós | COL26.8 目录详情 `#/registry?release=COL26.8&id=42MHZ` | 双语区域研究导读；非完整种志 | P3-25 |
| 42MJ5 Mico melanurus | 2：Tapajós, Rondônia | COL26.8 目录详情 `#/registry?release=COL26.8&id=42MJ5` | 双语区域研究导读；非完整种志 | P3-25 |
| 84GMH Mico munduruku | 1：Tapajós | COL26.8 目录详情 `#/registry?release=COL26.8&id=84GMH` | 双语区域研究导读；非完整种志 | P3-25 |
| 42MJ6 Mico nigriceps | 1：Rondônia | COL26.8 目录详情 `#/registry?release=COL26.8&id=42MJ6` | 双语区域研究导读；非完整种志 | P3-25 |
| 42MJ7 Mico rondoni | 1：Rondônia | COL26.8 目录详情 `#/registry?release=COL26.8&id=42MJ7` | 双语区域研究导读；非完整种志 | P3-25 |

Mico 属导读汇总表内八种与 Tapajós（5）、Rondônia（4）、Xingu（1）的相交数；M. argentatus 与 M. melanurus 各跨两个区，故为 10 个种—间河区相交。该矩阵摘录不是属级完整分布综述，也未新建 dossier。

P3-25 后灵长类接受种读者页合计为 113/530（58 个 dossier-backed、55 个 profile-only），417 个接受种仍无种级读者页；476 个未命中 dossier 索引的接受种仍待继续排查。


### P3-26 亚马逊 Pithecia、Saguinus、Callimico 与 Cebuella 范围图导读

依据 [Mourthé 等（2022）](https://doi.org/10.3389/fevo.2022.857920) 的补充表 S1，为 12 个 COL26.8 灵长类接受种新增双语区域研究导读，并为 Pithecia、Saguinus、Callimico 和 Cebuella 四属增加矩阵比较导读。来源把 IUCN 范围图叠置到巴西亚马逊十个主要间河区；页面只报告该矩阵的区域相交，不将地图重叠说成逐点野外发现、丰度或完整分布。普通英文名标签取自 Mammal Diversity Database；中文名为编辑翻译。主文表 2 的 80/81 种与 57%/58% 差异继续列为限制。

| COL ID / 接受种 | 补充表 S1 的间河区范围图相交 | 英文标签 | 页面入口 | 状态 | 批次 |
| --- | --- | --- | --- | --- | --- |
| 77LPC Pithecia albicans Gray, 1860 | 1：Inambari | Buffy Saki | COL26.8 目录详情 `#/registry?release=COL26.8&id=77LPC` | 双语区域范围图导读；非完整种志 | P3-26 |
| 4JBGW Pithecia cazuzai Marsh, 2014 | 1：Jaú | Cazuza's Saki | COL26.8 目录详情 `#/registry?release=COL26.8&id=4JBGW` | 双语区域范围图导读；非完整种志 | P3-26 |
| 4JBGX Pithecia chrysocephala I. Geoffroy Saint-Hilaire, 1850 | 1：Guiana | Golden-faced Saki | COL26.8 目录详情 `#/registry?release=COL26.8&id=4JBGX` | 双语区域范围图导读；非完整种志 | P3-26 |
| 4JBH2 Pithecia hirsuta Spix, 1823 | 1：Napo | Hairy Saki | COL26.8 目录详情 `#/registry?release=COL26.8&id=4JBH2` | 双语区域范围图导读；非完整种志 | P3-26 |
| 4JBH4 Pithecia irrorata Gray, 1842 | 3：Tapajós、Rondônia、Inambari | Gray's Bald-faced Saki | COL26.8 目录详情 `#/registry?release=COL26.8&id=4JBH4` | 双语区域范围图导读；非完整种志 | P3-26 |
| 6VLPB Pithecia monachus (É. Geoffroy Saint-Hilaire, 1812) | 1：Inambari | Monk Saki | COL26.8 目录详情 `#/registry?release=COL26.8&id=6VLPB` | 双语区域范围图导读；非完整种志 | P3-26 |
| 4TZBW Saguinus martinsi (Thomas, 1912) | 1：Guiana | Martins's Bare-faced Tamarin | COL26.8 目录详情 `#/registry?release=COL26.8&id=4TZBW` | 双语区域范围图导读；非完整种志 | P3-26 |
| 4TZBY Saguinus midas (Linnaeus, 1758) | 1：Guiana | Midas Tamarin | COL26.8 目录详情 `#/registry?release=COL26.8&id=4TZBY` | 双语区域范围图导读；非完整种志 | P3-26 |
| 4TZC2 Saguinus niger (É. Geoffroy Saint-Hilaire, 1803) | 1：Xingu | Western Black-handed Tamarin | COL26.8 目录详情 `#/registry?release=COL26.8&id=4TZC2` | 双语区域范围图导读；非完整种志 | P3-26 |
| PQG3 Callimico goeldii (Thomas, 1904) | 2：Inambari、Napo | Goeldi's Monkey | COL26.8 目录详情 `#/registry?release=COL26.8&id=PQG3` | 双语区域范围图导读；非完整种志 | P3-26 |
| RYYP Cebuella niveiventris Lönnberg, 1940 | 1：Inambari | Southern Pygmy Marmoset | COL26.8 目录详情 `#/registry?release=COL26.8&id=RYYP` | 双语区域范围图导读；非完整种志 | P3-26 |
| RYYQ Cebuella pygmaea (Spix, 1823) | 2：Jaú、Napo | Northern Pygmy Marmoset | COL26.8 目录详情 `#/registry?release=COL26.8&id=RYYQ` | 双语区域范围图导读；非完整种志 | P3-26 |

四属导读汇总表内矩阵行与范围图相交数。Pithecia 的七行包括已写过的 P. pithecia；Saguinus 按研究时代的八行汇总，不把尚未逐项核对的旧名映射到当前 COL26.8 接受种；Callimico 矩阵只列 C. goeldii；Cebuella 的两行分别为 C. niveiventris（Inambari）与 C. pygmaea（Jaú、Napo）。这些都是研究矩阵的属级区域比较，不是完整属级范围综述。

| COL ID / 属 | 间河区相交数 | 矩阵行数 | 范围 | 批次 |
| --- | --- | --- | --- | --- |
| 6QYQ Pithecia Desmarest, 1804 | Inambari 3；Guiana 2；Tapajós 1；Rondônia 1；Jaú 1；Napo 1 | 7 行 | 属级矩阵导读；不外推为完整范围 | P3-26 |
| 7BP7 Saguinus Hoffmannsegg, 1807 | Guiana 3；Inambari 2；Jaú 2；Napo 2；Belém 1；Xingu 1；Imeri 1 | 8 行 | 属级矩阵导读；不外推为完整范围 | P3-26 |
| 3FFQ Callimico Miranda Ribeiro, 1912 | Inambari 1；Napo 1 | 1 行 | 属级矩阵导读；不外推为完整范围 | P3-26 |
| 62JTZ Cebuella Gray, 1866 | Inambari 1；Jaú 1；Napo 1 | 2 行 | 属级矩阵导读；不外推为完整范围 | P3-26 |

P3-26 未新建物种 dossier，页面均尚未经过外部领域专家评审。该批后灵长类接受种读者页合计为 125/530（58 个 dossier-backed、67 个 profile-only），405 个接受种仍无种级读者页；476 个接受种仍未命中 dossier 索引。

### P3-27 亚马逊五属灵长类范围图导读

依据 [Mourthé 等（2022）](https://doi.org/10.3389/fevo.2022.857920) 的[补充表 S1](https://public-pages-files-2025.frontiersin.org/articles/857920/file/Data_Sheet_1.pdf/857920_supplementary-materials_datasheets_1_pdf/2)，为 12 个 COL26.8 接受种新增双语局部研究导读。矩阵将 IUCN 范围图与巴西亚马逊十个间河区叠置；页面只报告研究表格中的区域相交，不把地图覆盖写成逐点野外记录、丰度或完整物种分布。接受名与身份采用 COL26.8；英文普通名标签取自 Mammal Diversity Database，中文名为编辑翻译。论文的 80/81 种及 57%/58% 内部差异仍列为限制。

| COL ID / 接受种 | 补充表 S1 的间河区范围图相交 | 英文标签 | 页面入口 | 状态 | 批次 |
| --- | --- | --- | --- | --- | --- |
| RYYS Cebus albifrons (Humboldt, 1812) | 1：Pantepui-Duida | White-fronted Capuchin | COL26.8 目录详情 `#/registry?release=COL26.8&id=RYYS` | 双语区域范围图导读；非完整种志 | P3-27 |
| RYZM Cebus kaapori Queiroz, 1992 | 1：Belém | Ka’apor Capuchin | COL26.8 目录详情 `#/registry?release=COL26.8&id=RYZM` | 双语区域范围图导读；非完整种志 | P3-27 |
| RYZX Cebus olivaceus Schomburgk, 1848 | 1：Pantepui-Duida | Weeper Capuchin | COL26.8 目录详情 `#/registry?release=COL26.8&id=RYZX` | 双语区域范围图导读；非完整种志 | P3-27 |
| TXQK Cheracebus lucifer (Thomas, 1914) | 2：Jaú、Napo | Yellow-handed Titi | COL26.8 目录详情 `#/registry?release=COL26.8&id=TXQK` | 双语区域范围图导读；非完整种志 | P3-27 |
| TXQL Cheracebus lugens (Humboldt, 1811) | 2：Imeri、Pantepui-Duida | White-chested Titi | COL26.8 目录详情 `#/registry?release=COL26.8&id=TXQL` | 双语区域范围图导读；非完整种志 | P3-27 |
| TXQP Cheracebus regulus (Thomas, 1927) | 1：Inambari | Rio Juruá Collared Titi | COL26.8 目录详情 `#/registry?release=COL26.8&id=TXQP` | 双语区域范围图导读；非完整种志 | P3-27 |
| TXQQ Cheracebus torquatus (Hoffmannsegg, 1807) | 2：Jaú、Napo | White-collared Titi | COL26.8 目录详情 `#/registry?release=COL26.8&id=TXQQ` | 双语区域范围图导读；非完整种志 | P3-27 |
| 5Y6KK Chiropotes chiropotes (Humboldt, 1811) | 2：Pantepui-Duida、Guiana | Rio Negro Bearded Saki | COL26.8 目录详情 `#/registry?release=COL26.8&id=5Y6KK` | 双语区域范围图导读；非完整种志 | P3-27 |
| 5Y6KV Chiropotes satanas (Hoffmannsegg, 1807) | 1：Belém | Black Bearded Saki | COL26.8 目录详情 `#/registry?release=COL26.8&id=5Y6KV` | 双语区域范围图导读；非完整种志 | P3-27 |
| 4TZJV Saimiri cassiquiarensis (Lesson, 1840) | 4：Jaú、Napo、Imeri、Pantepui-Duida | Humboldt’s Squirrel Monkey | COL26.8 目录详情 `#/registry?release=COL26.8&id=4TZJV` | 双语区域范围图导读；非完整种志 | P3-27 |
| 4K5XZ Plecturocebus caligatus (Wagner, 1842) | 1：Inambari | Chestnut-bellied Titi | COL26.8 目录详情 `#/registry?release=COL26.8&id=4K5XZ` | 双语区域范围图导读；非完整种志 | P3-27 |
| 4K5Y4 Plecturocebus cupreus (Spix, 1823) | 1：Inambari | Coppery Titi | COL26.8 目录详情 `#/registry?release=COL26.8&id=4K5Y4` | 双语区域范围图导读；非完整种志 | P3-27 |

本批 12 个种级分类单元均未在当前 dossier 分片中命中；新增为 profile-only 导读，没有新建 dossier，且尚未经过外部领域专家评审。合并后灵长类接受种读者页为 137/530（58 个 dossier-backed、79 个 profile-only），393 个接受种仍无种级读者页；476 个接受种仍未命中 dossier 索引。该批页面只覆盖这篇研究的区域范围图结果，不作为综合物种介绍计数。
