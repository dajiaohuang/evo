---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Saurornitholestes langstoni
    rank: species
    sourceDatasetId: null
    name:
      zh: Saurornitholestes langstoni
      en: Saurornitholestes langstoni
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
            title: PBDB accepted record — Saurornitholestes langstoni
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=54556&show=parent,app,attr
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
            locator: 2026-10-02 occurrence response accepted_no txn:54556; original response record indices retained in data/sources/dinosaur-occurrence-guides-2026-10-02-records.jsonl.gz.
            accessedAt: 2026-10-02
            responseSha256: d36fbe1b0734e7ed05ad008740911640805537ad350b56759672ff67197fe533
            pbdbTaxonId: txn:54556
            selectedOccurrenceIds:
              - occ:248042
              - occ:248061
              - occ:362179
              - occ:362355
              - occ:362396
              - occ:362681
              - occ:393103
              - occ:459317
              - occ:459341
              - occ:459502
              - occ:459526
              - occ:459554
              - occ:459581
              - occ:461731
              - occ:461777
              - occ:461841
              - occ:461878
              - occ:461915
              - occ:461952
              - occ:462906
              - occ:462938
              - occ:462975
              - occ:463819
              - occ:463881
              - occ:463921
              - occ:463954
              - occ:464635
              - occ:464676
              - occ:464710
              - occ:464756
              - occ:464794
              - occ:464827
              - occ:479408
              - occ:479456
              - occ:479483
              - occ:479508
              - occ:479587
              - occ:479622
              - occ:479652
              - occ:479677
              - occ:479711
              - occ:479740
              - occ:479774
              - occ:479800
              - occ:480295
              - occ:480296
              - occ:501543
              - occ:508630
              - occ:508636
              - occ:513165
              - occ:565503
              - occ:565603
              - occ:565877
              - occ:584213
              - occ:584305
              - occ:628141
              - occ:790049
              - occ:851691
              - occ:1181627
              - occ:1181628
              - occ:1181629
              - occ:1181630
              - occ:1181773
              - occ:1181804
              - occ:1181807
              - occ:1181810
              - occ:1443742
              - occ:1443828
              - occ:1555690
            selectedCollectionIds:
              - col:14462
              - col:14437
              - col:34305
              - col:34307
              - col:34309
              - col:34315
              - col:22659
              - col:45238
              - col:45240
              - col:45260
              - col:45261
              - col:45262
              - col:45264
              - col:45560
              - col:45561
              - col:45564
              - col:45565
              - col:45566
              - col:45567
              - col:45670
              - col:45671
              - col:45674
              - col:45819
              - col:45820
              - col:45821
              - col:45822
              - col:45892
              - col:45893
              - col:45894
              - col:45897
              - col:45898
              - col:45899
              - col:47784
              - col:47793
              - col:47794
              - col:47795
              - col:47807
              - col:47809
              - col:47811
              - col:47812
              - col:47814
              - col:47816
              - col:22698
              - col:22695
              - col:22697
              - col:14490
              - col:14457
              - col:14434
              - col:51891
              - col:59113
              - col:59139
              - col:59224
              - col:61471
              - col:61493
              - col:85498
              - col:94765
              - col:53050
              - col:53049
              - col:152258
              - col:152259
              - col:152279
              - col:76752
              - col:46958
              - col:180790
              - col:79363
              - col:219534
            sourceReferenceIds:
              - ref:13591
              - ref:13752
              - ref:9017
              - ref:10086
              - ref:5929
              - ref:11964
              - ref:76402
              - ref:13817
              - ref:17733
              - ref:16964
              - ref:15355
              - ref:28887
              - ref:32280
              - ref:48570
              - ref:68976
              - ref:77956
            originalIdentificationMappings:
              - occurrenceId: occ:565503
                originalIdentifiedName: Saurornitholestes langstoni n. gen. n. sp.
                acceptedName: Saurornitholestes langstoni
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

# Saurornitholestes langstoni
