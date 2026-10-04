---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Anthracotherium pangan
    rank: species
    sourceDatasetId: null
    name:
      zh: Anthracotherium pangan
      en: Anthracotherium pangan
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
            title: PBDB accepted record — Anthracotherium pangan
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=58145&show=parent,app,attr
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
            locator: 2026-10-02 occurrence response accepted_no txn:58145; original response record indices retained in data/sources/mammalia-occurrence-guides-2026-10-02-records.jsonl.gz.
            accessedAt: 2026-10-02
            responseSha256: 368dafda8e7422b86d7992dc15a10defe699a9db146057d35e01a82c1c54bfa2
            pbdbTaxonId: txn:58145
            selectedOccurrenceIds:
              - occ:422973
              - occ:423024
              - occ:423025
              - occ:423429
              - occ:423430
              - occ:423431
              - occ:423733
              - occ:423897
              - occ:424018
              - occ:424034
              - occ:424052
              - occ:1337295
              - occ:1337307
            selectedCollectionIds:
              - col:41158
              - col:41180
              - col:41207
              - col:41264
              - col:41285
              - col:41307
              - col:41310
              - col:41318
              - col:41456
              - col:41331
            sourceReferenceIds:
              - ref:11070
              - ref:11075
              - ref:11084
              - ref:25277
            originalIdentificationMappings:
              - occurrenceId: occ:422973
                originalIdentifiedName: Anthracothema pangan
                acceptedName: Anthracotherium pangan
                difference: recombined as
              - occurrenceId: occ:423024
                originalIdentifiedName: Anthracothema pangan
                acceptedName: Anthracotherium pangan
                difference: recombined as
              - occurrenceId: occ:423025
                originalIdentifiedName: Anthracothema rubricae
                acceptedName: Anthracotherium pangan
                difference: null
              - occurrenceId: occ:423429
                originalIdentifiedName: Anthracothema rubricae
                acceptedName: Anthracotherium pangan
                difference: null
              - occurrenceId: occ:423430
                originalIdentifiedName: Anthracohyus palustris n. sp.
                acceptedName: Anthracotherium pangan
                difference: null
              - occurrenceId: occ:423431
                originalIdentifiedName: Anthracothema pangan
                acceptedName: Anthracotherium pangan
                difference: recombined as
              - occurrenceId: occ:423733
                originalIdentifiedName: Anthracothema pangan
                acceptedName: Anthracotherium pangan
                difference: recombined as
              - occurrenceId: occ:423897
                originalIdentifiedName: Anthracothema rubricae
                acceptedName: Anthracotherium pangan
                difference: null
              - occurrenceId: occ:424018
                originalIdentifiedName: Anthracothema rubricae
                acceptedName: Anthracotherium pangan
                difference: null
              - occurrenceId: occ:424034
                originalIdentifiedName: Anthracothema pangan
                acceptedName: Anthracotherium pangan
                difference: recombined as
              - occurrenceId: occ:424052
                originalIdentifiedName: Anthracothema rubricae
                acceptedName: Anthracotherium pangan
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

# Anthracotherium pangan
