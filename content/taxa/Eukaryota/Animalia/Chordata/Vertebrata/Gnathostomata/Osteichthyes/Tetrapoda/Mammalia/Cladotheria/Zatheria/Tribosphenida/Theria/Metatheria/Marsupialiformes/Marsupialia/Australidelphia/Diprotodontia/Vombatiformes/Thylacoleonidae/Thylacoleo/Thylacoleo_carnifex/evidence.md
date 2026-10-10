---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Thylacoleo carnifex
    rank: species
    sourceDatasetId: null
    name:
      zh: Thylacoleo carnifex
      en: Thylacoleo carnifex
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
            title: PBDB accepted record — Thylacoleo carnifex
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=166623&show=parent,app,attr
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
            locator: 2026-10-02 occurrence response accepted_no txn:166623; original response record indices retained in data/sources/mammalia-occurrence-guides-2026-10-02-records.jsonl.gz.
            accessedAt: 2026-10-02
            responseSha256: 368dafda8e7422b86d7992dc15a10defe699a9db146057d35e01a82c1c54bfa2
            pbdbTaxonId: txn:166623
            selectedOccurrenceIds:
              - occ:653922
              - occ:865751
              - occ:865772
              - occ:865783
              - occ:866451
              - occ:866637
              - occ:1091943
              - occ:1096265
              - occ:1320878
              - occ:1320965
              - occ:1321186
              - occ:1321314
              - occ:1321355
              - occ:1321809
              - occ:1321849
              - occ:1341560
              - occ:1343357
              - occ:1344530
              - occ:1344729
              - occ:1345437
              - occ:1347851
              - occ:1349429
              - occ:1349886
              - occ:1350028
              - occ:1427650
              - occ:1605114
            selectedCollectionIds:
              - col:70580
              - col:96019
              - col:95899
              - col:96015
              - col:28298
              - col:95862
              - col:136221
              - col:138403
              - col:136075
              - col:136074
              - col:136172
              - col:136159
              - col:136073
              - col:136076
              - col:136430
              - col:181305
              - col:181761
              - col:182001
              - col:136069
              - col:182166
              - col:182621
              - col:182835
              - col:182939
              - col:182957
              - col:197269
              - col:136730
            sourceReferenceIds:
              - ref:23682
              - ref:32587
              - ref:32608
              - ref:32610
              - ref:43131
              - ref:44309
              - ref:58701
              - ref:36547
              - ref:58806
              - ref:60281
              - ref:60435
              - ref:60521
              - ref:60528
              - ref:60583
              - ref:60812
              - ref:60900
              - ref:61038
              - ref:61053
              - ref:7873
              - ref:82445
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

# Thylacoleo carnifex
