---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Trigonias osborni
    rank: species
    sourceDatasetId: null
    name:
      zh: Trigonias osborni
      en: Trigonias osborni
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
            title: PBDB accepted record — Trigonias osborni
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=52444&show=parent,app,attr
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
            locator: 2026-10-02 occurrence response accepted_no txn:52444; original response record indices retained in data/sources/mammalia-occurrence-guides-2026-10-02-records.jsonl.gz.
            accessedAt: 2026-10-02
            responseSha256: 368dafda8e7422b86d7992dc15a10defe699a9db146057d35e01a82c1c54bfa2
            pbdbTaxonId: txn:52444
            selectedOccurrenceIds:
              - occ:178040
              - occ:178205
              - occ:178256
              - occ:178274
              - occ:178733
              - occ:179063
              - occ:179071
              - occ:179296
              - occ:179309
              - occ:897549
              - occ:897550
              - occ:897551
              - occ:897552
              - occ:897553
              - occ:897554
              - occ:1220357
            selectedCollectionIds:
              - col:16919
              - col:16930
              - col:16936
              - col:16938
              - col:16977
              - col:17011
              - col:17012
              - col:17040
              - col:17041
              - col:99642
              - col:17010
            sourceReferenceIds:
              - ref:3318
              - ref:2716
              - ref:3741
              - ref:1235
              - ref:1570
              - ref:2278
              - ref:6294
              - ref:1808
              - ref:51726
              - ref:34266
            originalIdentificationMappings:
              - occurrenceId: occ:897549
                originalIdentifiedName: Caenopus premitis n. sp.
                acceptedName: Trigonias osborni
                difference: null
              - occurrenceId: occ:897551
                originalIdentifiedName: Trigonias taylori n. sp.
                acceptedName: Trigonias osborni
                difference: null
              - occurrenceId: occ:897552
                originalIdentifiedName: Trigonias hypostylus n. sp.
                acceptedName: Trigonias osborni
                difference: null
              - occurrenceId: occ:897553
                originalIdentifiedName: Trigonias preoccidentalis n. sp.
                acceptedName: Trigonias osborni
                difference: null
              - occurrenceId: occ:897554
                originalIdentifiedName: Trigonias precopei n. sp.
                acceptedName: Trigonias osborni
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

# Trigonias osborni
