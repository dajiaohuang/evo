---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Geiseltaliellus lamandini
    rank: species
    sourceDatasetId: null
    name:
      zh: Geiseltaliellus lamandini
      en: Geiseltaliellus lamandini
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
            title: PBDB accepted record — Geiseltaliellus lamandini
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=58734&show=parent,app,attr
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
            locator: 2026-10-02 occurrence response accepted_no txn:58734; original response record indices retained in data/sources/squamata-occurrence-guides-2026-10-02-records.jsonl.gz.
            accessedAt: 2026-10-02
            responseSha256: 514f112902c399f610603231aa01670f6a662448389d5f94c43cb3b70ec452d6
            pbdbTaxonId: txn:58734
            selectedOccurrenceIds:
              - occ:146045
              - occ:146054
              - occ:146057
              - occ:146060
              - occ:146061
              - occ:146062
              - occ:146064
              - occ:146065
              - occ:1330434
              - occ:1330435
              - occ:1330889
            selectedCollectionIds:
              - col:12840
              - col:12844
              - col:12845
              - col:12848
              - col:12849
              - col:12850
              - col:12851
              - col:12852
              - col:12843
              - col:12842
              - col:179194
            sourceReferenceIds:
              - ref:4283
              - ref:59290
            originalIdentificationMappings:
              - occurrenceId: occ:146045
                originalIdentifiedName: Pseudolacerta lamandini
                acceptedName: Geiseltaliellus lamandini
                difference: recombined as
              - occurrenceId: occ:146054
                originalIdentifiedName: Pseudolacerta lamandini
                acceptedName: Geiseltaliellus lamandini
                difference: recombined as
              - occurrenceId: occ:146057
                originalIdentifiedName: Pseudolacerta lamandini
                acceptedName: Geiseltaliellus lamandini
                difference: recombined as
              - occurrenceId: occ:146060
                originalIdentifiedName: Pseudolacerta lamandini
                acceptedName: Geiseltaliellus lamandini
                difference: recombined as
              - occurrenceId: occ:146061
                originalIdentifiedName: Pseudolacerta lamandini
                acceptedName: Geiseltaliellus lamandini
                difference: recombined as
              - occurrenceId: occ:146062
                originalIdentifiedName: Pseudolacerta lamandini
                acceptedName: Geiseltaliellus lamandini
                difference: recombined as
              - occurrenceId: occ:146064
                originalIdentifiedName: Pseudolacerta lamandini
                acceptedName: Geiseltaliellus lamandini
                difference: recombined as
              - occurrenceId: occ:146065
                originalIdentifiedName: Pseudolacerta lamandini
                acceptedName: Geiseltaliellus lamandini
                difference: recombined as
              - occurrenceId: occ:1330889
                originalIdentifiedName: Geiseltaliellus lamandini n. sp.
                acceptedName: Geiseltaliellus lamandini
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

# Geiseltaliellus lamandini
