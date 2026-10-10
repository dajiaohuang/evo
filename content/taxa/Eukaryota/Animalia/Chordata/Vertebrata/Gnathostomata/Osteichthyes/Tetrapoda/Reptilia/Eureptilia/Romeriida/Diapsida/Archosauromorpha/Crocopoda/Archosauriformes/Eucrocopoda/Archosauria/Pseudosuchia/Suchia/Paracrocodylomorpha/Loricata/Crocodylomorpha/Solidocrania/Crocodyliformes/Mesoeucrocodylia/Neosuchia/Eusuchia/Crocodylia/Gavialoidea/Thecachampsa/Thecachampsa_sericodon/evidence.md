---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Thecachampsa sericodon
    rank: species
    sourceDatasetId: null
    name:
      zh: Thecachampsa sericodon
      en: Thecachampsa sericodon
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
            title: PBDB accepted record — Thecachampsa sericodon
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=83331&show=parent,app,attr
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
            locator: 2026-10-02 occurrence response accepted_no txn:83331; original response record indices retained in data/sources/crocodylomorph-occurrence-guides-2026-10-02-records.jsonl.gz.
            accessedAt: 2026-10-02
            responseSha256: c4a662dc45be8020da61b782b38d37ab583c35a2e4bdf978ceca29e010472ca1
            pbdbTaxonId: txn:83331
            selectedOccurrenceIds:
              - occ:535317
              - occ:537541
              - occ:571573
              - occ:593173
              - occ:663790
              - occ:899103
              - occ:1132904
              - occ:1132924
              - occ:1132928
              - occ:1135257
              - occ:1193268
              - occ:1227251
              - occ:1333631
              - occ:1372044
              - occ:1372091
            selectedCollectionIds:
              - col:55396
              - col:45469
              - col:57782
              - col:18539
              - col:18587
              - col:45452
              - col:144200
              - col:144202
              - col:79757
              - col:144596
              - col:154221
              - col:161374
              - col:18560
              - col:79793
              - col:187324
            sourceReferenceIds:
              - ref:12189
              - ref:12596
              - ref:23900
              - ref:18119
              - ref:12635
              - ref:46386
              - ref:46627
              - ref:46789
              - ref:50053
              - ref:52569
              - ref:59567
              - ref:62831
            originalIdentificationMappings:
              - occurrenceId: occ:535317
                originalIdentifiedName: Thecachampsa sericodon n. sp.
                acceptedName: Thecachampsa sericodon
                difference: null
              - occurrenceId: occ:537541
                originalIdentifiedName: Megalodelphis magnidens n. gen. n. sp.
                acceptedName: Thecachampsa sericodon
                difference: null
              - occurrenceId: occ:571573
                originalIdentifiedName: Thecachampsa sicaria n. sp.
                acceptedName: Thecachampsa sericodon
                difference: null
              - occurrenceId: occ:593173
                originalIdentifiedName: Gavialosuchus americana
                acceptedName: Thecachampsa sericodon
                difference: null
              - occurrenceId: occ:899103
                originalIdentifiedName: Tomistoma americana n. sp.
                acceptedName: Thecachampsa sericodon
                difference: null
              - occurrenceId: occ:1132904
                originalIdentifiedName: Gavialosuchus americanus
                acceptedName: Thecachampsa sericodon
                difference: null
              - occurrenceId: occ:1132924
                originalIdentifiedName: Gavialosuchus americanus
                acceptedName: Thecachampsa sericodon
                difference: null
              - occurrenceId: occ:1132928
                originalIdentifiedName: Gavialosuchus americanus
                acceptedName: Thecachampsa sericodon
                difference: null
              - occurrenceId: occ:1135257
                originalIdentifiedName: Gavialosuchus americana
                acceptedName: Thecachampsa sericodon
                difference: null
              - occurrenceId: occ:1193268
                originalIdentifiedName: Gavialosuchus americanus
                acceptedName: Thecachampsa sericodon
                difference: null
              - occurrenceId: occ:1227251
                originalIdentifiedName: Gavialosuchus americanus
                acceptedName: Thecachampsa sericodon
                difference: null
              - occurrenceId: occ:1333631
                originalIdentifiedName: Gavialosuchus americana
                acceptedName: Thecachampsa sericodon
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

# Thecachampsa sericodon
