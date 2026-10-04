---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Homogalax protapirinus
    rank: species
    sourceDatasetId: null
    name:
      zh: Homogalax protapirinus
      en: Homogalax protapirinus
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
            title: PBDB accepted record — Homogalax protapirinus
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=51978&show=parent,app,attr
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
            locator: 2026-10-02 occurrence response accepted_no txn:51978; original response record indices retained in data/sources/mammalia-occurrence-guides-2026-10-02-records.jsonl.gz.
            accessedAt: 2026-10-02
            responseSha256: 368dafda8e7422b86d7992dc15a10defe699a9db146057d35e01a82c1c54bfa2
            pbdbTaxonId: txn:51978
            selectedOccurrenceIds:
              - occ:167973
              - occ:167979
              - occ:167983
              - occ:167991
              - occ:168817
              - occ:168841
              - occ:168845
              - occ:168854
              - occ:171313
              - occ:171356
              - occ:171426
              - occ:171431
              - occ:171439
              - occ:171446
              - occ:171451
              - occ:171544
              - occ:171556
              - occ:171621
              - occ:171652
              - occ:171659
              - occ:171666
              - occ:171723
              - occ:171737
              - occ:171749
              - occ:171804
              - occ:171882
              - occ:171888
              - occ:171891
              - occ:171899
              - occ:171903
              - occ:171912
              - occ:171935
              - occ:171943
              - occ:171953
              - occ:171981
              - occ:171997
              - occ:172005
              - occ:172014
              - occ:172789
              - occ:172816
              - occ:173074
              - occ:173297
              - occ:456867
              - occ:456894
              - occ:457605
              - occ:457629
              - occ:457653
              - occ:457694
              - occ:457718
              - occ:457734
              - occ:457746
              - occ:457759
              - occ:457776
              - occ:458607
              - occ:458644
              - occ:458659
              - occ:458680
              - occ:458693
              - occ:458714
              - occ:458721
              - occ:462658
              - occ:463013
              - occ:469113
              - occ:469315
              - occ:469321
              - occ:469378
              - occ:469387
              - occ:469395
              - occ:469443
              - occ:469465
              - occ:469513
              - occ:469527
              - occ:469539
              - occ:469585
              - occ:469633
              - occ:469646
              - occ:469657
              - occ:469754
              - occ:469800
              - occ:469872
              - occ:469878
              - occ:469887
              - occ:469916
              - occ:469934
              - occ:469998
              - occ:470014
              - occ:470034
              - occ:470049
              - occ:470081
              - occ:470096
              - occ:470118
              - occ:470132
              - occ:470148
              - occ:470157
              - occ:470173
              - occ:470187
              - occ:470201
              - occ:470216
              - occ:470227
              - occ:470242
              - occ:470275
              - occ:470289
              - occ:470312
              - occ:470323
              - occ:470333
              - occ:470351
              - occ:470368
              - occ:470391
              - occ:470401
              - occ:470410
              - occ:470430
              - occ:470443
              - occ:470460
              - occ:470500
              - occ:470517
              - occ:470547
              - occ:470589
              - occ:470599
              - occ:470644
              - occ:470692
              - occ:470735
              - occ:470775
              - occ:470857
              - occ:470879
              - occ:470898
              - occ:470967
              - occ:471016
              - occ:471045
              - occ:471075
              - occ:471085
              - occ:471134
              - occ:471164
              - occ:471178
              - occ:471194
              - occ:471212
              - occ:471231
              - occ:471292
              - occ:471320
              - occ:471334
              - occ:471348
              - occ:471364
              - occ:471373
              - occ:471387
              - occ:471410
              - occ:471424
              - occ:471447
              - occ:471456
              - occ:471464
              - occ:471468
              - occ:471472
              - occ:471502
              - occ:471513
              - occ:1314858
              - occ:1314906
            selectedCollectionIds:
              - col:15273
              - col:15274
              - col:15275
              - col:15277
              - col:15468
              - col:15474
              - col:15476
              - col:15478
              - col:15728
              - col:15730
              - col:15741
              - col:15742
              - col:15743
              - col:15744
              - col:15745
              - col:15757
              - col:15758
              - col:15762
              - col:15768
              - col:15769
              - col:15770
              - col:15779
              - col:15782
              - col:15785
              - col:15790
              - col:15796
              - col:15797
              - col:15798
              - col:15799
              - col:15800
              - col:15802
              - col:15805
              - col:15806
              - col:15807
              - col:15814
              - col:15818
              - col:15819
              - col:15821
              - col:15933
              - col:15934
              - col:15994
              - col:16055
              - col:15680
              - col:15683
              - col:15687
              - col:15692
              - col:15694
              - col:15695
              - col:15697
              - col:15698
              - col:15699
              - col:15700
              - col:15701
              - col:15702
              - col:15704
              - col:15705
              - col:15706
              - col:15707
              - col:15681
              - col:15682
              - col:15592
              - col:15593
              - col:46641
              - col:46666
              - col:46667
              - col:46673
              - col:46674
              - col:46675
              - col:46682
              - col:46683
              - col:46687
              - col:46688
              - col:46689
              - col:46692
              - col:46696
              - col:46697
              - col:46698
              - col:46704
              - col:46707
              - col:46716
              - col:46717
              - col:46718
              - col:46721
              - col:46724
              - col:46730
              - col:46731
              - col:46732
              - col:46733
              - col:46735
              - col:46736
              - col:46738
              - col:46739
              - col:46740
              - col:46741
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
              - col:46758
              - col:46759
              - col:46760
              - col:46761
              - col:46762
              - col:46763
              - col:46765
              - col:46766
              - col:46767
              - col:46769
              - col:46771
              - col:46773
              - col:46777
              - col:46778
              - col:46782
              - col:46786
              - col:46789
              - col:46792
              - col:46797
              - col:46798
              - col:46800
              - col:46805
              - col:46808
              - col:46809
              - col:46810
              - col:46811
              - col:46814
              - col:46816
              - col:46817
              - col:46818
              - col:46819
              - col:46820
              - col:46825
              - col:46829
              - col:46830
              - col:46831
              - col:46832
              - col:46833
              - col:46834
              - col:46836
              - col:46837
              - col:46839
              - col:46840
              - col:46841
              - col:46842
              - col:46843
              - col:46845
              - col:46846
              - col:118482
              - col:15673
            sourceReferenceIds:
              - ref:2078
              - ref:1333
              - ref:1660
              - ref:6196
              - ref:1358
              - ref:11717
              - ref:58065
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

# Homogalax protapirinus
