import { createHash } from 'node:crypto'
import { copyFileSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import { dirname } from 'node:path'

const documents = {
  'README.md': `# Evo Atlas — 古地图与生命树

[打开应用](https://evo-lovat.vercel.app/evo/) · [项目介绍](https://dajiaohuang.github.io/evo/zh/) · [当前定位与上传范围](docs/project-scope.md) · [目录说明](docs/repository-structure.md)

Evo Atlas 是双语深时探索应用。以全屏古地图和物种树为入口，切换地质年代、浏览来源分类、打开 Wikipedia 原文链接，并查看与所选类群可靠关联的化石证据。模型重建、采样记录、来源分类和系统发育假说保留各自的含义与局限。

## 当前交付

- **Vercel** 提供正式交互应用，路径为 \`/evo/\`。现行生产产物由校验和固定的基包和增量包组成；[部署说明](docs/vercel-deployment.md)记录发布边界。
- **GitHub Pages** 只提供中英文项目介绍和应用入口；不再部署交互应用、静态阅读站、科学分片或旧正文。
- **Wikipedia** 只交付条目链接与匹配依据，不抓取或转载摘要。候选匹配、未确认与可靠映射分别显示，见[链接数据说明](docs/wikipedia-col.md)。
- **节点地图** 按类群选择加载有来源、可靠分类绑定和兼容重建坐标的化石记录。无映射保持未知；记录数不代表真实多样性，见[查询契约](docs/node-map-query.md)。
- **本地创作** 通过受控 Turso 接口保存。旧正文、专题和导读已暂停公开交付；保存草稿不代表发布。原生工程保留，移动版本须单独验证。

## 开发与验证

使用 Node.js 22（见 \`.nvmrc\`）：

~~~powershell
rtk npm ci
rtk npm run dev
rtk npm run typecheck
rtk npm test
~~~

只构建和验证介绍页，不读取科学源库：

~~~powershell
rtk npm run pages:build
rtk npm run pages:check
rtk npm run pages:test
~~~

应用完整构建使用 \`rtk npm run build\`；它仍依赖当前冻结科学输入，不等于发布本地 Turso 草稿。修改应用、来源导入或原生工程时，按[贡献说明](CONTRIBUTING.md)运行对应检查。

## 维护入口

- [当前产品、目录与上传范围](docs/project-scope.md)、[前端架构](docs/frontend-architecture.md)、[发布检查](docs/release-checklist.md)。
- [节点内容标准](docs/node-presentation-standard.md)、[创作模板](docs/templates/node-presentation.md)、[本地 Turso 创作](docs/local-turso-authoring.md)。
- [数据方法](docs/data-methods.md)、[来源与许可证](DATA_LICENSES.md)、[第三方声明](THIRD_PARTY_NOTICES.md)、[隐私说明](PRIVACY.md)。
- [历史归档](archive/README.md)保留旧设计、迁移与审计。它们不代表当前在线功能；归档目录禁止进入网站产物。

软件采用 [MIT](LICENSE)；原创内容与第三方资料按 [内容许可](CONTENT_LICENSE.md) 和各自来源条款使用。引用见 [CITATION.cff](CITATION.cff)。

## English

Evo Atlas explores reconstructed paleogeography, source classification and fossil evidence. The application lives on [Vercel](https://evo-lovat.vercel.app/evo/); GitHub Pages is an introduction and entry point only. Wikipedia delivery contains original-article links, not summaries. Earlier node accounts and topic readers are retired from public delivery. Local Turso drafts, scientific source history and native projects are retained with their own validation and publication boundaries.
`,
  'ROADMAP.md': `# Evo Atlas roadmap

Current product and delivery authority: [project scope](docs/project-scope.md).

1. Maintain the full-screen paleomap, geological-time controls and tree navigation without losing camera or selection context.
2. Improve reliable Wikipedia link mappings; preserve candidates and unknowns. Do not resume summary acquisition.
3. Extend source-bound node-map evidence only with verified classification and compatible model/frame coordinates. Keep sampling limits explicit.
4. Keep GitHub Pages as a lightweight bilingual introduction leading to Vercel.
5. Retain local authoring and scientific history; any return of original prose or a native release requires its own complete implementation and verification.

Archived reader, migration and platform plans in [archive](archive/README.md) are historical proposals, not current release commitments.
`,
  'CLAUDE.md': `# Evo repository guidance

Read [AGENTS.md](AGENTS.md) and [current project scope](docs/project-scope.md) first. Prefix shell commands with \`rtk\`.

- The production application is hosted on Vercel under \`/evo/\`. GitHub Pages publishes only the introduction built from \`pages/\`.
- Current interactions center on the paleomap and species tree. Wikipedia supplies original-article links only. Original node prose, stories and guided reading are paused publicly.
- Use [local Turso authoring](docs/local-turso-authoring.md) for current scientific drafts. Existing \`content/\` and \`data/\` retain source bindings and build/history inputs; do not hand-edit generated projections.
- Preserve scientific IDs, uncertainty, coordinate/model distinctions, source versions and checksum contracts. Missing mappings are not biological absence.
- Keep source imports, queries and reconstruction work separate from website publication. Do not upload databases, credentials, local workspaces, caches or archives into application artifacts.
- Preserve unrelated changes. Stage exact requested files, inspect the staged diff and run checks appropriate to the change.

Commands: \`rtk npm run typecheck\`, \`rtk npm test\`, \`rtk npm run verify:pages\`. Full application checks and native checks have separate scopes; see [contributing](CONTRIBUTING.md).
`,
  'CONTRIBUTING.md': `# Contributing to Evo Atlas

Follow the [current project scope](docs/project-scope.md). The interactive application is on Vercel. GitHub Pages is an introduction, not a second application or reading collection.

## Choose a contribution

- Application changes: preserve map/time/tree state, keyboard and touch access, explicit loading and unknown states.
- Wikipedia links: retain exact identity evidence, candidates, source versions and manifest integrity. Do not request or publish summaries.
- Fossil maps: retain recorded IDs, age intervals, classification source and exact reconstruction model/frame. Never substitute modern coordinates for missing reconstructed positions.
- Scientific drafts: use [local Turso authoring](docs/local-turso-authoring.md), the [node standard](docs/node-presentation-standard.md) and [template](docs/templates/node-presentation.md). Draft acceptance does not publish prose.
- Source or rights corrections: provide the affected identifier, source version, page or record, correction and supporting source. Do not attach material without redistribution rights.

## Checks

Use Node.js 22, \`rtk npm ci\`, then the checks matching the change:

~~~powershell
rtk npm run typecheck
rtk npm test
rtk npm run verify:pages
~~~

\`verify:pages\` checks the independent introduction and its real browser flows. \`verify:web\` checks the full interactive client and existing frozen data; it does not publish Turso drafts. \`test:authoring\` retains importer replay checks. Native workflows are manual and need native validation; passing Web checks is not native acceptance.

Historical reader tests and reports live in \`archive/\` and are excluded from routine checks and site output. Existing data and content files still used by generators remain dependencies; do not delete them based only on a retired navigation entry. Preserve original source bytes and hashes. Never overwrite another contributor's work.

## Publication

Follow [upload boundaries](docs/project-scope.md) and [Vercel deployment](docs/vercel-deployment.md). Only \`dist-pages/\` enters Pages. Vercel source upload is constrained by \`.vercelignore\`; runtime archives must be verified and bound to the actual source revision. Do not publish local databases, credentials, logs, research workspaces or the repository archive.

This reorganization does not remove old GitHub Releases or Vercel deployments. Remote cleanup beyond current Git files and website delivery needs separate authorization.
`,
  'PRIVACY.md': `# Evo Atlas 隐私说明

更新：2026-10-30。

公开探索应用不要求账号，不含广告或分析 SDK。浏览器偏好、缓存、笔记、导入文件和查询历史由设备本地存储维护；本地研究文件不因打开地图而上传给项目维护者。

## 网站与网络

- 正式应用从 \`evo-lovat.vercel.app/evo/\` 读取应用与公开科学数据。
- \`dajiaohuang.github.io/evo/\` 只提供项目介绍和 Vercel 入口。
- Wikipedia 对应表由站内数据接口提供；用户点击原文链接时前往 Wikipedia。当前不获取或转载摘要正文。
- DOI、论文、数据来源和其他外部链接由用户主动打开。已配置的可选查询服务按其实际端点处理请求。

托管和第三方服务可能记录 IP、时间、User-Agent 等常规请求日志，并适用各自隐私政策。项目不出售个人信息，不把本地笔记或导入文件作为全局科学数据发布。

## 本地创作与原生工程

本地 Turso 创作服务仅监听回环地址，用于操作者自己的草稿与来源；它不是公开账号或云端用户数据库。凭据、数据库和本地回执不进入 Git 或网站。

原生工程保留现有权限声明。Web 更新不代表新原生安装包已发布。现有移动工程不要求位置、相机、麦克风、通讯录、照片、健康或广告跟踪权限；网络用于读取公开数据及主动访问来源。

清除站点存储或卸载应用可能移除本地内容，请先导出需要保留的笔记和文件。隐私问题可通过 [GitHub Issues](https://github.com/dajiaohuang/evo/issues)反馈，避免附上敏感信息或未公开研究材料。

English: the Vercel application and GitHub Pages introduction require no account and include no advertising or analytics SDK. Reader notes and imports stay on the device. Wikipedia delivery contains links only. The local Turso authoring database and its credentials are not website payloads.
`,
  'docs/frontend-architecture.md': `# Current frontend architecture

The [project scope](project-scope.md) and \`config/site.json\` define current delivery.

## Public application

React, TypeScript and Vite produce a hash-routed application under \`/evo/\` on Vercel. The full-screen paleomap and species-tree views are its primary entry points. Time, map camera, projection and selected material remain distinct state. Node-map requests require reliable source classification and exact model/frame provenance; see [node-map query](node-map-query.md).

Wikipedia windows show original-article links and matching status, not summaries or mirrored articles. Current node, story and guided-reading prose is paused publicly. Source and method information and applicable research tools remain within the dashboard rather than becoming duplicate sites. Older routes may show a retirement notice; they are not evidence that the former reader is available.

The application still has frozen scientific build inputs and release-pinned static runtime manifests. A closed screen is not proof that its data has no build or source dependency. Large scientific inputs do not belong in the Vite module graph or PWA precache. Hashes identify stored bytes; model results, observations and classification hypotheses retain separate meanings.

## GitHub Pages

\`pages/\` contains bilingual introduction copy, template, style and a narrowly scoped legacy-worker update helper. \`scripts/build-pages.mjs\` uses Node built-ins only and outputs \`dist-pages/\`. It never imports application code or scientific generators. The checker enforces an exact file allowlist and 256 KiB budget. The deployment workflow uploads only that directory. Unknown old reading URLs return the introduction's 404 with the Vercel entry.

## Native and local authoring

Android and iOS retain Capacitor projects and their explicit platform adapters. Their release status and offline-data scope require separate native verification. Web work does not automatically produce or certify native installations.

Current scientific drafts are saved through the local embedded Turso service; see [local authoring](local-turso-authoring.md). File-based source content and the earlier database platform remain preserved migration/build inputs. There is no automatic publication of local drafts, and historical database publication proposals must not be described as deployed services.

## Deployment

Vercel source upload contains only its allowlisted deployment configuration and verified-artifact unpacker. The pinned base and overlay are both required until a verified replacement artifact exists. GitHub Pages and the Wikipedia data branch are independent publication channels. See [deployment](vercel-deployment.md) and [repository structure](repository-structure.md).
`,
  'docs/wikipedia-tree.md': `# Wikipedia tree links

Current policy: **links only**. The tree opens a window with the original Wikipedia article link, language and matching status. It does not fetch, display or republish article summaries. See [full catalogue link pipeline](wikipedia-col.md).

\`public/wikipedia/mapping.json\` records frozen mappings for the represented navigation and scoped hypothesis names. It keeps source identity, canonical URL, page IDs and matching evidence. Names, homonyms, candidates and project-only nodes remain distinguishable; matching does not reconcile competing taxonomies.

Original node accounts, topic and guided-reading pages are paused publicly. Their source files, local authoring database and drafts remain retained. Publication must not copy \`public/nodes/\`, source corpora, local research material or repository archives into the new edition.

The ordinary scientific runtime and model identities remain release-pinned. UI-only overlays reuse verified scientific data; [Vercel deployment](vercel-deployment.md) requires exact archive hashes and the real source commit. Wikipedia link data is refreshed independently on its data branch, with atomic manifest and shard updates. GitHub Pages contains only the [application introduction](project-scope.md).
`,
  'docs/release-checklist.md': `# Current release checks

1. Confirm the current [product scope](project-scope.md), target channel, exact source commit and dirty-file ownership. Stage only intended files.
2. For Pages, run \`rtk npm run verify:pages\`. Its artifact must contain only the allowlisted introduction files, at most 256 KiB, with working Vercel entries and old-path 404 behavior.
3. For the application, run type and relevant interaction/data checks. Do not rebuild or publish the authoring corpus for an introduction-only change. Preserve the actual live base/overlay descriptor until a verified replacement exists.
4. Check publication inputs: no credentials, databases, local receipts, source corpora, old node accounts, topic readers or repository archives in site output. Check hashes, stored byte counts and real dataset/source identities.
5. After publication, read the actual public URL, identity files and changed routes. A successful upload is not hosted acceptance. GitHub Releases and old Vercel deployments are retained under this reorganization's scope.
`,
}

const manifest = JSON.parse(readFileSync('archive/manifest.json', 'utf8'))
for (const [path, text] of Object.entries(documents)) {
  if (!manifest.files.some(file => file.from === path)) {
    const to = `archive/${path}`
    const original = readFileSync(path)
    mkdirSync(dirname(to), { recursive: true })
    copyFileSync(path, to)
    const sha256 = createHash('sha256').update(original).digest('hex')
    manifest.files.push({ from: path, to, sha256, originalSha256: sha256 })
  }
  writeFileSync(path, text)
}
writeFileSync('archive/manifest.json', JSON.stringify(manifest, null, 2) + '\n')
console.log(`Unified ${Object.keys(documents).length} current documents; previous versions archived.`)
