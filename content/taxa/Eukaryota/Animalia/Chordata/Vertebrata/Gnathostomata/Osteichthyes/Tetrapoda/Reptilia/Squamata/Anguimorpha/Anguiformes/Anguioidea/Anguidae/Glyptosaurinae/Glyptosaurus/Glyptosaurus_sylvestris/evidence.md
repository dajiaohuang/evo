---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Glyptosaurus sylvestris
    rank: species
    sourceDatasetId: null
    name:
      zh: Glyptosaurus sylvestris
      en: Glyptosaurus sylvestris
    reviewStatus: source-linked
    checkedAt: 2026-10-02
    sections:
      - topic: overview
        sourceIds:
          - pbdbSquamataTaxonomy20261002
          - pbdbSquamataOccurrences20261002
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
          - pbdbSquamataOccurrences20261002
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
          - pbdbSquamataOccurrences20261002
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
          - pbdbSquamataOccurrences20261002
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
          - pbdbSquamataOccurrences20261002
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
        - referenceId: ref-7cfbe846-2f31-41b9-85e2-1587c659364b
          metadataVariant: 0
          sourceKey: pbdbSquamataTaxonomy20261002
          usage:
            title: PBDB accepted record — Glyptosaurus sylvestris
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=63271&show=parent,app,attr
            locator: Fixed dated accepted species OID and current same-name accepted hierarchy; PBDB ancestry remains separate from COL.
          originalFields:
            - id
            - title
            - url
            - version
            - license
            - locator
        - referenceId: ref-7cfbe846-2f31-41b9-85e2-1587c659364b
          metadataVariant: 0
          sourceKey: pbdbSquamataOccurrences20261002
          usage:
            locator: 2026-10-02 occurrence response accepted_no txn:63271; original response record indices retained in data/sources/squamata-occurrence-guides-2026-10-02-records.jsonl.gz.
            accessedAt: 2026-10-02
            responseSha256: 514f112902c399f610603231aa01670f6a662448389d5f94c43cb3b70ec452d6
            pbdbTaxonId: txn:63271
            selectedOccurrenceIds:
              - occ:172075
              - occ:286249
              - occ:519755
              - occ:650056
              - occ:650057
              - occ:1335355
              - occ:1335356
              - occ:1335357
              - occ:1335591
              - occ:1335592
              - occ:1335597
              - occ:1335668
              - occ:1342520
              - occ:1342521
              - occ:1342526
              - occ:1342527
              - occ:1342528
              - occ:1342529
              - occ:1342530
              - occ:1342541
              - occ:1460599
              - occ:1642776
              - occ:1642807
            selectedCollectionIds:
              - col:15837
              - col:27268
              - col:16396
              - col:15670
              - col:16270
              - col:16228
              - col:118469
              - col:16239
              - col:180105
              - col:15652
              - col:16240
              - col:15650
              - col:144593
              - col:180198
              - col:15904
              - col:15917
              - col:232925
            sourceReferenceIds:
              - ref:7542
              - ref:1741
              - ref:3806
              - ref:14538
              - ref:69854
              - ref:60385
              - ref:3636
              - ref:87108
              - ref:87093
            originalIdentificationMappings:
              - occurrenceId: occ:1335355
                originalIdentifiedName: Glyptosaurus sylvestris n. gen. n. sp.
                acceptedName: Glyptosaurus sylvestris
                difference: null
              - occurrenceId: occ:1335356
                originalIdentifiedName: Glyptosaurus princeps n. sp.
                acceptedName: Glyptosaurus sylvestris
                difference: null
              - occurrenceId: occ:1335357
                originalIdentifiedName: Glyptosaurus princeps
                acceptedName: Glyptosaurus sylvestris
                difference: null
              - occurrenceId: occ:1335591
                originalIdentifiedName: Glyptosaurus rugosus n. sp.
                acceptedName: Glyptosaurus sylvestris
                difference: null
              - occurrenceId: occ:1335592
                originalIdentifiedName: Glyptosaurus nodosus n. sp.
                acceptedName: Glyptosaurus sylvestris
                difference: null
              - occurrenceId: occ:1335597
                originalIdentifiedName: Glyptosaurus hillsi n. sp.
                acceptedName: Glyptosaurus sylvestris
                difference: null
              - occurrenceId: occ:1335668
                originalIdentifiedName: Paraglyptosaurus princeps
                acceptedName: Glyptosaurus sylvestris
                difference: null
              - occurrenceId: occ:1342526
                originalIdentifiedName: Paraglyptosaurus princeps
                acceptedName: Glyptosaurus sylvestris
                difference: null
              - occurrenceId: occ:1342527
                originalIdentifiedName: Paraglyptosaurus princeps
                acceptedName: Glyptosaurus sylvestris
                difference: null
              - occurrenceId: occ:1342528
                originalIdentifiedName: Paraglyptosaurus princeps
                acceptedName: Glyptosaurus sylvestris
                difference: null
              - occurrenceId: occ:1342529
                originalIdentifiedName: Paraglyptosaurus princeps
                acceptedName: Glyptosaurus sylvestris
                difference: null
              - occurrenceId: occ:1342530
                originalIdentifiedName: Paraglyptosaurus princeps
                acceptedName: Glyptosaurus sylvestris
                difference: null
              - occurrenceId: occ:1342541
                originalIdentifiedName: Glyptosaurus donohoei n. sp.
                acceptedName: Glyptosaurus sylvestris
                difference: null
              - occurrenceId: occ:1460599
                originalIdentifiedName: Glyptosaurus brevidens n. sp.
                acceptedName: Glyptosaurus sylvestris
                difference: null
              - occurrenceId: occ:1642776
                originalIdentifiedName: Glyptosaurus donohoei
                acceptedName: Glyptosaurus sylvestris
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

# Glyptosaurus sylvestris
