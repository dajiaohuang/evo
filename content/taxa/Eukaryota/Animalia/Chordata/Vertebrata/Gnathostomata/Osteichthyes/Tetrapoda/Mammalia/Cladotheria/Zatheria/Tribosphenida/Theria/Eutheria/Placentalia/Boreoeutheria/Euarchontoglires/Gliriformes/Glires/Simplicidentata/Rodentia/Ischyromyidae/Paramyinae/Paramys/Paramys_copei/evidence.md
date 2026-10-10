---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Paramys copei
    rank: species
    sourceDatasetId: null
    name:
      zh: Paramys copei
      en: Paramys copei
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
            title: PBDB accepted record — Paramys copei
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=49890&show=parent,app,attr
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
            locator: 2026-10-02 occurrence response accepted_no txn:49890; original response record indices retained in data/sources/mammalia-occurrence-guides-2026-10-02-records.jsonl.gz.
            accessedAt: 2026-10-02
            responseSha256: 368dafda8e7422b86d7992dc15a10defe699a9db146057d35e01a82c1c54bfa2
            pbdbTaxonId: txn:49890
            selectedOccurrenceIds:
              - occ:167797
              - occ:167986
              - occ:168037
              - occ:168066
              - occ:168097
              - occ:168139
              - occ:168148
              - occ:168199
              - occ:168237
              - occ:168309
              - occ:168330
              - occ:168590
              - occ:168605
              - occ:168621
              - occ:168837
              - occ:168861
              - occ:170822
              - occ:170899
              - occ:170943
              - occ:171136
              - occ:172308
              - occ:172330
              - occ:172468
              - occ:172504
              - occ:172525
              - occ:172606
              - occ:172631
              - occ:172740
              - occ:172776
              - occ:172799
              - occ:172846
              - occ:172886
              - occ:172962
              - occ:173123
              - occ:173323
              - occ:173357
              - occ:173406
              - occ:173877
              - occ:174031
              - occ:174355
              - occ:174386
              - occ:174490
              - occ:174644
              - occ:174974
              - occ:175156
              - occ:175222
              - occ:456879
              - occ:456901
              - occ:457725
              - occ:457750
              - occ:457785
              - occ:458666
              - occ:458684
              - occ:458704
              - occ:469304
              - occ:469494
              - occ:469761
              - occ:469807
              - occ:469921
              - occ:470023
              - occ:470232
              - occ:470338
              - occ:470374
              - occ:470490
              - occ:470521
              - occ:470552
              - occ:470845
              - occ:470863
              - occ:470882
              - occ:471055
              - occ:471217
              - occ:471337
              - occ:471394
              - occ:471505
              - occ:471534
              - occ:638373
              - occ:1314863
            selectedCollectionIds:
              - col:15225
              - col:15277
              - col:15293
              - col:15304
              - col:15317
              - col:15334
              - col:15338
              - col:15350
              - col:15357
              - col:15374
              - col:15377
              - col:15446
              - col:15447
              - col:15448
              - col:15472
              - col:15479
              - col:15651
              - col:15662
              - col:15663
              - col:15710
              - col:15880
              - col:15885
              - col:15901
              - col:15906
              - col:15910
              - col:15915
              - col:15917
              - col:15930
              - col:15933
              - col:15934
              - col:15937
              - col:15942
              - col:15964
              - col:16005
              - col:16067
              - col:16073
              - col:16078
              - col:16198
              - col:16207
              - col:16240
              - col:16241
              - col:16254
              - col:16289
              - col:16388
              - col:16415
              - col:16435
              - col:15680
              - col:15683
              - col:15697
              - col:15699
              - col:15701
              - col:15705
              - col:15706
              - col:15707
              - col:46663
              - col:46685
              - col:46704
              - col:46707
              - col:46721
              - col:46731
              - col:46748
              - col:46758
              - col:46760
              - col:46768
              - col:46771
              - col:46773
              - col:46796
              - col:46797
              - col:46798
              - col:46809
              - col:46819
              - col:46830
              - col:46834
              - col:46845
              - col:46847
              - col:15454
              - col:118482
            sourceReferenceIds:
              - ref:2078
              - ref:1494
              - ref:1333
              - ref:1618
              - ref:2921
              - ref:1616
              - ref:2311
              - ref:1097
              - ref:1375
              - ref:6294
              - ref:3329
              - ref:3336
              - ref:6196
              - ref:2104
              - ref:1760
              - ref:1749
              - ref:1115
              - ref:11717
              - ref:19815
              - ref:58065
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

# Paramys copei
