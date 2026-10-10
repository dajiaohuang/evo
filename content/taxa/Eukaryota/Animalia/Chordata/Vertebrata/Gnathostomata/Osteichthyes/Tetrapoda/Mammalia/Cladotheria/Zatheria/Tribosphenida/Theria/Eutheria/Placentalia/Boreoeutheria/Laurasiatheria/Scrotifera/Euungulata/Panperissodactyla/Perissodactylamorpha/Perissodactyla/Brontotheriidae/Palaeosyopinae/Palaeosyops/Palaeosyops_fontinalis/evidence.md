---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Palaeosyops fontinalis
    rank: species
    sourceDatasetId: null
    name:
      zh: Palaeosyops fontinalis
      en: Palaeosyops fontinalis
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
            title: PBDB accepted record — Palaeosyops fontinalis
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=49693&show=parent,app,attr
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
            locator: 2026-10-02 occurrence response accepted_no txn:49693; original response record indices retained in data/sources/mammalia-occurrence-guides-2026-10-02-records.jsonl.gz.
            accessedAt: 2026-10-02
            responseSha256: 368dafda8e7422b86d7992dc15a10defe699a9db146057d35e01a82c1c54bfa2
            pbdbTaxonId: txn:49693
            selectedOccurrenceIds:
              - occ:173444
              - occ:173474
              - occ:173480
              - occ:173497
              - occ:173655
              - occ:173666
              - occ:173669
              - occ:174137
              - occ:174267
              - occ:174284
              - occ:174315
              - occ:174335
              - occ:174370
              - occ:174409
              - occ:174508
              - occ:174511
              - occ:174525
              - occ:174655
              - occ:174668
              - occ:174752
              - occ:174809
              - occ:174813
              - occ:174822
              - occ:174847
              - occ:174890
              - occ:174919
              - occ:174949
              - occ:174952
              - occ:174993
              - occ:175074
              - occ:175081
              - occ:175359
              - occ:286349
              - occ:286379
              - occ:1357192
              - occ:1357193
            selectedCollectionIds:
              - col:16089
              - col:16094
              - col:16095
              - col:16097
              - col:16115
              - col:16116
              - col:16117
              - col:16219
              - col:16231
              - col:16232
              - col:16236
              - col:16239
              - col:16240
              - col:16242
              - col:16258
              - col:16259
              - col:16264
              - col:16291
              - col:16298
              - col:16311
              - col:16320
              - col:16321
              - col:16326
              - col:16338
              - col:16352
              - col:16362
              - col:16380
              - col:16383
              - col:16394
              - col:16398
              - col:16401
              - col:16487
              - col:15837
              - col:27269
              - col:180105
            sourceReferenceIds:
              - ref:1737
              - ref:3596
              - ref:2921
              - ref:6294
              - ref:1248
              - ref:1749
              - ref:2526
              - ref:6220
              - ref:3359
              - ref:1748
              - ref:7542
              - ref:2701
            originalIdentificationMappings:
              - occurrenceId: occ:1357193
                originalIdentifiedName: Eometarhinus huerfanensis n. gen. n. sp.
                acceptedName: Palaeosyops fontinalis
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

# Palaeosyops fontinalis
