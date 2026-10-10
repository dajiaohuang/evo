---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Proterosuchus fergusi
    rank: species
    sourceDatasetId: null
    name:
      zh: Proterosuchus fergusi
      en: Proterosuchus fergusi
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
            title: PBDB accepted record — Proterosuchus fergusi
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=184525&show=parent,app,attr
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
            locator: 2026-10-02 occurrence response accepted_no txn:184525; original response record indices retained in data/sources/other-reptilia-occurrence-guides-2026-10-02-records.jsonl.gz.
            accessedAt: 2026-10-02
            responseSha256: 31ac9f819956f8986cbf6f444ae951461fd801de4d65737e8337007dc854b31f
            pbdbTaxonId: txn:184525
            selectedOccurrenceIds:
              - occ:922665
              - occ:922716
              - occ:980035
              - occ:980048
              - occ:980055
              - occ:980061
              - occ:980064
              - occ:1320336
              - occ:1347615
              - occ:1347617
              - occ:1347619
              - occ:1347620
              - occ:1380554
            selectedCollectionIds:
              - col:88282
              - col:85948
              - col:117176
              - col:117179
              - col:117183
              - col:117184
              - col:117185
              - col:144326
              - col:182575
              - col:182576
              - col:182577
              - col:188978
            sourceReferenceIds:
              - ref:37664
              - ref:37667
              - ref:37663
              - ref:37669
              - ref:37672
              - ref:37673
              - ref:27216
              - ref:60752
              - ref:63462
            originalIdentificationMappings:
              - occurrenceId: occ:922665
                originalIdentifiedName: Chasmatosaurus vanhoepeni n. gen. n. sp.
                acceptedName: Proterosuchus fergusi
                difference: null
              - occurrenceId: occ:922716
                originalIdentifiedName: Elaphrosuchus rubidgei n. gen. n. sp.
                acceptedName: Proterosuchus fergusi
                difference: null
              - occurrenceId: occ:980048
                originalIdentifiedName: Chasmatosaurus vanhoepeni
                acceptedName: Proterosuchus fergusi
                difference: null
              - occurrenceId: occ:980055
                originalIdentifiedName: Chasmatosaurus vanhoepeni
                acceptedName: Proterosuchus fergusi
                difference: null
              - occurrenceId: occ:980064
                originalIdentifiedName: Proterosuchus fergusi n. gen. n. sp.
                acceptedName: Proterosuchus fergusi
                difference: null
              - occurrenceId: occ:1320336
                originalIdentifiedName: Proterosuchus vanhoepeni
                acceptedName: Proterosuchus fergusi
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

# Proterosuchus fergusi
