---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Mesocyon temnodon
    rank: species
    sourceDatasetId: null
    name:
      zh: Mesocyon temnodon
      en: Mesocyon temnodon
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
            title: PBDB accepted record — Mesocyon temnodon
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=45477&show=parent,app,attr
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
            locator: 2026-10-02 occurrence response accepted_no txn:45477; original response record indices retained in data/sources/mammalia-occurrence-guides-2026-10-02-records.jsonl.gz.
            accessedAt: 2026-10-02
            responseSha256: 368dafda8e7422b86d7992dc15a10defe699a9db146057d35e01a82c1c54bfa2
            pbdbTaxonId: txn:45477
            selectedOccurrenceIds:
              - occ:179640
              - occ:180616
              - occ:180627
              - occ:180628
              - occ:180701
              - occ:180724
              - occ:180727
              - occ:180842
              - occ:180873
              - occ:180912
              - occ:180961
              - occ:180963
              - occ:181014
              - occ:181146
              - occ:182274
              - occ:182463
              - occ:182470
            selectedCollectionIds:
              - col:17097
              - col:17309
              - col:17314
              - col:17315
              - col:17322
              - col:17333
              - col:17335
              - col:17342
              - col:17344
              - col:17356
              - col:17365
              - col:17367
              - col:17379
              - col:17426
              - col:17642
              - col:17703
              - col:17704
            sourceReferenceIds:
              - ref:6226
              - ref:1570
            originalIdentificationMappings:
              - occurrenceId: occ:179640
                originalIdentifiedName: '"Mesocyon" temnodon'
                acceptedName: Mesocyon temnodon
                difference: null
              - occurrenceId: occ:180616
                originalIdentifiedName: '"Mesocyon" temnodon'
                acceptedName: Mesocyon temnodon
                difference: null
              - occurrenceId: occ:180628
                originalIdentifiedName: '"Mesocyon" temnodon'
                acceptedName: Mesocyon temnodon
                difference: null
              - occurrenceId: occ:180701
                originalIdentifiedName: '"Mesocyon" temnodon'
                acceptedName: Mesocyon temnodon
                difference: null
              - occurrenceId: occ:180724
                originalIdentifiedName: '"Mesocyon" temnodon'
                acceptedName: Mesocyon temnodon
                difference: null
              - occurrenceId: occ:180727
                originalIdentifiedName: '"Mesocyon" temnodon'
                acceptedName: Mesocyon temnodon
                difference: null
              - occurrenceId: occ:180842
                originalIdentifiedName: '"Mesocyon" temnodon'
                acceptedName: Mesocyon temnodon
                difference: null
              - occurrenceId: occ:180873
                originalIdentifiedName: '"Mesocyon" temnodon'
                acceptedName: Mesocyon temnodon
                difference: null
              - occurrenceId: occ:180912
                originalIdentifiedName: '"Mesocyon" temnodon'
                acceptedName: Mesocyon temnodon
                difference: null
              - occurrenceId: occ:180961
                originalIdentifiedName: '"Mesocyon" temnodon'
                acceptedName: Mesocyon temnodon
                difference: null
              - occurrenceId: occ:180963
                originalIdentifiedName: '"Mesocyon" temnodon'
                acceptedName: Mesocyon temnodon
                difference: null
              - occurrenceId: occ:181014
                originalIdentifiedName: '"Mesocyon" temnodon'
                acceptedName: Mesocyon temnodon
                difference: null
              - occurrenceId: occ:181146
                originalIdentifiedName: Pseudocynodictis temnodon n. sp.
                acceptedName: Mesocyon temnodon
                difference: recombined as
              - occurrenceId: occ:182274
                originalIdentifiedName: '"Mesocyon" temnodon'
                acceptedName: Mesocyon temnodon
                difference: null
              - occurrenceId: occ:182463
                originalIdentifiedName: '"Mesocyon" temnodon'
                acceptedName: Mesocyon temnodon
                difference: null
              - occurrenceId: occ:182470
                originalIdentifiedName: '"Mesocyon" temnodon'
                acceptedName: Mesocyon temnodon
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

# Mesocyon temnodon
