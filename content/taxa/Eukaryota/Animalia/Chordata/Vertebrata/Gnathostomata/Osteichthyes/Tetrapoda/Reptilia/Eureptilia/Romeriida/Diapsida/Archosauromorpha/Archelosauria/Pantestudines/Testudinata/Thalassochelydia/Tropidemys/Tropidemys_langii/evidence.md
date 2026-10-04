---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Tropidemys langii
    rank: species
    sourceDatasetId: null
    name:
      zh: Tropidemys langii
      en: Tropidemys langii
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
            title: PBDB accepted record — Tropidemys langii
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=235458&show=parent,app,attr
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
            locator: 2026-10-02 occurrence response accepted_no txn:235458; original response record indices retained in data/sources/pantestudines-occurrence-guides-2026-10-02-records.jsonl.gz.
            accessedAt: 2026-10-02
            responseSha256: 420dc1c50b596ab358c29c338c87a9400512fd005c369ade614416e403aeff56
            pbdbTaxonId: txn:235458
            selectedOccurrenceIds:
              - occ:850534
              - occ:1094395
              - occ:1094396
              - occ:1094397
              - occ:1094399
              - occ:1143775
              - occ:1195867
              - occ:1195868
              - occ:1195869
              - occ:1195870
              - occ:1195871
              - occ:1205537
              - occ:1347082
              - occ:1551399
            selectedCollectionIds:
              - col:94532
              - col:137749
              - col:90875
              - col:92096
              - col:154713
              - col:154716
              - col:154717
              - col:154714
              - col:154715
              - col:182492
              - col:219047
            sourceReferenceIds:
              - ref:46679
              - ref:44124
              - ref:47078
              - ref:50311
              - ref:51159
              - ref:60696
              - ref:75893
            originalIdentificationMappings:
              - occurrenceId: occ:850534
                originalIdentifiedName: Tropidemys gibba
                acceptedName: Tropidemys langii
                difference: null
              - occurrenceId: occ:1094395
                originalIdentifiedName: Tropidemys langi n. gen. n. sp.
                acceptedName: Tropidemys langii
                difference: variant of
              - occurrenceId: occ:1094396
                originalIdentifiedName: Tropidemys expansa
                acceptedName: Tropidemys langii
                difference: null
              - occurrenceId: occ:1094397
                originalIdentifiedName: Tropidemys gibba
                acceptedName: Tropidemys langii
                difference: null
              - occurrenceId: occ:1094399
                originalIdentifiedName: Tropidemys langi
                acceptedName: Tropidemys langii
                difference: variant of
              - occurrenceId: occ:1143775
                originalIdentifiedName: Tropidemys langi
                acceptedName: Tropidemys langii
                difference: variant of
              - occurrenceId: occ:1205537
                originalIdentifiedName: Craspedochelys plana n. sp.
                acceptedName: Tropidemys langii
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

# Tropidemys langii
