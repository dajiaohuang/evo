# 节点地图查询 v1

状态：已实现本地 SQLite 建库、真实 PBDB 样本导入、古坐标重建、不可变静态导出和地图/树联动。
实际数据库位于 `.git/platform-v2/local/node-map/snapshot-v8.sqlite`；这是独立时空数据库，未修改并行维护的作者库。
入口是生物类群节点，与专题、阅读稿件、内容包无依赖。

## 文件与职责

- `database/node-map-schema.sql`：独立的 SQLite/Turso 增量表设计。未挂入自动迁移，避免与正在进行的作者库修改冲突。
- `src/types/nodeMap.ts`：前端与导出器共享的数据契约。
- `src/services/nodeMap.ts`：纯查询及等面积网格聚合，不访问网络。
- `src/data-client/nodeMapClient.ts`：按 SHA-256 校验共享后代集合和年代分片，最多缓存四个年代分片。
- `src/hooks/useNodeMap.ts`：将节点数据绑定到实际海岸线年代和文件 SHA；屏蔽过时请求结果。
- `src/components/map/NodeMapPanel.tsx`：搜索、直接/后代范围、气泡/网格热力/证据点、来源分类树和 GeoJSON 导出。
- `src/services/nodeMap.test.ts`、`database/node-map-schema.test.mjs`：查询与数据库约束测试。

## 请求

```ts
{
  nodeId: '稳定节点ID',
  treeRevision: '固定分类版本',
  scope: 'descendants', // 包含自身；direct 仅自身
  time: { olderMa: 70, youngerMa: 60 },
  frame: {
    modelRevision: '模型文件与版本的固定标识',
    referenceFrame: '参考框架',
    anchorPlateId: 0,
    ageMa: 65,
  },
  gridColumns: 72,
}
```

节点映射必须由分类版本和可靠ID确认，不以同名自动建立归属。
`members` 是导出器提供的已验证后代集合，必须含自身；只覆盖本批记录涉及的节点与祖先，不传全量 COL 分类闭包。
网络层把该集合独立存储在 `manifest.members` 指向的不可变 JSON，只加载一次，再与各年代分片合并为 NodeMapDataset。
直接记录与后代记录分别计数。数据库 `map_node_ancestor` 可存需要服务的祖先集合，
导出时验证其相对于固定分类源的完整性、无环性和自关联；未覆盖节点返回 unmapped。

## 返回与显示

`status` 区分 ready、unmapped-node、tree-version-mismatch；无映射不能显示成“没有化石”。
返回固定数据版本、原始 coverage/truncated、分阶段排除数量和 bubbles。

每个气泡包括网格中心、记录数、直接/后代记录数、不同鉴定节点数、recordIds 和 nodeIds。
中心仅是聚合网格中心，不代表化石精确位置或类群起源；点击后使用原记录位置展开。
节点数包含不同分类级别，不能标为“物种丰富度”。
热力图后续可使用同一批合格记录；不得把气泡中心再当作真实采样点做统计推断。
网格按经度和 sin(纬度) 等分，每个单元面积相同；第一列跨越 ±180°，避免同一地点被日期变更线拆开。

计数恒等式（合法且非冲突的输入）：

```text
matched = unknownAge + outsideTime + missingReconstruction
        + incompatibleReconstruction + invalidCoordinates + plotted
```

同一 occurrence_id 的完全相同记录去重，冲突记录拒绝查询，由上游解决版本/鉴定冲突。
当前每个数据版本选择一个经核验的鉴定；竞争鉴定保留在上游证据层，不重复计密度。

## 时间和古坐标

所有时间都是距今 Ma，older ≥ younger ≥ 0；区间闭合，边界相交即纳入。
这是“可能落入时间窗的记录”查询，不代表该记录精确发生在滑块时刻。
宽年代记录只计一次，当前没有概率权重；不从区间宽度推造概率。
全未知年龄单独计数，不填 0，也不自动采用地质单位中点。

地图帧必须落入查询时间窗。当前界面使用实际底图年代 ±5 Ma，或者切换为仅包含底图时刻。
界面分别显示滑块请求年代和实际底图年代；年代分片声明 datasetWindow，不能查询超出分片覆盖的窗口。
有效点位必须与该帧的模型版本、参考框架、锚定板块和年代完全一致。
目前不接受年代容差或经纬度线性插值，不接受仅附带 paleolat/paleolng 的历史记录。
现代坐标留作重建输入，不作为古地图失败回退。
重建位置可以表示在该帧时刻的地点位置，并不证明生物当时存在；记录年代范围始终随点保留。

模型版本应包含旋转文件和板块文件的哈希绑定；map_evidence_source 保存来源、版本与校验值。
已发布的树、模型、数据和帧采用追加版本，不原地修改；正式迁移应接入现有修订/发布控制。

## 已接入的流程与剩余边界

1. PBDB 精确ID查询补齐固定样本的分类父链；独立数据库保留来源与已核验关系。COL 跨源映射仍是未知，不能用同名猜测。
2. 使用底图同版 CAO2024 模型重建地点，写入 map_occurrence_position；缺失运动链和缺失板块属性都拒绝绘点。
3. 导出 SHA 校验的共享成员集合和 247 个年代分片，读取并调用 queryNodeMap。
4. 本地图谱节点通过已有 taxonId 进入地图；全量树节点可以请求映射，未匹配明确显示未知。地图证据列表可选择所属 PBDB 节点，并沿来源分类树上下导航。
5. 起源区域、演化起止估计和事件链接仍需独立证据层，不能把这里的最老/最年轻采样记录标成类群起源或灭绝。

地图初始仍不显示旧全量化石点；用户选择类群后才启用时空证据层。完整导入命令、固定来源及未知项见 `data/node-map/README.md`。

## 验证命令

```powershell
rtk npx vitest run src/services/nodeMap.test.ts
rtk proxy node --test database/node-map-schema.test.mjs
rtk npm run typecheck
rtk proxy py -3.13 scripts/node-map-verify.py
rtk proxy py -3.13 scripts/node-map-test-reconstruction.py
rtk proxy node scripts/verify-node-map-ui.mjs
```

浏览器验证脚本使用 `.git/platform-v2/local/node-map/ui` 的 UI-only Vite 构建，并从 public/dist 读取已有数据，不触发全量科学内容重建。
