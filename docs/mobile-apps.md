# Android 与 iOS 应用

Evo Atlas 的 Web、Android 和 iOS 版本共享同一个 React/TypeScript 客户端。原生应用把 HTML、CSS、JavaScript、图标、启动资源和当前不可变科学数据发布版一并装入安装包，不把 Web 站点作为远程首页加载；Web 版仍从 GitHub Pages 读取同一份发布协议。

## 工程结构

```text
src/                         # Web 与移动端共享的产品代码
src/platform/nativeRuntime.ts # 深链、返回键、状态栏、启动屏和外链
capacitor.config.ts          # Capacitor 应用与插件配置
.env.mobile                  # 移动构建的数据根地址和运行标志
android/                     # Android Studio / Gradle 工程
ios/                         # Xcode / Swift Package Manager 工程
assets/logo.svg              # 原生图标和启动图源文件
dist-mobile/                 # 临时生成的移动客户端壳，不提交
```

移动构建关闭 Vite 的默认 `publicDir` 复制，先用 canonical `data/` 生成当前发布版，再由现有 `release-files.json` 选择全部交互文件并复制到 `dist-mobile/data/`。重复的 24 个资源包 ZIP 导出物不再复制，因为其科学内容已经作为交互文件内置。finalizer 会沿用发布清单的字节数与 SHA-256 逐项核对，拒绝缺失、串版或超过 800 MiB 的产物；这是一条构建契约，不是新的科学内容审查系统。

应用 ID 是 `io.github.dajiaohuang.evoatlas`。Android 最低 API 为 24，iOS 最低版本为 15。原生工程使用 Capacitor 8；iOS 插件通过 Swift Package Manager 引入。

仓库中的 Android Studio 与 Xcode 项目是可复现的原生壳源工程，不是商店发布证明。应用级 Android/iOS 测试源随工程维护，但 AAB、IPA、签名 Archive、Play Console 和 App Store Connect 发布物均不在仓库中；只有在相应平台工具链、模拟器/真机和商店流程完成后才能声称原生版本已发布。

## 数据与离线边界

rc91 将 Android 与 iOS 同步到 build `45` / app `0.20.42`。两端完整获得龟鳖与鳞龙、海生爬行动物与翼龙、鳄形类与鸟类新增的 20 张来源限定地图卡；三个包现分别提供 9、12、8 个场景，原生包合计 167 个研究场景和 227 条场景—主张链接。全部 114 个年龄驱动场景都在路由年龄命中一个共享实体和主张的 `available` 范围；具名标本、地点、层位、校准、模型、功能解释与取整年龄均保持边界。`native-full` 继续逐字节保留 COL26.8 全部 2,183,133 个接受种、全部权威分片和 109 帧 0.1° PaleoDEM，Pages 保持 `web-light`。

rc90 将 Android 与 iOS 同步到 build `44` / app `0.20.41`。两端完整获得鲸偶蹄类、哺乳动物起源和其他哺乳动物新增的 17 张来源限定地图卡；三个包现分别提供 9、8、9 个场景，原生包合计 147 个研究场景和 201 条场景—主张链接。统一联结审计也修正 Notharctus 与 Eosimias 两张旧卡的范围主张，使全部 94 个年龄驱动场景都在路由年龄命中一个共享实体和主张的 `available` 范围。具名标本、组合材料、地点、层位、模型、争议产地和功能解释均保持边界；`native-full` 继续逐字节保留 COL26.8 全部 2,183,133 个接受种、全部权威分片和 109 帧 0.1° PaleoDEM，Pages 保持 `web-light`。

rc89 将 Android 与 iOS 同步到 build `43` / app `0.20.40`。两端完整获得辐鳍鱼类、早期鱼类和软骨鱼类新增的 16 张来源限定地图卡；三个包现分别提供 8、8、9 个场景，原生包合计 130 个研究场景和 184 条场景—主张链接。全部 77 个时间驱动场景都在路由年龄命中一个共享实体和主张的 `available` 范围；具名标本、地点、层位、研究区间和取整年龄不被提升为全球首末现、直接祖先、完整分布或精确地图共定位。`native-full` 继续逐字节保留 COL26.8 全部 2,183,133 个接受种、全部权威分片和 109 帧 0.1° PaleoDEM；Pages 保持 `web-light`。

