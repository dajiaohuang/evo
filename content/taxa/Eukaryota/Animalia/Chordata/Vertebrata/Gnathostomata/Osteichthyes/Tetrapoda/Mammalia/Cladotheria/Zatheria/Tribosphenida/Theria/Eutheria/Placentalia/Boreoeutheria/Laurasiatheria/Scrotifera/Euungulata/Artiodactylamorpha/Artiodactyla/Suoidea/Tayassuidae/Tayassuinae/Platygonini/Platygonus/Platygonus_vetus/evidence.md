---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Platygonus vetus
    rank: species
    sourceDatasetId: null
    name:
      zh: Platygonus vetus
      en: Platygonus vetus
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
            title: PBDB accepted record — Platygonus vetus
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=50417&show=parent,app,attr
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
            locator: 2026-10-02 occurrence response accepted_no txn:50417; original response record indices retained in data/sources/mammalia-occurrence-guides-2026-10-02-records.jsonl.gz.
            accessedAt: 2026-10-02
            responseSha256: 368dafda8e7422b86d7992dc15a10defe699a9db146057d35e01a82c1c54bfa2
            pbdbTaxonId: txn:50417
            selectedOccurrenceIds:
              - occ:194799
              - occ:196169
              - occ:196829
              - occ:197078
              - occ:197455
              - occ:197582
              - occ:197808
              - occ:198506
              - occ:198678
              - occ:198960
              - occ:842279
              - occ:919632
              - occ:1017130
              - occ:1034046
              - occ:1034047
              - occ:1034076
              - occ:1034167
              - occ:1340833
              - occ:1607384
            selectedCollectionIds:
              - col:19970
              - col:20163
              - col:20289
              - col:20302
              - col:20342
              - col:20351
              - col:20384
              - col:20478
              - col:20498
              - col:20530
              - col:93485
              - col:104705
              - col:124540
              - col:126660
              - col:20327
              - col:227368
            sourceReferenceIds:
              - ref:6197
              - ref:6202
              - ref:6294
              - ref:40915
              - ref:1319
              - ref:2615
              - ref:31630
              - ref:1461
              - ref:40259
              - ref:41113
              - ref:40636
              - ref:41282
              - ref:82811
            originalIdentificationMappings:
              - occurrenceId: occ:197078
                originalIdentifiedName: Platygonus cumberlandensis n. sp.
                acceptedName: Platygonus vetus
                difference: null
              - occurrenceId: occ:842279
                originalIdentifiedName: Platygonus vetus n. sp.
                acceptedName: Platygonus vetus
                difference: null
              - occurrenceId: occ:1034047
                originalIdentifiedName: Platygonus cumberlandensis
                acceptedName: Platygonus vetus
                difference: null
              - occurrenceId: occ:1034167
                originalIdentifiedName: Platygonus intermedius n. sp.
                acceptedName: Platygonus vetus
                difference: null
              - occurrenceId: occ:1607384
                originalIdentifiedName: Platygonus cumberlandensis
                acceptedName: Platygonus vetus
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

# Platygonus vetus
