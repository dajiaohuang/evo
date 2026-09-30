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
4. **接入读者页面。** 将来源支持的内容接入现有双语页面与类群阅读路径；纯内容变更不运行测试、内容校验、数据校验或增量校验。
5. **批次交付。** 同一主题的一组页面合为一个可审阅 PR，按会话中的授权处理后续。汇报新增/改写的可读页面及入口、未解决内容缺口。

工作量分配目标：约 70% 写作与改写、20% 编排与展示接入、10% 批次记录与缺口整理；这是初始安排，不是需要计时证明的指标。首个试制窗口设为 90 分钟，完成 2 页样板并记录实际耗时，再估算批量速度，不预报 530 种或全物种的完成日期。

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

下一执行动作：P3-53 已为 Piliocolobus 固定名录中的九个剩余 ID 增加双语来源链接页，并补全 17 个种级 ID 的属级阅读路径。灵长类现有 345/530 个种级页面记录（54 个 dossier-backed、291 个 profile-only）；P. minusculus 与 P. lulindicus 两页仍为 source-insufficient，不计入首轮正文达标数。因此 343 个接受种达到首轮内容标准，185 个仍无种级页面记录，476 个仍未命中 dossier 索引。新增内容保留原始研究的分类、地点和样本边界。下一批继续补齐剩余灵长类，完成后回到主龙类；主龙类分母见本计划。纯内容变更不运行测试、内容/数据/增量校验或 CI。

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

P3-1 至 P3-5 五批共 48 个目录档案写入双语导读；P3-6 为 Alouatta caraya（COL ID `C5Q8`）新增一条由 CC BY 4.0 原始研究支持的局部导读，P3-7 为 Colobus angolensis（COL ID `X6R3`）新增一条根据罗文佐里安哥拉疣猴单一野外研究撰写的局部导读，P3-8 为 Leontopithecus chrysomelas（COL ID `3T6ZR`）新增一条依据南巴伊亚一支焦点群体的原始观察与模型撰写的局部导读；P3-9 为 Callicebus nigrifrons（`PMLQ`）、Callithrix aurita（`68VNQ`）和 Sapajus nigritus（`6XJW7`）新增三条基于同一篇 CC BY 研究的局地破碎化导读，并保留来源对验证模型次级变量的内部不一致；这六条新增档案均未建立 dossier。P3-10 为北豚尾猴 Macaca leonina（`3WWNK`）新增一条关于泰国单一野生群体习惯化的双语研究导读；文章结果部分称近 10 个月达到完全阶段，而摘要与结论称接近 13 个月，页面保留这一时间口径差异。该页没有新增 dossier。P3-11 为狮尾猴 Macaca silenus（COL ID 3WWP6）新增一条双语读者导读，整合既有西高止山脉线粒体 DNA 研究、一群猴的旱季行为研究和四群猴的 bioRxiv v1 预印本；不将局地取样外推为全种规律。未新建 dossier。P3-12 为橄榄狒狒 Papio anubis（COL ID 6TM9B）新增基于 2018 年 Alu 插入研究的双语导读；4,645 个指示位点仅是每种两只个体的 12 只样本面板计数。该页复用既有 dossier 和来源审计，没有扩大其样本推断。与 P1 七个现生核心页对照后，发现 P3-3 的 Macaca radiata（COL ID 3WWP2）重复。P3-13 为普通狨 Callithrix jacchus（COL ID 697NS）补充目录详情研究导读，依据六只圈养成年个体、八组研究者配对 dyad；P3-14 为恒河猴 Macaca mulatta（COL ID 3WWNQ）补充目录详情数量遗传导读，依据圣地亚哥岛管理种群的形态与谱系分析。两种均已有 P1 静态核心页与 dossier，本批目录详情复用已审计来源，不增加按 COL ID 去重的种级覆盖。P3-15 为白面卷尾猴 Cebus imitator（COL ID RYZL）新增基于 Melin et al.（2022）的双语研究导读：三种同域灵长类在 2,107 个取食行为段落中留下 26,094 次果实探索记录；白面卷尾猴在比较样本中最常用手触果实，果实比例介于另两种之间，但嗅闻少于两者。结论限于共享食物与局地群体，不外推为全种食谱或感觉机制；原文 CC BY 4.0，复用既有 Ateles 与 Alouatta 来源审计。P3-20 后唯一有读者导读的接受种为 68/530（静态核心页与目录详情按 COL ID 去重）；其中 53 个 dossier-backed 种、15 个 profile-only 种，462 个接受种仍无读者页，476 个种未命中 dossier 索引。早期灵长类化石 7 篇已由本地静态页构建确认可打开；以上均不表示完成专家评审或完整科学档案。

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

本批来源审计记录 7 个接受种的 COL26.8 名称、作者、等级与 Primates 父链，并标记来源分类概念与当前名录不匹配的部分。与 PR #494 已有两条新增灵长类页合并计算，合并后预计为 75/530（53 个 dossier-backed、22 个 profile-only），仍有 455 个接受种无种级读者页；本批没有新建 dossier。

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

与 P3-21 的 7 页及 PR #494 已有两条新增灵长类页合计，合并后预计为 89/530（53 个 dossier-backed、36 个 profile-only），441 个接受种仍无种级读者页。本批没有新建 dossier；来源审计分别记录原文与补充材料的来源范围、许可陈述和组成部分权利提示。

### P3-23 黑猩猩研究导读（PR #494）

从既有 COL26.8 黑猩猩 dossier（`4C92G`）中抽取三项已审计研究，新增一条多来源双语 profile：几内亚 Bossou 的栖地与距农田取食观察、坦桑尼亚贡贝雌性成熟与首次生育估计、科特迪瓦 Taï 西部黑猩猩棍棒技能视频分析。保留每项研究的地点、样本、年份、任务和估计偏差，不把局地结果概括为全物种规律。未新建 dossier；尚未经过外部领域专家评审。

| COL ID / 接受种 | 页面取用的局部证据 | 来源与限制 | 状态 / 批次 |
| --- | --- | --- | --- |
| 4C92G Pan troglodytes | Bossou 栖地及取食地点；Gombe 雌性成熟年龄；Taï 三群体 1,460 次棍棒使用事件中的握法发育模型 | Bryson-Morrison et al. 2017（CC BY 4.0）；Walker et al. 2018（CC BY-NC-ND 4.0）；Malherbe et al. 2024（CC BY 4.0）。分开报告三个地点和任务，不外推全域 | 双语已写；复用既有 dossier；尚未经过外部领域专家评审 / P3-23 |

PR #494 灵长类合并后预计为 90/530（54 个 dossier-backed、36 个 profile-only），440 个接受种仍无种级读者页；476 个未命中 dossier 索引的接受种仍待排查。

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

P3-24 后灵长类接受种读者页合计为 101/530（54 个 dossier-backed、47 个 profile-only），429 个接受种仍无种级读者页；476 个未命中 dossier 索引的接受种仍待继续排查。



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

P3-25 后灵长类接受种读者页合计为 109/530（54 个 dossier-backed、55 个 profile-only），421 个接受种仍无种级读者页；476 个未命中 dossier 索引的接受种仍待继续排查。


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

P3-26 未新建物种 dossier，页面均尚未经过外部领域专家评审。该批后灵长类接受种读者页合计为 121/530（54 个 dossier-backed、67 个 profile-only），409 个接受种仍无种级读者页；476 个接受种仍未命中 dossier 索引。

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

本批 12 个种级分类单元均未在当前 dossier 分片中命中；新增为 profile-only 导读，没有新建 dossier，且尚未经过外部领域专家评审。合并后灵长类接受种读者页为 133/530（54 个 dossier-backed、79 个 profile-only），397 个接受种仍无种级读者页；476 个接受种仍未命中 dossier 索引。该批页面只覆盖这篇研究的区域范围图结果，不作为综合物种介绍计数。


### P3-28 亚马逊范围图余项与苏拉威西猕猴实地研究导读（2026-09-30）

为五个尚无物种页且仍为 COL26.8 接受种的巴西亚马逊灵长类补上 Mourthé 等（2022）补充表 S1 的区域范围图摘要；另据北苏拉威西 1987–1988 年调查、南苏拉威西 2006 年样线调查及 2022 年遗传研究，为五种 Macaca 建立来源边界明确的双语导读。亚马逊页只报告研究矩阵的地图相交；苏拉威西猕猴页保留历史地点、样点与作者解释，不将旧密度外推为现今种群。普通英文名仅用于 MDD 有接受名匹配的猕猴；其余五个亚马逊页以 COL 接受学名作为显示标签，不臆造普通名。另为 Cebus 与 Leontocebus 各增加一条属级矩阵阅读页；属页不计入 530 个种级分母。

| COL ID / 接受分类单元 | 来源支持的局部主题 | 页面入口 | 状态 | 批次 |
| --- | --- | --- | --- | --- |
| 7S268 Cebus castaneus | S1：Guiana 范围图相交（1 区） | COL26.8 目录详情 `#/registry?release=COL26.8&id=7S268` | 双语区域范围图导读；非完整种志 | P3-28 |
| RZ28 Cebus yuracus | S1：Napo 范围图相交（1 区） | COL26.8 目录详情 `#/registry?release=COL26.8&id=RZ28` | 双语区域范围图导读；非完整种志 | P3-28 |
| 3T6RB Leontocebus fuscicollis | S1：Inambari 范围图相交（1 区） | COL26.8 目录详情 `#/registry?release=COL26.8&id=3T6RB` | 双语区域范围图导读；非完整种志 | P3-28 |
| 3T6RC Leontocebus fuscus | S1：Jaú、Napo 范围图相交（2 区） | COL26.8 目录详情 `#/registry?release=COL26.8&id=3T6RC` | 双语区域范围图导读；非完整种志 | P3-28 |
| 3T6RK Leontocebus nigricollis | S1：Napo 范围图相交（1 区） | COL26.8 目录详情 `#/registry?release=COL26.8&id=3T6RK` | 双语区域范围图导读；非完整种志 | P3-28 |
| 3WWNG Macaca hecki | Sugardjito 等（1989）：Tangale、Panua 两处保护地的历史密度记录 | COL26.8 目录详情 `#/registry?release=COL26.8&id=3WWNG` | 双语历史样点导读；不是当前数量估计 | P3-28 |
| 3WWNV Macaca nigrescens | Sugardjito 等（1989）：Dumoga-Bone 分区密度及当时估计 | COL26.8 目录详情 `#/registry?release=COL26.8&id=3WWNV` | 双语历史调查导读；不是当前普查 | P3-28 |
| 3WWNX Macaca ochreata | Riley 等（2007）：Faruhumpenai 两处样点、群密度及分布扩展判断 | COL26.8 目录详情 `#/registry?release=COL26.8&id=3WWNX` | 双语局部样线导读；非全岛估计 | P3-28 |
| 7336T Macaca tonkeana | Riley 等（2007）：Kasintuwu 对单种群与混群的现场记录 | COL26.8 目录详情 `#/registry?release=COL26.8&id=7336T` | 双语局部观察导读；未报告单种群密度 | P3-28 |
| BMTBJ Macaca selai | Ghosh 等（2022）：系统发育区分、约 1.96 Ma 的作者估计及遗传保护单元 | COL26.8 目录详情 `#/registry?release=COL26.8&id=BMTBJ` | 双语遗传研究导读；非种群调查 | P3-28 |

属级矩阵导读：Cebus 的 S1 六个表列分类单元共 8 个物种—间河区相交项；Leontocebus 的四个表列分类单元共 5 项。两页只比较该研究列出的区域范围图覆盖，不表示属内全部接受种、点位存在、丰度或过河行为。本批未新建 dossier，未把历史局部研究标为现今种群状态，也未经过外部领域专家评审。

P3-28 后，灵长类种级读者页为 143/530（54 个 dossier-backed、89 个 profile-only）；387 个接受种仍无种级读者页，476 个接受种仍未命中 dossier 索引。五个亚马逊页和五个猕猴页均为 profile-only 导读；属级页另计。


### P3-29 八种 Macaca 局部野外研究导读（2026-09-30）

依据各物种的地方性野外调查、分类描述或行为研究，为八个尚无种级读者页的 COL26.8 接受种新增双语 profile-only 导读。页面只报告各研究实际采样的地点、年份、群体和指标；地方密度或群体观察不外推成现今全分布区种群。台湾猕猴学位论文仓储标示未授权，因此只概述其摘要，不复制表格或图件。英文普通名取自 MDD，中文标签为编辑翻译；本批没有新建 dossier，也尚未经过外部领域专家评审。

