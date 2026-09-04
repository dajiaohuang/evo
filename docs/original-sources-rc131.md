# RC131 原始权威证据层

本 worker 固定两个独立的 ChecklistBank 原始归档，并投影到 COL26.8（发行日 2026-08-20）严格谓词 `rank=species AND status=accepted` 的对应根节点。它不是全局 manifest、不是旧格式兼容层，也不把两个来源合并成一个分类观点。

| 层 | ChecklistBank | 版本 / DOI | COL 根 | COL 行 | 严格匹配 | 未匹配 | 来源严格 accepted | source-only |
| --- | --- | --- | --- | ---: | ---: | ---: | ---: | ---: |
| 蝎类 | The Scorpion Files | Jul 2026 / `10.48580/d3f6.v47` | `42N` Scorpiones | 2,940 | 2,872 | 68 | 2,939 | 67 |
| 唇足类 | A World Catalogue of Centipedes (Chilopoda) for the Web / ChiloBase | 1.01, May 2006 / `10.48580/d38y.v9` | `93` Chilopoda | 3,141 | 2,269 | 872 | 3,141 | 872 |

`source-only` 行保持 `colId: null`，不宣称为 COL 新物种；`unmatched` 也保持在 COL 分区中。匹配只允许 Unicode NFC 加 Unicode 空白归一化，并先去除 COL 字段中精确的尾随 `scientificName + " " + authorship`；不使用大小写、重音、模糊、同物异名、分类概念或来源唯一性兜底。

## 固定输入

归档和元数据响应于 2026-09-05T04:47:19+08:00 获取，两个请求 URL、响应大小、SHA-256 及每个归档成员摘要写入对应 ledger 和 descriptor。归档端点返回的 ChiloBase 文件是 gzip-compressed tar，但 HTTP `Content-Type` 为 `application/zip`；该事实被保留，没有改写归档哈希或格式声明。

- Scorpion Files：`https://api.checklistbank.org/dataset/1164/archive`，168,659 bytes，SHA-256 `bf13d82d5809d39c6526df683b48293aeadf72ebda514ede6eafe011d3fa814f`；API 元数据：`https://api.checklistbank.org/dataset/1164`，SHA-256 `9702bdc4522de80cd536a50e96de8eefa330b9c6aaf2e55f162c953b25f08877`。
- ChiloBase：`https://api.checklistbank.org/dataset/1042/archive`，349,771 bytes，SHA-256 `4274d8399386d90ca280f3cf89f5dddb0f598c4e085de2dc9926a9614335b088`；API 元数据：`https://api.checklistbank.org/dataset/1042`，SHA-256 `5b5b4d5e528e4f473dd459eb7d3f26a614a7c7f389d2c97e51a566e449fad9fa`。

归档内部 `meta.yaml` / `SourceDatabase.tsv` 的 title、version、license（以及 ChiloBase 的 release date）与 API 版本身份核对通过。Scorpion Files 的归档 `issued=2026-07-07` 与 ChecklistBank API 的 `issued=2026-07-06` 是不同的发布日期元数据，descriptor 和 ledger 原样分别保留；这里仅将 title/version/license 标记为版本身份一致，绝不伪称两个 issued 字段相同。

## 产物和预算

每个 JSONL gzip 分片的未压缩 source payload 不超过 2 MiB，并使用 gzip `mtime=0`、固定 OS 字节和稳定 JSON 序列化。native-full 列出并保留全部 COL 分区与 source-only 分区；web-light 只保留 descriptor 级 summary，不列出行级 payload。RC131 不修改全局 `data/registry/`、manifest、package registry 或 README，后续集成时由父任务执行这些投影更新。

- `data/catalogue-of-life/releases/2026-08-20/resource-packs/other-animals/scorpion-files-sidecar.json`
- `data/catalogue-of-life/releases/2026-08-20/resource-packs/other-animals/chilobase-sidecar.json`
- `data/sources/scorpion-files-archive-1164-import-ledger.json`
- `data/sources/chilobase-archive-1042-import-ledger.json`

独立重放：`python scripts/test-small-authority-sources.py`。
