---
schemaVersion: 1
kind: evidence
records:
  atlas-node:
    name: Insect flight evidence route
    commonName: Wing fossils and developmental experiments
    commonNameZh: 翅化石与发育实验
    rank: navigation group
    taxonId: ""
    firstAppearance: 325
    lastAppearance: 0
    extinct: false
    entityKind: navigation-group
    contentLevel: dossier
    parentRelationshipKind: navigation-parent
  claims:
    - subject:
        kind: taxon
        path: content/topics/atlas/Insect_flight_evidence_route
      claimKind: scientific
      claimType: morphology
      statement:
        markdown: evidence.md
        field: /records/claims/0/statement
      confidence: medium
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/0/confidenceRationale
      reviewedBy: Evo Atlas maintainer primary-source audit
      reviewedAt: 2026-08-31
      reviewedAgainstReferenceVersion: prokop-2005-paskov-wing; inherited concrete-locator audit at 2026.08-static-v5-rc44
      referenceLinks:
        - referenceId: prokop-2005-paskov-wing
          relation: supports
          pages: 383–387
          figure: Figures 1–2
          quoteLocator: Material and horizon; wing description; discussion
        - referenceId: bruce-patel-2020-wing-homology
          relation: supports
          pages: 1703–1712
          figure: Figures 1–6; Extended Data Figures 1–8
          quoteLocator: CRISPR phenotypes; segment alignment; wing-origin model
  claim-rationales.zh:
    - markdown: evidence.md
      field: /records/claim-rationales.zh/0
  claim-statements.zh:
    - markdown: evidence.md
      field: /records/claim-statements.zh/0
  ranges:
    - entityPath: content/topics/atlas/Insect_flight_evidence_route
      rangeKind: global-composite
      taxonomicConcept: Insect flight fossil and developmental dossier route
      geographicScope: Represented Carboniferous fossil and living gene-editing experiment
      olderMa: 325
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
        - content/events/Paskov_Lower_Carboniferous_wing_fragment/evidence.md#/records/claims/0
        - content/events/Parhyale_leg-patterning_knockouts_and_wing_homology/evidence.md#/records/claims/0
      referenceLocators:
        - referenceId: prokop-2005-paskov-wing
          locator: 383–387
        - referenceId: bruce-patel-2020-wing-homology
          locator: 1703–1712
      reviewStatus: automated-audit-passed
---

# Insect flight evidence route

## claims / statement

<!-- evo:text /records/claims/0/statement -->
The Insect flight evidence route navigation entity is source-linked only to the named specimen, dataset and analysis dossiers already cited by its range ledger. Its displayed span is a study-bounded route or sample envelope, not a biological taxon, ancestor sequence, global FAD/LAD or exact origin interval.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/0/confidenceRationale -->
Wing fossils and developmental experiments: Medium confidence applies to the existence and documented scope of the linked dossiers and their concrete locators. The navigation grouping and displayed envelope are editorial organization, so no biological ancestry or global endpoint is inferred.
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/0 -->
翅化石与发育实验：置信度为中：继承的具体页码、图版或章节定位器支持具名标本或抽样分析的存在与范围；措辞有意把结论限制在该证据内，不把导航包络提升为全球生物边界、直接祖先或精确起源。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/0 -->
翅化石与发育实验导航实体在此仅链接到延限账本已经引用的具名标本、数据集和分析档案；其显示跨度是研究限定的路线或样本包络，不是生物分类单元、祖先序列、全球首末出现或精确起源区间。
<!-- /evo:text -->

## ranges / uncertainty / note

<!-- evo:text /records/ranges/0/uncertainty/note -->
Navigation envelope does not date the origin of wings or powered flight.
<!-- /evo:text -->

## ranges / evidenceBasis

<!-- evo:text /records/ranges/0/evidenceBasis -->
Route links the Paskov wing occurrence and Parhyale developmental experiment.
<!-- /evo:text -->
