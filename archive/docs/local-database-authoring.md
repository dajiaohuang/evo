# 本地数据库创作

**2026-10-22 本机入口已切换到[本地 Turso 创作](../../docs/local-turso-authoring.md)。** 下文保留 PostgreSQL 基线和原接口的历史说明；当前 Worker 使用 `database/turso-cli.mjs`。原 PostgreSQL 已停止并保留，不能按旧命令重新双写。

日常创作使用数据库修订和短事务。Git 只管理代码、schema 与说明；本轮的新正文、草稿、压缩对象和操作回执全部留在忽略的 `.git/platform-v2/local/`。现有公开应用继续使用规范文件／静态发布；本地验证完成不等于已经切换生产。

## 精简后的内容边界

1. **节点聚合**：`node` 保留记录身份、类型关系和章节顺序；`evidence` 保留完整结构化证据、页码／表格定位、原始来源散列、适用范围和权利信息；`pages.en/zh` 各保存一次原始 Markdown。数据库读取和旧文件读取复用同一套投影，不保存第二份已展开书目的正文。
2. **公共书目**：文献元数据只存于不可变的 `reference_revision`。每个修订只指向其实际采用的确切书目版本；段落、证据和节点关系里的引用位置由原始记录及派生选择器维持。仅有 DOI／网址的文献条目可保留这些已知字段，不补造书目信息，也不拿网址代替运行所需的数据内容。
3. **修订和发布**：`node_revision` 保存正文或内容寻址对象引用；`node_draft_head` 保存共享节点的当前版本和 generation。双语是同一聚合，不各自建立事实库。现有页面依赖图和发布审批机制继续使用这些节点版本。

工作队列、查询缓存、迁移收据不混入科学正文。原始候选文献索引不自动变成正式书目，也不自动上传。旧源文件的精确 hash、交付绑定和 Git 出处在迁移版本中保留；新创作不再要求这些历史包装字段。

## 本轮实际完成

- 在独立、只监听 `127.0.0.1` 的 PostgreSQL 17.11 中应用 16 个迁移；没有访问 Neon、Vercel 或 Blob 的数据 API。
- 本地全量导入 **139,458 个节点、5,255 条书目、377,322 条节点—书目依赖**。全部节点逐一从 PostgreSQL → 本地压缩对象读回，比较完整聚合、身份、原始文件散列及交付绑定。
- 校验 **203,508 份语言页面**，来自 **101,754 个有正文节点**；共有 25 种已有证据记录。其余节点保留原有身份资料，不伪造页面。
- 旧 v2 导出漏收集嵌套记录／节点关系中的 **2,372 条依赖，涉及 2,134 个节点**。本地新基线已补齐。新导出器使用 v3 依赖收集；历史 v1/v2 仅保留精确续传兼容。原云端旧基线本轮没有修改，不能把本地修复说成已上线。
- 本地 PostgreSQL 全量节点与书目基线约 **300 MB**；558 个正文对象共 **215,472,052 bytes**。旧节点传输批次为 254,082,563 bytes，减少 **38,610,511 bytes，约 15.2%**，主要来自不再重复携带可由原始正文重建的依赖绑定。容量不包括原始迁移归档和工作树，也不代表云端完整计费容量。
- 未查到完全相同的节点聚合：139,458 个正文聚合 hash 全部不同。未被节点采用的 10 条全局书目可能供其他数据使用，保留以待完整用途核对。

分类树、地图、occurrence 包及其他运行数据仍使用现有冻结文件，本轮没有将它们重复装进本地节点库，也没有删除它们。页面完整依赖的媒体／地图等适配器和网页审核入口仍需后续接入。

## 本地运行

要求 Node 22、根目录应用依赖和 `database` 依赖。以下命令用 `node` 表示 Node 22；本机验证使用 `.git/tools/node-v22.23.3/node.exe`。不会读取 `.env.local`，不会退回远端数据库。

```powershell
rtk proxy node database/local-postgres.mjs start
rtk proxy node database/local-postgres.mjs migrate
rtk proxy node database/local-postgres.mjs status
```

