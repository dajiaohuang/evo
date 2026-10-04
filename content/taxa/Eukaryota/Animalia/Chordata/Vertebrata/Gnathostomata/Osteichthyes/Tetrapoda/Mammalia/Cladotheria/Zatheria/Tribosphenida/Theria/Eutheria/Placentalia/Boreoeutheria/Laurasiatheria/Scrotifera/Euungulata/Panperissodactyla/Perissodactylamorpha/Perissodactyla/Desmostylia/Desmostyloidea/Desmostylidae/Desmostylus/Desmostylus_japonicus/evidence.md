---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Desmostylus japonicus
    rank: species
    sourceDatasetId: null
    name:
      zh: Desmostylus japonicus
      en: Desmostylus japonicus
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
            title: PBDB accepted record — Desmostylus japonicus
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=72053&show=parent,app,attr
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
            locator: 2026-10-02 occurrence response accepted_no txn:72053; original response record indices retained in data/sources/mammalia-occurrence-guides-2026-10-02-records.jsonl.gz.
            accessedAt: 2026-10-02
            responseSha256: 368dafda8e7422b86d7992dc15a10defe699a9db146057d35e01a82c1c54bfa2
            pbdbTaxonId: txn:72053
            selectedOccurrenceIds:
              - occ:465441
              - occ:513549
              - occ:527932
              - occ:680374
              - occ:705717
              - occ:705720
              - occ:829535
              - occ:829536
              - occ:829537
              - occ:829538
              - occ:829539
              - occ:829541
              - occ:829542
              - occ:829543
              - occ:829544
              - occ:829545
              - occ:829546
              - occ:829548
              - occ:829549
              - occ:829550
              - occ:829551
              - occ:829552
              - occ:829553
              - occ:829555
              - occ:829557
              - occ:829559
              - occ:829560
              - occ:829561
              - occ:829562
              - occ:829563
              - occ:829564
              - occ:829565
              - occ:988793
              - occ:1228474
            selectedCollectionIds:
              - col:13297
              - col:51999
              - col:53883
              - col:52000
              - col:75729
              - col:75730
              - col:91501
              - col:91502
              - col:91503
              - col:91504
              - col:91505
              - col:91507
              - col:91508
              - col:91509
              - col:91510
              - col:91511
              - col:91512
              - col:91513
              - col:91514
              - col:91515
              - col:91516
              - col:91517
              - col:91518
              - col:46041
              - col:91519
              - col:91521
              - col:91522
              - col:91523
              - col:91524
              - col:91525
              - col:91526
              - col:52001
              - col:118942
              - col:91500
            sourceReferenceIds:
              - ref:12162
              - ref:13708
              - ref:14509
              - ref:24642
              - ref:25586
              - ref:25589
              - ref:30804
              - ref:38198
              - ref:35804
            originalIdentificationMappings:
              - occurrenceId: occ:705720
                originalIdentifiedName: Desmostylus hesperus japonicus
                acceptedName: Desmostylus japonicus
                difference: recombined as, subspecies not entered
              - occurrenceId: occ:1228474
                originalIdentifiedName: Desmostylus japonicus n. sp.
                acceptedName: Desmostylus japonicus
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

# Desmostylus japonicus
