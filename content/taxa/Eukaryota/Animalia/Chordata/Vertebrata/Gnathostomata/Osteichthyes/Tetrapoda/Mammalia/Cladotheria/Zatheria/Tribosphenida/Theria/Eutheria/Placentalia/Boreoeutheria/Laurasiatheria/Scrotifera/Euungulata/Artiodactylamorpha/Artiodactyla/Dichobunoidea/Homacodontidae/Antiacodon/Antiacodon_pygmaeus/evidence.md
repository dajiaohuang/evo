---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Antiacodon pygmaeus
    rank: species
    sourceDatasetId: null
    name:
      zh: Antiacodon pygmaeus
      en: Antiacodon pygmaeus
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
            title: PBDB accepted record — Antiacodon pygmaeus
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=47766&show=parent,app,attr
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
            locator: 2026-10-02 occurrence response accepted_no txn:47766; original response record indices retained in data/sources/mammalia-occurrence-guides-2026-10-02-records.jsonl.gz.
            accessedAt: 2026-10-02
            responseSha256: 368dafda8e7422b86d7992dc15a10defe699a9db146057d35e01a82c1c54bfa2
            pbdbTaxonId: txn:47766
            selectedOccurrenceIds:
              - occ:173724
              - occ:173809
              - occ:173811
              - occ:173931
              - occ:173967
              - occ:174054
              - occ:174073
              - occ:174105
              - occ:174140
              - occ:174161
              - occ:174192
              - occ:174261
              - occ:174286
              - occ:174375
              - occ:174400
              - occ:174501
              - occ:174572
              - occ:174625
              - occ:175052
              - occ:175155
              - occ:175288
              - occ:175456
              - occ:337231
              - occ:337265
              - occ:337297
              - occ:461392
              - occ:461394
              - occ:463717
              - occ:463718
              - occ:463719
            selectedCollectionIds:
              - col:16136
              - col:16158
              - col:16160
              - col:16203
              - col:16205
              - col:16210
              - col:16214
              - col:16218
              - col:16219
              - col:16223
              - col:16227
              - col:16228
              - col:16232
              - col:16240
              - col:16241
              - col:16255
              - col:16278
              - col:16284
              - col:16396
              - col:16415
              - col:16448
              - col:16504
              - col:31720
              - col:31721
              - col:31723
              - col:13322
              - col:45521
              - col:45801
              - col:45739
              - col:45738
            sourceReferenceIds:
              - ref:3606
              - ref:1115
              - ref:1623
              - ref:1441
              - ref:3596
              - ref:3609
              - ref:2921
              - ref:2182
              - ref:3329
              - ref:8545
              - ref:11941
            originalIdentificationMappings:
              - occurrenceId: occ:173967
                originalIdentifiedName: Antiacodon pygmaeus n. sp.
                acceptedName: Antiacodon pygmaeus
                difference: null
              - occurrenceId: occ:337231
                originalIdentifiedName: Lophiotherium pygmaeum
                acceptedName: Antiacodon pygmaeus
                difference: recombined as
              - occurrenceId: occ:337265
                originalIdentifiedName: Lophiotherium pygmaeum
                acceptedName: Antiacodon pygmaeus
                difference: recombined as
              - occurrenceId: occ:337297
                originalIdentifiedName: Lophiotherium pygmaeum
                acceptedName: Antiacodon pygmaeus
                difference: recombined as
              - occurrenceId: occ:461392
                originalIdentifiedName: Lophiotherium pygmaeum
                acceptedName: Antiacodon pygmaeus
                difference: recombined as
              - occurrenceId: occ:461394
                originalIdentifiedName: Lophiotherium pygmaeum
                acceptedName: Antiacodon pygmaeus
                difference: recombined as
              - occurrenceId: occ:463717
                originalIdentifiedName: Lophiotherium pygmaeum
                acceptedName: Antiacodon pygmaeus
                difference: recombined as
              - occurrenceId: occ:463718
                originalIdentifiedName: Lophiotherium pygmaeum
                acceptedName: Antiacodon pygmaeus
                difference: recombined as
              - occurrenceId: occ:463719
                originalIdentifiedName: Lophiotherium pygmaeum
                acceptedName: Antiacodon pygmaeus
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

# Antiacodon pygmaeus
