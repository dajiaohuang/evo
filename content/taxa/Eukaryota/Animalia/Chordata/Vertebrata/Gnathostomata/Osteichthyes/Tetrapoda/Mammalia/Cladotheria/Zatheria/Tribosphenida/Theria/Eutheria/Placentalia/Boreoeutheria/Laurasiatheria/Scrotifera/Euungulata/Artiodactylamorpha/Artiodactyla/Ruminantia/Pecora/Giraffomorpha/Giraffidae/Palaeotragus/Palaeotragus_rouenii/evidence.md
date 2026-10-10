---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Palaeotragus rouenii
    rank: species
    sourceDatasetId: null
    name:
      zh: Palaeotragus rouenii
      en: Palaeotragus rouenii
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
            title: PBDB accepted record — Palaeotragus rouenii
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=374426&show=parent,app,attr
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
            locator: 2026-10-02 occurrence response accepted_no txn:374426; original response record indices retained in data/sources/mammalia-occurrence-guides-2026-10-02-records.jsonl.gz.
            accessedAt: 2026-10-02
            responseSha256: 368dafda8e7422b86d7992dc15a10defe699a9db146057d35e01a82c1c54bfa2
            pbdbTaxonId: txn:374426
            selectedOccurrenceIds:
              - occ:363705
              - occ:681859
              - occ:706306
              - occ:706389
              - occ:706439
              - occ:1189499
              - occ:1212762
              - occ:1389662
              - occ:1448664
              - occ:1452837
              - occ:1453467
              - occ:1485450
              - occ:1488728
              - occ:1517472
              - occ:1517477
              - occ:1517481
              - occ:1517483
              - occ:1517488
              - occ:1517502
              - occ:1705328
            selectedCollectionIds:
              - col:34462
              - col:73553
              - col:75794
              - col:36143
              - col:75802
              - col:151910
              - col:157582
              - col:191070
              - col:202120
              - col:202630
              - col:32375
              - col:167995
              - col:73869
              - col:202219
              - col:95690
              - col:206460
              - col:95691
              - col:206461
              - col:195562
              - col:241687
            sourceReferenceIds:
              - ref:9080
              - ref:70746
              - ref:24838
              - ref:48740
              - ref:65728
              - ref:69452
              - ref:69231
              - ref:69436
              - ref:71048
              - ref:71311
              - ref:73227
              - ref:70440
              - ref:92682
            originalIdentificationMappings:
              - occurrenceId: occ:706306
                originalIdentifiedName: Palaeotragus roueni
                acceptedName: Palaeotragus rouenii
                difference: corrected to
              - occurrenceId: occ:706389
                originalIdentifiedName: Palaeotragus roueni
                acceptedName: Palaeotragus rouenii
                difference: corrected to
              - occurrenceId: occ:706439
                originalIdentifiedName: Palaeotragus roueni
                acceptedName: Palaeotragus rouenii
                difference: corrected to
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

# Palaeotragus rouenii
