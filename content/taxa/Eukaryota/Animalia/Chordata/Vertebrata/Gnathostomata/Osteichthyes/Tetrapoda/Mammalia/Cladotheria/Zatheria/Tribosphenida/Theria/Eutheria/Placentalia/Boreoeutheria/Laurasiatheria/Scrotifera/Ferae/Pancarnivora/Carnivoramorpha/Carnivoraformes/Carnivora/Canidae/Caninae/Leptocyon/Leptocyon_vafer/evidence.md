---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Leptocyon vafer
    rank: species
    sourceDatasetId: null
    name:
      zh: Leptocyon vafer
      en: Leptocyon vafer
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
            title: PBDB accepted record — Leptocyon vafer
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=44886&show=parent,app,attr
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
            locator: 2026-10-02 occurrence response accepted_no txn:44886; original response record indices retained in data/sources/mammalia-occurrence-guides-2026-10-02-records.jsonl.gz.
            accessedAt: 2026-10-02
            responseSha256: 368dafda8e7422b86d7992dc15a10defe699a9db146057d35e01a82c1c54bfa2
            pbdbTaxonId: txn:44886
            selectedOccurrenceIds:
              - occ:184074
              - occ:184114
              - occ:184762
              - occ:184790
              - occ:185054
              - occ:185108
              - occ:185185
              - occ:185219
              - occ:185371
              - occ:185596
              - occ:185704
              - occ:185827
              - occ:186212
              - occ:186305
              - occ:187232
              - occ:187284
              - occ:188301
              - occ:189109
              - occ:189117
              - occ:190349
              - occ:190815
              - occ:190982
              - occ:191093
              - occ:191391
              - occ:191546
              - occ:191562
              - occ:192346
              - occ:1217275
              - occ:1217276
              - occ:1217277
              - occ:1217278
              - occ:1217279
              - occ:1217280
              - occ:1217281
              - occ:1217282
              - occ:1217283
              - occ:1217284
              - occ:1217285
              - occ:1217286
              - occ:1217287
              - occ:1217288
              - occ:1217289
              - occ:1217290
              - occ:1217291
              - occ:1217292
              - occ:1217293
              - occ:1217294
              - occ:1217295
              - occ:1217296
              - occ:1386621
              - occ:1438359
            selectedCollectionIds:
              - col:18027
              - col:18031
              - col:18106
              - col:18109
              - col:18141
              - col:18157
              - col:18164
              - col:18165
              - col:18192
              - col:18209
              - col:18220
              - col:18232
              - col:18275
              - col:18284
              - col:18442
              - col:18443
              - col:18611
              - col:18788
              - col:18790
              - col:19035
              - col:19097
              - col:19145
              - col:19185
              - col:19286
              - col:19322
              - col:19323
              - col:19517
              - col:18125
              - col:18363
              - col:18266
              - col:18216
              - col:18155
              - col:18337
              - col:18077
              - col:18242
              - col:18217
              - col:18260
              - col:18378
              - col:18306
              - col:110829
              - col:19535
              - col:19339
              - col:19470
              - col:19531
              - col:19528
              - col:19274
              - col:19519
              - col:18845
              - col:190543
            sourceReferenceIds:
              - ref:3510
              - ref:3564
              - ref:3239
              - ref:1570
              - ref:52058
              - ref:3659
              - ref:3295
              - ref:2647
              - ref:1826
              - ref:2339
              - ref:4273
              - ref:3627
              - ref:6294
              - ref:59118
              - ref:68632
            originalIdentificationMappings:
              - occurrenceId: occ:185219
                originalIdentifiedName: Vulpes vafer
                acceptedName: Leptocyon vafer
                difference: recombined as
              - occurrenceId: occ:1386621
                originalIdentifiedName: Canis vafer n. sp.
                acceptedName: Leptocyon vafer
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

# Leptocyon vafer
