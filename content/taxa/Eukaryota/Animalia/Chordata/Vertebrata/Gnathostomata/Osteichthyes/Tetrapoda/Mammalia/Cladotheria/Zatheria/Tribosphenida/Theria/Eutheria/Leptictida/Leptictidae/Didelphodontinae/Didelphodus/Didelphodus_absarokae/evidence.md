---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Didelphodus absarokae
    rank: species
    sourceDatasetId: null
    name:
      zh: Didelphodus absarokae
      en: Didelphodus absarokae
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
            title: PBDB accepted record — Didelphodus absarokae
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=45570&show=parent,app,attr
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
            locator: 2026-10-02 occurrence response accepted_no txn:45570; original response record indices retained in data/sources/mammalia-occurrence-guides-2026-10-02-records.jsonl.gz.
            accessedAt: 2026-10-02
            responseSha256: 368dafda8e7422b86d7992dc15a10defe699a9db146057d35e01a82c1c54bfa2
            pbdbTaxonId: txn:45570
            selectedOccurrenceIds:
              - occ:167760
              - occ:167822
              - occ:168921
              - occ:168997
              - occ:169049
              - occ:169136
              - occ:169194
              - occ:169252
              - occ:169551
              - occ:169656
              - occ:169727
              - occ:169891
              - occ:169915
              - occ:170020
              - occ:170055
              - occ:170092
              - occ:170231
              - occ:170305
              - occ:170450
              - occ:170485
              - occ:170583
              - occ:171259
              - occ:171511
              - occ:172146
              - occ:172344
              - occ:172521
              - occ:172793
              - occ:173068
              - occ:173158
              - occ:173181
              - occ:173270
              - occ:457603
              - occ:457650
              - occ:469582
              - occ:470614
              - occ:470992
              - occ:471071
              - occ:471228
              - occ:471499
            selectedCollectionIds:
              - col:15220
              - col:15231
              - col:15485
              - col:15491
              - col:15493
              - col:15504
              - col:15507
              - col:15510
              - col:15522
              - col:15531
              - col:15534
              - col:15546
              - col:15548
              - col:15552
              - col:15553
              - col:15554
              - col:15558
              - col:15560
              - col:15573
              - col:15575
              - col:15578
              - col:15725
              - col:15756
              - col:15845
              - col:15887
              - col:15910
              - col:15934
              - col:15994
              - col:16018
              - col:16021
              - col:16055
              - col:15687
              - col:15694
              - col:46692
              - col:46780
              - col:46807
              - col:46810
              - col:46820
              - col:46845
            sourceReferenceIds:
              - ref:2078
              - ref:2528
              - ref:1112
              - ref:2953
              - ref:3021
              - ref:6214
              - ref:3482
              - ref:6196
              - ref:1358
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

# Didelphodus absarokae
