---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Calippus regulus
    rank: species
    sourceDatasetId: null
    name:
      zh: Calippus regulus
      en: Calippus regulus
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
            title: PBDB accepted record — Calippus regulus
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=44778&show=parent,app,attr
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
            locator: 2026-10-02 occurrence response accepted_no txn:44778; original response record indices retained in data/sources/mammalia-occurrence-guides-2026-10-02-records.jsonl.gz.
            accessedAt: 2026-10-02
            responseSha256: 368dafda8e7422b86d7992dc15a10defe699a9db146057d35e01a82c1c54bfa2
            pbdbTaxonId: txn:44778
            selectedOccurrenceIds:
              - occ:184226
              - occ:184891
              - occ:185295
              - occ:185329
              - occ:185667
              - occ:185688
              - occ:185711
              - occ:185810
              - occ:185934
              - occ:185962
              - occ:186513
              - occ:186530
              - occ:186545
              - occ:186552
              - occ:186709
              - occ:186786
              - occ:186840
              - occ:186940
              - occ:187250
              - occ:188277
              - occ:188287
              - occ:188388
              - occ:188436
              - occ:188488
              - occ:188509
              - occ:1353104
            selectedCollectionIds:
              - col:18045
              - col:18124
              - col:18179
              - col:18186
              - col:18217
              - col:18219
              - col:18220
              - col:18227
              - col:18242
              - col:18244
              - col:18314
              - col:18315
              - col:18316
              - col:18317
              - col:18334
              - col:18347
              - col:18355
              - col:18371
              - col:18442
              - col:18610
              - col:18611
              - col:18623
              - col:18629
              - col:18640
              - col:18645
              - col:18358
            sourceReferenceIds:
              - ref:1952
              - ref:6193
              - ref:2042
              - ref:3794
              - ref:781
              - ref:1949
              - ref:3519
              - ref:6207
              - ref:1504
              - ref:3098
              - ref:61275
            originalIdentificationMappings:
              - occurrenceId: occ:185295
                originalIdentifiedName: Calippus regulus n. sp.
                acceptedName: Calippus regulus
                difference: null
              - occurrenceId: occ:188287
                originalIdentifiedName: Calippus anatinus n. sp.
                acceptedName: Calippus regulus
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

# Calippus regulus
