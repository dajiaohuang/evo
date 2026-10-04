---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Varanus prisca
    rank: species
    sourceDatasetId: null
    name:
      zh: Varanus prisca
      en: Varanus prisca
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
            title: PBDB accepted record — Varanus prisca
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=267209&show=parent,app,attr
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
            locator: 2026-10-02 occurrence response accepted_no txn:267209; original response record indices retained in data/sources/squamata-occurrence-guides-2026-10-02-records.jsonl.gz.
            accessedAt: 2026-10-02
            responseSha256: 514f112902c399f610603231aa01670f6a662448389d5f94c43cb3b70ec452d6
            pbdbTaxonId: txn:267209
            selectedOccurrenceIds:
              - occ:1096271
              - occ:1351299
              - occ:1410075
              - occ:1506512
              - occ:1506532
              - occ:1506543
              - occ:1506550
              - occ:1618043
              - occ:1618044
            selectedCollectionIds:
              - col:138403
              - col:183080
              - col:194846
              - col:210195
              - col:210197
              - col:210198
              - col:210199
              - col:28422
              - col:13318
            sourceReferenceIds:
              - ref:44309
              - ref:61075
              - ref:72520
              - ref:83764
            originalIdentificationMappings:
              - occurrenceId: occ:1096271
                originalIdentifiedName: Megalania prisca
                acceptedName: Varanus prisca
                difference: recombined as
              - occurrenceId: occ:1351299
                originalIdentifiedName: Megalania prisca
                acceptedName: Varanus prisca
                difference: recombined as
              - occurrenceId: occ:1410075
                originalIdentifiedName: Megalania prisca
                acceptedName: Varanus prisca
                difference: recombined as
              - occurrenceId: occ:1506512
                originalIdentifiedName: Varanus priscus
                acceptedName: Varanus prisca
                difference: misspelling of, recombined as
              - occurrenceId: occ:1506532
                originalIdentifiedName: Varanus priscus
                acceptedName: Varanus prisca
                difference: misspelling of, recombined as
              - occurrenceId: occ:1506543
                originalIdentifiedName: Varanus priscus
                acceptedName: Varanus prisca
                difference: misspelling of, recombined as
              - occurrenceId: occ:1506550
                originalIdentifiedName: Varanus priscus
                acceptedName: Varanus prisca
                difference: misspelling of, recombined as
              - occurrenceId: occ:1618043
                originalIdentifiedName: Varanus dirus
                acceptedName: Varanus prisca
                difference: null
              - occurrenceId: occ:1618044
                originalIdentifiedName: Varanus dirus
                acceptedName: Varanus prisca
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

# Varanus prisca
