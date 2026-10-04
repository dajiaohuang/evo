---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Oxyaena gulo
    rank: species
    sourceDatasetId: null
    name:
      zh: Oxyaena gulo
      en: Oxyaena gulo
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
            title: PBDB accepted record — Oxyaena gulo
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=49535&show=parent,app,attr
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
            locator: 2026-10-02 occurrence response accepted_no txn:49535; original response record indices retained in data/sources/mammalia-occurrence-guides-2026-10-02-records.jsonl.gz.
            accessedAt: 2026-10-02
            responseSha256: 368dafda8e7422b86d7992dc15a10defe699a9db146057d35e01a82c1c54bfa2
            pbdbTaxonId: txn:49535
            selectedOccurrenceIds:
              - occ:168496
              - occ:169174
              - occ:169207
              - occ:169241
              - occ:169278
              - occ:169332
              - occ:169369
              - occ:169437
              - occ:170674
              - occ:171054
              - occ:171311
              - occ:171422
              - occ:171435
              - occ:171492
              - occ:171713
              - occ:171831
              - occ:171875
              - occ:172895
              - occ:462604
              - occ:462664
              - occ:469066
              - occ:469173
              - occ:469366
              - occ:469389
              - occ:469557
              - occ:469950
              - occ:470520
              - occ:470602
              - occ:470624
              - occ:470636
              - occ:470697
              - occ:470780
              - occ:470804
              - occ:470862
              - occ:471000
              - occ:471101
              - occ:471390
              - occ:471466
              - occ:1304625
            selectedCollectionIds:
              - col:15425
              - col:15505
              - col:15507
              - col:15509
              - col:15510
              - col:15512
              - col:15513
              - col:15516
              - col:15594
              - col:15683
              - col:15728
              - col:15741
              - col:15743
              - col:15754
              - col:15779
              - col:15793
              - col:15796
              - col:15943
              - col:15589
              - col:15592
              - col:46636
              - col:46646
              - col:46672
              - col:46674
              - col:46690
              - col:46726
              - col:46771
              - col:46778
              - col:46780
              - col:46781
              - col:46786
              - col:46792
              - col:46793
              - col:46797
              - col:46807
              - col:46812
              - col:46834
              - col:46841
              - col:38868
            sourceReferenceIds:
              - ref:1745
              - ref:3021
              - ref:3714
              - ref:2536
              - ref:11717
              - ref:60859
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

# Oxyaena gulo
