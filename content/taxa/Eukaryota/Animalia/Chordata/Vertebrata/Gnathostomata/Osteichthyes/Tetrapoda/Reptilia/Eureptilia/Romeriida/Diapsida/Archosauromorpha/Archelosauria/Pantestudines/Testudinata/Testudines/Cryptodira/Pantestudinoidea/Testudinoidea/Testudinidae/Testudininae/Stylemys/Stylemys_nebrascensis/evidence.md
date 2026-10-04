---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Stylemys nebrascensis
    rank: species
    sourceDatasetId: null
    name:
      zh: Stylemys nebrascensis
      en: Stylemys nebrascensis
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
            title: PBDB accepted record — Stylemys nebrascensis
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=235294&show=parent,app,attr
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
            locator: 2026-10-02 occurrence response accepted_no txn:235294; original response record indices retained in data/sources/pantestudines-occurrence-guides-2026-10-02-records.jsonl.gz.
            accessedAt: 2026-10-02
            responseSha256: 420dc1c50b596ab358c29c338c87a9400512fd005c369ade614416e403aeff56
            pbdbTaxonId: txn:235294
            selectedOccurrenceIds:
              - occ:897399
              - occ:897401
              - occ:897403
              - occ:897405
              - occ:897407
              - occ:897409
              - occ:897411
              - occ:897414
              - occ:898265
              - occ:1280887
              - occ:1386586
              - occ:1386610
              - occ:1386611
              - occ:1386612
              - occ:1386613
              - occ:1389220
              - occ:1389221
              - occ:1393521
              - occ:1414068
            selectedCollectionIds:
              - col:99590
              - col:99591
              - col:99592
              - col:99593
              - col:99594
              - col:99595
              - col:17133
              - col:17527
              - col:99836
              - col:101961
              - col:190539
              - col:16977
              - col:17745
              - col:17152
            sourceReferenceIds:
              - ref:34254
              - ref:3170
              - ref:697
              - ref:34333
              - ref:55503
              - ref:64068
              - ref:64069
              - ref:12192
              - ref:13001
              - ref:64377
              - ref:14442
              - ref:64803
            originalIdentificationMappings:
              - occurrenceId: occ:897414
                originalIdentifiedName: Gopherus neglectus n. sp.
                acceptedName: Stylemys nebrascensis
                difference: null
              - occurrenceId: occ:1386586
                originalIdentifiedName: Stylemys nebrascensis n. gen. n. sp.
                acceptedName: Stylemys nebrascensis
                difference: null
              - occurrenceId: occ:1386610
                originalIdentifiedName: Testudo lata n. sp.
                acceptedName: Stylemys nebrascensis
                difference: null
              - occurrenceId: occ:1386611
                originalIdentifiedName: Emys hemispherica n. sp.
                acceptedName: Stylemys nebrascensis
                difference: null
              - occurrenceId: occ:1386612
                originalIdentifiedName: Emys oweni n. sp.
                acceptedName: Stylemys nebrascensis
                difference: null
              - occurrenceId: occ:1386613
                originalIdentifiedName: Emys culbertsonii n. sp.
                acceptedName: Stylemys nebrascensis
                difference: null
              - occurrenceId: occ:1389220
                originalIdentifiedName: Testudo amphithorax n. sp.
                acceptedName: Stylemys nebrascensis
                difference: null
              - occurrenceId: occ:1389221
                originalIdentifiedName: Testudo ligonius n. sp.
                acceptedName: Stylemys nebrascensis
                difference: null
              - occurrenceId: occ:1393521
                originalIdentifiedName: Testudo emiliae n. sp.
                acceptedName: Stylemys nebrascensis
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

# Stylemys nebrascensis
