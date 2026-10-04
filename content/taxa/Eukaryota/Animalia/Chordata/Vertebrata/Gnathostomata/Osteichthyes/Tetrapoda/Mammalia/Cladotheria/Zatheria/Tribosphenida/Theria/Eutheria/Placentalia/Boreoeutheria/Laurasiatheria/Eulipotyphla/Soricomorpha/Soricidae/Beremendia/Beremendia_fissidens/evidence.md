---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Beremendia fissidens
    rank: species
    sourceDatasetId: null
    name:
      zh: Beremendia fissidens
      en: Beremendia fissidens
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
            title: PBDB accepted record — Beremendia fissidens
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=376801&show=parent,app,attr
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
            locator: 2026-10-02 occurrence response accepted_no txn:376801; original response record indices retained in data/sources/mammalia-occurrence-guides-2026-10-02-records.jsonl.gz.
            accessedAt: 2026-10-02
            responseSha256: 368dafda8e7422b86d7992dc15a10defe699a9db146057d35e01a82c1c54bfa2
            pbdbTaxonId: txn:376801
            selectedOccurrenceIds:
              - occ:340853
              - occ:341679
              - occ:341714
              - occ:341772
              - occ:344813
              - occ:354439
              - occ:356139
              - occ:356185
              - occ:356255
              - occ:356892
              - occ:356905
              - occ:357107
              - occ:357137
              - occ:357162
              - occ:357197
              - occ:360925
              - occ:360933
              - occ:360941
              - occ:360943
              - occ:360947
              - occ:360950
              - occ:367554
              - occ:367702
              - occ:368532
              - occ:368626
              - occ:370456
              - occ:373444
              - occ:373526
              - occ:373580
              - occ:374097
              - occ:374130
              - occ:374193
              - occ:374237
              - occ:374286
              - occ:374394
              - occ:374404
              - occ:375008
              - occ:375026
              - occ:375114
              - occ:375158
              - occ:375473
              - occ:375606
              - occ:375677
              - occ:375782
              - occ:375811
              - occ:375840
              - occ:375872
              - occ:375902
              - occ:375929
              - occ:376011
              - occ:379641
              - occ:380243
              - occ:411476
              - occ:416569
              - occ:422052
              - occ:429265
              - occ:442889
              - occ:443187
              - occ:443207
              - occ:443359
              - occ:488139
              - occ:488457
              - occ:489812
              - occ:493182
              - occ:494660
              - occ:501452
              - occ:508521
              - occ:1383212
              - occ:1460603
              - occ:1468690
              - occ:1706923
              - occ:2048218
            selectedCollectionIds:
              - col:32145
              - col:32192
              - col:32195
              - col:32194
              - col:32485
              - col:33396
              - col:32198
              - col:33973
              - col:33974
              - col:33473
              - col:33873
              - col:33975
              - col:34008
              - col:34009
              - col:34010
              - col:33872
              - col:33638
              - col:33480
              - col:33874
              - col:34192
              - col:34765
              - col:34783
              - col:34870
              - col:34872
              - col:35076
              - col:35354
              - col:35358
              - col:35359
              - col:35368
              - col:35369
              - col:35370
              - col:35371
              - col:35373
              - col:35382
              - col:35383
              - col:35427
              - col:35428
              - col:35431
              - col:35432
              - col:35442
              - col:35457
              - col:35459
              - col:35464
              - col:35465
              - col:35466
              - col:35467
              - col:35468
              - col:35469
              - col:35473
              - col:35907
              - col:36000
              - col:39797
              - col:40391
              - col:41026
              - col:41932
              - col:43644
              - col:43651
              - col:43653
              - col:43658
              - col:49054
              - col:49084
              - col:49360
              - col:49816
              - col:49997
              - col:50895
              - col:51625
              - col:189574
              - col:34589
              - col:199747
              - col:241995
              - col:276686
            sourceReferenceIds:
              - ref:8655
              - ref:8762
              - ref:8998
              - ref:9135
              - ref:9346
              - ref:9424
              - ref:9534
              - ref:9643
              - ref:9672
              - ref:10779
              - ref:10897
              - ref:11054
              - ref:11202
              - ref:11465
              - ref:13054
              - ref:13151
              - ref:13380
              - ref:13428
              - ref:13182
              - ref:13737
              - ref:63715
              - ref:69855
              - ref:70399
              - ref:92837
              - ref:93840
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

# Beremendia fissidens
