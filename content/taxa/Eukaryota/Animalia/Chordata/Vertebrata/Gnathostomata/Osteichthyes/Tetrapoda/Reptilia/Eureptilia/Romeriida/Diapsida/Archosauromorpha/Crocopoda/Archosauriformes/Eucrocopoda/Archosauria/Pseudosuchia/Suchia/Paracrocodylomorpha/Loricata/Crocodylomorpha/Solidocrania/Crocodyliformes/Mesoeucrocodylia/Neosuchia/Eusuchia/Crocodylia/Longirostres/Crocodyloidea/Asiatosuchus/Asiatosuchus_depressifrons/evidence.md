---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Asiatosuchus depressifrons
    rank: species
    sourceDatasetId: null
    name:
      zh: Asiatosuchus depressifrons
      en: Asiatosuchus depressifrons
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
            title: PBDB accepted record — Asiatosuchus depressifrons
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=266686&show=parent,app,attr
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
            locator: 2026-10-02 occurrence response accepted_no txn:266686; original response record indices retained in data/sources/crocodylomorph-occurrence-guides-2026-10-02-records.jsonl.gz.
            accessedAt: 2026-10-02
            responseSha256: c4a662dc45be8020da61b782b38d37ab583c35a2e4bdf978ceca29e010472ca1
            pbdbTaxonId: txn:266686
            selectedOccurrenceIds:
              - occ:1130061
              - occ:1132265
              - occ:1132266
              - occ:1132267
              - occ:1132268
              - occ:1132269
              - occ:1132270
              - occ:1246729
              - occ:1348061
            selectedCollectionIds:
              - col:78233
              - col:87947
              - col:35531
              - col:144102
              - col:144103
              - col:68437
              - col:144104
              - col:68428
              - col:182641
            sourceReferenceIds:
              - ref:59233
              - ref:29875
              - ref:46599
              - ref:63759
              - ref:60846
            originalIdentificationMappings:
              - occurrenceId: occ:1130061
                originalIdentifiedName: Crocodylus depressifrons
                acceptedName: Asiatosuchus depressifrons
                difference: recombined as
              - occurrenceId: occ:1132265
                originalIdentifiedName: Crocodylus depressifrons
                acceptedName: Asiatosuchus depressifrons
                difference: recombined as
              - occurrenceId: occ:1132266
                originalIdentifiedName: Crocodylus depressifrons
                acceptedName: Asiatosuchus depressifrons
                difference: recombined as
              - occurrenceId: occ:1132267
                originalIdentifiedName: Crocodylus depressifrons
                acceptedName: Asiatosuchus depressifrons
                difference: recombined as
              - occurrenceId: occ:1132268
                originalIdentifiedName: Crocodylus depressifrons
                acceptedName: Asiatosuchus depressifrons
                difference: recombined as
              - occurrenceId: occ:1132269
                originalIdentifiedName: Crocodylus depressifrons
                acceptedName: Asiatosuchus depressifrons
                difference: recombined as
              - occurrenceId: occ:1132270
                originalIdentifiedName: Crocodylus depressifrons n. sp.
                acceptedName: Asiatosuchus depressifrons
                difference: recombined as
              - occurrenceId: occ:1348061
                originalIdentifiedName: Crocodylus depressifrons
                acceptedName: Asiatosuchus depressifrons
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

# Asiatosuchus depressifrons
