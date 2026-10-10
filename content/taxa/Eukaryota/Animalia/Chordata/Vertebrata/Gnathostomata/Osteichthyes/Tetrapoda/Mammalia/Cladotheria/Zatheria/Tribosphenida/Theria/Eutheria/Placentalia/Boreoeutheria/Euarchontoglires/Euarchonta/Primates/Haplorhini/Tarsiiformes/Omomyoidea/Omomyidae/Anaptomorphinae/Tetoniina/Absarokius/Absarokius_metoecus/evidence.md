---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Absarokius metoecus
    rank: species
    sourceDatasetId: null
    name:
      zh: Absarokius metoecus
      en: Absarokius metoecus
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
            title: PBDB accepted record — Absarokius metoecus
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=43691&show=parent,app,attr
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
            locator: 2026-10-02 occurrence response accepted_no txn:43691; original response record indices retained in data/sources/mammalia-occurrence-guides-2026-10-02-records.jsonl.gz.
            accessedAt: 2026-10-02
            responseSha256: 368dafda8e7422b86d7992dc15a10defe699a9db146057d35e01a82c1c54bfa2
            pbdbTaxonId: txn:43691
            selectedOccurrenceIds:
              - occ:169794
              - occ:169805
              - occ:169821
              - occ:169884
              - occ:169889
              - occ:169913
              - occ:169979
              - occ:170053
              - occ:170090
              - occ:170128
              - occ:170159
              - occ:170289
              - occ:170352
              - occ:170386
              - occ:170413
              - occ:170428
              - occ:170496
              - occ:170532
              - occ:170568
              - occ:170598
              - occ:170613
              - occ:170620
              - occ:171106
              - occ:174381
              - occ:457594
              - occ:457619
              - occ:469575
              - occ:469664
              - occ:470404
              - occ:471340
              - occ:471521
              - occ:471563
            selectedCollectionIds:
              - col:15540
              - col:15541
              - col:15542
              - col:15545
              - col:15546
              - col:15548
              - col:15551
              - col:15553
              - col:15554
              - col:15555
              - col:15556
              - col:15559
              - col:15564
              - col:15565
              - col:15566
              - col:15567
              - col:15575
              - col:15576
              - col:15577
              - col:15578
              - col:15579
              - col:15581
              - col:15701
              - col:16241
              - col:15687
              - col:15692
              - col:46692
              - col:46699
              - col:46763
              - col:46831
              - col:46847
              - col:46851
            sourceReferenceIds:
              - ref:1123
              - ref:6214
              - ref:2962
              - ref:11717
            originalIdentificationMappings:
              - occurrenceId: occ:170532
                originalIdentifiedName: Absarokius metoecus n. sp.
                acceptedName: Absarokius metoecus
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

# Absarokius metoecus
