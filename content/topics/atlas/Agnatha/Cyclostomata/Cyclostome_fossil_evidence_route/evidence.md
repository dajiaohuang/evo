---
schemaVersion: 1
kind: evidence
records:
  atlas-node:
    name: Cyclostome fossil evidence route
    commonName: Lamprey and hagfish fossil dossiers
    commonNameZh: 七鳃鳗与盲鳗化石档案
    rank: navigation group
    taxonId: ""
    firstAppearance: 360
    lastAppearance: 0
    extinct: false
    entityKind: navigation-group
    contentLevel: dossier
    parentRelationshipKind: navigation-parent
  claims:
    - subject:
        kind: taxon
        path: content/topics/atlas/Agnatha/Cyclostomata/Cyclostome_fossil_evidence_route
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
      reviewedAgainstReferenceVersion: gess-2006-priscomyzon; inherited concrete-locator audit at 2026.08-static-v5-rc44
      referenceLinks:
        - relation: supports
          referenceId: gess-2006-priscomyzon
          pages: 981–984
          figure: Figures 1–3
          quoteLocator: Abstract; holotype description and reconstruction; phylogenetic hypotheses
        - relation: supports
          referenceId: miyashita-2020-myxinikela
          pages: 850–865, especially pp. 852–860
          figure: Figures 1–4 and 8; Table 1
          quoteLocator: Systematic palaeontology; material and locality; revised anatomy; taphonomy; Discussion
        - relation: supports
          referenceId: miyashita-2019-tethymyxine
          pages: 2146–2151
          figure: Figures 1–3; Supplementary Figures S1–S4
          quoteLocator: "Systematic palaeontology: holotype, horizon and locality; morphology-based phylogenetic results"
  claim-rationales.zh:
    - markdown: evidence.md
      field: /records/claim-rationales.zh/0
  claim-statements.zh:
    - markdown: evidence.md
      field: /records/claim-statements.zh/0
  ranges:
    - entityPath: content/topics/atlas/Agnatha/Cyclostomata/Cyclostome_fossil_evidence_route
      rangeKind: global-composite
      taxonomicConcept: Cyclostome fossil evidence route navigation envelope
      geographicScope: Represented specimen localities only
      olderMa: 360
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
        - content/events/Priscomyzon_preserves_a_Devonian_lamprey_oral_disc/evidence.md#/records/claims/0
        - content/events/Myxinikela_records_a_Carboniferous_stem_hagfish/evidence.md#/records/claims/0
        - content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Agnatha/Cyclostomi/Myxini/evidence.md#/records/claims/1
      referenceLocators:
        - referenceId: gess-2006-priscomyzon
          locator: pp. 981–984; Figs. 1–2
        - referenceId: miyashita-2020-myxinikela
          locator: pp. 850–865; Figs. 1–4, 8
        - referenceId: miyashita-2019-tethymyxine
          locator: pp. 2146–2151; Figs. 1–3
      reviewStatus: automated-audit-passed
---

# Cyclostome fossil evidence route

## claims / statement

<!-- evo:text /records/claims/0/statement -->
The Cyclostome fossil evidence route navigation entity is source-linked only to the named specimen, dataset and analysis dossiers already cited by its range ledger. Its displayed span is a study-bounded route or sample envelope, not a biological taxon, ancestor sequence, global FAD/LAD or exact origin interval.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/0/confidenceRationale -->
Lamprey and hagfish fossil dossiers: Medium confidence applies to the existence and documented scope of the linked dossiers and their concrete locators. The navigation grouping and displayed envelope are editorial organization, so no biological ancestry or global endpoint is inferred.
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/0 -->
七鳃鳗与盲鳗化石档案：置信度为中：继承的具体页码、图版或章节定位器支持具名标本或抽样分析的存在与范围；措辞有意把结论限制在该证据内，不把导航包络提升为全球生物边界、直接祖先或精确起源。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/0 -->
七鳃鳗与盲鳗化石档案导航实体在此仅链接到延限账本已经引用的具名标本、数据集和分析档案；其显示跨度是研究限定的路线或样本包络，不是生物分类单元、祖先序列、全球首末出现或精确起源区间。
<!-- /evo:text -->

## ranges / uncertainty / note

<!-- evo:text /records/ranges/0/uncertainty/note -->
Navigation envelope across heterogeneous samples; not a lineage duration, global FAD or ancestor sequence.
<!-- /evo:text -->

## ranges / evidenceBasis

<!-- evo:text /records/ranges/0/evidenceBasis -->
The browse interval spans the represented specimen dossiers while preserving each occurrence, topology and interpretation as a separate evidence record.
<!-- /evo:text -->
