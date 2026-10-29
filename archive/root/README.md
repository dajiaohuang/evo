# Evo Atlas — 深时演化与证据图谱

> 一个面向 Web、Android 与 iOS 的双语深时演化探索器。它把地质时间、古地理重建、化石记录、生命树、物种名录和逐条科学证据放进同一套可追溯界面。

[在线阅读静态图谱](https://dajiaohuang.github.io/evo/zh/) · [更新记录](../../data/CHANGELOG.md) · [数据方法](../../docs/data-methods.md) · [移动端构建](../../docs/mobile-apps.md) · [参与维护](CONTRIBUTING.md) · [隐私说明](PRIVACY.md)

GitHub Pages 提供无需 JavaScript 的中英文静态阅读版，包含实体、事件、故事、证据主张、方法和来源。完整交互功能保留在 Android/iOS 及可独立构建的 Web 客户端中：地图、时间轴、生命树和化石样本共享时间上下文。下文的交互功能说明适用于完整客户端。

名录版本变化可在 [中英文对比报告](../docs/catalogue-release-comparison.md) 中查看：真实固定快照 COL26.8 → COL26.9 的逐记录差异、来源、换号与未解决对应关系均可下载和离线复现。应用当前仍使用 COL26.8 的资源归属与来源映射。

[全面工程审计记录](../docs/comprehensive-audit-2026-09-22.md) 记录数据完整性、离线恢复、并发取消、故事编辑器、可访问性与后端边界的修复、测试证据和剩余限制。

[科学性与计算性能审计](../docs/scientific-performance-audit-2026-09-22.md) 记录全库校验、文献标识修正、年代与网格数值核验、查询与 SQL 修复、性能对照，以及已关闭 PR 的逐记录数据核对。

## 当前状态

Evo Atlas 不是一个把生成文本包装成“完整百科”的项目。它同时维护两种覆盖范围，并在界面中明确区分：

- 名录覆盖：固定到 Catalogue of Life Base Release `COL26.8`。2,183,133 个严格接受种全部能沿真实父子链路由到唯一资源归属，另有 2,065,436 个异名、歧义异名和误用名可解析到接受名。24 个富内容包直接拥有 1,819,973 种；余下 363,160 种由 7 个静态命名资源包提供。完整目录和这些资源通过 Web/静态数据资源提供；Android/iOS App 永远只打包 `native-core` 核心内容，不内置完整名录或全量数据包。第 32 个 `other-eukaryotes` 分区在本固定发布版中为零记录边界，不伪造空内容。
- 内容覆盖：24 个静态资源包中的证据档案、事件、故事、范围和参考文献。各条记录保留来源、引用定位、适用范围和内容缺口。

当前发布的数据规模、版本号和校验结果以 [data/manifest.json](../../data/manifest.json) 为准。完整版本更新记录统一维护在 [data/CHANGELOG.md](../../data/CHANGELOG.md)；README 不再重复逐版本说明。

Current release versions, counts, and checksums are authoritative in [data/manifest.json](../../data/manifest.json). The complete release history lives in [data/CHANGELOG.md](../../data/CHANGELOG.md); per-release notes are no longer duplicated here.

## 用户能做什么

### 从问题开始阅读

- 默认首页是面向具备基本生物分类常识的读者的科普主线；首批五篇双语正文连接鱼鳍与四肢、开花植物年代、奇蹄目分支、黑猩猩栖地与普通狨育幼。
- 物种详情面向已有一定知识基础的爱好者，先呈现身体、生活与研究发现，数据标识和逐条依据可展开查看。当前已有的物种正文保留；本轮没有重写全部名录条目。
- 主线与静态阅读版共享正文和参考文献，移动核心版只展示已打包类群的章节。写作与读者定位见 [内容设计说明](../../docs/reader-content-design.md)。
- 每个节点的页面、卡片、地图气泡与阅读窗统一采用 [节点制作标准](../../docs/node-presentation-standard.md) 和 [制作模板](../../docs/templates/node-presentation.md)；既有内容逐步按此迁移。
- 地图与研究工具从“探索”和“工作区”进入；带地图状态参数的旧首页链接继续打开看板。

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
- 查看策展导航实体、24 个富内容资源包及其来源和资料局限；当前数量以数据清单为准。
- 逐包访问 7 个静态命名资源包：Web 可下载 ZIP 或显式保存离线副本。Android/iOS 使用 `native-core` 核心内容包。
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

Android/iOS 和交互式 Web 共享 `src/` 中的客户端与数据协议。GitHub Pages 部署交互式地图工作区；独立静态文档仍可从同一 canonical 内容导出；Android/iOS 从完整发布清单生成本地只读副本，科学源文件不因 Pages 缩减而删除。

| 平台 | 工程 | 运行形态 | 当前边界 |
| --- | --- | --- | --- |
| GitHub Pages | `npm run build` → `dist/` | 交互式地图工作区、双语知识页面、Service Worker 与按需数据 | `deploy.yml` 在同一提交 CI 成功后重新构建并上传 `dist/` |
| Interactive Web / PWA | `npm run build` → `dist/` | 完整客户端、Service Worker 与按需数据缓存 | 可独立托管；也是当前 GitHub Pages 部署产物 |
| Vercel | 已校验的生产产物 → `vercel deploy --prod` | 完整交互客户端、双语阅读页与按需数据 | [部署说明](../../docs/vercel-deployment.md)；云端校验并解包，避免重复生成科学数据 |
| Android | `android/` + Capacitor 8 | API 24+，核心离线资料、系统返回键和深链 | 手动触发 CI 生成调试 APK；商店 AAB 签名与发布另行配置 |
| iOS / iPadOS | `ios/` + Capacitor 8 / Swift Package Manager | iOS 15+，核心离线资料、安全区和深链 | 手动触发 macOS CI 测试模拟器应用并生成未签名设备 Archive；安装到真机需 Apple 签名 |

移动端不是把线上网页作为远程首页打开的空壳：HTML、CSS、JavaScript、图标和当前不可变科学数据发布版都进入原生包。Android 与 iOS 使用和 Web 完全相同的路由、资源包注册表、化石分片、CAO2024 地图帧与 COL 名录；“数据”页直接报告内置文件数和体积，不会再把相同数据重复写入 WebView 缓存。详细工作流见 [`docs/mobile-apps.md`](../../docs/mobile-apps.md)。

## 快速开始

使用 Node.js 22.x，与 CI 配置一致。

```bash
npm ci
npx playwright install chromium firefox webkit
npm run dev
```

开发地址为 `http://localhost:5173/evo/`。

静态站点独立运行 `npm run verify:pages`，检查链接、64 MiB 预算和禁用 JavaScript 的三浏览器阅读流程。独立导出使用 `npm run pages:build` → `dist-pages/`；当前 Pages 部署上传 `npm run build` 的 `dist/` 地图工作区。

阅读首页提供三条证据故事路线和 12 个纪的年代导航。10 类目录支持中文、英文、学名与编号混合搜索，以及名称排序；复制带 `q` / `sort` 的地址即可分享结果，语言切换保留筛选条件。增强脚本只搜索当前 HTML，不下载完整登记册。完整应用搜索支持方向键、Enter、Esc、中文输入法与失败重试。设计和验证边界见 [`docs/discovery-experience.md`](../docs/discovery-experience.md)。

运行完整发布契约：

```bash
npm run verify
```

`verify` 包含 ESLint、基础 Vitest、注册表与资源包投影一致性、数据/主张/翻译/来源校验、TypeScript、生产 PWA 构建、体积预算、静态页面 smoke test、移动数据构建，以及实际页面调用和可访问性的浏览器测试。

来源导入器的重放测试通过 `npm run test:authoring` 手动运行；巴西植物原始来源由保留的导入器管理，正文和证据在 canonical 节点中编辑并通过 `rtk npm run content:build` 投影。物种资料队列用于内容维护，不进入应用运行时；修改其输入时运行 `npm run data:species-queue:build` 和 `npm run data:species-queue:check`。这两项全量重放不进入日常 CI，常规数据校验仍检查实际文件和来源完整性。

`npm run source:size` 手动报告源资料体积；发布限制由 Web、Pages 和移动产物的实际体积检查执行。

完整 Web 资料只保留当前一版，并报告实际体积；Pages 阅读版、预览产物、应用代码和静态正文分别执行自己的交付预算。

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
├── packages/              # 静态资源包投影
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

节点身份、正文、证据和投影的存储规则见 [`docs/content-storage.md`](../../docs/content-storage.md)。

## 正确性与真实性边界

- Catalogue of Life 的“全集”只指固定发布版中严格接受种的命名学覆盖；它继承上游覆盖范围，也不代表每个物种都有 Evo Atlas 档案。
- 当前跨图谱 PBDB 数据是 13,600 行非随机、有界的时期分层样本，不能用记录数推断真实丰富度、缺失或全球首现。24 个包另有各自的定向 `base_id` 查询账本；“完整”仅指记录时该项查询返回的所有页，子查询之间允许重叠，141 个不满足名称、等级、父链、概念或固定边界条件的目标不会被伪装成零记录。
- 生命树总览是教学导航本体，不是唯一系统发育假说。包内拓扑、分化时间、形态和地层出现必须分别标注。
- first/last appearance 受采样控制，不等于精确起源/灭绝；分子钟后验不等于化石出现。
- canonical 范围账本已无 `legacy-display`：有足够证据的记录标明其真实样本、地层、区域或模型边界，证据不足的端点明确 withheld；两者都不冒充全球 FAD/LAD。

## 维护资源包

科学内容从 claim 开始，而不是先写故事。新增或修订资源包时：

1. 在共享 canonical 文件中确认实体概念、来源、范围和主张；不要直接手改生成投影。
2. 每条可见科学陈述连接到合适角色的一手研究或系统综述，并提供页码、图版、表格或章节 locator。
3. 明确标本观察、功能推断、系统模型、生态解释和全球范围之间的边界。
4. 运行投影、清单和完整 `npm run verify`，检查来源定位、引用闭合与实际页面调用。

详见 [`DATA_PACKAGE_AUTHORING.md`](../../DATA_PACKAGE_AUTHORING.md) 和 [`物种档案内容标准`](../../docs/species-dossier-standard.md)。

## 参与贡献

- 事实或证据纠错：提供实体/claim ID、数据集版本、页面 URL、建议修改和直接支持它的来源。
- 资源包：提交一个小而完整、可审查的纵切面，不要用广泛生成文本替代证据。
- 应用：Web、Android 和 iOS 尽量共享实现；平台差异放在 `src/platform/` 或对应原生工程。
- 翻译：保留学名、ID、不确定性和证据强度，不把“可能”翻译成“确定”。

完整说明见 [`CONTRIBUTING.md`](CONTRIBUTING.md)。

## 隐私、许可证与引用

Evo Atlas 没有账号、广告、分析 SDK 或应用后端。笔记、收藏、导入文件和查询历史保存在设备本地；应用只为读取公开科学数据、外部引用和用户主动打开的链接发起网络请求。详见 [`PRIVACY.md`](PRIVACY.md)。

- 软件：[`MIT`](../../LICENSE)
- 原创策展和说明内容：通常为 [`CC BY 4.0`](../../CONTENT_LICENSE.md)
- 科学数据和第三方材料：遵循各自条款，见 [`DATA_LICENSES.md`](../../DATA_LICENSES.md)、[`THIRD_PARTY_NOTICES.md`](../../THIRD_PARTY_NOTICES.md) 和 [`MEDIA_ATTRIBUTION.json`](../../MEDIA_ATTRIBUTION.json)
- 引用：使用 [`CITATION.cff`](../../CITATION.cff)，同时引用所依赖的具体数据快照、PBDB/CoL/ICS/CAO2024 和科学论文

## English summary

Evo Atlas is a bilingual, static-first deep-time evidence explorer for Web, Android and iOS. It synchronizes geological time, CAO2024 geometry and typed observation layers, PaleoDEM surfaces, bounded fossil samples, a curated navigation tree and claim-level evidence without presenting model output as direct observation. The pinned COL26.8 registry routes every strictly accepted species to one resource owner; that is complete release-scoped nomenclature, not a claim that every species has a prose dossier, media, fossils or ecology. Android and iOS share the Capacitor client and ship only the selected `native-core` content; they never bundle the full catalogue or full-data packages. The complete catalogue and other static resources stay in the Web delivery, while the standalone static reading export remains separate. No account, analytics SDK, private API key, database or application server is required. Current versions, counts and checksums are recorded in [`data/manifest.json`](../../data/manifest.json), and all release notes are kept in [`data/CHANGELOG.md`](../../data/CHANGELOG.md).

GitHub Pages deploys the interactive map workspace from `dist/`, rebuilt by `.github/workflows/deploy.yml` after successful CI for the exact main revision. The supported standalone static export (`npm run pages:build` → `dist-pages/`) retains bilingual documents, 13 lightweight maps and source metadata without shipping the interactive runtime or scientific shards; `npm run verify:pages` checks that export. Manually triggered Android CI produces a debug APK; manually triggered iOS CI runs hosted simulator tests and produces an unsigned device archive requiring Apple signing for installation. Both package the core offline edition. Canonical scientific data is preserved.
