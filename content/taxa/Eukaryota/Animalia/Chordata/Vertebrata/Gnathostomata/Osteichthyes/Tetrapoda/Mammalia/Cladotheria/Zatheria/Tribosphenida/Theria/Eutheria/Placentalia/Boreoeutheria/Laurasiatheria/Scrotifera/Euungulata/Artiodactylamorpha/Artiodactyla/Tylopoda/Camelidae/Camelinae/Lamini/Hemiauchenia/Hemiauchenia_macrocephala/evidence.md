---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Hemiauchenia macrocephala
    rank: species
    sourceDatasetId: null
    name:
      zh: Hemiauchenia macrocephala
      en: Hemiauchenia macrocephala
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
            title: PBDB accepted record — Hemiauchenia macrocephala
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=47071&show=parent,app,attr
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
            locator: 2026-10-02 occurrence response accepted_no txn:47071; original response record indices retained in data/sources/mammalia-occurrence-guides-2026-10-02-records.jsonl.gz.
            accessedAt: 2026-10-02
            responseSha256: 368dafda8e7422b86d7992dc15a10defe699a9db146057d35e01a82c1c54bfa2
            pbdbTaxonId: txn:47071
            selectedOccurrenceIds:
              - occ:193666
              - occ:193738
              - occ:193788
              - occ:194446
              - occ:194663
              - occ:194845
              - occ:194864
              - occ:195080
              - occ:195784
              - occ:196218
              - occ:196663
              - occ:196831
              - occ:196988
              - occ:197155
              - occ:197458
              - occ:197755
              - occ:197809
              - occ:197840
              - occ:197974
              - occ:198012
              - occ:198038
              - occ:198045
              - occ:198136
              - occ:198443
              - occ:198508
              - occ:198554
              - occ:198625
              - occ:198651
              - occ:198680
              - occ:198962
              - occ:199093
              - occ:199229
              - occ:199254
              - occ:199277
              - occ:199316
              - occ:199349
              - occ:199434
              - occ:199461
              - occ:199777
              - occ:199813
              - occ:558976
              - occ:740950
              - occ:839003
              - occ:1185083
              - occ:1196162
              - occ:1196902
              - occ:1235469
              - occ:1391731
              - occ:1494847
              - occ:1607386
            selectedCollectionIds:
              - col:19744
              - col:19753
              - col:19758
              - col:19936
              - col:19955
              - col:19981
              - col:19985
              - col:20033
              - col:20123
              - col:20166
              - col:20273
              - col:20289
              - col:20299
              - col:20308
              - col:20342
              - col:20382
              - col:20384
              - col:20385
              - col:20398
              - col:20400
              - col:20402
              - col:20403
              - col:20417
              - col:20475
              - col:20478
              - col:20482
              - col:20491
              - col:20494
              - col:20498
              - col:20530
              - col:20558
              - col:20569
              - col:20571
              - col:20572
              - col:20573
              - col:20581
              - col:20594
              - col:20595
              - col:20629
              - col:20634
              - col:58089
              - col:79667
              - col:79919
              - col:152904
              - col:154722
              - col:154804
              - col:162638
              - col:19663
              - col:227368
            sourceReferenceIds:
              - ref:6294
              - ref:3073
              - ref:3569
              - ref:1186
              - ref:3081
              - ref:2016
              - ref:2615
              - ref:1310
              - ref:3580
              - ref:3872
              - ref:2611
              - ref:1960
              - ref:3577
              - ref:3567
              - ref:1899
              - ref:6225
              - ref:15601
              - ref:26766
              - ref:31468
              - ref:49269
              - ref:50316
              - ref:50371
              - ref:52953
              - ref:53742
              - ref:58947
              - ref:82811
            originalIdentificationMappings:
              - occurrenceId: occ:196218
                originalIdentifiedName: Tanupolama macrocephala
                acceptedName: Hemiauchenia macrocephala
                difference: recombined as
              - occurrenceId: occ:197458
                originalIdentifiedName: Hemiauchenia seymourensis
                acceptedName: Hemiauchenia macrocephala
                difference: null
              - occurrenceId: occ:198038
                originalIdentifiedName: Hemiauchenia seymourensis
                acceptedName: Hemiauchenia macrocephala
                difference: null
              - occurrenceId: occ:198680
                originalIdentifiedName: Tanupolama macrocephala
                acceptedName: Hemiauchenia macrocephala
                difference: recombined as
              - occurrenceId: occ:1391731
                originalIdentifiedName: Holomeniscus macrocephalus
                acceptedName: Hemiauchenia macrocephala
                difference: recombined as
              - occurrenceId: occ:1494847
                originalIdentifiedName: Lama stevensi n. sp.
                acceptedName: Hemiauchenia macrocephala
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

# Hemiauchenia macrocephala
