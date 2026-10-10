---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Euthecodon brumpti
    rank: species
    sourceDatasetId: null
    name:
      zh: Euthecodon brumpti
      en: Euthecodon brumpti
    checkedAt: 2026-10-02
    sections:
      - topic: overview
        sourceIds:
          - pbdbCrocodylomorphTaxonomy20261002
          - pbdbCrocodylomorphOccurrences20261002
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
          - pbdbCrocodylomorphOccurrences20261002
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
          - pbdbCrocodylomorphOccurrences20261002
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
          - pbdbCrocodylomorphOccurrences20261002
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
          - pbdbCrocodylomorphOccurrences20261002
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
        - referenceId: ref-30f8d58a-bd48-4206-a2c0-6f84e8dffebf
          metadataVariant: 0
          sourceKey: pbdbCrocodylomorphTaxonomy20261002
          usage:
            title: PBDB accepted record — Euthecodon brumpti
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=266684&show=parent,app,attr
            locator: Fixed dated accepted species OID and current same-name accepted hierarchy; PBDB ancestry remains separate from COL.
          originalFields:
            - id
            - title
            - url
            - version
            - license
            - locator
        - referenceId: ref-30f8d58a-bd48-4206-a2c0-6f84e8dffebf
          metadataVariant: 0
          sourceKey: pbdbCrocodylomorphOccurrences20261002
          usage:
            locator: 2026-10-02 occurrence response accepted_no txn:266684; original response record indices retained in data/sources/crocodylomorph-occurrence-guides-2026-10-02-records.jsonl.gz.
            accessedAt: 2026-10-02
            responseSha256: c4a662dc45be8020da61b782b38d37ab583c35a2e4bdf978ceca29e010472ca1
            pbdbTaxonId: txn:266684
            selectedOccurrenceIds:
              - occ:212044
              - occ:212061
              - occ:212231
              - occ:212306
              - occ:212327
              - occ:212687
              - occ:212703
              - occ:212721
              - occ:212749
              - occ:212780
              - occ:212811
              - occ:218754
              - occ:222257
              - occ:222399
              - occ:222442
              - occ:222477
              - occ:222504
              - occ:222541
              - occ:222711
              - occ:222929
              - occ:222950
              - occ:222980
              - occ:223009
              - occ:223024
              - occ:223171
              - occ:339529
              - occ:340154
              - occ:358660
              - occ:360085
              - occ:361386
              - occ:361601
              - occ:1639875
            selectedCollectionIds:
              - col:21294
              - col:21300
              - col:21341
              - col:21369
              - col:21377
              - col:21522
              - col:21524
              - col:21526
              - col:21531
              - col:21534
              - col:21538
              - col:22338
              - col:21414
              - col:21442
              - col:21446
              - col:21451
              - col:21453
              - col:21456
              - col:21466
              - col:21490
              - col:21495
              - col:21497
              - col:21499
              - col:21500
              - col:21513
              - col:32058
              - col:32085
              - col:22241
              - col:22242
              - col:22235
              - col:22239
              - col:232486
            sourceReferenceIds:
              - ref:4454
              - ref:4469
              - ref:4447
              - ref:5549
              - ref:4760
              - ref:4486
              - ref:4455
              - ref:4488
              - ref:10211
              - ref:8636
              - ref:86649
            originalIdentificationMappings: []
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

# Euthecodon brumpti
