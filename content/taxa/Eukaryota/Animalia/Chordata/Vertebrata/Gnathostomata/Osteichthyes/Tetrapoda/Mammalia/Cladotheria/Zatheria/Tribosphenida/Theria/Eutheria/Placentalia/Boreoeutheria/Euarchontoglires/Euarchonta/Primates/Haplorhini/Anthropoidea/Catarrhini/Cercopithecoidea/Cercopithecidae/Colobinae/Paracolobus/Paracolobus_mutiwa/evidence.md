---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Paracolobus mutiwa
    rank: species
    sourceDatasetId: null
    name:
      zh: Paracolobus mutiwa
      en: Paracolobus mutiwa
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
            title: PBDB accepted record — Paracolobus mutiwa
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=430193&show=parent,app,attr
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
            locator: 2026-10-02 occurrence response accepted_no txn:430193; original response record indices retained in data/sources/mammalia-occurrence-guides-2026-10-02-records.jsonl.gz.
            accessedAt: 2026-10-02
            responseSha256: 368dafda8e7422b86d7992dc15a10defe699a9db146057d35e01a82c1c54bfa2
            pbdbTaxonId: txn:430193
            selectedOccurrenceIds:
              - occ:221880
              - occ:223092
              - occ:223325
              - occ:223375
              - occ:223385
              - occ:223465
              - occ:223470
              - occ:223550
              - occ:223592
              - occ:223609
              - occ:223656
              - occ:223676
              - occ:223715
              - occ:223839
              - occ:223880
              - occ:223906
              - occ:223925
              - occ:223963
              - occ:224003
              - occ:224091
              - occ:224133
              - occ:224173
              - occ:224186
              - occ:224221
              - occ:224280
              - occ:224308
              - occ:224334
              - occ:226385
              - occ:226395
              - occ:226471
              - occ:226529
              - occ:226536
              - occ:226568
              - occ:226580
              - occ:226637
            selectedCollectionIds:
              - col:21354
              - col:21503
              - col:21547
              - col:21554
              - col:21555
              - col:21568
              - col:21569
              - col:21592
              - col:21607
              - col:21608
              - col:21614
              - col:21617
              - col:21621
              - col:21632
              - col:21635
              - col:21640
              - col:21642
              - col:21651
              - col:21656
              - col:21668
              - col:21673
              - col:21681
              - col:21682
              - col:21740
              - col:21751
              - col:21754
              - col:21755
              - col:21987
              - col:21988
              - col:22001
              - col:22013
              - col:22014
              - col:22018
              - col:22020
              - col:22030
            sourceReferenceIds:
              - ref:4454
              - ref:4447
              - ref:4769
              - ref:4768
              - ref:5263
              - ref:4763
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

# Paracolobus mutiwa
