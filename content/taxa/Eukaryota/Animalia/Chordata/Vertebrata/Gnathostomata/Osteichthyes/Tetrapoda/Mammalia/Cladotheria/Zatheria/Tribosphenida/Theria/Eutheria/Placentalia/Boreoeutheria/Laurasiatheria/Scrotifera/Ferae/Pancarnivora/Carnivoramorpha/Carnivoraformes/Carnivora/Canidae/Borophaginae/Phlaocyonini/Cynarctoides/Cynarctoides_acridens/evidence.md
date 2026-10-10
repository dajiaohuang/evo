---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Cynarctoides acridens
    rank: species
    sourceDatasetId: null
    name:
      zh: Cynarctoides acridens
      en: Cynarctoides acridens
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
            title: PBDB accepted record — Cynarctoides acridens
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=45441&show=parent,app,attr
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
            locator: 2026-10-02 occurrence response accepted_no txn:45441; original response record indices retained in data/sources/mammalia-occurrence-guides-2026-10-02-records.jsonl.gz.
            accessedAt: 2026-10-02
            responseSha256: 368dafda8e7422b86d7992dc15a10defe699a9db146057d35e01a82c1c54bfa2
            pbdbTaxonId: txn:45441
            selectedOccurrenceIds:
              - occ:181237
              - occ:182614
              - occ:182761
              - occ:182930
              - occ:183103
              - occ:183120
              - occ:183204
              - occ:183237
              - occ:183282
              - occ:183289
              - occ:183336
              - occ:183367
              - occ:183373
              - occ:183424
              - occ:183552
              - occ:183569
              - occ:183585
              - occ:183607
              - occ:183616
              - occ:183622
              - occ:183627
              - occ:183639
              - occ:183680
              - occ:183711
              - occ:183727
              - occ:183761
              - occ:183791
              - occ:183815
              - occ:183832
              - occ:183852
              - occ:183859
              - occ:183881
              - occ:183906
              - occ:184041
              - occ:190525
              - occ:190561
              - occ:190593
              - occ:190618
              - occ:190631
              - occ:191115
              - occ:191486
              - occ:192033
              - occ:192421
              - occ:192547
              - occ:192910
              - occ:648262
              - occ:1520966
            selectedCollectionIds:
              - col:17462
              - col:17744
              - col:17780
              - col:17809
              - col:17844
              - col:17846
              - col:17865
              - col:17874
              - col:17880
              - col:17881
              - col:17891
              - col:17896
              - col:17898
              - col:17906
              - col:17917
              - col:17920
              - col:17923
              - col:17927
              - col:17929
              - col:17932
              - col:17934
              - col:17940
              - col:17955
              - col:17961
              - col:17963
              - col:17965
              - col:17971
              - col:17976
              - col:17978
              - col:17985
              - col:17987
              - col:17993
              - col:18001
              - col:18021
              - col:19073
              - col:19074
              - col:19075
              - col:19076
              - col:19077
              - col:19188
              - col:19312
              - col:19449
              - col:19530
              - col:19547
              - col:19616
              - col:28043
              - col:212624
            sourceReferenceIds:
              - ref:3558
              - ref:999
              - ref:2429
              - ref:3175
              - ref:2634
              - ref:19303
              - ref:73434
            originalIdentificationMappings:
              - occurrenceId: occ:183906
                originalIdentifiedName: Cynarctoides mustelinus n. sp.
                acceptedName: Cynarctoides acridens
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

# Cynarctoides acridens
