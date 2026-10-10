---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Prototomus phobos
    rank: species
    sourceDatasetId: null
    name:
      zh: Prototomus phobos
      en: Prototomus phobos
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
            title: PBDB accepted record — Prototomus phobos
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=51110&show=parent,app,attr
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
            locator: 2026-10-02 occurrence response accepted_no txn:51110; original response record indices retained in data/sources/mammalia-occurrence-guides-2026-10-02-records.jsonl.gz.
            accessedAt: 2026-10-02
            responseSha256: 368dafda8e7422b86d7992dc15a10defe699a9db146057d35e01a82c1c54bfa2
            pbdbTaxonId: txn:51110
            selectedOccurrenceIds:
              - occ:168949
              - occ:170653
              - occ:170661
              - occ:170663
              - occ:171081
              - occ:171286
              - occ:171297
              - occ:171390
              - occ:171395
              - occ:171408
              - occ:171452
              - occ:171481
              - occ:171549
              - occ:171694
              - occ:171710
              - occ:171766
              - occ:171793
              - occ:171834
              - occ:171856
              - occ:171870
              - occ:171894
              - occ:171915
              - occ:171975
              - occ:171983
              - occ:172031
              - occ:172059
              - occ:172223
              - occ:172457
              - occ:469279
              - occ:469904
              - occ:469951
              - occ:470026
              - occ:470671
              - occ:470791
              - occ:471005
              - occ:471061
              - occ:471221
              - occ:471395
              - occ:471402
              - occ:471439
            selectedCollectionIds:
              - col:15485
              - col:15587
              - col:15589
              - col:15590
              - col:15694
              - col:15726
              - col:15727
              - col:15735
              - col:15736
              - col:15738
              - col:15746
              - col:15752
              - col:15758
              - col:15776
              - col:15779
              - col:15788
              - col:15790
              - col:15793
              - col:15794
              - col:15796
              - col:15799
              - col:15803
              - col:15814
              - col:15815
              - col:15826
              - col:15835
              - col:15857
              - col:15899
              - col:46659
              - col:46720
              - col:46726
              - col:46731
              - col:46784
              - col:46792
              - col:46807
              - col:46809
              - col:46819
              - col:46834
              - col:46835
              - col:46838
            sourceReferenceIds:
              - ref:2785
              - ref:1666
              - ref:11717
            originalIdentificationMappings: []
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

# Prototomus phobos
