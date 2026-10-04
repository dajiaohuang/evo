---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Uintatherium anceps
    rank: species
    sourceDatasetId: null
    name:
      zh: Uintatherium anceps
      en: Uintatherium anceps
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
            title: PBDB accepted record — Uintatherium anceps
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=52360&show=parent,app,attr
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
            locator: 2026-10-02 occurrence response accepted_no txn:52360; original response record indices retained in data/sources/mammalia-occurrence-guides-2026-10-02-records.jsonl.gz.
            accessedAt: 2026-10-02
            responseSha256: 368dafda8e7422b86d7992dc15a10defe699a9db146057d35e01a82c1c54bfa2
            pbdbTaxonId: txn:52360
            selectedOccurrenceIds:
              - occ:173433
              - occ:173897
              - occ:174059
              - occ:174292
              - occ:174301
              - occ:174314
              - occ:174455
              - occ:174570
              - occ:175089
              - occ:175098
              - occ:175164
              - occ:175196
              - occ:175263
              - occ:175286
              - occ:176391
              - occ:941942
              - occ:941943
              - occ:941944
              - occ:941945
              - occ:1370257
            selectedCollectionIds:
              - col:16086
              - col:16200
              - col:16211
              - col:16234
              - col:16235
              - col:16236
              - col:16250
              - col:16278
              - col:16404
              - col:16406
              - col:16417
              - col:16421
              - col:16442
              - col:16448
              - col:16647
              - col:186968
            sourceReferenceIds:
              - ref:3622
              - ref:2495
              - ref:62704
            originalIdentificationMappings:
              - occurrenceId: occ:175089
                originalIdentifiedName: Dinoceras lucare n. sp.
                acceptedName: Uintatherium anceps
                difference: null
              - occurrenceId: occ:175164
                originalIdentifiedName: Dinoceras agreste n. sp.
                acceptedName: Uintatherium anceps
                difference: null
              - occurrenceId: occ:941942
                originalIdentifiedName: Dinoceras mirabile n. gen. n. sp.
                acceptedName: Uintatherium anceps
                difference: null
              - occurrenceId: occ:941943
                originalIdentifiedName: Uintatherium latifrons n. sp.
                acceptedName: Uintatherium anceps
                difference: null
              - occurrenceId: occ:941944
                originalIdentifiedName: Dinoceras laticeps n. sp.
                acceptedName: Uintatherium anceps
                difference: null
              - occurrenceId: occ:941945
                originalIdentifiedName: Tinoceras latum n. sp.
                acceptedName: Uintatherium anceps
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

# Uintatherium anceps
