---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Richardoestesia isosceles
    rank: species
    sourceDatasetId: null
    name:
      zh: Richardoestesia isosceles
      en: Richardoestesia isosceles
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
            title: PBDB accepted record — Richardoestesia isosceles
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=58875&show=parent,app,attr
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
            locator: 2026-10-02 occurrence response accepted_no txn:58875; original response record indices retained in data/sources/dinosaur-occurrence-guides-2026-10-02-records.jsonl.gz.
            accessedAt: 2026-10-02
            responseSha256: d36fbe1b0734e7ed05ad008740911640805537ad350b56759672ff67197fe533
            pbdbTaxonId: txn:58875
            selectedOccurrenceIds:
              - occ:457809
              - occ:457819
              - occ:457844
              - occ:457865
              - occ:457883
              - occ:457892
              - occ:457905
              - occ:457915
              - occ:457921
              - occ:457928
              - occ:457949
              - occ:457958
              - occ:457966
              - occ:457997
              - occ:458109
              - occ:458257
              - occ:459862
              - occ:460499
              - occ:460514
              - occ:479689
              - occ:488015
              - occ:586540
              - occ:586554
              - occ:628140
              - occ:632177
              - occ:632186
              - occ:632193
              - occ:632204
              - occ:632208
              - occ:632211
              - occ:790051
              - occ:790074
              - occ:1134740
              - occ:1181625
              - occ:1181626
              - occ:1181760
              - occ:1181761
              - occ:1181762
              - occ:1181763
              - occ:1181764
              - occ:1181765
              - occ:1571176
              - occ:2046286
              - occ:2056661
              - occ:2056667
              - occ:2056671
              - occ:2056678
              - occ:2056686
              - occ:2056693
              - occ:2056700
              - occ:2056706
              - occ:2056717
            selectedCollectionIds:
              - col:45098
              - col:45099
              - col:14610
              - col:45102
              - col:45109
              - col:45110
              - col:45111
              - col:45112
              - col:45113
              - col:45114
              - col:45118
              - col:45120
              - col:45122
              - col:45130
              - col:45136
              - col:45144
              - col:45299
              - col:45390
              - col:45391
              - col:14488
              - col:14546
              - col:14458
              - col:14465
              - col:22697
              - col:68001
              - col:68003
              - col:68006
              - col:68007
              - col:68008
              - col:85498
              - col:85499
              - col:68002
              - col:45819
              - col:53049
              - col:45566
              - col:52991
              - col:76030
              - col:76752
              - col:77259
              - col:152279
              - col:14569
              - col:14413
              - col:277779
              - col:14423
              - col:14424
              - col:14425
              - col:14426
              - col:146190
              - col:277780
              - col:14427
              - col:14428
            sourceReferenceIds:
              - ref:11749
              - ref:3010
              - ref:13103
              - ref:17857
              - ref:48570
              - ref:19433
              - ref:11752
              - ref:28887
              - ref:46717
              - ref:47906
              - ref:93680
              - ref:94184
            originalIdentificationMappings:
              - occurrenceId: occ:632193
                originalIdentifiedName: Richardoestesia isosceles n. sp.
                acceptedName: Richardoestesia isosceles
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

# Richardoestesia isosceles
