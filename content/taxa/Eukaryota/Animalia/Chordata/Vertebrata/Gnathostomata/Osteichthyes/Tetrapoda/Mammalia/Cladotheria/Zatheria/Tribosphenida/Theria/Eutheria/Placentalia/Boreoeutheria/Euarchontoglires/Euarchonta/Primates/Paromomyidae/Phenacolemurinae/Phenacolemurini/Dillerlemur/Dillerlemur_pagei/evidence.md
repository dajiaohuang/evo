---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Dillerlemur pagei
    rank: species
    sourceDatasetId: null
    name:
      zh: Dillerlemur pagei
      en: Dillerlemur pagei
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
            title: PBDB accepted record — Dillerlemur pagei
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=50330&show=parent,app,attr
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
            locator: 2026-10-02 occurrence response accepted_no txn:50330; original response record indices retained in data/sources/mammalia-occurrence-guides-2026-10-02-records.jsonl.gz.
            accessedAt: 2026-10-02
            responseSha256: 368dafda8e7422b86d7992dc15a10defe699a9db146057d35e01a82c1c54bfa2
            pbdbTaxonId: txn:50330
            selectedOccurrenceIds:
              - occ:166589
              - occ:166625
              - occ:166698
              - occ:166830
              - occ:166902
              - occ:166947
              - occ:166981
              - occ:167045
              - occ:167060
              - occ:167184
              - occ:167229
              - occ:167301
              - occ:167342
              - occ:167412
              - occ:167433
              - occ:167553
              - occ:167561
              - occ:167610
              - occ:167625
              - occ:167696
              - occ:167722
              - occ:278136
              - occ:278139
              - occ:462997
              - occ:469212
              - occ:469228
              - occ:1093724
              - occ:1384140
              - occ:1385213
              - occ:1386078
              - occ:1386093
              - occ:1386100
              - occ:1386189
              - occ:1386200
              - occ:1386245
              - occ:1386277
              - occ:1386307
              - occ:1386335
              - occ:1386345
              - occ:1386363
              - occ:1386447
            selectedCollectionIds:
              - col:15048
              - col:15049
              - col:15065
              - col:15079
              - col:15085
              - col:15089
              - col:15092
              - col:15099
              - col:15100
              - col:15119
              - col:15126
              - col:15139
              - col:15148
              - col:15156
              - col:15159
              - col:15179
              - col:15181
              - col:15189
              - col:15191
              - col:15204
              - col:15209
              - col:26569
              - col:15082
              - col:46651
              - col:46653
              - col:15057
              - col:15183
              - col:46649
              - col:15058
              - col:190419
              - col:15028
              - col:188220
              - col:190432
              - col:190439
              - col:190448
              - col:190455
              - col:190460
              - col:190462
            sourceReferenceIds:
              - ref:6294
              - ref:2953
              - ref:63104
              - ref:11717
              - ref:44033
            originalIdentificationMappings:
              - occurrenceId: occ:167412
                originalIdentifiedName: Phenacolemur pagei
                acceptedName: Dillerlemur pagei
                difference: recombined as
              - occurrenceId: occ:278139
                originalIdentifiedName: Phenacolemur pagei
                acceptedName: Dillerlemur pagei
                difference: recombined as
              - occurrenceId: occ:462997
                originalIdentifiedName: Phenacolemur pagei
                acceptedName: Dillerlemur pagei
                difference: recombined as
              - occurrenceId: occ:469212
                originalIdentifiedName: Phenacolemur pagei
                acceptedName: Dillerlemur pagei
                difference: recombined as
              - occurrenceId: occ:469228
                originalIdentifiedName: Phenacolemur pagei
                acceptedName: Dillerlemur pagei
                difference: recombined as
              - occurrenceId: occ:1093724
                originalIdentifiedName: Parapheliscus bjorni n. sp.
                acceptedName: Dillerlemur pagei
                difference: null
              - occurrenceId: occ:1384140
                originalIdentifiedName: Phenacolemur pagei
                acceptedName: Dillerlemur pagei
                difference: recombined as
              - occurrenceId: occ:1385213
                originalIdentifiedName: Phenacolemur pagei
                acceptedName: Dillerlemur pagei
                difference: recombined as
              - occurrenceId: occ:1386078
                originalIdentifiedName: Phenacolemur pagei
                acceptedName: Dillerlemur pagei
                difference: recombined as
              - occurrenceId: occ:1386093
                originalIdentifiedName: Phenacolemur pagei
                acceptedName: Dillerlemur pagei
                difference: recombined as
              - occurrenceId: occ:1386100
                originalIdentifiedName: Phenacolemur pagei
                acceptedName: Dillerlemur pagei
                difference: recombined as
              - occurrenceId: occ:1386189
                originalIdentifiedName: Phenacolemur pagei
                acceptedName: Dillerlemur pagei
                difference: recombined as
              - occurrenceId: occ:1386200
                originalIdentifiedName: Phenacolemur pagei
                acceptedName: Dillerlemur pagei
                difference: recombined as
              - occurrenceId: occ:1386245
                originalIdentifiedName: Phenacolemur pagei
                acceptedName: Dillerlemur pagei
                difference: recombined as
              - occurrenceId: occ:1386277
                originalIdentifiedName: Phenacolemur pagei
                acceptedName: Dillerlemur pagei
                difference: recombined as
              - occurrenceId: occ:1386307
                originalIdentifiedName: Phenacolemur pagei
                acceptedName: Dillerlemur pagei
                difference: recombined as
              - occurrenceId: occ:1386335
                originalIdentifiedName: Phenacolemur pagei
                acceptedName: Dillerlemur pagei
                difference: recombined as
              - occurrenceId: occ:1386345
                originalIdentifiedName: Phenacolemur pagei
                acceptedName: Dillerlemur pagei
                difference: recombined as
              - occurrenceId: occ:1386363
                originalIdentifiedName: Phenacolemur pagei
                acceptedName: Dillerlemur pagei
                difference: recombined as
              - occurrenceId: occ:1386447
                originalIdentifiedName: Phenacolemur pagei
                acceptedName: Dillerlemur pagei
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

# Dillerlemur pagei
