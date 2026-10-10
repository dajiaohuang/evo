---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Hypolagus vetus
    rank: species
    sourceDatasetId: null
    name:
      zh: Hypolagus vetus
      en: Hypolagus vetus
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
            title: PBDB accepted record — Hypolagus vetus
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=47658&show=parent,app,attr
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
            locator: 2026-10-02 occurrence response accepted_no txn:47658; original response record indices retained in data/sources/mammalia-occurrence-guides-2026-10-02-records.jsonl.gz.
            accessedAt: 2026-10-02
            responseSha256: 368dafda8e7422b86d7992dc15a10defe699a9db146057d35e01a82c1c54bfa2
            pbdbTaxonId: txn:47658
            selectedOccurrenceIds:
              - occ:185415
              - occ:185460
              - occ:185763
              - occ:185988
              - occ:186110
              - occ:189803
              - occ:189817
              - occ:189828
              - occ:189876
              - occ:189884
              - occ:190247
              - occ:190347
              - occ:190363
              - occ:190695
              - occ:190790
              - occ:192299
              - occ:192826
              - occ:193387
              - occ:193483
              - occ:193493
              - occ:194848
              - occ:195357
              - occ:195407
              - occ:195412
              - occ:195414
              - occ:195419
              - occ:195423
              - occ:195428
              - occ:195432
              - occ:195441
              - occ:195450
              - occ:838807
              - occ:847955
              - occ:1281589
            selectedCollectionIds:
              - col:18198
              - col:18201
              - col:18225
              - col:18247
              - col:18263
              - col:18931
              - col:18935
              - col:18936
              - col:18943
              - col:18944
              - col:19015
              - col:19035
              - col:19036
              - col:19085
              - col:19095
              - col:19514
              - col:19604
              - col:19673
              - col:19712
              - col:19714
              - col:19982
              - col:20075
              - col:20089
              - col:20092
              - col:20093
              - col:20094
              - col:20095
              - col:20097
              - col:20098
              - col:20099
              - col:20100
              - col:93106
              - col:94334
              - col:170191
            sourceReferenceIds:
              - ref:6208
              - ref:3510
              - ref:3405
              - ref:2096
              - ref:3118
              - ref:2581
              - ref:2647
              - ref:3684
              - ref:1052
              - ref:3234
              - ref:3632
              - ref:2893
              - ref:2876
              - ref:57025
              - ref:1186
              - ref:31461
              - ref:32080
              - ref:55527
            originalIdentificationMappings:
              - occurrenceId: occ:190790
                originalIdentifiedName: Hypolagus vetus n. sp.
                acceptedName: Hypolagus vetus
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

# Hypolagus vetus
