---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Neurankylus baueri
    rank: species
    sourceDatasetId: null
    name:
      zh: Neurankylus baueri
      en: Neurankylus baueri
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
            title: PBDB accepted record — Neurankylus baueri
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=82832&show=parent,app,attr
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
            locator: 2026-10-02 occurrence response accepted_no txn:82832; original response record indices retained in data/sources/pantestudines-occurrence-guides-2026-10-02-records.jsonl.gz.
            accessedAt: 2026-10-02
            responseSha256: 420dc1c50b596ab358c29c338c87a9400512fd005c369ade614416e403aeff56
            pbdbTaxonId: txn:82832
            selectedOccurrenceIds:
              - occ:513674
              - occ:591646
              - occ:900981
              - occ:1045403
              - occ:1194430
              - occ:1194456
              - occ:1194475
              - occ:1194542
              - occ:1194568
              - occ:1195290
              - occ:1374737
              - occ:1374739
              - occ:1374780
              - occ:1374800
              - occ:1374810
              - occ:1374819
              - occ:1374829
              - occ:1456908
              - occ:1556979
              - occ:1699441
            selectedCollectionIds:
              - col:52052
              - col:62481
              - col:100582
              - col:128456
              - col:154367
              - col:62317
              - col:154372
              - col:154386
              - col:62318
              - col:154599
              - col:187657
              - col:187659
              - col:187674
              - col:187693
              - col:187702
              - col:187706
              - col:187713
              - col:219712
              - col:240794
            sourceReferenceIds:
              - ref:50161
              - ref:18036
              - ref:14580
              - ref:62964
              - ref:63008
              - ref:76532
              - ref:92123
            originalIdentificationMappings:
              - occurrenceId: occ:591646
                originalIdentifiedName: Neurankylus baueri n. sp.
                acceptedName: Neurankylus baueri
                difference: null
              - occurrenceId: occ:1374780
                originalIdentifiedName: Neurankylus hutchisoni n. sp.
                acceptedName: Neurankylus baueri
                difference: null
              - occurrenceId: occ:1456908
                originalIdentifiedName: Neurankylus utahensis n. sp.
                acceptedName: Neurankylus baueri
                difference: null
              - occurrenceId: occ:1556979
                originalIdentifiedName: Neurankylus utahensis
                acceptedName: Neurankylus baueri
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

# Neurankylus baueri
