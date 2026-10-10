---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Thryptacodon antiquus
    rank: species
    sourceDatasetId: null
    name:
      zh: Thryptacodon antiquus
      en: Thryptacodon antiquus
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
            title: PBDB accepted record — Thryptacodon antiquus
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=52284&show=parent,app,attr
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
            locator: 2026-10-02 occurrence response accepted_no txn:52284; original response record indices retained in data/sources/mammalia-occurrence-guides-2026-10-02-records.jsonl.gz.
            accessedAt: 2026-10-02
            responseSha256: 368dafda8e7422b86d7992dc15a10defe699a9db146057d35e01a82c1c54bfa2
            pbdbTaxonId: txn:52284
            selectedOccurrenceIds:
              - occ:166489
              - occ:169070
              - occ:169231
              - occ:169308
              - occ:169354
              - occ:169397
              - occ:169543
              - occ:169583
              - occ:169638
              - occ:169690
              - occ:169720
              - occ:169882
              - occ:169926
              - occ:170157
              - occ:170340
              - occ:170902
              - occ:171270
              - occ:171325
              - occ:171518
              - occ:171846
              - occ:172161
              - occ:172593
              - occ:172808
              - occ:172982
              - occ:173378
              - occ:173395
              - occ:174010
              - occ:456906
              - occ:457674
              - occ:457702
              - occ:457754
              - occ:458626
              - occ:458677
              - occ:462566
              - occ:462592
              - occ:462609
              - occ:462672
              - occ:463028
              - occ:469081
              - occ:469098
              - occ:469175
              - occ:469206
              - occ:469257
              - occ:469281
              - occ:469302
              - occ:469383
              - occ:469562
              - occ:469612
              - occ:469930
              - occ:469952
              - occ:469968
              - occ:470451
              - occ:470494
              - occ:470565
              - occ:470630
              - occ:470652
              - occ:470684
              - occ:470701
              - occ:470794
              - occ:470839
              - occ:470920
              - occ:470924
              - occ:470942
              - occ:471062
              - occ:471122
              - occ:471149
              - occ:471171
              - occ:471255
              - occ:471276
              - occ:471285
              - occ:471360
            selectedCollectionIds:
              - col:15034
              - col:15493
              - col:15507
              - col:15510
              - col:15512
              - col:15514
              - col:15520
              - col:15522
              - col:15524
              - col:15531
              - col:15532
              - col:15544
              - col:15548
              - col:15555
              - col:15563
              - col:15662
              - col:15725
              - col:15729
              - col:15756
              - col:15793
              - col:15845
              - col:15915
              - col:15934
              - col:15964
              - col:16076
              - col:16078
              - col:16207
              - col:15683
              - col:15694
              - col:15695
              - col:15699
              - col:15702
              - col:15705
              - col:15586
              - col:15588
              - col:15589
              - col:15592
              - col:15594
              - col:46637
              - col:46639
              - col:46646
              - col:46650
              - col:46657
              - col:46659
              - col:46662
              - col:46673
              - col:46690
              - col:46693
              - col:46723
              - col:46726
              - col:46727
              - col:46766
              - col:46768
              - col:46774
              - col:46780
              - col:46782
              - col:46785
              - col:46786
              - col:46792
              - col:46795
              - col:46801
              - col:46802
              - col:46803
              - col:46809
              - col:46813
              - col:46814
              - col:46816
              - col:46821
              - col:46823
              - col:46824
              - col:46831
            sourceReferenceIds:
              - ref:2536
              - ref:2953
              - ref:3021
              - ref:6294
              - ref:1616
              - ref:2528
              - ref:3714
              - ref:6196
              - ref:11717
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

# Thryptacodon antiquus
