---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Compsemys victa
    rank: species
    sourceDatasetId: null
    name:
      zh: Compsemys victa
      en: Compsemys victa
    checkedAt: 2026-10-02
    sections:
      - topic: overview
        sourceIds:
          - pbdbPantestudinesTaxonomy20261002
          - pbdbPantestudinesOccurrences20261002
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
          - pbdbPantestudinesOccurrences20261002
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
          - pbdbPantestudinesOccurrences20261002
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
          - pbdbPantestudinesOccurrences20261002
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
          - pbdbPantestudinesOccurrences20261002
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
        - referenceId: ref-ca0a2dd7-4ca6-470e-bc1d-9aba950cee4c
          metadataVariant: 0
          sourceKey: pbdbPantestudinesTaxonomy20261002
          usage:
            title: PBDB accepted record — Compsemys victa
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=63644&show=parent,app,attr
            locator: Fixed dated accepted species OID and current same-name accepted hierarchy; PBDB ancestry remains separate from COL.
          originalFields:
            - id
            - title
            - url
            - version
            - license
            - locator
        - referenceId: ref-ca0a2dd7-4ca6-470e-bc1d-9aba950cee4c
          metadataVariant: 0
          sourceKey: pbdbPantestudinesOccurrences20261002
          usage:
            locator: 2026-10-02 occurrence response accepted_no txn:63644; original response record indices retained in data/sources/pantestudines-occurrence-guides-2026-10-02-records.jsonl.gz.
            accessedAt: 2026-10-02
            responseSha256: 420dc1c50b596ab358c29c338c87a9400512fd005c369ade614416e403aeff56
            pbdbTaxonId: txn:63644
            selectedOccurrenceIds:
              - occ:149320
              - occ:248585
              - occ:248599
              - occ:287912
              - occ:291014
              - occ:382976
              - occ:457924
              - occ:458010
              - occ:458036
              - occ:458048
              - occ:458061
              - occ:458075
              - occ:458100
              - occ:458124
              - occ:458148
              - occ:458165
              - occ:458223
              - occ:458245
              - occ:458278
              - occ:459854
              - occ:459985
              - occ:460425
              - occ:460468
              - occ:460511
              - occ:464136
              - occ:464363
              - occ:474104
              - occ:478792
              - occ:483548
              - occ:483564
              - occ:483606
              - occ:483632
              - occ:487823
              - occ:487858
              - occ:487923
              - occ:487937
              - occ:487975
              - occ:488063
              - occ:488125
              - occ:488152
              - occ:488160
              - occ:488202
              - occ:488235
              - occ:488384
              - occ:488402
              - occ:488866
              - occ:489003
              - occ:520971
              - occ:521007
              - occ:521046
              - occ:521052
              - occ:521060
              - occ:521067
              - occ:521074
              - occ:521084
              - occ:521090
              - occ:521093
              - occ:521328
              - occ:632641
              - occ:649702
              - occ:650709
              - occ:700732
              - occ:700833
              - occ:700848
              - occ:702684
              - occ:820642
              - occ:820648
              - occ:820654
              - occ:820681
              - occ:820685
              - occ:820689
              - occ:898204
              - occ:1042247
              - occ:1045395
              - occ:1045396
              - occ:1045397
              - occ:1045398
              - occ:1045399
              - occ:1045400
              - occ:1093325
              - occ:1093346
              - occ:1093368
              - occ:1093383
              - occ:1093448
              - occ:1093476
              - occ:1093495
              - occ:1093518
              - occ:1093541
              - occ:1316748
              - occ:1316766
              - occ:1316775
              - occ:1316783
              - occ:1316793
              - occ:1316799
              - occ:1316810
              - occ:1317182
              - occ:1317193
              - occ:1317202
              - occ:1317215
              - occ:1317217
              - occ:1317219
              - occ:1317222
              - occ:1374746
              - occ:1374752
              - occ:1374755
              - occ:1374786
              - occ:1374788
              - occ:1374803
              - occ:1374818
              - occ:1374828
              - occ:1374835
              - occ:1380740
              - occ:1420279
              - occ:1554587
            selectedCollectionIds:
              - col:13142
              - col:24257
              - col:24259
              - col:14557
              - col:14640
              - col:36449
              - col:45114
              - col:45119
              - col:45111
              - col:45110
              - col:45109
              - col:45133
              - col:45136
              - col:45099
              - col:45128
              - col:14610
              - col:45143
              - col:45144
              - col:45145
              - col:45299
              - col:45313
              - col:45380
              - col:45388
              - col:45391
              - col:14585
              - col:14514
              - col:47034
              - col:47626
              - col:14508
              - col:14512
              - col:14513
              - col:14505
              - col:14519
              - col:14525
              - col:14535
              - col:14536
              - col:14533
              - col:14549
              - col:14560
              - col:14563
              - col:14566
              - col:14568
              - col:14570
              - col:14654
              - col:14653
              - col:14613
              - col:14580
              - col:14805
              - col:14620
              - col:14670
              - col:14830
              - col:14692
              - col:14736
              - col:14739
              - col:14748
              - col:14883
              - col:14790
              - col:14766
              - col:14658
              - col:14874
              - col:70343
              - col:75287
              - col:14542
              - col:75298
              - col:75429
              - col:45381
              - col:45135
              - col:45134
              - col:45118
              - col:45117
              - col:45312
              - col:99821
              - col:127733
              - col:128449
              - col:128450
              - col:128451
              - col:128452
              - col:128453
              - col:137601
              - col:137705
              - col:137706
              - col:137707
              - col:137715
              - col:137718
              - col:137720
              - col:137724
              - col:137728
              - col:96082
              - col:176740
              - col:176744
              - col:118484
              - col:176747
              - col:176750
              - col:176755
              - col:176847
              - col:176852
              - col:176859
              - col:176863
              - col:176864
              - col:176865
              - col:176868
              - col:187664
              - col:187668
              - col:187669
              - col:187679
              - col:187681
              - col:187695
              - col:187705
              - col:187713
              - col:187715
              - col:189003
              - col:197024
              - col:48235
            sourceReferenceIds:
              - ref:4381
              - ref:694
              - ref:774
              - ref:717
              - ref:69447
              - ref:11749
              - ref:803
              - ref:1129
              - ref:80623
              - ref:12772
              - ref:13103
              - ref:829
              - ref:1921
              - ref:2930
              - ref:3489
              - ref:19561
              - ref:23573
              - ref:2236
              - ref:34317
              - ref:41721
              - ref:704
              - ref:42536
              - ref:26071
              - ref:63006
              - ref:63480
              - ref:67117
              - ref:70995
            originalIdentificationMappings:
              - occurrenceId: occ:650709
                originalIdentifiedName: Compsemys victus
                acceptedName: Compsemys victa
                difference: corrected to
              - occurrenceId: occ:700732
                originalIdentifiedName: Compsemys victus
                acceptedName: Compsemys victa
                difference: corrected to
              - occurrenceId: occ:700833
                originalIdentifiedName: Compsemys victus
                acceptedName: Compsemys victa
                difference: corrected to
              - occurrenceId: occ:700848
                originalIdentifiedName: Compsemys victus
                acceptedName: Compsemys victa
                difference: corrected to
              - occurrenceId: occ:702684
                originalIdentifiedName: Compsemys victus
                acceptedName: Compsemys victa
                difference: corrected to
              - occurrenceId: occ:1042247
                originalIdentifiedName: Compsemys victa n. gen. n. sp.
                acceptedName: Compsemys victa
                difference: null
              - occurrenceId: occ:1045395
                originalIdentifiedName: Compsemys puercensis n. sp.
                acceptedName: Compsemys victa
                difference: null
              - occurrenceId: occ:1045397
                originalIdentifiedName: Compsemys torrejonensis n. sp.
                acceptedName: Compsemys victa
                difference: null
              - occurrenceId: occ:1045399
                originalIdentifiedName: Compsemys vafer n. sp.
                acceptedName: Compsemys victa
                difference: null
              - occurrenceId: occ:1045400
                originalIdentifiedName: Compsemys parva n. sp.
                acceptedName: Compsemys victa
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

# Compsemys victa
