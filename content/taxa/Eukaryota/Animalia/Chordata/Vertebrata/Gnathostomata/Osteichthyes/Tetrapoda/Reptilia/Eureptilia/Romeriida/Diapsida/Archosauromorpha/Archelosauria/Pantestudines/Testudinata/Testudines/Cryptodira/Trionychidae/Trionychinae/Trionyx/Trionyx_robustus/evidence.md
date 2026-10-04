---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Trionyx robustus
    rank: species
    sourceDatasetId: null
    name:
      zh: Trionyx robustus
      en: Trionyx robustus
    reviewStatus: source-linked
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
            title: PBDB accepted record — Trionyx robustus
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=82841&show=parent,app,attr
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
            locator: 2026-10-02 occurrence response accepted_no txn:82841; original response record indices retained in data/sources/pantestudines-occurrence-guides-2026-10-02-records.jsonl.gz.
            accessedAt: 2026-10-02
            responseSha256: 420dc1c50b596ab358c29c338c87a9400512fd005c369ade614416e403aeff56
            pbdbTaxonId: txn:82841
            selectedOccurrenceIds:
              - occ:901272
              - occ:1194446
              - occ:1194453
              - occ:1194472
              - occ:1194531
              - occ:1194537
              - occ:1194723
              - occ:1194887
              - occ:1195268
              - occ:1195437
              - occ:1195444
              - occ:1195445
              - occ:1195546
              - occ:1195547
              - occ:1195548
              - occ:1699450
            selectedCollectionIds:
              - col:100679
              - col:62548
              - col:62317
              - col:138830
              - col:154382
              - col:154383
              - col:154423
              - col:154462
              - col:154587
              - col:154627
              - col:154632
              - col:53517
              - col:154637
              - col:154638
              - col:154639
              - col:240794
            sourceReferenceIds:
              - ref:14580
              - ref:18055
              - ref:50161
              - ref:92123
            originalIdentificationMappings:
              - occurrenceId: occ:901272
                originalIdentifiedName: Aspideretes ovatus n. sp.
                acceptedName: Trionyx robustus
                difference: null
              - occurrenceId: occ:1194446
                originalIdentifiedName: Plastomenus robustus n. sp.
                acceptedName: Trionyx robustus
                difference: recombined as
              - occurrenceId: occ:1194453
                originalIdentifiedName: Aspideretoides robustus
                acceptedName: Trionyx robustus
                difference: recombined as
              - occurrenceId: occ:1194472
                originalIdentifiedName: Aspideretoides robustus
                acceptedName: Trionyx robustus
                difference: recombined as
              - occurrenceId: occ:1194531
                originalIdentifiedName: Aspideretoides robustus
                acceptedName: Trionyx robustus
                difference: recombined as
              - occurrenceId: occ:1194537
                originalIdentifiedName: Aspideretoides robustus
                acceptedName: Trionyx robustus
                difference: recombined as
              - occurrenceId: occ:1194723
                originalIdentifiedName: Aspideretoides robustus
                acceptedName: Trionyx robustus
                difference: recombined as
              - occurrenceId: occ:1194887
                originalIdentifiedName: Aspideretoides robustus
                acceptedName: Trionyx robustus
                difference: recombined as
              - occurrenceId: occ:1195268
                originalIdentifiedName: Aspideretoides robustus
                acceptedName: Trionyx robustus
                difference: recombined as
              - occurrenceId: occ:1195437
                originalIdentifiedName: Aspideretoides robustus
                acceptedName: Trionyx robustus
                difference: recombined as
              - occurrenceId: occ:1195444
                originalIdentifiedName: Aspideretoides robustus
                acceptedName: Trionyx robustus
                difference: recombined as
              - occurrenceId: occ:1195445
                originalIdentifiedName: Aspideretoides robustus
                acceptedName: Trionyx robustus
                difference: recombined as
              - occurrenceId: occ:1195546
                originalIdentifiedName: Aspideretoides robustus
                acceptedName: Trionyx robustus
                difference: recombined as
              - occurrenceId: occ:1195547
                originalIdentifiedName: Aspideretoides robustus
                acceptedName: Trionyx robustus
                difference: recombined as
              - occurrenceId: occ:1195548
                originalIdentifiedName: Aspideretoides robustus
                acceptedName: Trionyx robustus
                difference: recombined as
              - occurrenceId: occ:1699450
                originalIdentifiedName: '"Trionyx" robustus'
                acceptedName: Trionyx robustus
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

# Trionyx robustus
