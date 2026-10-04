---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Leptomeryx evansi
    rank: species
    sourceDatasetId: null
    name:
      zh: Leptomeryx evansi
      en: Leptomeryx evansi
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
            title: PBDB accepted record — Leptomeryx evansi
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=47588&show=parent,app,attr
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
            locator: 2026-10-02 occurrence response accepted_no txn:47588; original response record indices retained in data/sources/mammalia-occurrence-guides-2026-10-02-records.jsonl.gz.
            accessedAt: 2026-10-02
            responseSha256: 368dafda8e7422b86d7992dc15a10defe699a9db146057d35e01a82c1c54bfa2
            pbdbTaxonId: txn:47588
            selectedOccurrenceIds:
              - occ:178001
              - occ:178179
              - occ:178705
              - occ:178744
              - occ:179167
              - occ:179365
              - occ:179390
              - occ:179391
              - occ:179425
              - occ:179479
              - occ:179520
              - occ:179630
              - occ:179663
              - occ:179668
              - occ:179702
              - occ:179711
              - occ:179732
              - occ:179748
              - occ:179814
              - occ:179846
              - occ:179902
              - occ:179988
              - occ:180005
              - occ:180053
              - occ:180064
              - occ:180090
              - occ:180118
              - occ:180558
              - occ:180571
              - occ:180593
              - occ:180687
              - occ:181075
              - occ:181154
              - occ:286145
              - occ:1240841
              - occ:1630192
            selectedCollectionIds:
              - col:16918
              - col:16929
              - col:16973
              - col:16977
              - col:17018
              - col:17055
              - col:17062
              - col:17063
              - col:17074
              - col:17081
              - col:17082
              - col:17094
              - col:17098
              - col:17100
              - col:17102
              - col:17103
              - col:17105
              - col:17106
              - col:17111
              - col:17115
              - col:17133
              - col:17153
              - col:17154
              - col:17164
              - col:17165
              - col:17173
              - col:17174
              - col:17295
              - col:17296
              - col:17301
              - col:17318
              - col:17388
              - col:17426
              - col:17027
              - col:163487
              - col:180202
            sourceReferenceIds:
              - ref:1757
              - ref:1944
              - ref:3041
              - ref:1570
              - ref:6222
              - ref:3318
              - ref:1803
              - ref:3637
              - ref:1328
              - ref:1923
              - ref:6205
              - ref:1470
              - ref:3163
              - ref:3170
              - ref:2711
              - ref:1585
              - ref:1386
              - ref:3102
              - ref:1268
              - ref:4220
              - ref:53322
              - ref:53289
            originalIdentificationMappings:
              - occurrenceId: occ:181075
                originalIdentifiedName: Leptomeryx lenis n. sp.
                acceptedName: Leptomeryx evansi
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

# Leptomeryx evansi
