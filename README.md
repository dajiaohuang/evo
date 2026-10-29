# Evo Atlas — 古地图与生命树

[打开应用](https://evo-lovat.vercel.app/evo/) · [项目介绍](https://dajiaohuang.github.io/evo/zh/) · [当前定位与上传范围](docs/project-scope.md) · [目录说明](docs/repository-structure.md)

Evo Atlas 是双语深时探索应用。以全屏古地图和物种树为入口，切换地质年代、浏览来源分类、打开 Wikipedia 原文链接，并查看与所选类群可靠关联的化石证据。模型重建、采样记录、来源分类和系统发育假说保留各自的含义与局限。

## 当前交付

- **Vercel** 提供正式交互应用，路径为 `/evo/`。现行生产产物由校验和固定的基包和增量包组成；[部署说明](docs/vercel-deployment.md)记录发布边界。
- **GitHub Pages** 只提供中英文项目介绍和应用入口；不再部署交互应用、静态阅读站、科学分片或旧正文。
- **Wikipedia** 只交付条目链接与匹配依据，不抓取或转载摘要。候选匹配、未确认与可靠映射分别显示，见[链接数据说明](docs/wikipedia-col.md)。
- **节点地图** 按类群选择加载有来源、可靠分类绑定和兼容重建坐标的化石记录。无映射保持未知；记录数不代表真实多样性，见[查询契约](docs/node-map-query.md)。
- **本地创作** 通过受控 Turso 接口保存。旧正文、专题和导读已暂停公开交付；保存草稿不代表发布。原生工程保留，移动版本须单独验证。

## 开发与验证

使用 Node.js 22（见 `.nvmrc`）：

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

应用完整构建使用 `rtk npm run build`；它仍依赖当前冻结科学输入，不等于发布本地 Turso 草稿。修改应用、来源导入或原生工程时，按[贡献说明](CONTRIBUTING.md)运行对应检查。

## 维护入口

- [当前产品、目录与上传范围](docs/project-scope.md)、[前端架构](docs/frontend-architecture.md)、[发布检查](docs/release-checklist.md)。
- [节点内容标准](docs/node-presentation-standard.md)、[创作模板](docs/templates/node-presentation.md)、[本地 Turso 创作](docs/local-turso-authoring.md)。
- [数据方法](docs/data-methods.md)、[来源与许可证](DATA_LICENSES.md)、[第三方声明](THIRD_PARTY_NOTICES.md)、[隐私说明](PRIVACY.md)。
- [历史归档](archive/README.md)保留旧设计、迁移与审计。它们不代表当前在线功能；归档目录禁止进入网站产物。

软件采用 [MIT](LICENSE)；原创内容与第三方资料按 [内容许可](CONTENT_LICENSE.md) 和各自来源条款使用。引用见 [CITATION.cff](CITATION.cff)。

## English

Evo Atlas explores reconstructed paleogeography, source classification and fossil evidence. The application lives on [Vercel](https://evo-lovat.vercel.app/evo/); GitHub Pages is an introduction and entry point only. Wikipedia delivery contains original-article links, not summaries. Earlier node accounts and topic readers are retired from public delivery. Local Turso drafts, scientific source history and native projects are retained with their own validation and publication boundaries.
