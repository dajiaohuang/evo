---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Kobus ellipsiprymnus
    rank: species
    sourceDatasetId: null
    name:
      zh: Kobus ellipsiprymnus
      en: Kobus ellipsiprymnus
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
            title: PBDB accepted record — Kobus ellipsiprymnus
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=149682&show=parent,app,attr
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
            locator: 2026-10-02 occurrence response accepted_no txn:149682; original response record indices retained in data/sources/mammalia-occurrence-guides-2026-10-02-records.jsonl.gz.
            accessedAt: 2026-10-02
            responseSha256: 368dafda8e7422b86d7992dc15a10defe699a9db146057d35e01a82c1c54bfa2
            pbdbTaxonId: txn:149682
            selectedOccurrenceIds:
              - occ:213831
              - occ:214227
              - occ:214265
              - occ:218401
              - occ:219105
              - occ:220335
              - occ:220430
              - occ:220568
              - occ:220948
              - occ:221773
              - occ:221917
              - occ:222005
              - occ:223464
              - occ:224249
              - occ:224254
              - occ:225948
              - occ:226484
              - occ:226792
              - occ:226854
              - occ:226868
              - occ:228949
              - occ:339320
              - occ:339415
              - occ:339451
              - occ:340184
              - occ:776484
              - occ:1500061
            selectedCollectionIds:
              - col:21893
              - col:21961
              - col:21968
              - col:22276
              - col:22488
              - col:21854
              - col:21871
              - col:21895
              - col:21949
              - col:21347
              - col:21367
              - col:21370
              - col:21568
              - col:21744
              - col:21745
              - col:21935
              - col:22006
              - col:22066
              - col:22067
              - col:22068
              - col:22550
              - col:32051
              - col:32053
              - col:32057
              - col:32060
              - col:83303
              - col:208786
            sourceReferenceIds:
              - ref:5226
              - ref:5261
              - ref:4948
              - ref:5576
              - ref:5618
              - ref:5210
              - ref:5220
              - ref:5248
              - ref:4454
              - ref:10321
              - ref:4447
              - ref:4768
              - ref:5242
              - ref:4763
              - ref:5318
              - ref:5634
              - ref:10211
              - ref:27974
              - ref:72065
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

# Kobus ellipsiprymnus
