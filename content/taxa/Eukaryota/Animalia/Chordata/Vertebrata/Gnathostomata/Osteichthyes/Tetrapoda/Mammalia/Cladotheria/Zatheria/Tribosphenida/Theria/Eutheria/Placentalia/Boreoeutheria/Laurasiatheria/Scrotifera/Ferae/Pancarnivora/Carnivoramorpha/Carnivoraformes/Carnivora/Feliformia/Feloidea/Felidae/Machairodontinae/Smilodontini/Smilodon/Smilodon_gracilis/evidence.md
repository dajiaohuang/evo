---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Smilodon gracilis
    rank: species
    sourceDatasetId: null
    name:
      zh: Smilodon gracilis
      en: Smilodon gracilis
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
            title: PBDB accepted record — Smilodon gracilis
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=51615&show=parent,app,attr
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
            locator: 2026-10-02 occurrence response accepted_no txn:51615; original response record indices retained in data/sources/mammalia-occurrence-guides-2026-10-02-records.jsonl.gz.
            accessedAt: 2026-10-02
            responseSha256: 368dafda8e7422b86d7992dc15a10defe699a9db146057d35e01a82c1c54bfa2
            pbdbTaxonId: txn:51615
            selectedOccurrenceIds:
              - occ:193669
              - occ:193680
              - occ:193710
              - occ:193779
              - occ:195802
              - occ:195866
              - occ:195889
              - occ:195908
              - occ:195939
              - occ:196986
              - occ:197400
              - occ:197576
              - occ:197802
              - occ:197825
              - occ:197997
              - occ:198119
              - occ:198523
              - occ:199086
              - occ:888580
              - occ:1021250
              - occ:1028908
              - occ:1137415
              - occ:1237487
              - occ:1519634
            selectedCollectionIds:
              - col:19746
              - col:19749
              - col:19752
              - col:19758
              - col:20124
              - col:20126
              - col:20127
              - col:20128
              - col:20130
              - col:20299
              - col:20334
              - col:20351
              - col:20384
              - col:20385
              - col:20400
              - col:20415
              - col:20479
              - col:20558
              - col:98313
              - col:125085
              - col:123875
              - col:144977
              - col:212364
            sourceReferenceIds:
              - ref:6294
              - ref:3567
              - ref:1186
              - ref:2615
              - ref:3580
              - ref:3872
              - ref:1960
              - ref:1628
              - ref:1794
              - ref:33964
              - ref:40558
              - ref:46869
              - ref:54070
              - ref:73373
            originalIdentificationMappings:
              - occurrenceId: occ:198523
                originalIdentifiedName: Smilodontopsis gracilis n. sp.
                acceptedName: Smilodon gracilis
                difference: recombined as
              - occurrenceId: occ:1237487
                originalIdentifiedName: Uncia mercerii n. sp.
                acceptedName: Smilodon gracilis
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

# Smilodon gracilis
