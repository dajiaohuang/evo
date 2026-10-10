---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Nyanzachoerus jaegeri
    rank: species
    sourceDatasetId: null
    name:
      zh: Nyanzachoerus jaegeri
      en: Nyanzachoerus jaegeri
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
      - topic: occurrences
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
      - topic: timeline
        sourceIds:
          - pbdbMammaliaOccurrences20261002
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
          - pbdbMammaliaOccurrences20261002
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
          - pbdbMammaliaOccurrences20261002
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
        - referenceId: ref-d9daed02-7dc5-41b7-9cb9-616d52f8b19a
          metadataVariant: 0
          sourceKey: pbdbMammaliaTaxonomy20261002
          usage:
            title: PBDB accepted record — Nyanzachoerus jaegeri
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=374989&show=parent,app,attr
            locator: Fixed dated accepted species OID and current same-name accepted hierarchy; PBDB ancestry remains separate from COL.
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
            locator: 2026-10-02 occurrence response accepted_no txn:374989; original response record indices retained in data/sources/mammalia-occurrence-guides-2026-10-02-records.jsonl.gz.
            accessedAt: 2026-10-02
            responseSha256: 368dafda8e7422b86d7992dc15a10defe699a9db146057d35e01a82c1c54bfa2
            pbdbTaxonId: txn:374989
            selectedOccurrenceIds:
              - occ:217368
              - occ:217876
              - occ:217974
              - occ:218139
              - occ:218429
              - occ:218448
              - occ:218704
              - occ:218721
              - occ:221223
              - occ:226640
              - occ:227774
              - occ:227788
              - occ:228504
              - occ:228505
              - occ:228506
              - occ:228509
              - occ:228510
              - occ:228511
              - occ:228512
              - occ:228514
              - occ:228515
              - occ:228521
              - occ:228525
              - occ:228526
              - occ:228528
              - occ:228529
              - occ:228530
              - occ:228532
              - occ:228536
              - occ:228537
              - occ:228543
              - occ:228546
              - occ:228548
              - occ:228551
              - occ:228558
              - occ:228559
              - occ:228562
              - occ:228612
              - occ:228613
              - occ:228629
              - occ:228656
              - occ:228681
              - occ:228686
              - occ:228724
              - occ:228767
            selectedCollectionIds:
              - col:22176
              - col:22235
              - col:22237
              - col:22267
              - col:22277
              - col:22278
              - col:22325
              - col:22328
              - col:22399
              - col:22031
              - col:22249
              - col:22254
              - col:22364
              - col:22365
              - col:22367
              - col:22368
              - col:22369
              - col:22372
              - col:22373
              - col:22374
              - col:22375
              - col:22376
              - col:22377
              - col:22378
              - col:22380
              - col:22381
              - col:22382
              - col:22383
              - col:22385
              - col:22386
              - col:22400
              - col:22405
              - col:22412
              - col:22414
              - col:22426
              - col:22436
            sourceReferenceIds:
              - ref:4442
              - ref:8636
              - ref:5571
              - ref:5563
              - ref:5481
              - ref:5385
              - ref:5282
              - ref:5432
              - ref:5428
              - ref:5427
              - ref:5433
              - ref:5384
              - ref:5435
              - ref:5436
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

# Nyanzachoerus jaegeri
