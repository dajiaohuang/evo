---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Boavus occidentalis
    rank: species
    sourceDatasetId: null
    name:
      zh: Boavus occidentalis
      en: Boavus occidentalis
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
            title: PBDB accepted record — Boavus occidentalis
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=68100&show=parent,app,attr
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
            locator: 2026-10-02 occurrence response accepted_no txn:68100; original response record indices retained in data/sources/squamata-occurrence-guides-2026-10-02-records.jsonl.gz.
            accessedAt: 2026-10-02
            responseSha256: 514f112902c399f610603231aa01670f6a662448389d5f94c43cb3b70ec452d6
            pbdbTaxonId: txn:68100
            selectedOccurrenceIds:
              - occ:286291
              - occ:286367
              - occ:737703
              - occ:737705
              - occ:1238841
              - occ:1276798
              - occ:1336056
              - occ:1336065
              - occ:1336066
              - occ:1336067
              - occ:1336068
              - occ:1336069
            selectedCollectionIds:
              - col:15837
              - col:27269
              - col:16786
              - col:16791
              - col:130809
              - col:16810
              - col:16228
              - col:180198
              - col:180199
              - col:180200
              - col:16201
            sourceReferenceIds:
              - ref:7542
              - ref:696
              - ref:53112
              - ref:1681
              - ref:14699
            originalIdentificationMappings:
              - occurrenceId: occ:737703
                originalIdentifiedName: Boavus affinis n. sp.
                acceptedName: Boavus occidentalis
                difference: null
              - occurrenceId: occ:737705
                originalIdentifiedName: Boavus affinis
                acceptedName: Boavus occidentalis
                difference: null
              - occurrenceId: occ:1238841
                originalIdentifiedName: Protagras lacustris n. gen. n. sp.
                acceptedName: Boavus occidentalis
                difference: null
              - occurrenceId: occ:1276798
                originalIdentifiedName: Boavus affinis
                acceptedName: Boavus occidentalis
                difference: null
              - occurrenceId: occ:1336056
                originalIdentifiedName: Boavus occidentalis n. gen. n. sp.
                acceptedName: Boavus occidentalis
                difference: null
              - occurrenceId: occ:1336067
                originalIdentifiedName: Boavus agilis n. sp.
                acceptedName: Boavus occidentalis
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

# Boavus occidentalis
