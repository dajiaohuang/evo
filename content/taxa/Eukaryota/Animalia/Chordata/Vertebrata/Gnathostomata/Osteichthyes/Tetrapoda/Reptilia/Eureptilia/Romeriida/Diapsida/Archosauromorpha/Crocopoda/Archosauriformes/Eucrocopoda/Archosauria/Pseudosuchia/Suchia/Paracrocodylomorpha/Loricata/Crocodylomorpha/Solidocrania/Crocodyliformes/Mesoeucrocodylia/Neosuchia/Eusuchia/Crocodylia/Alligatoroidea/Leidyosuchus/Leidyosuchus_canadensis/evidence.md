---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Leidyosuchus canadensis
    rank: species
    sourceDatasetId: null
    name:
      zh: Leidyosuchus canadensis
      en: Leidyosuchus canadensis
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
            title: PBDB accepted record — Leidyosuchus canadensis
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=65784&show=parent,app,attr
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
            locator: 2026-10-02 occurrence response accepted_no txn:65784; original response record indices retained in data/sources/crocodylomorph-occurrence-guides-2026-10-02-records.jsonl.gz.
            accessedAt: 2026-10-02
            responseSha256: c4a662dc45be8020da61b782b38d37ab583c35a2e4bdf978ceca29e010472ca1
            pbdbTaxonId: txn:65784
            selectedOccurrenceIds:
              - occ:220122
              - occ:362041
              - occ:362145
              - occ:362177
              - occ:362352
              - occ:362392
              - occ:362554
              - occ:362582
              - occ:362612
              - occ:362633
              - occ:362680
              - occ:362792
              - occ:363228
              - occ:363657
              - occ:459316
              - occ:459340
              - occ:459501
              - occ:459525
              - occ:459553
              - occ:459580
              - occ:479407
              - occ:479455
              - occ:479482
              - occ:479507
              - occ:479586
              - occ:479621
              - occ:479651
              - occ:479676
              - occ:479710
              - occ:479739
              - occ:479773
              - occ:479799
              - occ:480333
              - occ:899119
              - occ:899156
              - occ:983532
            selectedCollectionIds:
              - col:22697
              - col:34302
              - col:34303
              - col:34305
              - col:34307
              - col:34309
              - col:34310
              - col:34311
              - col:34312
              - col:34313
              - col:34315
              - col:34320
              - col:34321
              - col:34322
              - col:45238
              - col:45240
              - col:45260
              - col:45261
              - col:45262
              - col:45264
              - col:47784
              - col:47793
              - col:47794
              - col:47795
              - col:47807
              - col:47809
              - col:47811
              - col:47812
              - col:47814
              - col:47816
              - col:22698
              - col:22695
              - col:22696
              - col:100094
              - col:100103
              - col:117848
            sourceReferenceIds:
              - ref:5929
              - ref:9017
              - ref:17199
              - ref:34350
              - ref:13666
            originalIdentificationMappings:
              - occurrenceId: occ:899119
                originalIdentifiedName: Leidyosuchus gilmorei n. sp.
                acceptedName: Leidyosuchus canadensis
                difference: null
              - occurrenceId: occ:983532
                originalIdentifiedName: Leidyosuchus canadensis n. gen. n. sp.
                acceptedName: Leidyosuchus canadensis
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

# Leidyosuchus canadensis
