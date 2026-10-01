---
schemaVersion: 1
kind: evidence
records:
  atlas-node:
    name: Xiphosura
    commonName: Horseshoe Crabs and Fossil Kin
    commonNameZh: 鲎类及化石近亲
    rank: order
    taxonId: ""
    firstAppearance: 480
    lastAppearance: 0
    extinct: false
    entityKind: taxon
    contentLevel: dossier
    parentRelationshipKind: navigation-parent
  claims:
    - subject:
        kind: taxon
        path: content/topics/atlas/Xiphosura
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
      reviewedAgainstReferenceVersion: lamsdell-2020-xiphosura; inherited concrete-locator audit at 2026.08-static-v5-rc44
      referenceLinks:
        - referenceId: lamsdell-2020-xiphosura
          relation: supports
          pages: e10431
          figure: Figures 1–13; Supplemental matrices
          quoteLocator: Character matrix; Phylogenetic results; Revised systematics
  claim-rationales.zh:
    - markdown: evidence.md
      field: /records/claim-rationales.zh/0
  claim-statements.zh:
    - markdown: evidence.md
      field: /records/claim-statements.zh/0
  ranges:
    - entityPath: content/topics/atlas/Xiphosura
      rangeKind: global-composite
      taxonomicConcept: Xiphosuran total-group navigation and matrix span
      geographicScope: Global fossil and living sample
      olderMa: 480
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
        - content/events/Xiphosuran_total-group_morphology_matrix/evidence.md#/records/claims/0
      referenceLocators:
        - referenceId: lamsdell-2020-xiphosura
          locator: e10431; Figures 1–13; Supplemental matrices; Character matrix; Phylogenetic results; Revised systematics
      reviewStatus: automated-audit-passed
---

# Xiphosura

## claims / statement

<!-- evo:text /records/claims/0/statement -->
Lamsdell's 2020 revision compares fossil and living horseshoe crabs and discusses an Ordovician record separated from the next Upper Devonian occurrences by a fossil-record gap. This study-linked navigation span is not continuous occupancy, an exact origin date or a complete global range.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/0/confidenceRationale -->
Horseshoe Crabs and Fossil Kin: Medium confidence applies to the named specimen or sampled analysis at the inherited concrete locator. The wording deliberately limits the claim to that evidence and does not promote a range-ledger display envelope into a global biological boundary.
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/0 -->
鲎类及化石近亲：置信度为中：继承的具体页码、图版或章节定位器支持具名标本或抽样分析的存在与范围；措辞有意把结论限制在该证据内，不把导航包络提升为全球生物边界、直接祖先或精确起源。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/0 -->
Lamsdell 的 2020 年修订比较化石与现生鲎类，并讨论奥陶纪记录与其后上泥盆统产出之间的化石记录空缺。这一关联研究的导航跨度不表示连续分布、精确起源年代或完整全球延限。
<!-- /evo:text -->

## ranges / uncertainty / note

<!-- evo:text /records/ranges/0/uncertainty/note -->
Rounded model/navigation envelope; internal topology is contested and this is not uninterrupted occupancy.
<!-- /evo:text -->

## ranges / evidenceBasis

<!-- evo:text /records/ranges/0/evidenceBasis -->
The displayed interval is bounded to the cited dossier sample or model and does not establish a global first appearance, origin or uninterrupted lineage.
<!-- /evo:text -->
