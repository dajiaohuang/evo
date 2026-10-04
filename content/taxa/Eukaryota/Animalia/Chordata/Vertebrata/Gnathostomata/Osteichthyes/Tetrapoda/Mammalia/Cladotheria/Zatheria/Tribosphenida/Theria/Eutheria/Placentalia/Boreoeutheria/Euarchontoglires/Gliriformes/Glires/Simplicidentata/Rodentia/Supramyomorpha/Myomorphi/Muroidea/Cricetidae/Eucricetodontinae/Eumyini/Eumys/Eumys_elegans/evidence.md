---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Eumys elegans
    rank: species
    sourceDatasetId: null
    name:
      zh: Eumys elegans
      en: Eumys elegans
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
            title: PBDB accepted record — Eumys elegans
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=46403&show=parent,app,attr
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
            locator: 2026-10-02 occurrence response accepted_no txn:46403; original response record indices retained in data/sources/mammalia-occurrence-guides-2026-10-02-records.jsonl.gz.
            accessedAt: 2026-10-02
            responseSha256: 368dafda8e7422b86d7992dc15a10defe699a9db146057d35e01a82c1c54bfa2
            pbdbTaxonId: txn:46403
            selectedOccurrenceIds:
              - occ:178125
              - occ:178787
              - occ:179366
              - occ:179377
              - occ:179454
              - occ:179497
              - occ:179524
              - occ:179609
              - occ:179666
              - occ:179695
              - occ:179754
              - occ:179784
              - occ:179792
              - occ:179817
              - occ:179834
              - occ:179974
              - occ:180001
              - occ:180040
              - occ:180079
              - occ:180101
              - occ:180584
              - occ:180680
              - occ:180745
              - occ:1629811
              - occ:1629964
              - occ:2064060
              - occ:2064118
              - occ:2064210
            selectedCollectionIds:
              - col:16925
              - col:16981
              - col:17055
              - col:17061
              - col:17081
              - col:17082
              - col:17083
              - col:17094
              - col:17100
              - col:17102
              - col:17106
              - col:17108
              - col:17109
              - col:17111
              - col:17115
              - col:17150
              - col:17154
              - col:17164
              - col:17173
              - col:17174
              - col:17301
              - col:17318
              - col:17336
              - col:230806
              - col:230863
              - col:17009
              - col:16928
              - col:101961
            sourceReferenceIds:
              - ref:6294
              - ref:3315
              - ref:3318
              - ref:3170
              - ref:1570
              - ref:1328
              - ref:1923
              - ref:6205
              - ref:1470
              - ref:3586
              - ref:3163
              - ref:3725
              - ref:1757
              - ref:3102
              - ref:85344
              - ref:85377
              - ref:94785
              - ref:94793
              - ref:2999
            originalIdentificationMappings:
              - occurrenceId: occ:179974
                originalIdentifiedName: Cricetodon nebraskensis n. sp.
                acceptedName: Eumys elegans
                difference: null
              - occurrenceId: occ:2064210
                originalIdentifiedName: Eumys pristinus n. sp.
                acceptedName: Eumys elegans
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

# Eumys elegans
