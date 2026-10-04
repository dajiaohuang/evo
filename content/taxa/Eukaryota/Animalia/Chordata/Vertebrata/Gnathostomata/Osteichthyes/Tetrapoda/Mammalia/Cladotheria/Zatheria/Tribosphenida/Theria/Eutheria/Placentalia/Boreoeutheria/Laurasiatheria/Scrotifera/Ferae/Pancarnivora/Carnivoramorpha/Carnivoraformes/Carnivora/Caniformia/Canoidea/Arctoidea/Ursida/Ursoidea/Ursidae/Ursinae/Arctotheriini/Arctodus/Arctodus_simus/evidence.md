---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Arctodus simus
    rank: species
    sourceDatasetId: null
    name:
      zh: Arctodus simus
      en: Arctodus simus
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
            title: PBDB accepted record — Arctodus simus
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=44309&show=parent,app,attr
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
            locator: 2026-10-02 occurrence response accepted_no txn:44309; original response record indices retained in data/sources/mammalia-occurrence-guides-2026-10-02-records.jsonl.gz.
            accessedAt: 2026-10-02
            responseSha256: 368dafda8e7422b86d7992dc15a10defe699a9db146057d35e01a82c1c54bfa2
            pbdbTaxonId: txn:44309
            selectedOccurrenceIds:
              - occ:196439
              - occ:197188
              - occ:197501
              - occ:198675
              - occ:199208
              - occ:199394
              - occ:199565
              - occ:599439
              - occ:666291
              - occ:691267
              - occ:691268
              - occ:710051
              - occ:798181
              - occ:839967
              - occ:841385
              - occ:841393
              - occ:841396
              - occ:841750
              - occ:841758
              - occ:841782
              - occ:841791
              - occ:841897
              - occ:841898
              - occ:912923
              - occ:915367
              - occ:922203
              - occ:936729
              - occ:1201187
              - occ:1380640
              - occ:1629199
            selectedCollectionIds:
              - col:20206
              - col:20310
              - col:20347
              - col:20498
              - col:20569
              - col:20590
              - col:20605
              - col:63588
              - col:37788
              - col:74478
              - col:74479
              - col:76060
              - col:86852
              - col:93181
              - col:93277
              - col:93278
              - col:93279
              - col:93333
              - col:93334
              - col:93341
              - col:93347
              - col:93370
              - col:93371
              - col:103358
              - col:103359
              - col:105549
              - col:104758
              - col:155393
              - col:189001
              - col:230753
            sourceReferenceIds:
              - ref:2725
              - ref:4222
              - ref:1916
              - ref:6206
              - ref:1936
              - ref:1785
              - ref:1907
              - ref:18290
              - ref:24248
              - ref:24985
              - ref:24986
              - ref:25748
              - ref:29235
              - ref:31486
              - ref:31585
              - ref:31546
              - ref:31579
              - ref:31580
              - ref:31583
              - ref:31584
              - ref:31590
              - ref:31593
              - ref:34877
              - ref:34885
              - ref:35262
              - ref:35866
              - ref:50711
              - ref:63388
              - ref:85310
            originalIdentificationMappings:
              - occurrenceId: occ:666291
                originalIdentifiedName: Tremarctotherium simum
                acceptedName: Arctodus simus
                difference: recombined as
              - occurrenceId: occ:841897
                originalIdentifiedName: Arctotherium yukonense n. sp.
                acceptedName: Arctodus simus
                difference: null
              - occurrenceId: occ:1201187
                originalIdentifiedName: Arctotherium simum n. sp.
                acceptedName: Arctodus simus
                difference: recombined as
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

# Arctodus simus
