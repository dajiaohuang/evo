---
schemaVersion: 1
kind: evidence
records:
  atlas-node:
    name: Tyrannosaurus rex
    commonName: T. rex
    commonNameZh: 霸王龙
    rank: species
    taxonId: txn:54833
    firstAppearance: 68
    lastAppearance: 66
    extinct: true
    entityKind: taxon
    contentLevel: dossier
  catalogue-profile:
    scientificName: Tyrannosaurus rex
    rank: species
    sourceDatasetId: null
    name:
      zh: Tyrannosaurus rex
      en: Tyrannosaurus rex
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
            title: PBDB accepted record — Tyrannosaurus rex
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=54833&show=parent,app,attr
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
            locator: 2026-10-02 occurrence response accepted_no txn:54833; original response record indices retained in data/sources/dinosaur-occurrence-guides-2026-10-02-records.jsonl.gz.
            accessedAt: 2026-10-02
            responseSha256: d36fbe1b0734e7ed05ad008740911640805537ad350b56759672ff67197fe533
            pbdbTaxonId: txn:54833
            selectedOccurrenceIds:
              - occ:139292
              - occ:220009
              - occ:280101
              - occ:401751
              - occ:457806
              - occ:457816
              - occ:457841
              - occ:457862
              - occ:457881
              - occ:457902
              - occ:457914
              - occ:457927
              - occ:457946
              - occ:457975
              - occ:457986
              - occ:458111
              - occ:458207
              - occ:458213
              - occ:458258
              - occ:458288
              - occ:458292
              - occ:459864
              - occ:459975
              - occ:460445
              - occ:460473
              - occ:460480
              - occ:460503
              - occ:464520
              - occ:487164
              - occ:487166
              - occ:487593
              - occ:490989
              - occ:491014
              - occ:491021
              - occ:491030
              - occ:491043
              - occ:519729
              - occ:529533
              - occ:566954
              - occ:577480
              - occ:577481
              - occ:646548
              - occ:690124
              - occ:692635
              - occ:700704
              - occ:700725
              - occ:702708
              - occ:702767
              - occ:1093504
              - occ:1093548
              - occ:1123288
              - occ:1179394
              - occ:1199943
              - occ:1210694
              - occ:1210695
              - occ:1210698
              - occ:1350466
              - occ:1372226
              - occ:1584410
              - occ:1588479
              - occ:1599636
              - occ:1625433
              - occ:1688887
              - occ:2069689
            selectedCollectionIds:
              - col:11917
              - col:22657
              - col:26760
              - col:38544
              - col:45098
              - col:45099
              - col:14610
              - col:45102
              - col:45109
              - col:45111
              - col:45112
              - col:45114
              - col:45118
              - col:45126
              - col:45128
              - col:45136
              - col:45138
              - col:45141
              - col:45144
              - col:45145
              - col:45146
              - col:45299
              - col:45312
              - col:45381
              - col:45388
              - col:45389
              - col:45390
              - col:45878
              - col:48848
              - col:48847
              - col:49005
              - col:49523
              - col:49535
              - col:49538
              - col:49539
              - col:49547
              - col:52871
              - col:54105
              - col:48193
              - col:60766
              - col:47034
              - col:74175
              - col:14674
              - col:75284
              - col:75286
              - col:75432
              - col:75446
              - col:137722
              - col:137728
              - col:142325
              - col:14526
              - col:155214
              - col:157187
              - col:157188
              - col:157189
              - col:183109
              - col:223935
              - col:224484
              - col:226054
              - col:227186
              - col:239512
              - col:279858
            sourceReferenceIds:
              - ref:4218
              - ref:5721
              - ref:7389
              - ref:10350
              - ref:11749
              - ref:9259
              - ref:54064
              - ref:13266
              - ref:51520
              - ref:10608
              - ref:14627
              - ref:82296
              - ref:17469
              - ref:23444
              - ref:2333
              - ref:2236
              - ref:42536
              - ref:46207
              - ref:48569
              - ref:82620
              - ref:61095
              - ref:62838
              - ref:80625
              - ref:81886
              - ref:31715
              - ref:91309
              - ref:95670
            originalIdentificationMappings:
              - occurrenceId: occ:401751
                originalIdentifiedName: Aublysodon molnaris n. sp.
                acceptedName: Tyrannosaurus rex
                difference: null
              - occurrenceId: occ:464520
                originalIdentifiedName: Dynamosaurus imperiosus n. gen. n. sp.
                acceptedName: Tyrannosaurus rex
                difference: null
              - occurrenceId: occ:487593
                originalIdentifiedName: Tyrannosaurus rex n. gen. n. sp.
                acceptedName: Tyrannosaurus rex
                difference: null
              - occurrenceId: occ:566954
                originalIdentifiedName: Tyrannosaurus regina
                acceptedName: Tyrannosaurus rex
                difference: null
              - occurrenceId: occ:577481
                originalIdentifiedName: Albertosaurus megagracilis n. sp.
                acceptedName: Tyrannosaurus rex
                difference: null
              - occurrenceId: occ:690124
                originalIdentifiedName: Tyrannosaurus imperator
                acceptedName: Tyrannosaurus rex
                difference: null
              - occurrenceId: occ:1210694
                originalIdentifiedName: Tyrannosaurus regina n. sp.
                acceptedName: Tyrannosaurus rex
                difference: null
              - occurrenceId: occ:1210695
                originalIdentifiedName: Tyrannosaurus regina
                acceptedName: Tyrannosaurus rex
                difference: null
              - occurrenceId: occ:1210698
                originalIdentifiedName: Tyrannosaurus imperator n. sp.
                acceptedName: Tyrannosaurus rex
                difference: null
              - occurrenceId: occ:1584410
                originalIdentifiedName: Tyrannosaurus regina
                acceptedName: Tyrannosaurus rex
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

# Tyrannosaurus rex