rc88 将 Android 与 iOS 同步到 build `42` / app `0.20.39`。两端完整获得奇蹄目、棘皮动物与两栖类新增的 17 张来源限定地图卡；三个包现分别提供 8、10、8 个场景，原生包合计 114 个研究场景和 168 条场景—主张链接。全部 61 个时间驱动场景都在路由年龄命中一个共享实体和主张的 `available` 范围；单件标本、地层窗口、区域记录、模型结果和取整年龄均不被提升为全球首末现、直接祖先、完整分布或精确地图共定位。`native-full` 继续逐字节保留 COL26.8 全部 2,183,133 个接受种、全部权威分片和 109 帧 0.1° PaleoDEM；Pages 保持 `web-light`。

rc87 将 Android 与 iOS 同步到 build `41` / app `0.20.38`。两端完整获得 Burgessomedusa phasmiformis、Amphimedon queenslandica、Lycophocyon hutchisoni、Kretzoiarctos beatrix、Notharctus 与 Eosimias 6 个新增双语档案、24 条主张和 18 个研究场景；当前原生包共有 127 个完整档案、403 个导航节点、1,277 条证据主张、484 条参考文献与 97 个来源限定场景。全部 44 个时间驱动场景都在路由年龄命中一个共享实体和主张的 `available` 范围；现生 Amphimedon 样本不获得伪造的化石时限。`native-full` 继续逐字节保留 COL26.8 全部 2,183,133 个接受种、全部权威分片和 109 帧 0.1° PaleoDEM；Pages 保持 `web-light`。

rc86 将 Android 与 iOS 同步到 build `40` / app `0.20.37`。两端完整获得 Yinlong downsi、Yutyrannus huali、Pojetaia runnegari、Kutorgina chengjiangensis、Rhyniella praecursor 与 Odonata 6 个新增双语档案、23 条主张和 7 个研究场景，当前原生包共有 121 个完整档案、403 个导航节点、1,253 条证据主张、484 条参考文献与 79 个来源限定场景。全部 34 个时间驱动场景都在路由年龄命中一个共享实体和主张的 `available` 范围；Rhyniognatha 与 Paskov 翅化石仍是有争议的场景证据，不因原生全量交付而获得伪造的 PBDB ID 或完整档案。`native-full` 继续逐字节保留 COL26.8 全部 2,183,133 个接受种、全部权威分片和 109 帧 0.1° PaleoDEM；Pages 保持 `web-light`，不复制原生端全量逐种行。

rc85 将 Android 与 iOS 同步到 build `39` / app `0.20.36`。两端完整获得 Olenoides serratus、Megachelicerax cousteaui、Pakicetus attocki、Peregocetus pacificus、Eritherium azzouzorum 与 Mimolagus aurorae 6 个新增双语档案和 25 条主张，当前原生包共有 115 个完整档案、403 个导航节点、1,230 条证据主张、483 条参考文献与 72 个来源限定场景。新增内容复用既有导航节点与来源账本，并保留非关联材料、功能与拓扑推断、重建扩散路线、具名标本和地点边界。`native-full` 仍逐字节保留 COL26.8 全部 2,183,133 个接受种、全部权威分片和 109 帧 0.1° PaleoDEM；Pages 保持 `web-light`，不复制原生端全量逐种行。

rc84 将 Android 与 iOS 同步到 build `38` / app `0.20.35`。两端完整获得 Dimetrodon、Morganucodonta、Chaohusaurus、Rhaeticosaurus mertensi、Teilhardina 与 Morotopithecus bishopi 6 个新增双语档案和 23 条主张，当前原生包共有 109 个完整档案、403 个导航节点、1,205 条证据主张和 483 条参考文献；三个更新包各自的 3 个来源匹配树、时间地图或比较场景也同步进入两端。新增档案复用既有导航节点，并保留具名标本、地点、层位、非关联骨架、竞争拓扑和非直接祖先边界。`native-full` 仍逐字节保留 COL26.8 全部 2,183,133 个接受种、全部权威分片和 109 帧 0.1° PaleoDEM；Pages 保持 `web-light`，不复制原生端全量逐种行。

