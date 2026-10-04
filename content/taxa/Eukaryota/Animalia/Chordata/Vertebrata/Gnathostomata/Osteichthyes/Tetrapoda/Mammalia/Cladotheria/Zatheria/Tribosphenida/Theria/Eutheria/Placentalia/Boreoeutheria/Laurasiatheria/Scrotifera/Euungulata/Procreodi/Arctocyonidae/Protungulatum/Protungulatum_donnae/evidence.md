---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Protungulatum donnae
    rank: species
    sourceDatasetId: null
    name:
      zh: Protungulatum donnae
      en: Protungulatum donnae
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
            title: PBDB accepted record — Protungulatum donnae
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=51116&show=parent,app,attr
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
            locator: 2026-10-02 occurrence response accepted_no txn:51116; original response record indices retained in data/sources/mammalia-occurrence-guides-2026-10-02-records.jsonl.gz.
            accessedAt: 2026-10-02
            responseSha256: 368dafda8e7422b86d7992dc15a10defe699a9db146057d35e01a82c1c54bfa2
            pbdbTaxonId: txn:51116
            selectedOccurrenceIds:
              - occ:163808
              - occ:163813
              - occ:163839
              - occ:163847
              - occ:163934
              - occ:163965
              - occ:163981
              - occ:163983
              - occ:163986
              - occ:164016
              - occ:164133
              - occ:164143
              - occ:164150
              - occ:164156
              - occ:164220
              - occ:164305
              - occ:164345
              - occ:164353
              - occ:164357
              - occ:164369
              - occ:164380
              - occ:164388
              - occ:164399
              - occ:164410
              - occ:164475
              - occ:1303284
              - occ:1350800
              - occ:1404238
              - occ:1404260
              - occ:1548594
              - occ:1630970
            selectedCollectionIds:
              - col:14663
              - col:14667
              - col:14671
              - col:14672
              - col:14699
              - col:14705
              - col:14708
              - col:14709
              - col:14711
              - col:14722
              - col:14749
              - col:14751
              - col:14753
              - col:14754
              - col:14761
              - col:14771
              - col:14777
              - col:14779
              - col:14780
              - col:14784
              - col:14785
              - col:14786
              - col:14787
              - col:14788
              - col:14796
              - col:174233
              - col:176863
              - col:193844
              - col:14759
              - col:14762
              - col:231047
            sourceReferenceIds:
              - ref:2255
              - ref:962
              - ref:3199
              - ref:1419
              - ref:960
              - ref:56876
              - ref:61136
              - ref:65846
              - ref:75725
              - ref:85522
            originalIdentificationMappings:
              - occurrenceId: occ:164220
                originalIdentifiedName: Protungulatum mckeeveri n. sp.
                acceptedName: Protungulatum donnae
                difference: null
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

# Protungulatum donnae
