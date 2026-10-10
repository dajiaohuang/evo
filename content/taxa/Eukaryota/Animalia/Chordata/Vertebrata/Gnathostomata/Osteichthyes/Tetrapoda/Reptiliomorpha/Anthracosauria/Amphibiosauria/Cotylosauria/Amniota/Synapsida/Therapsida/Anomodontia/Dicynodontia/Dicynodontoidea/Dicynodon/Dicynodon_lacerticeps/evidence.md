---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Dicynodon lacerticeps
    rank: species
    sourceDatasetId: null
    name:
      zh: Dicynodon lacerticeps
      en: Dicynodon lacerticeps
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
            title: PBDB accepted record — Dicynodon lacerticeps
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=91716&show=parent,app,attr
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
            locator: 2026-10-02 occurrence response accepted_no txn:91716; original response record indices retained in data/sources/other-synapsida-occurrence-guides-2026-10-02-records.jsonl.gz.
            accessedAt: 2026-10-02
            responseSha256: 31ac9f819956f8986cbf6f444ae951461fd801de4d65737e8337007dc854b31f
            pbdbTaxonId: txn:91716
            selectedOccurrenceIds:
              - occ:1304575
              - occ:1309909
              - occ:1314161
              - occ:1314181
              - occ:1316521
              - occ:1317948
              - occ:1317991
              - occ:1323216
              - occ:1325668
            selectedCollectionIds:
              - col:174622
              - col:174623
              - col:176331
              - col:176336
              - col:176667
              - col:175553
              - col:177020
              - col:174747
              - col:178127
            sourceReferenceIds:
              - ref:57014
              - ref:57572
              - ref:27202
              - ref:27216
              - ref:58262
              - ref:58447
              - ref:57253
              - ref:29040
            originalIdentificationMappings:
              - occurrenceId: occ:1304575
                originalIdentifiedName: Dicynodon aetorhamphus n. sp.
                acceptedName: Dicynodon lacerticeps
                difference: null
              - occurrenceId: occ:1309909
                originalIdentifiedName: Dicynodon cadlei n. sp.
                acceptedName: Dicynodon lacerticeps
                difference: null
              - occurrenceId: occ:1314161
                originalIdentifiedName: Dicynodon trigonocephalus n. sp.
                acceptedName: Dicynodon lacerticeps
                difference: null
              - occurrenceId: occ:1314181
                originalIdentifiedName: Dicynodon kitchingi
                acceptedName: Dicynodon lacerticeps
                difference: null
              - occurrenceId: occ:1316521
                originalIdentifiedName: Dicynodon dutoiti n. sp.
                acceptedName: Dicynodon lacerticeps
                difference: null
              - occurrenceId: occ:1317948
                originalIdentifiedName: Dicynodon kitchingi n. sp.
                acceptedName: Dicynodon lacerticeps
                difference: null
              - occurrenceId: occ:1317991
                originalIdentifiedName: Dicynodon lacerticeps n. sp.
                acceptedName: Dicynodon lacerticeps
                difference: null
              - occurrenceId: occ:1323216
                originalIdentifiedName: Dicynodon pardiceps n. sp.
                acceptedName: Dicynodon lacerticeps
                difference: null
              - occurrenceId: occ:1325668
                originalIdentifiedName: Dicynodon taylori n. sp.
                acceptedName: Dicynodon lacerticeps
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

# Dicynodon lacerticeps
