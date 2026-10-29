# 全量分类树 Wikipedia 对应

基线是 COL26.8 的 2,429,092 个树节点。按原始节点 ID 建立本地清单，保存
上级 ID、分类级别、科学名与来源数据集；清单绑定 registry manifest 和每个分片
的 SHA-256。源文件和 Turso 稿件不修改。清单位于 `.git/evo-wikipedia-col26-8/`。

`scripts/wikipedia-col-query.mjs` 用 Wikidata 的分类名、分类级别、上级、
Catalogue of Life ID 和各语言 Wikipedia sitelink 分批查询。每批成功后提交
SQLite 检查点；网络错误留下待查询记录。按 COL ID 匹配或名称、级别和上级
共同匹配的结果保留匹配依据。其他同名结果标为候选，缺少结果保持未确认。
这些链接是跨库名称与分类位置的对应，不声称两套分类观点完全一致。

英文 Wikipedia 的主命名空间标题清单另作为候选发现来源，下载回执记录
原地址、日期、字节数与 SHA-256。标题相同并不自动确认物种身份。批量抓取
摘要时保存原文、语言、文章链接、修订号和时间、作者历史及来源站许可；
每批查询使用明确的 User-Agent、限速和可续跑的本地队列。优先保存中文与
英文；两者均不存在时保留其他已有语言的一个条目。原文未改写。

`scripts/wikipedia-col-export.mjs` 按节点 ID 的 SHA-256 首字节生成 256 个
压缩分片和覆盖率 manifest；`scripts/verify-wikipedia-col-export.mjs` 校验
分片完整性、ID 路由、条目状态和摘要来源。manifest 必须公布已查询和待
查询数量。未查询、没有证据和网络失败不能标为“没有 Wikipedia”。

网站浮窗只读取站内已保存数据。用户主动点击原文链接时才前往 Wikipedia。
同名候选有明确提示；未完成的节点显示待核对。全量树优先读取现有固定
静态数据，也可使用已经配置的兼容后端，不需要重新生成科学数据。
