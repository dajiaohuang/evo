---
schemaVersion: 1
kind: evidence
records:
  atlas-node:
    name: Pan-Squamata
    commonName: Squamate total group
    commonNameZh: 有鳞类总群
    rank: clade
    taxonId: ""
    firstAppearance: 240
    lastAppearance: 0
    extinct: false
    entityKind: taxon
    contentLevel: dossier
  claims:
    - subject:
        kind: taxon
        path: content/topics/atlas/Pan-Squamata
      claimKind: scientific
      claimType: topology
      statement:
        markdown: evidence.md
        field: /records/claims/0/statement
      confidence: medium
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/0/confidenceRationale
      reviewedBy: Evo Atlas data maintenance
      reviewedAt: 2026-08-31
      reviewedAgainstReferenceVersion: simoes-2018-megachirella concrete-locator audit at 2026.08-static-v5-rc42
      referenceLinks:
        - referenceId: simoes-2018-megachirella
          relation: supports
          pages: 706–709
          figure: Figures 1–2; Extended Data Figures 1–8
          quoteLocator: CT description; combined-evidence analyses; divergence-time caveats
    - subject:
        kind: taxon
        path: content/topics/atlas/Pan-Squamata
      claimKind: scientific
      claimType: fossil-range
      statement:
        markdown: evidence.md
        field: /records/claims/1/statement
      confidence: medium
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/1/confidenceRationale
      reviewedBy: Evo Atlas automated primary-source audit
      reviewedAt: 2026-08-31
      reviewedAgainstReferenceVersion: simoes-2018-megachirella; concrete range-boundary locator audit at rc48
      referenceLinks:
        - relation: supports
          referenceId: simoes-2018-megachirella
          pages: 706–709
          figure: Figures 1–2; Extended Data Figures 1–8
          quoteLocator: PZO 628 horizon, CT anatomy and combined-evidence stem placement
  claim-rationales.zh:
    - markdown: evidence.md
      field: /records/claim-rationales.zh/0
    - markdown: evidence.md
      field: /records/claim-rationales.zh/1
  claim-statements.zh:
    - markdown: evidence.md
      field: /records/claim-statements.zh/0
    - markdown: evidence.md
      field: /records/claim-statements.zh/1
  ranges:
    - entityPath: content/topics/atlas/Pan-Squamata
      rangeKind: global-composite
      taxonomicConcept: Megachirella-to-living Pan-Squamata evidence route
      geographicScope: PZO 628 from the Italian Alps plus the sampled living squamate tree
      olderMa: 240
      youngerMa: 0
      status: available
      uncertainty:
        olderMa: null
        youngerMa: null
        note:
          markdown: evidence.md
          field: /records/ranges/0/uncertainty/note
      evidenceBasis:
        markdown: evidence.md
        field: /records/ranges/0/evidenceBasis
      evidenceLevel: literature-synthesized
      confidence: medium
      claimPaths:
        - content/topics/atlas/Pan-Squamata/evidence.md#/records/claims/1
      referenceLocators:
        - referenceId: simoes-2018-megachirella
          locator: 706–709; Figures 1–2; Extended Data Figures 1–8; PZO 628 horizon, CT anatomy and combined-evidence stem placement
      reviewStatus: automated-audit-passed
---

# Pan-Squamata

## claims / statement

<!-- evo:text /records/claims/0/statement -->
Pan-Squamata is a navigation route spanning sampled stem and crown squamates; the Megachirella analysis recovers one fossil on the squamate stem but does not identify a direct ancestor, crown FAD or complete route duration.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/0/confidenceRationale -->
CT anatomy and a combined morphology–molecule matrix support the stem placement. Medium confidence retains model sensitivity and limits the claim to route topology.
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/1/statement -->
Megachirella PZO 628 provides a roughly 240 Ma Middle Triassic Pan-Squamata stem anchor; a 240 Ma–present route is shown without treating the specimen as a direct ancestor or crown-Squamata FAD.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/1/confidenceRationale -->
Megachirella-to-living Pan-Squamata evidence route: the cited primary study or systematic review directly supports the stated sample, calibration or withholding boundary at the supplied locator. Confidence is medium and does not extend to a global FAD, LAD, direct ancestor or unsampled interval.
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/0 -->
CT 解剖和形态—分子联合矩阵支持其干群位置。中等置信度保留模型敏感性，并把主张限制为路线拓扑。
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/1 -->
Megachirella-to-living Pan-Squamata evidence route：所引一手研究或高质量系统综述在给定页码、图表或章节处直接支持此处的样本、校准或暂缓边界。置信度为中等。该置信度不外推至全球首现、全球末现、直接祖先或未采样区间。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/0 -->
泛有鳞类是连接取样干群与冠群有鳞类的导航路线；Megachirella 分析把一个化石恢复在有鳞类干群，但未识别直接祖先、冠群首现或完整路线时长。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/1 -->
Megachirella 标本 PZO 628 为约 2.40 亿年前的中三叠世泛有鳞类干群锚点；图谱展示 2.40 亿年前至今的路线，但不把该标本视为直接祖先或有鳞类冠群首现。
<!-- /evo:text -->

## ranges / uncertainty / note

<!-- evo:text /records/ranges/0/uncertainty/note -->
The 240 Ma edge is rounded from the Middle Triassic specimen; stem placement and model ages remain analysis-dependent.
<!-- /evo:text -->

## ranges / evidenceBasis

<!-- evo:text /records/ranges/0/evidenceBasis -->
The route joins one stem sample to living members without calling the specimen a direct ancestor or crown FAD.
<!-- /evo:text -->
