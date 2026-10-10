---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Spermophilinus bredai
    rank: species
    sourceDatasetId: null
    name:
      zh: Spermophilinus bredai
      en: Spermophilinus bredai
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
            title: PBDB accepted record — Spermophilinus bredai
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=104393&show=parent,app,attr
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
            locator: 2026-10-02 occurrence response accepted_no txn:104393; original response record indices retained in data/sources/mammalia-occurrence-guides-2026-10-02-records.jsonl.gz.
            accessedAt: 2026-10-02
            responseSha256: 368dafda8e7422b86d7992dc15a10defe699a9db146057d35e01a82c1c54bfa2
            pbdbTaxonId: txn:104393
            selectedOccurrenceIds:
              - occ:339809
              - occ:339844
              - occ:373045
              - occ:378743
              - occ:386588
              - occ:386599
              - occ:386611
              - occ:386668
              - occ:386676
              - occ:387620
              - occ:396913
              - occ:435554
              - occ:462118
              - occ:462214
              - occ:462319
              - occ:462373
              - occ:462402
              - occ:466353
              - occ:466369
              - occ:466444
              - occ:466651
              - occ:466661
              - occ:490053
              - occ:521817
              - occ:521880
              - occ:636612
              - occ:640876
              - occ:652747
              - occ:726471
              - occ:833822
              - occ:1129987
              - occ:1265847
              - occ:1402777
              - occ:1430781
              - occ:1431858
              - occ:1431990
              - occ:1434129
              - occ:1470527
              - occ:1482038
              - occ:1497211
            selectedCollectionIds:
              - col:32071
              - col:32072
              - col:35316
              - col:35751
              - col:36877
              - col:36878
              - col:36879
              - col:36887
              - col:36888
              - col:37050
              - col:38137
              - col:42594
              - col:45597
              - col:45603
              - col:45612
              - col:45614
              - col:45613
              - col:46287
              - col:46288
              - col:46227
              - col:46274
              - col:46275
              - col:49421
              - col:46277
              - col:53571
              - col:34256
              - col:69099
              - col:58983
              - col:78058
              - col:92640
              - col:143472
              - col:75481
              - col:193492
              - col:199537
              - col:199742
              - col:199755
              - col:200051
              - col:205360
              - col:206345
              - col:70806
            sourceReferenceIds:
              - ref:8616
              - ref:9527
              - ref:7531
              - ref:9874
              - ref:9929
              - ref:10239
              - ref:11342
              - ref:11994
              - ref:12335
              - ref:13210
              - ref:14472
              - ref:9004
              - ref:19926
              - ref:23644
              - ref:26329
              - ref:31215
              - ref:46485
              - ref:55045
              - ref:65739
              - ref:67817
              - ref:67901
              - ref:67928
              - ref:68035
              - ref:70464
              - ref:70899
              - ref:71914
            originalIdentificationMappings:
              - occurrenceId: occ:490053
                originalIdentifiedName: Sciurus bredai
                acceptedName: Spermophilinus bredai
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

# Spermophilinus bredai
