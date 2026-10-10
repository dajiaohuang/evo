---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Deinotherium bozasi
    rank: species
    sourceDatasetId: null
    name:
      zh: Deinotherium bozasi
      en: Deinotherium bozasi
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
            title: PBDB accepted record — Deinotherium bozasi
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=157873&show=parent,app,attr
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
            locator: 2026-10-02 occurrence response accepted_no txn:157873; original response record indices retained in data/sources/mammalia-occurrence-guides-2026-10-02-records.jsonl.gz.
            accessedAt: 2026-10-02
            responseSha256: 368dafda8e7422b86d7992dc15a10defe699a9db146057d35e01a82c1c54bfa2
            pbdbTaxonId: txn:157873
            selectedOccurrenceIds:
              - occ:212018
              - occ:212200
              - occ:212817
              - occ:213319
              - occ:213343
              - occ:213376
              - occ:217849
              - occ:217968
              - occ:218141
              - occ:218171
              - occ:218195
              - occ:218222
              - occ:218430
              - occ:218449
              - occ:218646
              - occ:218672
              - occ:218744
              - occ:221375
              - occ:221399
              - occ:221566
              - occ:221596
              - occ:221602
              - occ:221719
              - occ:221739
              - occ:221845
              - occ:221899
              - occ:221927
              - occ:222015
              - occ:222048
              - occ:222118
              - occ:222222
              - occ:222235
              - occ:222305
              - occ:222333
              - occ:222590
              - occ:222611
              - occ:222620
              - occ:222653
              - occ:222694
              - occ:222815
              - occ:222855
              - occ:222862
              - occ:222920
              - occ:222991
              - occ:223072
              - occ:224353
              - occ:224378
              - occ:224386
              - occ:224603
              - occ:224677
              - occ:224718
              - occ:224811
              - occ:225362
              - occ:227776
              - occ:227821
              - occ:228907
              - occ:339255
              - occ:358705
              - occ:360119
              - occ:361399
              - occ:361612
              - occ:395187
              - occ:1565800
              - occ:1589534
              - occ:1589566
              - occ:1639868
            selectedCollectionIds:
              - col:21294
              - col:21336
              - col:21539
              - col:21762
              - col:21783
              - col:21785
              - col:22234
              - col:22237
              - col:22267
              - col:22268
              - col:22269
              - col:22270
              - col:22277
              - col:22278
              - col:22321
              - col:22323
              - col:22338
              - col:21280
              - col:21282
              - col:21301
              - col:21306
              - col:21307
              - col:21344
              - col:21345
              - col:21353
              - col:21356
              - col:21367
              - col:21370
              - col:21376
              - col:21398
              - col:21408
              - col:21410
              - col:21420
              - col:21424
              - col:21458
              - col:21460
              - col:21461
              - col:21462
              - col:21464
              - col:21478
              - col:21481
              - col:21482
              - col:21488
              - col:21498
              - col:21503
              - col:21758
              - col:21767
              - col:21769
              - col:21798
              - col:21801
              - col:21804
              - col:21810
              - col:21831
              - col:22250
              - col:22262
              - col:22478
              - col:32050
              - col:22241
              - col:22242
              - col:22235
              - col:22239
              - col:22492
              - col:221108
              - col:224655
              - col:224657
              - col:232486
            sourceReferenceIds:
              - ref:4454
              - ref:4648
              - ref:10214
              - ref:4782
              - ref:4847
              - ref:8636
              - ref:5571
              - ref:5562
              - ref:5574
              - ref:5563
              - ref:5479
              - ref:5492
              - ref:5549
              - ref:4835
              - ref:4451
              - ref:5384
              - ref:5428
              - ref:5294
              - ref:9955
              - ref:77329
              - ref:80990
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

# Deinotherium bozasi
