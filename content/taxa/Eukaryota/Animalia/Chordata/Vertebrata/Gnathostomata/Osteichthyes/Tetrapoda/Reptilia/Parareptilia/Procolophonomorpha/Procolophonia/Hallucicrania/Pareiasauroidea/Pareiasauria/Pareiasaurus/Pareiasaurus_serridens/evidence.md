---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Pareiasaurus serridens
    rank: species
    sourceDatasetId: null
    name:
      zh: Pareiasaurus serridens
      en: Pareiasaurus serridens
    reviewStatus: source-linked
    checkedAt: 2026-10-02
    sections:
      - topic: overview
        sourceIds:
          - pbdbOtherReptiliaTaxonomy20261002
          - pbdbOtherReptiliaOccurrences20261002
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
          - pbdbOtherReptiliaOccurrences20261002
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
          - pbdbOtherReptiliaOccurrences20261002
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
          - pbdbOtherReptiliaOccurrences20261002
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
          - pbdbOtherReptiliaOccurrences20261002
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
          sourceKey: pbdbOtherReptiliaTaxonomy20261002
          usage:
            title: PBDB accepted record — Pareiasaurus serridens
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=55018&show=parent,app,attr
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
          sourceKey: pbdbOtherReptiliaOccurrences20261002
          usage:
            locator: 2026-10-02 occurrence response accepted_no txn:55018; original response record indices retained in data/sources/other-reptilia-occurrence-guides-2026-10-02-records.jsonl.gz.
            accessedAt: 2026-10-02
            responseSha256: 31ac9f819956f8986cbf6f444ae951461fd801de4d65737e8337007dc854b31f
            pbdbTaxonId: txn:55018
            selectedOccurrenceIds:
              - occ:1285186
              - occ:1304554
              - occ:1314179
              - occ:1314298
              - occ:1317316
              - occ:1320596
              - occ:1328819
              - occ:1332746
              - occ:1337217
              - occ:1337453
              - occ:1338339
              - occ:1338350
              - occ:1338406
              - occ:1358998
              - occ:1428528
            selectedCollectionIds:
              - col:89859
              - col:22661
              - col:176336
              - col:80174
              - col:171377
              - col:177601
              - col:176248
              - col:171384
              - col:80826
              - col:180462
              - col:80176
              - col:177563
              - col:114905
              - col:184600
              - col:198676
            sourceReferenceIds:
              - ref:27216
              - ref:27202
              - ref:58263
              - ref:67683
            originalIdentificationMappings:
              - occurrenceId: occ:1320596
                originalIdentifiedName: Anthodon nesemanni n. sp.
                acceptedName: Pareiasaurus serridens
                difference: null
              - occurrenceId: occ:1328819
                originalIdentifiedName: Brachypareia rogersi
                acceptedName: Pareiasaurus serridens
                difference: null
              - occurrenceId: occ:1332746
                originalIdentifiedName: Pareiasaurus rubidgei n. sp.
                acceptedName: Pareiasaurus serridens
                difference: null
              - occurrenceId: occ:1358998
                originalIdentifiedName: Propappus omocratus
                acceptedName: Pareiasaurus serridens
                difference: null
              - occurrenceId: occ:1428528
                originalIdentifiedName: Brachypareia rogersi
                acceptedName: Pareiasaurus serridens
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

# Pareiasaurus serridens
