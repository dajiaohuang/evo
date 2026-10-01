---
schemaVersion: 1
kind: evidence
records:
  atlas-node:
    name: Agnostina
    commonName: Agnostinid Dossier Route
    commonNameZh: 球接子类档案导航
    rank: suborder
    taxonId: txn:134211
    firstAppearance: 521
    lastAppearance: 444
    extinct: true
    entityKind: taxon
    contentLevel: dossier
    parentRelationshipKind: navigation-parent
  claims:
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Arthropoda/Trilobita/Agnostida/Agnostina
      claimKind: scientific
      claimType: topology
      statement:
        markdown: evidence.md
        field: /records/claims/0/statement
      confidence: medium
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/0/confidenceRationale
      reviewedBy: Evo Atlas maintainer primary-source audit
      reviewedAt: 2026-08-31
      reviewedAgainstReferenceVersion: moysiuk-caron-2019-agnostids; inherited concrete-locator audit at 2026.08-static-v5-rc44
      referenceLinks:
        - referenceId: moysiuk-caron-2019-agnostids
          relation: supports
          pages: "20182314"
          figure: Figures 1–4; Supplementary phylogeny
          quoteLocator: Adult specimens; Appendage reconstruction; Phylogenetic analysis
  claim-rationales.zh:
    - markdown: evidence.md
      field: /records/claim-rationales.zh/0
  claim-statements.zh:
    - markdown: evidence.md
      field: /records/claim-statements.zh/0
  ranges:
    - entityPath: content/taxa/Eukaryota/Animalia/Arthropoda/Trilobita/Agnostida/Agnostina
      rangeKind: global-composite
      taxonomicConcept: Burgess Shale agnostinid evidence route
      geographicScope: Burgess Shale, Canada
      olderMa: 509
      youngerMa: 506
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
        - content/events/Burgess_Shale_agnostid_anatomy_and_affinity/evidence.md#/records/claims/0
      referenceLocators:
        - referenceId: moysiuk-caron-2019-agnostids
          locator: 20182314; Figures 1–4; Supplementary phylogeny; Adult specimens; Appendage reconstruction; Phylogenetic analysis
      reviewStatus: automated-audit-passed
---

# Agnostina

## claims / statement

<!-- evo:text /records/claims/0/statement -->
This Agnostina entry links the named specimen, dataset and analysis dossiers cited by its range ledger; it is not a complete account of the taxon. Its displayed span is a study-bounded sample envelope, not the full taxon range, an ancestor sequence, global FAD/LAD or an exact origin interval.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/0/confidenceRationale -->
Agnostinid Dossier Route: Medium confidence applies to the existence and documented scope of the linked dossiers and their concrete locators. The navigation grouping and displayed envelope are editorial organization, so no biological ancestry or global endpoint is inferred.
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/0 -->
球接子类档案导航：置信度为中：继承的具体页码、图版或章节定位器支持具名标本或抽样分析的存在与范围；措辞有意把结论限制在该证据内，不把导航包络提升为全球生物边界、直接祖先或精确起源。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/0 -->
这个 Agnostina 条目链接延限账本所引的具名标本、数据集及分析档案，并非该类群的完整介绍；显示跨度是研究限定的样本包络，不是完整类群延限、祖先序列、全球首末出现或精确起源区间。
<!-- /evo:text -->

## ranges / uncertainty / note

<!-- evo:text /records/ranges/0/uncertainty/note -->
Dossier sample envelope; Agnostina has a broader fossil range and contested affinity.
<!-- /evo:text -->

## ranges / evidenceBasis

<!-- evo:text /records/ranges/0/evidenceBasis -->
The displayed interval is bounded to the cited dossier sample or model and does not establish a global first appearance, origin or uninterrupted lineage.
<!-- /evo:text -->
