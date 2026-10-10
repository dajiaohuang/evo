---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Cormohipparion occidentale
    rank: species
    sourceDatasetId: null
    name:
      zh: Cormohipparion occidentale
      en: Cormohipparion occidentale
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
            title: PBDB accepted record — Cormohipparion occidentale
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=46995&show=parent,app,attr
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
            locator: 2026-10-02 occurrence response accepted_no txn:46995; original response record indices retained in data/sources/mammalia-occurrence-guides-2026-10-02-records.jsonl.gz.
            accessedAt: 2026-10-02
            responseSha256: 368dafda8e7422b86d7992dc15a10defe699a9db146057d35e01a82c1c54bfa2
            pbdbTaxonId: txn:46995
            selectedOccurrenceIds:
              - occ:184619
              - occ:185454
              - occ:185642
              - occ:185979
              - occ:186616
              - occ:187449
              - occ:187509
              - occ:187596
              - occ:191539
              - occ:191557
              - occ:191790
              - occ:192628
              - occ:192854
              - occ:1209833
              - occ:1227253
              - occ:1281562
              - occ:1353105
              - occ:1353107
              - occ:1353111
              - occ:1353112
              - occ:1353133
              - occ:1353154
              - occ:1379512
              - occ:1674322
            selectedCollectionIds:
              - col:18092
              - col:18200
              - col:18214
              - col:18245
              - col:18324
              - col:18463
              - col:18481
              - col:18496
              - col:19322
              - col:19323
              - col:19384
              - col:19554
              - col:19609
              - col:18218
              - col:161374
              - col:170180
              - col:18242
              - col:18466
              - col:19528
              - col:18037
              - col:18327
              - col:18135
              - col:188779
              - col:19015
            sourceReferenceIds:
              - ref:3510
              - ref:1952
              - ref:6244
              - ref:6294
              - ref:63362
              - ref:1317
              - ref:1706
              - ref:3755
              - ref:3627
              - ref:2579
              - ref:3233
              - ref:45368
              - ref:52569
              - ref:55527
              - ref:61275
              - ref:2581
            originalIdentificationMappings:
              - occurrenceId: occ:185642
                originalIdentifiedName: Hippotherium occidentale
                acceptedName: Cormohipparion occidentale
                difference: recombined as
              - occurrenceId: occ:185979
                originalIdentifiedName: Hippotherium occidentale
                acceptedName: Cormohipparion occidentale
                difference: recombined as
              - occurrenceId: occ:187509
                originalIdentifiedName: Neohipparion occidentale
                acceptedName: Cormohipparion occidentale
                difference: recombined as
              - occurrenceId: occ:187596
                originalIdentifiedName: Hippotherium occidentale
                acceptedName: Cormohipparion occidentale
                difference: recombined as
              - occurrenceId: occ:192628
                originalIdentifiedName: Hipparion mohavense
                acceptedName: Cormohipparion occidentale
                difference: null
              - occurrenceId: occ:192854
                originalIdentifiedName: Hipparion platystyle n. sp.
                acceptedName: Cormohipparion occidentale
                difference: null
              - occurrenceId: occ:1674322
                originalIdentifiedName: Hipparion occidentale
                acceptedName: Cormohipparion occidentale
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

# Cormohipparion occidentale
