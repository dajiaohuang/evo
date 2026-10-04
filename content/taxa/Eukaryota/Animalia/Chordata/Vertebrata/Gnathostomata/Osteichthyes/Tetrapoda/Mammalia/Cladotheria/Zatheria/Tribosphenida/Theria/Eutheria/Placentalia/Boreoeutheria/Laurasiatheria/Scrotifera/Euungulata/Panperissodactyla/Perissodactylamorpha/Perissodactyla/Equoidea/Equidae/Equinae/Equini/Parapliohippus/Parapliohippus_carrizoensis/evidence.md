---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Parapliohippus carrizoensis
    rank: species
    sourceDatasetId: null
    name:
      zh: Parapliohippus carrizoensis
      en: Parapliohippus carrizoensis
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
            title: PBDB accepted record — Parapliohippus carrizoensis
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=48171&show=parent,app,attr
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
            locator: 2026-10-02 occurrence response accepted_no txn:48171; original response record indices retained in data/sources/mammalia-occurrence-guides-2026-10-02-records.jsonl.gz.
            accessedAt: 2026-10-02
            responseSha256: 368dafda8e7422b86d7992dc15a10defe699a9db146057d35e01a82c1c54bfa2
            pbdbTaxonId: txn:48171
            selectedOccurrenceIds:
              - occ:189963
              - occ:190948
              - occ:191170
              - occ:191207
              - occ:191242
              - occ:191243
              - occ:191244
              - occ:191433
              - occ:191500
              - occ:191581
              - occ:191619
              - occ:191707
              - occ:191731
              - occ:191942
              - occ:192147
              - occ:192283
              - occ:192420
              - occ:192677
              - occ:192742
              - occ:192798
              - occ:192804
              - occ:192906
              - occ:1207903
              - occ:1321769
            selectedCollectionIds:
              - col:18962
              - col:19137
              - col:19198
              - col:19206
              - col:19230
              - col:19231
              - col:19232
              - col:19294
              - col:19313
              - col:19325
              - col:19344
              - col:19367
              - col:19369
              - col:19428
              - col:19478
              - col:19513
              - col:19529
              - col:19566
              - col:19586
              - col:19599
              - col:19601
              - col:19616
              - col:19233
            sourceReferenceIds:
              - ref:2608
              - ref:6294
              - ref:2817
              - ref:2012
              - ref:2880
              - ref:2982
              - ref:3759
              - ref:2633
              - ref:51372
              - ref:58824
            originalIdentificationMappings:
              - occurrenceId: occ:189963
                originalIdentifiedName: Merychippus carrizoensis
                acceptedName: Parapliohippus carrizoensis
                difference: recombined as
              - occurrenceId: occ:191207
                originalIdentifiedName: Merychippus carrizoensis
                acceptedName: Parapliohippus carrizoensis
                difference: recombined as
              - occurrenceId: occ:191707
                originalIdentifiedName: Merychippus carrizoensis
                acceptedName: Parapliohippus carrizoensis
                difference: recombined as
              - occurrenceId: occ:191731
                originalIdentifiedName: Merychippus carrizoensis
                acceptedName: Parapliohippus carrizoensis
                difference: recombined as
              - occurrenceId: occ:192420
                originalIdentifiedName: Merychippus carrizoensis
                acceptedName: Parapliohippus carrizoensis
                difference: recombined as
              - occurrenceId: occ:192742
                originalIdentifiedName: Merychippus tehachapiensis
                acceptedName: Parapliohippus carrizoensis
                difference: null
              - occurrenceId: occ:192906
                originalIdentifiedName: Merychippus carrizoensis
                acceptedName: Parapliohippus carrizoensis
                difference: recombined as
              - occurrenceId: occ:1207903
                originalIdentifiedName: Merychippus tehachapiensis n. sp.
                acceptedName: Parapliohippus carrizoensis
                difference: null
              - occurrenceId: occ:1321769
                originalIdentifiedName: Merychippus carrizoensis
                acceptedName: Parapliohippus carrizoensis
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

# Parapliohippus carrizoensis
