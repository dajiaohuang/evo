---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Aelurodon taxoides
    rank: species
    sourceDatasetId: null
    name:
      zh: Aelurodon taxoides
      en: Aelurodon taxoides
    reviewStatus: source-linked
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
            title: PBDB accepted record — Aelurodon taxoides
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=43778&show=parent,app,attr
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
            locator: 2026-10-02 occurrence response accepted_no txn:43778; original response record indices retained in data/sources/mammalia-occurrence-guides-2026-10-02-records.jsonl.gz.
            accessedAt: 2026-10-02
            responseSha256: 368dafda8e7422b86d7992dc15a10defe699a9db146057d35e01a82c1c54bfa2
            pbdbTaxonId: txn:43778
            selectedOccurrenceIds:
              - occ:184045
              - occ:184127
              - occ:184199
              - occ:184264
              - occ:184290
              - occ:184378
              - occ:184424
              - occ:184561
              - occ:184609
              - occ:184614
              - occ:184650
              - occ:184666
              - occ:184833
              - occ:184973
              - occ:185249
              - occ:185261
              - occ:185291
              - occ:185362
              - occ:185443
              - occ:185633
              - occ:185674
              - occ:185734
              - occ:185799
              - occ:185947
              - occ:185969
              - occ:186048
              - occ:186107
              - occ:186146
              - occ:186243
              - occ:186245
              - occ:186258
              - occ:186348
              - occ:186403
              - occ:186410
              - occ:186582
              - occ:186590
              - occ:186697
              - occ:186713
              - occ:186791
              - occ:186804
              - occ:186828
              - occ:186847
              - occ:186969
              - occ:187084
              - occ:187321
              - occ:187405
              - occ:187406
              - occ:187417
              - occ:187460
              - occ:187568
              - occ:187583
              - occ:187623
              - occ:188269
              - occ:189449
              - occ:191524
              - occ:191819
              - occ:1438333
              - occ:1438339
              - occ:1438351
              - occ:1438383
            selectedCollectionIds:
              - col:18022
              - col:18032
              - col:18042
              - col:18057
              - col:18063
              - col:18071
              - col:18074
              - col:18087
              - col:18091
              - col:18092
              - col:18095
              - col:18096
              - col:18118
              - col:18134
              - col:18171
              - col:18174
              - col:18179
              - col:18190
              - col:18200
              - col:18214
              - col:18218
              - col:18222
              - col:18227
              - col:18244
              - col:18245
              - col:18256
              - col:18262
              - col:18268
              - col:18278
              - col:18279
              - col:18283
              - col:18288
              - col:18299
              - col:18301
              - col:18321
              - col:18323
              - col:18333
              - col:18336
              - col:18348
              - col:18352
              - col:18355
              - col:18358
              - col:18378
              - col:18409
              - col:18446
              - col:18457
              - col:18458
              - col:18459
              - col:18468
              - col:18494
              - col:18496
              - col:18501
              - col:18610
              - col:18845
              - col:19320
              - col:19391
              - col:18623
              - col:18640
              - col:18645
            sourceReferenceIds:
              - ref:3558
              - ref:3418
              - ref:1720
              - ref:6207
              - ref:3510
              - ref:1710
              - ref:3659
              - ref:1489
              - ref:68632
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

# Aelurodon taxoides
