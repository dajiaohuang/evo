---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Megalagus turgidus
    rank: species
    sourceDatasetId: null
    name:
      zh: Megalagus turgidus
      en: Megalagus turgidus
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
            title: PBDB accepted record — Megalagus turgidus
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=49666&show=parent,app,attr
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
            locator: 2026-10-02 occurrence response accepted_no txn:49666; original response record indices retained in data/sources/mammalia-occurrence-guides-2026-10-02-records.jsonl.gz.
            accessedAt: 2026-10-02
            responseSha256: 368dafda8e7422b86d7992dc15a10defe699a9db146057d35e01a82c1c54bfa2
            pbdbTaxonId: txn:49666
            selectedOccurrenceIds:
              - occ:178165
              - occ:178342
              - occ:178356
              - occ:178924
              - occ:178989
              - occ:179449
              - occ:179492
              - occ:179523
              - occ:179611
              - occ:179646
              - occ:179725
              - occ:179743
              - occ:179758
              - occ:179822
              - occ:179836
              - occ:179891
              - occ:180042
              - occ:180081
              - occ:180103
              - occ:180296
              - occ:180307
              - occ:180319
              - occ:180340
              - occ:180348
              - occ:180383
              - occ:180400
              - occ:180416
              - occ:180444
              - occ:180451
              - occ:180461
              - occ:180486
              - occ:180492
              - occ:180510
              - occ:180752
              - occ:180780
              - occ:180806
              - occ:1280888
            selectedCollectionIds:
              - col:16928
              - col:16942
              - col:16943
              - col:16993
              - col:17007
              - col:17081
              - col:17082
              - col:17083
              - col:17094
              - col:17098
              - col:17104
              - col:17105
              - col:17106
              - col:17111
              - col:17115
              - col:17133
              - col:17164
              - col:17173
              - col:17174
              - col:17207
              - col:17211
              - col:17214
              - col:17220
              - col:17221
              - col:17235
              - col:17239
              - col:17242
              - col:17250
              - col:17252
              - col:17257
              - col:17269
              - col:17271
              - col:17273
              - col:17336
              - col:17337
              - col:17338
              - col:101961
            sourceReferenceIds:
              - ref:94793
              - ref:1470
              - ref:3479
              - ref:1235
              - ref:1570
              - ref:1328
              - ref:1757
              - ref:3318
              - ref:3163
              - ref:3170
              - ref:2150
              - ref:55503
            originalIdentificationMappings:
              - occurrenceId: occ:179891
                originalIdentifiedName: Palaeolagus turgidus
                acceptedName: Megalagus turgidus
                difference: recombined as
              - occurrenceId: occ:1280888
                originalIdentifiedName: Palaeolagus turgidus
                acceptedName: Megalagus turgidus
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

# Megalagus turgidus
