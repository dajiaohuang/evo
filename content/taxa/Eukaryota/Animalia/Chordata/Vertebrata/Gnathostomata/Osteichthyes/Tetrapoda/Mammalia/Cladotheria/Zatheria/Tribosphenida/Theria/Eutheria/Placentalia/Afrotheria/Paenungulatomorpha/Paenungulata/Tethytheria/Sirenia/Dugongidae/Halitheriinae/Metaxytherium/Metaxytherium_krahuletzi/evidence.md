---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Metaxytherium krahuletzi
    rank: species
    sourceDatasetId: null
    name:
      zh: Metaxytherium krahuletzi
      en: Metaxytherium krahuletzi
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
            title: PBDB accepted record — Metaxytherium krahuletzi
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=65030&show=parent,app,attr
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
            locator: 2026-10-02 occurrence response accepted_no txn:65030; original response record indices retained in data/sources/mammalia-occurrence-guides-2026-10-02-records.jsonl.gz.
            accessedAt: 2026-10-02
            responseSha256: 368dafda8e7422b86d7992dc15a10defe699a9db146057d35e01a82c1c54bfa2
            pbdbTaxonId: txn:65030
            selectedOccurrenceIds:
              - occ:608442
              - occ:608563
              - occ:608607
              - occ:608621
              - occ:608801
              - occ:609076
              - occ:610370
              - occ:610371
              - occ:610372
              - occ:610373
              - occ:610374
              - occ:610375
              - occ:610376
              - occ:610377
              - occ:610378
              - occ:610379
              - occ:610380
              - occ:610381
              - occ:610382
              - occ:610383
            selectedCollectionIds:
              - col:65037
              - col:65057
              - col:46525
              - col:65087
              - col:65161
              - col:65181
              - col:65406
              - col:65407
              - col:65408
              - col:65409
              - col:65410
              - col:65411
              - col:65412
              - col:65413
              - col:65414
              - col:65415
              - col:65416
              - col:65417
              - col:65418
              - col:65419
            sourceReferenceIds:
              - ref:18729
              - ref:18736
              - ref:23495
              - ref:18855
              - ref:18752
              - ref:18790
            originalIdentificationMappings:
              - occurrenceId: occ:608563
                originalIdentifiedName: Metaxytherium krahuletzi excelsum
                acceptedName: Metaxytherium krahuletzi
                difference: subspecies not entered
              - occurrenceId: occ:608607
                originalIdentifiedName: Manatus studeri n. sp.
                acceptedName: Metaxytherium krahuletzi
                difference: null
              - occurrenceId: occ:609076
                originalIdentifiedName: Metaxytherium krahuletzi n. sp.
                acceptedName: Metaxytherium krahuletzi
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

# Metaxytherium krahuletzi
