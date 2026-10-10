---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Gomphotherium angustidens
    rank: species
    sourceDatasetId: null
    name:
      zh: Gomphotherium angustidens
      en: Gomphotherium angustidens
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
            title: PBDB accepted record — Gomphotherium angustidens
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=157812&show=parent,app,attr
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
            locator: 2026-10-02 occurrence response accepted_no txn:157812; original response record indices retained in data/sources/mammalia-occurrence-guides-2026-10-02-records.jsonl.gz.
            accessedAt: 2026-10-02
            responseSha256: 368dafda8e7422b86d7992dc15a10defe699a9db146057d35e01a82c1c54bfa2
            pbdbTaxonId: txn:157812
            selectedOccurrenceIds:
              - occ:337754
              - occ:339825
              - occ:339860
              - occ:339984
              - occ:340078
              - occ:340079
              - occ:371204
              - occ:372671
              - occ:374929
              - occ:419108
              - occ:428447
              - occ:435549
              - occ:435572
              - occ:462135
              - occ:462258
              - occ:462294
              - occ:462418
              - occ:466435
              - occ:466522
              - occ:502007
              - occ:541086
              - occ:640834
              - occ:640893
              - occ:641000
              - occ:641110
              - occ:667189
              - occ:926841
              - occ:1086800
              - occ:1086818
              - occ:1129973
              - occ:1149251
              - occ:1309597
              - occ:1313298
              - occ:1353618
              - occ:1374056
              - occ:1392921
              - occ:1422113
              - occ:1423519
              - occ:1423535
              - occ:1423559
              - occ:1423575
              - occ:1497204
              - occ:1533636
              - occ:1605546
            selectedCollectionIds:
              - col:31775
              - col:32071
              - col:32072
              - col:32074
              - col:32075
              - col:32076
              - col:35125
              - col:35277
              - col:34581
              - col:40716
              - col:41818
              - col:42588
              - col:42595
              - col:45599
              - col:45604
              - col:45611
              - col:45613
              - col:46225
              - col:46236
              - col:51002
              - col:56563
              - col:69098
              - col:69099
              - col:69106
              - col:69116
              - col:68547
              - col:106003
              - col:136322
              - col:136334
              - col:143472
              - col:122454
              - col:175727
              - col:136269
              - col:85514
              - col:187580
              - col:142149
              - col:197463
              - col:187347
              - col:197672
              - col:197674
              - col:197673
              - col:70806
              - col:215201
              - col:123296
            sourceReferenceIds:
              - ref:8548
              - ref:8616
              - ref:8618
              - ref:9455
              - ref:9487
              - ref:9130
              - ref:10964
              - ref:11188
              - ref:11342
              - ref:11994
              - ref:12335
              - ref:13612
              - ref:15232
              - ref:19926
              - ref:24292
              - ref:35360
              - ref:43601
              - ref:46485
              - ref:47354
              - ref:57549
              - ref:57907
              - ref:60839
              - ref:62965
              - ref:64717
              - ref:67340
              - ref:67400
              - ref:71914
              - ref:73981
              - ref:15013
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

# Gomphotherium angustidens
