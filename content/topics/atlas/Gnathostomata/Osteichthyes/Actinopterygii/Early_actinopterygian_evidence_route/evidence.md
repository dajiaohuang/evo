---
schemaVersion: 1
kind: evidence
records:
  atlas-node:
    name: Early actinopterygian evidence route
    commonName: Devonian and Triassic specimen dossiers
    commonNameZh: 泥盆纪与三叠纪辐鳍鱼标本档案
    rank: navigation group
    taxonId: ""
    firstAppearance: 390.4
    lastAppearance: 241.464
    extinct: false
    entityKind: navigation-group
    contentLevel: dossier
    parentRelationshipKind: navigation-parent
  claims:
    - subject:
        kind: taxon
        path: content/topics/atlas/Gnathostomata/Osteichthyes/Actinopterygii/Early_actinopterygian_evidence_route
      claimKind: scientific
      claimType: taxonomy
      statement:
        markdown: evidence.md
        field: /records/claims/0/statement
      confidence: medium
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/0/confidenceRationale
      reviewedBy: Evo Atlas maintainer primary-source audit
      reviewedAt: 2026-08-31
      reviewedAgainstReferenceVersion: giles-2015-cheirolepis-endoskeleton; inherited concrete-locator audit at 2026.08-static-v5-rc44
      referenceLinks:
        - relation: supports
          referenceId: giles-2015-cheirolepis-endoskeleton
          pages: 849–870
          figure: Figures 2–4 and 9–11
          quoteLocator: Material and methods; anatomical descriptions; Discussion
        - relation: supports
          referenceId: giles-2017-ray-fin-timescale
          pages: 265–268
          figure: Figures 1–3
          quoteLocator: Main text; Methods; Supplementary Data
        - relation: contextualizes
          referenceId: xu-2014-fukangichthys-revision
          pages: 747–759
          quoteLocator: Abstract; Results of phylogenetic analysis
  claim-rationales.zh:
    - markdown: evidence.md
      field: /records/claim-rationales.zh/0
  claim-statements.zh:
    - markdown: evidence.md
      field: /records/claim-statements.zh/0
  ranges:
    - entityPath: content/topics/atlas/Gnathostomata/Osteichthyes/Actinopterygii/Early_actinopterygian_evidence_route
      rangeKind: global-composite
      taxonomicConcept: Early actinopterygian evidence route navigation envelope
      geographicScope: Represented specimen localities only
      olderMa: 390.4
      youngerMa: 241.464
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
        - content/events/Eifelian_Cheirolepis_endoskeleton/evidence.md#/records/claims/0
        - content/events/Fukangichthys_and_crown-actinopterygian_recalibration/evidence.md#/records/claims/0
      referenceLocators:
        - referenceId: giles-2015-cheirolepis-endoskeleton
          locator: pp. 849–870; Figs. 2–4, 9–11
        - referenceId: giles-2017-ray-fin-timescale
          locator: pp. 265–268; Figs. 1–3
      reviewStatus: automated-audit-passed
---

# Early actinopterygian evidence route

## claims / statement

<!-- evo:text /records/claims/0/statement -->
The Early actinopterygian evidence route navigation entity is source-linked only to the named specimen, dataset and analysis dossiers already cited by its range ledger. Its displayed span is a study-bounded route or sample envelope, not a biological taxon, ancestor sequence, global FAD/LAD or exact origin interval.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/0/confidenceRationale -->
Devonian and Triassic specimen dossiers: Medium confidence applies to the existence and documented scope of the linked dossiers and their concrete locators. The navigation grouping and displayed envelope are editorial organization, so no biological ancestry or global endpoint is inferred.
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/0 -->
泥盆纪与三叠纪辐鳍鱼标本档案：置信度为中：继承的具体页码、图版或章节定位器支持具名标本或抽样分析的存在与范围；措辞有意把结论限制在该证据内，不把导航包络提升为全球生物边界、直接祖先或精确起源。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/0 -->
泥盆纪与三叠纪辐鳍鱼标本档案导航实体在此仅链接到延限账本已经引用的具名标本、数据集和分析档案；其显示跨度是研究限定的路线或样本包络，不是生物分类单元、祖先序列、全球首末出现或精确起源区间。
<!-- /evo:text -->

## ranges / uncertainty / note

<!-- evo:text /records/ranges/0/uncertainty/note -->
Navigation envelope across heterogeneous samples; not a lineage duration, global FAD or ancestor sequence.
<!-- /evo:text -->

## ranges / evidenceBasis

<!-- evo:text /records/ranges/0/evidenceBasis -->
The browse interval spans the represented specimen dossiers while preserving each occurrence, topology and interpretation as a separate evidence record.
<!-- /evo:text -->
