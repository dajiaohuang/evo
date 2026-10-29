# 本地 Turso 创作

本机节点创作现使用 `@tursodatabase/database@0.8.3` 的原生嵌入式 Turso 引擎。一个只监听 `127.0.0.1` 的 Node 22 服务独占数据库文件；多个 Worker 通过本地 CLI 提交。检索和编辑并行，数据库操作进入同一短事务队列，避免多个进程直接争用文件或把读操作混入其他请求的事务。

这不是 Turso Cloud、libSQL 远程服务或多电脑鉴权部署。现有公开网站仍使用原有发布数据。本轮只切换本地节点草稿入口，不开放页面发布、channel、审批、地图资源或分类树写入。

## 已完成的迁移

- PostgreSQL 的全部 **31 张表**已逐行复制并比较规范化内容哈希：139,458 个节点、139,459 个修订、5,255 个书目版本、377,323 条依赖，以及既有 workspace、1 个草稿头和1个请求回执。
- **558 个本地压缩正文对象**原地保留，逐个核对大小和 SHA-256；新库继续引用相同内容寻址对象，不复制正文到每个 Worker。
- 新库全部 **139,459 个修订、203,510 份语言页面**已从数据库及对象完整读回，验证内容哈希、身份、原始来源文件哈希和交付绑定。语言页数含已有草稿，不是已完成创作节点数。
- 19 项原生 Windows 检查通过，包括16个独立CLI进程并发、同节点双语冲突只有一个成功、原请求回放、变更输入拒绝、事务中途失败回滚、进程骤停回滚、重启读回、确切书目版本和5个真实节点的读取投影。
- 切换前再次核对源库全部表哈希，确认没有其他源库连接，再停止 PostgreSQL。原 PostgreSQL 数据、对象和旧规范文件全部保留。旧 `local-authoring.mjs` 在存在 Turso 激活标记时拒绝使用旧入口，防止双写。

Turso 文件约356 MB，正文对象约215 MB；这不是云端计费容量。分类树、地图、occurrence 及名录来源仍使用已有冻结文件，未声称它们已转成数据库表。它们不因本地节点库迁移而删除。

## 运行边界

`database/turso-schema.sql` 保存本地schema，`turso-table-contract.json`保存迁移列类型和主键。原31表的全部数据、列和关系键得到保留；目前没有数据的发布/页面依赖等非创作表禁止INSERT/UPDATE/DELETE。PostgreSQL存储过程没有冒充为已经移植的Turso发布API。以后开放这些功能必须先移植对应语义并验证，不能移除禁写触发器来绕过。

节点修订、书目版本和回执不可变。双语/结构化证据是一个节点聚合，共用 workspace 下的节点草稿头。版本冲突返回 `40001` / HTTP409；必须重新读取并整合。所有修改与回执同事务提交，未知提交先查询原 request ID，不换ID盲重发。

服务配置、随机回环凭据、数据库、正文输出和日志都在忽略目录 `.git/platform-v2/local/turso/`。CLI自行读取配置，不把凭据交给模型或写进命令。该机制服务于同一可信本地操作者，不代表不同OS用户之间的权限隔离。浏览器Origin和缺少本地凭据的请求会被拒绝。

## Worker 操作

下例 `node` 代表 Node 22；本机可使用 `.git/tools/node-v22.23.3/node.exe`。可从任意座位目录执行，但脚本和输出使用绝对路径。所有输出必须位于 `.git/platform-v2/local/`，已存在文件不会覆盖。

```powershell
rtk proxy node database/turso-cli.mjs status --actor team-w1@stew-evo
rtk proxy node database/turso-cli.mjs checkout --actor team-w1@stew-evo --source <BASELINE_COMMIT> --key <PHYSICAL_KEY> --out <ABSOLUTE_IGNORED_REQUEST_JSON>
rtk proxy node database/turso-cli.mjs references --actor team-w1@stew-evo --file <REQUEST_JSON> --out <ABSOLUTE_IGNORED_REFERENCES_JSON>
```

编辑请求中的 `document`，保持 node/evidence/pages 的指针和稳定身份一致。新增书目只登记实际采用的已知元数据；将返回的确切版本加入 `referenceVersions`，不要附整个检索池。

```powershell
rtk proxy node database/turso-cli.mjs reference --actor team-w1@stew-evo --file <ADOPTED_REFERENCE_JSON>
rtk proxy node database/turso-cli.mjs submit --actor team-w1@stew-evo --file <REQUEST_JSON>
rtk proxy node database/turso-cli.mjs receipt --actor team-w1@stew-evo --request <ORIGINAL_REQUEST_UUID>
rtk proxy node database/turso-cli.mjs read --actor team-w1@stew-evo --node <NODE_UUID> --out <ABSOLUTE_IGNORED_READBACK_JSON>
```

`read`返回已保存的草稿、实际书目和运行投影。`checkout`优先取当前草稿，否则取指定基线。新节点可使用完整请求中的新内部UUID、空base和generation0；科学身份必须来自实际来源，内部UUID不能充当科学分类ID。编辑者按本轮任务范围处理节点；通过受控接口保存，不直接打开服务持有的数据库文件。

任务范围由当前操作者管理；数据库不另建工作调度/claims系统。节点分页只提供准确输入，不把已有草稿自动判成科学完成：

```powershell
rtk proxy node database/turso-cli.mjs nodes --actor team-c@stew-evo --source <BASELINE_COMMIT> --after <LAST_PHYSICAL_KEY> --limit 48 --out <ABSOLUTE_IGNORED_BATCH_JSON>
```

## 服务启动、恢复与验证

```powershell
rtk proxy node database/turso-control.mjs start --database <LOCAL_DB_PATH> --workspace <WORKSPACE_UUID> --owner local-owner
rtk proxy node database/turso-control.mjs status
rtk proxy node database/turso-control.mjs stop
```

启动器必须找到迁移、全量读回和原生写入验证收据。服务使用独占文件锁；已有服务活着但不能确认状态时拒绝重启。骤停后只有确认锁中原PID已经不存在、锁路径和数据库相符，才移除该服务锁并恢复同一个数据库。恢复后先按原request回执确认未知提交，再继续。

不要同时启动PostgreSQL旧写入端。若需要回退，先停止并收敛新库写入，逐项保留Turso新增修订/回执并设计迁回；旧PG不包含切换后的新稿，不能直接换回并声称无损。

```powershell
rtk proxy node database/migrate-local-turso.mjs --target <NEW_LOCAL_DB_PATH>
rtk proxy node database/verify-turso-baseline.mjs --database <MIGRATED_DB_PATH>
rtk proxy node database/verify-turso-authoring.mjs
```

迁移拒绝覆盖目标文件，持有源表共享锁阻止并发修改，表逐行哈希比较、外键核对和对象哈希检查完成后才记录成功。失败的部分目标保留，不能当成功库启动。合成验证只写唯一测试数据库；测试产物保留在忽略目录供排错，不进入科学内容或Git。
