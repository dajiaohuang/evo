---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Leptauchenia major
    rank: species
    sourceDatasetId: null
    name:
      zh: Leptauchenia major
      en: Leptauchenia major
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
            title: PBDB accepted record — Leptauchenia major
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=47546&show=parent,app,attr
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
            locator: 2026-10-02 occurrence response accepted_no txn:47546; original response record indices retained in data/sources/mammalia-occurrence-guides-2026-10-02-records.jsonl.gz.
            accessedAt: 2026-10-02
            responseSha256: 368dafda8e7422b86d7992dc15a10defe699a9db146057d35e01a82c1c54bfa2
            pbdbTaxonId: txn:47546
            selectedOccurrenceIds:
              - occ:180653
              - occ:180718
              - occ:180824
              - occ:180851
              - occ:181012
              - occ:181025
              - occ:181073
              - occ:181095
              - occ:181097
              - occ:181101
              - occ:181115
              - occ:181122
              - occ:181136
              - occ:181139
              - occ:181251
              - occ:181286
              - occ:181323
              - occ:181331
              - occ:181404
              - occ:181427
              - occ:181430
              - occ:181501
              - occ:181512
              - occ:181539
              - occ:181554
              - occ:181629
              - occ:181645
              - occ:181691
              - occ:181904
              - occ:181906
              - occ:181909
              - occ:181913
              - occ:181917
              - occ:181918
              - occ:181951
              - occ:181959
              - occ:181961
              - occ:181966
              - occ:181986
              - occ:181998
              - occ:182039
              - occ:182207
              - occ:182219
              - occ:182265
              - occ:182298
              - occ:182324
              - occ:182359
              - occ:182385
              - occ:182405
              - occ:182413
              - occ:182416
              - occ:182467
              - occ:182481
              - occ:182498
              - occ:182502
              - occ:182503
              - occ:182509
              - occ:182511
              - occ:182522
              - occ:182526
              - occ:182562
              - occ:182568
              - occ:1207893
              - occ:1607964
              - occ:1608105
              - occ:1608107
              - occ:1635606
              - occ:1635609
              - occ:1636852
              - occ:1654568
            selectedCollectionIds:
              - col:17317
              - col:17329
              - col:17339
              - col:17343
              - col:17378
              - col:17380
              - col:17386
              - col:17402
              - col:17403
              - col:17407
              - col:17413
              - col:17417
              - col:17422
              - col:17424
              - col:17467
              - col:17473
              - col:17478
              - col:17482
              - col:17496
              - col:17500
              - col:17502
              - col:17513
              - col:17515
              - col:17520
              - col:17525
              - col:17530
              - col:17532
              - col:17538
              - col:17568
              - col:17569
              - col:17570
              - col:17572
              - col:17576
              - col:17577
              - col:17589
              - col:17592
              - col:17593
              - col:17595
              - col:17598
              - col:17602
              - col:17606
              - col:17636
              - col:17637
              - col:17641
              - col:17644
              - col:17653
              - col:17663
              - col:17668
              - col:17686
              - col:17691
              - col:17694
              - col:17703
              - col:17707
              - col:17710
              - col:17713
              - col:17714
              - col:17716
              - col:17717
              - col:17720
              - col:17722
              - col:17727
              - col:17728
              - col:156729
              - col:17374
              - col:17398
              - col:17419
              - col:17401
            sourceReferenceIds:
              - ref:3069
              - ref:6294
              - ref:3041
              - ref:3345
              - ref:3637
              - ref:3091
              - ref:3385
              - ref:2728
              - ref:2356
              - ref:51382
              - ref:66014
            originalIdentificationMappings:
              - occurrenceId: occ:180718
                originalIdentifiedName: Pseudocyclopidius frankforteri
                acceptedName: Leptauchenia major
                difference: null
              - occurrenceId: occ:181251
                originalIdentifiedName: Cyclopidius densa
                acceptedName: Leptauchenia major
                difference: null
              - occurrenceId: occ:181286
                originalIdentifiedName: Pseudocyclopidius major
                acceptedName: Leptauchenia major
                difference: recombined as
              - occurrenceId: occ:181323
                originalIdentifiedName: Cyclopidius simus
                acceptedName: Leptauchenia major
                difference: null
              - occurrenceId: occ:181404
                originalIdentifiedName: Leptauchenia major n. sp.
                acceptedName: Leptauchenia major
                difference: null
              - occurrenceId: occ:181427
                originalIdentifiedName: Pseudocyclopidius major
                acceptedName: Leptauchenia major
                difference: recombined as
              - occurrenceId: occ:181430
                originalIdentifiedName: Hadroleptauchenia densa
                acceptedName: Leptauchenia major
                difference: null
              - occurrenceId: occ:181512
                originalIdentifiedName: Cyclopidius densa
                acceptedName: Leptauchenia major
                difference: null
              - occurrenceId: occ:181554
                originalIdentifiedName: Pseudocyclopidius major
                acceptedName: Leptauchenia major
                difference: recombined as
              - occurrenceId: occ:181629
                originalIdentifiedName: Hadroleptauchenia densa
                acceptedName: Leptauchenia major
                difference: null
              - occurrenceId: occ:181645
                originalIdentifiedName: Hadroleptauchenia densa
                acceptedName: Leptauchenia major
                difference: null
              - occurrenceId: occ:181691
                originalIdentifiedName: Pseudocyclopidius major
                acceptedName: Leptauchenia major
                difference: recombined as
              - occurrenceId: occ:181904
                originalIdentifiedName: Pseudocyclopidius major
                acceptedName: Leptauchenia major
                difference: recombined as
              - occurrenceId: occ:181906
                originalIdentifiedName: Leptauchenia margeryae
                acceptedName: Leptauchenia major
                difference: null
              - occurrenceId: occ:181913
                originalIdentifiedName: Hadroleptauchenia shanafeltae
                acceptedName: Leptauchenia major
                difference: null
              - occurrenceId: occ:181951
                originalIdentifiedName: Hadroleptauchenia shanafeltae
                acceptedName: Leptauchenia major
                difference: null
              - occurrenceId: occ:181961
                originalIdentifiedName: Hadroleptauchenia extrema
                acceptedName: Leptauchenia major
                difference: null
              - occurrenceId: occ:181966
                originalIdentifiedName: Pseudocyclopidius major
                acceptedName: Leptauchenia major
                difference: recombined as
              - occurrenceId: occ:181986
                originalIdentifiedName: Pseudocyclopidius major
                acceptedName: Leptauchenia major
                difference: recombined as
              - occurrenceId: occ:182039
                originalIdentifiedName: Hadroleptauchenia shanafeltae
                acceptedName: Leptauchenia major
                difference: null
              - occurrenceId: occ:182298
                originalIdentifiedName: Cyclopidius simus
                acceptedName: Leptauchenia major
                difference: null
              - occurrenceId: occ:182359
                originalIdentifiedName: Pseudocyclopidius major
                acceptedName: Leptauchenia major
                difference: recombined as
              - occurrenceId: occ:182405
                originalIdentifiedName: Hadroleptauchenia extrema
                acceptedName: Leptauchenia major
                difference: null
              - occurrenceId: occ:182413
                originalIdentifiedName: Hadroleptauchenia densa
                acceptedName: Leptauchenia major
                difference: null
              - occurrenceId: occ:182467
                originalIdentifiedName: Hadroleptauchenia densa
                acceptedName: Leptauchenia major
                difference: null
              - occurrenceId: occ:182509
                originalIdentifiedName: Pseudocyclopidius major
                acceptedName: Leptauchenia major
                difference: recombined as
              - occurrenceId: occ:182511
                originalIdentifiedName: Pseudocyclopidius major
                acceptedName: Leptauchenia major
                difference: recombined as
              - occurrenceId: occ:182522
                originalIdentifiedName: Pseudocyclopidius major
                acceptedName: Leptauchenia major
                difference: recombined as
              - occurrenceId: occ:182526
                originalIdentifiedName: Cyclopidius emydinus
                acceptedName: Leptauchenia major
                difference: null
              - occurrenceId: occ:1607964
                originalIdentifiedName: Hadroleptauchenia shanafeltae n. gen. n. sp.
                acceptedName: Leptauchenia major
                difference: null
              - occurrenceId: occ:1608105
                originalIdentifiedName: Hadroleptauchenia shanafeltae
                acceptedName: Leptauchenia major
                difference: null
              - occurrenceId: occ:1608107
                originalIdentifiedName: Pseudocyclopidius major
                acceptedName: Leptauchenia major
                difference: recombined as
              - occurrenceId: occ:1635606
                originalIdentifiedName: Pseudocyclopidius frankforteri
                acceptedName: Leptauchenia major
                difference: null
              - occurrenceId: occ:1635609
                originalIdentifiedName: Hadroleptauchenia shanafeltae
                acceptedName: Leptauchenia major
                difference: null
              - occurrenceId: occ:1636852
                originalIdentifiedName: Hadroleptauchenia shanafeltae
                acceptedName: Leptauchenia major
                difference: null
              - occurrenceId: occ:1654568
                originalIdentifiedName: Hadroleptauchenia shanafeltae
                acceptedName: Leptauchenia major
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

# Leptauchenia major
