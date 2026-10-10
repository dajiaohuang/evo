---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Libytherium maurusium
    rank: species
    sourceDatasetId: null
    name:
      zh: Libytherium maurusium
      en: Libytherium maurusium
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
            title: PBDB accepted record — Libytherium maurusium
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=133601&show=parent,app,attr
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
            locator: 2026-10-02 occurrence response accepted_no txn:133601; original response record indices retained in data/sources/mammalia-occurrence-guides-2026-10-02-records.jsonl.gz.
            accessedAt: 2026-10-02
            responseSha256: 368dafda8e7422b86d7992dc15a10defe699a9db146057d35e01a82c1c54bfa2
            pbdbTaxonId: txn:133601
            selectedOccurrenceIds:
              - occ:212014
              - occ:212759
              - occ:213341
              - occ:213374
              - occ:216760
              - occ:216811
              - occ:217267
              - occ:217353
              - occ:217367
              - occ:219078
              - occ:219540
              - occ:219661
              - occ:219777
              - occ:219788
              - occ:219824
              - occ:219847
              - occ:219858
              - occ:221617
              - occ:221672
              - occ:221693
              - occ:221735
              - occ:221842
              - occ:221921
              - occ:222010
              - occ:222044
              - occ:222084
              - occ:222113
              - occ:222158
              - occ:222301
              - occ:222514
              - occ:222557
              - occ:222585
              - occ:222603
              - occ:222616
              - occ:222647
              - occ:222687
              - occ:222793
              - occ:222851
              - occ:222871
              - occ:222890
              - occ:223067
              - occ:223100
              - occ:223178
              - occ:225099
              - occ:225340
              - occ:226295
              - occ:228680
              - occ:339263
              - occ:339327
              - occ:339520
              - occ:402776
              - occ:504061
              - occ:1589517
              - occ:1589541
              - occ:1589575
            selectedCollectionIds:
              - col:21294
              - col:21532
              - col:21783
              - col:21785
              - col:22041
              - col:22064
              - col:22158
              - col:22175
              - col:22176
              - col:22482
              - col:22552
              - col:22577
              - col:22594
              - col:22595
              - col:22617
              - col:22626
              - col:22627
              - col:21309
              - col:21342
              - col:21343
              - col:21345
              - col:21353
              - col:21367
              - col:21370
              - col:21376
              - col:21396
              - col:21398
              - col:21402
              - col:21420
              - col:21454
              - col:21457
              - col:21458
              - col:21459
              - col:21461
              - col:21462
              - col:21464
              - col:21476
              - col:21480
              - col:21484
              - col:21485
              - col:21503
              - col:21504
              - col:21514
              - col:21825
              - col:21830
              - col:21970
              - col:22411
              - col:32050
              - col:32052
              - col:32058
              - col:21530
              - col:51188
              - col:224654
              - col:224655
              - col:224657
            sourceReferenceIds:
              - ref:4454
              - ref:10320
              - ref:4847
              - ref:4782
              - ref:4478
              - ref:4840
              - ref:4442
              - ref:5616
              - ref:5636
              - ref:5271
              - ref:4659
              - ref:4468
              - ref:4952
              - ref:10230
              - ref:4892
              - ref:4451
              - ref:5269
              - ref:5431
              - ref:5595
              - ref:10211
              - ref:13638
              - ref:80990
            originalIdentificationMappings:
              - occurrenceId: occ:212014
                originalIdentifiedName: Sivatherium maurusium
                acceptedName: Libytherium maurusium
                difference: recombined as
              - occurrenceId: occ:212759
                originalIdentifiedName: Sivatherium maurusium
                acceptedName: Libytherium maurusium
                difference: recombined as
              - occurrenceId: occ:213341
                originalIdentifiedName: Sivatherium maurusium
                acceptedName: Libytherium maurusium
                difference: recombined as
              - occurrenceId: occ:213374
                originalIdentifiedName: Sivatherium maurusium
                acceptedName: Libytherium maurusium
                difference: recombined as
              - occurrenceId: occ:216760
                originalIdentifiedName: Sivatherium maurusium
                acceptedName: Libytherium maurusium
                difference: recombined as
              - occurrenceId: occ:216811
                originalIdentifiedName: Sivatherium maurusium
                acceptedName: Libytherium maurusium
                difference: recombined as
              - occurrenceId: occ:217267
                originalIdentifiedName: Sivatherium maurusium
                acceptedName: Libytherium maurusium
                difference: recombined as
              - occurrenceId: occ:217353
                originalIdentifiedName: Sivatherium maurusium
                acceptedName: Libytherium maurusium
                difference: recombined as
              - occurrenceId: occ:217367
                originalIdentifiedName: Sivatherium maurusium
                acceptedName: Libytherium maurusium
                difference: recombined as
              - occurrenceId: occ:219078
                originalIdentifiedName: Sivatherium maurusium
                acceptedName: Libytherium maurusium
                difference: recombined as
              - occurrenceId: occ:219540
                originalIdentifiedName: Sivatherium maurusium
                acceptedName: Libytherium maurusium
                difference: recombined as
              - occurrenceId: occ:219661
                originalIdentifiedName: Sivatherium maurusium
                acceptedName: Libytherium maurusium
                difference: recombined as
              - occurrenceId: occ:219777
                originalIdentifiedName: Sivatherium maurusium
                acceptedName: Libytherium maurusium
                difference: recombined as
              - occurrenceId: occ:219788
                originalIdentifiedName: Sivatherium maurusium
                acceptedName: Libytherium maurusium
                difference: recombined as
              - occurrenceId: occ:219824
                originalIdentifiedName: Sivatherium maurusium
                acceptedName: Libytherium maurusium
                difference: recombined as
              - occurrenceId: occ:219847
                originalIdentifiedName: Sivatherium maurusium
                acceptedName: Libytherium maurusium
                difference: recombined as
              - occurrenceId: occ:219858
                originalIdentifiedName: Sivatherium maurusium
                acceptedName: Libytherium maurusium
                difference: recombined as
              - occurrenceId: occ:221617
                originalIdentifiedName: Sivatherium maurusium
                acceptedName: Libytherium maurusium
                difference: recombined as
              - occurrenceId: occ:221672
                originalIdentifiedName: Sivatherium maurusium
                acceptedName: Libytherium maurusium
                difference: recombined as
              - occurrenceId: occ:221693
                originalIdentifiedName: Sivatherium maurusium
                acceptedName: Libytherium maurusium
                difference: recombined as
              - occurrenceId: occ:221735
                originalIdentifiedName: Sivatherium maurusium
                acceptedName: Libytherium maurusium
                difference: recombined as
              - occurrenceId: occ:221842
                originalIdentifiedName: Sivatherium maurusium
                acceptedName: Libytherium maurusium
                difference: recombined as
              - occurrenceId: occ:221921
                originalIdentifiedName: Sivatherium maurusium
                acceptedName: Libytherium maurusium
                difference: recombined as
              - occurrenceId: occ:222010
                originalIdentifiedName: Sivatherium maurusium
                acceptedName: Libytherium maurusium
                difference: recombined as
              - occurrenceId: occ:222044
                originalIdentifiedName: Sivatherium maurusium
                acceptedName: Libytherium maurusium
                difference: recombined as
              - occurrenceId: occ:222084
                originalIdentifiedName: Sivatherium maurusium
                acceptedName: Libytherium maurusium
                difference: recombined as
              - occurrenceId: occ:222113
                originalIdentifiedName: Sivatherium maurusium
                acceptedName: Libytherium maurusium
                difference: recombined as
              - occurrenceId: occ:222158
                originalIdentifiedName: Sivatherium maurusium
                acceptedName: Libytherium maurusium
                difference: recombined as
              - occurrenceId: occ:222301
                originalIdentifiedName: Sivatherium maurusium
                acceptedName: Libytherium maurusium
                difference: recombined as
              - occurrenceId: occ:222514
                originalIdentifiedName: Sivatherium maurusium
                acceptedName: Libytherium maurusium
                difference: recombined as
              - occurrenceId: occ:222557
                originalIdentifiedName: Sivatherium maurusium
                acceptedName: Libytherium maurusium
                difference: recombined as
              - occurrenceId: occ:222585
                originalIdentifiedName: Sivatherium maurusium
                acceptedName: Libytherium maurusium
                difference: recombined as
              - occurrenceId: occ:222603
                originalIdentifiedName: Sivatherium maurusium
                acceptedName: Libytherium maurusium
                difference: recombined as
              - occurrenceId: occ:222616
                originalIdentifiedName: Sivatherium maurusium
                acceptedName: Libytherium maurusium
                difference: recombined as
              - occurrenceId: occ:222647
                originalIdentifiedName: Sivatherium maurusium
                acceptedName: Libytherium maurusium
                difference: recombined as
              - occurrenceId: occ:222687
                originalIdentifiedName: Sivatherium maurusium
                acceptedName: Libytherium maurusium
                difference: recombined as
              - occurrenceId: occ:222793
                originalIdentifiedName: Sivatherium maurusium
                acceptedName: Libytherium maurusium
                difference: recombined as
              - occurrenceId: occ:222851
                originalIdentifiedName: Sivatherium maurusium
                acceptedName: Libytherium maurusium
                difference: recombined as
              - occurrenceId: occ:222871
                originalIdentifiedName: Sivatherium maurusium
                acceptedName: Libytherium maurusium
                difference: recombined as
              - occurrenceId: occ:222890
                originalIdentifiedName: Sivatherium maurusium
                acceptedName: Libytherium maurusium
                difference: recombined as
              - occurrenceId: occ:223067
                originalIdentifiedName: Sivatherium maurusium
                acceptedName: Libytherium maurusium
                difference: recombined as
              - occurrenceId: occ:223100
                originalIdentifiedName: Sivatherium maurusium
                acceptedName: Libytherium maurusium
                difference: recombined as
              - occurrenceId: occ:223178
                originalIdentifiedName: Sivatherium maurusium
                acceptedName: Libytherium maurusium
                difference: recombined as
              - occurrenceId: occ:225099
                originalIdentifiedName: Sivatherium maurusium
                acceptedName: Libytherium maurusium
                difference: recombined as
              - occurrenceId: occ:225340
                originalIdentifiedName: Sivatherium maurusium
                acceptedName: Libytherium maurusium
                difference: recombined as
              - occurrenceId: occ:226295
                originalIdentifiedName: Sivatherium maurusium
                acceptedName: Libytherium maurusium
                difference: recombined as
              - occurrenceId: occ:228680
                originalIdentifiedName: Sivatherium maurusium
                acceptedName: Libytherium maurusium
                difference: recombined as
              - occurrenceId: occ:339263
                originalIdentifiedName: Sivatherium maurusium
                acceptedName: Libytherium maurusium
                difference: recombined as
              - occurrenceId: occ:339327
                originalIdentifiedName: Sivatherium maurusium
                acceptedName: Libytherium maurusium
                difference: recombined as
              - occurrenceId: occ:339520
                originalIdentifiedName: Sivatherium maurusium
                acceptedName: Libytherium maurusium
                difference: recombined as
              - occurrenceId: occ:402776
                originalIdentifiedName: Sivatherium maurusium
                acceptedName: Libytherium maurusium
                difference: recombined as
              - occurrenceId: occ:504061
                originalIdentifiedName: Sivatherium maurusium
                acceptedName: Libytherium maurusium
                difference: recombined as
              - occurrenceId: occ:1589517
                originalIdentifiedName: Sivatherium maurusium
                acceptedName: Libytherium maurusium
                difference: recombined as
              - occurrenceId: occ:1589541
                originalIdentifiedName: Sivatherium maurusium
                acceptedName: Libytherium maurusium
                difference: recombined as
              - occurrenceId: occ:1589575
                originalIdentifiedName: Sivatherium maurusium
                acceptedName: Libytherium maurusium
                difference: recombined as
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

# Libytherium maurusium
