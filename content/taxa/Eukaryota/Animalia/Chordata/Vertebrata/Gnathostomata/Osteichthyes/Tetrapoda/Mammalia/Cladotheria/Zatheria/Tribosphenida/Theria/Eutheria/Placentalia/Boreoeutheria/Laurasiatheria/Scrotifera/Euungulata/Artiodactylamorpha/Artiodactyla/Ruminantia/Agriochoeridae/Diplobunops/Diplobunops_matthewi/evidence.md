---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Diplobunops matthewi
    rank: species
    sourceDatasetId: null
    name:
      zh: Diplobunops matthewi
      en: Diplobunops matthewi
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
            title: PBDB accepted record — Diplobunops matthewi
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=45807&show=parent,app,attr
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
            locator: 2026-10-02 occurrence response accepted_no txn:45807; original response record indices retained in data/sources/mammalia-occurrence-guides-2026-10-02-records.jsonl.gz.
            accessedAt: 2026-10-02
            responseSha256: 368dafda8e7422b86d7992dc15a10defe699a9db146057d35e01a82c1c54bfa2
            pbdbTaxonId: txn:45807
            selectedOccurrenceIds:
              - occ:175499
              - occ:175596
              - occ:175836
              - occ:175979
              - occ:176060
              - occ:177436
              - occ:177826
              - occ:1629948
              - occ:1629949
              - occ:1629960
              - occ:2069822
              - occ:2069823
            selectedCollectionIds:
              - col:16513
              - col:16517
              - col:16584
              - col:16594
              - col:16607
              - col:16826
              - col:16884
              - col:230859
              - col:230860
              - col:230862
              - col:16657
            sourceReferenceIds:
              - ref:1093
              - ref:3359
              - ref:6294
              - ref:2761
              - ref:85377
              - ref:95678
            originalIdentificationMappings:
              - occurrenceId: occ:175499
                originalIdentifiedName: Agriochoerus matthewi
                acceptedName: Diplobunops matthewi
                difference: recombined as
              - occurrenceId: occ:175596
                originalIdentifiedName: Agriochoerus matthewi
                acceptedName: Diplobunops matthewi
                difference: recombined as
              - occurrenceId: occ:175836
                originalIdentifiedName: Protoreodon pearcei
                acceptedName: Diplobunops matthewi
                difference: null
              - occurrenceId: occ:175979
                originalIdentifiedName: Agriochoerus matthewi
                acceptedName: Diplobunops matthewi
                difference: recombined as
              - occurrenceId: occ:176060
                originalIdentifiedName: Agriochoerus matthewi
                acceptedName: Diplobunops matthewi
                difference: recombined as
              - occurrenceId: occ:177436
                originalIdentifiedName: Agriochoerus matthewi
                acceptedName: Diplobunops matthewi
                difference: recombined as
              - occurrenceId: occ:177826
                originalIdentifiedName: Agriochoerus matthewi
                acceptedName: Diplobunops matthewi
                difference: recombined as
              - occurrenceId: occ:2069823
                originalIdentifiedName: Diplobunops ultimus
                acceptedName: Diplobunops matthewi
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

# Diplobunops matthewi
