---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Metridiochoerus compactus
    rank: species
    sourceDatasetId: null
    name:
      zh: Metridiochoerus compactus
      en: Metridiochoerus compactus
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
            title: PBDB accepted record — Metridiochoerus compactus
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=375011&show=parent,app,attr
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
            locator: 2026-10-02 occurrence response accepted_no txn:375011; original response record indices retained in data/sources/mammalia-occurrence-guides-2026-10-02-records.jsonl.gz.
            accessedAt: 2026-10-02
            responseSha256: 368dafda8e7422b86d7992dc15a10defe699a9db146057d35e01a82c1c54bfa2
            pbdbTaxonId: txn:375011
            selectedOccurrenceIds:
              - occ:212016
              - occ:212058
              - occ:212651
              - occ:212669
              - occ:212694
              - occ:212710
              - occ:212773
              - occ:212774
              - occ:214292
              - occ:214324
              - occ:216763
              - occ:216814
              - occ:218671
              - occ:218707
              - occ:219089
              - occ:219252
              - occ:219578
              - occ:219699
              - occ:219718
              - occ:219843
              - occ:219867
              - occ:221513
              - occ:221543
              - occ:221551
              - occ:221558
              - occ:221695
              - occ:221778
              - occ:221799
              - occ:221810
              - occ:221822
              - occ:221925
              - occ:221964
              - occ:221995
              - occ:222194
              - occ:222425
              - occ:222467
              - occ:222528
              - occ:222589
              - occ:222678
              - occ:222692
              - occ:222723
              - occ:222934
              - occ:222942
              - occ:223181
              - occ:225426
              - occ:226298
              - occ:229114
              - occ:229132
              - occ:229140
              - occ:388530
              - occ:395152
              - occ:395197
            selectedCollectionIds:
              - col:21294
              - col:21300
              - col:21520
              - col:21521
              - col:21523
              - col:21525
              - col:21533
              - col:21534
              - col:21971
              - col:21974
              - col:22041
              - col:22064
              - col:22323
              - col:22326
              - col:22484
              - col:22499
              - col:22557
              - col:22582
              - col:22584
              - col:22623
              - col:22627
              - col:21291
              - col:21296
              - col:21297
              - col:21298
              - col:21343
              - col:21347
              - col:21348
              - col:21350
              - col:21351
              - col:21367
              - col:21368
              - col:21369
              - col:21403
              - col:21445
              - col:21449
              - col:21455
              - col:21458
              - col:21463
              - col:21464
              - col:21468
              - col:21491
              - col:21495
              - col:21514
              - col:21833
              - col:21970
              - col:22614
              - col:22618
              - col:22620
              - col:22494
              - col:22491
              - col:22498
            sourceReferenceIds:
              - ref:4454
              - ref:10217
              - ref:4945
              - ref:4478
              - ref:5492
              - ref:5481
              - ref:5616
              - ref:5627
              - ref:5638
              - ref:5647
              - ref:4933
              - ref:10215
              - ref:4919
              - ref:5269
              - ref:5615
              - ref:5275
              - ref:4948
              - ref:9955
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

# Metridiochoerus compactus
