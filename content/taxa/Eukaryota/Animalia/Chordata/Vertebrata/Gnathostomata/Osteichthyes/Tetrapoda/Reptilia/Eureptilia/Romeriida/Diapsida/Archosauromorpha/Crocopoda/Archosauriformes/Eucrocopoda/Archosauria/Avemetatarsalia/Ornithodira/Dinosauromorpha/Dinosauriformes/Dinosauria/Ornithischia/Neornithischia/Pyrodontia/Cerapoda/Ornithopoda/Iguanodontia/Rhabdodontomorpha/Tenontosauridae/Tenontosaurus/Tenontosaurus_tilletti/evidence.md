---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Tenontosaurus tilletti
    rank: species
    sourceDatasetId: null
    name:
      zh: Tenontosaurus tilletti
      en: Tenontosaurus tilletti
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
            title: PBDB accepted record — Tenontosaurus tilletti
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=52887&show=parent,app,attr
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
            locator: 2026-10-02 occurrence response accepted_no txn:52887; original response record indices retained in data/sources/dinosaur-occurrence-guides-2026-10-02-records.jsonl.gz.
            accessedAt: 2026-10-02
            responseSha256: d36fbe1b0734e7ed05ad008740911640805537ad350b56759672ff67197fe533
            pbdbTaxonId: txn:52887
            selectedOccurrenceIds:
              - occ:259321
              - occ:259322
              - occ:477946
              - occ:498253
              - occ:498254
              - occ:498261
              - occ:498265
              - occ:498872
              - occ:498876
              - occ:498877
              - occ:498884
              - occ:498886
              - occ:498888
              - occ:498895
              - occ:498898
              - occ:498901
              - occ:498902
              - occ:498923
              - occ:498932
              - occ:498937
              - occ:499153
              - occ:499155
              - occ:499156
              - occ:499158
              - occ:499161
              - occ:499168
              - occ:499170
              - occ:499172
              - occ:499173
              - occ:499177
              - occ:499598
              - occ:499599
              - occ:499606
              - occ:499611
              - occ:499622
              - occ:499623
              - occ:499656
              - occ:499679
              - occ:499680
              - occ:499687
              - occ:499689
              - occ:499695
              - occ:499702
              - occ:499743
              - occ:499856
              - occ:499857
              - occ:517457
              - occ:908397
              - occ:1092926
              - occ:1093087
              - occ:1093128
              - occ:1583990
              - occ:1621762
            selectedCollectionIds:
              - col:25076
              - col:25077
              - col:47346
              - col:50347
              - col:50348
              - col:50354
              - col:50355
              - col:50474
              - col:50477
              - col:50478
              - col:50481
              - col:50482
              - col:50483
              - col:50488
              - col:50490
              - col:50491
              - col:50492
              - col:50498
              - col:50500
              - col:50503
              - col:50525
              - col:50526
              - col:50527
              - col:50529
              - col:50531
              - col:50538
              - col:50539
              - col:50540
              - col:50541
              - col:50543
              - col:50684
              - col:50685
              - col:50686
              - col:50687
              - col:50690
              - col:50691
              - col:50696
              - col:50701
              - col:50702
              - col:50706
              - col:50707
              - col:50710
              - col:50713
              - col:50718
              - col:50719
              - col:50720
              - col:52436
              - col:102299
              - col:137567
              - col:137607
              - col:137617
              - col:24178
              - col:229407
            sourceReferenceIds:
              - ref:13525
              - ref:14102
              - ref:34750
              - ref:44000
              - ref:89147
              - ref:83957
            originalIdentificationMappings:
              - occurrenceId: occ:477946
                originalIdentifiedName: Tenontosaurus tilletti n. gen. n. sp.
                acceptedName: Tenontosaurus tilletti
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

# Tenontosaurus tilletti
