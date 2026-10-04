---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Theropithecus oswaldi
    rank: species
    sourceDatasetId: null
    name:
      zh: Theropithecus oswaldi
      en: Theropithecus oswaldi
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
            title: PBDB accepted record — Theropithecus oswaldi
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=133586&show=parent,app,attr
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
            locator: 2026-10-02 occurrence response accepted_no txn:133586; original response record indices retained in data/sources/mammalia-occurrence-guides-2026-10-02-records.jsonl.gz.
            accessedAt: 2026-10-02
            responseSha256: 368dafda8e7422b86d7992dc15a10defe699a9db146057d35e01a82c1c54bfa2
            pbdbTaxonId: txn:133586
            selectedOccurrenceIds:
              - occ:212012
              - occ:212322
              - occ:212336
              - occ:212357
              - occ:212681
              - occ:212697
              - occ:212713
              - occ:213506
              - occ:217178
              - occ:217510
              - occ:218904
              - occ:219198
              - occ:221509
              - occ:221557
              - occ:221586
              - occ:221692
              - occ:221775
              - occ:221796
              - occ:221827
              - occ:221991
              - occ:222252
              - occ:222273
              - occ:222274
              - occ:222394
              - occ:222437
              - occ:222471
              - occ:222498
              - occ:222535
              - occ:222705
              - occ:222727
              - occ:222760
              - occ:222924
              - occ:223004
              - occ:223016
              - occ:223130
              - occ:223503
              - occ:223520
              - occ:223631
              - occ:223692
              - occ:223707
              - occ:223736
              - occ:223831
              - occ:223936
              - occ:224059
              - occ:224070
              - occ:224085
              - occ:224099
              - occ:224103
              - occ:224123
              - occ:224156
              - occ:224190
              - occ:224230
              - occ:225071
              - occ:225264
              - occ:226276
              - occ:226393
              - occ:226495
              - occ:226545
              - occ:229030
              - occ:229117
              - occ:229142
              - occ:340196
              - occ:387417
              - occ:388515
              - occ:388541
              - occ:395167
              - occ:395206
              - occ:395342
              - occ:395348
            selectedCollectionIds:
              - col:21294
              - col:21377
              - col:21395
              - col:21399
              - col:21522
              - col:21524
              - col:21526
              - col:21825
              - col:22131
              - col:22197
              - col:22347
              - col:22493
              - col:21291
              - col:21298
              - col:21305
              - col:21343
              - col:21347
              - col:21348
              - col:21352
              - col:21369
              - col:21414
              - col:21416
              - col:21417
              - col:21442
              - col:21446
              - col:21451
              - col:21453
              - col:21456
              - col:21466
              - col:21470
              - col:21473
              - col:21490
              - col:21499
              - col:21500
              - col:21506
              - col:21578
              - col:21583
              - col:21610
              - col:21619
              - col:21621
              - col:21625
              - col:21632
              - col:21645
              - col:21663
              - col:21666
              - col:21668
              - col:21669
              - col:21670
              - col:21672
              - col:21678
              - col:21683
              - col:21742
              - col:21824
              - col:21828
              - col:21966
              - col:21988
              - col:22007
              - col:22015
              - col:22596
              - col:22614
              - col:22620
              - col:32060
              - col:34911
              - col:22492
              - col:22494
              - col:22491
              - col:22498
              - col:38039
              - col:38040
            sourceReferenceIds:
              - ref:4454
              - ref:4469
              - ref:4488
              - ref:4447
              - ref:4892
              - ref:5365
              - ref:5366
              - ref:5550
              - ref:5627
              - ref:4760
              - ref:4486
              - ref:4455
              - ref:4769
              - ref:4768
              - ref:5263
              - ref:4763
              - ref:4896
              - ref:4888
              - ref:5276
              - ref:5615
              - ref:4948
              - ref:10211
              - ref:9910
              - ref:9955
              - ref:4918
              - ref:10100
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

# Theropithecus oswaldi
