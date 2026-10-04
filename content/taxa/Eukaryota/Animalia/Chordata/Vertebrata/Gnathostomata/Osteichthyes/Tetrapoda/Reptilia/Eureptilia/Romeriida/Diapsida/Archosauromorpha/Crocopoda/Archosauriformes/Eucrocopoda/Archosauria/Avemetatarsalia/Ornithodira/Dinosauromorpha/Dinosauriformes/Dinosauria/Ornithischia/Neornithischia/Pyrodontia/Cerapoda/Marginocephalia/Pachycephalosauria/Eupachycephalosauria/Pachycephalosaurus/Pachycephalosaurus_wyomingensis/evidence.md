---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Pachycephalosaurus wyomingensis
    rank: species
    sourceDatasetId: null
    name:
      zh: Pachycephalosaurus wyomingensis
      en: Pachycephalosaurus wyomingensis
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
            title: PBDB accepted record — Pachycephalosaurus wyomingensis
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=64648&show=parent,app,attr
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
            locator: 2026-10-02 occurrence response accepted_no txn:64648; original response record indices retained in data/sources/dinosaur-occurrence-guides-2026-10-02-records.jsonl.gz.
            accessedAt: 2026-10-02
            responseSha256: d36fbe1b0734e7ed05ad008740911640805537ad350b56759672ff67197fe533
            pbdbTaxonId: txn:64648
            selectedOccurrenceIds:
              - occ:147092
              - occ:478789
              - occ:478795
              - occ:478796
              - occ:487158
              - occ:487159
              - occ:487160
              - occ:487161
              - occ:487165
              - occ:488102
              - occ:488356
              - occ:491032
              - occ:514312
              - occ:519910
              - occ:565875
              - occ:606138
              - occ:606140
              - occ:627206
              - occ:700662
              - occ:700843
              - occ:702710
              - occ:828772
              - occ:1226498
              - occ:1340988
              - occ:1588498
            selectedCollectionIds:
              - col:12977
              - col:47626
              - col:47627
              - col:47628
              - col:48843
              - col:48844
              - col:48845
              - col:48846
              - col:48848
              - col:14550
              - col:14585
              - col:49539
              - col:52106
              - col:52904
              - col:59222
              - col:64644
              - col:58813
              - col:14544
              - col:14542
              - col:75432
              - col:91359
              - col:161171
              - col:152397
              - col:224484
            sourceReferenceIds:
              - ref:4306
              - ref:12772
              - ref:12773
              - ref:17021
              - ref:13015
              - ref:13103
              - ref:93074
              - ref:14577
              - ref:14263
              - ref:14453
              - ref:19309
              - ref:2236
              - ref:30722
              - ref:52511
              - ref:80625
            originalIdentificationMappings:
              - occurrenceId: occ:147092
                originalIdentifiedName: Stenotholus kohleri n. gen. n. sp.
                acceptedName: Pachycephalosaurus wyomingensis
                difference: null
              - occurrenceId: occ:478789
                originalIdentifiedName: Stygimoloch spinifer n. gen. n. sp.
                acceptedName: Pachycephalosaurus wyomingensis
                difference: null
              - occurrenceId: occ:478795
                originalIdentifiedName: Pachycephalosaurus grangeri n. gen. n. sp.
                acceptedName: Pachycephalosaurus wyomingensis
                difference: null
              - occurrenceId: occ:478796
                originalIdentifiedName: Pachycephalosaurus reinheimeri n. sp.
                acceptedName: Pachycephalosaurus wyomingensis
                difference: null
              - occurrenceId: occ:487158
                originalIdentifiedName: Stygimoloch spinifer
                acceptedName: Pachycephalosaurus wyomingensis
                difference: null
              - occurrenceId: occ:487159
                originalIdentifiedName: Stygimoloch spinifer
                acceptedName: Pachycephalosaurus wyomingensis
                difference: null
              - occurrenceId: occ:487160
                originalIdentifiedName: Stygimoloch spinifer
                acceptedName: Pachycephalosaurus wyomingensis
                difference: null
              - occurrenceId: occ:487161
                originalIdentifiedName: Stygimoloch spinifer
                acceptedName: Pachycephalosaurus wyomingensis
                difference: null
              - occurrenceId: occ:487165
                originalIdentifiedName: Stygimoloch spinifer
                acceptedName: Pachycephalosaurus wyomingensis
                difference: null
              - occurrenceId: occ:488102
                originalIdentifiedName: Stygimoloch spinifer
                acceptedName: Pachycephalosaurus wyomingensis
                difference: null
              - occurrenceId: occ:488356
                originalIdentifiedName: Pachycephalosaurus grangeri
                acceptedName: Pachycephalosaurus wyomingensis
                difference: null
              - occurrenceId: occ:514312
                originalIdentifiedName: Troodon wyomingensis n. sp.
                acceptedName: Pachycephalosaurus wyomingensis
                difference: recombined as
              - occurrenceId: occ:627206
                originalIdentifiedName: Dracorex hogwartsia n. gen. n. sp.
                acceptedName: Pachycephalosaurus wyomingensis
                difference: null
              - occurrenceId: occ:700662
                originalIdentifiedName: Stygimoloch spinifer
                acceptedName: Pachycephalosaurus wyomingensis
                difference: null
              - occurrenceId: occ:700843
                originalIdentifiedName: Stygimoloch spinifer
                acceptedName: Pachycephalosaurus wyomingensis
                difference: null
              - occurrenceId: occ:702710
                originalIdentifiedName: Stygimoloch spinifer
                acceptedName: Pachycephalosaurus wyomingensis
                difference: null
              - occurrenceId: occ:828772
                originalIdentifiedName: Tylosteus ornatus n. gen. n. sp.
                acceptedName: Pachycephalosaurus wyomingensis
                difference: null
              - occurrenceId: occ:1340988
                originalIdentifiedName: Stygimoloch spinifer
                acceptedName: Pachycephalosaurus wyomingensis
                difference: null
              - occurrenceId: occ:1588498
                originalIdentifiedName: Dracorex hogwartsia
                acceptedName: Pachycephalosaurus wyomingensis
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

# Pachycephalosaurus wyomingensis
