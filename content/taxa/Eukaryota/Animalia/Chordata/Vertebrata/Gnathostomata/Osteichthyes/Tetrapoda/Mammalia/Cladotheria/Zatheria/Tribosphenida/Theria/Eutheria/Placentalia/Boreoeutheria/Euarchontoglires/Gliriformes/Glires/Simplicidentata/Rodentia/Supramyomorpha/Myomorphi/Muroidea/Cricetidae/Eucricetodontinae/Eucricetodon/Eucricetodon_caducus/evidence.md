---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Eucricetodon caducus
    rank: species
    sourceDatasetId: null
    name:
      zh: Eucricetodon caducus
      en: Eucricetodon caducus
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
            title: PBDB accepted record — Eucricetodon caducus
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=333036&show=parent,app,attr
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
            locator: 2026-10-02 occurrence response accepted_no txn:333036; original response record indices retained in data/sources/mammalia-occurrence-guides-2026-10-02-records.jsonl.gz.
            accessedAt: 2026-10-02
            responseSha256: 368dafda8e7422b86d7992dc15a10defe699a9db146057d35e01a82c1c54bfa2
            pbdbTaxonId: txn:333036
            selectedOccurrenceIds:
              - occ:1306665
              - occ:1307226
              - occ:1308035
              - occ:1310114
              - occ:1371352
              - occ:1371356
              - occ:1371358
              - occ:1371360
              - occ:1371362
              - occ:1371363
              - occ:1371365
              - occ:1371367
              - occ:1371369
              - occ:1371372
              - occ:1371375
              - occ:1371377
              - occ:1371378
              - occ:1371379
              - occ:1371381
              - occ:1371388
              - occ:1371391
              - occ:1371395
              - occ:1371398
              - occ:1371400
              - occ:1371402
              - occ:1371404
              - occ:1371407
              - occ:1371408
              - occ:1441345
              - occ:1441359
              - occ:1441391
              - occ:1441553
              - occ:1441570
            selectedCollectionIds:
              - col:174978
              - col:175142
              - col:175386
              - col:175253
              - col:180963
              - col:180959
              - col:180958
              - col:180960
              - col:135794
              - col:187260
              - col:180984
              - col:180985
              - col:175169
              - col:180955
              - col:75601
              - col:135804
              - col:187261
              - col:135792
              - col:135806
              - col:135793
              - col:187262
              - col:187263
              - col:180973
              - col:180956
              - col:180964
              - col:75595
              - col:187264
              - col:135803
              - col:135791
              - col:175168
              - col:187298
              - col:187301
              - col:201176
            sourceReferenceIds:
              - ref:57197
              - ref:59456
              - ref:57612
              - ref:62799
              - ref:68908
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

# Eucricetodon caducus
