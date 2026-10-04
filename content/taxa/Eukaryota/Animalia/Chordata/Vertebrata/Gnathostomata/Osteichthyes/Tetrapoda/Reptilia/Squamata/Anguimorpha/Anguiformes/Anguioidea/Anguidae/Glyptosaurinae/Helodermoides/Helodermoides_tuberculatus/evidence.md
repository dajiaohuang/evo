---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Helodermoides tuberculatus
    rank: species
    sourceDatasetId: null
    name:
      zh: Helodermoides tuberculatus
      en: Helodermoides tuberculatus
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
            title: PBDB accepted record — Helodermoides tuberculatus
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=173019&show=parent,app,attr
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
            locator: 2026-10-02 occurrence response accepted_no txn:173019; original response record indices retained in data/sources/squamata-occurrence-guides-2026-10-02-records.jsonl.gz.
            accessedAt: 2026-10-02
            responseSha256: 514f112902c399f610603231aa01670f6a662448389d5f94c43cb3b70ec452d6
            pbdbTaxonId: txn:173019
            selectedOccurrenceIds:
              - occ:898050
              - occ:1335635
              - occ:1335665
              - occ:1337268
              - occ:1342546
              - occ:1342547
              - occ:1342548
              - occ:1342549
              - occ:1342654
              - occ:1342655
              - occ:1342656
              - occ:1342657
              - occ:1342658
              - occ:1342665
              - occ:1342666
              - occ:1342667
              - occ:1342668
              - occ:1342669
              - occ:1342670
              - occ:1342671
              - occ:1342672
              - occ:1342673
              - occ:1342674
              - occ:1342675
              - occ:1342676
              - occ:1342677
              - occ:1342726
              - occ:1642502
              - occ:1642803
            selectedCollectionIds:
              - col:17010
              - col:16990
              - col:180112
              - col:180388
              - col:16920
              - col:181578
              - col:16971
              - col:181579
              - col:181597
              - col:16963
              - col:16964
              - col:181598
              - col:181601
              - col:181602
              - col:181603
              - col:16961
              - col:181604
              - col:181605
              - col:17203
              - col:179967
              - col:181606
              - col:125185
              - col:181607
              - col:181608
              - col:181612
              - col:232899
              - col:232921
            sourceReferenceIds:
              - ref:1382
              - ref:14538
              - ref:14584
              - ref:60385
              - ref:87093
            originalIdentificationMappings:
              - occurrenceId: occ:898050
                originalIdentifiedName: Helodermoides tuberculatus n. gen. n. sp.
                acceptedName: Helodermoides tuberculatus
                difference: null
              - occurrenceId: occ:1335635
                originalIdentifiedName: Glyptosaurus montanus n. sp.
                acceptedName: Helodermoides tuberculatus
                difference: null
              - occurrenceId: occ:1335665
                originalIdentifiedName: Glyptosaurus giganteus
                acceptedName: Helodermoides tuberculatus
                difference: null
              - occurrenceId: occ:1337268
                originalIdentifiedName: Glyptosaurus giganteus
                acceptedName: Helodermoides tuberculatus
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

# Helodermoides tuberculatus
