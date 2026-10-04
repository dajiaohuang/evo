# 羊膜动物资料收集与占位阶段

2026-10-03。按用户最新指令，暂停扩写生物学正文，先逐目标收集资料和放置占位。

## 范围

COL26.8：30154 个接受种记录，{"Reptilia":12649,"Aves":11044,"Mammalia":6461}。PBDB：22684 个独立化石种级记录。两份清单不按名称合并为唯一生物物种数。

## 当前产物

- 全目标资料索引：data/sources/amniota-collection-stage-2026-10-03-records.jsonl.gz。每条保留来源身份、分类位置、档案定位和已存证据引用。
- 原始缺口与后续审阅清单：data/sources/amniota-collection-stage-2026-10-03-followups.jsonl.gz，共 10273 条。初始 COL 6457 条未定位生物资料；PBDB 3816 条保留产地资料不足或分类位置问题。最新补收状态见下文，不再把初始缺口数当作未找到 reference 的数量。
- 新增 20536 个语言占位文件，保留 85128 个不同的已有语言文件。占位 status=not-authored；不计可读生物学正文或专家审评。
- 1075 个历史名称候选已从工作缓存转存独立来源档案；名称对应尚须逐项确认物种概念。

## 尚未完成

生物资料收集未全部完成。现有档案和引用定位不等于原始论文全文已读取、资料主题完整或概念匹配已解决。占位不消除资料缺口。按后续指令，测试、生成、提交和发布继续延后。原正文任务和历史正文计数保留为独立口径。

按用户最新说明，本阶段先存 reference、来源索引和占位，不批量下载原文。物种概念和资料主题审阅在恢复正文时处理。

## 同名记录与文献入口

22 个缺少路径的同名 PBDB 来源身份现已各关联到 17 个明确保留多身份的导航占位入口；没有合并分类概念或假定 COL 等价。全部 COL 30154 个记录与 PBDB 22684 个记录都有两种语言文件入口，已有文件未覆盖。此项只表示正文或占位文件可定位。

本轮在线收集 PBDB 关联的 11097 个不同书目记录，23 份原始响应保存在 data/sources/snapshots/amniota-pbdb-bibliography-2026-10-03/；请求均返回所需记录，无失败或缺失。22,684 条物种记录的书目链接位于 data/sources/amniota-pbdb-reference-links-2026-10-03.jsonl.gz。分类记录所引文献不一定是原始描述或产地文献；书目收集不计全文取得或阅读。原始 10273 个缺口作为概念和资料语境审阅项保留。

## P5-184：补收 reference 与来源索引

用户澄清：不下载全部原文，先存所有 reference 与索引。全范围 30154 个 COL 记录和 22684 个 PBDB 记录均有来源身份索引及语言文件入口。

1. COL 原始 6457 个缺资料项：6449 个已关联 25161 条原始数据候选行，包含版本化 MDD、Reptile Database、ITIS 分布、AVONET、ReptTraits、生命史和生态档案。余下 8 个鸟类均已定位独立论文或历史描述 reference 入口；其中 7 个取得网页／出版社元数据或此前已下载的历史专著，Rhinomyias nicobaricus 的 Smithsonian 原文入口返回 HTTP 403，保留 URL 和失败记录。该限制不阻止 reference 索引保存。
2. PBDB 全部 22684 个来源身份已回链到上述书目索引。3816 个初始资料不足目标涉及 1508 个不同 reference；723 个有 DOI 字段，其中 712 个取得 Crossref 元数据、96 个含摘要。标题比对结果：572 个标准化一致、60 个相似候选、44 个冲突、36 个需人工比对，11 个字段请求 404。另存 2 个明确链接变换后取得的候选元数据；不覆盖原 DOI。785 个无 DOI 的书目原值和 reference ID 全部保留。
3. 名称相同、目录异名和亚属写法仅定位来源候选；不宣称物种概念一致。MDD 名称模式资料与当前物种资料分开保存。原始缺口和冲突仍可追溯，不自动改变固定清单或已有正文。
4. 全目标资料索引已补上候选行、书目及 DOI 状态入口；新增占位证据文件补上资料索引说明，正文仍为占位。全量原文下载已停止；正文、科学概念审阅、测试、生成、提交和发布未完成。

核心产物：

- `data/sources/amniota-additional-source-candidates-2026-10-03.jsonl.gz`：25161 条可定位候选原行。
- `data/sources/amniota-residual-bird-literature-2026-10-03.json`：8 个剩余鸟类的 reference 入口与获取状态。
- `data/sources/amniota-pbdb-literature-metadata-2026-10-03.json`：出版社元数据、标题冲突、无 DOI 清单。
- `data/sources/amniota-pbdb-link-repairs-2026-10-03.json`：保留原字段的链接修正候选。
- `data/sources/amniota-reference-index-continuation-2026-10-03.json`：本轮计数、档案散列和回写范围。

本阶段已完成固定范围的 reference／来源索引覆盖与占位覆盖。资料主题完整性、物种概念对应和每条 reference 的科学审阅均未据此宣称完成。
