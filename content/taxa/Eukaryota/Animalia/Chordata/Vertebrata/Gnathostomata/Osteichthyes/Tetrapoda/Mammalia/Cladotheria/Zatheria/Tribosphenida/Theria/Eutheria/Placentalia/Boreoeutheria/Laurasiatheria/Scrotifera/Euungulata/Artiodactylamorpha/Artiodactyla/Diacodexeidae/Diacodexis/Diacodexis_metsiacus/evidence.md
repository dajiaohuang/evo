---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Diacodexis metsiacus
    rank: species
    sourceDatasetId: null
    name:
      zh: Diacodexis metsiacus
      en: Diacodexis metsiacus
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
            title: PBDB accepted record — Diacodexis metsiacus
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=49749&show=parent,app,attr
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
            locator: 2026-10-02 occurrence response accepted_no txn:49749; original response record indices retained in data/sources/mammalia-occurrence-guides-2026-10-02-records.jsonl.gz.
            accessedAt: 2026-10-02
            responseSha256: 368dafda8e7422b86d7992dc15a10defe699a9db146057d35e01a82c1c54bfa2
            pbdbTaxonId: txn:49749
            selectedOccurrenceIds:
              - occ:170050
              - occ:170505
              - occ:170545
              - occ:170578
              - occ:170609
              - occ:171039
              - occ:171720
              - occ:172791
              - occ:172819
              - occ:456864
              - occ:456890
              - occ:457575
              - occ:457602
              - occ:457626
              - occ:457649
              - occ:457688
              - occ:457706
              - occ:457714
              - occ:457742
              - occ:457773
              - occ:458603
              - occ:458629
              - occ:458641
              - occ:458655
              - occ:458691
              - occ:458728
              - occ:458736
              - occ:458744
              - occ:458748
              - occ:462542
              - occ:462576
              - occ:462586
              - occ:462597
              - occ:462650
              - occ:463019
              - occ:469059
              - occ:469101
              - occ:469109
              - occ:469124
              - occ:469132
              - occ:469143
              - occ:469176
              - occ:469187
              - occ:469247
              - occ:469269
              - occ:469288
              - occ:469360
              - occ:469373
              - occ:469429
              - occ:469441
              - occ:469464
              - occ:469481
              - occ:469499
              - occ:469525
              - occ:469548
              - occ:469567
              - occ:469581
              - occ:469602
              - occ:469617
              - occ:469631
              - occ:469644
              - occ:469655
              - occ:469672
              - occ:469704
              - occ:469721
              - occ:469751
              - occ:469784
              - occ:469798
              - occ:469816
              - occ:469837
              - occ:469847
              - occ:469853
              - occ:469865
              - occ:469883
              - occ:469911
              - occ:469939
              - occ:469944
              - occ:469958
              - occ:469973
              - occ:469984
              - occ:469996
              - occ:470011
              - occ:470032
              - occ:470045
              - occ:470065
              - occ:470079
              - occ:470093
              - occ:470129
              - occ:470172
              - occ:470185
              - occ:470197
              - occ:470214
              - occ:470225
              - occ:470239
              - occ:470272
              - occ:470285
              - occ:470309
              - occ:470321
              - occ:470345
              - occ:470365
              - occ:470387
              - occ:470408
              - occ:470426
              - occ:470441
              - occ:470457
              - occ:470480
              - occ:470506
              - occ:470529
              - occ:470543
              - occ:470566
              - occ:470577
              - occ:470613
              - occ:470641
              - occ:470677
              - occ:470687
              - occ:470708
              - occ:470718
              - occ:470756
              - occ:470769
              - occ:470797
              - occ:470813
              - occ:470829
              - occ:470852
              - occ:470874
              - occ:470895
              - occ:470931
              - occ:470949
              - occ:470962
              - occ:470981
              - occ:470990
              - occ:471013
              - occ:471039
              - occ:471070
              - occ:471082
              - occ:471111
              - occ:471129
              - occ:471155
              - occ:471189
              - occ:471208
              - occ:471227
              - occ:471247
              - occ:471259
              - occ:471289
              - occ:471301
              - occ:471315
              - occ:471329
              - occ:471344
              - occ:471382
              - occ:471399
              - occ:471422
              - occ:471432
              - occ:471444
              - occ:471471
              - occ:471485
              - occ:471498
              - occ:471511
              - occ:471525
              - occ:471541
              - occ:471550
              - occ:1303153
              - occ:1303155
              - occ:1303156
            selectedCollectionIds:
              - col:15552
              - col:15575
              - col:15576
              - col:15577
              - col:15578
              - col:15679
              - col:15779
              - col:15933
              - col:15934
              - col:15680
              - col:15683
              - col:15684
              - col:15687
              - col:15692
              - col:15694
              - col:15695
              - col:15696
              - col:15697
              - col:15699
              - col:15701
              - col:15702
              - col:15703
              - col:15704
              - col:15705
              - col:15707
              - col:15688
              - col:15690
              - col:15691
              - col:15693
              - col:15586
              - col:15587
              - col:15588
              - col:15589
              - col:15592
              - col:15594
              - col:46636
              - col:46640
              - col:46641
              - col:46642
              - col:46643
              - col:46644
              - col:46647
              - col:46648
              - col:46657
              - col:46659
              - col:46661
              - col:46672
              - col:46673
              - col:46680
              - col:46682
              - col:46683
              - col:46685
              - col:46686
              - col:46688
              - col:46690
              - col:46691
              - col:46692
              - col:46693
              - col:46694
              - col:46696
              - col:46697
              - col:46698
              - col:46699
              - col:46700
              - col:46701
              - col:46704
              - col:46706
              - col:46707
              - col:46709
              - col:46712
              - col:46713
              - col:46714
              - col:46715
              - col:46718
              - col:46721
              - col:46725
              - col:46726
              - col:46727
              - col:46728
              - col:46729
              - col:46730
              - col:46731
              - col:46732
              - col:46733
              - col:46734
              - col:46735
              - col:46736
              - col:46739
              - col:46743
              - col:46745
              - col:46746
              - col:46747
              - col:46748
              - col:46749
              - col:46753
              - col:46754
              - col:46756
              - col:46757
              - col:46759
              - col:46760
              - col:46761
              - col:46763
              - col:46765
              - col:46766
              - col:46767
              - col:46768
              - col:46770
              - col:46772
              - col:46773
              - col:46775
              - col:46776
              - col:46780
              - col:46782
              - col:46785
              - col:46786
              - col:46787
              - col:46788
              - col:46791
              - col:46792
              - col:46793
              - col:46794
              - col:46795
              - col:46797
              - col:46798
              - col:46800
              - col:46803
              - col:46804
              - col:46805
              - col:46806
              - col:46807
              - col:46808
              - col:46809
              - col:46810
              - col:46811
              - col:46813
              - col:46814
              - col:46815
              - col:46818
              - col:46819
              - col:46820
              - col:46821
              - col:46822
              - col:46825
              - col:46826
              - col:46828
              - col:46830
              - col:46831
              - col:46834
              - col:46835
              - col:46837
              - col:46838
              - col:46839
              - col:46843
              - col:46844
              - col:46845
              - col:46846
              - col:46847
              - col:46848
              - col:46849
              - col:15631
              - col:168296
              - col:15482
            sourceReferenceIds:
              - ref:6214
              - ref:3801
              - ref:1656
              - ref:6196
              - ref:11717
              - ref:2183
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

# Diacodexis metsiacus
