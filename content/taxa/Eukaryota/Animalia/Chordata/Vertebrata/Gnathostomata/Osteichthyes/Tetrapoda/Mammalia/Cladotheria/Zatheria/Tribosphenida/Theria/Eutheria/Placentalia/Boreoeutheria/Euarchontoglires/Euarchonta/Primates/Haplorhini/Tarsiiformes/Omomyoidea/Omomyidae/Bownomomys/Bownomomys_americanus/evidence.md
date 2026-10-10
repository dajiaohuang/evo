---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Bownomomys americanus
    rank: species
    sourceDatasetId: null
    name:
      zh: Bownomomys americanus
      en: Bownomomys americanus
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
            title: PBDB accepted record — Bownomomys americanus
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=52105&show=parent,app,attr
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
            locator: 2026-10-02 occurrence response accepted_no txn:52105; original response record indices retained in data/sources/mammalia-occurrence-guides-2026-10-02-records.jsonl.gz.
            accessedAt: 2026-10-02
            responseSha256: 368dafda8e7422b86d7992dc15a10defe699a9db146057d35e01a82c1c54bfa2
            pbdbTaxonId: txn:52105
            selectedOccurrenceIds:
              - occ:168989
              - occ:169014
              - occ:169068
              - occ:171324
              - occ:171458
              - occ:171752
              - occ:171827
              - occ:457672
              - occ:462565
              - occ:469980
              - occ:470792
              - occ:470846
              - occ:470909
              - occ:470957
              - occ:471121
              - occ:471147
            selectedCollectionIds:
              - col:15488
              - col:15491
              - col:15493
              - col:15729
              - col:15747
              - col:15786
              - col:15793
              - col:15694
              - col:15586
              - col:46728
              - col:46792
              - col:46796
              - col:46800
              - col:46804
              - col:46813
              - col:46814
            sourceReferenceIds:
              - ref:1123
              - ref:1112
              - ref:2953
              - ref:11717
            originalIdentificationMappings:
              - occurrenceId: occ:168989
                originalIdentifiedName: Teilhardina americana
                acceptedName: Bownomomys americanus
                difference: recombined as
              - occurrenceId: occ:169014
                originalIdentifiedName: Teilhardina americana
                acceptedName: Bownomomys americanus
                difference: recombined as
              - occurrenceId: occ:169068
                originalIdentifiedName: Teilhardina americana n. sp.
                acceptedName: Bownomomys americanus
                difference: recombined as
              - occurrenceId: occ:171324
                originalIdentifiedName: Teilhardina americana
                acceptedName: Bownomomys americanus
                difference: recombined as
              - occurrenceId: occ:171458
                originalIdentifiedName: Teilhardina americana
                acceptedName: Bownomomys americanus
                difference: recombined as
              - occurrenceId: occ:171752
                originalIdentifiedName: Teilhardina americana
                acceptedName: Bownomomys americanus
                difference: recombined as
              - occurrenceId: occ:171827
                originalIdentifiedName: Teilhardina americana
                acceptedName: Bownomomys americanus
                difference: recombined as
              - occurrenceId: occ:457672
                originalIdentifiedName: Teilhardina americana
                acceptedName: Bownomomys americanus
                difference: recombined as
              - occurrenceId: occ:462565
                originalIdentifiedName: Teilhardina americana
                acceptedName: Bownomomys americanus
                difference: recombined as
              - occurrenceId: occ:469980
                originalIdentifiedName: Teilhardina americana
                acceptedName: Bownomomys americanus
                difference: recombined as
              - occurrenceId: occ:470792
                originalIdentifiedName: Teilhardina americana
                acceptedName: Bownomomys americanus
                difference: recombined as
              - occurrenceId: occ:470846
                originalIdentifiedName: Teilhardina americana
                acceptedName: Bownomomys americanus
                difference: recombined as
              - occurrenceId: occ:470909
                originalIdentifiedName: Teilhardina americana
                acceptedName: Bownomomys americanus
                difference: recombined as
              - occurrenceId: occ:470957
                originalIdentifiedName: Teilhardina americana
                acceptedName: Bownomomys americanus
                difference: recombined as
              - occurrenceId: occ:471121
                originalIdentifiedName: Teilhardina americana
                acceptedName: Bownomomys americanus
                difference: recombined as
              - occurrenceId: occ:471147
                originalIdentifiedName: Teilhardina americana
                acceptedName: Bownomomys americanus
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

# Bownomomys americanus
