---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Castillomys crusafonti
    rank: species
    sourceDatasetId: null
    name:
      zh: Castillomys crusafonti
      en: Castillomys crusafonti
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
            title: PBDB accepted record — Castillomys crusafonti
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=58769&show=parent,app,attr
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
            locator: 2026-10-02 occurrence response accepted_no txn:58769; original response record indices retained in data/sources/mammalia-occurrence-guides-2026-10-02-records.jsonl.gz.
            accessedAt: 2026-10-02
            responseSha256: 368dafda8e7422b86d7992dc15a10defe699a9db146057d35e01a82c1c54bfa2
            pbdbTaxonId: txn:58769
            selectedOccurrenceIds:
              - occ:340408
              - occ:340460
              - occ:340472
              - occ:340487
              - occ:368987
              - occ:369061
              - occ:369246
              - occ:369276
              - occ:369380
              - occ:369385
              - occ:369651
              - occ:369836
              - occ:369844
              - occ:369856
              - occ:369877
              - occ:369884
              - occ:370048
              - occ:370307
              - occ:370364
              - occ:370524
              - occ:371391
              - occ:371474
              - occ:371831
              - occ:372375
              - occ:372398
              - occ:373295
              - occ:373325
              - occ:373330
              - occ:387084
              - occ:387586
              - occ:418082
              - occ:418294
              - occ:429258
              - occ:429272
              - occ:429342
              - occ:429374
              - occ:429387
              - occ:488145
              - occ:632340
            selectedCollectionIds:
              - col:32103
              - col:32109
              - col:32110
              - col:32112
              - col:34898
              - col:34911
              - col:34929
              - col:34932
              - col:34941
              - col:34942
              - col:34943
              - col:34996
              - col:34997
              - col:34998
              - col:35001
              - col:35002
              - col:35038
              - col:26752
              - col:35064
              - col:35078
              - col:35169
              - col:35182
              - col:35229
              - col:35252
              - col:35256
              - col:35343
              - col:35344
              - col:35345
              - col:36975
              - col:37049
              - col:40548
              - col:40564
              - col:41932
              - col:41933
              - col:41943
              - col:41944
              - col:41946
              - col:49054
              - col:68046
            sourceReferenceIds:
              - ref:8633
              - ref:8635
              - ref:9343
              - ref:9373
              - ref:9381
              - ref:9388
              - ref:9391
              - ref:9392
              - ref:9426
              - ref:9425
              - ref:9415
              - ref:9440
              - ref:9527
              - ref:9888
              - ref:9928
              - ref:10947
              - ref:10949
              - ref:11202
              - ref:13054
              - ref:19506
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

# Castillomys crusafonti
