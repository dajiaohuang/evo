---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Diacodexis secans
    rank: species
    sourceDatasetId: null
    name:
      zh: Diacodexis secans
      en: Diacodexis secans
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
            title: PBDB accepted record — Diacodexis secans
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=49753&show=parent,app,attr
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
            locator: 2026-10-02 occurrence response accepted_no txn:49753; original response record indices retained in data/sources/mammalia-occurrence-guides-2026-10-02-records.jsonl.gz.
            accessedAt: 2026-10-02
            responseSha256: 368dafda8e7422b86d7992dc15a10defe699a9db146057d35e01a82c1c54bfa2
            pbdbTaxonId: txn:49753
            selectedOccurrenceIds:
              - occ:168987
              - occ:170225
              - occ:170383
              - occ:170408
              - occ:170980
              - occ:172101
              - occ:172199
              - occ:172212
              - occ:172519
              - occ:172532
              - occ:172604
              - occ:172655
              - occ:172737
              - occ:172884
              - occ:172902
              - occ:173355
              - occ:173404
              - occ:174026
              - occ:174973
              - occ:175455
              - occ:1303117
              - occ:1303118
              - occ:1303119
              - occ:1303120
              - occ:1303121
              - occ:1303122
              - occ:1303123
              - occ:1303124
              - occ:1303125
              - occ:1303126
              - occ:1303127
              - occ:1303129
              - occ:1303130
              - occ:1303131
              - occ:1303132
              - occ:1370085
              - occ:1370100
              - occ:1370165
              - occ:1370186
              - occ:1370205
            selectedCollectionIds:
              - col:15486
              - col:15557
              - col:15565
              - col:15566
              - col:15669
              - col:15839
              - col:15851
              - col:15852
              - col:15908
              - col:15910
              - col:15915
              - col:15917
              - col:15930
              - col:15942
              - col:15943
              - col:16073
              - col:16078
              - col:16207
              - col:16388
              - col:16504
              - col:15948
              - col:15962
              - col:15946
              - col:15949
              - col:15950
              - col:15989
              - col:15954
              - col:15993
              - col:15922
              - col:16246
              - col:16439
              - col:16183
              - col:186931
              - col:186933
              - col:186944
              - col:186946
              - col:186952
            sourceReferenceIds:
              - ref:2183
              - ref:3021
              - ref:1248
              - ref:6294
              - ref:3336
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

# Diacodexis secans
