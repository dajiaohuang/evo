---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Trigonictis macrodon
    rank: species
    sourceDatasetId: null
    name:
      zh: Trigonictis macrodon
      en: Trigonictis macrodon
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
            title: PBDB accepted record — Trigonictis macrodon
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=46578&show=parent,app,attr
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
            locator: 2026-10-02 occurrence response accepted_no txn:46578; original response record indices retained in data/sources/mammalia-occurrence-guides-2026-10-02-records.jsonl.gz.
            accessedAt: 2026-10-02
            responseSha256: 368dafda8e7422b86d7992dc15a10defe699a9db146057d35e01a82c1c54bfa2
            pbdbTaxonId: txn:46578
            selectedOccurrenceIds:
              - occ:193192
              - occ:193729
              - occ:193797
              - occ:193897
              - occ:193918
              - occ:193938
              - occ:193951
              - occ:193964
              - occ:193969
              - occ:193976
              - occ:193977
              - occ:193981
              - occ:193983
              - occ:193986
              - occ:193994
              - occ:194002
              - occ:194005
              - occ:194013
              - occ:194018
              - occ:194022
              - occ:194024
              - occ:194036
              - occ:194041
              - occ:194045
              - occ:194049
              - occ:194053
              - occ:194054
              - occ:194064
              - occ:194067
              - occ:194071
              - occ:194117
              - occ:194172
              - occ:194282
              - occ:194415
              - occ:194721
              - occ:195297
              - occ:195630
              - occ:195739
              - occ:195776
              - occ:197143
              - occ:197798
              - occ:888571
            selectedCollectionIds:
              - col:19651
              - col:19753
              - col:19761
              - col:19804
              - col:19812
              - col:19815
              - col:19817
              - col:19820
              - col:19822
              - col:19826
              - col:19827
              - col:19829
              - col:19830
              - col:19833
              - col:19840
              - col:19847
              - col:19850
              - col:19854
              - col:19859
              - col:19862
              - col:19863
              - col:19869
              - col:19874
              - col:19877
              - col:19881
              - col:19885
              - col:19886
              - col:19890
              - col:19892
              - col:19896
              - col:19906
              - col:19913
              - col:19929
              - col:19936
              - col:19963
              - col:20063
              - col:20118
              - col:20122
              - col:20123
              - col:20308
              - col:20384
              - col:98313
            sourceReferenceIds:
              - ref:6199
              - ref:2621
              - ref:2841
              - ref:6294
              - ref:1069
              - ref:1186
              - ref:2615
              - ref:3580
              - ref:33964
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

# Trigonictis macrodon
