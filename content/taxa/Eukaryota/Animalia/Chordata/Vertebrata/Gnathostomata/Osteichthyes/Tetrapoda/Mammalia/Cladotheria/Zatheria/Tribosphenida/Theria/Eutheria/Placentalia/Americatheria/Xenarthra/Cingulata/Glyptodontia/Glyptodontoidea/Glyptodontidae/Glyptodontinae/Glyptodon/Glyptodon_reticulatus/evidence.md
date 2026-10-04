---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Glyptodon reticulatus
    rank: species
    sourceDatasetId: null
    name:
      zh: Glyptodon reticulatus
      en: Glyptodon reticulatus
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
            title: PBDB accepted record — Glyptodon reticulatus
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=161174&show=parent,app,attr
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
            locator: 2026-10-02 occurrence response accepted_no txn:161174; original response record indices retained in data/sources/mammalia-occurrence-guides-2026-10-02-records.jsonl.gz.
            accessedAt: 2026-10-02
            responseSha256: 368dafda8e7422b86d7992dc15a10defe699a9db146057d35e01a82c1c54bfa2
            pbdbTaxonId: txn:161174
            selectedOccurrenceIds:
              - occ:654773
              - occ:661611
              - occ:661788
              - occ:1119208
              - occ:1153824
              - occ:1389929
              - occ:1429525
              - occ:1461466
              - occ:1461478
              - occ:1461488
              - occ:1522176
              - occ:1522177
              - occ:1522178
              - occ:1522179
              - occ:1522180
              - occ:1522181
              - occ:1522182
              - occ:1522183
              - occ:1522184
              - occ:1522185
              - occ:1522186
              - occ:1522187
              - occ:1522189
              - occ:1522190
              - occ:1522191
              - occ:1522192
              - occ:1522193
              - occ:1522194
              - occ:1522195
              - occ:1522196
              - occ:1522197
              - occ:1522198
              - occ:1522199
              - occ:1522200
              - occ:1522201
              - occ:1540579
              - occ:1540583
              - occ:1600059
              - occ:1631037
              - occ:1640081
              - occ:2063781
            selectedCollectionIds:
              - col:70673
              - col:71279
              - col:71303
              - col:142142
              - col:147609
              - col:191127
              - col:198875
              - col:203956
              - col:203957
              - col:203955
              - col:212841
              - col:212842
              - col:212843
              - col:71304
              - col:147999
              - col:212844
              - col:140929
              - col:212845
              - col:212846
              - col:212847
              - col:212773
              - col:212840
              - col:212848
              - col:189512
              - col:212849
              - col:195917
              - col:212850
              - col:212851
              - col:212852
              - col:212853
              - col:212854
              - col:211855
              - col:211644
              - col:212855
              - col:212856
              - col:216684
              - col:216686
              - col:226121
              - col:231074
              - col:232453
              - col:231913
            sourceReferenceIds:
              - ref:85519
              - ref:24011
              - ref:24010
              - ref:46123
              - ref:47532
              - ref:64442
              - ref:67741
              - ref:86158
              - ref:69906
              - ref:73494
              - ref:74913
              - ref:81938
              - ref:85524
              - ref:86702
              - ref:94716
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

# Glyptodon reticulatus
