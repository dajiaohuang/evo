---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Ichthyosaurus communis
    rank: species
    sourceDatasetId: null
    name:
      zh: Ichthyosaurus communis
      en: Ichthyosaurus communis
    reviewStatus: source-linked
    checkedAt: 2026-10-02
    sections:
      - topic: overview
        sourceIds:
          - pbdbIchthyosauriformesTaxonomy20261002
          - pbdbIchthyosauriformesOccurrences20261002
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
          - pbdbIchthyosauriformesOccurrences20261002
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
          - pbdbIchthyosauriformesOccurrences20261002
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
          - pbdbIchthyosauriformesOccurrences20261002
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
          - pbdbIchthyosauriformesOccurrences20261002
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
        - referenceId: ref-2dd404cd-b72b-4fc1-8ad0-0dc4d9df94e9
          metadataVariant: 0
          sourceKey: pbdbIchthyosauriformesTaxonomy20261002
          usage:
            title: PBDB accepted record — Ichthyosaurus communis
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=95786&show=parent,app,attr
            locator: Fixed dated accepted species OID and current same-name accepted hierarchy; PBDB ancestry remains separate from COL.
          originalFields:
            - id
            - title
            - url
            - version
            - license
            - locator
        - referenceId: ref-2dd404cd-b72b-4fc1-8ad0-0dc4d9df94e9
          metadataVariant: 0
          sourceKey: pbdbIchthyosauriformesOccurrences20261002
          usage:
            locator: 2026-10-02 occurrence response accepted_no txn:95786; original response record indices retained in data/sources/ichthyosauriformes-occurrence-guides-2026-10-02-records.jsonl.gz.
            accessedAt: 2026-10-02
            responseSha256: f47f280ca897054f5bf00b8a99d8aa7b7eee1e3225ec65be651afc93d19ba812
            pbdbTaxonId: txn:95786
            selectedOccurrenceIds:
              - occ:871898
              - occ:871901
              - occ:871903
              - occ:871909
              - occ:885757
              - occ:885759
              - occ:1105125
              - occ:1125626
              - occ:1126020
              - occ:1162052
              - occ:1162057
              - occ:1190871
              - occ:1190877
              - occ:1190878
              - occ:1190917
              - occ:1314782
              - occ:1377841
              - occ:1429656
              - occ:1606956
              - occ:1606961
              - occ:1606974
              - occ:1606977
              - occ:1606982
              - occ:1633856
            selectedCollectionIds:
              - col:96606
              - col:96607
              - col:96608
              - col:96611
              - col:98150
              - col:42202
              - col:139701
              - col:142744
              - col:142834
              - col:149321
              - col:153783
              - col:153787
              - col:110213
              - col:119083
              - col:176443
              - col:188429
              - col:198904
              - col:140334
              - col:227266
              - col:227267
            sourceReferenceIds:
              - ref:32796
              - ref:33931
              - ref:44917
              - ref:46325
              - ref:46344
              - ref:49835
              - ref:14142
              - ref:58060
              - ref:29875
              - ref:67760
              - ref:9842
            originalIdentificationMappings:
              - occurrenceId: occ:871898
                originalIdentifiedName: Ichthyosaurus intermedius
                acceptedName: Ichthyosaurus communis
                difference: null
              - occurrenceId: occ:871901
                originalIdentifiedName: Ichthyosaurus intermedius
                acceptedName: Ichthyosaurus communis
                difference: null
              - occurrenceId: occ:871903
                originalIdentifiedName: Ichthyosaurus intermedius
                acceptedName: Ichthyosaurus communis
                difference: null
              - occurrenceId: occ:871909
                originalIdentifiedName: Ichthyosaurus intermedius
                acceptedName: Ichthyosaurus communis
                difference: null
              - occurrenceId: occ:1162052
                originalIdentifiedName: Ichthyosaurus intermedius
                acceptedName: Ichthyosaurus communis
                difference: null
              - occurrenceId: occ:1190871
                originalIdentifiedName: Ichthyosaurus chiropolyostinus n. sp.
                acceptedName: Ichthyosaurus communis
                difference: null
              - occurrenceId: occ:1190877
                originalIdentifiedName: Ichthyosaurus chiroparamekostinus
                acceptedName: Ichthyosaurus communis
                difference: null
              - occurrenceId: occ:1190878
                originalIdentifiedName: Ichthyosaurus chiroparamekostinus
                acceptedName: Ichthyosaurus communis
                difference: null
              - occurrenceId: occ:1429656
                originalIdentifiedName: Ichthyosaurus latimanus
                acceptedName: Ichthyosaurus communis
                difference: null
              - occurrenceId: occ:1606974
                originalIdentifiedName: Ichthyosaurus intermedius
                acceptedName: Ichthyosaurus communis
                difference: null
              - occurrenceId: occ:1606982
                originalIdentifiedName: Ichthyosaurus intermedius
                acceptedName: Ichthyosaurus communis
                difference: null
              - occurrenceId: occ:1633856
                originalIdentifiedName: Ichthyosaurus intermedius
                acceptedName: Ichthyosaurus communis
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

# Ichthyosaurus communis
