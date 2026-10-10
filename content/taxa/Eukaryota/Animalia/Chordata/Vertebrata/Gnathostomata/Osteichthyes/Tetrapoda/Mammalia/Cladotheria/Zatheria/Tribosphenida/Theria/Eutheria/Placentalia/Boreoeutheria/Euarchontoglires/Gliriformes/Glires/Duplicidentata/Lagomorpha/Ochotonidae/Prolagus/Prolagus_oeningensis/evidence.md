---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Prolagus oeningensis
    rank: species
    sourceDatasetId: null
    name:
      zh: Prolagus oeningensis
      en: Prolagus oeningensis
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
            title: PBDB accepted record — Prolagus oeningensis
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=104403&show=parent,app,attr
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
            locator: 2026-10-02 occurrence response accepted_no txn:104403; original response record indices retained in data/sources/mammalia-occurrence-guides-2026-10-02-records.jsonl.gz.
            accessedAt: 2026-10-02
            responseSha256: 368dafda8e7422b86d7992dc15a10defe699a9db146057d35e01a82c1c54bfa2
            pbdbTaxonId: txn:104403
            selectedOccurrenceIds:
              - occ:339821
              - occ:339856
              - occ:341603
              - occ:387621
              - occ:396910
              - occ:396936
              - occ:397186
              - occ:405604
              - occ:419541
              - occ:462147
              - occ:462167
              - occ:462173
              - occ:462190
              - occ:462227
              - occ:462257
              - occ:462332
              - occ:462381
              - occ:466347
              - occ:466433
              - occ:466468
              - occ:466505
              - occ:466519
              - occ:466531
              - occ:466551
              - occ:466605
              - occ:466645
              - occ:466668
              - occ:466688
              - occ:466694
              - occ:490092
              - occ:521893
              - occ:650602
              - occ:650816
              - occ:926829
              - occ:1091840
              - occ:1129984
              - occ:1309584
              - occ:1313476
              - occ:1431113
              - occ:1447600
              - occ:1447660
              - occ:1447685
              - occ:1468842
              - occ:1468844
              - occ:1482034
              - occ:1636870
              - occ:1662903
            selectedCollectionIds:
              - col:32071
              - col:32072
              - col:32191
              - col:37050
              - col:38137
              - col:38139
              - col:38157
              - col:38975
              - col:40755
              - col:44977
              - col:45594
              - col:45602
              - col:45598
              - col:45603
              - col:45604
              - col:45612
              - col:45614
              - col:46286
              - col:46225
              - col:46228
              - col:46234
              - col:46236
              - col:46241
              - col:46253
              - col:46267
              - col:46273
              - col:46275
              - col:46276
              - col:46277
              - col:49421
              - col:53571
              - col:70337
              - col:69098
              - col:106003
              - col:48325
              - col:143472
              - col:175727
              - col:176268
              - col:90354
              - col:201974
              - col:201975
              - col:201976
              - col:205187
              - col:205184
              - col:206345
              - col:65952
              - col:236048
            sourceReferenceIds:
              - ref:8616
              - ref:8672
              - ref:9929
              - ref:10239
              - ref:10430
              - ref:10998
              - ref:11994
              - ref:12335
              - ref:13210
              - ref:14472
              - ref:23602
              - ref:35360
              - ref:43885
              - ref:46485
              - ref:57549
              - ref:57920
              - ref:67825
              - ref:69177
              - ref:70404
              - ref:70899
              - ref:87754
              - ref:89450
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

# Prolagus oeningensis
