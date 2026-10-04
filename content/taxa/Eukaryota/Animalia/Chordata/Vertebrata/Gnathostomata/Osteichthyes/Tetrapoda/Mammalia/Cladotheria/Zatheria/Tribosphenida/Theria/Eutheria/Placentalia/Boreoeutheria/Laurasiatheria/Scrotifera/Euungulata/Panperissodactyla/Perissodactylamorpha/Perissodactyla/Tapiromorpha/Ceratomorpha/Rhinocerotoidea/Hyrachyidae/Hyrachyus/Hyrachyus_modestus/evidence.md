---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Hyrachyus modestus
    rank: species
    sourceDatasetId: null
    name:
      zh: Hyrachyus modestus
      en: Hyrachyus modestus
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
            title: PBDB accepted record — Hyrachyus modestus
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=47756&show=parent,app,attr
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
            locator: 2026-10-02 occurrence response accepted_no txn:47756; original response record indices retained in data/sources/mammalia-occurrence-guides-2026-10-02-records.jsonl.gz.
            accessedAt: 2026-10-02
            responseSha256: 368dafda8e7422b86d7992dc15a10defe699a9db146057d35e01a82c1c54bfa2
            pbdbTaxonId: txn:47756
            selectedOccurrenceIds:
              - occ:172100
              - occ:173723
              - occ:173855
              - occ:173862
              - occ:173916
              - occ:173965
              - occ:173966
              - occ:174100
              - occ:174101
              - occ:174138
              - occ:174177
              - occ:174189
              - occ:174259
              - occ:174260
              - occ:174285
              - occ:174294
              - occ:174337
              - occ:174373
              - occ:174410
              - occ:174558
              - occ:174593
              - occ:174599
              - occ:174622
              - occ:174623
              - occ:174649
              - occ:174657
              - occ:175051
              - occ:175112
              - occ:175121
              - occ:175178
              - occ:175198
              - occ:175349
              - occ:175370
              - occ:175372
              - occ:175440
              - occ:176397
              - occ:1308755
              - occ:1308763
              - occ:1448909
              - occ:1448912
              - occ:1486039
              - occ:1486040
              - occ:1486041
            selectedCollectionIds:
              - col:15839
              - col:16136
              - col:16193
              - col:16194
              - col:16201
              - col:16205
              - col:16218
              - col:16219
              - col:16226
              - col:16227
              - col:16228
              - col:16232
              - col:16234
              - col:16239
              - col:16240
              - col:16242
              - col:16275
              - col:16281
              - col:16283
              - col:16284
              - col:16290
              - col:16292
              - col:16396
              - col:16409
              - col:16414
              - col:16418
              - col:16422
              - col:16483
              - col:16491
              - col:16493
              - col:16502
              - col:16647
              - col:175581
              - col:175583
              - col:202160
              - col:202163
              - col:106325
              - col:81455
            sourceReferenceIds:
              - ref:3596
              - ref:3744
              - ref:1441
              - ref:3609
              - ref:2921
              - ref:1623
              - ref:1749
              - ref:2182
              - ref:63658
              - ref:2640
              - ref:82153
              - ref:1115
              - ref:2495
              - ref:57432
              - ref:57433
              - ref:2494
              - ref:11982
            originalIdentificationMappings:
              - occurrenceId: occ:173855
                originalIdentifiedName: Hyrachyus affinis
                acceptedName: Hyrachyus modestus
                difference: null
              - occurrenceId: occ:173862
                originalIdentifiedName: Hyrachyus affinis
                acceptedName: Hyrachyus modestus
                difference: null
              - occurrenceId: occ:173966
                originalIdentifiedName: Hyrachyus affinis
                acceptedName: Hyrachyus modestus
                difference: null
              - occurrenceId: occ:174101
                originalIdentifiedName: Hyrachyus affinis
                acceptedName: Hyrachyus modestus
                difference: null
              - occurrenceId: occ:174177
                originalIdentifiedName: Hyrachyus affinis
                acceptedName: Hyrachyus modestus
                difference: null
              - occurrenceId: occ:174260
                originalIdentifiedName: Hyrachyus affinis
                acceptedName: Hyrachyus modestus
                difference: null
              - occurrenceId: occ:174294
                originalIdentifiedName: Hyrachyus affinis
                acceptedName: Hyrachyus modestus
                difference: null
              - occurrenceId: occ:174558
                originalIdentifiedName: Hyrachyus affinis
                acceptedName: Hyrachyus modestus
                difference: null
              - occurrenceId: occ:174593
                originalIdentifiedName: Hyrachyus affinis n. sp.
                acceptedName: Hyrachyus modestus
                difference: null
              - occurrenceId: occ:174599
                originalIdentifiedName: Hyrachyus affinis
                acceptedName: Hyrachyus modestus
                difference: null
              - occurrenceId: occ:174623
                originalIdentifiedName: Hyrachyus affinis
                acceptedName: Hyrachyus modestus
                difference: null
              - occurrenceId: occ:175121
                originalIdentifiedName: Lophiodon modestus n. sp.
                acceptedName: Hyrachyus modestus
                difference: recombined as
              - occurrenceId: occ:1486039
                originalIdentifiedName: Hyrachyus agrarius
                acceptedName: Hyrachyus modestus
                difference: null
              - occurrenceId: occ:1486040
                originalIdentifiedName: Hyrachyus agrarius
                acceptedName: Hyrachyus modestus
                difference: null
              - occurrenceId: occ:1486041
                originalIdentifiedName: Hyrachyus agrarius
                acceptedName: Hyrachyus modestus
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

# Hyrachyus modestus
