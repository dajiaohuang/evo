---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Borophagus secundus
    rank: species
    sourceDatasetId: null
    name:
      zh: Borophagus secundus
      en: Borophagus secundus
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
            title: PBDB accepted record — Borophagus secundus
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=44603&show=parent,app,attr
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
            locator: 2026-10-02 occurrence response accepted_no txn:44603; original response record indices retained in data/sources/mammalia-occurrence-guides-2026-10-02-records.jsonl.gz.
            accessedAt: 2026-10-02
            responseSha256: 368dafda8e7422b86d7992dc15a10defe699a9db146057d35e01a82c1c54bfa2
            pbdbTaxonId: txn:44603
            selectedOccurrenceIds:
              - occ:184134
              - occ:184610
              - occ:184696
              - occ:185005
              - occ:185231
              - occ:185262
              - occ:185917
              - occ:186432
              - occ:187173
              - occ:187613
              - occ:188728
              - occ:188741
              - occ:188786
              - occ:188807
              - occ:188815
              - occ:188845
              - occ:188848
              - occ:188891
              - occ:188897
              - occ:191999
              - occ:192134
              - occ:192727
              - occ:1211736
              - occ:1281610
              - occ:1307639
              - occ:1384234
              - occ:1384248
              - occ:1425320
              - occ:1519312
              - occ:1519339
              - occ:1654451
            selectedCollectionIds:
              - col:18033
              - col:18091
              - col:18097
              - col:18140
              - col:18166
              - col:18175
              - col:18241
              - col:18304
              - col:18432
              - col:18499
              - col:18715
              - col:18720
              - col:18732
              - col:18736
              - col:18737
              - col:18739
              - col:18740
              - col:18747
              - col:18750
              - col:19445
              - col:19473
              - col:19582
              - col:18745
              - col:170201
              - col:157349
              - col:189788
              - col:189790
              - col:18713
              - col:212307
              - col:18970
            sourceReferenceIds:
              - ref:3558
              - ref:6294
              - ref:34707
              - ref:3175
              - ref:2596
              - ref:3575
              - ref:51758
              - ref:55527
              - ref:51759
              - ref:63794
              - ref:1842
              - ref:88372
            originalIdentificationMappings:
              - occurrenceId: occ:185005
                originalIdentifiedName: Hyaenognathus cyonoides n. sp.
                acceptedName: Borophagus secundus
                difference: null
              - occurrenceId: occ:187613
                originalIdentifiedName: Osteoborus direptor n. sp.
                acceptedName: Borophagus secundus
                difference: null
              - occurrenceId: occ:1425320
                originalIdentifiedName: Osteoborus cyonoides
                acceptedName: Borophagus secundus
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

# Borophagus secundus