运行时默认位于 `.git/tools/postgresql-17.11/pgsql/bin`；其他系统用 `EVO_LOCAL_POSTGRES_BIN` 指向自身的原生 PostgreSQL bin 目录。本机从 [EDB 官方二进制页面](https://www.enterprisedb.com/download-postgresql-binaries) 下载 17.11-5 Windows x64 压缩包，SHA-256 为 `80379b2c04d51c30225532e0ae04509899141e9957ed096fe749d7fd9df8f82f`。运行工具不自动下载、不安装系统服务。

数据库目录、日志、随机生成的本地连接配置均在 `.git/platform-v2/local/`。仅绑定回环地址，最多 12 个连接、16 MB shared buffers，测试与导入均有数据库大小水位；配置文件不打印、不提交。服务停止后数据保留。

```powershell
rtk proxy node database/local-postgres.mjs stop
```

## 日常编辑：一个主题一个节点聚合

先创建或核对属于本地操作者的 workspace。示例 workspace 已在本机建立；`local-owner` 是本地工具的可信操作者标识，不是线上登录方案。

```powershell
rtk proxy node database/local-authoring.mjs workspace --owner local-owner --workspace 48600262-6aac-4ad8-96fe-6a5b5274cb2a --label Evo-local
```

1. **取出当前版本**。`checkout` 自动优先使用该 workspace 的当前草稿，否则取冻结基线，生成新的 request ID 和确切 base。输出必须在忽略目录中且不能覆盖已有文件。

```powershell
rtk proxy node database/local-authoring.mjs checkout --owner local-owner --workspace 48600262-6aac-4ad8-96fe-6a5b5274cb2a --source 38336ece31d241af0a4fd42a25686641774c2373 --key COL%3A6G5JP --out .git/platform-v2/local/working-draft.json
```

2. **你与 AI 编辑 `document`**。Markdown 保存在 `document.pages`；章节顺序、证据指针和来源定位必须一致。`referenceVersions` 列出实际使用文献的版本散列；不放整个候选文献池。新增文献可通过下面命令登记已记录的元数据，返回值可加入请求。

```powershell
rtk proxy node database/local-authoring.mjs reference --owner local-owner --workspace 48600262-6aac-4ad8-96fe-6a5b5274cb2a --file .git/platform-v2/local/adopted-reference.json
```

3. **短事务提交**。验证、原始内容读回比对、书目绑定、共享节点 CAS 和回执在一次事务内完成。AI 推理和网页审核均不占用长事务。

```powershell
rtk proxy node database/local-authoring.mjs submit --owner local-owner --actor computer-a-worker --file .git/platform-v2/local/working-draft.json
```

4. **核对回执或读取预览**。同一请求原样重发返回原结果；同一 request ID 携带不同内容会拒绝。版本冲突返回 `40001`，重新 checkout、阅读差异再编辑。不要自动把旧候选盖到新版本上。`read` 导出当前原始聚合及运行投影用于本地核对，不推进发布指针。

```powershell
rtk proxy node database/local-authoring.mjs receipt --owner local-owner --request <REQUEST_UUID>
rtk proxy node database/local-authoring.mjs read --owner local-owner --workspace <WORKSPACE_UUID> --node <INTERNAL_NODE_UUID> --out .git/platform-v2/local/review.json
```

新节点可以通过 `saveNodeDraft` 的完整请求创建，使用新的内部 UUID；内部 UUID 不充当新的科学分类 ID。新修订和书目版本的 `origin_commit` 为 NULL。接口函数接受已经认证的 `ownerId/actorId` 服务上下文，不从 worker 内容中认定权限，也不向 worker 分发管理员数据库密钥。

## 一次性历史迁移与复核

以下工具读取既有冻结导出，不要求每日编辑先产生 Git commit。旧规范文件继续作为生产权威直至完整切换。

```powershell
rtk proxy node database/audit-local-content.mjs --from .git/platform-v2/export/38336ece31d241af0a4fd42a25686641774c2373
rtk proxy node database/local-baseline.mjs --from .git/platform-v2/export/38336ece31d241af0a4fd42a25686641774c2373
```

本地对象使用 `local:sha256:<HASH>` 描述符和 SHA-256 文件名。每批注册前先写入、读回核对对象，提交前读回全部节点；中断后按相同批次回执核对后续传。小的新草稿可直接存入 PostgreSQL。`readRevision` 接受对象读取适配器，正文校验逻辑同时适用于本地对象与现有私有 Blob。

验证命令：

```powershell
rtk proxy node --test database/page-dependencies.test.mjs
rtk proxy node database/verify-local-authoring.mjs
rtk proxy node database/verify-native.mjs --local
rtk proxy node database/verify-page-model.mjs --local
```

本地创作测试创建唯一临时数据库，结束后仅删除该合成测试库。页面模型与旧约束测试全部回滚。测试涵盖独立连接竞争、不同主题并发、双语共享事实、相同请求回放、变更请求拒绝、原子回滚、书目换版本及五个真实节点的旧／新投影一致性；不宣称已完成跨电脑网络、worker 认证或浏览器发布验收。

汇总收据见 [本地数据库改造验收](local-database-authoring.execution.json)。含正文的本地回读、密钥和原始来源地址不进入 Git。
