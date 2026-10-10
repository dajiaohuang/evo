---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Gypsonictops hypoconus
    rank: species
    sourceDatasetId: null
    name:
      zh: Gypsonictops hypoconus
      en: Gypsonictops hypoconus
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
            title: PBDB accepted record — Gypsonictops hypoconus
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=46754&show=parent,app,attr
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
            locator: 2026-10-02 occurrence response accepted_no txn:46754; original response record indices retained in data/sources/mammalia-occurrence-guides-2026-10-02-records.jsonl.gz.
            accessedAt: 2026-10-02
            responseSha256: 368dafda8e7422b86d7992dc15a10defe699a9db146057d35e01a82c1c54bfa2
            pbdbTaxonId: txn:46754
            selectedOccurrenceIds:
              - occ:163047
              - occ:163076
              - occ:163086
              - occ:163094
              - occ:163102
              - occ:163113
              - occ:163133
              - occ:163144
              - occ:163156
              - occ:163170
              - occ:163210
              - occ:163221
              - occ:163319
              - occ:163336
              - occ:163348
              - occ:163376
              - occ:163428
              - occ:163437
              - occ:163447
              - occ:163463
              - occ:163483
              - occ:163496
              - occ:163508
              - occ:163516
              - occ:163547
              - occ:163617
              - occ:163674
              - occ:163678
              - occ:392777
              - occ:467146
              - occ:488858
              - occ:989265
              - occ:1292685
              - occ:1292707
            selectedCollectionIds:
              - col:14505
              - col:14514
              - col:14515
              - col:14516
              - col:14517
              - col:14519
              - col:14522
              - col:14524
              - col:14527
              - col:14537
              - col:14538
              - col:14565
              - col:14566
              - col:14570
              - col:14576
              - col:14585
              - col:14587
              - col:14591
              - col:14596
              - col:14598
              - col:14601
              - col:14604
              - col:14606
              - col:14612
              - col:14630
              - col:14641
              - col:14642
              - col:14616
              - col:14609
              - col:119009
              - col:172642
              - col:172644
            sourceReferenceIds:
              - ref:3880
              - ref:1129
              - ref:3198
              - ref:962
              - ref:1242
              - ref:3705
              - ref:2229
              - ref:13103
              - ref:38233
              - ref:56083
            originalIdentificationMappings:
              - occurrenceId: occ:163102
                originalIdentifiedName: Gypsonictops petersoni
                acceptedName: Gypsonictops hypoconus
                difference: null
              - occurrenceId: occ:163113
                originalIdentifiedName: Gypsonictops petersoni
                acceptedName: Gypsonictops hypoconus
                difference: null
              - occurrenceId: occ:163516
                originalIdentifiedName: Gypsonictops hypoconus n. sp.
                acceptedName: Gypsonictops hypoconus
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

# Gypsonictops hypoconus