| COL ID / 接受种 | 来源支持的局部主题 | 主要范围限制 | 页面入口 | 批次 |
| --- | --- | --- | --- | --- |
| 3WWN9 Macaca arctoides | Hollongapar 一群猕猴的冬季觅食与生境（2015–2016） | 单群、单保护区、冬季 | COL26.8 目录详情 `#/registry?release=COL26.8&id=3WWN9` | P3-29 |
| 3WWNC Macaca cyclopis | 玉山楠梓仙溪林道历史生态观察（1986–1988） | 学位论文摘要、单一路线 | COL26.8 目录详情 `#/registry?release=COL26.8&id=3WWNC` | P3-29 |
| 3WWNL Macaca leucogenys | 墨脱物种描述与三个海拔生境（2015） | 单项描述；邻区延伸仍为可能范围 | COL26.8 目录详情 `#/registry?release=COL26.8&id=3WWNL` | P3-29 |
| 3WWNN Macaca maura | Karaenta 八群、密度与取食记录（2024） | 四个月、不能代表整个国家公园 | COL26.8 目录详情 `#/registry?release=COL26.8&id=3WWNN` | P3-29 |
| 3WWNZ Macaca pagensis | Sipora、Pagai 样线与地方群密度比较（2018） | 摘要未提供调查年份和本种具体密度 | COL26.8 目录详情 `#/registry?release=COL26.8&id=3WWNZ` | P3-29 |
| 3WWP5 Macaca siberu | Siberut National Park 距离抽样与数量估计（2011） | 公园外推；适宜生境样线代表较多 | COL26.8 目录详情 `#/registry?release=COL26.8&id=3WWP5` | P3-29 |
| 3WWP9 Macaca thibetana | 黄山一群猕猴的睡眠地点和取食斑块（2020–2021） | 单群行为研究，不外推至全种 | COL26.8 目录详情 `#/registry?release=COL26.8&id=3WWP9` | P3-29 |
| 72R6T Macaca assamensis | Dampa Tiger Reserve 样线与海拔记录（2012–2014） | 保护区核心区的局部生态密度 | COL26.8 目录详情 `#/registry?release=COL26.8&id=72R6T` | P3-29 |

P3-29 未新建物种 dossier；当前分支计入本批后，灵长类接受种读者页预计为 151/530（54 个 dossier-backed、97 个 profile-only），379 个接受种仍无种级读者页。该计数待 PR #499 的 CI 与评审完成后再视为合并覆盖；未命中 dossier 索引的 476 个接受种仍需排查。

### P3-30 八种 Lepilemur 系统发育导读（2026-09-30）

依据 Andriaholinirina 等（2006）对当时八个运动狐猴种的线粒体细胞色素 b 与细胞遗传比较，为 COL26.8 接受的八种 Lepilemur 补充双语 profile-only 导读。内容限定于该研究的树上关系、染色体差异和取样群体；历史拆分提议保留为论文观点，不改写为现行分类。线粒体片段结果不代表全基因组，也不是生态或种群普查。英文普通名取自 MDD，中文标签为编辑翻译；本批未新建 dossier，也尚未经过外部领域专家评审。

| COL ID / 接受种 | 来源支持的局部主题 | 主要范围限制 | 页面入口 | 批次 |
| --- | --- | --- | --- | --- |
| 6PBSJ Lepilemur ankaranensis | 与 L. septentrionalis 的染色体及线粒体种界比较 | 转述 2006 年研究，不代表新分类修订 | COL26.8 目录详情 `#/registry?release=COL26.8&id=6PBSJ` | P3-30 |
| 6PBSG Lepilemur dorsalis | Ambanja/Nosy Be、Sahamalaza 种群差异及历史拆分假说 | 线粒体局部标记；与 L. ankaranensis 的距离另列 | COL26.8 目录详情 `#/registry?release=COL26.8&id=6PBSG` | P3-30 |
| 6PC4G Lepilemur edwardsi | 与 L. microdon 的主要线粒体分支关系 | 系统树关系受样本与标记范围限制 | COL26.8 目录详情 `#/registry?release=COL26.8&id=6PC4G` | P3-30 |
| 6PBSD Lepilemur leucopus | 与 L. ruficaudatus 的主要分支关系 | 不描述种内完整遗传结构 | COL26.8 目录详情 `#/registry?release=COL26.8&id=6PBSD` | P3-30 |
| 6PC4D Lepilemur microdon | 与 L. edwardsi 的主要分支关系 | 1,140 bp 细胞色素 b，不是全基因组 | COL26.8 目录详情 `#/registry?release=COL26.8&id=6PC4D` | P3-30 |
| 6PBRZ Lepilemur mustelinus | 论文样本中较大的种间线粒体差异 | 只对应 2006 年片段和样本 | COL26.8 目录详情 `#/registry?release=COL26.8&id=6PBRZ` | P3-30 |
| 6PBRY Lepilemur ruficaudatus | Kirindy、Andramasay、Anjahamena 三地理群体 | 论文提出的拆分未作为 COL26.8 接受分类 | COL26.8 目录详情 `#/registry?release=COL26.8&id=6PBRY` | P3-30 |
| 6PC47 Lepilemur septentrionalis | 与 L. ankaranensis 的染色体及线粒体种界比较 | 不以染色体相似度单独决定分类 | COL26.8 目录详情 `#/registry?release=COL26.8&id=6PC47` | P3-30 |

P3-30 未新建物种 dossier；计入本批后灵长类接受种读者页预计为 159/530（54 个 dossier-backed、105 个 profile-only），371 个接受种仍无种级读者页。该计数待 PR #499 的 CI 与评审完成后再视为合并覆盖；未命中 dossier 索引的 476 个接受种仍需排查。

### P3-31 十一种新描述 Lepilemur 形态与分布导读（2026-09-30）

依据 Louis Jr. 等（2006）德州理工大学自然科学研究实验室专刊第 49 号，为 COL26.8 接受的 11 个 Lepilemur 新描述种补充双语 profile-only 导读。专著结合约 3,800 bp 线粒体序列片段、形态特征和当时采集的标本；页面只概述各自的描述样本特征、模式地点及作者当时认定的已知区域。样本小或原文明确待查的范围均保留不确定性，不把历史种界假说改写成现今种群或保育结论。英文普通名沿用 MDD，中文标签为编辑翻译；本批未新建 dossier，也尚未经过外部领域专家评审。

| COL ID / 接受种 | 来源支持的局部主题 | 主要范围限制 | 页面入口 | 批次 |
| --- | --- | --- | --- | --- |
| 84HTK Lepilemur ahmansoni | Tsiombikibo 描述样本、体色与西北部亲缘比较 | 三只模式系列；南界未知 | COL26.8 目录详情 `#/registry?release=COL26.8&id=84HTK` | P3-31 |
| 6PC4J Lepilemur betsileo | Fandriana 样本、黑尾形态与河流间记录 | 北、南界均待调查 | COL26.8 目录详情 `#/registry?release=COL26.8&id=6PC4J` | P3-31 |
| 6PBSH Lepilemur fleuretae | Andohahela Manangotry 雨林与灰色被毛 | 原论文所列局部林地，范围待确认 | COL26.8 目录详情 `#/registry?release=COL26.8&id=6PBSH` | P3-31 |
| 84HTL Lepilemur grewcocki | Anjiamangirana 样本、灰尾及河流间已知区域 | 单一区域描述；南界待查 | COL26.8 目录详情 `#/registry?release=COL26.8&id=84HTL` | P3-31 |
| 6PC4F Lepilemur hubbardi | Zombitse 模式样本与三色被毛 | 2006 年描述范围，不含现今种群估计 | COL26.8 目录详情 `#/registry?release=COL26.8&id=6PC4F` | P3-31 |
| 84HTM Lepilemur jamesi | Manombo 沿海低地雨林背景与棕色被毛 | 栖地背景不等于全种生态；界线待查 | COL26.8 目录详情 `#/registry?release=COL26.8&id=84HTM` | P3-31 |
| 6PBSB Lepilemur milanoii | Daraina 形态及 Andrafiamena 共域记录 | 作者要求补充分布和种群调查 | COL26.8 目录详情 `#/registry?release=COL26.8&id=6PBSB` | P3-31 |
| 6PBS9 Lepilemur petteri | Beza-Mahafaly 记录、体型比较与刺灌林 | 区域边界仍需调查 | COL26.8 目录详情 `#/registry?release=COL26.8&id=6PBS9` | P3-31 |
| 6PC3V Lepilemur seali | Anjanaharibe-Sud 样本及 Mananara-Nord 暂定归属 | 潜在拆分为历史假说，不是现行接受分类 | COL26.8 目录详情 `#/registry?release=COL26.8&id=6PC3V` | P3-31 |
| 6PBRW Lepilemur tymerlachsoni | Nosy Be、Lokobe 样本和背部条纹 | 局部取样，未形成现今岛屿普查 | COL26.8 目录详情 `#/registry?release=COL26.8&id=6PBRW` | P3-31 |
| 6PBS8 Lepilemur wrighti | Kalambatritra 样本及可能的性别色型差异 | 色型观察仅五只个体，范围待查 | COL26.8 目录详情 `#/registry?release=COL26.8&id=6PBS8` | P3-31 |

P3-31 未新建物种 dossier；计入本批后灵长类接受种读者页预计为 170/530（54 个 dossier-backed、116 个 profile-only），360 个接受种仍无种级读者页。该计数待 PR #499 的 CI 与评审完成后再视为合并覆盖；未命中 dossier 索引的 476 个接受种仍需排查。


### P3-32 六种剩余 sportive lemur 读者页（2026-09-30）

本批完成 Lepilemur 中 MDD 映射的最后六个缺页接受种。内容依据模式材料、描述样本和作者当时掌握的局部记录；对无法确定的边界保留原文的不确定性。三个历史在线名称由 2017 年纸本更正正式确立或校正，页面采用 COL26.8 接受名；命名更正不被写成新的分布或生态证据。本批均为双语 profile-only，没有新建 dossier，也尚未经过外部领域专家评审。

| taxonId | 内容重点 | 来源边界 | 页面入口 | 批次 |
| --- | --- | --- | --- | --- |
| 6PBS7 Lepilemur scottorum | Masoala 样本、红褐被毛与 Masiaposa 记录 | 东、北边界仍待调查；不代表现今种群估计 | COL26.8 目录详情 #/registry?release=COL26.8&id=6PBS7 | P3-32 |
| 6PBSF Lepilemur hollandorum | Mananara-Nord 的形态和两片低地雨林记录 | 南界缺少连续取样，北界也未定 | COL26.8 目录详情 #/registry?release=COL26.8&id=6PBSF | P3-32 |
| 6PC2L Lepilemur aeeclis | Antafia 模式地点、变动的毛色特征与河间记录 | Mahavavy du Sud 河以南的延伸未知；有效拼写依据 2017 更正 | COL26.8 目录详情 #/registry?release=COL26.8&id=6PC2L | P3-32 |
| 6PC3Y Lepilemur sahamalaza | 名称更正、模式系列及半岛记录 | Sambirano 河仅为可能北界，范围仍待调查 | COL26.8 目录详情 #/registry?release=COL26.8&id=6PC3Y | P3-32 |
| 6PC3Z Lepilemur otto | Ambodimahabibo 样本形态与局部记录 | 完整分布未确定；2007 生物学描述与 2017 命名更正分开引用 | COL26.8 目录详情 #/registry?release=COL26.8&id=6PC3Z | P3-32 |
| 6PC49 Lepilemur randrianasoloi | Andramasay/Bemaraha 样本及体型比较 | Tsiribihina、Manambaho、Mahavavy du Sud 边界均按假说表述；采用 2017 拼写 | COL26.8 目录详情 #/registry?release=COL26.8&id=6PC49 | P3-32 |

P3-32 未新建物种 dossier；计入本批后灵长类接受种读者页预计为 176/530（54 个 dossier-backed、122 个 profile-only），354 个接受种仍无种级读者页。MDD 映射内的 Lepilemur 物种页已补齐，但全体灵长类仍有 354 个缺页；待 PR #499 的 CI 与评审完成后再视为合并覆盖。476 个未命中 dossier 索引的接受种仍需逐项排查。

### P3-33 五种 Plecturocebus 局地分布与分类导读（2026-09-30）

依据一篇新种描述、两篇 Mammalian Species 综述、秘鲁绢毛猴分类调查和 MDD 名录，为五个 COL26.8 接受种新增双语 profile-only 页面。每页分别标明已确认样点、局地调查范围、分类组合与作者的工作假说；不把历史出现记录写成完整分布、丰度或现况保育结论。Aureipalatii 的分类处理存在名录差异：本页遵循固定的 COL26.8 分母，同时明示 MDD 将其列为 P. toppini 的异名；不把一种名录强写成跨名录共识。本批没有新建 dossier，中文普通名为编辑翻译，尚未经过外部领域专家评审。