rc83 将 Android 与 iOS 同步到 build `37` / app `0.20.34`。两端完整获得 Micrina、Yuganotheca elegans、Maghriboselache mohamezanei、Cosmoselachus mehlingi、Strudiella 与 Cretophasmomima melanogramma 6 个新增双语档案和 32 条主张，当前原生包共有 103 个完整档案、403 个导航节点和 1,182 条证据主张；三个更新包各自的 3 个来源匹配时间地图或比较场景也同步进入两端。`native-full` 仍逐字节保留 COL26.8 全部 2,183,133 个接受种、全部权威分片和 109 帧 0.1° PaleoDEM；Pages 保持 `web-light`，不复制原生端全量逐种行。

rc82 将 Android 与 iOS 同步到 build `36` / app `0.20.33`。两端完整获得属级 Tujiaaspis 与 Xiushanosteus（以 T. vividus 与 X. mirabilis 标本为锚点）、Haootia quadriformis、Xianguangia sinica、Hesperocyon 与属级 Enaliarctos 6 个新增双语档案和 26 条主张，当前原生包共有 97 个完整档案、399 个导航节点和 1,150 条证据主张；三个更新包的精确时间地图与比较场景也同步进入两端。`native-full` 仍逐字节保留 COL26.8 全部 2,183,133 个接受种、全部权威分片和 109 帧 0.1° PaleoDEM；Pages 保持 `web-light`，不复制原生端全量逐种行。

rc81 将 Android 与 iOS 同步到 build `35` / app `0.20.32`。两端完整获得 Aglaophyton、Horneophyton、Coniferophyta、Araucariaceae、Carnufex 与 Asteriornis 6 个新增双语档案和 26 条主张，当前原生包共有 91 个完整档案、397 个导航节点和 1,124 条证据主张；三个更新包的精确时间地图场景也同步进入两端。`native-full` 仍逐字节保留 COL26.8 全部 2,183,133 个接受种、全部权威分片和 109 帧 0.1° PaleoDEM；Pages 保持 `web-light`，不复制原生端全量逐种行。

rc80 将 Android 与 iOS 同步到 build `34` / app `0.20.31`。两端完整获得恐龙、龟鳖与鳞龙、辐鳍鱼三个资源包新增的 9 个双语一手证据档案与 36 条主张，当前原生包共有 85 个完整档案、395 个导航节点和 1,098 条证据主张。`native-full` 仍逐字节保留 COL26.8 全部 2,183,133 个接受种、全部权威分片和 109 帧 0.1° PaleoDEM；Pages 保持 `web-light`，不复制原生端全量逐种行。

rc79 将 Android 与 iOS 同步到 build `33` / app `0.20.30`。两端仍从 `native-full` inventory 逐字节获得全部 109 个 3601×1801、0.1° PaleoDEM v2 无损网格，总压缩字节保持 168,418,483；Web/Pages 独立升级为全部年龄 1201×601、0.3° 每第三格精确抽样。移动端同时继续包含完整名录、全部权威逐种分片、24 个富内容包和 rc78 的 392 个导航描述与 72 个研究场景。

rc78 将 Android 与 iOS 同步到 build `32` / app `0.20.29`。两端获得与 Web 相同的 392/392 个双语导航摘要、72 个来源限定研究场景和按时间匹配的地图资源包卡片；卡片只使用 `available` 范围以及与场景共享的实体和 claim ID，不把时间匹配冒充化石地点或重建分布。`native-full` 仍逐字节保留 COL26.8 全部 2,183,133 个接受种、全部权威分片和 109 帧 0.1° PaleoDEM；Pages 继续保持 `web-light`。

rc77 将 Android 与 iOS 同步到 build `31` / app `0.20.28`。两端继续从同一 `native-full` inventory 内置 COL26.8 全部 2,183,133 个接受种、全部权威命名分片和 109 帧 0.1° PaleoDEM，并新增 10 个双语、字段关联的完整档案：禾本科、豆科，海百合、海蕾、海星、蛇尾、海参，以及希望螈鱼、棘螈、鱼石螈；真双子叶植物另有字段关联证据档案，但因 PBDB 概念未解决而不伪造完整 profile 的外部 ID。43 条新增声明保留一手来源定位与推断边界。Pages 继续使用 `web-light`，不会因本版富内容提升而复制原生全量名录或权威逐种分片。

