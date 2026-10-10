---
schemaVersion: 1
kind: evidence
records:
  atlas-node:
    name: Ambolestes
    commonName: Ambolestes
    commonNameZh: 无惧兽
    rank: genus
    taxonId: txn:371741
    firstAppearance: 126
    lastAppearance: 125
    extinct: true
    entityKind: taxon
    contentLevel: dossier
    parentRelationshipKind: navigation-parent
  claims:
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Mammalia/Cladotheria/Zatheria/Tribosphenida/Theria/Eutheria/Ambolestes
      claimKind: scientific
      claimType: fossil-range
      statement:
        markdown: evidence.md
        field: /records/claims/0/statement
      confidence: medium
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/0/confidenceRationale
      referenceLinks:
        - relation: supports
          referenceId: bi-2018-ambolestes
          pages: 390–395
          figure: Figures 1–5
          quoteLocator: Holotype; geological setting; phylogenetic analysis
  claim-rationales.zh:
    - markdown: evidence.md
      field: /records/claim-rationales.zh/0
  claim-statements.zh:
    - markdown: evidence.md
      field: /records/claim-statements.zh/0
  ranges:
    - entityPath: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Mammalia/Cladotheria/Zatheria/Tribosphenida/Theria/Eutheria/Ambolestes
      rangeKind: global-composite
      taxonomicConcept: Ambolestes zhoui holotype occurrence
      geographicScope: Lujiatun Unit, Yixian Formation, Liaoning, China
      olderMa: 126
      youngerMa: 125
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
        - content/events/Ambolestes_and_a_revised_therian_boundary/evidence.md#/records/claims/0
      referenceLocators:
        - referenceId: bi-2018-ambolestes
          locator: 390–395; Figures 1–5
  catalogue-profile:
    scientificName: Ambolestes
    rank: genus
    sourceDatasetId: null
    name:
      zh: Ambolestes
      en: Ambolestes
    checkedAt: 2026-10-02
    sections:
      - topic: overview
        sourceIds:
          - pbdbMammaliaTaxonomy20261002
          - pbdbMammaliaOccurrences20261002
          - pbdbOccurrenceFields20261002
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/0/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/0/text/en
      - topic: readingPath
        sourceIds:
          - pbdbMammaliaOccurrences20261002
          - pbdbOccurrenceFields20261002
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/1/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/1/text/en
    sources:
      referenceBindings:
        - referenceId: ref-d9daed02-7dc5-41b7-9cb9-616d52f8b19a
          metadataVariant: 0
          sourceKey: pbdbMammaliaTaxonomy20261002
          usage:
            title: PBDB classification — Ambolestes
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=371741
            locator: Recorded PBDB parent closure beneath the already documented Mammalia COL-compatible storage anchor.
          originalFields:
            - id
            - title
            - url
            - version
            - license
            - locator
        - referenceId: ref-d9daed02-7dc5-41b7-9cb9-616d52f8b19a
          metadataVariant: 0
          sourceKey: pbdbMammaliaOccurrences20261002
          usage:
            locator: 2026-10-02 recorded hierarchy and this batch’s selected member occurrence rows.
            accessedAt: 2026-10-02
            pbdbTaxonId: txn:371741
            readingTargets:
              - name: Ambolestes zhoui
                pbdbTaxonId: txn:371742
                canonicalPath: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Mammalia/Cladotheria/Zatheria/Tribosphenida/Theria/Eutheria/Ambolestes/Ambolestes_zhoui
            scope:
              zh: 本批物种出现记录的阅读路径，不是整个类群的生态总结。
              en: Reading path through this batch’s species occurrence records, not a whole-group ecological summary.
          originalFields:
            - id
            - title
            - url
            - version
            - license
            - locator
            - accessedAt
            - pbdbTaxonId
            - readingTargets
            - scope
        - referenceId: ref-c4887d31-ff09-4384-b816-a87cb63d0c54
          metadataVariant: 0
          sourceKey: pbdbOccurrenceFields20261002
          usage:
            locator: "occs/list_doc.html: accepted_no/name; identified_name/modifiers; max_ma/min_ma; collection fields; env, strat and ctaph output blocks; taxa/list_doc.html: parent and app fields."
            accessedAt: 2026-10-02
            scope:
              zh: 解释数据库出现、采集、年代与层位字段，不替代原论文或标本复核。
              en: Interpret database occurrence, collection, age and strata fields; not a substitute for original papers or specimen review.
          originalFields:
            - id
            - title
            - url
            - version
            - license
            - locator
            - accessedAt
            - scope
    limitations:
      zh:
        markdown: page.zh.md
        field: /records/catalogue-profile/limitations/zh
      en:
        markdown: page.en.md
        field: /records/catalogue-profile/limitations/en
---

# Ambolestes

## claims / statement

<!-- evo:text /records/claims/0/statement -->
Ambolestes zhoui is bounded by near-complete holotype STM33-5 from the Lujiatun Unit of the Yixian Formation within an approximately 126–125 Ma interval; its eutherian placement is matrix-dependent and does not make it a direct placental ancestor.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/0/confidenceRationale -->
The holotype and unit are direct evidence; higher placement and implications for the metatherian record are analytical.
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/0 -->
正模与地层单元属于直接证据；高阶位置及其对后兽类记录的含义属于分析结果。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/0 -->
Ambolestes zhoui 由义县组陆家屯层近完整正模 STM33-5 约束，处于约 1.26 亿—1.25 亿年前区间；其真兽类位置依赖矩阵，不使其成为胎盘类直接祖先。
<!-- /evo:text -->

## ranges / uncertainty / note

<!-- evo:text /records/ranges/0/uncertainty/note -->
This is a study-level occurrence or model-bounded navigation interval, not a guaranteed global first appearance, direct origination date or ancestor range.
<!-- /evo:text -->

## ranges / evidenceBasis

<!-- evo:text /records/ranges/0/evidenceBasis -->
STM33-5 is the near-complete holotype reported from the Lujiatun Unit.
<!-- /evo:text -->
