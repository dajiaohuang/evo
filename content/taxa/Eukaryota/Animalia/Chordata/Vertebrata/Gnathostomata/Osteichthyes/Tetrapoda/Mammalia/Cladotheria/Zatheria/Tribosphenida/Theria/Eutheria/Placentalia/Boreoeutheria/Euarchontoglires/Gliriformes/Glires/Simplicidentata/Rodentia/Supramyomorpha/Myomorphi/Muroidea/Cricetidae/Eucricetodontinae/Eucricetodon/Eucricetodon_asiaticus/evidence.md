---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Eucricetodon asiaticus
    rank: species
    sourceDatasetId: null
    name:
      zh: Eucricetodon asiaticus
      en: Eucricetodon asiaticus
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
            title: PBDB accepted record — Eucricetodon asiaticus
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=333034&show=parent,app,attr
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
            locator: 2026-10-02 occurrence response accepted_no txn:333034; original response record indices retained in data/sources/mammalia-occurrence-guides-2026-10-02-records.jsonl.gz.
            accessedAt: 2026-10-02
            responseSha256: 368dafda8e7422b86d7992dc15a10defe699a9db146057d35e01a82c1c54bfa2
            pbdbTaxonId: txn:333034
            selectedOccurrenceIds:
              - occ:1306664
              - occ:1307279
              - occ:1308144
              - occ:1308151
              - occ:1308156
              - occ:1308161
              - occ:1308165
              - occ:1308171
              - occ:1308178
              - occ:1349689
              - occ:1371351
              - occ:1371354
              - occ:1371355
              - occ:1371357
              - occ:1371359
              - occ:1371361
              - occ:1371364
              - occ:1371366
              - occ:1371368
              - occ:1371371
              - occ:1371374
              - occ:1371376
              - occ:1371385
              - occ:1371387
              - occ:1371390
              - occ:1371394
              - occ:1371397
              - occ:1371399
              - occ:1371401
              - occ:1371403
              - occ:1371406
              - occ:1381988
              - occ:1441238
              - occ:1441346
              - occ:1441554
              - occ:1441571
              - occ:1441642
              - occ:1441683
            selectedCollectionIds:
              - col:174978
              - col:53979
              - col:175408
              - col:175406
              - col:175407
              - col:175409
              - col:175410
              - col:175411
              - col:175412
              - col:182895
              - col:180963
              - col:180970
              - col:180959
              - col:180958
              - col:180960
              - col:135794
              - col:180984
              - col:180985
              - col:175169
              - col:180955
              - col:75601
              - col:135804
              - col:175171
              - col:135793
              - col:187262
              - col:187263
              - col:180973
              - col:180956
              - col:180964
              - col:75595
              - col:182055
              - col:182899
              - col:182131
              - col:135791
              - col:187301
              - col:201176
              - col:180961
              - col:201191
            sourceReferenceIds:
              - ref:57197
              - ref:57222
              - ref:57358
              - ref:61008
              - ref:62799
              - ref:63590
              - ref:68908
            originalIdentificationMappings:
              - occurrenceId: occ:1307279
                originalIdentifiedName: Eumys asiaticus n. sp.
                acceptedName: Eucricetodon asiaticus
                difference: recombined as
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

# Eucricetodon asiaticus
