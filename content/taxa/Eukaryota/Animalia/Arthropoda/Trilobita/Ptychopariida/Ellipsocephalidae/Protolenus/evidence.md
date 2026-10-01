---
schemaVersion: 1
kind: evidence
records:
  atlas-node:
    name: Protolenus
    commonName: Protolenus
    commonNameZh: 原伦虫属
    rank: genus
    taxonId: txn:20883
    firstAppearance: 515
    lastAppearance: 514
    extinct: true
    entityKind: taxon
    contentLevel: dossier
    parentRelationshipKind: navigation-parent
  claims:
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Arthropoda/Trilobita/Ptychopariida/Ellipsocephalidae/Protolenus
      claimKind: scientific
      claimType: fossil-range
      statement:
        markdown: evidence.md
        field: /records/claims/0/statement
      confidence: medium
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/0/confidenceRationale
      reviewedBy: Evo Atlas maintainer primary-source audit
      reviewedAt: 2026-08-31
      reviewedAgainstReferenceVersion: el-albani-2024-trilobite-3d; inherited concrete-locator audit at 2026.08-static-v5-rc44
      referenceLinks:
        - referenceId: el-albani-2024-trilobite-3d
          relation: supports
          pages: 1429–1435
          figure: Figures 1–4; Extended Data
          quoteLocator: Specimens; Microtomographic reconstruction; Ventral anatomy
  claim-rationales.zh:
    - markdown: evidence.md
      field: /records/claim-rationales.zh/0
  claim-statements.zh:
    - markdown: evidence.md
      field: /records/claim-statements.zh/0
  ranges:
    - entityPath: content/taxa/Eukaryota/Animalia/Arthropoda/Trilobita/Ptychopariida/Ellipsocephalidae/Protolenus
      rangeKind: global-composite
      taxonomicConcept: Protolenus Tatelt specimens
      geographicScope: Tatelt Formation, Morocco
      olderMa: 515
      youngerMa: 514
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
      confidence: high
      claimPaths:
        - content/events/Tatelt_trilobites_preserved_in_three_dimensions/evidence.md#/records/claims/0
      referenceLocators:
        - referenceId: el-albani-2024-trilobite-3d
          locator: 1429–1435; Figures 1–4; Extended Data; Specimens; Microtomographic reconstruction; Ventral anatomy
      reviewStatus: automated-audit-passed
---

# Protolenus

## claims / statement

<!-- evo:text /records/claims/0/statement -->
The studied Protolenus (Hupeolenus) sp. specimens come from volcanic ash in the Tatelt Formation, Cambrian Series 2, Stage 4, in Morocco's Lemdad Syncline. This occurrence documents the study sample, not the genus's global first appearance or complete range.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/0/confidenceRationale -->
Protolenus: Medium confidence applies to the named specimen or sampled analysis at the inherited concrete locator. The wording deliberately limits the claim to that evidence and does not promote a range-ledger display envelope into a global biological boundary.
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/0 -->
原伦虫属：置信度为中：继承的具体页码、图版或章节定位器支持具名标本或抽样分析的存在与范围；措辞有意把结论限制在该证据内，不把导航包络提升为全球生物边界、直接祖先或精确起源。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/0 -->
研究中的 Protolenus (Hupeolenus) sp. 标本来自摩洛哥 Lemdad 向斜 Tatelt 组的火山灰层，属寒武纪第二世第 4 期。这一产出记录的是研究样本，不是该属的全球首现或完整延限。
<!-- /evo:text -->

## ranges / uncertainty / note

<!-- evo:text /records/ranges/0/uncertainty/note -->
Study-level formation envelope for the scanned specimens, not a global genus range.
<!-- /evo:text -->

## ranges / evidenceBasis

<!-- evo:text /records/ranges/0/evidenceBasis -->
The displayed interval is bounded to the cited dossier sample or model and does not establish a global first appearance, origin or uninterrupted lineage.
<!-- /evo:text -->
