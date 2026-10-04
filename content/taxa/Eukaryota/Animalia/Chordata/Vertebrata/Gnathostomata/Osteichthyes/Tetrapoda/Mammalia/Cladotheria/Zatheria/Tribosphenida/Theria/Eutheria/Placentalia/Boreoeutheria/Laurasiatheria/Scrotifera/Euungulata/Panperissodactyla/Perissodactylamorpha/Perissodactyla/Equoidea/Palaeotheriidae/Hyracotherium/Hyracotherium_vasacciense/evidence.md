---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Hyracotherium vasacciense
    rank: species
    sourceDatasetId: null
    name:
      zh: Hyracotherium vasacciense
      en: Hyracotherium vasacciense
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
            title: PBDB accepted record — Hyracotherium vasacciense
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=47768&show=parent,app,attr
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
            locator: 2026-10-02 occurrence response accepted_no txn:47768; original response record indices retained in data/sources/mammalia-occurrence-guides-2026-10-02-records.jsonl.gz.
            accessedAt: 2026-10-02
            responseSha256: 368dafda8e7422b86d7992dc15a10defe699a9db146057d35e01a82c1c54bfa2
            pbdbTaxonId: txn:47768
            selectedOccurrenceIds:
              - occ:168567
              - occ:168870
              - occ:168981
              - occ:170816
              - occ:170839
              - occ:170964
              - occ:170979
              - occ:171153
              - occ:171165
              - occ:171176
              - occ:172095
              - occ:172190
              - occ:172193
              - occ:172208
              - occ:172305
              - occ:172465
              - occ:172471
              - occ:172483
              - occ:172600
              - occ:172660
              - occ:172731
              - occ:172825
              - occ:172909
              - occ:172994
              - occ:173321
              - occ:173327
              - occ:173353
              - occ:173379
              - occ:173400
              - occ:173887
              - occ:174018
              - occ:174334
              - occ:174369
              - occ:174399
              - occ:174408
              - occ:174667
              - occ:174971
              - occ:175049
              - occ:175107
              - occ:1436960
              - occ:1436963
            selectedCollectionIds:
              - col:15441
              - col:15479
              - col:15486
              - col:15650
              - col:15653
              - col:15665
              - col:15669
              - col:15710
              - col:15711
              - col:15714
              - col:15839
              - col:15847
              - col:15848
              - col:15852
              - col:15878
              - col:15901
              - col:15902
              - col:15903
              - col:15915
              - col:15917
              - col:15930
              - col:15935
              - col:15945
              - col:15964
              - col:16067
              - col:16068
              - col:16073
              - col:16076
              - col:16078
              - col:16198
              - col:16207
              - col:16239
              - col:16240
              - col:16241
              - col:16242
              - col:16297
              - col:16388
              - col:16396
              - col:16408
              - col:200443
              - col:200445
            sourceReferenceIds:
              - ref:1556
              - ref:1618
              - ref:3596
              - ref:2921
              - ref:1248
              - ref:1616
              - ref:68428
              - ref:1375
              - ref:3329
              - ref:2149
              - ref:3336
              - ref:1760
              - ref:2182
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

# Hyracotherium vasacciense
