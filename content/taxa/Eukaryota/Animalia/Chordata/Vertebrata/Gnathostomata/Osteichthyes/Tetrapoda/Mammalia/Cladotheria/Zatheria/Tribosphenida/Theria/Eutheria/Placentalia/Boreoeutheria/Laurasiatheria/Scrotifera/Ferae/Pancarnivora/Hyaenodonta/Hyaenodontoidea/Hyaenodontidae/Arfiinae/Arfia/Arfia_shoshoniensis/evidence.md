---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Arfia shoshoniensis
    rank: species
    sourceDatasetId: null
    name:
      zh: Arfia shoshoniensis
      en: Arfia shoshoniensis
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
            title: PBDB accepted record — Arfia shoshoniensis
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=51601&show=parent,app,attr
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
            locator: 2026-10-02 occurrence response accepted_no txn:51601; original response record indices retained in data/sources/mammalia-occurrence-guides-2026-10-02-records.jsonl.gz.
            accessedAt: 2026-10-02
            responseSha256: 368dafda8e7422b86d7992dc15a10defe699a9db146057d35e01a82c1c54bfa2
            pbdbTaxonId: txn:51601
            selectedOccurrenceIds:
              - occ:168947
              - occ:169297
              - occ:169343
              - occ:169366
              - occ:170654
              - occ:170660
              - occ:170668
              - occ:170671
              - occ:171052
              - occ:171285
              - occ:171296
              - occ:171354
              - occ:171377
              - occ:171489
              - occ:171503
              - occ:171537
              - occ:171612
              - occ:171626
              - occ:171632
              - occ:171709
              - occ:171765
              - occ:171809
              - occ:171832
              - occ:171855
              - occ:171868
              - occ:171885
              - occ:171995
              - occ:171999
              - occ:172007
              - occ:172040
              - occ:172455
              - occ:462535
              - occ:469122
              - occ:469128
              - occ:469156
              - occ:469167
              - occ:469305
              - occ:469317
              - occ:469356
              - occ:469507
              - occ:469522
              - occ:469545
              - occ:470476
              - occ:470526
              - occ:470539
              - occ:470609
              - occ:470655
              - occ:470704
              - occ:470764
              - occ:470808
              - occ:470927
              - occ:470985
              - occ:471009
              - occ:471034
              - occ:471107
              - occ:471125
              - occ:471186
              - occ:471203
              - occ:471278
              - occ:471481
            selectedCollectionIds:
              - col:15485
              - col:15510
              - col:15512
              - col:15513
              - col:15588
              - col:15589
              - col:15592
              - col:15594
              - col:15683
              - col:15726
              - col:15727
              - col:15730
              - col:15733
              - col:15754
              - col:15755
              - col:15756
              - col:15762
              - col:15764
              - col:15765
              - col:15779
              - col:15788
              - col:15792
              - col:15793
              - col:15794
              - col:15796
              - col:15797
              - col:15818
              - col:15819
              - col:15820
              - col:15829
              - col:15898
              - col:15586
              - col:46642
              - col:46643
              - col:46645
              - col:46646
              - col:46664
              - col:46667
              - col:46672
              - col:46687
              - col:46688
              - col:46690
              - col:46768
              - col:46772
              - col:46773
              - col:46780
              - col:46783
              - col:46787
              - col:46792
              - col:46794
              - col:46803
              - col:46807
              - col:46808
              - col:46809
              - col:46813
              - col:46814
              - col:46818
              - col:46819
              - col:46824
              - col:46844
            sourceReferenceIds:
              - ref:2785
              - ref:1666
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

# Arfia shoshoniensis
