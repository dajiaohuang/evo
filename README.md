# Evo Atlas — 深时演化与证据图谱

> 一个面向 Web、Android 与 iOS 的双语深时演化探索器。它把地质时间、古地理重建、化石记录、生命树、物种名录和逐条科学证据放进同一套可追溯界面。

[在线打开综合看板](https://dajiaohuang.github.io/evo/#/home) · [数据方法](docs/data-methods.md) · [移动端构建](docs/mobile-apps.md) · [参与维护](CONTRIBUTING.md) · [隐私说明](PRIVACY.md)

Evo Atlas 默认直接进入综合看板：地图、时间轴、生命树和化石样本共享一个时间上下文；首次使用时只需选择“直接进入”或“3 分钟教程”。预设场景在综合看板的默认收起状态下可见，打开详细研究工具后随紧凑入口一起收起。

## 当前状态

Evo Atlas 不是一个把生成文本包装成“完整百科”的项目。它同时维护两种覆盖范围，并在界面中明确区分：

- 名录覆盖：固定到 Catalogue of Life Base Release `COL26.8`。2,183,133 个严格接受种全部能沿真实父子链路由到唯一资源归属，另有 2,065,436 个异名、歧义异名和误用名可解析到接受名。24 个富内容包直接拥有 1,819,973 种；余下 363,160 种现由 7 个可下载、可离线读取并同时内置于 Android/iOS 的静态命名资源包拥有。第 32 个 `other-eukaryotes` 分区在本固定发布版中为零记录边界，不伪造空内容。
- 内容覆盖：24 个静态资源包中的证据档案、事件、故事、范围和参考文献。当前已无 `generated-scaffold` 或 `structured`：23 个包为 `source-linked`，奇蹄目为唯一的 `curated-draft`；23 个包尚未人工审阅，奇蹄目的存储状态为 `in-review`，但内容摘要变化使有效状态成为 `stale`，没有包声称达到科学 `published`。平台 `published` 与自动检查通过只表示静态发布链完整，不等于内容或专家审阅已经完成。

当前开发数据快照为 `2026.08-static-v5-rc54`，Web/Android/iOS 客户端版本为 `0.20.5`。精确记录数、校验和限制以 [`data/manifest.json`](data/manifest.json) 为准；科学内容变更见 [`data/CHANGELOG.md`](data/CHANGELOG.md)。

`rc54` 重新核对 147 个因导航本体扩展而遗留的 PBDB 分类概念。103 个同时满足固定 2026-07-19 PBDB 快照中的精确接受名、精确规范等级和兼容完整祖先链，进入可解析状态；44 个继续明确 withheld：22 个接受等级不符、14 个没有精确同名、7 个父链不兼容、1 个接受名不符。七个不兼容候选仍保留候选 PBDB ID 与完整祖先链供复核，但不会发布为实体 ID 或触发查询。新增映射中 102 个完成 114 页分页；一个 Mammalia 根查询因固定快照计数超过 100,000 条继续按既有边界 withheld。全库 24 个包现有 251 个完整子查询、413 页、1,007,973 条允许重叠的子查询行、595,492 个包内唯一 occurrence ID 和 100,425 条确定性有界明细；141 个不满足名称、等级、父链、概念或规模边界的目标不被伪装成零记录。

`rc53` 把此前仅能通过共享 COL 层级浏览的七个非零残余分区转成正式静态命名资源包：真菌 157,044 种、其他动物 99,161 种、原生生物与色藻 61,518 种、细菌 26,397 种、病毒 17,552 种、古菌 790 种、其他植物 698 种，合计 363,160 个严格接受种。每条记录只发布固定版中的 usage ID、父 ID、学名、命名人、等级、接受状态与来源 dataset ID；14 个确定性 gzip NDJSON 分片共享经核对的 160 条来源清单。Web 可逐包下载 ZIP 或离线保存，Android/iOS 从同一不可变发布清单内置所有清单、分片和来源字节。它们是完整命名与分类资源，不是假装具备逐物种证据、媒体、化石、生态、翻译或专家审阅的自动档案。

`rc52` 补齐 CAO2024 v2.4 完整归档中原先未进入 Atlas 的五个点数据载荷：208 条古地磁极、43,364 条地球化学观测和 603 条造山/裂谷/俯冲带变质梯度约束，共 44,175 条。每条都保留上游 GPML 记录 ID、原始年龄端点、板块 ID、位置、`ref_id` 与原始类型/字符串属性；60 条倒置年龄、16 条负年龄下界和 4 条负 `sio2` 值原样保留并标记，不被“修正”。41,320 条使用固定旋转模型在源区间与 0–1,800 Ma 交集的中点成功重建；2,852 条完全超出模型范围、3 条缺少 plate circuit 的记录仅保留原始位置，没有使用 identity 旋转或范围外推。五类点以 20 个稳定分片作为独立“观测与约束”图层默认关闭，不伪装成古地形、高程或海深。Web、Android 和 iOS 发布清单收录同一组字节；移动端当前内置 3,788 个非重复交互文件，约 528.95 MiB。

`0.20.2` 修复完整名录中解析名称的内部可达性：当异名、歧义异名或误用名指向不属于严格接受种祖先闭包的接受/暂定接受亚种、变种、种或变型时，详情页会读取固定版本的 accepted-target 分片，而不再显示“ID 不存在”，也不会把这些目标伪装成严格接受种。完全同名簇超过默认 12 条时会显示全部精确匹配。Android 与 iOS 同时改为安装包内置当前发布版的 3,768 个交互文件（约 520.20 MiB），包括 Core、24 个资源包、化石、1,889 个 CAO2024 帧和完整 COL26.8 名录；断网首次启动无需先下载，24 个重复 ZIP 导出包不重复内置。

`rc51` 把最后九个植物、无脊椎动物、节肢动物与奇蹄目资源包迁移到与其余包相同的 PBDB 定向查询契约。现在 24/24 个包都保存 schema v2 `base_id` 子查询账本：149 个可执行概念完成 299 页分页，账本记录 898,460 条允许重叠的子查询行与 568,983 个包内唯一 occurrence ID；243 个历史等级、概念未协调、名称/等级不匹配、需人工概念审查或超过固定十万行边界的目标明确 withheld。每包最多保留 5,000 条确定性排序的可展示明细，全库共 95,422 条；完整 ID、每查询校验和与终止页证据仍全部保存。Web/Android/iOS 的实体索引会按实体所属包读取这套通用快照，并分别显示完整查询总数与实际载入的有界明细。旧的奇蹄目专用快照已由通用账本替代，其当前固定根查询为 13,209 个唯一 ID。这里的“完整”只描述记录时间点上指定 PBDB 查询的分页，不表示化石记录、物种丰富度或地理采样完整。

`rc50` 关闭全库最后 102 条 `legacy-display` 范围：软体动物—腕足动物、海绵—刺胞动物、三叶虫—螯肢动物、甲壳动物—昆虫、早期陆生植物、裸子植物、被子植物与奇蹄目中的 54 条记录改为带精确 locator 的来源限定标本、地层、区域、模型或导航证据窗口，48 条无法同时支持实体概念与数值端点的记录明确 withheld；9 条被更严格来源记录取代的重复 global 范围同时删除。canonical 范围账本现含 403 条记录，其中 325 条可用、78 条 withheld、0 条历史展示值；按证据级别计为 334 条文献合成与 69 条无足够范围证据。证据账本增至 1,019 条 claims 与 470 条 references。所有数值范围继续与全球真实 FAD/LAD、冠群年龄、分子分歧时间和直接祖先主张分开。

`rc49` 关闭 #7 与 #8 的 110 条脊椎动物、主龙类和哺乳类遗留显示范围：80 条改为带一手研究或系统综述定位符的来源限定样本/模型窗口，30 条证据不足项明确 withheld 并停止展示旧数值。证据账本现含 961 条 claims 与 444 条 references。十五个相关资源包不再复用同一份时期前缀作为“定向查询”：86 个 PBDB `base_id` 子查询完成 110 页分页，记录完整结果 ID、原始与归一化校验和；148 个历史等级、概念冲突或过宽根查询明确 withheld。包级明细是 55,422 条有界、可复现记录，不是全局化石记录完整性或多样性曲线；全局 13,600 条时期样本仍作为独立图谱层保留。

`rc48` 不改变 rc47 的科学解释与固定 COL26.8 字节，而是把共享发布链收紧为跨平台可复现契约：新生成的 JSON gzip 和资源包 ZIP 固定归档元数据，Linux/Windows 对同一输入产生相同字节；移动构建关闭 Vite 的默认 `public/` 复制，只装入共享界面、图标和发布元数据，并以 12 MiB 壳预算阻止完整科学数据误入安装包。Android 与 iOS 仍通过同一个生产 HTTPS 数据根访问全部 24 包、13,600 条有界 PBDB 样本、1,889 个 CAO2024 帧和完整 COL26.8 名录，也可从当前 `release-files.json` 显式保存完整交互集。应用版本同步提升为 `0.20.1`，Android `versionCode` 与 iOS build number 同步提升为 `4`。

`rc47` 为全部 392 个导航实体补齐至少一条逐实体、双语且带具体定位符的 `taxon:` 科学主张；canonical 账本现含 872 条 claims 与 440 条 references。标本或地点的局部范围、模型分化时间、导航集合与分类/拓扑假说仍分别陈述，不外推为全群起源、全球首现或直接祖先。`rc46` 的公开文案、12 个地质纪中点摘要、六层合计 1,889 个 CAO2024 帧、11 个固定 Zenodo 载荷、综合看板入口与五步教程全部保留；覆盖 392/392 只表示 claim 级可追溯性，不代表人工或外部专家审阅已经完成。

`rc41` 在完整保留 rc39 的 13 个植物与无脊椎动物根范围、棘皮动物证据故事，以及 rc40 的 11 个脊椎动物与爬行动物根范围后，继续关闭 Atlas Core、主龙类和哺乳类剩余 21 个主导航根。每个新范围都连接双语主张与具页码、图号或章节定位符的主研究，并明确区分非正式选集、总群样本、化石最低锚点、现生延续、模型包络和导航上限；这些浏览范围不被写成祖先序列、全球首现或可互换的冠群年龄。全部懒加载翻译、COL26.8 的 2,183,133 个唯一接受种路由、Web/Android/iOS 完整离线内容和 `0.20.0` 客户端保持一致。

`rc39` 关闭八个植物与无脊椎动物资源包的根范围遗留值：13 个根范围现在都由具页码、图号或章节定位的一手研究 claim 支撑，并明确标为采样导航包络、总群替代范围或模型边界，而不是全类群起源、全球首现/末现或直系祖先。棘皮动物包新增双语证据故事，依次区分孤立立体网骨片、有争议的 Yanjiahella 归属、约 5.10 亿年前关节相连动物群、不同纲的保存窗口，以及海胆总群化石与冠群模型时间。策展导航实体数同步为 392；COL26.8 的 2,183,133 个接受种仍全部唯一归包且 0 个未匹配，Web、Android 与 iOS 继续读取同一个静态快照。

`rc38` 为海绵—刺胞动物、软体动物—腕足动物、棘皮动物、三叶虫—螯肢动物、甲壳动物—昆虫、早期陆生植物、裸子植物和被子植物新增 20 份代表性逐字段证据档案。每个可见年代、地理、分类、生态和形态字段都连接到具页码、图号或章节定位符的主研究主张；争议化石、模型分化时间和样本出现范围仍彼此分开。COL26.8 的 2,183,133 个接受种继续全部唯一归包且 0 个未匹配；逐名路由仍不冒充逐物种 prose 档案。rc34–rc37 的档案、竞争拓扑、灵长目 `3W7` 修正、首次教程、原生测试、CAO 文档与懒加载内容全部保留，Web、Android 与 iOS 继续读取同一个静态发布快照。

`rc37` 为哺乳动物五个资源包新增 15 份具名标本档案：哺乳类起源、灵长类、食肉类、鲸偶蹄类和其他哺乳类的每个公开档案字段都连接到有精确页码、图版或章节定位的一手研究 claim。高阶冠群/总群范围、COL 命名路由和具争议的化石位置仍与标本级事实分开；没有把导航父子关系写成祖先序列。灵长目 COL26.8 路由使用已核对的 usage ID `3W7`，530 个现生接受种名与全部 2,183,133 个接受种的唯一归属保持不变。rc35 的图谱/主龙类拓扑与档案、rc36 的四足动物/爬行动物档案及边界、首次教程、原生端测试、CAO 文档和全部懒加载内容均完整保留。

`rc36` 深化四足登陆、龟鳖—鳞龙与海生爬行动物—翼龙三包：四足过渡导航现直接进入 Elpistostege、Tiktaalik、Acanthostega 与 Ichthyostega；Mosasauroidea 与真正的 Mosasauridae 明确分层；更老但不确定的 Bobosaurus 与诊断明确的 Rhaeticosaurus 并列。五个丰富档案把可见字段逐项连接到一手研究页码、图表或章节，鱼龙、蛇颈龙和翼龙继续作为三次独立辐射呈现。未对接的导航概念不填写 PBDB 编号，13,600 条化石样本暂不扩张。rc35 的年代证据教程、图谱/主龙类档案与两套恐龙根部拓扑全部保留。

`rc35` 深化图谱核心、恐龙与鳄形类—鸟类三个包：新增九步年代证据教程，把大氧化、阿瓦隆生物群、二叠纪末和 K–Pg 的时间锚点落到一手测年或实测地层；新增羽鳃类、霸王龙、始祖鸟与今鸟类的逐字段主张档案和文献限定延限；并列发布两套早期恐龙根部拓扑。始祖鸟明确位于今鸟类冠群之外，Vegavis 的 6920–6840 万年前记录只在 2025 年分析支持的冠群水禽拓扑下成为冠群延限，较年轻的 Asteriornis 继续作为独立测试。rc34 的 12 份鱼类与两栖类档案、63 条逐字段主张、初次教程、CAO 文档、原生测试和移动端完整清单全部保留；COL26.8 全集路由与 Web/Android/iOS 共用内容保持不变。

`rc34` 深化“早期鱼类”“软骨鱼类”“辐鳍鱼类”和“两栖类”四个资源包：12 份双语标本档案把可见字段逐项连接到具页码、图号或章节定位符的主研究证据；新增导航串联泥盆纪圆口类、志留纪—泥盆纪软骨鱼及泥盆纪—三叠纪辐鳍鱼标本。两栖类起源故事并列呈现离片椎类、壳椎类和全椎类—蚓螈路线及其采样、矩阵与支持度边界，不替相互竞争的分析强选结论。COL26.8 的 2,183,133 个接受种仍全部完成唯一命名路由，0 个未匹配；这不把逐名路由冒充逐物种成熟档案。

`rc32` 将“甲壳类、昆虫与多足类背景”提升为结构化主证据包：13 份双语档案分别呈现寒武纪有颚肢类与泛甲壳动物化石、介形虫和洞虾类系统基因组拓扑及其取样敏感性、泥盆纪弹尾类材料、有争议的 Rhyniognatha、节肢动物陆地化时钟、石炭纪翅化石、翅同源发育实验、1KITE 与真变态类化石。COL26.8 的 1,049,133 个接受种名只表示命名路由，不代表逐物种证据档案或统一系统树。

`rc31` 将“三叶虫与螯肢动物”提升为结构化主证据包：12 份双语档案覆盖早期三叶虫分子钟、三维躯体与附肢解剖、消化道内容物、球接子类拓扑、寒武纪干群螯肢动物、巨型板足鲎、剑尾类总群拓扑、有争议的志留纪陆地化记录，以及彼此冲突的现生蛛形纲分子树。COL26.8 的 104,126 个接受种名只表示命名路由，不代表逐物种化石、形态档案或系统发育共识。
`rc30` 将“软体动物、腕足动物与笔石”教学集合中的软体—腕足主体提升为结构化主证据包：13 份双语档案连接金伯拉虫、齿谜虫、毛饰刺甲虫、波杰塔贝和游盾虫等具名化石、两套边界不同的软体动物系统基因组矩阵、腹足类 Nodal 发育实验、章鱼基因组，以及小米克里纳虫、顾脱贝、海豆芽和玉案山贝证据。COL26.8 的 159,801 个接受种名只表示命名路由，不把争议化石提升为冠群、祖先或全球首现。
`rc29` 将“海绵与刺胞动物”从生成脚手架提升为结构化主证据包：14 份双语档案覆盖成岩甾烷、埃迪卡拉纪与寒武纪具名化石、现生基因组与系统发育样本、刺胞动物主要支系以及石珊瑚分子钟和光共生代用指标。档案明确区分观测、分类归属、系统位置、模型年龄和生态推断；COL26.8 的 30,521 个严格接受种仍只承诺命名路由，不冒充逐物种证据档案。

## 用户能做什么

### 综合看板与古地理

- 从寒武纪海洋、K–Pg 界线、侏罗纪辐射和奇蹄目证据包等预设场景一键开始。
- 在 0–1,800 Ma 范围浏览 1,889 个校验和寻址的 CAO2024 v2.4 重建帧。
- 独立开关六种不混淆语义的图层：海岸线、动态拓扑板块、分类板块边界、大陆地壳范围、陆洋过渡边界和刚性静态分区。
- 按需打开五类独立的 CAO2024 观测/约束点：古地磁极、地球化学、造山型、裂谷型与俯冲带型变质梯度；当前年龄用原始闭区间筛选，点击可查看原始字段与重建边界。
- 各图层按自身时间采样选择最近帧，不插值、不越界钳制；较密帧改善导航连续性，但不会增加原模型的地质分辨率。
- 古地理不包含古海拔、古水深或地形起伏，也不假定与 PBDB 古坐标使用同一重建模型。
- CAO2024 帧只携带年代、图层、模型和几何 provenance，不含 Evo Atlas 实体、资源包、taxon 或 occurrence ID；地图与化石/谱系按时间上下文并列显示，不宣称存在直接的生物分类联接。

### 物种、生命树与内容包

- 搜索完整的 `COL26.8` 接受种及解析名称，并在内部页面查看固定版本的祖先链和直接子级。
- 查看 392 个策展导航实体、24 个富内容资源包及其实际科学成熟度。
- 逐包访问 7 个静态命名资源包：Web 可下载 ZIP 或显式保存离线副本，Android/iOS 安装包已包含完全相同的 363,160 条记录。
- 在导航树、范围、径向树和校准证据之间切换；追踪谱系、折叠支系并导出 Newick/Nexus。
- 将命名学位置、导航节点、系统发育假说、化石首现和分子钟分化时间作为不同类型的信息阅读。

### 化石、证据与故事

- 按时间、类群、国家、地层单位和地点查看 PBDB 样本；古坐标与现代坐标从不混用。
- 阅读带 claim ID、置信度、边界说明、页码/图版定位和 DOI 的事件证据。
- 进入每一步都连接到证据主张的双语故事；证据不完整的草稿不会伪装成已发布故事。
- 甲壳类与昆虫证据包以十三个档案区分标本解剖、发育阶段、系统基因组拓扑、分子钟、功能同源和化石出现；Rhyniognatha 的昆虫与多足类解释并列保留，陆地化和飞行不会被改写成单一祖先阶梯。
- 三叶虫与螯肢动物证据包以十二个档案呈现具名标本、三维解剖、功能比较、形态矩阵、分子钟和基因组拓扑；每条记录显式区分观察、同源、生态推断和争议，螯肢动物干群、剑尾类与蛛形纲的竞争拓扑不会被压成单一祖先阶梯。
- 鲸偶蹄类证据包以八个档案分别呈现具名标本、功能推断、形态矩阵、现生反转座子拓扑、分子模型时间与 COL26.8 的 503 个接受种命名边界，不把化石排成线性祖先阶梯。
- 灵长类证据包以十二个档案分别呈现校准敏感的冠群模型、具名古新世至更新世标本、形态与功能解释、直接测年及 Vindija 33.19、Ust’-Ishim 1 古基因组；COL26.8 的 530 个接受种名只表示命名覆盖，不把化石和基因组排成祖先阶梯。
- 恐龙证据包以十二个档案呈现竞争性的根部形态矩阵、Buriolestes 与 Eocursor 等早期标本、蜥脚形类体型/姿态模型、装甲类/角龙类/鸭嘴龙类关键标本，以及非鸟兽脚类体被、繁殖、生长与食骨功能证据；鸟翼类、飞行档案和 COL26.8 的 11,071 个现生鸟类名称继续由鳄形类—鸟类包负责，包内两条 PBDB 行不能被当作全球首现或多样性曲线。
- 比较类群、时间窗、地区和不同表示假设；导出带方法、引用和校验和的 CSV/JSON/GeoJSON/SVG/ZIP。

### 本地研究与离线使用

- 在浏览器本地导入 CSV、JSON、GeoJSON，使用只读 DuckDB-Wasm 做筛选、连接、聚合和 Parquet 导出。
- 将笔记、收藏、故事草稿和查询历史保存在本机；项目没有账号系统或应用服务器。
- Web 版预缓存应用壳和 Core 数据，大型地图、名录、资源包和化石分片按需缓存。
- Android/iOS 安装包内置同一客户端和当前完整交互数据发布版；首次启动、地图、名录、化石与资源包均可断网读取，外部 DOI 和来源链接仍需网络。

## Web、Android 与 iOS

三端共享 `src/` 中的 React/TypeScript 客户端和同一个数据协议。Web 按需读取发布数据；Android/iOS 在构建时从同一发布清单生成本地只读副本。

| 平台 | 工程 | 运行形态 | 当前边界 |
| --- | --- | --- | --- |
| Web / PWA | Vite + GitHub Pages | `/evo/` 下的静态应用、Service Worker 与按需数据缓存 | 可直接使用和安装 |
| Android | `android/` + Capacitor 8 | API 24+ 原生壳、系统返回键、状态栏、启动资源、外链和 `evoatlas://` 深链 | 工程与应用级测试源已生成；尚未生成或发布 AAB，商店签名和发布凭据不入库 |
| iOS / iPadOS | `ios/` + Capacitor 8 / Swift Package Manager | iOS 15+ WKWebView 原生壳、安全区、状态栏、启动资源、外链和 `evoatlas://` 深链 | 工程与应用级测试 target 已生成；尚未生成或发布 IPA/Archive，必须在 macOS + Xcode 完成验证与签名 |

移动端不是把线上网页作为远程首页打开的空壳：HTML、CSS、JavaScript、图标和当前不可变科学数据发布版都进入原生包。Android 与 iOS 使用和 Web 完全相同的路由、资源包注册表、化石分片、CAO2024 地图帧与 COL 名录；“数据”页直接报告内置文件数和体积，不会再把相同数据重复写入 WebView 缓存。详细工作流见 [`docs/mobile-apps.md`](docs/mobile-apps.md)。

## 快速开始

需要 Node.js 22+。

```bash
npm ci
npx playwright install chromium firefox webkit
npm run dev
```

开发地址为 `http://localhost:5173/evo/`。

运行完整发布契约：

```bash
npm run verify
```

`verify` 包含 ESLint、Vitest、注册表与资源包投影一致性、数据/主张/翻译/来源/审查门禁、TypeScript、生产 PWA 构建、体积预算、静态页面 smoke test、完整移动数据构建、三浏览器 Playwright 路由和 axe 可访问性检查。

## 构建移动端

先生成共享移动客户端并同步到两个原生工程：

```bash
npm ci
npm run mobile:sync
```

Android 需要 Android Studio 2025.2.1+ 和 Android SDK；当前工程使用 `minSdk 24`、`targetSdk 36`：

```bash
npm run mobile:android
```

iOS 需要 macOS、Xcode 26+ 和命令行工具；项目使用 Swift Package Manager：

```bash
npm run mobile:ios
```

`npm run mobile:build` 先生成当前静态发布版，再按 `release-files.json` 把全部非重复交互文件复制到 `dist-mobile/data/`，逐项复用现有字节数与 SHA-256 契约；`mobile:sync` 把完整产物和插件配置复制到 `android/` 与 `ios/`。这些生成目录被 `.gitignore` 排除，不要手改。应用 ID 为 `io.github.dajiaohuang.evoatlas`，自定义深链示例为：

安装后的“数据”页直接显示内置的完整交互集；无需另点“保存完整图谱”。Web 版仍提供单个/全部资源包与完整图谱缓存。实际体积和文件数始终从版本化发布清单计算；重复的 ZIP 导出包不计入离线交互集。

```text
evoatlas://open/stories?id=angiosperm-evidence-boundaries
evoatlas://open/explore?age=375&taxon=tiktaalik
```

## 数据架构

`data/` 是版本控制下的科学事实层；`public/data/`、`dist/data/` 和 `dist-mobile/` 都是生成物。

```text
data/
├── catalogue-of-life/     # 固定 CoL 名录、层级、来源和差异
├── evidence/              # typed claims、中文陈述与置信度理由
├── fossils/               # 规范化 PBDB 教学样本
├── navigation/            # Atlas 导航本体
├── packages/              # 24 个静态资源包投影与 review.json
├── paleogeography/        # CAO2024 provenance、帧清单与几何
├── ranges/                # 与叙事分离的范围证据账本
├── registry/              # 实体、包注册表和物种归属
├── events.json
├── references.json
├── stories.json
└── manifest.json

src/                       # 三端共享客户端
android/                   # Android Studio 工程
ios/                       # Xcode / Swift Package Manager 工程
scripts/                   # 数据投影、构建、验证和静态发布
```

浏览器从 `/evo/data/current.json` 启动，随后只读取 `data/releases/<datasetVersion>/` 下的不可变文件。资源包清单、Core、地图、名录、化石和下载文件都带 SHA-256；校验失败时客户端会先逐出缓存并只重试一次，数据集版本不一致则拒绝混用。

### 常用数据命令

```bash
npm run data:registry:build
npm run data:packages:species
npm run data:manifest
npm run data:registry:check
npm run data:validate
npm run data:build
```

从官方不可变 DwCA 重建固定 `COL26.8` 投影（487.89 MiB 上游压缩包不提交）：

```bash
npm run data:col:build -- --archive /path/to/2026-08-20_dwca.zip --out data/catalogue-of-life/releases/2026-08-20/registry
```

PBDB 拉取、规范化和 GeoJSON 分片命令仅用于 staging；没有完整来源与授权字段的几何不能进入发布数据：

```bash
npm run data:fetch:fossils -- --period Cretaceous --limit 1000
npm run data:normalize:fossils
npm run data:assign:fossils
npm run data:indexes
npm run data:split:geojson -- --input staging/world.geojson
```

更完整的格式、缓存、预算和发布规则见 [`docs/static-data-platform-v5.md`](docs/static-data-platform-v5.md)。

## 正确性与真实性边界

- Catalogue of Life 的“全集”只指固定发布版中严格接受种的命名学覆盖；它继承上游覆盖范围，也不代表每个物种都有 Evo Atlas 档案。
- 当前跨图谱 PBDB 数据是 13,600 行非随机、有界的时期分层样本，不能用记录数推断真实丰富度、缺失或全球首现。24 个包另有各自的定向 `base_id` 查询账本；“完整”仅指记录时该项查询返回的所有页，子查询之间允许重叠，141 个不满足名称、等级、父链、概念或固定边界条件的目标不会被伪装成零记录。
- 生命树总览是教学导航本体，不是唯一系统发育假说。包内拓扑、分化时间、形态和地层出现必须分别标注。
- first/last appearance 受采样控制，不等于精确起源/灭绝；分子钟后验不等于化石出现。
- `automatedReviewStatus: passed` 只说明工程门禁通过，不等于维护者科学审查，更不等于外部专家同行评议。
- canonical 范围账本已无 `legacy-display`：有足够证据的记录标明其真实样本、地层、区域或模型边界，证据不足的端点明确 withheld；两者都不冒充全球 FAD/LAD。

## 维护资源包

科学内容从 claim 开始，而不是先写故事。新增或修订资源包时：

1. 在共享 canonical 文件中确认实体概念、来源、范围和主张；不要直接手改生成投影。
2. 每条可见科学陈述连接到合适角色的一手研究或系统综述，并提供页码、图版、表格或章节 locator。
3. 明确标本观察、功能推断、系统模型、生态解释和全球范围之间的边界。
4. 运行投影、清单和完整 `npm run verify`；维护者 review 与外部专家 review 保持独立。

详见 [`DATA_PACKAGE_AUTHORING.md`](DATA_PACKAGE_AUTHORING.md)、[`SCIENTIFIC_REVIEW.md`](SCIENTIFIC_REVIEW.md) 和 [`docs/review-workflow.md`](docs/review-workflow.md)。

## 参与贡献

- 事实或证据纠错：提供实体/claim ID、数据集版本、页面 URL、建议修改和直接支持它的来源。
- 资源包：提交一个小而完整、可审查的纵切面，不要用广泛生成文本替代证据。
- 应用：Web、Android 和 iOS 尽量共享实现；平台差异放在 `src/platform/` 或对应原生工程。
- 翻译：保留学名、ID、不确定性和证据强度，不把“可能”翻译成“确定”。

完整说明见 [`CONTRIBUTING.md`](CONTRIBUTING.md)。

## 隐私、许可证与引用

Evo Atlas 没有账号、广告、分析 SDK 或应用后端。笔记、收藏、导入文件和查询历史保存在设备本地；应用只为读取公开科学数据、外部引用和用户主动打开的链接发起网络请求。详见 [`PRIVACY.md`](PRIVACY.md)。

- 软件：[`MIT`](LICENSE)
- 原创策展和说明内容：通常为 [`CC BY 4.0`](CONTENT_LICENSE.md)
- 科学数据和第三方材料：遵循各自条款，见 [`DATA_LICENSES.md`](DATA_LICENSES.md)、[`THIRD_PARTY_NOTICES.md`](THIRD_PARTY_NOTICES.md) 和 [`MEDIA_ATTRIBUTION.json`](MEDIA_ATTRIBUTION.json)
- 引用：使用 [`CITATION.cff`](CITATION.cff)，同时引用所依赖的具体数据快照、PBDB/CoL/ICS/CAO2024 和科学论文

## English summary

Evo Atlas is a bilingual, static-first deep-time evidence explorer for Web, Android and iOS. The dashboard synchronizes geological time, six distinct CAO2024 geometry series, five separately typed CAO2024 observation/constraint datasets, fossil samples, a 392-entity navigation tree and claim-level evidence. The pinned CAO2024 v2.4 payload includes all 44,175 point records: 41,320 have reconstructed coordinates, while 2,852 out-of-range and three missing-circuit records remain truthfully source-only. These points are not terrain, elevation, bathymetry or direct palaeotopography. The release retains 1,019 claims, 470 references and 403 canonical range records (325 available windows and 78 explicit withholdings, with no legacy display values). All 24 curated-content packages publish schema-v2 targeted PBDB ledgers: 251 complete subqueries preserve 595,492 package-unique occurrence IDs and 100,425 deterministic bounded display details, while 141 concepts remain explicitly withheld. The pinned COL26.8 registry routes all 2,183,133 strictly accepted species to one resource owner with zero unmatched names. Twenty-four curated-content packages own 1,819,973 species; seven downloadable static nomenclatural packs publish the remaining 363,160 species in fourteen deterministic shards, while one explicit zero-record boundary remains. This is complete release-scoped nomenclature, not a claim that every species has a prose dossier or expert review. Android and iOS are Capacitor 8 projects sharing the same React client at app version 0.20.5. Their builds bundle the same immutable interactive release as Web—Core, all content and nomenclatural packs, fossil data, all 1,889 geometry frames, all twenty observation shards and the full COL registry—while excluding only duplicate ZIP exports. No account, analytics SDK, private API key, database or application server is required.
