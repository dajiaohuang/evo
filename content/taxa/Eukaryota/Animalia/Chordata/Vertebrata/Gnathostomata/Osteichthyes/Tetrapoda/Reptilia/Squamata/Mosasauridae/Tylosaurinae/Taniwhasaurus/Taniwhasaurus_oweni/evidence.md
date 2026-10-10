---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Taniwhasaurus oweni
    rank: species
    sourceDatasetId: null
    name:
      zh: Taniwhasaurus oweni
      en: Taniwhasaurus oweni
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
            title: PBDB accepted record — Taniwhasaurus oweni
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=108966&show=parent,app,attr
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
            locator: 2026-10-02 occurrence response accepted_no txn:108966; original response record indices retained in data/sources/squamata-occurrence-guides-2026-10-02-records.jsonl.gz.
            accessedAt: 2026-10-02
            responseSha256: 514f112902c399f610603231aa01670f6a662448389d5f94c43cb3b70ec452d6
            pbdbTaxonId: txn:108966
            selectedOccurrenceIds:
              - occ:777955
              - occ:882031
              - occ:903659
              - occ:1639486
              - occ:1639495
            selectedCollectionIds:
              - col:83537
              - col:37089
              - col:101382
              - col:232395
              - col:232397
            sourceReferenceIds:
              - ref:28015
              - ref:33801
              - ref:25420
              - ref:35643
            originalIdentificationMappings:
              - occurrenceId: occ:777955
                originalIdentifiedName: Tylosaurus haumuriensis n. sp.
                acceptedName: Taniwhasaurus oweni
                difference: null
              - occurrenceId: occ:903659
                originalIdentifiedName: Taniwhasaurus oweni n. sp.
                acceptedName: Taniwhasaurus oweni
                difference: null
              - occurrenceId: occ:1639495
                originalIdentifiedName: Tylosaurus haumuriensis
                acceptedName: Taniwhasaurus oweni
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

# Taniwhasaurus oweni
