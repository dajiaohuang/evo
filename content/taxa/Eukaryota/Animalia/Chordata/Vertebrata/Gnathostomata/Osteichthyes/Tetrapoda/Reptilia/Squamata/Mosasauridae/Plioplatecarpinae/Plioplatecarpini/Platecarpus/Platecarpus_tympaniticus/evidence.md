---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Platecarpus tympaniticus
    rank: species
    sourceDatasetId: null
    name:
      zh: Platecarpus tympaniticus
      en: Platecarpus tympaniticus
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
            title: PBDB accepted record — Platecarpus tympaniticus
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=128886&show=parent,app,attr
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
            locator: 2026-10-02 occurrence response accepted_no txn:128886; original response record indices retained in data/sources/squamata-occurrence-guides-2026-10-02-records.jsonl.gz.
            accessedAt: 2026-10-02
            responseSha256: 514f112902c399f610603231aa01670f6a662448389d5f94c43cb3b70ec452d6
            pbdbTaxonId: txn:128886
            selectedOccurrenceIds:
              - occ:403517
              - occ:893623
              - occ:928426
              - occ:929657
              - occ:933710
              - occ:935117
              - occ:935118
              - occ:935119
              - occ:945644
              - occ:986680
              - occ:1118069
              - occ:1118071
              - occ:1430782
              - occ:1430833
              - occ:1536531
            selectedCollectionIds:
              - col:38720
              - col:98972
              - col:106188
              - col:106328
              - col:107339
              - col:107672
              - col:107674
              - col:107675
              - col:109761
              - col:118338
              - col:118152
              - col:199538
              - col:199541
              - col:215772
            sourceReferenceIds:
              - ref:10412
              - ref:34078
              - ref:35400
              - ref:35475
              - ref:35724
              - ref:35745
              - ref:36230
              - ref:38119
              - ref:46107
              - ref:67821
              - ref:74411
            originalIdentificationMappings:
              - occurrenceId: occ:403517
                originalIdentifiedName: Platecarpus ictericus
                acceptedName: Platecarpus tympaniticus
                difference: null
              - occurrenceId: occ:893623
                originalIdentifiedName: Platecarpus tympaniticus n. gen. n. sp.
                acceptedName: Platecarpus tympaniticus
                difference: null
              - occurrenceId: occ:928426
                originalIdentifiedName: Platecarpus coryphaeus
                acceptedName: Platecarpus tympaniticus
                difference: null
              - occurrenceId: occ:929657
                originalIdentifiedName: Platecarpus ictericus
                acceptedName: Platecarpus tympaniticus
                difference: null
              - occurrenceId: occ:933710
                originalIdentifiedName: Platecarpus (Holosaurus) abruptus
                acceptedName: Platecarpus tympaniticus
                difference: null
              - occurrenceId: occ:935117
                originalIdentifiedName: Platecarpus ictericus
                acceptedName: Platecarpus tympaniticus
                difference: null
              - occurrenceId: occ:935118
                originalIdentifiedName: Platecarpus ictericus
                acceptedName: Platecarpus tympaniticus
                difference: null
              - occurrenceId: occ:935119
                originalIdentifiedName: Platecarpus ictericus
                acceptedName: Platecarpus tympaniticus
                difference: null
              - occurrenceId: occ:945644
                originalIdentifiedName: Platecarpus ictericus
                acceptedName: Platecarpus tympaniticus
                difference: null
              - occurrenceId: occ:1118069
                originalIdentifiedName: Platecarpus coryphaeus
                acceptedName: Platecarpus tympaniticus
                difference: null
              - occurrenceId: occ:1118071
                originalIdentifiedName: Platecarpus ictericus
                acceptedName: Platecarpus tympaniticus
                difference: null
              - occurrenceId: occ:1430782
                originalIdentifiedName: Liodon ictericus n. sp.
                acceptedName: Platecarpus tympaniticus
                difference: null
              - occurrenceId: occ:1430833
                originalIdentifiedName: Liodon mudgei n. sp.
                acceptedName: Platecarpus tympaniticus
                difference: null
              - occurrenceId: occ:1536531
                originalIdentifiedName: Platecarpus ictericus
                acceptedName: Platecarpus tympaniticus
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

# Platecarpus tympaniticus
