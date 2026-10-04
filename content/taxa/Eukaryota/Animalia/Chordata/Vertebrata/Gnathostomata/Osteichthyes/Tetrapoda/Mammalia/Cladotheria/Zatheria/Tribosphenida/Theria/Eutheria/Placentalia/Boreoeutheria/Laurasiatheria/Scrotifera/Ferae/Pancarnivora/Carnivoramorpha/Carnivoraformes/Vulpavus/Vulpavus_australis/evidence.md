---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Vulpavus australis
    rank: species
    sourceDatasetId: null
    name:
      zh: Vulpavus australis
      en: Vulpavus australis
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
            title: PBDB accepted record — Vulpavus australis
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=52674&show=parent,app,attr
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
            locator: 2026-10-02 occurrence response accepted_no txn:52674; original response record indices retained in data/sources/mammalia-occurrence-guides-2026-10-02-records.jsonl.gz.
            accessedAt: 2026-10-02
            responseSha256: 368dafda8e7422b86d7992dc15a10defe699a9db146057d35e01a82c1c54bfa2
            pbdbTaxonId: txn:52674
            selectedOccurrenceIds:
              - occ:168866
              - occ:169487
              - occ:169565
              - occ:169671
              - occ:169703
              - occ:169741
              - occ:169781
              - occ:169799
              - occ:169810
              - occ:169834
              - occ:169856
              - occ:169896
              - occ:169906
              - occ:169935
              - occ:169998
              - occ:170069
              - occ:170108
              - occ:170142
              - occ:170176
              - occ:170210
              - occ:170248
              - occ:170280
              - occ:170314
              - occ:170459
              - occ:170522
              - occ:170559
              - occ:170591
              - occ:170693
              - occ:170914
              - occ:170932
              - occ:171108
              - occ:172507
              - occ:456884
              - occ:457643
              - occ:457678
              - occ:457704
              - occ:457769
              - occ:458678
              - occ:469225
              - occ:469457
              - occ:469697
              - occ:469718
              - occ:469768
              - occ:469846
              - occ:469992
              - occ:470109
              - occ:470113
              - occ:470193
              - occ:470210
              - occ:470452
              - occ:470473
              - occ:470632
              - occ:470943
            selectedCollectionIds:
              - col:15479
              - col:15518
              - col:15522
              - col:15531
              - col:15532
              - col:15534
              - col:15538
              - col:15540
              - col:15541
              - col:15542
              - col:15543
              - col:15546
              - col:15547
              - col:15548
              - col:15551
              - col:15553
              - col:15554
              - col:15555
              - col:15556
              - col:15557
              - col:15558
              - col:15559
              - col:15560
              - col:15573
              - col:15576
              - col:15577
              - col:15578
              - col:15597
              - col:15662
              - col:15663
              - col:15701
              - col:15906
              - col:15680
              - col:15692
              - col:15694
              - col:15695
              - col:15700
              - col:15705
              - col:46652
              - col:46682
              - col:46699
              - col:46700
              - col:46704
              - col:46712
              - col:46729
              - col:46736
              - col:46737
              - col:46745
              - col:46746
              - col:46766
              - col:46767
              - col:46780
              - col:46803
            sourceReferenceIds:
              - ref:6294
              - ref:3021
              - ref:6214
              - ref:62695
              - ref:2311
              - ref:2962
              - ref:3636
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

# Vulpavus australis
