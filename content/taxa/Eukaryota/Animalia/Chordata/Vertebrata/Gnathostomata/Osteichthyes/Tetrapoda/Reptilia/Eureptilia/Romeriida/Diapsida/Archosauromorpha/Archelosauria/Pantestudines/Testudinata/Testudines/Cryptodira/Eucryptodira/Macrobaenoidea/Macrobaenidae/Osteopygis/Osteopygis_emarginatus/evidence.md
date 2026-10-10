---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Osteopygis emarginatus
    rank: species
    sourceDatasetId: null
    name:
      zh: Osteopygis emarginatus
      en: Osteopygis emarginatus
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
            title: PBDB accepted record — Osteopygis emarginatus
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=128348&show=parent,app,attr
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
            locator: 2026-10-02 occurrence response accepted_no txn:128348; original response record indices retained in data/sources/pantestudines-occurrence-guides-2026-10-02-records.jsonl.gz.
            accessedAt: 2026-10-02
            responseSha256: 420dc1c50b596ab358c29c338c87a9400512fd005c369ade614416e403aeff56
            pbdbTaxonId: txn:128348
            selectedOccurrenceIds:
              - occ:289111
              - occ:1052816
              - occ:1052817
              - occ:1058851
              - occ:1261007
              - occ:1263232
              - occ:1263233
              - occ:1263239
              - occ:1263240
              - occ:1371446
              - occ:1382179
              - occ:1382180
              - occ:1443725
              - occ:1626278
              - occ:1626280
            selectedCollectionIds:
              - col:27563
              - col:15074
              - col:115152
              - col:87902
              - col:167780
              - col:78124
              - col:52504
              - col:128429
              - col:84043
              - col:180790
              - col:48570
            sourceReferenceIds:
              - ref:773
              - ref:40967
              - ref:35435
              - ref:54671
              - ref:63647
              - ref:14442
              - ref:62802
              - ref:68976
              - ref:66781
            originalIdentificationMappings:
              - occurrenceId: occ:1058851
                originalIdentifiedName: Osteopygis platylomus n. sp.
                acceptedName: Osteopygis emarginatus
                difference: null
              - occurrenceId: occ:1261007
                originalIdentifiedName: Osteopygis robustus n. sp.
                acceptedName: Osteopygis emarginatus
                difference: null
              - occurrenceId: occ:1263232
                originalIdentifiedName: Osteopygis erosus n. sp.
                acceptedName: Osteopygis emarginatus
                difference: null
              - occurrenceId: occ:1263233
                originalIdentifiedName: Osteopygis chelydrinus n. sp.
                acceptedName: Osteopygis emarginatus
                difference: null
              - occurrenceId: occ:1263240
                originalIdentifiedName: Osteopygis emarginatus n. gen. n. sp.
                acceptedName: Osteopygis emarginatus
                difference: null
              - occurrenceId: occ:1382179
                originalIdentifiedName: Osteopygis platylomus
                acceptedName: Osteopygis emarginatus
                difference: null
              - occurrenceId: occ:1382180
                originalIdentifiedName: Osteopygis borealis
                acceptedName: Osteopygis emarginatus
                difference: null
              - occurrenceId: occ:1626278
                originalIdentifiedName: Osteopygis gibbi n. sp.
                acceptedName: Osteopygis emarginatus
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

# Osteopygis emarginatus