rc76 将 Android 与 iOS 同步到 build `30` / app `0.20.27`。两端新增独立 ITIS Fungi collection 的 56 个 COL 范围分片和 1 个 upstream-only 分片，并新增 Collembola + Protura 的 2 个 COL 分片和 1 个 upstream-only 分片；合计 168,884 条记录、60 个非空 gzip 全部进入 `native-full`。Species Fungorum / Index Fungorum 与既有 Insecta、Crustacea、Myriapoda、Chelicerata、AviList、Cnidaria collections 均保持独立，Pages `web-light` 不发布任何新增逐种行。两个 App 继续包含全部 109 帧 0.1° PaleoDEM；受限的 0.05° HydroShare 模型不进入默认包。见 [`itis-fungi-authority.md`](itis-fungi-authority.md)、[`itis-collembola-protura-authority.md`](itis-collembola-protura-authority.md) 与 [`paleotopography-native-resolution-audit-rc76.md`](paleotopography-native-resolution-audit-rc76.md)。

rc75 将 Android 与 iOS 同步到 build `29` / app `0.20.26`。两端完整加入 Graptolithina/Rhabdopleura、Dicyemida/Kantharella 与两个 Oomycota 目根的增量分片，并加入独立 ITIS Bacteria TSN `50` 集合的 4 个 COL 范围分片和 4 个 upstream-only 分片；4,827 条 COL 结果与 9,348 条 ITIS-only 行均逐字节进入 `native-full`。既有 LPSN 标识集合保持独立，Pages `web-light` 不发布新增逐种行。完整 Bacteria 契约见 [`itis-bacteria-sidecar.md`](itis-bacteria-sidecar.md)。

rc74 将 Android 与 iOS 同步到 build `28` / app `0.20.25`，并为 Actinopterygii、Chondrichthyes、Agnatha/Myxini 与 Sarcopterygii 四个互不重复的现生鱼类边界加入固定 ITIS `2026-08-26` CC0 权威侧车。37,436 条 COL26.8 范围行与 3,932 条 ITIS-only 行合计形成 41,368 条原生端记录、29 个非空 JSONL gzip；Myxini 作为 Agnatha 内部后代只计算一次，Sarcopterygii 的八条包内记录也不被宣称为完整现生总数。`native-full` 在 Android/iOS 中逐字节包含全部描述符和行分片，Pages 的 `web-light` 只发布来源、范围、方法、计数、限制和 canonical 哈希。独立 FishBase 历史标识层不与 ITIS 混合。逐组统计、根边界与交付契约见 [`itis-fish-authority.md`](itis-fish-authority.md)。

rc73 将 Android 与 iOS 同步到 build `27` / app `0.20.24`，并为五个 Mammalia 分区加入固定 ITIS `2026-08-26` CC0 权威侧车。6,461 条 COL26.8 范围行保留 6,460 个当前名结果与 1 个歧义；3 个 ITIS-only 当前种保持 null COL ownership，合计 6,464 条原生端记录。`native-full` 逐字节包含全部 9 个非空 JSONL gzip；`mammal-origins` 的零记录边界不交付 ITIS collection。Pages 的 `web-light` 只发布描述符、来源、范围、方法、计数、限制和 canonical 哈希，不发布逐种行。逐组统计、根边界与交付契约见 [`itis-mammal-authority.md`](itis-mammal-authority.md)。

rc72 将 Android 与 iOS 同步到 build `26` / app `0.20.23`，并为 Reptilia 加入固定 ITIS `2026-08-26` CC0 权威侧车。12,649 条声明范围内的 COL26.8 行保留 9,831 个精确当前接受名、71 个官方异名重定向、3 个歧义和 2,744 个未匹配结果；655 个 ITIS-only 当前种保持 null COL ownership，合计 13,304 条原生端记录。`turtles-lepidosaurs` 的非鳄类范围以 10 个文件发布 13,277 条记录；`crocodylomorphs-birds` 内 Crocodylia 以 1 个文件发布 27 条记录，Aves 明确排除，独立 AviList collection 保持 4 个文件。`native-full` 逐字节包含全部 11 个 Reptilia ITIS JSONL gzip；finalizer、Android instrumentation 与 iOS application tests 按 collection ID 核对行数、release inventory 字节数、SHA-256 与真实资产。Pages 的 `web-light` 只发布描述符、来源、范围、方法、计数、限制和 canonical 哈希，不发布逐种行。逐组统计、根边界与交付契约见 [`itis-reptilia-authority-sidecars.md`](itis-reptilia-authority-sidecars.md)。

