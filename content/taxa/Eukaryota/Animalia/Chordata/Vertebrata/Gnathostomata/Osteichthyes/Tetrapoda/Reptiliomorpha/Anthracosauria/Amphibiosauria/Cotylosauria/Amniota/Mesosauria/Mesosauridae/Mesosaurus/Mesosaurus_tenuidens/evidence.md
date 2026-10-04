---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Mesosaurus tenuidens
    rank: species
    sourceDatasetId: null
    name:
      zh: Mesosaurus tenuidens
      en: Mesosaurus tenuidens
    reviewStatus: source-linked
    checkedAt: 2026-10-02
    sections:
      - topic: overview
        sourceIds:
          - pbdbResidualAmniotaTaxonomy20261002
          - pbdbResidualAmniotaOccurrences20261002
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
          - pbdbResidualAmniotaOccurrences20261002
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
          - pbdbResidualAmniotaOccurrences20261002
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
          - pbdbResidualAmniotaOccurrences20261002
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
          - pbdbResidualAmniotaOccurrences20261002
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
          sourceKey: pbdbResidualAmniotaTaxonomy20261002
          usage:
            title: PBDB accepted record — Mesosaurus tenuidens
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=149291&show=parent,app,attr
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
          sourceKey: pbdbResidualAmniotaOccurrences20261002
          usage:
            locator: 2026-10-02 occurrence response accepted_no txn:149291; original response record indices retained in data/sources/amniota-residual-occurrence-guides-2026-10-02-records.jsonl.gz.
            accessedAt: 2026-10-02
            responseSha256: 31ac9f819956f8986cbf6f444ae951461fd801de4d65737e8337007dc854b31f
            pbdbTaxonId: txn:149291
            selectedOccurrenceIds:
              - occ:297328
              - occ:297329
              - occ:297330
              - occ:297331
              - occ:814519
              - occ:815040
              - occ:820351
              - occ:820352
              - occ:820480
              - occ:820897
              - occ:820921
              - occ:820922
              - occ:821005
              - occ:821028
              - occ:821180
              - occ:821444
              - occ:823059
              - occ:823729
              - occ:823897
              - occ:824823
              - occ:824826
            selectedCollectionIds:
              - col:28468
              - col:28469
              - col:28470
              - col:28471
              - col:89799
              - col:89839
              - col:90190
              - col:90191
              - col:90215
              - col:90311
              - col:90323
              - col:90341
              - col:90344
              - col:90193
              - col:90423
              - col:90573
              - col:90345
              - col:90755
              - col:90863
              - col:90865
            sourceReferenceIds:
              - ref:7853
              - ref:30071
              - ref:30078
              - ref:30263
              - ref:30267
              - ref:30283
              - ref:30327
              - ref:30341
              - ref:30355
              - ref:30368
              - ref:30472
              - ref:18841
            originalIdentificationMappings:
              - occurrenceId: occ:814519
                originalIdentifiedName: Ditrochosaurus capensis n. gen. n. sp.
                acceptedName: Mesosaurus tenuidens
                difference: null
              - occurrenceId: occ:820480
                originalIdentifiedName: Mesosaurus brasiliensis
                acceptedName: Mesosaurus tenuidens
                difference: null
              - occurrenceId: occ:820922
                originalIdentifiedName: Mesosaurus brasiliensis
                acceptedName: Mesosaurus tenuidens
                difference: null
              - occurrenceId: occ:821005
                originalIdentifiedName: Mesosaurus brasiliensis n. sp.
                acceptedName: Mesosaurus tenuidens
                difference: null
              - occurrenceId: occ:823059
                originalIdentifiedName: Mesosaurus brasiliensis
                acceptedName: Mesosaurus tenuidens
                difference: null
              - occurrenceId: occ:824823
                originalIdentifiedName: Mesosaurus brasiliensis
                acceptedName: Mesosaurus tenuidens
                difference: null
              - occurrenceId: occ:824826
                originalIdentifiedName: Mesosaurus brasiliensis
                acceptedName: Mesosaurus tenuidens
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

# Mesosaurus tenuidens
