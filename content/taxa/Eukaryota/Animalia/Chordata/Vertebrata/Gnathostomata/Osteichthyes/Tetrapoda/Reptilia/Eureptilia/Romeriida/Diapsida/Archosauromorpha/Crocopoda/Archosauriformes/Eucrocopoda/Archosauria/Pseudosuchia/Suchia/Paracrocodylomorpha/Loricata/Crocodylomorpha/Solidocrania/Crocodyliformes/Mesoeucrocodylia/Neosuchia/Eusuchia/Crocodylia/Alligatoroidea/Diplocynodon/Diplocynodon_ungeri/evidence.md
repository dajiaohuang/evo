---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Diplocynodon ungeri
    rank: species
    sourceDatasetId: null
    name:
      zh: Diplocynodon ungeri
      en: Diplocynodon ungeri
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
            title: PBDB accepted record — Diplocynodon ungeri
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=266527&show=parent,app,attr
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
            locator: 2026-10-02 occurrence response accepted_no txn:266527; original response record indices retained in data/sources/crocodylomorph-occurrence-guides-2026-10-02-records.jsonl.gz.
            accessedAt: 2026-10-02
            responseSha256: c4a662dc45be8020da61b782b38d37ab583c35a2e4bdf978ceca29e010472ca1
            pbdbTaxonId: txn:266527
            selectedOccurrenceIds:
              - occ:711270
              - occ:1079020
              - occ:1079162
              - occ:1091889
              - occ:1091890
              - occ:1131967
              - occ:1131968
              - occ:1131969
              - occ:1193267
              - occ:1374035
              - occ:1431106
              - occ:1588137
            selectedCollectionIds:
              - col:76129
              - col:134954
              - col:135038
              - col:34615
              - col:144046
              - col:144047
              - col:69099
              - col:187580
              - col:90354
              - col:224418
            sourceReferenceIds:
              - ref:25806
              - ref:43315
              - ref:43888
              - ref:46556
              - ref:50052
              - ref:62965
              - ref:67825
              - ref:80391
            originalIdentificationMappings:
              - occurrenceId: occ:711270
                originalIdentifiedName: Diplocynodon styriacus
                acceptedName: Diplocynodon ungeri
                difference: null
              - occurrenceId: occ:1079020
                originalIdentifiedName: Diplocynodon styriacus
                acceptedName: Diplocynodon ungeri
                difference: null
              - occurrenceId: occ:1079162
                originalIdentifiedName: Diplocynodon styriacus
                acceptedName: Diplocynodon ungeri
                difference: null
              - occurrenceId: occ:1091889
                originalIdentifiedName: Diplocynodon styriacus
                acceptedName: Diplocynodon ungeri
                difference: null
              - occurrenceId: occ:1091890
                originalIdentifiedName: Diplocynodon styriacus
                acceptedName: Diplocynodon ungeri
                difference: null
              - occurrenceId: occ:1131967
                originalIdentifiedName: Enneodon ungeri n. gen. n. sp.
                acceptedName: Diplocynodon ungeri
                difference: recombined as
              - occurrenceId: occ:1131968
                originalIdentifiedName: Crocodilus styriacus n. sp.
                acceptedName: Diplocynodon ungeri
                difference: null
              - occurrenceId: occ:1131969
                originalIdentifiedName: Crocodilus steineri n. sp.
                acceptedName: Diplocynodon ungeri
                difference: null
              - occurrenceId: occ:1193267
                originalIdentifiedName: Diplocynodon styriacus
                acceptedName: Diplocynodon ungeri
                difference: null
              - occurrenceId: occ:1374035
                originalIdentifiedName: Diplocynodon styriacus
                acceptedName: Diplocynodon ungeri
                difference: null
              - occurrenceId: occ:1431106
                originalIdentifiedName: Diplocynodon styriacus
                acceptedName: Diplocynodon ungeri
                difference: null
              - occurrenceId: occ:1588137
                originalIdentifiedName: Diplocynodon styriacus
                acceptedName: Diplocynodon ungeri
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

# Diplocynodon ungeri
