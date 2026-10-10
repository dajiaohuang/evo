---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Allosaurus fragilis
    rank: species
    sourceDatasetId: null
    name:
      zh: Allosaurus fragilis
      en: Allosaurus fragilis
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
            title: PBDB accepted record — Allosaurus fragilis
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=52962&show=parent,app,attr
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
            locator: 2026-10-02 occurrence response accepted_no txn:52962; original response record indices retained in data/sources/dinosaur-occurrence-guides-2026-10-02-records.jsonl.gz.
            accessedAt: 2026-10-02
            responseSha256: d36fbe1b0734e7ed05ad008740911640805537ad350b56759672ff67197fe533
            pbdbTaxonId: txn:52962
            selectedOccurrenceIds:
              - occ:149592
              - occ:149596
              - occ:149597
              - occ:149601
              - occ:219975
              - occ:408087
              - occ:408737
              - occ:408739
              - occ:408750
              - occ:408774
              - occ:408872
              - occ:409323
              - occ:481742
              - occ:481756
              - occ:481761
              - occ:481992
              - occ:487146
              - occ:487804
              - occ:489691
              - occ:491247
              - occ:491316
              - occ:491749
              - occ:519727
              - occ:528338
              - occ:561626
              - occ:688012
              - occ:1248847
              - occ:1358693
            selectedCollectionIds:
              - col:13212
              - col:13214
              - col:22648
              - col:28366
              - col:39338
              - col:39340
              - col:39342
              - col:12816
              - col:39371
              - col:11611
              - col:48127
              - col:48129
              - col:48162
              - col:48837
              - col:49338
              - col:49577
              - col:49614
              - col:46439
              - col:52872
              - col:21852
              - col:48128
              - col:73998
              - col:39370
              - col:184627
            sourceReferenceIds:
              - ref:7813
              - ref:4387
              - ref:13098
              - ref:10606
              - ref:10618
              - ref:10608
              - ref:14074
              - ref:14826
              - ref:12248
              - ref:15653
              - ref:9077
              - ref:12893
              - ref:46207
              - ref:13281
              - ref:10389
              - ref:13284
              - ref:35013
              - ref:30725
              - ref:16612
              - ref:24837
              - ref:53863
              - ref:61877
            originalIdentificationMappings:
              - occurrenceId: occ:149592
                originalIdentifiedName: Creosaurus atrox n. gen. n. sp.
                acceptedName: Allosaurus fragilis
                difference: null
              - occurrenceId: occ:149596
                originalIdentifiedName: Creosaurus atrox
                acceptedName: Allosaurus fragilis
                difference: null
              - occurrenceId: occ:149601
                originalIdentifiedName: Antrodemus valens
                acceptedName: Allosaurus fragilis
                difference: null
              - occurrenceId: occ:219975
                originalIdentifiedName: Creosaurus atrox
                acceptedName: Allosaurus fragilis
                difference: null
              - occurrenceId: occ:408087
                originalIdentifiedName: Allosaurus fragilis n. gen. n. sp.
                acceptedName: Allosaurus fragilis
                difference: null
              - occurrenceId: occ:408737
                originalIdentifiedName: Antrodemus valens
                acceptedName: Allosaurus fragilis
                difference: null
              - occurrenceId: occ:408739
                originalIdentifiedName: Allosaurus lucaris n. sp.
                acceptedName: Allosaurus fragilis
                difference: null
              - occurrenceId: occ:408750
                originalIdentifiedName: Antrodemus valens
                acceptedName: Allosaurus fragilis
                difference: null
              - occurrenceId: occ:408774
                originalIdentifiedName: Antrodemus valens
                acceptedName: Allosaurus fragilis
                difference: null
              - occurrenceId: occ:408872
                originalIdentifiedName: Allosaurus ferox n. sp.
                acceptedName: Allosaurus fragilis
                difference: null
              - occurrenceId: occ:481742
                originalIdentifiedName: Labrosaurus ferox n. gen. n. sp.
                acceptedName: Allosaurus fragilis
                difference: null
              - occurrenceId: occ:481756
                originalIdentifiedName: Laelaps trihedrodon n. sp.
                acceptedName: Allosaurus fragilis
                difference: null
              - occurrenceId: occ:481761
                originalIdentifiedName: Epanterias amplexus n. gen. n. sp.
                acceptedName: Allosaurus fragilis
                difference: null
              - occurrenceId: occ:489691
                originalIdentifiedName: Saurophagus maximus n. gen. n. sp.
                acceptedName: Allosaurus fragilis
                difference: null
              - occurrenceId: occ:519727
                originalIdentifiedName: Poicilopleuron valens n. sp.
                acceptedName: Allosaurus fragilis
                difference: null
              - occurrenceId: occ:561626
                originalIdentifiedName: Laelaps trihedrodon
                acceptedName: Allosaurus fragilis
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

# Allosaurus fragilis
