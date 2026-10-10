---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Titanosuchus ferox
    rank: species
    sourceDatasetId: null
    name:
      zh: Titanosuchus ferox
      en: Titanosuchus ferox
    checkedAt: 2026-10-02
    sections:
      - topic: overview
        sourceIds:
          - pbdbOtherSynapsidaTaxonomy20261002
          - pbdbOtherSynapsidaOccurrences20261002
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
          - pbdbOtherSynapsidaOccurrences20261002
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
          - pbdbOtherSynapsidaOccurrences20261002
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
          - pbdbOtherSynapsidaOccurrences20261002
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
          - pbdbOtherSynapsidaOccurrences20261002
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
        - referenceId: ref-675a7fe7-4458-476e-a876-7fe5a3a30c4a
          metadataVariant: 0
          sourceKey: pbdbOtherSynapsidaTaxonomy20261002
          usage:
            title: PBDB accepted record — Titanosuchus ferox
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=56780&show=parent,app,attr
            locator: Fixed dated accepted species OID and current same-name accepted hierarchy; PBDB ancestry remains separate from COL.
          originalFields:
            - id
            - title
            - url
            - version
            - license
            - locator
        - referenceId: ref-675a7fe7-4458-476e-a876-7fe5a3a30c4a
          metadataVariant: 0
          sourceKey: pbdbOtherSynapsidaOccurrences20261002
          usage:
            locator: 2026-10-02 occurrence response accepted_no txn:56780; original response record indices retained in data/sources/other-synapsida-occurrence-guides-2026-10-02-records.jsonl.gz.
            accessedAt: 2026-10-02
            responseSha256: 31ac9f819956f8986cbf6f444ae951461fd801de4d65737e8337007dc854b31f
            pbdbTaxonId: txn:56780
            selectedOccurrenceIds:
              - occ:1317364
              - occ:1317938
              - occ:1328808
              - occ:1328820
              - occ:1340470
              - occ:1428088
              - occ:1428379
              - occ:1428472
              - occ:1428846
              - occ:1428849
              - occ:1428861
              - occ:1428942
            selectedCollectionIds:
              - col:89650
              - col:177007
              - col:176250
              - col:176248
              - col:86388
              - col:176247
              - col:93097
              - col:93096
              - col:198703
            sourceReferenceIds:
              - ref:27216
              - ref:67669
              - ref:67683
            originalIdentificationMappings:
              - occurrenceId: occ:1428088
                originalIdentifiedName: Scapanodon duplessisi
                acceptedName: Titanosuchus ferox
                difference: null
              - occurrenceId: occ:1428379
                originalIdentifiedName: Scapanodon duplessisi n. sp.
                acceptedName: Titanosuchus ferox
                difference: null
              - occurrenceId: occ:1428472
                originalIdentifiedName: Parascapanodon avifontis n. sp.
                acceptedName: Titanosuchus ferox
                difference: null
              - occurrenceId: occ:1428846
                originalIdentifiedName: Parascapanodon avifontis
                acceptedName: Titanosuchus ferox
                difference: null
              - occurrenceId: occ:1428861
                originalIdentifiedName: Parascapanodon avifontis
                acceptedName: Titanosuchus ferox
                difference: null
              - occurrenceId: occ:1428942
                originalIdentifiedName: Titanosuchus ferox n. sp.
                acceptedName: Titanosuchus ferox
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

# Titanosuchus ferox
