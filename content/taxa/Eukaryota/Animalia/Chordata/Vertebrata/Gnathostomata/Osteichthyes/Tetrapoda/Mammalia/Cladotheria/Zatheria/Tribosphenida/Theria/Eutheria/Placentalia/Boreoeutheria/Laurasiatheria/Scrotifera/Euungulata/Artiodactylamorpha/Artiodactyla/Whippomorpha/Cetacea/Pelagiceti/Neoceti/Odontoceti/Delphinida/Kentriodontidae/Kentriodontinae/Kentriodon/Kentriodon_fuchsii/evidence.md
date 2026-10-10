---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Kentriodon fuchsii
    rank: species
    sourceDatasetId: null
    name:
      zh: Kentriodon fuchsii
      en: Kentriodon fuchsii
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
            title: PBDB accepted record — Kentriodon fuchsii
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=65723&show=parent,app,attr
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
            locator: 2026-10-02 occurrence response accepted_no txn:65723; original response record indices retained in data/sources/mammalia-occurrence-guides-2026-10-02-records.jsonl.gz.
            accessedAt: 2026-10-02
            responseSha256: 368dafda8e7422b86d7992dc15a10defe699a9db146057d35e01a82c1c54bfa2
            pbdbTaxonId: txn:65723
            selectedOccurrenceIds:
              - occ:474640
              - occ:541063
              - occ:557357
              - occ:653484
              - occ:665429
              - occ:678836
              - occ:678837
              - occ:678839
              - occ:678840
              - occ:1526682
              - occ:1526683
              - occ:1526684
              - occ:1674755
            selectedCollectionIds:
              - col:47080
              - col:56563
              - col:57734
              - col:70507
              - col:71663
              - col:73275
              - col:48029
              - col:59664
              - col:73276
              - col:213543
              - col:183538
              - col:213742
              - col:237418
            sourceReferenceIds:
              - ref:23642
              - ref:15232
              - ref:15529
              - ref:24213
              - ref:24600
              - ref:73751
              - ref:90036
            originalIdentificationMappings:
              - occurrenceId: occ:541063
                originalIdentifiedName: Acrodelphis fuchsii
                acceptedName: Kentriodon fuchsii
                difference: recombined as
              - occurrenceId: occ:557357
                originalIdentifiedName: Champsodelphis fuchsii
                acceptedName: Kentriodon fuchsii
                difference: recombined as
              - occurrenceId: occ:665429
                originalIdentifiedName: Champsodelphis fuchsii
                acceptedName: Kentriodon fuchsii
                difference: recombined as
              - occurrenceId: occ:678836
                originalIdentifiedName: Champsodelphis fuchsii
                acceptedName: Kentriodon fuchsii
                difference: recombined as
              - occurrenceId: occ:678837
                originalIdentifiedName: Champsodelphis fuchsii
                acceptedName: Kentriodon fuchsii
                difference: recombined as
              - occurrenceId: occ:678839
                originalIdentifiedName: Champsodelphis fuchsii
                acceptedName: Kentriodon fuchsii
                difference: recombined as
              - occurrenceId: occ:678840
                originalIdentifiedName: Champsodelphis fuchsii
                acceptedName: Kentriodon fuchsii
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

# Kentriodon fuchsii
