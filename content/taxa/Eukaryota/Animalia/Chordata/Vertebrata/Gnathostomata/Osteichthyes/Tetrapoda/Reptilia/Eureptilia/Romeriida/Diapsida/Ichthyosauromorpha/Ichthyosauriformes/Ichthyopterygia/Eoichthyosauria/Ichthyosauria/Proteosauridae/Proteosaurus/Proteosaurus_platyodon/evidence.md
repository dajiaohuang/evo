---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Proteosaurus platyodon
    rank: species
    sourceDatasetId: null
    name:
      zh: Proteosaurus platyodon
      en: Proteosaurus platyodon
    checkedAt: 2026-10-02
    sections:
      - topic: overview
        sourceIds:
          - pbdbIchthyosauriformesTaxonomy20261002
          - pbdbIchthyosauriformesOccurrences20261002
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
          - pbdbIchthyosauriformesOccurrences20261002
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
          - pbdbIchthyosauriformesOccurrences20261002
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
          - pbdbIchthyosauriformesOccurrences20261002
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
          - pbdbIchthyosauriformesOccurrences20261002
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
        - referenceId: ref-2dd404cd-b72b-4fc1-8ad0-0dc4d9df94e9
          metadataVariant: 0
          sourceKey: pbdbIchthyosauriformesTaxonomy20261002
          usage:
            title: PBDB accepted record — Proteosaurus platyodon
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=171540&show=parent,app,attr
            locator: Fixed dated accepted species OID and current same-name accepted hierarchy; PBDB ancestry remains separate from COL.
          originalFields:
            - id
            - title
            - url
            - version
            - license
            - locator
        - referenceId: ref-2dd404cd-b72b-4fc1-8ad0-0dc4d9df94e9
          metadataVariant: 0
          sourceKey: pbdbIchthyosauriformesOccurrences20261002
          usage:
            locator: 2026-10-02 occurrence response accepted_no txn:171540; original response record indices retained in data/sources/ichthyosauriformes-occurrence-guides-2026-10-02-records.jsonl.gz.
            accessedAt: 2026-10-02
            responseSha256: f47f280ca897054f5bf00b8a99d8aa7b7eee1e3225ec65be651afc93d19ba812
            pbdbTaxonId: txn:171540
            selectedOccurrenceIds:
              - occ:1162058
              - occ:1190870
              - occ:1313354
              - occ:1606964
              - occ:1606980
              - occ:1606981
            selectedCollectionIds:
              - col:149321
              - col:153782
              - col:176256
              - col:140334
              - col:227266
              - col:227267
            sourceReferenceIds:
              - ref:32796
              - ref:49835
              - ref:29875
            originalIdentificationMappings:
              - occurrenceId: occ:1162058
                originalIdentifiedName: Ichthyosaurus platyodon
                acceptedName: Proteosaurus platyodon
                difference: recombined as
              - occurrenceId: occ:1190870
                originalIdentifiedName: Ichthyosaurus chiroligostinus n. sp.
                acceptedName: Proteosaurus platyodon
                difference: null
              - occurrenceId: occ:1313354
                originalIdentifiedName: Ichthyosaurus platyodon
                acceptedName: Proteosaurus platyodon
                difference: recombined as
              - occurrenceId: occ:1606964
                originalIdentifiedName: Ichthyosaurus platyodon
                acceptedName: Proteosaurus platyodon
                difference: recombined as
              - occurrenceId: occ:1606980
                originalIdentifiedName: Ichthyosaurus platyodon
                acceptedName: Proteosaurus platyodon
                difference: recombined as
              - occurrenceId: occ:1606981
                originalIdentifiedName: Ichthyosaurus platyodon
                acceptedName: Proteosaurus platyodon
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

# Proteosaurus platyodon
