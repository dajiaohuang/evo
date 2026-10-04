---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Boverisuchus vorax
    rank: species
    sourceDatasetId: null
    name:
      zh: Boverisuchus vorax
      en: Boverisuchus vorax
    reviewStatus: source-linked
    checkedAt: 2026-10-02
    sections:
      - topic: overview
        sourceIds:
          - pbdbCrocodylomorphTaxonomy20261002
          - pbdbCrocodylomorphOccurrences20261002
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
          - pbdbCrocodylomorphOccurrences20261002
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
          - pbdbCrocodylomorphOccurrences20261002
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
          - pbdbCrocodylomorphOccurrences20261002
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
          - pbdbCrocodylomorphOccurrences20261002
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
        - referenceId: ref-30f8d58a-bd48-4206-a2c0-6f84e8dffebf
          metadataVariant: 0
          sourceKey: pbdbCrocodylomorphTaxonomy20261002
          usage:
            title: PBDB accepted record — Boverisuchus vorax
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=110999&show=parent,app,attr
            locator: Fixed dated accepted species OID and current same-name accepted hierarchy; PBDB ancestry remains separate from COL.
          originalFields:
            - id
            - title
            - url
            - version
            - license
            - locator
        - referenceId: ref-30f8d58a-bd48-4206-a2c0-6f84e8dffebf
          metadataVariant: 0
          sourceKey: pbdbCrocodylomorphOccurrences20261002
          usage:
            locator: 2026-10-02 occurrence response accepted_no txn:110999; original response record indices retained in data/sources/crocodylomorph-occurrence-guides-2026-10-02-records.jsonl.gz.
            accessedAt: 2026-10-02
            responseSha256: c4a662dc45be8020da61b782b38d37ab583c35a2e4bdf978ceca29e010472ca1
            pbdbTaxonId: txn:110999
            selectedOccurrenceIds:
              - occ:286255
              - occ:286296
              - occ:519761
              - occ:650098
              - occ:650099
              - occ:1132848
              - occ:1132849
              - occ:1132850
              - occ:1132851
              - occ:1132852
              - occ:1132853
              - occ:1353412
            selectedCollectionIds:
              - col:27268
              - col:15837
              - col:16396
              - col:16270
              - col:16273
              - col:15718
              - col:16228
              - col:16236
              - col:16279
              - col:144195
              - col:144196
              - col:16000
            sourceReferenceIds:
              - ref:7542
              - ref:1741
              - ref:3806
              - ref:46624
              - ref:3438
            originalIdentificationMappings:
              - occurrenceId: occ:286255
                originalIdentifiedName: Pristichampsus vorax
                acceptedName: Boverisuchus vorax
                difference: recombined as
              - occurrenceId: occ:286296
                originalIdentifiedName: Pristichampsus vorax
                acceptedName: Boverisuchus vorax
                difference: recombined as
              - occurrenceId: occ:519761
                originalIdentifiedName: Pristichampsus vorax
                acceptedName: Boverisuchus vorax
                difference: recombined as
              - occurrenceId: occ:650098
                originalIdentifiedName: Pristichampsus vorax
                acceptedName: Boverisuchus vorax
                difference: recombined as
              - occurrenceId: occ:650099
                originalIdentifiedName: Pristichampsus vorax
                acceptedName: Boverisuchus vorax
                difference: recombined as
              - occurrenceId: occ:1132848
                originalIdentifiedName: Crocodylus vorax n. sp.
                acceptedName: Boverisuchus vorax
                difference: recombined as
              - occurrenceId: occ:1132849
                originalIdentifiedName: Pristichampsus vorax
                acceptedName: Boverisuchus vorax
                difference: recombined as
              - occurrenceId: occ:1132850
                originalIdentifiedName: Pristichampsus vorax
                acceptedName: Boverisuchus vorax
                difference: recombined as
              - occurrenceId: occ:1132851
                originalIdentifiedName: Pristichampsus vorax
                acceptedName: Boverisuchus vorax
                difference: recombined as
              - occurrenceId: occ:1132852
                originalIdentifiedName: Pristichampsus vorax
                acceptedName: Boverisuchus vorax
                difference: recombined as
              - occurrenceId: occ:1132853
                originalIdentifiedName: Pristichampsus vorax
                acceptedName: Boverisuchus vorax
                difference: recombined as
              - occurrenceId: occ:1353412
                originalIdentifiedName: Pristichampsus vorax
                acceptedName: Boverisuchus vorax
                difference: recombined as
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

# Boverisuchus vorax
