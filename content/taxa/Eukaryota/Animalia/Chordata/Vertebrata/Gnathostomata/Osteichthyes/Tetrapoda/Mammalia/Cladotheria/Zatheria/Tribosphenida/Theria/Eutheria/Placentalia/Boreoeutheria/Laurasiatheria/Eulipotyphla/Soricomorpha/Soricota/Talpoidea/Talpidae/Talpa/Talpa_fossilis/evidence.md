---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Talpa fossilis
    rank: species
    sourceDatasetId: null
    name:
      zh: Talpa fossilis
      en: Talpa fossilis
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
            title: PBDB accepted record — Talpa fossilis
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=93614&show=parent,app,attr
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
            locator: 2026-10-02 occurrence response accepted_no txn:93614; original response record indices retained in data/sources/mammalia-occurrence-guides-2026-10-02-records.jsonl.gz.
            accessedAt: 2026-10-02
            responseSha256: 368dafda8e7422b86d7992dc15a10defe699a9db146057d35e01a82c1c54bfa2
            pbdbTaxonId: txn:93614
            selectedOccurrenceIds:
              - occ:341674
              - occ:341766
              - occ:342243
              - occ:344810
              - occ:356180
              - occ:357103
              - occ:357158
              - occ:374125
              - occ:374232
              - occ:375112
              - occ:375469
              - occ:375601
              - occ:375673
              - occ:375758
              - occ:375777
              - occ:375807
              - occ:375836
              - occ:375867
              - occ:375900
              - occ:375926
              - occ:375958
              - occ:376009
              - occ:376040
              - occ:376058
              - occ:379601
              - occ:379639
              - occ:380242
              - occ:381350
              - occ:411472
              - occ:635941
              - occ:635946
              - occ:636179
              - occ:1528729
              - occ:1528732
              - occ:2048216
            selectedCollectionIds:
              - col:32192
              - col:32194
              - col:32189
              - col:32485
              - col:33973
              - col:33975
              - col:34009
              - col:35369
              - col:35371
              - col:35431
              - col:35442
              - col:35457
              - col:35459
              - col:35463
              - col:35464
              - col:35465
              - col:35466
              - col:35467
              - col:35468
              - col:35469
              - col:35472
              - col:35473
              - col:35474
              - col:35476
              - col:35905
              - col:35907
              - col:36000
              - col:36214
              - col:39797
              - col:68413
              - col:49096
              - col:35064
              - col:205090
              - col:205089
              - col:276686
            sourceReferenceIds:
              - ref:8655
              - ref:19740
              - ref:8762
              - ref:9534
              - ref:9643
              - ref:9672
              - ref:10779
              - ref:19698
              - ref:73905
              - ref:93840
            originalIdentificationMappings:
              - occurrenceId: occ:411472
                originalIdentifiedName: Talpa "fossilis"
                acceptedName: Talpa fossilis
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

# Talpa fossilis
