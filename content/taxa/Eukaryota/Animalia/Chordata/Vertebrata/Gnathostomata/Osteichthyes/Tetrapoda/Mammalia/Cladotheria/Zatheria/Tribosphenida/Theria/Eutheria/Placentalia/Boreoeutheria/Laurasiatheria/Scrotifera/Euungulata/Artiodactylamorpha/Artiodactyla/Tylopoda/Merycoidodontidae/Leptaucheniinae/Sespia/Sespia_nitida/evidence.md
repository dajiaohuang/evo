---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Sespia nitida
    rank: species
    sourceDatasetId: null
    name:
      zh: Sespia nitida
      en: Sespia nitida
    reviewStatus: source-linked
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
            title: PBDB accepted record — Sespia nitida
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=47551&show=parent,app,attr
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
            locator: 2026-10-02 occurrence response accepted_no txn:47551; original response record indices retained in data/sources/mammalia-occurrence-guides-2026-10-02-records.jsonl.gz.
            accessedAt: 2026-10-02
            responseSha256: 368dafda8e7422b86d7992dc15a10defe699a9db146057d35e01a82c1c54bfa2
            pbdbTaxonId: txn:47551
            selectedOccurrenceIds:
              - occ:181239
              - occ:181253
              - occ:181285
              - occ:181405
              - occ:181426
              - occ:181492
              - occ:181494
              - occ:181528
              - occ:181542
              - occ:181553
              - occ:181643
              - occ:181903
              - occ:181919
              - occ:181984
              - occ:181997
              - occ:182238
              - occ:182375
              - occ:182407
              - occ:182410
              - occ:182428
              - occ:182465
              - occ:182480
              - occ:182514
              - occ:182542
              - occ:182561
            selectedCollectionIds:
              - col:17463
              - col:17468
              - col:17473
              - col:17496
              - col:17500
              - col:17510
              - col:17511
              - col:17517
              - col:17521
              - col:17525
              - col:17532
              - col:17568
              - col:17578
              - col:17598
              - col:17602
              - col:17639
              - col:17667
              - col:17687
              - col:17689
              - col:17698
              - col:17703
              - col:17707
              - col:17718
              - col:17725
              - col:17727
            sourceReferenceIds:
              - ref:3041
              - ref:3069
              - ref:3345
              - ref:3091
              - ref:3408
              - ref:3386
              - ref:2356
              - ref:6294
            originalIdentificationMappings:
              - occurrenceId: occ:181239
                originalIdentifiedName: Leptauchenia nitida
                acceptedName: Sespia nitida
                difference: recombined as
              - occurrenceId: occ:181285
                originalIdentifiedName: Sespia marianae
                acceptedName: Sespia nitida
                difference: null
              - occurrenceId: occ:181405
                originalIdentifiedName: Leptauchenia nitida n. sp.
                acceptedName: Sespia nitida
                difference: recombined as
              - occurrenceId: occ:181426
                originalIdentifiedName: Sespia marianae
                acceptedName: Sespia nitida
                difference: null
              - occurrenceId: occ:181492
                originalIdentifiedName: Leptauchenia nitida
                acceptedName: Sespia nitida
                difference: recombined as
              - occurrenceId: occ:181553
                originalIdentifiedName: Sespia marianae
                acceptedName: Sespia nitida
                difference: null
              - occurrenceId: occ:181903
                originalIdentifiedName: Sespia marianae
                acceptedName: Sespia nitida
                difference: null
              - occurrenceId: occ:181984
                originalIdentifiedName: Sespia marianae n. sp.
                acceptedName: Sespia nitida
                difference: null
              - occurrenceId: occ:182542
                originalIdentifiedName: Sespia nitida n. sp.
                acceptedName: Sespia nitida
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

# Sespia nitida
