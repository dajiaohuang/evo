---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Omomys carteri
    rank: species
    sourceDatasetId: null
    name:
      zh: Omomys carteri
      en: Omomys carteri
    reviewStatus: source-linked
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
            title: PBDB accepted record — Omomys carteri
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=49314&show=parent,app,attr
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
            locator: 2026-10-02 occurrence response accepted_no txn:49314; original response record indices retained in data/sources/mammalia-occurrence-guides-2026-10-02-records.jsonl.gz.
            accessedAt: 2026-10-02
            responseSha256: 368dafda8e7422b86d7992dc15a10defe699a9db146057d35e01a82c1c54bfa2
            pbdbTaxonId: txn:49314
            selectedOccurrenceIds:
              - occ:173450
              - occ:173457
              - occ:173462
              - occ:173483
              - occ:173492
              - occ:173508
              - occ:173529
              - occ:173557
              - occ:173565
              - occ:173575
              - occ:173587
              - occ:173606
              - occ:173630
              - occ:173643
              - occ:173671
              - occ:173675
              - occ:173731
              - occ:173925
              - occ:174122
              - occ:174183
              - occ:174225
              - occ:174273
              - occ:174343
              - occ:174527
              - occ:174533
              - occ:174632
              - occ:174695
              - occ:174711
              - occ:174727
              - occ:174744
              - occ:174760
              - occ:174784
              - occ:174806
              - occ:174814
              - occ:174818
              - occ:174843
              - occ:174867
              - occ:174882
              - occ:174926
              - occ:175041
              - occ:175172
              - occ:175212
              - occ:175250
              - occ:175316
              - occ:175326
              - occ:175424
              - occ:175445
              - occ:175883
              - occ:175900
              - occ:176082
              - occ:176184
              - occ:176372
              - occ:220042
              - occ:286341
              - occ:805512
              - occ:805513
              - occ:805514
              - occ:805516
              - occ:1051985
              - occ:1389204
              - occ:1599693
              - occ:1599694
            selectedCollectionIds:
              - col:16090
              - col:16091
              - col:16092
              - col:16096
              - col:16097
              - col:16098
              - col:16100
              - col:16105
              - col:16106
              - col:16107
              - col:16108
              - col:16109
              - col:16113
              - col:16114
              - col:16118
              - col:16120
              - col:16137
              - col:16203
              - col:16219
              - col:16227
              - col:16228
              - col:16232
              - col:16240
              - col:16266
              - col:16270
              - col:16287
              - col:16305
              - col:16306
              - col:16309
              - col:16310
              - col:16313
              - col:16315
              - col:16320
              - col:16322
              - col:16324
              - col:16336
              - col:16344
              - col:16349
              - col:16366
              - col:16396
              - col:16418
              - col:16431
              - col:16441
              - col:16461
              - col:16465
              - col:16500
              - col:16504
              - col:16586
              - col:16587
              - col:16614
              - col:16624
              - col:16647
              - col:16296
              - col:15837
              - col:16650
              - col:16528
              - col:16550
              - col:16652
              - col:129895
              - col:128447
              - col:16462
              - col:226066
            sourceReferenceIds:
              - ref:1737
              - ref:1404
              - ref:1115
              - ref:3596
              - ref:3609
              - ref:941
              - ref:3331
              - ref:1248
              - ref:2523
              - ref:2526
              - ref:2182
              - ref:2640
              - ref:3353
              - ref:1777
              - ref:3605
              - ref:3667
              - ref:2495
              - ref:2742
              - ref:7542
              - ref:29561
              - ref:42170
              - ref:63670
              - ref:81902
            originalIdentificationMappings:
              - occurrenceId: occ:1389204
                originalIdentifiedName: Omomys carteri n. gen. n. sp.
                acceptedName: Omomys carteri
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

# Omomys carteri
