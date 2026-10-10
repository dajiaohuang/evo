---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Hyopsodus minusculus
    rank: species
    sourceDatasetId: null
    name:
      zh: Hyopsodus minusculus
      en: Hyopsodus minusculus
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
            title: PBDB accepted record — Hyopsodus minusculus
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=47179&show=parent,app,attr
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
            locator: 2026-10-02 occurrence response accepted_no txn:47179; original response record indices retained in data/sources/mammalia-occurrence-guides-2026-10-02-records.jsonl.gz.
            accessedAt: 2026-10-02
            responseSha256: 368dafda8e7422b86d7992dc15a10defe699a9db146057d35e01a82c1c54bfa2
            pbdbTaxonId: txn:47179
            selectedOccurrenceIds:
              - occ:173413
              - occ:173458
              - occ:173476
              - occ:173484
              - occ:173493
              - occ:173509
              - occ:173517
              - occ:173530
              - occ:173539
              - occ:173544
              - occ:173558
              - occ:173576
              - occ:173588
              - occ:173607
              - occ:173619
              - occ:173631
              - occ:173644
              - occ:173653
              - occ:173660
              - occ:173676
              - occ:173695
              - occ:173703
              - occ:173911
              - occ:173946
              - occ:174134
              - occ:174146
              - occ:174173
              - occ:174188
              - occ:174282
              - occ:174446
              - occ:174488
              - occ:174500
              - occ:174518
              - occ:174563
              - occ:174618
              - occ:174642
              - occ:174665
              - occ:174728
              - occ:174761
              - occ:174785
              - occ:174799
              - occ:174807
              - occ:174811
              - occ:174820
              - occ:174823
              - occ:174830
              - occ:174841
              - occ:174864
              - occ:174992
              - occ:175048
              - occ:175106
              - occ:175147
              - occ:175243
              - occ:175260
              - occ:175300
              - occ:175428
              - occ:175453
            selectedCollectionIds:
              - col:16079
              - col:16091
              - col:16095
              - col:16096
              - col:16097
              - col:16098
              - col:16099
              - col:16100
              - col:16101
              - col:16103
              - col:16105
              - col:16107
              - col:16108
              - col:16109
              - col:16111
              - col:16113
              - col:16114
              - col:16115
              - col:16116
              - col:16120
              - col:16129
              - col:16132
              - col:16201
              - col:16204
              - col:16219
              - col:16221
              - col:16226
              - col:16227
              - col:16232
              - col:16246
              - col:16254
              - col:16255
              - col:16262
              - col:16276
              - col:16284
              - col:16289
              - col:16295
              - col:16309
              - col:16313
              - col:16315
              - col:16316
              - col:16320
              - col:16321
              - col:16325
              - col:16327
              - col:16330
              - col:16335
              - col:16343
              - col:16393
              - col:16396
              - col:16408
              - col:16415
              - col:16439
              - col:16441
              - col:16451
              - col:16500
              - col:16504
            sourceReferenceIds:
              - ref:3596
              - ref:1737
              - ref:3603
              - ref:6223
              - ref:7017
              - ref:3609
              - ref:11982
              - ref:1248
              - ref:1623
              - ref:1749
              - ref:6194
              - ref:1619
            originalIdentificationMappings:
              - occurrenceId: occ:174500
                originalIdentifiedName: Hyopsodus minusculus n. sp.
                acceptedName: Hyopsodus minusculus
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

# Hyopsodus minusculus
