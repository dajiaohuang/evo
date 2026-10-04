---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Sespedectes singularis
    rank: species
    sourceDatasetId: null
    name:
      zh: Sespedectes singularis
      en: Sespedectes singularis
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
            title: PBDB accepted record — Sespedectes singularis
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=51533&show=parent,app,attr
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
            locator: 2026-10-02 occurrence response accepted_no txn:51533; original response record indices retained in data/sources/mammalia-occurrence-guides-2026-10-02-records.jsonl.gz.
            accessedAt: 2026-10-02
            responseSha256: 368dafda8e7422b86d7992dc15a10defe699a9db146057d35e01a82c1c54bfa2
            pbdbTaxonId: txn:51533
            selectedOccurrenceIds:
              - occ:175624
              - occ:175844
              - occ:176007
              - occ:176103
              - occ:176562
              - occ:176591
              - occ:176616
              - occ:176655
              - occ:176658
              - occ:176662
              - occ:176669
              - occ:177080
              - occ:177098
              - occ:177112
              - occ:177122
              - occ:177130
              - occ:177132
              - occ:177136
              - occ:177138
              - occ:177155
              - occ:177171
              - occ:177176
              - occ:177184
              - occ:177216
              - occ:177222
              - occ:177241
              - occ:177265
              - occ:177291
              - occ:177300
              - occ:177306
              - occ:177311
              - occ:177318
              - occ:177328
              - occ:177341
              - occ:177365
              - occ:177370
              - occ:1635396
            selectedCollectionIds:
              - col:16527
              - col:16585
              - col:16603
              - col:16615
              - col:16673
              - col:16677
              - col:16682
              - col:16693
              - col:16694
              - col:16695
              - col:16696
              - col:16763
              - col:16764
              - col:16765
              - col:16766
              - col:16767
              - col:16768
              - col:16770
              - col:16771
              - col:16780
              - col:16783
              - col:16785
              - col:16786
              - col:16789
              - col:16790
              - col:16791
              - col:16793
              - col:16801
              - col:16802
              - col:16804
              - col:16805
              - col:16806
              - col:16807
              - col:16810
              - col:16812
              - col:16813
              - col:167831
            sourceReferenceIds:
              - ref:1681
              - ref:3538
              - ref:92734
              - ref:6294
              - ref:3540
              - ref:2072
              - ref:2059
              - ref:54866
            originalIdentificationMappings:
              - occurrenceId: occ:177341
                originalIdentifiedName: Sespedectes singularis n. sp.
                acceptedName: Sespedectes singularis
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

# Sespedectes singularis