rc71 将 Android 与 iOS 同步到 build `25` / app `0.20.22`，并加入 Insecta、Crustacea、Chelicerata 与 Myriapoda 四组互不重叠的固定 ITIS `2026-08-26` CC0 权威侧车。两端 `native-full` 逐字节包含 161 个非空 JSONL gzip、1,135,834 条 COL26.8 显式结果与 42,507 条 ITIS-only 当前种，合计 1,178,341 条记录；混合资源包中的 Trilobita 与 Euthycarcinoidea 排除边界保持明确。Pages 只发布来源、精确根、统计、限制和 canonical 哈希。完整范围见 [`itis-arthropods-authority.md`](itis-arthropods-authority.md)。

rc70 将 Android 与 iOS 同步到 build `24` / app `0.20.21`，并把固定 ITIS `2026-08-26` CC0 权威层扩展到线虫、环节动物、软体动物与腕足动物、海绵与刺胞动物和棘皮动物。240,792 条声明范围内的 COL26.8 记录均保留显式结果：21,346 个精确当前接受名、515 个官方异名重定向、30 个歧义和 218,901 个未匹配结果；13,122 个 ITIS-only 当前种保持 null COL ownership，合计 253,914 条原生端权威记录。`native-full` 逐字节包含全部 77 个非空 JSONL gzip，finalizer、Android instrumentation 与 iOS application tests 均核对 collection ID、行数、release inventory 字节数、SHA-256 和真实资产。Pages 的 `web-light` 仅发布描述符、来源、范围、方法、计数、限制和 77 个 canonical 哈希，不发布逐种行。棘皮动物同时保留彼此独立的 WoRMS AphiaID 与 ITIS TSN collection；两者不合并或相互覆盖，WoRMS 也改为 Pages 摘要、原生完整。逐组统计、根边界和交付契约见 [`itis-major-invertebrates-authority.md`](itis-major-invertebrates-authority.md)。

rc69 将 Android 与 iOS 同步到 build `23` / app `0.20.20`，并为 `protists-chromists` 加入 25 个 ITIS 权威边界。两端逐字节包含全部 19 个非空 ITIS 文件和 19,501 条记录，并继续包含有孔虫 WFD 的 5 个文件与 47,975 条记录。12 个没有精确现行根的范围保留为完整的零行边界，不把近邻类群写入应用，也不复制无信息的空 gzip。移动端最终化脚本、Android instrumentation source 与 iOS application tests 都按 manifest 顺序核对扩展 ID、CC0 来源、文件数、行数、release inventory 字节数、SHA-256 和真实资产存在性。Pages 仍只发布摘要与 24 个非空 authority 文件的 canonical 哈希；Web 轻量化不缩减 Android 或 iOS 的完整名录、全部权威行和 109 帧 0.1° PaleoDEM。逐组统计见 [`itis-protists-authority.md`](itis-protists-authority.md)。

rc68 将 Android 与 iOS 同步到 build `22` / app `0.20.19`，并把 `other-animals` 的 ITIS 权威层从五个扩为 26 个互不重叠的范围。两端逐字节包含相同的 62 个非空 canonical 文件：60,572 个 COL26.8 显式结果和 2,327 个 ITIS-only 当前种，共 62,899 行；七个零行 upstream 分区不复制相同的空 gzip。移动端测试按 manifest 顺序检查每个扩展的 ID、CC0 来源、文件数、行数、release inventory 字节数、SHA-256 与真实资产存在性，并要求扩展总数完全相等，不能静默漏掉新范围。Pages 的 `web-light` 不复制行级文件，只保留 26 组完整来源、根边界、方法、统计、限制与 canonical 哈希；这不会缩减 Android 或 iOS 的物种数据。逐组统计见 [`itis-other-animals-authority.md`](itis-other-animals-authority.md)。

