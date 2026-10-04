---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Oligopherus laticuneus
    rank: species
    sourceDatasetId: null
    name:
      zh: Oligopherus laticuneus
      en: Oligopherus laticuneus
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
            title: PBDB accepted record — Oligopherus laticuneus
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=308270&show=parent,app,attr
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
            locator: 2026-10-02 occurrence response accepted_no txn:308270; original response record indices retained in data/sources/pantestudines-occurrence-guides-2026-10-02-records.jsonl.gz.
            accessedAt: 2026-10-02
            responseSha256: 420dc1c50b596ab358c29c338c87a9400512fd005c369ade614416e403aeff56
            pbdbTaxonId: txn:308270
            selectedOccurrenceIds:
              - occ:898326
              - occ:898327
              - occ:898329
              - occ:898330
              - occ:1393309
              - occ:1393551
              - occ:1393555
            selectedCollectionIds:
              - col:99846
              - col:99847
              - col:99848
              - col:99849
              - col:191902
              - col:17152
              - col:17092
            sourceReferenceIds:
              - ref:760
              - ref:64765
              - ref:64803
              - ref:14442
            originalIdentificationMappings:
              - occurrenceId: occ:898326
                originalIdentifiedName: Testudo praeextans
                acceptedName: Oligopherus laticuneus
                difference: null
              - occurrenceId: occ:898327
                originalIdentifiedName: Testudo praeextans
                acceptedName: Oligopherus laticuneus
                difference: null
              - occurrenceId: occ:898329
                originalIdentifiedName: Testudo praeextans
                acceptedName: Oligopherus laticuneus
                difference: null
              - occurrenceId: occ:898330
                originalIdentifiedName: Testudo praeextans
                acceptedName: Oligopherus laticuneus
                difference: null
              - occurrenceId: occ:1393309
                originalIdentifiedName: Testudo undabuna n. sp.
                acceptedName: Oligopherus laticuneus
                difference: null
              - occurrenceId: occ:1393551
                originalIdentifiedName: Testudo praeextans n. sp.
                acceptedName: Oligopherus laticuneus
                difference: null
              - occurrenceId: occ:1393555
                originalIdentifiedName: Testudo thomsoni n. sp.
                acceptedName: Oligopherus laticuneus
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

# Oligopherus laticuneus
