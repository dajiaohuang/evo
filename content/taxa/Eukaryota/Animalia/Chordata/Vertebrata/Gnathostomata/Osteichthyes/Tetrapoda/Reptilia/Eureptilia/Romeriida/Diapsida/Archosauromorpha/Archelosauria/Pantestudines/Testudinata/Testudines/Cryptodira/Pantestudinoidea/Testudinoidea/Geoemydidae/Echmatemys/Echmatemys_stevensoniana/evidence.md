---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Echmatemys stevensoniana
    rank: species
    sourceDatasetId: null
    name:
      zh: Echmatemys stevensoniana
      en: Echmatemys stevensoniana
    checkedAt: 2026-10-02
    sections:
      - topic: overview
        sourceIds:
          - pbdbPantestudinesTaxonomy20261002
          - pbdbPantestudinesOccurrences20261002
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
          - pbdbPantestudinesOccurrences20261002
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
          - pbdbPantestudinesOccurrences20261002
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
          - pbdbPantestudinesOccurrences20261002
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
          - pbdbPantestudinesOccurrences20261002
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
        - referenceId: ref-ca0a2dd7-4ca6-470e-bc1d-9aba950cee4c
          metadataVariant: 0
          sourceKey: pbdbPantestudinesTaxonomy20261002
          usage:
            title: PBDB accepted record — Echmatemys stevensoniana
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=154019&show=parent,app,attr
            locator: Fixed dated accepted species OID and current same-name accepted hierarchy; PBDB ancestry remains separate from COL.
          originalFields:
            - id
            - title
            - url
            - version
            - license
            - locator
        - referenceId: ref-ca0a2dd7-4ca6-470e-bc1d-9aba950cee4c
          metadataVariant: 0
          sourceKey: pbdbPantestudinesOccurrences20261002
          usage:
            locator: 2026-10-02 occurrence response accepted_no txn:154019; original response record indices retained in data/sources/pantestudines-occurrence-guides-2026-10-02-records.jsonl.gz.
            accessedAt: 2026-10-02
            responseSha256: 420dc1c50b596ab358c29c338c87a9400512fd005c369ade614416e403aeff56
            pbdbTaxonId: txn:154019
            selectedOccurrenceIds:
              - occ:172073
              - occ:519742
              - occ:533467
              - occ:533471
              - occ:649992
              - occ:650003
              - occ:650004
              - occ:650008
              - occ:650011
              - occ:650021
              - occ:1389238
              - occ:1389521
              - occ:1393370
              - occ:1393373
              - occ:1393375
            selectedCollectionIds:
              - col:15837
              - col:16623
              - col:16405
              - col:55207
              - col:16262
              - col:16261
              - col:16265
              - col:16273
              - col:16267
              - col:16270
              - col:191004
              - col:128447
              - col:16228
              - col:16201
            sourceReferenceIds:
              - ref:7542
              - ref:3338
              - ref:3613
              - ref:3806
              - ref:64379
              - ref:30725
              - ref:14442
            originalIdentificationMappings:
              - occurrenceId: occ:172073
                originalIdentifiedName: Echmatemys septaria
                acceptedName: Echmatemys stevensoniana
                difference: null
              - occurrenceId: occ:519742
                originalIdentifiedName: Echmatemys septaria
                acceptedName: Echmatemys stevensoniana
                difference: null
              - occurrenceId: occ:533467
                originalIdentifiedName: Echmatemys septaria
                acceptedName: Echmatemys stevensoniana
                difference: null
              - occurrenceId: occ:533471
                originalIdentifiedName: Echmatemys septaria
                acceptedName: Echmatemys stevensoniana
                difference: null
              - occurrenceId: occ:649992
                originalIdentifiedName: Echmatemys septaria
                acceptedName: Echmatemys stevensoniana
                difference: null
              - occurrenceId: occ:650003
                originalIdentifiedName: Echmatemys septaria
                acceptedName: Echmatemys stevensoniana
                difference: null
              - occurrenceId: occ:650004
                originalIdentifiedName: Echmatemys septaria
                acceptedName: Echmatemys stevensoniana
                difference: null
              - occurrenceId: occ:650008
                originalIdentifiedName: Echmatemys septaria
                acceptedName: Echmatemys stevensoniana
                difference: null
              - occurrenceId: occ:650011
                originalIdentifiedName: Echmatemys septaria
                acceptedName: Echmatemys stevensoniana
                difference: null
              - occurrenceId: occ:650021
                originalIdentifiedName: Echmatemys septaria
                acceptedName: Echmatemys stevensoniana
                difference: null
              - occurrenceId: occ:1389238
                originalIdentifiedName: Emys septarius n. sp.
                acceptedName: Echmatemys stevensoniana
                difference: null
              - occurrenceId: occ:1389521
                originalIdentifiedName: Emys stevensonianus n. sp.
                acceptedName: Echmatemys stevensoniana
                difference: recombined as
              - occurrenceId: occ:1393370
                originalIdentifiedName: Echmatemys aegle n. sp.
                acceptedName: Echmatemys stevensoniana
                difference: null
              - occurrenceId: occ:1393373
                originalIdentifiedName: Echmatemys cyane n. sp.
                acceptedName: Echmatemys stevensoniana
                difference: null
              - occurrenceId: occ:1393375
                originalIdentifiedName: Echmatemys ocyrrhoe n. sp.
                acceptedName: Echmatemys stevensoniana
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

# Echmatemys stevensoniana
