---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Centrosaurus apertus
    rank: species
    sourceDatasetId: null
    name:
      zh: Centrosaurus apertus
      en: Centrosaurus apertus
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
            title: PBDB accepted record — Centrosaurus apertus
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=63911&show=parent,app,attr
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
            locator: 2026-10-02 occurrence response accepted_no txn:63911; original response record indices retained in data/sources/dinosaur-occurrence-guides-2026-10-02-records.jsonl.gz.
            accessedAt: 2026-10-02
            responseSha256: d36fbe1b0734e7ed05ad008740911640805537ad350b56759672ff67197fe533
            pbdbTaxonId: txn:63911
            selectedOccurrenceIds:
              - occ:139251
              - occ:150310
              - occ:220010
              - occ:221281
              - occ:534972
              - occ:564424
              - occ:564550
              - occ:564555
              - occ:564557
              - occ:564567
              - occ:565097
              - occ:565099
              - occ:565106
              - occ:565132
              - occ:565157
              - occ:565499
              - occ:565500
              - occ:565517
              - occ:613059
              - occ:613612
              - occ:613645
              - occ:613646
              - occ:613656
              - occ:613658
              - occ:613660
              - occ:613683
              - occ:613684
              - occ:613688
              - occ:613689
              - occ:613690
              - occ:613691
              - occ:613692
              - occ:613693
              - occ:692610
              - occ:703167
              - occ:1373099
              - occ:1390622
              - occ:1391270
              - occ:1571238
              - occ:2056463
              - occ:2056479
              - occ:2056480
            selectedCollectionIds:
              - col:11894
              - col:13340
              - col:22657
              - col:22659
              - col:55352
              - col:58910
              - col:58945
              - col:58950
              - col:58952
              - col:58962
              - col:59016
              - col:59018
              - col:59025
              - col:59039
              - col:59046
              - col:59109
              - col:59110
              - col:59118
              - col:65827
              - col:65895
              - col:65901
              - col:65903
              - col:65904
              - col:65906
              - col:65908
              - col:65924
              - col:65925
              - col:65926
              - col:65927
              - col:65928
              - col:65929
              - col:65931
              - col:65932
              - col:74657
              - col:75476
              - col:191270
              - col:64427
              - col:221937
              - col:277735
              - col:277745
              - col:277746
            sourceReferenceIds:
              - ref:16964
              - ref:5980
              - ref:14847
              - ref:18556
              - ref:16982
              - ref:17197
              - ref:62887
              - ref:18595
              - ref:19374
              - ref:18896
              - ref:26153
              - ref:13668
              - ref:25127
              - ref:12314
              - ref:77894
              - ref:94161
              - ref:94160
            originalIdentificationMappings:
              - occurrenceId: occ:150310
                originalIdentifiedName: Monoclonius cutleri n. sp.
                acceptedName: Centrosaurus apertus
                difference: null
              - occurrenceId: occ:564567
                originalIdentifiedName: Monoclonius flexus n. sp.
                acceptedName: Centrosaurus apertus
                difference: null
              - occurrenceId: occ:565106
                originalIdentifiedName: Centrosaurus longirostris n. sp.
                acceptedName: Centrosaurus apertus
                difference: null
              - occurrenceId: occ:692610
                originalIdentifiedName: Centrosaurus apertus n. gen. n. sp.
                acceptedName: Centrosaurus apertus
                difference: null
              - occurrenceId: occ:1373099
                originalIdentifiedName: Monoclonius dawsoni n. sp.
                acceptedName: Centrosaurus apertus
                difference: null
              - occurrenceId: occ:1390622
                originalIdentifiedName: Monoclonius flexus
                acceptedName: Centrosaurus apertus
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

# Centrosaurus apertus
