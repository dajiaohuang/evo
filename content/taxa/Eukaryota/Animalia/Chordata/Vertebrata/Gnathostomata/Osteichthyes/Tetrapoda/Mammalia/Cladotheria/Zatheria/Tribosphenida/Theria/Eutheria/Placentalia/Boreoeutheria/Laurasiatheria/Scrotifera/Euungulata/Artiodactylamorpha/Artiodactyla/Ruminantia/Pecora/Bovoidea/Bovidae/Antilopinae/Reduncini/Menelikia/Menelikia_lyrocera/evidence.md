---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Menelikia lyrocera
    rank: species
    sourceDatasetId: null
    name:
      zh: Menelikia lyrocera
      en: Menelikia lyrocera
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
            title: PBDB accepted record — Menelikia lyrocera
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=374850&show=parent,app,attr
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
            locator: 2026-10-02 occurrence response accepted_no txn:374850; original response record indices retained in data/sources/mammalia-occurrence-guides-2026-10-02-records.jsonl.gz.
            accessedAt: 2026-10-02
            responseSha256: 368dafda8e7422b86d7992dc15a10defe699a9db146057d35e01a82c1c54bfa2
            pbdbTaxonId: txn:374850
            selectedOccurrenceIds:
              - occ:212029
              - occ:221477
              - occ:221571
              - occ:221592
              - occ:221683
              - occ:221704
              - occ:221929
              - occ:222018
              - occ:222050
              - occ:222072
              - occ:222121
              - occ:222165
              - occ:222196
              - occ:222455
              - occ:222518
              - occ:222564
              - occ:222622
              - occ:222655
              - occ:222680
              - occ:222735
              - occ:222750
              - occ:222762
              - occ:222775
              - occ:222799
              - occ:222817
              - occ:222945
              - occ:222973
              - occ:222992
              - occ:223075
              - occ:223108
              - occ:223184
              - occ:223206
              - occ:223327
              - occ:223342
              - occ:223361
              - occ:223429
              - occ:223454
              - occ:223627
              - occ:223714
              - occ:223984
              - occ:223999
              - occ:224243
              - occ:224268
              - occ:224272
              - occ:226264
              - occ:226377
              - occ:226405
              - occ:226409
              - occ:226412
              - occ:226525
              - occ:226534
              - occ:226662
              - occ:227241
              - occ:227260
              - occ:227264
              - occ:227336
              - occ:227342
              - occ:228399
            selectedCollectionIds:
              - col:21294
              - col:21286
              - col:21301
              - col:21305
              - col:21342
              - col:21343
              - col:21367
              - col:21370
              - col:21376
              - col:21378
              - col:21398
              - col:21402
              - col:21403
              - col:21448
              - col:21454
              - col:21457
              - col:21461
              - col:21462
              - col:21463
              - col:21471
              - col:21472
              - col:21473
              - col:21474
              - col:21476
              - col:21478
              - col:21495
              - col:21496
              - col:21498
              - col:21503
              - col:21504
              - col:21514
              - col:21515
              - col:21548
              - col:21550
              - col:21553
              - col:21565
              - col:21567
              - col:21609
              - col:21621
              - col:21654
              - col:21655
              - col:21743
              - col:21748
              - col:21749
              - col:21964
              - col:21986
              - col:21990
              - col:21991
              - col:21992
              - col:22012
              - col:22014
              - col:22039
              - col:22084
              - col:22090
              - col:22091
              - col:22106
              - col:22107
              - col:22346
            sourceReferenceIds:
              - ref:4454
              - ref:10321
              - ref:4768
              - ref:4769
              - ref:4447
              - ref:5281
              - ref:4774
              - ref:4776
              - ref:5330
              - ref:5336
              - ref:5332
              - ref:5327
              - ref:5328
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

# Menelikia lyrocera
