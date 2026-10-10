---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Proscelidodon gracillimus
    rank: species
    sourceDatasetId: null
    name:
      zh: Proscelidodon gracillimus
      en: Proscelidodon gracillimus
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
            title: PBDB accepted record — Proscelidodon gracillimus
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=388680&show=parent,app,attr
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
            locator: 2026-10-02 occurrence response accepted_no txn:388680; original response record indices retained in data/sources/mammalia-occurrence-guides-2026-10-02-records.jsonl.gz.
            accessedAt: 2026-10-02
            responseSha256: 368dafda8e7422b86d7992dc15a10defe699a9db146057d35e01a82c1c54bfa2
            pbdbTaxonId: txn:388680
            selectedOccurrenceIds:
              - occ:801771
              - occ:1476901
              - occ:1481440
              - occ:1481441
              - occ:1481442
              - occ:1508413
              - occ:1508414
              - occ:1519113
              - occ:1519200
              - occ:1519201
              - occ:1519202
              - occ:1519203
              - occ:1519204
              - occ:1519205
              - occ:1519206
              - occ:1519207
              - occ:1519208
              - occ:1519209
              - occ:1519210
              - occ:1534897
            selectedCollectionIds:
              - col:87198
              - col:206031
              - col:206316
              - col:87200
              - col:206318
              - col:210572
              - col:210573
              - col:207619
              - col:87201
              - col:140925
              - col:204598
              - col:152061
              - col:151498
              - col:204363
              - col:192135
              - col:152067
              - col:151500
              - col:141939
              - col:211640
              - col:198543
            sourceReferenceIds:
              - ref:29353
              - ref:73341
              - ref:70872
              - ref:63683
              - ref:73330
              - ref:74327
            originalIdentificationMappings:
              - occurrenceId: occ:801771
                originalIdentifiedName: Elassotherium altirostre
                acceptedName: Proscelidodon gracillimus
                difference: null
              - occurrenceId: occ:1481440
                originalIdentifiedName: Elassotherium altirostre
                acceptedName: Proscelidodon gracillimus
                difference: null
              - occurrenceId: occ:1481441
                originalIdentifiedName: Elassotherium altirostre
                acceptedName: Proscelidodon gracillimus
                difference: null
              - occurrenceId: occ:1481442
                originalIdentifiedName: Elassotherium altirostre
                acceptedName: Proscelidodon gracillimus
                difference: null
              - occurrenceId: occ:1508413
                originalIdentifiedName: Proscelidodon gracillimus n. sp.
                acceptedName: Proscelidodon gracillimus
                difference: null
              - occurrenceId: occ:1519113
                originalIdentifiedName: Elassotherium altirostre n. gen. n. sp.
                acceptedName: Proscelidodon gracillimus
                difference: null
              - occurrenceId: occ:1519200
                originalIdentifiedName: Proscelidodon almagroi n. sp.
                acceptedName: Proscelidodon gracillimus
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

# Proscelidodon gracillimus
