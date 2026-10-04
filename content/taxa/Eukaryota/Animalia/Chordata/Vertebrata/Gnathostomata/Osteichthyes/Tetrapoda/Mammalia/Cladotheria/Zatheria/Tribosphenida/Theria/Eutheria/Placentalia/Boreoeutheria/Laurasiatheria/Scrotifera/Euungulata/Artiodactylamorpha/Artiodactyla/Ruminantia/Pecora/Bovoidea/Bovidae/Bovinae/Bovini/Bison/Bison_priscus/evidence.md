---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Bison priscus
    rank: species
    sourceDatasetId: null
    name:
      zh: Bison priscus
      en: Bison priscus
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
            title: PBDB accepted record — Bison priscus
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=52615&show=parent,app,attr
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
            locator: 2026-10-02 occurrence response accepted_no txn:52615; original response record indices retained in data/sources/mammalia-occurrence-guides-2026-10-02-records.jsonl.gz.
            accessedAt: 2026-10-02
            responseSha256: 368dafda8e7422b86d7992dc15a10defe699a9db146057d35e01a82c1c54bfa2
            pbdbTaxonId: txn:52615
            selectedOccurrenceIds:
              - occ:196964
              - occ:197482
              - occ:199237
              - occ:358631
              - occ:364231
              - occ:381252
              - occ:381517
              - occ:417532
              - occ:417548
              - occ:443352
              - occ:443745
              - occ:457440
              - occ:457455
              - occ:457465
              - occ:457481
              - occ:457508
              - occ:485007
              - occ:485244
              - occ:497044
              - occ:497092
              - occ:497592
              - occ:497700
              - occ:683594
              - occ:842845
              - occ:847922
              - occ:935481
              - occ:945346
              - occ:1108947
              - occ:1350578
              - occ:1383235
              - occ:1383284
              - occ:1422102
              - occ:2070733
            selectedCollectionIds:
              - col:20297
              - col:20346
              - col:20569
              - col:34105
              - col:34536
              - col:22728
              - col:36220
              - col:40496
              - col:40497
              - col:43657
              - col:43702
              - col:43020
              - col:45085
              - col:45067
              - col:45065
              - col:45070
              - col:48555
              - col:48592
              - col:50196
              - col:50198
              - col:50257
              - col:50259
              - col:73691
              - col:93555
              - col:94328
              - col:82530
              - col:109703
              - col:140370
              - col:183123
              - col:189574
              - col:189573
              - col:197461
              - col:189981
            sourceReferenceIds:
              - ref:2504
              - ref:2781
              - ref:8978
              - ref:9116
              - ref:9643
              - ref:10916
              - ref:11465
              - ref:11725
              - ref:12957
              - ref:12964
              - ref:24706
              - ref:31685
              - ref:32076
              - ref:35842
              - ref:36257
              - ref:45424
              - ref:61122
              - ref:63715
              - ref:9534
              - ref:63876
            originalIdentificationMappings:
              - occurrenceId: occ:842845
                originalIdentifiedName: Bison crassicornis
                acceptedName: Bison priscus
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

# Bison priscus
