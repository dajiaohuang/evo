---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Paleotestudo antiqua
    rank: species
    sourceDatasetId: null
    name:
      zh: Paleotestudo antiqua
      en: Paleotestudo antiqua
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
            title: PBDB accepted record — Paleotestudo antiqua
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=358124&show=parent,app,attr
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
            locator: 2026-10-02 occurrence response accepted_no txn:358124; original response record indices retained in data/sources/pantestudines-occurrence-guides-2026-10-02-records.jsonl.gz.
            accessedAt: 2026-10-02
            responseSha256: 420dc1c50b596ab358c29c338c87a9400512fd005c369ade614416e403aeff56
            pbdbTaxonId: txn:358124
            selectedOccurrenceIds:
              - occ:1401720
              - occ:1401721
              - occ:1463347
              - occ:1463348
              - occ:1463349
              - occ:1463350
              - occ:1463351
              - occ:1463352
              - occ:1463353
              - occ:1463354
            selectedCollectionIds:
              - col:187347
              - col:187345
              - col:204220
              - col:201475
              - col:190006
              - col:92640
              - col:204221
              - col:204222
              - col:204223
              - col:204224
            sourceReferenceIds:
              - ref:65661
              - ref:69992
              - ref:69991
            originalIdentificationMappings:
              - occurrenceId: occ:1463347
                originalIdentifiedName: Testudo catalaunica n. sp.
                acceptedName: Paleotestudo antiqua
                difference: null
              - occurrenceId: occ:1463348
                originalIdentifiedName: Testudo (Chersine) catalaunica
                acceptedName: Paleotestudo antiqua
                difference: null
              - occurrenceId: occ:1463349
                originalIdentifiedName: Testudo (Chersine) catalaunica
                acceptedName: Paleotestudo antiqua
                difference: null
              - occurrenceId: occ:1463350
                originalIdentifiedName: Testudo (Chersine) catalaunica
                acceptedName: Paleotestudo antiqua
                difference: null
              - occurrenceId: occ:1463351
                originalIdentifiedName: Testudo (Chersine) catalaunica
                acceptedName: Paleotestudo antiqua
                difference: null
              - occurrenceId: occ:1463352
                originalIdentifiedName: Testudo (Chersine) catalaunica
                acceptedName: Paleotestudo antiqua
                difference: null
              - occurrenceId: occ:1463353
                originalIdentifiedName: Testudo (Chersine) catalaunica
                acceptedName: Paleotestudo antiqua
                difference: null
              - occurrenceId: occ:1463354
                originalIdentifiedName: Testudo (Chersine) catalaunica
                acceptedName: Paleotestudo antiqua
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

# Paleotestudo antiqua
