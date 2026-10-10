---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Pinguinus impennis
    rank: species
    sourceDatasetId: null
    name:
      zh: Pinguinus impennis
      en: Pinguinus impennis
    checkedAt: 2026-10-02
    sections:
      - topic: overview
        sourceIds:
          - taxonomy
          - pbdbDinosaurOccurrences20261002
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
          - pbdbDinosaurOccurrences20261002
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
          - pbdbDinosaurOccurrences20261002
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
          - pbdbDinosaurOccurrences20261002
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
          - pbdbDinosaurOccurrences20261002
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
        - referenceId: ref-903cb226-2fd6-4771-8ea6-30c1f4d5f36d
          metadataVariant: 0
          sourceKey: taxonomy
          usage:
            title: PBDB accepted record — Pinguinus impennis
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=208986&show=parent,app,attr
            locator: Fixed dated accepted species OID and current same-name accepted hierarchy; PBDB ancestry remains separate from COL.
          originalFields:
            - id
            - title
            - url
            - version
            - license
            - locator
        - referenceId: ref-903cb226-2fd6-4771-8ea6-30c1f4d5f36d
          metadataVariant: 0
          sourceKey: pbdbDinosaurOccurrences20261002
          usage:
            locator: 2026-10-02 occurrence response accepted_no txn:208986; original response record indices retained in data/sources/dinosaur-occurrence-guides-2026-10-02-records.jsonl.gz.
            accessedAt: 2026-10-02
            responseSha256: d36fbe1b0734e7ed05ad008740911640805537ad350b56759672ff67197fe533
            pbdbTaxonId: txn:208986
            selectedOccurrenceIds:
              - occ:559522
              - occ:681334
              - occ:683575
              - occ:1002832
              - occ:1003009
              - occ:1003018
              - occ:1003019
              - occ:1003020
              - occ:1003022
              - occ:1003023
              - occ:1003025
              - occ:1003051
              - occ:1003060
              - occ:1003061
              - occ:1003062
              - occ:1003063
              - occ:1003078
              - occ:1004149
              - occ:1004150
              - occ:1004151
              - occ:1004152
              - occ:1004153
              - occ:1004154
              - occ:1004155
              - occ:1004156
              - occ:1004157
              - occ:1004158
              - occ:1004159
              - occ:1004160
              - occ:1004161
              - occ:1004162
              - occ:1004163
              - occ:1004164
              - occ:1004165
              - occ:1004166
              - occ:1004167
              - occ:1004168
              - occ:1004169
              - occ:1004186
              - occ:1004573
              - occ:1004574
              - occ:1004579
              - occ:1004581
              - occ:1004584
              - occ:1004585
              - occ:1004586
              - occ:1004587
              - occ:1004588
              - occ:1004589
              - occ:1004590
              - occ:1004591
              - occ:1005696
              - occ:1005697
              - occ:1005698
              - occ:1005699
              - occ:1005700
              - occ:1005701
              - occ:1005702
              - occ:1005703
              - occ:1005705
              - occ:1005706
              - occ:1005707
              - occ:1005708
              - occ:1005709
              - occ:1005710
              - occ:1005711
              - occ:1005712
              - occ:1005713
              - occ:1006590
              - occ:1006598
              - occ:1006599
              - occ:1006628
              - occ:1006630
              - occ:1006631
              - occ:1006632
              - occ:1006633
              - occ:1006634
              - occ:1006635
              - occ:1006636
              - occ:1006637
              - occ:1006638
              - occ:1006639
              - occ:1006640
              - occ:1006678
              - occ:1006679
              - occ:1006680
              - occ:1006681
              - occ:1006682
              - occ:1006683
              - occ:1006684
              - occ:1006685
              - occ:1006686
              - occ:1006687
              - occ:1006689
              - occ:1006690
              - occ:1006692
              - occ:1006694
              - occ:1006696
              - occ:1006697
              - occ:1006698
              - occ:1006699
              - occ:1006700
              - occ:1006701
              - occ:1006702
              - occ:1006703
              - occ:1006704
              - occ:1006705
              - occ:1006706
              - occ:1006707
              - occ:1006708
              - occ:1006709
              - occ:1006710
              - occ:1007045
              - occ:1007048
              - occ:1007052
              - occ:1007060
              - occ:1007063
              - occ:1007064
              - occ:1007067
              - occ:1024148
              - occ:1315372
              - occ:1411798
              - occ:1411817
              - occ:1424219
              - occ:1541804
              - occ:2045449
            selectedCollectionIds:
              - col:57706
              - col:73485
              - col:73689
              - col:122077
              - col:122099
              - col:122100
              - col:122101
              - col:122102
              - col:122104
              - col:122105
              - col:122107
              - col:122110
              - col:122111
              - col:122112
              - col:122113
              - col:122114
              - col:122115
              - col:122249
              - col:122250
              - col:122251
              - col:122252
              - col:122253
              - col:122254
              - col:122255
              - col:122256
              - col:122257
              - col:122258
              - col:122259
              - col:122260
              - col:122261
              - col:122262
              - col:122263
              - col:122264
              - col:122265
              - col:122266
              - col:122267
              - col:122268
              - col:122269
              - col:122270
              - col:122076
              - col:122303
              - col:122304
              - col:122305
              - col:122307
              - col:71473
              - col:90037
              - col:122308
              - col:122309
              - col:122310
              - col:122311
              - col:122312
              - col:122438
              - col:88532
              - col:122439
              - col:122440
              - col:122441
              - col:122442
              - col:122443
              - col:122444
              - col:122445
              - col:122446
              - col:122447
              - col:122448
              - col:122449
              - col:122450
              - col:122451
              - col:122452
              - col:122453
              - col:122621
              - col:122625
              - col:122626
              - col:122630
              - col:122631
              - col:122632
              - col:122633
              - col:122634
              - col:122635
              - col:122636
              - col:122637
              - col:122638
              - col:122639
              - col:122640
              - col:122641
              - col:122665
              - col:122666
              - col:122667
              - col:122668
              - col:122669
              - col:122671
              - col:122672
              - col:122674
              - col:122675
              - col:122677
              - col:122678
              - col:122679
              - col:122681
              - col:122684
              - col:122685
              - col:122686
              - col:122687
              - col:122688
              - col:122689
              - col:122690
              - col:122691
              - col:122692
              - col:122693
              - col:122694
              - col:122695
              - col:122696
              - col:122697
              - col:122698
              - col:122699
              - col:122802
              - col:122805
              - col:122806
              - col:122810
              - col:122815
              - col:122819
              - col:122826
              - col:125440
              - col:176524
              - col:195048
              - col:195049
              - col:197768
              - col:197957
              - col:276276
            sourceReferenceIds:
              - ref:15525
              - ref:16867
              - ref:24705
              - ref:38865
              - ref:38877
              - ref:38878
              - ref:38884
              - ref:38921
              - ref:38922
              - ref:38864
              - ref:38926
              - ref:38927
              - ref:38929
              - ref:38931
              - ref:39012
              - ref:39101
              - ref:39151
              - ref:40735
              - ref:58111
              - ref:66317
              - ref:67428
              - ref:75040
              - ref:93653
            originalIdentificationMappings:
              - occurrenceId: occ:1002832
                originalIdentifiedName: Plautus impennis
                acceptedName: Pinguinus impennis
                difference: recombined as
              - occurrenceId: occ:1005696
                originalIdentifiedName: Alca impennis
                acceptedName: Pinguinus impennis
                difference: recombined as
              - occurrenceId: occ:1005697
                originalIdentifiedName: Alca impennis
                acceptedName: Pinguinus impennis
                difference: recombined as
              - occurrenceId: occ:1005698
                originalIdentifiedName: Alca impennis
                acceptedName: Pinguinus impennis
                difference: recombined as
              - occurrenceId: occ:1005699
                originalIdentifiedName: Alca impennis
                acceptedName: Pinguinus impennis
                difference: recombined as
              - occurrenceId: occ:1005700
                originalIdentifiedName: Alca impennis
                acceptedName: Pinguinus impennis
                difference: recombined as
              - occurrenceId: occ:1005701
                originalIdentifiedName: Alca impennis
                acceptedName: Pinguinus impennis
                difference: recombined as
              - occurrenceId: occ:1005702
                originalIdentifiedName: Alca impennis
                acceptedName: Pinguinus impennis
                difference: recombined as
              - occurrenceId: occ:1005703
                originalIdentifiedName: Alca impennis
                acceptedName: Pinguinus impennis
                difference: recombined as
              - occurrenceId: occ:1005705
                originalIdentifiedName: Alca impennis
                acceptedName: Pinguinus impennis
                difference: recombined as
              - occurrenceId: occ:1005706
                originalIdentifiedName: Alca impennis
                acceptedName: Pinguinus impennis
                difference: recombined as
              - occurrenceId: occ:1005707
                originalIdentifiedName: Alca impennis
                acceptedName: Pinguinus impennis
                difference: recombined as
              - occurrenceId: occ:1005708
                originalIdentifiedName: Alca impennis
                acceptedName: Pinguinus impennis
                difference: recombined as
              - occurrenceId: occ:1005709
                originalIdentifiedName: Alca impennis
                acceptedName: Pinguinus impennis
                difference: recombined as
              - occurrenceId: occ:1005710
                originalIdentifiedName: Alca impennis
                acceptedName: Pinguinus impennis
                difference: recombined as
              - occurrenceId: occ:1005711
                originalIdentifiedName: Alca impennis
                acceptedName: Pinguinus impennis
                difference: recombined as
              - occurrenceId: occ:1005712
                originalIdentifiedName: Alca impennis
                acceptedName: Pinguinus impennis
                difference: recombined as
              - occurrenceId: occ:1005713
                originalIdentifiedName: Alca impennis
                acceptedName: Pinguinus impennis
                difference: recombined as
              - occurrenceId: occ:1006590
                originalIdentifiedName: Alca impennis
                acceptedName: Pinguinus impennis
                difference: recombined as
              - occurrenceId: occ:1006598
                originalIdentifiedName: Alca impennis
                acceptedName: Pinguinus impennis
                difference: recombined as
              - occurrenceId: occ:1006599
                originalIdentifiedName: Alca impennis
                acceptedName: Pinguinus impennis
                difference: recombined as
              - occurrenceId: occ:1006628
                originalIdentifiedName: Alca impennis
                acceptedName: Pinguinus impennis
                difference: recombined as
              - occurrenceId: occ:1006630
                originalIdentifiedName: Alca impennis
                acceptedName: Pinguinus impennis
                difference: recombined as
              - occurrenceId: occ:1006631
                originalIdentifiedName: Alca impennis
                acceptedName: Pinguinus impennis
                difference: recombined as
              - occurrenceId: occ:1006632
                originalIdentifiedName: Alca impennis
                acceptedName: Pinguinus impennis
                difference: recombined as
              - occurrenceId: occ:1006633
                originalIdentifiedName: Alca impennis
                acceptedName: Pinguinus impennis
                difference: recombined as
              - occurrenceId: occ:1006634
                originalIdentifiedName: Alca impennis
                acceptedName: Pinguinus impennis
                difference: recombined as
              - occurrenceId: occ:1006635
                originalIdentifiedName: Alca impennis
                acceptedName: Pinguinus impennis
                difference: recombined as
              - occurrenceId: occ:1006636
                originalIdentifiedName: Alca impennis
                acceptedName: Pinguinus impennis
                difference: recombined as
              - occurrenceId: occ:1006637
                originalIdentifiedName: Alca impennis
                acceptedName: Pinguinus impennis
                difference: recombined as
              - occurrenceId: occ:1006638
                originalIdentifiedName: Alca impennis
                acceptedName: Pinguinus impennis
                difference: recombined as
              - occurrenceId: occ:1006639
                originalIdentifiedName: Alca impennis
                acceptedName: Pinguinus impennis
                difference: recombined as
              - occurrenceId: occ:1006640
                originalIdentifiedName: Alca impennis
                acceptedName: Pinguinus impennis
                difference: recombined as
              - occurrenceId: occ:1006678
                originalIdentifiedName: Alca impennis
                acceptedName: Pinguinus impennis
                difference: recombined as
              - occurrenceId: occ:1006679
                originalIdentifiedName: Alca impennis
                acceptedName: Pinguinus impennis
                difference: recombined as
              - occurrenceId: occ:1006680
                originalIdentifiedName: Alca impennis
                acceptedName: Pinguinus impennis
                difference: recombined as
              - occurrenceId: occ:1006681
                originalIdentifiedName: Alca impennis
                acceptedName: Pinguinus impennis
                difference: recombined as
              - occurrenceId: occ:1006682
                originalIdentifiedName: Alca impennis
                acceptedName: Pinguinus impennis
                difference: recombined as
              - occurrenceId: occ:1006683
                originalIdentifiedName: Alca impennis
                acceptedName: Pinguinus impennis
                difference: recombined as
              - occurrenceId: occ:1006684
                originalIdentifiedName: Alca impennis
                acceptedName: Pinguinus impennis
                difference: recombined as
              - occurrenceId: occ:1006685
                originalIdentifiedName: Alca impennis
                acceptedName: Pinguinus impennis
                difference: recombined as
              - occurrenceId: occ:1006686
                originalIdentifiedName: Alca impennis
                acceptedName: Pinguinus impennis
                difference: recombined as
              - occurrenceId: occ:1006687
                originalIdentifiedName: Alca impennis
                acceptedName: Pinguinus impennis
                difference: recombined as
              - occurrenceId: occ:1006689
                originalIdentifiedName: Alca impennis
                acceptedName: Pinguinus impennis
                difference: recombined as
              - occurrenceId: occ:1006690
                originalIdentifiedName: Alca impennis
                acceptedName: Pinguinus impennis
                difference: recombined as
              - occurrenceId: occ:1006692
                originalIdentifiedName: Alca impennis
                acceptedName: Pinguinus impennis
                difference: recombined as
              - occurrenceId: occ:1006694
                originalIdentifiedName: Alca impennis
                acceptedName: Pinguinus impennis
                difference: recombined as
              - occurrenceId: occ:1006696
                originalIdentifiedName: Alca impennis
                acceptedName: Pinguinus impennis
                difference: recombined as
              - occurrenceId: occ:1006697
                originalIdentifiedName: Alca impennis
                acceptedName: Pinguinus impennis
                difference: recombined as
              - occurrenceId: occ:1006698
                originalIdentifiedName: Alca impennis
                acceptedName: Pinguinus impennis
                difference: recombined as
              - occurrenceId: occ:1006699
                originalIdentifiedName: Alca impennis
                acceptedName: Pinguinus impennis
                difference: recombined as
              - occurrenceId: occ:1006700
                originalIdentifiedName: Alca impennis
                acceptedName: Pinguinus impennis
                difference: recombined as
              - occurrenceId: occ:1006701
                originalIdentifiedName: Alca impennis
                acceptedName: Pinguinus impennis
                difference: recombined as
              - occurrenceId: occ:1006702
                originalIdentifiedName: Alca impennis
                acceptedName: Pinguinus impennis
                difference: recombined as
              - occurrenceId: occ:1006703
                originalIdentifiedName: Alca impennis
                acceptedName: Pinguinus impennis
                difference: recombined as
              - occurrenceId: occ:1006704
                originalIdentifiedName: Alca impennis
                acceptedName: Pinguinus impennis
                difference: recombined as
              - occurrenceId: occ:1006705
                originalIdentifiedName: Alca impennis
                acceptedName: Pinguinus impennis
                difference: recombined as
              - occurrenceId: occ:1006706
                originalIdentifiedName: Alca impennis
                acceptedName: Pinguinus impennis
                difference: recombined as
              - occurrenceId: occ:1006707
                originalIdentifiedName: Alca impennis
                acceptedName: Pinguinus impennis
                difference: recombined as
              - occurrenceId: occ:1006708
                originalIdentifiedName: Alca impennis
                acceptedName: Pinguinus impennis
                difference: recombined as
              - occurrenceId: occ:1006709
                originalIdentifiedName: Alca impennis
                acceptedName: Pinguinus impennis
                difference: recombined as
              - occurrenceId: occ:1006710
                originalIdentifiedName: Alca impennis
                acceptedName: Pinguinus impennis
                difference: recombined as
              - occurrenceId: occ:1315372
                originalIdentifiedName: Alca impennis
                acceptedName: Pinguinus impennis
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

# Pinguinus impennis
