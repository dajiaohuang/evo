---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Nannippus aztecus
    rank: species
    sourceDatasetId: null
    name:
      zh: Nannippus aztecus
      en: Nannippus aztecus
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
            title: PBDB accepted record — Nannippus aztecus
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=48954&show=parent,app,attr
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
            locator: 2026-10-02 occurrence response accepted_no txn:48954; original response record indices retained in data/sources/mammalia-occurrence-guides-2026-10-02-records.jsonl.gz.
            accessedAt: 2026-10-02
            responseSha256: 368dafda8e7422b86d7992dc15a10defe699a9db146057d35e01a82c1c54bfa2
            pbdbTaxonId: txn:48954
            selectedOccurrenceIds:
              - occ:184181
              - occ:184642
              - occ:184714
              - occ:187644
              - occ:187677
              - occ:187748
              - occ:187853
              - occ:187859
              - occ:187912
              - occ:188001
              - occ:188041
              - occ:188057
              - occ:188076
              - occ:188114
              - occ:188126
              - occ:188207
              - occ:188230
              - occ:188242
              - occ:188734
              - occ:188781
              - occ:188820
              - occ:188856
              - occ:188876
              - occ:277288
              - occ:652854
              - occ:688011
              - occ:699215
              - occ:1227316
              - occ:1235468
              - occ:1384251
              - occ:1427476
              - occ:1448669
              - occ:2062348
            selectedCollectionIds:
              - col:18036
              - col:18094
              - col:18097
              - col:18505
              - col:18510
              - col:18529
              - col:18552
              - col:18553
              - col:18556
              - col:18564
              - col:18571
              - col:18573
              - col:18577
              - col:18581
              - col:18584
              - col:18599
              - col:18601
              - col:18602
              - col:18718
              - col:18729
              - col:18737
              - col:18740
              - col:18745
              - col:26549
              - col:18559
              - col:60252
              - col:75067
              - col:161381
              - col:162637
              - col:189790
              - col:68441
              - col:202120
              - col:242028
            sourceReferenceIds:
              - ref:1952
              - ref:6294
              - ref:6209
              - ref:2609
              - ref:1951
              - ref:2050
              - ref:2379
              - ref:51759
              - ref:2596
              - ref:7292
              - ref:23650
              - ref:24838
              - ref:52569
              - ref:52953
              - ref:63794
              - ref:53518
              - ref:69231
              - ref:94376
            originalIdentificationMappings:
              - occurrenceId: occ:187644
                originalIdentifiedName: Hipparion minor n. sp.
                acceptedName: Nannippus aztecus
                difference: null
              - occurrenceId: occ:188126
                originalIdentifiedName: Nannippus minor
                acceptedName: Nannippus aztecus
                difference: null
              - occurrenceId: occ:688011
                originalIdentifiedName: Hipparion minus
                acceptedName: Nannippus aztecus
                difference: null
              - occurrenceId: occ:699215
                originalIdentifiedName: Hipparion minus
                acceptedName: Nannippus aztecus
                difference: null
              - occurrenceId: occ:1235468
                originalIdentifiedName: Nannippus minor
                acceptedName: Nannippus aztecus
                difference: null
              - occurrenceId: occ:1427476
                originalIdentifiedName: Nannippus minor
                acceptedName: Nannippus aztecus
                difference: null
              - occurrenceId: occ:1448669
                originalIdentifiedName: Hipparion minus
                acceptedName: Nannippus aztecus
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

# Nannippus aztecus
