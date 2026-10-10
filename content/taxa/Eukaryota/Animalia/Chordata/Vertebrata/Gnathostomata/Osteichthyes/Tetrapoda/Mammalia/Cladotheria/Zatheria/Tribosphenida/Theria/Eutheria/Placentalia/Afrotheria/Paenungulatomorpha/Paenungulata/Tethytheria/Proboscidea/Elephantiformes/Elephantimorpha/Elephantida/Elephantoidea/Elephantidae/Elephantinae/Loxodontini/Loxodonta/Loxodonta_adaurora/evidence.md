---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Loxodonta adaurora
    rank: species
    sourceDatasetId: null
    name:
      zh: Loxodonta adaurora
      en: Loxodonta adaurora
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
            title: PBDB accepted record — Loxodonta adaurora
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=473970&show=parent,app,attr
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
            locator: 2026-10-02 occurrence response accepted_no txn:473970; original response record indices retained in data/sources/mammalia-occurrence-guides-2026-10-02-records.jsonl.gz.
            accessedAt: 2026-10-02
            responseSha256: 368dafda8e7422b86d7992dc15a10defe699a9db146057d35e01a82c1c54bfa2
            pbdbTaxonId: txn:473970
            selectedOccurrenceIds:
              - occ:212174
              - occ:212187
              - occ:212202
              - occ:213345
              - occ:213378
              - occ:218142
              - occ:218647
              - occ:218674
              - occ:218698
              - occ:219591
              - occ:221400
              - occ:221434
              - occ:221603
              - occ:222144
              - occ:222373
              - occ:222388
              - occ:223090
              - occ:223126
              - occ:223891
              - occ:224207
              - occ:224348
              - occ:224350
              - occ:224356
              - occ:224381
              - occ:224383
              - occ:224420
              - occ:226464
              - occ:227404
              - occ:227479
              - occ:227509
              - occ:227688
              - occ:227720
              - occ:1639887
            selectedCollectionIds:
              - col:21334
              - col:21335
              - col:21336
              - col:21783
              - col:21785
              - col:22267
              - col:22321
              - col:22323
              - col:22324
              - col:22559
              - col:21282
              - col:21283
              - col:21307
              - col:21398
              - col:21434
              - col:21439
              - col:21503
              - col:21504
              - col:21637
              - col:21737
              - col:21756
              - col:21757
              - col:21758
              - col:21767
              - col:21768
              - col:21781
              - col:22000
              - col:22132
              - col:22160
              - col:22171
              - col:22234
              - col:22238
              - col:232486
            sourceReferenceIds:
              - ref:4648
              - ref:4847
              - ref:4782
              - ref:5571
              - ref:5479
              - ref:5492
              - ref:5481
              - ref:5640
              - ref:4454
              - ref:10215
              - ref:4486
              - ref:4768
              - ref:4835
              - ref:4849
              - ref:4773
              - ref:5363
              - ref:4442
              - ref:5444
              - ref:86649
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

# Loxodonta adaurora
