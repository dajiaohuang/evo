---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Smilodon populator
    rank: species
    sourceDatasetId: null
    name:
      zh: Smilodon populator
      en: Smilodon populator
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
            title: PBDB accepted record — Smilodon populator
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=51618&show=parent,app,attr
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
            locator: 2026-10-02 occurrence response accepted_no txn:51618; original response record indices retained in data/sources/mammalia-occurrence-guides-2026-10-02-records.jsonl.gz.
            accessedAt: 2026-10-02
            responseSha256: 368dafda8e7422b86d7992dc15a10defe699a9db146057d35e01a82c1c54bfa2
            pbdbTaxonId: txn:51618
            selectedOccurrenceIds:
              - occ:571716
              - occ:600939
              - occ:600940
              - occ:654808
              - occ:654897
              - occ:661563
              - occ:661661
              - occ:661810
              - occ:661931
              - occ:662079
              - occ:662097
              - occ:662146
              - occ:731810
              - occ:837043
              - occ:841088
              - occ:1012546
              - occ:1087320
              - occ:1087326
              - occ:1118506
              - occ:1153832
              - occ:1156364
              - occ:1156864
              - occ:1363255
              - occ:1377898
              - occ:1384792
              - occ:1390102
              - occ:1429536
              - occ:1461010
              - occ:1461491
              - occ:1516239
              - occ:1520044
              - occ:1520188
              - occ:1520191
              - occ:1521286
              - occ:1595536
              - occ:1595539
              - occ:1628995
              - occ:1635202
              - occ:1663317
              - occ:1664019
              - occ:2063778
            selectedCollectionIds:
              - col:59978
              - col:63515
              - col:63884
              - col:70673
              - col:70704
              - col:71274
              - col:71287
              - col:71303
              - col:71313
              - col:71332
              - col:71334
              - col:71335
              - col:78577
              - col:92814
              - col:93235
              - col:123831
              - col:136498
              - col:136499
              - col:142016
              - col:147609
              - col:148309
              - col:148397
              - col:185519
              - col:187597
              - col:189977
              - col:191153
              - col:198875
              - col:147598
              - col:203958
              - col:71325
              - col:212449
              - col:212472
              - col:212474
              - col:212684
              - col:212719
              - col:67858
              - col:147191
              - col:71289
              - col:230754
              - col:236300
              - col:231913
            sourceReferenceIds:
              - ref:17245
              - ref:18348
              - ref:19694
              - ref:73160
              - ref:24012
              - ref:24010
              - ref:24122
              - ref:23910
              - ref:24109
              - ref:26422
              - ref:31331
              - ref:31515
              - ref:39739
              - ref:43594
              - ref:46109
              - ref:47532
              - ref:47592
              - ref:47605
              - ref:62199
              - ref:62987
              - ref:63874
              - ref:64453
              - ref:67741
              - ref:69878
              - ref:69906
              - ref:73390
              - ref:73408
              - ref:73404
              - ref:73453
              - ref:81712
              - ref:81714
              - ref:85287
              - ref:85808
              - ref:89489
              - ref:89513
              - ref:94716
            originalIdentificationMappings:
              - occurrenceId: occ:1118506
                originalIdentifiedName: Smilodon neogaeus
                acceptedName: Smilodon populator
                difference: null
              - occurrenceId: occ:1363255
                originalIdentifiedName: Smilodon neogaeus
                acceptedName: Smilodon populator
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

# Smilodon populator