| taxonId / 接受种 | 来源支持的局部主题 | 主要范围限制 | 页面入口 | 批次 |
| --- | --- | --- | --- | --- |
| 4K5XV Plecturocebus aureipalatii | Madidi 原始描述、贝尼河西侧初步范围与四处样线；COL26.8 与 MDD 对其接受名处理不同 | 初步范围和样线不构成全域普查；页面按 COL26.8 保留条目并明示 MDD 将其并入 P. toppini | COL26.8 目录详情 #/registry?release=COL26.8&id=4K5XV | P3-33 |
| 4K5Y2 Plecturocebus caquetensis | 哥伦比亚 104 个确认地点、190–400 m，以及家庭群和以植物为主的已发表食性观察 | 地点记录不代表数量普查；繁殖及家域资料仍有限 | COL26.8 目录详情 #/registry?release=COL26.8&id=4K5Y2 | P3-33 |
| 4K5YC Plecturocebus oenanthe | 圣马丁 Alto Mayo 与 Huallaga 河谷、200–1,000 m、群组与主要食物综述 | 局地样点和河流边界不应当作无缺口全域调查；来源标题沿用 Callicebus | COL26.8 目录详情 #/registry?release=COL26.8&id=4K5YC | P3-33 |
| 4K5YH Plecturocebus toppini | 2013 Atalaya 周边六周调查、样线与舟行调查量、重新评估历史标本 | 作者指出北界未明、河界为工作假说；不外推现今数量 | COL26.8 目录详情 #/registry?release=COL26.8&id=4K5YH | P3-33 |
| 4K5YJ Plecturocebus urubambensis | 2015 描述中的局地标本形态和 Río Urubamba 流域记录 | 调查短，作者提出的河流间范围是工作假说而非屏障检验 | COL26.8 目录详情 #/registry?release=COL26.8&id=4K5YJ | P3-33 |

P3-33 未新建物种 dossier；计入本批后灵长类接受种读者页预计为 181/530（54 个 dossier-backed、127 个 profile-only），349 个接受种仍无种级读者页。以上数量待 PR #499 的 CI 与评审完成、并入主线后再计为正式覆盖；476 个未命中 dossier 索引的接受种仍需逐项排查。主龙现生种级导读维持鳄目 27/27、Aves 9/11,044；本批未扩充主龙。


### P3-34 五种 Plecturocebus 行为、声学监测与地方记录导读（2026-09-30）

依据一项玻利维亚城市公园噪声研究、一项两种玻利维亚特有绢毛猴的领地叫声研究、巴拉圭灵长类分布综述及巴西 ICMBio 物种评估，为五个 COL26.8 接受种新增双语 profile-only 页面。页面把群体行为、季节性鸣叫、地方记录和栖地描述限定在各来源实际调查范围内；不将叫声数当作种群密度，也不把省级或河流边界当作完整分布。Vieira 绢毛猴评估列出的一项食性观察只来自一个城市片林群体。本批未新建 dossier，中文普通名为编辑翻译，页面尚未经过外部领域专家评审。

| taxonId / 接受种 | 来源支持的局部主题 | 主要范围限制 | 页面入口 | 批次 |
| --- | --- | --- | --- | --- |
| 4K5Y6 Plecturocebus donacophilus | 圣克鲁斯附近公园六群噪声梯度、活动及人体模型反应；粪便皮质醇结果 | 单一城市公园；噪声与人类活动共变，激素样本规模有限 | COL26.8 目录详情 #/registry?release=COL26.8&id=4K5Y6 | P3-34 |
| 77QLM Plecturocebus modestus | 与 P. olallae 比较的林地连续性和旱季领地叫声差异 | 特定群体和调查期；叫声频率不是密度的直接换算 | COL26.8 目录详情 #/registry?release=COL26.8&id=77QLM | P3-34 |
| 4K5YD Plecturocebus olallae | 与 P. modestus 比较的林地连续性和雨季领地叫声差异 | 特定群体和调查期；不更新现今分布或数量 | COL26.8 目录详情 #/registry?release=COL26.8&id=4K5YD | P3-34 |
| 4K5YF Plecturocebus pallescens | 巴拉圭部门级标本与可靠记录、查科湿润地带和水道关联 | 旧标本较多、记录等级不一；仅总结巴拉圭材料 | COL26.8 目录详情 #/registry?release=COL26.8&id=4K5YF | P3-34 |
| 4K5YK Plecturocebus vieirai | 巴西州级分布、生境及城市片林单群食性观察 | 食性证据仅来自一群；不采用评估中不一致的范围面积值 | COL26.8 目录详情 #/registry?release=COL26.8&id=4K5YK | P3-34 |

P3-34 未新建物种 dossier；计入本批后灵长类接受种读者页预计为 186/530（54 个 dossier-backed、132 个 profile-only），344 个接受种仍无种级读者页。以上数量待 PR #499 的 CI 与评审完成、并入主线后再计为正式覆盖；476 个未命中 dossier 索引的接受种仍需逐项排查。主龙现生种级导读维持鳄目 27/27、Aves 9/11,044；本批未扩充主龙。

### P3-35 八种 Microcebus 鼠狐猴与属级阅读导读（2026-09-30）

为八个 COL26.8 接受种新增双语 profile-only 页面，并以真实 COL 属级 ID `63B2M` 新增 Microcebus 属介绍和按研究区域排列的阅读顺序（入口：`#/registry?release=COL26.8&id=63B2M`）。西部四种依 Rasoloarison 等（2000）的 12 个样点修订；东部 *M. marohita* 与 *M. tanosi* 依 2013 年小样本描述；*M. gerpi* 限于 Sahafina 研究；*M. macarthurii* 限于 Schüßler 等（2020）的东北部区域比较。页面将旧地点记录、采样限制和现状知识分开；MDD 当前将 *M. marohita* 列为 *M. jollyae* 异名，而固定 COL26.8 仍接受 `42SBV`，两者均明示。MDD 对 *M. macarthurii* 显示 Anjiahely Mouse Lemur，本页使用 MacArthur 鼠狐猴作为编辑普通名，并明示两者不同。中文普通名为编辑翻译；本批未新建 dossier，也未经过外部领域专家评审。

| taxonId / 接受种 | 来源支持的局部主题 | 主要范围限制 | 页面入口 | 批次 |
| --- | --- | --- | --- | --- |
| 42SBY *Microcebus myoxinus* | 西部样点、旧型产地链和标本体重样本 | St. Augustin 标签来源不清；边界限于 2000 年修订所知 | COL26.8 目录详情 #/registry?release=COL26.8&id=42SBY | P3-35 |
| 42SBN *M. griseorufus* | 西南部定位记录及修订中的形态比较 | 不推断现今边界、丰度或保育等级 | COL26.8 目录详情 #/registry?release=COL26.8&id=42SBN | P3-35 |
| 42SC3 *M. sambiranensis* | Manongarivo 样本与头骨、牙齿比较 | 不扩写生态、食性或现今范围 | COL26.8 目录详情 #/registry?release=COL26.8&id=42SC3 | P3-35 |
| 42SC6 *M. tavaratra* | Ankarana 描述样本及与 *M. ravelobensis* 的比较 | 限于早期修订，不更新现状分布 | COL26.8 目录详情 #/registry?release=COL26.8&id=42SC6 | P3-35 |
| 42SBV *M. marohita* | Marohita/Marolambo 样本、体型资料与森林回访观察 | 2013 年样本少；不据旧林况推断当前状态；MDD 采用异名处理 | COL26.8 目录详情 #/registry?release=COL26.8&id=42SBV | P3-35 |
| 42SC5 *M. tanosi* | 两处地点的十个样本及线粒体、核基因比较 | 不外推为连续分布或周边森林普查 | COL26.8 目录详情 #/registry?release=COL26.8&id=42SC5 | P3-35 |
| 42SBM *M. gerpi* | Sahafina 低地雨林海拔、三种线粒体基因与形态证据 | 单个研究区；不推断全岛范围或现今保育状态 | COL26.8 目录详情 #/registry?release=COL26.8&id=42SBM | P3-35 |
| 42SBR *M. macarthurii* | 东北部低地样点及与近缘未命名谱系的形态比较 | 区域比较不能代替完整分布或自然史；普通名与 MDD 显示名不同 | COL26.8 目录详情 #/registry?release=COL26.8&id=42SBR | P3-35 |

P3-35 未新建物种 dossier；计入本批后灵长类接受种读者页预计为 194/530（54 个 dossier-backed、140 个 profile-only），336 个接受种仍无种级读者页。以上数量待 PR #499 的 CI 与评审完成、并入主线后再计为正式覆盖；476 个未命中 dossier 索引的接受种仍需逐项排查。属级介绍和阅读顺序可由 COL 属级目录页读取，但不计入 530 个种级分母。主龙现生种级导读维持鳄目 27/27、Aves 9/11,044；本批未扩充主龙。

### P3-36 十二种 Microcebus 鼠狐猴证据页与属级阅读路径扩展（2026-09-30）

沿用固定 COL26.8 接受种身份，为十二个 *Microcebus* 接受种新增双语 profile-only 页面，并把同一个属级入口 `63B2M`" 的阅读顺序扩展到当前资料批次。内容只转写所引区域研究、类型地点和样本观察：西北部鼠狐猴分类研究、东部多位点修订、2016 年种界检验、2008 年北部描述及东北部五低地林样点。没有以局部地点代替完整分布，没有把捕获频次写成数量或偏好。MDD 当前条目把 *M. boraha* 记入 *M. simmonsi*，并注明 *M. ganzhorni* 与 *M. manitatra* 纳入 *M. murinus*；与固定 COL26.8 接受种分别保留。普通名为 MDD 英文显示名或编辑中文译名；本批未新建 dossier，尚未经过外部领域专家评审。

| taxonId / 接受种 | 来源支持的局部主题 | 主要范围限制 | 页面入口 | 批次 |
| --- | --- | --- | --- | --- |
| 42SBG *M. bongolavensis* | 北部/西北部河间系统取样与线粒体、形态分类证据 | 样点和模型不构成现今全岛普查 | COL26.8 目录详情 `#/registry?release=COL26.8&id=42SBG` | P3-36 |
| 42SBH *M. boraha* | Sainte-Marie 岛 Ikalalao Forest 类型系列和界定研究 | 类型地点不能代表岛内所有栖地；MDD 并入 simmonsi | COL26.8 目录详情 `#/registry?release=COL26.8&id=42SBH` | P3-36 |
| 42SBK *M. danfossi* | Ambarijeby 附近森林斑块类型地点与区域线粒体分类 | 不能据类型点推断完整范围 | COL26.8 目录详情 `#/registry?release=COL26.8&id=42SBK` | P3-36 |
| 42SBL *M. ganzhorni* | 多位点种界分析与形态比较 | MDD 当前把该名纳入 murinus；保留 COL 身份 | COL26.8 目录详情 `#/registry?release=COL26.8&id=42SBL` | P3-36 |
| 42SBP *M. jollyae* | 东部样点、少量形态测量和类型材料 | 局地研究不足以界定现今分布；MDD 对相关名称另作合并 | COL26.8 目录详情 `#/registry?release=COL26.8&id=42SBP` | P3-36 |
| 42SBQ *M. lehilahytsara* | 原始描述与后续低地样点记录 | 不把一个研究区或海拔记录视为完整生态边界 | COL26.8 目录详情 `#/registry?release=COL26.8&id=42SBQ` | P3-36 |
| 42SBT *M. manitatra* | 多位点种界检验和采样地点 | MDD 当前把该名纳入 murinus；保留 COL 身份 | COL26.8 目录详情 `#/registry?release=COL26.8&id=42SBT` | P3-36 |
| 42SC2 *M. rufus* | Ranomafana 16 个月标放再捕与捕获组成 | 单地点捕获不是全种密度或稳定性别比 | COL26.8 目录详情 `#/registry?release=COL26.8&id=42SC2` | P3-36 |
| 42SC4 *M. simmonsi* | 东部修订、东北部记录与 Betampona 类型地点 | MDD 把 boraha 纳入；COL26.8 分列两个接受种 | COL26.8 目录详情 `#/registry?release=COL26.8&id=42SC4` | P3-36 |
| 6RFN3 *M. arnholdi* | Montagne d'Ambre 约 990 m 的类型地点和正模 | 类型材料不界定现今完整范围 | COL26.8 目录详情 `#/registry?release=COL26.8&id=6RFN3` | P3-36 |
| 73FMR *M. margotmarshae* | Antafondro Classified Forest 约 134 m 的类型地点 | 类型点不代表现今分布或森林状况 | COL26.8 目录详情 `#/registry?release=COL26.8&id=73FMR` | P3-36 |
| 84JFB *M. jonahi* | Ambavala 类型地点、五处低地林样点和局部豆蔻植被观察 | 捕获和植被记录限于东北研究区 | COL26.8 目录详情 `#/registry?release=COL26.8&id=84JFB` | P3-36 |

