---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Adcrocuta eximia
    rank: species
    sourceDatasetId: null
    name:
      zh: Adcrocuta eximia
      en: Adcrocuta eximia
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
            title: PBDB accepted record — Adcrocuta eximia
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=374542&show=parent,app,attr
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
            locator: 2026-10-02 occurrence response accepted_no txn:374542; original response record indices retained in data/sources/mammalia-occurrence-guides-2026-10-02-records.jsonl.gz.
            accessedAt: 2026-10-02
            responseSha256: 368dafda8e7422b86d7992dc15a10defe699a9db146057d35e01a82c1c54bfa2
            pbdbTaxonId: txn:374542
            selectedOccurrenceIds:
              - occ:363520
              - occ:363687
              - occ:419660
              - occ:436695
              - occ:436715
              - occ:681851
              - occ:699385
              - occ:699774
              - occ:728686
              - occ:1212770
              - occ:1410263
              - occ:1414285
              - occ:1414912
              - occ:1423375
              - occ:1427675
              - occ:1431992
              - occ:1442966
              - occ:1443009
              - occ:1449244
              - occ:1452824
              - occ:1453406
              - occ:1453410
              - occ:1485442
              - occ:1498779
              - occ:1498807
              - occ:1498835
              - occ:1498855
              - occ:1551370
              - occ:1630711
              - occ:1678566
              - occ:1705317
            selectedCollectionIds:
              - col:34436
              - col:34462
              - col:35339
              - col:42675
              - col:42676
              - col:73553
              - col:75087
              - col:75169
              - col:78328
              - col:157582
              - col:194879
              - col:195435
              - col:195555
              - col:197642
              - col:197445
              - col:199755
              - col:201497
              - col:201500
              - col:202222
              - col:202630
              - col:182746
              - col:195489
              - col:167995
              - col:208566
              - col:208567
              - col:208568
              - col:208569
              - col:219042
              - col:231009
              - col:182682
              - col:241687
            sourceReferenceIds:
              - ref:9043
              - ref:9080
              - ref:11002
              - ref:11351
              - ref:24670
              - ref:25370
              - ref:26367
              - ref:51833
              - ref:66252
              - ref:66538
              - ref:66561
              - ref:67382
              - ref:67327
              - ref:67928
              - ref:68425
              - ref:61193
              - ref:69436
              - ref:69452
              - ref:71048
              - ref:72006
              - ref:75884
              - ref:85467
              - ref:90201
              - ref:92682
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

# Adcrocuta eximia
