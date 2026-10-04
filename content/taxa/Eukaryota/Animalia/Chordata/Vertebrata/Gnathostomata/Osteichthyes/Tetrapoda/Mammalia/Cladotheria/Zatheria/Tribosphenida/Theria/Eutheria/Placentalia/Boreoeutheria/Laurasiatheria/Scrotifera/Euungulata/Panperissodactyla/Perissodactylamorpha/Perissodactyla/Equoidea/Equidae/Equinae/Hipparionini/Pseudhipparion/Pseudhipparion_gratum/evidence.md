---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Pseudhipparion gratum
    rank: species
    sourceDatasetId: null
    name:
      zh: Pseudhipparion gratum
      en: Pseudhipparion gratum
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
            title: PBDB accepted record — Pseudhipparion gratum
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=46986&show=parent,app,attr
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
            locator: 2026-10-02 occurrence response accepted_no txn:46986; original response record indices retained in data/sources/mammalia-occurrence-guides-2026-10-02-records.jsonl.gz.
            accessedAt: 2026-10-02
            responseSha256: 368dafda8e7422b86d7992dc15a10defe699a9db146057d35e01a82c1c54bfa2
            pbdbTaxonId: txn:46986
            selectedOccurrenceIds:
              - occ:184211
              - occ:184224
              - occ:184275
              - occ:184283
              - occ:184356
              - occ:184620
              - occ:184664
              - occ:184757
              - occ:184780
              - occ:184984
              - occ:185456
              - occ:185723
              - occ:185743
              - occ:185847
              - occ:186039
              - occ:186617
              - occ:186678
              - occ:186809
              - occ:187000
              - occ:187004
              - occ:187008
              - occ:187012
              - occ:187018
              - occ:187063
              - occ:187189
              - occ:187459
              - occ:187467
              - occ:187598
              - occ:192414
              - occ:393059
              - occ:1281564
              - occ:1320300
              - occ:1379510
              - occ:1542073
            selectedCollectionIds:
              - col:18042
              - col:18045
              - col:18060
              - col:18061
              - col:18066
              - col:18092
              - col:18095
              - col:18105
              - col:18108
              - col:18134
              - col:18200
              - col:18221
              - col:18222
              - col:18233
              - col:18251
              - col:18324
              - col:18328
              - col:18352
              - col:18389
              - col:18390
              - col:18391
              - col:18392
              - col:18395
              - col:18406
              - col:18440
              - col:18467
              - col:18468
              - col:18496
              - col:19528
              - col:37803
              - col:170181
              - col:18165
              - col:188779
              - col:216990
            sourceReferenceIds:
              - ref:1952
              - ref:3564
              - ref:10078
              - ref:3510
              - ref:3175
              - ref:3356
              - ref:6193
              - ref:6294
              - ref:55527
              - ref:58688
              - ref:63362
              - ref:63487
            originalIdentificationMappings:
              - occurrenceId: occ:1320300
                originalIdentifiedName: Neohipparion niobrarense n. sp.
                acceptedName: Pseudhipparion gratum
                difference: null
              - occurrenceId: occ:1542073
                originalIdentifiedName: Hippotherium gratum
                acceptedName: Pseudhipparion gratum
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

# Pseudhipparion gratum
