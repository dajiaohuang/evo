---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Labidosaurikos meachami
    rank: species
    sourceDatasetId: null
    name:
      zh: Labidosaurikos meachami
      en: Labidosaurikos meachami
    reviewStatus: source-linked
    checkedAt: 2026-10-02
    sections:
      - topic: overview
        sourceIds:
          - pbdbOtherReptiliaTaxonomy20261002
          - pbdbOtherReptiliaOccurrences20261002
          - pbdbOccurrenceFields20261002
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/0/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/0/text/en
      - topic: occurrences
        sourceIds:
          - pbdbOtherReptiliaOccurrences20261002
          - pbdbOccurrenceFields20261002
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/1/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/1/text/en
      - topic: timeline
        sourceIds:
          - pbdbOtherReptiliaOccurrences20261002
          - pbdbOccurrenceFields20261002
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/2/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/2/text/en
      - topic: evidence
        sourceIds:
          - pbdbOtherReptiliaOccurrences20261002
          - pbdbOccurrenceFields20261002
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/3/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/3/text/en
      - topic: sources
        sourceIds:
          - pbdbOtherReptiliaOccurrences20261002
          - pbdbOccurrenceFields20261002
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/4/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/4/text/en
    sources:
      referenceBindings:
        - referenceId: ref-675a7fe7-4458-476e-a876-7fe5a3a30c4a
          metadataVariant: 0
          sourceKey: pbdbOtherReptiliaTaxonomy20261002
          usage:
            title: PBDB accepted record — Labidosaurikos meachami
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=119515&show=parent,app,attr
            locator: Fixed dated accepted species OID and current same-name accepted hierarchy; PBDB ancestry remains separate from COL.
          originalFields:
            - id
            - title
            - url
            - version
            - license
            - locator
        - referenceId: ref-675a7fe7-4458-476e-a876-7fe5a3a30c4a
          metadataVariant: 0
          sourceKey: pbdbOtherReptiliaOccurrences20261002
          usage:
            locator: 2026-10-02 occurrence response accepted_no txn:119515; original response record indices retained in data/sources/other-reptilia-occurrence-guides-2026-10-02-records.jsonl.gz.
            accessedAt: 2026-10-02
            responseSha256: 31ac9f819956f8986cbf6f444ae951461fd801de4d65737e8337007dc854b31f
            pbdbTaxonId: txn:119515
            selectedOccurrenceIds:
              - occ:740383
              - occ:740384
              - occ:748676
              - occ:788176
              - occ:790388
              - occ:790389
              - occ:1317922
              - occ:1317988
              - occ:1328476
              - occ:1328487
            selectedCollectionIds:
              - col:79601
              - col:79602
              - col:27705
              - col:85125
              - col:85556
              - col:85555
              - col:177003
              - col:177019
              - col:67735
              - col:178738
            sourceReferenceIds:
              - ref:26907
              - ref:26714
              - ref:58444
              - ref:59144
            originalIdentificationMappings:
              - occurrenceId: occ:740383
                originalIdentifiedName: Labidosaurikos barkeri n. sp.
                acceptedName: Labidosaurikos meachami
                difference: null
              - occurrenceId: occ:740384
                originalIdentifiedName: Labidosaurikos meachami n. gen. n. sp.
                acceptedName: Labidosaurikos meachami
                difference: null
              - occurrenceId: occ:748676
                originalIdentifiedName: Labidosaurikos barkeri
                acceptedName: Labidosaurikos meachami
                difference: null
              - occurrenceId: occ:788176
                originalIdentifiedName: Labidosaurikos barkeri
                acceptedName: Labidosaurikos meachami
                difference: null
              - occurrenceId: occ:790388
                originalIdentifiedName: Labidosaurikos barkeri
                acceptedName: Labidosaurikos meachami
                difference: null
              - occurrenceId: occ:790389
                originalIdentifiedName: Labidosaurikos barkeri
                acceptedName: Labidosaurikos meachami
                difference: null
              - occurrenceId: occ:1317922
                originalIdentifiedName: Labidosaurikos barkeri
                acceptedName: Labidosaurikos meachami
                difference: null
              - occurrenceId: occ:1317988
                originalIdentifiedName: Labidosaurikos barkeri
                acceptedName: Labidosaurikos meachami
                difference: null
              - occurrenceId: occ:1328487
                originalIdentifiedName: Labidosaurikos barkeri
                acceptedName: Labidosaurikos meachami
                difference: null
            scope:
              zh: 所选有引文、年代和地点的无疑问限定种级记录；不是全种生态或形态综合。
              en: Selected cited species-level records without uncertain qualifiers, with ages and locality context; not whole-species ecology or morphology.
          originalFields:
            - id
            - title
            - url
            - version
            - license
            - locator
            - accessedAt
            - responseSha256
            - pbdbTaxonId
            - selectedOccurrenceIds
            - selectedCollectionIds
            - sourceReferenceIds
            - originalIdentificationMappings
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

# Labidosaurikos meachami
