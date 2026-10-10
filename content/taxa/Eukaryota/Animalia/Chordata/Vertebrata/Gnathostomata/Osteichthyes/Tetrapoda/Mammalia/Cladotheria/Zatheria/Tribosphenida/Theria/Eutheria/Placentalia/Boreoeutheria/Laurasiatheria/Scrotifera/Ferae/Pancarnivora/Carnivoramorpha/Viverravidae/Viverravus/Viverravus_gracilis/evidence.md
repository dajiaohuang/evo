---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Viverravus gracilis
    rank: species
    sourceDatasetId: null
    name:
      zh: Viverravus gracilis
      en: Viverravus gracilis
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
            title: PBDB accepted record — Viverravus gracilis
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=52662&show=parent,app,attr
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
            locator: 2026-10-02 occurrence response accepted_no txn:52662; original response record indices retained in data/sources/mammalia-occurrence-guides-2026-10-02-records.jsonl.gz.
            accessedAt: 2026-10-02
            responseSha256: 368dafda8e7422b86d7992dc15a10defe699a9db146057d35e01a82c1c54bfa2
            pbdbTaxonId: txn:52662
            selectedOccurrenceIds:
              - occ:170791
              - occ:170809
              - occ:170823
              - occ:172972
              - occ:173105
              - occ:173110
              - occ:173461
              - occ:173561
              - occ:173896
              - occ:173928
              - occ:173969
              - occ:174118
              - occ:174247
              - occ:174361
              - occ:174395
              - occ:174406
              - occ:174557
              - occ:174566
              - occ:174808
              - occ:174861
              - occ:175002
              - occ:175021
              - occ:175108
              - occ:286324
              - occ:469969
              - occ:470653
              - occ:470727
              - occ:470868
              - occ:470925
              - occ:470976
              - occ:471006
              - occ:471104
              - occ:471150
              - occ:471418
              - occ:471443
              - occ:1370240
              - occ:1581712
              - occ:1581887
              - occ:1581890
              - occ:1581896
            selectedCollectionIds:
              - col:15649
              - col:15650
              - col:15651
              - col:15964
              - col:15999
              - col:16001
              - col:16091
              - col:16105
              - col:16200
              - col:16203
              - col:16206
              - col:16219
              - col:16228
              - col:16240
              - col:16241
              - col:16242
              - col:16275
              - col:16277
              - col:16320
              - col:16342
              - col:16395
              - col:16396
              - col:16409
              - col:15837
              - col:46727
              - col:46782
              - col:46788
              - col:46797
              - col:46802
              - col:46805
              - col:46807
              - col:46812
              - col:46814
              - col:46836
              - col:46838
              - col:93087
              - col:223460
              - col:223479
              - col:223481
              - col:223484
            sourceReferenceIds:
              - ref:2921
              - ref:1760
              - ref:1749
              - ref:1737
              - ref:3419
              - ref:1115
              - ref:3596
              - ref:1623
              - ref:2182
              - ref:7542
              - ref:11717
              - ref:62704
              - ref:78605
            originalIdentificationMappings:
              - occurrenceId: occ:173969
                originalIdentifiedName: Viverravus vulpinus
                acceptedName: Viverravus gracilis
                difference: null
              - occurrenceId: occ:174247
                originalIdentifiedName: Viverravus gracilis n. sp.
                acceptedName: Viverravus gracilis
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

# Viverravus gracilis
