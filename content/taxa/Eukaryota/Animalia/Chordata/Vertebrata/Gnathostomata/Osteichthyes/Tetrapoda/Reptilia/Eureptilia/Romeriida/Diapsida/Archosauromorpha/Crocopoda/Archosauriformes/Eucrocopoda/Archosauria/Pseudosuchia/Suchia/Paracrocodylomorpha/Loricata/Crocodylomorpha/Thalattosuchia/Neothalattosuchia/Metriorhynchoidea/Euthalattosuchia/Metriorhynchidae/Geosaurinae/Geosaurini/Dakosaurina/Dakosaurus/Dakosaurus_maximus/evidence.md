---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Dakosaurus maximus
    rank: species
    sourceDatasetId: null
    name:
      zh: Dakosaurus maximus
      en: Dakosaurus maximus
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
            title: PBDB accepted record — Dakosaurus maximus
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=98438&show=parent,app,attr
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
            locator: 2026-10-02 occurrence response accepted_no txn:98438; original response record indices retained in data/sources/crocodylomorph-occurrence-guides-2026-10-02-records.jsonl.gz.
            accessedAt: 2026-10-02
            responseSha256: c4a662dc45be8020da61b782b38d37ab583c35a2e4bdf978ceca29e010472ca1
            pbdbTaxonId: txn:98438
            selectedOccurrenceIds:
              - occ:811742
              - occ:1067350
              - occ:1074911
              - occ:1074913
              - occ:1074914
              - occ:1074915
              - occ:1074916
              - occ:1074917
              - occ:1074918
              - occ:1134443
              - occ:1190498
              - occ:1190503
              - occ:1192859
              - occ:1206124
              - occ:1585965
              - occ:1585966
              - occ:1585967
              - occ:1585970
              - occ:1704791
            selectedCollectionIds:
              - col:89120
              - col:119508
              - col:74069
              - col:130048
              - col:105541
              - col:94534
              - col:133662
              - col:144398
              - col:152901
              - col:59175
              - col:154138
              - col:156363
              - col:93216
              - col:207479
              - col:53039
              - col:24523
              - col:229120
            sourceReferenceIds:
              - ref:12997
              - ref:14179
              - ref:43071
              - ref:46685
              - ref:43156
              - ref:49972
              - ref:51229
              - ref:79044
            originalIdentificationMappings:
              - occurrenceId: occ:811742
                originalIdentifiedName: Megalosaurus schnaitheimii n. sp.
                acceptedName: Dakosaurus maximus
                difference: null
              - occurrenceId: occ:1067350
                originalIdentifiedName: Dakosaurus lissocephalus n. sp.
                acceptedName: Dakosaurus maximus
                difference: null
              - occurrenceId: occ:1134443
                originalIdentifiedName: Dakosaurus maximus n. sp.
                acceptedName: Dakosaurus maximus
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

# Dakosaurus maximus
