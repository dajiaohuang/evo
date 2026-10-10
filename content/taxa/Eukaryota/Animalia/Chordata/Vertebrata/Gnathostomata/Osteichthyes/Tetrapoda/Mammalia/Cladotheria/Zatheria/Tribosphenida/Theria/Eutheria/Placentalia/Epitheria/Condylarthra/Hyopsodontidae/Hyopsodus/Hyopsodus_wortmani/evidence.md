---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Hyopsodus wortmani
    rank: species
    sourceDatasetId: null
    name:
      zh: Hyopsodus wortmani
      en: Hyopsodus wortmani
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
            title: PBDB accepted record — Hyopsodus wortmani
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=47192&show=parent,app,attr
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
            locator: 2026-10-02 occurrence response accepted_no txn:47192; original response record indices retained in data/sources/mammalia-occurrence-guides-2026-10-02-records.jsonl.gz.
            accessedAt: 2026-10-02
            responseSha256: 368dafda8e7422b86d7992dc15a10defe699a9db146057d35e01a82c1c54bfa2
            pbdbTaxonId: txn:47192
            selectedOccurrenceIds:
              - occ:168978
              - occ:170812
              - occ:170832
              - occ:170842
              - occ:170915
              - occ:170963
              - occ:170978
              - occ:171148
              - occ:171173
              - occ:171247
              - occ:172092
              - occ:172127
              - occ:172315
              - occ:172491
              - occ:172516
              - occ:172530
              - occ:172562
              - occ:172594
              - occ:172650
              - occ:172691
              - occ:172726
              - occ:172874
              - occ:172913
              - occ:172916
              - occ:172917
              - occ:172919
              - occ:172921
              - occ:172922
              - occ:172923
              - occ:172924
              - occ:172925
              - occ:172926
              - occ:172928
              - occ:172937
              - occ:173062
              - occ:173064
              - occ:173065
              - occ:173066
              - occ:173067
              - occ:173075
              - occ:173268
              - occ:173317
              - occ:173318
              - occ:173320
              - occ:173348
              - occ:173362
              - occ:173381
              - occ:174447
              - occ:174448
              - occ:638361
            selectedCollectionIds:
              - col:15486
              - col:15650
              - col:15652
              - col:15654
              - col:15662
              - col:15665
              - col:15669
              - col:15710
              - col:15714
              - col:15724
              - col:15839
              - col:15842
              - col:15882
              - col:15904
              - col:15908
              - col:15910
              - col:15913
              - col:15915
              - col:15917
              - col:15929
              - col:15930
              - col:15942
              - col:15946
              - col:15947
              - col:15948
              - col:15949
              - col:15950
              - col:15951
              - col:15952
              - col:15953
              - col:15954
              - col:15955
              - col:15956
              - col:15962
              - col:15989
              - col:15990
              - col:15991
              - col:15992
              - col:15993
              - col:15995
              - col:16054
              - col:16065
              - col:16066
              - col:16067
              - col:16073
              - col:16074
              - col:16077
              - col:16247
              - col:16248
              - col:15454
            sourceReferenceIds:
              - ref:3596
              - ref:2921
              - ref:1616
              - ref:1248
              - ref:1618
              - ref:2933
              - ref:3636
              - ref:6223
              - ref:3329
              - ref:3336
              - ref:2055
              - ref:19815
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

# Hyopsodus wortmani
