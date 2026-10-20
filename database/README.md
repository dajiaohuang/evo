# Evo 数据平台

PostgreSQL 保存身份、分类、修订、书目、依赖索引和发布事务；私有 Blob 保存完整且不可变的正文、证据和来源。目标结构、创作流程、切换条件见 [数据与创作方案](../docs/evo-data-platform-v2.md)。页面及完整依赖的新结构、发布约束和 worker 草稿事务见 [页面依赖模型](../docs/page-dependency-model.md)。网页审核台及生产读取切换尚未实施。

本地数据库改造、完整节点基线与不依赖 Git 的日常草稿操作，使用 [本地数据库创作](../docs/local-database-authoring.md)。日常流程是 `checkout → 编辑 document → submit → receipt/read`；下面的 Git 导出和云上传属于一次性历史迁移工具。

## 已连接资源

- Vercel 项目：`evo` / `prj_RU1GF7YN46JN7w9Qg3qzfHZZ5MI1`。
- Neon：`evo-authoring-v2` / `dry-pine-48288359`，新加坡，`free_v3`。
- 私有 Blob：`evo-source-v2` / `store_xxrtIBwYQAds7u6s`，新加坡。
- 当前只连接 development / preview。密钥来自忽略的 `.env.local`；程序拒绝未知 Neon 项目和池化迁移连接。

## 历史数据转写顺序

要求 Node 22、仓库根目录已安装的应用依赖与已链接的 Vercel 项目。页面索引工具复用仓库规范内容 codec，不能只复制 database 子目录运行。先检查现有资源，不重复创建数据库。

```powershell
rtk proxy npm ci --prefix database --ignore-scripts --no-audit --no-fund
rtk proxy vercel project inspect --non-interactive
rtk proxy vercel env pull .env.local --yes --environment=development --non-interactive
rtk proxy node --env-file=.env.local database/migrate.mjs
```

只从确切的、已推送的 Git SHA 转写。输出位于 `.git/platform-v2/export/<SHA>/`，不写规范源文件；第一次运行要求目录不存在。

```powershell
rtk proxy node database/export.mjs --commit <SOURCE_SHA>
rtk proxy node --env-file=.env.local database/upload.mjs --from .git/platform-v2/export/<SOURCE_SHA>
rtk proxy node --env-file=.env.local database/import.mjs --from .git/platform-v2/export/<SOURCE_SHA> --pilot
rtk proxy node --env-file=.env.local database/import.mjs --from .git/platform-v2/export/<SOURCE_SHA>
rtk proxy node --env-file=.env.local database/import-taxonomy.mjs --commit <SOURCE_SHA>
rtk proxy node --env-file=.env.local database/verify-import.mjs --from .git/platform-v2/export/<SOURCE_SHA>
rtk proxy node --env-file=.env.local database/verify-native.mjs
```

上传先读回确定的内容地址，再决定是否写入；固定私有路径、禁止覆盖、最多 6 个并发，每个对象都完整下载核对 SHA-256。数据库逐批事务提交，原生回读比较身份、源文件散列、载荷引用、投影入口和书目依赖。`read-revision.mjs` 真实执行 PostgreSQL → 私有 Blob → 解压 → 唯一修订选择 → 内容散列与身份核验。

转写中断可用 `export.mjs --commit <SHA> --resume`：先核对已有压缩批次和解压后散列，跳过已完成节点，重建完整原始源归档。已经完成的导出不再次覆盖。数据库/对象上传中断先看收据；未知提交先查批次或对象，不盲目重发。

`rebuild-unpublished-import.mjs` 是旧版导入恢复工具，仅适用于页面依赖 schema 建立之前。新结构建立后立即拒绝运行；正常导入不调用它，也不能用于已发布数据或清空用户创作。新的完整性检查、恢复与续传沿版本和回执进行。

## 页面及完整依赖

`0009`–`0015` 为页面模型增量迁移，复用现有科学记录。`0016` 在现有回执表中加入节点草稿操作，本轮只应用到本地 PostgreSQL。`dependency_entity/version/edge/seal` 保存类型化依赖图；`release_page/page_release_seal` 固定发布快照；页面草稿和共享节点草稿分别比较版本，同一节点的双语事实不会各自分叉。新的修订与发布不再要求 Git SHA，历史 SHA 作为迁移出处保留。

```powershell
rtk proxy node --test database/page-dependencies.test.mjs
rtk proxy node --env-file=.env.local database/verify-page-model.mjs
rtk proxy node --env-file=.env.local database/verify-page-index.mjs
rtk proxy node --env-file=.env.local database/trace-page-dependencies.mjs ffaa640d-c515-5a03-98c2-b91013b04672
```

`index-page-dependencies.mjs` 从已核对的节点修订读取私有对象，默认 dry-run 回滚，`--apply` 提交私有图索引。当前只自动适配 catalogue-profile 的阅读聚合；未知内容/资源保持覆盖不全，渲染构建未验证时页面不可发布。原生功能测试的合成记录全部回滚。`trace-page-dependencies.mjs --artifact <sha256> --reverse` 可以查看文件对应的上游页面和用途；未全量索引的旧来源不能据此删除。

## 容量与验收

数据库导入水位为 850 MiB；对象上传计划上限为 900 MiB。达到水位就停，不升级套餐。完整分类 COPY 使用一个事务，失败回滚整棵树；成功后校验全树数量、父子关系、根、物种数和真实样本查询。名称搜索的全部冻结分片已上传，但没有把所有异名/名称记录重复展开成 SQL 行。

本轮转写范围是规范节点、全局书目、COL26.8 分类树与名称分片，以及五个采用节点所需的原始研究材料。现有地图栅格、完整 occurrence 包及其他发布资源仍保留原发布方式，没有将全部大型研究仓库重复搬入新库。

数据库、Blob、规范文件和公开发布是不同层次。迁移通过不代表网页编辑已完成，也不触发生产切换。正式入口仍以现有文件为权威；新平台必须完成真实登录、创作、来源/差异预览、用户批准、发布、跨端版本和回滚验收后才切换。

执行结果见 [迁移收据](../docs/evo-data-platform-v2.execution.json)。本机逐批收据保存在 `.git/platform-v2/`，其中的私有来源 URL 和密钥不进入公开说明。

迁移 SQL 的版本收据绑定实际文件字节。`migrations/.gitattributes` 禁用换行自动转换，确保 Windows 和其他系统检出的迁移 hash 与已执行版本完全一致。
