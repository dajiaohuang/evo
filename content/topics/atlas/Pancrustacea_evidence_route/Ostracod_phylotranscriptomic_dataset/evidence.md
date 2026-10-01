---
schemaVersion: 1
kind: evidence
records:
  atlas-node:
    name: Ostracod phylotranscriptomic dataset
    commonName: Ostracod transcriptome and fossil matrix
    commonNameZh: 介形虫转录组与化石矩阵
    rank: research dataset
    taxonId: ""
    firstAppearance: 0
    lastAppearance: 0
    extinct: false
    entityKind: navigation-group
    contentLevel: dossier
    parentRelationshipKind: navigation-parent
  claims:
    - subject:
        kind: taxon
        path: content/topics/atlas/Pancrustacea_evidence_route/Ostracod_phylotranscriptomic_dataset
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
      reviewedAgainstReferenceVersion: oakley-2013-ostracod-phylotranscriptomics; inherited concrete-locator audit at 2026.08-static-v5-rc44
      referenceLinks:
        - referenceId: oakley-2013-ostracod-phylotranscriptomics
          relation: supports
          pages: 215–233
          figure: Figures 1–5; Tables 1–5
          quoteLocator: Transcriptome sequencing; Data subsets; Fossil placement; Discussion
  claim-rationales.zh:
    - markdown: evidence.md
      field: /records/claim-rationales.zh/0
  claim-statements.zh:
    - markdown: evidence.md
      field: /records/claim-statements.zh/0
  ranges:
    - entityPath: content/topics/atlas/Pancrustacea_evidence_route/Ostracod_phylotranscriptomic_dataset
      rangeKind: global-composite
      taxonomicConcept: Ostracod phylotranscriptomic research dataset
      geographicScope: Living-taxon sequence and comparative fossil matrix
      olderMa: 0
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
      confidence: high
      claimPaths:
        - content/events/Ostracod_transcriptomes_and_conditional_pancrustacean_nodes/evidence.md#/records/claims/0
      referenceLocators:
        - referenceId: oakley-2013-ostracod-phylotranscriptomics
          locator: 215–233; Figures 1–5; Tables 1–5
      reviewStatus: automated-audit-passed
---

# Ostracod phylotranscriptomic dataset

## claims / statement

<!-- evo:text /records/claims/0/statement -->
The Ostracod phylotranscriptomic dataset navigation entity is source-linked only to the named specimen, dataset and analysis dossiers already cited by its range ledger. Its displayed span is a study-bounded route or sample envelope, not a biological taxon, ancestor sequence, global FAD/LAD or exact origin interval.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/0/confidenceRationale -->
Ostracod transcriptome and fossil matrix: Medium confidence applies to the existence and documented scope of the linked dossiers and their concrete locators. The navigation grouping and displayed envelope are editorial organization, so no biological ancestry or global endpoint is inferred.
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/0 -->
介形虫转录组与化石矩阵：置信度为中：继承的具体页码、图版或章节定位器支持具名标本或抽样分析的存在与范围；措辞有意把结论限制在该证据内，不把导航包络提升为全球生物边界、直接祖先或精确起源。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/0 -->
介形虫转录组与化石矩阵导航实体在此仅链接到延限账本已经引用的具名标本、数据集和分析档案；其显示跨度是研究限定的路线或样本包络，不是生物分类单元、祖先序列、全球首末出现或精确起源区间。
<!-- /evo:text -->

## ranges / uncertainty / note

<!-- evo:text /records/ranges/0/uncertainty/note -->
Present-day dataset marker; fossil calibrations and modeled nodes retain their own ages.
<!-- /evo:text -->

## ranges / evidenceBasis

<!-- evo:text /records/ranges/0/evidenceBasis -->
Nine new 454 transcriptomes plus existing sequence and morphology partitions.
<!-- /evo:text -->
