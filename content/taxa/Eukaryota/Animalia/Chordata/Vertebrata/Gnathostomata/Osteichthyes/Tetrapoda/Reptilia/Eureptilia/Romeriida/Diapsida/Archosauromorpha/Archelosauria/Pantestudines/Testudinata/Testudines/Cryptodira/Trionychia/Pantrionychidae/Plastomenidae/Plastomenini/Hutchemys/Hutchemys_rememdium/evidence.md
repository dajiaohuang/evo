---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Hutchemys rememdium
    rank: species
    sourceDatasetId: null
    name:
      zh: Hutchemys rememdium
      en: Hutchemys rememdium
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
            title: PBDB accepted record — Hutchemys rememdium
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=253839&show=parent,app,attr
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
            locator: 2026-10-02 occurrence response accepted_no txn:253839; original response record indices retained in data/sources/pantestudines-occurrence-guides-2026-10-02-records.jsonl.gz.
            accessedAt: 2026-10-02
            responseSha256: 420dc1c50b596ab358c29c338c87a9400512fd005c369ade614416e403aeff56
            pbdbTaxonId: txn:253839
            selectedOccurrenceIds:
              - occ:1093829
              - occ:1093830
              - occ:1316652
              - occ:1316653
              - occ:1316654
              - occ:1316655
              - occ:1316656
              - occ:1316657
              - occ:1316658
              - occ:1316659
              - occ:1316660
            selectedCollectionIds:
              - col:15017
              - col:14874
              - col:176690
              - col:176691
              - col:176692
              - col:176693
              - col:176694
              - col:176695
              - col:176696
              - col:176697
            sourceReferenceIds:
              - ref:44082
              - ref:58298
            originalIdentificationMappings:
              - occurrenceId: occ:1093830
                originalIdentifiedName: Hutchemys rememdium n. gen. n. sp.
                acceptedName: Hutchemys rememdium
                difference: null
              - occurrenceId: occ:1316652
                originalIdentifiedName: Plastomenoides lamberti
                acceptedName: Hutchemys rememdium
                difference: null
              - occurrenceId: occ:1316653
                originalIdentifiedName: Plastomenoides lamberti
                acceptedName: Hutchemys rememdium
                difference: null
              - occurrenceId: occ:1316654
                originalIdentifiedName: Plastomenoides lamberti
                acceptedName: Hutchemys rememdium
                difference: null
              - occurrenceId: occ:1316655
                originalIdentifiedName: Plastomenoides lamberti
                acceptedName: Hutchemys rememdium
                difference: null
              - occurrenceId: occ:1316656
                originalIdentifiedName: Plastomenoides lamberti n. gen. n. sp.
                acceptedName: Hutchemys rememdium
                difference: null
              - occurrenceId: occ:1316657
                originalIdentifiedName: Plastomenoides lamberti
                acceptedName: Hutchemys rememdium
                difference: null
              - occurrenceId: occ:1316658
                originalIdentifiedName: Plastomenoides lamberti
                acceptedName: Hutchemys rememdium
                difference: null
              - occurrenceId: occ:1316659
                originalIdentifiedName: Plastomenoides lamberti
                acceptedName: Hutchemys rememdium
                difference: null
              - occurrenceId: occ:1316660
                originalIdentifiedName: Plastomenoides lamberti
                acceptedName: Hutchemys rememdium
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

# Hutchemys rememdium
