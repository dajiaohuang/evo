---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Thrinaxodon liorhinus
    rank: species
    sourceDatasetId: null
    name:
      zh: Thrinaxodon liorhinus
      en: Thrinaxodon liorhinus
    reviewStatus: source-linked
    checkedAt: 2026-10-02
    sections:
      - topic: overview
        sourceIds:
          - pbdbOtherSynapsidaTaxonomy20261002
          - pbdbOtherSynapsidaOccurrences20261002
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
          - pbdbOtherSynapsidaOccurrences20261002
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
          - pbdbOtherSynapsidaOccurrences20261002
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
          - pbdbOtherSynapsidaOccurrences20261002
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
          - pbdbOtherSynapsidaOccurrences20261002
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
        - referenceId: ref-675a7fe7-4458-476e-a876-7fe5a3a30c4a
          metadataVariant: 0
          sourceKey: pbdbOtherSynapsidaTaxonomy20261002
          usage:
            title: PBDB accepted record — Thrinaxodon liorhinus
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=144734&show=parent,app,attr
            locator: Fixed dated accepted species OID and current same-name accepted hierarchy; PBDB ancestry remains separate from COL.
          originalFields:
            - id
            - title
            - url
            - version
            - license
            - locator
        - referenceId: ref-675a7fe7-4458-476e-a876-7fe5a3a30c4a
          metadataVariant: 0
          sourceKey: pbdbOtherSynapsidaOccurrences20261002
          usage:
            locator: 2026-10-02 occurrence response accepted_no txn:144734; original response record indices retained in data/sources/other-synapsida-occurrence-guides-2026-10-02-records.jsonl.gz.
            accessedAt: 2026-10-02
            responseSha256: 31ac9f819956f8986cbf6f444ae951461fd801de4d65737e8337007dc854b31f
            pbdbTaxonId: txn:144734
            selectedOccurrenceIds:
              - occ:368040
              - occ:807186
              - occ:807229
              - occ:807686
              - occ:807747
              - occ:922680
              - occ:922704
              - occ:922729
              - occ:1320676
              - occ:1342992
              - occ:1342994
              - occ:1342995
              - occ:1342996
              - occ:1343007
              - occ:1385143
              - occ:1418086
              - occ:1418088
              - occ:1418089
            selectedCollectionIds:
              - col:34815
              - col:87420
              - col:27266
              - col:88282
              - col:88300
              - col:98602
              - col:105607
              - col:105610
              - col:177605
              - col:181689
              - col:181690
              - col:181691
              - col:190133
              - col:105606
              - col:196395
            sourceReferenceIds:
              - ref:60421
              - ref:29626
              - ref:27216
              - ref:37640
              - ref:29040
              - ref:55690
              - ref:29628
              - ref:60420
              - ref:66785
            originalIdentificationMappings:
              - occurrenceId: occ:1320676
                originalIdentifiedName: Notictosaurus luckhoffi n. gen. n. sp.
                acceptedName: Thrinaxodon liorhinus
                difference: null
              - occurrenceId: occ:1342992
                originalIdentifiedName: Nythosaurus larvatus n. sp.
                acceptedName: Thrinaxodon liorhinus
                difference: null
              - occurrenceId: occ:1342994
                originalIdentifiedName: Micrictodon marionae n. gen. n. sp.
                acceptedName: Thrinaxodon liorhinus
                difference: null
              - occurrenceId: occ:1342995
                originalIdentifiedName: Thrinaxodon putterilli n. sp.
                acceptedName: Thrinaxodon liorhinus
                difference: null
              - occurrenceId: occ:1342996
                originalIdentifiedName: Thrinaxodon liorhinus n. gen. n. sp.
                acceptedName: Thrinaxodon liorhinus
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

# Thrinaxodon liorhinus
