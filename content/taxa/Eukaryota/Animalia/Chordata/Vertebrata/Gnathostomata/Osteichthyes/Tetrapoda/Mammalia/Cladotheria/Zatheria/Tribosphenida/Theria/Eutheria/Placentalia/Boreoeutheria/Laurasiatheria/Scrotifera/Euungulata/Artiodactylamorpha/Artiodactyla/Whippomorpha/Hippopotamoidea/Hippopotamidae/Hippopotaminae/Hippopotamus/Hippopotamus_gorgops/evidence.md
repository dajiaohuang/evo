---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Hippopotamus gorgops
    rank: species
    sourceDatasetId: null
    name:
      zh: Hippopotamus gorgops
      en: Hippopotamus gorgops
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
            title: PBDB accepted record — Hippopotamus gorgops
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=77339&show=parent,app,attr
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
            locator: 2026-10-02 occurrence response accepted_no txn:77339; original response record indices retained in data/sources/mammalia-occurrence-guides-2026-10-02-records.jsonl.gz.
            accessedAt: 2026-10-02
            responseSha256: 368dafda8e7422b86d7992dc15a10defe699a9db146057d35e01a82c1c54bfa2
            pbdbTaxonId: txn:77339
            selectedOccurrenceIds:
              - occ:212017
              - occ:212670
              - occ:212725
              - occ:214325
              - occ:216764
              - occ:216815
              - occ:218739
              - occ:218786
              - occ:219804
              - occ:219825
              - occ:219831
              - occ:219848
              - occ:221492
              - occ:221514
              - occ:221526
              - occ:221552
              - occ:221696
              - occ:221780
              - occ:221800
              - occ:221811
              - occ:221926
              - occ:221965
              - occ:222014
              - occ:222070
              - occ:222117
              - occ:222195
              - occ:222426
              - occ:222490
              - occ:222517
              - occ:222529
              - occ:222652
              - occ:222693
              - occ:223071
              - occ:223143
              - occ:223182
              - occ:223205
              - occ:224944
              - occ:225427
              - occ:225442
              - occ:225445
              - occ:225490
              - occ:225507
              - occ:225514
              - occ:225529
              - occ:225554
              - occ:225561
              - occ:225569
              - occ:226299
              - occ:226322
              - occ:227543
              - occ:227568
              - occ:387471
              - occ:395340
              - occ:1401405
            selectedCollectionIds:
              - col:21294
              - col:21521
              - col:21527
              - col:21974
              - col:22041
              - col:22064
              - col:22337
              - col:22342
              - col:22596
              - col:22617
              - col:22621
              - col:22626
              - col:21289
              - col:21291
              - col:21292
              - col:21297
              - col:21343
              - col:21347
              - col:21348
              - col:21350
              - col:21367
              - col:21368
              - col:21370
              - col:21378
              - col:21398
              - col:21403
              - col:21445
              - col:21452
              - col:21454
              - col:21455
              - col:21462
              - col:21464
              - col:21503
              - col:21508
              - col:21514
              - col:21515
              - col:21820
              - col:21833
              - col:21835
              - col:21836
              - col:21838
              - col:21839
              - col:21841
              - col:21843
              - col:21844
              - col:21846
              - col:21848
              - col:21970
              - col:21971
              - col:22207
              - col:22213
              - col:37024
              - col:38039
              - col:193126
            sourceReferenceIds:
              - ref:4454
              - ref:10318
              - ref:4945
              - ref:4478
              - ref:5275
              - ref:5276
              - ref:4468
              - ref:5652
              - ref:4952
              - ref:5596
              - ref:4919
              - ref:4871
              - ref:5269
              - ref:5432
              - ref:5431
              - ref:9913
              - ref:4918
              - ref:65656
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

# Hippopotamus gorgops
