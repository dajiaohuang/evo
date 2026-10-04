---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Heptodon calciculus
    rank: species
    sourceDatasetId: null
    name:
      zh: Heptodon calciculus
      en: Heptodon calciculus
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
            title: PBDB accepted record — Heptodon calciculus
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=47754&show=parent,app,attr
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
            locator: 2026-10-02 occurrence response accepted_no txn:47754; original response record indices retained in data/sources/mammalia-occurrence-guides-2026-10-02-records.jsonl.gz.
            accessedAt: 2026-10-02
            responseSha256: 368dafda8e7422b86d7992dc15a10defe699a9db146057d35e01a82c1c54bfa2
            pbdbTaxonId: txn:47754
            selectedOccurrenceIds:
              - occ:168041
              - occ:168064
              - occ:168115
              - occ:168156
              - occ:168402
              - occ:168408
              - occ:168500
              - occ:168874
              - occ:168986
              - occ:169950
              - occ:170015
              - occ:170048
              - occ:170084
              - occ:170122
              - occ:170151
              - occ:170187
              - occ:170222
              - occ:170261
              - occ:170322
              - occ:170368
              - occ:170380
              - occ:170544
              - occ:170881
              - occ:170923
              - occ:171156
              - occ:172099
              - occ:172211
              - occ:172485
              - occ:172602
              - occ:172662
              - occ:172733
              - occ:172818
              - occ:172826
              - occ:172881
              - occ:172997
              - occ:174021
              - occ:175070
              - occ:175151
              - occ:456866
              - occ:457577
              - occ:469584
              - occ:469677
              - occ:469706
              - occ:469740
              - occ:469786
              - occ:469828
              - occ:469867
              - occ:470200
              - occ:471074
              - occ:471084
              - occ:471553
              - occ:638364
              - occ:1370128
              - occ:1370143
              - occ:1370199
            selectedCollectionIds:
              - col:15293
              - col:15302
              - col:15325
              - col:15338
              - col:15393
              - col:15395
              - col:15426
              - col:15479
              - col:15486
              - col:15548
              - col:15551
              - col:15552
              - col:15553
              - col:15554
              - col:15555
              - col:15556
              - col:15557
              - col:15558
              - col:15560
              - col:15564
              - col:15565
              - col:15576
              - col:15661
              - col:15662
              - col:15710
              - col:15839
              - col:15852
              - col:15903
              - col:15915
              - col:15917
              - col:15930
              - col:15934
              - col:15935
              - col:15942
              - col:15964
              - col:16207
              - col:16397
              - col:16415
              - col:15680
              - col:15684
              - col:46692
              - col:46699
              - col:46700
              - col:46703
              - col:46706
              - col:46711
              - col:46715
              - col:46746
              - col:46810
              - col:46811
              - col:46849
              - col:15454
              - col:186937
              - col:186940
              - col:186951
            sourceReferenceIds:
              - ref:2078
              - ref:6294
              - ref:3596
              - ref:3021
              - ref:6214
              - ref:6196
              - ref:2149
              - ref:1760
              - ref:11717
              - ref:19815
              - ref:62695
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

# Heptodon calciculus