rc66 将 Android 与 iOS 同步到 build `20`，并把全部 47,975 个 COL26.8 有孔虫的 WFD `2026-08-01` 权威标识纳入 `native-full`。两端包含相同的 5 个互不重叠 COL-ID JSONL gzip 分片，共 4,046,631 字节；每条记录都来自官方 ChecklistBank dataset `1157` source-record 关系，单种查询最多读取一个分片。`finalize-mobile-build.mjs` 要求 5 个文件、47,975 条记录、完整 canonical inventory 和 `native-full` 标志，并逐文件复核 release inventory 的字节数与 SHA-256。Pages 的 `web-light` 不部署这些行级文件，仅公开来源、方法、计数、限制和 5 文件哈希清单。

rc65 将 Android 与 iOS 同步到 build `19`，并把两栖类完整 ITIS 权威命名侧车纳入 `native-full`：8,923 个 COL26.8 结果分布在 7 个互不重叠的 COL-ID JSONL gzip 分片中，另有 1 个包含 8 个 ITIS-only 当前种的分片。两端从同一 release inventory 复制并逐文件核对字节数与 SHA-256；`finalize-mobile-build.mjs` 同时要求 7+1 分片、8,923+8 条记录和 `native-full` 标志。Pages 不包含这些行级文件，只保留可审计描述符与 canonical 哈希清单。

rc64 在保留 rc63 全部古地形的同时，将两端同步到 build `18`，并加入 AviList `v2025b` 的完整鸟类权威命名数据。Android 与 iOS 都包含相同的 3 个 COL-ID 范围分片和 1 个 609 条记录的 upstream-only 分片；11,044 个 COL 鸟类结果与包内 27 个明确不适用的鳄目结果不会因 Pages 轻量化而从原生应用中缺失。`finalize-mobile-build.mjs` 会检查 `native-full` 标记、分片数和记录总数，然后按 release inventory 逐文件复制并复核哈希。

Android 与 iOS 的 `native-full` 仍完整保留 Scotese–Wright 2018 PaleoDEM v2 的 109 个 0–540 Ma、5 Ma 名义年龄帧：两个原生包都含全部 3601×1801、0.1°、独立无损 i16 gzip 栅格，总压缩字节为 168,418,483；同一 inventory 逐帧保留源归档 member 哈希、文件名年龄、NetCDF 内部描述/年龄、压缩及解码 SHA-256。一次地图选择只读取一个年龄帧，worker 动态着色 Canvas，不预生成瓦片金字塔，也不做时间插值。Web/Pages 与浏览器离线为了保持 650 MiB 部署门槛，仍覆盖全部 109 个年龄，但使用 1201×601、0.3° 的每第三格精确抽样预览，并省略只用于下载的重复包 ZIP；它不是原生端 0.1° 数据。本地 native-full 构建仍可生成 ZIP。界面和 manifest 均显示当前 profile、分辨率、Mercator ±85.051° 显示边界及非共注册限制。

rc62 把全部 157,044 个 COL26.8 真菌接受种的固定 Species Fungorum / Index Fungorum 标识纳入原生全量数据契约。六个按 COL ID 排序且互不重叠的分片通过 Fungi manifest 与 `release-files.json` 进入 Web、离线存储、Fungi ZIP、Android 和 iOS；原生测试逐片核对字节数与 SHA-256。详情页按 `minColId` / `maxColId` 只加载一个命中分片，不解析完整 157,044 条侧车。源快照额外 201 个接受种仅存在于 canonical 审计，不写入 COL 包。Android `versionCode` 与 iOS build number 为 `16`。

rc61 把 WFO Plant List `2026-06` 的完整固定投影纳入原生全量数据契约：388,686 个 COL26.8 植物接受种按 accepted / redirect / ambiguous / unmatched / withheld 分区，另有 60,751 个 WFO-only 接受种以 `colOwnership: null` 独立提供。Android/iOS 与 Web、三份植物富内容包 ZIP 和 `other-plants` ZIP 读取相同 gzip、字节数与 SHA-256；原生测试逐个核对 collection/extension descriptor、release inventory 与内置分片，并禁止把 upstream-only 记录写入 COL ID。Android `versionCode` 与 iOS build number 为 `15`。

