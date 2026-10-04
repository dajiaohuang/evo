---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Sigmodon minor
    rank: species
    sourceDatasetId: null
    name:
      zh: Sigmodon minor
      en: Sigmodon minor
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
            title: PBDB accepted record — Sigmodon minor
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=51554&show=parent,app,attr
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
            locator: 2026-10-02 occurrence response accepted_no txn:51554; original response record indices retained in data/sources/mammalia-occurrence-guides-2026-10-02-records.jsonl.gz.
            accessedAt: 2026-10-02
            responseSha256: 368dafda8e7422b86d7992dc15a10defe699a9db146057d35e01a82c1c54bfa2
            pbdbTaxonId: txn:51554
            selectedOccurrenceIds:
              - occ:192941
              - occ:192963
              - occ:192969
              - occ:192988
              - occ:193036
              - occ:193110
              - occ:193124
              - occ:193144
              - occ:193182
              - occ:193224
              - occ:193238
              - occ:193269
              - occ:193285
              - occ:193316
              - occ:193343
              - occ:193346
              - occ:193472
              - occ:193520
              - occ:193594
              - occ:193596
              - occ:193608
              - occ:193623
              - occ:193632
              - occ:193648
              - occ:193650
              - occ:193652
              - occ:193657
              - occ:193704
              - occ:193727
              - occ:194246
              - occ:194269
              - occ:194401
              - occ:194435
              - occ:194460
              - occ:194495
              - occ:194520
              - occ:194541
              - occ:194571
              - occ:194585
              - occ:194706
              - occ:194981
              - occ:195027
              - occ:195049
              - occ:195210
              - occ:195404
              - occ:195418
              - occ:195448
              - occ:195452
              - occ:195465
              - occ:195500
              - occ:195512
              - occ:195520
              - occ:195525
              - occ:195540
              - occ:195553
              - occ:195597
              - occ:195650
              - occ:195685
              - occ:195716
              - occ:195774
              - occ:195798
              - occ:195862
              - occ:195907
              - occ:196277
              - occ:196286
              - occ:196331
              - occ:196346
              - occ:196377
              - occ:196974
              - occ:197090
              - occ:197152
              - occ:197430
              - occ:197476
              - occ:295243
              - occ:295258
              - occ:888608
            selectedCollectionIds:
              - col:19618
              - col:19620
              - col:19621
              - col:19624
              - col:19628
              - col:19638
              - col:19642
              - col:19646
              - col:19650
              - col:19653
              - col:19654
              - col:19656
              - col:19657
              - col:19658
              - col:19659
              - col:19660
              - col:19708
              - col:19715
              - col:19733
              - col:19734
              - col:19736
              - col:19737
              - col:19738
              - col:19740
              - col:19741
              - col:19742
              - col:19744
              - col:19752
              - col:19753
              - col:19925
              - col:19927
              - col:19935
              - col:19936
              - col:19938
              - col:19941
              - col:19942
              - col:19943
              - col:19945
              - col:19947
              - col:19963
              - col:20023
              - col:20030
              - col:20032
              - col:20060
              - col:20086
              - col:20093
              - col:20099
              - col:20101
              - col:20103
              - col:20106
              - col:20107
              - col:20108
              - col:20110
              - col:20112
              - col:20113
              - col:20116
              - col:20119
              - col:20120
              - col:20121
              - col:20123
              - col:20124
              - col:20126
              - col:20128
              - col:20176
              - col:20177
              - col:20186
              - col:20187
              - col:20191
              - col:20298
              - col:20303
              - col:20308
              - col:20341
              - col:20344
              - col:28221
              - col:28223
              - col:98313
            sourceReferenceIds:
              - ref:1292
              - ref:1291
              - ref:2040
              - ref:1603
              - ref:1797
              - ref:6199
              - ref:1584
              - ref:6294
              - ref:938
              - ref:939
              - ref:1766
              - ref:3567
              - ref:2621
              - ref:6254
              - ref:1460
              - ref:2518
              - ref:1309
              - ref:6330
              - ref:2893
              - ref:2725
              - ref:2615
              - ref:7718
              - ref:33964
            originalIdentificationMappings:
              - occurrenceId: occ:192941
                originalIdentifiedName: Sigmodon medius
                acceptedName: Sigmodon minor
                difference: null
              - occurrenceId: occ:192963
                originalIdentifiedName: Sigmodon medius
                acceptedName: Sigmodon minor
                difference: null
              - occurrenceId: occ:192969
                originalIdentifiedName: Sigmodon medius
                acceptedName: Sigmodon minor
                difference: null
              - occurrenceId: occ:192988
                originalIdentifiedName: Sigmodon medius
                acceptedName: Sigmodon minor
                difference: null
              - occurrenceId: occ:193036
                originalIdentifiedName: Sigmodon medius
                acceptedName: Sigmodon minor
                difference: null
              - occurrenceId: occ:193110
                originalIdentifiedName: Sigmodon medius
                acceptedName: Sigmodon minor
                difference: null
              - occurrenceId: occ:193124
                originalIdentifiedName: Sigmodon medius
                acceptedName: Sigmodon minor
                difference: null
              - occurrenceId: occ:193224
                originalIdentifiedName: Sigmodon medius
                acceptedName: Sigmodon minor
                difference: null
              - occurrenceId: occ:193238
                originalIdentifiedName: Sigmodon medius
                acceptedName: Sigmodon minor
                difference: null
              - occurrenceId: occ:193269
                originalIdentifiedName: Sigmodon medius
                acceptedName: Sigmodon minor
                difference: null
              - occurrenceId: occ:193285
                originalIdentifiedName: Sigmodon medius
                acceptedName: Sigmodon minor
                difference: null
              - occurrenceId: occ:193316
                originalIdentifiedName: Sigmodon medius
                acceptedName: Sigmodon minor
                difference: null
              - occurrenceId: occ:193343
                originalIdentifiedName: Sigmodon medius
                acceptedName: Sigmodon minor
                difference: null
              - occurrenceId: occ:193346
                originalIdentifiedName: Sigmodon medius
                acceptedName: Sigmodon minor
                difference: null
              - occurrenceId: occ:193472
                originalIdentifiedName: Sigmodon medius
                acceptedName: Sigmodon minor
                difference: null
              - occurrenceId: occ:193520
                originalIdentifiedName: Sigmodon medius
                acceptedName: Sigmodon minor
                difference: null
              - occurrenceId: occ:193594
                originalIdentifiedName: Sigmodon medius
                acceptedName: Sigmodon minor
                difference: null
              - occurrenceId: occ:193596
                originalIdentifiedName: Sigmodon medius
                acceptedName: Sigmodon minor
                difference: null
              - occurrenceId: occ:193608
                originalIdentifiedName: Sigmodon medius
                acceptedName: Sigmodon minor
                difference: null
              - occurrenceId: occ:193623
                originalIdentifiedName: Sigmodon medius
                acceptedName: Sigmodon minor
                difference: null
              - occurrenceId: occ:193632
                originalIdentifiedName: Sigmodon medius
                acceptedName: Sigmodon minor
                difference: null
              - occurrenceId: occ:193648
                originalIdentifiedName: Sigmodon medius
                acceptedName: Sigmodon minor
                difference: null
              - occurrenceId: occ:193650
                originalIdentifiedName: Sigmodon medius
                acceptedName: Sigmodon minor
                difference: null
              - occurrenceId: occ:193652
                originalIdentifiedName: Sigmodon medius
                acceptedName: Sigmodon minor
                difference: null
              - occurrenceId: occ:193704
                originalIdentifiedName: Sigmodon medius
                acceptedName: Sigmodon minor
                difference: null
              - occurrenceId: occ:193727
                originalIdentifiedName: Sigmodon medius
                acceptedName: Sigmodon minor
                difference: null
              - occurrenceId: occ:194460
                originalIdentifiedName: Sigmodon medius
                acceptedName: Sigmodon minor
                difference: null
              - occurrenceId: occ:194706
                originalIdentifiedName: Sigmodon medius
                acceptedName: Sigmodon minor
                difference: null
              - occurrenceId: occ:194981
                originalIdentifiedName: Sigmodon medius
                acceptedName: Sigmodon minor
                difference: null
              - occurrenceId: occ:195027
                originalIdentifiedName: Sigmodon medius
                acceptedName: Sigmodon minor
                difference: null
              - occurrenceId: occ:195049
                originalIdentifiedName: Sigmodon medius
                acceptedName: Sigmodon minor
                difference: null
              - occurrenceId: occ:195210
                originalIdentifiedName: Sigmodon medius
                acceptedName: Sigmodon minor
                difference: null
              - occurrenceId: occ:195404
                originalIdentifiedName: Sigmodon medius
                acceptedName: Sigmodon minor
                difference: null
              - occurrenceId: occ:195418
                originalIdentifiedName: Sigmodon medius
                acceptedName: Sigmodon minor
                difference: null
              - occurrenceId: occ:195448
                originalIdentifiedName: Sigmodon medius
                acceptedName: Sigmodon minor
                difference: null
              - occurrenceId: occ:195452
                originalIdentifiedName: Sigmodon medius
                acceptedName: Sigmodon minor
                difference: null
              - occurrenceId: occ:195465
                originalIdentifiedName: Sigmodon medius
                acceptedName: Sigmodon minor
                difference: null
              - occurrenceId: occ:195500
                originalIdentifiedName: Sigmodon medius
                acceptedName: Sigmodon minor
                difference: null
              - occurrenceId: occ:195512
                originalIdentifiedName: Sigmodon medius
                acceptedName: Sigmodon minor
                difference: null
              - occurrenceId: occ:195520
                originalIdentifiedName: Sigmodon medius
                acceptedName: Sigmodon minor
                difference: null
              - occurrenceId: occ:195525
                originalIdentifiedName: Sigmodon medius
                acceptedName: Sigmodon minor
                difference: null
              - occurrenceId: occ:195540
                originalIdentifiedName: Sigmodon medius
                acceptedName: Sigmodon minor
                difference: null
              - occurrenceId: occ:195553
                originalIdentifiedName: Sigmodon medius
                acceptedName: Sigmodon minor
                difference: null
              - occurrenceId: occ:195597
                originalIdentifiedName: Sigmodon medius
                acceptedName: Sigmodon minor
                difference: null
              - occurrenceId: occ:195650
                originalIdentifiedName: Sigmodon medius
                acceptedName: Sigmodon minor
                difference: null
              - occurrenceId: occ:195685
                originalIdentifiedName: Sigmodon medius
                acceptedName: Sigmodon minor
                difference: null
              - occurrenceId: occ:195716
                originalIdentifiedName: Sigmodon medius
                acceptedName: Sigmodon minor
                difference: null
              - occurrenceId: occ:195774
                originalIdentifiedName: Sigmodon medius
                acceptedName: Sigmodon minor
                difference: null
              - occurrenceId: occ:195798
                originalIdentifiedName: Sigmodon medius
                acceptedName: Sigmodon minor
                difference: null
              - occurrenceId: occ:195862
                originalIdentifiedName: Sigmodon medius
                acceptedName: Sigmodon minor
                difference: null
              - occurrenceId: occ:195907
                originalIdentifiedName: Sigmodon medius
                acceptedName: Sigmodon minor
                difference: null
              - occurrenceId: occ:888608
                originalIdentifiedName: Sigmodon medius
                acceptedName: Sigmodon minor
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

# Sigmodon minor
