---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Troodon formosus
    rank: species
    sourceDatasetId: null
    name:
      zh: Troodon formosus
      en: Troodon formosus
    reviewStatus: source-linked
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
            title: PBDB accepted record — Troodon formosus
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=54818&show=parent,app,attr
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
            locator: 2026-10-02 occurrence response accepted_no txn:54818; original response record indices retained in data/sources/dinosaur-occurrence-guides-2026-10-02-records.jsonl.gz.
            accessedAt: 2026-10-02
            responseSha256: d36fbe1b0734e7ed05ad008740911640805537ad350b56759672ff67197fe533
            pbdbTaxonId: txn:54818
            selectedOccurrenceIds:
              - occ:220099
              - occ:248043
              - occ:248062
              - occ:280572
              - occ:362356
              - occ:362397
              - occ:393104
              - occ:459343
              - occ:459583
              - occ:462939
              - occ:463922
              - occ:464636
              - occ:464677
              - occ:464757
              - occ:464795
              - occ:468942
              - occ:479409
              - occ:479510
              - occ:479588
              - occ:479623
              - occ:479653
              - occ:479678
              - occ:479776
              - occ:479802
              - occ:480297
              - occ:501544
              - occ:501569
              - occ:508631
              - occ:513163
              - occ:513166
              - occ:513168
              - occ:537896
              - occ:562948
              - occ:584211
              - occ:604161
              - occ:604164
              - occ:604165
              - occ:647667
              - occ:700786
              - occ:700839
              - occ:700854
              - occ:702717
              - occ:702745
              - occ:811327
              - occ:880486
              - occ:881978
              - occ:1181724
              - occ:1181725
              - occ:1355319
            selectedCollectionIds:
              - col:22689
              - col:14462
              - col:14437
              - col:13281
              - col:34307
              - col:34309
              - col:22659
              - col:45240
              - col:45264
              - col:45671
              - col:45821
              - col:45892
              - col:45893
              - col:45897
              - col:45898
              - col:14446
              - col:47784
              - col:47795
              - col:47807
              - col:47809
              - col:47811
              - col:47812
              - col:22698
              - col:22695
              - col:22697
              - col:14490
              - col:50907
              - col:14457
              - col:51890
              - col:51892
              - col:51893
              - col:52991
              - col:58808
              - col:61470
              - col:64324
              - col:64325
              - col:64326
              - col:69213
              - col:14543
              - col:14542
              - col:75298
              - col:75435
              - col:75442
              - col:88975
              - col:14453
              - col:51889
              - col:76030
              - col:53050
              - col:184041
            sourceReferenceIds:
              - ref:5724
              - ref:13591
              - ref:13752
              - ref:7406
              - ref:9017
              - ref:10086
              - ref:5929
              - ref:11964
              - ref:3008
              - ref:13817
              - ref:48570
              - ref:62454
              - ref:9254
              - ref:13002
              - ref:2236
              - ref:29821
              - ref:33367
              - ref:33795
              - ref:13889
            originalIdentificationMappings:
              - occurrenceId: occ:647667
                originalIdentifiedName: Troodon formosus n. gen. n. sp.
                acceptedName: Troodon formosus
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

# Troodon formosus
