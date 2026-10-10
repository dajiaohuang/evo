---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Miniochoerus affinis
    rank: species
    sourceDatasetId: null
    name:
      zh: Miniochoerus affinis
      en: Miniochoerus affinis
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
            title: PBDB accepted record — Miniochoerus affinis
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=49385&show=parent,app,attr
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
            locator: 2026-10-02 occurrence response accepted_no txn:49385; original response record indices retained in data/sources/mammalia-occurrence-guides-2026-10-02-records.jsonl.gz.
            accessedAt: 2026-10-02
            responseSha256: 368dafda8e7422b86d7992dc15a10defe699a9db146057d35e01a82c1c54bfa2
            pbdbTaxonId: txn:49385
            selectedOccurrenceIds:
              - occ:179402
              - occ:179403
              - occ:179599
              - occ:179633
              - occ:179658
              - occ:179843
              - occ:179857
              - occ:179861
              - occ:179879
              - occ:179899
              - occ:179959
              - occ:179977
              - occ:179991
              - occ:180125
              - occ:180130
              - occ:180145
              - occ:180252
              - occ:180256
              - occ:180277
              - occ:180281
              - occ:180293
              - occ:180301
              - occ:180317
              - occ:180334
              - occ:180360
              - occ:180365
              - occ:180420
              - occ:180424
              - occ:180448
              - occ:180455
              - occ:180468
              - occ:180472
              - occ:180474
              - occ:180481
              - occ:180500
              - occ:180504
              - occ:180519
              - occ:180525
              - occ:180530
              - occ:180534
              - occ:180582
              - occ:1366365
              - occ:1635601
              - occ:1635602
              - occ:1639991
              - occ:1639996
              - occ:1640011
            selectedCollectionIds:
              - col:17065
              - col:17092
              - col:17094
              - col:17098
              - col:17115
              - col:17118
              - col:17120
              - col:17130
              - col:17133
              - col:17143
              - col:17152
              - col:17153
              - col:17175
              - col:17178
              - col:17180
              - col:17193
              - col:17196
              - col:17199
              - col:17201
              - col:17206
              - col:17209
              - col:17213
              - col:17219
              - col:17224
              - col:17228
              - col:17243
              - col:17246
              - col:17251
              - col:17254
              - col:17259
              - col:17262
              - col:17263
              - col:17267
              - col:17271
              - col:17272
              - col:17278
              - col:17281
              - col:17282
              - col:17285
              - col:17300
            sourceReferenceIds:
              - ref:3068
              - ref:6270
              - ref:1757
              - ref:6294
              - ref:3069
              - ref:86699
            originalIdentificationMappings:
              - occurrenceId: occ:179402
                originalIdentifiedName: Miniochoerus battlecreekensis
                acceptedName: Miniochoerus affinis
                difference: null
              - occurrenceId: occ:179599
                originalIdentifiedName: Platyochoerus platycephalus
                acceptedName: Miniochoerus affinis
                difference: null
              - occurrenceId: occ:179658
                originalIdentifiedName: Platyochoerus platycephalus
                acceptedName: Miniochoerus affinis
                difference: null
              - occurrenceId: occ:179959
                originalIdentifiedName: Miniochoerus battlecreekensis
                acceptedName: Miniochoerus affinis
                difference: null
              - occurrenceId: occ:179977
                originalIdentifiedName: Miniochoerus battlecreekensis
                acceptedName: Miniochoerus affinis
                difference: null
              - occurrenceId: occ:180125
                originalIdentifiedName: Stenopsochoerus sternbergi
                acceptedName: Miniochoerus affinis
                difference: null
              - occurrenceId: occ:180130
                originalIdentifiedName: Platyochoerus platycephalus
                acceptedName: Miniochoerus affinis
                difference: null
              - occurrenceId: occ:180252
                originalIdentifiedName: Platyochoerus platycephalus
                acceptedName: Miniochoerus affinis
                difference: null
              - occurrenceId: occ:180256
                originalIdentifiedName: Platyochoerus platycephalus
                acceptedName: Miniochoerus affinis
                difference: null
              - occurrenceId: occ:180301
                originalIdentifiedName: Miniochoerus (Paraminiochoerus) affinis
                acceptedName: Miniochoerus affinis
                difference: recombined as
              - occurrenceId: occ:180360
                originalIdentifiedName: Miniochoerus battlecreekensis
                acceptedName: Miniochoerus affinis
                difference: null
              - occurrenceId: occ:180365
                originalIdentifiedName: Miniochoerus battlecreekensis
                acceptedName: Miniochoerus affinis
                difference: null
              - occurrenceId: occ:180468
                originalIdentifiedName: Platyochoerus platycephalus
                acceptedName: Miniochoerus affinis
                difference: null
              - occurrenceId: occ:180472
                originalIdentifiedName: Miniochoerus (Paraminiochoerus) affinis
                acceptedName: Miniochoerus affinis
                difference: recombined as
              - occurrenceId: occ:180474
                originalIdentifiedName: Miniochoerus battlecreekensis
                acceptedName: Miniochoerus affinis
                difference: null
              - occurrenceId: occ:180481
                originalIdentifiedName: Platyochoerus platycephalus
                acceptedName: Miniochoerus affinis
                difference: null
              - occurrenceId: occ:180519
                originalIdentifiedName: Platyochoerus platycephalus
                acceptedName: Miniochoerus affinis
                difference: null
              - occurrenceId: occ:180525
                originalIdentifiedName: Miniochoerus battlecreekensis
                acceptedName: Miniochoerus affinis
                difference: null
              - occurrenceId: occ:180582
                originalIdentifiedName: Stenopsochoerus sternbergi
                acceptedName: Miniochoerus affinis
                difference: null
              - occurrenceId: occ:1366365
                originalIdentifiedName: Stenopsochoerus sternbergi n. sp.
                acceptedName: Miniochoerus affinis
                difference: null
              - occurrenceId: occ:1635601
                originalIdentifiedName: Platyochoerus platycephalus
                acceptedName: Miniochoerus affinis
                difference: null
              - occurrenceId: occ:1635602
                originalIdentifiedName: Stenopsochoerus sternbergi
                acceptedName: Miniochoerus affinis
                difference: null
              - occurrenceId: occ:1639991
                originalIdentifiedName: Miniochoerus battlecreekensis
                acceptedName: Miniochoerus affinis
                difference: null
              - occurrenceId: occ:1639996
                originalIdentifiedName: Stenopsochoerus sternbergi
                acceptedName: Miniochoerus affinis
                difference: null
              - occurrenceId: occ:1640011
                originalIdentifiedName: Platyochoerus platycephalus
                acceptedName: Miniochoerus affinis
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

# Miniochoerus affinis
