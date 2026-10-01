---
schemaVersion: 1
kind: evidence
records:
  atlas-node:
    name: Pancrustacea evidence route
    commonName: Pancrustacean fossils and phylogenomics
    commonNameZh: 泛甲壳动物化石与系统基因组证据
    rank: navigation group
    taxonId: ""
    firstAppearance: 521
    lastAppearance: 0
    extinct: false
    entityKind: navigation-group
    contentLevel: dossier
    parentRelationshipKind: navigation-parent
  claims:
    - subject:
        kind: taxon
        path: content/topics/atlas/Pancrustacea_evidence_route
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
      reviewedAgainstReferenceVersion: zhang-2007-yicaris; inherited concrete-locator audit at 2026.08-static-v5-rc44
      referenceLinks:
        - referenceId: zhang-2007-yicaris
          relation: supports
          pages: 595–598
          figure: Figures 1–3
          quoteLocator: Topotype specimens; Reconstruction; Phylogenetic position
        - referenceId: oakley-2013-ostracod-phylotranscriptomics
          relation: supports
          pages: 215–233
          figure: Figures 1–5; Tables 1–5
          quoteLocator: Transcriptome sequencing; Data subsets; Fossil placement; Discussion
        - referenceId: lozano-fernandez-2019-pancrustacea
          relation: supports
          pages: 2055–2070
          figure: Figures 1–5; Supplementary data
          quoteLocator: Dataset assembly; Phylogenetic results; Discussion
        - referenceId: bernot-2023-pancrustacea-sampling
          relation: supports
          pages: msad175
          figure: Figures 2–4; Table 1; Supplementary Tables S1–S4
          quoteLocator: Data set comparison; Taxon sampling experiments; Results
  claim-rationales.zh:
    - markdown: evidence.md
      field: /records/claim-rationales.zh/0
  claim-statements.zh:
    - markdown: evidence.md
      field: /records/claim-statements.zh/0
  ranges:
    - entityPath: content/topics/atlas/Pancrustacea_evidence_route
      rangeKind: global-composite
      taxonomicConcept: Pancrustacean fossil and genomic dossier route
      geographicScope: Represented fossil occurrences and living genomic samples
      olderMa: 521
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
        - content/events/Yicaris_phosphatized_growth_series/evidence.md#/records/claims/0
        - content/events/Ostracod_transcriptomes_and_conditional_pancrustacean_nodes/evidence.md#/records/claims/0
        - content/events/Expanded_remipede_sampling_in_Pancrustacea/evidence.md#/records/claims/0
        - content/events/Pancrustacean_topology_shifts_with_taxon_sampling/evidence.md#/records/claims/0
      referenceLocators:
        - referenceId: zhang-2007-yicaris
          locator: 595–598
        - referenceId: bernot-2023-pancrustacea-sampling
          locator: msad175; Figures 2–4
      reviewStatus: automated-audit-passed
---

# Pancrustacea evidence route

## claims / statement

<!-- evo:text /records/claims/0/statement -->
The Pancrustacea evidence route navigation entity is source-linked only to the named specimen, dataset and analysis dossiers already cited by its range ledger. Its displayed span is a study-bounded route or sample envelope, not a biological taxon, ancestor sequence, global FAD/LAD or exact origin interval.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/0/confidenceRationale -->
Pancrustacean fossils and phylogenomics: Medium confidence applies to the existence and documented scope of the linked dossiers and their concrete locators. The navigation grouping and displayed envelope are editorial organization, so no biological ancestry or global endpoint is inferred.
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/0 -->
泛甲壳动物化石与系统基因组证据：置信度为中：继承的具体页码、图版或章节定位器支持具名标本或抽样分析的存在与范围；措辞有意把结论限制在该证据内，不把导航包络提升为全球生物边界、直接祖先或精确起源。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/0 -->
泛甲壳动物化石与系统基因组证据导航实体在此仅链接到延限账本已经引用的具名标本、数据集和分析档案；其显示跨度是研究限定的路线或样本包络，不是生物分类单元、祖先序列、全球首末出现或精确起源区间。
<!-- /evo:text -->

## ranges / uncertainty / note

<!-- evo:text /records/ranges/0/uncertainty/note -->
Navigation envelope joins heterogeneous evidence and is not a crown-age estimate.
<!-- /evo:text -->

## ranges / evidenceBasis

<!-- evo:text /records/ranges/0/evidenceBasis -->
Envelope spans the Yicaris dossier and living phylogenomic datasets.
<!-- /evo:text -->
