---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Bison latifrons
    rank: species
    sourceDatasetId: null
    name:
      zh: Bison latifrons
      en: Bison latifrons
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
            title: PBDB accepted record — Bison latifrons
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=44612&show=parent,app,attr
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
            locator: 2026-10-02 occurrence response accepted_no txn:44612; original response record indices retained in data/sources/mammalia-occurrence-guides-2026-10-02-records.jsonl.gz.
            accessedAt: 2026-10-02
            responseSha256: 368dafda8e7422b86d7992dc15a10defe699a9db146057d35e01a82c1c54bfa2
            pbdbTaxonId: txn:44612
            selectedOccurrenceIds:
              - occ:196101
              - occ:198980
              - occ:199236
              - occ:199343
              - occ:199350
              - occ:199353
              - occ:199390
              - occ:199401
              - occ:199436
              - occ:199569
              - occ:199617
              - occ:199978
              - occ:613902
              - occ:690974
              - occ:690975
              - occ:690976
              - occ:690978
              - occ:800135
              - occ:1243019
              - occ:1492164
              - occ:1629211
              - occ:1671916
              - occ:2039287
            selectedCollectionIds:
              - col:20154
              - col:20533
              - col:20569
              - col:20580
              - col:20581
              - col:20582
              - col:20589
              - col:20590
              - col:20594
              - col:20605
              - col:20612
              - col:20647
              - col:65994
              - col:74362
              - col:74363
              - col:74364
              - col:74366
              - col:87059
              - col:163820
              - col:207456
              - col:230753
              - col:237076
              - col:75066
            sourceReferenceIds:
              - ref:6294
              - ref:1302
              - ref:9070
              - ref:3567
              - ref:3132
              - ref:2504
              - ref:1785
              - ref:1907
              - ref:2501
              - ref:18912
              - ref:24973
              - ref:24974
              - ref:24975
              - ref:24977
              - ref:29305
              - ref:53461
              - ref:71494
              - ref:85310
              - ref:2588
              - ref:93219
            originalIdentificationMappings:
              - occurrenceId: occ:800135
                originalIdentifiedName: Sus americana
                acceptedName: Bison latifrons
                difference: null
              - occurrenceId: occ:1243019
                originalIdentifiedName: Bos latifrons
                acceptedName: Bison latifrons
                difference: recombined as
              - occurrenceId: occ:1492164
                originalIdentifiedName: Bison alleni
                acceptedName: Bison latifrons
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

# Bison latifrons
