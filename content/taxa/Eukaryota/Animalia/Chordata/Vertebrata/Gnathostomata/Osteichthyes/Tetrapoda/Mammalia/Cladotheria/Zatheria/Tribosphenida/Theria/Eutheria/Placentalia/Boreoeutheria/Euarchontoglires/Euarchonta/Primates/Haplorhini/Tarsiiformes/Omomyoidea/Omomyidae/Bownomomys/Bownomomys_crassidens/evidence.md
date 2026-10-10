---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Bownomomys crassidens
    rank: species
    sourceDatasetId: null
    name:
      zh: Bownomomys crassidens
      en: Bownomomys crassidens
    checkedAt: 2026-10-02
    sections:
      - topic: overview
        sourceIds:
          - pbdbMammaliaTaxonomy20261002
          - pbdbMammaliaOccurrences20261002
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
          - pbdbMammaliaOccurrences20261002
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
          - pbdbMammaliaOccurrences20261002
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
          - pbdbMammaliaOccurrences20261002
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
          - pbdbMammaliaOccurrences20261002
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
        - referenceId: ref-d9daed02-7dc5-41b7-9cb9-616d52f8b19a
          metadataVariant: 0
          sourceKey: pbdbMammaliaTaxonomy20261002
          usage:
            title: PBDB accepted record — Bownomomys crassidens
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=52106&show=parent,app,attr
            locator: Fixed dated accepted species OID and current same-name accepted hierarchy; PBDB ancestry remains separate from COL.
          originalFields:
            - id
            - title
            - url
            - version
            - license
            - locator
        - referenceId: ref-d9daed02-7dc5-41b7-9cb9-616d52f8b19a
          metadataVariant: 0
          sourceKey: pbdbMammaliaOccurrences20261002
          usage:
            locator: 2026-10-02 occurrence response accepted_no txn:52106; original response record indices retained in data/sources/mammalia-occurrence-guides-2026-10-02-records.jsonl.gz.
            accessedAt: 2026-10-02
            responseSha256: 368dafda8e7422b86d7992dc15a10defe699a9db146057d35e01a82c1c54bfa2
            pbdbTaxonId: txn:52106
            selectedOccurrenceIds:
              - occ:169392
              - occ:169456
              - occ:171432
              - occ:171610
              - occ:171866
              - occ:457731
              - occ:458710
              - occ:469923
            selectedCollectionIds:
              - col:15514
              - col:15516
              - col:15743
              - col:15762
              - col:15796
              - col:15697
              - col:15707
              - col:46721
            sourceReferenceIds:
              - ref:1123
              - ref:11717
            originalIdentificationMappings:
              - occurrenceId: occ:169392
                originalIdentifiedName: Teilhardina crassidens n. sp.
                acceptedName: Bownomomys crassidens
                difference: recombined as
              - occurrenceId: occ:169456
                originalIdentifiedName: Teilhardina crassidens
                acceptedName: Bownomomys crassidens
                difference: recombined as
              - occurrenceId: occ:171432
                originalIdentifiedName: Teilhardina crassidens
                acceptedName: Bownomomys crassidens
                difference: recombined as
              - occurrenceId: occ:171610
                originalIdentifiedName: Teilhardina crassidens
                acceptedName: Bownomomys crassidens
                difference: recombined as
              - occurrenceId: occ:171866
                originalIdentifiedName: Teilhardina crassidens
                acceptedName: Bownomomys crassidens
                difference: recombined as
              - occurrenceId: occ:457731
                originalIdentifiedName: Teilhardina crassidens
                acceptedName: Bownomomys crassidens
                difference: recombined as
              - occurrenceId: occ:458710
                originalIdentifiedName: Teilhardina crassidens
                acceptedName: Bownomomys crassidens
                difference: recombined as
              - occurrenceId: occ:469923
                originalIdentifiedName: Teilhardina crassidens
                acceptedName: Bownomomys crassidens
                difference: recombined as
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

# Bownomomys crassidens
