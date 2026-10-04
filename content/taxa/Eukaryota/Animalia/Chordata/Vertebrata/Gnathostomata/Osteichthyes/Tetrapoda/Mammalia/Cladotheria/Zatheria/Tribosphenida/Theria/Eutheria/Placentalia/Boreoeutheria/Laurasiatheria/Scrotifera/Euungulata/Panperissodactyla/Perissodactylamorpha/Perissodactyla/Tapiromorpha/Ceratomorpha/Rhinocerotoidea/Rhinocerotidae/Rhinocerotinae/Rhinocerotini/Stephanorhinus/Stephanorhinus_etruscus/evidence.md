---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Stephanorhinus etruscus
    rank: species
    sourceDatasetId: null
    name:
      zh: Stephanorhinus etruscus
      en: Stephanorhinus etruscus
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
            title: PBDB accepted record — Stephanorhinus etruscus
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=54872&show=parent,app,attr
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
            locator: 2026-10-02 occurrence response accepted_no txn:54872; original response record indices retained in data/sources/mammalia-occurrence-guides-2026-10-02-records.jsonl.gz.
            accessedAt: 2026-10-02
            responseSha256: 368dafda8e7422b86d7992dc15a10defe699a9db146057d35e01a82c1c54bfa2
            pbdbTaxonId: txn:54872
            selectedOccurrenceIds:
              - occ:340441
              - occ:340442
              - occ:356309
              - occ:357133
              - occ:357191
              - occ:360267
              - occ:363667
              - occ:367512
              - occ:367972
              - occ:368339
              - occ:368510
              - occ:368577
              - occ:369005
              - occ:369043
              - occ:369100
              - occ:369169
              - occ:369186
              - occ:369637
              - occ:370423
              - occ:370538
              - occ:374180
              - occ:374359
              - occ:374388
              - occ:375152
              - occ:381211
              - occ:381237
              - occ:381485
              - occ:381508
              - occ:382559
              - occ:387478
              - occ:387500
              - occ:405255
              - occ:410889
              - occ:412050
              - occ:412265
              - occ:415445
              - occ:415447
              - occ:415451
              - occ:416643
              - occ:416694
              - occ:417585
              - occ:417598
              - occ:418316
              - occ:421585
              - occ:421613
              - occ:421704
              - occ:421713
              - occ:436666
              - occ:439045
              - occ:443772
              - occ:448628
              - occ:450366
              - occ:474717
              - occ:475105
              - occ:475121
              - occ:475126
              - occ:475198
              - occ:475272
              - occ:478744
              - occ:479564
              - occ:479830
              - occ:479843
              - occ:479860
              - occ:479878
              - occ:485009
              - occ:488493
              - occ:489216
              - occ:489223
              - occ:489309
              - occ:489363
              - occ:494667
              - occ:494711
              - occ:494722
              - occ:497032
              - occ:497784
              - occ:498808
              - occ:498810
              - occ:510964
              - occ:614666
              - occ:713682
              - occ:724107
              - occ:724118
              - occ:724138
              - occ:724178
              - occ:725841
              - occ:725852
              - occ:1383252
              - occ:1384784
              - occ:1434269
              - occ:1434279
              - occ:1486224
              - occ:1706944
              - occ:2056499
              - occ:2056509
            selectedCollectionIds:
              - col:32105
              - col:32106
              - col:33974
              - col:33975
              - col:34009
              - col:34127
              - col:34459
              - col:34762
              - col:34809
              - col:34848
              - col:34870
              - col:34872
              - col:34898
              - col:34911
              - col:34916
              - col:34920
              - col:34925
              - col:34943
              - col:35076
              - col:35078
              - col:35369
              - col:35374
              - col:35380
              - col:35431
              - col:36206
              - col:22728
              - col:36219
              - col:36220
              - col:36373
              - col:37024
              - col:37026
              - col:38892
              - col:39683
              - col:39845
              - col:39866
              - col:40257
              - col:40258
              - col:40259
              - col:40398
              - col:40401
              - col:40500
              - col:40502
              - col:36112
              - col:40986
              - col:40994
              - col:41006
              - col:41007
              - col:42673
              - col:42241
              - col:43704
              - col:44146
              - col:44231
              - col:47100
              - col:47131
              - col:47132
              - col:47133
              - col:47150
              - col:47188
              - col:47624
              - col:47805
              - col:47828
              - col:47829
              - col:47830
              - col:47831
              - col:48555
              - col:49087
              - col:49211
              - col:49212
              - col:49240
              - col:49254
              - col:49997
              - col:49999
              - col:50000
              - col:50196
              - col:50274
              - col:50466
              - col:50342
              - col:51778
              - col:65174
              - col:56729
              - col:77754
              - col:77751
              - col:49816
              - col:77773
              - col:78010
              - col:77750
              - col:189574
              - col:189976
              - col:200083
              - col:200084
              - col:197163
              - col:241995
              - col:277750
              - col:277751
            sourceReferenceIds:
              - ref:9580
              - ref:9135
              - ref:9344
              - ref:9350
              - ref:9364
              - ref:9910
              - ref:9380
              - ref:9388
              - ref:9534
              - ref:9643
              - ref:9913
              - ref:10720
              - ref:10904
              - ref:10948
              - ref:11465
              - ref:13155
              - ref:12578
              - ref:7009
              - ref:13792
              - ref:13140
              - ref:13150
              - ref:13428
              - ref:8651
              - ref:13532
              - ref:13519
              - ref:13786
              - ref:15045
              - ref:24838
              - ref:26261
              - ref:26265
              - ref:63715
              - ref:63872
              - ref:68076
              - ref:71103
              - ref:92837
              - ref:94167
            originalIdentificationMappings:
              - occurrenceId: occ:375152
                originalIdentifiedName: Dicerorhinus etruscus
                acceptedName: Stephanorhinus etruscus
                difference: recombined as
              - occurrenceId: occ:418316
                originalIdentifiedName: Dicerorhinus etruscus
                acceptedName: Stephanorhinus etruscus
                difference: recombined as
              - occurrenceId: occ:475198
                originalIdentifiedName: Dicerorhinus etruscus
                acceptedName: Stephanorhinus etruscus
                difference: recombined as
              - occurrenceId: occ:489216
                originalIdentifiedName: Dicerorhinus etruscus
                acceptedName: Stephanorhinus etruscus
                difference: recombined as
              - occurrenceId: occ:489223
                originalIdentifiedName: Dicerorhinus etruscus
                acceptedName: Stephanorhinus etruscus
                difference: recombined as
              - occurrenceId: occ:494667
                originalIdentifiedName: Dicerorhinus etruscus
                acceptedName: Stephanorhinus etruscus
                difference: recombined as
              - occurrenceId: occ:497784
                originalIdentifiedName: Dicerorhinus etruscus
                acceptedName: Stephanorhinus etruscus
                difference: recombined as
              - occurrenceId: occ:498808
                originalIdentifiedName: Dicerorhinus etruscus
                acceptedName: Stephanorhinus etruscus
                difference: recombined as
              - occurrenceId: occ:498810
                originalIdentifiedName: Dicerorhinus etruscus
                acceptedName: Stephanorhinus etruscus
                difference: recombined as
              - occurrenceId: occ:510964
                originalIdentifiedName: Dicerorhinus etruscus
                acceptedName: Stephanorhinus etruscus
                difference: recombined as
              - occurrenceId: occ:713682
                originalIdentifiedName: Rhinoceros etruscus
                acceptedName: Stephanorhinus etruscus
                difference: recombined as
              - occurrenceId: occ:724107
                originalIdentifiedName: Rhinoceros etruscus
                acceptedName: Stephanorhinus etruscus
                difference: recombined as
              - occurrenceId: occ:724118
                originalIdentifiedName: Rhinoceros etruscus
                acceptedName: Stephanorhinus etruscus
                difference: recombined as
              - occurrenceId: occ:724138
                originalIdentifiedName: Rhinoceros etruscus
                acceptedName: Stephanorhinus etruscus
                difference: recombined as
              - occurrenceId: occ:725841
                originalIdentifiedName: Rhinoceros etruscus
                acceptedName: Stephanorhinus etruscus
                difference: recombined as
              - occurrenceId: occ:725852
                originalIdentifiedName: Rhinoceros etruscus
                acceptedName: Stephanorhinus etruscus
                difference: recombined as
              - occurrenceId: occ:1434269
                originalIdentifiedName: Dicerorhinus etruscus
                acceptedName: Stephanorhinus etruscus
                difference: recombined as
              - occurrenceId: occ:1434279
                originalIdentifiedName: Dicerorhinus etruscus
                acceptedName: Stephanorhinus etruscus
                difference: recombined as
              - occurrenceId: occ:1486224
                originalIdentifiedName: Dicerorhinus etruscus
                acceptedName: Stephanorhinus etruscus
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

# Stephanorhinus etruscus