rc60 将固定到 ICTV `MSL41.v1` 与纠正版 `VMR_MSL41.v1.20260729` 的病毒侧车纳入原生完整数据契约。17,552 个 COL26.8 病毒接受种全部精确映射，2 个 ICTV-only 种以 null COL ID 保留；17,554 个当前 ICTV 种与 19,285 条 VMR 代表/附加分离物记录通过与 Web 和 Viruses ZIP 相同的 manifest 路径、字节数与 SHA-256 进入 Android/iOS。原生测试同时核对 ICTV descriptor、release inventory 与实际内置 gzip，并继续要求 rc59 WoRMS、Bacteria/Archaea LPSN 和 PBDB gzip 数据存在。Android `versionCode` 与 iOS build number 为 `14`。

rc59 将棘皮动物包的 11,891 条 WoRMS AphiaID 命名侧车作为独立 collection 文件纳入共享发布清单。Android/iOS 读取与 Web、包 ZIP 完全相同的 751,115 字节 gzip 和 SHA-256；原生测试核对 collection descriptor、release inventory 与实际内置文件，并同时确保 Bacteria 与 Archaea 两份 LPSN 扩展不丢失。该侧车仅提供按日期固定的严格同名或明确接受名重定向，不是冻结 WoRMS 整库、系统树、完整生物学档案或 COL/WoRMS 物种概念等价声明。

rc58 增加 8 幅总计不足 0.5 MiB 的 1280×800 WebP 解释性复原。它们不是原生工程中的另行拷贝：`release-files.json` 把与 Web/包 ZIP 相同的内容寻址字节送入 Android 与 iOS，Capacitor 同步后必须逐文件保持 SHA-256 一致。WebP 本身不含文字或水印；界面中的每次展示都在图旁配对“AI 辅助解释性复原”和中英不确定性说明。prompt、seed、工作流、模型/许可哈希及拒收记录只在 canonical provenance 中维护。rc57 的 8,116 字节 LPSN sidecar 同时保留。

移动构建通过 `.env.mobile` 将数据根设置为：

```text
./data/
```

客户端先从应用资源读取 `current.json`，再读取 `releases/<datasetVersion>/` 下的不可变数据。清单和分片仍经过现有 SHA-256 与版本一致性检查。Android、iOS 与 Web 不存在内容白名单或精简版数据注册表：三端都能访问 Core、24 个富内容资源包、7 个静态命名资源包、全局化石、全部 1,889 个 CAO2024 几何帧、44,175 条 CAO2024 观测/约束点和完整 COL 名录。七个命名包的 14 个分片覆盖此前残余的 363,160 个严格接受种；它们与 Web 使用相同的字节和校验和，并保持“命名覆盖不等于逐物种档案”的边界。

原生“数据”页直接显示安装包内置的文件数与体积，不再提供把同一数据重复写入 WebView Cache Storage 的按钮。当前 rc56 交互集继续包含 rc54 的完整 PBDB、CAO2024 与 COL26.8 字节，并把 24 份来源限定研究预设作为独立、带校验和的包文件纳入发布清单；七个命名包清单、14 个物种分片和共享来源账本也自动纳入。精确文件数与体积由构建时发布清单计算并显示，不写死到客户端代码。浏览器版对富内容包保留单包与全包缓存，对命名包提供逐包离线保存和 ZIP 下载，并继续提供“保存完整图谱”。

原生应用安装后即可在断网状态读取当前内置发布版，杀进程重启也不依赖缓存配额。升级应用会替换内置数据版本；在线外部 DOI、来源站点和用户主动打开的链接仍需要网络。Web 新数据版本发布后仍需重新保存对应版本，旧版本缓存可在“数据”页清除。

rc57 的 Archaea 命名包在原有 790 条 COL26.8 species shard 之外增加一份 8,116 字节的 LPSN 标识 sidecar。它与 Web 使用完全相同的路径、字节数和 SHA-256，经 `release-files.json` 自动进入 Android/iOS 资源；重复 ZIP 仍不进入原生包。原生测试会核对 790 条映射、manifest、sidecar 与 inventory 的字节和校验和，但不会把 LPSN 标识扩展解释为生态、基因组、菌株、化石、媒体、系统发育或专家评审档案。

