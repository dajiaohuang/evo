---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Phenacodus grangeri
    rank: species
    sourceDatasetId: null
    name:
      zh: Phenacodus grangeri
      en: Phenacodus grangeri
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
            title: PBDB accepted record — Phenacodus grangeri
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=50307&show=parent,app,attr
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
            locator: 2026-10-02 occurrence response accepted_no txn:50307; original response record indices retained in data/sources/mammalia-occurrence-guides-2026-10-02-records.jsonl.gz.
            accessedAt: 2026-10-02
            responseSha256: 368dafda8e7422b86d7992dc15a10defe699a9db146057d35e01a82c1c54bfa2
            pbdbTaxonId: txn:50307
            selectedOccurrenceIds:
              - occ:165064
              - occ:165504
              - occ:165574
              - occ:165606
              - occ:165733
              - occ:165859
              - occ:165924
              - occ:165944
              - occ:166017
              - occ:166109
              - occ:166221
              - occ:166265
              - occ:166360
              - occ:166526
              - occ:166629
              - occ:166753
              - occ:1303053
              - occ:1384123
              - occ:1384146
              - occ:1385206
              - occ:1386080
              - occ:1386085
              - occ:1386086
              - occ:1386101
              - occ:1386115
              - occ:1386120
              - occ:1386126
              - occ:1386159
              - occ:1386167
              - occ:1386172
              - occ:1386192
              - occ:1386210
              - occ:1386222
              - occ:1386242
              - occ:1386254
              - occ:1386301
              - occ:1386305
              - occ:1386312
              - occ:1386320
              - occ:1386324
              - occ:1386329
              - occ:1386331
              - occ:1386356
              - occ:1386368
              - occ:1386372
              - occ:1386374
              - occ:1386376
              - occ:1386382
              - occ:1386393
              - occ:1386394
              - occ:1386412
              - occ:1386417
              - occ:1386427
              - occ:1386432
              - occ:1386448
            selectedCollectionIds:
              - col:14884
              - col:14926
              - col:14935
              - col:14936
              - col:14943
              - col:14956
              - col:14962
              - col:14964
              - col:14975
              - col:14988
              - col:14997
              - col:15001
              - col:15017
              - col:15036
              - col:15049
              - col:15071
              - col:174227
              - col:15018
              - col:15057
              - col:15060
              - col:46649
              - col:46653
              - col:46655
              - col:15058
              - col:15059
              - col:15061
              - col:190403
              - col:190414
              - col:190417
              - col:190418
              - col:190419
              - col:15007
              - col:53059
              - col:188220
              - col:190423
              - col:190437
              - col:190438
              - col:190441
              - col:190443
              - col:190444
              - col:190445
              - col:190446
              - col:190457
              - col:190463
              - col:190464
              - col:190465
              - col:190466
              - col:190468
              - col:190473
              - col:190474
              - col:190483
              - col:190487
              - col:190490
              - col:190492
              - col:190462
            sourceReferenceIds:
              - ref:3024
              - ref:1375
              - ref:3401
              - ref:1731
              - ref:2953
              - ref:63104
              - ref:56865
            originalIdentificationMappings: []
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

# Phenacodus grangeri
