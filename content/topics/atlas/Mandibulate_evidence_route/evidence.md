---
schemaVersion: 1
kind: evidence
records:
  atlas-node:
    name: Mandibulate evidence route
    commonName: Mandibulate fossil dossiers
    commonNameZh: 有颚肢类化石证据档案
    rank: navigation group
    taxonId: ""
    firstAppearance: 508
    lastAppearance: 0
    extinct: false
    entityKind: navigation-group
    contentLevel: dossier
    parentRelationshipKind: navigation-parent
  claims:
    - subject:
        kind: taxon
        path: content/topics/atlas/Mandibulate_evidence_route
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
      reviewedAgainstReferenceVersion: aria-caron-2017-tokummia; inherited concrete-locator audit at 2026.08-static-v5-rc44
      referenceLinks:
        - referenceId: aria-caron-2017-tokummia
          relation: supports
          pages: 89–92
          figure: Figures 1–4; Extended Data Figures 1–5
          quoteLocator: Diagnosis; Mandibles and maxillipeds; Phylogenetic results
        - referenceId: vannier-2018-waptia
          relation: supports
          pages: 1–34
          figure: Figures 2, 8–10, 23–24
          quoteLocator: Material; Mandibles; Phylogenetic position; Palaeoecology
  claim-rationales.zh:
    - markdown: evidence.md
      field: /records/claim-rationales.zh/0
  claim-statements.zh:
    - markdown: evidence.md
      field: /records/claim-statements.zh/0
  ranges:
    - entityPath: content/topics/atlas/Mandibulate_evidence_route
      rangeKind: global-composite
      taxonomicConcept: Mandibulate fossil dossier navigation route
      geographicScope: Represented Cambrian fossil samples and living context
      olderMa: 508
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
        - content/events/Tokummia_mandibles_and_subdivided_limb_bases/evidence.md#/records/claims/0
        - content/events/Waptia_specimen_series_and_mandibulate_anatomy/evidence.md#/records/claims/0
      referenceLocators:
        - referenceId: aria-caron-2017-tokummia
          locator: 89–92; Figures 1–4
        - referenceId: vannier-2018-waptia
          locator: 1–34; Figures 8–10, 23–24
      reviewStatus: automated-audit-passed
---

# Mandibulate evidence route

## claims / statement

<!-- evo:text /records/claims/0/statement -->
The Mandibulate evidence route navigation entity is source-linked only to the named specimen, dataset and analysis dossiers already cited by its range ledger. Its displayed span is a study-bounded route or sample envelope, not a biological taxon, ancestor sequence, global FAD/LAD or exact origin interval.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/0/confidenceRationale -->
Mandibulate fossil dossiers: Medium confidence applies to the existence and documented scope of the linked dossiers and their concrete locators. The navigation grouping and displayed envelope are editorial organization, so no biological ancestry or global endpoint is inferred.
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/0 -->
有颚肢类化石证据档案：置信度为中：继承的具体页码、图版或章节定位器支持具名标本或抽样分析的存在与范围；措辞有意把结论限制在该证据内，不把导航包络提升为全球生物边界、直接祖先或精确起源。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/0 -->
有颚肢类化石证据档案导航实体在此仅链接到延限账本已经引用的具名标本、数据集和分析档案；其显示跨度是研究限定的路线或样本包络，不是生物分类单元、祖先序列、全球首末出现或精确起源区间。
<!-- /evo:text -->

## ranges / uncertainty / note

<!-- evo:text /records/ranges/0/uncertainty/note -->
Navigation envelope only; it is not a crown age, lineage duration or global FAD.
<!-- /evo:text -->

## ranges / evidenceBasis

<!-- evo:text /records/ranges/0/evidenceBasis -->
Browse envelope spans the represented Tokummia and Waptia dossiers to living mandibulate context.
<!-- /evo:text -->
