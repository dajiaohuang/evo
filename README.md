# Evo Atlas — 深时演化与证据图谱

> 一个面向 Web、Android 与 iOS 的双语深时演化探索器。它把地质时间、古地理重建、化石记录、生命树、物种名录和逐条科学证据放进同一套可追溯界面。

[在线打开综合看板](https://dajiaohuang.github.io/evo/#/home) · [数据方法](docs/data-methods.md) · [移动端构建](docs/mobile-apps.md) · [参与维护](CONTRIBUTING.md) · [隐私说明](PRIVACY.md)

Evo Atlas 默认直接进入综合看板：地图、时间轴、生命树和化石样本共享一个时间上下文；首次使用时只需选择“直接进入”或“3 分钟教程”。预设场景始终可见，详细研究工具默认收起。

## 当前状态

Evo Atlas 不是一个把生成文本包装成“完整百科”的项目。它同时维护两种覆盖范围，并在界面中明确区分：

- 名录覆盖：固定到 Catalogue of Life Base Release `COL26.8`。2,183,133 个严格接受种全部能沿真实父子链路由到唯一资源归属，另有 2,065,436 个异名、歧义异名和误用名可解析到接受名。
- 内容覆盖：24 个静态资源包中的证据档案、事件、故事、范围和参考文献。每个包单独声明 `generated-scaffold`、`structured`、`source-linked`、`curated-draft` 或 `published`，名录路由完整不等于内容已经完成。

当前开发数据快照为 `2026.08-static-v5-rc32`，Web/Android/iOS 客户端版本为 `0.19.0`。精确记录数、校验和和限制以 [`data/manifest.json`](data/manifest.json) 为准；科学内容变更见 [`data/CHANGELOG.md`](data/CHANGELOG.md)。

`rc32` 将“甲壳类、昆虫与多足类背景”提升为结构化主证据包：13 份双语档案分别呈现寒武纪有颚肢类与泛甲壳动物化石、介形虫和洞虾类系统基因组拓扑及其取样敏感性、泥盆纪弹尾类材料、有争议的 Rhyniognatha、节肢动物陆地化时钟、石炭纪翅化石、翅同源发育实验、1KITE 与真变态类化石。COL26.8 的 1,049,133 个接受种名只表示命名路由，不代表逐物种证据档案或统一系统树。

`rc31` 将“三叶虫与螯肢动物”提升为结构化主证据包：12 份双语档案覆盖早期三叶虫分子钟、三维躯体与附肢解剖、消化道内容物、球接子类拓扑、寒武纪干群螯肢动物、巨型板足鲎、剑尾类总群拓扑、有争议的志留纪陆地化记录，以及彼此冲突的现生蛛形纲分子树。COL26.8 的 104,126 个接受种名只表示命名路由，不代表逐物种化石、形态档案或系统发育共识。

`rc30` 将“软体动物、腕足动物与笔石”教学集合中的软体—腕足主体提升为结构化主证据包：13 份双语档案连接金伯拉虫、齿谜虫、毛饰刺甲虫、波杰塔贝和游盾虫等具名化石、两套边界不同的软体动物系统基因组矩阵、腹足类 Nodal 发育实验、章鱼基因组，以及小米克里纳虫、顾脱贝、海豆芽和玉案山贝证据。COL26.8 的 159,801 个接受种名只表示命名路由，不把争议化石提升为冠群、祖先或全球首现。

`rc29` 将“海绵与刺胞动物”从生成脚手架提升为结构化主证据包：14 份双语档案覆盖成岩甾烷、埃迪卡拉纪与寒武纪具名化石、现生基因组与系统发育样本、刺胞动物主要支系以及石珊瑚分子钟和光共生代用指标。档案明确区分观测、分类归属、系统位置、模型年龄和生态推断；COL26.8 的 30,521 个严格接受种仍只承诺命名路由，不冒充逐物种证据档案。

## 用户能做什么

### 综合看板与古地理

- 从寒武纪海洋、K–Pg 界线、侏罗纪辐射和奇蹄目证据包等预设场景一键开始。
- 在 0–1,800 Ma 范围浏览 1,889 个校验和寻址的 CAO2024 v2.4 重建帧。
- 独立开关六种不混淆语义的图层：海岸线、动态拓扑板块、分类板块边界、大陆地壳范围、陆洋过渡边界和刚性静态分区。
- 各图层按自身时间采样选择最近帧，不插值、不越界钳制；较密帧改善导航连续性，但不会增加原模型的地质分辨率。
- 古地理不包含古海拔、古水深或地形起伏，也不假定与 PBDB 古坐标使用同一重建模型。

### 物种、生命树与内容包

- 搜索完整的 `COL26.8` 接受种及解析名称，并在内部页面查看固定版本的祖先链和直接子级。
- 查看 366 个策展导航实体、24 个资源包及其实际科学成熟度。
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
- Android/iOS 安装包内置同一客户端壳，科学数据从公开的版本化 GitHub Pages 数据端点按需读取并校验；首次读取尚未保存的数据需要网络。

## Web、Android 与 iOS

三端共享 `src/` 中的 React/TypeScript 客户端和同一个数据协议，不复制科学内容。

| 平台 | 工程 | 运行形态 | 当前边界 |
| --- | --- | --- | --- |
| Web / PWA | Vite + GitHub Pages | `/evo/` 下的静态应用、Service Worker 与按需数据缓存 | 可直接使用和安装 |
| Android | `android/` + Capacitor 8 | API 24+ 原生壳、系统返回键、状态栏、启动资源、外链和 `evoatlas://` 深链 | 工程已生成；商店签名和发布凭据不入库 |
| iOS / iPadOS | `ios/` + Capacitor 8 / Swift Package Manager | iOS 15+ WKWebView 原生壳、安全区、状态栏、启动资源、外链和 `evoatlas://` 深链 | 工程已生成；必须在 macOS + Xcode 完成签名、模拟器与真机验证 |

移动端不是把线上网页作为远程首页打开的空壳：HTML、CSS、JavaScript 与图标进入原生包；大体积、经版本化的科学数据保持远程和按需加载，因此客户端升级与内容数据修订可以解耦。Android 与 iOS 使用和 Web 完全相同的路由、资源包注册表、化石分片、CAO2024 地图帧与 COL 名录；“数据”页还可一次保存当前版本的全部交互数据，供原生应用离线读取。详细工作流见 [`docs/mobile-apps.md`](docs/mobile-apps.md)。

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

`verify` 包含 ESLint、Vitest、注册表与资源包投影一致性、数据/主张/翻译/来源/审查门禁、TypeScript、生产 PWA 构建、体积预算、静态页面 smoke test、三浏览器 Playwright 路由和 axe 可访问性检查。

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

`npm run mobile:build` 只生成 `dist-mobile/`；`mobile:sync` 再把该壳和插件配置复制到 `android/` 与 `ios/`。不要手改原生工程中被 `.gitignore` 排除的 Web 产物。应用 ID 为 `io.github.dajiaohuang.evoatlas`，自定义深链示例为：

安装后的“数据”页提供两级离线能力：单个/全部资源包下载适合日常使用；“保存完整图谱”会保存 Core、全部资源包、全局化石、全部 CAO2024 帧和完整 COL 名录。当前 rc32 的完整交互数据体积与文件数以版本化发布清单为准；以后版本会按发布清单显示实际体积。重复的 ZIP 导出包不计入离线交互集。

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
- 当前跨图谱 PBDB 数据是 13,600 行非随机、有界的时期分层样本，不能用记录数推断真实丰富度、缺失或全球首现。奇蹄目另有 13,210 行完整分页的固定查询；“完整”仅指该次查询返回的所有页。
- 生命树总览是教学导航本体，不是唯一系统发育假说。包内拓扑、分化时间、形态和地层出现必须分别标注。
- first/last appearance 受采样控制，不等于精确起源/灭绝；分子钟后验不等于化石出现。
- `automatedReviewStatus: passed` 只说明工程门禁通过，不等于维护者科学审查，更不等于外部专家同行评议。
- 所有旧版展示范围在没有 claim-linked 文献复核前继续标为 `legacy-display` / `not-reviewed`。

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

Evo Atlas is a bilingual, static-first deep-time evidence explorer for Web, Android and iOS. The dashboard synchronizes geological time, six distinct CAO2024 reconstruction layers, fossil samples, a 366-entity navigation tree and claim-level evidence. The rc32 Crustaceans and Insects package adds thirteen primary-evidence dossiers while keeping fossil anatomy, sampled phylogenomic topology, molecular clocks, developmental experiments and disputed calibrations distinct. The pinned COL26.8 registry routes all 2,183,133 strictly accepted species to one resource owner, while package maturity remains separately disclosed. Android and iOS are Capacitor 8 projects sharing the same React client; the native shell is bundled, and the complete offline manifest retains Core, every package, all fossils, all CAO2024 frames and the full COL registry. No account, analytics SDK, private API key, database or application server is required.
