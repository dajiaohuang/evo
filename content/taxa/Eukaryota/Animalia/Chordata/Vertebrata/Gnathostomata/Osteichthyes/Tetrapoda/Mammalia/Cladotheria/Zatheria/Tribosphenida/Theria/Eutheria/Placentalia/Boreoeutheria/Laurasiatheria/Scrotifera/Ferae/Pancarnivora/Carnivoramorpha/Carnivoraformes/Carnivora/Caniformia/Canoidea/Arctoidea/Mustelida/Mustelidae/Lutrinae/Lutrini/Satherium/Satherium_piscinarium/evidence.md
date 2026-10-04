---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Satherium piscinarium
    rank: species
    sourceDatasetId: null
    name:
      zh: Satherium piscinarium
      en: Satherium piscinarium
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
            title: PBDB accepted record — Satherium piscinarium
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=47806&show=parent,app,attr
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
            locator: 2026-10-02 occurrence response accepted_no txn:47806; original response record indices retained in data/sources/mammalia-occurrence-guides-2026-10-02-records.jsonl.gz.
            accessedAt: 2026-10-02
            responseSha256: 368dafda8e7422b86d7992dc15a10defe699a9db146057d35e01a82c1c54bfa2
            pbdbTaxonId: txn:47806
            selectedOccurrenceIds:
              - occ:193709
              - occ:193909
              - occ:193919
              - occ:193940
              - occ:193943
              - occ:193952
              - occ:193954
              - occ:193958
              - occ:193984
              - occ:193991
              - occ:193993
              - occ:193996
              - occ:194003
              - occ:194011
              - occ:194014
              - occ:194019
              - occ:194025
              - occ:194029
              - occ:194032
              - occ:194034
              - occ:194037
              - occ:194038
              - occ:194044
              - occ:194046
              - occ:194048
              - occ:194051
              - occ:194052
              - occ:194057
              - occ:194063
              - occ:194065
              - occ:194068
              - occ:194072
              - occ:194074
              - occ:194092
              - occ:194119
              - occ:194173
              - occ:194185
              - occ:194414
              - occ:194655
              - occ:194725
              - occ:194888
              - occ:195260
              - occ:197142
              - occ:1381125
            selectedCollectionIds:
              - col:19752
              - col:19808
              - col:19812
              - col:19815
              - col:19816
              - col:19817
              - col:19818
              - col:19819
              - col:19831
              - col:19838
              - col:19839
              - col:19842
              - col:19848
              - col:19853
              - col:19855
              - col:19860
              - col:19863
              - col:19866
              - col:19867
              - col:19868
              - col:19870
              - col:19871
              - col:19876
              - col:19878
              - col:19880
              - col:19883
              - col:19884
              - col:19888
              - col:19889
              - col:19890
              - col:19893
              - col:19897
              - col:19899
              - col:19903
              - col:19906
              - col:19913
              - col:19915
              - col:19936
              - col:19955
              - col:19963
              - col:20002
              - col:20062
              - col:20308
              - col:181255
            sourceReferenceIds:
              - ref:2615
              - ref:1595
              - ref:1069
              - ref:6294
              - ref:3009
              - ref:1894
              - ref:2625
              - ref:60257
            originalIdentificationMappings:
              - occurrenceId: occ:193909
                originalIdentifiedName: Lutra piscinaria
                acceptedName: Satherium piscinarium
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

# Satherium piscinarium