P3-36 未新建物种 dossier；计入本批后灵长类接受种读者页预计为 206/530（54 个 dossier-backed、152 个 profile-only），324 个接受种仍无种级读者页。计数待 PR #499 的局部校验、CI 与评审完成并入主线后再计为正式覆盖；476 个未命中 dossier 索引的接受种仍需逐项排查。属级介绍与阅读顺序不计入种级分母。主龙现生和化石工作分母及覆盖计数维持 P4-7/P4-8 所列口径。

### P3-37 五种竹狐猴研究页与属级阅读路径（2026-09-30）

新增五个 COL26.8 灵长类接受种的双语 source-linked 页面，并增加 Hapalemur 与 Prolemur 两个属级阅读入口。属级条目用于组织分类差异、样本类型和文献次序，不计入 530 个种级分母。

| COL ID / 接受种 | 读者页证据 | 主要边界 | 批次 |
| --- | --- | --- | --- |
| `3JK9Y` Hapalemur alaotrensis | Alaotra 1994/1999 年同方法舟行调查，按地点比较小群遭遇率；记录 1999 年干旱的估算限制 | 历史指标估算，不是当前数量 | P3-37 |
| `3JK9Z` Hapalemur aureus | 1987 年新种描述与 Ranomafana 三种同域竹狐猴的食物/排泄物氰化物检测 | 模式地点和 102 份样品不代表完整分布或生理机制 | P3-37 |
| `6LBGW` Hapalemur meridionalis | Mandena 冬季取食研究及后续三个群体的 2013 年跟随研究 | 沿海林地和样本季节，不外推为全种食谱 | P3-37 |
| `6LBH8` Hapalemur occidentalis | Tsiombikibo 记录及 Masoala 半岛六处观察、Tsarasoa 单群体取食样本 | 历史地点和单群体短期观察，不作现今范围普查 | P3-37 |
| `4MRRG` Prolemur simus | 东马达加斯加六处调查点的取食痕迹/目击记录与大型秆竹资料 | 痕迹、目击和植物分布分开，不视为当前占域普查 | P3-37 |

本批未新建 species dossier，五种均为 profile-only；页内中译普通名为编辑译名，所有条目尚未经过外部领域专家评审。计入本批后灵长类接受种读者页预计为 211/530（54 个 dossier-backed、157 个 profile-only），319 个接受种仍无种级读者页；476 个未命中 dossier 索引的接受种仍待排查。

属级入口分别采用真实 COL26.8 ID `6363J`（Hapalemur，五个接受种）和 `6WMC`（Prolemur，一个接受种）。阅读次序按研究证据类型编排；2002 年样本分类与当前名录分开记录，旧文献中的 Hapalemur simus / H. (Prolemur) simus 不替代当前 COL 身份。

主要来源：Mutschler et al. (2001), DOI `10.1046/j.1365-3008.2001.00167.x`; Meier et al. (1987), DOI `10.1159/000156299`; Yamashita et al. (2010), DOI `10.1002/ajp.20751`; Eppley et al. (2011), DOI `10.1007/s10329-010-0225-3`; Eppley et al. (2016), DOI `10.1002/ajpa.23034`; Curtis et al. (1995), DOI `10.1017/S0030605300021165`; Patel et al. (2008), *Lemur News* 13; greater bamboo lemur distribution survey, DOI `10.1007/s10764-011-9500-4`; King et al. (2013), DOI `10.1896/052.027.0105`; Fausser et al. (2002), DOI `10.1186/1471-2148-2-4`.

### P4-7 主龙现生与化石工作分母冻结（2026-09-30）

重新核对 COL26.8 本地固定快照及 PBDB 当日物种查询。现生分母仍为 COL26.8（2026-08-20）严格接受种：Aves 11,044、Crocodylia 27，共 11,071；依据本地包覆盖快照及发布版层级，见 `data/sources/snapshots/package-species-coverage-col26.8-rc72.json`。化石工作分母的原始响应保存于 `data/sources/snapshots/pbdb-archosauria-accepted-fossil-species-2026-09-30.json`，参数、来源许可、响应 SHA-256、分支 ID 集和限制记录于相邻 manifest。查询为 `base_name=Archosauria&rank=species&status=accepted&extant=no&pres=regular&limit=10000`，返回 4,664 个唯一 PBDB taxon OID；所有分支 OID 均落在根查询中，分区互斥且并集覆盖完整根列表。

| PBDB 分区 / 核对关系 | 接受记录数 | 分母用途 |
| --- | ---: | --- |
| 非鸟恐龙（Dinosauria 3,537 减去其内的化石 Aves 1,743） | 1,794 | 化石恐龙 reader-page 工作分母 |
| 化石 Aves | 1,743 | 与现生 COL Aves 分开统计 |
| Pterosauria | 276 | 翼龙化石 reader-page 工作分母 |
| Crocodylomorpha | 672 | 与现生 COL Crocodylia 分开统计 |
| 根查询中不属于上述三支的残余记录 | 179 | 保留为根级残余，不命名为单一支系 |
| **互斥化石分区合计** | **4,664** | **完整覆盖当日 PBDB 根查询** |

同一过滤器的 `pres=ichno` 遗迹分类记录 534 个、`pres=form` 形态分类记录 628 个，均在根物种名单之外，单独登记且不计入生物种分母。Dinosauria、Pterosauria、Crocodylomorpha 等嵌套查询的原始小计不能简单相加；只有 manifest 中基于 PBDB taxon OID 验证的五个互斥分区可相加。PBDB 的 4,664 是数据库、过滤条件和检索日期限定的工作分母，不代表稳定完整的全球物种清单。按来源行相加，现生 COL 与化石 PBDB 共 15,735 条工作记录，但这不是经跨目录概念协调后的全球唯一物种数；70 个跨源精确双名匹配仍不据此去重。P4-8 后 reader-page 覆盖为现生 COL 鳄目 27/27、Aves 9/11,044；化石为非鸟恐龙 5/1,794、Aves 1/1,743、Crocodylomorpha 1/672，共 7/4,664。六页的全球首现和末现范围均未评估，不以单个标本年龄代替完整范围。

### P4-8 六种化石主龙 species page（2026-09-30）

依据冻结 PBDB 接受名册的 taxon OID 与每种一篇主研究，新增六个双语物种页，纳入现有主龙阅读路径或 Pages 预览。原有四个类群档案继续保留；六个物种页各自链接 taxonomy、biogeography、morphology、ecology 主张。单个地层或标本年龄只作来源范围，不合成为物种全球首现/末现；六页的 first/last appearance 均为 `not-assessed`。页面为来源限定的双语初稿，尚未经过外部领域专家评审。

| PBDB taxon OID | 接受种 | 页面来源 | 接入阅读路径 | 状态 / 来源边界 |
| --- | --- | --- | --- | --- |
| `txn:321717` | *Carnufex carolinensis* | Zanno et al. 2015, DOI `10.1038/srep09276` | 鳄形类与鸟类证据边界；Carnufex 正模 | NCSM 21558 为未成熟、部分保存正模；体型与捕食者生态属研究推断；全球范围未评估 |
| `txn:413465` | *Asteriornis maastrichtensis* | Field et al. 2020, DOI `10.1038/s41586-020-2096-0` | 鳄形类与鸟类证据边界；Asteriornis 冠群位置检验 | NHMM 2013 008 与 66.8–66.7 Ma 层位；系统位置随简约法/尖端定年方法而异；全球范围未评估 |
| `txn:52793` | *Ankylosaurus magniventris* | Carpenter 2004, DOI `10.1139/e04-043` | Pages 预览 | 限于重新描述的西部内陆具名材料；生态字段不作超出论文的推断；全球范围未评估 |
| `txn:347522` | *Buriolestes schultzi* | Cabreira et al. 2016, DOI `10.1016/j.cub.2016.09.040` | 早期恐龙证据；食肉蜥脚形类 | ULBRA-PVT280 标本与牙齿观察和拓扑/祖先食性重建分开；全球范围未评估 |
| `txn:90118` | *Yinlong downsi* | Xu et al. 2006, DOI `10.1098/rspb.2006.3566` | 早期恐龙证据；角龙类镶嵌特征 | IVPP V14530 的解剖与矩阵位置分开；不据此推断直接祖先；全球范围未评估 |
| `txn:230947` | *Yutyrannus huali* | Xu et al. 2012, DOI `10.1038/nature10906` | 早期恐龙证据；大型丝状体表结构 | 三具骨架与保存的丝状体表属于直接记录；颜色、覆盖范围和功能不作直接观察主张；全球范围未评估 |

P4-8 后，化石物种页为非鸟恐龙 5/1,794、化石 Aves 1/1,743、Crocodylomorpha 1/672，共 7/4,664；与现生 COL 的 36/11,071 分开统计。六页及其阅读路径只是本批交付，不代表各分支或主龙全目完成。


## P3-38 五种 Trachypithecus 研究页与属级阅读路径（2026-09-30）

新增五个 COL26.8 接受种的双语 source-linked 页面，并为真实属级 COL ID 7YDX 增加阅读入口。引导次序从越南与华南石灰岩林地的局地研究，转向西阿萨姆区域样线调查，再到西苏门答腊沿海林地的一群体季节饮食；这不是属级物种清单或系统发育排序。

| COL ID / 接受种 | 读者页证据 | 主要边界 | 批次 |
| --- | --- | --- | --- |
| 57SD9 *Trachypithecus delacouri* | Van Long 2007–2008 饮食记录及 145 种可利用植物中的 42 种食物 | 一地食谱，不解释全种喀斯特关联 | P3-38 |
| 57SDH *T. leucocephalus* | 广西 Fusui 1997–1998 家域与生境质量比较 | 人为干扰分层的局地关联，不作现代范围估计 | P3-38 |
| 57SDC *T. geei* | 西阿萨姆 1997–2004 多阶段样线调查 | 历史覆盖与焦点群样本，不作当前数量评估 | P3-38 |
| 57SDP *T. poliocephalus* | Cat Ba 岛两个繁殖群的 180 天观察与家域摘要 | 期刊全文受限；季节差异未作统计检验 | P3-38 |
| 57SD8 *T. cristatus* | Gunung Padang 沿海林地一群个体、482 小时季节饮食观察 | 单群体与单地点，不外推全种食谱 | P3-38 |

本批未新建 species dossier，五种均为 profile-only；中文普通名为编辑译名，页面尚未经过外部领域专家评审。计入本批后灵长类接受种读者页为 216/530（54 个 dossier-backed、162 个 profile-only），314 个接受种仍无种级读者页；476 个未命中 dossier 索引的接受种仍待排查。

