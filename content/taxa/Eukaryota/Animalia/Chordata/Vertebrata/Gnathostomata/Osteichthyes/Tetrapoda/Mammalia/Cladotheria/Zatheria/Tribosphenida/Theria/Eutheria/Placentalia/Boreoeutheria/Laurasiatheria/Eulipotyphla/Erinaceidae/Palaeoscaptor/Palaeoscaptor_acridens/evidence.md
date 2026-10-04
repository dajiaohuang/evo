---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Palaeoscaptor acridens
    rank: species
    sourceDatasetId: null
    name:
      zh: Palaeoscaptor acridens
      en: Palaeoscaptor acridens
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
            title: PBDB accepted record — Palaeoscaptor acridens
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=108952&show=parent,app,attr
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
            locator: 2026-10-02 occurrence response accepted_no txn:108952; original response record indices retained in data/sources/mammalia-occurrence-guides-2026-10-02-records.jsonl.gz.
            accessedAt: 2026-10-02
            responseSha256: 368dafda8e7422b86d7992dc15a10defe699a9db146057d35e01a82c1c54bfa2
            pbdbTaxonId: txn:108952
            selectedOccurrenceIds:
              - occ:604601
              - occ:695848
              - occ:1306342
              - occ:1306366
              - occ:1441070
              - occ:1441083
              - occ:1441155
              - occ:1441170
              - occ:1441190
              - occ:1441197
              - occ:1441218
              - occ:1441254
              - occ:1441275
              - occ:1441308
              - occ:1441322
              - occ:1441333
              - occ:1441358
              - occ:1441368
              - occ:1441380
              - occ:1441394
              - occ:1441402
              - occ:1441469
              - occ:1441505
              - occ:1441529
              - occ:1441540
              - occ:1441585
              - occ:1441610
              - occ:1441663
            selectedCollectionIds:
              - col:64413
              - col:74900
              - col:174759
              - col:174916
              - col:180971
              - col:180953
              - col:182089
              - col:182088
              - col:180976
              - col:182080
              - col:182131
              - col:180965
              - col:75588
              - col:175169
              - col:180955
              - col:135791
              - col:175168
              - col:75599
              - col:187298
              - col:187263
              - col:182075
              - col:182081
              - col:182078
              - col:180956
              - col:187301
              - col:180959
              - col:201185
              - col:201191
            sourceReferenceIds:
              - ref:18566
              - ref:24838
              - ref:57164
              - ref:25407
              - ref:68908
            originalIdentificationMappings:
              - occurrenceId: occ:1306366
                originalIdentifiedName: Palaeoscaptor acridens n. gen. n. sp.
                acceptedName: Palaeoscaptor acridens
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

# Palaeoscaptor acridens
