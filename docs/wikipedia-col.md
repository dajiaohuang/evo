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

英文 Wikipedia 的主命名空间标题清单另作为候选发现来源，下载回执记录
原地址、日期、字节数与 SHA-256。标题相同的条目可以作为带提示的链接
候选，但不自动确认物种身份。按用户
最新要求，停止获取摘要，新数据分片只发布链接，不含此前保存的摘要正文。
`scripts/wikipedia-col-synonym-titles.mjs` 校验目录的搜索分片与 Wikipedia
标题快照，将异名对应的标题作为候选；未完成当前学名查询的节点也可以显示
该候选，但仍计入待查询数。

`scripts/wikipedia-col-export.mjs` 按节点 ID 的 SHA-256 首字节生成 256 个
压缩分片和覆盖率 manifest；`scripts/verify-wikipedia-col-export.mjs` 校验
分片完整性、ID 路由、条目状态和摘要来源。manifest 必须公布已查询和待
查询数量。未查询、没有证据和网络失败不能标为“没有 Wikipedia”。

网站浮窗读取站内已保存的对应关系。用户主动点击原文链接时才前往 Wikipedia。
同名候选有明确提示；未完成的节点显示待核对。全量树优先读取现有固定
静态数据，也可使用已经配置的兼容后端，不需要重新生成科学数据。

数据分片发布到仓库独立的 `evo-wikipedia-data` 分支。分片文件名包含内容
散列，旧文件保留；一个 Git 提交原子更新 manifest 和新分片。Vercel 将
`/evo/wikipedia/col/` 同域转发到该分支，浏览器不直接向 Wikipedia 请求
摘要。后续数据刷新只更新数据分支，不重新构建应用或科学数据。发布脚本
为数据分支写入 `git.deploymentEnabled: false`，并核对源分片、远端分支当前
提交及覆盖率，遇到并发修改时停止。
