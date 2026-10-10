---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Glyptodon clavipes
    rank: species
    sourceDatasetId: null
    name:
      zh: Glyptodon clavipes
      en: Glyptodon clavipes
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
            title: PBDB accepted record — Glyptodon clavipes
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=83804&show=parent,app,attr
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
            locator: 2026-10-02 occurrence response accepted_no txn:83804; original response record indices retained in data/sources/mammalia-occurrence-guides-2026-10-02-records.jsonl.gz.
            accessedAt: 2026-10-02
            responseSha256: 368dafda8e7422b86d7992dc15a10defe699a9db146057d35e01a82c1c54bfa2
            pbdbTaxonId: txn:83804
            selectedOccurrenceIds:
              - occ:598070
              - occ:661561
              - occ:661787
              - occ:661938
              - occ:661953
              - occ:662037
              - occ:662075
              - occ:662142
              - occ:662275
              - occ:964380
              - occ:964801
              - occ:964805
              - occ:1110943
              - occ:1118487
              - occ:1153825
              - occ:1390106
              - occ:1429524
              - occ:1460986
              - occ:1463477
              - occ:1463483
              - occ:1463487
              - occ:1515951
              - occ:1516207
              - occ:1516286
              - occ:1540577
              - occ:1540578
              - occ:1540614
              - occ:1663334
            selectedCollectionIds:
              - col:63335
              - col:71274
              - col:71303
              - col:71314
              - col:71316
              - col:71325
              - col:71332
              - col:71335
              - col:71347
              - col:113472
              - col:63884
              - col:113601
              - col:140713
              - col:142016
              - col:147609
              - col:191153
              - col:198875
              - col:147598
              - col:204207
              - col:204259
              - col:204261
              - col:171151
              - col:140159
              - col:211646
              - col:216682
              - col:216684
              - col:140929
              - col:236218
            sourceReferenceIds:
              - ref:17632
              - ref:24014
              - ref:24010
              - ref:23868
              - ref:23892
              - ref:73160
              - ref:23910
              - ref:24109
              - ref:23974
              - ref:36821
              - ref:36870
              - ref:45606
              - ref:46109
              - ref:47532
              - ref:64453
              - ref:67741
              - ref:69878
              - ref:70005
              - ref:73133
              - ref:74913
              - ref:89494
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

# Glyptodon clavipes
