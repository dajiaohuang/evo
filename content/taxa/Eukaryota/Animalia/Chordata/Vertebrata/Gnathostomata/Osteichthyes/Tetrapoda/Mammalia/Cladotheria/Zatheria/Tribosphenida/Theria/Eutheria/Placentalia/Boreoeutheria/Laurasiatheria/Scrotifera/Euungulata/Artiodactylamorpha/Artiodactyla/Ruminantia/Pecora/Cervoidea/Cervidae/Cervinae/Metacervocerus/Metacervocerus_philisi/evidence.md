---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Metacervocerus philisi
    rank: species
    sourceDatasetId: null
    name:
      zh: Metacervocerus philisi
      en: Metacervocerus philisi
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
      - topic: sources
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
    sources:
      referenceBindings:
        - referenceId: ref-d9daed02-7dc5-41b7-9cb9-616d52f8b19a
          metadataVariant: 0
          sourceKey: pbdbMammaliaTaxonomy20261002
          usage:
            title: PBDB accepted record — Metacervocerus philisi
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=473923&show=parent,app,attr
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
            locator: 2026-10-02 occurrence response accepted_no txn:473923; original response record indices retained in data/sources/mammalia-occurrence-guides-2026-10-02-records.jsonl.gz.
            accessedAt: 2026-10-02
            responseSha256: 368dafda8e7422b86d7992dc15a10defe699a9db146057d35e01a82c1c54bfa2
            pbdbTaxonId: txn:473923
            selectedOccurrenceIds:
              - occ:365125
              - occ:365140
              - occ:374223
              - occ:374295
              - occ:417590
              - occ:417602
              - occ:418321
              - occ:475107
              - occ:475275
              - occ:478746
            selectedCollectionIds:
              - col:34593
              - col:34594
              - col:35370
              - col:35373
              - col:40500
              - col:40502
              - col:36112
              - col:47131
              - col:47188
              - col:47624
            sourceReferenceIds:
              - ref:9135
              - ref:9534
              - ref:10917
              - ref:10948
              - ref:12548
            originalIdentificationMappings:
              - occurrenceId: occ:365125
                originalIdentifiedName: '"Cervus" philisi'
                acceptedName: Metacervocerus philisi
                difference: recombined as
              - occurrenceId: occ:365140
                originalIdentifiedName: '"Cervus" philisi'
                acceptedName: Metacervocerus philisi
                difference: recombined as
              - occurrenceId: occ:374223
                originalIdentifiedName: Cervus philisi
                acceptedName: Metacervocerus philisi
                difference: recombined as
              - occurrenceId: occ:374295
                originalIdentifiedName: Cervus philisi
                acceptedName: Metacervocerus philisi
                difference: recombined as
              - occurrenceId: occ:417590
                originalIdentifiedName: Cervus philisi
                acceptedName: Metacervocerus philisi
                difference: recombined as
              - occurrenceId: occ:417602
                originalIdentifiedName: Cervus philisi
                acceptedName: Metacervocerus philisi
                difference: recombined as
              - occurrenceId: occ:418321
                originalIdentifiedName: Cervus philisi
                acceptedName: Metacervocerus philisi
                difference: recombined as
              - occurrenceId: occ:475107
                originalIdentifiedName: Cervus philisi
                acceptedName: Metacervocerus philisi
                difference: recombined as
              - occurrenceId: occ:475275
                originalIdentifiedName: '"Cervus" philisi'
                acceptedName: Metacervocerus philisi
                difference: recombined as
              - occurrenceId: occ:478746
                originalIdentifiedName: Cervus philisi
                acceptedName: Metacervocerus philisi
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

# Metacervocerus philisi
