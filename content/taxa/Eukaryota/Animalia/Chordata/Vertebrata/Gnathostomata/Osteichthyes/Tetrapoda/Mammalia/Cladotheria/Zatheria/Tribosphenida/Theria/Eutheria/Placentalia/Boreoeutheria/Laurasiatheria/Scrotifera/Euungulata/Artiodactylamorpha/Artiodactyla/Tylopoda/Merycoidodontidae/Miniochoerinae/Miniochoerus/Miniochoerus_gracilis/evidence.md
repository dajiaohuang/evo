---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Miniochoerus gracilis
    rank: species
    sourceDatasetId: null
    name:
      zh: Miniochoerus gracilis
      en: Miniochoerus gracilis
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
            title: PBDB accepted record — Miniochoerus gracilis
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=49389&show=parent,app,attr
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
            locator: 2026-10-02 occurrence response accepted_no txn:49389; original response record indices retained in data/sources/mammalia-occurrence-guides-2026-10-02-records.jsonl.gz.
            accessedAt: 2026-10-02
            responseSha256: 368dafda8e7422b86d7992dc15a10defe699a9db146057d35e01a82c1c54bfa2
            pbdbTaxonId: txn:49389
            selectedOccurrenceIds:
              - occ:177996
              - occ:178096
              - occ:178740
              - occ:179346
              - occ:179387
              - occ:179600
              - occ:179634
              - occ:179659
              - occ:179700
              - occ:179752
              - occ:179860
              - occ:179864
              - occ:179900
              - occ:179913
              - occ:180029
              - occ:180062
              - occ:180094
              - occ:180121
              - occ:180131
              - occ:180146
              - occ:180282
              - occ:180294
              - occ:180302
              - occ:180318
              - occ:180335
              - occ:180369
              - occ:180379
              - occ:180396
              - occ:180425
              - occ:180449
              - occ:180501
              - occ:180526
              - occ:180535
              - occ:180543
              - occ:180545
            selectedCollectionIds:
              - col:16918
              - col:16920
              - col:16977
              - col:17047
              - col:17062
              - col:17092
              - col:17094
              - col:17098
              - col:17102
              - col:17106
              - col:17120
              - col:17122
              - col:17133
              - col:17135
              - col:17162
              - col:17165
              - col:17173
              - col:17174
              - col:17178
              - col:17180
              - col:17201
              - col:17206
              - col:17209
              - col:17213
              - col:17219
              - col:17230
              - col:17234
              - col:17238
              - col:17246
              - col:17251
              - col:17271
              - col:17281
              - col:17285
              - col:17289
              - col:17290
            sourceReferenceIds:
              - ref:1757
              - ref:3479
              - ref:1570
              - ref:3068
              - ref:1328
              - ref:6205
              - ref:1470
              - ref:6294
              - ref:3170
            originalIdentificationMappings:
              - occurrenceId: occ:178096
                originalIdentifiedName: Merycoidodon gracilis
                acceptedName: Miniochoerus gracilis
                difference: recombined as
              - occurrenceId: occ:178740
                originalIdentifiedName: Merycoidodon gracilis
                acceptedName: Miniochoerus gracilis
                difference: recombined as
              - occurrenceId: occ:179700
                originalIdentifiedName: Merycoidodon gracilis
                acceptedName: Miniochoerus gracilis
                difference: recombined as
              - occurrenceId: occ:179900
                originalIdentifiedName: Oreodon gracilis
                acceptedName: Miniochoerus gracilis
                difference: recombined as
              - occurrenceId: occ:180302
                originalIdentifiedName: Miniochoerus (Paraminiochoerus) gracilis
                acceptedName: Miniochoerus gracilis
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

# Miniochoerus gracilis
