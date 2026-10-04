---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Metridiochoerus andrewsi
    rank: species
    sourceDatasetId: null
    name:
      zh: Metridiochoerus andrewsi
      en: Metridiochoerus andrewsi
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
            title: PBDB accepted record — Metridiochoerus andrewsi
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=133595&show=parent,app,attr
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
            locator: 2026-10-02 occurrence response accepted_no txn:133595; original response record indices retained in data/sources/mammalia-occurrence-guides-2026-10-02-records.jsonl.gz.
            accessedAt: 2026-10-02
            responseSha256: 368dafda8e7422b86d7992dc15a10defe699a9db146057d35e01a82c1c54bfa2
            pbdbTaxonId: txn:133595
            selectedOccurrenceIds:
              - occ:212650
              - occ:212668
              - occ:212693
              - occ:212715
              - occ:212762
              - occ:214231
              - occ:218170
              - occ:218194
              - occ:218221
              - occ:218693
              - occ:218713
              - occ:219076
              - occ:219219
              - occ:219606
              - occ:219617
              - occ:219629
              - occ:221374
              - occ:221433
              - occ:221467
              - occ:221491
              - occ:221512
              - occ:221525
              - occ:221536
              - occ:221565
              - occ:221675
              - occ:221718
              - occ:221738
              - occ:221809
              - occ:221830
              - occ:221844
              - occ:221924
              - occ:221994
              - occ:222013
              - occ:222047
              - occ:222069
              - occ:222087
              - occ:222116
              - occ:222147
              - occ:222162
              - occ:222234
              - occ:222247
              - occ:222250
              - occ:222266
              - occ:222304
              - occ:222329
              - occ:222516
              - occ:222561
              - occ:222588
              - occ:222619
              - occ:222651
              - occ:222677
              - occ:222691
              - occ:222718
              - occ:222734
              - occ:222748
              - occ:222773
              - occ:222788
              - occ:222797
              - occ:222808
              - occ:222814
              - occ:222941
              - occ:222990
              - occ:223039
              - occ:223070
              - occ:223103
              - occ:223204
              - occ:223710
              - occ:225012
              - occ:226182
              - occ:339312
              - occ:339425
              - occ:339517
              - occ:340085
              - occ:340143
              - occ:340187
              - occ:388506
              - occ:395196
              - occ:397020
              - occ:656689
              - occ:879319
            selectedCollectionIds:
              - col:21520
              - col:21521
              - col:21523
              - col:21526
              - col:21532
              - col:21961
              - col:22268
              - col:22269
              - col:22270
              - col:22324
              - col:22327
              - col:22482
              - col:22496
              - col:22560
              - col:22564
              - col:22568
              - col:21280
              - col:21283
              - col:21286
              - col:21289
              - col:21291
              - col:21292
              - col:21293
              - col:21301
              - col:21342
              - col:21344
              - col:21345
              - col:21350
              - col:21352
              - col:21353
              - col:21367
              - col:21369
              - col:21370
              - col:21376
              - col:21378
              - col:21396
              - col:21398
              - col:21399
              - col:21402
              - col:21410
              - col:21411
              - col:21413
              - col:21415
              - col:21420
              - col:21422
              - col:21454
              - col:21457
              - col:21458
              - col:21461
              - col:21462
              - col:21463
              - col:21464
              - col:21467
              - col:21471
              - col:21472
              - col:21474
              - col:21475
              - col:21476
              - col:21477
              - col:21478
              - col:21495
              - col:21498
              - col:21502
              - col:21503
              - col:21504
              - col:21515
              - col:21621
              - col:21824
              - col:21960
              - col:32051
              - col:32053
              - col:32058
              - col:32077
              - col:32085
              - col:32060
              - col:22492
              - col:22498
              - col:21401
              - col:70907
              - col:97499
            sourceReferenceIds:
              - ref:10217
              - ref:5261
              - ref:5562
              - ref:5574
              - ref:5481
              - ref:5616
              - ref:9955
              - ref:5624
              - ref:4454
              - ref:5596
              - ref:4447
              - ref:4896
              - ref:5260
              - ref:10211
              - ref:23775
              - ref:33258
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

# Metridiochoerus andrewsi
