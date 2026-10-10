---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Hyopsodus loomisi
    rank: species
    sourceDatasetId: null
    name:
      zh: Hyopsodus loomisi
      en: Hyopsodus loomisi
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
            title: PBDB accepted record — Hyopsodus loomisi
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=47173&show=parent,app,attr
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
            locator: 2026-10-02 occurrence response accepted_no txn:47173; original response record indices retained in data/sources/mammalia-occurrence-guides-2026-10-02-records.jsonl.gz.
            accessedAt: 2026-10-02
            responseSha256: 368dafda8e7422b86d7992dc15a10defe699a9db146057d35e01a82c1c54bfa2
            pbdbTaxonId: txn:47173
            selectedOccurrenceIds:
              - occ:168657
              - occ:168729
              - occ:168904
              - occ:168913
              - occ:168958
              - occ:170740
              - occ:170742
              - occ:170745
              - occ:170747
              - occ:170749
              - occ:170751
              - occ:170753
              - occ:170755
              - occ:170757
              - occ:170759
              - occ:170762
              - occ:170765
              - occ:170767
              - occ:170769
              - occ:170771
              - occ:170773
              - occ:170775
              - occ:170777
              - occ:170868
              - occ:171034
              - occ:171191
              - occ:171277
              - occ:171305
              - occ:171584
              - occ:171597
              - occ:171604
              - occ:171670
              - occ:171718
              - occ:171803
              - occ:171843
              - occ:171990
              - occ:172044
              - occ:172169
              - occ:172257
              - occ:172372
              - occ:172442
              - occ:172784
              - occ:172810
              - occ:456895
              - occ:462547
              - occ:462579
              - occ:462589
              - occ:462602
              - occ:462632
              - occ:462659
              - occ:469063
              - occ:469093
              - occ:469114
              - occ:469126
              - occ:469134
              - occ:469147
              - occ:469160
              - occ:469188
              - occ:469203
              - occ:469241
              - occ:469251
              - occ:469274
              - occ:469308
              - occ:469322
              - occ:469332
              - occ:469339
              - occ:469363
              - occ:469379
              - occ:469396
              - occ:469431
              - occ:469475
              - occ:469486
              - occ:469501
              - occ:469514
              - occ:469528
              - occ:469540
              - occ:469553
              - occ:469605
              - occ:469621
              - occ:469647
              - occ:469658
              - occ:469917
              - occ:469927
              - occ:469935
              - occ:469947
              - occ:469961
              - occ:470484
              - occ:470518
              - occ:470534
              - occ:470548
              - occ:470562
              - occ:470570
              - occ:470579
              - occ:470590
              - occ:470620
              - occ:470634
              - occ:470645
              - occ:470669
              - occ:470679
              - occ:470693
              - occ:470721
              - occ:470736
              - occ:470749
              - occ:470758
              - occ:470776
              - occ:470800
              - occ:470816
              - occ:470834
              - occ:470844
              - occ:470858
              - occ:470880
              - occ:470900
              - occ:470915
              - occ:470936
              - occ:470952
              - occ:470968
              - occ:470982
              - occ:470996
              - occ:471017
              - occ:471046
              - occ:471115
              - occ:471135
              - occ:471165
              - occ:471179
              - occ:471195
              - occ:471213
              - occ:471251
              - occ:471263
              - occ:471272
              - occ:471281
              - occ:471335
              - occ:471349
              - occ:471400
              - occ:471411
              - occ:471436
              - occ:471448
              - occ:471457
              - occ:471489
              - occ:471579
              - occ:1193937
              - occ:1193938
              - occ:1193939
              - occ:1193940
              - occ:1193942
              - occ:1193943
              - occ:1193944
              - occ:1193945
              - occ:1193946
              - occ:1193947
              - occ:1193948
              - occ:1193949
              - occ:1193955
            selectedCollectionIds:
              - col:15450
              - col:15455
              - col:15480
              - col:15482
              - col:15485
              - col:15624
              - col:15625
              - col:15626
              - col:15627
              - col:15628
              - col:15629
              - col:15630
              - col:15631
              - col:15632
              - col:15633
              - col:15634
              - col:15635
              - col:15636
              - col:15637
              - col:15638
              - col:15639
              - col:15640
              - col:15641
              - col:15660
              - col:15679
              - col:15717
              - col:15725
              - col:15727
              - col:15759
              - col:15760
              - col:15761
              - col:15771
              - col:15779
              - col:15790
              - col:15793
              - col:15817
              - col:15830
              - col:15845
              - col:15865
              - col:15887
              - col:15895
              - col:15933
              - col:15934
              - col:15683
              - col:15586
              - col:15587
              - col:15588
              - col:15589
              - col:15590
              - col:15592
              - col:46636
              - col:46639
              - col:46641
              - col:46642
              - col:46643
              - col:46644
              - col:46645
              - col:46648
              - col:46650
              - col:46656
              - col:46657
              - col:46659
              - col:46664
              - col:46667
              - col:46668
              - col:46669
              - col:46672
              - col:46673
              - col:46675
              - col:46680
              - col:46684
              - col:46685
              - col:46686
              - col:46687
              - col:46688
              - col:46689
              - col:46690
              - col:46693
              - col:46694
              - col:46697
              - col:46698
              - col:46721
              - col:46722
              - col:46724
              - col:46726
              - col:46727
              - col:46768
              - col:46771
              - col:46772
              - col:46773
              - col:46774
              - col:46775
              - col:46776
              - col:46777
              - col:46780
              - col:46781
              - col:46782
              - col:46784
              - col:46785
              - col:46786
              - col:46788
              - col:46789
              - col:46790
              - col:46791
              - col:46792
              - col:46793
              - col:46794
              - col:46795
              - col:46796
              - col:46797
              - col:46798
              - col:46800
              - col:46801
              - col:46803
              - col:46804
              - col:46805
              - col:46806
              - col:46807
              - col:46808
              - col:46809
              - col:46813
              - col:46814
              - col:46816
              - col:46817
              - col:46818
              - col:46819
              - col:46821
              - col:46822
              - col:46823
              - col:46824
              - col:46830
              - col:46831
              - col:46835
              - col:46836
              - col:46838
              - col:46839
              - col:46840
              - col:46844
              - col:46852
              - col:154251
              - col:154253
              - col:154254
              - col:154255
              - col:154257
              - col:154258
              - col:154262
              - col:154265
              - col:154270
              - col:154271
              - col:154276
              - col:154283
              - col:154286
            sourceReferenceIds:
              - ref:2528
              - ref:1618
              - ref:6223
              - ref:3801
              - ref:1657
              - ref:1656
              - ref:3714
              - ref:2028
              - ref:6196
              - ref:11717
              - ref:49988
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

# Hyopsodus loomisi
