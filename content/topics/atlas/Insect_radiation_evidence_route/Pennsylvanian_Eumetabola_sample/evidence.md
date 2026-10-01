---
schemaVersion: 1
kind: evidence
records:
  atlas-node:
    name: Pennsylvanian Eumetabola sample
    commonName: Five Carboniferous insect fossils
    commonNameZh: 五件石炭纪真变态类昆虫化石
    rank: research sample
    taxonId: ""
    firstAppearance: 315
    lastAppearance: 299
    extinct: true
    entityKind: navigation-group
    contentLevel: dossier
    parentRelationshipKind: navigation-parent
  claims:
    - subject:
        kind: taxon
        path: content/topics/atlas/Insect_radiation_evidence_route/Pennsylvanian_Eumetabola_sample
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
      reviewedAgainstReferenceVersion: nel-2013-eumetabola-fossils; inherited concrete-locator audit at 2026.08-static-v5-rc44
      referenceLinks:
        - referenceId: nel-2013-eumetabola-fossils
          relation: supports
          pages: 257–261
          figure: Figures 1–4; Supplementary Information
          quoteLocator: Five fossil descriptions and localities
  claim-rationales.zh:
    - markdown: evidence.md
      field: /records/claim-rationales.zh/0
  claim-statements.zh:
    - markdown: evidence.md
      field: /records/claim-statements.zh/0
  ranges:
    - entityPath: content/topics/atlas/Insect_radiation_evidence_route/Pennsylvanian_Eumetabola_sample
      rangeKind: global-composite
      taxonomicConcept: Pennsylvanian Eumetabola five-fossil sample
      geographicScope: Moscovian and Gzhelian fossil localities in France and Russia
      olderMa: 315
      youngerMa: 299
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
        - content/events/Five_Pennsylvanian_eumetabolan_fossils/evidence.md#/records/claims/0
      referenceLocators:
        - referenceId: nel-2013-eumetabola-fossils
          locator: 257–261; Figures 1–4; Supplementary Information
      reviewStatus: automated-audit-passed
---

# Pennsylvanian Eumetabola sample

## claims / statement

<!-- evo:text /records/claims/0/statement -->
Pennsylvanian Eumetabola sample is bounded here by five fossils from Moscovian and Gzhelian localities in France and Russia; this composite sample is not one lineage range or a complete Eumetabola history.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/0/confidenceRationale -->
Five Carboniferous insect fossils: Medium confidence applies to the named specimen or sampled analysis at the inherited concrete locator. The wording deliberately limits the claim to that evidence and does not promote a range-ledger display envelope into a global biological boundary.
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/0 -->
五件石炭纪真变态类昆虫化石：置信度为中：继承的具体页码、图版或章节定位器支持具名标本或抽样分析的存在与范围；措辞有意把结论限制在该证据内，不把导航包络提升为全球生物边界、直接祖先或精确起源。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/0 -->
宾夕法尼亚亚纪真变态类样本在此由来自法国和俄罗斯莫斯科阶与格舍尔阶地点的五件化石约束；这一复合样本不是单一谱系延限或完整的真变态类历史。
<!-- /evo:text -->

## ranges / uncertainty / note

<!-- evo:text /records/ranges/0/uncertainty/note -->
Composite envelope across five specimens and localities, not one lineage range.
<!-- /evo:text -->

## ranges / evidenceBasis

<!-- evo:text /records/ranges/0/evidenceBasis -->
The study describes a stem coleopterid, larva, stem hymenopterid, hemipteran and psocodean.
<!-- /evo:text -->
