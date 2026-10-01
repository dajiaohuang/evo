---
schemaVersion: 1
kind: evidence
records:
  atlas-node:
    name: 1KITE insect phylogenomics dataset
    commonName: Insect transcriptome matrix
    commonNameZh: 昆虫转录组矩阵
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
        path: content/topics/atlas/Insect_radiation_evidence_route/1KITE_insect_phylogenomics_dataset
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
      reviewedAgainstReferenceVersion: misof-2014-insect-phylogenomics; inherited concrete-locator audit at 2026.08-static-v5-rc44
      referenceLinks:
        - referenceId: misof-2014-insect-phylogenomics
          relation: supports
          pages: 763–767
          figure: Figures 1–3; Supplementary Tables; BioProject PRJNA183205
          quoteLocator: Taxon and gene sampling; phylogenetic analyses; divergence dating
  claim-rationales.zh:
    - markdown: evidence.md
      field: /records/claim-rationales.zh/0
  claim-statements.zh:
    - markdown: evidence.md
      field: /records/claim-statements.zh/0
  ranges:
    - entityPath: content/topics/atlas/Insect_radiation_evidence_route/1KITE_insect_phylogenomics_dataset
      rangeKind: global-composite
      taxonomicConcept: 1KITE insect phylogenomics dataset
      geographicScope: Living sampled insect transcriptomes, BioProject PRJNA183205
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
        - content/events/1KITE_insect_topology_and_calibrated_time_model/evidence.md#/records/claims/0
      referenceLocators:
        - referenceId: misof-2014-insect-phylogenomics
          locator: 763–767; Figures 1–3; BioProject PRJNA183205
      reviewStatus: automated-audit-passed
---

# 1KITE insect phylogenomics dataset

## claims / statement

<!-- evo:text /records/claims/0/statement -->
The 1KITE insect phylogenomics dataset navigation entity is source-linked only to the named specimen, dataset and analysis dossiers already cited by its range ledger. Its displayed span is a study-bounded route or sample envelope, not a biological taxon, ancestor sequence, global FAD/LAD or exact origin interval.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/0/confidenceRationale -->
Insect transcriptome matrix: Medium confidence applies to the existence and documented scope of the linked dossiers and their concrete locators. The navigation grouping and displayed envelope are editorial organization, so no biological ancestry or global endpoint is inferred.
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/0 -->
昆虫转录组矩阵：置信度为中：继承的具体页码、图版或章节定位器支持具名标本或抽样分析的存在与范围；措辞有意把结论限制在该证据内，不把导航包络提升为全球生物边界、直接祖先或精确起源。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/0 -->
昆虫转录组矩阵导航实体在此仅链接到延限账本已经引用的具名标本、数据集和分析档案；其显示跨度是研究限定的路线或样本包络，不是生物分类单元、祖先序列、全球首末出现或精确起源区间。
<!-- /evo:text -->

## ranges / uncertainty / note

<!-- evo:text /records/ranges/0/uncertainty/note -->
Present-day research-dataset marker; modeled node ages are not occurrence ranges.
<!-- /evo:text -->

## ranges / evidenceBasis

<!-- evo:text /records/ranges/0/evidenceBasis -->
The published matrix includes 144 species and 1,478 protein-coding genes.
<!-- /evo:text -->
