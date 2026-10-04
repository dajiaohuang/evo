---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Ischyromys typus
    rank: species
    sourceDatasetId: null
    name:
      zh: Ischyromys typus
      en: Ischyromys typus
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
            title: PBDB accepted record — Ischyromys typus
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=47383&show=parent,app,attr
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
            locator: 2026-10-02 occurrence response accepted_no txn:47383; original response record indices retained in data/sources/mammalia-occurrence-guides-2026-10-02-records.jsonl.gz.
            accessedAt: 2026-10-02
            responseSha256: 368dafda8e7422b86d7992dc15a10defe699a9db146057d35e01a82c1c54bfa2
            pbdbTaxonId: txn:47383
            selectedOccurrenceIds:
              - occ:178157
              - occ:178167
              - occ:178719
              - occ:179199
              - occ:179379
              - occ:179451
              - occ:179494
              - occ:179537
              - occ:179605
              - occ:179667
              - occ:179688
              - occ:179694
              - occ:179706
              - occ:179775
              - occ:179832
              - occ:179889
              - occ:179970
              - occ:180034
              - occ:180055
              - occ:180078
              - occ:180099
              - occ:180132
              - occ:180149
              - occ:180153
              - occ:180167
              - occ:180191
              - occ:180209
              - occ:180233
              - occ:180310
              - occ:180323
              - occ:180357
              - occ:180404
              - occ:180421
              - occ:180429
              - occ:180432
              - occ:180454
              - occ:180460
              - occ:180515
              - occ:180537
              - occ:180555
              - occ:181116
              - occ:181156
              - occ:1281520
            selectedCollectionIds:
              - col:16928
              - col:16929
              - col:16977
              - col:17028
              - col:17062
              - col:17081
              - col:17082
              - col:17086
              - col:17094
              - col:17100
              - col:17101
              - col:17102
              - col:17103
              - col:17108
              - col:17115
              - col:17133
              - col:17150
              - col:17164
              - col:17165
              - col:17173
              - col:17174
              - col:17179
              - col:17182
              - col:17186
              - col:17187
              - col:17188
              - col:17189
              - col:17190
              - col:17212
              - col:17216
              - col:17223
              - col:17242
              - col:17244
              - col:17249
              - col:17250
              - col:17253
              - col:17257
              - col:17275
              - col:17287
              - col:17295
              - col:17414
              - col:17427
              - col:170168
            sourceReferenceIds:
              - ref:94793
              - ref:6294
              - ref:1570
              - ref:3725
              - ref:1757
              - ref:1328
              - ref:1923
              - ref:6205
              - ref:3586
              - ref:3163
              - ref:3170
              - ref:3458
              - ref:1815
              - ref:1947
              - ref:2711
              - ref:55534
            originalIdentificationMappings:
              - occurrenceId: occ:178719
                originalIdentifiedName: Ischyromys troxelli
                acceptedName: Ischyromys typus
                difference: null
              - occurrenceId: occ:179832
                originalIdentifiedName: Ischyromys pliacus
                acceptedName: Ischyromys typus
                difference: null
              - occurrenceId: occ:179970
                originalIdentifiedName: Ischyromys typus lloydi n. ssp.
                acceptedName: Ischyromys typus
                difference: subspecies not entered
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

# Ischyromys typus
