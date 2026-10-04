---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Merycoidodon bullatus
    rank: species
    sourceDatasetId: null
    name:
      zh: Merycoidodon bullatus
      en: Merycoidodon bullatus
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
            title: PBDB accepted record — Merycoidodon bullatus
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=49386&show=parent,app,attr
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
            locator: 2026-10-02 occurrence response accepted_no txn:49386; original response record indices retained in data/sources/mammalia-occurrence-guides-2026-10-02-records.jsonl.gz.
            accessedAt: 2026-10-02
            responseSha256: 368dafda8e7422b86d7992dc15a10defe699a9db146057d35e01a82c1c54bfa2
            pbdbTaxonId: txn:49386
            selectedOccurrenceIds:
              - occ:179378
              - occ:179404
              - occ:179433
              - occ:179601
              - occ:179684
              - occ:179875
              - occ:179901
              - occ:179962
              - occ:179975
              - occ:180032
              - occ:180073
              - occ:180075
              - occ:180135
              - occ:180151
              - occ:180248
              - occ:180422
              - occ:180467
              - occ:180540
              - occ:180550
              - occ:180570
              - occ:180631
              - occ:180877
              - occ:180907
              - occ:180959
              - occ:181169
              - occ:181465
              - occ:1365887
            selectedCollectionIds:
              - col:17061
              - col:17066
              - col:17079
              - col:17093
              - col:17101
              - col:17129
              - col:17133
              - col:17146
              - col:17151
              - col:17163
              - col:17169
              - col:17171
              - col:17179
              - col:17184
              - col:17192
              - col:17245
              - col:17258
              - col:17288
              - col:17295
              - col:17296
              - col:17315
              - col:17347
              - col:17352
              - col:17363
              - col:17433
              - col:93078
              - col:17188
            sourceReferenceIds:
              - ref:6294
              - ref:3069
              - ref:3170
              - ref:2711
              - ref:31438
            originalIdentificationMappings:
              - occurrenceId: occ:179404
                originalIdentifiedName: Otionohyus (Otarohyus) bullatus
                acceptedName: Merycoidodon bullatus
                difference: recombined as
              - occurrenceId: occ:179433
                originalIdentifiedName: Otionohyus (Otarohyus) bullatus
                acceptedName: Merycoidodon bullatus
                difference: recombined as
              - occurrenceId: occ:179601
                originalIdentifiedName: Otionohyus (Otarohyus) bullatus
                acceptedName: Merycoidodon bullatus
                difference: recombined as
              - occurrenceId: occ:179901
                originalIdentifiedName: Eporeodon bullatus
                acceptedName: Merycoidodon bullatus
                difference: recombined as
              - occurrenceId: occ:180550
                originalIdentifiedName: Oreodon bullatus
                acceptedName: Merycoidodon bullatus
                difference: recombined as
              - occurrenceId: occ:180570
                originalIdentifiedName: Eporeodon bullatus
                acceptedName: Merycoidodon bullatus
                difference: recombined as
              - occurrenceId: occ:181465
                originalIdentifiedName: Eporeodon bullatus
                acceptedName: Merycoidodon bullatus
                difference: recombined as
              - occurrenceId: occ:1365887
                originalIdentifiedName: Genetochoerus (Osbomohyus) geygani n. sp.
                acceptedName: Merycoidodon bullatus
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

# Merycoidodon bullatus
