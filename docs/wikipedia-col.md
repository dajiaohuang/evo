# 全量分类树 Wikipedia 对应

基线是 COL26.8 的 2,429,092 个树节点。按原始节点 ID 建立本地清单，保存
上级 ID、分类级别、科学名与来源数据集；清单绑定 registry manifest 和每个分片
的 SHA-256。源文件和 Turso 稿件不修改。清单位于 `.git/evo-wikipedia-col26-8/`。

`scripts/wikipedia-col-query.mjs` 用 Wikidata 的分类名、分类级别、上级、
Catalogue of Life ID 和各语言 Wikipedia sitelink 分批查询。每批成功后提交
SQLite 检查点；网络错误留下待查询记录。按 COL ID 匹配或名称、级别和上级
共同匹配的结果保留匹配依据。其他同名结果标为候选，缺少结果保持未确认。
若 Wikidata 返回截断的 JSON，查询会缩小批次并保留原检查点。
这些链接是跨库名称与分类位置的对应，不声称两套分类观点完全一致。

`scripts/wikipedia-col-query-ids.mjs` 对已完成名称查询的节点再按 COL ID
查询 Wikidata，合并同一实体的已有证据，并重新排队受影响的摘要。它与名称
查询共享 Wikidata 服务，必须串行运行；每批使用独立检查点，失败不计完成。
名称和编号查询都没有结果仍表示未确认，不等于 Wikipedia 不存在条目。
`scripts/wikipedia-col-mark-covered-ids.mjs` 本地识别已具备可靠直链的节点，
将其标为已覆盖而不是已做编号查询；编号补查集中于仍待确认的节点。

英文 Wikipedia 的主命名空间标题清单另作为候选发现来源，下载回执记录
原地址、日期、字节数与 SHA-256。标题相同的条目可以作为带提示的链接
候选，但不自动确认物种身份。按用户
最新要求，停止获取摘要，新数据分片只发布链接，不含此前保存的摘要正文。
`scripts/wikipedia-col-synonym-titles.mjs` 校验目录的搜索分片与 Wikipedia
标题快照，将异名对应的标题作为候选；未完成当前学名查询的节点也可以显示
该候选，但仍计入待查询数。
中文、宿务语、瑞典语、荷兰语、法语、德语、西班牙语、葡萄牙语、俄语、
瓦瑞语、越南语、波兰语、意大利语和日语标题清单同样用于发现同名及异名候选；
标题命中不证明分类身份，也不读取条目正文。
`scripts/wikipedia-project-index.mjs` 保存 Wikimedia 语言项目清单；
`scripts/wikipedia-col-uncovered.mjs` 冻结仍无链接节点及其现名和异名，
`scripts/wikipedia-scan-projects.mjs` 按批查询对应标题清单。清单不可用或
下载失败保持未知，不作为不存在 Wikipedia 条目的证据。导出 manifest 的
`titleIndexSources` 记录已完成语种的标题清单 SHA-256。
对仍未链接的名称及异名，标准化比对去除大小写、重音和标点差异；
命中只作为候选，并在 `normalizedTitleSources` 记录所用清单校验值。
仍无链接的节点另用 `scripts/wikipedia-col-synonym-wikidata-inventory.mjs`
建立异名清单；`scripts/wikipedia-col-query.mjs --synonyms` 查询实体与
Wikipedia 站点链接，不请求正文。结果只作为异名候选，manifest 的
`synonymWikidata` 报告已查询和待查询的异名数量。

`scripts/wikipedia-col-export.mjs` 按节点 ID 的 SHA-256 首字节生成 256 个
压缩分片和覆盖率 manifest；`scripts/verify-wikipedia-col-export.mjs` 校验
分片完整性、ID 路由、条目状态和摘要来源。manifest 必须公布已查询和待
查询数量。未查询、没有证据和网络失败不能标为“没有 Wikipedia”。
Windows 批量导出使用 `scripts/wikipedia-col-export-chunks.mjs`，必须提供
`--out <输出目录> --audit-db <页面审核数据库>`。脚本先检查审核队列和异常过滤证据，
再备份一致的 SQLite 快照并分段生成；检查未完成时不会创建导出目录。审核只查询
页面是否存在、消歧标记和 Wikidata 身份，不获取摘要。队列完成本身不能证明所有
可能的候选均已纳入审核，仍需核对审核覆盖范围。
导出还要求 `live-snapshot-page-audit.sqlite` 中所有当前快照页面完成实时核验；
URL、标题或 Wikidata 身份变化以及未处理的异常都会阻止导出。完全相同页面可
复用 24 小时内的检查，但必须保留原检查时间和来源记录，导出前会验证复用来源。
复用会提前写入断点之后的页面记录；后续身份与重定向检查只能推进到该语言
连续扫描的断点，不能用零散复用记录中的最大行号作为完成位置。
统一导出前可运行 `node scripts/wikipedia-col-export.mjs --audit-only --audit-db <页面审核数据库>`；
此模式依照实际输出规则逐节点检查链接的页面与条目身份，并报告缺失或冲突，
不生成分片或导出目录。应在数据不再变更时完成全量检查；若数据或审核库随后变化，
需要重新检查。导出后仍须用 `verify-wikipedia-col-page-audit.mjs` 核对最终文件。

网站浮窗读取站内已保存的对应关系。用户主动点击原文链接时才前往 Wikipedia。
同名候选有明确提示；未完成的节点显示待核对。全量树优先读取现有固定
静态数据，也可使用已经配置的兼容后端，不需要重新生成科学数据。

数据分片发布到仓库独立的 `evo-wikipedia-data` 分支。分片文件名包含内容
散列，旧文件保留；一个 Git 提交原子更新 manifest 和新分片。Vercel 将
`/evo/wikipedia/col/` 同域转发到该分支，浏览器不直接向 Wikipedia 请求
摘要。后续数据刷新只更新数据分支，不重新构建应用或科学数据。发布脚本
为数据分支写入 `git.deploymentEnabled: false`，并核对源分片、远端分支当前
提交及覆盖率，遇到并发修改时停止。

## 2026-11-03 统合发布

名称及候选队列已完成，但新增实时页面复核仍有 1,610,427 项未完成
（keyed 809,470；unkeyed 800,957）。这不表示链接不存在，也不能声称全量实时复核完成。
新 inventory 全量导出继续受现有实时审核门槛约束。

本次对最近已发布快照进行单向撤下：按当前页面审核证据移除 9 个缺少确认或
被拒绝的 URL/身份对，不加入新候选、不提升身份状态。执行脚本为
`scripts/withdraw-rejected-wikipedia-links.mjs`，要求原快照、审核库、新输出目录和
预先确认的确切撤下数量。manifest 保留原快照 SHA-256、每项撤下依据及
`livePageAuditComplete: false`。新快照覆盖 2,429,092 个节点、3,072,870 个链接，
完整逐链接审核比较为 0 缺失、0 冲突；其余实时复核仍保持待完成。

核对工具的 Node 原生测试使用 `rtk npm run test:links`，与 Vitest 来源重放测试分开。
