---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Viverravus politus
    rank: species
    sourceDatasetId: null
    name:
      zh: Viverravus politus
      en: Viverravus politus
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
            title: PBDB accepted record — Viverravus politus
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=52668&show=parent,app,attr
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
            locator: 2026-10-02 occurrence response accepted_no txn:52668; original response record indices retained in data/sources/mammalia-occurrence-guides-2026-10-02-records.jsonl.gz.
            accessedAt: 2026-10-02
            responseSha256: 368dafda8e7422b86d7992dc15a10defe699a9db146057d35e01a82c1c54bfa2
            pbdbTaxonId: txn:52668
            selectedOccurrenceIds:
              - occ:166444
              - occ:166699
              - occ:166748
              - occ:166928
              - occ:166996
              - occ:167057
              - occ:167088
              - occ:167100
              - occ:167130
              - occ:167140
              - occ:167164
              - occ:167211
              - occ:167331
              - occ:167358
              - occ:167495
              - occ:167582
              - occ:167642
              - occ:167668
              - occ:167707
              - occ:167717
              - occ:169030
              - occ:170558
              - occ:171089
              - occ:171304
              - occ:171344
              - occ:171387
              - occ:171410
              - occ:171468
              - occ:171494
              - occ:171575
              - occ:171623
              - occ:171642
              - occ:171688
              - occ:171780
              - occ:171799
              - occ:171930
              - occ:462674
              - occ:469282
              - occ:469928
              - occ:469953
              - occ:470703
              - occ:471184
              - occ:1193912
              - occ:1193913
            selectedCollectionIds:
              - col:15028
              - col:15065
              - col:15068
              - col:15087
              - col:15092
              - col:15099
              - col:15103
              - col:15104
              - col:15109
              - col:15110
              - col:15114
              - col:15122
              - col:15146
              - col:15150
              - col:15167
              - col:15183
              - col:15192
              - col:15198
              - col:15205
              - col:15207
              - col:15491
              - col:15577
              - col:15695
              - col:15727
              - col:15729
              - col:15734
              - col:15738
              - col:15749
              - col:15754
              - col:15759
              - col:15763
              - col:15767
              - col:15775
              - col:15789
              - col:15790
              - col:15805
              - col:15592
              - col:46659
              - col:46722
              - col:46726
              - col:46786
              - col:46817
              - col:154263
              - col:154271
            sourceReferenceIds:
              - ref:6294
              - ref:2787
              - ref:2536
              - ref:2953
              - ref:1112
              - ref:6214
              - ref:1657
              - ref:11717
              - ref:49988
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

# Viverravus politus