来源：[Workman (2010)](https://doi.org/10.1002/ajp.20785)、[Li & Rogers (2005)](https://doi.org/10.1159/000086020)、[Srivastava (2006)](https://doi.org/10.1896/0898-6207.21.1.163)、[Hendershott, Behie & Rawson (2018)](https://doi.org/10.1007/s10764-018-0051-9)、[Akbar et al. (2022)](https://doi.org/10.1163/14219980-20210703)。

## P3-39 七种 Nycticebus 物种页与属级阅读路径（2026-09-30）

新增七个 COL26.8 接受种的双语 source-linked 页面，并为属级真实 COL ID 65ZL 增加阅读入口。本批将局地野外研究、博物馆标本与分子分类研究分开；所有作者使用的历史分类名称均不替代固定 COL 身份。

| COL ID / 接受种 | 读者页证据 | 主要边界 | 批次 |
| --- | --- | --- | --- |
| 485JH Nycticebus bengalensis | Trishna 保护区冬夏 177 小时树液、花蜜与活动观察 | 一地季节样本，不代表全种食谱 | P3-39 |
| 485JP N. javanicus | Mount Halimun-Salak 两只成年雌性的家域与空间使用 | 两只个体，不作全种家域估计 | P3-39 |
| 485JG N. bancanus | Klabat Bay 正模资料与婆罗洲分类研究对照 | 模式地点不是现今范围；毛色类群与遗传谱系仍需对照 | P3-39 |
| 485JJ N. borneanus | Sakaiam 河流域正模资料与两项分类研究 | 不据模式地点确认现今边界 | P3-39 |
| 485JQ N. kayan | Peleben 正模资料及 2013 年新种描述、2023 年分子比较 | 毛色诊断与分子谱系非一一对应 | P3-39 |
| 485JR N. menagensis | Tawi-Tawi 名称历史、遗失正模及当前 MDD 处理 | 旧文献的婆罗洲用名与当前页面分类范围需区分 | P3-39 |
| BT5LY N. hilleri | Sumatra 模式材料和 MDD 对一张南部个体影像的鉴定不确定提示 | 未找到物种特定野外生态资料；不计不确定照片为确认记录 | P3-39 |

本批未新建 species dossier，七种均为 profile-only；中译普通名为编辑译名，页面尚未经过外部领域专家评审。计入本批后灵长类接受种读者页预计 223/530（54 个 dossier-backed、169 个 profile-only），307 个接受种仍无种级读者页；476 个未命中 dossier 索引的接受种仍待排查。hilleri 暂为模式与分类资料导读，缺少物种特定野外生态研究；婆罗洲四种仍需进一步对照形态分类与分子谱系。

来源：[Swapna et al. (2010)](https://doi.org/10.1002/ajp.20760)、[Arismayanti, Perwitasari & Winarti (2020)](https://doi.org/10.29244/jsdh.4.2.28-41)、[Munds, Nekaris & Ford (2013)](https://doi.org/10.1002/ajp.22071)、[Blair et al. (2023)](https://doi.org/10.3390/genes14030643)、[Timm & Birney (1992)](https://doi.org/10.1007/BF02551259) 与 [Stone & Rehn (1902)](https://www.biodiversitylibrary.org/page/10309246)。
## P3-40 八种 Presbytis 物种页与属级阅读路径（2026-09-30）

新增八个 COL26.8 接受种的双语 source-linked 页面，并为真实属级 COL ID 6VKV 增加阅读路径。跨越新加坡、马来半岛、苏门答腊、婆罗洲与爪哇的局地研究；不同研究的年份、样本、地点和论文用名分别标明，不合并为全属或全种估计。

| COL ID / 接受种 | 读者页证据 | 主要边界 | 批次 |
| --- | --- | --- | --- |
| 4MBB2 Presbytis femoralis | 柔佛单群 41 天食谱；新加坡幼体与出生观察 | 两处局地研究，不构成全种饮食或繁殖参数 | P3-40 |
| 4MBB3 P. frontata | Cantung 流域 31 个记录点、72 只观测和栖地指标 | 2021 年局地漫查，不作全种密度或范围估算 | P3-40 |
| 4MBB6 P. hosei | Kayan Mentarang 四类森林的群密度与生物量比较 | 四个月样线研究，非当前全种状态 | P3-40 |
| 4MBB9 P. melalophos | HPPB 三群普查与取食记录；较早的比较食物研究 | 小型研究林和论文发表时的分类概念 | P3-40 |
| 4MBBB P. mitrata | Merangin Geopark 河岸样区人口与植被记录 | 研究使用旧亚种组合 P. melalophos ssp. mitrata | P3-40 |
| 4MBBG P. rubicunda | Sabangau、Danum 与八处婆罗洲地点的取食和地面活动研究 | 跨地点、跨样本；受扰动林关联不作因果解释 | P3-40 |
| 788XP P. chrysomelas | Danau Sentarum 的 2021 年初步取食与林冠活动观察 | 原文针对 P. chrysomelas ssp. cruciger | P3-40 |
| 7899P P. comata | Kuningan 19 片生产林样地的密度与局地相关分析 | 非随机选点；模型解释差异有限，不外推全爪哇 | P3-40 |

八种均无 species dossier，本批只新增读者页，没有更改外部评审状态。中文普通名为编辑译名。完成本批后，COL26.8 灵长类接受种读者页为 231/530（54 个 dossier-backed、177 个 profile-only），299 种仍缺种级页面；476 种仍未命中 dossier 索引。

来源：[Najmuddin et al. (2021)](https://doi.org/10.6620/ZS.2021.60-67)、[Ang, Ismail & Meier (2010)](https://lkcnhm.nus.edu.sg/app/uploads/2017/04/58rbz411-415.pdf)、[Darmaji et al. (2023)](https://doi.org/10.20527/es.v19i3.17274)、[Nijman (2004)](https://repository.naturalis.nl/pub/534367)、[Fitri, Rizaldi & Novarino (2014)](https://jbioua.fmipa.unand.ac.id/index.php/jbioua/article/view/34)、[Paiman et al. (2018)](https://doi.org/10.29244/medkon.23.1.92-98)、[Ehlers Smith et al. (2013)](https://doi.org/10.1002/ajp.22148)、[Ehlers Smith, Ehlers Smith & Cheyne (2013)](https://doi.org/10.1007/s10764-013-9715-7)、[Ehlers Smith et al. (2018)](https://doi.org/10.1007/s10329-018-0676-5)、[Santoso et al. (2023)](https://doi.org/10.11598/btb.2023.30.2.1850) and [Supartono et al. (2020)](https://static1.1.sqspcdn.com/static/f/1200343/28367909/1604697875233/PC34_Supartono_et_al_Presbytis_comata_W_Java.pdf).
## P3-41 八种 Cercopithecus 物种页与属级阅读路径（2026-09-30）

- 新增八个 COL26.8 接受种页面及属级阅读路径（属 ID 3L2F）。八种均为 profile-only，无新建 dossier；种级正文限于文献的地点、样本、年代和方法。

| COL26.8 ID 与物种 | 本页证据主题 | 范围限制 |
|---|---|---|
| 5XKCR *Cercopithecus lowei* | Duasidan 保护区三个群体的季节性取食及人为食物 | 2017 年、约 1.8 公顷地点、312 小时观察 |
| 69KD3 *C. roloway* | Bia 国家公园 1976—1977 年取食记录 | 原文使用历史组合名 *C. diana roloway*；不作当前分布外推 |
| STDV *C. campbelli* | Taï 森林三种长尾猴的食物与冠层比较 | 每种两个群体、13 个月的局地研究 |
| 5XKBR *C. cephus* | Lopé 保护区一个 9 公顷林斑的常驻群 | 一个群体与 17 个月观察，不是种群调查 |
| 69KBG *C. erythrotis* | 比奥科岛三个区域的猎捕强度与丰度漫查 | 相对耐受性仅指研究内比较，不代表当前保护等级 |
| STF9 *C. lomamiensis* | Lomami 的三轮地面相机调查 | 598 次独立事件不是个体数或密度估计 |
| STFF *C. mitis* | Kakamega 成年雌性营养生态与食谱 | 24 只雌性、三个群体、九个月 |
| STDP *C. ascanius* | Kibale 相邻群体的饮食差异与杂交比较 | 原文使用亚种名 *C. a. schmidti*；结果不外推 |

- 英文普通名参照本地固定 MDD 交叉表；中文普通名为编辑译名。没有新增 dossier 或外部专家评审。完成本批后，530 个接受种中有 239 个种级读者页（54 个 dossier-backed、185 个 profile-only），291 种仍无种级页面；476 种仍未命中 dossier 索引。

- Sources: [Bempah et al. (2021)](https://doi.org/10.3390/d13120610), [Curtin (2004)](https://doi.org/10.1007/0-306-48417-X_23), [Buzzard (2006)](https://doi.org/10.1007/s10764-006-9022-7), [Tutin (1999)](https://doi.org/10.1007/BF02557714), [Cronin et al. (2016)](https://doi.org/10.1016/j.biocon.2016.03.001), [Fournier et al. (2023)](https://doi.org/10.3390/ani13111819), [Takahashi et al. (2019)](https://doi.org/10.1002/ajp.23016), and [Struhsaker (2017)](https://doi.org/10.1007/s10764-017-9988-3).


## P3-42 十种 Cercopithecus 物种页与属级阅读路径（2026-09-30）

新增十个 COL26.8 接受种的双语 source-linked 页面，并扩展属 ID 3L2F 的阅读路径。内容来自不同的局地野外调查、行为实验、取食比较和栖地模型；保留各研究年代、样本及方法，不合成为全属画像。

| COL ID / 接受种 | 本页证据主题 | 主要边界 | 批次 |
| --- | --- | --- | --- |
| 5XKBG *Cercopithecus erythrogaster* | 贝宁南部四片林地 22 个记录点及适宜生境模型 | 研究对象为亚种；模型预测不等于确认出现或完整分布 | P3-42 |
| 69KC4 *C. denti* | Nyungwe 的林斑取食和垂直活动观察 | Cyamudongo 一处林斑、2017 年三个月 | P3-42 |
| 69KCP *C. hamlyni* | Nyungwe 竹林与混合林样线、群体最小计数 | 难检出、地栖，样线会漏检或低估群体 | P3-42 |
| STFG *C. mona* | Okomu 旱雨季植物食物和园外取食记录 | 37 日观察；未可靠测得群体组成或密度 | P3-42 |
| STFK *C. neglectus* | Kafa 两森林六群的活动扫描和食物植物 | 2022–2023 年局地样本，不外推全分布区 | P3-42 |
| STFM *C. nictitans* | Nouabalé-Ndoki 豹模型与群体警戒叫声实验 | 模拟威胁反应，不是自然攻击频率 | P3-42 |
| STFT *C. petaurista* | Taï 森林三种 guenon 的食物与树冠层比较 | 每种两群、单一森林的 13 个月研究 | P3-42 |
| STFZ *C. pogonias* | Makokou、Lopé 与 Makandé 食谱比较 | 不同地点与研究的汇总比例，不是统一样本 | P3-42 |
| STGF *C. sclateri* | 尼日尔河三角洲占域方法与观察者检出差异 | 58 个样地、125 次调查；种群推断受少量检出限制 | P3-42 |
| STGT *C. wolfi* | Lomako 多物种普查及 Lomami 一次地面相机检出 | 仅支持局地札记；物种专属生态与分布证据仍不足 | P3-42 |

十种均没有 species dossier；新增页为 profile-only，未改变外部专家评审状态。英文普通名采用固定 MDD 交叉表备选；中文普通名为编辑译名。加入本批后，固定分母中的物种页为 249/530（54 个 dossier-backed、195 个 profile-only），281 种仍无页面；476 种仍未命中 dossier 索引。*C. wolfi* 的页只汇总有限局地记录，物种专属生态仍属资料不足项，不按综合介绍计完成。

来源：[Zoffoun et al. (2022)](https://doi.org/10.6620/ZS.2022.61-47), [Clark & Kaplin (2023)](https://doi.org/10.1111/aje.13228), [Easton et al. (2011)](https://doi.org/10.1017/S0030605310001468), [Olaleru et al. (2020)](https://static1.1.sqspcdn.com/static/f/1200343/28390380/1609952265813/AP%2BVol%2B14%2B-%2BOlaleru%2Bet%2Bal.pdf), [Haile et al. (2026)](https://doi.org/10.1007/s00114-026-02115-1), [Mehon & Stephan (2021)](https://doi.org/10.1098/rsos.202135), [Buzzard (2006)](https://doi.org/10.1007/s10764-006-9022-7), [Chapman et al. (2004)](https://doi.org/10.1007/0-306-48417-X_22), [Tutin et al. (1997)](https://pubmed.ncbi.nlm.nih.gov/9108968/), [Baker et al. (2011)](https://doi.org/10.1007/s10144-011-0274-5), [McGraw (1994)](https://doi.org/10.1002/ajp.1350340402) 和 [Fournier et al. (2023)](https://doi.org/10.3390/ani13111819)。

## P3-43 八种 Piliocolobus 物种页与属级阅读路径（2026-09-30）

新增八个 COL26.8 接受种的双语 source-linked 页面，并为真实属级 COL ID 6QFS 增加阅读路径。研究跨越科特迪瓦、刚果共和国、尼日利亚、坦桑尼亚、比奥科岛、肯尼亚与乌干达；不同研究的样本、年代和分类用名分别标明。

| COL ID / 接受种 | 本页证据主题 | 主要边界 | 批次 |
| --- | --- | --- | --- |
| 4HTQH *Piliocolobus badius* | Taï 国家公园已习惯化群体取食研究，取样期约 75% 为叶片 | 论文使用 Western red colobus；该比例不是全种食谱 | P3-43 |
| 4HTQK *P. bouvieri* | Lesio-Louna 偏远河段的一次 2016 年单群记录 | 不构成种群估计或当前范围 | P3-43 |
| 4HTQL *P. epieni* | 2013—2014 年尼日尔三角洲调查与森林覆盖分析 | “数百只”等为当时研究估计，不是当前普查 | P3-43 |
| 4HTQN *P. gordonorum* | 乌曾古瓦四片森林 25 群、251 份粪便样本的寄生虫研究 | 检出结果受取样与实验方法限制 | P3-43 |
| 4HTQQ *P. kirkii* | Unguja 4,725 小时系统调查及群体、占域估计 | 数量仅指 2017—2018 年调查结果 | P3-43 |
| 4HTQV *P. pennantii* | 比奥科岛保护区三个区域的丰度与枪猎漫查 | 论文采用 Procolobus pennantii，结论限于比奥科调查 | P3-43 |
| 4HTQX *P. rufomitratus* | 塔纳河森林碎片占域、局地密度与生境变量 | 历史地点级相关，不表示因果或当前全域状态 | P3-43 |
| 4HTR3 *P. tephrosceles* | Kibale 周边六处、三年食谱与密度比较 | 局地密度跨度不代表全种密度 | P3-43 |

八种均没有 species dossier；本批只新增 profile-only 页面，没有改变外部专家评审状态。英文普通名参考固定交叉表，中文普通名为编辑译名。完成本批后，灵长类接受种读者页为 257/530（54 个 dossier-backed、203 个 profile-only），273 个接受种仍无种级读者页；476 个仍未命中 dossier 索引。属级阅读路径只覆盖选定研究，不是完整属级综述。

来源：[McGraw et al. (2016)](https://doi.org/10.1016/j.jhevol.2015.06.001)、[Ndzai, Malonga & Maisels (2019)](https://www.storre.stir.ac.uk/bitstream/1893/35968/1/Ndzai_et_al_2019%20Bouviers_red_colobus_in_the_Congo.pdf)、[Ikemeh (2015)](https://doi.org/10.1896/052.029.0104)、[Barelli et al. (2019)](https://doi.org/10.1371/journal.pone.0225142)、[Davenport et al. (2019)](https://doi.org/10.1017/S003060531700148X)、[Cronin et al. (2016)](https://doi.org/10.1016/j.biocon.2016.03.001)、[Tana River forest-fragment study (2004)](https://doi.org/10.1016/j.biocon.2003.07.009) 与 [Chapman & Chapman (1999)](https://doi.org/10.1007/BF02557712)。

## P3-44 八种 Eulemur 物种页与属级阅读路径（2026-09-30）

新增八个 COL26.8 接受种的双语 source-linked 页面，并为真实属级 COL ID 4FSW 增加阅读路径。研究横跨马达加斯加东南沿海林地、西北干燥林、北部石灰岩林和中部雨林；取食、密度、视觉和活动节律等不同证据类型分别标明。

| COL ID / 接受种 | 本页证据主题 | 主要边界 | 批次 |
| --- | --- | --- | --- |
| 6GXMJ *Eulemur collaris* | Sainte Luce 与 Mandena 沿海林片的群体和取食比较 | 研究点及观察期局限，不作全种食谱或数量估计 | P3-44 |
| 6GXMK *E. flavifrons* | Ankarafa 2007—2008 年标记个体总计数 | 228 只、29 群来自部分林区，不是当前全种计数 | P3-44 |
| 6GXNY *E. macaco* | Ambato Massif 15 个月昼夜活动观察 | 论文使用亚种名，夜间活动为间接推断 | P3-44 |
| 6GXNZ *E. rubriventer* | Ranomafana 两群果实取食、移动与种子传播 | 2018 年三个月样本和模型 | P3-44 |
| 6H9MJ *E. coronatus* | Ankarana 三种森林的旱季密度样线 | 2012 年初步局地估计，历史对照地点不同 | P3-44 |
| 6H9NW *E. sanfordi* | 与冠狐猴共域的 Ankarana 群体与密度比较 | 研究称为早期局地估计，不外推当前总量 | P3-44 |
| 6H9MM *E. cinereiceps* | Manombo 森林 54 种植物的取食记录 | 论文括注旧名 E. albocollaris，结果限于一处森林 | P3-44 |
| 6H9MK *E. fulvus* | Ankarafantsika 三群视觉生态及果实可视度模型 | 行为样本为三群，模型不等于直接知觉测试 | P3-44 |

八种均没有 species dossier；本批只新增 profile-only 页面，没有改变外部专家评审状态。英文普通名参考固定 MDD 交叉表，中文普通名为编辑译名。完成本批后，灵长类接受种读者页为 265/530（54 个 dossier-backed、211 个 profile-only），265 个接受种仍无种级读者页；476 个仍未命中 dossier 索引。属级阅读路径只串联选定研究，不是完整属级综述。

来源：[Donati et al. (2011)](https://doi.org/10.1371/journal.pone.0019807)、[Volampeno, Masters & Downs (2011)](https://doi.org/10.1159/000322231)、[Colquhoun (1998)](https://doi.org/10.1159/000052696)、[Tonos et al. (2025)](https://doi.org/10.1111/1365-2435.14702)、[Gudiel et al. (2017)](https://aeecl.org/wp-content/uploads/2020/03/lemurnews2017_20.pdf)、[Ralainasolo, Ratsimbazafy & Stevens (2008)](https://doi.org/10.4314/mcd.v3i1.44134) 与 [Valenta et al. (2016)](https://doi.org/10.1111/1365-2435.12575)。

## P3-45 八种 Propithecus 物种页与属级阅读路径（2026-09-30）

新增八个 COL26.8 接受种的双语 source-linked 页面，并为真实属级 COL ID 6WXL 增加阅读路径。页面以局地调查、取食、睡眠地点、空间利用和肠道微生物组研究为入口；仅总结引用研究支持的内容。

| COL ID / 接受种 | 本页证据主题 | 主要边界 | 批次 |
| --- | --- | --- | --- |
| 6VXQ9 *Propithecus perrieri* | Analabe 与 Ankavana 的样线及数量估算 | 2003—2004 年样线结果与 2007 年模型估算，不表示当前数量 | P3-45 |
| 6W9PY *P. deckenii* | Tsimembo-Manambolomaty 与 Mandrozo 八群领地观察 | 2017—2018 年两个保护区的小样本，不外推全分布区 | P3-45 |
| 6W9Q9 *P. tattersalli* | Daraina 96 个体旱季粪便 DNA 条形码 | 植物检出不是摄入生物量或全年食谱 | P3-45 |
| 77XPY *P. diadema* | Tsinjoarivo 连续林与林斑四群取食比较 | 一处地点、四群、一年观察 | P3-45 |
| 77Y49 *P. candidus* | Marojejy 一个群体的睡眠树选择 | 单群十个月，功能解释仍限于该研究 | P3-45 |
| 789PY *P. edwardsi* | Ranomafana 受伐与未伐雨林群体的空间利用 | 七群、一年观察，不推断长期伐木效应 | P3-45 |
| 789RX *P. coquereli* | 野外与圈养群体的肠道微生物组比较 | 不是野外食谱调查，不能单独确定差异原因 | P3-45 |
| 789S9 *P. coronatus* | 西北部 19 处周边林斑、廊道调查及六处样线 | 2009—2010 年选定地点结果，不是当前全域总量 | P3-45 |

八种均没有 species dossier；本批只新增 profile-only 页面，没有改变外部专家评审状态。英文普通名参考固定 MDD 交叉表，中文普通名为编辑译名。完成本批后，灵长类接受种读者页为 273/530（54 个 dossier-backed、219 个 profile-only），257 个接受种仍无种级读者页；476 个仍未命中 dossier 索引。各页均为研究导读，不代表完整自然史或现状评估。

来源：[Banks, Ellis & Wright (2007)](https://doi.org/10.1111/j.1469-1795.2007.00102.x)、[Josoa et al. (2023)](https://ijpsat.org/index.php/ijpsat/article/view/5477)、[Quéméré et al. (2013)](https://doi.org/10.1371/journal.pone.0058971)、[Irwin (2008)](https://doi.org/10.1007/s10764-007-9222-9)、[Mills et al. (2021)](https://doi.org/10.1159/000520710)、[Gerber et al. (2012)](https://doi.org/10.1007/s10764-011-9576-x)、[Greene et al. (2021)](https://doi.org/10.1186/s42523-021-00093-5) 与 [Salmona et al. (2014)](https://doi.org/10.1896/052.028.0122)。
聚焦校验通过：目录档案测试（2/2）、registry 漂移检查与验证、packages、claims、translations、provenance、review 和 16 分片物种证据队列检查。
增量验证从 f5134486f3c53e929ce92fd7dbe4d2a9a69e8e32 到 c4ecc000c23e572eb895e43543d027032998bb77 通过：8 个数据文件变化，3 个解析，6 个大型 JSONL 仅校验哈希，共 29,598,323 字节。


## P3-46 七种 Hylobates 物种页与属级阅读路径（2026-09-30）

新增七个 COL26.8 接受种的双语 source-linked 页面，并为真实属级 COL ID 5237 增加阅读路径。页面围绕调查方法、当地数量估算与发声行为组织；每项结论限于来源中的地点、年代和方法。

| COL ID / 接受种 | 本页证据主题 | 主要边界 | 批次 |
| --- | --- | --- | --- |
| 3NFRG *Hylobates abbotti* | Gunung Niut 当地意见汇集的密度估算 | 2019 年十个样区、约占保护区 18%；非直接普查 | P3-46 |
| 3NFRJ *H. albibarbis* | Sabangau 声学调查与六个习惯化群体行为观察 | 2005 年调查；鸣叫有季节变化，单次声学采样有边界 | P3-46 |
| 3NFRM *H. funereus* | Danum Valley 日常活动、移动与睡眠记录 | 单一保护区研究，不外推全婆罗洲 | P3-46 |
| 3NFRR *H. klossii* | Siberut 13 个已知家庭群的歌唱与对唱 | 功能解释属于研究者对该群体的分析 | P3-46 |
| 3NFRV *H. muelleri* | 雄性歌声播放位置与群体响应 | 单项地点实验，不是全部发声行为的普遍规则 | P3-46 |
| 3NFRW *H. pileatus* | 泰国东南部保护区的听声与访谈调查 | 2004—2005 年历史估算，不是当前或全域数量 | P3-46 |
| 6MNYP *H. moloch* | Dieng 山区声学密度调查与栖地模型外推 | 2018、2021 年现场数据形成的局地模型估算 | P3-46 |

七种均没有 species dossier；本批新增 profile-only 页面，没有改变外部专家评审状态。英文普通名参照本地固定 MDD 交叉表，中文普通名为编辑译名。完成本批后，灵长类接受种读者页为 280/530（54 个 dossier-backed、226 个 profile-only），250 个接受种仍无种级读者页；476 个仍未命中 dossier 索引。属级路径串联所选研究，不是完整属级综述。

来源：[Ahmad et al. (2021)](https://doi.org/10.2981/wlb.00771)、[Cheyne et al. (2008)](https://doi.org/10.1007/s10329-007-0063-0)、[Inoue, Sinun & Okanoya (2016)](https://doi.org/10.5281/zenodo.5355040)、[Tenaza (1976)](https://doi.org/10.1111/j.1439-0310.1976.tb00924.x)、[Mitani (1985)](https://doi.org/10.1111/j.1439-0310.1985.tb00513.x)、[Phoonjampa & Brockelman (2008)](https://doi.org/10.1017/S0030605308000306) 与 [Widyastuti et al. (2023)](https://doi.org/10.3897/BDJ.11.e100805)。

聚焦校验通过：目录档案测试（2/2）、registry 漂移检查与验证、packages、claims、translations、provenance、review 和 16 分片物种证据队列检查。
增量验证从 17e2a2df3a9068c4e2115311d6229fbe77986044 到 8c62187b2f18cfb145c684326e7dadf85cf40bce 通过：7 个数据文件变化，3 个解析，5 个大型 JSONL 仅校验哈希，共 24,992,818 字节。


## P3-47 八种 Tarsius 物种页与属级阅读路径（2026-09-30）

新增八个 COL26.8 接受种的双语 source-linked 页面，并为真实属级 COL ID 7SV5 增加阅读路径。内容串联高地单群体观察、土地利用梯度研究、形态与鸣声分类证据，以及岛屿和苏拉威西北部的局地调查。

| COL ID / 接受种 | 本页证据主题 | 主要边界 | 批次 |
| --- | --- | --- | --- |
| 54XZ7 *Tarsius dentatus* | Lore Lindu 四个土地利用样区的密度、活动范围和移动比较 | 原论文使用 T. dianae；仅为四个样区的历史结果 | P3-47 |
| 54XZB *T. lariang* | Gimpu 附近标本、形态比较、二重唱和村落记录 | 八件标本；外围分布界限仍待确认 | P3-47 |
| 54XZD *T. pumilus* | Rore Katimbu 高地单群体的行为与形态探索 | 两个月、至少四只一群、仅捕获三只；初步研究 | P3-47 |
| 54XZG *T. spectrumgurskyae* | Manado 形态群分类及 Tangkoko 二重唱个体辨识 | 分类器准确率来自 2018 年局地录音，不代表全种 | P3-47 |
| 54XZH *T. supriatnai* | Gorontalo 形态群分类与 Popayato-Paguat 巢树和地点忠实度 | 巢树与忠实度数据仅来自一处景观 | P3-47 |
| 54XZL *T. tumpara* | Siau 岛标本、尾簇、毛色、头骨和晨间二重唱 | 一件正模与一件旧馆藏头骨；描述无该种遗传数据 | P3-47 |
| 54XZM *T. wallacei* | 两个采样种群的遗传、形态、鸣声与不连续分布 | 南方种群仅在模式产地确认；范围限于当时调查 | P3-47 |
| 84J4W *T. niemitzi* | Togean 正模、二重唱与 12S 系统树 | 仅一件标本；岛屿分布不是逐岛普查 | P3-47 |

八种均没有 species dossier；本批新增 profile-only 页面，没有改变外部专家评审状态。英文普通名参照本地固定 MDD 交叉表，中文普通名为编辑译名。完成本批后，灵长类接受种读者页为 288/530（54 个 dossier-backed、234 个 profile-only），242 个接受种仍无种级读者页；476 个仍未命中 dossier 索引。Tarsius 属级路径串联选定证据，不是完整属级综述。

来源：[Merker, Yustian & Mühlenberg (2005)](https://doi.org/10.1017/S0030605305000438)、[Merker et al. (2009)](https://doi.org/10.1073/pnas.0900319106)、[Merker & Groves (2006)](https://doi.org/10.1007/s10764-006-9038-z)、[Grow & Gursky-Doyen (2010)](https://doi.org/10.1007/s10764-010-9456-9)、[Shekelle et al. (2017)](https://www.primate-sg.org/storage/pdf/PC31_Shekelle_et_al_Two_new_tarsiers.pdf)、[Clink et al. (2020)](https://doi.org/10.1093/cz/zoz035)、[Zakaria et al. (2022)](https://doi.org/10.13057/biodiv/d230762)、[Shekelle et al. (2008)](https://doi.org/10.1896/052.023.0106)、[Merker et al. (2010)](https://doi.org/10.1007/s10764-010-9452-0) 与 [Shekelle et al. (2019)](https://tahtamedia.co.id/index.php/issj/article/download/1200/1196/4407)。


## P3-48 十种 Trachypithecus 物种页与属级阅读路径补充（2026-09-30）

新增十个 COL26.8 接受种的双语 source-linked 页面，并扩展真实属级 COL ID 7YDX 的阅读路径。内容覆盖银叶猴群线粒体分类、动物园标本与历史地点、林层使用、*T. phayrei* 地理谱系、*T. popa* 模式标本描述，以及阿萨姆林斑占域调查。

| COL ID / 接受种 | 本页证据主题 | 主要边界 | 批次 |
| --- | --- | --- | --- |
| 57SD5 *Trachypithecus auratus* | 115 只银叶猴的细胞色素 b 研究中所属的一个谱系 | 573 bp 线粒体片段；分化时间为五谱系层级估计 | P3-48 |
| 57SD6 *T. barbei* | 动物园标本形态、有限分子证据及历史地点汇编 | 单个动物园标本，不是现今野外种群调查 | P3-48 |
| 57SD7 *T. crepusculus* | 无量山一个群体的林层使用与地面活动 | 单地、单群观察，不外推全种 | P3-48 |
| 57SDD *T. germaini* | 银叶猴群五个单系谱系之一 | 573 bp 线粒体片段；谱系间次序未解析 | P3-48 |
| 57SDJ *T. margarita* | 银叶猴群五个单系谱系之一 | 有限来源地和单一线粒体标记 | P3-48 |
| 57SDK *T. mauritius* | 银叶猴群谱系及作者提出的群体起源情景 | 群体层级假说不是本种直接迁徙记录 | P3-48 |
| 57SDM *T. phayrei* | 41 个线粒体基因组中识别的三处地理谱系 | 中央边界与部分样点仍不确定；分类提案独立于 COL 身份 | P3-48 |
| 57SDN *T. pileatus* | 上布拉马普特拉河谷 40 片林斑调查，11 片记录到该种 | 2019–2020 年区域占域调查，不是全种数量普查 | P3-48 |
| 57SDQ *T. selangorensis* | 马来半岛样本与岛屿样本的线粒体分支比较 | 2008 年论文用亚种等级；页面身份遵循 COL26.8 接受种 | P3-48 |
| 84HXM *T. popa* | 1913 年波帕山正模、馆藏比较和正式描述 | 东北分布边界未定；文中数量不是当前普查 | P3-48 |

十种均无 species dossier；本批新增 profile-only 页面，没有改变外部领域专家评审状态。英文普通名参照本地 MDD 交叉表，中文普通名为编辑译名。固定灵长类页数为 298/530（54 个 dossier-backed、244 个 profile-only）；232 个接受种仍无种级读者页，476 个仍未命中 dossier 索引。属级阅读路径串联选定地点和证据，不是完整属级综述。

本批只更新原创内容及必要的 registry/manifest 投影；根据用户指定的 content-only 工作流，没有运行测试、内容校验、数据校验、增量校验或 CI。

来源：[Roos, Nadler & Walter (2008)](https://doi.org/10.1016/j.ympev.2008.03.006)、[Geissmann, Groves & Roos (2004)](https://repository.naturalis.nl/pub/534417)、[Ma et al. (2020)](https://doi.org/10.24272/j.issn.2095-8137.2020.047)、[Roos et al. (2020)](https://doi.org/10.24272/j.issn.2095-8137.2020.254) 与 [Gogoi et al. (2025)](https://doi.org/10.1016/j.japb.2025.06.001)。


## P3-49 十一种 Presbytis 物种页与属级阅读路径补充（2026-09-30）

新增 11 个 COL26.8 接受种的双语 source-linked 页面，并扩展真实属级 COL ID 6VKV 的阅读路径。此批将短期岛屿调查、局地生态观察、长期生活史和分类分子证据按各自样本与历史名称拆开呈现；Meyer 等人的属级线粒体研究作为分类背景，不替代完整系统修订。

| COL ID / 接受种 | 本页证据主题 | 主要边界 | 批次 |
| --- | --- | --- | --- |
| 4MBBC *Presbytis natunae* | Bunguran 两个月调查中的群体与低地森林记录 | 2003 年短期调查，不是当前数量估计 | P3-49 |
| 4MBBF *P. potenziani* | 北巴盖岛 10 群体的取食、上层冠层与移动 | 仅一个岛屿的原生林研究 | P3-49 |
| 4MBBL *P. siberu* | 西伯鲁岛样本在旧组合 P. potenziani 下的栖冠和取食记录 | 旧分类标签的地点映射，不当作现代全种估计 | P3-49 |
| 4MBBJ *P. sabana* | 北婆罗洲研究中的响亮叫声差异与分类讨论 | 研究主要聚焦 P. hosei | P3-49 |
| 4MBBK *P. siamensis* | Bintan rhionis 四天调查及另外一份苏门答腊 cf. cana 粪样 | 地点、分类单位和数据类型不可合并 | P3-49 |
| 4MBBM *P. sumatrana* | Martabe 邻近林地的家域重叠与冠层使用 | 一项 2024 年学士论文的局地结果 | P3-49 |
| 4MBBP *P. thomasi* | 12.5 年生活史记录和稳定群体阶段比较 | 特定野外研究期和社会阶段 | P3-49 |
| 6W99P *P. bicolor* | Indragiri 与 Batanghari 之间的记录、橡胶林取食 | 2016—2022 年地点与观察汇编 | P3-49 |
| 77WXP *P. canicrus* | Wehea 两处矿物泉的观察与相机记录 | 2012 论文使用旧组合 P. hosei canicrus | P3-49 |
| 84HVS *P. robinsoni* | 既有线粒体序列的分类比较 | 研究仅有一条公开序列，不是新种群采样 | P3-49 |
| 84JLJ *P. percura* | 东苏门答腊粪样的首批线粒体基因组 | 少量母系标记；旧文献使用亚种组合 | P3-49 |

本批 11 种均没有 species dossier，新增页面为 profile-only，没有改变外部领域专家评审状态。英文普通名使用本地 MDD v2.5 交叉表，中文普通名为编辑译名。固定灵长类读者页为 309/530（54 个 dossier-backed、255 个 profile-only）；221 个接受种仍无种级读者页，476 个仍未命中 dossier 索引。属级阅读路径串联选定证据，不是完整属级名录。

根据用户指定的 content-only 工作流，本批未运行测试、内容校验、数据校验、增量校验或 CI；只为接入读者页面刷新 registry 与 manifest 投影。

来源：[Lammertink, Nijman & Setiorini (2003)](https://doi.org/10.1017/S003060530300084X)、[Fuentes (1996)](https://doi.org/10.1007/BF02735190)、[Hadi et al. (2012)](https://doi.org/10.1007/s10764-011-9567-y)、[Iqbal et al. (2023)](https://doi.org/10.37828/em.2023.61.3) 与 [Lhota et al. (2012)](https://doi.org/10.1002/ajp.21983)。

补充来源：[Ramlee (2013)](https://doi.org/10.25911/5d5e72535cf55)、[Karuniawati et al. (2024)](https://www.wildspace.sg/_files/ugd/58532a_7c36caf7f15a4af08793282662e95ca5.pdf)、[Ang et al. (2020)](https://doi.org/10.1038/s41598-020-66007-8)、[Afif, Rianti & Tanio (2024)](https://repository.ipb.ac.id/handle/123456789/153507)、[Steenbeek & van Schaik (2001)](https://doi.org/10.1007/s002650000286)、[Wich et al. (2007)](https://doi.org/10.1002/ajp.20386) 与 [Meyer et al. (2011)](https://doi.org/10.1016/j.ympev.2011.02.015)。


## P3-50 十种 Cheirogaleus 物种页与属级导读（2026-09-30）

新增 10 个 COL26.8 接受种的双语 source-linked 页面，并新增真实属级 COL ID 3MKB 的导读。阅读路径先并列 2009 年多位点低物种数解释与 2014 年扩大样本后的分类方案，再读 2013—2017 年几个局地原始描述，最后比较冬眠、沿海森林监测和 Tsinjoarivo 同地生态研究。2023 年生态位研究仅对九个名录种中的三个建模，因为其余六种的出现点不足；未建模不表示未分布。

| COL ID / 接受种 | 本页证据主题 | 主要边界 / 待补项 | 批次 |
| --- | --- | --- | --- |
| 5XRNC *Cheirogaleus thomasi* | Sainte Luce 三个林片 2011—2018 年月度长期监测 | 只适用于受监测林片和年份，不外推为当前全种估计 | P3-50 |
| 5XRNW *C. crossleyi* | Tsinjoarivo 与西布里侏狐猴的同地活动与取食比较 | 13 只个体、一个高海拔片段、2011—2014 年 | P3-50 |
| 5XRNX *C. medius* | 树洞隔热与冬眠体温；并列不同属级种界解释 | 单项生理研究不代表全属；种界方案存在分歧 | P3-50 |
| 5Y3NR *C. andysabini* | Montagne d'Ambre 原始遗传和形态描述 | 2005 年调查与 2015 年补充样本，不视为北部普查 | P3-50 |
| 5Y3NW *C. lavasoensis* | 南部九处地点、51 只侏狐猴的多位点比较 | 51 是属级研究样本数，不是该种样本数 | P3-50 |
| 5Y3NY *C. minusculus* | Ambositra 一件幼体正模及有限分类史 | 缺野外生态资料；不计满足首轮正文标准 | P3-50 |
| 5Y3NZ *C. shethi* | 北部原始描述和 2017 年十处调查记录 | 新记录扩展已知地点，不代表完整连续范围 | P3-50 |
| 69RNW *C. major* | Mandena 25 公顷样区两个雨季的家庭群与储脂观察 | 局地小样本；冬眠起止仍未确定 | P3-50 |
| 69RNZ *C. sibreei* | Tsinjoarivo 同地比较中的夜间移动与空间使用 | 11 只个体、单一片段；完整样本家域差异不显著 | P3-50 |
| 84JK2 *C. grovesi* | Ranomafana 与 Andringitra 材料的遗传和形态描述 | 两处采样地不等于完整现今分布 | P3-50 |

本批 10 种均没有 species dossier，新增物种页均为 profile-only；属级导读另计，不进入 530 个种级分母。固定名录读者页记录为 319/530（54 个 dossier-backed、265 个 profile-only）；211 个接受种仍无种级读者页，476 个仍未命中 dossier 索引。*C. minusculus* 的材料只支持一页有限的命名与证据史，不计为满足首轮正文标准。英文普通名参照 MDD v2.5，中文名为编辑译名；本批没有外部领域专家评审。

根据用户指定的 content-only 工作流，本批不运行测试、内容校验、数据校验、增量校验或 CI；只为接入读者页面刷新 registry 与 manifest 投影。

来源：[Groeneveld et al. (2009)](https://doi.org/10.1186/1471-2148-9-30)、[Groeneveld et al. (2010)](https://doi.org/10.1016/j.ympev.2010.03.004)、[Lei et al. (2014)](https://doi.org/10.1896/052.028.0110)、[Thiele, Razafimahatratra & Hapke (2013)](https://doi.org/10.1016/j.ympev.2013.07.019)、[Lei et al. (2015)](https://doi.org/10.1896/052.029.0103)、[Frasier et al. (2016)](https://protectedareas.mg/document/show/166999)、[McLain et al. (2017)](https://protectedareas.mg/content/documents/b3bc5504-b040-4403-9d10-614202765df9/e33d839c92f54075b7a0343e11aa7339.pdf)。

补充来源：[Dausmann et al. (2004)](https://doi.org/10.1038/429825a)、[Lahann (2007)](https://doi.org/10.1007/s10764-007-9163-3)、[Hyde Roberts et al. (2021)](https://doi.org/10.1007/s10764-021-00243-1)、[Hending et al. (2017)](https://doi.org/10.1159/000481531)、[Hending et al. (2023)](https://doi.org/10.1007/s10764-023-00363-w)、[Blanco et al. (2026)](https://doi.org/10.1163/14219980-bja10076) 与 [Natural History Museum specimen 1911.6.21.1](https://data.nhm.ac.uk/object/a49705d9-ee39-4373-8c8d-18065719ea4c)。


## P3-51 九种 Avahi 物种页与属级阅读导读（2026-09-30）

| COL26.8 ID / taxon | 内容重点 | 证据边界 | 批次 |
|---|---|---|---|
| 5VZ73 Avahi peyrierasi | 2006 年东部毛狐猴比较与 Ranomafana 附近 Mahasoarivo 模式系列；后续论文记录两个线粒体类型 | 采集和分类材料不等于现代分布调查；类型标签不是额外接受种 | P3-51 |
| K29N A. betsileo | Bemosary 森林三只成年个体的 2007 年描述 | 单一森林样本；作者称区域界限仍属暂定 | P3-51 |
| K29P A. cleesei | 1991 年正模及 Bemaraha 的局地鸣声观察 | 历史观察不代表当前占域 | P3-51 |
| K29Q A. laniger | 一只雄兽的早期跟踪研究；2026 年 18 片未保护森林调查 | 单兽行为观察与区域性样线调查不可外推成全种结论 | P3-51 |
| K29R A. meridionalis | Sainte Luce、Andohahela 相关分类材料及后续种级处理 | 与邻近谱系的边界在原研究中仍待进一步研究 | P3-51 |
| K29S A. mooreorum | Masoala 原始分类材料及半岛四类森林的局地距离抽样 | 33 公里重复样线所得密度估计不是全种数量 | P3-51 |
| K29T A. occidentalis | 西部地理、毛色和博物馆材料比较 | 不确定边界保留为研究史，不代表当前占域地图 | P3-51 |
| K29V A. ramanantsoavani | Manombo 模式系列及 2006 亚种、2007 提升为种的分类历程 | 沿用 COL26.8 拼写和等级，不外推完整分布 | P3-51 |
| K29W A. unicolor | Ampasindava 区域材料的原始描述及后续序列比较 | 序列片段和地点有限；部分亲缘推断不一致 | P3-51 |

本批为九种增加来源链接的双语种级页面，并在 COL26.8 属 ID 36NJ 下新增毛狐猴属阅读导读。固定灵长类名录页面记录为 328/530（54 个 dossier-backed、274 个 profile-only）；202 个接受种仍无种级页面，476 个仍未命中 dossier 索引。所有新增种页均为 profile-only，没有新增 dossier 或外部领域专家评审；MDD v2.5 支持英文普通名，中文普通名为编辑译名。

内容分别限于 2006 年东部样本比较、2007 年属级修订、2008 年马苏阿拉描述、西部毛色材料、一只雄兽的行为跟踪，以及局地距离抽样和鸣声记录。旧分类处理与 COL26.8 当前接受等级并列说明；没有把历史分布或局地密度写成当前全种结论。纯内容变更不运行测试、内容/数据/增量校验或 CI；只刷新读者运行时投影与数据清单。

来源：[Zaramody et al. (2006)](https://www.dpz.eu/fileadmin/user_upload/Bibliothek/Primate_Report/PDF/Primate_Report_74__2006_.pdf)、[Andriantompohavana et al. (2007)](https://www.depts.ttu.edu/nsrl/publications/downloads/SP51.pdf)、[Lei et al. (2008)](https://www.depts.ttu.edu/nsrl/publications/downloads/SP53.pdf)、[Thalmann & Geissmann (2000)](https://doi.org/10.1023/A:1005507028567)、[Thalmann & Geissmann (2005)](https://doi.org/10.1002/ajp.20191)、[Thalmann & Geissmann (2006)](https://static1.1.sqspcdn.com/static/f/1200343/18197739/1337026101357/PC21.cleesei.pdf)、[Harcourt (1991)](https://doi.org/10.1111/j.1469-7998.1991.tb04395.x)、[Rendigs et al. (2016)](https://doi.org/10.1007/s10329-016-0552-0)、[Schüßler et al. (2026)](https://doi.org/10.1163/14219980-bja10087)。


## P3-52 八种 Pithecia 物种页与属级阅读路径扩展（2026-09-30）

| COL26.8 ID / taxon | 内容重点 | 证据边界 / 分类差异 | 批次 |
|---|---|---|---|
| 4JBGS *Pithecia aequatorialis* | 2014 年博物馆样本与 2023 年厄瓜多尔七条记录 | 七条记录来自 Pastaza 的标本与照片；边界仍待实地确认 | P3-52 |
| 4JBH3 *P. inusta* | Marsh（2014）与 2024 年对 Spix 原始法文描述的重读 | COL/MDD 保留接受名；2024 文质疑 Ucayali/上 Juruá 种群归属并提出异名处理 | P3-52 |
| 4JBH5 *P. isabela* | 新种原始描述、Santa Elena 正模及 Río Samiria 副模地点 | 模式系列只解释名称依据，不代表完整现今分布 | P3-52 |
| 4JBH7 *P. milleri* | 哥伦比亚西部亚马孙的 77 条馆藏与观察记录 | 2007—2015 年不同来源记录；Caguán—Yarí 和接触区仍待调查 | P3-52 |
| 4JBHB *P. napensis* | Río Curaray 610 公里样线中的 16 次局地目击 | 2012 年四地点；只在河流北岸观察到，不是全种估计 | P3-52 |
| 4JBHJ *P. rylandsi* | 2017 年马托格罗索三次观察与 2019 年博物馆毛色比较 | COL 接受、当前 MDD 归作 *P. irrorata* 异名；并列保留 | P3-52 |
| 4JBHL *P. vanzolinii* | 2014 年提升种级与 2019 年 54 张皮张的比较 | 群体来自九个馆藏；不等同野外遗传隔离实验 | P3-52 |
| 77LPB *P. pissinattii* | 2014 年新种正模与 2019 年种组修订 | COL 接受、当前 MDD 归作 *P. irrorata* 异名；并列保留 | P3-52 |

本批新增八个 profile-only 物种页，并扩展 COL 属级 ID 6QYQ 的既有阅读导读。固定灵长类名录读者页记录为 336/530（54 个 dossier-backed、282 个 profile-only）；194 个接受种仍无种级读者页，476 个仍未命中 dossier 索引。未新增 dossier 或外部领域专家评审。英语普通名采用 MDD 页面名称；中文普通名为编辑译名。

Pithecia 的分类处理在来源之间不一致：2019 年毛色比较把 *P. rylandsi*、*P. pissinattii* 与 *P. mittermeieri* 归并至 *P. irrorata*；COL26.8 仍保留本批前两者为接受种，而当前 MDD 页面列作异名。2024 年对 *P. inusta* 模式地点的重读又提出不同种群归属。本批只并列记录来源，不裁决分类。其他段落分别限定于模式系列、区域馆藏、短期样线或历史观察。

依照用户指定的 content-only 工作流，本批不运行测试、内容校验、数据校验、增量校验或 CI；只为读者入口刷新运行时投影与数据清单。

来源：[Marsh (2014)](https://doi.org/10.1896/044.021.0101)、[Aquino et al. (2014)](https://doi.org/10.1896/052.028.0103)、[Villalba, Páez & Palacios (2017)](https://doi.org/10.62015/np.2017.v23.116)、[Orsini, Nunes & Marsh (2017)](https://doi.org/10.15560/13.3.2123)、[Serrano-Villavicencio et al. (2019)](https://doi.org/10.1093/jmammal/gyy167)、[Tirira (2023)](https://doi.org/10.62015/np.2023.v29.782) 与 [Serrano-Villavicencio & Terra Garbino (2024)](https://doi.org/10.24841/fa.v33i1.729)。


## P3-53 九种 Piliocolobus 物种页与属级阅读路径补全（2026-09-30）

| COL26.8 ID / taxon | 内容重点 | 证据边界 / 分类差异 | 批次 |
|---|---|---|---|
| 4HTQM Piliocolobus foai | 2020 年评估与 2021 年行动计划汇总的山地谱系记录 | 评估资料仅支持其当时识别的两个孤立地点，不代表当前全域调查 | P3-53 |
| 4HTQR P. langi | 2019 年基桑加尼区域快速评估的六处记录 | 局地表型归属与边界仍有未定种群，按报告分类表达 | P3-53 |
| 4HTQS P. lulindicus | 2020 年评估保留种级与 MDD 并入 P. foai 的目录差异 | 仅有分类史证据，列为 source-insufficient，不计首轮正文达标 | P3-53 |
| 4HTQT P. oustaleti | Lac Télé 九处空地 2020—2023 年相机调查 | 83 台相机、6,399 相机日；11 个物种事件不代表保护区种群数量 | P3-53 |
| 4HTQW P. preussi | 2018—2019 年 Makombe 与 Ndokbou 漫查和声学取样 | 571.51 公里、12,347 小时；未确认目击，一次叫声为疑似 | P3-53 |
| 4HTQZ P. semlikiensis | 2020 年评估整理的 Maiko、Ituri 与 Usala 历史记录 | Ituri 河叫声的河岸归属不明；邻近类型边界有争议 | P3-53 |
| 4HTR4 P. tholloni | Botsima 一群为期 12 个月的食谱研究 | 论文使用 Colobus badius tholloni；比例限于单群单地 | P3-53 |
| 4HTR5 P. waldronae | 四种方法分析有日期的目击与馆藏记录 | 2006 年文章按亚种名推断极稀少型仍可能存在，不是现存目击 | P3-53 |
| 77KJJ P. parmentieri | Mabobi 模式地点与 Lomami 巡护队 2016—2017 年局地记录 | 资料不连续，不能据此推定连续分布或种群数量 | P3-53 |

本批新增九个 profile-only 页面，并将 COL 属级 ID 6QFS 的阅读路径扩展到固定名录中全部 17 个种级 ID。当前有 345/530 个种级页面记录（54 个 dossier-backed、291 个 profile-only）；185 个仍无种级页面记录，476 个仍未命中 dossier 索引。P. minusculus 与 P. lulindicus 页面仍属 source-insufficient，故有 343 个物种达到首轮内容标准、187 个尚未达到。未新增 dossier 或外部领域专家评审。

固定 COL26.8 ID 与其他资料表的名称处理并不完全一致：MDD v2.5 将 P. lulindicus 列为 P. foai 的相关名称，而 2020 年 IUCN 评估基于预防原则保留其种级；P. waldronae 在本地 MDD 精确名称交叉表中未匹配，而 2006 年论文按 P. badius waldronae 进行历史灭绝推断。页面保留这些差异，不裁决分类。其余段落分别限定于 2019 年快速评估、特定保护区空地相机、既往调查汇编或单群食谱观察。

依照用户指定的 content-only 工作流，本批不运行测试、内容校验、数据校验、增量校验或 CI；只为读者入口刷新运行时投影与数据清单。

来源：[Hart, Ting & Maisels (2020), P. foai](https://doi.org/10.2305/IUCN.UK.2020-1.RLTS.T18252A92659769.en)、[Hart et al. (2020), P. lulindicus](https://doi.org/10.2305/IUCN.UK.2020-1.RLTS.T18262A96192471.en)、[IUCN 红疣猴行动计划（2021—2026）](https://portals.iucn.org/library/sites/library/files/documents/2021-015-En.pdf)、[基桑加尼快速评估报告（2019）](https://www.bonoboincongo.com/wp-content/uploads/2020/03/2020-February-Kisangani-Red-Colobus-REPORT.pdf)、[Brugière et al. (2025), Lac Télé 相机调查](https://static1.1.sqspcdn.com/static/f/1200343/28694543/1752180343813/AP%2BVol%2B19%2B1%2BBrugiere%2Bet%2Bal.pdf)、[Bowers-Sword et al. (2025)](https://doi.org/10.1007/s10764-025-00527-w)、[Maisels & Ting (2020), P. semlikiensis](https://doi.org/10.2305/IUCN.UK.2020-1.RLTS.T92657343A92657454.en)、[Maisels et al. (1994), P. tholloni](https://doi.org/10.1007/BF02737427)、[McGraw (2006), P. badius waldronae](https://doi.org/10.1016/j.biocon.2005.09.033)、[Hart (2017), Lomami 红疣猴巡护记录](https://www.bonoboincongo.com/2017/06/12/two-red-colobus-two-sides-of-the-lomami-river/)。
