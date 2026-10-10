---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Chelonoidis gringorum
    rank: species
    sourceDatasetId: null
    name:
      zh: Chelonoidis gringorum
      en: Chelonoidis gringorum
    checkedAt: 2026-10-02
    sections:
      - topic: overview
        sourceIds:
          - pbdbPantestudinesTaxonomy20261002
          - pbdbPantestudinesOccurrences20261002
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
          - pbdbPantestudinesOccurrences20261002
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
          - pbdbPantestudinesOccurrences20261002
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
          - pbdbPantestudinesOccurrences20261002
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
          - pbdbPantestudinesOccurrences20261002
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
        - referenceId: ref-ca0a2dd7-4ca6-470e-bc1d-9aba950cee4c
          metadataVariant: 0
          sourceKey: pbdbPantestudinesTaxonomy20261002
          usage:
            title: PBDB accepted record — Chelonoidis gringorum
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=105264&show=parent,app,attr
            locator: Fixed dated accepted species OID and current same-name accepted hierarchy; PBDB ancestry remains separate from COL.
          originalFields:
            - id
            - title
            - url
            - version
            - license
            - locator
        - referenceId: ref-ca0a2dd7-4ca6-470e-bc1d-9aba950cee4c
          metadataVariant: 0
          sourceKey: pbdbPantestudinesOccurrences20261002
          usage:
            locator: 2026-10-02 occurrence response accepted_no txn:105264; original response record indices retained in data/sources/pantestudines-occurrence-guides-2026-10-02-records.jsonl.gz.
            accessedAt: 2026-10-02
            responseSha256: 420dc1c50b596ab358c29c338c87a9400512fd005c369ade614416e403aeff56
            pbdbTaxonId: txn:105264
            selectedOccurrenceIds:
              - occ:691633
              - occ:1368254
              - occ:1368255
              - occ:1368256
              - occ:1368257
              - occ:1388167
              - occ:1477685
              - occ:1477688
              - occ:1477689
              - occ:1477690
              - occ:1477691
              - occ:1477692
              - occ:1477694
              - occ:1477695
              - occ:1477696
              - occ:1477697
              - occ:1477698
              - occ:1477699
              - occ:1477700
              - occ:1477701
              - occ:1477702
              - occ:1477703
              - occ:1477704
              - occ:1477705
              - occ:1477706
              - occ:1477712
              - occ:1477713
              - occ:1477714
              - occ:1477715
              - occ:1498466
              - occ:1498467
              - occ:1498468
              - occ:1498469
              - occ:1498470
              - occ:1498475
              - occ:1498476
              - occ:1498477
            selectedCollectionIds:
              - col:74499
              - col:186559
              - col:186560
              - col:186561
              - col:186562
              - col:27311
              - col:206108
              - col:206109
              - col:206110
              - col:206111
              - col:206112
              - col:206113
              - col:206114
              - col:206115
              - col:206116
              - col:206117
              - col:206118
              - col:206119
              - col:206120
              - col:206122
              - col:206123
              - col:206124
              - col:206125
              - col:206126
              - col:206127
              - col:206128
              - col:206129
              - col:206130
              - col:206131
              - col:208499
              - col:208500
              - col:208501
              - col:208502
              - col:208503
              - col:208506
              - col:208507
              - col:208508
            sourceReferenceIds:
              - ref:42415
              - ref:62539
              - ref:64130
              - ref:71994
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

# Chelonoidis gringorum