Viruses 命名包同样通过资源包扩展发布固定 ICTV `MSL41.v1` / `VMR_MSL41.v1.20260729` 数据。17,552 个 COL26.8 病毒种全部精确映射，当前 ICTV 多出的 2 个种保留为 null COL ID，合计 17,554 个 ICTV 种与 19,285 条 VMR 分离物记录进入同一 `release-files.json`。Web、Android 与 iOS 不维护不同的病毒数据子集；原生包复制并校验与 Web/包 ZIP 相同的 sidecar 字节。

原生构建固定使用相对数据根 `./data/`；Web 发布根由 Vite 的 `/evo/` 基址决定。不要在 Java/Kotlin/Swift 代码中复制数据 URL。

## 准备环境

所有平台都需要 Node.js 22+：

```bash
npm ci
npm run mobile:doctor
```

Android 构建还需要 Android Studio 2025.2.1+、JDK 21 和 Android SDK 36。iOS 构建必须在 macOS 上使用 Xcode 26+；首次打开工程后在 Signing & Capabilities 中选择开发团队。

## 构建与同步

生成完整移动应用资源：

```bash
npm run mobile:build
```

构建后同时同步 Android 与 iOS 原生工程：

```bash
npm run mobile:sync
```

打开 Android Studio：

```bash
npm run mobile:android
```

在 macOS 上打开 Xcode：

```bash
npm run mobile:ios
```

每次修改共享前端、Capacitor 配置或插件依赖后都要重新运行 `mobile:sync`。该命令会在 Capacitor 同步后自动把 Windows 生成的 Swift Package 本地路径规范化为 macOS 可读格式。不要手改 `android/app/src/main/assets/public/` 或 `ios/App/App/public/`；这些目录是同步生成物并已被忽略。

## 原生交互

- 自定义深链使用 `evoatlas://open/<route>`，查询参数会保留到共享哈希路由。
- 指向 Evo Atlas 正式站并带 `#/...` 的通用 URL 会在应用内转换为同一路由。
- 其他 HTTP(S) 链接交给系统浏览器，避免在应用 WebView 内伪装第三方站点。
- Android 返回键先返回应用历史，再回到综合看板；已经位于综合看板时退出应用。
- 顶栏、底部导航和主内容使用安全区变量，适配刘海、圆角和 Home Indicator。
- 状态栏和启动屏使用深色主题；应用可访问后主动隐藏启动屏。

示例：

```text
evoatlas://open/home
evoatlas://open/stories?id=angiosperm-evidence-boundaries
evoatlas://open/explore?age=375&taxon=tiktaalik
```

## 图标与启动资源

源图位于 `assets/logo.svg`。需要重做平台资源时，使用固定版本的生成器：

```bash
npx @capacitor/assets@3.0.5 generate --android --ios --assetPath assets
```

生成后检查 Android `res/`、iOS `Assets.xcassets/` 和启动图；不要提交生成器额外创建、但项目不使用的顶层输出。

## 发布前检查

1. 运行 `npm run typecheck`、`npm test`、`npm run mobile:build` 和 Web 的完整 `npm run verify`。
2. 运行 `npm run mobile:sync`，确认 Capacitor 插件和原生依赖同步成功。
3. Android 分别在 API 24 与当前目标 API 的模拟器/真机检查首次教程、综合看板、返回键、深链和外链；关闭网络、杀进程后重开地图、名录、故事、化石、富内容包和七个命名资源包。
4. iOS 分别在 iPhone、带刘海设备和 iPad 检查安全区、旋转、深链和外链；关闭网络、杀进程后重开同一组完整数据视图，并抽查命名包记录数与来源入口。
5. 检查应用版本、Android `versionCode`、iOS `CURRENT_PROJECT_VERSION`、隐私说明、商店截图和签名配置。
6. 以发布模式生成 AAB/Archive，检查安装包不包含签名私钥、令牌、开发服务器地址或未授权第三方资产。

仓库只维护可复现的应用工程，不存放商店签名、App Store Connect/Play Console 凭据，也不声称未经真机与商店审核的版本已经发布。
