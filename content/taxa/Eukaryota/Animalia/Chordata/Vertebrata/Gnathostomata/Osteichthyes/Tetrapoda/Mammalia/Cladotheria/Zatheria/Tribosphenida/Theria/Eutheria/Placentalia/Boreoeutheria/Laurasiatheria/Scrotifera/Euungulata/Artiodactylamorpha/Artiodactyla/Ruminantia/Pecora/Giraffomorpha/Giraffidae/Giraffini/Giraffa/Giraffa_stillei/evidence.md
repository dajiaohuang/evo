---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Giraffa stillei
    rank: species
    sourceDatasetId: null
    name:
      zh: Giraffa stillei
      en: Giraffa stillei
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
            title: PBDB accepted record — Giraffa stillei
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=185973&show=parent,app,attr
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
            locator: 2026-10-02 occurrence response accepted_no txn:185973; original response record indices retained in data/sources/mammalia-occurrence-guides-2026-10-02-records.jsonl.gz.
            accessedAt: 2026-10-02
            responseSha256: 368dafda8e7422b86d7992dc15a10defe699a9db146057d35e01a82c1c54bfa2
            pbdbTaxonId: txn:185973
            selectedOccurrenceIds:
              - occ:212758
              - occ:213340
              - occ:213373
              - occ:213468
              - occ:213477
              - occ:214276
              - occ:217898
              - occ:218643
              - occ:218669
              - occ:221920
              - occ:222009
              - occ:222067
              - occ:222083
              - occ:222112
              - occ:222157
              - occ:222193
              - occ:222231
              - occ:222424
              - occ:222453
              - occ:222513
              - occ:222556
              - occ:222602
              - occ:222646
              - occ:222745
              - occ:222870
              - occ:222889
              - occ:222939
              - occ:222971
              - occ:223038
              - occ:223200
              - occ:224459
              - occ:224467
              - occ:224481
              - occ:224544
              - occ:224548
              - occ:224563
              - occ:224570
              - occ:224587
              - occ:224602
              - occ:224627
              - occ:224654
              - occ:224676
              - occ:224695
              - occ:224717
              - occ:224743
              - occ:224764
              - occ:224803
              - occ:224810
              - occ:224841
              - occ:224862
              - occ:224887
              - occ:224898
              - occ:225339
              - occ:225361
              - occ:225390
              - occ:339261
              - occ:361618
              - occ:402775
              - occ:659302
            selectedCollectionIds:
              - col:21532
              - col:21783
              - col:21785
              - col:21807
              - col:21809
              - col:21970
              - col:22235
              - col:22321
              - col:22323
              - col:21367
              - col:21370
              - col:21378
              - col:21396
              - col:21398
              - col:21402
              - col:21403
              - col:21410
              - col:21445
              - col:21448
              - col:21454
              - col:21457
              - col:21459
              - col:21462
              - col:21472
              - col:21484
              - col:21485
              - col:21495
              - col:21496
              - col:21502
              - col:21515
              - col:21787
              - col:21788
              - col:21790
              - col:21792
              - col:21793
              - col:21794
              - col:21795
              - col:21796
              - col:21798
              - col:21799
              - col:21800
              - col:21801
              - col:21802
              - col:21804
              - col:21805
              - col:21806
              - col:21808
              - col:21810
              - col:21811
              - col:21812
              - col:21813
              - col:21814
              - col:21830
              - col:21831
              - col:21832
              - col:32050
              - col:22239
              - col:21503
              - col:22160
            sourceReferenceIds:
              - ref:10320
              - ref:4847
              - ref:4782
              - ref:4451
              - ref:5269
              - ref:8636
              - ref:5479
              - ref:5492
              - ref:5357
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

# Giraffa stillei
