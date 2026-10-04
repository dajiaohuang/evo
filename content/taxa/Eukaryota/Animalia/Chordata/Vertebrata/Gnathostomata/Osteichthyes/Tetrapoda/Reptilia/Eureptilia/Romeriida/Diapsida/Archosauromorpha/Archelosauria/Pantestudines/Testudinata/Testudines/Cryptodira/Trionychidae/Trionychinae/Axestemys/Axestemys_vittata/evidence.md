---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Axestemys vittata
    rank: species
    sourceDatasetId: null
    name:
      zh: Axestemys vittata
      en: Axestemys vittata
    reviewStatus: source-linked
    checkedAt: 2026-10-02
    sections:
      - topic: overview
        sourceIds:
          - pbdbPantestudinesTaxonomy20261002
          - pbdbPantestudinesOccurrences20261002
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
          - pbdbPantestudinesOccurrences20261002
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
          - pbdbPantestudinesOccurrences20261002
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
          - pbdbPantestudinesOccurrences20261002
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
          - pbdbPantestudinesOccurrences20261002
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
        - referenceId: ref-ca0a2dd7-4ca6-470e-bc1d-9aba950cee4c
          metadataVariant: 0
          sourceKey: pbdbPantestudinesTaxonomy20261002
          usage:
            title: PBDB accepted record — Axestemys vittata
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=235137&show=parent,app,attr
            locator: Fixed dated accepted species OID and current same-name accepted hierarchy; PBDB ancestry remains separate from COL.
          originalFields:
            - id
            - title
            - url
            - version
            - license
            - locator
        - referenceId: ref-ca0a2dd7-4ca6-470e-bc1d-9aba950cee4c
          metadataVariant: 0
          sourceKey: pbdbPantestudinesOccurrences20261002
          usage:
            locator: 2026-10-02 occurrence response accepted_no txn:235137; original response record indices retained in data/sources/pantestudines-occurrence-guides-2026-10-02-records.jsonl.gz.
            accessedAt: 2026-10-02
            responseSha256: 420dc1c50b596ab358c29c338c87a9400512fd005c369ade614416e403aeff56
            pbdbTaxonId: txn:235137
            selectedOccurrenceIds:
              - occ:1090699
              - occ:1338685
              - occ:1338699
              - occ:1338701
              - occ:1338725
              - occ:1338733
              - occ:1342793
              - occ:1342803
              - occ:1342806
              - occ:1342835
              - occ:1342845
              - occ:1343164
              - occ:1380118
            selectedCollectionIds:
              - col:41829
              - col:35535
              - col:35533
              - col:144104
              - col:35539
              - col:84997
              - col:181633
              - col:181639
              - col:181640
              - col:68437
              - col:181653
              - col:87947
              - col:144102
            sourceReferenceIds:
              - ref:43812
              - ref:60047
              - ref:29875
            originalIdentificationMappings:
              - occurrenceId: occ:1090699
                originalIdentifiedName: Eurycephalochelys fowleri n. gen. n. sp.
                acceptedName: Axestemys vittata
                difference: null
              - occurrenceId: occ:1338685
                originalIdentifiedName: Palaeotrionyx vittatus
                acceptedName: Axestemys vittata
                difference: recombined as
              - occurrenceId: occ:1338699
                originalIdentifiedName: Palaeotrionyx vittatus
                acceptedName: Axestemys vittata
                difference: recombined as
              - occurrenceId: occ:1338701
                originalIdentifiedName: Palaeotrionyx vittatus n. sp.
                acceptedName: Axestemys vittata
                difference: recombined as
              - occurrenceId: occ:1338725
                originalIdentifiedName: Palaeotrionyx vittatus
                acceptedName: Axestemys vittata
                difference: recombined as
              - occurrenceId: occ:1338733
                originalIdentifiedName: Palaeotrionyx vittatus
                acceptedName: Axestemys vittata
                difference: recombined as
              - occurrenceId: occ:1342793
                originalIdentifiedName: Palaeotrionyx vittatus
                acceptedName: Axestemys vittata
                difference: recombined as
              - occurrenceId: occ:1342803
                originalIdentifiedName: Palaeotrionyx vittatus
                acceptedName: Axestemys vittata
                difference: recombined as
              - occurrenceId: occ:1342806
                originalIdentifiedName: Palaeotrionyx vittatus
                acceptedName: Axestemys vittata
                difference: recombined as
              - occurrenceId: occ:1342835
                originalIdentifiedName: Palaeotrionyx vittatus
                acceptedName: Axestemys vittata
                difference: recombined as
              - occurrenceId: occ:1342845
                originalIdentifiedName: Palaeotrionyx vittatus
                acceptedName: Axestemys vittata
                difference: recombined as
              - occurrenceId: occ:1343164
                originalIdentifiedName: Trionyx vittatus
                acceptedName: Axestemys vittata
                difference: recombined as
              - occurrenceId: occ:1380118
                originalIdentifiedName: Trionyx levalensis n. sp.
                acceptedName: Axestemys vittata
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

# Axestemys vittata
