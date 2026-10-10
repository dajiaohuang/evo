---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Democricetodon mutilus
    rank: species
    sourceDatasetId: null
    name:
      zh: Democricetodon mutilus
      en: Democricetodon mutilus
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
            title: PBDB accepted record — Democricetodon mutilus
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=120927&show=parent,app,attr
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
            locator: 2026-10-02 occurrence response accepted_no txn:120927; original response record indices retained in data/sources/mammalia-occurrence-guides-2026-10-02-records.jsonl.gz.
            accessedAt: 2026-10-02
            responseSha256: 368dafda8e7422b86d7992dc15a10defe699a9db146057d35e01a82c1c54bfa2
            pbdbTaxonId: txn:120927
            selectedOccurrenceIds:
              - occ:456319
              - occ:456327
              - occ:456337
              - occ:456343
              - occ:456351
              - occ:456360
              - occ:456368
              - occ:462128
              - occ:462188
              - occ:462329
              - occ:462379
              - occ:462413
              - occ:466317
              - occ:466341
              - occ:466451
              - occ:466490
              - occ:466501
              - occ:466643
              - occ:472541
              - occ:484662
              - occ:484729
              - occ:490006
              - occ:490889
              - occ:490982
              - occ:491140
              - occ:491143
              - occ:491144
              - occ:491152
              - occ:491231
              - occ:521769
              - occ:1091325
              - occ:1091835
              - occ:1309581
              - occ:1431128
              - occ:1432066
              - occ:1432098
              - occ:1432128
              - occ:1432160
              - occ:1442951
              - occ:1442955
              - occ:1468816
              - occ:1468831
            selectedCollectionIds:
              - col:44955
              - col:44971
              - col:44972
              - col:44973
              - col:44974
              - col:44975
              - col:44976
              - col:45597
              - col:45598
              - col:45612
              - col:45614
              - col:45613
              - col:46285
              - col:46286
              - col:46227
              - col:46232
              - col:46234
              - col:46273
              - col:46955
              - col:48511
              - col:48318
              - col:49418
              - col:49517
              - col:49520
              - col:45611
              - col:49521
              - col:49522
              - col:49578
              - col:46225
              - col:46277
              - col:34615
              - col:48325
              - col:175727
              - col:90354
              - col:39714
              - col:199780
              - col:199781
              - col:199782
              - col:201494
              - col:201495
              - col:205187
              - col:205184
            sourceReferenceIds:
              - ref:11707
              - ref:11994
              - ref:12335
              - ref:12472
              - ref:12913
              - ref:11712
              - ref:13208
              - ref:43885
              - ref:57549
              - ref:67825
              - ref:67944
              - ref:68425
              - ref:70404
            originalIdentificationMappings:
              - occurrenceId: occ:484662
                originalIdentifiedName: Democricetodon affinis mutilus n. ssp.
                acceptedName: Democricetodon mutilus
                difference: recombined as, subspecies not entered
              - occurrenceId: occ:1091325
                originalIdentifiedName: Democricetodon affinis mutilus n. ssp.
                acceptedName: Democricetodon mutilus
                difference: recombined as, subspecies not entered
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

# Democricetodon mutilus
