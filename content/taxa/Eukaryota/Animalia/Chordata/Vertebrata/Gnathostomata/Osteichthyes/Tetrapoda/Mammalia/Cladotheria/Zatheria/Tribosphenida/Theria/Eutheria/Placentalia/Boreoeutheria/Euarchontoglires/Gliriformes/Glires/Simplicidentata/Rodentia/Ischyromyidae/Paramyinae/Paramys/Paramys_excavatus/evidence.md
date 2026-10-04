---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Paramys excavatus
    rank: species
    sourceDatasetId: null
    name:
      zh: Paramys excavatus
      en: Paramys excavatus
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
            title: PBDB accepted record — Paramys excavatus
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=49894&show=parent,app,attr
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
            locator: 2026-10-02 occurrence response accepted_no txn:49894; original response record indices retained in data/sources/mammalia-occurrence-guides-2026-10-02-records.jsonl.gz.
            accessedAt: 2026-10-02
            responseSha256: 368dafda8e7422b86d7992dc15a10defe699a9db146057d35e01a82c1c54bfa2
            pbdbTaxonId: txn:49894
            selectedOccurrenceIds:
              - occ:167779
              - occ:167798
              - occ:167987
              - occ:168149
              - occ:168171
              - occ:168183
              - occ:168238
              - occ:168257
              - occ:168265
              - occ:168274
              - occ:168355
              - occ:168448
              - occ:168474
              - occ:168591
              - occ:168622
              - occ:168720
              - occ:168740
              - occ:169017
              - occ:169089
              - occ:169164
              - occ:169423
              - occ:170807
              - occ:170874
              - occ:170898
              - occ:172191
              - occ:172382
              - occ:172607
              - occ:172741
              - occ:172777
              - occ:172800
              - occ:172887
              - occ:172963
              - occ:173738
              - occ:173775
              - occ:173878
              - occ:174032
              - occ:174404
              - occ:1370081
              - occ:1370131
              - occ:1370171
              - occ:1370181
              - occ:1695636
            selectedCollectionIds:
              - col:15222
              - col:15225
              - col:15277
              - col:15338
              - col:15346
              - col:15347
              - col:15357
              - col:15362
              - col:15365
              - col:15366
              - col:15383
              - col:15413
              - col:15418
              - col:15446
              - col:15448
              - col:15455
              - col:15456
              - col:15491
              - col:15493
              - col:15504
              - col:15515
              - col:15650
              - col:15661
              - col:15662
              - col:15847
              - col:15889
              - col:15915
              - col:15930
              - col:15933
              - col:15934
              - col:15942
              - col:15964
              - col:16137
              - col:16139
              - col:16198
              - col:16207
              - col:16242
              - col:186931
              - col:186938
              - col:186945
              - col:186946
              - col:200443
            sourceReferenceIds:
              - ref:2078
              - ref:1494
              - ref:1618
              - ref:3596
              - ref:1112
              - ref:2953
              - ref:2921
              - ref:1616
              - ref:2289
              - ref:3329
              - ref:6196
              - ref:1760
              - ref:1404
              - ref:1097
              - ref:62695
              - ref:91938
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

# Paramys excavatus
