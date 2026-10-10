---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Copecion brachypternus
    rank: species
    sourceDatasetId: null
    name:
      zh: Copecion brachypternus
      en: Copecion brachypternus
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
            title: PBDB accepted record — Copecion brachypternus
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=50303&show=parent,app,attr
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
            locator: 2026-10-02 occurrence response accepted_no txn:50303; original response record indices retained in data/sources/mammalia-occurrence-guides-2026-10-02-records.jsonl.gz.
            accessedAt: 2026-10-02
            responseSha256: 368dafda8e7422b86d7992dc15a10defe699a9db146057d35e01a82c1c54bfa2
            pbdbTaxonId: txn:50303
            selectedOccurrenceIds:
              - occ:168208
              - occ:168215
              - occ:168217
              - occ:168221
              - occ:168260
              - occ:168277
              - occ:168322
              - occ:168403
              - occ:168405
              - occ:168805
              - occ:169035
              - occ:169215
              - occ:169289
              - occ:169317
              - occ:169448
              - occ:169744
              - occ:169761
              - occ:169786
              - occ:169802
              - occ:169840
              - occ:169861
              - occ:170004
              - occ:170046
              - occ:170113
              - occ:170252
              - occ:170298
              - occ:170605
              - occ:170950
              - occ:171107
              - occ:171192
              - occ:172284
              - occ:172765
              - occ:172990
              - occ:173287
              - occ:457599
              - occ:458689
              - occ:462648
              - occ:469391
              - occ:470261
              - occ:470384
              - occ:470437
              - occ:470767
              - occ:471037
            selectedCollectionIds:
              - col:15350
              - col:15351
              - col:15352
              - col:15353
              - col:15363
              - col:15367
              - col:15375
              - col:15394
              - col:15395
              - col:15468
              - col:15491
              - col:15507
              - col:15510
              - col:15511
              - col:15516
              - col:15534
              - col:15536
              - col:15538
              - col:15540
              - col:15542
              - col:15543
              - col:15551
              - col:15552
              - col:15554
              - col:15558
              - col:15559
              - col:15578
              - col:15663
              - col:15701
              - col:15717
              - col:15871
              - col:15932
              - col:15964
              - col:16055
              - col:15687
              - col:15707
              - col:15592
              - col:46675
              - col:46752
              - col:46761
              - col:46766
              - col:46792
              - col:46809
            sourceReferenceIds:
              - ref:6294
              - ref:3021
              - ref:6214
              - ref:2962
              - ref:3401
              - ref:1760
              - ref:11717
            originalIdentificationMappings:
              - occurrenceId: occ:170004
                originalIdentifiedName: Phenacodus brachypternus
                acceptedName: Copecion brachypternus
                difference: recombined as
              - occurrenceId: occ:170113
                originalIdentifiedName: Phenacodus brachypternus
                acceptedName: Copecion brachypternus
                difference: recombined as
              - occurrenceId: occ:170605
                originalIdentifiedName: Phenacodus brachypternus
                acceptedName: Copecion brachypternus
                difference: recombined as
              - occurrenceId: occ:172990
                originalIdentifiedName: Phenacodus brachypternus
                acceptedName: Copecion brachypternus
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

# Copecion brachypternus
