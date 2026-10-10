---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Rothianiscus robusta
    rank: species
    sourceDatasetId: null
    name:
      zh: Rothianiscus robusta
      en: Rothianiscus robusta
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
            title: PBDB accepted record — Rothianiscus robusta
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=120889&show=parent,app,attr
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
            locator: 2026-10-02 occurrence response accepted_no txn:120889; original response record indices retained in data/sources/other-reptilia-occurrence-guides-2026-10-02-records.jsonl.gz.
            accessedAt: 2026-10-02
            responseSha256: 31ac9f819956f8986cbf6f444ae951461fd801de4d65737e8337007dc854b31f
            pbdbTaxonId: txn:120889
            selectedOccurrenceIds:
              - occ:287287
              - occ:287715
              - occ:287747
              - occ:287764
              - occ:287827
              - occ:287904
              - occ:287929
              - occ:289331
              - occ:289337
            selectedCollectionIds:
              - col:27400
              - col:27475
              - col:27479
              - col:27480
              - col:27482
              - col:27485
              - col:27487
              - col:27573
              - col:27574
            sourceReferenceIds:
              - ref:4327
            originalIdentificationMappings:
              - occurrenceId: occ:287287
                originalIdentifiedName: Rothia robusta
                acceptedName: Rothianiscus robusta
                difference: recombined as
              - occurrenceId: occ:287715
                originalIdentifiedName: Rothia robusta n. sp.
                acceptedName: Rothianiscus robusta
                difference: recombined as
              - occurrenceId: occ:287747
                originalIdentifiedName: Rothia robusta
                acceptedName: Rothianiscus robusta
                difference: recombined as
              - occurrenceId: occ:287764
                originalIdentifiedName: Rothia robusta
                acceptedName: Rothianiscus robusta
                difference: recombined as
              - occurrenceId: occ:287827
                originalIdentifiedName: Rothia robusta
                acceptedName: Rothianiscus robusta
                difference: recombined as
              - occurrenceId: occ:287904
                originalIdentifiedName: Rothia robusta
                acceptedName: Rothianiscus robusta
                difference: recombined as
              - occurrenceId: occ:287929
                originalIdentifiedName: Rothia robusta
                acceptedName: Rothianiscus robusta
                difference: recombined as
              - occurrenceId: occ:289331
                originalIdentifiedName: Rothia robusta
                acceptedName: Rothianiscus robusta
                difference: recombined as
              - occurrenceId: occ:289337
                originalIdentifiedName: Rothia robusta
                acceptedName: Rothianiscus robusta
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

# Rothianiscus robusta
