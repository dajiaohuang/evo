---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Sciuravus nitidus
    rank: species
    sourceDatasetId: null
    name:
      zh: Sciuravus nitidus
      en: Sciuravus nitidus
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
            title: PBDB accepted record — Sciuravus nitidus
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=51463&show=parent,app,attr
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
            locator: 2026-10-02 occurrence response accepted_no txn:51463; original response record indices retained in data/sources/mammalia-occurrence-guides-2026-10-02-records.jsonl.gz.
            accessedAt: 2026-10-02
            responseSha256: 368dafda8e7422b86d7992dc15a10defe699a9db146057d35e01a82c1c54bfa2
            pbdbTaxonId: txn:51463
            selectedOccurrenceIds:
              - occ:170984
              - occ:173411
              - occ:173425
              - occ:173452
              - occ:173459
              - occ:173465
              - occ:173477
              - occ:173513
              - occ:173518
              - occ:173533
              - occ:173567
              - occ:173593
              - occ:173610
              - occ:173622
              - occ:173625
              - occ:173648
              - occ:173662
              - occ:173673
              - occ:173674
              - occ:173677
              - occ:173685
              - occ:173689
              - occ:173698
              - occ:173701
              - occ:173704
              - occ:174126
              - occ:174143
              - occ:174208
              - occ:174238
              - occ:174277
              - occ:174440
              - occ:174521
              - occ:174535
              - occ:174539
              - occ:174552
              - occ:174562
              - occ:174610
              - occ:174636
              - occ:174672
              - occ:174680
              - occ:174702
              - occ:174714
              - occ:174734
              - occ:174747
              - occ:174765
              - occ:174791
              - occ:174801
              - occ:174819
              - occ:174825
              - occ:174858
              - occ:174880
              - occ:174885
              - occ:174888
              - occ:174901
              - occ:174909
              - occ:174911
              - occ:174930
              - occ:174935
              - occ:174946
              - occ:174950
              - occ:175110
              - occ:175213
              - occ:175253
              - occ:175427
              - occ:175435
              - occ:175448
              - occ:175808
              - occ:176380
              - occ:1051981
            selectedCollectionIds:
              - col:15669
              - col:16079
              - col:16083
              - col:16090
              - col:16091
              - col:16092
              - col:16095
              - col:16098
              - col:16099
              - col:16100
              - col:16106
              - col:16108
              - col:16109
              - col:16111
              - col:16112
              - col:16114
              - col:16116
              - col:16118
              - col:16119
              - col:16120
              - col:16125
              - col:16126
              - col:16129
              - col:16130
              - col:16132
              - col:16219
              - col:16221
              - col:16227
              - col:16228
              - col:16232
              - col:16244
              - col:16262
              - col:16270
              - col:16271
              - col:16273
              - col:16276
              - col:16284
              - col:16287
              - col:16300
              - col:16302
              - col:16305
              - col:16306
              - col:16309
              - col:16310
              - col:16313
              - col:16315
              - col:16318
              - col:16324
              - col:16328
              - col:16341
              - col:16347
              - col:16350
              - col:16351
              - col:16355
              - col:16357
              - col:16358
              - col:16366
              - col:16369
              - col:16377
              - col:16381
              - col:16409
              - col:16431
              - col:16441
              - col:16500
              - col:16502
              - col:16504
              - col:16576
              - col:16647
              - col:129895
            sourceReferenceIds:
              - ref:1248
              - ref:3596
              - ref:1737
              - ref:3609
              - ref:1623
              - ref:2523
              - ref:1336
              - ref:2526
              - ref:2495
              - ref:1405
              - ref:42170
            originalIdentificationMappings:
              - occurrenceId: occ:174238
                originalIdentifiedName: Sciuravus nitidus n. sp.
                acceptedName: Sciuravus nitidus
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

# Sciuravus nitidus
