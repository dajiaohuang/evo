---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Merycoidodon culbertsonii
    rank: species
    sourceDatasetId: null
    name:
      zh: Merycoidodon culbertsonii
      en: Merycoidodon culbertsonii
    reviewStatus: source-linked
    checkedAt: 2026-10-02
    sections:
      - topic: overview
        sourceIds:
          - pbdbMammaliaTaxonomy20261002
          - pbdbMammaliaOccurrences20261002
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
          - pbdbMammaliaOccurrences20261002
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
          - pbdbMammaliaOccurrences20261002
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
          - pbdbMammaliaOccurrences20261002
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
          - pbdbMammaliaOccurrences20261002
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
        - referenceId: ref-d9daed02-7dc5-41b7-9cb9-616d52f8b19a
          metadataVariant: 0
          sourceKey: pbdbMammaliaTaxonomy20261002
          usage:
            title: PBDB accepted record — Merycoidodon culbertsonii
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=48303&show=parent,app,attr
            locator: Fixed dated accepted species OID and current same-name accepted hierarchy; PBDB ancestry remains separate from COL.
          originalFields:
            - id
            - title
            - url
            - version
            - license
            - locator
        - referenceId: ref-d9daed02-7dc5-41b7-9cb9-616d52f8b19a
          metadataVariant: 0
          sourceKey: pbdbMammaliaOccurrences20261002
          usage:
            locator: 2026-10-02 occurrence response accepted_no txn:48303; original response record indices retained in data/sources/mammalia-occurrence-guides-2026-10-02-records.jsonl.gz.
            accessedAt: 2026-10-02
            responseSha256: 368dafda8e7422b86d7992dc15a10defe699a9db146057d35e01a82c1c54bfa2
            pbdbTaxonId: txn:48303
            selectedOccurrenceIds:
              - occ:177889
              - occ:177893
              - occ:177995
              - occ:178046
              - occ:178095
              - occ:178176
              - occ:178333
              - occ:178350
              - occ:178518
              - occ:178739
              - occ:178938
              - occ:178975
              - occ:179166
              - occ:179190
              - occ:179270
              - occ:179272
              - occ:179354
              - occ:179401
              - occ:179535
              - occ:179536
              - occ:179540
              - occ:179598
              - occ:179632
              - occ:179657
              - occ:179710
              - occ:179719
              - occ:179737
              - occ:179751
              - occ:179862
              - occ:179863
              - occ:179866
              - occ:179873
              - occ:179878
              - occ:179898
              - occ:179912
              - occ:179939
              - occ:179945
              - occ:179958
              - occ:179960
              - occ:179961
              - occ:179964
              - occ:179966
              - occ:179976
              - occ:179990
              - occ:180009
              - occ:180021
              - occ:180028
              - occ:180074
              - occ:180093
              - occ:180120
              - occ:180129
              - occ:180134
              - occ:180144
              - occ:180150
              - occ:180251
              - occ:180257
              - occ:180278
              - occ:180280
              - occ:180299
              - occ:180300
              - occ:180316
              - occ:180332
              - occ:180333
              - occ:180358
              - occ:180359
              - occ:180378
              - occ:180395
              - occ:180423
              - occ:180447
              - occ:180471
              - occ:180473
              - occ:180480
              - occ:180499
              - occ:180503
              - occ:180518
              - occ:180522
              - occ:180523
              - occ:180524
              - occ:180529
              - occ:180532
              - occ:180533
              - occ:180546
              - occ:180577
              - occ:180597
              - occ:180598
              - occ:180844
              - occ:1240838
              - occ:1365874
              - occ:1365882
              - occ:1365888
              - occ:1635603
              - occ:1635604
              - occ:1639990
              - occ:1639992
              - occ:1639994
            selectedCollectionIds:
              - col:16894
              - col:16895
              - col:16918
              - col:16919
              - col:16920
              - col:16929
              - col:16942
              - col:16943
              - col:16961
              - col:16977
              - col:16998
              - col:17006
              - col:17018
              - col:17024
              - col:17035
              - col:17037
              - col:17053
              - col:17065
              - col:17084
              - col:17085
              - col:17088
              - col:17092
              - col:17094
              - col:17098
              - col:17103
              - col:17104
              - col:17105
              - col:17106
              - col:17120
              - col:17121
              - col:17124
              - col:17128
              - col:17130
              - col:17133
              - col:17135
              - col:17140
              - col:17141
              - col:17143
              - col:17144
              - col:17145
              - col:17148
              - col:17149
              - col:17152
              - col:17153
              - col:17156
              - col:17161
              - col:17162
              - col:17170
              - col:17173
              - col:17174
              - col:17178
              - col:17179
              - col:17180
              - col:17183
              - col:17193
              - col:17196
              - col:17200
              - col:17201
              - col:17208
              - col:17209
              - col:17213
              - col:17218
              - col:17219
              - col:17223
              - col:17224
              - col:17234
              - col:17238
              - col:17246
              - col:17251
              - col:17262
              - col:17263
              - col:17267
              - col:17271
              - col:17272
              - col:17277
              - col:17279
              - col:17280
              - col:17281
              - col:17282
              - col:17284
              - col:17285
              - col:17291
              - col:17297
              - col:17303
              - col:17304
              - col:17342
              - col:163487
              - col:17080
            sourceReferenceIds:
              - ref:6270
              - ref:3069
              - ref:1757
              - ref:6294
              - ref:3479
              - ref:1944
              - ref:1470
              - ref:1570
              - ref:1235
              - ref:1328
              - ref:6205
              - ref:1151
              - ref:3170
              - ref:3067
              - ref:2711
              - ref:3413
              - ref:53322
            originalIdentificationMappings:
              - occurrenceId: occ:177889
                originalIdentifiedName: Merycoidodon culbertsoni
                acceptedName: Merycoidodon culbertsonii
                difference: variant of
              - occurrenceId: occ:177995
                originalIdentifiedName: Merycoidodon culbertsoni
                acceptedName: Merycoidodon culbertsonii
                difference: variant of
              - occurrenceId: occ:178046
                originalIdentifiedName: Merycoidodon culbertsoni
                acceptedName: Merycoidodon culbertsonii
                difference: variant of
              - occurrenceId: occ:178095
                originalIdentifiedName: Merycoidodon culbertsoni
                acceptedName: Merycoidodon culbertsonii
                difference: variant of
              - occurrenceId: occ:178176
                originalIdentifiedName: Merycoidodon culbertsoni
                acceptedName: Merycoidodon culbertsonii
                difference: variant of
              - occurrenceId: occ:178333
                originalIdentifiedName: Merycoidodon culbertsoni
                acceptedName: Merycoidodon culbertsonii
                difference: variant of
              - occurrenceId: occ:178350
                originalIdentifiedName: Merycoidodon culbertsoni
                acceptedName: Merycoidodon culbertsonii
                difference: variant of
              - occurrenceId: occ:178518
                originalIdentifiedName: Merycoidodon culbertsoni
                acceptedName: Merycoidodon culbertsonii
                difference: variant of
              - occurrenceId: occ:178739
                originalIdentifiedName: Merycoidodon culbertsoni
                acceptedName: Merycoidodon culbertsonii
                difference: variant of
              - occurrenceId: occ:178938
                originalIdentifiedName: Merycoidodon culbertsonii browni
                acceptedName: Merycoidodon culbertsonii
                difference: subspecies not entered
              - occurrenceId: occ:178975
                originalIdentifiedName: Merycoidodon lewisi n. sp.
                acceptedName: Merycoidodon culbertsonii
                difference: null
              - occurrenceId: occ:179166
                originalIdentifiedName: Merycoidodon culbertsoni
                acceptedName: Merycoidodon culbertsonii
                difference: variant of
              - occurrenceId: occ:179190
                originalIdentifiedName: Merycoidodon culbertsoni
                acceptedName: Merycoidodon culbertsonii
                difference: variant of
              - occurrenceId: occ:179270
                originalIdentifiedName: Otionohyus vanderpooli n. sp.
                acceptedName: Merycoidodon culbertsonii
                difference: null
              - occurrenceId: occ:179354
                originalIdentifiedName: Merycoidodon culbertsoni
                acceptedName: Merycoidodon culbertsonii
                difference: variant of
              - occurrenceId: occ:179401
                originalIdentifiedName: Merycoidodon culbertsoni
                acceptedName: Merycoidodon culbertsonii
                difference: variant of
              - occurrenceId: occ:179535
                originalIdentifiedName: Merycoidodon culbertsoni
                acceptedName: Merycoidodon culbertsonii
                difference: variant of
              - occurrenceId: occ:179536
                originalIdentifiedName: Merycoidodon culbertsoni
                acceptedName: Merycoidodon culbertsonii
                difference: variant of
              - occurrenceId: occ:179540
                originalIdentifiedName: Merycoidodon culbertsoni
                acceptedName: Merycoidodon culbertsonii
                difference: variant of
              - occurrenceId: occ:179598
                originalIdentifiedName: Merycoidodon culbertsoni
                acceptedName: Merycoidodon culbertsonii
                difference: variant of
              - occurrenceId: occ:179632
                originalIdentifiedName: Merycoidodon culbertsoni
                acceptedName: Merycoidodon culbertsonii
                difference: variant of
              - occurrenceId: occ:179657
                originalIdentifiedName: Merycoidodon culbertsoni
                acceptedName: Merycoidodon culbertsonii
                difference: variant of
              - occurrenceId: occ:179710
                originalIdentifiedName: Merycoidodon culbertsoni
                acceptedName: Merycoidodon culbertsonii
                difference: variant of
              - occurrenceId: occ:179719
                originalIdentifiedName: Merycoidodon culbertsoni
                acceptedName: Merycoidodon culbertsonii
                difference: variant of
              - occurrenceId: occ:179737
                originalIdentifiedName: Merycoidodon culbertsoni
                acceptedName: Merycoidodon culbertsonii
                difference: variant of
              - occurrenceId: occ:179751
                originalIdentifiedName: Merycoidodon culbertsoni
                acceptedName: Merycoidodon culbertsonii
                difference: variant of
              - occurrenceId: occ:179862
                originalIdentifiedName: Merycoidodon culbertsoni
                acceptedName: Merycoidodon culbertsonii
                difference: variant of
              - occurrenceId: occ:179863
                originalIdentifiedName: Merycoidodon culbertsoni
                acceptedName: Merycoidodon culbertsonii
                difference: variant of
              - occurrenceId: occ:179866
                originalIdentifiedName: Merycoidodon culbertsoni
                acceptedName: Merycoidodon culbertsonii
                difference: variant of
              - occurrenceId: occ:179873
                originalIdentifiedName: Merycoidodon culbertsoni
                acceptedName: Merycoidodon culbertsonii
                difference: variant of
              - occurrenceId: occ:179878
                originalIdentifiedName: Merycoidodon culbertsoni
                acceptedName: Merycoidodon culbertsonii
                difference: variant of
              - occurrenceId: occ:179898
                originalIdentifiedName: Oreodon culbertsoni
                acceptedName: Merycoidodon culbertsonii
                difference: recombined as
              - occurrenceId: occ:179912
                originalIdentifiedName: Otionohyus wardi
                acceptedName: Merycoidodon culbertsonii
                difference: null
              - occurrenceId: occ:179939
                originalIdentifiedName: Merycoidodon culbertsoni
                acceptedName: Merycoidodon culbertsonii
                difference: variant of
              - occurrenceId: occ:179945
                originalIdentifiedName: Merycoidodon culbertsoni
                acceptedName: Merycoidodon culbertsonii
                difference: variant of
              - occurrenceId: occ:179958
                originalIdentifiedName: Merycoidodon culbertsoni
                acceptedName: Merycoidodon culbertsonii
                difference: variant of
              - occurrenceId: occ:179960
                originalIdentifiedName: Merycoidodon culbertsoni
                acceptedName: Merycoidodon culbertsonii
                difference: variant of
              - occurrenceId: occ:179961
                originalIdentifiedName: Merycoidodon culbertsoni
                acceptedName: Merycoidodon culbertsonii
                difference: variant of
              - occurrenceId: occ:179964
                originalIdentifiedName: Merycoidodon culbertsoni
                acceptedName: Merycoidodon culbertsonii
                difference: variant of
              - occurrenceId: occ:179966
                originalIdentifiedName: Merycoidodon culbertsoni
                acceptedName: Merycoidodon culbertsonii
                difference: variant of
              - occurrenceId: occ:179976
                originalIdentifiedName: Prodesmatochoerus meekae n. sp.
                acceptedName: Merycoidodon culbertsonii
                difference: null
              - occurrenceId: occ:179990
                originalIdentifiedName: Oreodon culbertsoni
                acceptedName: Merycoidodon culbertsonii
                difference: recombined as
              - occurrenceId: occ:180009
                originalIdentifiedName: Merycoidodon culbertsoni
                acceptedName: Merycoidodon culbertsonii
                difference: variant of
              - occurrenceId: occ:180021
                originalIdentifiedName: Merycoidodon culbertsoni
                acceptedName: Merycoidodon culbertsonii
                difference: variant of
              - occurrenceId: occ:180028
                originalIdentifiedName: Merycoidodon culbertsoni
                acceptedName: Merycoidodon culbertsonii
                difference: variant of
              - occurrenceId: occ:180074
                originalIdentifiedName: Merycoidodon culbertsoni
                acceptedName: Merycoidodon culbertsonii
                difference: variant of
              - occurrenceId: occ:180093
                originalIdentifiedName: Merycoidodon culbertsoni
                acceptedName: Merycoidodon culbertsonii
                difference: variant of
              - occurrenceId: occ:180120
                originalIdentifiedName: Merycoidodon culbertsoni
                acceptedName: Merycoidodon culbertsonii
                difference: variant of
              - occurrenceId: occ:180129
                originalIdentifiedName: Merycoidodon culbertsoni
                acceptedName: Merycoidodon culbertsonii
                difference: variant of
              - occurrenceId: occ:180134
                originalIdentifiedName: Merycoidodon culbertsoni
                acceptedName: Merycoidodon culbertsonii
                difference: variant of
              - occurrenceId: occ:180144
                originalIdentifiedName: Merycoidodon culbertsoni
                acceptedName: Merycoidodon culbertsonii
                difference: variant of
              - occurrenceId: occ:180150
                originalIdentifiedName: Merycoidodon culbertsoni
                acceptedName: Merycoidodon culbertsonii
                difference: variant of
              - occurrenceId: occ:180251
                originalIdentifiedName: Merycoidodon culbertsoni
                acceptedName: Merycoidodon culbertsonii
                difference: variant of
              - occurrenceId: occ:180257
                originalIdentifiedName: Otionohyus wardi
                acceptedName: Merycoidodon culbertsonii
                difference: null
              - occurrenceId: occ:180278
                originalIdentifiedName: Merycoidodon culbertsoni
                acceptedName: Merycoidodon culbertsonii
                difference: variant of
              - occurrenceId: occ:180280
                originalIdentifiedName: Merycoidodon culbertsoni
                acceptedName: Merycoidodon culbertsonii
                difference: variant of
              - occurrenceId: occ:180299
                originalIdentifiedName: Merycoidodon culbertsoni
                acceptedName: Merycoidodon culbertsonii
                difference: variant of
              - occurrenceId: occ:180300
                originalIdentifiedName: Merycoidodon culbertsoni
                acceptedName: Merycoidodon culbertsonii
                difference: variant of
              - occurrenceId: occ:180316
                originalIdentifiedName: Merycoidodon culbertsoni
                acceptedName: Merycoidodon culbertsonii
                difference: variant of
              - occurrenceId: occ:180332
                originalIdentifiedName: Merycoidodon culbertsoni
                acceptedName: Merycoidodon culbertsonii
                difference: variant of
              - occurrenceId: occ:180333
                originalIdentifiedName: Otionohyus wardi
                acceptedName: Merycoidodon culbertsonii
                difference: null
              - occurrenceId: occ:180358
                originalIdentifiedName: Merycoidodon culbertsoni
                acceptedName: Merycoidodon culbertsonii
                difference: variant of
              - occurrenceId: occ:180359
                originalIdentifiedName: Merycoidodon culbertsoni
                acceptedName: Merycoidodon culbertsonii
                difference: variant of
              - occurrenceId: occ:180378
                originalIdentifiedName: Genetochoerus periculorum
                acceptedName: Merycoidodon culbertsonii
                difference: null
              - occurrenceId: occ:180395
                originalIdentifiedName: Paramerycoidodon georgei
                acceptedName: Merycoidodon culbertsonii
                difference: null
              - occurrenceId: occ:180423
                originalIdentifiedName: Merycoidodon culbertsoni
                acceptedName: Merycoidodon culbertsonii
                difference: variant of
              - occurrenceId: occ:180447
                originalIdentifiedName: Merycoidodon culbertsoni
                acceptedName: Merycoidodon culbertsonii
                difference: variant of
              - occurrenceId: occ:180471
                originalIdentifiedName: Merycoidodon culbertsoni
                acceptedName: Merycoidodon culbertsonii
                difference: variant of
              - occurrenceId: occ:180473
                originalIdentifiedName: Merycoidodon culbertsoni
                acceptedName: Merycoidodon culbertsonii
                difference: variant of
              - occurrenceId: occ:180480
                originalIdentifiedName: Merycoidodon culbertsoni
                acceptedName: Merycoidodon culbertsonii
                difference: variant of
              - occurrenceId: occ:180499
                originalIdentifiedName: Merycoidodon culbertsoni
                acceptedName: Merycoidodon culbertsonii
                difference: variant of
              - occurrenceId: occ:180503
                originalIdentifiedName: Merycoidodon culbertsoni
                acceptedName: Merycoidodon culbertsonii
                difference: variant of
              - occurrenceId: occ:180518
                originalIdentifiedName: Merycoidodon culbertsoni
                acceptedName: Merycoidodon culbertsonii
                difference: variant of
              - occurrenceId: occ:180522
                originalIdentifiedName: Merycoidodon culbertsoni
                acceptedName: Merycoidodon culbertsonii
                difference: variant of
              - occurrenceId: occ:180523
                originalIdentifiedName: Merycoidodon culbertsoni
                acceptedName: Merycoidodon culbertsonii
                difference: variant of
              - occurrenceId: occ:180524
                originalIdentifiedName: Merycoidodon culbertsoni
                acceptedName: Merycoidodon culbertsonii
                difference: variant of
              - occurrenceId: occ:180529
                originalIdentifiedName: Merycoidodon culbertsoni
                acceptedName: Merycoidodon culbertsonii
                difference: variant of
              - occurrenceId: occ:180532
                originalIdentifiedName: Merycoidodon culbertsoni
                acceptedName: Merycoidodon culbertsonii
                difference: variant of
              - occurrenceId: occ:180533
                originalIdentifiedName: Otionohyus wardi
                acceptedName: Merycoidodon culbertsonii
                difference: null
              - occurrenceId: occ:180546
                originalIdentifiedName: Merycoidodon culbertsoni
                acceptedName: Merycoidodon culbertsonii
                difference: variant of
              - occurrenceId: occ:180597
                originalIdentifiedName: Merycoidodon culbertsoni
                acceptedName: Merycoidodon culbertsonii
                difference: variant of
              - occurrenceId: occ:180598
                originalIdentifiedName: Merycoidodon culbertsoni
                acceptedName: Merycoidodon culbertsonii
                difference: variant of
              - occurrenceId: occ:180844
                originalIdentifiedName: Merycoidodon culbertsoni
                acceptedName: Merycoidodon culbertsonii
                difference: variant of
              - occurrenceId: occ:1240838
                originalIdentifiedName: Merycoidodon culbertsoni
                acceptedName: Merycoidodon culbertsonii
                difference: variant of
              - occurrenceId: occ:1365874
                originalIdentifiedName: Genetochoerus periculorum n. gen. n. sp.
                acceptedName: Merycoidodon culbertsonii
                difference: null
              - occurrenceId: occ:1365882
                originalIdentifiedName: Paramerycoidodon georgei n. sp.
                acceptedName: Merycoidodon culbertsonii
                difference: null
              - occurrenceId: occ:1365888
                originalIdentifiedName: Otionohyus wardi n. sp.
                acceptedName: Merycoidodon culbertsonii
                difference: null
              - occurrenceId: occ:1635603
                originalIdentifiedName: Otionohyus wardi
                acceptedName: Merycoidodon culbertsonii
                difference: null
              - occurrenceId: occ:1635604
                originalIdentifiedName: Genetochoerus periculorum
                acceptedName: Merycoidodon culbertsonii
                difference: null
              - occurrenceId: occ:1639990
                originalIdentifiedName: Genetochoerus periculorum
                acceptedName: Merycoidodon culbertsonii
                difference: null
              - occurrenceId: occ:1639992
                originalIdentifiedName: Otionohyus wardi
                acceptedName: Merycoidodon culbertsonii
                difference: null
              - occurrenceId: occ:1639994
                originalIdentifiedName: Genetochoerus periculorum
                acceptedName: Merycoidodon culbertsonii
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

# Merycoidodon culbertsonii
